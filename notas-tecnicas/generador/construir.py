#!/usr/bin/env python3
"""Genera el dashboard de notas técnicas a partir de los .md de notas/.

    python3 generador/construir.py
    python3 generador/construir.py --validar
"""

import argparse
import html
import json
import re
import sys
import unicodedata
from datetime import date
from pathlib import Path

import markdown
import yaml

import imagenes as mod_imagenes

RAIZ = Path(__file__).resolve().parent.parent
DIR_NOTAS = RAIZ / "notas"
DIR_WEB = RAIZ / "web"
DIR_IMAGENES = RAIZ / "imagenes"

TITULO = "Climatización Automotriz"
SUBTITULO = "Notas Técnicas"

SEPARADOR = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)
EXTENSIONES_MD = ["tables", "fenced_code", "sane_lists", "attr_list"]

# Orden en que se pintan los apartados. Los que no estén aquí van al final,
# en el orden en que aparezcan en la ficha.
ORDEN_APARTADOS = [
    "Misión",
    "Principio de funcionamiento",
    "Características",
    "Valores de trabajo",
    "Anomalías frecuentes",
    "Comportamiento en avería",
    "Cómo comprobarlo",
    "Fusión de fuentes",
]

# Apartados que se pintan como caja de color en vez de como apartado normal
CAJAS = {
    "Advertencias": "advertencia",
    "Discrepancias": "discrepancia",
}

# Criterios de evaluación del currículo asociados a cada apartado. La
# correspondencia es fija, así que la pone el generador y no hay que
# repetirla en cada ficha.
CRITERIOS = {
    # Notas de elemento (componentes físicos)
    "Misión": "RA1-CEa · RA1-CEb",
    "Principio de funcionamiento": "RA1-CEb",
    "Características": "RA1-CEb",
    "Valores de trabajo": "RA3-CEh",
    "Anomalías frecuentes": "RA2-CEa · RA2-CEi",
    "Comportamiento en avería": "RA2-CEa",
    "Cómo comprobarlo": "RA2-CEd · RA2-CEe · RA2-CEg",
    # Notas de proceso (fundamentos, procedimientos y diagnóstico)
    "Objeto y alcance": "RA1-CEa",
    "Fundamento": "RA1-CEb",
    "Condiciones previas": "RA3-CEh",
    "Equipo y material": "RA2-CEd",
    "Desarrollo": "RA3-CEh",
    "Valores de referencia": "RA3-CEh",
    "Interpretación y errores frecuentes": "RA2-CEa · RA2-CEi",
    "Verificación final": "RA2-CEe · RA2-CEg",
    "Seguridad y normativa": "RA4-CEa",
}

ORDEN_PROCESO = [
    "Objeto y alcance",
    "Fundamento",
    "Condiciones previas",
    "Equipo y material",
    "Desarrollo",
    "Valores de referencia",
    "Interpretación y errores frecuentes",
    "Verificación final",
    "Seguridad y normativa",
]

# Etiqueta que se pinta en la cabecera según el subtipo de nota de proceso
SUBTIPOS = {
    "fundamento": "Fundamento",
    "procedimiento": "Procedimiento",
    "diagnostico": "Diagnóstico",
}


def esc(t):
    return html.escape(str(t or ""), quote=True)


def normalizar(texto):
    base = unicodedata.normalize("NFKD", texto or "")
    return "".join(c for c in base if not unicodedata.combining(c)).lower().strip()


def slug(texto):
    """clave-url a partir de un texto: sin tildes, minúsculas, guiones."""
    return re.sub(r"[^a-z0-9]+", "-", normalizar(texto)).strip("-") or "nota"


