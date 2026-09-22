### NOTA DE PROCESO — ARQUITECTURA Y LÓGICA DE CONTROL EN CLIMATIZACIÓN NO REGULADA (MANUAL) / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica el flujo de señales de entrada, la interconexión eléctrica y las condiciones de activación del compresor y ventiladores en sistemas de aire acondicionado manual sin climatizador electrónico. Aplica al diagnóstico de circuitos eléctricos de climatización no regulada.

**2. FUNDAMENTO**
Control por conmutación electromecánica directa y termostática sin unidad de cálculo centralizada de clima. Las señales de demanda del usuario, la sonda del evaporador y la alimentación eléctrica interactúan mediante relés para activar el embrague del compresor, el electroventilador de refrigeración (GMV) y el motor de reciclaje.

**3. CONDICIONES PREVIAS**
Tensión de batería disponible, contacto conectado (+15 / +30) y conmutador de ventilación del habitáculo posicionado en velocidad 1 o superior.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Modos y peticiones de señal:**
  - **A/A ON:** Demanda de puesta en marcha del aire acondicionado por parte del usuario mediante el pulsador. La UCE de motor incrementa el régimen de ralentí para compensar la carga mecánica antes del acoplamiento.
  - **A/A CICLO:** Demanda de puesta en marcha del compresor autorizada por el termostato del evaporador cuando su temperatura supera los 4 ºC.
  - **A/A AUT:** Autorización final de puesta en marcha emitida por la gestión electrónica del motor para asegurar la eficacia del compresor sin comprometer la estabilidad térmica del motor.
* **Flujo de señales en el circuito:**
  - El usuario acciona el conmutador de aire acondicionado y selecciona la velocidad de ventilación.
  - La corriente atraviesa el termostato del evaporador y el presostato tri-función de alta/baja presión.
  - Si las presiones y la temperatura del evaporador son correctas, el relé de climatización (Relé CA) se excita alimentando la bobina del embrague electromagnético del compresor y activando la 1.ª velocidad del electroventilador (GMV) de refrigeración.

📷 IMAGEN: Esquema sinóptico de entradas y salidas en climatización no regulada — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 3
📷 IMAGEN: Esquema general del circuito eléctrico de climatización manual sin unidad de funciones del motor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 5
📷 IMAGEN: Esquema general con unidad de control de funciones del motor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 7
📷 IMAGEN: Esquema general con gestión de inyección del motor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 9

**6. VALORES DE REFERENCIA**
| Condición de Señal | Umbral / Estado |
| :--- | :--- |
| Autorización por temperatura del evaporador (A/A CICLO) | Temperatura superior a 4 ºC |
| Condición de soplador de habitáculo | Seleccionado en velocidad 1, 2, 3 o 4 (en posición 0 no se autoriza A/A) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Si la temperatura del evaporador cae por debajo de 4 ºC, el termostato abre el circuito cortando A/A CICLO, lo cual interrumpe el compresor para prevenir la congelación de la condensación en el evaporador.
* Intentar encender el A/C con la turbina del habitáculo en posición 0; la línea eléctrica de excitación pasa a través del conmutador de ventilación.

**8. VERIFICACIÓN FINAL**
Verificar que al accionar el pulsador A/A con la ventilación encendida, el motor eleva levemente su régimen de ralentí, el relé CA conmuta y el acoplamiento magnético del compresor atrae su disco frontal.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — TERMOSTATO Y SONDA DE TEMPERATURA DEL EVAPORADOR
UBICACIÓN: Intercalado entre las aletas de aluminio del evaporador en el interior de la caja climática.
APLICACIÓN: Circuitos de aire acondicionado de climatización no regulada (manual).

**1. MISIÓN**
Informar al sistema de la temperatura del evaporador para cortar la alimentación del compresor cuando la temperatura se aproxima al punto de congelación del agua y autorizar su conexión solo cuando supera los 4 ºC.

**2. PRINCIPIO DE FUNCIONAMIENTO**
* **Termostato Mecánico:** Utiliza un tubo capilar lleno de fluido dilatatorio conectado a un fuelle. La fuerza de presión del fuelle (Fp) se opone a la fuerza de un muelle regulable (Fm). Al enfriarse el evaporador, disminuye Fp hasta que la palanca invierte su posición y abre el interruptor eléctrico desconectando el compresor.
* **Termostato Electrónico:** Emplea una sonda termostática NTC cuya resistencia disminuye con la temperatura. La resistencia NTC es evaluada por una centralita de mando electrónica o potenciómetro, la cual conmuta el relé del compresor mediante transistores.

**3. CARACTERÍSTICAS**
* **Variante Mecánica:** Compuesta por carcasa, fuelle, tubo capilar, muelle regulador, tornillo de ajuste con pomo, palanca e interruptor eléctrico (de 2 contactos o de 3 contactos con dispositivo de servicio).
* **Variante Electrónica:** Sonda termostática NTC de varilla/bulbo, potenciómetro de ajuste de consigna y centralita de mando electrónica (relé termostático).

