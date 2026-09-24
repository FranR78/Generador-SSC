```yaml
tipo: fundamento
titulo: Interacción entre la climatización y la refrigeración del motor
entidad: liquido-refrigerante-motor
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "5"
relacionados: [ciclo-frigorifico, electroventilador-condensador]
palabras: [refrigeración motor, punto de ebullición, sobrecalentamiento, 120 ºC]
```

## Objeto
Analizar la relación operativa y la influencia mutua entre el sistema de aire acondicionado y el sistema de refrigeración del motor térmico. (pág. 5).

## Fundamento
Aunque el aire acondicionado y la refrigeración del motor son dos sistemas independientes, al activar el aire acondicionado se incrementa la exigencia térmica sobre el sistema de refrigeración del motor, elevando la temperatura del líquido refrigerante. (pág. 5).

## Desarrollo
La composición correcta del líquido refrigerante no solo protege contra la congelación, sino que incrementa el punto de ebullición del fluido por encima de los 120 ºC, proporcionando una reserva de potencia imprescindible durante el uso estival, cuando la temperatura ambiental y los trayectos largos sobrecargan ambos sistemas. Por ello, la revisión del líquido refrigerante debe formar parte del servicio de climatización. (pág. 5).

## Valores de referencia
Punto de ebullición del líquido refrigerante del motor con composición correcta: superior a 120 ºC. (pág. 5).

## Errores de concepto frecuentes
Tratar el circuito de aire acondicionado y el de refrigeración del motor como sistemas totalmente aislados en el taller; el fallo en la disipación térmica de uno afecta directamente al rendimiento y a la presión del otro. (pág. 5).

---

```yaml
tipo: fundamento
titulo: Ciclo frigorífico con válvula de expansión
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "6"
relacionados: [compresor, condensador, filtro-deshidratador, valvula-expansion, evaporador]
palabras: [alta presión, baja presión, circuito cerrado, R134a, aceite de lubricación]
```

## Objeto
Describir el principio de funcionamiento y la división física de presiones del circuito de aire acondicionado accionado por compresor y regulado por válvula de expansión. (pág. 6).

## Fundamento
Todos los componentes del circuito se interconectan mediante mangueras flexibles y conductos de aluminio formando un sistema cerrado hermético por el que circulan, impulsados por el compresor, el gas refrigerante y una porción del aceite de lubricación. (pág. 6).

## Desarrollo
El circuito se divide en dos zonas bien diferenciadas de trabajo:
1. Zona de alta presión: comprendida entre la salida del compresor y la entrada a la válvula de expansión (incluye el condensador y el filtro deshidratante).
2. Zona de baja presión: comprendida entre la salida de la válvula de expansión y la aspiración del compresor (incluye el evaporador).

El compresor comprime el gas refrigerante elevando su temperatura y presión hacia el condensador, donde libera calor al exterior y se liquida. A continuación, el filtro deshidratante retiene impurezas y humedad. El refrigerante líquido entra en la válvula de expansión, donde se pulveriza e inyecta al evaporador, absorbiendo calor del aire del habitáculo al evaporarse antes de regresar al compresor en estado gaseoso. (pág. 6).

📷 IMAGEN: Esquema del circuito del refrigerante con válvula de expansión indicando las zonas de alta y baja presión — Fuente: Climatizacion basicos.pdf, pág. 6

## Valores de referencia
No documentado en fuentes. (pág. 6).

## Errores de concepto frecuentes
Considerar que solo circula refrigerante en el circuito; un porcentaje del aceite de lubricación del compresor circula continuamente arrastrado por el refrigerante a través de todas las tuberías y componentes. (págs. 6, 22).

---

```yaml
tipo: componente
titulo: Compresor de climatización
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "7, 20-33"
relacionados: [embrague-compresor, condensador, aceite-frigorifico, valvula-reguladora-compresor]
palabras: [compresor, aspiración, compresión, aceite especial, correa trapezoidal]
```

