### **NOTA DE PROCESO — CONFORT TÉRMICO E HIGROMETRÍA / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar las bases físicas del confort térmico, las fuentes de calor en el vehículo y el concepto de higrometría. Se aplica a la definición de las condiciones de climatización en el habitáculo.

**2. FUNDAMENTO**  
El confort térmico se alcanza cuando el cuerpo humano se encuentra en estado de equilibrio térmico, cediendo la cantidad justa de energía al ambiente. Si el ambiente es frío (20 ºC), el cuerpo cede demasiadas calorías; si es caluroso (28 ºC), no puede ceder calorías y se activa la sudoración. La higrometría es la relación entre la cantidad de agua contenida en el aire y la cantidad máxima que podría contener a la misma presión y temperatura. La zona de confort humano se sitúa entre el 30% y el 70% de humedad relativa para temperaturas de 20 ºC a 28 ºC.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
- **Fuentes de calor:** El habitáculo recibe calor por radiación solar, transmisión por la chapa y cristales, calor propio de los ocupantes y disipación del motor y tubo de escape.  
- **Comportamiento según la humedad:**  
  - *Humedad < 30%:* Provoca deshidratación, sequedad de mucosas y calor seco.  
  - *Humedad > 70%:* Provoca bochorno, sudoración pegajosa o sensación de frío húmedo/niebla.

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Temperatura de confort ambiental** | **20 ºC a 28 ºC** | Ocupantes en reposo |
| **Humedad relativa de confort** | **30 % a 70 %** | Dentro del margen de 20 ºC a 28 ºC |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Considerar solo la temperatura para el confort: sin deshumidificar el aire (reducir la higrometría), una temperatura de 22 ºC con 85% de humedad genera una sensación térmica incómoda y empañamiento de cristales.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — INTERCAMBIOS TÉRMICOS Y CAMBIOS DE ESTADO / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Definir los conceptos de transferencia de calor, calor sensible, calor latente, entalpía y ebullición por vacío. Se aplica a la comprensión del ciclo frigorífico.

**2. FUNDAMENTO**  
- **Dirección del calor:** El calor fluye siempre desde el cuerpo más caliente hacia el más frío hasta igualar sus temperaturas (temperatura de equilibrio).  
- **Calor Sensible:** Cantidad de calor aportada o extraída para variar la temperatura de un cuerpo sin cambiar su estado físico (ejemplo: calentar 1 kg de agua de 20 ºC a 100 ºC requiere 335 kJ).  
- **Calor Latente:** Cantidad de energía necesaria para que una sustancia cambie de estado físico a temperatura constante (ejemplo: la vaporización de 1 kg de agua a 100 ºC absorbe 2.250 kJ de calor latente).  
- **Entalpía (H):** Energía total contenida en un fluido por unidad de masa: $H = U + P \cdot V$ (J/kg). Si un compresor aporta 1 J de trabajo mecánico a 1 kg de fluido, su entalpía aumenta en 1 J/kg.  
- **Ebullición por vacío:** El punto de ebullición depende de la presión exterior. Si la presión cae (por vacío), la temperatura de ebullición desciende (el agua hierve a 30 ºC si la presión baja a 0,04 bar).

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
En el cambio de fase de un fluido (de líquido a gas), se crea una meseta de temperatura constante durante la cual toda la energía suministrada se invierte exclusivamente como calor latente de cambio de estado. La masa gaseosa resultante ocupa un volumen enormemente mayor que en fase líquida (1,2 kg de R134a líquido ocupan 1 litro a 20 ºC; la misma masa en gas ocupa 31 litros). Por esta razón, las tuberías de Alta Presión (líquido) son de pequeño diámetro y las de Baja Presión (gas) son de gran diámetro.

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Calor latente de fusión del hielo** | **335 kJ / kg** | A 0 ºC y 1,013 bar |
| **Calor latente de vaporización del agua** | **2.250 kJ / kg** | A 100 ºC y 1,013 bar |
| **Volumen de 1,2 kg de R134a líquido** | **1 litro** | A 20 ºC |
| **Volumen de 1,2 kg de R134a gas** | **31 litros** | A 20 ºC |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir elevación de temperatura con cambio de estado: durante la condensación o evaporación, el termómetro no sube ni baja aunque exista una transferencia masiva de energía (calor latente).

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — DIAGRAMA DE MOLLIER Y CICLO FRIGORÍFICO TEÓRICO / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Describir la estructura del diagrama de Mollier (presión frente a entalpía) y las cuatro fases del ciclo frigorífico. Se aplica al análisis termodinámico del aire acondicionado.  
📷 IMAGEN: Ciclo frigorífico representado sobre la campana del diagrama de Mollier — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 57

**2. FUNDAMENTO**  
El diagrama de Mollier representa la presión absoluta (eje vertical) en función de la entalpía (eje horizontal). La campana central delimita tres zonas: líquido a la izquierda, estado difásico (líquido + gas) en el centro, y gas a la derecha. El vértice superior es la Presión Crítica (\\(T_c\\)), a partir de la cual no es posible licuar el gas.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
Las 4 transformaciones del ciclo sobre el diagrama son:  
1. **Compresión (1 a 2):** El compresor aspira gas a baja presión y baja temperatura (-1 ºC / 3 bar) y lo comprime elevando su presión y entalpía hasta alta presión y alta temperatura (110 ºC / 20 bar).  
2. **Condensación (2 a 5):** En el condensador, el gas cede calor al aire exterior. Primero se enfría (sensible), luego se condensa a temperatura constante (60 ºC / 19 bar, calor latente difásico) y finalmente se subenfría a líquido (60 ºC / 19 bar).  
3. **Expansión (5 a 6):** La válvula de expansión estrangula el líquido de alta presión (19 bar) a baja presión (3 bar). La entalpía se mantiene constante, pero la temperatura cae en picado a -1 ºC (mezcla difásica).  
4. **Evaporación (6 a 1):** En el evaporador, el fluido ebulle a baja presión (3 bar / -1 ºC) absorbiendo el calor del aire del habitáculo. Pasa de líquido a gas y sufre un ligero recalentamiento final (+3 ºC a +5 ºC) antes de volver al compresor.

**6. VALORES DE REFERENCIA**  

