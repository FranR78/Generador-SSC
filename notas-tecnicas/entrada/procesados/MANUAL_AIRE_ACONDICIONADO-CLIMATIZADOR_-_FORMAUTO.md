### **NOTA DE PROCESO — PRINCIPIOS BÁSICOS DE TERMODINÁMICA Y TRANSMISIÓN DEL CALOR / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar los principios físicos fundamentales de cambio de estado, calor sensible, calor latente, presiones y mecanismos de transmisión del calor aplicados a la climatización del automóvil.

**2. FUNDAMENTO**  
Según las leyes físicas, un cuerpo a mayor temperatura cede calor a otro de menor temperatura hasta igualarse. La adición de calor provoca aumento de temperatura o cambios de fase. Asimismo, el punto de ebullición de los líquidos depende directamente de la presión a la que se ven sometidos.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
* **Cambios de estado y calor:**  
  - **Calor sensible:** Cantidad de energía necesaria para aumentar la temperatura de un elemento sin cambiar de estado.  
  - **Calor latente:** Cantidad de energía necesaria para producir el cambio de estado de una sustancia sin variar su temperatura.  
* **Presiones:**  
  - **Presión absoluta:** Inicio de medida en el vacío absoluto o presión 0 (Presión absoluta = Presión medida + Presión atmosférica).  
  - **Presión relativa:** Medida sobre la presión atmosférica, considerando a esta como valor 0.  
  - **Vacío o depresión:** Presión por debajo de la presión atmosférica. A menor presión, menor es el punto de ebullición de un líquido.  
* **Mecanismos de transmisión de calor:**  
  - **Conducción:** Transferencia a través de un elemento sólido.  
  - **Radiación:** Transmisión mediante ondas electromagnéticas (rayos infrarrojos) sin contacto físico.  
  - **Convección:** Transmisión entre fluidos al mezclarse moléculas a diferentes temperaturas.

**6. VALORES DE REFERENCIA**  

| Parámetro / Condición | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Ebullición del agua a presión atmosférica** | **100 ºC** | A 0 mm Hg / presión atmosférica estándar |
| **Ebullición del agua a alta presión** | **118 ºC** | A 244 ºF / presión elevada |
| **Ebullición del agua bajo vacío** | **84 ºC** | A 4000 m de altitud / 183 ºF de presión reducida |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir calor sensible con calor latente al diagnosticar los cambios de fase dentro del evaporador o condensador.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — FLUIDOS REFRIGERANTES (R12 Y R134a)**
UBICACIÓN: Circuito cerrado de aire acondicionado del vehículo.  
APLICACIÓN: Sistemas de refrigeración de automoción.

**1. MISIÓN**  
Actuar como fluido caloportador que absorbe calor del habitáculo al evaporarse a baja presión y lo cede al exterior al condensarse a alta presión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Varía su temperatura de ebullición en función de la presión aplicada (curva de saturación). Al reducir la presión en la zona de baja, ebulles a temperaturas bajo cero absorbiendo calor; al comprimirse en la zona de alta, se licúa cediendo calor.

**3. CARACTERÍSTICAS**  
- **R12 (Dicloro-difluor-metano, CCl2F2):** Gas CFC. Alta estabilidad química, no inflamable. En presencia de humedad forma ácido fluorhídrico (F2OH) que ataca a Fe, Cu y Al. Forma fosgeno en presencia de llama. Incompatible con Zn y Mg.  
- **R134a (Tetrafluor-etano, CH2FCF3):** Gas HFC. Sustituto ecológico del R12 con PAO = 0. Baja toxicidad, no inflamable, compatible con metales comunes.  
- **Sustitutos industriales:** R407c (autobuses), R404a y R507 (camiones frigoríficos).

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Punto de ebullición del R12** | **-29,8 ºC (-30 ºC)** | A presión atmosférica (1,013 bar) |
| **Punto de ebullición del R134a** | **-26,1 ºC (-26 ºC)** | A presión atmosférica (1,013 bar) |
| **Calor latente de evaporación del R12** | **39,95 kcal/kg (167,27 kJ/kg)** | A -29,8 ºC y 1,013 bar |
| **Calor latente de evaporación del R134a** | **50,90 kcal/kg (213,03 kJ/kg)** | A -26,1 ºC y 1,013 bar |

**5. ANOMALÍAS FRECUENTES**  
Mezcla accidental con humedad generando ácidos corrosivos; degradación del lubricante por uso de refrigerante inadecuado.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de rendimiento frigorífico por fugas o degradación química de los componentes internos.

**7. CÓMO COMPROBARLO**  
Verificación de presión y temperatura mediante puente de manómetros en tomas de servicio e identificación de gas con analizador.

---

### **NOTA DE PROCESO — INTERCAMBIO DE CALOR EN EVAPORACIÓN Y CONDENSACIÓN / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar las transformaciones de fase del refrigerante en el evaporador y en el condensador para la transmisión de energía térmica.

**2. FUNDAMENTO**  
El cambio de estado de líquido a gas (evaporación) requiere absorción de calor sin aumentar la temperatura del fluido; el cambio de gas a líquido (condensación) exige ceder calor al entorno.

**3. CONDICIONES PREVIAS**  
Compresor en marcha e impulsión de aire activa.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema del principio de evaporación y condensación — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 8-10  
- **Principio de Evaporación:** El refrigerante entra líquido a 2 bar y -10 ºC. Al pasar el aire exterior (a 40 ºC), el líquido absorbe su calor y ebulles paulatinamente hasta pasar a 100 % gas a la salida del evaporador (10 ºC), enfriando el aire que entra al habitáculo.  
- **Principio de Condensación:** El gas caliente (60 ºC a 110 ºC, 16,7 a 20 bar) entra al condensador. Al atravesarlo el aire exterior (a 35 ºC - 40 ºC), el gas cede calor, subiendo la temperatura del aire a 50 ºC y licuando el refrigerante a la salida (50 ºC a 60 ºC, líquido subenfriado).

**6. VALORES DE REFERENCIA**  

