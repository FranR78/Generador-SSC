#!/usr/bin/env python3
"""Pone un 'id' permanente a cada nota. Se ejecuta UNA vez.

Hasta ahora la identidad de una nota era su número NT, y el número NT se
asignaba por orden de importación: el siguiente libre. Eso significa que el
número depende de en qué orden se procesaron los PDF, y no de lo que la nota
es. Tres consecuencias, todas malas y todas a peor con el tiempo:

  - Renumerar rompe todo lo que apunte a la nota: las lecturas del alumnado,
    los embeddings del RAG, los casos de avería que declaren de qué nota
    dependen.
  - Dos profesores que trabajen en paralelo tendrán los dos su NT1, y sus
    corpus no se pueden juntar sin reescribir uno entero.
  - El número no se puede reordenar para que NT1 sea siempre el compresor,
    que es justo lo que se quería.

A partir de aquí 'id' es la identidad (se escribe una vez y NO se toca nunca
más, aunque cambie el título, la clave o el grupo) y 'nt' pasa a ser el número
que se enseña, que sí se puede reordenar cuando haga falta.

    python3 generador/migrar_ids.py --probar    # enseña lo que haría
    python3 generador/migrar_ids.py             # lo hace
"""

import argparse
import re
import sys
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DIR_NOTAS = RAIZ / "notas"

# De momento todo el corpus es de esta unidad. Cuando entre airbag, estos dos
# valores vendrán del archivo de la unidad, no de aquí.
MODULO = "ssc"
UNIDAD = "clima"


def slug(texto):
    base = unicodedata.normalize("NFKD", texto or "")
    base = "".join(c for c in base if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", "-", base).strip("-")


def campo(texto, nombre):
    m = re.search(rf"^{nombre}:\s*(.*)$", texto, re.M)
    return m.group(1).strip() if m else ""


def id_de(texto, usados):
    """modulo.unidad.tema[.n] — legible, y estable porque no se recalcula."""
    tema = slug(campo(texto, "titulo")) or "nota"
    base = f"{MODULO}.{UNIDAD}.{tema}"
    if base not in usados:
        return base
    # Varias notas del mismo título (distintos fabricantes): se numeran por
    # orden de NT, que es estable una vez escrito.
    n = 2
    while f"{base}.{n}" in usados:
        n += 1
    return f"{base}.{n}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--probar", action="store_true", help="no escribe nada")
    args = ap.parse_args()

    rutas = sorted(DIR_NOTAS.glob("*.md"))
    if not rutas:
        print("No hay notas en notas/.", file=sys.stderr)
        return 1

    # Por NT, para que el sufijo de los repetidos salga siempre igual aunque
    # cambie el orden alfabético de los archivos.
    def nt_de(r):
        m = re.search(r"^nt:\s*(\d+)", r.read_text(encoding="utf-8"), re.M)
        return int(m.group(1)) if m else 10**6

    rutas.sort(key=nt_de)

    usados, cambios, ya = set(), [], 0
    for ruta in rutas:
        texto = ruta.read_text(encoding="utf-8")
        actual = campo(texto, "id")
        if actual:
            # Un id ya escrito no se toca jamás. Es todo el punto.
            usados.add(actual)
            ya += 1
            continue
        nuevo = id_de(texto, usados)
        usados.add(nuevo)
        cambios.append((ruta, texto, nuevo))

    if not cambios:
        print(f"Las {ya} notas ya tienen id. No hay nada que hacer.")
        return 0

    for ruta, texto, nuevo in cambios:
        print(f"  {ruta.name:<44} → {nuevo}")
        if args.probar:
            continue
        # El id va el primero del bloque, antes que nt, para que se vea que
        # manda él.
        salida = re.sub(r"^(---\n)", rf"\1id: {nuevo}\nmodulo: {MODULO}\nunidad: {UNIDAD}\n",
                        texto, count=1)
        if salida == texto:
            print(f"  ERROR: {ruta.name} no empieza por '---'", file=sys.stderr)
            return 1
        ruta.write_text(salida, encoding="utf-8")

    print(f"\n{len(cambios)} notas con id nuevo" + (f", {ya} ya lo tenían" if ya else "") + ".")
    if args.probar:
        print("Era una prueba: no se ha escrito nada.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
