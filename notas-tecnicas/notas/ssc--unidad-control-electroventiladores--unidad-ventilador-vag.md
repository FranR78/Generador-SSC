---
id: ssc.unidad-control-electroventiladores.unidad-ventilador-vag
modulo: ssc
unidad: clima
nt: 569
tipo: elemento
clase: componente
titulo: "Unidad de control para el ventilador del líquido refrigerante"
codigo: "J293"
menu: "Unidad de control para el vent J293"
grupo: "Control de climatización"
clave: unidad-control-electroventiladores
area: climatizacion
sistema: "control-climatizacion"
marca: "VW"
fuentes: "Unidad Ventilador VAG.pdf, págs. 41"
relacionados: ["transmisor-presion", "electroventilador-condensador", "embrague-compresor", "bomba-recirculacion-liquido-refrigerante"]
palabras: ["J293", "PWM", "transmisor G65", "electroventilador", "acoplamiento electromagnético", "cronorruptor"]
---

## Misión

Procesar las señales de entrada para la activación y desactivación de los escalones de velocidad del ventilador del radiador y del acoplamiento electromagnético para el compresor del climatizador, además de vigilar la temperatura del líquido refrigerante. (pág. 41)

## Tipos y características

Va integrada en el conjunto interconectado de unidades de control del vehículo. Existen versiones variantes de la conmutación en las que sus funciones se integran directamente en la unidad de control para el climatizador.
En la versión de nueva generación, ha sido revisada técnicamente y adaptada en sus funciones para trabajar conjuntamente con el transmisor de alta presión G65, caracterizándose por el diseño modificado de sus terminales de conector. Puede incorporar un módulo cronorruptor para excitar el funcionamiento de la bomba de reflujo de líquido refrigerante V51 (por ejemplo, en el motor 1,8 l 5V / 165 kW). (pág. 41)

## Principio de funcionamiento

En la versión variante básica, recibe e interpreta señales de entrada procedentes del termoconmutador F18, del conmutador de presión F129 y del panel de mandos e indicación E87 (en versiones con climatizador automático).
En la versión adaptada al transmisor de alta presión G65, analiza la señal modulada en anchura de los impulsos (PWM) emitida por dicho transmisor para vigilar de forma continua toda el área de presión del circuito frigorífico. Mantiene un intercambio bidireccional de señales con las unidades de control del motor y del cambio. (pág. 41)

## Imágenes requeridas

- Unidad de control para el ventilador del líquido refrigerante J293 y conector con terminales de diseño modificado — Fuente: Unidad Ventilador VAG.pdf, pág. 41
