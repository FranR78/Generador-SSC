```yaml
tipo: componente
titulo: Unidad de control para ventilador del líquido refrigerante
entidad: unidad-control-ventiladores
area: electricidad-electronica
sistema: control-climatizacion
codigo: J293
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "38-41"
forma_parte_de: circuito-refrigeracion-motor
relacionados: [electroventilador-condensador, compresor, presostato, transmisor-presion]
palabras: [J293, ventilador radiador, F18, F129, G65, PWM, bomba V51]
```

## Misión
Establecer el paso de aire fresco necesario a través del radiador y del condensador para la refrigeración del motor y el funcionamiento del climatizador, gestionando la activación de los ventiladores y del acoplamiento electromagnético del compresor (págs. 38-39).

## Tipos y características
Unidad electrónica integrada en el conjunto interconectado de unidades de control del vehículo (págs. 38-39). En versiones revisadas para transmisores de alta presión G65 presenta terminales de conector con diseño modificado (pág. 39). En algunas variantes de conmutación, sus funciones se integran directamente dentro de la unidad de control del climatizador (pág. 39).

## Principio de funcionamiento
Procesa las señales de entrada del termoconmutador F18, del conmutador de presión F129 o la señal modulada en anchura de impulsos (PWM) del transmisor de alta presión G65, además de las órdenes del panel de mandos E87 (págs. 38-39). Con ello vigila continuamente la presión del circuito frigorífico y la temperatura del refrigerante para activar los escalones de velocidad de los electroventiladores y la excitación del compresor (págs. 38-39). Mantiene un intercambio bidireccional de señales con las unidades de control del motor y del cambio (pág. 39). Incorpora un módulo cronorruptor para excitar la bomba de reflujo de líquido refrigerante V51 tras la parada del motor (pág. 39).

## Valores de trabajo
- Escalón 1 de ventiladores con climatizador activado: compresor en marcha y presión en circuito frigorífico superior a 0,2 MPa (2 bares) (pág. 38).
- Escalón 2 de ventiladores: alta presión superior a 1,6 MPa (16 bares) y/o temperatura del líquido refrigerante superior a 99 ºC (págs. 38-39).
- Retorno al Escalón 1: presión por debajo de 1,6 MPa (16 bares) y temperatura del refrigerante inferior a 99 ºC (págs. 38-39).
- Umbrales de conmutación del termoconmutador F18 en el radiador:
  - Escalón I: ON a 92...97 ºC / OFF a 84...91 ºC (pág. 39).
  - Escalón II: ON a 99...105 ºC / OFF a 91...98 ºC (pág. 39).

