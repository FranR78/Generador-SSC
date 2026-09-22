---
id: ssc.sin-clasificar.configuraciones-de-climatizacion-en-el-seat-tarraco
modulo: ssc
unidad: sin-clasificar
nt: 1185
tipo: proceso
subtipo: fundamento
titulo: "Configuraciones De Climatización En El Seat Tarraco"
menu: "Configuraciones De Climatización En El"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica las dos configuraciones de climatización disponibles en el SEAT Tarraco (Aire Acondicionado manual y Climatronic trizona), su lógica de control y la arquitectura de la red de comunicación. Aplica a los sistemas de confort y climatización.

## Fundamento

Ambas configuraciones ajustan la temperatura y la distribución del caudal mediante servomotores eléctricos. Mientras que el sistema manual ajusta las trampillas y la velocidad en función de la demanda directa seleccionada en los mandos, el Climatronic gestiona de forma automática tres zonas independientes (conductor, acompañante y plazas traseras) mediante una unidad central de control y una red de sensores y actuadores.

## Condiciones previas

Contacto encendido (+15) y tensión de batería adecuada.

## Desarrollo

* **Aire Acondicionado Manual:**
  - Se ajusta mediante la unidad de mandos de la calefacción y el aire acondicionado EX21.
  - La velocidad del aire e inclinación de las trampillas se regulan directamente según la posición seleccionada en los mandos.
* **Climatronic (Trizona):**
  - Regula de forma independiente la temperatura del conductor, acompañante y plazas traseras.
  - La temperatura de las plazas traseras se ajusta desde la unidad de mandos e indicación trasera E265, ubicada en la parte posterior de la consola central.
  - Funciones de la unidad de control J255: regulación de temperatura en 3 zonas, distribución y caudal de aire, recirculación automática según la calidad del aire (sensor G238), sistema AirCare (PureAir), solicitud de activación de la luneta térmica y asientos calefactados, programación de calefacción estacionaria y gestión mediante la pantalla del sistema de infotenimiento J794/J685.
* **Arquitectura de red y comunicación:**
  - *CAN-Bus Confort:* Interconecta la UCE Climatronic J255 con la interfaz de diagnosis J533, UCE de la red de a bordo J519, UCEs de puertas (J386, J387) y equipo de infotenimiento J794.
  - *LIN-Bus Clima:* Conecta como componentes esclavos a J255 el sensor de presión del refrigerante G805, el sensor de calidad del aire G238, la unidad de mandos trasera E265 y la unidad de control de la turbina de aire exterior J126.

## Valores de referencia

| Sistema de Climatización | Zonas de Regulación | Mando / Unidad de Control | Red de Comunicación |
| :--- | :--- | :--- | :--- |
| **Aire Acondicionado Manual** | Monozona | Unidad de mandos EX21 | Cableado directo a servomotores |
| **Climatronic Trizona** | 3 zonas (conductor, acompañante, trasera) | UCE J255 (delante) y UCE E265 (detrás) | CAN-Bus Confort y LIN-Bus Clima |

## Interpretación y errores frecuentes

* Confundir el protocolo de diagnóstico de los sensores del LIN-Bus Clima con sensores analógicos; el sensor de presión G805 y el de calidad del aire G238 transmiten sus datos mediante tramas de datos digitales LIN.

## Verificación final

Comprobar mediante el equipo de diagnosis en la dirección 08 (Climatizador) la ausencia de averías registradas y la comunicación correcta con los abonados del LIN-Bus Clima.

## Imágenes requeridas

- Mandos del aire acondicionado manual EX21 y unidad de control del Climatronic J255 — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 59
- Esquema de la red de comunicación CAN-Bus Confort y LIN-Bus Clima del Climatronic — Fuente: SSP172 TARRACO (arrastrado).pdf, págs. 60 y 61
