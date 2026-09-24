```yaml
tipo: fundamento
titulo: Estructura física del sistema de climatización automática
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "1-5"
relacionados: [unidad-control-climatizador, distribucion-aire, circuito-frigorifico]
palabras: [compartimento motor, conjunto de distribución, tablero de mandos, haz de cables, climatización automática]
```

## Objeto
Describir la ubicación física, división por entornos y comunicación del sistema de climatización automática en el vehículo. (pág. 1).

## Fundamento
El sistema de climatización automática se distribuye físicamente en tres zonas del vehículo: compartimento motor, conjunto de distribución de trampillas e interior del salpicadero (tablero de mandos). Los elementos están interconectados mediante dos haces de cables principales que unen el cuadro de mandos con el conjunto de trampillas y con el compartimento motor. (págs. 1, 3).

## Desarrollo
1. Compartimento motor:
   - Contiene la parte de alta presión del circuito de aire acondicionado (condensador, compresor, filtro deshidratante y presostato). (pág. 1).
   - El compresor es arrastrado por la correa del alternador desde el cigüeñal, acoplándose mediante un embrague electromagnético. (pág. 1).
   - Alberga el calculador del circuito de refrigeración del motor, que desvía parte del caudal de refrigerante hacia el conjunto de trampillas para la calefacción. (pág. 1).
   - Contiene el calculador de inyección (ECM), que intercambia información con la centralita de climatización y el calculador BSI. (pág. 1).

2. Conjunto de distribución de trampillas:
   - Es el entorno que concentra la mayoría de componentes de la climatización regulada. (pág. 2).
   - Alberga el radiador de calefacción (cuya circulación no debe anularse al estar dimensionado el circuito del motor con su disipación), el evaporador (órgano productor de frío tras el filtro del habitáculo) y, en algunos vehículos, una resistencia PTC. (pág. 2).
   - El aire es impulsado por el grupo motoventilador (GMV), regulado por un módulo electrónico de velocidad o potenciómetro. (pág. 2).
   - Contiene sondas de temperatura (sonda del evaporador y sondas de salida de difusores centrales y pies) y los actuadores/micromotores que gobiernan las trampillas de recirculación, distribución y mezcla. (págs. 2-3).

3. Tablero de mandos:
   - Es la interfaz para que el usuario gobierne el sistema en modo manual o automático (por ejemplo, con regulación de temperatura independiente para conductor y acompañante). (págs. 3-4).
   - Incorpora teclas de Auto, botón para desconectar el compresor (A/C), botón de recirculación, botón de desempañado rápido y botón para la luneta térmica trasera. (pág. 4).

4. Sistema completo y diagnóstico:
   - Es un sistema complejo donde una avería sencilla (como una sonda cortada) provoca un funcionamiento incorrecto en modo automático. (pág. 5).
   - La avería del potenciómetro del electroventilador puede generar una sobretensión que ponga en riesgo la integridad de la centralita. (pág. 5).

📷 IMAGEN: Esquema físico general del sistema de climatización automática interconectando compartimento motor, conjunto de distribución de trampillas y panel de mandos — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 5

## Valores de referencia
No documentado en fuentes. (págs. 1-5).

## Errores de concepto frecuentes
Anular la circulación del radiador de calefacción; en los vehículos actuales, el circuito de refrigeración del motor está dimensionado contando con la disipación térmica producida en el radiador de calefacción. (pág. 2).

---

```yaml
tipo: componente
titulo: Resistencia de calefacción eléctrica
entidad: calefactor-ptc
area: climatizacion
sistema: calefaccion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "2"
forma_parte_de: regulacion-automatica
relacionados: [liquido-refrigerante-motor]
palabras: [resistencia PTC, calefacción eléctrica, inyección directa, gasóleo]
```

## Misión
Aportar calefacción al habitáculo durante los primeros minutos de funcionamiento en vehículos donde la temperatura del líquido refrigerante tarda mucho tiempo en alcanzar el valor adecuado. (pág. 2).