**4. VALORES DE TRABAJO**
* Umbral de autorización de acoplamiento del compresor: Temperaturas superiores a 4 ºC en el evaporador.

**5. ANOMALÍAS FRECUENTES**
Fuga de fluido dilatatorio por fisura en el tubo capilar mecánico, deformación del muelle de tarado o derivación a masa/corte en la sonda NTC electrónica.

**6. COMPORTAMIENTO EN AVERÍA**
El compresor funciona ininterrumpidamente provocando la congelación total del evaporador y el bloqueo del paso de aire al habitáculo, o el compresor no se acopla en ningún momento.

**7. CÓMO COMPROBARLO**
En termostato mecánico: medir continuidad entre bornes sumergiendo el capilar en agua con hielo. En termostato electrónico: medir la resistencia NTC entre bornes de la sonda a temperatura ambiente y compararla con el valor de la gráfica de calibración.

📷 IMAGEN: Estructura interna de fuelle, capilar y palanca en termostato mecánico del evaporador — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 11
📷 IMAGEN: Esquema de conexiones de termostato de 2 y 3 contactos — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 13
📷 IMAGEN: Sonda termostática para evaporador — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 15
📷 IMAGEN: Conjunto de sonda termostática y centralita de mando electrónica — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 17
📷 IMAGEN: Componentes del termostato electrónico (centralita, potenciómetro y sonda) — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 19

---

### NOTA DE ELEMENTO — CONMUTADOR Y MANDOS DE AIRE ACONDICIONADO Y VENTILACIÓN
UBICACIÓN: Consola central del salpicadero, en el panel frontal de control.
APLICACIÓN: Cuadro de mando en climatizaciones manuales.

**1. MISIÓN**
Permitir la selección manual de la velocidad del electroventilador del habitáculo, la conexión del compresor de aire acondicionado y la conmutación de la trampilla de recirculación.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Conmutador rotativo o deslizante de pistas metálicas. Al girar el mando de ventilación, la corriente positiva (+15) pasa directamente a través de las resistencias R1, R2 y R3 para obtener las velocidades 1 (Low), 2 (Medium) y 3, o bien alimenta directamente la bobina del relé de 4.ª velocidad para conectar el motor a 12 V directos en la posición máxima (High).

**3. CARACTERÍSTICAS**
* Configuración a: Pulsador cilíndrico A/A.
* Configuración b: Pulsador rectangular de trampilla.
* Configuración c: Grupo de mandos único.
* Configuración d/e: Mandos combinados deslizantes y giratorios con reostato e interruptor de potencia.

**4. VALORES DE TRABAJO**
* Tensión de alimentación: 12 V (bajo contacto +15).
* Selección de posiciones: 0 (apagado), 1 (LOW), 2 (MEDIUM), 3 y 4 (HIGH).

**5. ANOMALÍAS FRECUENTES**
Fogueado de los contactos metálicos por sobrecorriente e intensidades elevadas, y deformación del soporte plástico por sobrecalentamiento.

**6. COMPORTAMIENTO EN AVERÍA**
Pérdida de funcionamiento de una o varias velocidades de la turbina del habitáculo o imposibilidad de mandar la señal de encendido al compresor.

**7. CÓMO COMPROBARLO**
Desconectar el conector y medir la continuidad con un polímetro en posición de óhmetro entre la vía de entrada (+12 V) y cada una de las vías de salida de velocidad (1, 2, 3, 4) al conmutar la posición del mando.

📷 IMAGEN: Variantes constructivas de pulsadores y grupos de mandos de climatización — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 21
📷 IMAGEN: Pulsador de trampilla de recirculación y mando combinado de marcha/recirculación — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 23
📷 IMAGEN: Detalle del conmutador de mando y reostato del electroventilador centrífugo — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 25
📷 IMAGEN: Esquema eléctrico básico de conexión entre conmutador, reostato, presostato y compresor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 29

---

### NOTA DE PROCESO — ESTRATEGIA DE CORTE TEMPORIZADO DEL COMPRESOR EN MOTORIZACIÓN DIÉSEL / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica el funcionamiento del circuito de desconexión temporal del compresor al iniciar la marcha en pendiente para optimizar el par del motor diésel y evitar el calado. Aplica a versiones diésel con climatizador manual.

**2. FUNDAMENTO**
Liberación temporal de la carga mecánica impuesta por el compresor al motor térmico durante un intervalo de 4 segundos cuando se detecta simultáneamente el pedal de embrague pisado a fondo y una elevada demanda de carga sobre el pedal del acelerador.

