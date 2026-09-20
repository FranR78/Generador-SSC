#!/usr/bin/env python3
"""Valida los casos de avería y los deja listos para el portal.

    python3 casos/construir.py            # valida y genera casos/casos.json
    python3 casos/construir.py --solo-ver # valida y no escribe nada

Un caso mal escrito no se detecta al escribirlo: se detecta cuando un alumno
mide y el polímetro dice algo imposible, delante de toda la clase. Por eso
aquí se comprueba todo lo que se puede comprobar sin ejecutar nada:

  - que los tramos unan nodos que existen
  - que haya camino de '+' a '-' (si no, el circuito no es un circuito)
  - que la avería apunte a un tramo real
  - que todo valor lleve su etiqueta de origen y su rango sea coherente
  - que las comprobaciones en ohmios no se hagan con el circuito alimentado
  - que las notas que declara el caso existan de verdad

El JSON que sale tiene la misma forma que devolvía cargarCaso() desde la Hoja,
así que el simulador no distingue de dónde vienen los datos.
"""

import argparse
import json
import sys
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent
NOTAS = RAIZ.parent / "notas-tecnicas" / "web" / "notas.json"
ORIGENES = {"Medido", "Teórico OEM", "Inferido"}


class Error(Exception):
    pass


def rango(v, donde):
    """Un número suelto o un rango con origen. Devuelve lo que espera el motor."""
    if isinstance(v, (int, float)):
        return float(v)
    if not isinstance(v, dict):
        raise Error(f"{donde}: se esperaba un número o un rango, no {type(v).__name__}")
    for campo in ("min", "max"):
        if campo not in v:
            raise Error(f"{donde}: al rango le falta '{campo}'")
    mn, mx = float(v["min"]), float(v["max"])
    if mn > mx:
        raise Error(f"{donde}: el mínimo ({mn}) es mayor que el máximo ({mx})")
    if mn < 0:
        raise Error(f"{donde}: una resistencia no puede ser negativa")
    origen = str(v.get("origen", "")).strip()
    if origen not in ORIGENES:
        raise Error(f"{donde}: origen '{origen}' no vale. Tiene que ser uno de: "
                    + ", ".join(sorted(ORIGENES)))
    return {"min": mn, "max": mx, "unidad": str(v.get("unidad", "Ω")), "origen": origen}


def alcanzables(nodos, tramos, desde):
    """Qué nodos se alcanzan desde uno, por tramos que conduzcan."""
    vistos, cola = {desde}, [desde]
    while cola:
        n = cola.pop()
        for t in tramos:
            for a, b in ((t["de"], t["a"]), (t["a"], t["de"])):
                if a == n and b not in vistos:
                    vistos.add(b)
                    cola.append(b)
    return vistos


