---
id: ssc.transmisor-presion.manual-aire-acondicionado-climatizador-f
modulo: ssc
unidad: clima
nt: 318
tipo: elemento
clase: componente
titulo: "Presostato electrónico o transmisor de alta presión"
menu: "Presostato electrónico o transmisor de"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
marca: "Formauto"
fuentes: "MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, págs. 14-17"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador"]
palabras: ["presostato electrónico", "transmisor de alta presión", "cristal de silicio", "PWM", "50 Hz", "20 ms"]
---

## Misión

Supervisar de forma continua la presión del agente frigorífico en todo el ciclo de trabajo y convertir la magnitud física de la presión en una señal eléctrica rectangular PWM dirigida a las unidades de control del motor y del climatizador. (págs. 14-15).

## Tipos y características

Sensor de presión electrónico montado en la tubería de alta presión. Incorpora un cristal de silicio y un microprocesador integrado en su cuerpo. (págs. 14-15).

## Principio de funcionamiento

La presión del refrigerante deforma un cristal de silicio. Al deformarse, el cristal altera su resistencia eléctrica y modifica una tensión de medición. El microprocesador del sensor convierte esa tensión en una señal rectangular digital modulada en anchura de impulsos (PWM) con una frecuencia fija de 50 Hz (período T = 20 ms = 100%).
- A presión baja (0,14 MPa / 1,4 bar): la deformación es leve y la anchura de impulso generada es de 2,6 ms (13% del período). (págs. 15-16).
- A presión alta (3,7 MPa / 37 bar): la deformación del cristal es intensa y la anchura de impulso aumenta a 18 ms (90% del período). (pág. 17).

## Valores de trabajo

- Frecuencia de la señal PWM: 50 Hz (duración del período T = 20 ms). (pág. 16).
- Presión baja (0,14 MPa / 1,4 bar): anchura de impulso de 2,6 ms (13%). (pág. 16).
- Presión alta (3,7 MPa / 37 bar): anchura de impulso de 18 ms (90%). (pág. 17).

## Anomalías frecuentes

Fallo interno del cristal de silicio o interrupción en el cableado de señal y alimentación del sensor. (pág. 15).

## Comportamiento en avería

Si la unidad de control para el ventilador del líquido refrigerante no detecta la señal del transmisor, desactiva el compresor inmediatamente por motivos de seguridad. (pág. 15).

## Cómo comprobarlo

1. Comprobar la señal de salida modulada en anchura de impulsos con un osciloscopio en los pines del sensor (frecuencia 50 Hz, período 20 ms). (págs. 15-16).
2. Consultar el parámetro de presión en el bloque de valores de medición con el equipo de diagnosis. (pág. 15).

## Mantenimiento

Mantener limpios y protegidos los terminales del conector estanco del transmisor. (pág. 14).

## Imágenes requeridas

- Gráfica de la señal digital PWM generada por el transmisor de alta presión a baja y alta presión — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 16
