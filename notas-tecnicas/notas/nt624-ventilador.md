---
id: ssc.sin-clasificar.ventilador
modulo: ssc
unidad: sin-clasificar
nt: 624
titulo: "Ventilador"
ubicacion: "Entrada de aire de la caja climatizadora del habitáculo"
aplicacion: "Cajas climáticas de calefacción, aire acondicionado y climatización automática en vehículos"
menu: "Ventilador"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Impulsar y generar el caudal de aire forzado procedente del exterior o del interior del habitáculo para encauzarlo a través de la caja climática hacia las distintas salidas de aireación.

## Principio de funcionamiento

Motor eléctrico de corriente continua que hace girar una turbina de álabes. La regulación de velocidad se realiza por resistencias en serie (variando la caída de tensión; a máxima velocidad un relé alimenta el motor en directo a 12 V sin pasar por las resistencias) o mediante un módulo electrónico (donde el módulo detecta la diferencia de tensión entre las vías A y B de un divisor con resistencias R1-R7 del mando y varía la tensión aplicada al borne de masa del motor alimentado a 12 V).

## Características

Electromotor de corriente continua con turbina centrífuga. Regulado mediante grupo de resistencias en serie o módulo electrónico regulador transistorizado.

## Valores de trabajo

* Tensión de alimentación a máxima velocidad (montaje con resistencias): 12 V en directo sin pasar por resistencias.
* Tensión de trabajo (módulo electrónico): Diferencia de potencial variable entre bornes (ejemplo: 12 V en un borne y 3 V en el otro dan una tensión aplicada de 9 V).

## Anomalías frecuentes

Corte térmico o fundido de las resistencias en serie, fallo del transistor de potencia en el módulo electrónico o desgaste mecánico de escobillas y cojinetes del electromotor.

## Comportamiento en avería

En montaje con resistencias, el ventilador solo funciona en la velocidad máxima (a través del relé directo) o se detiene por completo. En montaje con módulo electrónico, pérdida total o parcial del control gradual de velocidad.

## Cómo comprobarlo

Medir la tensión de alimentación en los bornes del electromotor con un polímetro y verificar la continuidad eléctrica de las resistencias en serie o las variaciones de tensión entre los bornes del módulo electrónico al mover el mando de velocidad.

## Imágenes requeridas

- Esquema del circuito eléctrico de soplado con resistencias en serie y relé de velocidad máxima — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 8
- Esquema del circuito eléctrico de soplado con módulo electrónico transistorizado — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 9
