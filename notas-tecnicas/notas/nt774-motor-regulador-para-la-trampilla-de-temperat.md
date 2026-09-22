---
id: ssc.sin-clasificar.motor-regulador-para-la-trampilla-de-temperatura-v68
modulo: ssc
unidad: sin-clasificar
nt: 774
titulo: "Motor Regulador Para La Trampilla De Temperatura V68"
codigo: "V68"
ubicacion: "Caja climática en el interior del habitáculo, acoplado al eje de la trampilla de mezcla"
aplicacion: "Climatizador Climatic en el SEAT Ibiza III (motor ASY)"
menu: "Motor Regulador Para La Trampi V68"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Accionar mecánicamente la trampilla de temperatura para mezclar las proporciones de aire frío y caliente hacia el habitáculo.

## Características

Servomotor eléctrico con potenciómetro de posición de retorno integrado.

## Anomalías frecuentes

* Cortocircuito a positivo o masa, e interrupción en el cableado.
* Atascamiento mecánico de la trampilla de temperatura.
* Avería interna del servomotor o desconfiguración de los límites de ajuste.
* Si presenta cortocircuito interno, puede provocar la avería 00538 (tensión de referencia baja).

## Comportamiento en avería

La temperatura del aire queda fija en un valor extremo (fuego o frío) sin responder a la ruleta del mando, registrando la avería 01271.

## Cómo comprobarlo

1. Consultar el grupo de valores de medición.
2. Realizar el diagnóstico de actuadores (función 03).
3. Si existe el código 00538, desconectar el conector de V68 para aislar si el fallo de tensión de referencia procede de este motor.
4. Verificar manualmente que la trampilla gira suavemente sin atascamientos. Sustituir V68 y realizar obligatoriamente la configuración básica (función 04).
