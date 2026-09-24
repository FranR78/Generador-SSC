---
id: ssc.elevacion-ralenti-climatizador.10-electroventiladores
modulo: ssc
unidad: clima
nt: 60
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Función de elevación de ralentí en atascos por baja potencia frigorífica"
menu: "Función de elevación de ralentí en ata"
grupo: "Control de climatización"
clave: elevacion-ralenti-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "10. Electroventiladores.pdf, págs. 85"
relacionados: ["unidad-control-climatizador", "compresor", "sensor-evaporador"]
palabras: ["sensor evaporador", "potencia insuficiente", "Can-Bus confort", "< 5 km/h", "subida r.p.m."]
---

## Objeto

Incrementar el rendimiento del compresor y la capacidad de refrigeración del habitáculo durante la circulación a velocidad muy reducida o en retenciones de tráfico (pág. 85).

## Fundamento

A velocidades inferiores a 5 km/h el régimen del motor se mantiene al ralentí, lo que reduce las revoluciones del compresor y disminuye la potencia frigorífica suministrada por el evaporador al habitáculo (pág. 85).

## Desarrollo

La unidad de control de climatización monitoriza la potencia frigorífica mediante el sensor de temperatura de salida del evaporador (pág. 85). Si detecta que la potencia es insuficiente estando la activación del compresor al máximo (98%), envía un mensaje de solicitud a la red Can-Bus de confort (pág. 85). Al recibir este mensaje, la unidad de control del motor incrementa automáticamente las revoluciones de ralentí para aumentar la velocidad del compresor y mejorar su rendimiento frigorífico (pág. 85).

## Valores de referencia

- Grado de activación máxima del compresor para solicitar la función: 98% (pág. 85).
- Velocidad máxima del vehículo para habilitar la función: inferior a 5 km/h (pág. 85).

## Errores de concepto frecuentes

- Asumir que el aumento del ralentí en retenciones se debe únicamente a una elevación de la temperatura del motor, omitiendo que la propia unidad de climatización puede solicitarlo por falta de rendimiento en el evaporador (pág. 85).
