### NOTA DE PROCESO — GESTIÓN Y ACTIVACIÓN DE ELECTROVENTILADORES / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la lógica de activación y conmutación de las distintas velocidades de los electroventiladores para la refrigeración combinada del motor térmico y del condensador del aire acondicionado. Aplica a los sistemas de climatización y refrigeración del vehículo.

**2. FUNDAMENTO**
La circulación de aire por la marcha del vehículo resulta insuficiente a baja velocidad o con el vehículo detenido. Para garantizar el rendimiento del condensador y prevenir sobrecalentamientos en el motor, los electroventiladores fuerzan el paso de aire fresco a través del radiador y del condensador evaluando la temperatura del líquido refrigerante (termostato del radiador) y la presión del fluido frigorífico (conmutador trinario o sensor MAP).

**3. CONDICIONES PREVIAS**
Sistema de climatización conectado o motor en marcha en fase de calentamiento.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Funcionamiento con el aire acondicionado conectado:**
  - Si el climatizador está activado, el compresor funciona y la presión del circuito frigorífico es superior a 2 bares, ambos electroventiladores se conectan en la **1.ª velocidad**.
  - Si la presión en el circuito de alta alcanza los **16 bares** y/o la temperatura del líquido refrigerante supera los **99 ºC**, los dos ventiladores conmutan a la **2.ª velocidad**.
  - Cuando la presión desciende por debajo de 16 bares y la temperatura del refrigerante cae de 99 ºC, los ventiladores retornan a la 1.ª velocidad.
* **Funcionamiento con el aire acondicionado desconectado:**
  - La activación depende exclusivamente de la temperatura del líquido refrigerante captada por el termostato del radiador:
    - **1.ª velocidad:** Se conecta (ON) entre **92 ºC y 97 ºC**; se desconecta (OFF) entre **84 ºC y 91 ºC**.
    - **2.ª velocidad:** Se conecta (ON) entre **99 ºC y 105 ºC**; se desconecta (OFF) entre **91 ºC y 98 ºC**.
* **Efecto de la falta de ventilación:** Si los electroventiladores no funcionan, la presión de alta sube excesivamente y la UCE desconecta el compresor por seguridad. El compresor solo volverá a funcionar cuando el vehículo circule y reciba aire de marcha, volviendo a pararse al detener el vehículo.

📷 IMAGEN: Esquema de conmutación combinada y umbrales de activación para dos ventiladores — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 85

**6. VALORES DE REFERENCIA**
| Condición de Activación | Parámetro Térmico / Presión | Estado de los Electroventiladores |
| :--- | :--- | :--- |
| **A/C Conectado (Presión > 2 bar)** | Estado inicial de marcha | 1.ª velocidad en ambos ventiladores |
| **Presión de Alta Frigorífica** | Presión ≥ 16 bar | Conmutación a 2.ª velocidad |
| **Temp. Refrigerante (Modo A/C o solo Motor)** | ON a 99...105 ºC / OFF a 91...98 ºC | 2.ª velocidad en ambos ventiladores |
| **Temp. Refrigerante (Solo Motor - 1.ª Vel.)** | ON a 92...97 ºC / OFF a 84...91 ºC | 1.ª velocidad en ambos ventiladores |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Diagnosticar como avería interna del compresor un parón intermitente que ocurre solo al detener el vehículo; la causa real es el fallo de los electroventiladores, que provoca el disparo de la protección por alta presión al parar el vehículo.

**8. VERIFICACIÓN FINAL**
Verificar el arranque de los ventiladores en 1.ª velocidad al conectar la tecla A/C y la conmutación a 2.ª velocidad al alcanzar los 16 bares en el manómetro de alta.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA EL COMPRESOR Y ELECTROVENTILADORES
UBICACIÓN: Montada en el compartimento motor.
APLICACIÓN: Gestión combinada de ventiladores y acoplamiento electromagnético en sistemas de climatización.

**1. MISIÓN**
Analizar las señales de temperatura de motor y presión del fluido refrigerante para gobernar las velocidades de los electroventiladores y la activación del compresor de aire acondicionado.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Módulo electrónico y electromecánico de potencia. Integra internamente la electrónica de control y los relés de activación para conmutar las distintas velocidades de los motores de ventilación y la bobina del embrague magnético del compresor.

**3. CARACTERÍSTICAS**
Caja de relés y módulo electrónico con conectores multifilar y, según versiones, fusible de protección integrado en la propia carcasa.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Falso contacto o fogueado de los contactos de los relés internos, o fundido del fusible de protección integrado.

