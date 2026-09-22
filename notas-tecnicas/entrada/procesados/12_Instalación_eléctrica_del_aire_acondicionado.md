### NOTA DE PROCESO — ESQUEMA Y LÓGICA ELÉCTRICA DE AIRE ACONDICIONADO MANUAL CON TRINARIA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la arquitectura del circuito eléctrico, la lógica de interconexión y las condiciones de activación del compresor y los electroventiladores en sistemas de aire acondicionado manual equipados con presostato trinario. Aplica al análisis de esquemas eléctricos de climatización manual.

**2. FUNDAMENTO**
La UCE de motor y la electrónica de control condicionan la excitación del embrague electromagnético del compresor a la existencia de un régimen de ralentí estable, a la ausencia de aceleraciones bruscas y a la validación de presiones y temperaturas por parte de la trinaria y las sondas NTC.

**3. CONDICIONES PREVIAS**
Tensión de batería disponible, contacto conectado, motor térmico funcionando regularmente al ralentí y turbina de aire fresco seleccionada al menos en velocidad lenta.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Condiciones de activación del compresor:**
  1. El conductor acciona el interruptor de AC y selecciona al menos la velocidad lenta de la turbina de aire fresco.
  2. La UCE del motor verifica que el motor gira a un régimen de ralentí regular.
  3. La trinaria de alta mide que la presión del circuito se encuentra en el rango de trabajo entre 2 bar y 32 bar (bornes 1-2 cerrados).
  4. La sonda NTC del evaporador confirma que no hay riesgo de congelación en el núcleo del evaporador.
  5. La sonda NTC del refrigerante del motor confirma que el motor de combustión no padece sobretemperatura.
  6. Cumplidas las condiciones, la electrónica alimenta el embrague electromagnético del compresor.
* **Gobierno del electroventilador del condensador:**
  - Al conectar el aire acondicionado, el electroventilador del circuito de refrigeración se activa de forma continua en velocidad lenta.
  - Cuando la presión en el circuito de alta alcanza los 16 bar, los bornes 3-4 de la trinaria se cierran excitando el relé para conectar la velocidad rápida (II velocidad) del electroventilador.
* **Estrategias de desconexión de seguridad:**
  - La UCE del motor interrumpe la alimentación al compresor ante una aceleración brusca para entregar la máxima potencia a la transmisión.
  - La sonda NTC del refrigerante desactiva el compresor si la temperatura del motor sube en exceso.

📷 IMAGEN: Esquema eléctrico de aire acondicionado manual con trinaria y relés — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 94

**6. VALORES DE REFERENCIA**
| Parámetro / Componente | Valor y Condiciones |
| :--- | :--- |
| Presión de corte por baja o alta de la trinaria (P1) | P1 = 2 bar (corte por baja) / 32 bar (corte por alta) en el circuito de alta |
| Presión de conexión de II velocidad en trinaria (P2) | P2 = 16 bar en el circuito de alta presión |
| Temperatura de conexión de velocidad lenta (t1) | t1 = 95 ºC en el termostato de refrigerante |
| Temperatura de conexión de velocidad rápida (t2) | t2 = 103 ºC en el termostato de refrigerante |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Tratar de conectar el A/C con la turbina del habitáculo desconectada (posición 0); el circuito eléctrico impide la activación del compresor si la turbina no gira como mínimo a velocidad lenta.
* Interpretar la desconexión del compresor en una incorporación como avería, cuando se trata de la función de corte por aceleración gestionada por la UCE del motor.

**8. VERIFICACIÓN FINAL**
Verificar que al pulsar el interruptor de AC con la turbina en marcha lenta, el electroventilador arranca inmediatamente en velocidad lenta y el embrague electromagnético acopla el compresor.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — INTERRUPTOR DE AC Y SELECTOR DE VELOCIDAD DE LA TURBINA
CÓDIGO: Componente 1 en esquema manual
UBICACIÓN: Consola central del salpicadero, en el panel de mandos de climatización.
APLICACIÓN: Sistemas de aire acondicionado manual.

**1. MISIÓN**
Conectar o desconectar el aire acondicionado a voluntad del conductor y controlar la velocidad de giro de la turbina de aire fresco. Garantiza que el sistema solo funcione si la turbina está activa.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Conmutador electromecánico rotativo y por pulsación. Establece el paso de corriente hacia la electrónica de control y varía la resistencia en serie o las vías de alimentación para regular las revoluciones de la turbina.