## Anomalías frecuentes
- Descenso del rendimiento del condensador y detención del funcionamiento del climatizador por falta de refrigeración (pág. 38).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: fundamento
titulo: Regulación automática de la temperatura en el habitáculo
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "208. Regulación de la temperatura.pdf"
paginas: "42-44"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-temperatura-exterior, sensor-temperatura-interior]
palabras: [Climatronic, regulación digital, microprocesador, valores teóricos, valores efectivos, CAN-Bus]
```

## Objeto
Acondicionar el aire fresco refrigerado en el evaporador mezclándolo con aire caliente del intercambiador para mantener una temperatura confortable e invariable en el habitáculo de forma automática (págs. 42-43).

## Fundamento
El sistema detecta las temperaturas efectivas mediante sensores, las compara en un microprocesador con los valores teóricos preprogramados y gobierna servomotores que posicionan las chapaletas de aire y la velocidad de la turbina (págs. 42-43).

## Desarrollo
El aire enfriado por el evaporador suele estar más frío de lo necesario; para obtener la temperatura deseada, se hace pasar una parte del caudal a través del intercambiador de calor de la calefacción (pág. 42).
En los sistemas automáticos (Climatronic o regulación digital), la unidad de control procesa las señales de entrada de los sensores (temperatura exterior, temperatura interior, radiación solar), las desparasita y calcula las señales de salida hacia los servomotores del calefactor/climatizador (págs. 43-44). Los climatizadores de última generación intercambian información mediante CAN-Bus con otras unidades de control (motor, cambio, cuadro de instrumentos) integrando parámetros como velocidad de marcha, régimen del motor y tiempo en parado (pág. 44).

📷 IMAGEN: Esquema del proceso de regulación automática de temperatura con sensores, unidad de control y servomotores — Fuente: 208. Regulación de la temperatura.pdf, pág. 43

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Creer que la regulación automática depende de intervenciones manuales continuas del conductor como ocurre en el climatizador manual (págs. 42-43).

```yaml
tipo: componente
titulo: Unidad de control de climatización
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "45-47"
forma_parte_de: control-climatizacion
relacionados: [servomotor-trampilla, sensor-temperatura-interior, sensor-temperatura-exterior, fotosensor-solar]
palabras: [J255, E87, Climatronic, memoria de averías, autodiagnóstico, función de emergencia, G56]
```

## Misión
Procesar las señales de los sensores, compararlas con los valores teóricos de selección y emitir señales de salida hacia los actuadores (servomotores, electroventiladores, compresor) para regular automáticamente la climatización del habitáculo (págs. 45-47).

## Tipos y características
Unidad de control combinada en un solo cuerpo con el panel de mandos e indicación E87, con diseño adaptado al salpicadero de cada modelo de vehículo (págs. 45-47). Integra en su propio frontal el termosensor de temperatura del habitáculo G56 (pág. 47). Dispone de memoria de averías y autodiagnóstico (pág. 47).

## Principio de funcionamiento
Recibe información eléctrica y electrónica de los sensores del sistema y de señales suplementarias externas vía CAN-Bus (págs. 45-47). Modula las etapas finales para accionar los servomotores de las chapaletas de aire y la turbina de aire fresco V2 mediante la unidad de control J126 (págs. 45-47). En caso de fallo o interrupción en un cable o componente, registra la avería en memoria y mantiene el funcionamiento en un programa o función de emergencia (pág. 47).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Averías eléctricas en sensores o interrupción de líneas registradas en la memoria de autodiagnóstico (pág. 47).

## Comportamiento en avería
Al registrarse una avería, la unidad de control mantiene en vigor el modo operativo seleccionado mediante una función de emergencia con valores supletorios (pág. 47).

## Cómo comprobarlo
Localizar los defectos mediante el equipo de autodiagnóstico conectado al terminal de diagnosis de 16 polos T16 (págs. 46-47).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensor de temperatura exterior
entidad: sensor-temperatura-exterior
variante: g17
area: climatizacion
sistema: control-climatizacion
codigo: G17
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "48-49"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, sensor-temperatura-exterior]
palabras: [G17, armazón anterior, valor supletorio 10 ºC, valor más bajo]
```

## Misión
Detectar la temperatura exterior efectiva en la parte frontal del vehículo para la gestión de la chapaleta de temperatura y la velocidad de la turbina de aire (págs. 48-49).

## Tipos y características
Sensor térmico instalado en el armazón anterior del vehículo (pág. 48). Trabaja en combinación con un segundo sensor situado en el conducto de aspiración G89 (págs. 48-49). Susceptible de autodiagnóstico (pág. 48).

## Principio de funcionamiento
Mide la temperatura ambiente exterior y envía la señal a la unidad de control J255 (pág. 48). La unidad de control compara la lectura con el sensor G89 y procesa siempre el valor más bajo de ambos para evitar mediciones erróneas por calor radiado del motor (págs. 48-49).

## Valores de trabajo
- Valor supletorio por fallo de señal de G17 y G89: +10 ºC (pág. 48).

## Anomalías frecuentes
- Ausencia de señal por avería del sensor o corte de cableado (pág. 48).

## Comportamiento en avería
Si falla la señal de G17, la unidad de control adopta la medición del segundo sensor (G89 en el conducto de aspiración) (pág. 48). Si también falla G89, se aplica un valor supletorio fijo de +10 ºC y se bloquea el modo operativo de recirculación de aire (pág. 48).

