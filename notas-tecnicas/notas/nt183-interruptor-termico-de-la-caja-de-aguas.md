---
id: ssc.sin-clasificar.interruptor-termico-de-la-caja-de-aguas
modulo: ssc
unidad: clima
nt: 183
titulo: "Interruptor Térmico De La Caja De Aguas"
codigo: "F38"
ubicacion: "Alojado en el interior de la caja de aguas del vano motor"
aplicacion: "Circuitos de aire acondicionado y Autoclima en la gama Ibiza/Córdoba 1999"
menu: "Interruptor Térmico De La Caja F38"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Interrumpir la señal eléctrica de activación del compresor para evitar la congelación del evaporador por bajas temperaturas exteriores.

## Principio de funcionamiento

Interruptor térmico de contacto bimetálico normalmente cerrado. Recibe la tensión de 12 V procedente de la UCE J255 y la deja pasar hacia la unidad J293 siempre que la temperatura sea superior a 5 ºC.

## Características

Conmutador térmico estanco de 2 polos intercalado en serie en la línea de mando del compresor.

## Valores de trabajo

| Temperatura ambiente | Estado de los contactos | Tensión de salida a J293 |
|---|---|---|
| **> 5 ºC** | Cerrado | **12 V CC** (permite conectar A/C) |
| **< 5 ºC** | Abierto | **0 V CC** (desconecta A/C) |

## Anomalías frecuentes

Contactos pegados por arco eléctrico o bloqueados en posición abierta por fallo del bimetal.

## Comportamiento en avería

Si el interruptor permanece siempre cerrado, el compresor funciona a temperaturas inferiores a 5 ºC pudiendo provocar la congelación del evaporador. Si queda abierto permanente, la señal de 12 V no pasa y el compresor no se conecta jamás.

## Cómo comprobarlo

Comprobar continuidad con polímetro entre sus dos bornes a temperatura ambiente por encima de 5 ºC (debe dar 0 Ω) y enfriarlo por debajo de 5 ºC (debe dar circuito abierto / infinito).
