```yaml
tipo: componente
titulo: Válvula de sobrepresión
entidad: valvula-sobrepresion
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "87, 164"
forma_parte_de: compresor
relacionados: [compresor, presostato]
palabras: [válvula de sobrepresión, descarga, muelle, 38 bares, protección mecánica]
```

## Misión
Proteger mecánicamente el circuito de fluido refrigerante contra sobrepresiones peligrosas liberando gas a la atmósfera. (pág. 87)

## Tipos y características
Válvula de descarga mecánica de seguridad con cierre por muelle tarado, instalada en el propio cuerpo del compresor o en la línea de alta presión. (págs. 87, 164)

## Principio de funcionamiento
Permanece cerrada por la acción de su muelle interno. Si la presión en el lado de alta supera la fuerza ejercida por el muelle, la válvula vence la resistencia y se abre, liberando una porción de refrigerante al exterior para reducir la presión del circuito a niveles seguros. (pág. 87)

## Valores de trabajo
- Umbral de apertura de seguridad por sobrepresión: 38 bares. (pág. 164)

## Anomalías frecuentes
Disparo de la válvula provocado por falta de condensación, fallo en los electroventiladores o sobrecalentamiento excesivo del motor, con pérdida del gas del circuito. (págs. 87, 144)

## Comportamiento en avería
Salida violenta de gas refrigerante al exterior e inoperatividad posterior del circuito frigorífico por falta de presión. (pág. 87)

## Cómo comprobarlo
Verificar la presencia de restos de aceite lubricante en la salida de la válvula e inspeccionar las presiones del circuito con la estación de manómetros tras corregir la causa de la sobrepresión. (págs. 87, 157)

## Mantenimiento
Evitar que los componentes del circuito alcancen temperaturas superiores a 80 ºC durante trabajos de soldadura para impedir la apertura involuntaria de la válvula. (pág. 144)

---

```yaml
tipo: componente
titulo: Sensor de temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "88-90"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, compresor, evaporador]
palabras: [sonda del evaporador, termistor NTC, protección antihielo, desconexión del compresor]
```

## Misión
Medir la temperatura de la matriz de aletas del evaporador para prevenir la congelación del agua de condensación. (págs. 88-89)

## Tipos y características
Sensor térmico de tipo termistor (NTC) o interruptor térmico, alojado directamente entre las aletas del evaporador. (págs. 88-90)

## Principio de funcionamiento
Mide de forma continua la temperatura del evaporador y transmite su señal eléctrica a la unidad de gestión electrónica (UEGAA). Si la temperatura desciende hasta el umbral de formación de hielo, la centralita (o el interruptor térmico directamente) abre el circuito e interrumpe la corriente hacia el acoplamiento electromagnético del compresor. Al subir la temperatura, vuelve a acoplar el compresor. (págs. 88-90)

## Valores de trabajo
No documentado en fuentes en las páginas 88-90.

## Anomalías frecuentes
Descalibración de la resistencia NTC o mal posicionamiento físico del elemento sensible entre las aletas del evaporador. (págs. 88, 90)

## Comportamiento en avería
Bloqueo del flujo de aire hacia el habitáculo por congelación total del agua en el evaporador o corte prematuro e injustificado del compresor. (págs. 88, 161)

## Cómo comprobarlo
Comprobar la curva de resistencia NTC del sensor a diferentes temperaturas y consultar la memoria de averías mediante autodiagnóstico. (págs. 88, 161)

## Mantenimiento
Asegurar la correcta colocación e inserción del elemento sensible en el cuerpo del evaporador. (págs. 88-89)

---

```yaml
tipo: componente
titulo: Presostato
entidad: presostato
area: climatizacion
sistema: control-climatizacion
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "91-97"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, electroventilador-condensador, transmisor-presion]
palabras: [presostato, trinary, transmisor de silicio, PWM, 2 bares, 30 bares]
```

## Misión
Monitorizar la presión del circuito frigorífico para proteger el compresor contra presiones anormales (baja o alta) y gobernar las velocidades del electroventilador. (págs. 91-97)

## Tipos y características
Interruptor de presión hidromecánico (de 2, 3 o 4 funciones) o transmisor de presión piezoeléctrico de silicio (señal PWM). Instalado en la línea de alta presión, entre el condensador y la válvula de expansión. (págs. 91, 96-97)

## Principio de funcionamiento
- En presostatos convencionales: La presión actúa sobre una arandela o diafragma interno que desplaza contactos eléctricos. Si la presión desciende de 2 bares (fuga) o supera los 30 bares (sobrepresión), abre sus contactos y desconecta el compresor. A presiones intermedias (aprox. 16 bares), cierra contactos para activar la velocidad rápida del ventilador. (págs. 93-95, 98)
- En transmisores de silicio (G65): La presión deforma un cristal de silicio cambiando su resistencia. Un microprocesador convierte la tensión en una señal cuadrada modulada en anchura de impulso (PWM) enviada a la centralita. (págs. 96-97)

