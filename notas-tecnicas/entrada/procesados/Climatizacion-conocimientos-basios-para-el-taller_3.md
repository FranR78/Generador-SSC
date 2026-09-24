```yaml
tipo: procedimiento
titulo: Revisión y servicio de climatización
entidad: servicio-climatizacion
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "4-5"
relacionados: [filtro-habitaculo, evaporador, filtro-deshidratador, refrigerante-r134a]
palabras: [comprobación de climatización, servicio de climatización, mantenimiento periódico, estanqueidad]
```

## Objeto y alcance
Definir la periodicidad y los trabajos a realizar en la revisión anual (cada 12 meses) y en el servicio bianual de climatización (cada 2 años) para mantener la capacidad de filtración, evitar la proliferación de bacterias en el evaporador y prevenir daños en el compresor por pérdida de refrigerante. (págs. 4-5).

## Condiciones previas
No documentado en fuentes. (págs. 4-5).

## Equipo y material
Estación de servicio de climatización, desinfectante de evaporadores, filtro de habitáculo nuevo, filtro deshidratante nuevo y refrigerante prescrito. (págs. 4-5).

## Pasos
1. Realizar una inspección visual de todos los componentes del sistema.
2. Efectuar la prueba de funcionamiento y de potencia del equipo.
3. En la revisión anual (cada 12 meses): sustituir el filtro del habitáculo y, en caso necesario, desinfectar el evaporador.
4. En el servicio de climatización (cada 2 años): sustituir el filtro deshidratante, desinfectar el evaporador si se requiere, evacuar y sustituir el refrigerante, comprobar la estanqueidad del circuito y sustituir el filtro del habitáculo. (págs. 4-5).

## Valores de referencia
- Intervalo de comprobación/revisión: cada 12 meses.
- Intervalo de servicio de climatización: cada 2 años.
- Pérdida normal de refrigerante anual en un sistema nuevo: hasta un 10%. (págs. 4-5).

## Verificación final
Prueba de potencia y funcionamiento, y comprobación de la estanqueidad del sistema. (págs. 4-5).

## Seguridad y normativa
No documentado en fuentes. (págs. 4-5).

---

```yaml
tipo: fundamento
titulo: Interacción entre la climatización y la refrigeración del motor
entidad: liquido-refrigerante-motor
area: motor
sistema: refrigeracion-motor
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "6"
relacionados: [ciclo-frigorifico, electroventilador-condensador]
palabras: [unidad de climatización y refrigeración, sobrecalentamiento, líquido refrigerante, 120 ºC]
```

## Objeto
Analizar la relación operativa y la influencia mutua entre el sistema de aire acondicionado y el sistema de refrigeración del motor térmico. (pág. 6).

## Fundamento
Aunque el aire acondicionado y el sistema de refrigeración del motor son dos sistemas separados, ejercen entre sí una influencia mutua. Al poner en funcionamiento el aire acondicionado, se exige un esfuerzo adicional al sistema de refrigeración del motor y aumenta la temperatura del líquido refrigerante. (pág. 6).

## Desarrollo
Los componentes incluidos en el líquido refrigerante protegen tanto ante la congelación como ante el sobrecalentamiento del motor. Una composición correcta del refrigerante aumenta el punto de ebullición del fluido por encima de los 120 ºC, proporcionando una reserva de potencia vital en verano cuando la temperatura ambiental y los trayectos largos sobrecargan ambos sistemas. Por esta razón, la revisión del líquido refrigerante debe incluirse dentro del servicio de climatización. (pág. 6).

## Valores de referencia
Punto de ebullición del líquido refrigerante con composición correcta: superior a 120 ºC. (pág. 6).

## Errores de concepto frecuentes
Considerar el aire acondicionado y la refrigeración del motor como sistemas aislados sin impacto recíproco; la sobrecarga térmica del climatizador exige directamente al sistema de refrigeración del motor. (pág. 6).

---

```yaml
tipo: fundamento
titulo: Circuito de climatización con válvula de expansión
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "7-9"
relacionados: [compresor, condensador, filtro-deshidratador, valvula-expansion, evaporador]
palabras: [circuito de refrigeración, alta presión, baja presión, mangueras flexibles, conductos de aluminio]
```

## Objeto
Describir la estructura general y la división de zonas de trabajo en el circuito cerrado de climatización accionado por compresor y regulado por válvula de expansión. (págs. 7-9).

