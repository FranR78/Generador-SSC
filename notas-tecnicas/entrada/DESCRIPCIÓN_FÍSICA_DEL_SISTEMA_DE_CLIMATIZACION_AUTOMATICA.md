### **NOTA DE PROCESO — ARQUITECTURA Y DISTRIBUCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACIÓN AUTOMÁTICA / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar la distribución física en tres entornos (compartimento motor, conjunto de distribución de trampillas e interior del salpicadero) y la interconexión por haces de cables en un sistema de climatización automática.

**2. FUNDAMENTO**  
El sistema distribuye sus componentes en tres áreas físicas interconectadas para gestionar el circuito frigorífico de alta presión, el intercambio térmico de aire caliente/frío y la interfaz de control de usuario. La interacción continua entre los calculadores y los sensores de los tres entornos permite mantener las condiciones de confort en el habitáculo.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema general con la unión de los tres entornos del sistema de climatización — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 5  
- **Entorno 1 — Compartimento motor:** Aloja los elementos de alta presión del circuito de aire acondicionado (condensador, compresor, filtro deshidratante y presostato) y los calculadores electrónicos (ECM y BSI).  
- **Entorno 2 — Conjunto de distribución de trampillas:** Mueble alojado en el interior del salpicadero donde se encuentran el radiador de calefacción, la resistencia PTC, el evaporador, el filtro de habitáculo, el impulsor de aire (GMV) y los micromotores actuadores.  
- **Entorno 3 — Tablero de mandos:** Situado en la consola central del salpicadero; aloja la centralita de climatización y los mandos de interfaz de usuario.  
- **Interconexión:** Dos haces de cables principales conectan la centralita del salpicadero con el conjunto de trampillas y con el compartimento motor.

**6. VALORES DE REFERENCIA**  

| Parámetro / Entorno | Componentes alojados | Condiciones de validez |
|---|---|---|
| **Compartimento motor** | **Alta presión (condensador, compresor, filtro, presostato) y calculadores (ECM, BSI)** | Circuito de alta presión e integración electrónica del vano |
| **Distribución de trampillas** | **Evaporador, radiador de calefacción, PTC, GMV, filtro y micromotores** | Salpicadero interior |
| **Tablero de mandos** | **Centralita A/C y panel de control de usuario** | Consola central |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Diagnosticar componentes de forma aislada sin considerar la comunicación entre la centralita A/C, el calculador ECM y la BSI. Una simple discontinuidad en un haz de cables o en una sonda provoca el mal funcionamiento del modo automático.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — COMPRESOR Y EMBRAGUE ELECTROMAGNÉTICO**
UBICACIÓN: Compartimento motor, fijado al bloque y arrastrado por la correa del alternador desde el cigüeñal.  
APLICACIÓN: Lado de alta presión del circuito de aire acondicionado.

**1. MISIÓN**  
Elevar la presión del fluido refrigerante y hacerlo circular por el circuito frigorífico. El embrague electromagnético pone en contacto la polea con el compresor para transmitir el movimiento del motor cuando se requiere refrigeración.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
La polea recibe movimiento continuo de la correa del alternador accionada por el cigüeñal del motor. Al recibir corriente, el embrague electromagnético acopla mecánicamente la polea al eje del compresor, iniciando la compresión del fluido hacia el condensador. En compresores de cilindrada fija, la centralita interrumpe la alimentación del embrague si la sonda del evaporador detecta riesgo de congelación.

**3. CARACTERÍSTICAS**  
Componente mecánico de compresión de alta presión dotado de polea de arrastre y acoplamiento electromagnético.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Desgaste o avería eléctrica del embrague electromagnético que impide el acoplamiento de la polea.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no gira y el fluido no circula, por lo que el sistema no genera frío en el habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CONDENSADOR**
UBICACIÓN: Compartimento motor.  
APLICACIÓN: Lado de alta presión del circuito de aire acondicionado.