| Etapa del circuito | Presión | Temperatura | Estado del fluido |
|---|---|---|---|
| **Entrada Evaporador** | **2 bar** | **-10 ºC** | Líquido pulverizado |
| **Salida Evaporador** | **2 bar** | **10 ºC** | Gas 100 % (recalentado) |
| **Entrada Condensador** | **16,7 bar a 20 bar** | **60 ºC a 110 ºC** | Vapor sobrecalentado |
| **Salida Condensador** | **16,7 bar a 19 bar** | **50 ºC a 60 ºC** | Líquido subenfriado |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Evaporación prematura antes de la salida del evaporador: provoca un recalentamiento excesivo del gas que impide enfriar adecuadamente el aire exterior.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CIRCUITO FRIGORÍFICO GENERAL Y ESTADOS DEL REFRIGERANTE / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Describir la división del circuito frigorífico en las zonas de alta y baja presión y definir los estados del fluido en cada tramo.

**2. FUNDAMENTO**  
El circuito se divide en dos lados mediante el compresor y la válvula de expansión. El fluido circula en un bucle cerrado experimentando cambios de presión, temperatura y estado dinámico.

**3. CONDICIONES PREVIAS**  
Compresor en marcha.

**4. EQUIPO Y MATERIAL**  
Puente de manómetros.

**5. DESARROLLO**  
- **Lado de Alta Presión (AP):** Comprende desde la salida del compresor, condensador, filtro deshidratante hasta la entrada de la válvula de expansión.  
- **Lado de Baja Presión (BP):** Comprende desde la salida de la válvula de expansión, evaporador hasta la aspiración del compresor.

**6. VALORES DE REFERENCIA**  

| Tramo del circuito | Presión de trabajo | Temperatura de trabajo | Estado físico del fluido |
|---|---|---|---|
| **Salida del compresor hacia condensador** | **10 a 20 bar** | **80 ºC a 90 ºC** | Gas a alta presión y alta temp. |
| **Salida del condensador hacia filtro/válvula** | **10 a 20 bar** | **50 ºC a 60 ºC** | Líquido a alta presión |
| **Salida de válvula hacia evaporador** | **1,5 a 3 bar** | **-10 ºC a -12 ºC** | Gas/líquido pulverizado BP |
| **Salida de evaporador hacia compresor** | **1,5 a 3 bar** | **3 ºC a 12 ºC** | Gas a baja presión y baja temp. |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Presencia de líquido en la línea de aspiración del compresor: riesgo de rotura mecánica del compresor por incompresibilidad del líquido.

**8. VERIFICACIÓN FINAL**  
Comprobación de presiones dentro de las tolerancias fijadas en la tabla según la temperatura ambiente.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — PRESOSTATO ELECTROMECÁNICO Y TRINARY**
UBICACIÓN: Tuberías de la línea de alta presión.  
APLICACIÓN: Dispositivo de seguridad y control en circuitos de climatización.

**1. MISIÓN**  
Proteger el equipo contra averías mecánicas por falta o exceso de presión, y controlar el salto de velocidad de los ventiladores del condensador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Maneja contactos eléctricos mediante membranas internas sensibles a la presión del refrigerante en cuatro etapas.

**3. CARACTERÍSTICAS**  
Presostatos individuales (alta/baja) o combinado de tres funciones (Trinary) de accionamiento por contacto mecánico.

**4. VALORES DE TRABAJO**  

| Etapa de funcionamiento | Condición de presión | Acción eléctrica resultante |
|---|---|---|
| **1ª Etapa (Sin líquido / Fuga)** | Presión muy baja | Contacto abierto: deshabilita el compresor |
| **2ª Etapa (Carga correcta)** | Presión > mínimo de activación | Contacto cerrado: alimenta el compresor |
| **3ª Etapa (Aumento de presión)** | Presión de trabajo elevada | Cierra contacto de ventiladores (máx. velocidad) |
| **4ª Etapa (Sobrepresión)** | Presión > nivel máximo | Abre contacto: desconecta compresor por seguridad |

**5. ANOMALÍAS FRECUENTES**  
Fogueo o sulfatación de los contactos eléctricos internos; fugas por la rosca de fijación.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no acopla a pesar de tener carga, o no saltan los ventiladores en máxima velocidad.

**7. CÓMO COMPROBARLO**  
Medición de continuidad entre sus bornes con multímetro comparando los estados con la presión leída en los manómetros.

---

### **NOTA DE ELEMENTO — TRANSMISOR DE ALTA PRESIÓN (PRESOSTATO ELECTRÓNICO)**
UBICACIÓN: Montado sobre el tubo de alta presión del circuito frigorífico.  
APLICACIÓN: Climatizadores modernos con gestión electrónica de motor y electroventiladores.

**1. MISIÓN**  
Medir continuamente la presión del refrigerante en todo el ciclo de trabajo y emitir una señal digital para las UCEs de climatización y motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
La presión del refrigerante actúa sobre un cristal de silicio deformándolo. La deformación varía la resistencia eléctrica y la tensión de medición captada. Un microprocesador integrado convierte esta tensión en una señal cuadrada de anchura de impulsos modulada (PWM) a una frecuencia fija de 50 Hz.

**3. CARACTERÍSTICAS**  
Sensor piezoeléctrico de 3 pines con electrónica interna alimentada a tensión constante.

**4. VALORES DE TRABAJO**  

| Presión del agente frigorífico | Anchura del impulso PWM (A) | Porcentaje del período (20 ms) |
|---|---|---|
| **Baja presión: 0,14 MPa (1,4 bar)** | **2,6 ms** | **13 % de duración del período** |
| **Alta presión: 3,7 MPa (37 bar)** | **18 ms** | **90 % de duración del período** |
| **Frecuencia de la señal PWM** | **50 Hz** | **Duración del período = 20 ms (100 %)** |

**5. ANOMALÍAS FRECUENTES**  
Interrupción de la señal o avería de la electrónica interna del sensor.

**6. COMPORTAMIENTO EN AVERÍA**  
Si la unidad de control del ventilador no detecta señal, desconecta el compresor por seguridad.

