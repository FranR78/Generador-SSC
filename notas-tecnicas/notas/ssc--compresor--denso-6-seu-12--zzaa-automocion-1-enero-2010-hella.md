---
id: ssc.compresor.denso-6-seu-12.zzaa-automocion-1-enero-2010-hella
modulo: ssc
unidad: clima
nt: 356
tipo: elemento
clase: componente
titulo: "Compresor Denso 6 SEU 12 de cilindrada variable"
codigo: "6 SEU 12"
menu: "Compresor Denso 6 SEU 12 de ci 6 SEU 12"
grupo: "Circuito frigorífico"
clave: compresor
variante: denso-6-seu-12
area: climatizacion
sistema: "circuito-frigorifico"
marca: "Denso"
fuentes: "ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, págs. 69-82"
relacionados: ["valvula-reguladora-compresor", "unidad-control-climatizador", "evaporador"]
palabras: ["Denso 6 SEU 12", "regulación externa", "electroválvula", "500 Hz", "ciclo de trabajo", "2% a 98%"]
---

## Misión

Ajustar de forma continua la cilindrada y el caudal de refrigerante impulsado mediante regulación electrónica externa para adaptarse a la demanda térmica de los ocupantes, la temperatura exterior y las cargas del habitáculo. (págs. 69, 72).

## Tipos y características

Compresor alternativo de pistones impulsados por disco oscilante, sin embrague electromagnético, equipado con una válvula de regulación externa fijada en la tapa posterior. En la válvula confluyen la presión de la carcasa del cárter (A), el lado de alta presión (B) y el lado de baja presión (C). (págs. 69, 76, 80).

## Principio de funcionamiento

La UCE de climatización gobierna la electroválvula enviando una señal cuadrada de 500 Hz con modulación por ancho de impulsos (PWM). Debido a la alta frecuencia, el empujador de la válvula trabaja en estado flotante.
- Mínimo rendimiento (2% de activación): la válvula permanece totalmente abierta sin corriente, comunicando la alta presión con el cárter (A y B igualan presiones). El muelle de recuperación endereza el disco oscilante a mínima carrera de los émbolos. (págs. 74, 81).
- Máximo rendimiento (98% de activación): la electroválvula se cierra impulsada por la UCE, separando el cárter (A) de la alta presión (B). La presión del cárter disminuye hacia la baja presión y la fuerza de alta presión inclina el disco oscilante a máxima carrera. (págs. 74, 82).

## Valores de trabajo

- Frecuencia de la señal de activación PWM: 500 Hz. (pág. 78).
- Margen de ciclo de trabajo (señal de activación): entre +2% (mínima carga) y +98% (plena carga). (págs. 74, 82).

## Anomalías frecuentes

Bloqueo o agarrotamiento mecánico de la electroválvula de regulación externa por suciedad o limaduras en el circuito. (págs. 82, 286).

## Comportamiento en avería

- Si la electroválvula se bloquea abierta (o sin corriente): el compresor se mantiene en posición de mínima carga (2%) y no enfría. (págs. 81, 286).
- Si la electroválvula se bloquea cerrada: el compresor trabaja permanentemente a máxima carga (98%), pudiendo provocar la congelación del evaporador. (págs. 82, 254).

## Cómo comprobarlo

1. Analizar con osciloscopio la señal cuadrada de 500 Hz enviada por la UCE a la electroválvula. (pág. 78).
2. Consultar el porcentaje de activación PWM en los bloques de valores de medición del equipo de diagnosis. (págs. 73, 78).

## Mantenimiento

Control del estado de limpieza del refrigerante y aceite del circuito. Si la electroválvula falla por suciedad, es obligatorio lavar el circuito y sustituir el filtro deshidratador. (págs. 82, 287).

## Imágenes requeridas

- Sección del compresor Denso 6 SEU 12 mostrando el disco oscilante, émbolos y la válvula de regulación externa de alta frecuencia — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 70
