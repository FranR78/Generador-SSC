---
id: ssc.proceso-autorizacion-contacto-arranque.5-confort
modulo: ssc
unidad: clima
nt: 375
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Proceso de autorización de contacto y arranque del motor"
menu: "Proceso de autorización de contacto y "
grupo: "Acceso y arranque"
clave: proceso-autorizacion-contacto-arranque
area: confort-y-seguridad
sistema: "NUEVO-acceso-y-arranque"
marca: "Seat"
fuentes: "5. Confort.pdf, págs. 104"
relacionados: ["autorizacion-acceso-y-arranque", "pulsador-arranque", "actuador-bloqueo-columna-direccion"]
palabras: ["borne 15", "borne 50", "borne S", "inmovilizador", "transponder"]
---

## Objeto y alcance

Establecer la secuencia de verificación de seguridad para el acoplamiento del contacto (borne 15) y la activación del motor de arranque (borne 50). (pág. 104)

## Condiciones previas

Proceso de acceso al vehículo superado. Llave en el interior del habitáculo. Pisar el pedal de embrague en cambio manual, o pisar el freno con la palanca en P o N en cambio automático. (págs. 97-98)

## Equipo y material

Sistema Keyless Access e Inmovilizador. (págs. 100, 104)

## Pasos

1. El conductor presiona el pulsador de arranque en la consola central.
2. La unidad de acceso y arranque envía una solicitud a las antenas interiores (125 kHz) para rastrear la llave, despierta el CAN-Bus de confort y prepara la comunicación con el inmovilizador.
3. La llave en el interior capta la señal LF de alta intensidad y responde enviando su transponder y posición por alta frecuencia (434 MHz) a la unidad de control de la red de a bordo.
4. La unidad de la red de a bordo realiza la consulta de autorización con el inmovilizador (cuadro de instrumentos), ignorando cualquier otra llave detectada en el exterior.
5. Tras verificar el transponder, el inmovilizador transmite la confirmación al CAN-Bus de confort.
6. La unidad de bloqueo desbloquea la columna de dirección.
7. La unidad de la red de a bordo activa la gestión de bornes conectando la corriente para el Borne S, Borne 15 (contacto) y Borne 50 (arranque) junto con la unidad de control del motor. (pág. 104)

## Valores de referencia

- Bornes de alimentación gestionados: Borne S, Borne 15 y Borne. (pág. 104)

## Verificación final

Comprobar el arranque del motor y el apagado de los testigos de inmovilizador y bloqueo en el Cuadro de Instrumentos. (pág. 104)
