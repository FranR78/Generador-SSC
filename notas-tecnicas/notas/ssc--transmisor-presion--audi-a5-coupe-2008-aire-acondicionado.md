---
id: ssc.transmisor-presion.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 838
tipo: elemento
clase: componente
titulo: "Transmisor de presión y temperatura del agente frigorífico G395"
codigo: "G395"
menu: "Transmisor de presión y temper G395"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 168-169"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador", "valvula-reguladora-compresor"]
palabras: ["G395", "LIN-Bus", "carcasa gris", "presión del circuito", "J519"]
---

## Misión

Medir continuamente la presión en el lado de alta presión del circuito frigorífico para informar a las unidades de control de la red sobre las necesidades de condensación y protección del compresor. (pág. 168)

## Tipos y características

Sensor de presión electrónico piezoeléctrico con carcasa de color gris montado en el condensador. Transmite información digitalizada mediante una línea de bus de datos LIN a la unidad de control de la red de a bordo J519. Sustituye al transmisor G65 de versiones anteriores. (págs. 168-169)

## Principio de funcionamiento

Mide la presión del fluido a la salida del condensador. La unidad de control de la red de a bordo J519 lee el valor del sensor a través del cable LIN-Bus y lo retransmite por el bus CAN de confort hacia el panel de mandos e indicación Climatronic J255. La señal de temperatura integrada en el sensor no se utiliza actualmente para la regulación del climatizador. (págs. 168-169)

## Valores de trabajo

- Par de apriete de montaje en la toma del condensador: 8 Nm. (pág. 168)
- Lectura por defecto en autodiagnóstico ante falta de señal o desconexión: > 40 bares. (pág. 43)

## Anomalías frecuentes

Fugas de refrigerante por envejecimiento de la junta tórica o interrupción del cable de comunicación LIN-Bus. (pág. 168)

## Comportamiento en avería

Se inscribe una avería en la memoria de las unidades J519 y J255, desconectando el compresor por seguridad para evitar sobrepresiones o trabajo en seco. (págs. 43, 168)

## Cómo comprobarlo

Consultar los bloques de valores de medición 001 (campo 4) y 056 (campo 1) mediante el equipo de autodiagnóstico VAS 5051. (págs. 43, 168)

## Mantenimiento

Reemplazar la junta tórica de sellado en cada desmontaje y humedecerla con aceite para máquinas frigoríficas antes de roscar el sensor al par de 8 Nm. Su desmontaje no exige evacuar el circuito gracias a la válvula de retención del empalme. (pág. 168)

## Imágenes requeridas

- Situación del sensor de presión y temperatura G395 en la toma roscada del condensador — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 168
