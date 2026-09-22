---
id: ssc.sin-clasificar.transmisores-de-temperatura-del-aire-de-entrada-g191-y-g192
modulo: ssc
unidad: sin-clasificar
nt: 822
titulo: "Transmisores De Temperatura Del Aire De Entrada G191 Y G192"
codigo: "G191 (difusor central) / G192 (difusor reposapiés)"
ubicacion: "G191 montado en el difusor central; G192 montado en el difusor de la zona de los pies"
aplicacion: "Sistema Autoclima en SEAT Ibiza/Córdoba '99"
menu: "Transmisores De Temperatura De G191 (difusor central) / G192 (difusor reposapiés)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del aire tratado impulsado hacia la zona superior e inferior del habitáculo para regular la mezcla de aire.

## Principio de funcionamiento

Resistencias térmicas NTC. La unidad del Autoclima procesa y utiliza el valor medio de las lecturas registradas por ambos transmisores para controlar la trampilla de temperatura.

## Características

Dos sondas térmicas NTC con rango de medición entre -40 ºC y +85 ºC.

## Valores de trabajo

* Rango de medición: -40 ºC a +85 ºC.
* Valor procesado por la UCE: Promedio aritmético de las señales de G191 y G192.

## Anomalías frecuentes

Corte eléctrico, cortocircuito a masa en el cableado o deriva de la resistencia NTC.

## Comportamiento en avería

Ante la pérdida de uno de los transmisores, la UCE anula la regulación automática manteniendo fijos los parámetros del momento de la avería. Al conectar el Autoclima parpadean todos los dígitos del display.

## Cómo comprobarlo

Consultar el grupo de valores de medición 006 (campo 2 para G191 y campo 3 para G192) mediante la función 08 de autodiagnóstico.

## Imágenes requeridas

- Ubicación de los transmisores G191 y G192 en la unidad climática — Fuente: cd.pdf, pág. 13