| Fase / Punto del circuito | Presión de trabajo | Temperatura de trabajo | Estado del fluido |
|---|---|---|---|
| **1. Entrada al Compresor** | **3 bar** | **5 ºC** | Gas (recalentado) |
| **2. Salida del Compresor** | **20 bar** | **110 ºC** | Gas (alta temperatura) |
| **3. Entrando a Condensación** | **19 bar** | **70 ºC** | Gas cediendo calor |
| **5. Salida del Condensador** | **19 bar** | **60 ºC** | Líquido (subenfriado) |
| **6. Entrada al Evaporador** | **3 bar** | **-1 ºC** | Difásico (mezcla líquido/gas) |
| **8. Salida del Evaporador** | **3 bar** | **3 ºC a 10 ºC** | Gas cediendo frío al aire |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Entrada de líquido al compresor: si la evaporación no se completa (recalentamiento nulo), entra líquido al compresor provocando la destrucción mecánica inminente de sus válvulas (los líquidos son incompresibles).

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — REFRIGERANTES R12 Y R134a Y LUBRICANTES / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Comparar las propiedades físicas, químicas y medioambientales de los refrigerantes R12 y R134a, y definir la compatibilidad de sus aceites. Se aplica a la gestión de fluidos en el taller.

**2. FUNDAMENTO**  
- **R12 (Diclorofluorometano - CFC):** Gran capacidad térmica, pero destruye la capa de ozono por sus moléculas de cloro y se transforma en gas tóxico (gas mostaza) por encima de 150 ºC. Prohibida su comercialización.  
- **R134a (Tetrafluoroetano - HFC):** No contiene cloro y no afecta al ozono, aunque es un gas de efecto invernadero. Presenta propiedades termodinámicas similares al R12 pero sus moléculas son más pequeñas y requieren un lubricante sintético.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
* **Compatibilidad de Aceites:**  
  - **Aceites Minerales:** Parafínicos o nafténicos. Compatibles *exclusivamente* con R12. Higroscopía muy débil. Prohibido usarlos con R134a.  
  - **Aceites Sintéticos PAG (Polialquilenglicol):** Específicos para R134a. Muy higroscópicos (absorben gran cantidad de agua). En presencia de agua se vuelven muy agresivos y corrosivos con metales, plásticos y elastómeros.  
  - **Aceites Sintéticos ÉSTER:** Compatibles con R12 y R134a. Higroscopía media. Utilizados principalmente en la reconversión (retrofit) de circuitos.

**6. VALORES DE REFERENCIA**  

| Tipo de Aceite | Contenido en agua tras 24 h de exposición | Compatibilidad de gas |
|---|---|---|
| **Sintético PAG** | **~2.000 PPM** (Muy higroscópico) | Exclusivo R134a |
| **Sintético ÉSTER** | **~1.600 PPM** (Higroscopía media) | R12 / R134a (Reconversión) |
| **Mineral** | **< 100 PPM** (Higroscopía muy débil) | Exclusivo R12 |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- **Jamás mezclar R12 y R134a:** Son totalmente incompatibles.  
- **Jamás mezclar aceites minerales y PAG:** Producen descomposición del lubricante y gripado inmediato del compresor.  
- Dejar abierto un bote de aceite PAG: absorberá humedad ambiental en pocos minutos, contaminando el circuito con ácidos destructivos.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
Obligatoriedad de la recuperación del 100% de los fluidos frigoríficos en las intervenciones según la normativa vigente.

---

### **NOTA DE ELEMENTO — COMPRESOR DE CLIMATIZACIÓN**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: Fijado directamente sobre el bloque motor, arrastrado por la correa de accesorios.  
APLICACIÓN: Circuito frigorífico de aire acondicionado del automóvil.

**1. MISIÓN**  
Asegurar la circulación del fluido frigorífico por todos los componentes del sistema y elevar la presión del gas desde la salida del evaporador hasta la entrada del condensador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Aspiración e impulsión mecánica. Transforma la energía mecánica del motor en trabajo de compresión. En compresores de cilindrada variable, el caudal se modula cambiando la inclinación del plato oscilante: la presión del cárter (regulada por una válvula de control) determina la carrera de los pistones. A menor inclinación, menor carrera y menor caudal.

**3. CARACTERÍSTICAS**  
- **Tecnologías:** Alternativos (pistones con biela-manivela o disco oscilante revólver), Rotativos (paletas Seiko-Seiki) y Pseudo-rotativos (espiral o Scroll).  
- **Cilindrada Variable:** Evita el funcionamiento cíclico "todo o nada", reduce los tirones en el motor y disminuye el consumo de combustible.

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Valor de trabajo | Estado del fluido |
|---|---|---|
| **Lado de Aspiración (BP)** | **3 bar / 5 ºC** | Gas de baja presión |
| **Lado de Impulsión (HP)** | **19 a 20 bar / 110 ºC** | Gas comprimido a alta presión |
| **Test de Resistencia Valeo** | **556 horas (equivale a 80.000 km a 72 km/h)** | Prueba de durabilidad industrial |

**5. ANOMALÍAS FRECUENTES**  
- Gripado por falta de engrase o acumulación de suciedad.  
- Fugas por retenes del eje y juntas de culata.  
- Rotura interna por golpe de líquido (presencia de refrigerante líquido a la entrada).  
- Corrosión interna por presencia de agua/humedad.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad del sistema de aire acondicionado, ruidos metálicos intensos o bloqueo de la correa de accesorios.

**7. CÓMO COMPROBARLO**  
Comprobar presiones en manómetros (BP alta y HP baja indican fallo de compresión). Verificar la estanqueidad con detector de fugas y probar la excitación del mando de regulación.

---

### **NOTA DE ELEMENTO — EMBRAGUE ELECTROMAGNÉTICO DEL COMPRESOR**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: Montado en el frontal de la polea del compresor.  
APLICACIÓN: Compresores de cilindrada fija o variable con desconexión.

**1. MISIÓN**  
Transmitir o interrumpir el movimiento de rotación desde la polea de la correa de accesorios hacia el eje del compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Acoplamiento por electroimán. Al recibir corriente eléctrica, la bobina genera un campo magnético que atrae el disco de embrague contra la polea en movimiento, venciendo la fuerza de los flejes elásticos y haciendo girar el eje del compresor.