**6. COMPORTAMIENTO EN AVERÍA**
Inoperatividad total de las velocidades de los electroventiladores o imposibilidad de acoplar el compresor de climatización.

**7. CÓMO COMPROBARLO**
Verificar las tensiones de alimentación (+12 V en borne de potencia y contacto), masas, señales de entrada de los sensores (termocontacto, trinaria/MAP) y salidas de alimentación hacia el compresor y electroventiladores utilizando un polímetro.

---

### NOTA DE PROCESO — ADAPTACIÓN DE RALENTÍ Y ESTRATEGIA EN ATASCOS / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la comunicación vía CAN-Bus entre la UCE del climatizador y la UCE del motor para compensar la carga del compresor y aumentar las revoluciones en situaciones de retención o tráfico denso.

**2. FUNDAMENTO**
El compresor absorbe potencia mecánica del motor térmico. La UCE del climatizador informa a la UCE del motor del rendimiento solicitado para que esta adapte la velocidad de ralentí. En situaciones de atasco con baja potencia frigorífica, la UCE de motor incrementa voluntariamente el régimen para mejorar el rendimiento del compresor.

**3. CONDICIONES PREVIAS**
Motor en marcha a temperatura de servicio y sistema de climatización en funcionamiento.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Ajuste básico de ralentí por carga de A/C:**
  - La UCE del climatizador vuelca al CAN-Bus un mensaje indicando un rendimiento del compresor superior al 2%.
  - La UCE del motor analiza el mensaje y ajusta progresivamente el régimen de ralentí para compensar el par absorbido.
* **Función para retenciones y atascos:**
  - Si el vehículo circula a una velocidad **inferior a 5 km/h** y el sensor de temperatura a la salida del evaporador detecta insuficiente potencia frigorífica estando el compresor activado al máximo (**98%**), la UCE de climatización envía un mensaje al CAN-Bus de confort.
  - La UCE del motor recibe este mensaje y eleva automáticamente las revoluciones del motor térmico al ralentí para aumentar el caudal de refrigerante del compresor y mejorar el rendimiento frigorífico.

**6. VALORES DE REFERENCIA**
| Parámetro de Control | Condición de Activación | Reacción del Sistema |
| :--- | :--- | :--- |
| **Mensaje de Carga Estándar** | Rendimiento del compresor > 2% | Ajuste de ralentí para compensar carga |
| **Función para Atascos** | Velocidad < 5 km/h + Compresor al 98% + Falta de frío en evaporador | Incremento de las rpm de ralentí del motor |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Interpretar la elevación autónoma del ralentí con el vehículo parado como una falla en la mariposa o inyección; se trata de la función para atascos del sistema de climatización.

**8. VERIFICACIÓN FINAL**
Verificar mediante la máquina de diagnosis la recepción de la trama de rendimiento en la UCE de motor y la elevación de las rpm al simular alta demanda al ralentí.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — ELECTROVENTILADORES DE FUNCIONAMIENTO CONTINUO REGULADOS POR PWM
UBICACIÓN: Montados en el frontal del radiador de refrigeración y condensador.
APLICACIÓN: Sistemas de refrigeración y climatización de última generación.

**1. MISIÓN**
Ajustar de forma continua e ilimitada la velocidad de giro de los ventiladores para adaptar el caudal de aire a las necesidades térmicas del motor y del sistema de climatización.

**2. PRINCIPIO DE FUNCIONAMIENTO**
El propio conjunto del electroventilador incorpora una electrónica de control. Recibe desde la UCE del motor una señal de frecuencia fija con modulación por anchura de pulso (**PWM**). Al incrementar la proporción de periodo positivo de la señal, la electrónica aumenta de forma proporcional la velocidad de giro de los ventiladores.

**3. CARACTERÍSTICAS**
Motor eléctrico con unidad electrónica integrada de control comandada por línea de señal PWM de alta frecuencia.

📷 IMAGEN: Diagrama de la señal PWM y regulación continua de los electroventiladores — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 86

**4. VALORES DE TRABAJO**
* Velocidad máxima de trabajo: Proporción de periodo positivo PWM **superior al 90%**.
* Rango del modo de emergencia: Señal PWM **inferior al 8%** o **superior al 95%**.

**5. ANOMALÍAS FRECUENTES**
Corte o derivación a masa/positivo del cable de señal PWM entre la UCE del motor y la electrónica de los ventiladores.

