---
id: ssc.diagnosis-actuadores.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 571
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Diagnosis de actuadores del climatizador"
codigo: "J255"
menu: "Diagnosis de actuadores del cl J255"
grupo: "Control de climatización"
clave: diagnosis-actuadores
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 12-14"
relacionados: ["unidad-control-climatizador", "valvula-reguladora-compresor"]
palabras: ["actuadores", "N280", "J519", "velocidad inferior 5 km/h", "prueba estática"]
---

## Objeto y alcance

Comprobar de forma secuencial la respuesta eléctrica y mecánica de los componentes activados por el climatizador (válvula reguladora N280, electroventiladores, luneta térmica). (págs. 12-14)

## Condiciones previas

- Tensión de la batería correcta y fusibles en buen estado. (pág. 8)
- Velocidad del vehículo inferior a 5 km/h. (pág. 12)
- Para comprobar la activación de la válvula reguladora para compresor N280: encendido conectado con el motor parado. (págs. 12-13)
- Para comprobar los electroventiladores del radiador (V7/V177) y luneta térmica (Z1): motor en marcha. (pág. 13)

## Equipo y material

- Sistema de información, diagnosis y medición para vehículos (VAS 5051, VAS 5052 o equivalente) con cable de diagnóstico de 16 polos. (págs. 8, 12)

## Pasos

1. Conectar el equipo de diagnosis al conector de 16 polos del vehículo con el encendido desconectado. (pág. 12)
2. Conectar el encendido (o arrancar el motor según el actuador a probar). (pág. 13)
3. Seleccionar la dirección "08 - Electrónica de climatización/calefacción". (pág. 13)
4. Consultar y registrar previamente la memoria de averías. (pág. 13)
5. Abrir los difusores de aire del tablero de instrumentos. (pág. 13)
6. Seleccionar la función "03 - Diagnosis de actuadores" y avanzar secuencialmente verificando la activación de cada componente. (págs. 12-14)
7. Al finalizar, consultar y borrar la memoria de averías acumulada durante la prueba. (pág. 14)

## Valores de referencia

- Velocidad máxima permitida para ejecutar la prueba: < 5 km/h. (pág. 12)

## Verificación final

Comprobar que no quedan averías estáticas almacenadas en la unidad de control J255 ni en la unidad de red de a bordo J519 tras completar el ciclo. (pág. 14)

## Seguridad y normativa

No realizar la diagnosis de actuadores con el vehículo en circulación por encima de 5 km/h para evitar distracciones o comportamientos anómalos de las trampillas y ventiladores. (págs. 7, 12)
