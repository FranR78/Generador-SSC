```yaml
tipo: componente
titulo: Transmisor de alta presión
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
codigo: G65
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "36-37"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, electroventilador-condensador, embrague-compresor]
palabras: [G65, señal PWM, onda cuadrada, cristal de silicio, 50 Hz]
```

## Misión
Medir de forma continua la presión del agente frigorífico en el lado de alta presión para gestionar la desconexión de seguridad del compresor y el escalonamiento de los electroventiladores. (págs. 36-37)

## Tipos y características
Sensor electrónico piezoeléctrico equipado con un microprocesador integrado que sustituye al conmutador de presión mecánico F129 en los climatizadores de nueva generación. (pág. 36)

## Principio de funcionamiento
El refrigerante actúa sobre un cristal de silicio cuya resistencia varía en función de la presión. La electrónica del sensor convierte esta deformación en una señal digital rectangular modulada en anchura de impulsos (PWM) con una frecuencia fija de 50 Hz. El ancho del impulso varía proporcionalmente con la presión detectada. (págs. 36-37)

📷 IMAGEN: Muestra de la onda cuadrada de 50 Hz del transmisor G65 con la relación entre ancho de pulso y presión — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 37

## Valores de trabajo
- Frecuencia de la señal PWM: 50 Hz (periodo constante de 20 ms). (pág. 37)
- Ancho de pulso a baja presión (0,14 MPa / 1,4 bar): 2,6 ms (13% del periodo). (pág. 37)
- Ancho de pulso a alta presión (3,7 MPa / 37 bar): 18 ms (90% del periodo). (pág. 37)

## Anomalías frecuentes
Interrupción en la línea de señal PWM o fallo en la tensión de alimentación del sensor. (págs. 36-37)

## Comportamiento en avería
La unidad de control desactiva el compresor por seguridad y fuerza el funcionamiento permanente del ventilador del radiador al máximo escalón. (págs. 36-37)

## Cómo comprobarlo
Analizar la señal digital PWM con un osciloscopio o verificar los valores de presión calculados en el bloque de valores de medición con el equipo de autodiagnóstico. (págs. 37, 71)

## Mantenimiento
No documentado en fuentes en las páginas 36-37.

---

```yaml
tipo: componente
titulo: Unidad de control para el ventilador del líquido refrigerante
entidad: unidad-control-climatizador
variante: modulo-ventiladores
area: climatizacion
sistema: control-climatizacion
codigo: J293
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "40-41"
forma_parte_de: control-climatizacion
relacionados: [electroventilador-condensador, transmisor-presion, embrague-compresor]
palabras: [J293, escalones de velocidad, acoplamiento N25, bomba V51, PWM]
```

## Misión
Gobernar la activación de los escalones de velocidad de los electroventiladores de refrigeración del condensador/motor y controlar el acoplamiento electromagnético del compresor. (págs. 40-41)

## Tipos y características
Módulo electrónico de potencia adaptado para procesar la señal PWM del transmisor de alta presión G65. En determinadas versiones incluye un módulo cronorruptor para la bomba de circulación de líquido refrigerante V51. (págs. 40-41)

## Principio de funcionamiento
Analiza la señal digital del transmisor de alta presión G65 y los datos de temperatura del motor procedentes de la UCE del motor. Conecta la velocidad 1 de los ventiladores al activar el compresor (con presión > 0,2 MPa / 2 bar) y conmuta a la velocidad 2 cuando la presión de alta excede de 1,6 MPa (16 bar) o la temperatura del refrigerante supera los 99 ºC. (págs. 40-41)

📷 IMAGEN: Estructura del módulo J293 con sus conectores modificados para la señal del transmisor G65 — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 40

## Valores de trabajo
- Activación de velocidad 1: climatizador conectado y presión del circuito > 0,2 MPa (2 bar). (pág. 41)
- Activación de velocidad 2 por presión: alta presión > 1,6 MPa (16 bar). (pág. 41)
- Activación de velocidad 2 por temperatura de motor: temperatura del líquido refrigerante > 99 ºC. (pág. 41)

## Anomalías frecuentes
Avería en los relés de potencia internos o cortocircuito en las salidas hacia los motores de los ventiladores. (págs. 40-41)

