#!/usr/bin/env python3
"""Agrupa los títulos de las notas por componente, y lo escribe en claves.yml.

    python3 generador/agrupar_auto.py            # escribe el bloque autogenerado
    python3 generador/agrupar_auto.py --ver      # solo enseña el resultado

Un lote grande de manuales deja muchas variantes del mismo componente
("Compresor De Climatización", "Compresor De Cilindrada Variable"…). Esto las
junta bajo una clave por una tabla de reglas ordenada de específico a general.

AGRUPA, NO FUSIONA: las notas siguen enteras, solo se muestran bajo una
tarjeta. Y no decide nada que el profesor no pueda deshacer: lo que escribe va
en un bloque marcado de claves.yml, que se puede editar a mano.
"""

import argparse
import re
import sys
import unicodedata
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent
MARCA = "# ===== AUTOGENERADO por agrupar_auto.py (edítalo si algo no cuadra) ====="


def norm(s):
    b = unicodedata.normalize("NFKD", s or "").encode("ascii", "ignore").decode().lower()
    return b


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", norm(s)).strip("-")


# Reglas: (patrón en el título normalizado) -> clave del componente.
# ORDEN IMPORTA: la primera que casa gana, así que lo específico va antes.
REGLAS = [
    # --- lo más específico primero, para que no lo pille una regla general ---
    (r"embrague|acoplamiento (electro)?magnetico", "embrague-electromagnetico"),
    (r"valvula reguladora|valvula de regulacion del compresor|n280", "valvula-reguladora-n280"),
    (r"valvula de (descarga|sobrepresion)|valvula de sobrepresion", "valvula-de-descarga-de-sobrepresion"),
    (r"valvula de corte|valvula de cierre", "valvula-corte-refrigerante"),
    (r"valvula de expansion|expansion termostatica", "valvula-de-expansion"),
    (r"tubo de expansion|estrangulador|orificio calibrado|orifice tube|inyector", "estrangulador"),
    (r"filtro de(l)? habitaculo", "filtro-de-habitaculo"),
    (r"deposito colector|deposito de liquido|acumulador", "deposito-colector"),
    (r"filtro deshidrata|tamiz", "filtro-deshidratador"),
    (r"vaso de expansion", "vaso-de-expansion"),
    (r"mirilla|visor de flujo", "mirilla"),
    (r"amortiguador", "amortiguador-de-oscilaciones"),
    (r"radiador de calefaccion", "radiador-de-calefaccion"),
    (r"calefactor|resistencia de calefaccion|ptc", "elemento-calefactor-ptc"),
    (r"bomba dosificadora", "bomba-dosificadora-combustible"),
    (r"bujia de precalentamiento", "bujia-precalentamiento"),
    (r"guardallamas", "guardallamas"),
    (r"turbina de aire de combustion", "turbina-combustion"),
    # sensores por ubicación (antes que cualquier "sensor/sonda" genérico)
    (r"(sensor|sonda|termosensor|transmisor).*evaporador|evaporador.*(sensor|sonda|termosensor)", "sensor-de-evaporador"),
    (r"(sensor|sonda|termosensor|transmisor).*(exterior|aire aspirado|aire fresco)|g17|g89", "sensor-de-temperatura-exterior"),
    (r"(sensor|sonda|termosensor|transmisor).*(reposapies|difusor|salida|soplado|entrada al habitaculo)", "sensor-de-salida-de-aire"),
    (r"(sensor|sonda|termosensor|transmisor).*(habitaculo|interior)|g56", "sensor-de-temperatura-interior"),
    (r"(sonda|sensor|conmutador).*(liquido refrigerante|refrigerante del motor|refrigerante motor)|ntc", "sensor-de-refrigerante-del-motor"),
    (r"calidad del aire|antivaho|sno2|g238", "sensor-de-calidad-del-aire"),
    (r"humedad", "sensor-de-humedad"),
    (r"fotosensor|radiacion solar", "fotosensor-solar"),
    (r"ocupacion del asiento", "sensor-de-ocupacion"),
    (r"captadores de temperatura|sensores termicos|sondas de temperatura|sensores del climatiz", "sensores-de-temperatura"),
    # presión
    (r"presostato|conmutador de presion|trinar|trinary|conmutadores de seguridad|f73|f118", "presostatos"),
    (r"transmisor de (alta )?presion|sensor de presion|presion electronic|piezo|pwm|g65|g395", "transmisor-de-presion"),
    # ventilación
    (r"electroventilador|ventilador.*condensador|condensador.*ventilador|termocontacto|gmv", "ventilador-del-condensador"),
    (r"impulsor de aire|turbina de aire|turboventilador|regulador de (velocidad de la )?turbina", "ventilador-del-habitaculo"),
    (r"condensador", "condensador"),
    (r"evaporador", "evaporador"),
    # actuadores de trampilla y servomotores
    (r"servomotor|micromotor|motores de trampilla|motor de la trampilla|trampilla|actuadores de trampilla|potenciometro", "servomotor-de-chapaleta"),
    # unidad de control y mandos
    (r"unidad de control|climatronic|j255|j293|panel de mandos|tablero de mandos|display|unidad de manejo|tarjeta electronica|uce|mmi|equipo de mando", "unidad-de-control-y-mandos"),
    (r"gateway|interfaz de diagnosis|red de a bordo|bsi|can-bus|bus lin|topologia|arquitectura de red|esquemas electricos", "electronica-y-red"),
    # compresor (después de embrague y válvula reguladora)
    (r"compresor", "compresor"),
    # fluidos y consumibles
    (r"refrigerante|r134a|r1234yf|r12\b|fluidos refrigerantes", "refrigerante"),
    (r"aceite|lubricante|pag|pao|poe", "aceite-frigorifico"),
    (r"tuberia|canalizacion|racor|manguera|acoplamiento|lokring|spring-lock|empalme", "tuberias-y-racores"),
    (r"toma(s)? de servicio|valvula(s)? schrader", "tomas-de-servicio"),
    # --- procesos ---
    (r"ciclo|circuito frigorifico.*valvula|valvula.*circuito frigorifico", "ciclo-frigorifico-valvula"),
    (r"circuito frigorifico.*(estrangulador|tubo)|tubo.*circuito frigorifico", "ciclo-frigorifico-estrangulador"),
    (r"circuito frigorifico|circuito de (frio|climatiz)|circuito de calor", "circuito-frigorifico"),
    (r"diagram(a)? de mollier", "diagrama-mollier"),
    (r"lavado|enjuague|barrido del circuito|flushing|impermeabiliz", "lavado-del-circuito"),
    (r"limpieza.*evaporador|evaporador.*(limpieza|ultrasonid|desinfeccion)|drenaje", "limpieza-del-evaporador"),
    (r"limpieza|factores de contaminacion", "limpieza-del-circuito"),
    (r"deteccion de fugas|localizacion de fugas|fugas.*(uv|colorante|tinte|fluorescente)", "deteccion-de-fugas"),
    (r"vacio|evacuacion|vaciado", "vacio"),
    (r"recuperacion|reciclaje|recoger|botella de refrigerante|equipo de recuperacion", "recuperacion-reciclaje"),
    (r"carga|rellenado|recarga|puesta en funcionamiento tras", "carga-refrigerante"),
    (r"subenfriamiento|recalentamiento", "subenfriamiento"),
    (r"diagnostico|busqueda de (averias|fallos)|diagnosis|autodiagnos|comprobacion de presion|prueba de rendimiento|manometr|climtest|climatest|airtest|salto termico|potencia frigorifica", "diagnostico"),
    (r"principios|termodinamica|magnitudes fisicas|estados de (agregacion|la materia)|fisica aplicada|conceptos|intercambio|higrometria(?!.*confort)", "principios-de-refrigeracion"),
    (r"confort|efectos (del )?clima|ambiente climatiz|objetivos de la climatiz|restricciones", "confort-termico"),
    (r"regulacion manual", "regulacion-manual"),
    (r"regulacion (automatica|de aire bizona|de temperatura|en climatiz|conjunta|y (control|proteccion|sistema))|logica de control|logica y control|senales suplementarias", "regulacion-automatica"),
    (r"recirculacion", "recirculacion"),
    (r"distribucion (de|y)|conduccion del aire|multizona|cuatro zonas|tres y cuatro zonas|bizona", "distribucion-de-aire"),
    (r"seguridad|primeros auxilios|manipulacion (segura )?de refrigerante|precauciones|directrices de montaje|medidas de seguridad", "seguridad-y-manipulacion"),
    (r"normativa|gases fluorados|medioambient", "normativa"),
    (r"mantenimiento|servicio de climatiz|revision|control y mantenimiento|sustitucion|reparacion|procedimiento de sustitucion|desconexion del equipo|reposicion de aceite|equipamiento de taller|hibrido|gestion termica de bateria", "mantenimiento-y-servicio"),
    (r"interruptor de marcha atras", "interruptor-marcha-atras"),
    (r"interruptor termico|conmutador termico", "interruptor-termico"),
    (r"termostato", "termostato-evaporador"),
    (r"gestion de la carga electrica|alternador", "carga-alternador"),
    (r"gestion de (los )?ventiladores|control y gestion de (los )?ventiladores", "gestion-ventiladores"),
    (r"modulo (de inyeccion|electronico)|calculador ecm|centralita", "electronica-y-red"),
    (r"regulador de la iluminacion", "regulador-iluminacion"),
    (r"sistemas? de climatizacion|sistemas de regulacion|variantes del sistema|innovadora gestion|fundamentos", "sistema-de-climatizacion"),
]


