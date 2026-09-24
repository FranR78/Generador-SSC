---
id: ssc.deteccion-remolque.ssp-168-sistema-electrico-confort
modulo: ssc
unidad: clima
nt: 516
tipo: elemento
clase: componente
titulo: "Unidad de control para detección del remolque J345"
codigo: "J345"
menu: "Unidad de control para detecci J345"
grupo: "Equipo remolque"
clave: deteccion-remolque
area: confort-y-seguridad
sistema: "NUEVO-equipo-remolque"
forma_parte_de: confort-y-seguridad
marca: "SEAT"
fuentes: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 54"
relacionados: ["unidad-control-red-a-bordo"]
palabras: ["j345", "remolque", "toma u10", "tsa", "estabilizacion", "sensores aparcamiento", "angulo muerto"]
---

## Misión

Detectar la conexión eléctrica de un remolque e informar a la red de a bordo para adaptar el funcionamiento de los sistemas de seguridad, motor, alumbrado y asistencia del vehículo. (pág. 54)

## Tipos y características

Unidad de control electrónica conectada al CAN-Bus Confort e interconectada con la toma de corriente para remolque U10. (pág. 54)

## Principio de funcionamiento

Al conectar un remolque en la toma U10, la J345 lo detecta e emite un mensaje por la red CAN-Bus. Las distintas UCEs reaccionan adaptando sus funciones:
- UCE de red de a bordo J519: desactiva las luces antiniebla traseras del vehículo, activa los pilotos del remolque y supervisa sus lámparas.
- UCE del ABS J104: activa la función de estabilización del conjunto vehículo-remolque (TSA).
- UCE de motor J623: ajusta los mapas de inyección para compensar el incremento de masa del vehículo.
- UCE de ayuda al aparcamiento J446: desconecta automáticamente los sensores de aparcamiento traseros.
- UCEs de detección de ángulo muerto J1086 y J1087: se desactivan temporalmente. (pág. 54)

## Cómo comprobarlo

Verificar la presencia del código de avería en el diagnóstico del CAN-Bus Confort y comprobar la señal de detección al insertar la clavija en la toma U10. (pág. 54)

## Mantenimiento

No requiere. (pág. 54)

## Imágenes requeridas

- Esquema de interconexión vía CAN-Bus de la UCE J345 con J519, J104, J623, J446 e interfaz J533 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 54
