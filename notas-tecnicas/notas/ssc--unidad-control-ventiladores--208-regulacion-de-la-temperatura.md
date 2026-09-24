---
id: ssc.unidad-control-ventiladores.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 95
tipo: elemento
clase: componente
titulo: "Unidad de control para ventilador del líquido refrigerante"
codigo: "J293"
menu: "Unidad de control para ventila J293"
grupo: "Control de climatización"
clave: unidad-control-ventiladores
area: electricidad-electronica
sistema: "control-climatizacion"
forma_parte_de: circuito-refrigeracion-motor
marca: "VW"
fuentes: "208. Regulación de la temperatura.pdf, págs. 38-41"
relacionados: ["electroventilador-condensador", "compresor", "presostato", "transmisor-presion"]
palabras: ["J293", "ventilador radiador", "F18", "F129", "G65", "PWM", "bomba V51"]
---

## Misión

Establecer el paso de aire fresco necesario a través del radiador y del condensador para la refrigeración del motor y el funcionamiento del climatizador, gestionando la activación de los ventiladores y del acoplamiento electromagnético del compresor (págs. 38-39).

## Tipos y características

Unidad electrónica integrada en el conjunto interconectado de unidades de control del vehículo (págs. 38-39). En versiones revisadas para transmisores de alta presión G65 presenta terminales de conector con diseño modificado (pág. 39). En algunas variantes de conmutación, sus funciones se integran directamente dentro de la unidad de control del climatizador (pág. 39).

## Principio de funcionamiento

Procesa las señales de entrada del termoconmutador F18, del conmutador de presión F129 o la señal modulada en anchura de impulsos (PWM) del transmisor de alta presión G65, además de las órdenes del panel de mandos E87 (págs. 38-39). Con ello vigila continuamente la presión del circuito frigorífico y la temperatura del refrigerante para activar los escalones de velocidad de los electroventiladores y la excitación del compresor (págs. 38-39). Mantiene un intercambio bidireccional de señales con las unidades de control del motor y del cambio (pág. 39). Incorpora un módulo cronorruptor para excitar la bomba de reflujo de líquido refrigerante V51 tras la parada del motor (pág. 39).

## Valores de trabajo

- Escalón 1 de ventiladores con climatizador activado: compresor en marcha y presión en circuito frigorífico superior a 0,2 MPa (2 bares) (pág. 38).
- Escalón 2 de ventiladores: alta presión superior a 1,6 MPa (16 bares) y/o temperatura del líquido refrigerante superior a 99 ºC (págs. 38-39).
- Retorno al Escalón: presión por debajo de 1,6 MPa (16 bares) y temperatura del refrigerante inferior a 99 ºC (págs. 38-39).
- Umbrales de conmutación del termoconmutador F18 en el radiador:
  - Escalón I: ON a...97 ºC / OFF a...91 ºC (pág. 39).
  - Escalón II: ON a...105 ºC / OFF a...98 ºC (pág. 39).

## Anomalías frecuentes

- Descenso del rendimiento del condensador y detención del funcionamiento del climatizador por falta de refrigeración (pág. 38).