## Cómo comprobarlo
Mediante la función de autodiagnóstico de la unidad de control del climatizador (pág. 48).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensor en el conducto de aspiración de aire fresco
entidad: sensor-temperatura-exterior
variante: g89
area: climatizacion
sistema: control-climatizacion
codigo: G89
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "48-49"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, sensor-temperatura-exterior]
palabras: [G89, conducto aspiración, segundo punto medición, valor más bajo]
```

## Misión
Registrar la temperatura del aire exterior a la entrada del conducto de aspiración como segundo punto de medición para la regulación de la chapaleta de temperatura y de la turbina (págs. 48-49).

## Tipos y características
Sensor térmico instalado directamente en la canalización de aspiración de aire fresco (pág. 48). Susceptible de autodiagnóstico (pág. 48).

## Principio de funcionamiento
Emite la lectura de temperatura de la corriente de aire de entrada hacia la unidad de control (pág. 48). La unidad de control compara esta señal con la del sensor G17 del armazón frontal y asume la cifra más baja de ambas para los cálculos de regulación (págs. 48-49).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Interrupción de la señal por fallo del elemento sensor (pág. 48).

## Comportamiento en avería
Al ausentarse la señal de G89, la unidad de control utiliza el valor de medición del sensor de temperatura exterior frontal G17 (pág. 48).

## Cómo comprobarlo
Consultar la memoria de averías del sistema mediante autodiagnóstico (pág. 48).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensor del tablero de instrumentos con turbina de aire
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: G56
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "50"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador]
palabras: [G56, V42, temperatura habitáculo, valor supletorio 24 ºC, turbina aspiración]
```

## Misión
Medir la temperatura efectiva del aire en el interior del habitáculo para compararla con el valor teórico fijado por el usuario (pág. 50).

## Tipos y características
Sensor de temperatura montado en la propia unidad de control J255 / panel E87, provisto de una pequeña turbina de aspiración V42 impulsada eléctricamente (pág. 50). Susceptible de autodiagnóstico (pág. 50).

## Principio de funcionamiento
La turbina V42, gestionada desde el panel de mandos, aspira aire del interior del habitáculo haciéndolo pasar sobre el termosensor G56 para evitar acumulaciones de calor local y errores de medición (pág. 50). La unidad de control analiza el valor medido y ajusta las posiciones de la chapaleta de temperatura y de la turbina de aire fresco (pág. 50).

## Valores de trabajo
- Valor supletorio por fallo de señal: +24 ºC (pág. 50).

## Anomalías frecuentes
- Avería eléctrica del sensor o fallo en el motorcillo de la turbina V42 (pág. 50).

## Comportamiento en avería
Si falta la señal de G56, el sistema aplica un valor supletorio fijo de +24 ºC y mantiene el funcionamiento del climatizador (pág. 50).

## Cómo comprobarlo
A través de la función de autodiagnóstico de la unidad de control (pág. 50).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Transmisor de temperatura a la salida del vano reposapiés
entidad: sensor-temperatura-interior
variante: g192
area: climatizacion
sistema: control-climatizacion
codigo: G192
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "50-51"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G192, resistencia NTC, valor supletorio 80 ºC, distribución aire reposapiés]
```

## Misión
Medir la temperatura del aire impulsado hacia el habitáculo a la salida del calefactor/climatizador en el canal del vano reposapiés (pág. 50).

## Tipos y características
Resistencia eléctrica de coeficiente de temperatura negativo (NTC), cuya resistencia aumenta a medida que disminuye la temperatura (pág. 50). Susceptible de autodiagnóstico (pág. 50).

## Principio de funcionamiento
Mide la temperatura de impulsión del aire e informa a la unidad de control (pág. 50). Con esta señal, la unidad de control gestiona la distribución de aire entre las posiciones de descongelación y vano reposapiés, regulando además el caudal impelido por la turbina V2 (pág. 50).

## Valores de trabajo
- Valor supletorio por fallo de señal: +80 ºC (pág. 50).

## Anomalías frecuentes
- Desconexión o cortocircuito de la resistencia NTC (pág. 50).

## Comportamiento en avería
Al ausentarse la señal de G192, la unidad de control calcula un valor supletorio fijo de +80 ºC y mantiene el sistema en marcha (pág. 50).

## Cómo comprobarlo
Mediante la lectura de la memoria de averías en el autodiagnóstico (pág. 50).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Fotosensor de radiación solar
entidad: fotosensor-solar
area: climatizacion
sistema: control-climatizacion
codigo: G107
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "51-52"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G107, fotodiodo, filtro UV, elemento óptico, sensor doble, radiación solar]
```

## Misión
Detectar la intensidad de la radiación solar directa sobre los ocupantes para corregir la temperatura del habitáculo y la velocidad de la turbina (págs. 51-52).