## Valores de trabajo
- Presión de reposo del circuito a 20 ºC: aprox. 0,5 MPa (5 bares). (pág. 93)
- Umbral de corte por baja presión: < 2 bares (0,2 MPa). (pág. 98)
- Umbral de corte por alta presión: > 30 bares (3,0 MPa). (pág. 98)

## Anomalías frecuentes
Fugas de refrigerante por la toma de fijación, agarrotamiento de los contactos eléctricos o descalibración del cristal de silicio. (págs. 93, 97, 161)

## Comportamiento en avería
Falta de acoplamiento del compresor o imposibilidad de conectar los escalones de velocidad del electroventilador. (págs. 93, 161)

## Cómo comprobarlo
Medir la continuidad eléctrica entre terminales con el circuito presurizado o verificar la señal modulada PWM con un osciloscopio. (págs. 93, 96)

## Mantenimiento
La toma de conexión del presostato incorpora una válvula Schrader que permite su sustitución sin necesidad de vaciar la carga de refrigerante del circuito. (pág. 91)

---

```yaml
tipo: componente
titulo: Conmutador de temperatura del líquido refrigerante
entidad: sensor-temperatura-agua
area: motor
sistema: refrigeracion-motor
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "98"
forma_parte_de: refrigeracion-motor
relacionados: [embrague-compresor, unidad-control-climatizador]
palabras: [conmutador de temperatura, protección del motor, sobrecalentamiento, corte del compresor]
```

## Misión
Desconectar el compresor del aire acondicionado cuando el líquido refrigerante del motor alcanza una temperatura excesivamente elevada para evitar el sobrecalentamiento del motor térmico. (pág. 98)

## Tipos y características
Termoconmutador roscado en el circuito de refrigeración del motor, conectado en serie en la línea de mando del acoplamiento electromagnético. (pág. 98)

## Principio de funcionamiento
En condiciones normales de trabajo sus contactos permanecen cerrados permitiendo el paso de corriente hacia el compresor. Si el motor se somete a una carga intensa y la temperatura del anticongelante supera el umbral crítico, los contactos se abren e interrumpen la alimentación del compresor, liberando al motor térmico de esa carga adicional. (pág. 98)

## Valores de trabajo
- Umbral de desconexión por alta temperatura de motor: ajustado de fábrica según la motorización. (pág. 98)

## Anomalías frecuentes
Fugas por la rosca de montaje o sulfatación en las mallas del conector eléctrico. (pág. 98)

## Comportamiento en avería
Desconexión injustificada del compresor durante la marcha o fallo en la protección contra sobrecalentamiento del motor. (pág. 98)

## Cómo comprobarlo
Comprobar la continuidad eléctrica entre sus terminales en frío y en caliente. (pág. 98)

## Mantenimiento
Verificar la estanqueidad de la junta durante los cambios de líquido refrigerante. (pág. 98)

---

```yaml
tipo: fundamento
titulo: Gestión electrónica de los electroventiladores
entidad: control-ventiladores
area: climatizacion
sistema: control-climatizacion
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "99-102"
relacionados: [presostato, sensor-temperatura-agua, condensador]
palabras: [UEGV, electroventilador, velocidad 1, velocidad 2, condensación]
```

## Objeto
Regular la activación y la velocidad de rotación del electroventilador (o conjunto de electroventiladores) para disipar el calor del condensador de climatización y del radiador del motor térmico. (págs. 99-101)

## Fundamento
El flujo de aire forzado generado por el ventilador es imprescindible para condensar el refrigerante a alta presión y mantener controlada la temperatura del motor térmico, gestionado por la Unidad Electrónica de Gestión del Ventilador (UEGV). (págs. 99-102)

## Desarrollo
La UEGV procesa las informaciones recibidas del termoconmutador del radiador (F18) y del presostato del circuito frigorífico (F129/G65):
- **Con el climatizador desconectado:** El electroventilador solo funciona en velocidad 1 o 2 en función exclusiva de la temperatura del líquido refrigerante del motor. (pág. 102)
- **Con el climatizador conectado:** El electroventilador se activa inmediatamente en el escalón 1 al acoplarse el compresor. Si la presión en el circuito frigorífico aumenta (alcanzando el umbral del presostato) o la temperatura del motor sobrepasa el límite, la UEGV conmuta al escalón 2 de máxima velocidad. (págs. 101-102)

