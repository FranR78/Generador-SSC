---
id: ssc.sensor-temperatura-interior.sensor-temperatura-interior
modulo: ssc
unidad: clima
nt: 180
tipo: elemento
clase: componente
titulo: "Transmisor de temperatura interior"
codigo: "G56"
menu: "Transmisor de temperatura inte G56"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "Sensor temperatura interior.pdf, págs. 1-2"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["G56", "NTC", "turbina de aspiración", "columna de dirección", "valor fijo 22 ºC", "parpadeo display"]
---

## Misión

Suministrar la lectura real de la temperatura del aire del habitáculo a la unidad del autoclima para calcular la posición de la trampilla de temperatura en el modo de funcionamiento automático (pág. 1).

## Tipos y características

Sensor térmico del tipo resistencia NTC ubicado detrás del tablero de instrumentos, junto a la columna de dirección, provisto de una turbina de aspiración impulsada por un motor eléctrico (pág. 1).

## Principio de funcionamiento

El motor eléctrico hace girar la turbina de forma continua para provocar un flujo constante de aire del habitáculo a través de la resistencia NTC, garantizando una medición real de la temperatura ambiental sin interferencias de calor estático (pág. 1). La variación de resistencia de la NTC es analizada por la unidad del autoclima para posicionar la trampilla de temperatura (pág. 1).

## Valores de trabajo

- Campo o rango de medición de la resistencia NTC: de -40 ºC a +85 ºC (pág. 1).

## Anomalías frecuentes

- Avería eléctrica o fallo de señal en el transmisor (pág. 2).

## Comportamiento en avería

Al detectarse una avería en el transmisor, la unidad de control toma como referencia un valor supletorio fijo de 22 ºC (pág. 2). Al seleccionar temperaturas superiores o inferiores a 22 ºC, el sistema sigue funcionando pero calienta o enfría el habitáculo más allá de lo solicitado al no disponer de lectura real (pág. 2). Cada vez que se conecta el autoclima, parpadean todos los dígitos del display (pág. 2).

## Imágenes requeridas

- Ubicación del transmisor G56 junto a la columna de dirección, turbina de aspiración y resistencia NTC — Fuente: Sensor temperatura interior.pdf, págs. 1-2
