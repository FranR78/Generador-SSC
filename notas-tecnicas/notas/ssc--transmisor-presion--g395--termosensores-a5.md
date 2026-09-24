---
id: ssc.transmisor-presion.g395.termosensores-a5
modulo: ssc
unidad: clima
nt: 183
tipo: elemento
clase: componente
titulo: "Sensor de presión y temperatura del agente frigorífico"
codigo: "G395"
menu: "Sensor de presión y temperatur G395"
grupo: "Circuito frigorífico"
clave: transmisor-presion
variante: g395
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
marca: "Audi"
fuentes: "TERMOSENSORES A5.pdf, págs. 82"
relacionados: ["unidad-control-climatizador", "compresor"]
palabras: ["G395", "LIN-Bus", "J519", "J255", "CAN-Bus", "bloques de valores de medición"]
---

## Misión

Medir la presión y la temperatura del agente frigorífico en el circuito de climatización (pág. 82).

## Tipos y características

Sensor electrónico combinado de presión y temperatura (código G395) implantado en la línea del refrigerante (pág. 82).

## Principio de funcionamiento

Capta la presión y temperatura del fluido y transmite sus datos mediante señales LIN-Bus a la unidad de control de la red de a bordo J519 (pág. 82). Desde la UCE J519, los datos se retransmiten a través del CAN-Bus a la unidad de control para Climatronic J255 (pág. 82). La magnitud medida no se analiza activamente en la regulación del sistema, aunque sus valores se pueden consultar en los bloques de valores de medición (pág. 82).

## Cómo comprobarlo

Consultar los bloques de valores de medición mediante el equipo de diagnosis conectado a la unidad de control (pág. 82).