def cargar_alias():
    """claves.yml: qué títulos son el mismo componente. {slug del título: clave}

    Cuatro manuales llaman de cuatro formas a la misma pieza. Esta tabla la
    mantiene el profesor; aquí solo se lee. Si no existe el archivo, todo
    sigue funcionando como antes: se agrupa por título idéntico.
    """
    ruta = RAIZ / "claves.yml"
    if not ruta.exists():
        return {}, set(), {}
    datos = yaml.safe_load(ruta.read_text(encoding="utf-8")) or {}

    # Claves que son el mismo tema con otro nombre: {clave: clave canónica}.
    # Más cómodo que mover títulos uno a uno cuando dos grupos enteros resultan
    # ser la misma pieza ("compresor-de-climatizacion" -> "compresor").
    plegar = {slug(str(a)): slug(str(b)) for a, b in (datos.pop("plegar", None) or {}).items()}

    # Parejas ya miradas y descartadas: no vuelven a salir en los avisos.
    distintos = set()
    for a, b in (datos.pop("distintos", None) or []):
        distintos.add(tuple(sorted((slug(str(a)), slug(str(b))))))

    alias, de_quien = {}, {}
    for clave, titulos in datos.items():
        clave = slug(str(clave))
        for titulo in (titulos or []):
            s = slug(str(titulo))
            if s in alias and alias[s] != clave:
                raise SystemExit(
                    f"claves.yml: «{titulo}» está en dos grupos a la vez, "
                    f"«{de_quien[s]}» y «{clave}». Déjalo en uno solo."
                )
            alias[s] = clave
            de_quien[s] = clave
    return alias, distintos, plegar


def plegada(clave):
    """Sigue la cadena de 'plegar' hasta la clave canónica (sin bucles)."""
    vistas = set()
    while clave in PLEGAR and clave not in vistas:
        vistas.add(clave)
        clave = PLEGAR[clave]
    return clave


ALIAS = None       # se carga una vez, en cargar()
DISTINTOS = set()  # parejas que ya se han mirado y no son lo mismo
PLEGAR = {}        # clave -> clave canónica (bloque 'plegar' de claves.yml)


class Nota:
    def __init__(self, ruta):
        bruto = ruta.read_text(encoding="utf-8")
        m = SEPARADOR.match(bruto)
        if not m:
            raise ValueError("falta el bloque de metadatos al principio")

        try:
            meta = yaml.safe_load(m.group(1)) or {}
        except yaml.YAMLError as e:
            raise ValueError(f"metadatos ilegibles: {e}") from e

        for campo in ("nt", "titulo", "grupo"):
            if not str(meta.get(campo, "")).strip():
                raise ValueError(f"falta el campo obligatorio '{campo}'")

        self.ruta = ruta
        # Identidad permanente. 'nt' es solo el número que se enseña y se
        # puede reordenar; 'id' es lo que apuntan el RAG, las lecturas del
        # alumnado y los casos de avería, y no se cambia nunca.
        self.id = str(meta.get("id", "")).strip()
        self.modulo = str(meta.get("modulo", "")).strip()
        self.unidad = str(meta.get("unidad", "")).strip()
        self.nt = int(meta["nt"])
        self.titulo = str(meta["titulo"]).strip()
        self.codigo = str(meta.get("codigo", "")).strip()
        self.grupo = str(meta.get("grupo", "")).strip()
        self.menu = str(meta.get("menu", "")).strip() or (self.codigo or self.titulo)
        # Identidad por componente: agrupa las notas que hablan de lo mismo.
        # Por orden: lo que diga la propia nota, lo que diga claves.yml, y si
        # no, el título. Así los títulos idénticos siguen cayendo juntos solos
        # y los que se llaman distinto los junta la tabla.
        declarada = str(meta.get("clave", "")).strip()
        if declarada:
            self.clave = slug(declarada)
        else:
            self.clave = (ALIAS or {}).get(slug(self.titulo)) or slug(self.titulo)
        self.clave = plegada(self.clave)
        self.aplicacion = meta.get("aplicacion") or []
        self.ubicacion = str(meta.get("ubicacion", "")).strip()
        self.fuentes = str(meta.get("fuentes", "")).strip()
        self.origen = str(meta.get("origen", "")).strip()
        self.marca = str(meta.get("marca", "")).strip()
        self.tipo = normalizar(meta.get("tipo", "elemento")) or "elemento"
        self.subtipo = normalizar(meta.get("subtipo", ""))
        if self.tipo not in ("elemento", "proceso"):
            raise ValueError(f"tipo '{self.tipo}' desconocido: usa 'elemento' o 'proceso'")
        if self.tipo == "proceso" and self.subtipo not in SUBTIPOS:
            raise ValueError(
                "una nota de proceso necesita 'subtipo': fundamento, procedimiento o diagnostico"
            )

        cuerpo = bruto[m.end():].strip()
        if not cuerpo:
            raise ValueError("la ficha no tiene contenido")
        self.apartados = self._partir(cuerpo)

    def _partir(self, cuerpo):
        """Divide el cuerpo por encabezados de nivel 2 en {titulo: html}."""
        trozos = re.split(r"^##\s+(.+?)\s*$", cuerpo, flags=re.M)
        if len(trozos) < 3:
            raise ValueError("el cuerpo debe dividirse en apartados con '## '")

        apartados = {}
        for i in range(1, len(trozos), 2):
            nombre = trozos[i].strip()
            texto = trozos[i + 1].strip()
            if texto:
                md = markdown.Markdown(extensions=EXTENSIONES_MD)
                apartados[nombre] = md.convert(texto)
        return apartados

    @property
    def ancla(self):
        """El id del <section> en el HTML. Es del número que se enseña, no de
        la identidad: si se reordenan los NT, el enlace cambia y no pasa nada.
        Lo que no puede cambiar nunca es 'id'."""
        return f"nt{self.nt}"

    @property
    def texto(self):
        plano = re.sub(r"<[^>]+>", " ", " ".join(self.apartados.values()))
        return re.sub(r"\s+", " ", f"{self.titulo} {self.codigo} {plano}").strip()


