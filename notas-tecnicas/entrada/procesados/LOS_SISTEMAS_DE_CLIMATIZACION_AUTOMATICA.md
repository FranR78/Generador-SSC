### **NOTA DE PROCESO — CONFORT TÉRMICO Y ACONDICIONAMIENTO DEL HABITÁCULO / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar el proceso de acondicionamiento del aire en el habitáculo del vehículo para alcanzar el confort térmico mediante la mezcla de aire ambiente y aire soplado. Se aplica en el diseño y análisis del funcionamiento del sistema de climatización automática.

**2. FUNDAMENTO**  
El sistema introduce aire exterior a través de la toma de aire, haciéndolo pasar por el evaporador y el radiador de calefacción a través del conjunto de distribución de trampillas. El aire acondicionado es conducido por los canales y difusores hacia el habitáculo, donde se mezcla con el aire ambiente hasta lograr la temperatura de consigna fijada por el usuario. El tiempo necesario para alcanzar dicha convergencia depende del aislamiento térmico, la conductividad y la temperatura inicial de las paredes del habitáculo y del salpicadero.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema del flujo de aire entre conductos, paredes del habitáculo y salpicadero — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 1-3  
- El aire exterior entra por la toma de aire e ingresa en el conjunto de distribución de trampillas (conjunto A/C).  
- El aire atraviesa el evaporador (donde pierde calor) y/o el radiador de calefacción (donde absorbe calor) según la posición de las trampillas.  
- El impulsor fuerza la circulación del caudal de aire soplado a través de las canalizaciones del salpicadero hacia los difusores.  
- El aire soplado se impulsa al interior del habitáculo y se mezcla con el aire ambiente interior.  
- El intercambio térmico progresivo con el aire ambiente y las paredes interiores continúa hasta alcanzar la temperatura de consigna.

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Ignorar la influencia de la temperatura inicial del salpicadero y de las paredes del habitáculo: si el vehículo ha estado expuesto al sol o al frío extremo, el tiempo de convergencia térmica será mayor debido a la transferencia de calor de la estructura.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — TABLERO DE MANDOS Y PANTALLA DE PRESENTACIÓN**
UBICACIÓN: Salpicadero del vehículo, en la consola central.  
APLICACIÓN: Interfaz de usuario y control del sistema de climatización automática.

**1. MISIÓN**  
Permitir al usuario seleccionar los parámetros de confort deseados (temperatura de consigna, velocidad del ventilador y distribución del aire) y visualizar el estado de funcionamiento del sistema en cada momento.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Actúa como la interfaz de comunicación entre el usuario y la centralita electrónica. Los botones transmiten las órdenes del usuario a la tarjeta electrónica. En modo automático, la propia centralita puede activar o modificar la selección de los botones y reflejar dichos cambios en el display.

**3. CARACTERÍSTICAS**  
Panel provisto de botones/mandos de selección y pantalla gráfica de visualización (display). Montado directamente sobre el frontal que aloja la tarjeta electrónica.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Incapacidad del usuario para introducir las órdenes de consigna o falta de indicación visual del estado del climatizador en el display.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDA DE TEMPERATURA DEL HABITÁCULO**
UBICACIÓN: Parte delantera del salpicadero, cerca del limpiaparabrisas, o bien sobre el propio climatizador en el tablero de mandos.  
APLICACIÓN: Climatización automática.

**1. MISIÓN**  
Medir de forma continua la temperatura instantánea del aire en el interior del habitáculo e informar a la centralita para verificar si se ha alcanzado la temperatura de consigna.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Captador térmico que genera una señal eléctrica proporcional a la temperatura ambiente del habitáculo. Envía esta información como señal de entrada a la tarjeta electrónica para que regule el caudal, la temperatura de mezcla y la distribución de aire.