## Valores de referencia
- Disposiciones de ventiladores: Un ventilador con dos escalones de velocidad o dos ventiladores con dos escalones de velocidad. (pág. 100)

## Errores de concepto frecuentes
- Creer que el electroventilador solo funciona para enfriar el motor térmico, ignorando su función crítica en la condensación del fluido frigorífico. (págs. 99, 102)

---

```yaml
tipo: componente
titulo: Filtro del habitáculo
entidad: filtro-habitaculo
area: climatizacion
sistema: distribucion-aire
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "104-105, 160"
forma_parte_de: unidad-climatizadora
relacionados: [evaporador, ventilador-habitaculo]
palabras: [filtro antipolen, carbón activo, bacterias, depuración, microorganismos]
```

## Misión
Filtrar el aire exterior que entra al habitáculo reteniendo polvo, polen, bacterias y partículas nocivas, e impedir la proliferación de microorganismos. (págs. 105, 160)

## Tipos y características
Elemento filtrante sintético/celulosa (filtro antipolen) o combinado con un lecho interior de carbón activo para la absorción de gases y malos olores. Alojado en el conducto de aspiración del bloque climatizador. (págs. 105, 160)

## Principio de funcionamiento
Todo el aire impulsado por la turbina pasa forzosamente a través del tamiz de microfibras del filtro antes de llegar al evaporador, reteniendo las partículas en suspensión. En los filtros con carbón activo, los poros del carbón atraen y neutralizan las moléculas de gas contaminante y olores. (págs. 105, 160)

## Valores de trabajo
No documentado en fuentes en las páginas 104-105, 160.

## Anomalías frecuentes
Colmatación por acumulación de suciedad y polvo, o absorción excesiva de humedad ambiental. (págs. 105, 160)

## Comportamiento en avería
Reducción drástica del caudal de aire en los difusores, empañado persistente de los cristales y generación de olores desagradables en el habitáculo por proliferación de bacterias en la materia retenida. (pág. 160)

## Cómo comprobarlo
Extraer e inspeccionar visualmente el estado de suciedad y el nivel de obstrucción del elemento filtrante. (págs. 105, 160)

## Mantenimiento
Sustituir periódicamente el filtro de habitáculo según las pautas de mantenimiento para garantizar la calidad del aire y evitar infecciones por microorganismos. (pág. 160)

---

```yaml
tipo: componente
titulo: Sensor de temperatura exterior
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "110-111"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [sensor exterior, NTC, temperatura ambiental, paragolpes]
```

## Misión
Captar la temperatura del aire atmosférico exterior para proporcionar a la unidad de control la señal primaria de cálculo de la mezcla de aire. (págs. 110-111)

## Tipos y características
Sensores de tipo resistencia NTC. En muchas instalaciones se montan dos sondas: una en el paragolpes frontal/retrovisor y otra en el conducto de aspiración de aire fresco. (págs. 110-111)

## Principio de funcionamiento
Modifica su resistencia eléctrica inversamente a la temperatura del aire ambiental. La unidad de control analiza la señal para calcular la cantidad de calor o frío a aportar y posicionar las trampillas de mezcla y distribución. (págs. 110-111)

## Valores de trabajo
- Característica NTC (la resistencia disminuye al elevarse la temperatura). (págs. 110-111)

## Anomalías frecuentes
Rotura por impactos frontales, humedad en el conector o lecturas infladas por la proximidad del radiador del motor. (págs. 110-111)

## Comportamiento en avería
Desactivación de la función de recirculación de aire y registro del código de avería en la memoria del autodiagnóstico. (págs. 111, 161)

## Cómo comprobarlo
Medir la resistencia eléctrica del sensor con un multímetro y comparar con su tabla característica de temperatura. (págs. 110-111)

## Mantenimiento
Proteger el conector contra la sulfatación por agua de lluvia o lavado. (pág. 111)

---

```yaml
tipo: componente
titulo: Sensor de temperatura interior
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "112"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador]
palabras: [sensor habitáculo, microturbina, NTC, aspiración de aire]
```

## Misión
Medir la temperatura real del aire en el interior del habitáculo para que la centralita verifique la convergencia con la temperatura seleccionada. (pág. 112)

## Tipos y características
Termistor NTC montado en la propia carcasa del panel de mandos del climatizador. Dispone de una microturbina de aspiración de aire accionada por motor eléctrico. (pág. 112)

## Principio de funcionamiento
La microturbina aspira una muestra constante de aire desde la zona del conductor a través de la rejilla del panel, haciéndolo pasar sobre la resistencia NTC. La variación de tensión resultante es procesada por la UEGAA para corregir el caudal del soplador y el ángulo de las trampillas. (pág. 112)

## Valores de trabajo
- Tipo de elemento sensible: resistencia NTC. (pág. 112)

