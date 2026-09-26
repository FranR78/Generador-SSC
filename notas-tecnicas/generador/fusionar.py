#!/usr/bin/env python3
"""Fusiona con Gemini las fichas de fuente de una entidad en UNA nota maestra.

    python3 generador/fusionar.py evaporador embrague-compresor
    python3 generador/fusionar.py --todas --max 20

Lo lanza el workflow «Fusionar notas» (Actions) con la key del profesor en el
secreto GEMINI_API_KEY. Reglas (docs/FUSION.md):

  · Gemini solo recibe las fichas de fuente; no puede añadir nada suyo.
  · Cada apartado lleva su nivel: básico, intermedio o avanzado.
  · Las cifras que no cuadran entre fuentes van a «Discrepancias».
  · auditar_fusion.py (sin IA) comprueba que no se ha perdido ningún valor.
    Si falta alguno, se le devuelve la lista a Gemini UNA vez. Si sigue
    faltando, la maestra se queda en maestras/pendientes/ con la lista y no se
    publica.
  · Una maestra «revisada» no se sobrescribe: si sus fuentes cambian, la nueva
    va a maestras/pendientes/ como propuesta.
"""

import argparse
import hashlib
import json
import os
import re
import sys
import time
from collections import defaultdict
from pathlib import Path
from typing import List, Literal

import yaml
from pydantic import BaseModel

sys.path.insert(0, str(Path(__file__).resolve().parent))
import auditar_fusion as af  # noqa: E402

RAIZ = Path(__file__).resolve().parent.parent
DIR_NOTAS = RAIZ / "notas"
DIR_MAESTRAS = RAIZ / "maestras"
DIR_PENDIENTES = DIR_MAESTRAS / "pendientes"
MODELO = os.environ.get("FUSION_MODELO", "").strip() or "auto"   # «auto»: el Flash más nuevo que vea la key
INTENTOS = 6   # rondas por entidad; en cada una se prueban todos los Flash
MODELOS = []   # alternativas si MODELO está saturado (las rellena main)

APARTADOS = {
    "componente": ["Misión", "Tipos y características", "Principio de funcionamiento",
                   "Valores de trabajo", "Anomalías frecuentes", "Comportamiento en avería",
                   "Cómo comprobarlo", "Mantenimiento"],
    "fluido": ["Designación y norma", "Propiedades", "Dónde se usa y cantidades",
               "Compatibilidades y mezclas prohibidas", "Identificación",
               "Manipulación, almacenamiento y residuos", "Riesgos y normativa"],
    "fundamento": ["Objeto", "Fundamento", "Desarrollo", "Valores de referencia",
                   "Errores de concepto frecuentes"],
    "procedimiento": ["Objeto y alcance", "Condiciones previas", "Equipo y material", "Pasos",
                      "Valores de referencia", "Verificación final", "Seguridad y normativa"],
    "diagnostico": ["Síntoma", "Causas posibles", "Cómo separar las causas",
                    "Valores de referencia", "Verificación tras la reparación"],
}