**3. CONDICIONES PREVIAS**
Vehículo en fase de arranque en rampa o aceleración fuerte desde parado, con el pedal de embrague pisado a fondo y carga de inyección elevada.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
1. Al pisar el pedal de embrague a fondo y acelerar, se abre el contacto del pedal de embrague 421 y el contactor 405 en la palanca de carga de la bomba de inyección.
2. Al abrirse el circuito, se corta la alimentación a la bobina del relé 661.
3. El relé 661 deja de alimentar al relé temporizado 635.
4. El relé temporizado 635 interrumpe la excitación del relé 584 (relé del embrague del compresor) durante un periodo fijo de 4 segundos.
5. El embrague del compresor 171 se desacopla, permitiendo al motor subiendo de vueltas con mayor facilidad.
6. Transcurridos los 4 segundos, el relé 635 restablece la alimentación al relé 584 y el compresor vuelve a acoplarse.
7. La línea incluye un diodo que impide que la tensión de la unidad de pre-postcalentamiento 257 alimente por retorno el embrague del compresor durante la fase de arranque y calentamiento del motor.

📷 IMAGEN: Esquema del circuito de corte temporizado de A/A en motorización diésel — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 37
📷 IMAGEN: Cableado y relés interconectados en el circuito diésel — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 45

**6. VALORES DE REFERENCIA**
| Componente / Parámetro | Valor y Especificación |
| :--- | :--- |
| Tiempo de corte del compresor por temporizador 635 | 4 segundos tras cumplir condiciones de carga y embrague |
| Contactor en pedal de embrague 421 | En reposo (pie levantado/embragado): normalmente cerrado. No requiere reglaje. |
| Relé temporizado de prohibición de embragado | Componente 635 |
| Relé del embrague del compresor | Componente 584 |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Intentar regular mecánicamente el contactor 421 del pedal de embrague; no admite reglaje, solo debe comprobarse que está cerrado con el pie levantado.
* Si el compresor se acopla intermitentemente durante la marcha, comprobar si el contactor 405 de la bomba de inyección está mal posicionado o desgastado.

**8. VERIFICACIÓN FINAL**
Verificar con un voltímetro conectado en el relé 584 que la alimentación cae a 0 V durante exactamente 4 segundos al accionar a fondo el pedal de embrague y acelerar.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — LÓGICA Y SECUENCIA DE CONMUTACIÓN DE ELECTROVENTILADORES (GMV) DE REFRIGERACIÓN / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Describe los circuitos de alimentación, relés y presostatos que gestionan las velocidades (1.ª, 2.ª, 3.ª) de los electroventiladores de refrigeración y el encendido del testigo de sobretemperatura del refrigerante. Aplica al diagnóstico de refrigeración y climatización.

**2. FUNDAMENTO**
Conmutación de la alimentación de los motores de los electroventiladores (asociación en serie para bajas revoluciones y asociación en paralelo para altas revoluciones) mediante la caja de relés comandada por el presostato de A/C (411) y el termostato de radiador (248).

**3. CONDICIONES PREVIAS**
Contacto encendido (+12 V APC) y tensión de batería estable (+12 V AVC).

**4. EQUIPO Y MATERIAL**
Polímetro, lámpara de pruebas de 12 V y esquema eléctrico del fabricante.

**5. DESARROLLO**
1. **1.ª Velocidad (Baja):** Se activa al conectar el A/C o cuando el termostato del radiador 248 cierra su primer contacto. La corriente circula a través de las resistencias en serie o asociando los dos electroventiladores (262 y 188) en serie, haciendo girar la turbina de forma silenciosa.
2. **2.ª Velocidad (Media):** Se activa al aumentar la presión del gas refrigerante a 19 bar en el presostato 411 o por el segundo escalón del termostato 248. Los relés 234 conmutan para aplicar mayor tensión a los motores.
3. **3.ª Velocidad (Alta):** Se activa en situaciones de extrema demanda térmica o sobrepresión. Los relés 234 acoplan ambos electroventiladores directamente a +12 V en paralelo, proporcionando el máximo caudal de aire sobre el condensador y radiador.
4. **Encendido del Testigo de Sobretemperatura:** Si la temperatura del refrigerante supera el límite de seguridad, el termostato 248 cierra el circuito enviando masa directa a la lámpara de temperatura 247 en el cuadro de instrumentos y desactivando el relé del compresor 171 para reducir la carga térmica del motor.

📷 IMAGEN: Trazo de corriente en 1.ª velocidad de electroventiladores — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 47
📷 IMAGEN: Trazo de corriente en 2.ª velocidad de electroventiladores — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 48
📷 IMAGEN: Trazo de corriente en 3.ª velocidad de electroventiladores — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 49
📷 IMAGEN: Trazo de corriente en la fase de encendido de la lámpara de sobretemperatura — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 50