## Tipos y características
Resistencia eléctrica adicional (PTC) situada en el conjunto de distribución de trampillas, empleada sobre todo en vehículos con motores de inyección directa de gasóleo. (pág. 2).

## Principio de funcionamiento
Genera calor por efecto eléctrico al recibir alimentación para calentar el aire entrante mientras el circuito de refrigeración del motor alcanza la temperatura de servicio adecuada. (pág. 2).

## Valores de trabajo
No documentado en fuentes. (pág. 2).

## Anomalías frecuentes
No documentado en fuentes. (pág. 2).

## Comportamiento en avería
No documentado en fuentes. (pág. 2).

## Cómo comprobarlo
No documentado en fuentes. (pág. 2).

## Mantenimiento
No documentado en fuentes. (pág. 2).

---

```yaml
tipo: componente
titulo: Sonda del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "2-3"
forma_parte_de: regulacion-automatica
relacionados: [evaporador, compresor, unidad-control-climatizador]
palabras: [sonda evaporador, formación de hielo, corte de compresor, cilindrada fija]
```

## Misión
Medir la temperatura en el evaporador para ordenar la desconexión del compresor de cilindrada fija si existe riesgo de congelación. (págs. 2-3).

## Tipos y características
Captador o sonda de temperatura alojado en la caja de distribución de trampillas, ubicado en la parte más fría del evaporador. (págs. 2-3).

## Principio de funcionamiento
Mide continuamente la temperatura de la zona más fría del evaporador y transmite la señal a la centralita de climatización. Si la temperatura desciende por debajo del punto de formación de hielo, la centralita corta la alimentación del compresor en sistemas con compresor de cilindrada fija. (págs. 2-3).

## Valores de trabajo
Umbral de activación: temperatura inferior a la de formación de hielo. (pág. 3).

## Anomalías frecuentes
No documentado en fuentes. (págs. 2-3).

## Comportamiento en avería
Una avería en la sonda (por ejemplo, sonda cortada) provoca un funcionamiento incorrecto del sistema de climatización en modo automático. (págs. 3, 5).

## Cómo comprobarlo
No documentado en fuentes. (págs. 2-3).

## Mantenimiento
No documentado en fuentes. (págs. 2-3).

---

```yaml
tipo: componente
titulo: Sondas de temperatura de salida de difusores
entidad: sensor-evaporador
variante: salida de difusores
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "2-3"
forma_parte_de: regulacion-automatica
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [sondas de temperatura, difusores centrales, difusores a los pies, trampilla de mezcla, temperatura de consigna]
```

## Misión
Medir la temperatura del aire a la salida de los difusores para controlar el correcto funcionamiento de la trampilla de mezcla y permitir la regulación de la temperatura de consigna. (págs. 2-3).

## Tipos y características
Captadores de temperatura ubicados en el conjunto de distribución de trampillas, instalados específicamente en los difusores centrales y en los difusores a los pies. (págs. 2-3).

## Principio de funcionamiento
Registran la temperatura del aire impulsado hacia los difusores centrales y de los pies, enviando sus señales a la centralita de climatización. Junto con las lecturas de las sondas de temperatura exterior e interior, la centralita calcula y gobierna los actuadores de la trampilla de mezcla para alcanzar la temperatura de consigna seleccionada. (págs. 2-3).

## Valores de trabajo
No documentado en fuentes. (págs. 2-3).

## Anomalías frecuentes
No documentado en fuentes. (págs. 2-3).

## Comportamiento en avería
Si una sonda se corta o avería, el sistema de climatización no puede gestionar correctamente el modo automático. (págs. 3, 5).

## Cómo comprobarlo
No documentado en fuentes. (págs. 2-3).

## Mantenimiento
No documentado en fuentes. (págs. 2-3).

COBERTURA: documento «DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 5 de 5. [completo]