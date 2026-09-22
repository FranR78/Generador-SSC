### NOTA DE PROCESO — ESQUEMA ELÉCTRICO Y FUNCIONALIDADES DEL AIRE ACONDICIONADO MANUAL CON TRINARIA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explicar la arquitectura eléctrica, la lógica de alimentación y las funciones de control de un sistema de aire acondicionado manual provisto de conmutador trinario de alta presión. Aplica a la instalación eléctrica de climatización manual en turismos.

**2. FUNDAMENTO**
El funcionamiento del sistema de aire acondicionado requiere la interacción entre el circuito frigorífico y una red eléctrica de control. El sistema condiciona la marcha del compresor a la activación previa de la turbina de aire fresco, la presión del refrigerante y la temperatura del motor de combustión.

**3. CONDICIONES PREVIAS**
Contacto encendido (+15) y conmutador de aire acondicionado activado por el conductor.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Lógica de conexión e interbloqueos:**
  - El interruptor de AC se encuentra asociado al selector de velocidad de la turbina. Para autorizar la conexión eléctrica del A/C, es imprescindible que la turbina gire como mínimo a velocidad lenta (1.ª velocidad).
  - Al activar el A/C, la UCE de ventiladores conecta el electroventilador del radiador en velocidad lenta para refrigerar el condensador.
  - El presostato trinario mide la presión en el tramo de alta presión:
    - *Bornes 1-2 (P1):* Vigilan la presión de trabajo del refrigerante. Permiten el paso de corriente al embrague del compresor entre 2 bar y 32 bar. Si la presión cae de 2 bar (falta de gas) o supera 32 bar (sobrepresión), los contactos abren y desconectan el compresor.
    - *Bornes 3-4 (P2):* Conectan la II velocidad (rápida) del electroventilador a través del relé dedicado cuando la presión de alta alcanza 16 bar.
  - La sonda NTC del evaporador evalúa la temperatura de evaporación; si detecta riesgo de congelación del condensado, desactiva el embrague del compresor (no se utiliza en sistemas con compresor de cilindrada variable).
  - La sonda NTC de temperatura del motor / termostato de refrigerante interrumpe la marcha del A/C si el motor de combustión sufre sobrecalentamiento.
  - El termostato del radiador conmuta las velocidades del electroventilador por temperatura del refrigerante: conecta la velocidad lenta a 95 ºC y la velocidad rápida a 103 ºC.
  - La UCE del motor condiciona el acoplamiento del compresor a que el motor funcione regularmente al ralentí y lo desactiva temporalmente en aceleraciones bruscas.

📷 IMAGEN: Esquema eléctrico de aire acondicionado manual con conmutador trinario y relés de ventiladores — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 94

**6. VALORES DE REFERENCIA**
| Componente / Parámetro | Condición de Validez / Disparo | Reacción o Estado del Sistema |
| :--- | :--- | :--- |
| **Presostato Trinario (Bornes 1-2 / P1)** | Presión entre 2 bar y 32 bar | Contactos cerrados (embrague de compresor autorizable) |
| **Presostato Trinario (Bornes 1-2 / P1)** | Presión < 2 bar o > 32 bar | Contactos abiertos (desconexión del compresor) |
| **Presostato Trinario (Bornes 3-4 / P2)** | Presión ≥ 16 bar en tramo de alta | Contactos cerrados (activa II velocidad del electroventilador) |
| **Termostato del Radiador (t1)** | Temperatura del refrigerante de motor = 95 ºC | Conecta I velocidad (lenta) del electroventilador |
| **Termostato del Radiador (t2)** | Temperatura del refrigerante de motor = 103 ºC | Conecta II velocidad (rápida) del electroventilador |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Intentar activar el aire acondicionado con el mando del ventilador en posición 0; el interbloqueo eléctrico impide el acoplamiento del compresor si la turbina no gira al menos a velocidad lenta.
* Confundir la función de los bornes de la trinaria: los bornes 1-2 gobiernan la línea del compresor, mientras que los bornes 3-4 gobiernan la bobina del relé de la II velocidad del electroventilador.