## Fundamento
Todos los componentes están conectados mediante mangueras flexibles y conductos de aluminio formando un sistema cerrado. En él circulan, impulsados por el compresor, el gas refrigerante y una porción del aceite de lubricación para enfriar y deshumidificar el aire. (págs. 7-8).

## Desarrollo
El circuito se divide en dos zonas bien diferenciadas:
1. Zona de alta presión: comprendida entre el compresor y la válvula de expansión (incluye el condensador y el filtro deshidratante).
2. Zona de baja presión: comprendida entre la válvula de expansión y el compresor (incluye el evaporador).

El compresor comprime el refrigerante en estado gaseoso elevando su temperatura y lo impulsa a alta presión hacia el condensador, donde se disipa calor al exterior y se transforma en líquido. A continuación, el filtro deshidratante elimina las impurezas, inclusiones de aire y humedad. Finalmente, el refrigerante pasa por la válvula de expansión hacia el evaporador para absorber calor antes de regresar al compresor. (págs. 8-9).

📷 IMAGEN: Esquema del circuito del refrigerante con válvula de expansión e identificación de la zona de alta y baja presión — Fuente: Climatizacion-conocimientos-basios-para-el-taller_3.pdf, pág. 7

## Valores de referencia
No documentado en fuentes. (págs. 7-9).

## Errores de concepto frecuentes
Creer que por el circuito solo circula gas refrigerante; una porción del aceite de lubricación circula de manera continua junto con el refrigerante a través de todo el sistema. (pág. 8).

---

```yaml
tipo: componente
titulo: Compresor del aire acondicionado
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "10-11"
relacionados: [condensador, aceite-frigorifico]
palabras: [compresor, correa trapezoidal, correa estriada, lubricación, aceite especial]
```

## Misión
Aspirar el gas refrigerante a baja presión y baja temperatura procedente del evaporador, comprimirlo y transmitirlo a alta presión y alta temperatura en estado gaseoso hacia el condensador. (págs. 10-11).

## Tipos y características
Accionado normalmente mediante correa trapezoidal o correa estriada accionada por el motor térmico. Se dimensiona en función de la capacidad del sistema. Contiene un aceite especial destinado a la lubricación, parte del cual circula arrastrado por el refrigerante. (págs. 10-11).

## Principio de funcionamiento
Succiona el refrigerante gaseoso a baja temperatura procedente del evaporador, lo comprime aumentando drásticamente su presión y temperatura, y lo impulsa hacia el condensador. (pág. 11).

## Valores de trabajo
No documentado en fuentes. (págs. 10-11).

## Anomalías frecuentes
Falta de estanqueidad en el anillo tórico del eje, falta de estanqueidad en las juntas de la carcasa, daños en los rodamientos y agarrotamiento (sujeción) del pistón. (pág. 10).

## Comportamiento en avería
Fallo general o avería del compresor por lubricación insuficiente producida por fugas de refrigerante y aceite o por un mantenimiento incorrecto. (pág. 10).

## Cómo comprobarlo
No documentado en fuentes. (págs. 10-11).

## Mantenimiento
Asegurar una lubricación suficiente mediante el control de fugas y el mantenimiento periódico del sistema de climatización. (pág. 10).

---

```yaml
tipo: componente
titulo: Condensador
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "12-14"
relacionados: [compresor, electroventilador-condensador, filtro-deshidratador]
palabras: [condensador, disipación de calor, laminillas, cambio de estado, impacto frontal]
```

## Misión
Enfriar el gas refrigerante calentado por la compresión en el compresor, disipando su calor al exterior a través de tuberías y láminas para provocar su condensación de estado gaseoso a líquido. (págs. 12-13).

## Tipos y características
Intercambiador térmico instalado en el frontal del vehículo. Expuesto a suciedad medioambiental, gravilla e impactos frontales por su zona de montaje. (págs. 12-13).

## Principio de funcionamiento
El gas refrigerante caliente en estado gaseoso penetra por la toma superior del condensador. Al circular por las tuberías y láminas cede calor al aire exterior, enfriándose hasta abandonar el componente en estado líquido por la toma inferior. (pág. 13).

## Valores de trabajo
No documentado en fuentes. (págs. 12-14).

## Anomalías frecuentes
Fugas o daños en los racores de empalme, intercambio de calor insuficiente debido a la acumulación de suciedad y daños estructurales por impactos de gravilla o accidentes frontales. (págs. 12-14).

## Comportamiento en avería
Pobre rendimiento de refrigeración, fallo total del aire acondicionado y funcionamiento continuo del ventilador del condensador. (pág. 13).

