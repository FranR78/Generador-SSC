---
id: ssc.sensor-temperatura-exterior.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 190
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
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 14"
relacionados: ["unidad-control-climatizador"]
palabras: ["G17", "NTC", "retrovisor derecho", "valor sustitutivo 20 ºC", "tres rayas"]
---

## Misión

Captar la temperatura del aire exterior para permitir el cálculo de la carga térmica y gestionar las funciones automáticas de climatización y acoplamiento del compresor. (pág. 14)

## Tipos y características

Resistencia con coeficiente de temperatura negativo (NTC) montada en el interior de la carcasa del retrovisor exterior derecho (lado del acompañante). (pág. 14)

## Principio de funcionamiento

Modifica su resistencia eléctrica en proporción inversa a la temperatura del aire exterior. La señal es recibida por la unidad del radiocasete, que la presenta en el display y la retransmite mediante el bus de datos a la unidad del autoclima. (pág. 14)

## Valores de trabajo

- Valor de temperatura sustitutivo por avería: 20 ºC. (pág. 14)

## Comportamiento en avería

- La pantalla del display del radiocasete muestra tres rayas ("---") en el campo de temperatura exterior. (pág. 14)
- La unidad del autoclima asume un valor fijo sustitutivo de 20 ºC y deshabilita la conexión del compresor de aire acondicionado. (pág. 14)
- Todos los dígitos del display parpadean al conectar el autoclima. (pág. 14)

## Cómo comprobarlo

Mediante la función "08" (bloque de valores de medición, grupo 006) en el equipo de autodiagnosis. (pág. 37)

## Imágenes requeridas

- Ubicación del transmisor de temperatura exterior G17 en el retrovisor del lado del acompañante — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 14
