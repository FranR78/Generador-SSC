---
id: ssc.sensor-temperatura-exterior.cd-72-climatizacion-en-ibiza99
modulo: ssc
unidad: clima
nt: 592
tipo: elemento
clase: componente
titulo: "Transmisor de temperatura exterior"
codigo: "G17"
menu: "Transmisor de temperatura exte G17"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "SEAT"
fuentes: "CD 72. Climatización en Ibiza99.pdf, págs. 14"
relacionados: ["unidad-control-climatizador"]
palabras: ["G17", "NTC", "retrovisor derecho", "valor sustitutivo 20 ºC", "tres rayas"]
---

## Misión

Medir la temperatura del aire ambiente exterior para permitir el cálculo de la carga térmica del vehículo y gestionar la activación del compresor y ventiladores. (pág. 14)

## Tipos y características

Resistencia con coeficiente de temperatura negativo (NTC) ubicada en el interior de la carcasa del retrovisor exterior derecho (lado del acompañante). (pág. 14)

## Principio de funcionamiento

Modifica su resistencia eléctrica de forma inversamente proporcional a la temperatura exterior. La señal llega a la unidad del radiocasete, que la muestra en la pantalla y la retransmite a la unidad del autoclima. El autoclima la utiliza para ajustar la temperatura, la velocidad de la turbina, la trampilla de recirculación y la conexión del compresor. (pág. 14)

## Valores de trabajo

- Valor sustitutivo asignado en avería: 20 ºC. (pág. 14)

## Comportamiento en avería

- El radiocasete muestra tres rayas ("---") en el campo de temperatura exterior del display. (pág. 14)
- La unidad del autoclima adopta un valor fijo sustitutivo de 20 ºC y anula la señal de acoplamiento del compresor de aire acondicionado. (pág. 14)
- Todos los dígitos del display parpadean al conectar el autoclima. (pág. 14)

## Cómo comprobarlo

A través de la función "08" (bloque de valores de medición, grupo 006, campo 1) del equipo de autodiagnóstico. (pág. 37)

## Imágenes requeridas

- Montaje de la resistencia NTC del transmisor G17 en la carcasa del retrovisor del acompañante — Fuente: CD. Climatización en Ibiza99.pdf, pág. 14