**6. COMPORTAMIENTO EN AVERÍA**
Si la señal PWM recibida cae por debajo del 8% o supera el 95% (ausencia de señal o cortocircuito), se activa la función de emergencia: los dos electroventiladores se ponen a funcionar a la **velocidad máxima inmediatamente al conectar el contacto** para proteger el motor.

**7. CÓMO COMPROBARLO**
Conectar un osciloscopio en el cable de señal de excitación para medir el porcentaje de periodo positivo de la señal PWM y consultar los códigos de avería registrados con la máquina de diagnosis.

---

### NOTA DE ELEMENTO — INTERRUPTOR DE CLIMATIZACIÓN (INTERRUPTOR AC)
UBICACIÓN: Cuadro o panel de mandos en el salpicadero.
APLICACIÓN: Sistemas de aire acondicionado y climatización manuales o automáticos.

**1. MISIÓN**
Transmitir la orden de mando del usuario para habilitar la conexión del acoplamiento magnético del compresor y activar la ventilación.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Pulsador o interruptor eléctrico. En sistemas automáticos, al accionarlo se conectan simultáneamente la turbina de aire fresco y el ventilador del radiador. En sistemas manuales, exige la selección previa de alguna velocidad en la turbina para permitir el paso de corriente. Puede conectarse en serie con un conmutador de temperatura exterior (< 5 ºC) o con el termostato del evaporador.

**3. CARACTERÍSTICAS**
Conmutador de accionamiento manual integrado en la consola.

**4. VALORES DE TRABAJO**
* Condición de inhibición exterior: Temperatura ambiente < 5 ºC (abierto por conmutador de temperatura exterior).

**5. ANOMALÍAS FRECUENTES**
Falso contacto en las pistas eléctricas internas o fallo en la línea en serie con la sonda exterior.

**6. COMPORTAMIENTO EN AVERÍA**
El compresor no acopla y el sistema de climatización no genera aire frío.

**7. CÓMO COMPROBARLO**
Medir la continuidad eléctrica entre bornes con un polímetro al pulsar la tecla AC y verificar la llegada de tensión (+12 V) hacia la línea de activación.

---

### NOTA DE ELEMENTO — VÁLVULA DE DESCARGA POR SOBREPRESIÓN
UBICACIÓN: Montada en la salida de alta presión del compresor.
APLICACIÓN: Dispositivo mecánico de seguridad del circuito de aire acondicionado.

**1. MISIÓN**
Descargar refrigerante a la atmósfera para prevenir la reventación de tuberías o componentes en caso de aumentos extremos e incontrolados de presión en el circuito.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Válvula mecánica de tarado por muelle. Permanece cerrada en condiciones normales; cuando la presión de alta alcanza el umbral de disparo, vence la fuerza del muelle, abre la descarga y se vuelve a cerrar cuando la presión cae al valor de restablecimiento.

**3. CARACTERÍSTICAS**
Válvula roscada sobre el cuerpo del compresor. Equipa de fábrica un precinto de plástico o aluminio que revienta al activarse por primera vez.

**4. VALORES DE TRABAJO**
* Presión de apertura (disparo): **Aproximadamente 38 bares**.
* Presión de reenganche (cierre): **Aproximadamente 30 a 35 bares**.

**5. ANOMALÍAS FRECUENTES**
Disparo de la válvula por obturación en el circuito frigorífico o por fallo de los electroventiladores, provocando la rotura del precinto.

**6. COMPORTAMIENTO EN AVERÍA**
Escape masivo de la carga de fluido refrigerante al exterior y precinto de plástico/aluminio destruido.

**7. CÓMO COMPROBARLO**
Inspeccionar visualmente el precinto de la válvula (si está roto, la válvula se ha activado) y verificar la estanqueidad. Para sustituir la válvula es obligatorio vaciar previamente el circuito.

---

### NOTA DE ELEMENTO — SENSOR DE TEMPERATURA DEL EVAPORADOR
UBICACIÓN: Insertado entre las aletas del evaporador en la caja climática.
APLICACIÓN: Protección contra congelación del condensado en el evaporador.

**1. MISIÓN**
Medir la temperatura interna del evaporador para desconectar el compresor antes de que el agua condensada se congele y bloquee el paso de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termistor de Coeficiente de Temperatura Negativo (NTC) o termostato de desconexión directa. La UCE del climatizador analiza su señal y desactiva el embrague del compresor cuando la temperatura roza el punto de congelación, volviendo a conectarlo al subir la temperatura.

**3. CARACTERÍSTICAS**
Sonda térmica NTC de inserción física entre aletas.