def clave_de(titulo):
    t = norm(titulo)
    for patron, clave in REGLAS:
        if re.search(patron, t):
            return clave
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ver", action="store_true")
    args = ap.parse_args()

    import json
    indice = RAIZ / "web" / "notas.json"
    notas = json.loads(indice.read_text(encoding="utf-8"))["notas"]
    titulos = sorted(set(n["titulo"] for n in notas if n.get("unidad") == "clima"))

    # No re-mapear títulos que ya están en la parte hecha a mano de claves.yml.
    texto_claves = (RAIZ / "claves.yml").read_text(encoding="utf-8")
    parte_mano = texto_claves.split(MARCA)[0]
    datos_mano = yaml.safe_load(parte_mano) or {}
    ya = set()
    for k, v in datos_mano.items():
        if k == "distintos":
            continue
        for x in (v or []):
            ya.add(slug(x))

    grupos, sin_regla = {}, []
    for tit in titulos:
        if slug(tit) in ya:
            continue
        c = clave_de(tit)
        if not c:
            sin_regla.append(tit)
            continue
        grupos.setdefault(c, []).append(tit)

    # Solo interesan las claves con más de una nota: agrupar una sola no reduce.
    utiles = {k: v for k, v in grupos.items() if len(v) > 1}
    n_comp = len(utiles) + sum(1 for v in grupos.values() if len(v) == 1) + len(sin_regla)

    if args.ver:
        for k in sorted(utiles, key=lambda x: -len(utiles[x])):
            print(f"{len(utiles[k]):3d}  {k}")
        print(f"\nsin regla (se quedan como están): {len(sin_regla)}")
        for t in sin_regla[:40]:
            print("   ", t)
        return 0

    # Escribir el bloque autogenerado en claves.yml (reemplaza el anterior).
    lineas = [MARCA,
              "# Agrupa los títulos del lote importado por componente. Mueve, junta o",
              "# separa lo que no cuadre; al reejecutar el script respeta la parte de",
              "# arriba (la hecha a mano) y solo rehace este bloque.", ""]
    for k in sorted(utiles):
        lineas.append(f"{k}:")
        for t in sorted(utiles[k]):
            lineas.append(f"  - {yaml_val(t)}")
        lineas.append("")
    nuevo = parte_mano.rstrip() + "\n\n" + "\n".join(lineas) + "\n"
    (RAIZ / "claves.yml").write_text(nuevo, encoding="utf-8")
    print(f"claves.yml: {len(utiles)} grupos autogenerados, "
          f"{sum(len(v) for v in utiles.values())} títulos agrupados.")
    print(f"Sin regla, se quedan sueltos: {len(sin_regla)}.")
    return 0


def yaml_val(s):
    import json
    return json.dumps(str(s), ensure_ascii=False)


if __name__ == "__main__":
    sys.exit(main())
