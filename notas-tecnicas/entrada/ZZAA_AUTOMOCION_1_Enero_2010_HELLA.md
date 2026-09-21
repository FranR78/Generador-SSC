### **NOTA DE PROCESO — MAGNITUDES FÍSICAS, PRESIÓN Y VACÍO EN REFRIGERACIÓN / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Definir las magnitudes físicas de presión atmosférica, absoluta y relativa, los niveles de vacío y las formas de transporte de calor aplicadas a la climatización del automóvil.

**2. FUNDAMENTO**  
La presión atmosférica a nivel del mar se toma como referencia equivalente a 1 kg/cm2 o 1 bar (760 mm Hg). La presión absoluta es la suma de la presión manométrica relativa más la presión atmosférica. Al reducir la presión por debajo de la atmosférica (crear vacío o depresión), baja el punto de ebullición de los líquidos, permitiendo que ebullan a temperaturas muy inferiores a las habituales.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Medición de la presión atmosférica por columna de mercurio y escalas de temperatura — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 7-11  
- **Presiones:**  
  * *Presión atmosférica:* 1 kg/cm2 = 1 bar (760 mm Hg).  
  * *Presión relativa:* La medida directamente por los manómetros de servicio (considera la atmosférica como 0).  
  * *Presión absoluta:* Presión medida + 1 kg/cm2 (presión atmosférica). Un valor manométrico de 2 kg/cm2 equivale a 3 kg/cm2 absolutos.  
- **Niveles de vacío (depresión):**  
  * *Bajo y mediano vacío:* Hasta 10^-2 mbar.  
  * *Alto vacío:* De 10^-3 a 10^-6 mbar.  
  * *Ultra alto vacío:* Por debajo de 10^-6 mbar.  
- **Mecanismos de transmisión de calor:**  
  * *Conducción:* Transferencia de calor entre cuerpos sólidos en contacto directo.  
  * *Convección:* Transferencia de energía mediante el movimiento y mezcla de fluidos a distintas temperaturas.  
  * *Radiación:* Transmisión de energía calórica mediante ondas electromagnéticas sin necesidad de un medio material.

**6. VALORES DE REFERENCIA**  

| Parámetro / Magnitud | Valor numérico | Condiciones de validez |
|---|---|---|
| **Presión atmosférica estándar** | **1 kg/cm2 = 1 bar = 760 mm Hg** | A nivel del mar (1.013 mbar / 14,7 psi) |
| **Punto de ebullición del agua** | **100 ºC** | A presión atmosférica (1 bar) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir la presión relativa indicada por los manómetros con la presión absoluta al interpretar los diagramas p-h o las tablas de saturación de refrigerante.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — FLUIDOS REFRIGERANTES R12 Y R134a**
UBICACIÓN: Circuito cerrado de refrigeración.  
APLICACIÓN: Sistemas de aire acondicionado y climatización de automoción.

**1. MISIÓN**  
Actuar como fluido caloportador que absorbe la carga térmica del habitáculo al evaporarse a baja presión y la expulsa al exterior al condensarse a alta presión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Fluido sintético de bajo punto de ebullición. Varía su estado físico (líquido o gas) modificando la presión a la que se le somete dentro del circuito cerrado.

**3. CARACTERÍSTICAS**  
- **R12 (CCL2F2 - Diclorodifluorometano):** Agente CFC. Coeficiente ODP = 1,0; GWP = 3,1; CLP = 1,5. Permanencia en la atmósfera de 120 años. Prohibido por su alta destrucción de la capa de ozono.  
- **R134a (CH2F-CF3 - Tetrafluoroetano):** Agente HFC. Coeficiente ODP = 0; GWP = 0,26; CLP = 0. Permanencia atmosférica de 16 años. Sustituto ecológico exento de cloro.

**4. VALORES DE TRABAJO**  

| Propiedad física | Refrigerante R12 | Refrigerante R134a |
|---|---|---|
| **Punto de ebullición (a 1 atm / 760 mm Hg)** | **-29,8 ºC** | **-26,5 ºC** |
| **Punto de solidificación** | **-158 ºC** | **-101,1 ºC** |
| **Temperatura crítica** | **+112 ºC** | **+100,6 ºC** |
| **Presión crítica** | **41,58 bar** | **40,56 bar** |

**5. ANOMALÍAS FRECUENTES**  
Degradación química por contaminación con humedad, formando ácido fluorhídrico que ataca los metales y retenes.

**6. COMPORTAMIENTO EN AVERÍA**  
Fugas de gas o falta acusada de rendimiento frigorífico.

**7. CÓMO COMPROBARLO**  
Identificación de la composición química del gas mediante analizador de refrigerantes e inspección de presiones en manómetros.

---

### **NOTA DE PROCESO — EL CICLO FRIGORÍFICO GENERAL / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Describir la transformación de fase del refrigerante, las zonas de presión y la transferencia de energía a lo largo del circuito cerrado de aire acondicionado.

**2. FUNDAMENTO**  
El circuito se divide en dos zonas de trabajo (Alta y Baja presión) mediante dos elementos de separación: el compresor y la válvula de expansión. El frío no se genera, sino que se extrae la energía térmica del aire del habitáculo al ebullir el refrigerante a baja presión.

**3. CONDICIONES PREVIAS**  
Compresor en marcha.

**4. EQUIPO Y MATERIAL**  
Puente de manómetros.

