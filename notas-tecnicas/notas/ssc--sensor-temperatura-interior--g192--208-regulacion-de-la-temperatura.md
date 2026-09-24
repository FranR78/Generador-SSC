---
id: ssc.sensor-temperatura-interior.g192.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 101
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
marca: "VW"
fuentes: "208. Regulación de la temperatura.pdf, págs. 50-51"
relacionados: ["unidad-control-climatizador"]
palabras: ["G192", "resistencia NTC", "valor supletorio 80 ºC", "distribución aire reposapiés"]
---

## Misión

Medir la temperatura del aire impulsado hacia el habitáculo a la salida del calefactor/climatizador en el canal del vano reposapiés (pág. 50).

## Tipos y características

Resistencia eléctrica de coeficiente de temperatura negativo (NTC), cuya resistencia aumenta a medida que disminuye la temperatura (pág. 50). Susceptible de autodiagnóstico (pág. 50).

## Principio de funcionamiento

Mide la temperatura de impulsión del aire e informa a la unidad de control (pág. 50). Con esta señal, la unidad de control gestiona la distribución de aire entre las posiciones de descongelación y vano reposapiés, regulando además el caudal impelido por la turbina V2 (pág. 50).

## Valores de trabajo

- Valor supletorio por fallo de señal: +80 ºC (pág. 50).

## Anomalías frecuentes

- Desconexión o cortocircuito de la resistencia NTC (pág. 50).

## Comportamiento en avería

Al ausentarse la señal de G192, la unidad de control calcula un valor supletorio fijo de +80 ºC y mantiene el sistema en marcha (pág. 50).

## Cómo comprobarlo

Mediante la lectura de la memoria de averías en el autodiagnóstico (pág. 50).