## Misión
Aspirar el gas refrigerante a baja presión y baja temperatura procedente del evaporador, comprimirlo y enviarlo a alta presión y alta temperatura hacia el condensador, garantizando además el flujo del aceite de lubricación por el circuito. (págs. 7, 20).

## Tipos y características
Accionado habitualmente por correa trapezoidal o estriada desde el motor térmico. Existen modelos con acoplamiento electromagnético y compresores variables sin embrague (de accionamiento externo con disco de arrastre, fusibles de sobrecarga de goma y válvula de regulación electrónica PWM). Internamente incorporan un lubricante sintético especial. (págs. 7, 20, 29).

## Principio de funcionamiento
Succiona el fluido frigorífico en estado gaseoso a baja temperatura y baja presión. Mediante el movimiento de sus componentes internos (pistones, plato oscilante, rotor o espirales scroll) incrementa la presión y temperatura del fluido, impulsándolo gaseoso hacia el condensador. (págs. 7, 20, 31).

## Valores de trabajo
- Presión de baja en funcionamiento normal: 0,5 a 3,0 bares (aprox. 2 bares constantes en compresores de potencia regulada).
- Presión de alta en funcionamiento normal: 6,0 a 25,0 bares.
- Giro manual pre-montaje: 10 vueltas para distribuir el aceite. (págs. 16, 18, 22).

## Anomalías frecuentes
Falta de estanqueidad en el retén del eje (anillo tórico) o en las juntas de carcasa, daños en rodamientos por exceso de tensión de correa, agarrotamiento de pistones por falta de lubricación/pérdida de refrigerante, y depósitos de virutas metálicas por desgaste interno. (págs. 7, 20, 24).

## Comportamiento en avería
Pérdida parcial o total de la capacidad de enfriamiento del aire, generación de ruidos anormales, presiones de alta y baja equilibradas (idénticas) con el compresor en marcha o registro de códigos de avería en la unidad de control de climatización. (págs. 20, 24).

## Cómo comprobarlo
1. Comprobar tensión y alineación de la correa de accionamiento.
2. Comprobar la presencia de alimentación eléctrica y estado de conectores.
3. Inspeccionar visualmente en busca de fugas de aceite o colorante.
4. Desmontar y purgar el aceite para inspeccionar su estado: si presenta tono grisáceo o virutas metálicas, el compresor está destruido internamente y exige lavado del circuito.
5. En compresores de regulación variable, medir la señal PWM con osciloscopio (5 V/div, 0,5 ms/div) evaluando la variación del ciclo de trabajo (aprox. 75% en demanda máxima de frío "Lo" y 0% en "Econ"). (págs. 20, 24, 30).

📷 IMAGEN: Despiece del compresor mostrando culata, pistón, plato oscilante, eje y válvula de admisión — Fuente: Climatizacion basicos.pdf, pág. 20

## Mantenimiento
Revisar el estado y tensión de la correa de transmisión. Sustituir obligatoriamente el filtro deshidratante, las juntas tóricas y la válvula de expansión al reemplazar el compresor. Antes de la instalación, ajustar la cantidad exacta y viscosidad del aceite según especificación del fabricante y girar el eje a mano 10 veces. (págs. 16, 22).

---

```yaml
tipo: componente
titulo: Condensador
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "8-9"
relacionados: [compresor, filtro-deshidratador, electroventilador-condensador]
palabras: [condensador, disipación de calor, cambio de estado, tubos y láminas, multiflujo]
```

## Misión
Enfriar el gas refrigerante sobrecalentado procedente del compresor mediante la disipación de calor al aire exterior, provocando el cambio de estado del refrigerante de gaseoso a líquido. (págs. 8-9).

## Tipos y características
Intercambiador de calor ubicado en el frontal del vehículo. Existen constructivamente modelos de tubos y láminas, serpentín y de flujo paralelo (multiflujo). (págs. 8, 37).

## Principio de funcionamiento
El gas refrigerante a alta presión y alta temperatura entra por la toma superior del condensador. Al circular por sus tuberías y láminas, transfiere su calor al aire exterior forzado por la marcha o el electroventilador, enfriándose hasta condensar y abandonar el componente en estado líquido por la toma inferior. (págs. 8-9).