**7. CÓMO COMPROBARLO**  
Verificación con osciloscopio de la señal cuadrada PWM a 50 Hz y comprobación del cambio de anchura de pulso (ms) al variar la presión.

---

### **NOTA DE ELEMENTO — CONMUTADORES DE SEGURIDAD F73 Y F118**
CÓDIGO: F73 (Baja Presión) / F118 (Alta Presión)  
UBICACIÓN: Instalados por separado en las líneas del circuito frigorífico con estrangulador.  
APLICACIÓN: Protección específica en sistemas provistos de tubo de expansión OT.

**1. MISIÓN**  
Proteger el compresor desactivando el acoplamiento magnético por subpresión crítica o por sobrepresión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Presostatos de membrana independientes que abren sus contactos cuando las presiones sobrepasan los umbrales de ajuste.

**3. CARACTERÍSTICAS**  
Sensores mecánicos de corte por presión individuales.

**4. VALORES DE TRABAJO**  

| Conmutador de seguridad | Umbral de presión de corte | Acción de protección |
|---|---|---|
| **F73 (Baja Presión)** | **< 0,17 MPa (1,7 bar)** | Desconecta el compresor por subcarga |
| **F118 (Alta Presión)** | **> 3,0 MPa (30 bar)** | Desconecta el compresor por sobrepresión |

**5. ANOMALÍAS FRECUENTES**  
Descalibración mecánica o fallo de contactos por uso continuo.

**6. COMPORTAMIENTO EN AVERÍA**  
Interrupción permanente del circuito de alimentación de la bobina del compresor.

**7. CÓMO COMPROBARLO**  
Comprobación de continuidad en sus bornes según la presión del circuito.

---

### **NOTA DE ELEMENTO — TERMOSTATO DEL EVAPORADOR (MECÁNICO Y ELÉCTRICO)**
UBICACIÓN: En el mueble climatizador, en contacto o proximidad al evaporador.  
APLICACIÓN: Protección contra la congelación del evaporador.

**1. MISIÓN**  
Evitar la formación de hielo en el evaporador abriendo y cerrando el circuito eléctrico del embrague del compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- **Mecánico:** Interruptor gobernado por capilar/temperatura. Si la temperatura baja en exceso, abre el contacto interrumpiendo la alimentación al relé del compresor.  
- **Eléctrico:** Sonda NTC que informa continuamente a la UCE de la temperatura del evaporador.

**3. CARACTERÍSTICAS**  
Termocontacto mecánico con bulbo o sonda térmica electrónica.

**4. VALORES DE TRABAJO**  

| Tipo de termostato | Condición de corte | Acción resultante |
|---|---|---|
| **Mecánico / NTC Antihielo** | Temperatura próxima a 0 ºC | Desconecta el embrague del compresor |

**5. ANOMALÍAS FRECUENTES**  
Descalibración del capilar o corte interno del elemento sensible.

**6. COMPORTAMIENTO EN AVERÍA**  
Congelación del evaporador provocando la obstrucción total del paso de aire.

**7. CÓMO COMPROBARLO**  
Comprobar apertura de contactos en frío (mecánico) o lectura de resistencia NTC (eléctrico).

---

### **NOTA DE ELEMENTO — COMPRESOR ALTERNATIVO BIELA-MANIVELA**
UBICACIÓN: Bloque motor, accionado por correa.  
APLICACIÓN: Sistemas de aire acondicionado clásicos.

**1. MISIÓN**  
Aspirar el gas refrigerante a baja presión y comprimirlo impulsándolo hacia el condensador a alta presión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Transforma el movimiento rotativo del cigüeñal en movimiento alternativo de los pistones mediante bielas. En la carrera descendente abre la lámina de admisión por succión; en la ascendente comprime el gas y abre la lámina de descarga.

**3. CARACTERÍSTICAS**  
Consta de culata, cilindros, carcasa, cigüeñal, bielas, pistones, platillo con válvulas de lámina de aspiración/descarga y válvulas de servicio.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Desgaste de segmentos de pistón; rotura o fatiga de las láminas de la placa de válvulas.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de compresión (presiones de alta y baja descompensadas u oscilantes).

**7. CÓMO COMPROBARLO**  
Prueba de presiones en manómetros (observar si las agujas oscilan).

---

### **NOTA DE ELEMENTO — COMPRESOR AXIAL DE CILINDRADA FIJA (SIMPLE Y DOBLE EFECTO)**
UBICACIÓN: Vano motor, accionado por la correa auxiliar.  
APLICACIÓN: Climatización de vehículos.

**1. MISIÓN**  
Comprimir el refrigerante mediante pistones situados en paralelo al eje principal de accionamiento.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El giro del eje mueve un plato inclinado/oscilante que transforma la rotación en movimiento lineal alternativo de entre 4 y 6 pistones. En doble efecto, los pistones comprimen por ambas caras en cámaras opuestas.

**3. CARACTERÍSTICAS**  
- **Simple efecto:** Pistones de una cara articulados sobre el plato oscilante con engranaje guía.  
- **Doble efecto:** Pistones dobles con patines sobre el disco inclinado central.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico |
|---|---|
| **Número de cilindros** | **4 a 6 cilindros** axiales |

**5. ANOMALÍAS FRECUENTES**  
Gripado de patines o rodamientos del disco inclinado por falta de aceite.

**6. COMPORTAMIENTO EN AVERÍA**  
Ruidos mecánicos intensos y pérdida de capacidad frigorífica.

**7. CÓMO COMPROBARLO**  
Comprobación de presión en manómetros y control de giro manual del eje.

---

### **NOTA DE ELEMENTO — COMPRESOR AXIAL DE CILINDRADA VARIABLE Y VÁLVULA DE REGULACIÓN**
UBICACIÓN: Compartimento motor.  
APLICACIÓN: Climatizadores de cilindrada auto-regulable.

**1. MISIÓN**  
Adaptar el caudal de refrigerante de un mínimo a un máximo modificando la carrera de los pistones según la demanda frigorífica.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
La leva/placa oscilante varía su ángulo de inclinación respecto al eje impulsada por la diferencia de presiones entre la aspiración (BP), el envío (AP) y el cárter del compresor. La válvula de regulación cilíndrica controla esta diferencia modificando el paso mediante una cápsula elástica sensible a la presión de baja.