**1. MISIÓN**  
Ceder al aire exterior el calor extraído del habitáculo y disipar la energía del fluido refrigerante comprimido a alta presión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El fluido frigorífico a alta presión y temperatura procedente del compresor atraviesa las canalizaciones del condensador. El flujo de aire generado por la marcha del vehículo o por el grupo motoventilador (GMV) enfría el fluido, provocando su cambio de estado y condensación.

**3. CARACTERÍSTICAS**  
Intercambiador de calor metálico situado en la zona de alta presión del vano motor.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Deficiente disipación de calor que eleva la presión del fluido en el compartimento motor y reduce el rendimiento del sistema.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — FILTRO DESHIDRATANTE**
UBICACIÓN: Compartimento motor, en la línea de alta presión.  
APLICACIÓN: Circuito de alta presión de aire acondicionado.

**1. MISIÓN**  
Retener las impurezas sólidas y absorber la humedad presente en el fluido frigorífico para proteger los componentes del circuito.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El fluido a alta presión circula por el interior del recipiente, donde atraviesa un elemento filtrante y un compuesto desecante que absorbe las trazas de agua antes de que continúe hacia el habitáculo.

**3. CARACTERÍSTICAS**  
Filtro metálico cilíndrico intercalado en la parte de alta presión del vano motor.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Saturación del material desecante o taponamiento por impurezas.

**6. COMPORTAMIENTO EN AVERÍA**  
Restricción al paso de fluido que altera la circulación y las presiones en el circuito frigorífico.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — PRESOSTATO DE PRESIÓN DE FLUIDO**
UBICACIÓN: Compartimento motor, montado en la línea de alta presión.  
APLICACIÓN: Sistema de seguridad y regulación de la climatización automática.

**1. MISIÓN**  
Medir la presión del fluido frigorífico en la zona de alta presión e informar a la centralita para proteger el circuito y gestionar el grupo motoventilador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El sensor reacciona a la presión ejercida por el fluido en el vano motor, modificando una señal eléctrica hacia los calculadores (ECM/BSI/centralita) para cortar el compresor o activar el grupo motoventilador (GMV) si la presión sale de los márgenes seguros.

**3. CARACTERÍSTICAS**  
Captador de presión provisto de conexión hidráulica al circuito y conector eléctrico.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Avería interna del sensor o fallos en las conexiones eléctricas.

**6. COMPORTAMIENTO EN AVERÍA**  
La centralita interrumpe el funcionamiento del compresor por seguridad o no activa el grupo motoventilador adecuadamente.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CALCULADOR ECM Y CENTRALITA BSI / CLIMATIZACIÓN**
UBICACIÓN: Compartimento motor (ECM) y salpicadero/tablero de mandos (BSI y centralita de climatización).  
APLICACIÓN: Gestión electrónica integrada de motor y climatización automática.

**1. MISIÓN**  
Procesar la información de las sondas, presostatos y consignas del usuario para gobernar los actuadores de las trampillas, el compresor y la ventilación.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El calculador de inyección (ECM) intercambia datos de temperatura y régimen con la centralita de climatización y el calculador BSI. Con estas señales calcula la activación del compresor, la velocidad del GMV y la posición de los micromotores de repartición y mezcla.

**3. CARACTERÍSTICAS**  
Centralitas electrónicas con microprocesador interconectadas por haces de cables principales.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Daños en la electrónica por sobretensiones originadas en el potenciómetro/módulo electrónico del electroventilador.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida del modo automático o inoperatividad total del sistema de climatización.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — RADIADOR DE CALEFACCIÓN**
UBICACIÓN: Conjunto de distribución de trampillas, dentro del mueble del salpicadero.  
APLICACIÓN: Sistema de calefacción del habitáculo.

**1. MISIÓN**  
Ceder calor al aire entrante al habitáculo utilizando la energía térmica del líquido refrigerante del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Parte del caudal de líquido refrigerante del motor se desvía hacia el radiador de calefacción. El aire impulsado atraviesa sus aletas, absorbiendo el calor del refrigerante caliente antes de salir por los difusores.

