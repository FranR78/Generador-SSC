---
id: ssc.sensor-temperatura-interior.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 155
tipo: elemento
clase: componente
titulo: "Termosensor de temperatura interior"
menu: "Termosensor de temperatura interior"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: unidad-control-climatizador
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 104"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["NTC interior", "turbina aspiración", "valor supletorio 22 a 26 ºC", "salpicadero"]
---

## Misión

Medir la temperatura real del aire en el habitáculo para el cálculo de la posición de la trampilla de temperatura (pág. 104).

## Tipos y características

Sensor térmico NTC que puede estar integrado directamente en la UCE/panel de mandos o alojarse de forma independiente en el salpicadero (págs. 104-105). Incorpora un pequeño electro motor que hace girar una turbina de aspiración (pág. 104).

## Principio de funcionamiento

El motor con turbina aspira de forma continua un caudal de aire del habitáculo haciéndolo pasar sobre la resistencia NTC para obtener una lectura precisa sin interferencias del calor local de la consola (pág. 104). La UCE analiza la variación de resistencia para posicionar las trampillas (pág. 104).

## Valores de trabajo

- Valor supletorio por ausencia de señal: entre +22 ºC y +26 ºC según el sistema (pág. 104).

## Anomalías frecuentes

- Ausencia de señal por fallo de la resistencia NTC o agarrotamiento del motorcillo de la turbina (pág. 104).

## Comportamiento en avería

La UCE sustituye la señal ausente por un valor fijo de entre 22 ºC y 26 ºC (pág. 104). El sistema sigue funcionando, pero al seleccionar temperaturas superiores o inferiores a la de referencia, el habitáculo se calentará o enfriará por encima de lo solicitado al carecer de lectura real (pág. 104).
