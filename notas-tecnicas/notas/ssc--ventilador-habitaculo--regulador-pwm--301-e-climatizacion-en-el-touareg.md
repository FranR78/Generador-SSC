---
id: ssc.ventilador-habitaculo.regulador-pwm.301-e-climatizacion-en-el-touareg
modulo: ssc
unidad: clima
nt: 824
tipo: elemento
clase: componente
titulo: "Sensor para regulación del soplador G462"
codigo: "G462"
menu: "Sensor para regulación del sop G462"
grupo: "Distribución de aire"
clave: ventilador-habitaculo
variante: regulador-pwm
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: distribucion-aire
marca: "VW"
fuentes: "301_e         Climatización en el Touareg.pdf, págs. 72"
relacionados: ["unidad-control-climatizador"]
palabras: ["G462", "Bitron", "PWM", "soplador V305", "señal de respuesta"]
---

## Misión

Regular de forma electrónica y continua la velocidad del motor del soplador del climatizador (V305) respondiendo a las órdenes de la unidad de control J255. (pág. 72)

## Tipos y características

Módulo electrónico de regulación de potencia (fabricado por Bitron) instalado directamente en la carcasa del climatizador junto al motor del soplador. (págs. 72, 80)

## Principio de funcionamiento

La unidad de control J255 envía al módulo G462 una señal modulada por anchura de impulso (PWM). El regulador procesa esta señal y ajusta la tensión de alimentación aplicada al motor del soplador V305. Asimismo, el módulo G462 devuelve a la unidad de control J255 una señal de "información de respuesta" sobre el estado operativo de la turbina. (pág. 72)

## Valores de trabajo

- Tipo de señal de mando: señal digital PWM procedente de la unidad J255. (pág. 72)
- Alimentación eléctrica: Borne 30 (positivo de batería) y Borne 31 (masa). (pág. 72)

## Anomalías frecuentes

Fallo de los componentes electrónicos de potencia del módulo por sobrecalentamiento. (pág. 72)

## Comportamiento en avería

Inoperatividad total del soplador del habitáculo o funcionamiento permanente a la máxima velocidad sin posibilidad de regulación. (pág. 72)

## Cómo comprobarlo

Verificar con osciloscopio la llegada de la señal PWM desde la unidad J255 y medir la tensión continua de salida suministrada al motor V305. (pág. 72)

## Mantenimiento

Reemplazar el filtro antipolvo y antipolen en los intervalos prescritos para evitar sobreesfuerzos térmicos en el módulo regulador. (pág. 23)

## Imágenes requeridas

- Esquema del regulador G462 recibiendo la señal PWM de la centralita J255 y alimentando al motor del soplador V305 — Fuente: 301_e         Climatización en el Touareg.pdf, pág. 72