**5. DESARROLLO**  
📷 IMAGEN: Esquema del circuito frigorífico con las secciones A, B, C y D — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 56-61  
- **Sección A a B (Compresión):** El compresor aspira el gas a baja presión y temperatura (Sección A: 1,5 bar) y lo comprime enviándolo hacia el condensador a alta presión y alta temperatura (Sección B: 14 bar). Recalentamiento A'.  
- **Sección B a C (Condensación):** En el condensador el gas cede calor al aire exterior y se licúa pasando a estado líquido a alta presión (Sección C: 14 bar). Subenfriamiento C'.  
- **Sección C a D (Expansión):** La válvula de expansión estrangula el fluido líquido cayendo la presión bruscamente (Sección D: 1,5 bar) y reduciendo drásticamente su temperatura.  
- **Sección D a A (Evaporación):** El líquido pulverizado ebulles dentro del evaporador absorbiendo el calor del aire que entra al habitáculo, transformándose de nuevo en vapor a baja presión (1,5 bar).

**6. VALORES DE REFERENCIA**  

| Tramo del circuito | Presión de trabajo | Estado del fluido refrigerante |
|---|---|---|
| **Lado de Baja Presión (BP - Secciones A y D)** | **1,5 bar** | Mezcla líquido/vapor a baja temperatura |
| **Lado de Alta Presión (AP - Secciones B y C)** | **14 bar** | Gas sobrecalentado / Líquido subenfriado |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Retorno de refrigerante líquido a la aspiración del compresor (Sección A): provoca "golpe de ariete" y destruye las láminas de las válvulas.

**8. VERIFICACIÓN FINAL**  
Comprobación del salto térmico entre la entrada y salida de los intercambiadores de calor.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — COMPRESORES DE CLIMATIZACIÓN (MECÁNICOS Y ELECTRÓNICOS)**
UBICACIÓN: Montado en el bloque motor y accionado por la correa auxiliar.  
APLICACIÓN: Generación de la presión de envío en el circuito frigorífico.

**1. MISIÓN**  
Aspirar el fluido refrigerante en estado gaseoso a baja presión, comprimirlo e impulsarlo a alta presión y temperatura hacia el condensador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- *Alternativo rígido (York / Sanden SD):* Pistones axiales o verticales accionados por cigüeñal o plato inclinado fijo.  
- *Rotativo de paletas:* Rotor excéntrico dentro de un estátor; las paletas se deslizan por fuerza centrífuga formando cámaras de compresión variables.  
- *Rotativo de espiral (Scroll):* Una espiral móvil realiza una órbita sobre una fija, reduciendo progresivamente el volumen de las bolsas de gas hacia el centro.  
- *Cilindrada variable mecánica (Harrison V5 / Sanden variable):* Una válvula de regulación interna con cápsula elástica ajusta la presión del cárter (PC) variando el ángulo del plato porta-pistones de 5 % a 100 %.  
- *Cilindrada variable electrónica (Denso 6SEU12):* Sin embrague. Regulado exteriormente por una electroválvula pilotada por la UCE mediante señal PWM a 500 Hz (frecuencia que mantiene el empujador en estado flotante) variando el rendimiento entre el 2 % y el 98 %.

**3. CARACTERÍSTICAS**  
- York: Compresor alternativo de pistones verticales.  
- Denso 6SEU12: Sin acoplamiento electromagnético; polea con sistema de seguridad de goma/grafito de rotura programada si se bloquea el eje.

**4. VALORES DE TRABAJO**  

| Modelo de compresor | Capacidad de lubricante | Tipo / Regulación |
|---|---|---|
| **Sanden SD 508** | **175 cc** | Cilindrada fija |
| **Sanden SD 709 / SD7H13 / SD7H15** | **135 cc** | Cilindrada fija |
| **Harrison V5** | **265 cc** | Cilindrada variable mecánica |
| **York 9 inch / 10 inch** | **285 cc** | Cilindrada fija |
| **Denso 6SEU12** | Señal PWM **500 Hz** (2 % a 98 % duty) | Regulación electrónica externa |

**5. ANOMALÍAS FRECUENTES**  
Gripado por falta de lubricación; corrosión e inoculación de ácido por humedad; rotura de válvulas de láminas por golpe de ariete.

**6. COMPORTAMIENTO EN AVERÍA**  
Igualación de las presiones de alta y baja con la polea girando; ruidos mecánicos intensos.

**7. CÓMO COMPROBARLO**  
Medición de presiones hidráulicas con manómetros e inspección con osciloscopio de la señal PWM a 500 Hz en la electroválvula Denso.

---

### **NOTA DE PROCESO — SUSTITUCIÓN DE COMPRESOR DE REGULACIÓN EXTERNA POR COMPRESOR CON EMBRAGUE / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer la adaptación eléctrica para sustituir un compresor de regulación externa electrónica (sin embrague, tipo Denso 6SEU12) por un compresor convencional provisto de embrague electromagnético.

**2. FUNDAMENTO**  
Permite interconectar la salida de excitación por impulsos de la UCE con la bobina electromagnética de 12 V de un compresor estándar utilizando un relé de conmutación.

**3. CONDICIONES PREVIAS**  
Encendido desconectado y circuito despresurizado.

**4. EQUIPO Y MATERIAL**  
Relé estándar automotriz de 5 patillas, cableado, fusible de protección y máquina de diagnosis oficial (para el método oficial).

