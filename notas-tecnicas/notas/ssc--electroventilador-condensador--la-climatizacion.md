---
id: ssc.electroventilador-condensador.la-climatizacion
modulo: ssc
unidad: clima
nt: 288
tipo: elemento
clase: componente
titulo: "Electroventiladores y Unidad de Gestión de Ventiladores (UEGV)"
menu: "Electroventiladores y Unidad de Gestió"
grupo: "Circuito frigorífico"
clave: electroventilador-condensador
area: climatizacion
sistema: "circuito-frigorifico"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 100-103"
relacionados: ["condensador", "presostato", "unidad-control-climatizador"]
palabras: ["electroventilador", "UEGV", "escalón 1", "escalón 2", "2 bares", "16 bares", "100 ºC"]
---

## Misión

Generar un flujo de aire forzado a través del condensador y del radiador del motor para garantizar la condensación del refrigerante y la refrigeración del motor. (págs. 101, 103).

## Tipos y características

Soplantes accionados por motores eléctricos (1 o 2 ventiladores de 2 velocidades) gobernados por la Unidad Electrónica de Gestión del Ventilador (UEGV). (págs. 101-102).

## Principio de funcionamiento

La UEGV evalúa la presión del circuito de aire acondicionado y la temperatura del motor:
- Con A/C activado y presión de refrigerante > 2 bares: la UEGV conecta los ventiladores en el escalón 1 (baja velocidad). (pág. 103).
- Si la presión del refrigerante supera los 16 bares o la temperatura del motor sobrepasa 100 ºC: los ventiladores pasan al escalón 2 (alta velocidad). (pág. 103).
- Al descender la presión de 16 bares y la temperatura de 100 ºC: retornan al escalón. (pág. 103).

## Valores de trabajo

- Encendido escalón: A/C encendido y presión > 2 bares. (pág. 103).
- Encendido escalón: presión > 16 bares o temperatura del motor > 100 ºC. (pág. 103).

## Anomalías frecuentes

Fallo de los relés internos de la UEGV, resistencia de velocidad quemada o motor de ventilador derivado. (págs. 102, 271).

## Comportamiento en avería

Inactividad del ventilador provocando disparos de alta presión (> 25 bares) al detener el vehículo al ralentí. (págs. 103, 271).

## Cómo comprobarlo

Excitación de las velocidades 1 y 2 desde el módulo de diagnosis activa de la UEGV. (págs. 102, 274).

## Mantenimiento

Limpieza de los conectores de la UEGV situados en el larguero del vano motor. (pág. 102).
