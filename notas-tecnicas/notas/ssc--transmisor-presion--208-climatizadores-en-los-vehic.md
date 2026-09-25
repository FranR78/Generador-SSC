---
id: ssc.transmisor-presion.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 812
tipo: elemento
clase: componente
titulo: "Transmisor de alta presión"
codigo: "G65"
menu: "Transmisor de alta presión G65"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
marca: "VW"
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 36-37"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador", "embrague-compresor"]
palabras: ["G65", "señal PWM", "onda cuadrada", "cristal de silicio", "50 Hz"]
---

## Misión

Medir de forma continua la presión del agente frigorífico en el lado de alta presión para gestionar la desconexión de seguridad del compresor y el escalonamiento de los electroventiladores. (págs. 36-37)

## Tipos y características

Sensor electrónico piezoeléctrico equipado con un microprocesador integrado que sustituye al conmutador de presión mecánico F129 en los climatizadores de nueva generación. (pág. 36)

## Principio de funcionamiento

El refrigerante actúa sobre un cristal de silicio cuya resistencia varía en función de la presión. La electrónica del sensor convierte esta deformación en una señal digital rectangular modulada en anchura de impulsos (PWM) con una frecuencia fija de 50 Hz. El ancho del impulso varía proporcionalmente con la presión detectada. (págs. 36-37)

## Valores de trabajo

- Frecuencia de la señal PWM: 50 Hz (periodo constante de 20 ms). (pág. 37)
- Ancho de pulso a baja presión (0,14 MPa / 1,4 bar): 2,6 ms (13% del periodo). (pág. 37)
- Ancho de pulso a alta presión (3,7 MPa / 37 bar): 18 ms (90% del periodo). (pág. 37)

## Anomalías frecuentes

Interrupción en la línea de señal PWM o fallo en la tensión de alimentación del sensor. (págs. 36-37)

## Comportamiento en avería

La unidad de control desactiva el compresor por seguridad y fuerza el funcionamiento permanente del ventilador del radiador al máximo escalón. (págs. 36-37)

## Cómo comprobarlo

Analizar la señal digital PWM con un osciloscopio o verificar los valores de presión calculados en el bloque de valores de medición con el equipo de autodiagnóstico. (págs. 37, 71)

## Imágenes requeridas

- Muestra de la onda cuadrada de 50 Hz del transmisor G65 con la relación entre ancho de pulso y presión — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 37