## Comportamiento en avería
Inoperatividad de los electroventiladores, provocando sobrepresión en el circuito frigorífico o sobrecalentamiento del motor térmico. (págs. 40-41)

## Cómo comprobarlo
Efectuar la prueba de actuadores con el equipo de autodiagnóstico para verificar la activación de los escalones de velocidad 1 y 2. (págs. 41, 71)

## Mantenimiento
Verificar la fijación del módulo y el estado de sus conectores eléctricos. (pág. 40)

---

```yaml
tipo: fundamento
titulo: Regulación automática de temperatura Climatronic
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
codigo: J255 / E87
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "42-46"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [Climatronic, J255, E87, regulación electrónica, autodiagnóstico, CAN-Bus]
```

## Objeto
Mantener de forma automática e invariable la temperatura del habitáculo seleccionada por los ocupantes sin necesidad de reajustes manuales. (págs. 42-43)

## Fundamento
El Climatronic procesa mediante un microprocesador integrado en la unidad de control J255/E87 las señales de múltiples sensores térmicos y ópticos, calculando la posición exacta de los servomotores y la tensión de alimentación de la turbina de aire fresco. (págs. 43-45)

## Desarrollo
La unidad de control recibe datos de la temperatura interior (G56), exterior (G17, G89), aire tratado en reposapiés (G192) e radiación solar (G107). Asimismo, recibe por CAN-Bus o líneas suplementarias el régimen del motor, la velocidad del vehículo y el tiempo de parada.
Un microprocesador compara continuamente las magnitudes medidas con la consigna teórica elegida. Como respuesta, envía señales de mando a los servomotores paso a paso (V68, V70, V71, V85) y al regulador electrónico de la turbina (J126) para ajustar el caudal, la mezcla de aire frío/caliente y la distribución por los difusores. (págs. 43-46)

📷 IMAGEN: Cuadro general del sistema Climatronic con la interconexión entre sensores, la unidad de control J255 y los actuadores — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 44-45

## Valores de referencia
- Margen de regulación de temperatura seleccionable: de 18 ºC a 29 ºC (o de 16 ºC a 29,5 ºC según versión). (págs. 46, 56)

## Errores de concepto frecuentes
- Asumir que ante el fallo de un sensor el sistema queda inoperativo, omitiendo que la unidad de control calcula valores supletorios fijos para mantener el servicio de emergencia. (págs. 48-50)

---

```yaml
tipo: componente
titulo: Termosensor del tablero de instrumentos G56
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: G56
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "47"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador]
palabras: [G56, V42, aspiración de aire, habitáculo, NTC]
```

## Misión
Medir la temperatura real del aire del habitáculo en la zona del cuadro de mandos para proporcionar la señal básica de regulación a la unidad de control. (pág. 47)

## Tipos y características
Resistencia con coeficiente de temperatura negativo (NTC) montada en el propio frontal del panel de mandos e indicación del climatizador E87. (pág. 47)

## Principio de funcionamiento
Para evitar mediciones erróneas causadas por el calor propio de la pantalla electrónica y de los circuitos integrados de la centralita, un pequeño motor eléctrico V42 acciona una turbina que aspira aire del habitáculo a través de la rejilla frontal, haciéndolo pasar directamente por el termistor G56. (pág. 47)

📷 IMAGEN: Módulo interior de la unidad de control mostrando la posición del sensor G56 y la turbina de aspiración V42 — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 47

## Valores de trabajo
- Tipo de elemento sensible: resistencia NTC. (pág. 47)

## Anomalías frecuentes
Obstrucción de la rejilla de aspiración por acumulación de pelusa y polvo del habitáculo, o bloqueo mecánico de la turbina V42. (pág. 47)

## Comportamiento en avería
La unidad de control asume un valor supletorio interno para la temperatura del habitáculo, reduciendo la precisión de la regulación automática. (pág. 47)

## Cómo comprobarlo
Verificar si la turbina V42 gira al conectar el encendido y consultar el valor de temperatura leído en el bloque de valores de medición. (págs. 47, 71)

## Mantenimiento
Limpiar la rejilla de aspiración del frontal del panel con aire comprimido a baja presión. (pág. 47)

---

