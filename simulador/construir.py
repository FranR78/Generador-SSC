#!/usr/bin/env python3
"""Funde index.html + sus .js en un solo archivo autocontenido.

    python3 simulador/construir.py

Se desarrolla en tres archivos porque se lee y se corrige mejor, pero lo que
se publica es uno solo: es lo único que acepta el insertador de código de
Google Sites, y lo único que funciona si alguien se baja el archivo suelto.
"""

import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
WEB = RAIZ / "web"
SRC = RAIZ / "index.html"

INCLUDE = re.compile(r'[ \t]*<script src="([^"]+)"></script>[ \t]*\n?')


def main():
    html = SRC.read_text(encoding="utf-8")
    faltan = []

    def incrustar(m):
        ruta = RAIZ / m.group(1)
        if not ruta.exists():
            faltan.append(m.group(1))
            return m.group(0)
        js = ruta.read_text(encoding="utf-8")
        # Un </script> dentro del JS cerraría la etiqueta antes de tiempo.
        js = js.replace("</script>", "<\\/script>")
        return f"<script>\n/* ===== {m.group(1)} ===== */\n{js}\n</script>\n"

    salida = INCLUDE.sub(incrustar, html)

    if faltan:
        print("No encuentro: " + ", ".join(faltan), file=sys.stderr)
        return 1
    if '<script src="' in salida:
        print("Ha quedado algún script sin incrustar.", file=sys.stderr)
        return 1

    WEB.mkdir(exist_ok=True)
    (WEB / "entrenador-clima.html").write_text(salida, encoding="utf-8")

    # Copia lista para pegar como archivo HTML en el editor de Apps Script.
    gas = RAIZ / "apps-script"
    if gas.exists():
        (gas / "Entrenador.html").write_text(salida, encoding="utf-8")

    kb = len(salida.encode("utf-8")) / 1024
    print(f"Generado web/entrenador-clima.html ({kb:.0f} KB), autocontenido.")
    print("Y apps-script/Entrenador.html, para servirlo como aplicación web.")
    print()
    print("Aviso: el insertador de código de Google Sites NO sirve para esto.")
    print("Sanea el HTML (se come las tablas) y corta por tamaño. Incrusta la")
    print("URL de la aplicación web en su lugar: ver apps-script/README.md.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