**3. CARACTERÍSTICAS**
Interruptor eléctrico conmutado con selección de velocidades para el ventilador del habitáculo.

**4. VALORES DE TRABAJO**
* Condición eléctrica de conexión de A/C: Turbina girando como mínimo a velocidad lenta (velocidad 1).

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — RELÉS DE ALIMENTACIÓN DEL ELECTROVENTILADOR (I Y II VELOCIDAD)
CÓDIGO: Componentes 2 y 12 en esquema manual
UBICACIÓN: Caja de relés y fusibles en el compartimento motor.
APLICACIÓN: Circuitos de refrigeración del motor y condensador de aire acondicionado.

**1. MISIÓN**
Manejar las corrientes de potencia que alimentan el electroventilador de refrigeración en su velocidad lenta (I velocidad) y en su velocidad rápida (II velocidad).

**2. PRINCIPIO DE FUNCIONAMIENTO**
Relés electromagnéticos de potencia. Al recibir señal de excitación en su bobina (desde la trinaria o el termostato de refrigerante), cierran sus contactos de trabajo aplicando tensión directa a la turbina o intercalando la resistencia en serie.

**3. CARACTERÍSTICAS**
Relés automotrices de potencia de alta intensidad.

**4. VALORES DE TRABAJO**
* Excitación de I velocidad: Activación directa al conectar el A/C o por cierre del primer escalón del termostato a 95 ºC.
* Excitación de II velocidad (Relé 12): Activación al alcanzar 16 bar en la trinaria o 103 ºC en el termostato del radiador.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — TRINARIA DE ALTA PRESIÓN
CÓDIGO: Componente 4 en esquema manual
UBICACIÓN: Instalada sobre la tubería de la línea de alta presión del circuito frigorífico.
APLICACIÓN: Sistemas de aire acondicionado manual.

**1. MISIÓN**
Supervisar la presión en el tramo de alta del circuito frigorífico para autorizar el funcionamiento del compresor y activar la velocidad rápida del electroventilador.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Presostato mecánico triple provisto de dos contactos eléctricos internos accionados por membrana hidráulica: el contacto P1 (bornes 1-2) se abre por baja o alta presión crítica, mientras que el contacto P2 (bornes 3-4) se cierra al subir la presión para conectar la velocidad rápida del ventilador.

**3. CARACTERÍSTICAS**
Presostato hidráulico-eléctrico de 4 vías de conexión (bornes 1, 2, 3, 4).

**4. VALORES DE TRABAJO**
* Presión de corte del compresor por baja/alta (P1, bornes 1-2): P1 = 2 bar (corte por falta de gas) y 32 bar (corte por sobrepresión).
* Presión de activación de II velocidad del electroventilador (P2, bornes 3-4): P2 = 16 bar en la línea de alta.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — TERMOSTATO DE REFRIGERANTE DEL RADIADOR
CÓDIGO: Componente 7 en esquema manual / Componente 29 en esquema automático
UBICACIÓN: Montado en el cuerpo del radiador de refrigeración del motor.
APLICACIÓN: Sistemas de refrigeración y climatización del automóvil.

**1. MISIÓN**
Conectar las distintas velocidades del electroventilador del radiador en función de la temperatura del líquido refrigerante del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termocontacto bimetálico escalonado. Al calentarse el líquido refrigerante, la dilatación térmica de sus elementos bimetálicos cierra sucesivamente dos pares de contactos eléctricos independientes.

**3. CARACTERÍSTICAS**
Sensor termostático conectorizado para las velocidades del electroventilador.

**4. VALORES DE TRABAJO**
* Temperatura de conexión de velocidad lenta (t1): t1 = 95 ºC.
* Temperatura de conexión de velocidad rápida (t2): t2 = 103 ºC.
* Comportamiento de emergencia (climatización automática): Conecta normalmente los ventiladores a máxima velocidad.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
En función de emergencia, se conectan los ventiladores a máxima velocidad.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — SONDA NTC DEL EVAPORADOR
CÓDIGO: Componente 8 en esquema manual / Componente 18 (pág. 95) / Componente 24 (pág. 97)
UBICACIÓN: Intercalada en el núcleo del evaporador o en la salida de aire del evaporador.
APLICACIÓN: Sistemas de aire acondicionado manual, semiautomático y automático (no utilizada en compresores de cilindrada variable).

