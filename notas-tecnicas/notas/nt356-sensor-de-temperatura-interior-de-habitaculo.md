---
id: ssc.sin-clasificar.sensor-de-temperatura-interior-de-habitaculo
modulo: ssc
unidad: clima
nt: 356
titulo: "Sensor De Temperatura Interior De Habitáculo"
ubicacion: "Instalado directamente sobre la UEGAA en el panel de mandos del salpicadero"
aplicacion: "Climatizadores automáticos para el control de la temperatura real del habitáculo"
menu: "Sensor De Temperatura Interior De Habi"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura real del aire del habitáculo e informar a la UEGAA para corregir la posición de las trampillas y la velocidad de la turbina.

## Principio de funcionamiento

Resistencia termistor NTC. Incorpora una pequeña turbina eléctrica que aspira aire fresco del habitáculo sobre la superficie del sensor NTC para obtener una medición exacta sin que le afecte el calor interno de la consola central.

## Características

Módulo formado por sensor NTC y microturbina eléctrica de aspiración integrada sobre la placa de la UEGAA.

## Valores de trabajo

| Estado del sensor | Valor supletorio asignado | Condiciones de validez |
|---|---|---|
| **Avería / Ausencia de señal** | **+24 ºC (Valor por defecto)** | La UEGAA se mantiene en funcionamiento |

## Anomalías frecuentes

Bloqueo de la microturbina por polvo o pelusa; descalibración del elemento sensible.

## Comportamiento en avería

La regulación de temperatura se vuelve imprecisa y lenta; la UEGAA asume el valor fijo de +24 ºC.

## Cómo comprobarlo

Verificar que la microturbina gira al dar el contacto y consultar el autodiagnóstico.
