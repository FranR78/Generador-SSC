---
id: ssc.sin-clasificar.transmisor-de-temperatura-interior-g56
modulo: ssc
unidad: sin-clasificar
nt: 821
titulo: "Transmisor De Temperatura Interior G56"
codigo: "G56"
ubicacion: "Detrás del tablero de instrumentos, junto a la columna de dirección"
aplicacion: "Sistema Autoclima en SEAT Ibiza/Córdoba '99"
menu: "Transmisor De Temperatura Inte G56"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Captar la temperatura real del aire del habitáculo para permitir a la unidad del Autoclima calcular la posición de la trampilla de temperatura.

## Principio de funcionamiento

Termistor de coeficiente de temperatura negativo (NTC). Al aumentar la temperatura, disminuye su resistencia eléctrica. Para evitar lecturas erróneas por el calor del tablero, el motor V42 aspira aire continuo del habitáculo a través de la sonda.

## Características

Sensor NTC. Campo de medición de temperatura comprendido entre -40 ºC y +85 ºC.

## Valores de trabajo

* Rango de medición de la NTC: -40 ºC a +85 ºC.
* Valor sustitutivo fijo en avería: 22 ºC.

## Anomalías frecuentes

Fallo de la resistencia NTC o atascamiento del motor de la turbina V42 por suciedad.

## Comportamiento en avería

La UCE toma como referencia un valor fijo de 22 ºC. Si se solicita una temperatura diferente a 22 ºC, el sistema enfría o calienta sin límite. Al conectar el Autoclima, parpadean todos los dígitos del display.

## Cómo comprobarlo

Consultar la lectura en el grupo de valores de medición 006 (campo 4) con la función 08 del autodiagnóstico o medir la resistencia de la NTC con un óhmetro.

## Imágenes requeridas

- Ubicación del transmisor G56 con la turbina de aire V42 — Fuente: cd.pdf, pág. 12