**3. CARACTERÍSTICAS**  
Consta de polea de arrastre con rodamiento, bobina electromagnética fija, disco de embrague y pieza de fijación al eje.  
📷 IMAGEN: Despiece del embrague electromagnético con polea, bobina y disco — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 72

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Tensión de excitación** | **12 V CC** | Solicitud de A/C activa |
| **Entrehierro de fricción** | Valor milimétrico específico | Medido con galgas de espesor |

**5. ANOMALÍAS FRECUENTES**  
Bobina interrumpida o quemada; desgaste excesivo del entrehierro por fricción; deformación de las láminas elásticas.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no gira al activar el aire acondicionado (la polea gira loca) o patina emitiendo chillidos.

**7. CÓMO COMPROBARLO**  
Medir la resistencia de la bobina con multímetro (debe dar continuidad), aplicar 12 V directos para comprobar el atracado del disco y medir la holgura del entrehierro.

---

### **NOTA DE ELEMENTO — CONDENSADOR**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En la parte frontal del vehículo, delante del radiador de refrigeración del motor.  
APLICACIÓN: Circuito de aire acondicionado.

**1. MISIÓN**  
Liquidar el gas refrigerante a alta presión que sale del compresor, cediendo su calor al flujo de aire exterior que lo atraviesa.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Intercambiador térmico de alta presión. El gas a 110 ºC y 20 bar entra por la parte superior. Al ceder calor al aire exterior (a 35 ºC), se enfría hasta su temperatura de condensación (65 ºC / 19 bar), se licúa totalmente y sufre un subenfriamiento final antes de salir a 60 ºC.

**3. CARACTERÍSTICAS**  
Fabricado en aluminio. Tecnologías: Tubo/Intercalador (TI) o Serpentín/Multiflujo. Posee gran superficie de aletas de refrigeración.

**4. VALORES DE TRABAJO**  

| Tramo | Presión | Temperatura | Estado del fluido |
|---|---|---|---|
| **Entrada** | **20 bar** | **110 ºC** | Gas de descarga |
| **Enfriamiento inicial** | **19 a 20 bar** | **110 ºC a 65 ºC** | Gas |
| **Condensación** | **19 bar** | **65 ºC** | Difásico (Gas + Líquido) |
| **Salida (Subenfriado)** | **19 bar** | **60 ºC** | Líquido |

**5. ANOMALÍAS FRECUENTES**  
- Perforaciones por corrosión o impactos de piedras.  
- Obstrucción externa de aletas por barro, suciedad e insectos.  
- Fugas en racores.  
- Pérdida de rendimiento por montar adaptables de baja calidad.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de rendimiento frigorífico en el habitáculo y elevación anormal de la Alta Presión en el circuito.

**7. CÓMO COMPROBARLO**  
Inspección visual de la limpieza de aletas, búsqueda de manchas de aceite (fugas) con lámpara UV y cálculo del subenfriamiento térmico.

---

### **NOTA DE ELEMENTO — FILTRO DESHIDRATANTE**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En el vano motor, entre el condensador y la válvula de expansión.  
APLICACIÓN: Circuitos de A/C con válvula de expansión.

**1. MISIÓN**  
Almacenar líquido refrigerante, filtrar impurezas sólidas y absorber las trazas de humedad circulantes en el circuito.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El fluido entra en fase líquida por la parte superior. Atraviesa las mallas filtrantes y el bloque desecante (tamiz molecular/silicagel). El líquido deshidratado se acumula en el fondo y es aspirado por un tubo prolongador inferior para garantizar que sólo salga líquido hacia la válvula de expansión.

**3. CARACTERÍSTICAS**  
Botella metálica con racores de entrada y salida, malla filtrante interna, saco desecante e higroscópico y, en algunos modelos, mirilla/testigo de burbujas.  
📷 IMAGEN: Sección interna del filtro deshidratante con desecante y tubo prolongador — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 96

**4. VALORES DE TRABAJO**  

| Parámetro | Valor prescrito | Condiciones de validez |
|---|---|---|
| **Intervalo de sustitución recomendado** | **Cada 2 años** | Mantenimiento preventivo obligatorio |
| **Sustitución en reparación** | **Obligatoria** | Siempre que se abra el circuito |

**5. ANOMALÍAS FRECUENTES**  
Saturación del desecante por humedad; taponamiento interno que provoca una pre-expansión no deseada en el propio filtro.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida de eficacia frigorífica, presencia de hielo exterior sobre el filtro y formación de ácidos que destruyen el compresor.

**7. CÓMO COMPROBARLO**  
Medir la temperatura del tubo a la entrada y a la salida del filtro con un termómetro de contacto: si existe un salto térmico apreciable (salida más fría que entrada), el filtro está saturado y obstruido.

---

### **NOTA DE ELEMENTO — VÁLVULA DE EXPANSIÓN TERMOSTÁTICA**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: Montada en el vano motor, pegada a la entrada del evaporador.  
APLICACIÓN: Circuitos de A/C con filtro deshidratante.

**1. MISIÓN**  
Provocar la caída brusca de presión y temperatura del refrigerante y regular automáticamente el caudal inyectado al evaporador para mantener un recalentamiento constante.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Equilibrio de presiones sobre una membrana (\\(F_a = F_b + F_c\\)). La presión del bulbo termostático (\\(F_a\\), sensible a la temperatura de salida del evaporador) empuja la varilla para abrir la bola/válvula. En contra actúan la presión de evaporación (\\(F_b\\)) y la fuerza del muelle de reglaje (\\(F_c\\)). Si la temperatura a la salida sube, el bulbo aumenta su presión y abre el paso para inyectar más líquido.

**3. CARACTERÍSTICAS**  
Tipos: Bloque monobloc o tipo ángulo. Posee un orificio calibrado interno con aguja móvil, membrana y muelle tarado en fábrica.  
📷 IMAGEN: Sección de la válvula de expansión monobloc y sus presiones de equilibrio — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 103 y 108

**4. VALORES DE TRABAJO**  

