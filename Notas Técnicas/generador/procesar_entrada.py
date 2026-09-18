#!/usr/bin/env python3
"""Importa todo lo que haya en nt/entrada/ y lo aparta ya procesado.

Lo llama el workflow de GitHub cada vez que aparece un .md nuevo en la carpeta
de entrada, para que no haya que ejecutar nada a mano.
"""

import shutil
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
ENTRADA = RAIZ / "entrada"
PROCESADOS = ENTRADA / "procesados"


def main():
    nuevos = sorted(p for p in ENTRADA.glob("*.md") if p.is_file())
    if not nuevos:
        print("No hay nada nuevo en entrada/.")
        return 0

    PROCESADOS.mkdir(exist_ok=True)
    fallos = []

    for archivo in nuevos:
        print(f"\n=== {archivo.name} ===")
        r = subprocess.run(
            [sys.executable, str(RAIZ / "generador" / "importar.py"), str(archivo)],
            capture_output=True, text=True,
        )
        print(r.stdout, end="")
        if r.returncode != 0:
            print(r.stderr, end="", file=sys.stderr)
            fallos.append(archivo.name)
            continue

        # Solo se aparta lo que ha entrado bien: si algo falla, se queda a la
        # vista en entrada/ para poder mirarlo.
        shutil.move(str(archivo), str(PROCESADOS / archivo.name))
        print(f"  archivado en entrada/procesados/{archivo.name}")

    if fallos:
        print("\nNo se han podido importar: " + ", ".join(fallos), file=sys.stderr)
        print("Se quedan en entrada/ para revisarlos.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