**8. VERIFICACIÓN FINAL**
Comprobar que al conectar la tecla A/C con la turbina en velocidad 1 se enciende el electroventilador en velocidad lenta y acopla el embrague del compresor.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — ESQUEMA ELÉCTRICO Y FUNCIONAMIENTO DEL AIRE ACONDICIONADO SEMIAUTOMÁTICO / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Describir la topología eléctrica, las entradas/salidas y las funciones de control en un sistema de aire acondicionado semiautomático equipado con sensor MAP de alta presión y compresor de cilindrada variable regulado por electroválvula. Aplica a instalaciones eléctricas de climatización semiautomática.

**2. FUNDAMENTO**
A diferencia del sistema manual con embrague electromagnético, el compresor regulado por electroválvula ajusta de forma continua la carrera de los pistones y la cilindrada en función de una señal eléctrica. El control se efectúa mediante un sensor electrónico de presión MAP y una arquitectura de sensores gestionados por la UCE del climatizador.

**3. CONDICIONES PREVIAS**
Contacto encendido (+15) y tensión de batería adecuada.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Arquitectura de señales y control:**
  - *Señales de Entrada hacia la UCE Climatizador:* Sensor MAP en alta (3), sensor de temperatura exterior (4), transmisor de velocidad (5), transmisor de temperatura interior (13), potenciómetro de la trampilla de temperatura (15), potenciómetro de la trampilla de recirculación (17), sensor de temperatura de salida del evaporador (18), sensor de temperatura de la zona de pies (19) y sensor de temperatura del difusor central (20).
  - *Interconexiones CAN-Bus y Red:* Conexión con la UCE de la red de a bordo (9), Cuadro de instrumentos (10), UCE del motor (11), alternador (7) y conector de diagnóstico (6).
  - *Señales de Salida desde la UCE Climatizador:* Electroválvula de regulación del compresor (21), regulador de velocidad de la turbina (2), motor de la trampilla de temperatura (14), motor de la trampilla de recirculación (16) y UCE de los ventiladores (23).
* **Lógica de gestión:**
  - La UCE del climatizador (12) modifica la corriente aplicada a la electroválvula del compresor (21) para variar la cilindrada desde el mínimo (sin demanda) hasta el 100% de rendimiento.
  - La UCE de ventiladores (23) recibe órdenes para gestionar la activación de los electroventiladores (24 y 25).
  - El sensor MAP (3) transmite una señal electrónica continua proporcional a los bares del tramo de alta para la gestión de seguridad y control de ventilación.

📷 IMAGEN: Esquema eléctrico de aire acondicionado semiautomático con sensor MAP y electroválvula de regulación del compresor — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 95

**6. VALORES DE REFERENCIA**
| Elemento / Señal | Tipo de Señal en Esquema | Conexión / Función |
| :--- | :--- | :--- |
| **Sensor MAP en alta (3)** | Señal de entrada analógica/PWM | Mide presión de alta hacia UCE Climatizador |
| **Electroválvula de regulación N280 (21)** | Señal de salida modulada | Ajusta cilindrada del compresor sin embrague |
| **Líneas CAN-Bus** | Señal bidireccional | Intercambio de datos entre UCE Motor, Cuadro, Red de a bordo y Climatizador |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Buscar el embrague electromagnético en un compresor con regulación por electroválvula; este tipo de compresor gira continuamente con la polea y varía su cilindrada internamente mediante la electroválvula (21).

**8. VERIFICACIÓN FINAL**
Verificar la presencia de la señal de control en la electroválvula del compresor y la variación de presiones al modificar la selección de temperatura en la consola.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — ESQUEMA ELÉCTRICO, NORMAS DIN Y DIAGNÓSTICO DE COMPONENTES EN CLIMATIZADOR AUTOMÁTICO / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Establecer la identificación normalizada de líneas de corriente DIN y la diagnosis de síntomas, causas y comportamiento del climatizador automático ante la avería de sus sensores, servomotores y actuadores. Aplica al diagnóstico eléctrico de climatizadores automáticos en taller.

