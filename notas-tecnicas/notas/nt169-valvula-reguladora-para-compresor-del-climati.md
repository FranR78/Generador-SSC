---
id: ssc.sin-clasificar.valvula-reguladora-para-compresor-del-climatizador
modulo: ssc
unidad: sin-clasificar
nt: 169
titulo: "Válvula Reguladora Para Compresor Del Climatizador"
codigo: "N280"
ubicacion: "Alojada en la tapa posterior del compresor de climatización (Denso)"
aplicacion: "Control dinámico del rendimiento en compresores de cilindrada variable sin embrague magnético"
menu: "Válvula Reguladora Para Compre N280"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Ajustar la presión interna en el cárter del compresor para modificar la inclinación del plato oscilante y regular la cilindrada entre el mínimo (+2%) y el máximo (+98%).

## Principio de funcionamiento

Electroválvula proporcional accionada por modulación de anchura de impulsos (PWM) a una frecuencia fija de 500 Hz emitida por la UCE de red de a bordo -J519- (tras recibir la demanda de corriente calculada por -J255-). Al aumentar la corriente (hasta 0,65 A), la válvula cierra la comunicación entre alta presión y cárter, reduciendo la presión interna y aumentando la carrera de los pistones a plena carga. A 0 A, la válvula abre, sube la presión del cárter y reduce la carrera al mínimo.

## Características

Electroválvula de solenoide de 2 vías con conector de 2 polos integrada en el compresor. Excitada por corriente continua modulada en pulso PWM.

## Valores de trabajo

| Parámetro | Valor numérico | Condición de trabajo |
|---|---|---|
| **Frecuencia de la señal PWM** | 500 Hz (período constante de 2 ms) | Generada por UCE J519 |
| **Corriente de control** | 0,0 A (desconectado) a 0,65 A (plena carga) | Medido en bloque 001 campo 2 de J255 |
| **Ancho de pulso PWM** | 0% (Econ OFF) a 75%-100% (Temp LO / Plena carga) | Medido con osciloscopio |

## Anomalías frecuentes

Interrupción o cortocircuito de la bobina electromagnética; agarrotamiento mecánico de la aguja interna por limaduras metálicas; congelación del paso de gas por presencia de humedad en el circuito.

## Comportamiento en avería

Si no recibe corriente (0 A), el compresor permanece en cilindrada mínima (~2%), las presiones de alta y baja se igualan entre 4,5 y 6,0 bar y no se genera aire frío. Si se agarrota en posición cerrada, el compresor trabaja continuamente al 100% congelando el evaporador.

## Cómo comprobarlo

1. Verificar en el bloque de valores de medición 001 de J255: Campo 1 (corriente teórica) y Campo 2 (corriente efectiva medida por J519) deben subir progresivamente hasta ~0,65 A al seleccionar "LO".  
2. Medir la señal cuadrada PWM con osciloscopio entre las vías del conector: Comprobar el período constante de 2 ms (500 Hz) y la variación del ancho de pulso positivo entre el 0% (Econ) y el 80-100% (Auto/LO).