def render_imagenes(nota, html_str, capturas):
    """Empareja cada hueco declarado con su captura, por número de orden.

    El primer hueco pide NT13_01, el segundo NT13_02, y así. Cuando existe la
    captura con ese número, ocupa el lugar del hueco; si no, el hueco enseña el
    nombre exacto que debe tener el archivo, para que quien la haga lo copie.
    """
    huecos = re.findall(r"<li>(.*?)</li>", html_str, re.DOTALL)
    porOrden = {orden: (pie, ruta) for orden, pie, ruta in capturas}

    salida = []
    for i, hueco in enumerate(huecos, start=1):
        descripcion = re.sub(r"^\s*📷\s*(IMAGEN:)?\s*", "", hueco.strip(), flags=re.I)
        nombre = f"NT{nota.nt}_{i:02d}"

        if i in porOrden:
            pie, ruta = porOrden.pop(i)
            uri, _ = mod_imagenes.incrustar(ruta)
            leyenda = pie or re.sub(r"<[^>]+>", "", descripcion)
            salida.append(
                f'<figure class="captura"><img src="{uri}" alt="{esc(leyenda[:120])}" '
                f'loading="lazy"><figcaption><strong>{nombre}</strong> · {leyenda}'
                f"</figcaption></figure>"
            )
        else:
            salida.append(
                f'<div class="img-pendiente"><span class="icono">📷</span>'
                f'<span><code class="nombre-archivo">{nombre}</code> {descripcion}</span></div>'
            )

    # Capturas con un número que no corresponde a ningún hueco declarado
    for orden in sorted(porOrden):
        pie, ruta = porOrden[orden]
        uri, _ = mod_imagenes.incrustar(ruta)
        nombre = f"NT{nota.nt}_{orden:02d}"
        leyenda = f"<strong>{nombre}</strong>" + (f" · {esc(pie)}" if pie else "")
        salida.append(
            f'<figure class="captura"><img src="{uri}" alt="{esc(pie or nombre)}" '
            f'loading="lazy"><figcaption>{leyenda}</figcaption></figure>'
        )

    return "\n        ".join(salida)


