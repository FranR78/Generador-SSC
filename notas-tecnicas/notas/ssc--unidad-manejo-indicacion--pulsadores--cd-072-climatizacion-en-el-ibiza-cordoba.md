---
id: ssc.unidad-manejo-indicacion.pulsadores.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 581
tipo: elemento
clase: componente
titulo: "Unidad de manejo e indicación - Pulsadores"
codigo: "E87"
menu: "Unidad de manejo e indicación  E87"
grupo: "Control de climatización"
clave: unidad-manejo-indicacion
variante: pulsadores
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 20"
relacionados: ["unidad-control-climatizador"]
palabras: ["E87", "bus 18 cables", "bus 1 cable", "radiocasete", "teclado"]
---

## Misión

Permitir al usuario seleccionar la temperatura, velocidad de la turbina, modo de recirculación, encendido del aire acondicionado y modo de trabajo del sistema. (pág. 20)

## Tipos y características

Botonera de pulsadores integrada en el conjunto frontal compacto de la consola central que agrupa la climatización, el radiocasete y la pantalla. (pág. 20)

## Principio de funcionamiento

Al presionar cualquier pulsador, la orden se envía a través de un bus de datos paralelo de 18 cables hacia la unidad del radiocasete. La radio procesa la pulsación y la retransmite mediante un bus de datos de 1 solo cable hacia la unidad de control del climatizador J255. (pág. 20)

## Valores de trabajo

- Alimentación eléctrica de la botonera: proporcionada directamente por el módulo del radiocasete. (pág. 20)

## Comportamiento en avería

- Al fallar un pulsador, la radio emite un mensaje genérico de avería hacia la unidad J255 (sin identificar el botón concreto). (pág. 20)
- La unidad J255 ignora todas las señales de la botonera y entra en un modo de emergencia: fija el autoclima en modo automático a 22 ºC solicitados, asume 20 ºC exteriores, desconecta el compresor y abre la entrada de aire fresco exterior. (pág. 20)
- En calefacción motorizada, mantiene fijos los parámetros existentes antes del fallo. (pág. 20)

## Cómo comprobarlo

Mediante la función "08" (bloque de valores de medición, grupos 003 y 004) del equipo de autodiagnosis. (pág. 37)

## Imágenes requeridas

- Frontal de la unidad de manejo e indicación E87 con el desglose de los pulsadores de climatización y radio — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 20