## Cómo comprobarlo
1. Comprobar visualmente si el condensador está sucio.
2. Comprobar si existen fugas de refrigerante.
3. Comprobar la presión del sistema tanto en la zona de alta presión como en la de baja presión. (pág. 14).

## Mantenimiento
Limpieza periódica de la suciedad acumulada en la superficie y reparación/sustitución en caso de fuga en empalmes. (págs. 12, 14).

---

```yaml
tipo: componente
titulo: Filtro deshidratante
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "15-17"
relacionados: [condensador, valvula-expansion]
palabras: [filtro deshidratante, acumulador, agente secante, higroscópico, humedad]
```

## Misión
Eliminar la humedad y los cuerpos extraños del refrigerante, así como actuar de espacio de compensación y acumulador de refrigerante para amortiguar las oscilaciones de presión. (pág. 15).

## Tipos y características
Denominado filtro deshidratante o acumulador según la arquitectura del sistema. Contiene un agente secante e higroscópico y una almohadilla filtrante interna. Posee una capacidad de absorción de humedad limitada. (págs. 15-16).

## Principio de funcionamiento
El refrigerante líquido entra por el filtro deshidratante y atraviesa la masa del agente secante higroscópico, reteniendo la humedad e impurezas antes de salir en estado líquido. La parte superior actúa como cámara de compensación y la inferior como acumulador de reserva. (pág. 15).

## Valores de trabajo
No documentado en fuentes. (págs. 15-17).

## Anomalías frecuentes
Saturación del agente secante por envejecimiento, defecto o descomposición de la almohadilla filtrante interior, y fugas o daños en los racores de empalme. (págs. 16-17).

## Comportamiento en avería
Baja potencia de refrigeración y fallo completo del aire acondicionado. (pág. 16).

## Cómo comprobarlo
1. Comprobar los intervalos de mantenimiento (sustitución recomendada cada 2 años).
2. Realizar comprobación de estanqueidad, posibles daños y correcta sujeción de los empalmes.
3. Comprobar la presión en el sector de alta presión y en el de baja presión. (pág. 17).

## Mantenimiento
Renovar obligatoriamente el filtro deshidratante cada 2 años o cada vez que se abra el circuito de refrigerante. (págs. 14, 17).

---

```yaml
tipo: componente
titulo: Válvula de expansión
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "18-21"
relacionados: [evaporador, filtro-deshidratador, compresor]
palabras: [válvula de expansión, válvula de mariposa, dosificación, alta presión, baja presión]
```

## Misión
Establecer el punto de separación entre la zona de alta presión y la de baja presión en el circuito, regulando el flujo de refrigerante líquido inyectado al evaporador en función de la temperatura para asegurar su evaporación completa antes del compresor. (pág. 18).

## Tipos y características
Montada mecánicamente delante del evaporador. Existen variantes de diseño como la válvula de expansión termostática o la válvula de mariposa/tubo de orificio fijo. (pág. 18).

## Principio de funcionamiento
El refrigerante líquido procedente del filtro deshidratante fluye por la válvula e inyecta en el evaporador. Si la temperatura del refrigerante al final del evaporador sube, el mecanismo de la válvula se expande aumentando el flujo (cantidad inyectada). Si la temperatura al final del evaporador disminuye, reduce el paso de refrigerante hacia el evaporador. (pág. 19).

## Valores de trabajo
No documentado en fuentes. (págs. 18-21).

## Anomalías frecuentes
Obstrucción o afectación de función por suciedad, problemas térmicos por sobrecalentamiento o congelación, y fugas en la pieza o en las tuberías de conexión. (págs. 17, 20).

## Comportamiento en avería
Baja potencia de refrigeración y fallo del funcionamiento del aire acondicionado. (pág. 20).

## Cómo comprobarlo
1. Inspección visual del componente y de los empalmes.
2. Comprobación acústica durante el funcionamiento.
3. Comprobar que las tuberías de conexión están colocadas correctamente y verificar la estanqueidad.
4. Realizar la medición de temperatura en el sistema de conductos.
5. Medir la presión en alta y baja con el compresor encendido y el motor en marcha. (págs. 20-21).