## Valores de trabajo
No documentado en fuentes. (págs. 8-9).

## Anomalías frecuentes
Fugas de refrigerante por impactos de gravilla o accidentes frontales, corrosión, y obstrucción externa de las láminas por suciedad, insectos o barro. (págs. 8-9).

## Comportamiento en avería
Rendimiento deficiente de refrigeración, fallo completo del aire acondicionado, presiones de alta excesivamente elevadas y funcionamiento ininterrumpido del electroventilador del condensador. (págs. 8-9).

## Cómo comprobarlo
1. Inspección visual externa de láminas y tuberías para detectar deformaciones, suciedad o fugas.
2. Comprobación de estanqueidad mediante detector electrónico o gas formier.
3. Medición de presiones en alta y baja presión con el equipo conectado. (págs. 8-9).

## Mantenimiento
Limpieza periódica externa de la superficie de las láminas con aire o agua a baja presión (sin aplicar limpiadores de vapor directos sobre las aletas). En caso de lavado interno tras fallo de compresor, los modelos de flujo paralelo (multiflujo) no se pueden lavar con garantía y deben ser sustituidos. (págs. 8, 14, 37).

---

```yaml
tipo: componente
titulo: Filtro deshidratante
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "9-10"
relacionados: [condensador, valvula-expansion, aceite-frigorifico]
palabras: [filtro deshidratante, agente secante, higroscópico, humedad, acumulador]
```

## Misión
Filtrar partículas y cuerpos extraños del refrigerante, absorber la humedad disuelta en el fluido y actuar como depósito de compensación y acumulación de refrigerante líquido frente a oscilaciones de presión. (págs. 9-10).

## Tipos y características
Denominado filtro deshidratante (instalado en el lado de alta presión tras el condensador) o acumulador (instalado en el lado de baja presión tras el evaporador en sistemas con estrangulador fijo). Contiene un agente secante altamente higroscópico y una almohadilla filtrante interna. (págs. 9-10).

## Principio de funcionamiento
El refrigerante líquido entra por la parte superior, atraviesa la almohadilla filtrante y la masa granulada del agente secante, reteniendo el agua y las impurezas sólidas, y sale en estado líquido hacia la válvula de expansión. La parte superior actúa como volumen de amortiguación de presión. (págs. 9-10).

## Valores de trabajo
Contiene un 10% de la cantidad total de aceite de lubricación del sistema. (pág. 22).

## Anomalías frecuentes
Saturación del agente secante por exceso de humedad, envejecimiento natural, descomposición de la almohadilla filtrante interna con liberación de silicato al circuito, y fugas en sus racores de empalme. (págs. 9-10, 15).

## Comportamiento en avería
Disminución drástica o pérdida total de la potencia de refrigeración, formación de hielo sobre el propio filtro deshidratante por obstrucción interna, y congelación de la válvula de expansión por presencia de agua libre en el circuito. (págs. 9-10, 32).

## Cómo comprobarlo
1. Comprobar la fecha del último reemplazo (intervalo recomendado de 2 años).
2. Tocar los tubos de entrada y salida: si existe una diferencia acusada de temperatura entre entrada y salida, el filtro se halla obstruido internamente.
3. Inspeccionar visualmente racores y cuerpo en busca de fugas o corrosión. (págs. 9-10).

## Mantenimiento
Sustituir obligatoriamente cada 2 años o cada vez que se abra el circuito frigorífico por reparación. (págs. 10, 15).

---

```yaml
tipo: componente
titulo: Válvula de expansión
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "10-11"
relacionados: [evaporador, filtro-deshidratador, compresor]
palabras: [válvula de expansión, dosificación, alta presión, baja presión, bulbo termostático]
```

## Misión
Separar el lado de alta presión del lado de baja presión, dosificando y regulando la cantidad de refrigerante líquido inyectado al evaporador en función de la temperatura de salida de este para lograr la máxima eficiencia de enfriamiento y evitar el retorno de líquido al compresor. (págs. 10-11).