```yaml
tipo: componente
titulo: Termosensor de temperatura exterior G17 y G89
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
codigo: G17 / G89
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "48"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G17, G89, paragolpes, canal de aspiración, valor supletorio +10 ºC]
```

## Misión
Captar la temperatura del aire atmosférico exterior para ajustar la posición de las trampillas de mezcla y la velocidad de soplado de la turbina de aire fresco. (pág. 48)

## Tipos y características
Sondas térmicas de resistencia NTC. El sistema utiliza dos puntos de medición: la sonda G17 (ubicada en el frente del vehículo tras el paragolpes) y la sonda G89 (instalada en el canal de aspiración de aire fresco). (pág. 48)

## Principio de funcionamiento
La unidad de control compara continuamente las señales de G17 y G89. Procesa siempre el valor de temperatura más bajo para evitar lecturas infladas por el calor radiado del motor cuando el vehículo está detenido o circula a baja velocidad. (pág. 48)

## Valores de trabajo
- Valor supletorio asumido en caso de avería simultánea de G17 y G89: +10 ºC. (pág. 48)

## Anomalías frecuentes
Deterioro por humedad, sulfatación en las clavijas del conector del paragolpes o rotura del cableado tras colisiones frontales. (pág. 48)

## Comportamiento en avería
Si falla el sensor G17, la unidad asume la lectura de G89. Si fallan ambos sensores, la unidad calcula un valor fijo de +10 ºC y anula la función de recirculación de aire. (pág. 48)

## Cómo comprobarlo
Consultar los valores medidos por G17 y G89 en los bloques de medición del autodiagnóstico y comparar con la temperatura ambiental real. (págs. 48, 71)

## Mantenimiento
Inspeccionar el estado de la sonda G89 durante la sustitución del filtro antipolen del habitáculo. (pág. 48)

---

```yaml
tipo: componente
titulo: Transmisor de temperatura de salida del vano reposapiés G192
entidad: sensor-temperatura-interior
variante: reposapies
area: climatizacion
sistema: control-climatizacion
codigo: G192
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "49"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [G192, vano reposapiés, NTC, valor supletorio +80 ºC]
```

## Misión
Medir la temperatura del caudal de aire impulsado hacia la zona inferior de los pies para regular la posición de la trampilla de distribución y la turbina de aire fresco. (pág. 49)

## Tipos y características
Sonda térmica de tipo NTC alojada en el interior del conducto de aireación del vano reposapiés. (pág. 49)

## Principio de funcionamiento
Mide la temperatura del aire tratado antes de su difusión en el habitáculo. Su señal permite a la centralita corregir el reparto de aire entre el parabrisas y el piso, ajustando además el régimen del soplador. (pág. 49)

## Valores de trabajo
- Valor supletorio asignado en caso de fallo de señal: +80 ºC. (pág. 49)

## Anomalías frecuentes
Descalibración del elemento NTC o desconexión del enchufe al desmontar paneles del salpicadero. (pág. 49)

## Comportamiento en avería
La unidad de control calcula un valor supletorio de +80 ºC y mantiene el sistema en funcionamiento con una distribución de aire modificada. (pág. 49)

## Cómo comprobarlo
Consultar los valores de la sonda en el bloque de valores de medición con el equipo de autodiagnóstico. (págs. 49, 71)

## Mantenimiento
No documentado en fuentes en la página 49.

---

```yaml
tipo: componente
titulo: Fotosensor de radiación solar G107
entidad: fotosensor-solar
area: climatizacion
sistema: control-climatizacion
codigo: G107
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "50"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G107, fotodiodo, filtro UV, radiación solar, corrección de temperatura]
```

## Misión
Detectar la intensidad de la radiación solar directa que incide sobre los ocupantes para corregir automáticamente la temperatura de la mezcla de aire y la velocidad del soplador. (pág. 50)

## Tipos y características
Sensor óptico montado en la parte central superior del salpicadero. Consta de una carcasa protectora, un filtro de radiación UV, un elemento óptico orientativo y uno o dos fotodiodos (sensor simple o sensor dual para lados izquierdo/derecho). (pág. 50)

## Principio de funcionamiento
La luz solar atraviesa el filtro UV e incide en el fotodiodo, aumentando la corriente que lo atraviesa de forma proporcional a la intensidad de la radiación. La unidad de control procesa el aumento de corriente e incrementa la potencia de refrigeración en el lado del habitáculo expuesto al sol. (pág. 50)