**5. DESARROLLO**  
📷 IMAGEN: Esquema eléctrico de conexiones del relé para sustitución de compresores — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 164-169  
- **Proceso Recomendado por Opel (Método Oficial):**  
  1. Conectar el cable +12 V procedentes de la antigua electroválvula reguladora al cable positivo (marrón) del nuevo compresor.  
  2. Conectar un positivo directo de batería (+) protegido con fusible al terminal 86 del relé.  
  3. Conectar un negativo directo de batería (-) al terminal 30 del relé.  
  4. Conectar el cable de negativo por impulsos (-) de la antigua electroválvula al terminal 85 del relé.  
  5. Conectar la salida del terminal 87 del relé al cable de negativo (negro/blanco) del nuevo compresor.  
  6. Reprogramar la UCE del vehículo con la máquina de diagnosis original para cambiar la salida de negativo por impulsos (-) a negativo continuo (-).  
- **Proceso Alternativo Extraoficial (Sin reprogramación de UCE):**  
  1. Conectar el cable negativo (negro/blanco) del nuevo compresor a masa/negativo directo de batería (-).  
  2. Conectar un positivo directo de batería (+) protegido con fusible al terminal 30 del relé.  
  3. Conectar el terminal 86 del relé a negativo directo de batería (-).  
  4. Conectar el cable +12 V de la antigua electroválvula al terminal 85 del relé.  
  5. Conectar el terminal 87 del relé al cable positivo (marrón) del nuevo compresor.  
  6. Anular y aislar el cable (-) por pulsos de la antigua electroválvula.

**6. VALORES DE REFERENCIA**  

| Terminal del relé | Alimentación / Conexión |
|---|---|
| **Terminal 30** | Positivo (+) de batería con fusible (o Masa - en método Opel) |
| **Terminal 85 / 86** | Excitación de bobina desde señal de climatización / Masa |
| **Terminal 87** | Salida de alimentación hacia el nuevo compresor |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- En el método oficial, omitir la reconfiguración de la centralita con la diagnosis provocaría la vibración constante del relé debido a la frecuencia de impulsos.

**8. VERIFICACIÓN FINAL**  
Acoplamiento firme y silencioso del embrague electromagnético al accionar el interruptor de A/C.

**9. SEGURIDAD Y NORMATIVA**  
Instalar siempre un fusible aéreo de protección en la línea directa de batería.

---

### **NOTA DE ELEMENTO — ACEITES LUBRICANTES (MINERAL, PAG, ESTER Y PAO-OIL)**
UBICACIÓN: En el cárter del compresor y repartido por las tuberías del circuito.  
APLICACIÓN: Lubricación de pistones, rodamientos y retenes del compresor.

**1. MISIÓN**  
Reducir el rozamiento y desgaste en las piezas móviles del compresor, sellar retenes y evacuar calor interno.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Circula en continua emulsión siendo arrastrado por el fluido refrigerante a lo largo de todo el circuito frigorífico.

**3. CARACTERÍSTICAS**  
- *Aceite Mineral:* Para R12. Poco higroscópico. Incompatible con R134a.  
- *Aceite PAG (Polialquilenglicol):* Para R134a. **Muy higroscópico** (absorbe humedad del aire con rapidez). Incompatible con aceites minerales.  
- *Aceite Ester:* Sintético para R12 y R134a (reconversiones). Bastante higroscópico.  
- *PAO-Oil (Polialfaolefina):* Sintético universal. **¡NO ES HIGROSCÓPICO!** Compatible con todos los aceites y refrigerantes (R12/R134a) y apto para compresores eléctricos.

**4. VALORES DE TRABAJO**  

| Componente del circuito | Reparto medio de la masa de aceite en el sistema |
|---|---|
| **Compresor** | **50 %** del volumen total |
| **Evaporador** | **20 %** del volumen total |
| **Condensador** | **10 %** del volumen total |
| **Filtro deshidratador / Acumulador** | **10 %** del volumen total |
| **Tuberías / Mangueras** | **10 %** del volumen total |

**5. ANOMALÍAS FRECUENTES**  
Dejar frascos de aceite PAG abiertos al ambiente; absorbe humedad formando compuestos ácidos que destruyen el compresor.

**6. COMPORTAMIENTO EN AVERÍA**  
Gripado mecánico del compresor por pérdida de viscosidad o contaminación ácida.

**7. CÓMO COMPROBARLO**  
Comprobación visual del aceite extraído (descartar si está negro, con viruta metálica o rojizo).

---

### **NOTA DE ELEMENTO — EMBRAGUE ELECTROMAGNÉTICO DEL COMPRESOR**
UBICACIÓN: Frontal de la carcasa del compresor.  
APLICACIÓN: Transmisión de par desde la correa del motor al eje del compresor.

**1. MISIÓN**  
Conectar o desacoplar la transmisión mecánica entre la polea impulsada por el motor y el eje del compresor según las necesidades del sistema.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Al alimentar la bobina magnética con 12 V, se crea un campo magnético que atrae el disco de arrastre contra la cara de la polea giratoria, venciendo la fuerza de los muelles de oposición y haciendo girar el eje.

**3. CARACTERÍSTICAS**  
Bobina electromagnética, polea con cojinete de doble hilera de bolas (Poly-V o 1A), disco frontal de arrastre con muelles de retorno y elementos amortiguadores.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor prescrito |
|---|---|
| **Tensión de alimentación** | **12 V CC** |
| **Distancia de entrehierro (disco a polea)** | Calibración de décimas de mm mediante arandelas de ajuste |

**5. ANOMALÍAS FRECUENTES**  
Corte eléctrico de la bobina; desgaste por rozamiento seco de las caras de fricción; holgura excesiva en el rodamiento de la polea.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no acopla al activar el A/C o genera ruidos de patinamiento.

