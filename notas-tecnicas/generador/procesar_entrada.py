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


# Lo que NO es una nota que procesar: el archivo de ayuda y cualquier cosa
# oculta. Todo lo demás que se deje en entrada/ se intenta importar, tenga o no
# extensión .md. Subiendo desde el móvil es fácil que el archivo llegue sin
# extensión, y el pipeline debe tragárselo igual en vez de ignorarlo en
# silencio, que es peor que fallar.
IGNORAR = {"LEEME.txt", "PLANTILLA.md", ".gitkeep"}


def main():
    nuevos = sorted(
        p for p in ENTRADA.iterdir()
        if p.is_file() and p.name not in IGNORAR and not p.name.startswith(".")
    )
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
        destino_nombre = archivo.name if archivo.suffix == ".md" else archivo.name + ".md"
        shutil.move(str(archivo), str(PROCESADOS / destino_nombre))
        print(f"  archivado en entrada/procesados/{destino_nombre}")

    if fallos:
        # Un archivo que falla NO bloquea a los demás ni al resto del workflow:
        # los buenos ya se han importado y se deben generar y commitear. Los
        # malos se quedan en entrada/ para revisarlos, y se avisa.
        print("\nNo se han podido importar (se quedan en entrada/): "
              + ", ".join(fallos), file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
