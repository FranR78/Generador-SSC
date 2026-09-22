### NOTA DE PROCESO — CONFIGURACIONES DE CLIMATIZACIÓN EN EL SEAT TARRACO / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica las dos configuraciones de climatización disponibles en el SEAT Tarraco (Aire Acondicionado manual y Climatronic trizona), su lógica de control y la arquitectura de la red de comunicación. Aplica a los sistemas de confort y climatización.

**2. FUNDAMENTO**
Ambas configuraciones ajustan la temperatura y la distribución del caudal mediante servomotores eléctricos. Mientras que el sistema manual ajusta las trampillas y la velocidad en función de la demanda directa seleccionada en los mandos, el Climatronic gestiona de forma automática tres zonas independientes (conductor, acompañante y plazas traseras) mediante una unidad central de control y una red de sensores y actuadores.

**3. CONDICIONES PREVIAS**
Contacto encendido (+15) y tensión de batería adecuada.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Aire Acondicionado Manual:**
  - Se ajusta mediante la unidad de mandos de la calefacción y el aire acondicionado EX21.
  - La velocidad del aire e inclinación de las trampillas se regulan directamente según la posición seleccionada en los mandos.
* **Climatronic (Trizona):**
  - Regula de forma independiente la temperatura del conductor, acompañante y plazas traseras.
  - La temperatura de las plazas traseras se ajusta desde la unidad de mandos e indicación trasera E265, ubicada en la parte posterior de la consola central.
  - Funciones de la unidad de control J255: regulación de temperatura en 3 zonas, distribución y caudal de aire, recirculación automática según la calidad del aire (sensor G238), sistema AirCare (PureAir), solicitud de activación de la luneta térmica y asientos calefactados, programación de calefacción estacionaria y gestión mediante la pantalla del sistema de infotenimiento J794/J685.
* **Arquitectura de red y comunicación:**
  - *CAN-Bus Confort:* Interconecta la UCE Climatronic J255 con la interfaz de diagnosis J533, UCE de la red de a bordo J519, UCEs de puertas (J386, J387) y equipo de infotenimiento J794.
  - *LIN-Bus Clima:* Conecta como componentes esclavos a J255 el sensor de presión del refrigerante G805, el sensor de calidad del aire G238, la unidad de mandos trasera E265 y la unidad de control de la turbina de aire exterior J126.

📷 IMAGEN: Mandos del aire acondicionado manual EX21 y unidad de control del Climatronic J255 — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 59
📷 IMAGEN: Esquema de la red de comunicación CAN-Bus Confort y LIN-Bus Clima del Climatronic — Fuente: SSP172 TARRACO (arrastrado).pdf, págs. 60 y 61

**6. VALORES DE REFERENCIA**
| Sistema de Climatización | Zonas de Regulación | Mando / Unidad de Control | Red de Comunicación |
| :--- | :--- | :--- | :--- |
| **Aire Acondicionado Manual** | Monozona | Unidad de mandos EX21 | Cableado directo a servomotores |
| **Climatronic Trizona** | 3 zonas (conductor, acompañante, trasera) | UCE J255 (delante) y UCE E265 (detrás) | CAN-Bus Confort y LIN-Bus Clima |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Confundir el protocolo de diagnóstico de los sensores del LIN-Bus Clima con sensores analógicos; el sensor de presión G805 y el de calidad del aire G238 transmiten sus datos mediante tramas de datos digitales LIN.

**8. VERIFICACIÓN FINAL**
Comprobar mediante el equipo de diagnosis en la dirección 08 (Climatizador) la ausencia de averías registradas y la comunicación correcta con los abonados del LIN-Bus Clima.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL DEL CLIMATRONIC
CÓDIGO: J255  
UBICACIÓN: En el centro del salpicadero, en la consola central.  
APLICACIÓN: Climatización automática trizona en el SEAT Tarraco.

**1. MISIÓN**  
Procesar las señales de los sensores térmicos, gestionar las peticiones del usuario y gobernar los servomotores, la turbina y la electroválvula del compresor para mantener automáticamente la temperatura en las 3 zonas del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad electrónica de control maestra. Lee la información de los sensores de temperatura (G308, G385, G386, G192, G107, G174), consulta el estado del LIN-Bus Clima (G805, G238, E265, J126) y transmite órdenes a la electroválvula N280, a la turbina V2 y a los servomotores de las trampillas.