| Parámetro / Límite | Valor numérico | Condiciones de validez |
|---|---|---|
| **Caída de presión (HP a BP)** | De **19 bar** a **3 bar** | En funcionamiento normal |
| **Caída de temperatura** | De **60 ºC** a **-1 ºC** | A la salida de la válvula |
| **Presión máxima soportada** | **15 bar** | Límite interno (presiones superiores deforman la membrana) |
| **Capacidad de filtrado requerida** | **Partículas < 50 micras** | Impurezas mayores bloquean la aguja |

**5. ANOMALÍAS FRECUENTES**  
- Bloqueo en posición abierta (inunda el evaporador de líquido).  
- Bloqueo en posición cerrada o embozamiento por hielo/suciedad.  
- Fuga del gas de la cabeza termostática.  
- Modificación del tornillo de tarado por manipulación indebida.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta total de frío, evaporador congelado o congelación de la tubería de aspiración.

**7. CÓMO COMPROBARLO**  
Medir el recalentamiento en manómetros y termómetro de contacto. Jamás manipular el tornillo de reglaje ni someterla a presiones superiores a 15 bar durante pruebas aisladas.

---

### **NOTA DE ELEMENTO — EVAPORADOR**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En el interior del habitáculo, integrado dentro del mueble del salpicadero.  
APLICACIÓN: Circuito de aire acondicionado.

**1. MISIÓN**  
Enfriar y deshumidificar el aire impulsado hacia el habitáculo mediante la ebullición del fluido refrigerante en su interior.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Intercambiador térmico de baja presión. El refrigerante entra en estado difásico a -1 ºC y 3 bar. Al evaporarse, absorbe masivamente el calor del aire que atraviesa sus aletas. Al enfriarse el aire, la humedad ambiental se condensa sobre las aletas de aluminio y se evacua por el desagüe del salpicadero.

**3. CARACTERÍSTICAS**  
Construido en aluminio. Tipos: Evaporador de placas o de tubo/aleta.

**4. VALORES DE TRABAJO**  

| Tramo | Presión | Temperatura | Estado del fluido |
|---|---|---|---|
| **Entrada** | **3 bar** | **-1 ºC** | Difásico (Líquido + Gas) |
| **Evaporación** | **3 bar** | **-1 ºC a +1 ºC** | Cambio de estado difásico |
| **Salida (Recalentado)** | **3 bar** | **+3 ºC** | Gas de baja presión |

**5. ANOMALÍAS FRECUENTES**  
- Perforación por corrosión.  
- Obstrucción de aletas por formación de bloque de hielo (fallo de sonda o termostato).  
- Fugas en racores.  
- Proliferación de bacterias y hongos que generan malos olores en el habitáculo.

**6. COMPORTAMIENTO EN AVERÍA**  
Charco de agua en los pies del habitáculo, aire sin enfriar o mal olor pestilente al conectar la ventilación.

**7. CÓMO COMPROBARLO**  
Verificar la temperatura del aire soplado por los difusores, realizar desinfección higiénica y comprobar la estanqueidad con detector de fugas en la salida de condensados.

---

### **NOTA DE ELEMENTO — CANALIZACIONES FRIGORÍFICAS**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: Vano motor e interconexiones entre los componentes de la climatización.  
APLICACIÓN: Conducción del fluido refrigerante R134a y aceite.

**1. MISIÓN**  
Unir los diferentes componentes del circuito cerrado para permitir la circulación del fluido frigorífico a Alta y Baja Presión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Conducción estanca de fluidos. Absorbe las vibraciones del motor respecto a la carrocería mediante tramos flexibles y amortigua ruidos hidroacústicos mediante silenciadores (mufflers).

**3. CARACTERÍSTICAS**  
- **Tramos rígidos:** Tubos de aluminio o acero.  
- **Tramos flexibles:** Manguitos multicapa formados por capa interior (barrera impermeabilizante), capa intermedia, refuerzo textil y revestimiento exterior sintético.  
- **Diámetros:** Pequeño diámetro en línea de líquido HP; gran diámetro en línea de gas BP.

**4. VALORES DE TRABAJO**  

| Tramo del circuito | Rango de presión | Diámetro del tubo |
|---|---|---|
| **Línea de Alta Presión (HP)** | **19 a 20 bar** | Diámetro pequeño |
| **Línea de Baja Presión (BP)** | **3 bar** | Diámetro grande |

**5. ANOMALÍAS FRECUENTES**  
Fugas en el engaste entre la parte rígida y flexible; porosidad por envejecimiento del caucho; roce mecánico contra partes metálicas.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida progresiva o rápida de gas refrigerante y trazas de aceite en la zona de rozamiento o engaste.

**7. CÓMO COMPROBARLO**  
Inspección visual con luz ultravioleta (si lleva colorante) o paso del detector electrónico de fugas a lo largo de los manguitos.

---

### **NOTA DE ELEMENTO — ORIFICIO CALIBRADO**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: Insertado en la tubería de alta presión, justo a la entrada del evaporador.  
APLICACIÓN: Circuitos de A/C con acumulador y compresor de cilindrada variable.

**1. MISIÓN**  
Provocar la expansión y caída de presión del líquido refrigerante a la entrada del evaporador (sin capacidad de regulación de caudal).

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Restricción fija de sección constante. Expande el líquido de alta presión a baja presión al hacerlo pasar por un estrechamiento calibrado. Su uso requiere obligatoriamente la presencia de un acumulador a la salida del evaporador.

**3. CARACTERÍSTICAS**  
Cuerpo plástico cilíndrico provisto de un tubo capilar central de calibre fijo, mallas filtrantes en ambos extremos y juntas de estanqueidad.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor de trabajo | Condiciones de validez |
|---|---|---|
| **Caída de presión** | De **19 bar** a **3 bar** | En funcionamiento de A/C |
| **Sección del orificio** | Fija e inalterable | Calibración fija de origen |

**5. ANOMALÍAS FRECUENTES**  
Taponamiento total o parcial por virutas metálicas del compresor o desecante roto.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de frío en el habitáculo, presión de baja anormalmente baja y presión de alta muy elevada.

**7. CÓMO COMPROBARLO**  
Extraer el orificio mediante el útil extractor especial y verificar la limpieza de sus mallas filtrantes.

---

### **NOTA DE ELEMENTO — ACUMULADOR**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En el vano motor, entre la salida del evaporador y la aspiración del compresor.  
APLICACIÓN: Circuitos de A/C provistos de orificio calibrado.

