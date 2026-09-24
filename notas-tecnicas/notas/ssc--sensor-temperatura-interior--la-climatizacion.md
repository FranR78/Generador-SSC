---
id: ssc.sensor-temperatura-interior.la-climatizacion
modulo: ssc
unidad: clima
nt: 292
tipo: elemento
clase: componente
titulo: "Sensor de temperatura interior"
menu: "Sensor de temperatura interior"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 113"
relacionados: ["unidad-control-climatizador", "regulacion-automatica"]
palabras: ["sensor interior", "turbina de aspiración", "NTC", "valor sustitutivo +24 ºC"]
---

## Misión

Medir la temperatura real del aire en la zona de los pasajeros dentro del habitáculo. (pág. 113).

## Tipos y características

Resistencia NTC integrada en el panel de mandos de la UEGAA, equipada con una pequeña turbina eléctrica de aspiración forzada. (pág. 113).

## Principio de funcionamiento

La turbina de aspiración fuerce un flujo continuo de aire del habitáculo a través del sensor NTC. La UEGAA compara el valor medido con la temperatura de consigna solicitada por el usuario y corrige la velocidad de la turbina y la posición de las trampillas de mezcla. (pág. 113).

## Valores de trabajo

Valor por defecto en caso de fallo: +24 ºC. (pág. 113).

## Anomalías frecuentes

Bloqueo de la turbina de aspiración por pelusa o polvo, o fallo del elemento NTC. (págs. 113, 163).

## Comportamiento en avería

La UEGAA asume un valor sustitutivo fijo de +24 ºC, perdiéndose la precisión de la regulación automática. (pág. 113).

## Cómo comprobarlo

1. Verificar que la turbina gira al conectar el encendido. (pág. 113).
2. Consultar el registro de averías en autodiagnosis. (pág. 163).

## Mantenimiento

Limpieza de las rejillas de aspiración de la consola con aire a baja presión. (pág. 113).