## Tipos y características
Existen válvulas de expansión termostáticas (bloque o con tubo capilar) y tubos con orificio fijo (estrangulador o tubo de mariposa). (págs. 10, 18).

## Principio de funcionamiento
El refrigerante líquido a alta presión entra en la válvula y es forzado a pasar por un estrechamiento (orificio de expansión), sufriendo una caída brusca de presión que causa su atomización y enfriamiento antes de entrar al evaporador. Un elemento termostático sensible a la temperatura del gas a la salida del evaporador ajusta mecánicamente el paso de la aguja: si la temperatura sube, la válvula abre aumentando el caudal; si la temperatura baja, reduce el paso. (págs. 10-11).

## Valores de trabajo
Prohibido manipular el ajuste de fábrica de su tornillo de regulación. (pág. 14).

## Anomalías frecuentes
Obstrucción o bloqueo por suciedad/virutas del compresor, congelación del orificio por presencia de humedad en el fluido, y pérdida de carga en el elemento termostático. (págs. 10-11, 25).

## Comportamiento en avería
Si la válvula queda bloqueada en posición cerrada: falta de rendimiento, presión de baja muy baja o en vacío y alta presión elevada. Si se queda bloqueada abierta: baja presión excesivamente alta, falta de enfriamiento y riesgo de entrada de refrigerante líquido al compresor. (págs. 10-11, 18, 32).

## Cómo comprobarlo
1. Medición de presiones en alta y baja presión con el equipo en marcha.
2. Medición de temperatura con termómetro en las tuberías de entrada y salida de la válvula.
3. Inspección acústica y comprobación de ausencia de fugas en sus conexiones. (págs. 10-11).