**6. VALORES DE REFERENCIA**
| Condición de Activación | Umbral Técnico |
| :--- | :--- |
| Presión de conmutación de velocidad por presostato 411 | 19 bar en el circuito de alta presión |
| Tensión en los electroventiladores en velocidad máxima | 12 V directo en configuración paralelo |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Si falla la 1.ª velocidad pero funcionan las superiores, revisar la resistencia en serie o los contactos del relé de velocidad lenta.
* Si el testigo de sobretemperatura se enciende y el compresor se desconecta, verificar la presencia de aire en el circuito de refrigeración del motor o el fallo de los relés de los electroventiladores.

**8. VERIFICACIÓN FINAL**
Verificar el salto progresivo de las tres velocidades puenteando secuencialmente las patillas del termostato del radiador 248 con el motor en marcha.

**9. SEGURIDAD Y NORMATIVA**
Peligro de atrapamiento. Mantener las manos alejadas de las pálpulas de los electroventiladores durante la prueba; pueden arrancar automáticamente.

---

### NOTA DE PROCESO — ARQUITECTURA Y FUNCIONAMIENTO DE LA CLIMATIZACIÓN REGULADA (AUTOMÁTICA Y SEMIAUTOMÁTICA) / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Describe la lógica de control, los sensores de entrada, la estrategia de cálculo y la gestión de actuadores en sistemas de climatización electrónica. Aplica a climatizadores semiautomáticos y automáticos.

**2. FUNDAMENTO**
Regulación en bucle cerrado gobernada por un Calculador de Climatización. La unidad procesa las variables de temperatura interior, temperatura exterior, radiación solar y temperatura del evaporador para accionar servomotores de mezcla, recirculación y distribución, manteniendo de forma estable la temperatura de confort fijada en el display.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Entradas de información al Calculador:**
  - Sonda de temperatura interior del habitáculo.
  - Sonda de temperatura exterior.
  - Sonda de temperatura del evaporador.
  - Selección del nivel de confort (temperatura consignada en el cuadro de mandos).
  - Petición de marcha/parada A/C e información de recirculación.
* **Procesamiento y Lógica de Control:**
  - El calculador evalúa la diferencia entre la temperatura ambiente y la consigna.
  - Para evitar choques térmicos perjudiciales, la unidad de control no autoriza un salto térmico superior a 20 ºC entre el habitáculo interior y el exterior.
  - Asigna una distribución térmica en el habitáculo donde la temperatura es ligeramente más alta en la zona de los pies que a nivel de la cabeza para maximizar el confort del individuo.
* **Salidas y Gestión de Actuadores:**
  - **En Climatización Semiautomática:** La UCE regula electrónicamente el nivel de confort (motor de mezcla), la velocidad del motoventilador del habitáculo y la trampilla de reciclaje.
  - **En Climatización Automática:** Además de los parámetros de la semiautomática, la UCE gobierna de forma automatizada los motores de repartición para decidir por qué difusores saldrá el aire (parabrisas, frontal o pies).

📷 IMAGEN: Esquema sinóptico de entradas y salidas en climatización regulada — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 55
📷 IMAGEN: Esquema general del circuito eléctrico con calculador de climatización y display — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 57
📷 IMAGEN: Esquema de componentes y conexiones de climatización semiautomática — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 76
📷 IMAGEN: Esquema de conexiones de climatización automática completa con motores individuales — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 78
📷 IMAGEN: Paneles de mandos con display digital de climatizaciones reguladas — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 109, 110, 111

**6. VALORES DE REFERENCIA**
| Criterio de Regulación | Valor Límitado por Calculador |
| :--- | :--- |
| Diferencia máxima de temperatura autorizado (interior vs. exterior) | Máximo 20 ºC de salto térmico |
| Gradiente térmico vertical | Temperatura en pies > Temperatura en cabeza |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Si la sonda de temperatura exterior se avería indicando valores extremadamente fríos, el calculador cortará el compresor para no congelar la instalación.
* Confundir climatización semiautomática con automática; la semiautomática exige la selección manual de los difusores de salida por parte del usuario.

**8. VERIFICACIÓN FINAL**
Verificar que la pantalla muestra la temperatura seleccionada y que el calculador ajusta automáticamente la velocidad del ventilador y la trampilla de mezcla al calentar o enfriar las sondas térmicas.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — SONDA DE TEMPERATURA INTERIOR
UBICACIÓN: Montada en la consola central, salpicadero o plafón de techo del habitáculo.
APLICACIÓN: Climatizaciones reguladas automáticas y semiautomáticas.

**1. MISIÓN**
Medir la temperatura del aire en el interior del habitáculo para permitir a la unidad de control de climatización verificar la coherencia entre el ambiente real y el nivel de confort seleccionado por el usuario.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termistor de coeficiente de temperatura negativo (NTC). Al aumentar la temperatura del aire interior, disminuye la resistencia eléctrica del sensor, modificando la caída de tensión analógica leída por la unidad de control de climatización.

**3. CARACTERÍSTICAS**
Sensor NTC con carcasa de protección, instalado con frecuencia junto a un micromotor de aspiración para forzar el paso del aire del habitáculo sobre la sonda.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Acumulación de polvo, fibras o suciedad en la rejilla de aspiración que aíslan la NTC, o avería eléctrica de la sonda.

