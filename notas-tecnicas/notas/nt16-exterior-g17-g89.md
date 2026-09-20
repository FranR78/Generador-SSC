---
id: ssc.clima.termosensores-de-temperatura-exterior
modulo: ssc
unidad: clima
nt: 16
titulo: Termosensores de temperatura exterior
codigo: G17 y G89
menu: Exterior G17 / G89
grupo: Sensores de temperatura
aplicacion: [VW Golf, Audi A3, Audi TT Coupé, Seat]
ubicacion: G17 en armazón delantero, paragolpes o carcasa del retrovisor derecho. G89 en el canal de entrada de aire fresco
marca: ✦ FUSIONADO — 2 fuentes
fuentes: Guía Técnica VAG, págs. 48-49, 103 · Manual de Sensores G107-G192, págs. 48-49
---

## Misión
Detectar la temperatura exterior efectiva e informar a la UCE para la gestión de las
chapaletas de temperatura y la velocidad de la turbina de aire fresco.

- **G17:** punto de medición principal, en el frontal del vehículo.
- **G89:** segundo punto de medición, que registra la temperatura del aire **en el momento
  exacto de ser aspirado** por la turbina.

## Principio de funcionamiento
Efecto **NTC** (coeficiente de temperatura negativo): la resistencia eléctrica varía
inversamente a la temperatura. La UCE procesa **siempre el valor más bajo** registrado entre
los dos sensores.

## Características
- Señal: **analógica**, resistencia NTC.
- En versiones modernas, el G17 comunica su valor al cuadro de instrumentos y llega a la UCE
  **vía CAN-Bus**.
- Ambos sensores son susceptibles de autodiagnóstico y registran avería en memoria.

## Comportamiento en avería
| Situación | Respuesta del sistema |
|---|---|
| Fallo de G17 | Se usa automáticamente el valor de G89 |
| Fallo de G89 | Se usa el valor medido por G17 |
| **Fallo simultáneo de ambos** | Valor supletorio fijo de **+10 °C** |

En climatizadores manuales antiguos, el fallo del sensor exterior podía llegar a **anular el
acoplamiento magnético del compresor**.

## Cómo comprobarlo
**Herramienta:** equipo de diagnosis y multímetro.
**Método:** ambos sensores son susceptibles de autodiagnóstico. Comprobar el valor leído
frente a la temperatura ambiente real, y medir la resistencia NTC contrastándola con la
curva del fabricante.

## Imágenes requeridas
- Ubicación del G17 en el armazón delantero y del G89 en el conducto de aire — Guía Técnica, págs. 48-49
- Gráfica de resistencia NTC frente a temperatura — sin referencia en las fuentes

## Advertencias
Si fallan ambos sensores simultáneamente, **el modo de recirculación automática de aire
queda inoperativo**.
