#!/usr/bin/env python3
"""Convierte un .md exportado de NotebookLM en fichas del sistema.

    python3 generador/importar.py notebooklm.md --desde 40

Parte el archivo por notas, limpia lo que NotebookLM añade por su cuenta
(tablas en CSV, LaTeX, citas numéricas, criterios pegados al texto) y escribe
un .md por nota en notas/. La lista de elementos para el otro cuaderno se
guarda aparte, en PENDIENTES.md.
"""

import argparse
import csv
import io
import re
import sys
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DIR_NOTAS = RAIZ / "notas"

CABECERA = re.compile(
    r"^#{2,4}\s*\*{0,2}\s*NOTA (?:DE PROCESO|DE ELEMENTO|TÉCNICA|TECNICA)\s*[—\-–]\s*(.+?)\s*\*{0,2}\s*$",
    re.M | re.I,
)
PENDIENTES = re.compile(r"^#{2,4}\s*ELEMENTOS DETECTADOS.*$", re.M | re.I)

# "**1. OBJETO Y ALCANCE** RA1-CEaTexto..." → nombre del apartado y su texto
APARTADO = re.compile(
    r"^\*\*\s*(\d+)\.?\s*([^*]+?)\s*\*\*\s*((?:RA\d[-\s]?CE[a-z](?:\s*[/·,]\s*RA\d[-\s]?CE[a-z])*)?)\s*",
    re.M,
)

ESCAPES = re.compile(r"\\([#*\-\[\]<>_|.+()!`~=$(){}])")

# Citas de NotebookLM: " 1, 2." al cerrar una frase.
# Van SIEMPRE detrás de una letra (el final de la frase) y delante del punto
# que la cierra. Un valor real no cumple ninguna de las dos cosas: o va tras
# dos puntos ("ambiente: 20 °C"), o lleva unidad detrás ("14 bares"), o el
# punto es un separador de millar ("1.500"). Por eso no se toca ningún dato.
CITAS = re.compile(
    r"(?<=[a-zA-ZáéíóúñüÁÉÍÓÚÑ)\]%»*])"      # la frase termina aquí
    r"[ \t]+\d{1,3}(?:\s*[,\-–]\s*\d{1,3})*"
    r"(?=\s*[.:;](?![0-9]))"                 # y el cierre de frase va justo después
)
# La misma cita al final de una celda entrecomillada: ...rpm",3.
CITA_CELDA = re.compile(
    r"(?<=[a-zA-ZáéíóúñüÁÉÍÓÚÑ)\]%»*])\s+\d{1,3}(?:\s*[,\-–]\s*\d{1,3})*\s*$"
)
# ... y al final de un pie de imagen, detrás del número de página
CITA_PIE = re.compile(r"(pág\.?\s*\d+)\s+\d{1,3}(?:\s*[,\-–]\s*\d{1,3})*\s*$", re.I)
LATEX = re.compile(r"\\+\(([^)]*?)\\+\)|\$([^$\n]+?)\$")
MATEMATICO = [
    (re.compile(r"\\+text\{([^}]*)\}"), r"\1"),
    (re.compile(r"\\+circ\s*"), "°"),
    (re.compile(r"\\+sim\s*|\\+~|~"), " "),
    (re.compile(r"_\{?(\d+)\}?"), r"\1"),
    (re.compile(r"\^\{?(\d+)\}?"), r"\1"),
    (re.compile(r"\\+[a-zA-Z]+"), ""),
]

# Nombre canónico de cada apartado, a partir de su título en mayúsculas
CANONICOS = {
    "objeto y alcance": "Objeto y alcance",
    "fundamento": "Fundamento",
    "condiciones previas": "Condiciones previas",
    "equipo y material": "Equipo y material",
    "desarrollo": "Desarrollo",
    "valores de referencia": "Valores de referencia",
    "interpretacion y errores frecuentes": "Interpretación y errores frecuentes",
    "verificacion final": "Verificación final",
    "seguridad y normativa": "Seguridad y normativa",
    "identificacion": "Identificación",
    "mision": "Misión",
    "principio de funcionamiento": "Principio de funcionamiento",
    "caracteristicas": "Características",
    "presiones y/o temperaturas de trabajo": "Valores de trabajo",
    "anomalias frecuentes": "Anomalías frecuentes",
    "comportamiento en caso de averia": "Comportamiento en avería",
    "como comprobarlo": "Cómo comprobarlo",
}

META = {
    "codigo": "codigo",
    "ubicacion": "ubicacion",
    "aplicacion": "aplicacion",
}
META_LINEA = re.compile(r"^\s*(CÓDIGO|CODIGO|UBICACIÓN|UBICACION|APLICACIÓN|APLICACION)\s*:\s*(.+?)\s*$",
                        re.M | re.I)