## Anomalías frecuentes
Bloqueo mecánico de la microturbina por pelusa o acumulación de polvo sobre el elemento sensible. (pág. 112)

## Comportamiento en avería
Medición errónea de la temperatura ambiente debido al calor propio acumulado en los circuitos de la centralita, provocando una regulación oscilante. (pág. 112)

## Cómo comprobarlo
Limpiar la rejilla con aire a baja presión y verificar el valor leído en el bloque de valores de medición. (págs. 112, 161)

## Mantenimiento
Mantener limpia la rejilla frontal del panel de mandos. (pág. 112)

---

```yaml
tipo: componente
titulo: Sensor de temperatura del aire de soplado
entidad: sensor-temperatura-interior
variante: aire-soplado
area: climatizacion
sistema: control-climatizacion
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "113"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [sonda de soplado, conducto de aire, NTC, realimentación de mezcla]
```

## Misión
Medir la temperatura del aire tratado en el canal de salida hacia los difusores antes de que penetre en el habitáculo. (pág. 113)

## Tipos y características
Sonda térmica de resistencia NTC ubicada en la caja de distribución de aire, tras el evaporador y el radiador de calefacción. (pág. 113)

## Principio de funcionamiento
El aire tratado baña la sonda NTC, cuyo valor resistivo aumenta al descender la temperatura. La UEGAA utiliza esta señal como bucle de realimentación para ajustar la posición exacta de la trampilla de mezcla. (pág. 113)

## Valores de trabajo
- Variación de resistencia inversamente proporcional a la temperatura del flujo de aire impulsado. (pág. 113)

## Anomalías frecuentes
Descalibración de la curva NTC o desconexión del conector eléctrico. (pág. 113)

## Comportamiento en avería
Inestabilidad en la temperatura del aire soplado por los aireadores. (pág. 113)

## Cómo comprobarlo
Medir la resistencia eléctrica entre sus terminales a temperatura conocida. (pág. 113)

## Mantenimiento
No documentado en fuentes en la página 113.

---

```yaml
tipo: componente
titulo: Fotosensor de radiación solar
entidad: fotosensor-solar
area: climatizacion
sistema: control-climatizacion
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "114-115"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [fotosensor, radiación solar, fotodiodo, filtro UV, corriente proporcional]
```

## Misión
Detectar la intensidad de la radiación solar incidente sobre los ocupantes para incrementar preventivamente la potencia de refrigeración. (págs. 114-115)

## Tipos y características
Sensor óptico de montaje superior en el salpicadero, compuesto por filtro de radiaciones ultravioleta, elemento óptico orientativo y uno o dos fotodiodos. (págs. 114-115)

## Principio de funcionamiento
La luz solar atraviesa el filtro UV e incide en el fotodiodo semiconductor. La corriente eléctrica que circula por el fotodiodo aumenta de forma directamente proporcional a la intensidad de la luz solar. La UEGAA procesa el incremento de corriente y ajusta el régimen del soplador y la mezcla antes de que se eleve la temperatura interior. (págs. 114-115)

## Valores de trabajo
- Generación de corriente proporcional a la intensidad lumínica incidente. (págs. 114-115)

## Anomalías frecuentes
Ocultación de la lente óptica por objetos depositados en la parte superior del salpicadero. (pág. 115)

## Comportamiento en avería
La centralita asume un valor fijo supletorio de radiación solar y la avería queda memorizada en el sistema. (pág. 115)

## Cómo comprobarlo
Tapar e iluminar el sensor con una linterna observando las variaciones de corriente o parámetro leídos por la máquina de diagnosis. (págs. 115, 161)

## Mantenimiento
Mantener limpia la carcasa protectora del fotosensor. (pág. 114)

---

```yaml
tipo: componente
titulo: Servomotores de las compuertas de distribución
entidad: servomotor-trampilla
area: climatizacion
sistema: distribucion-aire
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "117-124"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [servomotores, motor CC, motor paso a paso, potenciómetro, 200 Hz]
```

## Misión
Accionar eléctricamente las compuertas de mezcla, entrada de aire fresco, recirculación y distribución hacia los difusores del habitáculo. (págs. 117-118, 122-124)

## Tipos y características
Actuadores eléctricos constituidos por motores de corriente continua (ON/OFF a par de bloqueo o con potenciómetro de realimentación de 5 terminales) o motores paso a paso de imán permanente (alimentados por señales cuadradas de 200 Hz). (págs. 118-121)

## Principio de funcionamiento
La unidad de control alimenta las bobinas del servomotor para girar su eje y desplazar las palancas de la trampilla. En motores de CC con potenciómetro, este varía su resistencia informando del ángulo exacto. En motores paso a paso, la centralita conmuta la polaridad de las bobinas a 200 Hz para girar el rotor el número exacto de pasos deseado sin necesitar potenciómetro. (págs. 118-121)