**3. CARACTERÍSTICAS**  
Placa oscilante de ángulo variable, manguito corredera, resorte y válvula de regulación con cápsula elástica, vástago, bola y muelles.

**4. VALORES DE TRABAJO**  

| Parámetro | Estado / Funcionamiento |
|---|---|
| **Aumento de cilindrada** | Presión de BP sube → Cápsula (2) se acorta → Aumenta la inclinación de la leva |
| **Disminución de cilindrada** | Presión de BP baja → Cápsula (2) se dilata → Se comunica AP al cárter → Disminuye la inclinación |

**5. ANOMALÍAS FRECUENTES**  
Agarrotamiento de la válvula de regulación o suciedad en los estrangulamientos X e Y.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor se queda fijo en mínima cilindrada (no enfría) o en máxima cilindrada (congelación).

**7. CÓMO COMPROBARLO**  
Monitoreo del salto de presiones al cambiar la carga frigorífica en el habitáculo.

---

### **NOTA DE ELEMENTO — COMPRESOR ROTATIVO (ESPIRAL Y PALETAS)**
UBICACIÓN: Vano motor.  
APLICACIÓN: Sistemas compactos de aire acondicionado.

**1. MISIÓN**  
Comprimir el refrigerante mediante la reducción progresiva del volumen de cámaras rotativas.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- **Espiral (Scroll):** Una espiral móvil realiza un movimiento orbital sobre otra fija, reduciendo el volumen del gas atrapado hacia el centro.  
- **Paletas:** Un rotor excéntrico provisto de paletas giratorias se ajusta contra el estátor por fuerza centrífuga, formando cámaras que se reducen de volumen desde la lumbrera de admisión a la de descarga.

**3. CARACTERÍSTICAS**  
Carcasa, estátor (circular u oval), rotor con ranuras, paletas flotantes, separador de aceite y válvulas de descarga.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Desgaste de las puntas de las paletas o enganche en las ranuras del rotor.

**6. COMPORTAMIENTO EN AVERÍA**  
Caída de la presión de envío y ruidos por rozamiento interno.

**7. CÓMO COMPROBARLO**  
Verificación de presiones de trabajo en el puente de manómetros.

---

### **NOTA DE ELEMENTO — EMBRAGUE ELECTROMAGNÉTICO Y POLEAS**
UBICACIÓN: Frontal del compresor.  
APLICACIÓN: Transmisión de movimiento al compresor.

**1. MISIÓN**  
Acoplar o desacoplar mecánicamente el compresor de la polea movida por el motor del vehículo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Al aplicar corriente a la bobina, se crea un campo magnético que atrae el disco de arrastre contra la polea en rotación, venciendo los muelles oscilantes para girar como un solo cuerpo solidario al eje. Sin corriente, la polea gira libremente sobre su cojinete.

**3. CARACTERÍSTICAS**  
Bobina fija, polea con cojinete (en V o Poly-V) y disco de arrastre con muelles elásticos de retorno.

**4. VALORES DE TRABAJO**  

| Parámetro | Condición de funcionamiento |
|---|---|
| **Bobina no excitada** | Entrehierro libre; polea gira loca sin mover el compresor |
| **Bobina excitada** | Disco atraído magnéticamente; compresor en marcha |
| **Protección UCE (ej. Peugeot 306)** | Cortocircuito en bobina → UCE desconecta automáticamente |

**5. ANOMALÍAS FRECUENTES**  
Bobina derivada o cortada; desgaste excesivo de las caras de fricción; patinamiento del disco.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no gira al activar la tecla A/C o emite ruidos de chillido por patinamiento.

**7. CÓMO COMPROBARLO**  
Medición de resistencia eléctrica de la bobina con multímetro y verificación del entrehierro.

---

### **NOTA DE ELEMENTO — ACEITES LUBRICANTES (PAG, ESTER Y MINERAL)**
UBICACIÓN: Disuelto en el refrigerante y almacenado en el cárter del compresor.  
APLICACIÓN: Lubricación de piezas móviles y sellado del circuito.

**1. MISIÓN**  
Lubricar los componentes mecánicos del compresor y evitar el desgaste prematuro de juntas y válvulas.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Circula emulsiónado con el fluido refrigerante a través de todo el circuito frigorífico.

**3. CARACTERÍSTICAS**  
- **Mineral:** Para refrigerante R12.  
- **PAG (Poli-Alquil-Glicol):** Para R134a en equipos nuevos. Altamente higroscópico; puede atacar pinturas y plásticos. Incompatible con CFC, aceites minerales y Ester. Viscosidades ISO 46 y 150.  
- **Ester (POE):** Para R134a/R12 en equipos reconvertidos. Higroscópico. Compatible con mineral. Viscosidades ISO 32, 68, 100, 150.

**4. VALORES DE TRABAJO**  

| Parámetro / Componente | Cantidad de aceite a reponer / Criterio |
|---|---|
| **Fórmula general de volumen** | **VO (cc) = (Q * 0,06 + 60) * 1,11** (Q = Cantidad R134a en gr) |
| **Sustitución de Condensador** | **20 gr a 30 gr** de aceite |
| **Sustitución de Evaporador** | **40 gr a 60 gr** de aceite |
| **Sustitución de Filtro** | **10 gr a 20 gr** de aceite |
| **Sustitución de Tuberías** | **10 gr por metro** de tubería |

**5. ANOMALÍAS FRECUENTES**  
Absorción masiva de humedad ambiental por dejar envases abiertos; mezcla de aceites incompatibles.

**6. COMPORTAMIENTO EN AVERÍA**  
Gripado del compresor por degradación de la película lubricante.

**7. CÓMO COMPROBARLO**  
Inspección visual de la transparencia del aceite y control del contenido de agua (PPM).

---

### **NOTA DE ELEMENTO — FILTRO DESHIDRATANTE Y ACUMULADOR**
UBICACIÓN: Filtro en la línea de alta presión (entre condensador y válvula de expansión); Acumulador en la línea de baja presión (entre evaporador y compresor).  
APLICACIÓN: Depuración y protección del circuito.