## Tipos y características
Sensor óptico montado en la parte superior del tablero de instrumentos (págs. 51-52). Se presenta en versión de sensor simple o sensor doble (con dos fotodiodos independientes para los lados izquierdo y derecho del vehículo) (págs. 51-52). Compuesto por carcasa, filtro protector UV, elemento óptico y fotodiodo semiconductor (pág. 52).

📷 IMAGEN: Sección y componentes del fotosensor de radiación solar G107 (filtro, elemento óptico y fotodiodo) en versiones simple y doble — Fuente: 208. Regulación de la temperatura.pdf, pág. 52

## Principio de funcionamiento
La luz solar atraviesa el filtro UV (que protege el elemento óptico) e incide en el fotodiodo (pág. 52). Sin luz, el fotodiodo sólo permite el paso de una corriente muy baja; al recibir luz, aumenta la conducción eléctrica en proporción directa a la intensidad radiativa (pág. 52). La unidad de control interpreta el incremento de corriente como mayor radiación solar e incrementa la refrigeración modificando la posición de la chapaleta de temperatura y la velocidad de la turbina de aire (pág. 52). En la versión de sensor doble, enfría con mayor intensidad el lado del habitáculo más expuesto al sol (pág. 52).

## Valores de trabajo
- Tensión de referencia en circuito: 5 V de alimentación desde la unidad de control (pág. 52).

## Anomalías frecuentes
- Interrupción de la señal por fallo del fotodiodo o suciedad sobre la lente (págs. 51-52).

## Comportamiento en avería
Si se interrumpe la señal, la unidad de control trabaja con un valor supletorio fijo preprogramado para la radiación solar (pág. 52).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: fundamento
titulo: Señales suplementarias para la regulación de la temperatura
entidad: regulacion-automatica
variante: senales-suplementarias
area: climatizacion
sistema: control-climatizacion
fuente: "208. Regulación de la temperatura.pdf"
paginas: "52-53"
relacionados: [unidad-control-climatizador, servomotor-trampilla, compresor]
palabras: [tiempo en parado th, velocidad v, régimen n, CAN-Bus, chapaleta velocidad, desacoplamiento compresor]
```

## Objeto
Integrar parámetros dinámicos del vehículo en la unidad de control del climatizador para optimizar el confort térmico y la gestión de componentes (págs. 52-53).

## Fundamento
Intercambio de datos a través de líneas eléctricas o red CAN-Bus desde el Cuadro de Instrumentos y la Unidad de Control del Motor para adaptar el caudal de aire y las funciones del compresor (págs. 52-53).

## Desarrollo
Las principales señales suplementarias son:
1. Señal de tiempo en parado (th): mide el tiempo transcurrido desde la desconexión del encendido hasta el nuevo arranque (pág. 53). Permite a la unidad de control mantener en memoria la temperatura exterior previa al estacionamiento para evitar falsas regulaciones causadas por el calor radiado del motor al volver a arrancar, logrando un enfriamiento más rápido y sin brusquedades (pág. 53).
2. Señal de velocidad de marcha (v): procedente del transmisor del velocímetro (pág. 53). Actúa sobre la chapaleta de velocidad reduciendo la sección de entrada de aire fresco a altas velocidades para mantener constante el caudal de aire en el habitáculo (pág. 53).
3. Señal de régimen del motor (n): informa del funcionamiento del motor térmico (pág. 53). Sirve para desactivar el compresor (desconectando el acoplamiento magnético) si el motor se apaga o se pierde la señal de régimen (pág. 53).

📷 IMAGEN: Esquema del procesamiento de las señales suplementarias (tiempo en parado th, régimen n y velocidad v) hacia las chapaletas de temperatura, velocidad y compresor — Fuente: 208. Regulación de la temperatura.pdf, pág. 53

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Creer que el caudal de aire que entra al habitáculo depende únicamente de la velocidad seleccionada en la turbina, omitiendo el ajuste automático de la chapaleta de velocidad según la rapidez del vehículo (pág. 53).

```yaml
tipo: componente
titulo: Servomotores de las chapaletas de aire
entidad: servomotor-trampilla
area: climatizacion
sistema: distribucion-aire
fuente: "208. Regulación de la temperatura.pdf"
paginas: "54-55"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [servomotor, potenciómetro posición, 5V, cigüeña, pista guía, V68, V70, V85, V71]
```

## Misión
Transformar las señales eléctricas de salida de la unidad de control en movimientos mecánicos de orientación de las chapaletas de distribución, mezcla y circulación de aire (págs. 54-55).

## Tipos y características
Actuadores eléctricos montados directamente sobre el eje de cada chapaleta en la carcasa del climatizador (pág. 54).
Distribución típica en el sistema:
- Servomotor para chapaleta de temperatura V68 (con potenciómetro G92) (págs. 46, 54-55).
- Servomotor para chapaleta central V70 (con potenciómetro G112) (págs. 46, 54-55).
- Servomotor para chapaleta del vano reposapiés/descongelación V85 (con potenciómetro G114) (págs. 46, 54-55).
- Servomotor para chapaleta de velocidad y recirculación V71 (con potenciómetro G113) (págs. 46, 54-55).
El servomotor V71 acciona conjuntamente la chapaleta de velocidad y la de recirculación mediante un disco con dos pistas guía (pág. 55).

## Principio de funcionamiento
Cada servomotor incorpora un pequeño electromotor y un potenciómetro de realimentación alimentado a 5 V (pág. 55). Al recibir tensión desde la unidad de control, el electromotor gira y mueve la cigüeña o mecanismo articulado de la chapaleta (pág. 55). El potenciómetro varía su resistencia informando continuamente a la unidad de control sobre la posición angular exacta de la chapaleta (pág. 55).

📷 IMAGEN: Esquema eléctrico de conexión del servomotor con electromotor y potenciómetro alimentado a 5 V desde la unidad de control — Fuente: 208. Regulación de la temperatura.pdf, pág. 55

## Valores de trabajo
- Tensión de alimentación del potenciómetro interno: 5 V (pág. 55).

## Anomalías frecuentes
- Desgaste o fallo de contacto en la pista del potenciómetro de realimentación (pág. 55).
- Agarrotamiento mecánico del varillaje o cigüeña de la chapaleta (pág. 55).

## Comportamiento en avería
Imposibilidad de ajustar con precisión la posición de la chapaleta asignada, registrándose la avería correspondiente en la unidad de control (págs. 47, 55).

## Cómo comprobarlo
Mediante la lectura de bloques de valores de medición y la prueba de actuadores en el autodiagnóstico (págs. 47, 55).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: fundamento
titulo: Conducción del aire en el calefactor/climatizador
entidad: distribucion-aire
area: climatizacion
sistema: distribucion-aire
fuente: "208. Regulación de la temperatura.pdf"
paginas: "55-57"
relacionados: [evaporador, servomotor-trampilla, unidad-control-climatizador]
palabras: [flujo no dividido, modo climatización, modo calefacción, modo mixto, deshidratación]
```