**2. FUNDAMENTO**
El climatizador automático monitoriza continuamente sus componentes eléctricos. Las normas DIN estandarizan la codificación de bornes de corriente, mientras que la UCE memoriza códigos de avería y adopta estrategias de emergencia cuando un sensor o actuador falla.

**3. CONDICIONES PREVIAS**
Contacto encendido (+15) y equipo de diagnosis conectado al puerto de diagnosis (6).

**4. EQUIPO Y MATERIAL**
Polímetro, máquina de diagnosis compatible y esquemas eléctricos.

**5. DESARROLLO**
* **Nomenclatura normalizada de líneas de corriente (Normas DIN):**
  - **30:** Positivo directo de batería.
  - **15:** Positivo después de contacto.
  - **X:** Positivo después de contacto con desconexión en fase de arranque del motor.
  - **31:** Masa (retorno a negativo/chasis).
* **Diagnóstico de síntomas, causas y comportamiento en avería por componentes:**
  - *Turbina de aire fresco (1) y Regulador (2):* Si fallan o la turbina no gira, el climatizador deja de funcionar completamente.
  - *Sensor MAP en alta (3):* Mide la presión de alta. En caso de avería, el climatizador no funciona por seguridad.
  - *Sensor de temperatura exterior (4):* En caso de avería la pantalla muestra `-.- ºC` y la UCE trabaja con el valor del sensor de temperatura de entrada de aire (27).
  - *Transmisor de velocidad (5) / Cuadro (11):* Sin señal no se muestra la velocidad en el cuadro ni actúa la trampilla de velocidad compensada.
  - *Interruptor de marcha atrás (7):* Si no se recibe la señal, se desactiva la función de recirculación automática al dar marcha atrás.
  - *Alternador (8):* Si no envía la señal de carga, se desactiva la función de gestión de sobrecarga.
  - *UCE de la red de a bordo (10):* Intercambio CAN-Bus. Si falla, el climatizador puede quedar completamente inoperativo.
  - *Fotosensor para radiación solar (13):* En caso de avería, se desactiva la corrección solar de temperatura.
  - *Transmisor de temperatura interior (15):* En caso de fallo, la UCE adopta un valor sustitutivo fijo de temperatura.
  - *Potenciómetros de trampillas (17 - Temperatura, 19 - Deshielo, 21 - Central, 23 - Recirculación):* Si falla un potenciómetro, no es posible regular o controlar la trampilla correspondiente (temperatura, desempañado del parabrisas, distribución a pies/centro o recirculación).
  - *Sensor de salida del evaporador (24):* Si se pierde la señal, la UCE pasa a trabajar con la información calculada del sensor MAP (3).
  - *Sensores de temperatura de zona pies (25) y difusor central (26):* Sin su señal, se inhabilita la regulación automática de temperatura.
  - *Sensor de entrada de aire ambiente (27):* Si falla, la UCE utiliza el valor del sensor de temperatura exterior (4).
  - *Electroválvula del compresor (28):* En caso de avería eléctrica, el compresor se ajusta automáticamente a su mínimo rendimiento.
  - *Termostato del radiador (29):* En caso de avería o modo de emergencia, conecta los electroventiladores a máxima velocidad.
  - *UCE de los ventiladores (30):* Si falla, el climatizador no funciona.

📷 IMAGEN: Esquema didáctico de climatizador automático y distribución de líneas de corriente DIN — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 96

**6. VALORES DE REFERENCIA**
| Denominación de Borne DIN | Significado de la Línea de Corriente |
| :--- | :--- |
| **Borne 30** | Positivo directo de batería (12 V constantes) |
| **Borne 15** | Positivo después de contacto (12 V con llave en ON) |
| **Borne X** | Positivo tras contacto desconectado durante el arranque del motor |
| **Borne 31** | Masa / Conexión a negativo de chasis |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Interpretar la indicación `-.- ºC` en el display como un fallo de la pantalla; la causa real es la avería o desconexión del sensor de temperatura exterior (4).
* Cambiar el compresor cuando este no rinde porque la electroválvula (28) ha entrado en modo de mínimo rendimiento por fallo en la señal de control.

