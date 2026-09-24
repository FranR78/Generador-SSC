---
id: ssc.sensor-temperatura-interior.cd-72-climatizacion-en-ibiza99
modulo: ssc
unidad: clima
nt: 590
tipo: elemento
clase: componente
titulo: "Transmisor de temperatura interior"
codigo: "G56"
menu: "Transmisor de temperatura inte G56"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "SEAT"
fuentes: "CD 72. Climatización en Ibiza99.pdf, págs. 12, 24"
relacionados: ["unidad-control-climatizador"]
palabras: ["G56", "V42", "NTC", "aspiración", "parpadeo display"]
---

## Misión

Captar la temperatura real del aire del habitáculo para que la unidad de control del autoclima determine el posicionamiento de la trampilla de mezcla de temperatura. (págs. 12, 24)

## Tipos y características

Resistencia con coeficiente de temperatura negativo (NTC) montada junto a un motor eléctrico con turbina (V42). Va instalado detrás del tablero de instrumentos, junto a la columna de dirección. (pág. 12)

## Principio de funcionamiento

El motor eléctrico V42 hace girar una turbina que genera una corriente continua de aire del habitáculo a través del termistor NTC. La resistencia eléctrica de la NTC varía en función de la temperatura del aire aspirado, enviando el valor de tensión a la unidad del autoclima. (págs. 12, 24)

## Valores de trabajo

- Campo de medición del termistor NTC: de -40 ºC a +85 ºC. (pág. 12)

## Comportamiento en avería

- La unidad del autoclima adopta un valor térmico sustitutivo fijo de 22 ºC. (pág. 12)
- Al seleccionar temperaturas distintas a 22 ºC, el habitáculo se calienta o enfría en exceso al carecer de lectura real. (pág. 12)
- Al conectar el autoclima, parpadean los dígitos del display de la consola central. (pág. 12)

## Cómo comprobarlo

A través de la función "08" (bloque de valores de medición, grupo 005, campo 4) del equipo de autodiagnóstico. (pág. 37)

## Imágenes requeridas

- Sección del transmisor G56 montado con el motor de turbina V42 y la resistencia NTC — Fuente: CD. Climatización en Ibiza99.pdf, págs. 12, 24
