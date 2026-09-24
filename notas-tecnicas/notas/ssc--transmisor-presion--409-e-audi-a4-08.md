---
id: ssc.transmisor-presion.409-e-audi-a4-08
modulo: ssc
unidad: clima
nt: 422
tipo: elemento
clase: componente
titulo: "Sensor de presión y temperatura del agente frigorífico G395"
codigo: "G395"
menu: "Sensor de presión y temperatur G395"
grupo: "Circuito frigorífico"
clave: transmisor-presion
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
marca: "Audi"
fuentes: "409_e         Audi A4 _08.pdf, págs. 66-67"
relacionados: ["unidad-control-climatizador", "transmisor-presion"]
palabras: ["g395", "presion agente frigorifico", "bus lin", "j519", "valores de medicion"]
---

## Misión

Medir la presión y la temperatura del fluido refrigerante en la línea de alta presión del circuito frigorífico. (págs. 66-67)

## Tipos y características

Sensor combinado de presión y temperatura con salida de datos digital a través de bus LIN. (págs. 66-67)

## Principio de funcionamiento

Mide la presión y temperatura en el circuito y transmite los datos mediante una señal de bus LIN a la unidad de control de la red de a bordo J519. La J519 retransmite esta información por el bus CAN a la unidad de control para Climatronic J255.
El valor medido por el sensor G395 no se analiza actualmente en la lógica de regulación del climatizador, pero permanece disponible para consulta. (págs. 66-67)

## Anomalías frecuentes

Fallo de comunicación en la línea de bus LIN o fallo del elemento piezorresistivo/térmico. (pág. 67)

## Comportamiento en avería

Interrupción del intercambio de datos LIN con la unidad J519. (pág. 67)

## Cómo comprobarlo

Consultar el valor de presión y temperatura registrado en los bloques de valores de medición de la unidad J519/J255 a través del terminal de diagnosis. (pág. 67)

## Mantenimiento

No requiere mantenimiento. (págs. 66-67)