## Valores de trabajo
- Frecuencia de alimentación en motores paso a paso: señal cuadrada a 200 Hz. (pág. 121)
- Ángulo de los dientes del rotor en paso a paso: 72º (360º / 5 dientes). (pág. 120)

## Anomalías frecuentes
Pistas del potenciómetro interno desgastadas, rotura de los engranajes reductores plásticos o agarrotamiento mecánico de las compuertas. (págs. 118, 121)

## Comportamiento en avería
Bloqueo de la distribución de aire en un difusor fijo o imposibilidad de regular la temperatura del habitáculo. (págs. 118, 161)

## Cómo comprobarlo
Realizar el autodiagnóstico de actuadores y verificar el recorrido mecánico de las levas. (págs. 118, 161)

## Mantenimiento
Lubricar los pivotes mecánicos de las trampillas en trabajos de desmontaje. (pág. 122)

---

```yaml
tipo: componente
titulo: Regulador de velocidad del ventilador del habitáculo
entidad: ventilador-habitaculo
variante: regulador-potencia
area: climatizacion
sistema: distribucion-aire
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "125"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [regulador de velocidad, transistores de potencia, variación continua, turbina de aire]
```

## Misión
Variar de forma progresiva y continua la velocidad de giro de la turbina de aire interior según las demandas de la unidad de control. (pág. 125)

## Tipos y características
Módulo electrónico provisto de transistores de potencia (mosfet), instalado en la carcasa de la turbina refrigerado por la propia corriente de aire. (pág. 125)

## Principio de funcionamiento
Recibe una señal de mando procedente de la UEGAA y modula la tensión aplicada al motor eléctrico del soplador mediante los transistores de potencia, permitiendo una variación continua del caudal sin las pérdidas térmicas de las resistencias fijas antiguas. (pág. 125)

## Valores de trabajo
- Regulación continua de tensión de alimentación. (pág. 125)

## Anomalías frecuentes
Cortocircuito o destrucción térmica del transistor de potencia por sobrecalentamiento. (pág. 125)

## Comportamiento en avería
El soplador queda inoperativo o gira permanentemente a la máxima velocidad sin obedecer a los mandos. (pág. 125)

## Cómo comprobarlo
Medir la tensión de salida suministrada al motor del soplador al variar la velocidad seleccionada en la centralita. (págs. 125, 161)

## Mantenimiento
Reemplazar el filtro de habitáculo para evitar falta de caudal de aire de refrigeración sobre las aletas del módulo electrónico. (págs. 105, 125)

---

```yaml
tipo: fundamento
titulo: Distribución y mezcla de aire bizona
entidad: distribucion-aire
variante: bizona
area: climatizacion
sistema: distribucion-aire
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "126-130"
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [bizona, mezcla de aire, compuerta de mezcla, temperatura mínima, temperatura máxima]
```

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

---

```yaml
tipo: fundamento
titulo: Recirculación de aire y detección de contaminantes
entidad: recirculacion
area: climatizacion
sistema: distribucion-aire
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "131-136"
relacionados: [servomotor-trampilla, sensor-calidad-aire]
palabras: [recirculación, calidad del aire, CO, NOx, recirculación automática]
```

## Objeto
Reaspirar el aire del interior del habitáculo para acelerar el acondicionamiento térmico y evitar la entrada de gases nocivos del exterior. (págs. 131-132, 136)

## Fundamento
La recirculación cierra la compuerta de aire exterior y abre la compuerta de aspiración interior. El aire ya enfriado vuelve a pasar por el evaporador, alcanzando la temperatura de consigna en menor tiempo y con menor esfuerzo del compresor. (págs. 131-132)

## Desarrollo
- **Recirculación manual:** El conductor activa la función mediante un pulsador en el salpicadero. (pág. 133)
- **Recirculación automática:** Un sensor de calidad del aire instalado en la toma de aspiración mide sustancias contaminantes (gases de escape, monóxido de carbono, óxidos de nitrógeno e hidrocarburos no quemados). Al detectar picos de contaminación, la UEGAA cierra automáticamente la compuerta de aire exterior. La función se inhibe durante el empañado o con la compuerta de descongelación activada. (págs. 134, 136)

## Valores de referencia
- Sustancias detectadas: CO, NOx e hidrocarburos no quemados de los motores de combustión. (pág. 136)

## Errores de concepto frecuentes
- Mantener la recirculación activada de forma prolongada, lo que provoca la acumulación de humedad por respiración de los ocupantes y el empañado instantáneo de los cristales. (págs. 132-133)

