---
id: ssc.sin-clasificar.unidad-de-control-y-motor-del-techo-corredizo
modulo: ssc
unidad: sin-clasificar
nt: 1203
titulo: "Unidad De Control Y Motor Del Techo Corredizo"
codigo: "J245 (Unidad de control) / V1 (Motor del techo)"
ubicacion: "Montados en la parte trasera de la estructura del techo panorámico"
aplicacion: "Techo panorámico deflector y corredizo en SEAT Ibiza"
menu: "Unidad De Control Y Motor Del  J245 (Unidad de control) / V1 (Motor del techo)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

La UCE J245 gestiona el movimiento del techo panorámico procesando órdenes del conmutador E8 y de la UCE J519. El motor V1 ejecuta la fuerza mecánica de accionamiento.

## Principio de funcionamiento

J245 y V1 son componentes independientes unidos por cableado convencional. El motor V1 integra 2 sensores Hall decalados entre sí enfocados al eje del motor eléctrico; la UCE J245 evalúa las señales de los sensores Hall para reconocer la posición exacta y el sentido de giro del techo.

## Características

UCE J245 conectada al CAN-Bus Confort; motor eléctrico V1 con doble sensor Hall interno.

## Valores de trabajo

Alimentación de sensores y motor gestionada por la UCE J245.

## Anomalías frecuentes

Descalibración de los sensores Hall por resistencias mecánicas o suciedad en las guías.

## Comportamiento en avería

El techo panorámico no responde al conmutador o invierte la marcha por falso disparo del antiaprisionamiento.

## Cómo comprobarlo

Comprobar con osciloscopio la señal de los dos sensores Hall durante el giro del motor V1 y verificar la presencia de J245 en el CAN-Bus Confort con el equipo de diagnosis.
