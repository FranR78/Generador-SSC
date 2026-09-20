---
id: ssc.clima.unidad-control-climatronic-j255
modulo: ssc
unidad: clima
nt: 146
tipo: elemento
titulo: Unidad de control para Climatronic J255
codigo: J255
menu: J255
grupo: POR CLASIFICAR
ubicacion: Panel de mandos de la climatización, en el salpicadero
aplicacion:
  - VW Touareg
  - SEAT Tarraco
fuentes: VW SSP 301 «Climatización en el Touareg»; SEAT SSP 172 (Tarraco)
---

## Misión
Decidir. Recoge lo que piden los mandos y lo que dicen todos los sensores, y manda sobre el compresor,
los servomotores de chapaleta y el soplador para mantener la temperatura pedida en cada zona.

## Principio de funcionamiento
Es a la vez panel de mandos y unidad de control. Lee los sensores térmicos de habitáculo, aireadores y
evaporador, el de calidad del aire G238, los fotosensores de irradiación solar y el transmisor de alta
presión, y con todo eso calcula la posición de cada chapaleta y la cilindrada que le pide a la válvula
reguladora N280.

## Características
Gobierna un sistema con muchos actuadores de posición: V107 para la chapaleta de descongelación, V154
para aire fresco/recirculación, V108 y V109 para los vanos reposapiés, V102 para los aireadores
centrales y V305 para la regulación del soplador delantero. Cada servomotor lleva su potenciómetro de
realimentación, así que la unidad no manda a ciegas: sabe dónde ha quedado la chapaleta.

## Valores de trabajo
La diagnosis da acceso a los valores de trabajo de la unidad mediante la **función 08, bloques de
valores de medición**, que es la vía para diagnosticar lo que no sale en la memoria de averías.

En el ajuste básico (canal 002) las fuentes recogen esta lectura de referencia:

| Canal | Lectura | Origen |
|---|---|---|
| 002, ajuste básico | 4,21 V · 4,21 V · 4,21 V · 0,76 V | Teórico OEM |

Tres valores iguales y uno distinto: el que se sale es el que hay que mirar.

## Anomalías frecuentes
Fallos de alimentación y masa del panel, pérdida de comunicación con el resto de unidades, y
servomotores que la unidad da por averiados cuando el problema está en la realimentación del
potenciómetro, no en el motor.

## Comportamiento en avería
Desde el sistema entero muerto hasta chapaletas que se quedan en una posición fija. Cuando falla la
comunicación, el sistema suele pasar a un modo de emergencia con una posición de compromiso.

## Cómo comprobarlo
1. Alimentación y masa en el conector de la unidad, con el contacto puesto.
2. Memoria de averías y, sobre todo, **función 08** para ver los valores de trabajo: una avería de
   posición de chapaleta casi nunca sale en la memoria, pero sí en los bloques de medición.
3. Ajuste básico tras cualquier intervención en chapaletas o servomotores. Sin él, la unidad sigue
   con las posiciones aprendidas antiguas.

## Advertencias
Antes de dar por averiada la unidad, descartar alimentación, masas y la realimentación de los
potenciómetros. Es una pieza cara y el fallo casi siempre está fuera de ella.
