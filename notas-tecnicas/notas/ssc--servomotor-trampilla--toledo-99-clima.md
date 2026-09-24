---
id: ssc.servomotor-trampilla.toledo-99-clima
modulo: ssc
unidad: clima
nt: 347
tipo: elemento
clase: componente
titulo: "Motores eléctricos con potenciómetro para trampillas"
codigo: "V68, V70, V71, V85"
menu: "Motores eléctricos con potenci V68, V70, V71, V85"
grupo: "Distribución de aire"
clave: servomotor-trampilla
area: climatizacion
sistema: "distribucion-aire"
marca: "SEAT"
fuentes: "Toledo 99 CLIMA.pdf, págs. 50"
relacionados: ["unidad-control-climatizador", "distribucion-aire"]
palabras: ["V68", "V70", "V71", "V85", "G92", "G112", "G113", "G114", "potenciómetro", "ajuste básico"]
---

## Misión

Accionar mecánicamente las trampillas del climatizador (temperatura, central, velocidad/recirculación y descongelación/reposapiés) e informar de su posición exacta a la unidad de control. (pág. 50).

## Tipos y características

Motores eléctricos de giro limitado dotados de un potenciómetro interno de posición:
- V68: motor de la trampilla de temperatura con potenciómetro G92. (págs. 47, 50).
- V70: motor de la trampilla central con potenciómetro G112. (págs. 47, 50).
- V71: motor de las trampillas de velocidad y recirculación con potenciómetro G113. (págs. 47, 50).
- V85: motor de la trampilla de descongelación/reposapiés con potenciómetro G114. (págs. 47, 50).

## Principio de funcionamiento

La unidad de control excita los motores aplicando 12 V en sus bornes. Para invertir el sentido de giro del motor, la unidad invierte la polaridad de alimentación. El potenciómetro interno envía una señal de tensión variable a la unidad J255, informando en todo momento de la posición angular instantánea de la trampilla. (pág. 50).

## Valores de trabajo

Tensión de alimentación: 12 V (con polaridad conmutable para inversión de giro). (pág. 50).

## Cómo comprobarlo

Realizar el ajuste básico mediante el equipo de diagnosis (VAG 1551/1552) cada vez que se sustituya un motor o la unidad de control, para que la centralita memorice y reconozca los topes finales de cada motor. (pág. 50).

## Mantenimiento

Ejecutar obligatoriamente el ajuste básico del sistema tras cualquier sustitución de un motor o de la unidad J255. (pág. 50).