def render_nota(nota, capturas=()):
    partes = [f'  <section id="{nota.ancla}" data-tipo="{nota.tipo}">']

    marca = ""
    if nota.marca:
        marca = f'<span class="fusionado">{esc(nota.marca)}</span>'

    if nota.tipo == "proceso":
        rotulo = f"Nota de Proceso Nº {nota.nt}"
        marca = f'<span class="subtipo">{SUBTIPOS[nota.subtipo]}</span>' + marca
        clase = "nota-header proceso"
    else:
        rotulo = f"Nota Técnica Nº {nota.nt}"
        clase = "nota-header"

    partes.append(f'    <div class="{clase}">{rotulo} {marca}</div>')
    cuerpo_clase = "nota-body proceso" if nota.tipo == "proceso" else "nota-body"
    partes.append(f'    <div class="{cuerpo_clase}">')

    titulo = esc(nota.titulo)
    if nota.codigo:
        titulo += f" — <strong>{esc(nota.codigo)}</strong>"
    partes.append(f"      <h1>{titulo}</h1>")

    # Identificación: badges de aplicación y ubicación física
    if nota.aplicacion or nota.ubicacion:
        partes.append('      <div class="apartado">')
        partes.append('        <div class="apartado-titulo">Identificación</div>')
        if nota.aplicacion:
            chips = "".join(
                f'<span class="badge-aplicacion">{esc(a)}</span>' for a in nota.aplicacion
            )
            partes.append(f"        {chips}")
        if nota.ubicacion:
            partes.append(
                f'        <p class="ubicacion"><strong>Ubicación:</strong> '
                f"{esc(nota.ubicacion)}</p>"
            )
        partes.append("      </div>")

    nombres = list(nota.apartados)
    orden = ORDEN_PROCESO if nota.tipo == "proceso" else ORDEN_APARTADOS
    ordenados = [n for n in orden if n in nota.apartados]
    ordenados += [n for n in nombres if n not in orden and n not in CAJAS]
    ordenados += [n for n in nombres if n in CAJAS]

    for nombre in ordenados:
        contenido = nota.apartados[nombre]

        if nombre in CAJAS:
            texto = re.sub(r"</?p>", "", contenido).strip()
            partes.append(f'      <div class="caja {CAJAS[nombre]}">{texto}</div>')
            continue

        criterio = CRITERIOS.get(nombre)
        etiqueta = f'<span class="criterio">{criterio}</span>' if criterio else ""
        partes.append('      <div class="apartado">')
        partes.append(
            f'        <div class="apartado-titulo">{esc(nombre)}{etiqueta}</div>'
        )
        if normalizar(nombre).startswith("imagenes"):
            partes.append(f"        {render_imagenes(nota, contenido, capturas)}")
        else:
            partes.append(f"        {contenido}")
        partes.append("      </div>")

    tiene_apartado_img = any(normalizar(n).startswith("imagenes") for n in nombres)
    if capturas and not tiene_apartado_img:
        partes.append('      <div class="apartado">')
        partes.append('        <div class="apartado-titulo">Capturas</div>')
        partes.append(f"        {render_imagenes(nota, '', capturas)}")
        partes.append("      </div>")

    if nota.fuentes:
        partes.append('      <div class="apartado">')
        partes.append('        <div class="apartado-titulo">Fuentes</div>')
        texto_fuentes = esc(nota.fuentes)
        if nota.origen:
            texto_fuentes += (
                f' · <a href="{esc(nota.origen)}" target="_blank" rel="noopener">'
                "abrir documento original</a>"
            )
        partes.append(f'        <p class="fuentes">{texto_fuentes}</p>')
        partes.append("      </div>")

    partes.append("    </div>")
    partes.append("  </section>")
    return "\n".join(partes)


