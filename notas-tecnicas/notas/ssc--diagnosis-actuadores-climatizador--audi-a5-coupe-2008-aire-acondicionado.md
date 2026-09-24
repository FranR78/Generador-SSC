---
id: ssc.diagnosis-actuadores-climatizador.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 169
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Diagnosis de actuadores del climatizador"
menu: "Diagnosis de actuadores del climatizad"
grupo: "Control de climatización"
clave: diagnosis-actuadores-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 12-14"
relacionados: ["unidad-control-climatizador", "autodiagnostico-climatizador", "valvula-reguladora-compresor"]
palabras: ["diagnosis de actuadores", "prueba de componentes", "N280", "ventilador del radiador", "J519"]
---

## Objeto y alcance

Verificar de forma secuencial y controlada la excitación eléctrica y la respuesta funcional de los actuadores del climatizador (válvula reguladora del compresor N280, ventiladores del radiador V7/V177, luneta térmica trasera Z1) para descartar fallos de activación o funciones confundidas. (págs. 12-13).

## Condiciones previas

1. Tensión de alimentación de la red de a bordo correcta y batería con suficiente carga.
2. Fusibles del sistema verificados y en buen estado.
3. Velocidad del vehículo inferior o igual a 5 km/h.
4. Para comprobar la válvula reguladora N280: encendido conectado con el motor parado.
5. Para comprobar los ventiladores del radiador (V7/V177) y la luneta térmica trasera (Z1): motor en marcha.
6. Difusores de aire del tablero de instrumentos totalmente abiertos. (págs. 6, 8, 12-13).

## Equipo y material

Sistema de información, medición y diagnóstico de vehículos VAS 5051 o VAS 5052 con cable de diagnóstico VAS 5051/5A. (págs. 8, 9).

## Pasos

1. Conectar el cable de diagnóstico VAS 5051/5A al conector de 16 polos del vehículo con el encendido desconectado.
2. Conectar el encendido o arrancar el motor según el actuador a verificar.
3. Seleccionar la dirección "08 - Electrónica de climatización/calefacción" (unidad J255).
4. Consultar y registrar la memoria de averías.
5. Activar el climatizador desde la unidad J255 y abrir los difusores del tablero de instrumentos.
6. Seleccionar la función "Diagnosis de actuadores" y activar la secuencia de prueba. La solicitud de excitación de la válvula N280 se envía desde la J255 a la unidad de control de la red de a bordo J519, que ejecuta la activación física.
7. Finalizar la prueba y volver a consultar la memoria de averías para comprobar si se han memorizado fallos durante la activación de los componentes. (págs. 8, 12-14).

## Valores de referencia

Velocidad del vehículo durante la prueba: máximo 5 km/h.
Señal de solicitud enviada a la unidad del motor para los ventiladores del radiador V7: de 0% a 100%. (págs. 6, 12).

## Verificación final

Consultar la memoria de averías al concluir el procedimiento. Si la diagnosis se interrumpe, consultar la memoria de averías y el bloque de valores de medición para diagnosticar el estado del sistema. (pág. 14).

## Seguridad y normativa

Si se requieren pruebas dinámicas o mediciones con el vehículo en movimiento, los equipos de diagnosis deben ser operados por un segundo técnico para evitar distracciones durante la conducción. (pág. 7).
