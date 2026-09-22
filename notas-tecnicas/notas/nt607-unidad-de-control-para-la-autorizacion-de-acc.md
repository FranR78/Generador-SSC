---
id: ssc.sin-clasificar.unidad-de-control-para-la-autorizacion-de-acceso-y-arranque
modulo: ssc
unidad: sin-clasificar
nt: 607
titulo: "Unidad De Control Para La Autorización De Acceso Y Arranque"
codigo: "No documentado en fuentes"
ubicacion: "No documentado en fuentes"
aplicacion: "Sistemas de acceso y arranque sin llave (Keyless Access) en vehículos del Grupo VAG"
menu: "Unidad De Control Para La Auto No documentado en fuentes"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Analizar las señales recibidas de los sensores y la red de a bordo para gestionar la autorización de bloqueo y desbloqueo de puertas, la autorización de arranque del motor y el desbloqueo eléctrico de la columna de dirección.

## Principio de funcionamiento

Procesa las solicitudes de los sensores capacitivos y del pulsador de arranque, activa el patrón de búsqueda por baja frecuencia (125 kHz) a través de las antenas del vehículo y envía una señal codificada Wake Up por un cable convencional para reexcitar la unidad de red de a bordo.

## Características

Unidad electrónica programable interconectada por CAN-Bus de confort, LIN-Bus (con la UCE del portón) y cable discreto de reexcitación.

## Valores de trabajo

* Tensión de alimentación: No documentado en fuentes.
* Frecuencia de emisión de la señal de búsqueda por antenas: 125 kHz (baja frecuencia).

## Anomalías frecuentes

Fallo de comunicación en el CAN-Bus de confort, interrupción en la línea de reexcitación o avería interna en la tarjeta lógica de procesamiento.

## Comportamiento en avería

Imposibilidad de desbloquear o bloquear las puertas por proximidad, falta de detección de la llave en el habitáculo e imposibilidad de activar el contacto (borne 15) o arrancar el motor.

## Cómo comprobarlo

Lectura de la memoria de averías y consulta de bloques de valores de medición con el equipo de diagnosis para comprobar las líneas CAN-Bus y el estado de los canales de entrada y salida.