---

```yaml
tipo: fundamento
titulo: Seguridad laboral y manipulación de refrigerantes
entidad: prl-y-seguridad
area: general
sistema: prl-y-seguridad
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "142-146"
relacionados: [refrigerante-r134a]
palabras: [seguridad laboral, congelación, fosos, ventilación, primeros auxilios]
```

## Objeto
Establecer los protocolos de prevención de riesgos laborales y medidas de seguridad para la manipulación de gases refrigerantes e instalaciones presurizadas en el taller. (págs. 142-146)

## Fundamento
Los refrigerantes frigoríficos se encuentran a alta presión y presentan riesgo de congelación por contacto directo o asfixia y toxicidad por acumulación o descomposición térmica. (págs. 142, 145-146)

## Desarrollo
- **Protección personal:** Uso obligatorio de gafas de seguridad y guantes de protección al intervenir en el circuito. (págs. 142, 146)
- **Riesgo de congelación:** La fuga de refrigerante líquido sobre la piel o los ojos provoca congelaciones graves instantáneas por rápida evaporación (punto de ebullición del R134a a -26 ºC). En caso de salpicadura en ojos, lavar con agua fría durante 15 minutos, aplicar colirio y acudir al médico. (págs. 142, 146)
- **Ventilación y fosos:** El gas refrigerante es inodoro, incoloro y más denso que el aire, desplazando al oxígeno y acumulándose en zonas bajas. Prohibido manipular o almacenar en fosos de taller o recintos subterráneos sin ventilación forzada. (pág. 145)
- **Operaciones de soldadura:** Evitar que las tuberías y componentes del circuito alcancen más de 80 ºC durante soldaduras próximas para impedir disparos de la válvula de sobrepresión o generación de gases tóxicos por descomposición. (págs. 144, 146)

## Valores de referencia
- Temperatura máxima admisible en soldaduras cercanas al circuito: 80 ºC. (pág. 144)
- Tiempo de lavado ocular con agua fría tras salpicadura: 15 minutos. (pág. 146)

## Errores de concepto frecuentes
- Considerar que el gas refrigerante no es peligroso en fosos por no ser inflamable, ignorando el riesgo de asfixia por desplazamiento del oxígeno. (pág. 145)

---

```yaml
tipo: fundamento
titulo: Normativa de gases fluorados y certificación profesional
entidad: normativa-y-medioambiente
area: general
sistema: normativa-y-medioambiente
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "148-151"
relacionados: [refrigerante-r134a, refrigerante-r1234yf]
palabras: [Real Decreto 795/2010, certificación profesional, gases fluorados, Directiva 2006/40/CE]
```

## Objeto
Compilar el marco legal, las obligaciones de los talleres y la certificación exigida para la comercialización y manipulación de gases refrigerantes fluorados. (págs. 148-151)

## Fundamento
El Real Decreto 795/2010 y la Directiva europea 2006/40/CE regulan la manipulación de gases fluorados de efecto invernadero para mitigar el calentamiento global y proteger la atmósfera. (págs. 148-151)

## Desarrollo
- **Certificación profesional:** Todo técnico que realice operaciones de instalación, mantenimiento, carga o recuperación de refrigerantes fluorados en climatización de vehículos debe poseer la certificación oficial acreditativa de competencia profesional. (págs. 149-150)
- **Compra de refrigerantes:** Los talleres solo pueden adquirir gases fluorados acreditando la posesión del certificado profesional y empleando equipos de recuperación homologados. (págs. 149-150)
- **Directiva 2006/40/CE:** Establece la reducción paulatina del uso del refrigerante R134a en vehículos de nueva fabricación por su potencial de calentamiento global, fijando un límite máximo de fugas de 40 g/año en sistemas sencillos y 60 g/año en sistemas de doble evaporador. (pág. 151)

## Valores de referencia
- Límite máximo de fugas anuales de gas fluorado: 40 g/año (evaporador único) y 60 g/año (evaporador doble). (pág. 151)
- Marco legal aplicable: Real Decreto 795/2010 y Directiva 2006/40/CE. (págs. 148, 151)

## Errores de concepto frecuentes
- Pensar que cualquier operario sin certificación específica de gases fluorados puede realizar recargas o manipulaciones del circuito frigorífico. (págs. 149-150)

---

```yaml
tipo: procedimiento
titulo: Detección de fugas por contraste fluorescente
entidad: deteccion-fugas
area: climatizacion
sistema: equipos-taller
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "152"
relacionados: [refrigerante-r134a, trazador-uv]
palabras: [contraste fluorescente, luz UV, inyector de aditivo, detección de fugas]
```

