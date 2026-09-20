#!/usr/bin/env python3
"""Convierte el CSV oficial de RA y criterios en curriculo/<modulo>.yml.

El CSV sale de Séneca con una fila por criterio, repitiendo módulo y RA en
cada una, y en Latin-1. Esto lo pasa a un archivo por módulo, que es lo que
leen el generador de prompts y el informe de cobertura.

    python3 generador/importar_curriculo.py curriculo/RegCriEvaFP.csv

No pisa los apartados ya mapeados: si el archivo del módulo ya existe,
conserva sus bloques 'apartados_comunes' y solo refresca los criterios. Así se
puede volver a importar cuando cambie el currículo sin perder el mapa.
"""

import argparse
import csv
import re
import sys
import unicodedata
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent


def slug(texto):
    base = unicodedata.normalize("NFKD", texto or "")
    base = "".join(c for c in base if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]+", "-", base).strip("-")


ABREVIATURAS = {
    "sistemas-de-seguridad-y-confortabilidad": "ssc",
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("csv", type=Path)
    args = ap.parse_args()

    if not args.csv.exists():
        sys.exit(f"No existe {args.csv}")

    # Séneca lo exporta en Latin-1; si algún día sale en UTF-8, también entra.
    texto = args.csv.read_bytes()
    try:
        texto = texto.decode("utf-8")
    except UnicodeDecodeError:
        texto = texto.decode("latin-1")

    modulos = {}
    for fila in csv.DictReader(texto.splitlines()):
        nombre = (fila.get("Módulo Profesional") or "").strip()
        ra_txt = (fila.get("Resultado de Aprendizaje") or "").strip()
        ce_txt = (fila.get("Criterios de Evaluación") or "").strip()
        if not (nombre and ra_txt and ce_txt):
            continue

        m = re.match(r"(\d+)\.\s*(.*)", ra_txt)
        if not m:
            continue
        num, enunciado = int(m.group(1)), m.group(2).strip()

        m = re.match(r"([a-z])\)\s*(.*)", ce_txt)
        if not m:
            continue
        letra, criterio = m.group(1), m.group(2).strip()

        mod = modulos.setdefault(nombre, {})
        ra = mod.setdefault(num, {"enunciado": enunciado, "criterios": {}})
        ra["criterios"][letra] = criterio

    if not modulos:
        sys.exit("El CSV no tiene ninguna fila utilizable. ¿Cambiaron las cabeceras?")

    for nombre, resultados in modulos.items():
        clave = ABREVIATURAS.get(slug(nombre), slug(nombre))
        destino = RAIZ / "curriculo" / f"{clave}.yml"

        previo = {}
        if destino.exists():
            previo = yaml.safe_load(destino.read_text(encoding="utf-8")) or {}

        doc = {
            "modulo": clave,
            "nombre": nombre,
            # Lo que se mapeó a mano no se toca al reimportar.
            "apartados_comunes": previo.get("apartados_comunes", {}),
            "apartados_sin_criterio": previo.get("apartados_sin_criterio", []),
            "resultados": {k: resultados[k] for k in sorted(resultados)},
        }
        destino.write_text(
            "# Currículo oficial del módulo. Generado por\n"
            "# generador/importar_curriculo.py desde el CSV de Séneca.\n"
            "# Los criterios NO se editan a mano: se reimporta el CSV.\n"
            "# 'apartados_comunes' sí es tuyo, y la reimportación lo respeta.\n\n"
            + yaml.safe_dump(doc, allow_unicode=True, sort_keys=False, width=100),
            encoding="utf-8")
        total = sum(len(r["criterios"]) for r in resultados.values())
        print(f"  curriculo/{destino.name}: {len(resultados)} RA, {total} criterios")
    return 0


if __name__ == "__main__":
    sys.exit(main())
