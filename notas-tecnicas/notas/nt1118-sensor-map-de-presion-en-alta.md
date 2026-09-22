---
id: ssc.sin-clasificar.sensor-map-de-presion-en-alta
modulo: ssc
unidad: sin-clasificar
nt: 1118
titulo: "Sensor Map De Presión En Alta"
ubicacion: "Montado en la tubería de alta presión del circuito frigorífico"
aplicacion: "Sustituto electrónico del presostato trinario en sistemas de climatización modernos"
menu: "Sensor Map De Presión En Alta"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir de forma continua la presión del fluido refrigerante y transmitir una señal electrónica para regular la velocidad de los electroventiladores, gestionar la carga sobre el motor y proteger el compresor.

## Principio de funcionamiento

Sensor piezoeléctrico compuesto por un cristal de silicio y un microprocesador. La presión de alta deforma el cristal de silicio cambiando su resistencia eléctrica. El microprocesador interno convierte la variación de tensión en una señal digital cuadrada de 12 V modulada en anchura de impulso (PWM) proporcional a la presión.

## Características

Sensor electrónico estanco con obús de retención hidráulica (permite sustitución sin evacuar la carga de gas). Alimentado a 12 V (o 5 V en versiones analógicas de 1 a 4 V).

## Valores de trabajo

* Tensión de alimentación: 12 V (o 5 V según versión).
* Ancho de impulso PWM a presión de 1,4 bar (mínima): **2,6 ms**.
* Ancho de impulso PWM a reposo (~5 bar): **5 ms**.
* Ancho de impulso PWM a presión de trabajo (~14 bar): **8 ms**.
* Ancho de impulso PWM a presión de 37 bar (máxima): **18 ms**.
* En versión analógica (5 V): Señal variable comprendida entre **1 V y 4 V**.

## Anomalías frecuentes

Avería en la electrónica del microprocesador o sulfatación en los pines del conector de 3 vías.

## Comportamiento en avería

La UCE registra el código de error *"Transmisor de alta presión, señal muy baja"*, interrumpiendo inmediatamente la activación del compresor por motivos de seguridad.

## Cómo comprobarlo

Conectar un osciloscopio en el pin de señal respecto a masa para verificar la frecuencia y el ancho del impulso en milisegundos (ms) según la presión del manómetro, o comprobar la lectura en bares en el equipo de diagnosis.

## Imágenes requeridas

- Componentes internos del sensor MAP de alta presión — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 89
- Oscilogramas de la señal PWM del sensor MAP a 5 bar y 14 bar — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 90
