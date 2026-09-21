---
id: ssc.sin-clasificar.termosensor-de-temperatura-exterior
modulo: ssc
unidad: clima
nt: 298
titulo: "Termosensor De Temperatura Exterior"
codigo: "G17"
ubicacion: "Armazón anterior del vehículo (tras el paragolpes delantero)"
aplicacion: "Climatizadores automáticos para la captación de la temperatura atmosférica real"
menu: "Termosensor De Temperatura Ext G17"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Captar la temperatura exterior efectiva para la regulación de la posición de la trampilla de mezcla y la velocidad de la turbina.

## Principio de funcionamiento

Sensor termistor NTC. Varía su resistencia eléctrica de forma inversamente proporcional a la temperatura ambiente. La UCE procesa la señal para corregir la mezcla térmicamente antes de que el aire entre al habitáculo.

## Características

Resistencia NTC encapsulada de 2 vías montada en zona expuesta al aire atmosférico.

## Valores de trabajo

| Parámetro | Valor numérico asignado | Condiciones de validez |
|---|---|---|
| **Valor supletorio por ausencia de señal** | **+10 ºC** | Si fallan G17 y G89 simultáneamente |

## Anomalías frecuentes

Rotura de cables por impactos en el frontal del vehículo; cortocircuito a masa por humedad.

## Comportamiento en avería

La UCE utiliza la señal del sensor G89; si ambos fallan, adopta +10 ºC y deshabilita la recirculación de aire.

## Cómo comprobarlo

Medir la resistencia del sensor NTC con multímetro a temperatura conocida y verificar el bloque de valores de medición en la máquina de diagnosis.