**1. MISIÓN**
Controlar la temperatura de evaporación para prevenir la formación de hielo en el panal del evaporador y desconectar el compresor cuando sea necesario.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Resistencia de coeficiente de temperatura negativo (NTC). Su resistencia eléctrica aumenta al descender la temperatura. La electrónica evalúa el valor para desconectar el compresor si existe riesgo de congelación.

**3. CARACTERÍSTICAS**
Sonda térmica NTC.

**4. VALORES DE TRABAJO**
* Comportamiento en avería (climatización automática): Si se pierde la señal, se trabaja con la información del sensor MAP.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
En climatización automática, si no hay señal se trabaja con la información del sensor MAP.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE PROCESO — ESQUEMA DE AIRE ACONDICIONADO SEMIAUTOMÁTICO CON SENSOR MAP Y ELECTROVÁLVULA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la arquitectura electrónica, las señales de entrada y salida y la lógica de control de los sistemas de climatización semiautomáticos con compresor de cilindrada variable regulado por electroválvula (sin embrague) y sensor de presión MAP. Aplica al diagnóstico de climatizadores semiautomáticos.

**2. FUNDAMENTO**
La UCE del climatizador procesa las señales de los sensores térmicos, del sensor digital MAP y de las UCEs de motor y red de a bordo a través del CAN-Bus para modular de forma continua la cilindrada del compresor mediante una señal de corriente hacia su electroválvula interna.

**3. CONDICIONES PREVIAS**
Tensión en línea 30 (batería) y línea 15 (contacto).

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Intercambio de información por CAN-Bus y señales directas:**
  - **Entradas principales a la UCE del climatizador (12):** Sensor MAP de alta presión (3), sensor de temperatura exterior (4), transmisor de velocidad (5), alternador (7), transmisor de temperatura interior (13), sensores de salida del evaporador (18), pies (19) y difusor central (20), y potenciómetros de trampillas (15, 17).
  - **Comunicación con UCE de Red de A Bordo (9) y Cuadro de Instrumentos (10):** Transmisión de señales de velocidad del vehículo y temperatura exterior.
  - **Comunicación con UCE del Motor (11):** Gestión del ralentí y solicitud de corte por aceleración o carga.
* **Gobierno del compresor sin embrague:**
  - La UCE del climatizador envía una señal de control a la electroválvula de regulación del compresor (21).
  - La electroválvula modifica la cilindrada interna del compresor según la demanda de refrigeración.
* **Control del soplador del habitáculo:**
  - La velocidad de la turbina de aire fresco (1) es gestionada mediante un regulador electrónico de velocidad (2).

📷 IMAGEN: Esquema de aire acondicionado semiautomático con sensor MAP y electroválvula sin embrague — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 95

**6. VALORES DE REFERENCIA**
| Línea de Corriente DIN / Código | Función y Especificación |
| :--- | :--- |
| Línea 30 | Positivo directo de batería |
| Línea 15 | Positivo después de contacto |
| Línea 31 | Masa |
| Código de color de cables | Rojo = Alimentación positivo; Negro = Masa; Verde/Blanco = Señales de entrada/salida; Naranja = CAN-Bus |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Buscar un embrague electromagnético en un compresor regulado por electroválvula; este sistema regula su potencia internamente sin desacoplo mecánico.

**8. VERIFICACIÓN FINAL**
Verificar la presencia de señales en las entradas y salidas de la UCE del climatizador según el código de colores del esquema.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — SENSOR MAP DE ALTA PRESIÓN
CÓDIGO: Componente 3 en esquemas semiautomático y automático
UBICACIÓN: Montado en la tubería de la línea de alta presión del circuito frigorífico.
APLICACIÓN: Climatizadores semiautomáticos y automáticos.

**1. MISIÓN**
Mapear y medir de forma continua la presión del gas refrigerante en el circuito de alta presión del sistema.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Sensor electrónico de presión de alta precisión. Emite una señal eléctrica proporcional a la presión existente en la línea de alta hacia la UCE del climatizador.

