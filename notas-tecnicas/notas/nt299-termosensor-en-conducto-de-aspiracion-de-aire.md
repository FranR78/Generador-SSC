---
id: ssc.sin-clasificar.termosensor-en-conducto-de-aspiracion-de-aire-fresco
modulo: ssc
unidad: sin-clasificar
nt: 299
titulo: "Termosensor En Conducto De Aspiración De Aire Fresco"
codigo: "G89"
ubicacion: "Instalado directamente en el canal de entrada de aire fresco del climatizador"
aplicacion: "Segundo punto de medición de temperatura exterior en climatizadores automáticos"
menu: "Termosensor En Conducto De Asp G89"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del aire exterior justo en el canal de aspiración como respaldo y contraste del sensor frontal G17.

## Principio de funcionamiento

Sensor termistor NTC. Envía su señal a la UCE E87. La UCE analiza G17 y G89 simultáneamente y selecciona siempre el valor más bajo de ambos para evitar errores causados por calor radiado del motor o asfalto.

## Características

Resistencia NTC montada en el conducto de entrada.

## Valores de trabajo

| Parámetro | Criterio de selección de la UCE |
|---|---|
| **Procesamiento de señal** | Asume siempre el valor de medición más bajo entre G17 y G89 |
| **Valor supletorio por fallo total** | **+10 ºC** (si fallan G89 y G17) |

## Anomalías frecuentes

Acumulación de hojas o suciedad en el canal; interrupción del cableado eléctrico.

## Comportamiento en avería

La UCE utiliza exclusivamente el valor de medición del sensor G17.

## Cómo comprobarlo

Verificar la resistencia NTC con polímetro y comprobar su valor en la pantalla del equipo de diagnosis OBD.
