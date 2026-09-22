---
id: ssc.sin-clasificar.pulsador-del-dispositivo-de-arranque-del-motor
modulo: ssc
unidad: sin-clasificar
nt: 612
titulo: "Pulsador Del Dispositivo De Arranque Del Motor"
codigo: "No documentado en fuentes"
ubicacion: "Consola central del habitáculo"
aplicacion: "Sistema Keyless Access (Start Engine Stop)"
menu: "Pulsador Del Dispositivo De Ar No documentado en fuentes"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Permitir al conductor enviar manualmente las solicitudes de conexión de contacto (borne 15), arranque del motor (borne 50) y parada del motor.

## Principio de funcionamiento

Cuenta con un mecanismo de conmutación de doble contacto eléctrico y un diodo LED de iluminación. La UCE de acceso y arranque evalúa la plausibilidad entre las dos señales redundantes para detectar averías en la conmutación.

## Características

Pulsador con 4 contactos eléctricos: 2 contactos para el LED de iluminación/destello y 2 contactos para la solicitud redundante de arranque o paro.

## Valores de trabajo

* Lógica de señal: Redundancia doble por masa/positivo enviada a la UCE de acceso y arranque.
* Indicación luminosa: Destello del LED al acceder al habitáculo para avisar al conductor.

## Anomalías frecuentes

Desgaste en los contactos internos, fallo del diodo LED o falta de plausibilidad entre las dos señales de conmutación.

## Comportamiento en avería

La UCE registra una avería de plausibilidad y el sistema no responde a la pulsación o requiere varias pulsaciones seguidas.

## Cómo comprobarlo

Verificar el cambio de estado de ambos contactos con polímetro en modo continuidad o leyendo el bloque de valores de medición en la UCE al presionar el botón.