**1. MISIÓN**  
Separar la fase líquida y gaseosa del refrigerante para garantizar que sólo entre gas al compresor, filtrando e reteniendo la humedad.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El fluido difásico procedante del evaporador choca contra un deflector interno. El líquido, más pesado, cae al fondo de la botella, mientras que el gas asciende y es aspirado por la parte superior del tubo de aspiración en "U". Un orificio de retorno en el fondo del tubo permite la aspiración progresiva del aceite decantado.

**3. CARACTERÍSTICAS**  
Depósito cilíndrico con deflector de entrada, bolsa de desecante en el fondo, tubo de aspiración curvado y orificio dosificador de aceite.  
📷 IMAGEN: Despiece interno del acumulador con deflector y tubo en U — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 135

**4. VALORES DE TRABAJO**  

| Parámetro | Valor prescrito | Condiciones de validez |
|---|---|---|
| **Intervalo de sustitución recomendado** | **Cada 2 años** | Mantenimiento preventivo |
| **Sustitución obligatoria** | En cualquier apertura del circuito | Para evitar la saturación del desecante |

**5. ANOMALÍAS FRECUENTES**  
Saturación del desecante por agua, generando obstrucción y post-expansión; ruptura del saco de desecante.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida de rendimiento de refrigeración, golpe de líquido en el compresor o presencia de corrosión ácida interna.

**7. CÓMO COMPROBARLO**  
Verificar el historial de sustitución (máximo 2 años) y comprobar si existen diferencias de temperatura entre el tubo de entrada y salida del acumulador.

---

### **NOTA DE ELEMENTO — PRESOSTATO**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En la línea de alta presión, sobre el filtro deshidratante o en las canalizaciones HP.  
APLICACIÓN: Sistema de seguridad e intermediación del circuito frigorífico.

**1. MISIÓN**  
Proteger el sistema desconectando el compresor por presión excesivamente alta o baja, y ordenar el salto de la 2ª velocidad del grupo motoventilador (GMV).

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Interruptor accionado por presión hidráulica. Un diafragma bimetálico/mecanizado abre o cierra contactos eléctricos según los umbrales de presión alcanzados en la línea de alta.

**3. CARACTERÍSTICAS**  
Módulo estanco provisto de toma roscada para fluido y conector de contactos eléctricos (BP, HP y MP).

**4. VALORES DE TRABAJO**  

| Función del presostato | Umbral de presión de corte / activación | Condiciones de validez |
|---|---|---|
| **Corte por sobrepresión (HP)** | **~27 bar** | Presión de marcha peligrosa |
| **Corte por baja presión (BP)** | **< 2 bar** | Arranque con falta de gas o temp. exterior < -10 ºC |
| **Activación 2ª velocidad GMV** | **~18 bar** | Elevación de presión en condensador |

**5. ANOMALÍAS FRECUENTES**  
Fogueo de contactos eléctricos; fugas por la rosca de conexión; fallo de conmutación de la 2ª velocidad del electroventilador.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no se acopla nunca, o el sistema se dispara por sobrepresión al no saltar la 2ª velocidad del ventilador a 18 bar.

**7. CÓMO COMPROBARLO**  
Comprobar continuidad de los contactos con polímetro y verificar presiones reales en el puente de manómetros.

---

### **NOTA DE ELEMENTO — SONDA DEL EVAPORADOR**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: Pinchada entre las aletas del evaporador, en el punto térmico más frío.  
APLICACIÓN: Sistema de seguridad contra la congelación del evaporador.

**1. MISIÓN**  
Supervisar la temperatura del evaporador para desconectar el compresor antes de que se forme hielo sobre las aletas.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor termostático o termistencia. Si la temperatura del evaporador cae hasta -1 ºC, el interruptor/sensor ordena el corte eléctrico del compresor. Cuando la temperatura asciende a +4 ºC, vuelve a permitir el acoplamiento del compresor.

**3. CARACTERÍSTICAS**  
Sonda mecánica de capilar o sensor electrónico NTC de varilla de inserción directa.

**4. VALORES DE TRABAJO**  

| Estado de la sonda | Temperatura del evaporador | Acción sobre el compresor |
|---|---|---|
| **Desconexión de seguridad** | **-1 ºC** | Desconecta el compresor (Corte por hielo) |
| **Reconexión de servicio** | **+4 ºC** | Vuelve a conectar el compresor |

**5. ANOMALÍAS FRECUENTES**  
Descalibración del elemento sensible; desprendimiento o mala posición de la sonda entre las aletas.

**6. COMPORTAMIENTO EN AVERÍA**  
El evaporador se bloquea por una masa de hielo impenetrable, cortando por completo el caudal de aire hacia el habitáculo.

**7. CÓMO COMPROBARLO**  
Medir la resistencia del captador o verificar los ciclos de corte (a -1 ºC) y reconexión (a +4 ºC) con el equipo de clima funcionando.

---

### **NOTA DE ELEMENTO — RADIOCASETE E INTERFAZ DE COMUNICACIÓN**
CÓDIGO: R (CLIM ON LINE / Módulo técnico)  
UBICACIÓN: Consola central del salpicadero.  
APLICACIÓN: Vehículos con gestión electrónica de climatización integrando la pasarela de datos.

**1. MISIÓN**  
Actuar como pasarela de comunicación e interfaz de datos entre el panel de mando, los captadores térmicos y el calculador de climatización.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Procesa señales multiplexadas bidireccionales, convirtiendo los códigos de entrada de la botonera en señales de control para la UCE y la pantalla de visualización.

**3. CARACTERÍSTICAS**  
Módulo electrónico multifunción con pasarela de bus de datos integrada.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor de trabajo |
|---|---|
| **Alimentación de señal** | **5 V CC / 12 V CC** según línea de bus |

**5. ANOMALÍAS FRECUENTES**  
Avería en el microprocesador del bus de comunicación; pérdida de transmisión hacia la pantalla del salpicadero.

**6. COMPORTAMIENTO EN AVERÍA**  
Los datos del climatizador desaparecen del display o la UCE no responde a las órdenes de las teclas.

**7. CÓMO COMPROBARLO**  
Verificar la comunicación mediante el útil de diagnosis e inspeccionar la continuidad de las líneas del bus.

---

