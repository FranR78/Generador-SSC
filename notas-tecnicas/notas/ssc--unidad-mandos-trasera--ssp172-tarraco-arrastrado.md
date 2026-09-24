---
id: ssc.unidad-mandos-trasera.ssp172-tarraco-arrastrado
modulo: ssc
unidad: clima
nt: 519
tipo: elemento
clase: componente
titulo: "Unidad de mandos e indicación trasera del climatizador"
codigo: "E265"
menu: "Unidad de mandos e indicación  E265"
grupo: "Control de climatización"
clave: unidad-mandos-trasera
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: unidad-control-climatizador
marca: "SEAT"
fuentes: "SSP172 TARRACO (arrastrado).pdf, págs. 59, 61, 66"
relacionados: ["unidad-control-climatizador", "asientos-calefactados"]
palabras: ["e265", "mandos traseros", "consola central", "lin-bus clima", "asientos traseros calefactados"]
---

## Misión

Permitir a los pasajeros de las plazas traseras ajustar de forma independiente la temperatura de su zona y accionar la calefacción de los asientos traseros. (págs. 59, 61, 66)

## Tipos y características

Módulo de mando e indicación ubicado en la parte trasera de la consola central, abonado como esclavo a la línea LIN-Bus Clima. (págs. 59, 61)

## Principio de funcionamiento

Captura los impulsos de los botones de selección de temperatura y de los pulsadores de los asientos traseros calefactados (ZX10 y ZX12), transmitiendo estos estados a la UCE máster J255 a través del LIN-Bus Clima. (págs. 59, 61, 66)

## Cómo comprobarlo

Verificación de la comunicación en la línea LIN-Bus Clima y lectura de bloques de valores mediante el equipo de diagnosis conectado a J255. (pág. 61)

## Mantenimiento

No requiere. (págs. 59, 61, 66)