**8. VERIFICACIÓN FINAL**
Interrogar la memoria de averías con el equipo de diagnosis, confirmar la ausencia de códigos de fallo y verificar la lectura coherente de todos los bloques de valores de medición.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — TRANSMISOR DE ALTA PRESIÓN Y VÁLVULA REGULADORA DEL COMPRESOR
CÓDIGO: G65 (Transmisor de alta presión) / N280 (Válvula reguladora del compresor)
UBICACIÓN: G65 montado en el tramo de alta presión del vano motor; N280 montada en la parte posterior del compresor de A/C.
APLICACIÓN: Climatronic en SEAT León (a partir de 04/2005) y gama VAG.

**1. MISIÓN**
El transmisor G65 mide electrónicamente la presión del agente frigorífico para la gestión de seguridad y electroventiladores. La válvula N280 ajusta proporcionalmente la cilindrada y la potencia de bombeo del compresor sin embrague mecánico según las órdenes de la UCE Climatronic J255.

**2. PRINCIPIO DE FUNCIONAMIENTO**
G65 es un sensor piezoeléctrico alimentado desde el fusible SC4 (5A) / línea 15a que emite una señal de onda cuadrada PWM hacia la UCE de red de a bordo J519 / J255. N280 es una electroválvula reguladora modulada por corriente desde el conector T20c (pines 19 y 20) de la UCE Climatronic J255.

**3. CARACTERÍSTICAS**
* G65: Sensor de 3 vías (Pin 1: masa en punto 672/85; Pin 2: señal hacia J255/J519; Pin 3: +12 V desde fusible SC4 5A).
* N280: Electroválvula de 2 vías alimentada desde conector T20c/20 de J255 y masa en T20c/19 conectada a punto de masa 672.

**4. VALORES DE TRABAJO**
* Fusibles de protección del sistema:
  - SC4 (5A): Alimentación de transmisor G65 e instrumentos.
  - SC16 (10A): Alimentación de unidad Climatronic J255.
  - SC22 (40A): Alimentación de potencia.
  - SC46 (5A): Alimentación de señales de control.

**5. ANOMALÍAS FRECUENTES**
* G65: Sulfatación de los pines del conector de 3 vías por humedad en el vano motor o derivas en la señal PWM.
* N280: Cortocircuito o interrupción de la bobina electromagnética por sobrecalentamiento.

**6. COMPORTAMIENTO EN AVERÍA**
Si el transmisor G65 falla, la UCE desactiva el compresor y no autoriza su marcha por falta de señal de presión. Si la válvula N280 falla o se corta su cableado, el compresor se queda a mínimo rendimiento (cilindrada mínima) y el sistema no enfría.

**7. CÓMO COMPROBARLO**
* En G65: Medir tensión de alimentación (+12 V en pin 3), continuidad de masa en pin 1 y comprobar la señal PWM con osciloscopio en el pin 2.
* En N280: Medir la resistencia ohmica de la bobina con un polímetro (desconectado) y verificar la presencia de la señal de modulación desde el conector T20c de J255.

📷 IMAGEN: Esquema de conexiones eléctricas del transmisor G65, válvula N280 y fusibles SC en Climatronic — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 2 (León)

---

### NOTA DE ELEMENTO — FOTOSENSORES DE RADIACIÓN SOLAR Y SENSORES DE TEMPERATURA EN CANALES DE AIRE
CÓDIGO: G107 / G134 (Fotosensores) | G89 / G150 / G151 / G263 (Sensores térmicos)
UBICACIÓN: G107 y G134 en el centro del salpicadero; G89 en canal de aspiración de aire fresco; G150/G151 en difusores de aire izquierdo/derecho; G263 en la salida del evaporador.
APLICACIÓN: Climatronic bizona en SEAT León y gama VAG.

**1. MISIÓN**
Medir la intensidad de la radiación solar (G107/G134) y las temperaturas del aire en el canal de aspiración (G89), en las salidas de los difusores izquierdo/derecho (G150/G151) y a la salida del evaporador (G263) para la regulación precisa de la mezcla térmica bizona.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Los fotosensores G107 y G134 utilizan fotodiodos que varían su conducción según la luz solar recibida. Los sensores G89, G150, G151 y G263 son resistencias con Coeficiente de Temperatura Negativo (NTC) cuya resistencia ohmica disminuye al aumentar la temperatura. Todos comparten una línea común de masa de sensores (L7 / conector T16g/10 de J255).

