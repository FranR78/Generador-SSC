---
id: ssc.sin-clasificar.unidad-de-control-del-autoclima
modulo: ssc
unidad: sin-clasificar
nt: 857
titulo: "Unidad De Control Del Autoclima"
codigo: "6K0959291 (versión software 6K-AUTOCLIMA-110, X01, WSC 00000)"
ubicacion: "Montada en la consola central del salpicadero, detrás del panel de mandos"
aplicacion: "Sistema Autoclima en SEAT Ibiza '99 y Córdoba '99"
menu: "Unidad De Control Del Autoclim 6K0959291 (versión software 6K-AUTOCLIMA-110, X01, WSC 00000)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Procesar las señales de las sondas térmicas, gestionar la lógica de control del clima, regular la posición de la trampilla de mezcla V68 y comunicarse con el radiocasete R para la indicación en display.

## Principio de funcionamiento

Unidad de control electrónica con microprocesador y memoria de autodiagnóstico. Evalúa la temperatura deseada y la real del habitáculo para emitir órdenes de control hacia el compresor, la turbina V2 y las trampillas.

## Características

Módulo electrónico de control con versión de software identificable por el lector de averías (6K-AUTOCLIMA-110), código de taller WSC 00000 y conectores de múltiples vías.

## Valores de trabajo

* Tensión de alimentación: 12 V (línea 30 y línea 15).
* Identificación por lector de averías: Código de recambio 6K0959291, software 6K-AUTOCLIMA-110, versión X01.

## Anomalías frecuentes

Fallo en la memoria interna, cortocircuito en las etapas de potencia de salida o pérdida de comunicación por el bus con el radiocasete R.

## Comportamiento en avería

El sistema de climatización deja de regular automáticamente, los dígitos del display parpadean o la pantalla queda totalmente apagada, registrando códigos de avería en el autodiagnóstico.

## Cómo comprobarlo

Interrogar la unidad mediante la función "01" (Versión de la unidad) con el lector de averías para verificar la comunicación y consultar la memoria de fallos con la función "02".

## Imágenes requeridas

- Pantalla de identificación de la versión de la unidad de control del autoclima en el lector de averías — Fuente: ce0.pdf, pág. 10