SISTEMA = """Eres profesor de FP de Electromecánica de Vehículos y montas un curso de climatización del
automóvil, de básico a avanzado, para alumnado de grado medio. Recibes varias FICHAS DE FUENTE que hablan
de la MISMA cosa, sacadas de manuales distintos. Tu trabajo es escribir UNA nota maestra que las sustituya.

Reglas de contenido:
- Usa SOLO lo que dicen las fichas. Nada de lo que sepas tú.
- No pierdas ningún dato: todo valor numérico de cualquier ficha tiene que aparecer, con su unidad y
  sus condiciones (a qué temperatura, régimen, presión…).
- Lo que varias fichas dicen igual, dilo UNA vez, con la redacción más clara, y cita todas las que lo dicen.
- Cita cada dato así: (fuente, pág. N). Como «fuente» usa el nombre corto que viene entre corchetes en
  cada ficha.
- Si dos fichas dan cifras distintas para lo mismo, no elijas: ponlo en «discrepancias», con cada valor y
  su fuente, y si una es claramente una errata, dilo.
- Si hay variantes (tipos de compresor, versiones de un sensor…), van dentro de «Tipos y
  características» como subapartados con ### y el nombre de la variante.
- Datos antiguos (R12, sistemas retirados) se conservan como contexto, marcados como tal.

Reglas de forma (se lee en el móvil):
- Frases cortas, directas, español de España. Párrafos de 2-4 líneas como mucho.
- Listas con «- » cuando hay enumeraciones; pasos numerados cuando hay orden; tablas Markdown cuando
  hay valores comparables.
- Negrita solo para el dato clave de cada párrafo. Nada de LaTeX: escribe CO2, 350 ºC, 1,8-2,2 bar.
- Un apartado del que ninguna ficha dice nada: no lo incluyas.

Nivel de cada apartado (para el itinerario del curso):
- basico: qué es, para qué sirve, dónde va, identificarlo. Ej.: la misión de un filtro.
- intermedio: cómo funciona y por qué; valores de trabajo; fundamentos físicos. Ej.: el principio de
  funcionamiento, el diagrama de Mollier.
- avanzado: diagnóstico, averías, interpretación de medidas, casos límite. Ej.: las averías del reloj
  (presostato/transmisor), separar dos causas que dan la misma lectura.

Imágenes: de la lista IMÁGENES DISPONIBLES elige las que hagan falta, sin repetir la misma imagen aunque
la pidan dos fichas, y copia su referencia exacta [NTxx_yy]. Además, COLÓCALA en el texto: dentro del
apartado que explica lo que muestra, justo después del párrafo o la lista a la que acompaña, en una
línea aparte que contenga solo la referencia, por ejemplo:
...la presión sube hasta 16 bar (pág. 20).
[NT231_02]
Cada referencia aparece una sola vez en el texto y también en la lista «imagenes».
"""


class Apartado(BaseModel):
    titulo: str
    nivel: Literal["basico", "intermedio", "avanzado"]
    texto: str


class Imagen(BaseModel):
    ref: str
    descripcion: str


class Maestra(BaseModel):
    titulo: str
    codigo: str
    apartados: List[Apartado]
    discrepancias: List[str]
    imagenes: List[Imagen]


# ─────────────────────────── lectura de fichas ───────────────────────────

def alias():
    """{otro: tuyo} de todas las unidades: lo mismo que usa construir.py."""
    salida = {}
    for f in (RAIZ / "unidades").glob("*.yml"):
        u = yaml.safe_load(f.read_text(encoding="utf-8")) or {}
        for a, b in (u.get("alias") or {}).items():
            salida[af_slug(a)] = af_slug(b)
    return salida