**3. CARACTERÍSTICAS**  
Sensor de temperatura (sonda) conectado como señal de entrada a la centralita.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
La centralita pierde la referencia de la temperatura real interior, lo que impide regular correctamente el sistema para alcanzar y mantener la temperatura de consigna.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDA DE TEMPERATURA EXTERIOR**
UBICACIÓN: Parte baja del retrovisor derecho (u otras ubicaciones del vehículo).  
APLICACIÓN: Medición de la temperatura atmosférica para el sistema de climatización automática.

**1. MISIÓN**  
Captar la temperatura del aire exterior al vehículo e informar a la centralita electrónica para calcular la regulación de mezcla, caudal y distribución de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Genera una señal de entrada hacia la tarjeta electrónica según la temperatura ambiente exterior. La centralita compara este valor con el de la sonda de aire soplado para determinar la posición correcta de la trampilla de mezcla.

**3. CARACTERÍSTICAS**  
Sonda térmica instalada en el exterior del habitáculo conectada a la centralita.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Cálculo erróneo en el posicionado de la trampilla de mezcla y en la determinación del caudal de aire necesario para acondicionar el habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDA DE TEMPERATURA DE AIRE SOPLADO**
UBICACIÓN: Interior del conjunto de distribución de trampillas, colocada en los difusores frontales, conducto de pies o conducto de parabrisas.  
APLICACIÓN: Control del aire tratado impulsado hacia el habitáculo.

**1. MISIÓN**  
Medir la temperatura del aire que sale por los conductos de distribución para verificar que la mezcla térmica de aire sea la adecuada antes de ingresar al habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Mide la temperatura del caudal de aire soplado y envía una señal de entrada a la centralita. Junto con la sonda exterior, permite a la tarjeta electrónica determinar si la posición de la trampilla de mezcla, el caudal y la distribución son correctos para converger a la temperatura de consigna.

**3. CARACTERÍSTICAS**  
Sensor térmico. Pueden existir varias sondas distribuidas en diferentes conductos (frontales, pies, parabrisas).

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Ajuste impreciso de la trampilla de mezcla, provocando que el aire salga demasiado caliente o demasiado frío por los difusores.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CONJUNTO DE DISTRIBUCIÓN DE TRAMPILLAS (CONJUNTO A/C)**
UBICACIÓN: Interior del salpicadero, enlazando el compartimento motor con el habitáculo.  
APLICACIÓN: Mueble climatizador de regulación y distribución de aire.

**1. MISIÓN**  
Alojar los componentes intercambiadores de calor y encauzar, mezclar y distribuir el caudal de aire impulsado hacia las diferentes salidas del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Recibe el aire exterior soplado por el impulsor. Hace pasar el flujo de aire a través del evaporador y/o del radiador de calefacción según la orientación de sus trampillas internas accionadas por actuadores, derivándolo hacia los difusores correspondientes.

**3. CARACTERÍSTICAS**  
Mueble o carcasa que contiene en su interior el evaporador, el radiador de calefacción, el impulsor, los actuadores con sus trampillas, la sonda del evaporador y la sonda de aire soplado.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Fallo en la mezcla o en la distribución del aire hacia las distintas zonas del habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — EVAPORADOR**
UBICACIÓN: Alojado en el interior del conjunto de distribución de trampillas (conjunto A/C).  
APLICACIÓN: Elemento productor de frío del circuito de climatización.

**1. MISIÓN**  
Producir frío en el circuito de climatización, absorbiendo el calor del aire exterior que lo atraviesa para enfriarlo antes de que entre al habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Intercambiador térmico perteneciente al circuito de frío. El fluido frigorífico circula por su interior absorbiendo la energía térmica del aire impulsado que pasa entre sus aletas, provocando el enfriamiento de dicho aire.