📷 IMAGEN: Despiece del fotosensor G107 mostrando el filtro UV, el elemento óptico y los fotodiodos — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 50

## Valores de trabajo
- Variación de señal: aumento de intensidad de corriente proporcional a la radiación solar incidente. (pág. 50)

## Anomalías frecuentes
Obstrucción física de la lente del sensor por objetos o papeles depositados sobre el salpicadero. (pág. 50)

## Comportamiento en avería
La unidad de control adopta un valor supletorio fijo memorizado para la radiación solar. (pág. 50)

## Cómo comprobarlo
Tapar el fotosensor e iluminarlo de forma directa con una linterna comprobando la variación de parámetros en los bloques de medición. (págs. 50, 71)

## Mantenimiento
Mantener limpia la superficie óptica exterior del sensor. (pág. 50)

---

```yaml
tipo: componente
titulo: Servomotores de las trampillas de aireación
entidad: servomotor-trampilla
area: climatizacion
sistema: distribucion-aire
codigo: V68 / V70 / V71 / V85
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "51-52"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [V68, V70, V71, V85, potenciómetro de realimentación, 5 V]
```

## Misión
Posicionar mecánicamente las trampillas de mezcla, distribución, velocidad y recirculación de la caja climática según las órdenes de la centralita. (págs. 51-52)

## Tipos y características
Actuadores eléctricos formados por un pequeño motor de corriente continua, un tren de engranajes reductores y un potenciómetro de realimentación de posición. Destacan: V68 (trampilla de mezcla), V70 (trampilla central), V85 (vano reposapiés/descongelación) y V71 (velocidad/recirculación). (págs. 51-52)

## Principio de funcionamiento
La unidad de control alimenta el motor eléctrico para girar la palanca del servomotor y mover la trampilla. El potenciómetro interno, alimentado con una tensión de referencia de 5 V, varía su resistencia enviando una señal de tensión de retorno que informa a la centralita de la posición angular exacta en cada instante. (págs. 51-52)

📷 IMAGEN: Esquema eléctrico de conexión de un servomotor con su potenciómetro de posición y tensión de 5 V — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 51

## Valores de trabajo
- Tensión de alimentación del potenciómetro de realimentación: 5 V de corriente continua. (pág. 51)

## Anomalías frecuentes
Desgaste o suciedad en la pista del potenciómetro interno (G92, G112, G113, G114) o agarrotamiento mecánico de las palancas de la trampilla. (págs. 51-52)

## Comportamiento en avería
Incapacidad para regular la temperatura o bloquear la distribución de aire en una posición fija. La avería queda memorizada en el autodiagnóstico. (págs. 51, 71)

## Cómo comprobarlo
Realizar el diagnóstico de actuadores y ejecutar el ajuste básico con la máquina de diagnosis para autoadaptar los topes límites de recorrido. (págs. 51, 71)

## Mantenimiento
Lubricar ligeramente las palancas y guías exteriores de las trampillas con grasa de vaselina o sólida en intervenciones de desmontaje. (pág. 52)

---

```yaml
tipo: componente
titulo: Sensor de la calidad del aire G238
entidad: sensor-calidad-aire
area: climatizacion
sistema: control-climatizacion
codigo: G238
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "61-63"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [G238, calidad del aire, contaminantes, oxidables, reducibles, recirculación automática]
```

## Misión
Analizar la presencia de sustancias nocivas en el aire exterior para ordenar el cierre automático de la trampilla de recirculación antes de que los contaminantes penetren en el habitáculo. (págs. 61-62)

## Tipos y características
Sensor semiconductor térmico instalado en la toma de aspiración de aire fresco en la caja de aguas. Responde a gases oxidables (CO) y reducibles (NOx). (págs. 61-62)

## Principio de funcionamiento
Mide de forma continua la variación de conductividad de su elemento semiconductor provocada por los picos de contaminación del aire exterior. Transmite una señal digital rectangular modulada a la unidad de control, la cual activa el servomotor V71/V113 para conmutar a recirculación de aire. Para evitar el empañado, el sistema limita el tiempo máximo en recirculación y no se activa a temperaturas muy bajas. (págs. 62-63)

