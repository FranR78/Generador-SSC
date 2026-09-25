---
id: ssc.unidad-control-climatizador.modulo-ventiladores.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 813
tipo: elemento
clase: componente
titulo: "Unidad de control para el ventilador del líquido refrigerante"
codigo: "J293"
menu: "Unidad de control para el vent J293"
grupo: "Control de climatización"
clave: unidad-control-climatizador
variante: modulo-ventiladores
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "VW"
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 40-41"
relacionados: ["electroventilador-condensador", "transmisor-presion", "embrague-compresor"]
palabras: ["J293", "escalones de velocidad", "acoplamiento N25", "bomba V51", "PWM"]
---

## Misión

Gobernar la activación de los escalones de velocidad de los electroventiladores de refrigeración del condensador/motor y controlar el acoplamiento electromagnético del compresor. (págs. 40-41)

## Tipos y características

Módulo electrónico de potencia adaptado para procesar la señal PWM del transmisor de alta presión G65. En determinadas versiones incluye un módulo cronorruptor para la bomba de circulación de líquido refrigerante V51. (págs. 40-41)

## Principio de funcionamiento

Analiza la señal digital del transmisor de alta presión G65 y los datos de temperatura del motor procedentes de la UCE del motor. Conecta la velocidad 1 de los ventiladores al activar el compresor (con presión > 0,2 MPa / 2 bar) y conmuta a la velocidad 2 cuando la presión de alta excede de 1,6 MPa (16 bar) o la temperatura del refrigerante supera los 99 ºC. (págs. 40-41)

## Valores de trabajo

- Activación de velocidad: climatizador conectado y presión del circuito > 0,2 MPa (2 bar). (pág. 41)
- Activación de velocidad 2 por presión: alta presión > 1,6 MPa (16 bar). (pág. 41)
- Activación de velocidad 2 por temperatura de motor: temperatura del líquido refrigerante > 99 ºC. (pág. 41)

## Anomalías frecuentes

Avería en los relés de potencia internos o cortocircuito en las salidas hacia los motores de los ventiladores. (págs. 40-41)

## Comportamiento en avería

Inoperatividad de los electroventiladores, provocando sobrepresión en el circuito frigorífico o sobrecalentamiento del motor térmico. (págs. 40-41)

## Cómo comprobarlo

Efectuar la prueba de actuadores con el equipo de autodiagnóstico para verificar la activación de los escalones de velocidad 1 y. (págs. 41, 71)

## Mantenimiento

Verificar la fijación del módulo y el estado de sus conectores eléctricos. (pág. 40)

## Imágenes requeridas

- Estructura del módulo J293 con sus conectores modificados para la señal del transmisor G65 — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 40