**6. COMPORTAMIENTO EN AVERÍA**
El calculador pierde la referencia de temperatura ambiente e impone un valor de sustitución por defecto, provocando excesos de calefacción o de refrigeración en el habitáculo.

**7. CÓMO COMPROBARLO**
Desconectar el conector y medir la resistencia entre sus bornes con un multímetro a diferentes temperaturas ambiente, comprobando que la resistencia disminuye de forma continua al aplicar calor.

---

### NOTA DE ELEMENTO — SONDA DE TEMPERATURA EXTERIOR
UBICACIÓN: Montada en la parte inferior del espejo retrovisor exterior o en la zona frontal del vehículo tras el paragolpes.
APLICACIÓN: Sistemas de climatización regulada.

**1. MISIÓN**
Captar la temperatura del aire atmosférico exterior para que la unidad de control limite la diferencia térmica con el habitáculo a un máximo de 20 ºC y gestione la entrada de aire o el reciclaje.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Resistencia NTC estanca. Modifica su valor óhmico en función de la temperatura exterior. La unidad de control calcula la diferencia entre la temperatura interior y exterior para ajustar la masa de aire fresco requerida.

**3. CARACTERÍSTICAS**
Encapsulado plástico estanco de alta resistencia a la humedad, agua de lluvia y proyecciones de la carretera.

**4. VALORES DE TRABAJO**
* Criterio de seguridad de regulación: Limita la diferencia máxima de temperatura interior/exterior a 20 ºC.

**5. ANOMALÍAS FRECUENTES**
Cortocircuito o corte de cables en el paso de puerta/retrovisor por fatiga mecánica de los conductores.

**6. COMPORTAMIENTO EN AVERÍA**
La pantalla de climatización o cuadro muestra valores irreales (ej. -40 ºC o +50 ºC) e impide el acoplamiento del compresor de aire acondicionado.

**7. CÓMO COMPROBARLO**
Medir la resistencia de la sonda con un polímetro en el conector del espejo retrovisor y consultar la lectura de temperatura exterior registrada en los bloques de parámetros del equipo de diagnosis.

---

### NOTA DE ELEMENTO — SERVOMOTOR DE MEZCLA DE CORRIENTE CONTINUA CON POTENCIÓMETRO
UBICACIÓN: Montado en el lateral de la caja climática, acoplado directamente al eje de la trampilla de mezcla.
APLICACIÓN: Climatizaciones reguladas electrónicas.

**1. MISIÓN**
Mover mecánicamente la trampilla de mezcla de temperatura y memorizar su posición angular exacta para transmitirla a la unidad de control de climatización.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Electromotor de corriente continua de 12 V que arrastra un tren de engranajes reductor para mover el sector dentado de la trampilla. El eje de salida arrastra la pista de un potenciómetro. La unidad de control analiza la tensión de salida devuelta por el potenciómetro para conocer en todo momento la posición exacta de la trampilla.

**3. CARACTERÍSTICAS**
Motor eléctrico de CC (12 V), mecanismo de engranajes reductores y potenciómetro interno de pista resistiva de carbón.

**4. VALORES DE TRABAJO**
* Tensión de alimentación del motor: 12 V (inversión de sentido mediante cambio de polaridad).
* Posicionamiento: Requiere reglaje de tope o posicionamiento previo según marca.

**5. ANOMALÍAS FRECUENTES**
Desgaste o rotura de los dientes de los engranajes de plástico y sucia o desgaste en las pistas internas del potenciómetro.

**6. COMPORTAMIENTO EN AVERÍA**
La trampilla queda bloqueada en una posición fija o da saltos bruscos sin lograr estabilizar la temperatura del aire seleccionada en el display.

**7. CÓMO COMPROBARLO**
Alimentar directamente con 12 V los terminales del motor para verificar el movimiento completo en ambos sentidos y medir con un óhmetro la variación continua de resistencia en los bornes del potenciómetro mientras se mueve la trampilla.

📷 IMAGEN: Mecanismo interno de motor de CC, reductora y potenciómetro de posición — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 61

---

### NOTA DE ELEMENTO — SERVOMOTOR DE MEZCLA PASO A PASO
UBICACIÓN: Fijado sobre la carcasa de la caja climática, accionando las trampillas de mezcla, distribución o recirculación.
APLICACIÓN: Climatizadores electrónicos de precisión.

**1. MISIÓN**
Posicionar con alta exactitud las trampillas de regulación del climatizador mediante impulsos eléctricos digitales sin necesidad de utilizar un potenciómetro de retorno.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Utiliza un rotor con imanes permanentes (polos Norte y Sur) y un estator con múltiples bobinados desfasados (ej. bobinado A y B a 45º). La unidad de control alimenta secuencialmente los bobinados invirtiendo la polaridad (+ / -), obligando al rotor a girar un ángulo discreto ("paso"). La unidad de control determina la posición exacta contando el número de pasos emitidos.