**1. MISIÓN**  
Retener impurezas sólidas, absorber la humedad del circuito y actuar como depósito decantador. El acumulador retiene además el refrigerante líquido para impedir golpes de ariete en el compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El fluido atraviesa microfiltros de 15 micras y material higroscópico (desecante). En el acumulador, el gas se aspira por la parte superior del tubo de U mientras el líquido decanta en el fondo y el aceite retorna por un orificio calibrado.

**3. CARACTERÍSTICAS**  
Contenedor metálico con material deshidratante, microfiltros, placa perforada y, opcionalmente, mirilla de vidrio.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico |
|---|---|
| **Capacidad de filtrado mecánico** | **Microfiltro de 15 micras (μ)** |
| **Compatibilidad** | Filtros de R134a son válidos para R12 |

**5. ANOMALÍAS FRECUENTES**  
Saturación del desecante por humedad o colmatación del microfiltro por virutas.

**6. COMPORTAMIENTO EN AVERÍA**  
Caída de presión y salto térmico en la línea de alta o paso de líquido al compresor en sistemas OT.

**7. CÓMO COMPROBARLO**  
Comprobar diferencia de temperatura entre entrada y salida del filtro (debe ser uniforme).

---

### **NOTA DE ELEMENTO — VÁLVULAS DE EXPANSIÓN (L/90º, BLOQUE/H Y OT/ORIFICIO CALIBRADO)**
UBICACIÓN: Delimita la separación entre el lado de alta y baja presión, a la entrada del evaporador.  
APLICACIÓN: Dosificación de refrigerante y provocación de la caída de presión.

**1. MISIÓN**  
Provocar una caída brusca de presión sobre el refrigerante líquido e iniciar el cambio de estado, regulando continuamente el caudal según el sobrecalentamiento a la salida del evaporador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- **Válvulas L (90º) y Bloque (H):** Un orificio calibrado estrangula el fluido. Un diafragma accionado por un sensor termostático (con fluido interno) vence la fuerza de un muelle de recalentamiento y empuja los pernos de la válvula de bola para ajustar la sección de paso.  
- **Válvula OT (Orificio Calibrado):** Paso estrecho metálico de calibre fijo dentro de un cuerpo plástico con pantallas filtrantes de entrada y salida, sin regulación móvil de caudal.

**3. CARACTERÍSTICAS**  
Cuerpo con racores, cápsula con diafragma, pernos de empuje, muelle y pasaje de compensación (en L/H). En OT: tubo calibrado codificado por colores según aplicación.

**4. VALORES DE TRABAJO**  

| Código de color Válvula OT | Aplicación según fabricante |
|---|---|
| **Rojo / Naranja / Marrón / Verde** | Ford |
| **Azul** | Audi / Ford |
| **Negro / Blanco** | General Motors / Audi |
| **Amarillo / Violeta** | Volvo / Chrysler |

**5. ANOMALÍAS FRECUENTES**  
Bloqueo de la bola por suciedad o hielo; pérdida de carga de la cápsula termostática; obstrucción de la malla filtrante en OT.

**6. COMPORTAMIENTO EN AVERÍA**  
Presión de baja excesivamente reducida/vacío (válvula cerrada) o inundación del evaporador (válvula abierta).

**7. CÓMO COMPROBARLO**  
Lectura de presiones en manómetros con el motor a ralentí y 2.000 rpm.

---

### **NOTA DE PROCESO — VACIADO Y PROCESO DE VACÍO DEL CIRCUITO / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Eliminar la humedad y la presencia de aire de las tuberías del climatizador previo a la carga de refrigerante.

**2. FUNDAMENTO**  
Al reducir la presión interna por debajo de la atmosférica (vacío), se baja el punto de ebullición del agua residual, haciendo que se evapore a temperatura ambiente y sea extraída en forma de vapor por la bomba.

**3. CONDICIONES PREVIAS**  
Circuito cerrado sin fugas graves y libre de refrigerante gaseoso.

**4. EQUIPO Y MATERIAL**  
Estación de carga o bomba de vacío con puente de manómetros.

**5. DESARROLLO**  
1. Conectar las mangueras de alta y baja presión de la estación al vehículo.  
2. Abrir las llaves del puente de manómetros y poner en marcha la bomba de vacío.  
3. Mantener el proceso de vacío durante un tiempo mínimo continuado de 20 minutos.  
4. Cerrar las llaves del puente y apagar la bomba.  
5. Observar las agujas de vacío en los manómetros durante unos minutos para verificar que la depresión se mantiene inalterada (prueba de estanqueidad).

**6. VALORES DE REFERENCIA**  

| Parámetro de proceso | Valor numérico prescrito |
|---|---|
| **Tiempo mínimo de vacío** | **Al menos 20 minutos** |
| **Lectura de vacío en manómetro** | **-76 cm Hg / depresión máxima** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Un tiempo de vacío insuficiente deja humedad retenida en el circuito, lo que genera ácidos y tapones de hielo tras la carga.

**8. VERIFICACIÓN FINAL**  
Mantenimiento de la aguja en -76 cm Hg tras el periodo de reposo con la bomba apagada.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CARGA DEL CIRCUITO Y MANTENIMIENTO / PROCEDIMIENTO**

**1. OBJETO AND ALCANCE**  
Establecer el procedimiento de introducción de la masa exacta de R134a y aceite en el circuito de climatización.

**2. FUNDAMENTO**  
La introducción en fase líquida por la toma de alta presión garantiza el llenado correcto sin someter al compresor a aspiración de líquido con el motor parado.

**3. CONDICIONES PREVIAS**  
Proceso de vacío completado satisfactoriamente.

**4. EQUIPO Y MATERIAL**  
Cilindro de carga graduado con envoltura plástica regulable o máquina recirculadora con balanza de precisión.