**3. CARACTERÍSTICAS**  
Unidad central con pantalla e indicadores integrados, conectada a la red CAN-Bus Confort y maestra de la línea de datos LIN-Bus Clima.

**4. VALORES DE TRABAJO**  
Tensión de alimentación nominal de 12 V a través del fusible SC26.

**5. ANOMALÍAS FRECUENTES**  
Fallo en el transistor interno de salida hacia la electroválvula N280 o pérdida de comunicación por caída del bus LIN-Bus Clima.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad del sistema Climatronic, parpadeo de la pantalla de mandos al conectar el contacto e imposibilidad de regular la temperatura o el caudal de aire.

**7. CÓMO COMPROBARLO**  
Efectuar la lectura de memoria de averías, realizar el test de actuadores de las trampillas y verificar la presencia de 12 V en el fusible SC26.

---

### NOTA DE ELEMENTO — UNIDAD DE MANDOS E INDICACIÓN TRASERA DEL CLIMATIZADOR
CÓDIGO: E265  
UBICACIÓN: En la parte posterior de la consola central, orientada hacia las plazas de la segunda fila.  
APLICACIÓN: Regulación de temperatura y asientos calefactados traseros en el SEAT Tarraco.

**1. MISIÓN**  
Permitir a los ocupantes de las plazas traseras seleccionar la temperatura deseada para la 3.ª zona y activar la calefacción de los asientos laterales traseros.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad de mando electrónica esclava. Registra la posición de los pulsadores de selección térmica y de los asientos calefactados (ZX10/ZX12) y transmite esta información a la UCE J255 a través de la línea de datos LIN-Bus Clima.

**3. CARACTERÍSTICAS**  
Unidad compacta con display digital y botones de ajuste, abonada a la línea LIN-Bus Clima.

**4. VALORES DE TRABAJO**  
Alimentación eléctrica a 12 V protegida por el fusible SC51; comunicación digital LIN-Bus.

**5. ANOMALÍAS FRECUENTES**  
Daños mecánicos o sulfatación de conectores por vertido accidental de líquidos desde las plazas traseras.

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de ajustar la temperatura trasera desde la 2.ª fila y pérdida del control de la calefacción de los asientos traseros. La UCE J255 asume el control de la zona trasera en modo de emergencia.

**7. CÓMO COMPROBARLO**  
Verificar la tensión de alimentación (+12 V en fusible SC51 y masa) y comprobar con osciloscopio la trama de datos de la línea LIN-Bus Clima en el conector de E265.

---

### NOTA DE PROCESO — ARQUITECTURA Y COMPONENTES DE LA UNIDAD CLIMÁTICA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la integración interna de sensores, actuadores, evaporador y radiador de calefacción dentro del módulo central de la unidad climática. Aplica al sistema Climatronic del SEAT Tarraco.

**2. FUNDAMENTO**
La unidad climática es la carcasa central que canaliza, mezcla y distribuye el flujo de aire. Al berga en su interior los elementos de intercambio térmico (evaporador del A/C y radiador de calefacción) y los servomotores eléctricos que posicionan las trampillas para ajustar la mezcla de aire y la salida hacia los difusores.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Sensores integrados en la unidad climática:**
  - *Termosensor del evaporador G308:* Mide la temperatura tras el paso por el evaporador para evitar la formación de hielo.
  - *Sensor de temperatura del difusor reposapiés G192:* Mide la temperatura del aire enviado a la zona inferior delantera.
  - *Nota:* El resto de los sensores térmicos (G385, G386, G174) se ubican directamente en las toberas de salida de aire.
