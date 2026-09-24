---
id: ssc.proceso-apertura-bloqueo-puertas.5-confort
modulo: ssc
unidad: clima
nt: 374
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Proceso de solicitud de apertura y bloqueo de puertas"
menu: "Proceso de solicitud de apertura y blo"
grupo: "Acceso y arranque"
clave: proceso-apertura-bloqueo-puertas
area: confort-y-seguridad
sistema: "NUEVO-acceso-y-arranque"
marca: "Seat"
fuentes: "5. Confort.pdf, págs. 103"
relacionados: ["autorizacion-acceso-y-arranque", "unidad-control-acceso-y-arranque", "unidad-control-red-a-bordo"]
palabras: ["protocolo apertura", "protocolo bloqueo", "434 mhz", "125 khz", "can-bus"]
---

## Objeto y alcance

Describir la secuencia de comunicación entre unidades de control, antenas y la llave para autorizar el desbloqueo o bloqueo de las puertas desde las manillas. (pág. 103)

## Condiciones previas

Llave autorizada en la zona de cobertura exterior (< 1,5 m) de la puerta correspondiente. (págs. 96, 101)

## Equipo y material

Sistema Keyless Access operativo. (pág. 96)

## Pasos

1. El usuario introduce la mano en la manilla (desbloqueo) o pulsa sobre la superficie externa (bloqueo); el sensor capacitivo varía su capacidad y transmite la señal a la unidad de control de acceso y arranque.
2. La unidad de control de acceso y arranque activa la búsqueda mediante emisión de baja frecuencia (125 kHz) en las antenas del vehículo y reexcita por cable a la unidad de control de la red de a bordo.
3. La llave capta la señal LF de la antena de la manilla y emite su código identificativo y su posición mediante alta frecuencia (434 MHz) hacia la unidad de control de la red de a bordo.
4. La unidad de control de la red de a bordo valida la autenticidad del código y despierta el CAN-Bus de confort.
5. Las unidades de control de las puertas reciben la orden por la red CAN y alimentan los motores eléctricos para bloquear o desbloquear los cierres. (pág. 103)

## Valores de referencia

- Frecuencia de búsqueda (antenas): 125 kHz (baja frecuencia).
- Frecuencia de respuesta (llave): 434 MHz (alta frecuencia). (págs. 103-104)

## Verificación final

Comprobar el destello de los intermitentes y el accionamiento de los servomotores de las cerraduras. (pág. 103)
