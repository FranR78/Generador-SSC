---
id: ssc.sin-clasificar.unidad-de-manejo-e-indicacion-pulsadores
modulo: ssc
unidad: sin-clasificar
nt: 190
titulo: "Unidad De Manejo E Indicación (Pulsadores)"
codigo: "E87"
ubicacion: "Consola central del salpicadero, formando un único conjunto compacto con el display y la radio"
aplicacion: "Calefacción motorizada y Autoclima"
menu: "Unidad De Manejo E Indicación  E87"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Recoger las órdenes del usuario relativas a temperatura, turbina, recirculación y A/C para transmitirlas a la unidad de control J255.

## Principio de funcionamiento

Al presionar un pulsador, se transmite una señal mediante un bus de datos de 18 cables al radiocasete. El radiocasete la reenvía por un bus de datos de 1 cable hacia la unidad del autoclima o calefacción motorizada J255. La unidad E87 es alimentada por la radio.

## Características

Regleta frontal compacta de pulsadores integrada en el marco de la consola central.

## Valores de trabajo

| Bus de comunicación | Número de hilos | Función |
|---|---|---|
| **Bus E87 a Radiocasete R** | **18 cables** | Envió de pulsaciones |
| **Bus Radiocasete R a J255** | **1 cable** | Enlace de datos serie |

## Anomalías frecuentes

Fallo mecánico o cortocircuito en alguno de los pulsadores de la regleta.

## Comportamiento en avería

Cuando un pulsador no funciona, la radio emite una señal de avería hacia J255. El autoclima pasa a modo automático fijo, toma 22 ºC solicitados y 20 ºC exterior, desconecta el compresor y abre la recirculación a aire fresco. La calefacción motorizada trabaja con los parámetros existentes en el momento de la avería.

## Cómo comprobarlo

Consultar el estado de pulsación (0 = No presionado, 1 = Presionado) en los grupos 003 y 004 del bloque de valores de medición.
