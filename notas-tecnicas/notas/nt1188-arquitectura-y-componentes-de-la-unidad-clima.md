---
id: ssc.sin-clasificar.arquitectura-y-componentes-de-la-unidad-climatica
modulo: ssc
unidad: sin-clasificar
nt: 1188
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura Y Componentes De La Unidad Climática"
menu: "Arquitectura Y Componentes De La Unida"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la integración interna de sensores, actuadores, evaporador y radiador de calefacción dentro del módulo central de la unidad climática. Aplica al sistema Climatronic del SEAT Tarraco.

## Fundamento

La unidad climática es la carcasa central que canaliza, mezcla y distribuye el flujo de aire. Al berga en su interior los elementos de intercambio térmico (evaporador del A/C y radiador de calefacción) y los servomotores eléctricos que posicionan las trampillas para ajustar la mezcla de aire y la salida hacia los difusores.

## Desarrollo

* **Sensores integrados en la unidad climática:**
  - *Termosensor del evaporador G308:* Mide la temperatura tras el paso por el evaporador para evitar la formación de hielo.
  - *Sensor de temperatura del difusor reposapiés G192:* Mide la temperatura del aire enviado a la zona inferior delantera.
  - *Nota:* El resto de los sensores térmicos (G385, G386, G174) se ubican directamente en las toberas de salida de aire.
* **Actuadores y servomotores integrados:**
  - *Turbina de aire exterior V2:* Impulsa el caudal de aire, gestionada por la UCE de potencia J126 (abonada a LIN-Bus Clima).
  - *Servomotor V158:* Mueve las trampillas de mezcla de aire frío/caliente de la zona delantera izquierda.
  - *Servomotor V159:* Mueve las trampillas de mezcla de aire frío/caliente de la zona delantera derecha.
  - *Servomotor V137:* Mueve las trampillas de mezcla de aire frío/caliente de la zona trasera.
  - *Servomotor V237:* Mueve las trampillas de los difusores del tablero, reposapiés y consola trasera mediante palancas y cables Bowden.
  - *Servomotor V425:* Acciona las trampillas de aire exterior, recirculación de aire y presión dinámica.
  - *Servomotor V107:* Acciona la trampilla de descongelación/desempañado del parabrisas.

## Valores de referencia

| Componente de la Unidad Climática | Tipo de Elemento | Función / Zona Regulada |
| :--- | :--- | :--- |
| **G308** | Sensor NTC | Control de temperatura del evaporador (anti-congelación) |
| **G192** | Sensor NTC | Medición de temperatura en la salida a reposapiés |
| **V158 / V159** | Servomotor eléctrico | Mezcla de temperatura zona delantera izquierda / derecha |
| **V137** | Servomotor eléctrico | Mezcla de temperatura zona trasera (3.ª zona) |
| **V237** | Servomotor eléctrico | Distribución de salida de aire (tablero, pies, consola trasera) |
| **V425** | Servomotor eléctrico | Control de aire exterior, recirculación y presión dinámica |
| **V107** | Servomotor eléctrico | Descongelación / desempañado del parabrisas |

## Interpretación y errores frecuentes

* Tratar de acceder a los servomotores sin consultar el esquema de ubicación; el servomotor V237 acciona simultáneamente difusores delanteros y traseros mediante la combinación de palancas mecánicas y dos cables Bowden.

## Verificación final

Realizar un ajuste básico de los servomotores con el equipo de diagnosis para recalibrar los topes mecánicos de todas las trampillas instaladas en la unidad climática.

## Imágenes requeridas

- Disposición de servomotores, sensores, evaporador y radiador en la unidad climática — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 62
