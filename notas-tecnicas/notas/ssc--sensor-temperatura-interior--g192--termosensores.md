---
id: ssc.sensor-temperatura-interior.g192.termosensores
modulo: ssc
unidad: clima
nt: 211
tipo: elemento
clase: componente
titulo: "Transmisor de temperatura a la salida del vano reposapiés"
codigo: "G192"
menu: "Transmisor de temperatura a la G192"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
variante: g192
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "TERMOSENSORES.pdf, págs. 2"
relacionados: ["unidad-control-climatizador"]
palabras: ["G192", "NTC", "vano reposapiés", "descongelación", "valor supletorio +80 ºC", "caudal turbina"]
---

## Misión

Medir la temperatura del aire tratado a la salida del calefactor/climatizador hacia el vano reposapiés antes de ingresar en el habitáculo (pág. 2).

## Tipos y características

Transmisor térmico del tipo resistencia eléctrica variable NTC, cuya resistencia aumenta progresivamente a medida que desciende la temperatura del aire, susceptible de autodiagnóstico (pág. 2).

## Principio de funcionamiento

Registra la temperatura de salida del aire en el canal inferior e informa a la unidad de control (pág. 2). La unidad de control analiza esta señal para gestionar la distribución de aire entre las posiciones de descongelación del parabrisas / vano reposapiés y para regular el caudal impelido por la turbina de aire fresco (pág. 2).

## Valores de trabajo

- Comportamiento de la resistencia: aumenta a medida que desciende la temperatura (pág. 2).
- Valor supletorio por ausencia de señal: +80 ºC (pág. 2).

## Anomalías frecuentes

- Ausencia de la señal del transmisor (pág. 2).

## Comportamiento en avería

Si se ausenta la señal, la unidad de control calcula un valor supletorio fijo de +80 ºC y mantiene el sistema en funcionamiento (pág. 2).

## Cómo comprobarlo

Mediante la función de autodiagnóstico de la unidad de control (pág. 2).