def validar(doc, ruta, ids_notas):
    fallos = []

    def pega(msg):
        fallos.append(msg)

    c = doc.get("caso") or {}
    for campo in ("id", "titulo", "sintoma"):
        if not str(c.get(campo, "")).strip():
            pega(f"caso.{campo} está vacío")
    if " " in str(c.get("id", "")):
        pega("caso.id no puede llevar espacios")

    v = doc.get("vehiculo") or {}
    for campo in ("marca", "modelo", "sistema"):
        if not str(v.get(campo, "")).strip():
            pega(f"vehiculo.{campo} está vacío")

    # ---- nodos ----
    nodos = doc.get("nodos") or {}
    for especial in ("+", "-"):
        if especial not in nodos:
            pega(f"falta el nodo '{especial}' (batería y masa son obligatorios)")
    for nid, n in nodos.items():
        if not str((n or {}).get("etiqueta", "")).strip():
            pega(f"el nodo '{nid}' no tiene etiqueta: el alumno no sabría dónde pinchar")

    # ---- tramos ----
    tramos = []
    for i, t in enumerate(doc.get("tramos") or [], 1):
        donde = f"tramo {i}"
        de, a = str(t.get("desde", "")), str(t.get("hasta", ""))
        if de not in nodos:
            pega(f"{donde}: '{de}' no está en nodos")
        if a not in nodos:
            pega(f"{donde}: '{a}' no está en nodos")
        if de == a:
            pega(f"{donde}: va de '{de}' a sí mismo")
        try:
            r = rango(t.get("r", 0.1), donde)
        except Error as e:
            pega(str(e))
            r = 0.1
        if isinstance(r, dict) and not t.get("componente"):
            pega(f"{donde}: tiene rango de resistencia pero no dice qué componente es. "
                 "Un cable no tiene rango; una bobina sí.")
        o = {"de": de, "a": a, "r": r}
        if t.get("componente"):
            o["componente"] = str(t["componente"])
        if t.get("cable"):
            o["cable"] = {"sec": t["cable"].get("seccion"),
                          "color": str(t["cable"].get("color", ""))}
        if str(t.get("por_conector", "")).strip():
            o["porConector"] = str(t["por_conector"]).strip()
        tramos.append(o)

    if not tramos:
        pega("el caso no tiene ningún tramo: no hay circuito")
    elif "+" in nodos and "-" in nodos:
        vistos = alcanzables(nodos, tramos, "+")
        if "-" not in vistos:
            pega("no hay camino de '+' a '-': el circuito está abierto de origen "
                 "y todas las medidas saldrían iguales")
        sueltos = set(nodos) - vistos
        if sueltos:
            pega("nodos que no conectan con nada: " + ", ".join(sorted(sueltos)))

    # ---- avería ----
    av = doc.get("averia") or {}
    tipo = str(av.get("tipo", "ninguna")).strip()
    if tipo not in ("abierto", "sin_mando", "ninguna"):
        pega(f"averia.tipo '{tipo}' no vale (abierto, sin_mando o ninguna)")
    if tipo == "abierto":
        obj = str(av.get("objetivo", ""))
        if "|" not in obj:
            pega("una avería 'abierto' necesita objetivo con el formato 'desde|hasta'")
        else:
            d, h = obj.split("|", 1)
            if not any((t["de"], t["a"]) in ((d, h), (h, d)) for t in tramos):
                pega(f"la avería apunta al tramo '{d} → {h}', que no existe")

    # ---- comprobaciones (la ficha) ----
    for i, k in enumerate(doc.get("comprobaciones") or [], 1):
        donde = f"comprobación {i}"
        mag = str(k.get("magnitud", "")).strip()
        if mag not in ("ohmios", "tension", "continuidad"):
            pega(f"{donde}: magnitud '{mag}' no vale")
        entre = k.get("entre") or []
        if len(entre) != 2:
            pega(f"{donde}: 'entre' tiene que llevar dos nodos")
        else:
            for x in entre:
                if str(x) not in nodos:
                    pega(f"{donde}: '{x}' no está en nodos")
        # La regla de su ficha de comprobación, hecha código.
        if mag in ("ohmios", "continuidad"):
            if str(k.get("contacto", "")).strip() != "quitado":
                pega(f"{donde}: medir {mag} exige contacto: quitado. Con el circuito "
                     "alimentado el valor no significa nada y se puede dañar el aparato.")
            if str(k.get("conector", "")).strip() != "desembornado":
                pega(f"{donde}: medir {mag} exige conector: desembornado, o se mide "
                     "el resto del circuito en paralelo.")
        if k.get("esperado") is not None:
            try:
                rango(k["esperado"], f"{donde}.esperado")
            except Error as e:
                pega(str(e))

    # ---- notas declaradas ----
    for nid in (c.get("notas") or []):
        if ids_notas and str(nid) not in ids_notas:
            pega(f"el caso declara la nota '{nid}', que no existe en notas.json")

    if fallos:
        raise Error(f"{ruta.name}:\n  - " + "\n  - ".join(fallos))

    # ---- salida, con la forma que ya espera el simulador ----
    averias = {"ninguna": {"et": "Sin avería", "efecto": None}}
    if tipo == "abierto":
        obj = str(av["objetivo"])
        averias["caso"] = {"et": "Circuito abierto en " + obj.replace("|", " → "),
                           "efecto": {"tramo": obj, "r": None}}   # None = infinito en JSON
    elif tipo == "sin_mando":
        averias["caso"] = {"et": "La unidad de control no da mando",
                           "efecto": {"sinMando": True}}

    return {
        "caso": {"id": str(c["id"]), "titulo": str(c["titulo"]), "sintoma": str(c["sintoma"]),
                 "activo": str(c.get("activo", "sí")).strip().lower() in ("sí", "si", "true", "1"),
                 "notas": [str(x) for x in (c.get("notas") or [])],
                 "averiaActiva": "caso" if "caso" in averias else "ninguna"},
        "VEHICULO": {"marca": str(v["marca"]), "modelo": str(v["modelo"]),
                     "sistema": str(v["sistema"]), "esquema": str(v.get("esquema_ref", ""))},
        "NODOS": {k: {"et": str(n.get("etiqueta", "")), "desc": str(n.get("descripcion", "")),
                      "lado": str(n.get("lado", ""))} for k, n in nodos.items()},
        "TRAMOS": tramos,
        "AVERIAS": averias,
        "ALIMENTACION": rango(v.get("tension") or {"min": 12, "max": 14.5, "origen": "Inferido",
                                                   "unidad": "V"}, "vehiculo.tension"),
        "COMPROBACIONES": doc.get("comprobaciones") or [],
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--solo-ver", action="store_true")
    args = ap.parse_args()

    ids_notas = set()
    if NOTAS.exists():
        ids_notas = {n["id"] for n in json.loads(NOTAS.read_text(encoding="utf-8"))["notas"]
                     if n.get("id")}
    else:
        print("aviso: no encuentro notas.json, no se comprueban las notas declaradas")

    casos, errores = [], []
    for ruta in sorted(RAIZ.glob("*.yml")):
        if ruta.name == "PLANTILLA.yml":
            continue
        try:
            doc = yaml.safe_load(ruta.read_text(encoding="utf-8")) or {}
            casos.append(validar(doc, ruta, ids_notas))
            print(f"  OK    {ruta.name}")
        except Error as e:
            errores.append(str(e))
            print(f"  FALLA {ruta.name}")
        except yaml.YAMLError as e:
            errores.append(f"{ruta.name}: no se puede leer el YAML: {e}")
            print(f"  FALLA {ruta.name}")

    if errores:
        print("\n" + "\n\n".join(errores), file=sys.stderr)
        print(f"\n{len(errores)} caso(s) con problemas. No se genera nada.", file=sys.stderr)
        return 1

    vistos = {}
    for c in casos:
        cid = c["caso"]["id"]
        if cid in vistos:
            print(f"\nDos casos con el id '{cid}'.", file=sys.stderr)
            return 1
        vistos[cid] = True

    activos = [c for c in casos if c["caso"]["activo"]]
    print(f"\n{len(casos)} casos, {len(activos)} activos.")

    if args.solo_ver:
        print("Era una comprobación: no se ha escrito nada.")
        return 0
    if not casos:
        print("No hay ningún caso todavía. Copia PLANTILLA.yml para empezar.")
        return 0

    destino = RAIZ / "casos.json"
    destino.write_text(json.dumps({"casos": casos}, ensure_ascii=False, indent=1),
                       encoding="utf-8")
    print(f"Generado casos/casos.json ({destino.stat().st_size/1024:.0f} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