### **NOTA DE ELEMENTO — RADIADOR DE CALEFACCIÓN**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En el interior del bloque de climatización del salpicadero.  
APLICACIÓN: Sistema de calefacción del habitáculo.

**1. MISIÓN**  
Cedér calor al aire que entra al habitáculo utilizando la energía térmica del líquido de refrigeración del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Intercambiador térmico líquido/aire. El líquido caliente del motor (a 80-90 ºC) circula por sus tubos de aluminio. El aire impulsado por el GMV atraviesa sus aletas, absorbe el calor y se calienta antes de salir por los difusores.

**3. CARACTERÍSTICAS**  
Radiador de aluminio compacto conectado en derivación al circuito de refrigeración del motor.  
📷 IMAGEN: Esquema del circuito de refrigeración del motor y radiador de calefacción — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 147

**4. VALORES DE TRABAJO**  

| Parámetro | Valor de trabajo | Condiciones de validez |
|---|---|---|
| **Temperatura de entrada del líquido** | **80 ºC a 90 ºC** | Motor a temperatura de servicio |

**5. ANOMALÍAS FRECUENTES**  
Taponamiento interno por lodos del anticongelante; fugas de líquido que mojan la moqueta del vehículo.

**6. COMPORTAMIENTO EN AVERÍA**  
No sale aire caliente aunque el motor esté caliente, o aparece vaho grasiento en el parabrisas con olor a anticongelante.

**7. CÓMO COMPROBARLO**  
Tocar los dos tubos de agua del radiador en el vano motor (ambos deben estar muy calientes) y comprobar que no existan fugas.

---

### **NOTA DE ELEMENTO — IMPULSOR DE AIRE / GMV**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En el interior del mueble de climatización.  
APLICACIÓN: Sistema de ventilación, calefacción y aire acondicionado.

**1. MISIÓN**  
Poner en movimiento e impulsar el caudal de aire hacia las diferentes toberas del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Turbina centrífuga accionada por un motor eléctrico de corriente continua. El dispositivo de control de potencia varía la tensión aplicada al motor para regular el caudal de aire.

**3. CARACTERÍSTICAS**  
Consta de motor eléctrico, turbina de álabes, dispositivo de control de potencia (resistencias o módulo electrónico) y conducto de refrigeración propio.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor de trabajo |
|---|---|
| **Tensión de alimentación** | **0 V a 12 V CC** (variable según velocidad seleccionada) |

**5. ANOMALÍAS FRECUENTES**  
Desgaste de escobillas del motor; fallo térmico en la tarjeta/resistencia de velocidades; agarrotamiento por hojas o suciedad.

**6. COMPORTAMIENTO EN AVERÍA**  
El aire no sale por ninguna tobera o el impulsor sólo funciona en la máxima velocidad (4ª).

**7. CÓMO COMPROBARLO**  
Alimentar el motor directamente con 12 V para verificar su giro y medir la caída de tensión en el módulo de control de potencia.

---

### **NOTA DE PROCESO — SISTEMAS DE REGULACIÓN Y ACCIONADORES / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Comparar la regulación manual y electrónica de climatización y definir la tipología de los accionadores de trampillas. Se aplica al diagnóstico del sistema de distribución de aire.

**2. FUNDAMENTO**  
- **Regulación Manual:** El conductor ajusta manualmente la mezcla y velocidad. El sistema funciona de forma intermitente y no compensa los cambios de temperatura exterior.  
- **Regulación Electrónica (Climatizador Automático):** Un calculador procesa la información de múltiples sensores (CTN) y gestiona de forma continua el caudal, la mezcla y la distribución del aire sin intervención del usuario.  
- **Accionadores de trampillas:**  
  1. *Manuales:* Mediante cables o varillas flexibles.  
  2. *Por depresión:* Accionados por pulmones neumáticas con bomba de vacío.  
  3. *Motores de Corriente Continua:* Simples, con funcionamiento en par de bloqueo (todo/nada) o potenciómetro de copia.  
  4. *Motores Paso a Paso:* Precisos, de fácil regulación digital intermitente por impulsos.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
Los accionadores posicionan las trampillas de recirculación, mezcla (caliente/frío), distribución a pies, frontal y desempañado del parabrisas.

**6. VALORES DE REFERENCIA**  

| Tipo de sistema | Intervención del conductor | Precisión de ajuste |
|---|---|---|
| **Manual** | Ajuste continuo de mandos | Variable según sensación térmica |
| **Electrónico (AUTO)** | Selección única de la temp. deseada | Corrección automática continua |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar calibrar un motor CC de bloqueo sin borrar averías: la UCE desactiva la salida por sobrecorriente si detecta atascos mecánicos en la trampilla.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CAPTADORES DE TEMPERATURA CTN**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: Repartidos en la entrada de aire exterior, salida del evaporador, salida del radiador de calefacción y dentro del habitáculo.  
APLICACIÓN: Climatizadores automáticos con regulación electrónica.

**1. MISIÓN**  
Medir las temperaturas del aire en los puntos clave del circuito e informar al calculador electrónico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Termistancias de Coeficiente de Temperatura Negativo (CTN). Su resistencia eléctrica es inversamente proporcional a la temperatura: al aumentar la temperatura, su resistencia disminuye según una curva característica no lineal. La sonda de habitáculo incorpora además una microturbina para aspirar aire y homogeneizar la lectura.  
📷 IMAGEN: Curva característica de resistencia frente a temperatura de un sensor CTN — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 171

**3. CARACTERÍSTICAS**  
Sensor termistor de 2 vías encapsulado. La sonda interna incluye un micromotor de turbina.

**4. VALORES DE TRABAJO**  

| Variación de Temperatura | Comportamiento de la Resistencia |
|---|---|
| **Temperatura AUMENTA** | Resistencia **DISMINUYE** (\\(R \downarrow\\)) |
| **Temperatura DISMINUYE** | Resistencia **AUMENTA** (\\(R \uparrow\\)) |

**5. ANOMALÍAS FRECUENTES**  
Bloqueo de la microturbina por pelusas; interrupción del hilo o cortocircuito a masa.

**6. COMPORTAMIENTO EN AVERÍA**  
El climatizador expulsa aire excesivamente caliente o frío de forma descontrolada al asumir un valor sustitutivo por avería.

