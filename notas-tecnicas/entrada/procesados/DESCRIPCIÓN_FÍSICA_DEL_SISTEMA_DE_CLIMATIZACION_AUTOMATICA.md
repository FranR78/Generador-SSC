```yaml
tipo: fundamento
titulo: Descripción física del sistema de climatización automática
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "1-5"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [compartimento motor, salpicadero, tablero de mandos, haces de cables, BSI, ECM]
```

## Objeto
Describir la ubicación física, la estructura de interconexión por cableado y la distribución de componentes del sistema de climatización regulada en las distintas zonas del vehículo. (págs. 1-5)

## Fundamento
El sistema se divide físicamente en tres áreas operativas (compartimento motor, conjunto de distribución de trampillas y tablero de mandos) interconectadas mediante dos haces de cables principales y redes de comunicación con las centralitas del vehículo (BSI y ECM). (págs. 1-5)

## Desarrollo
- **Compartimento motor:** Alberga los componentes de alta presión del circuito de aire acondicionado (compresor, condensador, filtro deshidratante y presostato), el calculador de inyección (ECM), el calculador del circuito de refrigeración del motor y la BSI. (págs. 1-3)
- **Conjunto de distribución de trampillas (interior/salpicadero):** Contiene el evaporador (productor de frío), el radiador de calefacción, la resistencia eléctrica PTC, el filtro del habitáculo, el impulsor de aire (GMV) con su módulo electrónico de velocidad, las trampillas motorizadas (recirculación, mezcla izquierda/derecha y reparto de aire) y las sondas térmicas (evaporador y difusores). (págs. 2-3)
- **Tablero de mandos:** Ubicado en la consola central, alberga la centralita de climatización y la interfaz de usuario con regulación automática/manual (bizona), conectada mediante los haces de cables del vano motor y de la caja climática. (págs. 3-4)

📷 IMAGEN: Esquema general del sistema completo de climatización automática indicando la interconexión entre compartimento motor, caja de trampillas y panel de mandos — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 5

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Anular la circulación del radiador de calefacción, ignorando que el circuito de refrigeración del motor está dimensionado contando con la disipación térmica de dicho radiador. (pág. 2)
- Desatender las anomalías en el potenciómetro del electroventilador, las cuales pueden generar sobretensiones peligrosas para la centralita de climatización. (pág. 5)

---

```yaml
tipo: componente
titulo: Resistencia de calefacción eléctrica PTC
entidad: calefactor-ptc
area: climatizacion
sistema: calefaccion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "2"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [PTC, calefacción eléctrica, inyección directa, gasóleo, calentamiento rápido]
```

## Misión
Aportar calefacción eléctrica al aire que entra al habitáculo durante los primeros minutos de funcionamiento del vehículo. (pág. 2)

## Tipos y características
Resistencia térmica de tipo PTC (coeficiente de temperatura positivo) integrada en la unidad de distribución de aire, utilizada especialmente en vehículos con motores de inyección directa de gasóleo. (pág. 2)

## Principio de funcionamiento
En los motores diésel de inyección directa, el líquido refrigerante tarda un tiempo prolongado en alcanzar la temperatura de servicio adecuada para la calefacción por radiador. La resistencia PTC se conecta eléctricamente al iniciar la marcha para calentar el caudal de aire entrante hasta que el circuito de refrigeración del motor pueda asumir la aportación térmica. (pág. 2)

