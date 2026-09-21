---
id: ssc.sin-clasificar.potenciometro-del-motor-de-la-trampilla-de-temperatura
modulo: ssc
unidad: sin-clasificar
nt: 185
titulo: "Potenciómetro Del Motor De La Trampilla De Temperatura"
codigo: "G92"
ubicacion: "Alojado en el propio motor V68, en la parte inferior de la unidad climática"
aplicacion: "Calefacción motorizada y Autoclima"
menu: "Potenciómetro Del Motor De La  G92"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Informar a la UCE de la posición angular exacta de la trampilla de mezcla de temperatura y reconocer los dos topes del recorrido mecánico.

## Principio de funcionamiento

Potenciómetro rotativo acoplado al eje del motor V68. Actúa como divisor de tensión entregando una señal variable a la UCE.

## Características

Posee una carrera angular de trabajo de 51º y un rango de resistencia eléctrica comprendido entre 0 y 4,7 kΩ.

## Valores de trabajo

| Parámetro | Valor numérico / Rango | Condiciones de validez |
|---|---|---|
| **Carrera angular del potenciómetro** | **51º** | Desplazamiento máximo de la trampilla |
| **Rango de resistencia eléctrica** | **0 a 4,7 kΩ** | Medido entre extremos de pista |
| **Ajuste básico (Grupo 002)** | Tensión en voltios de tope alto y bajo | Leído en función 04 grupo 002 |

## Anomalías frecuentes

Pérdida de contacto en los topes por suciedad de la pista resistiva; desalineación con el sinfín del servomotor.

## Comportamiento en avería

En caso de avería del potenciómetro, la UCE deja la trampilla en la posición existente y reduce la velocidad de la turbina para evitar la entrada excesiva de aire frío o caliente. Parpadean los dígitos del display.

## Cómo comprobarlo

Consultar el grupo de valores de medición 002 (campos 1, 2, 3 y 4) donde se indican los voltajes de posición real, calculada y topes superior e inferior de G92. Realizar el Ajuste Básico en función 04 grupo.

## Imágenes requeridas

- Despiece del motor V68 con sinfín, engranajes y potenciómetro interno G92 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 22