**3. CARACTERÍSTICAS**  
Intercambiador de calor integrado en el conjunto A/C e interconectado por las canalizaciones del circuito de frío.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Formación de hielo en su superficie si trabaja a temperaturas excesivamente bajas.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de producción de aire frío hacia el habitáculo o bloqueo del paso de aire por congelación.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — RADIADOR DE CALEFACCIÓN**
UBICACIÓN: Alojado en el interior del conjunto de distribución de trampillas (conjunto A/C).  
APLICACIÓN: Elemento intercambiador de calor del circuito de calefacción.

**1. MISIÓN**  
Ceder calor al aire entrante desde el exterior utilizando la energía térmica del líquido refrigerante del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Intercambiador de calor perteneciente al circuito de calor. El líquido refrigerante caliente procedente del motor circula por su interior; el aire atraído por el impulsor atraviesa sus aletas, absorbiendo calor antes de ser soplado al habitáculo.

**3. CARACTERÍSTICAS**  
Radiador intercalado en el circuito de refrigeración del motor e integrado dentro del mueble A/C.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de calefacción en el aire soplado al habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — IMPULSOR DE AIRE (ELECTROVENTILADOR DEL HABITÁCULO)**
UBICACIÓN: Conjunto de distribución de trampillas.  
APLICACIÓN: Circuito de frío, circuito de calor y conjunto A/C.

**1. MISIÓN**  
Garantizar la circulación forzada del caudal de aire exterior a través del conjunto A/C y los conductos hacia el interior del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Ventilador eléctrico accionado por señal de salida de la centralita. Al recibir la orden electrónica, gira a la velocidad requerida para aumentar o disminuir el caudal de aire soplado hacia los difusores.

**3. CARACTERÍSTICAS**  
Soplador / electroventilador accionado eléctricamente por la tarjeta electrónica.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Ausencia o deficiencia en la circulación de aire hacia el habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDA DEL EVAPORADOR**
UBICACIÓN: Alojada en la zona más fría del evaporador, dentro del conjunto A/C.  
APLICACIÓN: Protección contra la congelación del evaporador en sistemas de climatización.

**1. MISIÓN**  
Detectar el riesgo de formación de hielo en el evaporador e informar a la centralita para desacoplar el compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Mide la temperatura en el punto más frío del evaporador y envía una señal de entrada a la tarjeta electrónica. Si la temperatura alcanza el umbral de congelación, la centralita envía una señal al compresor para que corte su funcionamiento (en compresores de cilindrada fija).

**3. CARACTERÍSTICAS**  
Sonda térmica de temperatura conectada como señal de entrada a la centralita.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Formación de hielo en el evaporador por no cortar el compresor a tiempo, o corte permanente e injustificado del compresor.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — ACTUADORES DE TRAMPILLAS**
UBICACIÓN: Montados sobre el conjunto de distribución de trampillas.  
APLICACIÓN: Movimiento automatizado de las trampillas de mezcla y distribución.

**1. MISIÓN**  
Mover mecánicamente cada una de las trampillas del conjunto A/C para regular la mezcla de aire y la distribución hacia los distintos difusores.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Dispositivos electromecánicos que reciben señales de salida de la tarjeta electrónica. Al recibir la corriente de la centralita, el actuador desplaza la trampilla correspondiente a la posición calculada en cada instante.

**3. CARACTERÍSTICAS**  
Actuadores eléctricos asociados individualmente a cada trampilla.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Bloqueo de trampillas en una posición fija, impidiendo modificar la temperatura de mezcla o la zona de salida del aire.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — COMPRESOR DE CLIMATIZACIÓN**
UBICACIÓN: Compartimento motor, arrastrado por la correa del alternador.  
APLICACIÓN: Circuito de frío de la climatización.

**1. MISIÓN**  
Comprimir y hacer circular el fluido frigorífico por todo el circuito de aire acondicionado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Es arrastrado mecánicamente por el motor térmico a través de la correa del alternador. Recibe señales de control desde la centralita (que pueden acoplarlo o cortarlo mediante el presostato, la sonda del evaporador, la sonda de refrigerante o el módulo de inyección).