## Objeto
Guiar el caudal de aire fresco a través del evaporador y del intercambiador de calor para suministrar aire a la temperatura y humedad seleccionadas hacia los difusores del habitáculo (págs. 55-57).

## Fundamento
Paso secuencial o parcial del aire por los intercambiadores térmicos del módulo climatizador según la posición de la chapaleta de temperatura y el estado de funcionamiento del circuito frigorífico (págs. 56-57).

## Desarrollo
Configuraciones de funcionamiento del flujo no dividido:
1. Máximo rendimiento frigorífico (Modo climatización): el aire fresco pasa por el evaporador encendido y se enfría al máximo. La chapaleta de temperatura cierra por completo el paso hacia el intercambiador de calor de la calefacción, saliendo directamente por los aireadores centrales (págs. 56-57).
2. Máximo rendimiento de calefacción (Climatizador apagado, calefacción activada): el evaporador se encuentra desactivado. El aire atraviesa el evaporador sin enfriarse y la chapaleta de temperatura deriva el 100% del caudal a través del intercambiador de calor, caldeándolo antes de enviarlo al habitáculo (págs. 56-57).
3. Funcionamiento mixto (Climatizador activado, calefacción activada): el aire fresco se enfría intensamente al pasar por el evaporador; a continuación, la chapaleta de temperatura desvía una fracción de este aire frío hacia el intercambiador de calor para templarlo hasta la temperatura de confort fijada (pág. 57). Este modo se utiliza también con aire frío y húmedo para deshidratar el aire en el evaporador y desempañar rápidamente los cristales (pág. 57).