**3. CARACTERÍSTICAS**
Transmisor electrónico de presión conectado a la UCE del climatizador.

**4. VALORES DE TRABAJO**
* Comportamiento en avería: En caso de avería del sensor MAP, el climatizador no funciona.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
El climatizador deja de funcionar por completo.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — SENSOR DE TEMPERATURA EXTERIOR Y ENTRADA DE AIRE
CÓDIGO: Componente 4 (pág. 95) / Componentes 4 y 27 (pág. 97)
UBICACIÓN: Paragolpes delantero / retrovisor exterior (sensor exterior 4) y canal de aspiración de la caja climática (sensor de entrada 27).
APLICACIÓN: Climatizadores semiautomáticos y automáticos.

**1. MISIÓN**
Medir la temperatura del aire ambiente exterior y del aire de entrada para regular los parámetros de confort del climatizador.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Sensor térmico. Envía una señal analógica de temperatura a la UCE del climatizador.

**3. CARACTERÍSTICAS**
Sensor térmico de temperatura exterior e interior.

**4. VALORES DE TRABAJO**
* Comportamiento en avería del sensor 4: No aparece la temperatura en el display, se muestra --.- ºC y se trabaja con el valor del sensor de entrada de aire (27).
* Comportamiento en avería del sensor 27: Si desaparece la señal, se trabaja con el valor indicado por el sensor de temperatura exterior (4).

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
En el display aparece --.- ºC y la UCE adopta la lectura del sensor alternativo de entrada de aire.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL DE CLIMATIZACIÓN (UCE CLIMATIZADOR)
CÓDIGO: Componente 12 (pág. 95) / Componente 14 (pág. 97)
UBICACIÓN: Consola central del salpicadero.
APLICACIÓN: Sistemas de climatización semiautomáticos y automáticos.

**1. MISIÓN**
Controlar y gestionar de forma centralizada el funcionamiento global del sistema de climatización.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Unidad de control electrónica con microprocesador. Procesa todas las señales de entrada de los sensores y gestiona la activación de los servomotores, la turbina, los electroventiladores y el compresor.

**3. CARACTERÍSTICAS**
Módulo electrónico conectado a las líneas DIN 30, 15, 15x, 31, CAN-Bus y conectores múltiples.

**4. VALORES DE TRABAJO**
* Comportamiento en avería: En caso de avería de la UCE, el climatizador no funciona.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
El sistema de climatización queda completamente inoperativo.

**7. CÓMO COMPROBARLO**
Mediante máquina de diagnóstico compatible conectada al conector de diagnóstico de 16 vías.

---

### NOTA DE ELEMENTO — ELECTROVÁLVULA DE REGULACIÓN DEL COMPRESOR
CÓDIGO: Componente 21 (pág. 95) / Componente 28 (pág. 97)
UBICACIÓN: Montada en el cuerpo del compresor de cilindrada variable.
APLICACIÓN: Compresores de cilindrada variable sin embrague electromagnético.

**1. MISIÓN**
Ajustar la cilindrada interna del compresor a la demanda real de refrigeración del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Electroválvula de control de flujo. Al recibir la señal de excitación procedente de la UCE de los ventiladores o del climatizador, modifica la presión interna para ajustar la inclinación del mecanismo de cilindrada del compresor.

**3. CARACTERÍSTICAS**
Electroválvula de control proporcional.

**4. VALORES DE TRABAJO**
* Comportamiento en avería: En caso de avería, el compresor se ajusta automáticamente a su mínimo rendimiento.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
El compresor funciona únicamente a su mínimo rendimiento de rendimiento frigorífico.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE PROCESO — ESQUEMA DIDÁCTICO Y FUNCIONAMIENTO DEL CLIMATIZADOR AUTOMÁTICO / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la red completa de componentes, la distribución de líneas de corriente DIN, la interacción de los servomotores de trampillas y el intercambio de información distribuida en un climatizador automático. Aplica al análisis de instalaciones de climatización automática.

**2. FUNDAMENTO**
El climatizador automático gestiona la distribución, la mezcla de temperatura, el caudal de aire y la recirculación mediante servomotores individuales con potenciómetros de posición de retorno, adaptando su funcionamiento a la radiación solar, la velocidad del vehículo y el estado del motor.