**4. VALORES DE TRABAJO**
* Umbral de desconexión del compresor: Temperatura entre **-1 ºC y 0 ºC**.
* Umbral de reconexión del compresor: Temperatura alcanzada de **3 ºC**.

**5. ANOMALÍAS FRECUENTES**
Deriva en la resistencia NTC o interrupción del cableado eléctrico.

**6. COMPORTAMIENTO EN AVERÍA**
Si la sonda falla abriendo el circuito, el compresor no se conecta; si falla manteniendo la señal alta, se produce la congelación física del evaporador obstruyendo el paso del caudal de aire al habitáculo.

**7. CÓMO COMPROBARLO**
Medir la resistencia eléctrica NTC de la sonda a temperatura ambiente y sumergida en agua helada con un polímetro, o verificar el valor indicado en los bloques de medición de la máquina de diagnosis.

---

### NOTA DE ELEMENTO — CONMUTADOR DE PRESIÓN (TRINARIA)
UBICACIÓN: Roscado directamente en el tubo de alta presión o en el cuerpo del filtro deshidratador.
APLICACIÓN: Protección por alta/baja presión y control de electroventiladores en sistemas A/C convencionales.

**1. MISIÓN**
Vigilar las condiciones de presión en el lado de alta para desacoplar el compresor en caso de presiones críticas y activar la velocidad rápida de los ventiladores.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Conmutador electromecánico triple de 4 vías con tres funciones de control independientes accionadas por deformación de membranas según la presión del gas:
* Contactos 1 y 2: Desconectan el acoplamiento magnético por alta o baja presión.
* Contactos 3 y 4: Alimentan directamente el electroventilador a máxima velocidad.

📷 IMAGEN: Sección y conexiones del presostato trinario — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 88

**3. CARACTERÍSTICAS**
Presostato electromecánico de combinación triple con rosca hidráulica.

**4. VALORES DE TRABAJO**
* Corte por baja presión (fuga de gas): Presión **inferior a 2 bares**.
* Conexión de electroventilador a máxima velocidad: Presión **superior a 16 bares**.
* Corte por alta presión (condensador sucio / obturación): Presión **entre 24 y 32 bares**.

**5. ANOMALÍAS FRECUENTES**
Falso contacto en los platinos internos o inmovilización mecánica del émbolo presostático.

**6. COMPORTAMIENTO EN AVERÍA**
El compresor no acopla (por estar fuera del rango 2–32 bar o presostato roto) o no salta la velocidad rápida de los electroventiladores al subir la presión en parado.

**7. CÓMO COMPROBARLO**
Verificar continuidad con un polímetro entre bornes 1-2 (deben estar cerrados con presión entre 2 y 32 bar) y entre bornes 3-4 (deben cerrarse al superar 16 bar de alta en el manómetro).

---

### NOTA DE ELEMENTO — SENSOR MAP DE PRESIÓN EN ALTA
UBICACIÓN: Montado en la tubería de alta presión del circuito frigorífico.
APLICACIÓN: Sustituto electrónico del presostato trinario en sistemas de climatización modernos.

**1. MISIÓN**
Medir de forma continua la presión del fluido refrigerante y transmitir una señal electrónica para regular la velocidad de los electroventiladores, gestionar la carga sobre el motor y proteger el compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Sensor piezoeléctrico compuesto por un cristal de silicio y un microprocesador. La presión de alta deforma el cristal de silicio cambiando su resistencia eléctrica. El microprocesador interno convierte la variación de tensión en una señal digital cuadrada de 12 V modulada en anchura de impulso (PWM) proporcional a la presión.

📷 IMAGEN: Componentes internos del sensor MAP de alta presión — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 89
📷 IMAGEN: Oscilogramas de la señal PWM del sensor MAP a 5 bar y 14 bar — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 90

**3. CARACTERÍSTICAS**
Sensor electrónico estanco con obús de retención hidráulica (permite sustitución sin evacuar la carga de gas). Alimentado a 12 V (o 5 V en versiones analógicas de 1 a 4 V).

**4. VALORES DE TRABAJO**
* Tensión de alimentación: 12 V (o 5 V según versión).
* Ancho de impulso PWM a presión de 1,4 bar (mínima): **2,6 ms**.
* Ancho de impulso PWM a reposo (~5 bar): **5 ms**.
* Ancho de impulso PWM a presión de trabajo (~14 bar): **8 ms**.
* Ancho de impulso PWM a presión de 37 bar (máxima): **18 ms**.
* En versión analógica (5 V): Señal variable comprendida entre **1 V y 4 V**.