def agrupar(notas):
    """Agrupa por 'clave' conservando el orden de primera aparición (por nt).

    Cada elemento devuelto es una lista de 1+ notas del mismo componente.
    No fusiona nada: solo las junta para pintarlas y enlazarlas juntas.
    """
    orden, por = [], {}
    for n in notas:                      # llegan ordenadas por nt
        if n.clave not in por:
            por[n.clave] = []
            orden.append(n.clave)
        por[n.clave].append(n)
    return [por[c] for c in orden]


def etiqueta_fuente(n):
    """Texto corto que identifica de qué fuente sale esta variante."""
    for cand in (n.fuentes, n.marca, n.origen):
        c = (cand or "").strip()
        if c and "POR COMPLETAR" not in c.upper():
            return c[:70]
    return "fuente sin especificar"


def render_menu(grupos):
    salida = []
    grupo_actual = None
    for g in grupos:
        base = g[0]
        if base.grupo != grupo_actual:
            grupo_actual = base.grupo
            salida.append(
                f'    <li class="grupo"><span class="menu-grupo-titulo">'
                f"{esc(grupo_actual)}</span></li>"
            )
        if len(g) == 1:
            salida.append(
                f'    <li><a href="#{base.ancla}">NT{base.nt} · {esc(base.menu)}</a></li>'
            )
        else:
            salida.append(
                f'    <li><a href="#grp-{base.clave}">{esc(base.titulo)} '
                f'<span class="menu-cuenta">{len(g)} fuentes</span></a></li>'
            )
    return "\n".join(salida)


def render_grupo(grupo, capturas):
    """Pinta un componente con varias fuentes: cabecera + variantes en acordeón.

    Cada variante sigue siendo una <section> entera (el buscador la ve). Nada se
    fusiona: es agrupación visual, reversible, mientras se decide qué hacer.
    """
    base = grupo[0]
    partes = [f'  <div class="grupo-componente" id="grp-{base.clave}">']
    partes.append(
        f'    <div class="grupo-cab"><span class="grupo-nombre">{esc(base.titulo)}</span>'
        f'<span class="grupo-cuenta">{len(grupo)} fuentes sin fusionar</span></div>'
    )
    partes.append(
        '    <p class="grupo-aviso">Varias fuentes describen este componente. '
        "Nada se ha fusionado todavía: cada ficha se conserva íntegra. Despliega "
        "cada una para compararlas.</p>"
    )
    for i, n in enumerate(grupo, start=1):
        abierto = " open" if i == 1 else ""
        partes.append(f'    <details class="variante"{abierto}>')
        partes.append(
            f'      <summary>Variante {i} de {len(grupo)} · NT{n.nt} · '
            f"{esc(etiqueta_fuente(n))}</summary>"
        )
        partes.append(render_nota(n, capturas.get(n.nt, ())))
        partes.append("    </details>")
    partes.append("  </div>")
    return "\n".join(partes)


