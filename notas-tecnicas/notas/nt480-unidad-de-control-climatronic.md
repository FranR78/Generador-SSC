---
id: ssc.sin-clasificar.unidad-de-control-climatronic
modulo: ssc
unidad: sin-clasificar
nt: 480
titulo: "Unidad De Control Climatronic"
codigo: "J255"
ubicacion: "Salpicadero / consola central del vehículo"
aplicacion: "Sistema de climatización del Audi A7 (2012) y Audi A8 (2011)"
menu: "Unidad De Control Climatronic J255"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Unidad de control principal encargada de procesar las señales de los sensores, gestionar la lógica de confort y gobernar los actuadores del sistema Climatronic.

## Principio de funcionamiento

Se comunica a través del bus CAN de confort (Convenience CAN) y del bus CAN de pantalla y mando. Procesa los datos recibidos y comanda por bus LIN a los servomotores de las trampillas de aire y al cuadro de mandos trasero E265, además de controlar componentes como el regulador del compresor N280.

## Características

Módulo de control electrónico integrado con interfaces para bus CAN y bus LIN.

## Comportamiento en avería

Interrupción o fallo en la regulación automática de la temperatura, caudal y distribución de aire en el habitáculo.

## Cómo comprobarlo

Diagnóstico electrónico mediante la lectura de memoria de averías e inspección de la red de buses de datos.