**3. CARACTERÍSTICAS**
* Fotosensores G107 y G134: Conectados a los pines T20c/9 y T20c/3 de la UCE J255.
* Sensores NTC G89, G150, G151 y G263: Conexión de 2 vías conectados a la UCE Climatronic J255 (G89 a T20c/11; G150 a T20c/13; G151 a T20c/14; G263 a T20c/17) y masa común en empalme L7.

**4. VALORES DE TRABAJO**
* Tensión de referencia de sensores: Alimentación desde la UCE Climatronic J255 a través del conector T20c y T16g.

**5. ANOMALÍAS FRECUENTES**
Corte o cortocircuito en el mazo de cables del salpicadero, o deriva de las resistencias NTC por envejecimiento térmico.

**6. COMPORTAMIENTO EN AVERÍA**
Si falla G263 (evaporador), la UCE toma la presión del transmisor G65 para calcular la evaporación. Si fallan G150 o G151, se cancela la regulación automática independiente en el lado afectado. Si falla G89, se adopta la lectura del sensor de temperatura exterior.

**7. CÓMO COMPROBARLO**
Medir la resistencia de los sensores NTC con un polímetro desconectado y comparar con la curva de temperatura, o consultar las lecturas en tiempo real en los bloques de valores de medición con la máquina de diagnosis.

📷 IMAGEN: Esquema de interconexión del mazo de cables L7 con los fotosensores G107/G134 y sondas NTC G89, G150, G151 y G263 — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 3 (León)

---

### NOTA DE ELEMENTO — SERVOMOTORES Y POTENCIÓMETROS DE CONTROL DE TRAMPILLAS
CÓDIGO: V113/G143 (Recirculación), V158/G220 (Temp. Izquierda), V159/G221 (Temp. Derecha), V107/G135 (Deshielo), V70/G112 (Central), V71/G113 (Retención de aire)
UBICACIÓN: Montados sobre la caja climática del sistema de calefacción/climatización bajo el salpicadero.
APLICACIÓN: Climatronic bizona de SEAT León y vehículos de la plataforma VAG.

**1. MISIÓN**
Los servomotores (V113, V158, V159, V107, V70, V71) orientan mecánicamente las trampillas de mezcla, distribución y recirculación de aire. Los potenciómetros integrados (G143, G220, G221, G135, G112, G113) leen e informan continuamente a la UCE J255 sobre la posición real de cada trampilla.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Cada conjunto incorpora un pequeño motor eléctrico de corriente continua (accionado por la UCE Climatronic J255 mediante inversión de polaridad) y una pista potenciómetrica (G) alimentada a 5 V desde la línea de positivo de sensores (L8) y masa de sensores (L7). La tensión leída en el cursor del potenciómetro varía proporcionalmente al ángulo de la trampilla.

**3. CARACTERÍSTICAS**
Servomotores eléctricos compactos de 5 o 6 vías de conexión. Comparten la barra de positivo de potenciómetros (L8 / conector T16g/7) y la barra de masa de potenciómetros (L7 / conector T16g/10).

**4. VALORES DE TRABAJO**
* Tensión de alimentación de potenciómetros (L8): 5 V constantes suministrados por J255.
* Margen de señal potenciómetrica: Variación continua de tensión entre 0,5 V y 4,5 V entre los topes mecánicos.

**5. ANOMALÍAS FRECUENTES**
Desgaste o suciedad en la pista de carbón del potenciómetro interno, rotura de los dientes de los engranajes de plástico o agarrotamiento mecánico de las trampillas.

**6. COMPORTAMIENTO EN AVERÍA**
El climatizador pierde la capacidad de posicionar la trampilla afectada (ej. imposibilidad de ajustar la temperatura del lado izquierdo con V158/G220 o del lado derecho con V159/G221, fallo para desempañar con V107/G135 o bloqueo de la recirculación con V113/G143), registrando un código de avería en la UCE J255.

