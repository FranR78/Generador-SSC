---
id: ssc.sin-clasificar.adaptacion-de-ralenti-y-estrategia-en-atascos
modulo: ssc
unidad: sin-clasificar
nt: 1112
tipo: proceso
subtipo: fundamento
titulo: "Adaptación De Ralentí Y Estrategia En Atascos"
menu: "Adaptación De Ralentí Y Estrategia En "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la comunicación vía CAN-Bus entre la UCE del climatizador y la UCE del motor para compensar la carga del compresor y aumentar las revoluciones en situaciones de retención o tráfico denso.

## Fundamento

El compresor absorbe potencia mecánica del motor térmico. La UCE del climatizador informa a la UCE del motor del rendimiento solicitado para que esta adapte la velocidad de ralentí. En situaciones de atasco con baja potencia frigorífica, la UCE de motor incrementa voluntariamente el régimen para mejorar el rendimiento del compresor.

## Condiciones previas

Motor en marcha a temperatura de servicio y sistema de climatización en funcionamiento.

## Desarrollo

* **Ajuste básico de ralentí por carga de A/C:**
  - La UCE del climatizador vuelca al CAN-Bus un mensaje indicando un rendimiento del compresor superior al 2%.
  - La UCE del motor analiza el mensaje y ajusta progresivamente el régimen de ralentí para compensar el par absorbido.
* **Función para retenciones y atascos:**
  - Si el vehículo circula a una velocidad **inferior a 5 km/h** y el sensor de temperatura a la salida del evaporador detecta insuficiente potencia frigorífica estando el compresor activado al máximo (**98%**), la UCE de climatización envía un mensaje al CAN-Bus de confort.
  - La UCE del motor recibe este mensaje y eleva automáticamente las revoluciones del motor térmico al ralentí para aumentar el caudal de refrigerante del compresor y mejorar el rendimiento frigorífico.

## Valores de referencia

| Parámetro de Control | Condición de Activación | Reacción del Sistema |
| :--- | :--- | :--- |
| **Mensaje de Carga Estándar** | Rendimiento del compresor > 2% | Ajuste de ralentí para compensar carga |
| **Función para Atascos** | Velocidad < 5 km/h + Compresor al 98% + Falta de frío en evaporador | Incremento de las rpm de ralentí del motor |

## Interpretación y errores frecuentes

* Interpretar la elevación autónoma del ralentí con el vehículo parado como una falla en la mariposa o inyección; se trata de la función para atascos del sistema de climatización.

## Verificación final

Verificar mediante la máquina de diagnosis la recepción de la trama de rendimiento en la UCE de motor y la elevación de las rpm al simular alta demanda al ralentí.