📷 IMAGEN: Ubicación de la resistencia de calefacción eléctrica PTC en la unidad climática — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 2

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Impulsor de aire y módulo electrónico de velocidad
entidad: ventilador-habitaculo
area: climatizacion
sistema: distribucion-aire
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "2, 5"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [GMV, impulsor, turbina, módulo electrónico, potenciómetro, sobretensión]
```

## Misión
Impulsar el caudal de aire previamente filtrado a través del evaporador y del radiador de calefacción hacia el interior del habitáculo. (pág. 2)

## Tipos y características
Grupo motoventilador (GMV) con turbina de soplado asociado a un módulo electrónico de regulación de velocidad o potenciómetro. (pág. 2)

## Principio de funcionamiento
El módulo electrónico varía el régimen de giro de la turbina del impulsor respondiendo a la consigna de caudal seleccionada manualmente por el usuario o fijada de forma automática por la centralita de climatización. (pág. 2)

📷 IMAGEN: Módulo impulsor GMV y regulador electrónico montado en el cuerpo de distribución — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 2

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
Avería en el potenciómetro o módulo electrónico del electroventilador. (pág. 5)

## Comportamiento en avería
Una avería en el potenciómetro del electroventilador puede originar una sobretensión que ponga en riesgo la integridad de la centralita de climatización. (pág. 5)

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
Controlar las prestaciones y el estado del sistema anualmente para detectar sobretensiones o fallos en la regulación de soplado. (pág. 5)

---

```yaml
tipo: componente
titulo: Sonda de temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "2-3, 5"
forma_parte_de: distribucion-aire
relacionados: [evaporador, compresor, unidad-control-climatizador]
palabras: [sonda evaporador, formación de hielo, corte de compresor, cilindrada fija]
```

## Misión
Captar la temperatura en el punto más frío de la matriz del evaporador para evitar su congelación. (págs. 2-3)

## Tipos y características
Captador o sonda térmica montada directamente en la zona de menor temperatura del evaporador. (págs. 2-3)

## Principio de funcionamiento
Mide de forma continua la temperatura del evaporador. Si el valor detectado desciende por debajo del umbral de formación de hielo, transmite una señal a la centralita para que interrumpa el funcionamiento del compresor en sistemas con compresor de cilindrada fija. (págs. 2-3)

📷 IMAGEN: Posición de la sonda de temperatura sobre el cuerpo del evaporador — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 2

## Valores de trabajo
- Umbral de disparo de la señal de corte: temperatura inferior a la formación de hielo. (pág. 3)

## Anomalías frecuentes
Corte eléctrico o fallo en la sonda. (pág. 5)

## Comportamiento en avería
Una sonda cortada o averiada impide el correcto funcionamiento del sistema en modo automático. (pág. 5)

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Sondas de temperatura de salida de los difusores
entidad: sensor-temperatura-interior
variante: difusores
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "2-3, 5"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [sonda difusores, salida central, salida pies, trampilla de mezcla, consigna]
```

## Misión
Medir la temperatura del aire en las salidas de los difusores centrales y de los pies para verificar el funcionamiento de las trampillas de mezcla y ajustar la temperatura del habitáculo. (págs. 2-3)

## Tipos y características
Conjunto de captadores térmicos ubicados en las canalizaciones de salida del aire tratado: una sonda en los difusores centrales y otra en la salida de los pies. (págs. 2-3)

## Principio de funcionamiento
Miden la temperatura del caudal de aire impulsado. La centralita de climatización procesa sus datos junto con los de las sondas de temperatura interior y exterior para controlar el posicionamiento de las trampillas de mezcla de aire y alcanzar la temperatura de consigna seleccionada. (págs. 2-3)

📷 IMAGEN: Ubicación de las sondas de salida de difusores centrales y pies en la unidad climática — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 2

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
Corte en la línea eléctrica del captador. (pág. 5)

## Comportamiento en avería
La avería o corte en una sonda altera la regulación automática del climatizador, impidiendo alcanzar la temperatura deseada. (pág. 5)

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Tablero de mandos de la climatización bizona
entidad: unidad-manejo-indicacion
variante: bizona
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "3-4"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [tablero de mandos, bizona, AUTO, A/C, recirculación, desempañado rápido, luneta térmica]
```

## Misión
Permitir al usuario seleccionar y gobernar los parámetros de temperatura, caudal, distribución de aire y funciones adicionales del sistema de climatización. (págs. 3-4)

## Tipos y características
Panel de mandos compacto situado en el centro del salpicadero que integra la centralita de climatización. Cuenta con regulación de temperatura independiente para conductor y acompañante (bizona). (págs. 3-4)

## Principio de funcionamiento
Recibe las órdenes del usuario a través de sus pulsadores e interfaces de selección y comunica directamente con los actuadores de la unidad climática y las centralitas del vano motor (ECM y BSI). Permite gestionar:
- Dos teclas AUTO independientes para regular de forma automática o manual el confort térmico de cada lado. (pág. 4)
- Una rueda única de selección para la velocidad del impulsor de aire. (pág. 4)
- Un botón A/C para conectar o desconectar el compresor de refrigeración. (pág. 4)
- Un botón de recirculación de aire para conmutar entre entrada de aire exterior e interior. (pág. 4)
- Un botón de desempañado rápido y un botón para la luneta térmica trasera. (pág. 4)

📷 IMAGEN: Frontal del tablero de mandos bizona con la disposición de pantallas, teclas AUTO, A/C y mandos de selección — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, págs. 3-4

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 5 de 5. [completo]