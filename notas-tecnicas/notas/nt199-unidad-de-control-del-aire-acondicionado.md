---
id: ssc.sin-clasificar.unidad-de-control-del-aire-acondicionado
modulo: ssc
unidad: clima
nt: 199
titulo: "Unidad De Control Del Aire Acondicionado"
codigo: "J293"
ubicacion: "Alojada en el vano motor"
aplicacion: "Vehículos con aire acondicionado manual y Autoclima"
menu: "Unidad De Control Del Aire Aco J293"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Gobernar la alimentación del acoplamiento magnético N25 y activar las dos velocidades de los ventiladores del líquido refrigerante.

## Principio de funcionamiento

Módulo electrónico relé de potencia. Conecta el acoplamiento N25 al recibir la señal de solicitud de J255 (pasando por F38 y F129/G65), siempre que no exista señal de corte por negativo enviada por la UCE del motor.

## Características

Módulo estanco provisto de fusibles aéreos de protección S164 y S180.

## Valores de trabajo

| Condición de entrada | Salida en J293 |
|---|---|
| **Señal J255 activa + F38 cerrado + F129/G65 OK + Sin negativo de UCE motor** | Activa acoplamiento N25 y 1ª velocidad de ventiladores V7/V35 |
| **Señal de negativo desde UCE motor** | Desconecta inmediatamente el acoplamiento N25 |

## Anomalías frecuentes

Fogueo de los contactos de potencia internos; fundición de los fusibles S164 o S180.

## Comportamiento en avería

El compresor no se acopla o los electroventiladores no se activan al solicitar frío.

## Cómo comprobarlo

Comprobar las alimentaciones de potencia en las patillas de J293 y verificar la presencia de 12 V en la salida hacia N25.
