---
id: ssc.ciclo-frigorifico.hella01
modulo: ssc
unidad: clima
nt: 780
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Ciclo frigorífico básico del aire acondicionado"
menu: "Ciclo frigorífico básico del aire acon"
grupo: "Circuito frigorífico"
clave: ciclo-frigorifico
area: climatizacion
sistema: "circuito-frigorifico"
fuentes: "HELLA01.PDF, págs. 23-26"
relacionados: ["compresor", "condensador", "valvula-expansion", "evaporador", "refrigerante-r134a"]
palabras: ["compresión", "condensación", "expansión", "evaporación", "R134a", "diagrama p-h"]
---

## Objeto

Describir las cuatro fases termodinámicas que realiza el fluido refrigerante R134a dentro de un circuito cerrado de climatización. (pág. 23, 24)

## Fundamento

El circuito cerrado transforma de forma continua el estado físico del fluido refrigerante para absorber calor del aire del habitáculo en el evaporador y expulsarlo al aire exterior en el condensador. (pág. 23, 24)

## Desarrollo

El ciclo frigorífico consta de cuatro tramos consecutivos:
1. Fase de compresión (Tramo A-B): El compresor aspira el refrigerante en estado gaseoso a baja presión y temperatura (3 bar / 6 ºC) y lo comprime hasta elevarlo a alta presión y temperatura (20 bar / 110 ºC). Se realiza un trabajo que aumenta la entalpía del fluido.
2. Fase de condensación (Tramo B-C-D-E): El gas a alta presión entra al condensador a 20 bar / 110 ºC, se enfría hasta su punto de ebullición e inicia la condensación. Sale del condensador en estado líquido a 20 bar / 60 ºC, habiendo cedido calor al aire exterior.
3. Fase de filtrado y expansión (Tramo E-F): El líquido pasa por el filtro deshidratante (sin sufrir cambios de presión ni temperatura) y llega a la válvula de expansión a 20 bar / 60 ºC. La válvula provoca una caída brusca de presión (hasta 3 bar / 0 ºC), haciendo ingresar al fluido en la zona difásica dentro de la campana.
4. Fase de evaporación (Tramo F-G-A): El fluido entra al evaporador a 3 bar / 0 ºC en estado de líquido + gas. Al chocar el aire del habitáculo contra las aletas del evaporador, el fluido absorbe su calor y se evapora por completo. Sale del evaporador en estado gaseoso a 3 bar / 6 ºC para ser aspirado de nuevo por el compresor.

(pág. 24, 25, 26)

## Valores de referencia

- Condiciones en aspiración del compresor (Punto A): 3 bar y 6 ºC (gas). (pág. 24, 25)
- Condiciones en descarga del compresor (Punto B): 20 bar y 110 ºC (gas). (pág. 24, 25)
- Condiciones a la salida del condensador / entrada a válvula de expansión (Punto E): 20 bar y 60 ºC (líquido). (pág. 24, 25, 26)
- Condiciones en el evaporador (Punto F-G): 3 bar y 0 ºC (líquido + gas). (pág. 25, 26)

## Errores de concepto frecuentes

Suponer que el paso del fluido por el filtro deshidratante modifica las condiciones de presión o temperatura del refrigerante. (pág. 26)

## Imágenes requeridas

- Esquema del circuito básico de A.A. y su representación completa sobre el diagrama presión-entalpía para R134a — Fuente: HELLA01.PDF, pág. 23, 24