**5. DESARROLLO**  
1. Verificar en la ficha del vehículo la cantidad exacta en gramos de R134a prescrita.  
2. En máquina recirculadora: programar el peso en la balanza electrónica e inyectar el aceite limpio y la carga por el lado de alta presión.  
3. **Procedimiento universal de carga manual:**  
   - 1) Realizar un vacío al circuito de al menos 20 minutos.  
   - 2) Introducir 500 gramos de líquido refrigerante por la toma de alta.  
   - 3) Colocar un reloj/termómetro de temperatura en una trampilla lateral.  
   - 4) Quitar la recirculación de aire y seleccionar el ventilador interior al mínimo.  
   - 5) Arrancar el motor y dejarlo a ralentí con el A/C conectado.  
   - 6) Observar el salto térmico y los valores leídos en los manómetros.

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor de proceso |
|---|---|
| **Masa de prueba inicial** | **500 gramos** de refrigerante líquido por el lado de alta |
| **Estado del ventilador en prueba** | Velocidad **mínima** con recirculación desactivada |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Cargar refrigerante en fase líquida por la toma de baja presión con el motor en marcha: provoca golpe de ariete y destrucción de las láminas del compresor.

**8. VERIFICACIÓN FINAL**  
Obtención de aire frío en difusores y presiones estables dentro de tolerancia.

**9. SEGURIDAD Y NORMATIVA**  
Utilizar protección ocular durante la manipulación de acoplamientos rápidos.

---

### **NOTA DE PROCESO — COMPROBACIÓN DE FUGAS POR TINTE FLUORESCENTE UV / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Localizar puntos de fugas de gas refrigerante mediante la inyección de aditivo trazador y lectura óptica.

**2. FUNDAMENTO**  
El tinte fluorescente se mezcla con el aceite PAG/Ester. Al escapar por un poro, el tinte resplandece al ser excitado por luz ultravioleta.

**3. CONDICIONES PREVIAS**  
Circuito con vaciado previo o carga parcial para permitir la inyección.

**4. EQUIPO Y MATERIAL**  
- Lámpara UV (12 V / 5 A con cable de 4,5 m).  
- Gafas de protección UV amarillas.  
- Inyector de tinte para R12 o R134a.  
- Dosis de tinte universal de 1/4 de onza (4,39 ml).

**5. DESARROLLO**  
1. Cargar la dosis de 4,39 ml de tinte fluorescente en el cuerpo del inyector.  
2. Conectar el inyector a la toma de servicio e introducir la dosis en el circuito.  
3. Recargar refrigerante y poner en marcha el climatizador durante unos minutos para distribuir el trazador.  
4. Equiparse con las gafas de protección UV e inspeccionar tuberías, racores, condensador y compresor con la lámpara ultravioleta.  
5. Identificar el origen de la fuga en el punto marcado por el resplandor fluorescente.

**6. VALORES DE REFERENCIA**  

| Componente | Especificación técnica |
|---|---|
| **Dosis de tinte universal** | **1/4 de onza (4,39 ml)** por aplicación |
| **Alimentación de lámpara UV** | **12 V CC / Consumo de 5 A** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Inspeccionar sin utilizar las gafas de protección amarillas: reduce drásticamente el contraste para detectar la fluorescencia.

**8. VERIFICACIÓN FINAL**  
Limpieza de restos fluorescentes tras reparar la junta o tubería dañada.

**9. SEGURIDAD Y NORMATIVA**  
Uso obligatorio de gafas UV para evitar daños en la retina.

---

### **NOTA DE PROCESO — DIAGNOSIS DE PRESIONES A VEHÍCULO PARADO Y EN MARCHA / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Diagnosticar el estado de la carga de refrigerante, presencia de aire, obstrucciones o fallos en el compresor evaluando las presiones en manómetros a motor parado, a ralentí y a 2.000 rpm.

**2. FUNDAMENTO**  
- **A motor parado:** La presión se iguala en el circuito según la temperatura ambiente/condensador.  
- **En marcha:** La diferencia entre la alta y la baja presión refleja el rendimiento de la compresión y la expansión.

**3. CONDICIONES PREVIAS**  
Calibración previa a cero de las agujas del puente de manómetros con las mangueras al aire.

**4. EQUIPO Y MATERIAL**  
Puente de manómetros (LO/HI) y termómetro de contacto/ambiente.

**5. DESARROLLO Y DIAGNÓSTICO**  
📷 IMAGEN: Manómetros de prueba y diagnóstico de presiones — Fuente: MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf, pág. 41-46  
* **Comprobación a motor parado:**  
  - Carga correcta: 6,5 bar en baja a 24 ºC - 26 ºC en condensador y ambiente.  
  - Falta de líquido: 6,5 bar a 30 ºC ambiente/condensador.  
  - Aire en el circuito (asociación de gases): 7,5 bar a 24 ºC - 26 ºC ambiente.  
  - Exceso de carga: 7,5 bar a 24 ºC - 26 ºC ambiente con motor frío.  
* **Comprobación a motor arrancado a ralentí:**  
  - Presiones normales: Baja = **1 a 2 bar** / Alta = **14 a 17 bar**.  
  - Exceso de líquido: Baja > **2 bar** / Alta > **17 bar**.  
  - Falta de líquido: Baja < **1 bar** / Alta < **14 bar**.  
  - Obstrucción en válvula de expansión: Baja < **1 bar** / Alta > **17 bar**.  
  - Válvula de expansión abierta: Baja > **2 bar** / Alta = **14 a 17 bar (Normal)**.  
  - Electroventilador parado: Baja = **Normal** / Alta = **Alta (> 17 bar)**.  
  - Válvulas de escape del compresor defectuosas: Baja = **Normal** / Alta = **Oscilando**.  
  - Válvulas de admisión del compresor defectuosas: Baja = **Oscilando** / Alta = **Normal**.  
* **Comprobación a 2.000 rpm:**  
  - Falta de líquido: Normal a ralentí, pero a 2.000 rpm la baja pasa a **Baja** y la alta a **Baja**.  
  - Exceso de líquido: Normal a ralentí, pero a 2.000 rpm la baja pasa a **Alta** y la alta a **Alta**.

**6. VALORES DE REFERENCIA**  

