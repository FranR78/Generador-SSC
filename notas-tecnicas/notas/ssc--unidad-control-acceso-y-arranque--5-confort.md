---
id: ssc.unidad-control-acceso-y-arranque.5-confort
modulo: ssc
unidad: clima
nt: 369
tipo: elemento
clase: componente
titulo: "Unidad de control para la autorización de acceso y arranque"
menu: "Unidad de control para la autorización"
grupo: "Acceso y arranque"
clave: unidad-control-acceso-y-arranque
area: confort-y-seguridad
sistema: "NUEVO-acceso-y-arranque"
forma_parte_de: autorizacion-acceso-y-arranque
marca: "Seat"
fuentes: "5. Confort.pdf, págs. 99, 102"
relacionados: ["unidad-control-red-a-bordo", "sensor-contacto-manilla", "antena-deteccion-llaves", "pulsador-arranque"]
palabras: ["unidad de control", "cerebro", "can-bus", "wake up", "reexcitacion"]
---

## Misión

Analizar las señales de los sensores, gestionar las autorizaciones de acceso, arranque y bloqueo de la columna de dirección, y enviar las órdenes de actuación a las demás unidades de control. (págs. 99, 102)

## Tipos y características

Unidad electrónica de control interconectada a través de CAN-Bus de confort (con la unidad de confort, la de bloqueo de columna y el cuadro de instrumentos) y LIN-Bus (con la unidad del portón eléctrico). Se encarga de reexcitar a la unidad de control de la red de a bordo mediante una señal codificada Wake Up por cable convencional. (págs. 100, 102)

## Principio de funcionamiento

Al recibir una solicitud de los sensores capacitivos de la manilla o del pulsador de arranque, la unidad activa las antenas emisoras para iniciar la búsqueda de la llave y despierta a la red de a bordo para la verificación de los códigos de seguridad. (págs. 102-103)

## Cómo comprobarlo

Mediante la lectura de bloques de valores de medición y diagnosis de averías del sistema de acceso y arranque a través del puerto EOBD. (págs. 100, 102)

## Mantenimiento

No requiere mantenimiento periódico específico. (págs. 99, 102)