**7. CÓMO COMPROBARLO**  
Medir la resistencia con multímetro en Ohmios a diferentes temperaturas y comprobar que la microturbina gira al conectar el encendido.

---

### **NOTA DE ELEMENTO — FILTRO DE HABITÁCULO**
CÓDIGO: No documentado en fuentes.  
UBICACIÓN: En la entrada de aire en el compartimento motor o bajo el salpicadero entre el impulsor y el evaporador.  
APLICACIÓN: Filtrado de aire para el interior del vehículo.

**1. MISIÓN**  
Retener los agentes contaminantes, alérgenos, polvo y partículas para evitar su entrada al habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Filtración mecánica y por carga electrostática. Las fibras de polipropileno de sección rectangular atraen y retienen las partículas en profundidad sin frenar el flujo de aire. Al ser hidrófugas, evitan la proliferación de bacterias y mohos.

**3. CARACTERÍSTICAS**  
Módulo filtrante de polipropileno resistente a la humedad y productos químicos (sal, champús). Existen versiones simples de polen y de carbón activo.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor prescrito | Condiciones de validez |
|---|---|---|
| **Intervalo de sustitución** | **Cada 15.000 km o 1 año** | Lo que antes ocurra |
| **Población sensible protegida** | **30% alérgicos / 10% asmáticos** | Retención de polen y esporas |

**5. ANOMALÍAS FRECUENTES**  
Saturación por polvo, hojas y hollín que taponan por completo el paso de aire.

**6. COMPORTAMIENTO EN AVERÍA**  
Caudal de aire muy débil por las toberas, desempañado lento, vaho continuo en los cristales, depósitos de polvo en el salpicadero y malos olores.

**7. CÓMO COMPROBARLO**  
Comprobar visualmente el grado de suciedad o realizar la medición de caudal con el equipo **Airtest**.

---

### **NOTA DE PROCESO — COMPROBACIÓN DEL FILTRO DE HABITÁCULO CON AIRTEST / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Diagnosticar de forma rápida y objetiva el nivel de saturación del filtro de habitáculo desde el interior del vehículo sin necesidad de desmontarlo. Se aplica en mantenimientos preventivos.  
📷 IMAGEN: Equipo Airtest aplicado sobre la tobera central para la medición de caudal — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 192

**2. FUNDAMENTO**  
El equipo Airtest mide la presión de aire soplado en el difusor seleccionado. Un filtro saturado reduce el caudal y la presión, lo que es detectado por el captador electrónico del instrumento.

**3. CONDICIONES PREVIAS**  
- Motor a temperatura de servicio y estabilizado a 1.500 rpm.  
- Mando de calefacción al mínimo, A/C desconectado y recirculación apagada.  
- Ventilador del vehículo al máximo de velocidad.

**4. EQUIPO Y MATERIAL**  
- Dispositivo de diagnóstico **Valeo Airtest**.  
- Tabla de interpretación de medidas por modelo de vehículo.

**5. DESARROLLO**  
1. Sentarse en el asiento del conductor; abrir el difusor de aire indicado en la tabla del vehículo y cerrar el resto de toberas frontales.  
2. Conectar el tubo del captador al racor `+` del Airtest.  
3. Pulsar `ON` y verificar que la pantalla marque cero (\\(\pm 0,2\\)).  
4. Arrancar el motor, seleccionar salida frontal, calefacción al mínimo, ventilación al máximo y estabilizar el motor a 1.500 rpm.  
5. Aplicar y presionar fuertemente el canalizador del captador sobre el difusor seleccionado.  
6. Anotar la lectura digital mostrada en el display.  
7. Consultar el código de color en la tabla de referencia:  
   - **ROJO:** Filtro saturado. Sustituir de inmediato.  
   - **ÁMBAR:** Filtro parcialmente saturado. Aconsejar cambio.  
   - **VERDE:** Filtro correcto.  
8. Si se sustituye el filtro, repetición de la prueba: el nuevo valor debe situarse obligatoriamente en la zona VERDE.

**6. VALORES DE REFERENCIA**  

| Indicación / Código de color | Estado del filtro de habitáculo | Acción requerida |
|---|---|---|
| **Zona ROJA** | Filtro totalmente saturado | Sustitución inmediata |
| **Zona ÁMBAR** | Parcialmente saturado | Aconsejar cambio al cliente |
| **Zona VERDE** | Filtro en buen estado | Sin intervención |
| **Puesta a cero del Airtest** | **0,0 (\\(\pm 0,2\\))** | Antes de presionar sobre la tobera |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Si tras montar un filtro nuevo la lectura sigue en zona ROJA: existe una avería en el circuito de aire (conductos sueltos, trampilla encasquillada, relé o impulsor defectuoso).  
- **Jamás soplar dentro del canalizador del Airtest:** se descalibra de forma irreversible.

**8. VERIFICACIÓN FINAL**  
Confirmar que la medición con el filtro nuevo instalado se ubica holgadamente dentro de la franja VERDE.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — DIAGNÓSTICO POR SUBENFRIAMIENTO Y RECALENTAMIENTO / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Determinar la carga exacta de refrigerante y el estado de la válvula de expansión calculando los valores de subenfriamiento y recalentamiento. Se aplica a la localización de averías en el circuito frigorífico.  
📷 IMAGEN: Medición de temperaturas y presiones para el cálculo de subenfriamiento y recalentamiento — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 203 y 209

**2. FUNDAMENTO**  
- **Subenfriamiento (SR):** Diferencia entre la temperatura de condensación (leída en la escala de temperatura del manómetro de Alta Presión) y la temperatura real medida con termómetro de contacto a la salida del condensador.  
  \\[SR = T_{\text{condensación (manómetro HP)}} - T_{\text{salida condensador (termómetro)}}\\]  
- **Recalentamiento (RC):** Diferencia entre la temperatura real medida a la salida del evaporador (aspiración del compresor) y la temperatura de evaporación (leída en la escala del manómetro de Baja Presión).  
  \\[RC = T_{\text{salida evaporador (termómetro)}} - T_{\text{evaporación (manómetro BP)}}\\]

**3. CONDICIONES PREVIAS**  
- Motor en marcha y climatizador funcionando al máximo rendimiento.  
- Temperatura exterior \\(> 16 \text{ ºC}\\).