| Parámetro ambiental | Temperatura Condensador (+20 ºC) | Presión de Alta Mínima (En reposo) |
|---|---|---|
| **20 ºC ambiente** | **40 ºC** | **9 bares** |
| **30 ºC ambiente** | **50 ºC** | **12 bares** |
| **40 ºC ambiente** | **60 ºC** | **15,5 bares** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir láminas rotas de admisión con las de escape: aguja de baja oscilando indica admisión defectuosa; aguja de alta oscilando indica escape defectuoso.

**8. VERIFICACIÓN FINAL**  
Obtención de presiones nominales (1-2 bar en BP / 14-17 bar en AP) tras realizar la corrección.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CLIMATIZADOR Y SISTEMA DE TRAMPILLAS DE MEZCLA Y DISTRIBUCIÓN**
UBICACIÓN: Mueble climatizador en el interior del salpicadero.  
APLICACIÓN: Mezcla y conducción de flujos de aire hacia el habitáculo.

**1. MISIÓN**  
Regular la temperatura del aire exterior mezclando los flujos provenientes del evaporador y del radiador de calefacción, y distribuirlos según la demanda.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Los servomotores mueven mecánicamente las trampillas internas según las órdenes de la UCE para derivar el flujo de aire a través del evaporador, del radiador de calefacción o de la resistencia adicional PTC.

**3. CARACTERÍSTICAS**  
Carcasa de plástico con filtro antipolen, intercambiador térmico, radiador de calefacción, resistencia PTC Z35, turbina V2 y trampillas accionadas por servomotores.

**4. ACTUADORES Y SENSORES ASOCIADOS (CÓDIGOS)**  
- **V71:** Servomotor para chapaleta de velocidad y aire fresco/recirculación (con potenciómetro G113).  
- **V107:** Servomotor para chapaleta de descongelación (con potenciómetro G135).  
- **V70:** Servomotor para chapaleta central y vano reposapiés (con potenciómetro G112).  
- **V68:** Servomotor para chapaleta de temperatura.  
- **V113:** Servomotor para chapaleta de recirculación.  
- **V158 / V159:** Servomotores de temperatura izquierda y derecha (con potenciómetros G220 y G221 en bizona).  
- **Z35:** Calefactor adicional PTC.

**5. VALORES DE TRABAJO**  
No documentado en fuentes.

**6. ANOMALÍAS FRECUENTES**  
Desgaste de engranajes o avería en los potenciómetros de posición de los servomotores.

**7. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de ajustar la temperatura (aire sale solo frío o caliente) o bloqueo en la salida de desempañado/pies.

**8. CÓMO COMPROBARLO**  
Diagnosis electrónica con máquina OBD y test de actuadores sobre los servomotores V.

---

### **NOTA DE PROCESO — ESQUEMAS ELÉCTRICOS Y NOMENCLATURA / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Establecer la identificación de componentes y lectura de esquemas eléctricos de climatización (sistemas Valeo, Peugeot, Citroën, Renault, etc.).

**2. FUNDAMENTO**  
La UCE procesa la lógica de control recibiendo masa/tensión de alimentaciones y señales analógicas/digitales desde presostatos, reóstatos, termistores y relés para gobernar las salidas de potencia.

**3. CONDICIONES PREVIAS**  
Encendido conectado y fusibles de protección en buen estado.

**4. EQUIPO AND MATERIAL**  
Esquema eléctrico del fabricante y polímetro/osciloscopio.

**5. DESARROLLO**  
* **Identificación de referencias comunes en esquemas (Nomenclatura):**  
  - **141:** Calculador de climatización.  
  - **183:** Mando impulsor de aire.  
  - **255:** Compresor de refrigeración / acoplamiento.  
  - **582:** Interruptor de aire acondicionado (A/C).  
  - **681:** Módulo de mando del impulsor.  
  - **720 / 721:** Motoventiladores izquierdo / derecho.  
  - **775:** Presostato.  
  - **804:** Relé de climatización.  
  - **805:** Relé de corte del compresor de refrigeración.  
  - **813 / 814 / 815:** Relés de motoventilador (velocidad mínima, máxima e inversor).  
  - **859:** Resistencia de velocidad del impulsor de aire.  
  - **910:** Sonda de temperatura de agua de motor.  
  - **912:** Sonda de temperatura del evaporador.  
  - **971:** Termocontacto de agua del radiador.

**6. VALORES DE REFERENCIA**  

| Borne / Línea de alimentación | Significado técnico habitual |
|---|---|
| **Línea 30** | Positivo permanente de batería (+30) |
| **Línea 15 / 15N** | Positivo bajo llave de contacto (+15) |
| **M000 / M / BM** | Conexiones de masa a carrocería |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Desconocer la numeración de los códigos en esquemas tipo PSA/Renault: puede llevar a confundir un relé de corte de inyección con el relé de motoventiladores.

**8. VERIFICACIÓN FINAL**  
Comprobación de llegada de tensión y continuidad de masa en los conectores de la UCE y del compresor.

**9. SEGURIDAD Y NORMATIVA**  
Desconectar la batería al manipular conexiones principales.

---

### **NOTA DE PROCESO — LÓGICA Y CONTROL DE LA UCE DE CLIMATIZACIÓN (MMI Y MODELO TÉRMICO) / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar el procesamiento interno de datos de la UCE y los tipos de interfaces hombre-máquina (MMI) para la regulación de la temperatura de la cabina.

**2. FUNDAMENTO**  
La UCE compara la temperatura requerida por el usuario (TR) con las lecturas de los sensores para calcular la condición climática objetivo (TTV) y ajustar el caudal de aire (Qs) y las trampillas mediante un modelo térmico.

**3. CONDICIONES PREVIAS**  
Alimentación eléctrica y sistema configurado en modo Manual, Semiautomático o Automático.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
* **Entradas base requeridas por la UCE:**  
  - a) Temperatura deseada por el usuario (TR).  
  - b) Velocidad de la turbina interior (si está en modo manual).  
  - c) Temperatura del aire exterior (TE).  
  - d) Temperatura del aire interior/habitáculo (TA).  
  - e) Temperatura del agua del motor.  
  - f) Posición de las trampillas.  