📷 IMAGEN: Esquema del sensor de calidad del aire G238 y su comunicación mediante señal digital con la unidad de control — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 63

## Valores de trabajo
- Tipo de gases detectables: gases oxidables (monóxido de carbono CO) y reducibles (óxidos de nitrógeno NOx). (pág. 62)

## Anomalías frecuentes
Deterioro del elemento sensible por lavados del vano motor con productos desengrasantes o contaminación del filtro. (págs. 62-63)

## Comportamiento en avería
Se anula o restringe la función automática de recirculación de aire, memorizándose el fallo en la centralita. (págs. 62-63)

## Cómo comprobarlo
Consultar las solicitudes del sensor G238 en los bloques de medición del autodiagnóstico o realizar una prueba de campo acercando un gas de prueba a la embocadura. (págs. 63, 71)

## Mantenimiento
Reemplazar el filtro combinado de carbón activo en los intervalos de inspección especificados. (pág. 62)

---

```yaml
tipo: diagnostico
titulo: Autodiagnóstico del sistema Climatronic
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
fabricante: VW
fuente: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF"
paginas: "68-71"
relacionados: [unidad-control-climatizador]
palabras: [VAS 5051, memoria de averías, bloques de medición, prueba de actuadores, ajuste básico]
```

## Síntoma
Inoperatividad total o parcial del climatizador, parpadeo de los dígitos de la pantalla al conectar el encendido o falta de regulación de temperatura y caudal de aire. (págs. 68-69)

## Causas posibles
- Interrupción o cortocircuito en las líneas de sensores térmicos (G17, G56, G89, G107, G153, G192, G238). (págs. 69-70)
- Avería eléctrica o bloqueo mecánico en los servomotores de las trampillas (V68, V70, V71, V85). (págs. 69-70)
- Anomalía de presión en el circuito frigorífico detectada por el presostato F129 o transmisor G65. (pág. 70)
- Fallo de comunicación en el bus de datos CAN o alimentación defectuosa de la centralita J255. (págs. 68, 70)

## Cómo separar las causas
1. Conectar el equipo de diagnosis (VAS 5051 o lector equivalente) al conector de diagnóstico T16 de 16 polos del vehículo. (pág. 68)
2. Seleccionar la dirección "08 - Electrónica del climatizador" y ejecutar la función "02 - Consultar memoria de averías". (págs. 68-69)
3. Si existen averías registradas, identificar si corresponden a sensores (valor fuera de tolerancia) o a actuadores (límite superior/inferior sobrepasado). (pág. 69)
4. Ejecutar la función "03 - Diagnóstico de elementos actuadores" para activar secuencialmente la turbina, el acoplamiento magnético N25 y los servomotores, comprobando su respuesta física. (págs. 69-70)
5. Seleccionar "08 - Leer bloque de valores de medición" para analizar en tiempo real las temperaturas leídas por los sensores, la tensión de alimentación y los valores de tensión de los potenciómetros de posición. (pág. 70)
6. Tras reemplazar un componente o servomotor, realizar la función "04 - Iniciar ajuste básico" para que la centralita memorice los topes mecánicos del nuevo actuador. (págs. 70-71)

📷 IMAGEN: Conexión de la estación de autodiagnóstico VAS 5051 al conector de diagnóstico de 16 polos T16 — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 68

## Valores de referencia
- Conector de diagnóstico: conector normalizado T16 de 16 polos. (pág. 68)
- Tipo de memoria de averías: memoria no volátil exenta de borrado por desconexión de batería. (pág. 68)

## Verificación tras la reparación
Borrar la memoria de averías con la función "05", desconectar el encendido, arrancar el motor, conectar el Climatronic y verificar que el display no parpadee y no se vuelvan a registrar códigos de fallo. (págs. 69, 71)

---

COBERTURA: documento «208 CLIMATIZADORES_EN_LOS_VEHIC.PDF», páginas 36 a 75 de 75. [completo]

👉 *El documento «208 CLIMATIZADORES_EN_LOS_VEHIC.PDF» ha quedado totalmente procesado. Selecciona la siguiente fuente en el panel de la izquierda para continuar redactando notas.*