## Mantenimiento
La válvula de expansión no es lavable; si se contamina con virutas o suciedad tras una avería de compresor, debe ser reemplazada. No modificar en ningún caso el ajuste de fábrica del tornillo de regulación. (págs. 14, 16, 22).

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "11-12"
relacionados: [valvula-expansion, ventilador-habitaculo, filtro-deshidratador]
palabras: [evaporador, calor latente, deshumidificación, habitáculo, agua condensada]
```

## Misión
Absorber el calor del aire destinado al habitáculo mediante la evaporación del refrigerante líquido inyectado a baja presión, enfriando y deshumidificando el aire entrante. (págs. 11-12).

## Tipos y características
Intercambiador de calor de tubos y aletas de aluminio situado en la unidad climática del habitáculo. Alberga una gran superficie de transferencia térmica y un canal de recogida de condensados. (págs. 11-12).

## Principio de funcionamiento
El refrigerante líquido pulverizado a baja presión entra en el evaporador. Al atravesar sus conductos, absorbe el calor del aire que la turbina del habitáculo hace pasar a través de sus aletas externas. Al calentarse, el refrigerante hierve y se transforma íntegramente en gas antes de salir hacia el compresor. La humedad presente en el aire se condensa sobre las aletas frías y se evacúa al exterior. (págs. 11-12).

## Valores de trabajo
- Alberga un 20% de la cantidad total de aceite de lubricación del sistema. (pág. 22).
- Temperatura del aire en tobera media con el equipo a máxima potencia: 3 a 8 ºC. (pág. 17).

## Anomalías frecuentes
Obstrucción o acumulación de suciedad en las aletas externas, pérdidas de estanqueidad (fugas) por corrosión o vibraciones, e infección por microorganismos, hongos y bacterias que generan malos olores. (págs. 4, 11-12, 72).

## Comportamiento en avería
Rendimiento de refrigeración deficiente, imposibilidad de enfriar el habitáculo, caudal de aire de ventilación reducido por aletas tupidas y presencia de humedad o malos olores en el interior. (págs. 11-12).

## Cómo comprobarlo
1. Comprobar la temperatura del aire en la tobera central (debe situarse entre 3 y 8 ºC).
2. Medir presiones de trabajo en alta y baja presión con motor entre 2.000 y 2.500 rpm.
3. Medir la diferencia de temperatura entre el tubo de entrada y el de salida del evaporador.
4. Inspeccionar la presencia de fugas de refrigerante/colorante mediante detector electrónico en el drenaje de condensados. (págs. 12, 17).

## Mantenimiento
Desinfección periódica del evaporador mediante tratamiento antiséptico/vaporizador para eliminar la colonia de bacterias y microorganismos. Sustituir el filtro de habitáculo cada 12 meses. (págs. 4, 72).

---

```yaml
tipo: componente
titulo: Presostato e interruptor trinario
entidad: presostato
area: climatizacion
sistema: control-climatizacion
fuente: "Climatizacion basicos.pdf"
paginas: "12-13"
relacionados: [compresor, embrague-compresor, electroventilador-condensador]
palabras: [presostato, interruptor trinario, alta presión, baja presión, desconexión de seguridad]
```

## Misión
Proteger el sistema de climatización frente a presiones de trabajo peligrosamente altas o insuficientemente bajas y gestionar la activación del electroventilador del condensador para garantizar la condensación del fluido. (págs. 12-13).

## Tipos y características
Presostatos simples (de alta o baja presión) o interruptores trinarios (combinan en una única ampolla el contacto de baja presión, el de alta presión y el contacto de conmutación del ventilador). (págs. 12-13).

## Principio de funcionamiento
Instalado por lo general en la tubería del lado de alta presión. Si la presión sube excesivamente (26-33 bar) o desciende por debajo del límite mínimo por fuga (aprox. 2 bar), abre sus contactos interrumpiendo la alimentación eléctrica hacia el acoplamiento magnético del compresor. Su tercer contacto conmuta el circuito eléctrico del electroventilador del condensador al alcanzar el umbral de presión intermedia. (págs. 12-13).

## Valores de trabajo
- Umbral de desconexión por alta presión: 26 a 33 bares (reconexión al descender a aprox. 5 bares).
- Umbral de desconexión por baja presión: aprox. 2 bares. (págs. 12-13).

## Anomalías frecuentes
Fallo o sulfatación en los contactos eléctricos internos, suciedad acumulada en el puerto de toma de presión, y grietas en la carcasa producidas por vibraciones. (págs. 12-13).

## Comportamiento en avería
Fallo completo de funcionamiento del aire acondicionado, desacoplamiento y acoplamiento continuo y errático del embrague del compresor, o inactividad del electroventilador del condensador produciendo sobrepresiones. (págs. 12-13).

## Cómo comprobarlo
1. Inspección visual del enchufe y conector eléctrico.
2. Medición de continuidad eléctrica en los contactos según la presión real medida en la instalación con manómetros.
3. Prueba del componente desmontado aplicando presión controlada mediante botella de nitrógeno con manorreductor y comprobando la conmutación de contactos con multímetro. (págs. 12-13).

## Mantenimiento
Verificación del apriete del conector y sustitución de la junta tórica en el racor al desmontar. (págs. 12-13).

---

```yaml
tipo: componente
titulo: Ventilador del condensador
entidad: electroventilador-condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "13"
relacionados: [condensador, presostato, compresor]
palabras: [ventilador del condensador, refrigeración forzada, condensación, flujo de aire]
```

## Misión
Proporcionar un flujo forzado de aire a través del condensador cuando el vehículo se encuentra al ralentí o a baja velocidad, asegurando la disipación térmica necesaria para la licuación del refrigerante. (pág. 13).

## Tipos y características
Soplante accionado por motor eléctrico, montado como conjunto independiente o combinado con el sistema de refrigeración del motor, situado por delante o por detrás del condensador. (pág. 13).

## Principio de funcionamiento
Se activa eléctricamente por orden de la unidad de control o del presostato/interruptor trinario cuando el aire acondicionado está conectado o al detectarse un incremento de la presión en el lado de alta presión, haciendo pasar aire fresco exterior entre las láminas del condensador. (págs. 12-13).

## Valores de trabajo
No documentado en fuentes. (pág. 13).

## Anomalías frecuentes
Quemado del motor eléctrico, desgaste de escobillas, fallo en el relé de excitación o resistencia previa, y rotura o agarrotamiento de los álabes del ventilador. (págs. 13, 17).

## Comportamiento en avería
El refrigerante no logra condensarse correctamente, produciendo un disparo de la alta presión en la instalación, pérdida drástica de la potencia de frío al estar el vehículo parado o a baja velocidad, y ruidos anómalos. (págs. 8, 13, 28).

## Cómo comprobarlo
1. Verificación de la rotación libre manual de las palas del ventilador con el motor parado.
2. Comprobación de la presencia de tensión de alimentación (+12 V) y masa en su conector al activar el climatizador.
3. Verificar el cierre del contacto del presostato trinario que demanda su puesta en marcha. (págs. 12, 17).

## Mantenimiento
Comprobar periódicamente que no existen cuerpos extraños que bloqueen el giro del ventilador. (págs. 13, 28).

---

```yaml
tipo: diagnostico
titulo: Diagnosis de averías mediante lectura de presiones de manómetros
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "Climatizacion basicos.pdf"
paginas: "17-19, 32-33"
relacionados: [compresor, valvula-expansion, condensador, filtro-deshidratador]
palabras: [manómetros, baja presión, alta presión, diagnóstico por presiones, falta de refrigerante]
```

## Síntoma
Insuficiente o nulo rendimiento de refrigeración en el habitáculo (temperatura en tobera central superior a 8 ºC). (pág. 17).

## Causas posibles
1. BP alta y AP alta: Condensador sucio, electroventilador averiado, sobrecarga de refrigerante o motor sobrecalentado.
2. BP baja y AP baja: Falta/fuga de gas refrigerante en el circuito.
3. BP alta y AP baja: Válvula de expansión bloqueada abierta o compresor defectuoso (pérdida de estanqueidad/compresión interna).
4. BP igual a AP (presiones equilibradas con compresor conectado): Compresor defectuoso, falta total de refrigerante o fallo eléctrico de activación del embrague/válvula PWM.
5. BP variable y AP variable: Presencia de humedad en la instalación o válvula de expansión defectuosa. (págs. 18-19, 32-33).

## Cómo separar las causas
1. Conectar la estación de diagnosis con puente de manómetros a las tomas de servicio de alta y baja presión.
2. Arrancar el motor, ajustar el climatizador a máxima potencia de frío con ventilación media y mantener el régimen entre 2.000 y 2.500 rpm.
3. Leer los valores estabilizados en los relojes de baja presión (BP) y alta presión (AP).
4. Si BP es baja y AP es baja: realizar prueba de estanqueidad con nitrógeno o gas formier para confirmar fuga antes de recargar.
5. Si BP es alta y AP es baja: purgar el aceite del compresor; si el aceite muestra partículas metálicas o tono grisáceo, el compresor está destruido internamente y requiere sustitución y lavado del circuito. Si el aceite es limpio, verificar el estado de la válvula de expansión.
6. Si BP es alta y AP es alta: rociar agua sobre el condensador; si la alta presión desciende inmediatamente, el fallo está en la suciedad del condensador o en la falta de caudal del electroventilador. (págs. 17-19, 24, 32-33).

## Valores de referencia
Condiciones de medición: motor entre 2.000 y 2.500 rpm, climatizador a máxima potencia de frío.
- Baja presión (BP) en sistema con válvula de expansión: 0,5 a 3,0 bares.
- Baja presión (BP) en compresor de potencia regulada: aprox. 2,0 bares constantes.
- Alta presión (AP): 6,0 a 25,0 bares.
- Temperatura del aire de salida en tobera central: 3 a 8 ºC. (págs. 17-18).

## Verificación tras la reparación
Con la cantidad exacta de refrigerante y aceite cargados, poner el sistema en marcha a máxima potencia y confirmar que la baja presión se sitúa en torno a 2 bares, la alta presión en rango normal (6-25 bar) y la temperatura en tobera media desciende entre 3 y 8 ºC. (pág. 17).

COBERTURA: documento «Climatizacion basicos.pdf», páginas 1 a 33 de 75. [queda pendiente desde la página 34]