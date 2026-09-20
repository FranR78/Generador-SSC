#!/usr/bin/env python3
"""Genera el prompt de NotebookLM de una unidad, a partir de sus archivos.

    python3 generador/prompt.py ssc-airbag           # a pantalla
    python3 generador/prompt.py ssc-airbag --guardar # a prompts/ssc-airbag.md

La gracia es que el prompt no se escribe a mano: sale de curriculo/<modulo>.yml
(los apartados comunes de todo el módulo) más unidades/<unidad>.yml (lo propio
de esa unidad). Cambiar un apartado se hace en un sitio, y todas las unidades
que lo hereden se enteran.

Lo que NO sale en el prompt, a propósito: los códigos RA-CE. El modelo escribe
el contenido; a qué criterio pertenece cada apartado lo pone el importador, que
lee los mismos archivos y no se equivoca nunca. Pedírselo al modelo es regalarle
una ocasión de poner RA2 donde toca RA3 sin que nadie lo note.
"""

import argparse
import sys
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent


def leer(ruta):
    if not ruta.exists():
        sys.exit(f"No existe {ruta.relative_to(RAIZ)}")
    return yaml.safe_load(ruta.read_text(encoding="utf-8")) or {}


def apartados_de(comunes, propios, tipo):
    """Comunes del módulo + propios de la unidad, insertados donde digan."""
    lista = list(comunes.get(tipo) or [])
    for extra in (propios.get(tipo) or []):
        despues = extra.get("despues_de")
        pos = len(lista)
        if despues:
            for i, a in enumerate(lista):
                if a["apartado"] == despues:
                    pos = i + 1
                    break
        lista.insert(pos, extra)
    return lista


def bloque(tipo, apartados):
    """La plantilla que el modelo tiene que rellenar, numerada."""
    etiqueta = "ELEMENTO" if tipo == "elemento" else "PROCESO"
    lineas = [f"### NOTA DE {etiqueta} — NOMBRE"]
    if tipo == "elemento":
        lineas += [
            "CÓDIGO: el del fabricante, si aparece; si no, omite la línea",
            "UBICACIÓN: dónde va montado en el vehículo",
            "APLICACIÓN: en qué sistemas o modelos se usa",
        ]
    lineas.append("")
    for i, a in enumerate(apartados, 1):
        lineas.append(f"**{i}. {a['apartado'].upper()}**")
        if a.get("pide"):
            lineas.append(a["pide"].strip())
        lineas.append("")
    return "\n".join(lineas).rstrip()


def obligatorios(apartados):
    return [a["apartado"] for a in apartados if a.get("obligatorio")]


def construir(mod, uni):
    comunes = mod.get("apartados_comunes") or {}
    propios = uni.get("apartados_propios") or {}
    if isinstance(propios, list):      # unidad sin apartados propios
        propios = {}

    elem = apartados_de(comunes, propios, "elemento")
    proc = apartados_de(comunes, propios, "proceso")

    cuadernos = uni.get("cuadernos") or []
    lista_cuadernos = "\n".join(
        f"| `{c['nombre']}` | {c['contenido']} |" for c in cuadernos)

    return f"""# Prompt de NotebookLM — {uni.get('nombre', uni['unidad'])}

Generado por `generador/prompt.py` desde `curriculo/{mod['modulo']}.yml` y
`unidades/{mod['modulo']}-{uni['unidad']}.yml`. **No lo edites a mano**: edita
esos archivos y vuelve a generarlo, o el cambio se perderá la próxima vez.

Esta unidad se reparte en varios cuadernos porque NotebookLM tiene tope de
fuentes. Uno cada vez: metes sus PDF, sacas las notas, lo vacías, y al
siguiente.

| Cuaderno | Qué va dentro |
|---|---|
{lista_cuadernos}

> **Para recoger la respuesta: cópiala de la pantalla, no uses «Exportar».**
> La exportación aplana las tablas a columnas con comas y deja los números de
> cita metidos en las frases. Copiando sale limpio.

---

Eres profesor de Formación Profesional de Electromecánica de Vehículos.
Redactas notas técnicas para alumnado de grado medio a partir de los documentos
del cuaderno, sobre {uni.get('nombre', uni['unidad'])}. Escribes en español de
España, en frases directas y sin adornos.

## De qué tipo es cada nota

Recorre el documento y, para cada asunto que trate, decide:

- **¿Es una pieza física que se puede sostener en la mano, comprar y
  sustituir?** → **NOTA DE ELEMENTO**
- **¿Es cómo funciona algo, cómo se hace algo o cómo se diagnostica algo?**
  → **NOTA DE PROCESO**

En caso de duda, pregúntate qué pediría el alumno en el almacén. Si es un
recambio, es elemento. Si no, es proceso.

Un mismo documento da normalmente notas de los dos tipos. Sácalas todas, en el
orden en que aparecen. Separa cada nota con una línea de tres guiones.

## Plantilla de NOTA DE ELEMENTO

```
{bloque('elemento', elem)}
```

## Plantilla de NOTA DE PROCESO

```
{bloque('proceso', proc)}
```

## Reglas que valen para las dos plantillas

**Los apartados son esos y en ese orden.** No añadas, no quites, no cambies el
nombre. Estos no pueden faltar nunca: {', '.join(obligatorios(elem + proc))}.
Si la fuente no dice nada de uno, escribe `No documentado en fuentes`, pero deja
el apartado puesto.

**Nunca te inventes un dato.** Si la fuente no lo dice, `No documentado en
fuentes`. Un apartado que no venga a cuento: `No aplica`.

**Los valores numéricos van siempre con sus condiciones.** «14 bares» no sirve;
«14 bares con 20 ºC ambiente y 1.500-2.000 rpm tras 20 minutos» sí. Un valor sin
condiciones no se puede comprobar en el taller.

**Si dos fuentes discrepan**, recoge las dos con su página y márcalo como
DISCREPANCIA. No elijas tú.

**Conserva todos los valores numéricos con sus unidades.** Son lo más valioso
del documento.

**Lee las tablas que estén dentro de las imágenes del PDF.** Ahí suele estar lo
que más falta hace: valores, tiempos, pares de apriete.

**Convierte en tabla lo que sea tabular, y en lista numerada todo
procedimiento.**

**Nada de LaTeX.** Escribe `SnO2`, `350 ºC`, `Tp`. Nunca `\\(SnO_2\\)`.

**No escribas códigos RA-CE.** Los pone el sistema por su cuenta.

**Si no llegas al final del documento, dilo:** «he cubierto hasta el apartado X
de Y». Nunca des por terminado el documento donde te hayas parado tú.
"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("unidad", help="nombre del archivo de unidad, p. ej. ssc-airbag")
    ap.add_argument("--guardar", action="store_true")
    args = ap.parse_args()

    uni = leer(RAIZ / "unidades" / f"{args.unidad}.yml")
    mod = leer(RAIZ / "curriculo" / f"{uni['modulo']}.yml")
    texto = construir(mod, uni)

    if args.guardar:
        destino = RAIZ / "prompts" / f"{args.unidad}.md"
        destino.write_text(texto, encoding="utf-8")
        print(f"Generado prompts/{destino.name}")
    else:
        print(texto)
    return 0


if __name__ == "__main__":
    sys.exit(main())
