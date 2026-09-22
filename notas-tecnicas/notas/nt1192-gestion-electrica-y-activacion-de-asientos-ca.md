---
id: ssc.sin-clasificar.gestion-electrica-y-activacion-de-asientos-calefactados
modulo: ssc
unidad: sin-clasificar
nt: 1192
tipo: proceso
subtipo: procedimiento
titulo: "Gestión Eléctrica Y Activación De Asientos Calefactados"
menu: "Gestión Eléctrica Y Activación De Asie"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto and alcance

Explica la arquitectura de activación de los asientos calefactados delanteros y traseros y su condicionamiento a la gestión de la carga eléctrica ejecutada por la UCE J519. Aplica al sistema eléctrico de confort.

## Fundamento

Los elementos calefactores de los asientos representan un elevado consumo de corriente de potencia. Para evitar la descarga de la batería de 12 V, la activación de las esterillas térmicas por la UCE J255 está supeditada a la autorización de la UCE de la red de a bordo J519 según el estado del balance energético del alternador.

## Condiciones previas

Motor en marcha o contacto encendido con estado de carga de batería adecuado.

## Desarrollo

* **Petición y activación de los asientos delanteros (Z45 / Z46):**
  - El usuario pulsa la tecla correspondiente situada en la propia unidad de control del Climatronic J255.
* **Petición y activación de los asientos traseros laterales (ZX10 / ZX12):**
  - El usuario pulsa la tecla en la unidad de mandos e indicación trasera E265.
  - E265 transmite la solicitud a la UCE J255 a través de la línea de datos LIN-Bus Clima.
* **Intervención de la Gestión de Carga Eléctrica:**
  1. La UCE Climatronic J255 vuelca la solicitud de activación de los asientos al CAN-Bus Confort.
  2. La UCE de la red de a bordo J519 lee el mensaje en la red CAN-Bus Confort y evalúa el balance de carga del alternador y la tensión de batería.
  3. Si J519 tiene activa la función de *Gestión de Carga Eléctrica* (debido a bajo nivel de batería o alto consumo global), **deniega la autorización y prohíbe la conexión de los asientos calefactados** o reduce su nivel de potencia.
  4. Si el balance energético es correcto, J519 autoriza el suministro de corriente alimentando los circuitos a través del fusible SC51.

## Valores de referencia

| Asientos Calefactados | Mando de Petición | Línea de Comunicación | Condición de Inhibición por Seguridad |
| :--- | :--- | :--- | :--- |
| **Delanteros (Z45 / Z46)** | Pulsadores en UCE J255 | Cableado interno / CAN-Bus Confort | Estado de Gestión de Carga en UCE J519 activo |
| **Traseros (ZX10 / ZX12)** | Pulsadores en UCE E265 | LIN-Bus Clima -> UCE J255 -> CAN Confort | Estado de Gestión de Carga en UCE J519 activo |

## Interpretación y errores frecuentes

* Interpretar la no desconexión o falta de calentamiento de los asientos con el motor al ralentí y muchos consumidores encendidos como un fallo de las esterillas Z45/ZX10; se trata de una desconexión por la gestión de carga de J519.

## Verificación final

Verificar en la UCE J519 mediante el equipo de diagnosis el bloque de medición de "Gestión de Carga Eléctrica" y comprobar la presencia de tensión en las esterillas calefactoras al acelerar el motor.

## Seguridad y normativa

Protección contra el rozamiento y desconexión automática por sobretemperatura para evitar quemaduras a los ocupantes.

💡 ¿Deseas que preparemos un esquema de la red del LIN-Bus Clima o algún test de comprobación sobre la unidad climática del SEAT Tarraco para entregar a los alumnos en el taller?

## Imágenes requeridas

- Esquema eléctrico de los asientos calefactados Z45, Z46, ZX10, ZX12 y comunicación entre J255 y J519 — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 65
