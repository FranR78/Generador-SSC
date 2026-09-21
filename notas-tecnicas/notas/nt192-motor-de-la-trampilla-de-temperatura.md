---
id: ssc.sin-clasificar.motor-de-la-trampilla-de-temperatura
modulo: ssc
unidad: clima
nt: 192
titulo: "Motor De La Trampilla De Temperatura"
codigo: "V68"
ubicacion: "Parte inferior de la unidad climática"
aplicacion: "Calefacción motorizada y Autoclima"
menu: "Motor De La Trampilla De Tempe V68"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Accionar mecánicamente la trampilla de mezcla de temperatura para regular el paso de aire a través del radiador de calefacción.

## Principio de funcionamiento

Motor eléctrico de corriente continua de giro limitado. La UCE J255 lo excita con positivo y negativo, alternando la polaridad de los bornes según el sentido de giro deseado hacia frío o calor. Monta en su interior el potenciómetro G92.

## Características

Módulo actuador provisto de motor eléctrico, tornillo sinfín y rueda de transmisión de movimiento.

## Valores de trabajo

| Prueba en diagnosis | Comportamiento del motor V68 |
|---|---|
| **Diagnosis de actuadores (Función 03)** | Se desplaza progresivamente desde la posición mínima a la máxima |
| **Ajuste básico (Función 04 Grupo 002)** | Desplaza la trampilla a ambos extremos memorizando voltajes |

## Anomalías frecuentes

Ruptura o desgaste de los dientes de la rueda de transmisión o sinfín; agarrotamiento de la trampilla.

## Comportamiento en avería

En caso de avería, la trampilla se queda en la posición existente y la UCE aminora la velocidad de la turbina para reducir la entrada brusca de aire.

## Cómo comprobarlo

Ejecutar la Función 03 (Diagnosis de actuadores) para verificar el movimiento de mínimo a máximo. Ejecutar el Ajuste Básico grupo.

## Imágenes requeridas

- Sección del motor V68 con sinfín, engranajes y potenciómetro interno G92 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 22
