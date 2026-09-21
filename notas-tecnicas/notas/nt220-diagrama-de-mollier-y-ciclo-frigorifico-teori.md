---
id: ssc.sin-clasificar.diagrama-de-mollier-y-ciclo-frigorifico-teorico
modulo: ssc
unidad: sin-clasificar
nt: 220
tipo: proceso
subtipo: fundamento
titulo: "Diagrama De Mollier Y Ciclo Frigorífico Teórico"
menu: "Diagrama De Mollier Y Ciclo Frigorífic"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la estructura del diagrama de Mollier (presión frente a entalpía) y las cuatro fases del ciclo frigorífico. Se aplica al análisis termodinámico del aire acondicionado.

## Fundamento

El diagrama de Mollier representa la presión absoluta (eje vertical) en función de la entalpía (eje horizontal). La campana central delimita tres zonas: líquido a la izquierda, estado difásico (líquido + gas) en el centro, y gas a la derecha. El vértice superior es la Presión Crítica (T_c), a partir de la cual no es posible licuar el gas.

## Desarrollo

Las 4 transformaciones del ciclo sobre el diagrama son:  
1. **Compresión (1 a 2):** El compresor aspira gas a baja presión y baja temperatura (-1 ºC / 3 bar) y lo comprime elevando su presión y entalpía hasta alta presión y alta temperatura (110 ºC / 20 bar).  
2. **Condensación (2 a 5):** En el condensador, el gas cede calor al aire exterior. Primero se enfría (sensible), luego se condensa a temperatura constante (60 ºC / 19 bar, calor latente difásico) y finalmente se subenfría a líquido (60 ºC / 19 bar).  
3. **Expansión (5 a 6):** La válvula de expansión estrangula el líquido de alta presión (19 bar) a baja presión (3 bar). La entalpía se mantiene constante, pero la temperatura cae en picado a -1 ºC (mezcla difásica).  
4. **Evaporación (6 a 1):** En el evaporador, el fluido ebulle a baja presión (3 bar / -1 ºC) absorbiendo el calor del aire del habitáculo. Pasa de líquido a gas y sufre un ligero recalentamiento final (+3 ºC a +5 ºC) antes de volver al compresor.

## Valores de referencia

| Fase / Punto del circuito | Presión de trabajo | Temperatura de trabajo | Estado del fluido |
|---|---|---|---|
| **1. Entrada al Compresor** | **3 bar** | **5 ºC** | Gas (recalentado) |
| **2. Salida del Compresor** | **20 bar** | **110 ºC** | Gas (alta temperatura) |
| **3. Entrando a Condensación** | **19 bar** | **70 ºC** | Gas cediendo calor |
| **5. Salida del Condensador** | **19 bar** | **60 ºC** | Líquido (subenfriado) |
| **6. Entrada al Evaporador** | **3 bar** | **-1 ºC** | Difásico (mezcla líquido/gas) |
| **8. Salida del Evaporador** | **3 bar** | **3 ºC a 10 ºC** | Gas cediendo frío al aire |

## Interpretación y errores frecuentes

- Entrada de líquido al compresor: si la evaporación no se completa (recalentamiento nulo), entra líquido al compresor provocando la destrucción mecánica inminente de sus válvulas (los líquidos son incompresibles).

## Imágenes requeridas

- Ciclo frigorífico representado sobre la campana del diagrama de Mollier — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 57
