---
id: ssc.sin-clasificar.transmisores-de-temperatura-del-aire-de-entrada
modulo: ssc
unidad: clima
nt: 181
titulo: "Transmisores De Temperatura Del Aire De Entrada"
codigo: "G191 / G192"
ubicacion: "G191 situado en el difusor central; G192 situado en el difusor de la zona de los pies"
aplicacion: "Sistema Autoclima del SEAT Ibiza y Córdoba 1999"
menu: "Transmisores De Temperatura De G191 / G192"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del aire que sale hacia el habitáculo por los difusores para regular de forma precisa la mezcla de la trampilla de temperatura.

## Principio de funcionamiento

Sondas de resistencia NTC. La UCE calcula la media aritmética de las lecturas entregadas por ambos transmisores para ajustar el posicionamiento del servomotor de temperatura V68.

## Características

Sondas térmicas de inserción rápida con conector de 2 polos. Margen de medición de -40 ºC a +85 ºC.

## Valores de trabajo

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Rango de medida NTC** | **-40 ºC a +85 ºC** | Mapeo térmico de la UCE |

## Anomalías frecuentes

Interrupción de los hilos de señal; descalibración del elemento cerámico.

## Comportamiento en avería

Al perder la señal de cualquiera de los dos transmisores, la UCE anula la regulación automática del sistema y mantiene fijos los parámetros que existían en el momento de producirse la avería. Todos los dígitos del display parpadean.

## Cómo comprobarlo

Consultar la temperatura de G191 en el grupo de valores de medición 006 campo 2 y de G192 en el grupo 006 campo. Medir la resistencia eléctrica entre bornes con un multímetro.

## Imágenes requeridas

- Ubicación de los transmisores G191 en el difusor central y G192 en la zona de los pies — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 13
