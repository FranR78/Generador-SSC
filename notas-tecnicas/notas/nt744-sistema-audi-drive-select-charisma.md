---
id: ssc.sin-clasificar.sistema-audi-drive-select-charisma
modulo: ssc
unidad: sin-clasificar
nt: 744
tipo: proceso
subtipo: fundamento
titulo: "Sistema Audi Drive Select (Charisma)"
menu: "Sistema Audi Drive Select (Charisma)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la lógica de control, la interconexión de buses y la conmutación de mapas de respuesta del motor, cambio, dirección y amortiguación mediante el sistema Audi drive select. Aplica a la electrónica de confort y dinamismo.

## Fundamento

Módulo de conmutadores centralizado que envía la solicitud del conductor a la unidad de control de la red de a bordo J519, la cual distribuye las consignas a través del Gateway J533 a los diferentes módulos implicados.

## Condiciones previas

Encendido conectado (borne 15) o vehículo en circulación. Para que la nueva configuración afecte al motor, es necesario no pisar el acelerador durante un breve instante.

## Desarrollo

* **Modos de funcionamiento:**
  - COMFORT: Dirección suave, amortiguación blanda, respuesta de motor y cambio en programa D.
  - AUTO: Configuración equilibrada adaptativa. Al arrancar el motor se activa siempre el modo AUTO por defecto.
  - DYNAMIC: Dirección directa y firme, amortiguación tensa, respuesta de motor espontánea y cambio en programa deportivo S.
  - INDIVIDUAL (solo con MMI): Permite personalizar de forma independiente los tres grupos (Motor/Cambio, Dirección y Amortiguación) y guardarlos en la memoria de la llave del vehículo.
* **Flujo de señales entre unidades de control:**
  1. El módulo de conmutadores para Charisma E592 envía la posición seleccionada por bus LIN a la UCE de red de a bordo J519.
  2. J519 ajusta directamente la válvula de la dirección Servotronic.
  3. J519 emite un mensaje por el CAN Confort hacia el Gateway J533.
  4. J533 distribuye la orden al CAN Tracción (UCE del motor J623 y UCE del cambio J217) y al CAN Cuadro/tren de rodaje (UCE de amortiguación J250 y dirección activa J792).

## Valores de referencia

| Modo Seleccionado | Motor y Cambio | Dirección Servotronic/Dinámica | Amortiguación J250 |
| :--- | :--- | :--- | :--- |
| COMFORT | Programa D (Normal) | Suave e indirecta | Confortable suave |
| AUTO | Programa D (Adaptativo) | Normal equilibrada | Normal equilibrada |
| DYNAMIC | Programa S (Deportivo) | Deportiva y directa | Deportiva tensa |

## Interpretación y errores frecuentes

* Intentar cambiar el modo del motor manteniendo el acelerador pisado a fondo; el mapa de inyección no conmuta hasta que el acelerador se libera momentáneamente.

## Verificación final

Verificar la iluminación del LED del modo seleccionado en el conmutador E592 y consultar el bloque de valores en la UCE J519 con el equipo de diagnosis.

## Imágenes requeridas

- Cuadro sinóptico de unidades interconectadas por LIN, CAN y MOST en el Audi drive select — Fuente: 409_e         Audi A4 08.pdf, pág. 58