* **Actuadores y servomotores integrados:**
  - *Turbina de aire exterior V2:* Impulsa el caudal de aire, gestionada por la UCE de potencia J126 (abonada a LIN-Bus Clima).
  - *Servomotor V158:* Mueve las trampillas de mezcla de aire frío/caliente de la zona delantera izquierda.
  - *Servomotor V159:* Mueve las trampillas de mezcla de aire frío/caliente de la zona delantera derecha.
  - *Servomotor V137:* Mueve las trampillas de mezcla de aire frío/caliente de la zona trasera.
  - *Servomotor V237:* Mueve las trampillas de los difusores del tablero, reposapiés y consola trasera mediante palancas y cables Bowden.
  - *Servomotor V425:* Acciona las trampillas de aire exterior, recirculación de aire y presión dinámica.
  - *Servomotor V107:* Acciona la trampilla de descongelación/desempañado del parabrisas.

📷 IMAGEN: Disposición de servomotores, sensores, evaporador y radiador en la unidad climática — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 62

**6. VALORES DE REFERENCIA**
| Componente de la Unidad Climática | Tipo de Elemento | Función / Zona Regulada |
| :--- | :--- | :--- |
| **G308** | Sensor NTC | Control de temperatura del evaporador (anti-congelación) |
| **G192** | Sensor NTC | Medición de temperatura en la salida a reposapiés |
| **V158 / V159** | Servomotor eléctrico | Mezcla de temperatura zona delantera izquierda / derecha |
| **V137** | Servomotor eléctrico | Mezcla de temperatura zona trasera (3.ª zona) |
| **V237** | Servomotor eléctrico | Distribución de salida de aire (tablero, pies, consola trasera) |
| **V425** | Servomotor eléctrico | Control de aire exterior, recirculación y presión dinámica |
| **V107** | Servomotor eléctrico | Descongelación / desempañado del parabrisas |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Tratar de acceder a los servomotores sin consultar el esquema de ubicación; el servomotor V237 acciona simultáneamente difusores delanteros y traseros mediante la combinación de palancas mecánicas y dos cables Bowden.

**8. VERIFICACIÓN FINAL**
Realizar un ajuste básico de los servomotores con el equipo de diagnosis para recalibrar los topes mecánicos de todas las trampillas instaladas en la unidad climática.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — SERVOMOTOR DEL DIFUSOR DE AIRE DIRECTO DELANTERO IZQUIERDO
CÓDIGO: V237  
UBICACIÓN: En el costado de la unidad climática.  
APLICACIÓN: Distribución de aire en plazas delanteras y traseras en el SEAT Tarraco.

**1. MISIÓN**  
Operar de forma coordinada la apertura y cierre de las trampillas de los difusores del tablero de instrumentos, zona reposapiés delantera, reposapiés trasera y consola central trasera.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Servomotor eléctrico de corriente continua con potenciómetro de posición integrado. Transmite su movimiento de rotación mediante un doble sistema mecánico: un conjunto de palancas rígidas acciona las trampillas de los difusores del tablero y reposapiés delantero, mientras que dos cables Bowden accionan las trampillas del reposapiés trasero y la consola central posterior.

**3. CARACTERÍSTICAS**  
Servomotor de regulación a paso continuo accionado por la UCE J255, conectado mecánicamente a palancas mecánicas e hilos de mando Bowden.

**4. VALORES DE TRABAJO**  
Tensión de señal modulada desde la UCE J255; realimentación de posición potenciómetrica entre 0,5 V y 4,5 V.

**5. ANOMALÍAS FRECUENTES**  
Agarrotamiento o rotura de los cables Bowden que transmiten el movimiento a la parte trasera, o desgaste de la pista de carbón del potenciómetro interno.

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de cambiar la salida de aire (bloqueo en aire hacia los pies o hacia el tablero) o falta de aireación en la consola central trasera.

**7. CÓMO COMPROBARLO**  
Comprobar el movimiento de las palancas y la tensión de los cables Bowden mediante inspección visual mientras se ejecuta el test de actuadores con la máquina de diagnosis.

📷 IMAGEN: Sistema de palancas y cables Bowden accionados por el servomotor V237 — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 63

---

### NOTA DE PROCESO — DISTRIBUCIÓN Y REGULACIÓN DE TEMPERATURA EN LA ZONA TRASERA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la cinemática de distribución de aire y el control de mezcla térmica en la 3.ª zona (plazas traseras) mediante el servomotor de distribución V237, el servomotor de temperatura V137 y la sonda G174.