def posibles_duplicados(notas):
    """Avisa de notas que podrían ser la misma vista desde dos fuentes.

    No las fusiona: eso es una decisión de contenido. Solo las señala para que
    alguien las mire y decida.
    """
    avisos = []

    porCodigo = {}
    for n in notas:
        codigo = normalizar(n.codigo)
        if codigo and "documentado" not in codigo:
            for trozo in re.split(r"[\s/·,]+", codigo):
                if re.fullmatch(r"[a-z]\d{2,4}", trozo):
                    porCodigo.setdefault(trozo, []).append(n)

    for codigo, grupo in sorted(porCodigo.items()):
        if len(grupo) > 1:
            cuales = ", ".join(f"NT{n.nt}" for n in grupo)
            avisos.append(f"el código {codigo.upper()} aparece en {cuales}")

    # Títulos que comparten casi todas sus palabras significativas
    def clave(n):
        palabras = set(re.findall(r"[a-z]{5,}", normalizar(n.titulo)))
        return palabras - {"sistema", "vehiculo", "circuito", "climatizacion"}

    # Cada pareja una vez, y por clave: si ya hay cuatro notas "Condensador"
    # agrupadas, la pareja interesa una vez, no dieciséis.
    sueltas, vistas = {}, set()
    for i, a in enumerate(notas):
        for b in notas[i + 1:]:
            if a.clave == b.clave:
                continue        # ya están juntas: por título o por claves.yml
            # Una pieza y un proceso no son lo mismo aunque compartan palabras:
            # "Válvula de expansión" y "Ciclo frigorífico con válvula de
            # expansión" comparten dos, y no hay nada que agrupar.
            if a.tipo != b.tipo:
                continue
            par = tuple(sorted((a.clave, b.clave)))
            if par in vistas or par in DISTINTOS:
                continue
            if tuple(sorted((slug(a.titulo), slug(b.titulo)))) in DISTINTOS:
                continue
            ka, kb = clave(a), clave(b)
            if ka and kb and len(ka & kb) >= 2 and len(ka & kb) >= min(len(ka), len(kb)):
                vistas.add(par)
                sueltas.setdefault(a.titulo, set()).add(b.titulo)

    if sueltas:
        # Salen ya escritos para pegarlos en claves.yml: si hay que decidir a
        # mano, que al menos no haya que teclear.
        avisos.append("Parecen lo mismo y están en grupos distintos. Si lo son, "
                      "pega esto en claves.yml y ponle el nombre al grupo:")
        for titulo, otros in sorted(sueltas.items()):
            avisos.append("    " + slug(titulo) + ":")
            for x in [titulo] + sorted(otros):
                avisos.append("      - " + x)

    return avisos


def cargar():
    global ALIAS, DISTINTOS, INDICES, PLEGAR
    # Antes de crear ninguna Nota: su __init__ usa ALIAS.
    ALIAS, DISTINTOS, PLEGAR = cargar_alias()
    INDICES = cargar_indices()
    notas, errores = [], []
    for ruta in sorted(DIR_NOTAS.glob("*.md")):
        try:
            notas.append(Nota(ruta))
        except ValueError as e:
            errores.append(f"{ruta.name}: {e}")

    vistos, ids = {}, {}
    for n in notas:
        if n.nt in vistos:
            errores.append(f"{n.ruta.name}: el número NT{n.nt} ya lo usa {vistos[n.nt]}")
        vistos[n.nt] = n.ruta.name

        if not n.id:
            errores.append(f"{n.ruta.name}: sin 'id'. Ejecuta generador/migrar_ids.py")
        elif n.id in ids:
            # Dos notas con el mismo id mezclarían lecturas y embeddings sin
            # que nadie se entere. Mejor no generar nada.
            errores.append(f"{n.ruta.name}: el id «{n.id}» ya lo usa {ids[n.id]}")
        else:
            ids[n.id] = n.ruta.name

    notas.sort(key=lambda n: n.nt)
    return notas, errores


def texto_plano(html_str):
    """Quita etiquetas y deja texto corrido, que es lo que consume la IA."""
    t = re.sub(r"<[^>]+>", " ", html_str)
    t = (t.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
          .replace("&nbsp;", " ").replace("&quot;", '"').replace("&#x27;", "'"))
    return re.sub(r"\s+", " ", t).strip()


def cargar_indices():
    """Lee el bloque 'indice' de cada unidad y arma el orden del curso.

    Devuelve {unidad: {"secciones": [nombre,...],
                       "clave": {clave: (rango_seccion, rango_dentro)}}}.
    El orden del curso lo manda esto; una clave que no esté en el índice va a
    una sección final "Por ubicar", nunca desaparece.
    """
    dir_uni = RAIZ / "unidades"
    salida = {}
    if not dir_uni.exists():
        return salida
    for ruta in sorted(dir_uni.glob("*.yml")):
        u = yaml.safe_load(ruta.read_text(encoding="utf-8")) or {}
        uni = u.get("unidad")
        if not uni or not u.get("indice"):
            continue
        secciones, mapa = [], {}
        for i, bloque in enumerate(u["indice"]):
            nombre = str(bloque.get("seccion", f"Sección {i+1}"))
            secciones.append(nombre)
            for j, clave in enumerate(bloque.get("claves") or []):
                mapa[slug(str(clave))] = (i, j)
        secciones.append("Por ubicar")   # cajón del final para lo no listado
        salida[uni] = {"secciones": secciones, "clave": mapa}
    return salida


