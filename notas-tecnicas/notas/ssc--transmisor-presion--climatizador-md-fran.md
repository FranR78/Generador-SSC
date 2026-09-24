---
id: ssc.transmisor-presion.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 620
tipo: elemento
clase: componente
titulo: "Transmisor de alta presión"
codigo: "G819"
menu: "Transmisor de alta presión G819"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 14-15"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador"]
palabras: ["G819", "50 Hz", "PWM", "cristal de silicio", "13%", "90%", "deformación"]
---

## Misión

Medir de manera continua y progresiva la presión real del refrigerante mediante una señal electrónica modulada en anchura de impulso (PWM). (págs. 14-15)

## Tipos y características

Sensor piezoeléctrico de cristal de silicio con microprocesador integrado montado en la tubería de alta presión. (pág. 15)

## Principio de funcionamiento

La presión del refrigerante deforma el cristal de silicio, alterando su resistencia eléctrica. El microprocesador convierte esta variación en una señal rectangular digitalizada de 50 Hz. A baja presión (1,4 bar), el ancho del pulso es de 2,6 ms (13% del periodo). A alta presión (37 bar), la anchura del pulso se expande a 18 ms (90% del periodo). (pág. 15)

## Valores de trabajo

- Frecuencia de señal: 50 Hz (periodo total de 20 ms). (pág. 15)
- Impulso a baja presión (1,4 bares / 0,14 MPa): 2,6 ms (13% duty cycle). (pág. 15)
- Impulso a alta presión (37 bares / 3,7 MPa): 18 ms (90% duty cycle). (pág. 15)

## Anomalías frecuentes

Deterioro de la electrónica interna del sensor o corte en la línea de señal. (pág. 15)

## Comportamiento en avería

La unidad de control desactiva el compresor por seguridad y registra el código de fallo en la memoria de la UCE del motor. (pág. 15)

## Cómo comprobarlo

Comprobar con osciloscopio o multímetro con frecuencia la variación del ancho de pulso en el cable de señal al subir la presión. (pág. 15)

## Mantenimiento

No requiere mantenimiento periódico más allá de la inspección de su conector. (pág. 15)

## Imágenes requeridas

- Muestra de la señal PWM de 50 Hz en osciloscopio con variaciones del ciclo de trabajo según la presión — Fuente: CLIMATIZADOR MD FRAN.docx, pág. 15