**5. ANOMALÍAS FRECUENTES**
Avería en la electrónica del microprocesador o sulfatación en los pines del conector de 3 vías.

**6. COMPORTAMIENTO EN AVERÍA**
La UCE registra el código de error *"Transmisor de alta presión, señal muy baja"*, interrumpiendo inmediatamente la activación del compresor por motivos de seguridad.

**7. CÓMO COMPROBARLO**
Conectar un osciloscopio en el pin de señal respecto a masa para verificar la frecuencia y el ancho del impulso en milisegundos (ms) según la presión del manómetro, o comprobar la lectura en bares en el equipo de diagnosis.

---

### NOTA DE ELEMENTO — CONMUTADORES SEPARADOS DE ALTA Y BAJA PRESIÓN
UBICACIÓN: Conmutador de baja en la tubería de baja presión; conmutador de alta en la tubería de alta presión.
APLICACIÓN: Circuitos de aire acondicionado equipados con estrangulador (tubo calibrado).

**1. MISIÓN**
Proteger mecánicamente el circuito frigorífico desconectando el compresor si la presión de baja es insuficiente o la de alta es excesiva.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Dos presostatos electromecánicos independientes:
* **Conmutador de baja presión:** Abre sus contactos y desconecta el embrague si la presión cae por debajo del umbral de seguridad, evitando la congelación del evaporador y protegiendo el compresor contra falta de gas/lubricante.
* **Conmutador de alta presión:** Abre sus contactos si la presión supera el umbral máximo, evitando que salte la válvula mecánica de seguridad del compresor.

**3. CARACTERÍSTICAS**
Dos conmutadores electromecánicos independientes de rosca de 2 vías cada uno.

**4. VALORES DE TRABAJO**
* Desconexión por baja presión: Presión **inferior a 1,7 bares**.
* Desconexión por alta presión: Presión **superior a 30 bares**.

**5. ANOMALÍAS FRECUENTES**
Falso contacto interno por deterioro de platinos o fugas en la rosca de acoplamiento.

**6. COMPORTAMIENTO EN AVERÍA**
Inhibición de la marcha del compresor de climatización.

**7. CÓMO COMPROBARLO**
Medir la continuidad eléctrica con polímetro entre los bornes del conmutador de baja (debe existir continuidad con p > 1,7 bar) y del conmutador de alta (debe existir continuidad con p < 30 bar).

---

### NOTA DE ELEMENTO — TERMOCONMUTADOR DE SEGURIDAD POR TEMPERATURA DE REFRIGERANTE
UBICACIÓN: Insertado en el circuito de refrigeración del motor (culata, bloque o caja de aguas).
APLICACIÓN: Protección contra sobrecalentamiento del motor en vehículos con aire acondicionado.

**1. MISIÓN**
Desconectar la carga mecánica adicional que supone el compresor cuando el líquido refrigerante del motor alcanza temperaturas peligrosas por alta exigencia.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termocontacto bimetálico (o sensor NTC procesado por la UCE de motor que transmite la orden por CAN-Bus). Abre la línea de alimentación de la bobina del compresor cuando el líquido refrigerante supera el límite térmico configurado.

**3. CARACTERÍSTICAS**
Termosensor bimetálico de 2 vías o sonda NTC conectada a la UCE de motor.

**4. VALORES DE TRABAJO**
* Desconexión del compresor por sobrecalentamiento: **Aproximadamente 119 ºC**.
* Reconexión del compresor: **Aproximadamente 112 ºC**.

**5. ANOMALÍAS FRECUENTES**
Oxidación de los contactos bimetálicos o deriva en la curva de resistencia NTC.

**6. COMPORTAMIENTO EN AVERÍA**
Desconexión injustificada del aire acondicionado con el motor a temperatura normal, o falta de desconexión preventiva ante un calentamiento real del motor.

**7. CÓMO COMPROBARLO**
Comprobar continuidad o medir la resistencia entre bornes al calentar el sensor por encima de 119 ºC, o verificar el mensaje de desconexión por temperatura de motor en la máquina de diagnosis.

---

COBERTURA: documento «Nº10. Electroventiladores. Regulación y Seguridad.pdf», páginas 84 a 93 de 93. [completo]

---

💡 ¿Quieres que preparemos alguna hoja de ejercicios práticos sobre interpretación de oscilogramas del sensor MAP o una guía de diagnóstico para el sistema de electroventiladores PWM para el taller?