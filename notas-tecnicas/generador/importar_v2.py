#!/usr/bin/env python3
"""Importa una respuesta de NotebookLM con el prompt v2 (prompts/notebooklm-v2.md).

    python3 generador/importar_v2.py entrada/6_Compresores.md

Cada nota llega así: un bloque ```yaml con tipo, entidad, sistema, fuente…
y detrás sus apartados con '## '. Aquí se valida, se limpia lo que NotebookLM
añade por su cuenta y se escribe una ficha por nota en notas/.

Lo que no pasa la validación NO entra en el dashboard: va a
entrada/rechazadas/ con el motivo. Ninguna nota queda «por clasificar».

La ficha se llama por su identidad (entidad + variante + PDF), así que
reprocesar el mismo PDF sobrescribe sus notas en vez de duplicarlas, y
conserva su número NT.
"""

import re
import sys
from pathlib import Path

import yaml

import importar as v1   # limpiadores ya probados: citas, LaTeX, tablas CSV

RAIZ = v1.RAIZ
DIR_NOTAS = v1.DIR_NOTAS
DIR_RECHAZADAS = RAIZ / "entrada" / "rechazadas"

MODULO = "ssc"
UNIDAD = "clima"   # el guion (unidades/ssc-clima.yml) decide dónde va cada una

TIPOS = {
    # tipo v2 → (tipo que pinta construir.py, subtipo)
    "componente": ("elemento", ""),
    "fluido": ("elemento", ""),
    "fundamento": ("proceso", "fundamento"),
    "procedimiento": ("proceso", "procedimiento"),
    "diagnostico": ("proceso", "diagnostico"),
}
OBLIGATORIOS = ("tipo", "titulo", "entidad", "area", "sistema", "fuente")

SISTEMAS = {
    "circuito-frigorifico": "Circuito frigorífico",
    "calefaccion": "Calefacción",
    "distribucion-aire": "Distribución de aire",
    "control-climatizacion": "Control de climatización",
    "fluidos-frigorificos": "Fluidos frigoríficos",
    "equipos-taller": "Equipos de taller",
    "refrigeracion-motor": "Refrigeración del motor",
    "lubricacion": "Lubricación",
    "distribucion": "Distribución",
    "admision-escape": "Admisión y escape",
    "normativa-y-medioambiente": "Normativa y medioambiente",
    "prl-y-seguridad": "PRL y seguridad",
    "herramientas-y-medida": "Herramientas y medida",
}

BLOQUE = re.compile(r"^```ya?ml\s*\n(.*?)\n```\s*$", re.M | re.S)
COBERTURA = re.compile(r"^\s*\**COBERTURA:?\**\s*(.+)$", re.M | re.I)
DIVIDIDO = re.compile(r"\\+div\b")
SEPARADOR = re.compile(r"^\s*-{3,}\s*$", re.M)


def limpiar(texto):
    """Lo que añade NotebookLM y no es de la nota. Mismo orden que importar.py."""
    texto = DIVIDIDO.sub("–", texto)          # 1,8 \div 2,2 → 1,8 – 2,2
    texto = v1.ESCAPES.sub(r"\1", texto)
    if v1.LATEX.search(texto) or "\\text{" in texto:
        texto = v1.limpiar_matematicas(texto)
    return texto


def grupo_de(sistema):
    s = sistema.removeprefix("NUEVO-").removeprefix("nuevo-")
    return SISTEMAS.get(s, s.replace("-", " ").capitalize())


def numeros_actuales():
    """{nombre de ficha: nt} y el siguiente NT libre."""
    usados = {}
    for f in DIR_NOTAS.glob("*.md"):
        m = re.search(r"^nt:\s*(\d+)", f.read_text(encoding="utf-8"), re.M)
        if m:
            usados[f.name] = int(m.group(1))
    return usados, (max(usados.values()) + 1 if usados else 1)


def validar(meta):
    faltan = [c for c in OBLIGATORIOS if not str(meta.get(c) or "").strip()]
    if faltan:
        return "faltan campos: " + ", ".join(faltan)
    if v1.normalizar(str(meta["tipo"])) not in TIPOS:
        return f"tipo «{meta['tipo']}» no es componente, fluido, fundamento, procedimiento ni diagnostico"
    return None


