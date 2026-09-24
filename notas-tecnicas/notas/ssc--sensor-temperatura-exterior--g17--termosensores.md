---
id: ssc.sensor-temperatura-exterior.g17.termosensores
modulo: ssc
unidad: clima
nt: 208
tipo: elemento
clase: componente
titulo: "Termosensor de temperatura exterior"
codigo: "G17"
menu: "Termosensor de temperatura ext G17"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
variante: g17
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "TERMOSENSORES.pdf, págs. 1"
relacionados: ["unidad-control-climatizador", "sensor-temperatura-exterior"]
palabras: ["G17", "armazón anterior", "temperatura exterior", "valor supletorio +10 ºC", "recirculación"]
---

## Misión

Detectar la temperatura exterior efectiva para que la unidad de control gestione la posición de la chapaleta de temperatura y la velocidad de la turbina de aire fresco (pág. 1).

## Tipos y características

Termosensor instalado en el armazón anterior del vehículo, susceptible de autodiagnóstico (pág. 1).

## Principio de funcionamiento

Mide la temperatura ambiental exterior y envía la lectura a la unidad de control (pág. 1). La unidad de control analiza la señal comparándola con la del segundo sensor G89 (ubicado en el conducto de aspiración) y asume siempre la cifra más baja de ambas para regular la chapaleta de mezcla de temperatura y el caudal de la turbina de aire (pág. 1).

## Valores de trabajo

- Valor supletorio por ausencia de señal en G17 y G89: +10 ºC (pág. 1).

## Anomalías frecuentes

- Ausencia o pérdida de la señal del sensor (pág. 1).

## Comportamiento en avería

Si se ausenta la señal de G17, la unidad de control emplea automáticamente el valor medido por el termosensor G89 en el conducto de aspiración de aire fresco (pág. 1). Si también se ausenta la señal de G89, el sistema continúa en funcionamiento aplicando un valor supletorio fijo de +10 ºC y desactivando el modo de recirculación de aire (pág. 1).

## Cómo comprobarlo

A través de la función de autodiagnóstico de la unidad de control (pág. 1).
