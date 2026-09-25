---
id: ssc.distribucion-aire.bizona.la-climatizacion
modulo: ssc
unidad: clima
nt: 834
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Distribución y mezcla de aire bizona"
menu: "Distribución y mezcla de aire bizona"
grupo: "Distribución de aire"
clave: distribucion-aire
variante: bizona
area: climatizacion
sistema: "distribucion-aire"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 126-130"
relacionados: ["servomotor-trampilla", "unidad-control-climatizador"]
palabras: ["bizona", "mezcla de aire", "compuerta de mezcla", "temperatura mínima", "temperatura máxima"]
---

## Objeto

Regular de forma independiente la temperatura del aire impulsado hacia el lado del conductor y del acompañante (o zonas traseras en trizona/cuatrizona). (pág. 130)

## Fundamento

El bloque climatizador dispone de dos conductos de distribución y dos compuertas de mezcla independientes a la salida del evaporador y del radiador de calefacción, gobernadas por servomotores separados. (págs. 126, 130)

## Desarrollo

La turbina impulsa el aire a través del evaporador enfriándolo y deshidratándolo. A la salida, el flujo se divide hacia dos cámaras de mezcla (izquierda y derecha). Según la consigna elegida en cada lado, la UEGAA posiciona las dos compuertas de mezcla:
- **Temperatura mínima (LO):** La compuerta cierra totalmente el paso al radiador de calefacción y todo el aire entra frío al habitáculo. (pág. 127)
- **Temperatura máxima (HI):** La compuerta obliga a todo el aire frío a atravesar el radiador de calefacción antes de salir. (pág. 128)
- **Temperatura intermedia:** La compuerta adopta una posición angular específica que mezcla en proporción exacta aire frío y caliente. (pág. 129)

## Valores de referencia

- Configuración de zonas: bizona (conductor/acompañante), trizona o cuatrizona. (pág. 130)

## Errores de concepto frecuentes

- Creer que los sistemas bizona disponen de dos evaporadores independientes bajo el salpicadero, cuando en realidad comparten un único evaporador y dividen mecánicamente el aire en la caja de mezcla. (págs. 126, 130)