**3. CARACTERÍSTICAS**
Motor sin escobillas paso a paso con rotor magnético de 4, 6 o 12 pares de polos y estator multifase.

**4. VALORES DE TRABAJO**
* Ángulo de giro: 1/8 de vuelta por cada paso eléctrico.
* Ciclo completo de conmutación: 4 pasos por ciclo elemental.
* Estrategia de posición real: Requiere un reglaje automático de re-inicialización (búsqueda mecánica del tope cero).
* Tabla de secuencias de impulsos para sentido horario:
  - 1.er paso: Bobinado A1(+), A2(-); Bobinado B3(X), B4(X)
  - 2.º paso: Bobinado A1(X), A2(X); Bobinado B3(-), B4(+)
  - 3.er paso: Bobinado A1(-), A2(+); Bobinado B3(X), B4(X)
  - 4.º paso: Bobinado A1(X), A2(X); Bobinado B3(+), B4(-)
  - 5.º paso: Repite secuencia del 1.er paso.
* Tabla para sentido anti-horario: Inversión de las polaridades asignadas a los bobinados A y B.

**5. ANOMALÍAS FRECUENTES**
Pérdida de pasos por duresa mecánica en las articulaciones de las trampillas o fallo de conmutación en la etapa de potencia de la UCE.

**6. COMPORTAMIENTO EN AVERÍA**
Desalineación entre la posición real de la trampilla y la posición calculada por la UCE, produciendo ruidos de chasquido ("clac-clac") continuo al intentar calibrar los topes.

**7. CÓMO COMPROBARLO**
Medir la resistencia interna de las fases A y B del motor con un polímetro (deben ofrecer valores idénticos) y ejecutar el procedimiento de re-inicialización o ajuste básico mediante la máquina de diagnosis.

📷 IMAGEN: Esquema del rotor bipolar y los bobinados de excitación del motor paso a paso — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 64, 65, 67, 69, 70, 71
📷 IMAGEN: Tabla de secuencias de impulsos eléctricos para sentido horario y anti-horario — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 73, 74

---

### NOTA DE PROCESO — REGLAS DE USO Y NORMAS DE SEGURIDAD EN LA MANIPULACIÓN DEL CLIMATIZADOR Y REFRIGERANTES / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Define las normas de utilización del climatizador para preservar sus componentes y las medidas de prevención de riesgos laborales durante las operaciones de mantenimiento con gases refrigerantes. Aplica a usuarios y mecánicos de taller.

**2. FUNDAMENTO**
Prevención de lesiones graves por congelación criogénica (-30 ºC), asfixia por desplazamiento de aire, intoxicación por descomposición térmica del gas y protección del retén frontal del compresor mediante lubricación continua.

**3. CONDICIONES PREVIAS**
Taller o zona de trabajo adecuadamente ventilada. Queda estrictamente prohibida la intervención en fosos de reparación.

**4. EQUIPO Y MATERIAL**
Guantes de látex, gafas de protección ocular estancas y solución de lavado ocular.

**5. DESARROLLO**
* **Normas de uso en el vehículo:**
  1. Orientar difusores hacia el techo o paredes laterales para evitar corrientes de aire directas.
  2. Hacer funcionar periódicamente el climatizador para hacer circular el gas y el aceite, lubricando el retén frontal del compresor e impidiendo fugas de gas por resecomiénto y deterioro de los rodamientos.
  3. Tras estacionar bajo el sol: ajustar máxima ventilación y máximo frío, circular unos minutos con las ventanillas bajadas para ventilar y subirlas cuando se reduzca el calor interior.
  4. Utilizar la recirculación en máximo frío solo por tiempo limitado para evitar viciar el aire del habitáculo.
* **Normas de seguridad con fluidos refrigerantes:**
  1. Utilizar obligatoriamente guantes de látex y gafas de protección durante la manipulación.
  2. Trabajar siempre en ambientes ventilados. Prohibido manipular el circuito en fosos de taller (el gas refrigerante es más pesado que el aire y se acumula en el fondo produciendo asfixia).
  3. En caso de contacto con la piel: descongelar la zona con agua, retirar prendas no adheridas y lavar inmediatamente con abundante agua tibia.
  4. En caso de contacto con los ojos: lavar inmediatamente con solución ocular o agua limpia manteniendo los párpados cerrados durante al menos 10 minutos y acudir urgentemente al médico.
  5. En caso de ingestión: no provocar el vómito. Si está consciente, hacer enjuagar la boca y beber 200-300 ml de agua, acudiendo inmediatamente al médico.
  6. Prohibido fumar cerca del circuito o equipos de carga (el refrigerante se decompone en sustancias tóxicas al contacto con el fuego).
  7. No introducir vehículos con aire acondicionado más de 20 minutos en hornos de secado de pintura a 80 ºC; en tal caso, evacuar previamente todo el refrigerante del circuito.
  8. No dirigir el chorro de agua o aire a presión directamente sobre los componentes de la instalación al lavar el motor.

