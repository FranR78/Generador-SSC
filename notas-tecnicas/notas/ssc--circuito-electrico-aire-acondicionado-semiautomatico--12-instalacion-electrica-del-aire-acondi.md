---
id: ssc.circuito-electrico-aire-acondicionado-semiautomatico.12-instalacion-electrica-del-aire-acondi
modulo: ssc
unidad: clima
nt: 71
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Circuito eléctrico de aire acondicionado semiautomático con sensor MAP y compresor variable"
menu: "Circuito eléctrico de aire acondiciona"
grupo: "Control de climatización"
clave: circuito-electrico-aire-acondicionado-semiautomatico
area: climatizacion
sistema: "control-climatizacion"
fuentes: "12. Instalación eléctrica del aire acondicionado.pdf, págs. 95"
relacionados: ["transmisor-presion", "valvula-reguladora-compresor", "unidad-control-climatizador"]
palabras: ["A/A semiautomático", "sensor MAP", "electroválvula regulación", "sin embrague", "Can-Bus"]
---

## Objeto

Estructura de la instalación eléctrica e interconexión de señales en un sistema de aire acondicionado semiautomático provisto de transmisor de presión de alta (sensor MAP) y compresor de cilindrada variable sin embrague (pág. 95).

## Fundamento

Gestión electrónica distribuida mediante intercambio de señales analógicas, digitales y de red Can-Bus entre la UCE del Climatizador, la UCE del Motor y la UCE de la Red de a Bordo para regular la cilindrada del compresor y la distribución de aire (pág. 95).

## Desarrollo

Estructura de conexionado y código de colores de líneas:
- Tipo de líneas de corriente: línea 30 (positivo directo de batería), línea 15 (positivo tras contacto), línea X (positivo tras contacto con desconexión en arranque) y línea 31 (masa) (págs. 95-96).
- Tipo de señales representadas: señal de entrada, señal de salida, alimentación de positivo, masa, señal bidireccional y bus de datos Can-Bus (págs. 95-96).

Componentes e integración en el circuito:
- Módulos de control: UCE de la red de a bordo (9), Cuadro de instrumentos (10), UCE del motor (11), UCE del climatizador (12) y UCE de los ventiladores (23) (pág. 95).
- Captadores de información: Sensor MAP en alta (3), Sensor de temperatura exterior (4), Transmisor de velocidad del vehículo (5), Alternador (7), Transmisor de temperatura interior (13), Sensor de temperatura de salida del evaporador (18), Sensor de temperatura de zona pies (19) y Sensor de temperatura de difusor central (20) (pág. 95).
- Actuadores de ajuste: Regulador de velocidad de la turbina (2), Motor y potenciómetro de la trampilla de temperatura (14, 15), Motor y potenciómetro de la trampilla de recirculación (16, 17), Electroválvula de regulación del compresor sin embrague (21) y Electroventiladores de refrigeración (24, 25) (pág. 95).
- Diagnóstico y confort: Conector de diagnosis OBD (6) y Regulador de iluminación del display (8) (pág. 95).

## Valores de referencia

- Líneas de corriente norma DIN: Línea 30 (positivo directo de batería), Línea 15 (positivo después de contacto), Línea X (desconexión en arranque), Línea 31 (masa) (págs. 95-96).

## Errores de concepto frecuentes

- Confundir la señal de un compresor de cilindrada variable regulado por electroválvula con la alimentación de un embrague electromagnético convencional (pág. 95).

## Imágenes requeridas

- Esquema eléctrico de un aire acondicionado semiautomático con sensor MAP, compresor regulado por electroválvula sin embrague y código de colores de señales — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 95