**2. FUNDAMENTO**
El SEAT Tarraco no utiliza una segunda unidad climática independiente para las plazas traseras. La distribución de aire se deriva desde la unidad climática principal mediante cables Bowden hacia la consola central, mientras que la mezcla de temperatura de la zona trasera la realiza el servomotor V137 mediante palancas laterales diferenciadas para aire frío y aire caliente.

**3. CONDICIONES PREVIAS**
Sistema Climatronic encendido con el modo trizona activado.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Lógica de Distribución del Aire Trasero (Servomotor V237):**
  - *Selección de salida por difusores del tablero:* El servomotor V237 desplaza el sistema de palancas abriendo los difusores del tablero y cerrando los reposapiés delanteros; simultáneamente, la tracción de los cables Bowden **abre la trampilla trasera de la consola central** y cierra las trampillas del reposapiés trasero.
  - *Selección de salida por reposapiés:* V237 invierte el movimiento, cerrando la consola trasera y abriendo el caudal hacia las zonas reposapiés traseras mediante los cables Bowden.
* **Lógica de Regulación de Temperatura Trasera (Servomotor V137):**
  - El servomotor V137 opera sobre dos sistemas de palancas independientes ubicados a ambos lados de la unidad climática: el sistema del lado izquierdo acciona la trampilla de aire frío y el del lado derecho la trampilla de aire caliente para el canal trasero.
  - La UCE J255 monitoriza en tiempo real la temperatura efectiva de la 3.ª zona mediante el sensor NTC de temperatura del difusor trasero G174, instalado en la tobera trasera de la consola central.

📷 IMAGEN: Esquema del flujo de distribución de aire hacia la consola y reposapiés traseros — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 63
📷 IMAGEN: Sistema de palancas para la mezcla de aire frío y caliente gobernado por el servomotor V137 — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 64

**6. VALORES DE REFERENCIA**
| Mando / Componente | Acción Mecánica | Difusor Trasero Gobernado |
| :--- | :--- | :--- |
| **Servomotor V237** | Tracción de cables Bowden (Posición Tablero) | Abre salida consola trasera / Cierra reposapiés trasero |
| **Servomotor V237** | Tracción de cables Bowden (Posición Pies) | Cierra salida consola trasera / Abre reposapiés trasero |
| **Servomotor V137** | Palanca izquierda / Palanca derecha | Ajusta paso de aire frío / aire caliente a la 3.ª zona |
| **Sensor G174** | Medición NTC en tobera trasera | Informa a la UCE J255 de la temperatura de la 3.ª zona |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Diagnosticar un fallo eléctrico en V137 cuando la zona trasera no enfría; se debe comprobar previamente que la palanca mecánica del lado izquierdo de la unidad climática no se ha desenganchado de la bieleta de mando.

**8. VERIFICACIÓN FINAL**
Medir la temperatura del aire saliente por la tobera de la consola trasera con un termómetro digital de varilla mientras se modifica la consigna en la unidad E265 de "LOW" a "HIGH".

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — SERVOMOTOR DE LA TRAMPILLA DE TEMPERATURA TRASERA
CÓDIGO: V137  
UBICACIÓN: En la carcasa de la unidad climática.  
APLICACIÓN: Regulación de la temperatura de la 3.ª zona en el SEAT Tarraco.

**1. MISIÓN**  
Ajustar la proporción de mezcla de aire frío y aire caliente destinada exclusivamente a los difusores de las plazas traseras.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Servomotor eléctrico de corriente continua equipado con potenciómetro de realimentación interna. Acciona mediante un juego de bieletas y palancas mecánicas la trampilla de aire frío (ubicada en el lado izquierdo de la unidad climática) y la trampilla de aire caliente (ubicada en el lado derecho).

**3. CARACTERÍSTICAS**  
Servomotor de posición continua gobernado por la UCE J255 con doble salida de transmisión mecánica por palancas.

**4. VALORES DE TRABAJO**  
Tensión de trabajo modulada por J255; señal de retorno de posición potenciómetrica entre 0,5 V y 4,5 V.

