---
id: ssc.transmisor-presion.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 195
tipo: elemento
clase: componente
titulo: "Transmisor de presión electrónico"
codigo: "G65"
menu: "Transmisor de presión electrón G65"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 16-17"
relacionados: ["unidad-control-aire-acondicionado", "transmisor-presion"]
palabras: ["G65", "transmisor de presión", "PWM", "motores gasolina", "16 bares"]
---

## Misión

Medir de forma continua e instantánea la presión del fluido frigorífico en el ramal de alta presión para la gestión del compresor, electroventiladores y adaptación del ralentí en motorizaciones de gasolina. (págs. 16-17).

## Tipos y características

Sensor de presión electrónico capacitivo/piezoeléctrico montado en el circuito de alta presión junto a la válvula de expansión en motores de gasolina. Emite una señal modulada en anchura de impulsos (PWM). (págs. 16-17).

## Principio de funcionamiento

Transforma la presión del gas en un tren de impulsos eléctricos de frecuencia fija donde la anchura del impulso varía con la presión. Envía la señal simultáneamente a la unidad de control del motor y a la unidad de control del aire acondicionado J293. La unidad J293 conmuta la 2ª velocidad del ventilador al llegar a 16 bares y desconecta el compresor por presiones límite. (págs. 16-17).

## Valores de trabajo

- Umbral de activación de la 2ª velocidad de ventiladores: 16 bares. (pág. 17).

## Anomalías frecuentes

Fallo en la electrónica interna del sensor, corte o cortocircuito de la línea de señal PWM. (pág. 17).

## Comportamiento en avería

La unidad de control del aire acondicionado desactiva el compresor inmediatamente. La avería de este transmisor únicamente queda registrada en la memoria de averías de la unidad de control del motor. (pág. 17).
