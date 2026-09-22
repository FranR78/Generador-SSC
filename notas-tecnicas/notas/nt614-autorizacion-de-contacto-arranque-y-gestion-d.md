---
id: ssc.sin-clasificar.autorizacion-de-contacto-arranque-y-gestion-de-bornes-en-keyless-access
modulo: ssc
unidad: sin-clasificar
nt: 614
tipo: proceso
subtipo: procedimiento
titulo: "Autorización De Contacto, Arranque Y Gestión De Bornes En Keyless Access"
menu: "Autorización De Contacto, Arranque Y G"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe el procedimiento de detección de la llave en el habitáculo, la comunicación con el inmovilizador y la activación de las líneas de alimentación (bornes S, 15 y 50). Aplica al diagnóstico de fallos de arranque sin llave.

## Fundamento

Validación de la posición de la llave mediante campos de 125 kHz y 434 MHz, verificación de código con la UCE del inmovilizador y activación discreta/CAN-Bus de la gestión de bornes de corriente.

## Condiciones previas

Llave autorizada en el habitáculo. En cambio manual: pedal de embrague pisado. En cambio automático: palanca en P o N y pedal de freno pisado.

## Equipo y material

Equipo de diagnosis.

## Desarrollo

1. El conductor presiona el pulsador de arranque en la consola central.
2. La UCE de acceso y arranque recibe la señal, despierta el CAN-Bus de confort y activa las antenas interiores (consola y maletero) a 125 kHz.
3. La llave en el habitáculo recibe la señal de mayor intensidad y envía su código y posición a 434 MHz a la UCE de red de a bordo.
4. La UCE de red de a bordo consulta la validez del código con el inmovilizador (ubicado en el Cuadro J285), ignorando llaves externas.
5. El inmovilizador valida el código y transmite la autorización al CAN-Bus de confort.
6. La UCE de la columna de dirección retira el perno eléctrico liberando el volante.
7. La UCE de red de a bordo y la UCE de acceso y arranque activan las líneas de corriente: Borne S (accesorios), Borne 15 (contacto) y Borne 50 (motor de arranque hacia la UCE del motor).
8. En caso de pila de la llave agotada: realizar el arranque de emergencia aproximando la llave a la bobina lectora de la columna de dirección antes de pulsar el botón.
9. Parada del motor: pulsar el botón con el coche parado. Si el vehículo circula a más de 2 km/h en una emergencia, presionar el botón y confirmar con una segunda pulsación tras el aviso en el cuadro.

## Valores de referencia

| Parámetro / Condición | Valor y Especificación |
| :--- | :--- |
| Umbral de velocidad para parada de emergencia | > 2 km/h (exige doble pulsación de confirmación) |
| Distancia de búsqueda de llave exterior | 1,5 metros |
| Frecuencia de antenas interiores | 125 kHz (baja frecuencia) |
| Frecuencia de respuesta de la llave | 434 MHz (alta frecuencia) |

## Interpretación y errores frecuentes

* Pulsar el botón sin pisar pedales: Se conecta el contacto (borne 15) pero no se acciona el motor de arranque (borne 50).
* Mensaje "llave no detectada": Pila del mando agotada; se soluciona acercando la llave a la columna de dirección para la lectura por inducción.

## Verificación final

Verificar que al pulsar el botón con el pedal pisado, la columna se desbloquea, el cuadro se enciende y el motor arranca sin demoras.

## Imágenes requeridas

- Esquema del proceso de autorización de contacto y arranque — Fuente: 5. Confort.pdf, pág. 104
- Esquema de la gestión de bornes de alimentación (S, 15 y 50) — Fuente: 5. Confort.pdf, pág. 104