**3. CARACTERÍSTICAS**  
Intercambiador térmico de agua/aire integrado en el mueble de trampillas. El circuito de refrigeración del motor está dimensionado contando con la disipación de este radiador.

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Indicación técnica | Condiciones de validez |
|---|---|---|
| **Circulación de refrigerante** | **No se debe anular la circulación** | El circuito del motor está dimensionado contando con la disipación del radiador |

**5. ANOMALÍAS FRECUENTES**  
Obstrucción interna por sedimentos o fugas de líquido refrigerante.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de calefacción en el habitáculo o alteración en la disipación térmica del motor si se anula su paso.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — RESISTENCIA DE CALEFACCIÓN ELÉCTRICA (PTC)**
UBICACIÓN: Conjunto de distribución de trampillas, junto al radiador de calefacción.  
APLICACIÓN: Vehículos con motores de inyección directa de gasóleo.

**1. MISIÓN**  
Aportar calefacción inmediata al habitáculo durante los primeros minutos de marcha mientras el motor alcanza la temperatura de servicio.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Al arrancar en frío, la centralita alimenta eléctricamente los elementos calefactores PTC. El aire impulsado se calienta al pasar a través de la resistencia sin depender de la temperatura del líquido refrigerante.

**3. CARACTERÍSTICAS**  
Resistencia de caldeo eléctrico de coeficiente de temperatura positivo (PTC).

**4. VALORES DE TRABAJO**  

| Parámetro | Tiempo de aplicación | Condiciones de validez |
|---|---|---|
| **Aporte de calefacción** | **Primeros minutos tras el arranque en frío** | Motores de inyección directa de gasóleo |

**5. ANOMALÍAS FRECUENTES**  
Fallo de los elementos calefactores o del circuito de alimentación eléctrica.

**6. COMPORTAMIENTO EN AVERÍA**  
El aire sale frío durante los primeros minutos de funcionamiento en motores diésel de inyección directa.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — EVAPORADOR**
UBICACIÓN: Conjunto de distribución de trampillas, en el interior del salpicadero.  
APLICACIÓN: Órgano productor de frío en el circuito de aire acondicionado.

**1. MISIÓN**  
Absorber el calor del aire entrante al habitáculo para enfriarlo y deshumidificarlo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El fluido frigorífico procedente del circuito de baja presión entra en el evaporador. Al ebullir en su interior, absorbe el calor del aire impulsado por el GMV (previamente filtrado), enfriándolo antes de que llegue a los difusores.

**3. CARACTERÍSTICAS**  
Intercambiador térmico de fluido/aire de baja presión situado en el mueble de distribución.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Formación de hielo en las aletas si la temperatura desciende en exceso sin cortar el compresor.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de producción de frío o bloqueo del paso de aire por congelación del evaporador.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — FILTRO DEL HABITÁCULO**
UBICACIÓN: Entrada del conjunto de distribución de trampillas, antes del evaporador.  
APLICACIÓN: Filtrado del aire de ventilación e higiene del habitáculo.

**1. MISIÓN**  
Filtrar el aire entrante del exterior para retener polvo, polen y partículas antes de que pase por el evaporador e ingrese al habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El caudal de aire impulsado se fuerza a pasar a través del elemento filtrante, reteniendo mecánicamente las impurezas en su entramado de fibras.

**3. CARACTERÍSTICAS**  
Cartucho filtrante colocado en la canalización de admisión del mueble de distribución.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Saturación y colmatación por acumulación de suciedad.

**6. COMPORTAMIENTO EN AVERÍA**  
Reducción del caudal de aire impulsado por los difusores y malos olores en el habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — IMPULSOR DE AIRE (GMV) Y MÓDULO ELECTRÓNICO DE VELOCIDAD**
UBICACIÓN: Conjunto de distribución de trampillas.  
APLICACIÓN: Ventilación y circulación forzada del aire en la climatización.

**1. MISIÓN**  
Impulsar el caudal de aire hacia el interior del habitáculo a la velocidad determinada por la consigna manual o automática del usuario.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El motor eléctrico hace girar la turbina. El módulo electrónico de velocidad (o potenciómetro) regula la corriente suministrada al motor para variar sus revoluciones según la orden enviada por la centralita o la rueda de selección.