**7. CÓMO COMPROBARLO**
Realizar el diagnóstico de actuadores para verificar el movimiento de las trampillas, medir la variación de tensión del potenciómetro con polímetro/osciloscopio y ejecutar obligatoriamente el **Ajuste Básico (Función 04)** con la máquina de diagnosis tras cualquier sustitución.

📷 IMAGEN: Esquema eléctrico de conexiones de servomotores y potenciómetros con las líneas de positivo L8 y masa L7 — Fuente: Nº10. Esquemas eléctricos.pdf, págs. 4, 5 y 6 (León)

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL Y TURBINA DE AIRE FRESCO
CÓDIGO: J126 (Unidad de control para turbina de aire fresco) / V2 (Motor de la turbina de aire fresco)
UBICACIÓN: Instalados en la carcasa de entrada de aire de la unidad climática, tras la guantera.
APLICACIÓN: Climatronic de SEAT León y plataforma VAG.

**1. MISIÓN**
La turbina V2 impulsa el caudal de aire forzado a través del evaporador y del radiador de calefacción hacia el habitáculo. La unidad J126 regula de forma electrónica y progresiva la velocidad de giro del motor V2 en función de las órdenes recibidas de la UCE Climatronic J255.

**2. PRINCIPIO DE FUNCIONAMIENTO**
La unidad de control de la turbina J126 es una etapa de potencia electrónica por transistores. Recibe una señal de control desde la UCE Climatronic J255 a través del conector T16f/3 y regula la corriente continua aplicada al motor eléctrico V2 mediante modulación electrónica, conectada a la masa principal en el punto 47/374.

**3. CARACTERÍSTICAS**
* Módulo de potencia J126 con disipador de aluminio integrado en el canal de aire, conector de 6 vías (T6t) con cables de sección 4,0 mm² (rojo/blanco positivo directo, marrón masa) y líneas de control de 0,35 mm².
* Motor eléctrico V2 de corriente continua de alta potencia.

**4. VALORES DE TRABAJO**
* Tensión de alimentación de potencia: +12 V directos (línea de cable de 4,0 mm² ro/ws).
* Sección de cables de potencia: 4,0 mm² (para soportar el elevado consumo de corriente del motor V2).

**5. ANOMALÍAS FRECUENTES**
* J126: Cortocircuito o destrucción del transistor de potencia por sobrecalentamiento debido a filtro de habitáculo atascado.
* V2: Desgaste de las escobillas de carbono del motor o agarrotamiento del eje por suciedad/hojas.

**6. COMPORTAMIENTO EN AVERÍA**
Si la unidad J126 o el motor V2 fallan, la turbina deja de girar. Sin caudal de aire, el sistema de climatización se deshabilita por completo y no produce ni calefacción ni aire frío.

**7. CÓMO COMPROBARLO**
Verificar la presencia de +12 V y masa en los cables de 4,0 mm² de J126, comprobar la señal de mando procedente del conector T16f/3 de J255 y alimentar directamente el motor V2 a 12 V para comprobar su giro libre.

📷 IMAGEN: Esquema eléctrico de potencia de la unidad J126 y la turbina de aire fresco V2 con conexiones CAN-Bus de J255 — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 6 (León)

---

### NOTA DE PROCESO — INTERPRETACIÓN DE LÍNEAS DIN Y VERIFICACIÓN ELÉCTRICA EN SISTEMAS DE CLIMATIZACIÓN / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Establecer el procedimiento de comprobación eléctrica, identificación de bornes estandarizados y resolución de pruebas de autoevaluación en instalaciones de climatización automotriz. Aplica a las actividades prácticas de verificación eléctrica de A/C.

**2. FUNDAMENTO**
La verificación de esquemas estandarizados requiere identificar las líneas de alimentación DIN (30, 15, 31), comprender el comportamiento de los interbloqueos de seguridad (presostato trinario, NTC de motor, turbina) y seguir un procedimiento ordenado de diagnóstico mediante puenteado y mediciones.

