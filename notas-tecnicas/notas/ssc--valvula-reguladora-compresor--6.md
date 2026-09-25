---
id: ssc.valvula-reguladora-compresor.6
modulo: ssc
unidad: clima
nt: 707
tipo: elemento
clase: componente
titulo: "Electroválvula de regulación del compresor"
menu: "Electroválvula de regulación del compr"
grupo: "Control de climatización"
clave: valvula-reguladora-compresor
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: compresor
fuentes: "6. Compresores, págs. 62-63"
relacionados: ["compresor", "unidad-control-climatizador"]
palabras: ["PWM", "vastago", "bobina", "excitacion", "2%", "98%", "minimo rendimiento"]
---

## Misión

Gobernar la presión en el cárter del compresor abriendo o cerrando el paso de agente frigorífico de alta y baja presión para ajustar la inclinación del disco oscilante (pág. 62-63).

## Tipos y características

- Montada directamente en el cuerpo exterior del compresor (pág. 62).
- Formada por una bobina eléctrica, núcleo magnético de hierro dulce, vástago desplazable y muelle de retorno (pág. 62-63).

## Principio de funcionamiento

Gobernada por la Unidad de Control de Climatización con una señal eléctrica de frecuencia fija y proporción de período variable (PWM):
- **Excitación alta (hasta 98% PWM)**: El vástago se desplaza cerrando el paso de alta presión al cárter y comunicándolo con la baja presión. La presión en el cárter disminuye y la baja presión empuja los émbolos inclinando el plato al máximo (pág. 62-63).
- **Excitación baja (hasta 2% PWM)**: El muelle desplaza el vástago permitiendo el paso de alta presión hacia el cárter. La presión en el cárter aumenta y reduce la inclinación del plato al mínimo (pág. 62-63).

## Valores de trabajo

- Tensión de alimentación: 12 V pulsatorios (pág. 63).
- Excitación PWM a mínimo rendimiento: 2% de período positivo (pág. 62-63).
- Excitación PWM a máximo rendimiento: 98% de período positivo (pág. 62-63).

## Anomalías frecuentes

Interrupción o cortocircuito de la bobina eléctrica o agarrotamiento mecánico del vástago (pág. 63).

## Comportamiento en avería

En caso de fallo en la electroválvula o en la corriente de excitación, el muelle mantiene el vástago en la posición de mínimo rendimiento (2%) para prevenir sobrepresiones en el circuito frigorífico (pág. 63).

## Cómo comprobarlo

Medición de la señal de excitación PWM mediante osciloscopio o polímetro en los bornes de la electroválvula (pág. 63).

## Mantenimiento

Sustitución de la electroválvula si existe despiece comercial, o del compresor completo en aquellos modelos donde no se suministra recambio individual (pág. 63).

## Imágenes requeridas

- Sección de la electroválvula de regulación con vástago, bobina y pasos de alta/baja presión, e ilustración de señal PWM — Fuente: 6. Compresores, pág. 62-63 (pág. 62, 63).
