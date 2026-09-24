---
id: ssc.valvula-reguladora-compresor.6-compresores
modulo: ssc
unidad: clima
nt: 47
tipo: elemento
clase: componente
titulo: "Electroválvula de regulación del compresor"
codigo: "N280"
menu: "Electroválvula de regulación d N280"
grupo: "Circuito frigorífico"
clave: valvula-reguladora-compresor
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: compresor
fuentes: "6. Compresores.pdf, págs. 62-63"
relacionados: ["compresor", "unidad-control-climatizador"]
palabras: ["electroválvula regulación", "señal PWM", "periodo positivo", "vástago", "posición de seguridad", "2% a 98%"]
---

## Misión

Regular la presión en la cámara del cárter del compresor mediante el control electrónico de los pasos de fluido entre alta y baja presión (págs. 62-63).

## Tipos y características

Electroválvula proporcional montada directamente en la carcasa exterior del compresor (págs. 58, 63). Formada por una bobina eléctrica de accionamiento, un núcleo magnético de hierro dulce, un muelle de retorno y un vástago de cierre de orificios (pág. 63). Gobernada directamente por la Unidad de Control de Climatización (pág. 63).

## Principio de funcionamiento

La Unidad de Control excita la bobina con una señal de tensión de frecuencia fija y proporción de periodo variable (señal modulada en anchura de pulso, PWM) (pág. 63):
- Excitación elevada (hasta 98% de periodo positivo): la fuerza magnética desplaza el vástago cerrando el paso de alta presión al cárter y abriendo la comunicación entre cárter y baja presión. La presión de cárter cae y el compresor pasa a máximo rendimiento (pág. 63).
- Excitación reducida (hasta 2% de periodo positivo): la fuerza magnética disminuye y el muelle retrotrae el vástago, comunicando la alta presión con el cárter. La presión en el cárter sube y el compresor pasa a mínimo rendimiento (carrera nula) (pág. 63).

## Valores de trabajo

- Señal de control: frecuencia fija con ciclo de trabajo PWM variable (pág. 63).
- Margen de excitación del periodo positivo: de 2% (mínimo rendimiento) a 98% (máximo rendimiento) (pág. 63).
- Tensión de excitación: impulsos de 0 V a 12 V (pág. 63).

## Anomalías frecuentes

- Cortocircuito o interrupción eléctrica en la bobina de la electroválvula (pág. 63).
- Agarrotamiento mecánico del vástago por suciedad o virutas en el fluido (pág. 63).

## Comportamiento en avería

En caso de avería eléctrica de la electroválvula o corte de la señal de excitación, el muelle desplaza el vástago a la posición de reposo, manteniendo la comunicación de alta presión al cárter. El compresor se queda en posición de mínimo rendimiento (carrera nula) como medida de seguridad para evitar sobrepresiones en el circuito (pág. 63).

## Cómo comprobarlo

Medir con osciloscopio la señal de excitación PWM enviada por la unidad de control entre los terminales de la electroválvula (pág. 63).

## Mantenimiento

En algunos modelos de compresores no existe despiece ni comercialización de la electroválvula como recambio independiente, exigiendo la sustitución completa del compresor en caso de avería de la electroválvula (pág. 63).

## Imágenes requeridas

- Esquema interno de la electroválvula de regulación con vástago, núcleo y pasajes de alta/baja presión — Fuente: 6. Compresores.pdf, págs. 62-63
- Oscilogramas de la corriente de excitación PWM al 2% y al 98% para el control de la electroválvula — Fuente: 6. Compresores.pdf, pág. 63
