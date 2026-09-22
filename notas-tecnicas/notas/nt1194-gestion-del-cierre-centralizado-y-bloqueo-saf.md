---
id: ssc.sin-clasificar.gestion-del-cierre-centralizado-y-bloqueo-safe
modulo: ssc
unidad: sin-clasificar
nt: 1194
tipo: proceso
subtipo: fundamento
titulo: "Gestión Del Cierre Centralizado Y Bloqueo Safe"
menu: "Gestión Del Cierre Centralizado Y Bloq"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la lógica de control, condicionantes de seguridad, avisos y estrategias de desbloqueo automático del cierre centralizado ejecutadas por la UCE J519. Aplica al sistema de confort.

## Fundamento

La UCE de la red de a bordo J519 gobierna las unidades de cierre de las puertas (VX21 a VX24) y del portón trasero (VX25) procesando órdenes del mando a distancia, de la cerradura mecánica o del sistema de autorización de acceso J518, e interactuando con la red CAN-Bus.

## Condiciones previas

Llaves adaptadas correctamente en el inmovilizador y conmutadores de posición de puerta/capó operativos.

## Desarrollo

* **Bloqueo simple o SAFE:** Se realiza al recibir la orden desde el mando a distancia, la cerradura de la puerta o la UCE de autorización de acceso y arranque J518.
* **Bloqueo por velocidad:** Se ejecuta automáticamente al superar una velocidad de **15 km/h**. La señal es transmitida por CAN-Bus desde la UCE del ABS J104.
* **Bloqueo automático de reatrado:** Se activa si transcurren **45 segundos** desde el desbloqueo por mando sin que se haya abierto ninguna puerta.
* **Desbloqueo por borne S:** Se realiza de forma automática al extraer la llave del conmutador de encendido.
* **Desbloqueo por activación del airbag:** Se activa inmediatamente al recibir la señal de colisión transmitida por CAN-Bus desde la UCE del airbag J234.
* **Desbloqueo del portón:** Mediante el accionamiento del conmutador E165.
* **Avisos de confirmación:** La UCE J519 hace dar **1 destello** a los intermitentes al bloquear el vehículo y **2 destellos** al desbloquearlo.

## Valores de referencia

| Función del Cierre Centralizado | Condición / Parámetro de Activación | Reacción del Sistema |
| :--- | :--- | :--- |
| **Bloqueo por velocidad** | Velocidad v > 15 km/h (transmitido por UCE ABS J104) | Bloqueo automático de todas las cerraduras |
| **Rebloqueo automático** | Tiempo t = 45 s sin abrir ninguna puerta tras desbloquear | Bloqueo automático del cierre centralizado |
| **Avisos por intermitentes** | Orden de bloqueo / Orden de desbloqueo | 1 destello al bloquear / 2 destellos al desbloquear |

## Interpretación y errores frecuentes

* Interpretar como avería que el vehículo se vuelva a cerrar solo a los 45 segundos de haberlo abierto con el mando; es la función de rebloqueo automático por no haber abierto ninguna puerta.

## Verificación final

Comprobar el bloqueo automático al superar 15 km/h en prueba de rodaje y verificar los destellos de confirmación de los intermitentes.

## Seguridad y normativa

Desbloqueo automático de emergencia obligado por normativa de seguridad en caso de impacto coordinado por la UCE de Airbag J234.

## Imágenes requeridas

- Esquema funcional de la red de unidades de cierre y señales de control del cierre centralizado — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 40