**4. EQUIPO Y MATERIAL**  
- Puente de manómetros (HP y BP).  
- Termómetro digital de contacto de dos sondas.

**5. DESARROLLO Y DIAGNÓSTICO**  
1. Conectar los manómetros de HP y BP a las tomas de servicio.  
2. Colocar las sondas de contacto a la salida del condensador y a la salida del evaporador.  
3. Calcular \\(SR\\) y \\(RC\\) y comparar con los límites nominales (\\(2 \text{ ºC a } 10 \text{ ºC}\\)):  
   - **Falta de fluido refrigerante:** Subenfriamiento DÉBIL (\\(< 2 \text{ ºC}\\)) + Recalentamiento ALTO (\\(> 10 \text{ ºC}\\)).  
   - **Exceso de fluido refrigerante:** Subenfriamiento ALTO (\\(> 10 \text{ ºC}\\)) + Recalentamiento DÉBIL (\\(< 2 \text{ ºC}\\)).  
   - **Filtro deshidratante saturado / Obstruido:** Subenfriamiento ALTO (\\(> 10 \text{ ºC}\\)) + Recalentamiento NORMAL (\\(2 \text{ a } 10 \text{ ºC}\\)) + Caída de temperatura a lo largo del filtro.  
   - **Compresor averiado (Pérdida de compresión):** BP demasiado alta + HP demasiado baja.  
   - **Aire / Incondensables en el circuito (Mal vacío):** BP alta + HP alta + Subenfriamiento NORMAL.

**6. VALORES DE REFERENCIA**  

| Magnitud calculada | Margen de correcto funcionamiento | Diagnóstico por desviación |
|---|---|---|
| **Subenfriamiento (\\(SR\\))** | **2 ºC a 10 ºC** | \\(< 2 \text{ ºC}\\): Falta de gas / \\(> 10 \text{ ºC}\\): Exceso de gas |
| **Recalentamiento (\\(RC\\))** | **2 ºC a 10 ºC** | \\(< 2 \text{ ºC}\\): Exceso de gas / \\(> 10 \text{ ºC}\\): Falta de gas |
| **Temperatura de aire soplado** | **2 ºC a 10 ºC** | Para temperatura ambiente entre 15 ºC y 25 ºC |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- **Jamás recargar fluido sin haber controlado previamente el subenfriamiento y el recalentamiento.**  
- Confundir la falta de gas con una válvula de expansión adaptable inadaptada (una aguja de diámetro incorrecto provoca poco caudal, alta presión y temperatura de evaporación elevada simulando falta de carga).

**8. VERIFICACIÓN FINAL**  
Verificar que tras el ajuste de carga o reparación, tanto el \\(SR\\) como el \\(RC\\) se estabilicen entre \\(2 \text{ ºC}\\) y \\(10 \text{ ºC}\\).

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — DIAGNÓSTICO DE CLIMATIZACIÓN CON CLIMTEST / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Realizar un diagnóstico automático integral de las prestaciones y componentes del circuito frigorífico mediante la estación de comprobación Climtest. Se aplica a mantenimientos preventivos y localización de averías.  
📷 IMAGEN: Dispositivo Valeo Climtest y sus conexiones para la medición del circuito — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 190 y 238

**2. FUNDAMENTO**  
El equipo Climtest toma simultáneamente 6 magnitudes (presión HP, presión BP, temperatura de entrada a la válvula de expansión, temperatura de aspiración del compresor, temperatura ambiente y temperatura del aire soplado en toberas). Realiza 100 mediciones cada 20 segundos y calcula automáticamente el subenfriamiento y el recalentamiento, mostrando el diagnóstico en pantalla.

**3. CONDICIONES PREVIAS**  
- Temperatura ambiente exterior \\(> 16 \text{ ºC}\\) (a temperaturas inferiores el compresor corta por seguridad imposibilitando la prueba).  
- Seleccionar correctamente el tipo de fluido frigorífico en el aparato (R12 o R134a).

**4. EQUIPO Y MATERIAL**  
- Estación portátil **Valeo Climtest**.

**5. DESARROLLO**  
1. Conectar las tomas de presión y las sondas térmicas del Climtest en los puntos del circuito correspondientes.  
2. Encender el Climtest y seleccionar el tipo de gas (**R12** o **R134a**).  
3. Poner en marcha el motor y el sistema de aire acondicionado al máximo rendimiento.  
4. Esperar a que el microprocesador procese las cadenas de ciclos de medición.  
5. Leer el resultado del diagnóstico en el display digital del equipo:  
   - *"OK"* \\(\rightarrow\\) Sistema en perfecto estado.  
   - *"Falta fluido frigorífico"* \\(\rightarrow\\) Fuga o subcarga.  
   - *"Exceso de fluido en circuito"* \\(\rightarrow\\) Sobrecarga.  
   - *"Filtro Deshidratante saturado"* \\(\rightarrow\\) Obstrucción en la línea de líquido.  
   - *"Problema en circuito"* \\(\rightarrow\\) Fallo en compresor o válvula de expansión.  
   - *"Error. Revise conexiones"* \\(\rightarrow\\) Sonda o latiguillo mal conectado.

**6. VALORES DE REFERENCIA**  

| Parámetro evaluado por Climtest | Criterio de validez interna |
|---|---|
| **Límite de temperatura ambiental** | **> 16 ºC** para realizar la prueba |
| **Muestreo del calculador** | **100 mediciones cada 20 segundos** sobre 6 magnitudes |
| **Temperatura en difusores (\\(T_{as}\\))** | **2 ºC a 10 ºC** (para \\(T_{\text{ext}}\\) entre 15 ºC y 25 ºC) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Realizar la prueba con temperatura exterior \\(< 16 \text{ ºC}\\): arroja diagnósticos erróneos al entrar la cilindrada variable en posición mínima.  
- Un error de tan solo 1 ºC en la colocación de una sonda de contacto alterará el cálculo del subenfriamiento provocando un falso diagnóstico.

**8. VERIFICACIÓN FINAL**  
Confirmar la indicación de mensaje *"OK"* en la pantalla del Climtest tras concluir la reparación.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

COBERTURA: documento «CLIMATIZACION INTRODUCCION.PDF», páginas 1 a 249 de 249. [completo]