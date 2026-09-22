---
id: ssc.sin-clasificar.arquitectura-y-regulacion-del-climatizador-automatico-de-confort
modulo: ssc
unidad: sin-clasificar
nt: 746
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura Y Regulación Del Climatizador Automático De Confort"
menu: "Arquitectura Y Regulación Del Climatiz"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe la arquitectura electrónica, el procesamiento descentralizado de sensores y la red de comunicación del climatizador automático (versiones de 1 zona y confort plus de 3 zonas). Aplica a la diagnosis del sistema de climatización.

## Fundamento

Interconexión en red descentralizada donde la UCE de Climatronic J255 gestiona los servomotores a través de una línea de bus LIN dedicada y recibe los datos de sensores térmicos y de presión a través del bus CAN Confort desde otras unidades de control.

## Condiciones previas

Tensión de batería correcta y contacto encendido (borne 15).

## Desarrollo

* **Flujo de información entre unidades de control:**
  - Sensor de temperatura exterior G17: Conectado a la UCE de red de a bordo J519. Envía su valor por CAN Confort hacia el cuadro J285 y la UCE de Climatronic J255.
  - Sensor de presión y temperatura del agente frigorífico G395: Comunica por LIN-Bus con J519, que lo retransmite por CAN Confort a J255.
  - Sensor de humedad del aire G355 y sensor de calidad del aire G238: Comunican por bus LIN con la UCE central de confort J393 y J255 respectivamente.
  - Turbina de aire exterior J126 y Servomotores de chapaletas: Conectados directamente por una línea de bus LIN en serie a la UCE J255.
* **Componentes del circuito frigorífico:**
  - Tubo coaxial: Integra en una sola tubería los conductos de alta y baja presión para ahorrar espacio y mejorar el rendimiento térmico.
  - Evaporador de serie: Cuenta con tubos soldados fijamente. En caso de reparación o sustitución en el Servicio Postventa, se instala un kit de tubos de versión atornillable.

## Valores de referencia

| Componente / Comunicación | Tipo de Bus / Conexión | Comportamiento en Avería |
| :--- | :--- | :--- |
| Sensor de temperatura exterior G17 | Cable discreto a J519  CAN | Se desactiva la función AC (LED AC apagado) |
| Servomotores de chapaletas | Conexión en serie por bus LIN a J255 | Avería de la línea LIN bloquea las trampillas |
| Sensor de calidad del aire G238 | Bus LIN directo a J255 | Desactiva la recirculación automática |

## Interpretación y errores frecuentes

* Buscar la conexión directa del sensor de presión G395 en la UCE de clima J255; se lee a través de la UCE de red de a bordo J519 por CAN.

## Verificación final

Verificar la lectura de todos los sensores en los bloques de medición de la UCE J255 con el equipo de diagnosis.

## Imágenes requeridas

- Esquema de interconexión de sensores, bus CAN y bus LIN del Climatronic J255 — Fuente: 409_e         Audi A4 08.pdf, pág. 66