**7. CÓMO COMPROBARLO**  
Medición de la resistencia de la bobina con polímetro y comprobación del entrehierro con galgas.

---

### **NOTA DE ELEMENTO — CANALIZACIONES, RACORES, JUNTAS Y SISTEMAS DE UNIÓN (SPRING-LOCK, LOKRING)**
UBICACIÓN: Red de tuberías del circuito frigorífico.  
APLICACIÓN: Conexión y estanqueidad entre todos los componentes del sistema.

**1. MISIÓN**  
Conducir el fluido refrigerante y el aceite entre los componentes del circuito resistiendo presiones elevadas y vibraciones del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Tuberías flexibles formadas por multicapas de caucho (elastómero), doble malla de refuerzo textil y barrera interior de nylón para evitar la permeabilidad del gas R134a. Se unen con racores metálicos prensados provistos de juntas tóricas (O'Ring) de elastómero sintético.

**3. CARACTERÍSTICAS**  
- *Mangueras estándar:* Módulo 6 (3/8", ext. 5/16"), Módulo 8 (1/2", ext. 13/32"), Módulo 10 (5/8", ext. 1/2"), Módulo 12 (3/4", ext. 5/8").  
- *Racores:* Cónicos, O'Ring, de brida y Spring-Lock (muelle con manguito muelle, típico de Ford).  
- *Unión Lokring:* Sistema de engatillado / ensamblado mecánico de tubos en frío sin soldadura mediante alicates oleohidráulicos.

**4. VALORES DE TRABAJO**  

| Módulo de manguera | Diámetro interior del tubo |
|---|---|
| **Módulo 6** | **5/16" (8 mm)** |
| **Módulo 8** | **13/32" (10,3 mm)** |
| **Módulo 10** | **1/2" (12,7 mm)** |
| **Módulo 12** | **5/8" (15,9 mm)** |

**5. ANOMALÍAS FRECUENTES**  
Fugas por deformación o envejecimiento de juntas O'Ring; grietas en el caucho por rozamiento con el chasis.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida paulatina o rápida de la carga de gas refrigerante.

**7. CÓMO COMPROBARLO**  
Verificación de estanqueidad por vacío o localización de fuga con lámpara UV y gafas amarillas.

---

### **NOTA DE ELEMENTO — TOMAS DE SERVICIO DE ALTA Y BAJA PRESIÓN**
UBICACIÓN: Intercaladas en las tuberías de la línea de alta y baja presión.  
APLICACIÓN: Conexión de equipos de diagnosis, vacío, recuperación y carga.

**1. MISIÓN**  
Proporcionar puntos de acceso herméticos al interior del circuito para medir presiones e inyectar o recuperar gas.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- *Sistema R12 (Rotalock):* Válvula de rosca con espiga manual de 3 posiciones.  
- *Sistema R134a:* Tomas de enchufe rápido con obús interior tipo Schrader. La alta y la baja presión tienen diámetros diferentes para evitar conectar las mangueras de forma errónea.

**3. CARACTERÍSTICAS**  
Tomas de acoplamiento rápido metálicas con roscas de protección exterior.

**4. VALORES DE TRABAJO**  

| Tipo de toma / Posición | Estado de servicio |
|---|---|
| **R134a Toma de Baja** | Diámetro **menor** de enchufe rápido |
| **R134a Toma de Alta** | Diámetro **mayor** de enchufe rápido |
| **R12 Posición de Trabajo** | Espiga desenroscada hacia afuera (toma desacoplada) |
| **R12 Posición de Prueba** | Espiga a media carrera (comunica circuito y toma) |
| **R12 Posición de Cierre** | Espiga roscada a fondo (aísla compresor - **¡NUNCA arrancar!**) |

**5. ANOMALÍAS FRECUENTES**  
Obús Schrader flojo o con junta tórica pegada; deformación de la rosca.

**6. COMPORTAMIENTO EN AVERÍA**  
Fugas de gas por la toma o imposibilidad de pinchar la válvula con la manguera.

**7. CÓMO COMPROBARLO**  
Comprobar el retroceso del obús interno al presionar y verificar estanqueidad con agua jabonosa.

---

### **NOTA DE ELEMENTO — CONDENSADOR Y ELECTROVENTILADORES**
UBICACIÓN: Frontal del vehículo, situado por delante del radiador de refrigeración de motor.  
APLICACIÓN: Intercambiador térmico de alta presión del circuito frigorífico.

**1. MISIÓN**  
Transformar el gas refrigerante sobrecalentado a alta presión en líquido subenfriado cediendo su calor a la corriente de aire exterior.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El gas entra caliente por la parte superior. Al fluir por sus canalizaciones, la corriente de aire generada por la marcha o forzada por el electroventilador absorbe la energía térmica, licuando el refrigerante.

**3. CARACTERÍSTICAS**  
- *Tipos:* Tubular (antiguo), Serpentín / Multipaso, y Flujo Paralelo (máxima eficiencia).  
- *Electroventiladores:* Impulsados por motor eléctrico o acoplamiento viscoso Visco. Montaje frontal ("empujando" aire) o trasero ("aspirando" aire).

**4. VALORES DE TRABAJO**  

| Parámetro del condensador | Valor numérico |
|---|---|
| **Temperatura de entrada de gas** | **50 ºC a 70 ºC** |
| **Presión de trabajo en alta** | **10 a 20 bar** (según tipo de compresor y temp. ambiente) |

**5. ANOMALÍAS FRECUENTES**  
Taponamiento de aletas por insectos/barro; electroventilador parado o con polaridad invertida (gira marcha atrás).

**6. COMPORTAMIENTO EN AVERÍA**  
Subida crítica de la alta presión (HP > 22-25 bar) provocando el corte por presostato de máxima.

**7. CÓMO COMPROBARLO**  
Regar el condensador con agua fría durante la prueba con manómetros; la aguja de alta debe bajar de inmediato.

---

### **NOTA DE ELEMENTO — FILTRO DESHIDRATADOR Y ACUMULADOR DE BAJA (VASO DE EXPANSIÓN)**
UBICACIÓN: Filtro en la línea de alta presión (entre condensador y válvula); Acumulador en la línea de baja presión (entre evaporador y compresor en sistemas OT).  
APLICACIÓN: Depuración, secado y almacenamiento de refrigerante.

**1. MISIÓN**  
Retener impurezas mecánicas, absorber la humedad del circuito y almacenar reserva de refrigerante líquido. El acumulador de baja retiene además el refrigerante líquido para impedir que entre al compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- *Filtro de Alta:* El fluido atraviesa tamices microfiltrantes y bolsas deshumidificadoras. Puede incorporar mirilla de cristal.  
- *Acumulador de Baja:* El vapor y líquido entran al depósito. El vapor se aspira por el tubo en U superior; el líquido y aceite decantan al fondo. El aceite retorna al compresor a través de un orificio calibrado de 1 mm con filtro.

**3. CARACTERÍSTICAS**  
Recipiente cilíndrico metálico hermético con material desecante interno.

**4. VALORES DE TRABAJO**  

| Componente | Especificación de trabajo |
|---|---|
| **Orificio de retorno de aceite (Acumulador)** | Diámetro calibrado de **1 mm** |
| **Sustitución recomendada** | Obligatoria cada vez que se abra el circuito frigorífico |

**5. ANOMALÍAS FRECUENTES**  
Saturación por humedad (el filtro se escarcha o congela por fuera); obstrucción por partículas de viruta.

**6. COMPORTAMIENTO EN AVERÍA**  
Caída de presión y salto térmico acusado (entrada caliente / salida fría) a través del filtro.

**7. CÓMO COMPROBARLO**  
Comprobar al tacto las tuberías de entrada y salida del filtro de alta: ambas deben estar calientes.

---

### **NOTA DE ELEMENTO — VÁLVULAS DE EXPANSIÓN TERMOSTÁTICAS (L Y BLOQUE / H)**
UBICACIÓN: Montada a la entrada del evaporador, delimitando el lado de alta y baja presión.  
APLICACIÓN: Regulación y dosificación del caudal de refrigerante inyectado.

**1. MISIÓN**  
Provocar una caída brusca de presión e inyectar el refrigerante pulverizado al evaporador, modulando el paso según la temperatura a la salida del evaporador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- *Válvula en "L" (Estándar):* Un bulbo sensor térmico exterior reacciona a la temperatura del tubo de salida. Al subir la temperatura, el gas interno se expande, empuja el diafragma y abre la válvula de bola contra el muelle. Puede tener ecualizador interno o externo.  
- *Válvula de Bloque / en "H" (Monobloc):* Integra las dos líneas en un solo cuerpo. Dispone de taladros de compensación interna de presión sin tubos capilares exteriores.

**3. CARACTERÍSTICAS**  
Cuerpo de latón o aluminio, muelle de regulación, válvula de bola, diafragma y sensor termostático.

**4. VALORES DE TRABAJO**  

| Tramo de la válvula | Presión y Temperatura | Estado del refrigerante |
|---|---|---|
| **Entrada (Alta Presión)** | **14 bar (+50 ºC)** | Líquido subenfriado |
| **Salida (Baja Presión)** | **1,5 bar (-6 ºC)** | 70 % líquido / 30 % vapor (en peso) |

**5. ANOMALÍAS FRECUENTES**  
Atascamiento de la bola por suciedad; congelación del agua en el orificio; rotura del bulbo sensor.

**6. COMPORTAMIENTO EN AVERÍA**  
- *Bloqueada abierta:* Inundación del evaporador y riesgo de retorno de líquido al compresor.  
- *Bloqueada cerrada:* Presión de baja cae a la zona de vacío (0 bar) sin enfriar.

**7. CÓMO COMPROBARLO**  
Rociar espray enfriador sobre el bulbo térmico; la aguja de baja presión debe caer de inmediato hacia 0 bar.

---

### **NOTA DE ELEMENTO — TUBO DE EXPANSIÓN U ORIFICIO CALIBRADO (OT)**
UBICACIÓN: Intercalado dentro de la tubería de entrada al evaporador (sistemas con acumulador en baja).  
APLICACIÓN: Expansión de paso fijo en vehículos Ford, GM, Audi, Volvo, Chrysler.

**1. MISIÓN**  
Estrangular el paso del refrigerante líquido para reducir la presión e inyectarlo atomizado al evaporador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Dispositivo pasivo de paso fijo sin regulación móvil. El fluido líquido se fuerza a pasar por un taladro calibrado metálico. Cuenta con un filtro de malla gruesa a la entrada y un filtro de malla fina a la salida para favorecer la pulverización.

**3. CARACTERÍSTICAS**  
Cuerpo plástico codificado por colores, juntas tóricas exteriores y mallas filtrantes.

**4. VALORES DE TRABAJO**  

| Código de color del Tubo OT | Aplicación principal según fabricante |
|---|---|
| **Rojo / Naranja / Marrón / Verde** | Ford |
| **Azul** | Audi / Ford |
| **Negro / Blanco** | General Motors / Audi |
| **Amarillo** | Volvo |
| **Violeta** | Chrysler |

**5. ANOMALÍAS FRECUENTES**  
Obstrucción total de sus mallas filtrantes por barro, sedimentos o viruta del compresor.

**6. COMPORTAMIENTO EN AVERÍA**  
La presión de baja cae a vacío (0 bar) y el sistema no genera frío.

**7. CÓMO COMPROBARLO**  
Extraer el tubo OT con la herramienta de extracción e inspeccionar visualmente la suciedad en las mallas.

---

### **NOTA DE ELEMENTO — EVAPORADOR Y FILTRO DE HABITÁCULO**
UBICACIÓN: Mueble climatizador en el salpicadero del habitáculo.  
APLICACIÓN: Enfriamiento, deshumidificación del aire y filtrado ambiental.

**1. MISIÓN**  
Absorber el calor del aire que pasa por sus aletas para enfriarlo y deshumidificarlo antes de entrar al habitáculo, reteniendo el polvo y polen mediante el filtro de habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Intercambiador de calor. El refrigerante inyectado a baja presión ebulles a temperaturas bajo cero. El aire caliente de la cabina cede su calor al fluido, provocando la condensación de la humedad ambiental en sus aletas, la cual se drena por el tubo de condensados.

**3. CARACTERÍSTICAS**  
- *Evaporadores:* De tubos y aletas, de placas o monobloque integrado.  
- *Filtro de habitáculo:* Filtro de papel sintético o carbón activo.  
- *Higiene:* Proliferación de mohos y bacterias por humedad estancada sobre sus aletas.

**4. VALORES DE TRABAJO**  

| Parámetro del evaporador | Valor de trabajo |
|---|---|
| **Presión interna de ebullición** | **1,5 a 2,1 bar** |
| **Temperatura del refrigerante interno** | **-6 ºC a 0 ºC** |

**5. ANOMALÍAS FRECUENTES**  
Congelación total de las aletas por fallo del termostato; mal olor por bacterias; empañado por drenaje obstruido.

**6. COMPORTAMIENTO EN AVERÍA**  
Reducción drástica del caudal de aire en las rejillas y olor a humedad en el habitáculo.

**7. CÓMO COMPROBARLO**  
Desinfección con nebulizador ultrasónico (ej. EVIDIS) y sustitución periódica del filtro de habitáculo.

---

### **NOTA DE ELEMENTO — PRESOSTATOS DE SEGURIDAD Y TRANSMISOR DE PRESIÓN ELECTRÓNICO**
UBICACIÓN: Montados en las tuberías de la línea de alta presión o sobre el filtro deshidratador.  
APLICACIÓN: Protección de seguridad y gestión de los electroventiladores.

**1. MISIÓN**  
Desconectar el compresor por presión insuficiente o excesiva, y comandar los escalones de velocidad del electroventilador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- *Presostato de Mínima:* Contacto mecánico que abre si p < 2 bar para evitar el giro del compresor sin gas/aceite.  
- *Presostato de Máxima:* Abre contactos si p > 27 bar (re-cierra a 22 bar) por sobrepresión.  
- *Presostato Trinario (3 funciones):* Combina Mínima (corta < 2 bar), 2ª velocidad del ventilador (conecta > 17 bar / desconecta < 14 bar) y Máxima (corta > 27 bar / conecta < 22 bar).  
- *Transmisor de Presión (Electrónico):* Cristal de silicio piezoeléctrico. Un microprocesador emite una señal cuadrada PWM a 50 Hz (período de 20 ms). El ancho del pulso varía de 2,6 ms (a 1,4 bar) a 18 ms (a 37 bar).

**3. CARACTERÍSTICAS**  
Presostatos electromecánicos de membrana o transmisor electrónico piezoeléctrico de 3 pines.

**4. VALORES DE TRABAJO**  

| Presión en el circuito | Ancho de pulso PWM | Porcentaje del período (20 ms a 50 Hz) |
|---|---|---|
| **Nivel de Baja Presión: 1,4 bar** | **2,6 ms** | **13 % de duración del pulso** |
| **Nivel de Alta Presión: 37 bar** | **18 ms** | **90 % de duración del pulso** |

**5. ANOMALÍAS FRECUENTES**  
Fogueo de contactos en presostatos mecánicos; interrupción del cable de señal del transmisor PWM.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no acopla o no salta la velocidad rápida del electroventilador.

**7. CÓMO COMPROBARLO**  
Verificar continuidad en presostatos mecánicos u observar la señal cuadrada a 50 Hz con osciloscopio.

---

### **NOTA DE ELEMENTO — TERMOSTATO DEL EVAPORADOR (MECÁNICO Y ELECTRÓNICO)**
UBICACIÓN: Mueble climatizador, con el elemento sensor junto a las aletas del evaporador.  
APLICACIÓN: Protección contra la congelación del evaporador.

**1. MISIÓN**  
Desconectar el compresor si la temperatura del evaporador baja de 0 ºC para evitar que la humedad condensada se hiele y tupa el paso de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- *Mecánico:* Un tubo capilar con fluido mueve un fuelle interno que actúa sobre una palanca y muelle regulable, abriendo los contactos eléctricos de alimentación del compresor.  
- *Electrónico:* Una sonda NTC mide la temperatura y envía la señal a un módulo electrónico con potenciómetro de ajuste que gobierna un relé.

**3. CARACTERÍSTICAS**  
Termostato de 2 o 3 contactos con tubo capilar (mecánico) o sonda NTC con módulo electrónico.

**4. VALORES DE TRABAJO**  

| Estado térmico del evaporador | Respuesta del termostato |
|---|---|
| **Temperatura <= 0 ºC** | Abre contactos: desconecta el compresor |
| **Temperatura >= +3 ºC** | Cierra contactos: reconecta el compresor |

**5. ANOMALÍAS FRECUENTES**  
Pérdida de carga de gas del tubo capilar o descalibración del muelle mecánico.

**6. COMPORTAMIENTO EN AVERÍA**  
Congelación total del evaporador, bloqueando la salida de aire por las rejillas de ventilación.

**7. CÓMO COMPROBARLO**  
Comprobar apertura de contactos en frío o medir la resistencia de la sonda NTC a diferentes temperaturas.

---

### **NOTA DE PROCESO — LÓGICA DE CONTROL EN CLIMATIZACIÓN SEMIAUTOMÁTICA Y AUTOMÁTICA / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar el procesamiento de variables de entrada y salida de la UCE de climatización para la regulación del confort del habitáculo.

**2. FUNDAMENTO**  
La centralita procesa señales analógicas y digitales de sensores térmicos, de presión y de radiación para regular automáticamente los motores de las trampillas, el caudal de la turbina y la activación del compresor.

**3. CONDICIONES PREVIAS**  
Encendido conectado y mando de climatización activado.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
- **Variables de entrada:** Temperatura exterior, temperatura del habitáculo, temperatura del evaporador, temperatura del aire mezclado, selección de temperatura del usuario, selector de soplado (auto/manual), posición de recirculación, presión del circuito A/C (presostato/transmisor), fotosensor de radiación solar G107, régimen del motor y velocidad del vehículo.  
- **Variables de salida:** Relé del compresor A/C, motor de la trampilla de mezcla, motores de trampillas de distribución, motor de trampilla de recirculación, mando del ventilador de la cabina (vía reóstato o módulo de potencia), display e interfaz de diagnosis.

**6. VALORES DE REFERENCIA**  
Tensión de alimentación general: 12 V CC.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Diagnosticar falta de gas cuando el problema es un fallo en el servomotor de la trampilla de mezcla o en el reóstato de velocidades.

**8. VERIFICACIÓN FINAL**  
Respuesta lógica de los actuadores al modificar los mandos de consigna en el panel de control.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — LAVADO DEL CIRCUITO FRIGORÍFICO CON ESTACIÓN Y KIT DE ADAPTADORES / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer el procedimiento de limpieza interna de tuberías con refrigerante impulsado mediante la estación de reciclaje (ej. Hella ACTT 200) tras la rotura de un compresor o presencia de acidez.

**2. FUNDAMENTO**  
Elimina virutas metálicas, carbonización y lubricante descompuesto. Lavar el circuito evita que las limaduras retenidas destruyan el compresor nuevo en pocos minutos.

**3. CONDICIONES PREVIAS**  
Circuito frigorífico completamente recuperado y libre de presión.

**4. EQUIPO Y MATERIAL**  
- Estación de reciclaje con función de lavado (Hella ACTT 200 / SECUsmart / SECUmobile).  
- Kit de adaptadores de puenteo.  
- Recipiente / dispositivo de lavado y tamiz filtro de aspiración.

**5. DESARROLLO**  
📷 IMAGEN: Conexión de mangueras de la estación Hella ACTT 200 y kit de adaptadores para lavado — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 415-435  
1. Desmontar obligatoriamente el compresor, la válvula de expansión (o tubo OT) y el filtro deshidratador.  
2. Instalar los adaptadores de puenteo del kit de lavado en lugar de los componentes desmontados.  
3. Conectar la manguera azul desde la salida del dispositivo de lavado hasta la estación de reciclaje.  
4. Conectar la manguera roja (con la válvula antirretorno) a la entrada del circuito de A/C.  
5. Conectar la manguera amarilla a la salida del circuito de A/C y a la entrada del dispositivo de lavado.  
6. Ejecutar el ciclo de lavado impulsado desde el panel de la máquina.  
7. Completado el lavado, **insertar obligatoriamente un tamiz filtro en el tubo de aspiración (Baja)** del compresor nuevo antes del montaje final.  
8. Montar compresor nuevo, válvula de expansión nueva y filtro deshidratador nuevo.

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Instalar el tamiz filtro de aspiración sin lavar previamente el circuito: detendrá las limaduras grandes pero dejará pasar el polvo fino, el cual actuará como esmeril destruyendo el compresor.

**8. VERIFICACIÓN FINAL**  
Retorno de fluido transparente y limpio en la mirilla del dispositivo de lavado.

**9. SEGURIDAD Y NORMATIVA**  
Cumplir el reglamento de manipulación de refrigerantes y residuos en el taller.

---

### **NOTA DE PROCESO — DIAGNÓSTICO DE AVERÍAS MEDIANTE PUENTE DE MANÓMETROS / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Diagnosticar averías hidráulicas, mecánicas y de carga evaluando las lecturas de los manómetros de baja (BP) y alta (HP) a 1.500-1.800 rpm con 30 ºC de temperatura ambiente.

**2. FUNDAMENTO**  
El comportamiento de las presiones de alta y baja refleja el estado del compresor, grado de llenado de refrigerante, estado de válvulas y eficacia de los electroventiladores.

**3. CONDICIONES PREVIAS**  
Motor a 1.500 - 1.800 rpm, A/C al máximo de potencia y temperatura ambiente de 30 ºC.

**4. EQUIPO Y MATERIAL**  
Puente de manómetros (LO/HI) acoplado a las tomas de servicio.

**5. DESARROLLO Y TABLA DE DIAGNÓSTICO DE LECTURAS**  
📷 IMAGEN: Carátula del puente de manómetros y lecturas de diagnóstico de averías — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 444-514  
- **Compresor de cilindrada variable correcto:** BP = **1,8 a 2,1 bar** / HP = **6 a 13 bar**.  
- **Compresor de cilindrada fija correcto:** BP = **0,8 a 2,2 bar** / HP = **10 a 20 bar**. (0,8 bar solo con humedad muy baja).  
- **Falta de refrigerante o válvula de alta semi-cerrada:** BP = **0,5 a 0,8 bar** / HP = **6 a 8 bar**. *Prueba:* Añadir 50-100 g de gas; si los manómetros no reaccionan, la válvula de alta está semi-cerrada.  
- **Bulbo de válvula de expansión suelto:** BP = **3 a 3,8 bar** / HP = **12 a 14 bar**. Reajustar sujeción del bulbo.  
- **Válvula de expansión demasiado abierta:** BP = **3,5 a 4,5 bar** / HP = **10 a 14 bar**. *Prueba:* Rociar espray enfriador sobre el bulbo; BP debe caer hacia 0 bar. Si al parar el compresor BP sube rápido, las válvulas del compresor se dañaron por líquido.  
- **Válvula de expansión cerrada u obturada / bulbo roto:** BP en **zona de vacío (0 bar o menos)** / HP = **10 a 13 bar**.  
- **Válvulas de baja del compresor tapadas / Gota de hielo en expansión:** BP = **0 bar** / HP = **4 a 6 bar**. *Diferenciación:* Si es gota de hielo, al parar y arrancar el fallo desaparece temporalmente.  
- **Válvula de baja comunicada (lámina rota):** BP = **2,2 a 2,5 bar** / HP = **10 a 12 bar**. *Prueba:* Enfriar bulbo a 0 bar y parar el compresor; si BP sube con rapidez hacia arriba, se comunican las presiones.  
- **Evaporador congelado (o válvula de cilindrada variable en máximo):** BP = **casi 0 bar** / HP = **7 a 10 bar**. Falta caudal de aire en difusores.  
- **Manómetros sin conectar / circuito totalmente vacío:** BP = **0 bar** / HP = **0 bar**.  
- **Carga inicial parcial en reposo (350 g en circuito de 800 g):** BP = **3 a 4 bar** / HP = **3 a 4 bar** (igualadas con la bombona).  
- **Exceso de carga de refrigerante (1.100 g en circuito de 800 g):** BP = **2,5 a 2,7 bar** / HP = **16 a 18 bar** (electroventilador continuo).  
- **Electroventilador gira marcha atrás (polaridad invertida):** BP = **2,3 a 2,5 bar** / HP = **22 bar**.  
- **Electroventilador parado o condensador sucio:** BP = **2,3 a 2,8 bar** / HP > **25 bar**. *Prueba:* Regar condensador con agua; HP baja de inmediato.  
- **Filtro deshidratador obstruido/saturado (toma previa al filtro):** BP = **4,5 a 4,7 bar** / HP = **21 a 27 bar**. Si la toma es posterior: BP = **0,3 a 0,5 bar** / HP = **19 a 20 bar** (filtro helado).  
- **Entrada de aire caliente (trampilla o grifo de calefacción no cierra):** Presiones normales (BP = 1,8 bar / HP = 12-15 bar) pero no sale aire frío por difusores.  
- **Tubos de aspiración y descarga invertidos en compresor:** BP = **4,5 a 4,8 bar** / HP = **7 a 8 bar**.  
- **Compresor no conecta o embrague patina:** BP = **4,5 a 6 bar** / HP = **igual a la baja (4,5 a 6 bar)**.

**6. VALORES DE REFERENCIA**  

| Estado diagnosticado | Presión de Baja (BP) | Presión de Alta (HP) |
|---|---|---|
| **Funcionamiento normal (Variable)** | **1,8 a 2,1 bar** | **6 a 13 bar** |
| **Funcionamiento normal (Fijo)** | **0,8 a 2,2 bar** | **10 a 20 bar** |
| **Falta de refrigerante** | **0,5 a 0,8 bar** | **6 a 8 bar** |
| **Válvula de expansión abierta** | **3,5 a 4,5 bar** | **10 a 14 bar** |
| **Válvula de expansión cerrada / vacío** | **0 bar (vacío)** | **10 a 13 bar** |
| **Exceso de carga de refrigerante** | **2,5 a 2,7 bar** | **16 a 18 bar** |
| **Electroventilador parado / Condensador sucio** | **2,3 a 2,8 bar** | **> 25 bar** |
| **Compresor no conecta / Embrague patina** | **4,5 a 6 bar** | **4,5 a 6 bar (Igualadas)** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar cargar refrigerante líquido por la toma de baja presión acelerando el motor: destruirá de inmediato las válvulas del compresor.

**8. VERIFICACIÓN FINAL**  
Obtención de las presiones de trabajo nominales tras corregir la causa raíz de la avería.

**9. SEGURIDAD Y NORMATIVA**  
Utilizar siempre gafas y guantes de protección al manipular acoplamientos y mangueras con refrigerante.

---

COBERTURA: documento «ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx», diapositivas 1 a 515 de 515. [completo]