INDICES = {}   # se carga en construir()


def ubicar(nota):
    """(rango_seccion, nombre_seccion, rango_dentro) de una nota según el índice.

    Sin índice para su unidad, o clave no listada: va a "Por ubicar" al final,
    ordenada por su número de nota para que salga algo estable.
    """
    idx = INDICES.get(nota.unidad)
    if not idx:
        return (10**6, "", nota.nt)
    pos = idx["clave"].get(nota.clave)
    if pos is None:
        return (len(idx["secciones"]) - 1, "Por ubicar", nota.nt)
    sec_rank, dentro = pos
    return (sec_rank, idx["secciones"][sec_rank], dentro)


def catalogo_unidades():
    """Las unidades didácticas, para las portadas del portal.

    Cada unidad es un mini curso: tiene su nombre, su color, sus horas y
    cuántos criterios del módulo toca. El portal necesita todo eso para pintar
    la portada sin preguntar nada más al servidor.
    """
    dir_uni = RAIZ / "unidades"
    if not dir_uni.exists():
        return []
    fuera = []
    for ruta in sorted(dir_uni.glob("*.yml")):
        u = yaml.safe_load(ruta.read_text(encoding="utf-8")) or {}
        if not u.get("unidad"):
            continue
        # Los criterios que toca: los comunes del módulo valen para todas, así
        # que aquí solo se cuentan los propios, que es lo que la distingue.
        propios = u.get("apartados_propios") or {}
        if isinstance(propios, list):
            propios = {}
        criterios = set()
        for tipo in ("elemento", "proceso"):
            for a in propios.get(tipo) or []:
                criterios.update(a.get("criterios") or [])
        fuera.append({
            "modulo": u.get("modulo", ""), "unidad": u["unidad"],
            "nombre": u.get("nombre", u["unidad"]),
            "descripcion": u.get("descripcion", ""),
            "icono": u.get("icono", "📘"), "color": u.get("color", "#0a63aa"),
            "horas": u.get("horas"), "orden": u.get("orden", 99),
            "criteriosPropios": sorted(criterios),
        })
    fuera.sort(key=lambda x: (x["orden"], x["nombre"]))
    return fuera


def volcar_json(notas):
    """Escribe web/notas.json: el corpus en texto, para el portal y la IA.

    El dashboard es para leer con los ojos; esto es para que lo lea el portal.
    Va en texto plano y no en HTML porque pesa mucho menos y porque la IA
    responde mejor sobre texto que sobre marcado.
    """
    fuera = []
    for n in notas:
        sec_rank, sec_nombre, dentro = ubicar(n)
        fuera.append({
            "id": n.id,
            "nt": n.nt,
            "modulo": n.modulo,
            "unidad": n.unidad,
            "clave": n.clave,
            "seccion": sec_nombre,
            "_orden": [sec_rank, dentro, n.nt],
            "titulo": n.titulo,
            "codigo": n.codigo,
            "menu": n.menu,
            "grupo": n.grupo,
            "tipo": n.tipo,
            "subtipo": n.subtipo,
            "aplicacion": n.aplicacion,
            "ubicacion": n.ubicacion,
            "fuentes": n.fuentes,
            "apartados": [{"titulo": k, "texto": texto_plano(v)}
                          for k, v in n.apartados.items()],
        })
    # El orden del curso lo manda el índice: sección, luego posición dentro,
    # luego número de nota como desempate estable.
    fuera.sort(key=lambda x: x["_orden"])
    for x in fuera:
        del x["_orden"]   # era solo para ordenar; no viaja al portal

    # Secciones en el orden del índice, por unidad, para que el portal pinte
    # las cabeceras sin recalcular nada.
    secciones_por_unidad = {u: idx["secciones"] for u, idx in INDICES.items()}

    doc = {
        "generado": date.today().isoformat(),
        "total": len(fuera),
        "grupos": sorted({n.grupo for n in notas}),
        "unidades": catalogo_unidades(),
        "secciones": secciones_por_unidad,
        "notas": fuera,
    }
    ruta = DIR_WEB / "notas.json"
    ruta.write_text(json.dumps(doc, ensure_ascii=False, indent=1), encoding="utf-8")
    return ruta


