---
id: ssc.sin-clasificar.valvula-de-cierre-para-liquido-refrigerante-de-la-calefaccion
modulo: ssc
unidad: sin-clasificar
nt: 160
titulo: "Válvula De Cierre Para Líquido Refrigerante De La Calefacción"
codigo: "N279"
ubicacion: "Montada en el vano motor, en las tuberías de agua hacia la caja de aguas del salpicadero [118]"
aplicacion: "Conmutación entre el circuito menor (solo habitáculo) y el circuito mayor (habitáculo + motor) [119, 120]"
menu: "Válvula De Cierre Para Líquido N279"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Priorizar el calentamiento rápido del aire del habitáculo aislando el bloque motor durante el inicio del funcionamiento de la calefacción independiente [108, 120].

## Principio de funcionamiento

Electroválvula de vías controlada por solenoide. Al recibir alimentación de la UCE (100% excitación), cierra el paso hacia el motor para hacer circular todo el líquido por el intercambiador del climatizador (circuito menor); a medida que sube la temperatura, reduce la excitación para integrar el bloque motor (circuito mayor) [119-121].

## Características

Cuerpo de plástico técnico de 3 vías de agua con solenoide electromagnético y conector de 2 polos [13, 120].

## Valores de trabajo

- Tensión de alimentación: 12 V [13].  
- Porcentaje de excitación: 100% (circuito menor) / 0% (circuito mayor) [119, 120].  
- Temperatura de conmutación progresiva: entre 65 ºC y 78 ºC [108].

## Anomalías frecuentes

Agarrotamiento de la maza de cierre por cal o sedimentos del refrigerante [120].

## Comportamiento en avería

Si se queda bloqueada en circuito menor, el motor del vehículo no recibe precalentamiento; si queda en circuito mayor, se retrasa el caldeo del habitáculo [120, 122].

## Cómo comprobarlo

Verificar el pulso de conmutación a 0,5 Hz durante la diagnosis de actuadores [13]. Medir el porcentaje de activación en el bloque de valores de medida "003", campo 3 [119].
