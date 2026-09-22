---
id: ssc.sin-clasificar.termoconmutador-de-seguridad-por-temperatura-de-refrigerante
modulo: ssc
unidad: sin-clasificar
nt: 1120
titulo: "Termoconmutador De Seguridad Por Temperatura De Refrigerante"
ubicacion: "Insertado en el circuito de refrigeración del motor (culata, bloque o caja de aguas)"
aplicacion: "Protección contra sobrecalentamiento del motor en vehículos con aire acondicionado"
menu: "Termoconmutador De Seguridad Por Tempe"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Desconectar la carga mecánica adicional que supone el compresor cuando el líquido refrigerante del motor alcanza temperaturas peligrosas por alta exigencia.

## Principio de funcionamiento

Termocontacto bimetálico (o sensor NTC procesado por la UCE de motor que transmite la orden por CAN-Bus). Abre la línea de alimentación de la bobina del compresor cuando el líquido refrigerante supera el límite térmico configurado.

## Características

Termosensor bimetálico de 2 vías o sonda NTC conectada a la UCE de motor.

## Valores de trabajo

* Desconexión del compresor por sobrecalentamiento: **Aproximadamente 119 ºC**.
* Reconexión del compresor: **Aproximadamente 112 ºC**.

## Anomalías frecuentes

Oxidación de los contactos bimetálicos o deriva en la curva de resistencia NTC.

## Comportamiento en avería

Desconexión injustificada del aire acondicionado con el motor a temperatura normal, o falta de desconexión preventiva ante un calentamiento real del motor.

## Cómo comprobarlo

Comprobar continuidad o medir la resistencia entre bornes al calentar el sensor por encima de 119 ºC, o verificar el mensaje de desconexión por temperatura de motor en la máquina de diagnosis.

💡 ¿Quieres que preparemos alguna hoja de ejercicios práticos sobre interpretación de oscilogramas del sensor MAP o una guía de diagnóstico para el sistema de electroventiladores PWM para el taller?