## Objeto y alcance
Localizar puntos de inestanqueidad y fugas de fluido refrigerante en las tuberías y componentes del circuito frigorífico mediante aditivo trazador UV. (pág. 152)

## Condiciones previas
Circuito frigorífico con carga parcial o completa de refrigerante y compresor operativo para hacer circular el aditivo. (pág. 152)

## Equipo y material
Inyector de aditivo trazador, ampolla de tinte fluorescente compatible con R134a/aceite, lámpara de luz ultravioleta (UV) y gafas de contraste filtrantes. (pág. 152)

## Pasos
1. Cargar el inyector especial con una ampolla de líquido colorante fluorescente. (pág. 152)
2. Conectar el inyector a la toma de servicio de baja presión del circuito de climatización. (pág. 152)
3. Inyectar la dosis de aditivo trazador al interior del circuito presurizado. (pág. 152)
4. Poner en marcha el motor del vehículo y conectar el climatizador durante al menos 15-20 minutos para distribuir homogéneamente el tinte por todas las canalizaciones. (pág. 152)
5. Oscurecer la zona de trabajo e inspeccionar detenidamente todas las uniones, racores, retén del compresor y condensador iluminando con la lámpara de luz ultravioleta y equipando gafas de contraste. (pág. 152)
6. Identificar los puntos de fuga por el resplandor de color verde/amarillo fluorescente emitido por el tinte extraviado. (pág. 152)

## Valores de referencia
Dosis de aditivo ajustada a las especificaciones del fabricante del tinte para no alterar la viscosidad del aceite. (pág. 152)

## Verificación final
Reparar la inestanqueidad sustituyendo las juntas tóricas o el componente defectuoso y limpiar los restos de aditivo de la zona con limpiador específico. (pág. 152)

## Seguridad y normativa
Utilizar gafas de protección UV para evitar lesiones oculares por radiación directa de la lámpara ultravioleta. (pág. 152)

---

```yaml
tipo: procedimiento
titulo: Recuperación y reciclaje de refrigerante
entidad: recuperacion-refrigerante
area: climatizacion
sistema: equipos-taller
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "153-154"
relacionados: [refrigerante-r134a, aceite-frigorifico]
palabras: [estación de reciclaje, recuperación, balanza de precisión, botella de almacenamiento]
```

## Objeto y alcance
Extraer, deshidratar y purificar el agente frigorífico R134a del vehículo para permitir la apertura segura del circuito o su reutilización. (págs. 153-154)

## Condiciones previas
Estación de servicio para aire acondicionado conectada a la red eléctrica y mangueras de servicio acopladas a las tomas del vehículo. Prohibido liberar gas a la atmósfera. (págs. 153-154)

## Equipo y material
Estación de recuperación y reciclaje de R134a, mangueras con acoplamientos rápidos de alta y baja presión, balanza de precisión integrada y botella de almacenamiento para gas usado/contaminado. (págs. 153-154)

## Pasos
1. Conectar las mangueras de alta (roja) y baja presión (azul) de la estación de servicio a las tomas rápidas del vehículo. (págs. 153-154)
2. Abrir los grifos de las mangueras de acoplamiento. (págs. 153-154)
3. Seleccionar e iniciar la función de "Recuperación / Reciclaje" en el panel de control de la estación. (págs. 153-154)
4. Extraer el fluido del circuito del vehículo; la estación separa automáticamente el aceite usado extraído y filtra el agua y la suciedad del refrigerante. (págs. 153-154)
5. Verificar el peso de gas recuperado indicado en el display de la balanza de precisión. (págs. 153-154)
6. Si el gas recuperado está excesivamente degradado, contaminado o hidratado, derivarlo a la botella de almacenamiento de residuos para entregarlo a un gestor autorizado cuando alcance el 75% de su capacidad. (pág. 154)

## Valores de referencia
- Límite máximo de llenado de la botella de recuperación de residuos: 75% del peso nominal especificado. (pág. 154)

## Verificación final
Comprobar en la batería de manómetros de la estación que la presión del circuito del vehículo se mantiene a 0 bar (vacío parcial). (págs. 153-154)

