---
id: ssc.servomotor-trampilla.de-temperatura.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 199
tipo: elemento
clase: componente
titulo: "Motor de la trampilla de temperatura"
codigo: "V68"
menu: "Motor de la trampilla de tempe V68"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: de-temperatura
area: climatizacion
sistema: "distribucion-aire"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 22"
relacionados: ["potenciometro-trampilla-temperatura", "unidad-control-climatizador"]
palabras: ["V68", "servomotor", "G92", "trampilla de mezcla", "corriente continua"]
---

## Misión

Posicionar mecánicamente la trampilla de temperatura de la unidad climática para regular la mezcla de aire frío y caliente hacia el habitáculo. (pág. 22).

## Tipos y características

Servomotor eléctrico de corriente continua de giro limitado, situado en la parte inferior de la unidad climática, con el potenciómetro G92 integrado en su interior. (pág. 22).

## Principio de funcionamiento

La unidad de control J255 alimenta el motor con positivo y negativo, invirtiendo la polaridad de sus bornes para cambiar el sentido de giro del motor térmico. El movimiento se transmite mediante un tornillo sin fin a una rueda de transmisión acoplada a la trampilla. (pág. 22).

## Valores de trabajo

Alimentación de polaridad variable (12 V CC). (pág. 22).

## Anomalías frecuentes

Bloqueo mecánico de la piñonería interna de plástico, agarrotamiento de la trampilla o fallo del bobinado del motor eléctrico. (pág. 22).

## Comportamiento en avería

La trampilla de temperatura permanece inmóvil en la posición en que falló y la unidad de control disminuye la velocidad de la turbina para reducir el flujo de aire molesto. (pág. 22).

## Cómo comprobarlo

Mediante la función de autodiagnóstico "03 - Diagnóstico de elementos actuadores", la unidad desplaza el motor V68 desde la posición mínima a la máxima para verificar su recorrido. (pág. 36).

## Mantenimiento

Tras la sustitución del motor V68 o de la unidad J255, es obligatorio realizar el procedimiento de ajuste básico (función 04, grupo 002) con el equipo de diagnosis. (pág. 36).
