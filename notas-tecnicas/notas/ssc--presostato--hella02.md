---
id: ssc.presostato.hella02
modulo: ssc
unidad: clima
nt: 796
tipo: elemento
clase: componente
titulo: "Presostato de seguridad del climatizador"
menu: "Presostato de seguridad del climatizad"
grupo: "Control de climatización"
clave: presostato
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "HELLA02.PDF, págs. 52"
relacionados: ["embrague-compresor", "electroventilador-condensador", "unidad-control-climatizador"]
palabras: ["trinary", "corte por alta", "corte por baja", "electroventilador", "seguridad"]
---

## Misión

Cumplir una función de seguridad en el circuito interrumpiendo la alimentación de la bobina del compresor ante presiones anómalas (corte por alta y corte por baja presión) y controlar el funcionamiento del electroventilador del condensador. (pág. 52)

## Tipos y características

Interruptor manométrico roscado a la línea del circuito. Se pueden clasificar en:
- Presostatos sencillos / dobles: contemplan únicamente el corte del sistema por alta y baja presión.
- Presostato "Trinary": integra en un único componente las tres funciones (corte por baja presión, corte por alta presión y conexión del electroventilador del condensador).



(pág. 52)

## Principio de funcionamiento

En condiciones normales de funcionamiento no realiza acciones sobre el sistema salvo la gestión del electroventilador. Ante una anomalía, sus membranas internas actúan sobre los contactos eléctricos:
- Corte por baja presión: interrumpe el circuito si la presión cae por debajo del umbral mínimo de seguridad.
- Corte por alta presión: interrumpe el circuito si la presión supera el límite máximo tolerable.
- Conexión del electroventilador: cierra un contacto normalmente abierto al elevarse la presión para activar la ventilación del condensador.

(pág. 52)

## Comportamiento en avería

Interrupción permanente del circuito eléctrico de la bobina del compresor por disparo de seguridad. (pág. 52)

## Imágenes requeridas

- Vista exterior e interior del presostato trinary con contactos normalmente abiertos y normalmente cerrados — Fuente: HELLA02.PDF, pág. 52