**5. ANOMALÍAS FRECUENTES**  
Desgaste de los dientes de los engranajes reductores de plástico por esfuerzo continuo al mover el doble varillaje.

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de regular la temperatura en las plazas traseras (el aire sale permanentemente frío o permanentemente caliente) y registro del código de avería del servomotor V137 en J255.

**7. CÓMO COMPROBARLO**  
Efectuar la lectura del bloque de valores de medición del potenciómetro de V137 con el equipo de diagnosis y comprobar que el varillaje mecánico de ambos lados se desplaza sin atascos.

---

### NOTA DE PROCESO — GESTIÓN ELÉCTRICA Y ACTIVACIÓN DE ASIENTOS CALEFACTADOS / PROCEDIMIENTO

**1. OBJETO AND ALCANCE**
Explica la arquitectura de activación de los asientos calefactados delanteros y traseros y su condicionamiento a la gestión de la carga eléctrica ejecutada por la UCE J519. Aplica al sistema eléctrico de confort.

**2. FUNDAMENTO**
Los elementos calefactores de los asientos representan un elevado consumo de corriente de potencia. Para evitar la descarga de la batería de 12 V, la activación de las esterillas térmicas por la UCE J255 está supeditada a la autorización de la UCE de la red de a bordo J519 según el estado del balance energético del alternador.

**3. CONDICIONES PREVIAS**
Motor en marcha o contacto encendido con estado de carga de batería adecuado.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Petición y activación de los asientos delanteros (Z45 / Z46):**
  - El usuario pulsa la tecla correspondiente situada en la propia unidad de control del Climatronic J255.
* **Petición y activación de los asientos traseros laterales (ZX10 / ZX12):**
  - El usuario pulsa la tecla en la unidad de mandos e indicación trasera E265.
  - E265 transmite la solicitud a la UCE J255 a través de la línea de datos LIN-Bus Clima.
* **Intervención de la Gestión de Carga Eléctrica:**
  1. La UCE Climatronic J255 vuelca la solicitud de activación de los asientos al CAN-Bus Confort.
  2. La UCE de la red de a bordo J519 lee el mensaje en la red CAN-Bus Confort y evalúa el balance de carga del alternador y la tensión de batería.
  3. Si J519 tiene activa la función de *Gestión de Carga Eléctrica* (debido a bajo nivel de batería o alto consumo global), **deniega la autorización y prohíbe la conexión de los asientos calefactados** o reduce su nivel de potencia.
  4. Si el balance energético es correcto, J519 autoriza el suministro de corriente alimentando los circuitos a través del fusible SC51.

📷 IMAGEN: Esquema eléctrico de los asientos calefactados Z45, Z46, ZX10, ZX12 y comunicación entre J255 y J519 — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 65

**6. VALORES DE REFERENCIA**
| Asientos Calefactados | Mando de Petición | Línea de Comunicación | Condición de Inhibición por Seguridad |
| :--- | :--- | :--- | :--- |
| **Delanteros (Z45 / Z46)** | Pulsadores en UCE J255 | Cableado interno / CAN-Bus Confort | Estado de Gestión de Carga en UCE J519 activo |
| **Traseros (ZX10 / ZX12)** | Pulsadores en UCE E265 | LIN-Bus Clima -> UCE J255 -> CAN Confort | Estado de Gestión de Carga en UCE J519 activo |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Interpretar la no desconexión o falta de calentamiento de los asientos con el motor al ralentí y muchos consumidores encendidos como un fallo de las esterillas Z45/ZX10; se trata de una desconexión por la gestión de carga de J519.

**8. VERIFICACIÓN FINAL**
Verificar en la UCE J519 mediante el equipo de diagnosis el bloque de medición de "Gestión de Carga Eléctrica" y comprobar la presencia de tensión en las esterillas calefactoras al acelerar el motor.

**9. SEGURIDAD Y NORMATIVA**
Protección contra el rozamiento y desconexión automática por sobretemperatura para evitar quemaduras a los ocupantes.

---

COBERTURA: documento «SSP172 TARRACO (arrastrado).pdf», páginas 59 a 66 de 66. [completo]

---

💡 ¿Deseas que preparemos un esquema de la red del LIN-Bus Clima o algún test de comprobación sobre la unidad climática del SEAT Tarraco para entregar a los alumnos en el taller?