📷 IMAGEN: Esquemas de conducción no dividida del aire en máximo rendimiento frigorífico, máximo de calefacción y funcionamiento mixto — Fuente: 208. Regulación de la temperatura.pdf, págs. 56-57

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Creer que el compresor no debe conectarse cuando se desea calefacción, ignorando que el modo mixto deshidrata el aire para eliminar el vaho de los cristales (pág. 57).

```yaml
tipo: fundamento
titulo: Distribución del aire dividida para regulación bizona
entidad: regulacion-automatica
variante: bizona
area: climatizacion
sistema: distribucion-aire
fuente: "208. Regulación de la temperatura.pdf"
paginas: "58-59"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [bizona, flujo dividido, chapaleta temperatura izquierda, chapaleta temperatura derecha, Audi A6]
```

## Objeto
Permitir el ajuste de temperatura independiente y diferenciado para las zonas izquierda y derecha del habitáculo mediante la división del caudal de aire en la carcasa del climatizador (págs. 58-59).

## Fundamento
Regulación del caudal de aire en el lado del aire mediante dos chapaletas de mezcla independientes (izquierda y derecha) accionadas por servomotores individuales (págs. 58-59).

## Desarrollo
En esta arquitectura (ejemplo Audi A6), el caudal de aire pasa de forma común por el evaporador e intercambiador de calor, pero en la carcasa de distribución posterior se divide en dos canales (lado izquierdo y lado derecho) (págs. 58-59).
Cada canal dispone de su propia chapaleta de mezcla:
- Servomotor para chapaleta de temperatura izquierda V158 (con potenciómetro G220) (págs. 46, 58).
- Servomotor para chapaleta de temperatura derecha V159 (con potenciómetro G221) (págs. 46, 58).
- Transmisores de temperatura de salida en aireadores izquierdo G150 y derecho G151 (pág. 46).
La unidad de control J255 analiza las selecciones de ambos lados (ajustables entre 18 ºC y 29 ºC) y posiciona de forma independiente ambas chapaletas para dosificar la proporción de aire frío y caliente hacia cada lado del habitáculo (págs. 58-59).

📷 IMAGEN: Sección de la carcasa de distribución de aire dividida en lados izquierdo y derecho con sus respectivas chapaletas de temperatura — Fuente: 208. Regulación de la temperatura.pdf, pág. 58

## Valores de referencia
- Rango de selección de temperatura independiente por lado: de 18 ºC a 29 ºC (pág. 59).

## Errores de concepto frecuentes
- Asumir que la regulación bizona requiere dos evaporadores independientes en lugar de dividir el caudal de aire tratado mediante chapaletas dobles (págs. 58-59).

```yaml
tipo: fundamento
titulo: Función de recirculación de aire
entidad: recirculacion
area: climatizacion
sistema: distribucion-aire
fuente: "208. Regulación de la temperatura.pdf"
paginas: "60-61"
relacionados: [servomotor-trampilla, unidad-control-climatizador, evaporador]
palabras: [recirculación, aire atmosférico, ahorro potencia, 15 minutos, empañamiento, vacio, servomotor]
```

## Objeto
Acondicionar térmicamente el aire del propio habitáculo volviéndolo a aspirar, sin tomar aire del exterior, para acelerar el enfriamiento o caldeo del vehículo y aislarlo de contaminantes externos (págs. 60-61).

## Fundamento
Cierre de la chapaleta de entrada de aire fresco y apertura simultánea de la chapaleta de aspiración de aire interior (págs. 60-61).

## Desarrollo
Ventajas de la recirculación:
- Caldeo y enfriamiento mucho más rápido al tratar un aire que ya ha sido acondicionado previamente (pág. 60).
- Ahorro energético: en modo refrigeración reduce a menos de la mitad la potencia requerida en el evaporador y el esfuerzo de accionamiento del compresor (pág. 60).
- Evita la entrada de olores molestos y polen exterior (pág. 60).

Desventajas y limitaciones:
- No existe renovación de oxígeno y el aire se vicia (pág. 61).
- Acumulación de humedad aportada por los ocupantes: si se prolonga, el punto de rocío supera la temperatura de los cristales empañándolos (pág. 61).
- Tiempo máximo recomendado de uso continuo: 15 minutos (pág. 61).
- Al seleccionar la función de descongelación del parabrisas, el sistema bloquea automáticamente la recirculación (pág. 61).

