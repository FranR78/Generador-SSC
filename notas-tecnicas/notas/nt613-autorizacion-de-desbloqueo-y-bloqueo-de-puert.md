---
id: ssc.sin-clasificar.autorizacion-de-desbloqueo-y-bloqueo-de-puertas-en-keyless-access
modulo: ssc
unidad: sin-clasificar
nt: 613
tipo: proceso
subtipo: procedimiento
titulo: "Autorización De Desbloqueo Y Bloqueo De Puertas En Keyless Access"
menu: "Autorización De Desbloqueo Y Bloqueo D"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la secuencia de señales, radiofrecuencia y comunicación por bus para bloquear o desbloquear las puertas por proximidad. Aplica al diagnóstico de accesos en el sistema Keyless Access.

## Fundamento

Emisión de búsqueda en baja frecuencia (125 kHz) desde las antenas y respuesta codificada de la llave en alta frecuencia (434 MHz) validada por la UCE de red de a bordo y transmitida por el CAN-Bus de confort a los motores de las puertas.

## Condiciones previas

Llave autorizada con pila en buen estado a una distancia menor de 1,5 metros de la puerta delantera y vehículo parado.

## Equipo y material

Equipo de diagnosis y detector de radiofrecuencia (125 kHz / 434 MHz).

## Desarrollo

1. El conductor introduce la mano en la manilla de la puerta delantera. El sensor capacitivo aumenta su capacidad y envía la solicitud de apertura a la UCE de acceso y arranque.
2. La UCE de acceso y arranque activa la antena de la manilla a 125 kHz y reexcita por cable convencional a la UCE de la red de a bordo (señal Wake Up).
3. La llave capta la señal de 125 kHz y responde emitiendo su código e identificación de posición a 434 MHz hacia la UCE de red de a bordo.
4. La UCE de red de a bordo verifica la autenticidad de la llave y vuelca la autorización al CAN-Bus de confort.
5. Las UCEs de puerta reciben el mensaje y alimentan los motores eléctricos de desbloqueo.
6. Para el bloqueo, el conductor toca la superficie de contacto exterior de la manilla, ejecutándose idéntica secuencia hasta alimentar los motores de cierre.

## Valores de referencia

| Parámetro / Condición | Valor y Especificación |
| :--- | :--- |
| Distancia máxima de detección de la llave | 1,5 metros desde la manilla de la puerta |
| Frecuencia de emisión de las antenas | 125 kHz (baja frecuencia) |
| Frecuencia de emisión de la llave | 434 MHz (alta frecuencia) |
| Desconexión por reposo del sensor del acompañante | 30 horas de inactividad |
| Desconexión por reposo del sensor del conductor | 90 horas de inactividad |

## Interpretación y errores frecuentes

* Falta de respuesta tras varios días parado: No es avería; el sistema deshabilita las manillas tras 30 h o 90 h para ahorrar batería (exige abrir con el mando para reactivar).
* Bloqueo rechazado con llave dentro: El sistema evita dejar la llave encerrada, salvo que se ordene el bloqueo desde el exterior con una segunda llave autorizada.

## Verificación final

Verificar que las puertas se desbloquean al introducir la mano en la manilla y se bloquean al presionar el sensor exterior.

## Imágenes requeridas

- Esquema del proceso de solicitud de apertura desde la puerta del conductor — Fuente: 5. Confort.pdf, pág. 102
- Tarjeta electrónica interior de la manilla con sensores capacitivos y bobina — Fuente: 5. Confort.pdf, pág. 101