**3. CONDICIONES PREVIAS**
Esquema eléctrico del vehículo disponible, polímetro calibrado y cable puente con fusible de protección.

**4. EQUIPO Y MATERIAL**
Polímetro digital, lámpara de pruebas, cable puente de diagnóstico y máquina de diagnosis.

**5. DESARROLLO**
1. **Identificación de líneas de alimentación en el esquema (Normas DIN):**
   - Verificar la presencia de +12 V directos de batería en la línea etiquetada con la cifra **30**.
   - Verificar la presencia de +12 V únicamente con la llave en contacto en la línea etiquetada con la cifra **15**.
   - Verificar la continuidad a masa (0 Ω) en la línea etiquetada con la cifra **31**.
2. **Procedimiento de comprobación de la trinaria mediante puenteado:**
   - *Prueba de la línea del compresor (Bornes 1 y 2):* Con el circuito cargado y componentes conectados, al puentear los bornes 1 y 2 de la trinaria, el embrague del compresor debe **conectarse** (demuestra la integridad de la línea hacia la bobina N25).
   - *Prueba de la línea de alta velocidad del electroventilador (Bornes 3 y 4):* Al puentear los bornes 3 y 4 de la trinaria, el electroventilador debe **funcionar inmediatamente a su velocidad máxima (II velocidad)** al alimentar la bobina del relé correspondiente.
3. **Comprobación de interbloqueos de seguridad:**
   - *Sonda NTC de temperatura de motor:* Si la NTC indica exceso de temperatura en el refrigerante, la UCE **desconecta el sistema de aire acondicionado** para evitar sobrecalentamiento del motor.
   - *Turbina de aire fresco:* Si la turbina no funciona o está desconectada, el interbloqueo eléctrico impide el acoplamiento del compresor (**no se conecta el compresor**).
   - *Línea CAN-Bus:* Verificar el correcto **intercambio de información entre las Unidades de Control** (UCE Motor, Cuadro, Red de a bordo y Climatizador).
   - *Señal de marcha atrás:* Confirmar que al insertar la marcha atrás la UCE recibe la señal para **conectar automáticamente la recirculación** de aire y evitar la entrada de gases de escape.

**6. VALORES DE REFERENCIA**
| Comprobación / Prueba | Acción de Diagnóstico | Resultado Correcto Esperado |
| :--- | :--- | :--- |
| **Identificación Borne 30** | Medición de tensión respecto a masa | 12 V continuos (sin necesidad de contacto) |
| **Identificación Borne 15** | Medición de tensión respecto a masa | 12 V solo con contacto activado |
| **Identificación Borne 31** | Medición de resistencia respecto a chasis | 0 Ω (continuidad perfecta a masa) |
| **Puente en bornes 1-2 de Trinaria** | Insertar puente en conector de trinaria | El embrague electromagnético del compresor se conecta |
| **Puente en bornes 3-4 de Trinaria** | Insertar puente en conector de trinaria | El electroventilador arranca en velocidad máxima (II vel.) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Invertir los puentes en el conector de la trinaria (puentear 1-4 o 2-3); puede provocar un cortocircuito a masa o fundido de fusibles de la instalación.
* Intentar diagnosticar un fallo de acoplamiento del compresor sin verificar antes el fusible de la turbina de aire fresco; si la turbina no gira, el compresor se inhibe eléctricamente.

**8. VERIFICACIÓN FINAL**
Verificar el encendido de los componentes correspondientes al realizar los puentes de prueba y la ausencia de códigos de avería tras borrar la memoria con la máquina de diagnosis.

**9. SEGURIDAD Y NORMATIVA**
Utilizar siempre cables puente con fusible aéreo intercalado de 5 A para evitar daños en las UCEs durante las pruebas de simulación.

---

COBERTURA: documento «Nº10. Esquemas eléctricos.pdf», páginas 94 a 114 (incluyendo anexo Climatronic León págs. 1 a 6 de 25). [completo]

---

💡 ¿Necesitas que adaptemos alguno de estos esquemas en ejercicios prácticos de búsqueda de averías en panel de entrenamiento para los alumnos en el taller?