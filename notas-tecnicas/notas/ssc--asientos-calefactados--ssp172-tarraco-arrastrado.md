---
id: ssc.asientos-calefactados.ssp172-tarraco-arrastrado
modulo: ssc
unidad: clima
nt: 525
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Gestión eléctrica de los asientos calefactados"
menu: "Gestión eléctrica de los asientos cale"
grupo: "Calefaccion asientos"
clave: asientos-calefactados
area: confort-y-seguridad
sistema: "NUEVO-calefaccion-asientos"
marca: "SEAT"
fuentes: "SSP172 TARRACO (arrastrado).pdf, págs. 65-66"
relacionados: ["unidad-control-climatizador", "unidad-mandos-trasera"]
palabras: ["asientos calefactados", "z45", "z46", "zx10", "zx12", "j519", "gestion carga electrica", "can-bus confort"]
---

## Objeto

Gobernar la alimentación y encendido de las mantas térmicas de los asientos delanteros y traseros coordinadamente con la gestión de la carga eléctrica del vehículo. (págs. 65-66)

## Fundamento

Los pulsadores de activación leen sus órdenes a través de la UCE J255 (asientos delanteros Z45 y Z46) o de la unidad trasera E265 (asientos traseros ZX10 y ZX12 vía LIN-Bus Clima). La activación final la autoriza la UCE de la red de a bordo J519. (págs. 65-66)

## Desarrollo

El flujo de funcionamiento y control eléctrico es el siguiente:
- Selección de mando: los asientos delanteros se activan desde los pulsadores de la UCE J255. Los asientos traseros laterales de la segunda fila se activan desde la unidad E265, la cual envía el estado de los pulsadores a J255 por la línea LIN-Bus Clima.
- Transmisión por CAN-Bus: la UCE J255 emite hacia el CAN-Bus Confort las solicitudes de encendido de todos los asientos calefactados.
- Validación por la UCE J519: la unidad de control de la red de a bordo J519 recibe los mensajes. Si la función de gestión de la carga eléctrica está activa (por baja tensión de batería o elevado consumo del alternador), J519 deniega o desactiva la alimentación de los asientos calefactados para proteger el balance eléctrico. (págs. 65-66)

## Valores de referencia

- Ubicación de plazas calefactadas: delanteras e izquierda/derecha de la 2ª fila trasera. (pág. 65)

## Errores de concepto frecuentes

Creer que el climatizador activa directamente los relés o mantas térmicas de los asientos calefactados. La habilitación definitiva depende de la UCE J519, que puede desactivarlos en función del estado de la gestión de carga eléctrica. (pág. 66)

## Imágenes requeridas

- Esquema eléctrico de conexiones de los asientos calefactados Z45, Z46, ZX10, ZX12 con J255, E265 y J519 vía CAN-Bus — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 65
