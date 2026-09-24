---
id: ssc.sensor-temperatura-interior.g56.termosensores
modulo: ssc
unidad: clima
nt: 210
tipo: elemento
clase: componente
titulo: "Termosensor del tablero de instrumentos con turbina de aire"
codigo: "G56"
menu: "Termosensor del tablero de ins G56"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
variante: g56
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: unidad-control-climatizador
fuentes: "TERMOSENSORES.pdf, págs. 1-2"
relacionados: ["unidad-control-climatizador"]
palabras: ["G56", "V42", "turbina de aire", "habitáculo", "valor supletorio +24 ºC", "valor teórico"]
---

## Misión

Transmitir a la unidad de control la temperatura efectiva del aire en el interior del habitáculo para compararla con el valor teórico seleccionado y ajustar las funciones de la chapaleta de temperatura y de la turbina de aire fresco (págs. 1-2).

## Tipos y características

Termosensor instalado habitualmente en la propia unidad de control del Climatronic / tablero de instrumentos, ubicado en la corriente de aire impulsada por una pequeña turbina de aspiración V42, susceptible de autodiagnóstico (págs. 1-2).

## Principio de funcionamiento

La turbina de aspiración V42, gestionada desde el panel de mandos e indicación, aspira aire directamente del habitáculo haciéndolo pasar de forma continua sobre el termosensor G56 para evitar acumulaciones de calor local y errores de medición (pág. 1). La unidad de control compara la lectura con el valor teórico fijado y gobierna correspondientemente los servomotores de la chapaleta de mezcla y la velocidad de la turbina (págs. 1-2).

## Valores de trabajo

- Valor supletorio por ausencia de señal: +24 ºC (pág. 2).

## Anomalías frecuentes

- Ausencia de la señal del sensor por fallo eléctrico o de la turbina (pág. 2).

## Comportamiento en avería

Si se ausenta la señal, la unidad de control pone en vigor un valor supletorio fijo de +24 ºC y mantiene el sistema en funcionamiento (pág. 2).

## Cómo comprobarlo

Mediante la función de autodiagnóstico del sistema (pág. 2).

## Imágenes requeridas

- Módulo de mandos Climatronic con la turbina de aspiración de aire V42 y el termosensor del tablero de instrumentos G56 — Fuente: TERMOSENSORES.pdf, pág. 2