**3. CONDICIONES PREVIAS**
Tensión correcta en línea 30 (batería), línea 15 (contacto), línea 15x (contacto con desconexión en arranque) y masa (línea 31).

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Líneas de corriente según normas DIN:**
  - 30: Positivo directo de batería.
  - 15: Positivo después de contacto.
  - X: Positivo después de contacto con desconexión en arranque.
  - 31: Masa del vehículo.
* **Red de entradas y señales suplementarias:**
  - Fotosensor para radiación solar (13): Ajusta la temperatura en función de la radiación solar. Si no funciona, se desactiva la función.
  - Transmisor de velocidad (5) y Cuadro de Instrumentos (11): La señal de velocidad recibida por CAN-Bus activa la trampilla de velocidad.
  - Interruptor de marcha atrás (7): Conecta automáticamente la recirculación al circular marcha atrás. Si no se recibe señal, se desactiva la función.
  - Alternador (8): Identifica el trabajo del alternador y desconecta el compresor ante sobrecargas. Si no se recibe señal, se desactiva la función.
  - Regulador de iluminación (9): Regula la intensidad de luz del display del climatizador.
* **Control de actuadores de flujo de aire:**
  - Motor y potenciómetro de la trampilla de temperatura (16, 17): Mezclan el aire frío y caliente. Sin potenciómetro no se puede ajustar la temperatura.
  - Motor y potenciómetro de la trampilla de deshielo (18, 19): Mueven la trampilla de deshielo. Sin potenciómetro no se puede dirigir aire hacia el parabrisas.
  - Motor y potenciómetro de la trampilla central (20, 21): Mueven la trampilla central. Sin potenciómetro no se puede controlar la salida central o zona pies.
  - Motor y potenciómetro de recirculación y velocidad (22, 23): Mueven la trampilla de recirculación. Sin potenciómetro no se puede conectar la recirculación.
* **Gestión de temperatura en difusores:**
  - Sonda de salida del evaporador (24): Si no hay señal se trabaja con el sensor MAP.
  - Sonda de zona pies (25) y sonda del difusor central (26): Si falta alguna señal, no es posible la regulación automática.

📷 IMAGEN: Esquema didáctico de un climatizador automático y sus componentes — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 96

**6. VALORES DE REFERENCIA**
| Componente / Función | Estado y Comportamiento en Avería |
| :--- | :--- |
| Turbina de aire fresco (1) | Si no gira, el climatizador no funciona |
| Regulador de velocidad de turbina (2) | En caso de avería, el climatizador no funciona |
| UCE de la red de a bordo (10) | Intercambio por CAN-Bus; en avería puede dejar de funcionar el clima |
| UCE de ventiladores (30) | Alimenta ventiladores y electroválvula; en avería el clima no funciona |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Desmontar un servomotor sin comprobar antes la lectura de su potenciómetro en la máquina de diagnóstico.

**8. VERIFICACIÓN FINAL**
Verificar mediante prueba de actuadores que cada servomotor responde a las órdenes de la UCE y que los potenciómetros devuelven señal.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — FOTOSENSOR PARA RADIACIÓN SOLAR
CÓDIGO: Componente 13 en esquema automático
UBICACIÓN: Cara superior del salpicadero.
APLICACIÓN: Climatizadores automáticos.

**1. MISIÓN**
Medir la intensidad de la radiación solar para ajustar automáticamente la temperatura del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Fotodiodo semiconductor. Varía su señal de corriente en función de la radiación solar incidente, permitiendo a la UCE compensar el efecto térmico del sol sobre los ocupantes.

**3. CARACTERÍSTICAS**
Sensor óptico conectado a la UCE del climatizador.

**4. VALORES DE TRABAJO**
* Comportamiento en avería: Si no funciona, se desactiva la función de ajuste por radiación solar.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
Se desactiva la función de ajuste automático por radiación solar.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — SERVOMOTORES Y POTENCIÓMETROS DE TRAMPILLAS DE CLIMATIZACIÓN
CÓDIGO: Componentes 14 a 17 (pág. 95) / Componentes 16 a 23 (pág. 97)
UBICACIÓN: Montados sobre la carcasa de la caja climática.
APLICACIÓN: Sistemas de climatización semiautomáticos y automáticos.