**3. CARACTERÍSTICAS**  
Órgano de compresión accionado por correa. Puede ser de cilindrada fija o variable.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
El fluido frigorífico no circula y el sistema no genera frío.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — BOMBA DE LÍQUIDO REFRIGERANTE**
UBICACIÓN: Compartimento motor, accionada por la correa del alternador.  
APLICACIÓN: Circuito de refrigeración del motor y circuito de calor de la climatización.

**1. MISIÓN**  
Asegurar la circulación continua del líquido refrigerante a través del motor térmico y del radiador de calefacción.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Bomba hidráulica arrastrada mecánicamente por el motor mediante la correa del alternador. Impulsa el fluido refrigerante por los manguitos hacia el radiador de refrigeración y hacia el radiador de calefacción del mueble climatizador.

**3. CARACTERÍSTICAS**  
Bomba centrífuga de accionamiento mecánico por correa.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Sobrecalentamiento del motor térmico y falta de circulación de agua caliente hacia el radiador de calefacción.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — MÓDULO DE INYECCIÓN MOTOR**
UBICACIÓN: Compartimento motor / Gestión de motor.  
APLICACIÓN: Interconexión entre la gestión de motor y la centralita de climatización.

**1. MISIÓN**  
Informa a la centralita de climatización de las demandas de carga del motor (aceleraciones bruscas) y recibe la indicación del estado del compresor para ajustar el régimen de ralentí.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Calculador electrónico interconectado con la tarjeta de climatización. En caso de aceleración fuerte, transmite la señal para cortar temporalmente el compresor y no restar potencia al motor. Asimismo, cuando el compresor está conectado, el módulo eleva el régimen de ralentí para evitar que el motor se cale.

**3. CARACTERÍSTICAS**  
Unidad de control electrónica de inyección conectada bidireccionalmente con el sistema de climatización.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida de potencia en aceleraciones con A/C conectado o caída de revoluciones y calado del motor al conectar el compresor en ralentí.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CIRCUITO DE CALOR Y REFRIGERACIÓN DEL MOTOR / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar el funcionamiento termodinámico y la circulación del fluido en el circuito de calor del motor y de la calefacción.

**2. FUNDAMENTO**  
La bomba impulsada por la correa hace circular el líquido refrigerante para absorber el calor residual del motor. El termostato gestiona la desviación inicial del flujo hacia el radiador de calefacción para calentar el aire del habitáculo. Cuando la temperatura del motor sube, el líquido se encausa hacia el radiador de refrigeración, donde el termocontacto activa el electroventilador (GMV) si el calor es excesivo.

**3. CONDICIONES PREVIAS**  
Motor térmico en funcionamiento.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema general del circuito de calor y sus componentes interconectados — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 4-5  
- La bomba de refrigerante impulsa el fluido a través del bloque del motor.  
- El termostato dirige inicialmente el líquido hacia el radiador de calefacción alojado en el conjunto A/C.  
- El impulsor fuerza el paso de aire exterior entre las aletas del radiador de calefacción, absorbiendo calor para el habitáculo.  
- El fluido caliente circula por los manguitos hacia el radiador de refrigeración exterior para evacuar el calor residual.  
- La sonda de refrigerante informa a la centralita de la temperatura del motor.  
- Si la temperatura en el radiador de refrigeración es muy elevada, el termocontacto envía la señal para conectar la 2ª velocidad del GMV.

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir la función del termostato con la del termocontacto: el termostato regula mecánicamente el paso del fluido hacia los radiadores, mientras que el termocontacto comanda eléctricamente la activación del electroventilador (GMV).

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — TERMOSTATO**
UBICACIÓN: Intercalado en los manguitos del circuito de refrigeración del motor.  
APLICACIÓN: Regulación del flujo de líquido refrigerante en el circuito de calor.

