---
id: ssc.sin-clasificar.sensor-de-presion-y-temperatura-del-agente-frigorifico
modulo: ssc
unidad: sin-clasificar
nt: 748
titulo: "Sensor De Presión Y Temperatura Del Agente Frigorífico"
codigo: "G395"
ubicacion: "Montado en la tubería de la línea de alta presión del circuito de climatización"
aplicacion: "Climatizador automático del Audi A4 2008"
menu: "Sensor De Presión Y Temperatur G395"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la presión y temperatura del gas refrigerante R134a para la regulación del compresor y la gestión de la seguridad del circuito.

## Principio de funcionamiento

Transductor piezoeléctrico electrónico que convierte la presión hidráulica del gas en un protocolo de datos digital y lo transmite a la red de a bordo.

## Características

Sensor de presión y temperatura estanco conectado mediante bus LIN a la UCE de red de a bordo J519.

## Valores de trabajo

* Protocolo de salida: Datos digitales transmitidos por bus LIN a J519.

## Anomalías frecuentes

Fugas de refrigerante por la junta tórica de cierre o fallo del elemento piezoeléctrico.

## Comportamiento en avería

Desconexión de seguridad del compresor de climatización (N280) al no poder verificar la presión del circuito.

## Cómo comprobarlo

Consultar el valor de presión en bares transmitido por el sensor G395 en los bloques de valores de medición del equipo de diagnosis.
