---
id: ssc.clima.transmisor-de-alta-presion-sensor-map
modulo: ssc
unidad: clima
nt: 13
titulo: Transmisor de alta presión / sensor MAP
codigo: G65
menu: Transmisor de presión G65
grupo: Sensores de presión
aplicacion: [VW Golf, Audi A3, Audi TT Coupé, Seat]
ubicacion: Incorporado en el tubo de alta presión del circuito frigorífico
marca: ✦ FUSIONADO — 3 fuentes
fuentes: AA Automoción (Hella), págs. 136-137 · Guía Técnica VAG, págs. 89-90 · Dashboard Sensores, págs. 89-94
---

## Misión
Vigilar y medir de forma **continua e ininterrumpida** la presión del refrigerante en todo
su ciclo de trabajo, no solo en umbrales fijos como hace la trinaria.

Con su señal, la UCE adapta el ralentí del motor exactamente a la potencia absorbida por el
compresor, gestiona de forma escalonada las velocidades del electroventilador y protege el
compresor. Sustituye al conmutador de presión en los sistemas modernos.

## Principio de funcionamiento
Aprovecha el fenómeno **piezorresistivo del cristal de silicio**:

1. La presión del refrigerante se aplica contra un cristal de silicio, que se deforma en
   mayor o menor medida.
2. La deformación modifica su resistencia eléctrica y, con ella, la tensión de medición.
3. Un microprocesador integrado evalúa esa tensión y la transforma en una señal digital
   **modulada en anchura de impulsos (PWM)** de frecuencia fija.

A presión baja el cristal se deforma poco, opone poca resistencia y la anchura de impulso es
reducida; al subir la presión, la deformación y la anchura de impulso aumentan en proporción.

## Características
- Señal: **digital PWM**, frecuencia fija de **50 Hz** (período de 20 ms = 100 %).
- Alimentación: generalmente 12 V. Existen modelos de 5 V con señal analógica de 1 a 4 V.
- Rango de medición continuo desde 0,14 MPa (1,4 bar) hasta 3,7 MPa (37 bar).

## Valores de trabajo
| Condición | Presión | Anchura de impulso | % del período |
|---|---|---|---|
| Presión mínima | 1,4 bar (0,14 MPa) | **2,6 ms** | 13 % |
| Circuito en reposo | 5 bar | ≈ 5 ms | 25 % |
| Funcionamiento normal | 14 bar | ≈ 8 ms | 40 % |
| Presión máxima | 37 bar (3,7 MPa) | **18 ms** | 90 % |

## Anomalías frecuentes
- Cables cortados o derivados a masa.
- Fallo del microprocesador interno o del elemento sensible de silicio.

## Comportamiento en avería
Si la unidad de control no detecta ninguna señal, por ejemplo por un cable cortado,
**desconecta el compresor por motivos de seguridad**. La anomalía queda registrada en la
memoria de averías, por ejemplo como **00819 Transmisor de alta presión «Señal muy baja»**
(grupo VAG).

## Cómo comprobarlo
**Herramienta:** osciloscopio digital y equipo de diagnosis.
**Puntos de medida:** cable de señal del transmisor.

Debe verse una onda cuadrada de **50 Hz con período de 20 ms**, donde la anchura del
impulso positivo varía proporcionalmente a la presión: 2,6 ms a 1,4 bar, 18 ms a 37 bar.

## Imágenes requeridas
- Estructura del transmisor con cristal de silicio y microprocesador — AA Automoción, págs. 136-137, Fig. 7.5.2 y 7.5.3
- Oscilogramas de la señal PWM a presión baja y alta — Fig. 7.5.4 y 7.5.6
- Ubicación del sensor G65 en el tubo de alta presión — Dashboard Sensores, pág. 91
