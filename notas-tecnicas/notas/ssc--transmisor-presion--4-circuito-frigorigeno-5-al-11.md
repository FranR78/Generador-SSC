---
id: ssc.transmisor-presion.4-circuito-frigorigeno-5-al-11
modulo: ssc
unidad: clima
nt: 694
tipo: elemento
clase: componente
titulo: "Transmisor de presión"
menu: "Transmisor de presión"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, págs. 195, 228-238"
relacionados: ["presostato", "unidad-control-climatizador", "electroventilador-condensador"]
palabras: ["piezoelectrico", "cristal de silicio", "PWM", "50 Hz", "20 ms", "ciclo de trabajo"]
---

## Misión

Captar de forma continua el valor de presión del refrigerante y transformarlo en una señal eléctrica para las unidades de control del motor y del electroventilador (pág. 195, 229).

## Tipos y características

- Sensor electrónico piezoeléctrico dotado de una resistencia de cristal de silicio y un microprocesador integrado (pág. 195, 231).
- Conector de 3 vías: Positivo de alimentación (+5 V), Negativo/Masa (-) y Salida de señal modulada en anchura de impulsos (PWM) (pág. 231, 232).

## Principio de funcionamiento

La presión del refrigerante deforma el cristal de silicio cambiando su resistencia eléctrica. El microprocesador convierte la tensión de medición en una señal cuadrada de frecuencia fija (50 Hz / período de 20 ms) cuya anchura de impulso (ciclo de trabajo) es directamente proporcional a la presión existente (pág. 231-237):
- A presión baja: anchura del impulso corta (ejemplo: 2,6 ms) (pág. 232, 233).
- A presión alta (creciente): la deformación del cristal aumenta la anchura del impulso (ejemplo: 18 ms) (pág. 235-237).

## Valores de trabajo

- Tensión de alimentación: +5 V (pág. 231).
- Duración del período de la señal PWM: 20 ms (Frecuencia = 50 Hz) (pág. 233, 237).
- Anchura de impulso a baja presión: 2,6 ms (pág. 233).
- Anchura de impulso a alta presión: 18 ms (pág. 237).

## Anomalías frecuentes

Avería del cristal de silicio por picos de presión, fallo del microprocesador o sulfatación en el conector de 3 bornes.

## Comportamiento en avería

La UCE inhabilita el acoplamiento del compresor por seguridad o fuerza el funcionamiento continuo de los electroventiladores a máxima velocidad.

## Cómo comprobarlo

- Medición con osciloscopio en la vía de señal: comprobar la presencia de la señal cuadrada con período fijo de 20 ms (50 Hz) y verificar la variación del ancho de impulso al modificar la presión (pág. 233, 237).
- Lectura del parámetro de presión en el bloque de valores de medición con el equipo de diagnosis (pág. 229).

## Mantenimiento

Sustitución completa del sensor en caso de señal deformada o ausencia de modulación PWM.

## Imágenes requeridas

- Detalle del transmisor de presión con cristal de silicio, microprocesador y forma de la onda PWM — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL.pptx, pág. 231, 233 y 237 (pág. 231, 233, 237).
