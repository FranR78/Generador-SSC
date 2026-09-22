---
id: ssc.sin-clasificar.sensor-de-calidad-del-aire-3
modulo: ssc
unidad: sin-clasificar
nt: 1096
titulo: "Sensor De Calidad Del Aire"
ubicacion: "En el canal de entrada de aire de la unidad climática, junto al sensor de temperatura"
aplicacion: "Climatizadores automáticos dotados de función de recirculación automática"
menu: "Sensor De Calidad Del Aire"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Detectar la presencia de gases contaminantes (oxidables y reducibles) en el aire exterior para enviar una señal digital a la UCE que active automáticamente la recirculación de aire.

## Principio de funcionamiento

Semiconductor de óxido mixto de dióxido de estaño (SnO2) alimentado por la UCE que trabaja a una temperatura de 350 ºC. La absorción o cesión de oxígeno en su superficie modifica el valor ohmico de su resistencia:
* *Gases oxidables (CO, vapores de gasolina, hidrocarburos, hexano, benceno, n-heptano):* Liberan oxígeno de la zona de medición y reducen su resistencia.
* *Gases reducibles (NOx, SO2, CS2, H2S):* Ceden oxígeno al sensor y aumentan su resistencia.
La electrónica interna convierte las variaciones de resistencia en una señal digital para la UCE.

## Características

Sensor semiconductor de dióxido de estaño (SnO2) con electrónica de evaluación integrada.

## Valores de trabajo

* Temperatura de trabajo del semiconductor: 350 ºC.
* Potencia consumida: 0,5 W.

## Anomalías frecuentes

Contaminación de la superficie del semiconductor de SnO2 por partículas grasas o fallo del elemento calefactor interno.

## Comportamiento en avería

El sistema deja de conmutar automáticamente a recirculación ante la presencia de gases nocivos o de escape de otros vehículos.

## Cómo comprobarlo

Consultar la señal digital y el estado del sensor en el bloque de valores de medición del equipo de diagnosis.

💡 ¿Necesitas que elaboremos un cuestionario de repaso o una guía de comprobación con osciloscopio para los fotodiodos y sensores NTC para tus clases de taller?