# La línea de cobertura no es una nota: dice hasta dónde llegó NotebookLM.
COBERTURA = re.compile(r"^\s*COBERTURA\s*:\s*(.+?)\s*$", re.M | re.I)

SUBTIPOS = {"fundamento": "fundamento", "procedimiento": "procedimiento",
            "diagnostico": "diagnostico"}


def normalizar(t):
    base = unicodedata.normalize("NFKD", t or "")
    return "".join(c for c in base if not unicodedata.combining(c)).lower().strip()


def limpiar_matematicas(texto):
    def dentro(m):
        return (m.group(1) or m.group(2) or "").strip()

    texto = LATEX.sub(dentro, texto)
    for patron, reemplazo in MATEMATICO:
        texto = patron.sub(reemplazo, texto)
    return texto


def csv_a_tabla(bloque):
    """Convierte las líneas CSV que suelta NotebookLM en una tabla Markdown."""
    filas = list(csv.reader(io.StringIO(bloque.strip())))
    filas = [f for f in filas if any(c.strip() for c in f)]
    if len(filas) < 2:
        return None

    filas = [[CITA_CELDA.sub("", c.strip()) for c in f] for f in filas]
    ancho = max(len(f) for f in filas)
    filas = [f + [""] * (ancho - len(f)) for f in filas]

    salida = ["| " + " | ".join(c.strip() for c in filas[0]) + " |",
              "|" + "---|" * ancho]
    for f in filas[1:]:
        salida.append("| " + " | ".join(c.strip() for c in f) + " |")
    return "\n".join(salida)


def detectar_csv(texto):
    """Busca bloques de líneas con comas que en realidad son una tabla."""
    lineas = texto.split("\n")
    salida, buffer = [], []

    def volcar():
        if len(buffer) >= 2:
            tabla = csv_a_tabla("\n".join(buffer))
            salida.append(tabla if tabla else "\n".join(buffer))
        else:
            salida.extend(buffer)
        buffer.clear()

    for linea in lineas:
        limpia = linea.strip()
        # Una línea de tabla CSV: tiene comas, no es lista ni tabla Markdown,
        # y no termina en punto (las frases normales sí).
        es_csv = (
            limpia.count(",") >= 2
            and "|" not in limpia
            and not limpia.startswith(("*", "-", "#", ">", "1.", "2.", "3."))
            and not limpia.endswith((".", ":"))
            and len(limpia) < 300
        )
        if es_csv:
            buffer.append(limpia)
        else:
            volcar()
            salida.append(linea)
    volcar()
    return "\n".join(salida)


def partir_apartados(cuerpo):
    """Devuelve [(nombre_canónico, texto)] a partir del cuerpo de una nota."""
    marcas = list(APARTADO.finditer(cuerpo))
    if not marcas:
        return []

    apartados = []
    for i, m in enumerate(marcas):
        fin = marcas[i + 1].start() if i + 1 < len(marcas) else len(cuerpo)
        bruto = m.group(2).strip()
        nombre = CANONICOS.get(normalizar(bruto), bruto.capitalize())
        texto = cuerpo[m.end():fin].strip()
        apartados.append((nombre, texto))
    return apartados


def extraer_imagenes(apartados):
    """Saca las líneas 📷 de donde estén y las junta en un apartado propio."""
    imagenes, limpios = [], []
    for nombre, texto in apartados:
        encontradas = re.findall(r"📷\s*(?:IMAGEN:)?\s*(.+?)(?=\n|$)", texto)
        imagenes.extend(CITA_PIE.sub(r"\1", i.strip()) for i in encontradas if i.strip())
        texto = re.sub(r"📷\s*(?:IMAGEN:)?\s*.+?(?=\n|$)", "", texto).strip()
        if texto:
            limpios.append((nombre, texto))
    return limpios, imagenes


def procesar_nota(titulo_bruto, cuerpo, numero):
    # "CICLO FRIGORÍFICO CON VÁLVULA DE EXPANSIÓN / FUNDAMENTO"
    partes = [p.strip() for p in titulo_bruto.rsplit("/", 1)]
    titulo = partes[0].title() if partes[0].isupper() else partes[0]
    subtipo = SUBTIPOS.get(normalizar(partes[1])) if len(partes) > 1 else None

    # CÓDIGO / UBICACIÓN / APLICACIÓN van sueltos antes del primer apartado
    metadatos = {}
    for m in META_LINEA.finditer(cuerpo.split("**", 1)[0]):
        clave = normalizar(m.group(1)).replace("ó", "o")
        metadatos[META[clave]] = m.group(2).rstrip(". ")

    apartados = partir_apartados(cuerpo)
    if not apartados:
        return None, "no se han encontrado apartados numerados"

    apartados, imagenes = extraer_imagenes(apartados)

    lineas = ["---", f"nt: {numero}"]
    if subtipo:
        lineas += ["tipo: proceso", f"subtipo: {subtipo}"]
    lineas += [f'titulo: "{titulo}"']
    for clave in ("codigo", "ubicacion", "aplicacion"):
        if metadatos.get(clave):
            lineas.append(f'{clave}: "{metadatos[clave]}"')
    menu = f"{titulo[:30]} {metadatos['codigo']}" if metadatos.get("codigo") else titulo[:38]
    lineas += [
        f'menu: "{menu}"',
        "grupo: POR CLASIFICAR",
        "fuentes: POR COMPLETAR",
        "---",
        "",
    ]

    for nombre, texto in apartados:
        if normalizar(texto).startswith("no aplica") or "no documentado" in normalizar(texto)[:40]:
            continue
        lineas.append(f"## {nombre}")
        lineas.append("")
        lineas.append(texto)
        lineas.append("")

    if imagenes:
        lineas.append("## Imágenes requeridas")
        lineas.append("")
        for img in imagenes:
            lineas.append(f"- {img}")
        lineas.append("")

    return "\n".join(lineas), None