## Mantenimiento
Realizar un mantenimiento periódico del circuito para prevenir la acumulación de humedad y suciedad que agarroten su mecanismo. (págs. 17, 21).

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "22-24"
relacionados: [valvula-expansion, ventilador-habitaculo, filtro-habitaculo]
palabras: [evaporador, intercambio térmico, desinfección, bacterias, hongos]
```

## Misión
Efectuar el intercambio de calor entre el aire procedente del exterior/habitáculo y el refrigerante del sistema de aire acondicionado, enfriando el aire que se envía al interior del vehículo. (pág. 22).

## Tipos y características
Intercambiador de gran superficie ubicado en la caja climática. Propenso a fallos por acumulación de humedad, suciedad y formación de colonias de bacterias y hongos en sus láminas. (págs. 21-22).

## Principio de funcionamiento
El refrigerante líquido a alta presión se inyecta al evaporador a través de la válvula de expansión, sufriendo una expansión. Durante esta evaporación se genera aire frío sobre la superficie del evaporador, el cual se transmite al habitáculo impulsado por la corriente del ventilador. (pág. 22).

## Valores de trabajo
No documentado en fuentes. (págs. 22-24).

## Anomalías frecuentes
Tuberías internas del evaporador obturadas, falta de estanqueidad (fugas en empalmes o por daños físicos), y suciedad en las aletas de entrada que obstruye el flujo de aire. (pág. 23).

## Comportamiento en avería
Rendimiento deficiente de refrigeración, fallo del aire acondicionado y potencia o caudal del ventilador deficiente. (pág. 23).

## Cómo comprobarlo
1. Comprobar si el evaporador se encuentra sucio o dañado.
2. Comprobar la correcta colocación de las mangueras y la estanqueidad del conjunto.
3. Medir la presión con el compresor encendido y el motor en marcha.
4. Medir la temperatura en las tuberías de entrada y salida del evaporador. (págs. 23-24).

## Mantenimiento
Realizar mantenimientos y desinfecciones periódicas de las láminas para eliminar bacterias y hongos, manteniendo además el filtro de habitáculo en buen estado. (págs. 21, 23).

---

```yaml
tipo: componente
titulo: Presostato e interruptor trinario
entidad: presostato
area: climatizacion
sistema: control-climatizacion
fabricante: Behr Hella Service
fuente: "Climatizacion-conocimientos-basios-para-el-taller_3.pdf"
paginas: "25-28"
relacionados: [compresor, embrague-compresor, electroventilador-condensador]
palabras: [presostato, interruptor trinario, alta presión, baja presión, 26-33 bar, 2 bar]
```

## Misión
Proteger el sistema de aire acondicionado contra daños provocados por presiones excesivamente altas o bajas, y controlar la activación del ventilador del condensador. (pág. 25).

## Tipos y características
Existen interruptores de baja presión, de alta presión e interruptores trinarios (que integran alta presión, baja presión y el contacto de conmutación adicional para el ventilador del condensador). (pág. 25).

## Principio de funcionamiento
Montado generalmente en la zona de alta presión. Ante una alta presión (aprox. 26-33 bar) interrumpe la corriente hacia el embrague del compresor, rearmándolo al descender la presión a aprox. 5 bar. Ante una presión demasiado baja (aprox. 2 bar) corta la corriente para evitar daños por falta de lubricación en el compresor. El tercer contacto del trinario activa el ventilador eléctrico del condensador para garantizar la condensación. (pág. 26).

## Valores de trabajo
- Desconexión por alta presión: aprox. 26 a 33 bar.
- Reconexión por alta presión: aprox. 5 bar.
- Desconexión por baja presión: aprox. 2 bar. (pág. 26).

## Anomalías frecuentes
Fallo en los contactos eléctricos internos por problemas o suciedad, y daños mecánicos o grietas en la carcasa provocados por vibraciones o accidentes. (págs. 24, 27).

## Comportamiento en avería
Rendimiento de refrigeración deficiente, inactividad completa del aire acondicionado y encendido/apagado continuo y frecuente del embrague del compresor. (pág. 27).

## Cómo comprobarlo
1. Inspección visual y comprobación del apriete de los enchufes de conexión.
2. Comprobar si la pieza presenta daños externos.
3. Medir las presiones de trabajo con el compresor encendido y el motor en marcha.
4. Probar la pieza desmontada aplicando presión con botella de nitrógeno, manorreductor y multímetro para comprobar la conmutación de contactos. (págs. 27-28).

## Mantenimiento
Realizar revisiones periódicas de los conectores eléctricos y limpiar la suciedad del puerto de toma de presión. (págs. 25, 28).

COBERTURA: documento «Climatizacion-conocimientos-basios-para-el-taller_3.pdf», páginas 4 a 28 de 75. [queda pendiente desde la página 28]