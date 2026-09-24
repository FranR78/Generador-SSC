#!/usr/bin/env python3
"""Comprueba que una nota maestra no ha perdido ningún dato de sus fuentes.

    python3 generador/auditar_fusion.py maestras/refrigerante-r134a.md

Sin IA: saca de cada ficha de fuente (las NT de 'fusionadas:') todos los
valores numéricos con unidad —bar, ºC, MPa, g, kg, %, rpm, km, años, min, V,
Ω…— y mira si cada uno aparece en la maestra. Lo que falte se lista con su
fuente. Sale con código 1 si falta alguno: esa maestra no se publica.

Las páginas «(pág. 24)» no cuentan: son referencias, no datos.
"""

import re
import sys
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent
DIR_NOTAS = RAIZ / "notas"

NUM = r"(?:(?<![\d%a-zA-Z])[-+±])?\d+(?:[.,]\d+)*"   # «3%-4%»: el guion es rango, no signo
UNIDADES = (r"bar(?:es)?|ºC|°C|º|MPa|kPa|kg/cm2|kg|g(?=\W|$)|%|rpm|r\.p\.m\.|km|años|min(?:utos)?|"
            r"h(?=\W|$)|V(?=\W|$)|mV|A(?=\W|$)|mA|Ω|ohm(?:ios)?|kΩ|Hz|l(?=\W|$)|ml|cm3|cc|ppm|W")
VALOR = re.compile(rf"({NUM})\s*(?:a|-|–|y)?\s*(?:{NUM})?\s*({UNIDADES})", re.I)
PAGINA = re.compile(r"\((?:[^()]*?p[áa]gs?\.[^()]*|Sección[^()]*)\)", re.I)


def cuerpo(ruta):
    texto = ruta.read_text(encoding="utf-8")
    partes = texto.split("---", 2)
    return (yaml.safe_load(partes[1]) or {}), partes[2] if len(partes) > 2 else ""


def normal(n):
    """1.360 → 1360 ; 40,56 → 40.56 ; -26,5 → -26.5"""
    n = n.replace("±", "").replace("+", "")
    if re.fullmatch(r"-?\d{1,3}(\.\d{3})+", n):
        n = n.replace(".", "")
    return n.replace(",", ".")


def numeros(texto):
    """Conjunto de números (normalizados) que aparecen en un texto."""
    texto = PAGINA.sub(" ", texto)
    return {normal(m) for m in re.findall(NUM, texto)}


def valores(texto):
    """[(número normalizado, fragmento original)] de los valores con unidad."""
    texto = PAGINA.sub(" ", texto)
    fuera = []
    for m in VALOR.finditer(texto):
        for n in re.findall(NUM, m.group(0)):
            fuera.append((normal(n), m.group(0).strip()))
    return fuera


def main():
    if len(sys.argv) != 2:
        sys.exit("Uso: auditar_fusion.py maestras/<entidad>.md")
    meta, texto_maestra = cuerpo(Path(sys.argv[1]))
    en_maestra = numeros(texto_maestra)

    por_nt = {}
    for f in DIR_NOTAS.glob("*.md"):
        m = re.search(r"^nt:\s*(\d+)", f.read_text(encoding="utf-8"), re.M)
        if m:
            por_nt[int(m.group(1))] = f

    faltan, total = [], 0
    for nt in meta.get("fusionadas") or []:
        ruta = por_nt.get(int(nt))
        if not ruta:
            faltan.append((nt, "?", "la ficha de fuente no existe"))
            continue
        _, texto = cuerpo(ruta)
        for n, frag in valores(texto):
            total += 1
            if n not in en_maestra:
                faltan.append((nt, n, frag))

    print(f"{total} valores con unidad en {len(meta.get('fusionadas') or [])} fuentes.")
    if not faltan:
        print("Auditoría correcta: no falta ningún dato.")
        return
    print(f"FALTAN {len(faltan)}:")
    for nt, n, frag in faltan:
        print(f"  NT{nt}: {n}   ← «{frag}»")
    sys.exit(1)


if __name__ == "__main__":
    main()
