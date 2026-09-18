---
nt: 17
titulo: Termosensor del habitáculo con turbina
codigo: G56 (con V42)
menu: Habitáculo G56 / V42
grupo: Sensores de temperatura
aplicacion: [VW Climatronic, Audi Climatronic, Seat Climatronic]
ubicacion: Integrado en la unidad de control y manejo (J255 / E87) o en el salpicadero
marca: ✦ FUSIONADO — 2 fuentes
fuentes: Guía Técnica VAG, págs. 49, 104 · Manual de Sensores G107-G192, pág. 49
---

## Misión
Detectar la **temperatura efectiva del habitáculo** y proporcionar la señal de referencia
real para compararla con el valor teórico seleccionado por el conductor.

## Principio de funcionamiento
Resistencia de tipo **NTC**. Para evitar errores de medición por el calor radiado de los
componentes electrónicos internos, la turbina **V42** aspira continuamente aire del
habitáculo y lo hace pasar a través del sensor.

El valor medido se compara con el de consigna para gestionar la chapaleta de temperatura y
la velocidad de la turbina de aire fresco.

## Características
- Señal: **analógica**. Sensor: resistencia NTC.
- El funcionamiento de la turbina se gestiona desde el panel de mandos.
- Susceptible de autodiagnóstico.

## Comportamiento en avería
La UCE sustituye la señal por un valor fijo. El sistema sigue funcionando, **pero no regula
con precisión** la temperatura solicitada.

## Discrepancias
Las dos fuentes no coinciden en el valor supletorio de emergencia: una indica **+24 °C
fijo** y la otra un rango de **22 a 26 °C** según el sistema. Probablemente varía según el
año de fabricación o la versión de software de la UCE. Contrastar con la documentación del
modelo concreto antes de dar por buena una lectura de diagnosis.

## Cómo comprobarlo
**Herramienta:** equipo de diagnosis.
**Método:** leer el valor del sensor en diagnosis y contrastarlo con la temperatura real del
habitáculo medida con termómetro. Comprobar además que la turbina V42 aspira: si no gira, el
sensor leerá el calor radiado por la electrónica y no el del habitáculo.

## Imágenes requeridas
- Detalle del sensor G56 con su turbina V42 aspirando aire — Guía Técnica, pág. 49
- Panel de mandos con la rejilla de aspiración del sensor — Manual de Sensores, pág. 49

## Advertencias
Con el sensor averiado y una temperatura extrema seleccionada, el habitáculo puede
calentarse o enfriarse muy por encima de lo solicitado, al carecer el sistema de valor de
referencia real.
