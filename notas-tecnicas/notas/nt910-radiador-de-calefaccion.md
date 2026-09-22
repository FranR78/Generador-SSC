---
id: ssc.clima.radiador-de-calefaccion
modulo: ssc
unidad: clima
nt: 910
tipo: elemento
titulo: Radiador de calefacción
codigo: No documentado en fuentes
menu: Radiador de calefacción
clave: radiador-de-calefaccion
grupo: Calefacción
ubicacion: En el interior del bloque de climatización del salpicadero (conjunto de trampillas A/C)
aplicacion:
  - Sistema de calefacción del habitáculo
fuentes: CLIMATIZACION INTRODUCCION.PDF, pág. 147
fusionadas:
  - 234
  - 321
  - 377
---

## Misión
Ceder calor al aire que entra al habitáculo aprovechando la energía térmica del líquido refrigerante
del motor.

## Principio de funcionamiento
Intercambiador térmico líquido/aire. Una parte del caudal de refrigerante caliente del motor se desvía
al radiador; el aire impulsado por el ventilador atraviesa sus aletas, absorbe el calor y sale
templado por los difusores.

## Características
Radiador de aluminio compacto, conectado en derivación al circuito de refrigeración del motor e
integrado en el mueble de trampillas A/C. **El circuito del motor está dimensionado contando con la
disipación de este radiador: no se debe anular su circulación.**

## Valores de trabajo
- **Teórico OEM:** temperatura de entrada del líquido de **80 ºC a 90 ºC** con el motor a temperatura
  de servicio.

## Anomalías frecuentes
Taponamiento interno por lodos del anticongelante; fugas de líquido que mojan la moqueta del vehículo.

## Comportamiento en avería
No sale aire caliente aunque el motor esté caliente, o aparece vaho grasiento en el parabrisas con
olor a anticongelante. Si se anula su paso, se altera además la disipación térmica del motor.

## Cómo comprobarlo
Tocar los dos tubos de agua del radiador en el vano motor (ambos deben estar muy calientes con el motor
a temperatura) y comprobar que no haya fugas.

## Notas fusionadas
Consolida NT234, NT321 y NT377. Las fichas originales se conservan en `notas-fusionadas/`.