**1. MISIÓN**  
Dirigir inicialmente todo el flujo de líquido refrigerante hacia el radiador de calefacción y regular el paso hacia el radiador de refrigeración según la temperatura.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Válvula termostática sensible a la temperatura del líquido refrigerante. En fase de calentamiento, prioriza el paso de fluido hacia el radiador de calefacción para acelerar la calefacción del habitáculo y alcanzar la temperatura de servicio.

**3. CARACTERÍSTICAS**  
Válvula pasiva reguladora de caudal colocada en el manguito de refrigeración.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Tardanza excesiva en salir aire caliente por la calefacción o sobrecalentamiento del motor si se queda bloqueado cerrado.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDA DE TEMPERATURA DEL LÍQUIDO REFRIGERANTE**
UBICACIÓN: Circuito de refrigeración del motor.  
APLICACIÓN: Vigilancia térmica del motor para la centralita de climatización.

**1. MISIÓN**  
Medir la temperatura del líquido refrigerante del motor e informar a la centralita de climatización para desacoplar el compresor en caso de sobrecalentamiento.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Captador térmico que transmite la señal de temperatura del motor a la tarjeta electrónica. Si la temperatura del líquido refrigerante es excesivamente elevada, la centralita ordena el corte del compresor para reducir la carga sobre el motor.

**3. CARACTERÍSTICAS**  
Sonda térmica roscada en el circuito de líquido refrigerante.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no se desconecta ante un calentamiento del motor o se desactiva sin causa real.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — TERMOCONTACTO Y ELECTROVENTILADOR (GMV)**
UBICACIÓN: Radiador de refrigeración (termocontacto) y frontal del vehículo (GMV).  
APLICACIÓN: Evacuación de calor del radiador y del condensador.

**1. MISIÓN**  
Forzar la corriente de aire a través del radiador de refrigeración y del condensador cuando la temperatura del motor o la presión del refrigerante superan los límites.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El termocontacto detecta la temperatura en el radiador de refrigeración y envía una señal a la centralita cuando esta es elevada para conectar la velocidad del electroventilador (GMV). Asimismo, la centralita activa el GMV en 2ª velocidad si el presostato detecta una presión excesiva en el condensador.

**3. CARACTERÍSTICAS**  
Termocontacto eléctrico asociado a un grupo motoventilador (GMV) de varias velocidades comandado por la centralita.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Sobrecalentamiento del líquido refrigerante en el radiador y disparo por sobrepresión en el circuito de aire acondicionado.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — PRESOSTATO DEL CIRCUITO FRIGORÍFICO**
UBICACIÓN: Tuberías del circuito de aire acondicionado / alta presión.  
APLICACIÓN: Protección de presión del circuito de frío y control del electroventilador.

**1. MISIÓN**  
Proteger el circuito frigorífico desconectando el compresor ante presiones anormales (demasiado altas o demasiado bajas) y activar la 2ª velocidad del GMV si la presión es elevada.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Captador de presión hidráulico-eléctrico. Envía una señal de entrada continua o por conmutación a la centralita. Si la presión cae por debajo del mínimo (fuga) o supera el máximo seguro, la centralita corta la alimentación del compresor. Si excede un valor intermedio alto, ordena la conexión de la 2ª velocidad del GMV para reducir la presión en el condensador.

**3. CARACTERÍSTICAS**  
Presostato / captador de presión conectado eléctricamente a la tarjeta electrónica.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad del compresor o falta de salto de la 2ª velocidad del GMV provocando sobrepresión destructiva.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — MÓDULO ELECTRÓNICO DE REFRIGERACIÓN**
UBICACIÓN: Compartimento motor / Sistema de refrigeración.  
APLICACIÓN: Interfaz de datos entre el sistema de refrigeración y la centralita de climatización.

**1. MISIÓN**  
Informar a la centralita de climatización de diversos parámetros de la refrigeración del motor y de la calefacción.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Módulo electrónico de control interconectado de forma bidireccional con la tarjeta electrónica del climatizador. Procesa señales térmicas y de gestión de ventiladores y las transmite a la centralita.