**3. CARACTERÍSTICAS**  
Conjunto electromecánico formado por motor eléctrico, turbina centrífuga y módulo electrónico/potenciómetro de control de velocidad.

**4. VALORES DE TRABAJO**  

| Parámetro | Condición de funcionamiento |
|---|---|
| **Regulación de velocidad** | **Ajuste continuo según consigna manual o automática** |

**5. ANOMALÍAS FRECUENTES**  
Avería en el potenciómetro o módulo electrónico de velocidad.

**6. COMPORTAMIENTO EN AVERÍA**  
El impulsor no gira, se queda en una sola velocidad o genera una sobretensión peligrosa para la integridad de la centralita.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDA DE TEMPERATURA DEL EVAPORADOR**
UBICACIÓN: Ubicada en la parte más fría del evaporador, dentro del conjunto de distribución de trampillas.  
APLICACIÓN: Protección anti-hielo del evaporador en sistemas con compresor de cilindrada fija.

**1. MISIÓN**  
Medir la temperatura del evaporador para evitar la formación de hielo en su superficie.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Captador térmico que transmite su señal a la centralita. Si la temperatura medida cae por debajo de la temperatura de formación de hielo, la centralita corta el funcionamiento del compresor (en sistemas de cilindrada fija).

**3. CARACTERÍSTICAS**  
Sonda NTC de varilla alojada en el núcleo del evaporador.

**4. VALORES DE TRABAJO**  

| Condición de disparo | Acción del sistema |
|---|---|
| **Temperatura desciende de 0 ºC (formación de hielo)** | **Corte del compresor por la centralita** (en cilindrada fija) |

**5. ANOMALÍAS FRECUENTES**  
Corte o interrupción del cable de la sonda.

**6. COMPORTAMIENTO EN AVERÍA**  
Funcionamiento incorrecto del sistema en modo automático o congelación del evaporador por no cortar a tiempo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDAS DE TEMPERATURA DE SALIDA DE DIFUSORES (CENTRALES Y PIES)**
UBICACIÓN: Conductos de salida del aire hacia los difusores centrales y hacia los difusores de los pies en el mueble de trampillas.  
APLICACIÓN: Regulación de la mezcla de aire y bucle de control de la temperatura de consigna.

**1. MISIÓN**  
Medir la temperatura real del aire que sale por los difusores centrales y de los pies para verificar el correcto funcionamiento de las trampillas de mezcla.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Envían señales de temperatura a la centralita. Junto con los datos de las sondas de temperatura exterior e interior, la centralita calcula las correcciones sobre los actuadores de las trampillas para alcanzar la temperatura seleccionada por el usuario.

**3. CARACTERÍSTICAS**  
Sondas térmicas de medición directa instaladas en las canalizaciones de aire.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Corte eléctrico o descalibración de la sonda.

**6. COMPORTAMIENTO EN AVERÍA**  
La centralita no puede regular con precisión la mezcla de aire caliente/frío, provocando fallos en el modo automático.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — MICROMOTORES ACTUADORES DE TRAMPILLAS (MEZCLA, REPARTICIÓN Y RECIRCULACIÓN)**
UBICACIÓN: Fijados sobre la carcasa del conjunto de distribución de trampillas.  
APLICACIÓN: Mover las trampillas de mezcla (izq/der), repartición de aire y recirculación.

**1. MISIÓN**  
Posicionar mecánicamente las trampillas internas para regular la temperatura, la salida del aire y la entrada de aire exterior o recirculado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Pequeños motores eléctricos reductores que reciben impulsos o órdenes eléctricas de la centralita. Modifican la orientación de las trampillas de mezcla izquierda y derecha, repartición a pies/frontal y trampilla de recirculación.

**3. CARACTERÍSTICAS**  
Servomotores eléctricos (micromotor mezcla izq, micromotor mezcla der, micromotor de repartición/distribución, motor de recirculación).

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Avería interna del motor o rotura de los engranajes de accionamiento de la trampilla.

