---
id: ssc.sin-clasificar.radiocasete
modulo: ssc
unidad: sin-clasificar
nt: 200
titulo: "Radiocasete"
codigo: "R"
ubicacion: "Consola central del salpicadero"
aplicacion: "Vehículos con Calefacción Motorizada o Autoclima"
menu: "Radiocasete R"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Servir de pasarela de comunicación multiplexada entre la unidad E87 y la UCE J255, y controlar la iluminación del display.

## Principio de funcionamiento

Recibe las órdenes enviadas por E87 a través del bus de datos de 18 cables, las convierte y las reenvía a J255 mediante un bus de datos de 1 cable. Recibe de J255 los mensajes de indicación y los emite en el display.

## Características

Unidad central de audio e interfaz electrónica de comunicación multiplexada.

## Valores de trabajo

| Línea de bus de datos | Tipo de interconexión |
|---|---|
| **Bus de 18 cables** | Enlace entre pulsadores E87 y el radiocasete R |
| **Bus de 1 cable** | Enlace serie bidireccional entre radiocasete R y la UCE J255 |

## Anomalías frecuentes

Interrupción de la línea del bus de 1 cable; fallo interno de la pasarela de datos de la radio.

## Comportamiento en avería

Los datos referentes al autoclima o calefacción motorizada dejan de ser visibles en el display.

## Cómo comprobarlo

Comprobar la continuidad del conductor del bus de 1 cable entre la radio y la UCE J255.
