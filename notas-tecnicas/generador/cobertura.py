#!/usr/bin/env python3
"""Qué criterios de evaluación cubre el corpus y cuáles no.

    python3 generador/cobertura.py ssc-clima

Cruza los apartados que traen las notas de esa unidad con el mapa
apartado → criterios (comunes del módulo + propios de la unidad). No lee ni
una nota entera: le basta el índice que genera construir.py.

Sirve para dos cosas: ver qué falta por documentar, y poder enseñar qué cubre
la plataforma sin contarlo a mano.
"""

import argparse
import json
import sys
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent


def leer(ruta):
    if not ruta.exists():
        sys.exit(f"No existe {ruta.relative_to(RAIZ)}")
    return yaml.safe_load(ruta.read_text(encoding="utf-8")) or {}


def mapa_apartados(mod, uni):
    """{nombre del apartado: [criterios]}, comunes + propios de la unidad."""
    salida = {}
    propios = uni.get("apartados_propios") or {}
    if isinstance(propios, list):
        propios = {}
    for tipo in ("elemento", "proceso"):
        for a in (mod.get("apartados_comunes") or {}).get(tipo) or []:
            salida.setdefault(a["apartado"], set()).update(a.get("criterios") or [])
        for a in propios.get(tipo) or []:
            salida.setdefault(a["apartado"], set()).update(a.get("criterios") or [])
    return salida


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("unidad", help="p. ej. ssc-clima")
    args = ap.parse_args()

    uni = leer(RAIZ / "unidades" / f"{args.unidad}.yml")
    mod = leer(RAIZ / "curriculo" / f"{uni['modulo']}.yml")

    indice = RAIZ / "web" / "notas.json"
    if not indice.exists():
        sys.exit("Falta web/notas.json. Ejecuta antes generador/construir.py")
    notas = json.loads(indice.read_text(encoding="utf-8"))["notas"]
    notas = [n for n in notas
             if n.get("modulo") == uni["modulo"] and n.get("unidad") == uni["unidad"]]
    if not notas:
        sys.exit(f"Ninguna nota lleva modulo: {uni['modulo']} / unidad: {uni['unidad']}")

    mapa = mapa_apartados(mod, uni)
    cubiertos, sin_mapear = {}, {}
    for n in notas:
        for a in n["apartados"]:
            titulo = a["titulo"]
            if titulo not in mapa:
                sin_mapear[titulo] = sin_mapear.get(titulo, 0) + 1
                continue
            # Un apartado con "No documentado en fuentes" no cubre nada.
            if "no documentado en fuentes" in (a["texto"] or "").lower()[:120]:
                continue
            for c in mapa[titulo]:
                cubiertos.setdefault(c, set()).add(n["nt"])

    print(f"\nCobertura de {uni.get('nombre', args.unidad)} — {len(notas)} notas\n")
    total_c = total_ok = 0
    for num in sorted(mod.get("resultados") or {}):
        ra = mod["resultados"][num]
        criterios = ra.get("criterios") or {}
        if not criterios:
            continue
        hechos = [l for l in sorted(criterios) if f"{num}{l}" in cubiertos]
        total_c += len(criterios)
        total_ok += len(hechos)
        estado = "·" if not hechos else ("OK" if len(hechos) == len(criterios) else "  ")
        print(f"{estado} RA{num}  {len(hechos)}/{len(criterios)}  {ra['enunciado'][:62]}…")
        for letra in sorted(criterios):
            clave = f"{num}{letra}"
            cuantas = len(cubiertos.get(clave, ()))
            marca = f"{cuantas:3d} notas" if cuantas else "  sin cubrir"
            print(f"      {letra})  {marca}   {criterios[letra][:58]}")
        print()

    print(f"Total: {total_ok} de {total_c} criterios del módulo tocados por esta unidad.")
    print("Los que quedan a cero son de otras unidades o están sin documentar.")

    if sin_mapear:
        print("\nApartados que traen las notas y no están en el mapa:")
        for t, n in sorted(sin_mapear.items(), key=lambda x: -x[1]):
            print(f"  {n:3d} × {t}")
        print("  (si alguno debe contar para un criterio, añádelo a curriculo/"
              f"{uni['modulo']}.yml o a unidades/{args.unidad}.yml)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
