---
id: ssc.ventilador-habitaculo.5-el-circuito-de-aire
modulo: ssc
unidad: clima
nt: 382
tipo: elemento
clase: componente
titulo: "Ventilador de habitáculo"
menu: "Ventilador de habitáculo"
grupo: "Distribución de aire"
clave: ventilador-habitaculo
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: distribucion-aire
fuentes: "5. EL CIRCUITO DE AIRE.pptx, págs. 6-10"
relacionados: ["distribucion-aire", "unidad-control-climatizador"]
palabras: ["impulsor", "resistencias en serie", "módulo electrónico", "diferencia de potencial"]
---

## Misión

Impulsar el caudal de aire canalizado hacia el interior del habitáculo a través del circuito de climatización. (pág. 6)

## Tipos y características

Se emplean dos tipos principales de montaje eléctrico para el control de velocidad:
- Montaje con resistencias en serie: regula la velocidad modificando la tensión de alimentación del motor mediante la inserción de resistencias en serie.
- Montaje con módulo electrónico: regula la velocidad de forma continua o escalonada mediante modulación por potenciómetro y transistor de potencia.




(pág. 6)

## Principio de funcionamiento

- En el montaje con resistencias en serie, la corriente atraviesa una combinación de resistencias (R1, R2, R3) para reducir la tensión aplicada al motor en las velocidades intermedias. En la velocidad máxima, un relé específico alimenta el motor de ventilación de forma directa desde la línea de alimentación, sin pasar por ninguna resistencia.
- En el montaje con módulo electrónico, el mando selector dispone de un divisor de tensión compuesto por varias resistencias (R1 a R7). El módulo electrónico detecta la diferencia de tensión entre las vías de entrada A y B para identificar la posición del mando giratorio. El motor funciona bajo diferencia de potencial modulada: el módulo mantiene una tensión fija (ejemplo: 12 V) en uno de los bornes del motor y hace variar la tensión en el otro borne.

(pág. 10)

## Valores de trabajo

- Alimentación del motor en montaje con módulo electrónico: 12 V fija en un borne y tensión variable (ejemplo: 3 V) en el otro borne, proporcionando una diferencia de potencial aplicada al motor de 9 V a la velocidad correspondiente. (pág. 10)

## Imágenes requeridas

- Esquema eléctrico del montaje de ventilador con grupo de resistencias en serie y relé de máxima velocidad — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 8
- Esquema eléctrico del montaje con potenciómetro giratorio R1-R7 y módulo electrónico transistorizado — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 9
