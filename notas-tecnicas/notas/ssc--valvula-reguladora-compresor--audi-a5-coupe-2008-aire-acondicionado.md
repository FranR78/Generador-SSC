---
id: ssc.valvula-reguladora-compresor.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 839
tipo: elemento
clase: componente
titulo: "Válvula reguladora del compresor de climatización N280"
codigo: "N280"
menu: "Válvula reguladora del compres N280"
grupo: "Circuito frigorífico"
clave: valvula-reguladora-compresor
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: compresor
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 176-177"
relacionados: ["compresor", "unidad-control-climatizador"]
palabras: ["N280", "PWM", "corriente de control", "J519", "cilindrada variable", "sin acoplamiento"]
---

## Misión

Ajustar la presión interna en la cámara del compresor para modificar la inclinación del plato oscilante y variar de forma continua el volumen de desplazamiento de los pistones. (págs. 31, 176)

## Tipos y características

Electroválvula de regulación de presión proporcional alojada en la culata posterior del compresor. Es excitada por la unidad de control de la red de a bordo J519 tras recibir la solicitud de la centralita Climatronic J255. (págs. 12, 176)

## Principio de funcionamiento

Recibe una señal eléctrica modulada por anchura de impulsos (PWM). La unidad J519 regula la intensidad de corriente efectiva que atraviesa la bobina (entre 0 A y 0,8 A). Al variar el campo magnético, la válvula modifica la presión de carrera de los pistones, aumentando o reduciendo el flujo de gas comprimido inyectado al evaporador. (págs. 42, 176-177)

## Valores de trabajo

- Corriente de control nominal de activación: > 0,3 A para asegurar el inicio de compresión. (pág. 120)
- Modulación PWM en demanda máxima de frío (modo Auto / LO): señal cuadrada con anchura de pulso entre el 75% y el 100%. (pág. 177)
- Modulación PWM en modo OFF o AC OFF: 0 A (0% de anchura de pulso). (pág. 177)

## Anomalías frecuentes

Fallo de aislamiento en la bobina electromagnética o corte en las líneas de alimentación de potencia desde la unidad J519. (págs. 176-177)

## Comportamiento en avería

El compresor permanece regulado al mínimo rendimiento (aproximadamente 0% de caudal), interrumpiéndose la producción de aire frío. (págs. 155, 177)

## Cómo comprobarlo

Conectar el osciloscopio digital (DSO) con el set de cables adaptadores V.A.G 1594 C al conector de la válvula para verificar la forma de onda rectangular de la señal PWM y medir la corriente efectiva en el bloque de valores de medición. (págs. 42, 176-177)

## Mantenimiento

La válvula N280 forma un conjunto indivisible con el cuerpo del compresor de recambio; si sufre un fallo mecánico interno exige la sustitución del compresor. (pág. 28)

## Imágenes requeridas

- Conexión del equipo de medición entre el conector del mazo de cables y la válvula reguladora N280 en el compresor — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 176