**6. VALORES DE REFERENCIA**
| Parámetro / Condición de Seguridad | Valor Límite |
| :--- | :--- |
| Temperatura de congelación al contacto con refrigerante | Aproximadamente -30 ºC |
| Tiempo de lavado ocular ante proyecciones | Mínimo 10 minutos continuos |
| Volumen de agua a beber en ingestión consciente | 200 a 300 ml de agua |
| Tiempo y temp. máxima en horno de secado de pintura | Máximo 20 minutos a 80 ºC (con circuito totalmente vacío) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Trabajar en fosos de reparación creyendo que la extracción de aire general es suficiente; el gas refrigerante desplaza el oxígeno en las zonas bajas.
* Provocar el vómito a un accidentado que ha ingerido refrigerante.

**8. VERIFICACIÓN FINAL**
Verificar la estanqueidad de las conexiones de la estación y comprobar que el operario lleva puestas las gafas estancas y guantes antes de abrir las llaves del equipo.

**9. SEGURIDAD Y NORMATIVA**
EPI obligatorio (gafas y guantes). Cumplimiento de las normativas de gestión de residuos y prevención de riesgos en el taller de automoción.

---

### NOTA DE PROCESO — PROCEDIMIENTO DE VACÍO, CARGA Y DIAGNÓSTICO DE PRESIONES EN EL CIRCUITO / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Describe las fases de evacuación de humedad mediante depresión profunda, el proceso de carga por pesaje del refrigerante y el análisis de averías mediante la lectura de manómetros. Aplica a operaciones de mantenimiento y reparación del circuito frigorífico.

**2. FUNDAMENTO**
Al reducir la presión interior del circuito mediante la bomba de vacío, desciende la temperatura de ebullición del agua residual provocando su evaporación y extracción en forma de vapor. La carga posterior exige la introducción exacta del peso de fluido en gramos y la restitución del aceite del compresor.

**3. CONDICIONES PREVIAS**
Estación de carga conectada mediante los acoplamientos rápidos a las tomas de alta presión (AP) y baja presión (BP).

**4. EQUIPO Y MATERIAL**
Estación de carga con manómetros (BP, AP, MV, GP), bomba de vacío, cilindro dosificador o báscula de pesaje, envases de refrigerante (R12 o R134a) y probeta graduada para aceite.

**5. DESARROLLO**
* **Fase de Vacío del Circuito:**
  1. Conectar la bomba de vacío P al circuito abriendo las válvulas correspondientes.
  2. Reducir la presión hasta crear una depresión profunda cercana a 0 bar absolutos.
  3. Mantener la bomba en funcionamiento para hacer hervir el agua a temperatura ambiente y extraer la humedad.
  4. Cerrar las llaves y verificar que la aguja del vacuómetro permanece estable durante la prueba de estanqueidad.
* **Fase de Carga de Refrigerante (R134a):**
  1. Pesar e introducir en el circuito la cantidad exacta prescrita por el fabricante en gramos.
  2. Separar y medir en la probeta el aceite extraído durante la fase de recuperación.
  3. Introducir la misma cantidad medida de aceite nuevo antes o durante el proceso de carga.
* **Diagnóstico de Averías por Manómetros:**
  - **Refrigerante Insuficiente:** Lecturas de BP y AP anormalmente bajas.
  - **El Refrigerante no Circula (Obstrucción):** El manómetro de BP cae a depresión/vacío mientras que AP muestra valores bajos.
  - **Humedad en el Circuito:** El manómetro de BP cae periódicamente a vacío (al congelarse la válvula de expansión) y vuelve a subir cuando el hielo se derrite.
  - **Avería en la Compresión del Compresor:** Las presiones de BP y AP se igualan (BP muy alta y AP muy baja).
  - **Excesivo Refrigerante o Condensador Sucio:** Presión de AP excesivamente alta y BP alta.
  - **Aire en el Circuito:** Presión de AP anormalmente elevada y con oscilaciones en la aguja.
  - **Válvula de Expansión demasiado Abierta:** BP excesivamente alta y formación de escarcha en la tubería de aspiración del compresor.

📷 IMAGEN: Gráfica de relación entre la presión (bar) y la temperatura de ebullición del agua (ºC) — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 94
📷 IMAGEN: Esquema completo de la estación de carga con bomba de vacío, cilindro y manómetros — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 98

**6. VALORES DE REFERENCIA**
| Estado del Circuito / Prueba | Valor y Condición |
| :--- | :--- |
| Punto de ebullición del agua a 1 bar | 100 ºC |
| Presión de vacío requerida | Depresión cercana a 0 bar absolutos para evaporación a temp. ambiente |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Intentar cargar el circuito de R134a por presión en lugar de efectuar el pesaje exacto del gas en la báscula digital.
* Omitir la reposición de la cantidad exacta de aceite nuevo equivalente al aceite usado recuperado.