**3. CARACTERÍSTICAS**  
Unidad electrónica de gestión de refrigeración conectada al calculador principal.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Fallos de coordinación entre la activación del climatizador y la gestión de ventiladores del motor.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CIRCUITO DE FRÍO Y CIRCULACIÓN DEL REFRIGERANTE / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar el ciclo cerrado de refrigeración y la función de sus componentes en el circuito de frío del vehículo.

**2. FUNDAMENTO**  
El fluido frigorífico es comprimido por el compresor e impulsado a alta presión hacia el condensador, donde cede calor al exterior con ayuda del GMV. A continuación, atraviesa el filtro deshidratante para purificarse de humedad y partículas. Al llegar al evaporador, se expande y absorbe calor del aire exterior soplado por el impulsor, produciendo frío antes de retornar por las canalizaciones al compresor.

**3. CONDICIONES PREVIAS**  
Compresor acoplado y presiones del circuito dentro de márgenes de trabajo.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema del circuito de frío con sus componentes y canalizaciones — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 5  
- El compresor comprime el fluido frigorífico gaseoso.  
- El gas caliente circula por las canalizaciones hacia el condensador.  
- En el condensador, el fluido cede calor al aire impulsado por el GMV y se licúa.  
- El líquido frigorífico pasa por el filtro deshidratante, donde se retiene la humedad y se filtra de impurezas.  
- El fluido llega al evaporador dentro del conjunto A/C, donde ebulles absorbiendo el calor del aire del habitáculo.  
- La sonda del evaporador vigila la temperatura para evitar la congelación.  
- El fluido en fase gaseosa retorna por las canalizaciones de baja presión hacia el compresor.

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Ignorar el estado del filtro deshidratante: si se satura de humedad, pueden formarse tapones de hielo o acidez que dañe el compresor y las canalizaciones.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CONDENSADOR**
UBICACIÓN: Compartimento motor, en el frontal del vehículo.  
APLICACIÓN: Intercambiador de calor de alta presión del circuito de frío.

**1. MISIÓN**  
Evacuar al aire exterior el calor extraído del habitáculo y el generado por la compresión del fluido frigorífico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Intercambiador térmico situado en el circuito de frío. El fluido frigorífico a alta presión y temperatura fluye por sus tubos; el flujo de aire atravesado (forzado por la marcha o por el GMV) absorbe el calor, provocando la condensación del fluido.

**3. CARACTERÍSTICAS**  
Radiador de condensación instalado en el compartimento motor enfrente del GMV.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Aumento excesivo de la presión en el circuito de frío y pérdida de rendimiento frigorífico.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — FILTRO DESHIDRATANTE**
UBICACIÓN: Compartimento motor, intercalado en las canalizaciones del circuito de frío.  
APLICACIÓN: Filtrado y secado del fluido frigorífico.

**1. MISIÓN**  
Retener impurezas sólidas y absorber la humedad disuelta en el fluido frigorífico para proteger los componentes del circuito.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Recipiente filtrante y desecante. El fluido en estado líquido circula por su interior atravesando un elemento filtrante de partículas y una sustancia química higroscópica que retiene las moléculas de agua.

**3. CARACTERÍSTICAS**  
Filtro deshidratador metálico integrado en las canalizaciones entre el condensador y el evaporador.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Saturación del material deshidratante o taponamiento por impurezas.

**6. COMPORTAMIENTO EN AVERÍA**  
Restricción al flujo de refrigerante, bajada de rendimiento o congelación de componentes por presencia de humedad libre.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CANALIZACIONES DEL FLUIDO FRIGORÍFICO**
UBICACIÓN: Distribuidas entre el compartimento motor y el conjunto A/C del salpicadero.  
APLICACIÓN: Conducción estanca del fluido en el circuito de frío.

