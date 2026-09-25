---
id: ssc.regulacion-automatica.distribucion-fisica.descripcion-fisica-del-sistema-de-climat
modulo: ssc
unidad: clima
nt: 858
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Arquitectura y distribución física del sistema de climatización automática"
menu: "Arquitectura y distribución física del"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: distribucion-fisica
area: climatizacion
sistema: "control-climatizacion"
marca: "Valeo"
fuentes: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, págs. 1-5"
relacionados: ["unidad-control-climatizador", "distribucion-aire", "compresor"]
palabras: ["compartimento motor", "conjunto A/C", "tablero de mandos", "haces de cables", "BSI", "ECM"]
---

## Objeto

Describir la ubicación física, la división por entornos y el conexionado eléctrico de los componentes que integran el sistema de climatización automática en el vehículo. (págs. 1-5)

## Fundamento

El sistema de climatización automática se distribuye físicamente en tres zonas del vehículo (compartimento motor, conjunto de distribución de trampillas e interior del salpicadero), interconectadas mediante dos haces de cables principales que enlazan la centralita del panel de mandos con los actuadores de aireación y con los elementos del vano motor. (págs. 1, 3, 5)

## Desarrollo

La arquitectura del sistema se estructura en tres entornos funcionales diferenciados:
- **Compartimento motor:** Alberga la parte de alta presión del circuito frigorífico, constituida por el condensador, el compresor con su embrague electromagnético, el filtro deshidratante y el presostato. La polea del compresor es arrastrada por la correa de accesorios desde el cigüeñal del motor. Este entorno se comunica eléctricamente con el calculador de gestión del motor (ECM) y con la caja de servicio inteligente (BSI). (págs. 1, 5)
- **Conjunto de distribución de trampillas (Conjunto A/C):** Ubicado detrás del salpicadero, contiene el radiador de calefacción (por el que circula constantemente líquido refrigerante del motor), el evaporador, el impulsor de aire y el filtro del habitáculo. Incorpora la sonda del evaporador en su zona más fría para ordenar el corte del compresor de cilindrada fija si la temperatura desciende del umbral de congelación, así como los servomotores (actuadores) que mueven las trampillas de mezcla izquierda/derecha, repartición de aire y recirculación. (págs. 2, 5)
- **Tablero de mandos:** Constituye la interfaz de usuario para seleccionar la temperatura de consigna (con posibilidad de regulación independiente bizona para conductor y acompañante) e integra la centralita electrónica del climatizador a la que se acoplan los dos haces de cables principales. (págs. 3, 5)

## Errores de concepto frecuentes

- Anular o estrangular la circulación de líquido refrigerante por el radiador de calefacción, ignorando que el circuito de refrigeración del motor de los vehículos actuales está dimensionado contando con la disipación térmica de dicho radiador. (pág. 2)
- Considerar que una falla de climatización en modo automático procede siempre de un fallo mecánico mayor, omitiendo que la interrupción en una sonda de temperatura o en un cableado secundario altera por completo el cálculo de la centralita. (pág. 5)

## Imágenes requeridas

- Esquema físico general del sistema de climatización automática identificando la interconexión entre el compartimento motor, el conjunto A/C y el panel de mandos — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 5