**1. MISIÓN**
Mover mecánicamente las trampillas de mezcla, deshielo, central y recirculación/velocidad, e indicar a la UCE la posición exacta de cada trampilla.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Motor eléctrico con reductora que acciona el eje de la trampilla y arrastra el cursor de un potenciómetro. La UCE analiza la tensión del potenciómetro para verificar el ángulo de la trampilla.

**3. CARACTERÍSTICAS**
Conjunto formado por servomotor de corriente continua y potenciómetro de posición de retorno.

**4. VALORES DE TRABAJO**
* Avería en potenciómetro de temperatura (17): No se puede ajustar la temperatura.
* Avería en potenciómetro de deshielo (19): No se puede dirigir aire hacia el parabrisas.
* Avería en potenciómetro de trampilla central (21): No se puede controlar la salida central o zona pies.
* Avería en potenciómetro de recirculación (23): No se puede conectar la recirculación.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
Imposibilidad de ajustar la función correspondiente (temperatura, deshielo, salida central o recirculación).

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL DE ELECTROVENTILADORES
CÓDIGO: Componente 6 (pág. 94) / Componente 23 (pág. 95) / Componente 30 (pág. 97)
UBICACIÓN: Vano motor, sobre el soporte del radiador.
APLICACIÓN: Climatizadores manuales, semiautomáticos y automáticos.

**1. MISIÓN**
Alimentar eléctricamente los electroventiladores del radiador y la electroválvula de regulación del compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Módulo electrónico de potencia. Recibe las órdenes de la UCE de clima, la trinaria o los termostatos para conmutar la corriente de alimentación hacia los electroventiladores y el compresor.

**3. CARACTERÍSTICAS**
Unidad electrónica de control y relés de potencia.

**4. VALORES DE TRABAJO**
* Comportamiento en avería: En caso de avería de la UCE de ventiladores, el climatizador no funciona.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
El climatizador queda totalmente fuera de servicio.

**7. CÓMO COMPROBARLO**
No documentado en fuentes.

---

### NOTA DE PROCESO — AUTODIAGNOSTICO Y LECTURA DE MEMORIA DE AVERÍAS DEL CLIMATIZADOR / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica la metodología para consultar y analizar las averías memorizadas en la UCE del climatizador a través del conector de diagnóstico de 16 vías. Aplica a la localización de averías en climatizadores electrónicos.

**2. FUNDAMENTO**
La UCE de climatización detecta anomalías eléctricas y de plausibilidad en los sensores y actuadores del sistema, memorizando las incidencias para su lectura mediante equipo de diagnóstico.

**3. CONDICIONES PREVIAS**
Conector de diagnóstico (6) libre y contacto del vehículo encendido.

**4. EQUIPO Y MATERIAL**
Máquina de diagnóstico compatible con el sistema de climatización del vehículo.

**5. DESARROLLO**
1. Conectar la máquina de diagnóstico al conector de diagnóstico de 16 vías del vehículo (componente 6).
2. Establecer comunicación con la UCE del climatizador (componente 14).
3. Consultar la memoria de averías para identificar los códigos registrados.
4. Evaluar los componentes afectados consultando las lecturas en tiempo real o bloques de valores si la máquina lo permite.
5. Tras reparar la avería, efectuar el borrado de la memoria de averías y comprobar que no se reproduzcan los códigos.

📷 IMAGEN: Conector de diagnóstico de 16 vías conectado a la UCE del climatizador — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 95

**6. VALORES DE REFERENCIA**
| Elemento de Diagnosis | Especificación |
| :--- | :--- |
| Conector de diagnóstico | Conector estándar de 16 vías (Componente 6) |
| Estado de averías | Las averías quedan memorizadas en la UCE |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Intentar la comunicación de diagnóstico sin conectar el contacto del vehículo o con el conector de diagnóstico dañado.

**8. VERIFICACIÓN FINAL**
Verificar la ausencia de averías memorizadas en la UCE del climatizador tras la reparación y probar el funcionamiento correcto del sistema.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

COBERTURA: documento «12. Instalación eléctrica del aire acondicionado.pdf», páginas 94 a 97 de 97. [completo]

---

💡 ¿Deseas que repasemos algún esquema eléctrico en concreto o que elaboremos alguna guía de comprobación de señales con polímetro para el alumnado?