def af_slug(t):
    import unicodedata
    t = unicodedata.normalize("NFKD", str(t))
    t = "".join(c for c in t if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")


def leer_fichas():
    """{clave canónica: [ficha]} con ficha = {nt, meta, cuerpo, ruta}."""
    al = alias()
    por = defaultdict(list)
    for ruta in sorted(DIR_NOTAS.glob("*.md")):
        meta, cuerpo = af.cuerpo(ruta)
        if not meta.get("clave") or not meta.get("nt"):
            continue
        k = af_slug(meta["clave"])
        vistas = set()
        while k in al and k not in vistas:
            vistas.add(k)
            k = al[k]
        por[k].append({"nt": int(meta["nt"]), "meta": meta, "cuerpo": cuerpo, "ruta": ruta})
    for k in por:
        por[k].sort(key=lambda f: f["nt"])
    return por


def nombre_corto(meta):
    f = str(meta.get("fuentes", "")).split(",")[0]
    return re.sub(r"\.(pdf|docx?|pptx?)$", "", f, flags=re.I).strip()[:40] or "fuente"


def imagenes_de(ficha):
    trozo = re.split(r"^## Imágenes requeridas\s*$", ficha["cuerpo"], flags=re.M)
    if len(trozo) < 2:
        return []
    items = re.findall(r"^- (.+)$", trozo[1].split("\n## ")[0], flags=re.M)
    return [(f"NT{ficha['nt']}_{i:02d}", d.strip()) for i, d in enumerate(items, start=1)]


def huella(fichas):
    h = hashlib.sha1()
    for f in fichas:
        h.update(f["cuerpo"].encode("utf-8"))
    return h.hexdigest()[:12]


# ───────────────────────────── Gemini ─────────────────────────────

def elegir_modelos(cliente):
    """Los Gemini Flash estables que la key puede usar, del más nuevo al más viejo
    (sin lite, preview, imagen ni audio). Si uno está saturado se pasa al siguiente."""
    candidatos = []
    for m in cliente.models.list():
        n = m.name.split("/")[-1]
        acciones = getattr(m, "supported_actions", None) or []
        if acciones and "generateContent" not in acciones:
            continue
        if not re.fullmatch(r"gemini-(\d+(?:\.\d+)?)-flash", n):
            continue
        candidatos.append((float(re.search(r"\d+(?:\.\d+)?", n).group()), n))
    print("Flash disponibles:", ", ".join(n for _, n in sorted(candidatos)) or "ninguno")
    return [n for _, n in sorted(candidatos, reverse=True)] or ["gemini-flash-latest"]


def saltos(t):
    """Gemini a veces devuelve listas y subtítulos en una sola línea
    («… texto. - a - b ### X - c»). Se reponen los saltos sin tocar los datos:
    solo cortan « - », « ### » y « N. » cuando van tras un cierre de frase."""
    t = t.strip()
    # Hueco de captura colocado en el texto: siempre en su propia línea.
    t = re.sub(r"[ \t]*\n?[ \t]*(\[NT\d+_\d+\])[ \t]*\n?", r"\n\n\1\n\n", t).strip()
    t = re.sub(r"\n{3,}", "\n\n", t)
    if "\n" in re.sub(r"\n*\[NT\d+_\d+\]\n*", " ", t):   # ya trae saltos propios
        return t
    t = re.sub(r"\s+(#{3,4}) ", r"\n\n\1 ", t)
    t = re.sub(r"(?<=[.:)\]])\s+- (?=\S)", "\n- ", t)
    t = re.sub(r"(?<=[.:)\]])\s+(\d{1,2})\. (?=[A-ZÁÉÍÓÚÑ¿])", r"\n\1. ", t)
    t = re.sub(r"^(#{3,4} [^\n]*?) - ", r"\1\n- ", t, flags=re.M)
    return t


def pedir(cliente, texto, tipo):
    from google.genai import types
    apart = APARTADOS.get(tipo, APARTADOS["componente"])
    sistema = SISTEMA + f"\nTipo de nota: {tipo}. Apartados posibles, en este orden: {', '.join(apart)}.\n"
    global MODELO
    for intento in range(INTENTOS):
        for modelo in [MODELO] + [m for m in MODELOS if m != MODELO]:
            try:
                r = cliente.models.generate_content(
                    model=modelo, contents=texto,
                    config=types.GenerateContentConfig(
                        system_instruction=sistema, temperature=0.2,
                        response_mime_type="application/json", response_schema=Maestra))
                if modelo != MODELO:
                    print(f"    usando {modelo} ({MODELO} saturado)")
                    MODELO = modelo
                if r.parsed:
                    return r.parsed
                return Maestra.model_validate(json.loads(r.text))
            except Exception as e:
                codigo = getattr(e, "code", None)
                print(f"    aviso ({modelo}): {str(e)[:140]}")
                if codigo in (404, 500, 503, 504):   # modelo retirado o saturado: probar otro
                    continue
                if isinstance(codigo, int) and 400 <= codigo < 500 and codigo != 429:
                    raise RuntimeError(f"Gemini rechaza la petición ({codigo}): {str(e)[:200]}")
                break                                # cuota (429) u otro: esperar
        espera = 60 * (intento + 1)   # la saturación (503) de Google suele durar minutos
        print(f"    reintento en {espera}s")
        time.sleep(espera)
    raise RuntimeError(f"Gemini no ha respondido tras {INTENTOS} intentos (saturado: prueba más tarde)")


def paquete(fichas):
    partes, imgs = [], []
    for f in fichas:
        corto = nombre_corto(f["meta"])
        titulo = f["meta"].get("titulo", "")
        variante = f["meta"].get("variante", "")
        cab = f"### FICHA NT{f['nt']} [{corto}] — {titulo}" + (f" (variante: {variante})" if variante else "")
        cuerpo = re.split(r"^## Imágenes requeridas\s*$", f["cuerpo"], flags=re.M)[0].strip()
        partes.append(f"{cab}\nFuente completa: {f['meta'].get('fuentes', '')}\n\n{cuerpo}")
        imgs += imagenes_de(f)
    lista = "\n".join(f"[{n}] {d}" for n, d in imgs) or "(ninguna)"
    return "\n\n".join(partes) + f"\n\n### IMÁGENES DISPONIBLES\n{lista}\n", {n for n, _ in imgs}


# ───────────────────────────── salida ─────────────────────────────

def yv(v):
    return json.dumps(str(v), ensure_ascii=False)


def componer(clave, fichas, m, nt, tipo, estado, faltan=None):
    base = fichas[0]["meta"]
    clase = tipo
    tipo_c, subtipo = (("elemento", "") if tipo in ("componente", "fluido") else ("proceso", tipo))
    niveles = {a.titulo: a.nivel for a in m.apartados}
    lineas = ["---", f"id: ssc.maestra.{clave}", f"modulo: {base.get('modulo', 'ssc')}",
              f"unidad: {base.get('unidad', 'clima')}", f"nt: {nt}", f"tipo: {tipo_c}"]
    if subtipo:
        lineas.append(f"subtipo: {subtipo}")
    lineas += [f"clase: {clase}", f"titulo: {yv(m.titulo)}"]
    if m.codigo.strip():
        lineas.append(f"codigo: {yv(m.codigo.strip())}")
    lineas += [f"menu: {yv(m.titulo[:38])}", f"grupo: {yv(base.get('grupo', ''))}", f"clave: {clave}",
               f"area: {base.get('area', '')}", f"sistema: {yv(base.get('sistema', ''))}"]
    if base.get("forma_parte_de"):
        lineas.append(f"forma_parte_de: {base['forma_parte_de']}")
    lineas += [f"estado: {estado}",
               f"fusionadas: [{', '.join(str(f['nt']) for f in fichas)}]",
               f"huella: {huella(fichas)}", f"modelo: {MODELO}",
               f"fuentes: {yv('Fusión de ' + str(len(fichas)) + ' fuentes')}",
               "niveles:"] + [f"  {yv(k)}: {v}" for k, v in niveles.items()]
    if faltan:
        lineas.append("faltan:")
        lineas += [f"  - {yv(x)}" for x in faltan[:60]]
    lineas += ["---", ""]
    for a in m.apartados:
        lineas += [f"## {a.titulo}", "", saltos(a.texto), ""]
    if m.discrepancias:
        lineas += ["## Discrepancias", ""] + [f"- {d}" for d in m.discrepancias] + [""]
    if m.imagenes:
        lineas += ["## Imágenes requeridas", ""] + [f"- [{i.ref}] {i.descripcion}" for i in m.imagenes] + [""]
    return "\n".join(lineas)


def auditar(texto_maestra, fichas):
    """Valores con unidad de las fuentes que no aparecen en la maestra."""
    en = af.numeros(texto_maestra)
    faltan = []
    for f in fichas:
        for n, frag in af.valores(f["cuerpo"]):
            if n not in en:
                faltan.append(f"NT{f['nt']}: {frag}")
    return sorted(set(faltan))


def nt_maestras():
    usados = {}
    for f in list(DIR_MAESTRAS.glob("*.md")) + list(DIR_PENDIENTES.glob("*.md")):
        meta, _ = af.cuerpo(f)
        if meta.get("nt"):
            usados[af_slug(meta.get("clave", f.stem))] = int(meta["nt"])
    return usados


def fusionar(cliente, clave, fichas, nts):
    destino = DIR_MAESTRAS / f"{clave}.md"
    previa = af.cuerpo(destino)[0] if destino.exists() else {}
    h = huella(fichas)
    if previa.get("huella") == h and not os.environ.get("FUSION_FORZAR"):
        return "sin cambios"
    tipos = [str(f["meta"].get("clase") or "componente") for f in fichas]
    tipo = max(set(tipos), key=tipos.count)
    nt = nts.get(clave) or max([1000] + list(nts.values())) + 1
    nts[clave] = nt

    texto, refs = paquete(fichas)
    m = pedir(cliente, texto, tipo)
    m.imagenes = [i for i in m.imagenes if i.ref.strip("[]") in refs]
    for i in m.imagenes:
        i.ref = i.ref.strip("[]")
    borrador = componer(clave, fichas, m, nt, tipo, "borrador")
    faltan = auditar(borrador, fichas)
    if faltan:   # una sola ronda de reparación
        print(f"    faltan {len(faltan)} datos: se le devuelven a Gemini")
        m = pedir(cliente, texto + "\n\n### TE FALTAN ESTOS DATOS (inclúyelos todos)\n" +
                  "\n".join(faltan), tipo)
        m.imagenes = [i for i in m.imagenes if i.ref.strip("[]") in refs]
        for i in m.imagenes:
            i.ref = i.ref.strip("[]")
        borrador = componer(clave, fichas, m, nt, tipo, "borrador")
        faltan = auditar(borrador, fichas)

    revisada = previa.get("estado") == "revisada"
    if faltan or revisada:
        DIR_PENDIENTES.mkdir(parents=True, exist_ok=True)
        motivo = "propuesta (la publicada está revisada)" if revisada and not faltan else "pendiente"
        (DIR_PENDIENTES / f"{clave}.md").write_text(
            componer(clave, fichas, m, nt, tipo, motivo, faltan), encoding="utf-8")
        return f"{motivo}: {len(faltan)} datos sin incluir" if faltan else motivo
    destino.write_text(borrador, encoding="utf-8")
    (DIR_PENDIENTES / f"{clave}.md").unlink(missing_ok=True)
    return f"publicada ({len(fichas)} fuentes)"


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("claves", nargs="*", help="entidades a fusionar")
    p.add_argument("--todas", action="store_true", help="todas las entidades con 2 o más fuentes")
    p.add_argument("--max", type=int, default=0, help="como mucho N entidades en esta ejecución")
    p.add_argument("--probar", action="store_true", help="solo comprueba key y modelo")
    a = p.parse_args()

    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        sys.exit("Falta GEMINI_API_KEY (secreto del repositorio en GitHub).")
    from google import genai
    cliente = genai.Client(api_key=key)
    global MODELO, MODELOS
    MODELOS = elegir_modelos(cliente)
    if MODELO == "auto":
        MODELO = MODELOS[0]
    print(f"Modelo: {MODELO}")
    if a.probar:
        m = pedir(cliente, "### FICHA NT1 [prueba] — Filtro de habitáculo\n\n"
                  "## Función\nRetiene el polvo y el polen del aire que entra al habitáculo (pág. 1).",
                  "componente")
        print(f"Prueba de configuración OK: {len(m.apartados)} apartado(s), "
              f"nivel «{m.apartados[0].nivel if m.apartados else '-'}»")
        return

    por = leer_fichas()
    if a.todas:
        claves = sorted((k for k, v in por.items() if len(v) >= 2), key=lambda k: -len(por[k]))
    else:
        claves = [af_slug(c) for c in a.claves]
    if a.max:
        claves = claves[:a.max]
    if not claves:
        sys.exit("No hay nada que fusionar: pasa entidades o --todas.")

    nts = nt_maestras()
    DIR_MAESTRAS.mkdir(exist_ok=True)
    resumen = []
    for c in claves:
        fichas = por.get(c, [])
        if len(fichas) < 2:
            resumen.append(f"{c}: {len(fichas)} fuente(s), no hace falta fusionar")
            continue
        print(f"→ {c} ({len(fichas)} fuentes)")
        try:
            r = fusionar(cliente, c, fichas, nts)
        except Exception as e:
            r = f"ERROR: {str(e)[:200]}"
        print(f"    {r}")
        resumen.append(f"{c}: {r}")
        time.sleep(6)   # margen para la cuota por minuto del nivel gratuito

    informe = "\n".join(resumen)
    print("\nRESUMEN\n" + informe)
    if os.environ.get("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a", encoding="utf-8") as fh:
            fh.write("## Fusión\n\n" + "\n".join(f"- {x}" for x in resumen) + "\n")
    if any(": ERROR" in x for x in resumen):
        sys.exit(1)   # que Actions lo marque en rojo (lo que sí salió se guarda igual)


if __name__ == "__main__":
    main()