def siguiente_libre():
    """El primer número de nota que no está usado, para no pisar nada."""
    usados = set()
    for f in DIR_NOTAS.glob("*.md"):
        m = re.search(r"^nt:\s*(\d+)", f.read_text(encoding="utf-8"), re.M)
        if m:
            usados.add(int(m.group(1)))
    return max(usados) + 1 if usados else 1


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("archivo", help="el .md exportado de NotebookLM")
    p.add_argument("--desde", type=int, default=None,
                   help="número de la primera nota. Por defecto, el siguiente libre.")
    p.add_argument("--prefijo", default="", help="prefijo para el nombre del archivo")
    args = p.parse_args()

    origen = Path(args.archivo)
    if not origen.exists():
        sys.exit(f"No encuentro {origen}")

    if args.desde is None:
        args.desde = siguiente_libre()
        print(f"Numerando a partir de NT{args.desde} (el siguiente libre).\n")

    texto = origen.read_text(encoding="utf-8")
    arreglos = []

    if ESCAPES.search(texto):
        texto = ESCAPES.sub(r"\1", texto)
        arreglos.append("símbolos de Markdown escapados")
    if LATEX.search(texto) or "\\text{" in texto:
        texto = limpiar_matematicas(texto)
        arreglos.append("fórmulas en LaTeX")

    coberturas = [m.group(1) for m in COBERTURA.finditer(texto)]
    texto = COBERTURA.sub("", texto)

    # La lista de elementos para el otro cuaderno se aparta antes de trocear
    pendientes = ""
    m = PENDIENTES.search(texto)
    if m:
        pendientes = texto[m.start():].strip()
        texto = texto[: m.start()]

    marcas = list(CABECERA.finditer(texto))
    if not marcas:
        sys.exit("No he encontrado ninguna cabecera 'NOTA DE PROCESO —' o 'NOTA TÉCNICA —'")

    if arreglos:
        print("Corregido en todo el archivo: " + ", ".join(arreglos) + "\n")

    DIR_NOTAS.mkdir(exist_ok=True)
    creados, fallos = [], []

    for i, marca in enumerate(marcas):
        fin = marcas[i + 1].start() if i + 1 < len(marcas) else len(texto)
        cuerpo = texto[marca.end():fin]

        cuerpo = re.sub(r"^\s*-{3,}\s*$", "", cuerpo, flags=re.M)
        cuerpo = CITAS.sub("", cuerpo)
        cuerpo = detectar_csv(cuerpo)

        numero = args.desde + i
        ficha, error = procesar_nota(marca.group(1), cuerpo, numero)
        if error:
            fallos.append((marca.group(1)[:50], error))
            continue

        slug = re.sub(r"[^a-z0-9]+", "-", normalizar(marca.group(1).split("/")[0]))[:45]
        nombre = f"{args.prefijo}nt{numero:02d}-{slug.strip('-')}.md"
        (DIR_NOTAS / nombre).write_text(ficha, encoding="utf-8")
        creados.append(nombre)

    for nombre in creados:
        print(f"  creada  notas/{nombre}")
    for titulo, error in fallos:
        print(f"  ERROR   {titulo}: {error}")

    if pendientes:
        ruta = RAIZ / "PENDIENTES.md"
        cabecera = f"\n\n## De {origen.name}\n\n"
        anterior = ruta.read_text(encoding="utf-8") if ruta.exists() else "# Elementos pendientes\n"
        ruta.write_text(anterior + cabecera + pendientes, encoding="utf-8")
        print(f"\n  elementos para el otro cuaderno anotados en PENDIENTES.md")

    for c in coberturas:
        print(f"\n  cobertura declarada: {c}")

    print(f"\n{len(creados)} notas creadas (NT{args.desde} a NT{args.desde + len(creados) - 1}).")
    print("Ahora: rellena 'grupo' y 'fuentes' en cada una, y ejecuta construir.py")


if __name__ == "__main__":
    main()
