---
id: ssc.sensor-temperatura-interior.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 100
tipo: elemento
clase: componente
titulo: "Termosensor del tablero de instrumentos con turbina de aire"
codigo: "G56"
menu: "Termosensor del tablero de ins G56"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: unidad-control-climatizador
marca: "VW"
fuentes: "208. Regulación de la temperatura.pdf, págs. 50"
relacionados: ["unidad-control-climatizador"]
palabras: ["G56", "V42", "temperatura habitáculo", "valor supletorio 24 ºC", "turbina aspiración"]
---

## Misión

Medir la temperatura efectiva del aire en el interior del habitáculo para compararla con el valor teórico fijado por el usuario (pág. 50).

## Tipos y características

Sensor de temperatura montado en la propia unidad de control J255 / panel E87, provisto de una pequeña turbina de aspiración V42 impulsada eléctricamente (pág. 50). Susceptible de autodiagnóstico (pág. 50).

## Principio de funcionamiento

La turbina V42, gestionada desde el panel de mandos, aspira aire del interior del habitáculo haciéndolo pasar sobre el termosensor G56 para evitar acumulaciones de calor local y errores de medición (pág. 50). La unidad de control analiza el valor medido y ajusta las posiciones de la chapaleta de temperatura y de la turbina de aire fresco (pág. 50).

## Valores de trabajo

- Valor supletorio por fallo de señal: +24 ºC (pág. 50).

## Anomalías frecuentes

- Avería eléctrica del sensor o fallo en el motorcillo de la turbina V42 (pág. 50).

## Comportamiento en avería

Si falta la señal de G56, el sistema aplica un valor supletorio fijo de +24 ºC y mantiene el funcionamiento del climatizador (pág. 50).

## Cómo comprobarlo

A través de la función de autodiagnóstico de la unidad de control (pág. 50).