Sistemas de accionamiento:
- Climatizador manual: conmutación neumática mediante un cilindro de vacío al pulsar la tecla de recirculación (págs. 61-62).
- Climatizador automático: accionamiento eléctrico mediante servomotor (págs. 61-62).

📷 IMAGEN: Esquema de posicionamiento de chapaleta de aire fresco cerrada y chapaleta de recirculación abierta en accionamiento neumático y eléctrico — Fuente: 208. Regulación de la temperatura.pdf, págs. 60-62

## Valores de referencia
- Tiempo máximo recomendado de recirculación continuada: 15 minutos (pág. 61).
- Reducción de potencia del compresor/evaporador en recirculación: más del 50% de ahorro (pág. 60).

## Errores de concepto frecuentes
- Dejar activada la recirculación durante viajes largos, lo que causa empañamiento severo de cristales y viciamiento del aire interior (pág. 61).

```yaml
tipo: componente
titulo: Sensor de la calidad del aire
entidad: sensor-calidad-aire
area: climatizacion
sistema: control-climatizacion
codigo: G238
fabricante: VW
fuente: "208. Regulación de la temperatura.pdf"
paginas: "61-63"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, servomotor-trampilla, recirculacion]
palabras: [G238, dióxido de estaño, SnO2, platino, paladio, 350 ºC, PWM, monóxido de carbono, NOx]
```

## Misión
Detectar la presencia y concentración de contaminantes químicos en el aire exterior para activar automáticamente la recirculación antes de que penetren en el habitáculo (págs. 61-63).

## Tipos y características
Sensor electrónico de óxidos mixtos en versión de semiconductor de dióxido de estaño SnO2, sensible a gases nocivos (págs. 62-63). Incorpora aditivos catalíticos de platino y paladio para aumentar la sensibilidad (pág. 63). Instalado en la canalización de aspiración de aire fresco, por delante del filtro combinado de carbón activo (pág. 62). No está sujeto a desgaste mecánico (pág. 63).

📷 IMAGEN: Sensor de la calidad del aire G238 ante el filtro combinado y esquema de comunicación por señal rectangular hacia la unidad de control — Fuente: 208. Regulación de la temperatura.pdf, pág. 62

## Principio de funcionamiento
Funciona de forma similar a una sonda lambda, trabajando a una temperatura de servicio de unos 350 ºC con un consumo reducido de 0,5 W (pág. 63). El módulo electrónico integrado evalúa los cambios de conductividad del semiconductor SnO2 ante la presencia de contaminantes (pág. 63):
- Gases de motores de gasolina detectados: monóxido de carbono CO, hexano C6H14, benceno C6H6, n-heptano C7H16 (pág. 62).
- Gases de motores diésel detectados: óxidos nítricos NOx, dióxido de azufre SO2, ácido sulfhídrico H2S, carbono sulfuro CS2 (pág. 62).
El sensor es autoadaptable: analiza el nivel medio de polución de fondo y envía una señal digital rectangular a la unidad de control J255 (pág. 63). Ante picos bruscos de contaminación, la unidad de control cierra la chapaleta de recirculación durante un tiempo ajustado a la temperatura exterior (págs. 62-63). También activa la recirculación automáticamente al usar el limpia-lavaparabrisas (pág. 63).

## Valores de trabajo
- Temperatura de servicio interna del sensor: 350 ºC aproximadamente (pág. 63).
- Potencia absorbida: 0,5 W (pág. 63).
- Fase de calentamiento inicial tras arranque: 30 segundos aprox. (pág. 63).
- Tª exterior > +2 ºC (pico leve): recirculación conectada mínimo 25 segundos (pág. 63).
- Tª exterior de +2 ºC a -5 ºC (pico intenso): recirculación conectada (pág. 63).
- Tª exterior < -5 ºC o función ECON: recirculación conectada máximo 15 segundos (pág. 63).
- En función de descongelación: la recirculación automática queda inhabilitada (pág. 63).

## Anomalías frecuentes
- Obstrucción o colmatación del filtro combinado de carbón activo adyacente (pág. 63).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
A través de la lectura de bloques de valores y autodiagnóstico de la unidad de control (págs. 62-63).

## Mantenimiento
El sensor G238 no requiere mantenimiento; el filtro combinado de carbón activo debe sustituirse periódicamente en las intervenciones de servicio (pág. 63).

COBERTURA: documento «208. Regulación de la temperatura.pdf», páginas 38 a 63 de 63. completo