**8. VERIFICACIÓN FINAL**
Verificar que la presión de alta y baja presión se sitúan dentro de los rangos especificados para la temperatura ambiente y comprobar la eficacia frigorífica en las rejillas del salpicadero.

**9. SEGURIDAD Y NORMATIVA**
Prohibida la liberación de refrigerante a la atmósfera. Uso obligatorio de estaciones de recuperación y reciclaje homologadas.

---

### NOTA DE PROCESO — LOCALIZACIÓN Y DIAGNÓSTICO DE FUGAS EN EL CIRCUITO FRIGORÍFICO / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Detalla las tecnologías de detección de fugas, la evaluación de sensibilidad de los equipos y el procedimiento técnico para localizar pérdidas de gas. Aplica a la diagnosis de faltas de estanqueidad.

**2. FUNDAMENTO**
Detección por conductividad térmica, ionización, principio de diodo calefactado, efecto Corona o identificación óptica por fluorescencia bajo luz ultravioleta (UV) del aditivo trazador mezclado con el aceite.

**3. CONDICIONES PREVIAS**
Circuito frigorífico presurizado o cargado con aditivo trazador en el aceite lubricante.

**4. EQUIPO Y MATERIAL**
Detectores electrónicos de fugas (efecto Corona, conductividad térmica, diodo calefactado), lámpara ultravioleta (UV), aditivo trazador fluorescente (30 ml de aceite con trazador) y agua jabonosa.

**5. DESARROLLO**
1. **Selección del Método de Detección:**
   - **Fugas muy rápidas / reventón de tubo:** Inspección visual y aplicación de agua jabonosa sobre la zona sospechosa.
   - **Fugas lentas (> 24 horas):** Detección mediante equipo electrónico o lámpara UV con trazador.
2. **Evaluación de los Equipos de Detección:**
   - Lámpara haloide: Inadaptada para refrigerantes HFC (R134a) y de muy baja fiabilidad.
   - Detección por ultrasonidos: Sensibilidad mediocre.
   - Detección por efecto Corona: Buena capacidad de detección (ej. Robinair 16500, CPS LS 790 A), aunque la sensibilidad depende del sensor.
   - Detección por conductividad térmica: Muy buena sensibilidad (< 5 g/año) para todos los fluidos y permite cuantificar la fuga.
   - Detección por diodo calefactado: Buena sensibilidad, salvo en ambientes muy contaminados donde el captador se dessensibiliza.
   - Fluorescencia UV: Apta para todos los fluidos; detecta fugas de hasta un máximo de 7 g/año. Requiere añadir 30 ml de aceite con aditivo trazador al circuito.
3. **Procedimiento de Barrido con Detector Electrónico:**
   - Desplazar la sonda detectora lentamente por la parte inferior de racores, manguitos, condensador y retén del compresor (el gas es más pesado que el aire).
   - Observar el tiempo de respuesta y la señal acústica/luminosa del detector.

📷 IMAGEN: Tabla comparativa de sensibilidad entre tipos de detectores de fugas — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 102, 103
📷 IMAGEN: Modelos de detectores electrónicos por efecto Corona y conductividad — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 105, 106
📷 IMAGEN: Lámpara de luz ultravioleta para detección de trazador fluorescente — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 107

**6. VALORES DE REFERENCIA**
| Método / Tipo de Detector | Umbral de Sensibilidad / Parámetro |
| :--- | :--- |
| Umbral de sensibilidad mínima estática | 5 g / año |
| Umbral de sensibilidad en movimiento | 1 a 5 g / año |
| Tiempo de respuesta del detector tras absorción | < 2 segundos |
| Sensibilidad de detector por conductividad térmica | < 5 g / año para cualquier fluido |
| Sensibilidad de detección por fluorescencia UV | Fugas de un máximo de 7 g / año |
| Cantidad de aceite con trazador a añadir | 30 ml de aceite con aditivo |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Utilizar lámparas haloides para buscar fugas de R134a; no reaccionan al no contener átomos de cloro.
* Mover el sensor electrónico demasiado rápido o realizar la prueba en corrientes de aire que dispersen el gas emanado por la fuga.

**8. VERIFICACIÓN FINAL**
Verificar la ausencia de emisiones acústicas en el detector electrónico tras reparar la fuga o confirmar la ausencia de manchas amarillas/verdes brillantes bajo la luz de la lámpara UV.

**9. SEGURIDAD Y NORMATIVA**
Utilizar gafas filtrantes amarillas de protección ocular cuando se trabaje con la lámpara de luz ultravioleta (UV) para evitar lesiones en la retina.

---

COBERTURA: documento «6. EL CIRCUITO ELÉCTRICO.pptx», páginas 1 a 68 de 68. [completo]