**6. COMPORTAMIENTO EN AVERÍA**  
Bloqueo de la distribución de aire, imposibilidad de regular la temperatura en un lado (en bizona) o fallo de la recirculación.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — TABLERO DE MANDOS Y CENTRALITA BIZONA**
UBICACIÓN: Consola central del salpicadero.  
APLICACIÓN: Interfaz de usuario y unidad de control del climatizador de regulación independiente (bizona).

**1. MISIÓN**  
Permitir al usuario la selección de parámetros de confort e integrar la centralita de control que procesa el sistema.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Recibe la información de la botonera (dos teclas AUTO bizona, selector único de caudal por rueda, tecla A/C, tecla recirculación, desempañado rápido y luneta trasera) y los datos de los dos haces de cables principales. Procesa los algoritmos de confort y envía órdenes a los actuadores y al compartimento motor.

**3. CARACTERÍSTICAS**  
Módulo de control con pantalla de visualización y botones de mando para regulación independiente conductor/acompañante.  
📷 IMAGEN: Panel del tablero de mandos de un climatizador automático bizona — Fuente: DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF, pág. 3

**4. VALORES DE TRABAJO**  

| Parámetro | Configuración de mando |
|---|---|
| **Regulación de temperatura / distribución** | **Independiente para conductor y acompañante** (dos teclas AUTO) |
| **Regulación de caudal de aire** | **Única** (una sola rueda de selección de velocidad) |

**5. ANOMALÍAS FRECUENTES**  
Daños mecánicos en los botones o fallos en el módulo electrónico interno por sobretensiones.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad de los mandos, falta de respuesta del display o fallo general del automatismo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CONTROL Y MANTENIMIENTO ANUAL DEL SISTEMA DE CLIMATIZACIÓN / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer la pauta de control periódico y mantenimiento preventivo para detectar anomalías y garantizar el correcto funcionamiento del climatizador automático tanto en invierno como en verano.

**2. FUNDAMENTO**  
Al ser un sistema complejo compuesto por tres entornos interconectados, cualquier fallo menor (como una sonda cortada o una deriva en el potenciómetro del impulsor) altera el funcionamiento automático o pone en riesgo la centralita por sobretensión.

**3. CONDICIONES PREVIAS**  
Vehículo con el sistema de climatización completo montado y encendido conectado.

**4. EQUIPO Y MATERIAL**  
Herramientas de diagnóstico de climatización.

**5. DESARROLLO**  
1. Realizar una inspección visual de las conexiones del compartimento motor y del mazo de cables del salpicadero.  
2. Comprobar el estado del filtro del habitáculo y sustituirlo si presenta suciedad o colmatación.  
3. Verificar el funcionamiento del impulsor (GMV) en todas sus velocidades y comprobar que el módulo electrónico no genere fluctuaciones anormales.  
4. Comprobar la respuesta en modo automático activando la tecla AUTO y modificando las consignas de temperatura bizona.  
5. Verificar el acoplamiento del compresor mediante la tecla A/C y evaluar el corte de seguridad.  
6. Probar la conmutación de la trampilla de recirculación y la función de desempañado rápido.  
7. Medir las temperaturas de salida en difusores centrales y de pies para confirmar la correcta regulación de los micromotores de mezcla.

**6. VALORES DE REFERENCIA**  

| Intervención / Frecuencia | Periodicidad recomendada |
|---|---|
| **Control de prestaciones del sistema** | **Cada año (tanto en invierno como en verano)** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Pasar por alto ruidos o anomalías en el módulo del electroventilador: puede derivar en una sobretensión que destruya la centralita de climatización.  
- Ignorar fallos de lectura en una sonda: desajusta por completo la lógica de regulación en modo automático.

**8. VERIFICACIÓN FINAL**  
Confirmar la ausencia de códigos de avería y verificar que el sistema alcance la temperatura de consigna deseada en ambos lados.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

COBERTURA: documento «DESCRIPCIÓN FÍSICA DEL SISTEMA DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 5 de 5. [completo]