**1. MISIÓN**  
Transportar el fluido frigorífico en sus diferentes estados (líquido y gas) a través de los componentes del circuito de frío.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Tuberías y manguitos estancos que interconectan el compresor, condensador, filtro deshidratante y evaporador. Soportan las presiones de alta y baja del sistema sin permitir fugas.

**3. CARACTERÍSTICAS**  
Conducciones metálicas y de caucho sintético especial para refrigerante.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Fugas de fluido frigorífico por poro o racor defectuoso.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida de la carga de fluido frigorífico y disparo del presostato por baja presión.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — LÓGICA DE CONTROL Y GESTIÓN DE LA TARJETA ELECTRÓNICA / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar la arquitectura de entradas, salidas y comunicaciones bidireccionales de la tarjeta electrónica (centralita) para la regulación automática de la climatización.

**2. FUNDAMENTO**  
La tarjeta electrónica actúa como el calculador central del sistema. Recibe informaciones de sensores (entradas) sobre temperaturas y presiones, procesa las órdenes del usuario y la lógica de confort, y emite señales de mando (salidas) hacia actuadores de trampillas, impulsor, GMV y compresor. Asimismo, mantiene comunicación bidireccional con los módulos de inyección y refrigeración del motor.

**3. CONDICIONES PREVIAS**  
Encendido conectado y alimentación eléctrica de la centralita.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema de entradas, salidas y conexiones bidireccionales de la tarjeta electrónica — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 6-8  
- **Procesamiento de Entradas (Sondas y Sensores):**  
  - *Sonda de habitáculo:* Informa de la temperatura real interior.  
  - *Sondas exterior y de aire soplado:* Informan para calcular la posición de la trampilla de mezcla, el caudal y la distribución.  
  - *Sonda de evaporador:* Informa del riesgo de hielo para cortar el compresor.  
  - *Presostato y termocontacto:* Informan de presiones y temperaturas críticas para proteger el circuito y activar el GMV.  
- **Gestión de Salidas (Actuadores y Potencia):**  
  - *Actuadores:* Reciben señales para mover las trampillas del conjunto A/C.  
  - *Impulsor:* Recibe la señal para regular el caudal de aire soplado.  
  - *Compresor y GMV:* Reciben órdenes de acoplamiento/desacoplamiento y cambio de velocidad.  
- **Relación Bidireccional con Módulos del Vehículo:**  
  - *Módulo de inyección:* Coordina el corte en aceleración brusca y la elevación de ralentí.  
  - *Módulo electrónico de refrigeración:* Intercambia parámetros de temperatura de motor y demanda de calefacción/refrigeración.

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar diagnosticar el climatizador automático sin considerar las señales de los módulos de inyección o refrigeración: una falta de señal de aceleración o de temperatura del motor puede bloquear el compresor aunque el circuito frigorífico esté perfecto.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — TARJETA ELECTRÓNICA / CENTRALITA DE CLIMATIZACIÓN**
UBICACIÓN: Montada en la parte trasera del panel de mandos y pantalla del salpicadero.  
APLICACIÓN: Calculador y unidad de control principal de la climatización automática.

**1. MISIÓN**  
Procesar todas las señales de entrada de los sensores, gestionar las órdenes del usuario y controlar los actuadores y elementos de potencia para mantener el confort térmico en el habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad microprocesada provista de entradas analógicas/digitales, salidas de potencia/control e interfaces de comunicación. Analiza continuamente las temperaturas y presiones, calcula las desviaciones respecto a la consigna y gobierna los actuadores de trampillas, el impulsor, el compresor y el GMV.

**3. CARACTERÍSTICAS**  
Tarjeta o módulo electrónico ubicado detrás del display y mandos del salpicadero.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad total del modo automático, falta de respuesta de actuadores o desconexión ininterrumpida del compresor.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

COBERTURA: documento «LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 8 de 8. [completo]