def main():
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--validar", action="store_true", help="solo comprueba, no escribe")
    args = p.parse_args()

    notas, errores = cargar()

    if errores:
        print("Problemas encontrados:\n", file=sys.stderr)
        for e in errores:
            print(f"  · {e}", file=sys.stderr)
        sys.exit(1)

    grupos = {}
    for n in notas:
        grupos.setdefault(n.grupo, []).append(n.nt)
    for g, nums in grupos.items():
        print(f"  {g}: {len(nums)} notas")
    elementos = sum(1 for n in notas if n.tipo == "elemento")
    procesos = len(notas) - elementos
    print(f"\n{len(notas)} notas en {len(grupos)} grupos "
          f"({elementos} de elemento, {procesos} de proceso)")

    duplicados = posibles_duplicados(notas)
    if duplicados:
        print("\nPosibles duplicados, revísalos y decide si fusionar:")
        for d in duplicados:
            print(f"  · {d}")

    if args.validar:
        print("\nValidación correcta.")
        return

    capturas, descartes = mod_imagenes.recopilar(DIR_IMAGENES)
    numeros = {n.nt for n in notas}

    if capturas:
        total_fotos = sum(len(v) for v in capturas.values())
        print(f"\n{total_fotos} capturas enganchadas a {len(capturas)} notas")

    huerfanas = sorted(set(capturas) - numeros)
    if huerfanas:
        print("  aviso: hay capturas para notas que no existen: "
              + ", ".join(f"NT{n}" for n in huerfanas))
    for nombre, motivo in descartes:
        print(f"  aviso: {nombre} no se ha usado ({motivo})")

    grupos = agrupar(notas)
    multiples = sum(1 for g in grupos if len(g) > 1)
    print(f"\n{len(grupos)} componentes en el menú "
          f"({multiples} con varias fuentes sin fusionar)")

    def render_bloque(g):
        return (render_nota(g[0], capturas.get(g[0].nt, ()))
                if len(g) == 1 else render_grupo(g, capturas))

    plantilla = (Path(__file__).resolve().parent / "plantilla.html").read_text(encoding="utf-8")
    pagina = (plantilla
              .replace("{{TITULO}}", esc(TITULO))
              .replace("{{SUBTITULO}}", esc(SUBTITULO))
              .replace("{{FECHA}}", date.today().strftime("%d/%m/%Y"))
              .replace("{{TOTAL}}", str(len(notas)))
              .replace("{{MENU}}", render_menu(grupos))
              .replace("{{NOTAS}}", "\n\n".join(render_bloque(g) for g in grupos)))

    DIR_WEB.mkdir(exist_ok=True)
    (DIR_WEB / "notas-tecnicas.html").write_text(pagina, encoding="utf-8")
    (DIR_WEB / "notas-tecnicas.txt").write_text(pagina, encoding="utf-8")

    ruta_json = volcar_json(notas)
    kbj = ruta_json.stat().st_size / 1024

    kb = len(pagina.encode("utf-8")) / 1024
    print(f"\nGenerado web/notas.json ({kbj:.0f} KB) — el corpus para el portal")
    print(f"Generado web/notas-tecnicas.html ({kb:.0f} KB)")
    print("Y web/notas-tecnicas.txt para pegar en Google Sites.")


if __name__ == "__main__":
    main()