* **Frecuencia de cálculo:** El ciclo de regulación del sensor de calentamiento y modelo térmico se efectúa cada 15 segundos.  
* **Tipos de interfaces de usuario (MMI):**  
  - **Regulación Manual:** Mando mecánico o eléctrico simple; el usuario mezcla manualmente abriendo el paso de agua o trampilla de calefacción.  
  - **Regulación Semiautomática:** Mando analógico; el usuario selecciona la temperatura y la UCE regula la mezcla de aire caliente y frío de forma automatizada.  
  - **Regulación Automática (Climatronic):** Mando digital; la UCE controla automáticamente la mezcla, el caudal de la turbina y la distribución de aire.

**6. VALORES DE REFERENCIA**  

| Parámetro | Período / Criterio |
|---|---|
| **Tiempo de refresco del modelo térmico** | **Cada 15 segundos** se ejecuta el algoritmo de control |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- En modo automático, ignorar la selección de velocidad de turbina del usuario: en AUTO, la UCE anula el caudal manual (Qu) e impone el caudal automatizado (Qs).

**8. VERIFICACIÓN FINAL**  
Comprobación del movimiento suave de las trampillas de mezcla al modificar el valor TR en el display.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SONDAS DE TEMPERATURA Y SENSORES DEL CLIMATIZADOR**
UBICACIÓN: Diversos puntos del habitáculo, canalizaciones y exterior.  
APLICACIÓN: Sensores de entrada de la UCE de climatización.

**1. MISIÓN**  
Medir las variables físicas de temperatura, radiación solar y presión e informar a la UCE para la gestión del confort.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- **Sondas NTC:** Termistores cuya resistencia disminuye al aumentar la temperatura.  
- **Fotosensor (G107):** Capta la intensidad de la radiación solar.  
- **Sonda Interior (G56 con V42):** Incluye un micro-ventilador (V42) que aspira el aire del habitáculo a través de una rejilla sobre el elemento sensor para evitar mediciones falsas por el calor del salpicadero.

**3. CARACTERÍSTICAS Y CÓDIGOS DE COMPONENTES**  
- **Sonda de temperatura de agua:** Corta el climatizador si el refrigerante del motor alcanza temperaturas excesivamente altas.  
- **G17:** Termosensor de temperatura exterior. Corta el compresor si la temperatura exterior es muy baja.  
- **G89:** Termosensor en el conducto de aspiración de aire fresco.  
- **G263:** Sonda antihielo del evaporador.  
- **G150 / G151:** Transmisores de salida en aireadores izquierdo y derecho.  
- **G192:** Transmisor de temperatura en la salida del vano reposapiés.  
- **G56 / V42:** Sonda de salpicadero con microventilador de aspiración.

**4. VALORES DE TRABAJO**  

| Curva de características NTC (Sonda de agua) | Resistencia eléctrica (Ohmios) |
|---|---|
| **A 50 ºC** | **~ 1700 Ω** |
| **A 80 ºC** | **~ 600 Ω** |
| **A 110 ºC** | **~ 200 Ω** |
| **A 130 ºC** | **~ 100 Ω** |

**5. ANOMALÍAS FRECUENTES**  
Bloqueo del rotor del microventilador V42 por suciedad o pelusa; descalibración de la resistencia NTC.

**6. COMPORTAMIENTO EN AVERÍA**  
La UCE utiliza valores supletorios de emergencia o inhabilita el compresor.

**7. CÓMO COMPROBARLO**  
Medir resistencia con multímetro a diferentes temperaturas y verificar curva de comportamiento.

---

### **NOTA DE ELEMENTO — COMPRESOR DE CILINDRADA VARIABLE SIN EMBRAGUE CON VÁLVULA N280 Y POLEAS DE SEGURIDAD**
CÓDIGO: Electroválvula N280  
UBICACIÓN: Vano motor, accionado continuamente por la correa Poly-V.  
APLICACIÓN: Climatizadores de regulación continua sin acoplamiento magnético.

**1. MISIÓN**  
Comprimir el refrigerante ajustando la inclinación del disco oscilante electrónicamente sin interrupción de la correa, protegiendo la transmisión mediante un dispositivo de rotura de la polea en caso de gripado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
La UCE E87 excita la electroválvula N280. A mayor solicitud de frío, el empujador reduce el paso entre la alta presión y el cárter, haciendo predominar la alta presión y aumentando la inclinación del disco oscilante y la carrera del émbolo hueco. Si el compresor se bloquea, la polea deforma 4 elementos arqueados de goma contra el disco de arrastre hasta romper la comunicación, evitando romper la correa de accesorios.

**3. CARACTERÍSTICAS**  
Carcasa, muelle recuperador, émbolo hueco, disco oscilante, eje de arrastre, electroválvula N280, y polea con elemento moldeado de goma y disco de arrastre de deformación programada.

**4. VALORES DE TRABAJO**  

| Estado de regulación | Comportamiento del sistema |
|---|---|
| **Solicitud de mayor frío (E87)** | N280 excitada → Reduce sección al cárter → Disco se inclina al máximo → Máxima carrera |
| **Solicitud de menor frío** | N280 reduce excitación → Aumenta sección al cárter → Mínima carrera de pistones |
| **Bloqueo mecánico del compresor** | Fuerza extrema de la correa → Elementos de goma se deforman → Disco se desacopla |

**5. ANOMALÍAS FRECUENTES**  
Corte eléctrico de la bobina N280; deformación/rotura del elemento moldeado de goma de la polea por fallo interno.

**6. COMPORTAMIENTO EN AVERÍA**  
El eje del compresor no gira aunque la polea exterior sí sea arrastrada por la correa.

**7. CÓMO COMPROBARLO**  
Verificar señal de excitación de la electroválvula N280 y comprobar si el disco de arrastre central gira solidario con la polea exterior.

---

COBERTURA: documento «MANUAL AIRE ACONDICIONADO-CLIMATIZADOR - FORMAUTO.pdf», páginas 1 a 47 de 47. [completo]