def ficha(meta, cuerpo, nt, ident):
    tipo, subtipo = TIPOS[v1.normalizar(str(meta["tipo"]))]
    clase = v1.normalizar(str(meta["tipo"]))
    entidad = v1.slug(str(meta["entidad"]))
    variante = v1.slug(str(meta.get("variante") or "")) if meta.get("variante") else ""
    sistema = str(meta["sistema"]).strip()
    titulo = str(meta["titulo"]).strip()
    codigo = str(meta.get("codigo") or "").strip()
    paginas = str(meta.get("paginas") or "").strip()
    fuente = str(meta["fuente"]).strip()

    lineas = ["---", f"id: {ident}", f"modulo: {MODULO}", f"unidad: {UNIDAD}", f"nt: {nt}",
              f"tipo: {tipo}"]
    if subtipo:
        lineas.append(f"subtipo: {subtipo}")
    lineas += [f"clase: {clase}", f"titulo: {v1.yval(titulo)}"]
    if codigo:
        lineas.append(f"codigo: {v1.yval(codigo)}")
    menu = f"{titulo[:30]} {codigo}".strip() if codigo else titulo[:38]
    lineas += [
        f"menu: {v1.yval(menu)}",
        f"grupo: {v1.yval(grupo_de(sistema))}",
        f"clave: {entidad}",
    ]
    if variante:
        lineas.append(f"variante: {variante}")
    lineas += [f"area: {v1.slug(str(meta['area']))}", f"sistema: {v1.yval(sistema)}"]
    if meta.get("forma_parte_de"):
        lineas.append(f"forma_parte_de: {v1.slug(str(meta['forma_parte_de']))}")
    if meta.get("fabricante"):
        lineas.append(f"marca: {v1.yval(meta['fabricante'])}")
    lineas.append(f"fuentes: {v1.yval(fuente + (', págs. ' + paginas if paginas else ''))}")
    for lista in ("relacionados", "palabras"):
        valores = meta.get(lista) or []
        if isinstance(valores, list) and valores:
            lineas.append(f"{lista}: [{', '.join(v1.yval(v) for v in valores)}]")
    lineas += ["---", ""]

    # Apartados: se quitan los vacíos («No aplica», «No documentado») y las
    # líneas 📷 pasan a «Imágenes requeridas», que es donde construir.py
    # empareja las capturas del alumnado.
    trozos = re.split(r"^##\s+(.+?)\s*$", cuerpo, flags=re.M)
    apartados = []
    for i in range(1, len(trozos), 2):
        texto = trozos[i + 1].strip()
        n = v1.normalizar(re.sub(r"\(p[aá]g[^)]*\)", "", texto)).strip(" .")
        if not texto or n.startswith("no aplica") or n.startswith("no documentado"):
            continue
        apartados.append((trozos[i].strip(), texto))
    apartados, imagenes = v1.extraer_imagenes(apartados)
    if not apartados:
        return None
    for nombre, texto in apartados:
        lineas += [f"## {nombre}", "", texto, ""]
    if imagenes:
        lineas += ["## Imágenes requeridas", ""] + [f"- {i}" for i in imagenes] + [""]
    return "\n".join(lineas)


def importar(origen):
    texto = limpiar(origen.read_text(encoding="utf-8"))

    # Todo lo que viene después de COBERTURA es charla de NotebookLM
    # («💡 ¿Quieres que…?»): fuera.
    cob = COBERTURA.search(texto)
    cobertura = cob.group(1).strip() if cob else ""
    if cob:
        texto = texto[: cob.start()]

    bloques = list(BLOQUE.finditer(texto))
    if not bloques:
        return [], [("(archivo entero)", "no hay ningún bloque ```yaml: ¿es del prompt v2?", texto)], cobertura

    usados, siguiente = numeros_actuales()
    creadas, rechazadas, vistos = [], [], set()
    DIR_NOTAS.mkdir(exist_ok=True)

    for i, b in enumerate(bloques):
        fin = bloques[i + 1].start() if i + 1 < len(bloques) else len(texto)
        cuerpo = SEPARADOR.sub("", texto[b.end():fin])
        cuerpo = v1.detectar_csv(v1.CITAS.sub("", cuerpo)).strip()
        bruto = texto[b.start():fin]
        try:
            meta = yaml.safe_load(b.group(1)) or {}
        except yaml.YAMLError as e:
            rechazadas.append(("?", f"YAML ilegible: {e}", bruto))
            continue
        error = validar(meta)
        if error:
            rechazadas.append((str(meta.get("titulo", "?")), error, bruto))
            continue

        base = ".".join(p for p in (
            MODULO, v1.slug(str(meta["entidad"])),
            v1.slug(str(meta.get("variante") or "")) if meta.get("variante") else "",
            v1.slug(Path(str(meta["fuente"])).stem)[:40]) if p)
        ident, k = base, 2
        while ident in vistos:          # dos notas de la misma cosa en un PDF
            ident, k = f"{base}-{k}", k + 1
        vistos.add(ident)

        nombre = ident.replace(".", "--") + ".md"
        nt = usados.get(nombre)
        if nt is None:
            nt, siguiente = siguiente, siguiente + 1
        contenido = ficha(meta, cuerpo, nt, ident)
        if not contenido:
            rechazadas.append((str(meta["titulo"]), "todos los apartados vacíos", bruto))
            continue
        (DIR_NOTAS / nombre).write_text(contenido, encoding="utf-8")
        creadas.append((nombre, nt))

    return creadas, rechazadas, cobertura


def main():
    if len(sys.argv) != 2:
        sys.exit("Uso: importar_v2.py entrada/archivo.md")
    origen = Path(sys.argv[1])
    creadas, rechazadas, cobertura = importar(origen)

    for nombre, nt in creadas:
        print(f"  NT{nt:<4} notas/{nombre}")
    if rechazadas:
        DIR_RECHAZADAS.mkdir(parents=True, exist_ok=True)
        partes = [f"# Rechazadas de {origen.name}\n"]
        for titulo, motivo, bruto in rechazadas:
            print(f"  RECHAZADA {titulo}: {motivo}")
            partes.append(f"## {titulo}\n\n**Motivo:** {motivo}\n\n{bruto.strip()}\n")
        (DIR_RECHAZADAS / origen.name).write_text("\n".join(partes), encoding="utf-8")
    if cobertura:
        print(f"  cobertura: {cobertura}")
    print(f"{len(creadas)} notas, {len(rechazadas)} rechazadas.")
    # Sin ninguna nota buena, el archivo se queda en entrada/ para mirarlo.
    sys.exit(0 if creadas else 1)


if __name__ == "__main__":
    main()
