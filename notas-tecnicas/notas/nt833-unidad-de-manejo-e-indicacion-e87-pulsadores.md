---
id: ssc.sin-clasificar.unidad-de-manejo-e-indicacion-e87-pulsadores
modulo: ssc
unidad: sin-clasificar
nt: 833
titulo: "Unidad De Manejo E Indicación E87 (Pulsadores)"
codigo: "E87"
ubicacion: "Consola central del salpicadero"
aplicacion: "Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99"
menu: "Unidad De Manejo E Indicación  E87"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Recoger la selección de funciones introducidas por el usuario (temperatura, turbina, recirculación y modo A/A) y transmitirlas a la unidad de control.

## Principio de funcionamiento

Botonera de microcontactos. Transmite la orden presionada a través de un bus de datos paralelo de 18 cables hacia el Radiocasete R, el cual la retransmite por un bus de 1 cable a la UCE J255.

## Características

Módulo frontal de pulsadores alimentado por el radiocasete, integrado en el conjunto compacto de consola central.

## Valores de trabajo

* Bus de datos entre E87 y Radiocasete: 18 cables.
* Bus de datos entre Radiocasete y UCE J255: 1 cable.

## Anomalías frecuentes

Falso contacto en las membranas de los botones o interrupción en el bus de datos.

## Comportamiento en avería

El radiocasete emite señal de avería a la UCE J255. El Autoclima entra en modo automático fijando 22 ºC solicitados y 20 ºC exteriores, desactiva el compresor y abre la recirculación.

## Cómo comprobarlo

Consultar el estado de conmutación de los pulsadores en los grupos 003 y 004 (campos 1 a: 0 no presionado / 1 presionado) mediante autodiagnóstico.

## Imágenes requeridas

- Regleta de pulsadores de la unidad de manejo E87 — Fuente: cd.pdf, pág. 20