## Seguridad y normativa
Prohibida la emisión deliberada de gases fluorados a la atmósfera según el Real Decreto 795/2010. Utilizar gafas y guantes de seguridad. (págs. 149, 153)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico del circuito frigorífico por lectura de manómetros
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "157-158"
relacionados: [compresor, valvula-expansion, condensador, presostato]
palabras: [manómetros, alta presión, baja presión, diagnóstico de presiones, carga de gas]
```

## Síntoma
Falta de rendimiento frigorífico en el habitáculo, enfriamiento deficiente o cortes intermitentes del climatizador. (pág. 157)

## Causas posibles
- Carga insuficiente o falta total de refrigerante por fugas. (págs. 157-158, 161)
- Exceso de gas refrigerante en la instalación. (pág. 161)
- Válvula de expansión bloqueada en posición abierta o cerrada. (pág. 161)
- Compresor dañado por pérdida de capacidad de compresión o falta de aspiración. (pág. 161)
- Obstrucción en el condensador o falta de ventilación forzada. (pág. 161)

## Cómo separar las causas
1. Conectar los manómetros de baja presión (azul) y alta presión (rojo) a las tomas de servicio del vehículo. (pág. 157)
2. Arrancar el motor, estabilizar el régimen a 1.500-2.000 rpm y conectar el climatizador al máximo rendimiento frigorífico. (págs. 46, 157)
3. Observar la lectura combinada de presiones:
   - Alta y baja presión más bajas de lo normal: Indican carga insuficiente de refrigerante o fuga en el circuito. (pág. 161)
   - Alta presión excesivamente elevada y baja presión alta: Indican exceso de carga de gas o mala refrigeración del condensador por fallo del electroventilador. (pág. 161)
   - Baja presión excesivamente baja y alta presión normal/baja: Indica válvula de expansión bloqueada en cierre, congelación del evaporador o filtro deshidratante colmatado. (págs. 159, 161)
   - Baja presión demasiado alta y alta presión anormalmente baja: Indican pérdida de rendimiento compresión del compresor (daño interno en las válvulas de lámina). (pág. 161)

📷 IMAGEN: Manómetros de alta y baja presión con las escalas de lectura de presión y temperatura — Fuente: LA CLIMATIZACIÓN.pdf, pág. 157

## Valores de referencia
- Condiciones de prueba: Motor a 1.500-2.000 rpm, temperatura ambiente 20 ºC. (pág. 46)
- Presión en reposo a 20 ºC: aprox. 4,7 bares (0,47 MPa). (pág. 46)
- Presiones normales de trabajo con R134a: Baja presión entre 1,5 y 2,5 bares; Alta presión entre 12 y 18 bares. (págs. 43, 45, 157-158)

## Verificación tras la reparación
Verificar que tras corregir la avería las presiones de alta y baja se estabilizan dentro de los márgenes teóricos y la temperatura en el difusor desciende a valores de confort. (págs. 157, 161)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico del síntoma falta de rendimiento frigorífico
entidad: no-enfria
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "159-161"
relacionados: [compresor, embrague-compresor, filtro-deshidratador, valvula-expansion]
palabras: [no enfría, falta de rendimiento, pre-expansión, embrague, averías comunes]
```

## Síntoma
El sistema de aire acondicionado está activo pero no produce aire frío o la capacidad de enfriamiento es insuficiente. (pág. 161)

## Causas posibles
- Correa auxiliar rota o patinando sobre la polea. (pág. 161)
- Embrague electromagnético del compresor defectuoso o sin alimentación eléctrica. (pág. 161)
- Presostato averiado o desconectado por protección de baja/alta presión. (pág. 161)
- Compresor destruido mecánicamente o agarrotado. (pág. 161)
- Fenómeno de pre-expansión por filtro deshidratante colmatado/saturado. (págs. 159, 161)
- Válvula de expansión averiada u orificio del evaporador congelado. (pág. 161)

## Cómo separar las causas
1. Inspeccionar visualmente el giro del plato del compresor con el A/C conectado para confirmar si el embrague se acopla. Si no gira, verificar la tensión de la correa auxiliar y la llegada de 12 V a la electrobobina N25. (pág. 161)
2. Si el embrague no recibe corriente, comprobar fusibles, relés y el estado de conmutación del presostato. (pág. 161)
3. Si el compresor gira pero no enfría, tocar con la mano la tubería de entrada y salida del filtro deshidratante: si existe una diferencia acusada de temperatura entre la entrada y la salida, se padece pre-expansión por filtro colmatado. (pág. 159)
4. Si el evaporador se hiela por completo bloqueando el flujo de aire, revisar la sonda de temperatura del evaporador o termostato antihielo. (pág. 161)
5. Acoplar la estación de manómetros para evaluar la presión del circuito y detectar falta de gas por fugas o pérdida de compresión. (págs. 157, 161)

## Valores de referencia
- Caída de temperatura en filtro deshidratante normal: 0 ºC (la entrada y salida deben estar a la misma temperatura). (pág. 159)

## Verificación tras la reparación
Comprobar el correcto acoplamiento del compresor, verificar la inexistencia de saltos térmicos en el deshidratador y confirmar la salida de aire frío constante por los difusores. (págs. 159, 161)

---

COBERTURA: documento «LA CLIMATIZACIÓN.pdf», páginas 87 a 165 de 165. [completo]