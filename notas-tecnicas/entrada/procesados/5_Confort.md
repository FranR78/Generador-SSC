### NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA LA AUTORIZACIÓN DE ACCESO Y ARRANQUE
CÓDIGO: No documentado en fuentes
UBICACIÓN: No documentado en fuentes
APLICACIÓN: Sistemas de acceso y arranque sin llave (Keyless Access) en vehículos del Grupo VAG.

**1. MISIÓN**
Analizar las señales recibidas de los sensores y la red de a bordo para gestionar la autorización de bloqueo y desbloqueo de puertas, la autorización de arranque del motor y el desbloqueo eléctrico de la columna de dirección.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Procesa las solicitudes de los sensores capacitivos y del pulsador de arranque, activa el patrón de búsqueda por baja frecuencia (125 kHz) a través de las antenas del vehículo y envía una señal codificada Wake Up por un cable convencional para reexcitar la unidad de red de a bordo.

**3. CARACTERÍSTICAS**
Unidad electrónica programable interconectada por CAN-Bus de confort, LIN-Bus (con la UCE del portón) y cable discreto de reexcitación.

**4. VALORES DE TRABAJO**
* Tensión de alimentación: No documentado en fuentes.
* Frecuencia de emisión de la señal de búsqueda por antenas: 125 kHz (baja frecuencia).

**5. ANOMALÍAS FRECUENTES**
Fallo de comunicación en el CAN-Bus de confort, interrupción en la línea de reexcitación o avería interna en la tarjeta lógica de procesamiento.

**6. COMPORTAMIENTO EN AVERÍA**
Imposibilidad de desbloquear o bloquear las puertas por proximidad, falta de detección de la llave en el habitáculo e imposibilidad de activar el contacto (borne 15) o arrancar el motor.

**7. CÓMO COMPROBARLO**
Lectura de la memoria de averías y consulta de bloques de valores de medición con el equipo de diagnosis para comprobar las líneas CAN-Bus y el estado de los canales de entrada y salida.

---

### NOTA DE ELEMENTO — SENSORES DE CONTACTO Y ANTENA EN MANILLAS EXTERIORES
CÓDIGO: No documentado en fuentes
UBICACIÓN: Manillas exteriores de las puertas delanteras (conductor y acompañante).
APLICACIÓN: Sistema de acceso sin llave Keyless Access.

**1. MISIÓN**
Captar la presencia de la mano del usuario para solicitar el bloqueo o desbloqueo de las puertas y emitir señales de radiofrecuencia para buscar llaves autorizadas en los laterales del vehículo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Incorporan dos sensores capacitivos cuya capacidad eléctrica aumenta al aproximar la mano a la superficie interior (desbloqueo) o al pulsar la superficie exterior (bloqueo). La tarjeta electrónica interna capta la variación de capacidad y activa una antena integrada por una bobina enrollada a un núcleo de hierro que emite una señal de baja frecuencia.

**3. CARACTERÍSTICAS**
Tarjeta electrónica integrada en la manilla compuesta por dos sensores capacitivos de lámina y una antena emisora inductiva (núcleo de hierro y bobinado).

**4. VALORES DE TRABAJO**
* Radio máximo de búsqueda de la llave por la antena: 1,5 metros desde la puerta.
* Frecuencia de emisión de la antena: 125 kHz.
* Desconexión del sensor del acompañante por inactividad: Tras 30 horas en reposo.
* Desconexión del sensor del conductor por inactividad: Tras 90 horas en reposo.

**5. ANOMALÍAS FRECUENTES**
Humedad o suciedad en la tarjeta electrónica, rotura del bobinado de la antena o desactivación por tiempo de reposo prolongado de la batería.

**6. COMPORTAMIENTO EN AVERÍA**
El sistema no responde al tocar la manilla; exige pulsar el mando a distancia para volver a activar el sensor tras periodos de reposo superiores a 30 h o 90 h.

**7. CÓMO COMPROBARLO**
Comprobar el estado del sensor en los bloques de medición de la UCE de acceso y arranque y verificar la emisión de la antena a 125 kHz con un detector de radiofrecuencia al aproximar la mano.

---

### NOTA DE ELEMENTO — ANTENAS PARA LA DETECCIÓN DE LLAVES POR RADIOFRECUENCIA
CÓDIGO: No documentado en fuentes
UBICACIÓN: Paragolpes o portón trasero (zona posterior exterior), maletero/respaldo de asientos traseros (banqueta posterior) y consola central del habitáculo (zona delantera interior).
APLICACIÓN: Sistema Keyless Access.

**1. MISIÓN**
Emitir campos electromagnéticos de baja frecuencia para verificar la presencia y la posición exacta de una llave autorizada tanto en el exterior posterior como en el interior del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Constan de una bobina de cobre enrollada sobre un núcleo de hierro. Al recibir la orden de la UCE de acceso y arranque, generan un campo electromagnético de baja frecuencia que activa el transpondedor de la llave.

**3. CARACTERÍSTICAS**
Antenas inductivas de baja frecuencia con núcleo ferromagnético.

**4. VALORES DE TRABAJO**
* Alcance de detección de las antenas exteriores (paragolpes y manillas): Distancia máxima de 1,5 metros.
* Frecuencia de trabajo: 125 kHz (baja frecuencia).

**5. ANOMALÍAS FRECUENTES**
Interrupción o cortocircuito en el bobinado por impactos en el paragolpes o manipulaciones en el tapizado interior.

**6. COMPORTAMIENTO EN AVERÍA**
Si falla la antena trasera, no se autoriza la apertura del portón; si fallan las antenas interiores, se muestra el mensaje de llave no detectada en el Cuadro e impide el arranque.

**7. CÓMO COMPROBARLO**
Medición de continuidad y resistencia del bobinado con polímetro y comprobación del campo magnético emitido mediante osciloscopio o equipo de diagnosis.

---

### NOTA DE ELEMENTO — BOBINA LECTORA DEL INMOVILIZADOR
CÓDIGO: No documentado en fuentes
UBICACIÓN: Columna de dirección, en la posición donde se sitúa el clausor mecánico en modelos sin Keyless Access.
APLICACIÓN: Sistema Keyless Access (procedimiento de arranque de emergencia).

**1. MISIÓN**
Leer el código del chip transpondedor de la llave cuando la pila del mando a distancia se encuentra agotada.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Induce por acoplamiento magnético una corriente en el chip pasivo de la llave al colocarla físicamente junto a la columna, permitiendo la lectura del código del inmovilizador sin consumir energía de la pila del mando.

**3. CARACTERÍSTICAS**
Bobinado inductivo circular montado en la carcasa de la columna de dirección.

**4. VALORES DE TRABAJO**
* Tensión y resistencia: No documentado en fuentes.
* Distancia de lectura: Contacto directo o proximidad inmediata a la columna de dirección.

**5. ANOMALÍAS FRECUENTES**
Corte en el cableado de conexión o avería en el bobinado por manipulación de la carcasa.

**6. COMPORTAMIENTO EN AVERÍA**
Imposibilidad de realizar el arranque de emergencia cuando la llave se ha quedado sin pila.

**7. CÓMO COMPROBARLO**
Aproximar la llave sin pila a la columna de dirección, accionar el pulsador de arranque y verificar con el equipo de diagnosis si el inmovilizador reconoce el código transpondedor.

---

### NOTA DE ELEMENTO — ACTUADOR CON MOTOR DE BLOQUEO DE LA COLUMNA DE DIRECCIÓN
CÓDIGO: No documentado en fuentes
UBICACIÓN: Columna de dirección, alojado en el interior de una jaula metálica de protección.
APLICACIÓN: Bloqueo y desbloqueo eléctrico de la dirección en vehículos con Keyless Access.

**1. MISIÓN**
Bloquear mecánicamente el giro del volante mediante un perno retenedor al parar el motor y abrir la puerta del conductor, y retirarlo para desbloquear la dirección antes de iniciar la marcha.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Un motor eléctrico transmite su giro a un engranaje de tornillo sin fin que desplaza un perno. Invertir la polaridad del motor invierte el sentido de giro del tornillo, haciendo subir el perno para liberar la columna. Dos sensores Hall integrados leen las posiciones finales.

**3. CARACTERÍSTICAS**
Motor eléctrico de CC, reductor de tornillo sin fin, perno fijador antimanipulación y tarjeta electrónica interna con sensores Hall integrados.

**4. VALORES DE TRABAJO**
* Tensión de alimentación: Tensión de red (12 V).
* Señales de posición: Estados discreto "bloqueado" o "desbloqueado" leídos por los sensores Hall.

**5. ANOMALÍAS FRECUENTES**
Atascos mecánicos por rozamiento del perno contra la columna, fallo en el motor eléctrico o avería en los sensores Hall integrados.

**6. COMPORTAMIENTO EN AVERÍA**
La columna queda trabada o no se bloquea. Si no se confirma el desbloqueo, el sistema no gestiona los bornes de corriente e impide el arranque.

**7. CÓMO COMPROBARLO**
Consultar las señales de los sensores Hall mediante bloques de valores de medición con la máquina de diagnosis.
Para desmontar la unidad de la jaula es obligatorio que la columna esté DESBLOQUEADA; de lo contrario, el perno fijador antimanipulación impide su extracción.

---

### NOTA DE ELEMENTO — PULSADOR DEL DISPOSITIVO DE ARRANQUE DEL MOTOR
CÓDIGO: No documentado en fuentes
UBICACIÓN: Consola central del habitáculo.
APLICACIÓN: Sistema Keyless Access (Start Engine Stop).

**1. MISIÓN**
Permitir al conductor enviar manualmente las solicitudes de conexión de contacto (borne 15), arranque del motor (borne 50) y parada del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Cuenta con un mecanismo de conmutación de doble contacto eléctrico y un diodo LED de iluminación. La UCE de acceso y arranque evalúa la plausibilidad entre las dos señales redundantes para detectar averías en la conmutación.

**3. CARACTERÍSTICAS**
Pulsador con 4 contactos eléctricos: 2 contactos para el LED de iluminación/destello y 2 contactos para la solicitud redundante de arranque o paro.

**4. VALORES DE TRABAJO**
* Lógica de señal: Redundancia doble por masa/positivo enviada a la UCE de acceso y arranque.
* Indicación luminosa: Destello del LED al acceder al habitáculo para avisar al conductor.

**5. ANOMALÍAS FRECUENTES**
Desgaste en los contactos internos, fallo del diodo LED o falta de plausibilidad entre las dos señales de conmutación.

**6. COMPORTAMIENTO EN AVERÍA**
La UCE registra una avería de plausibilidad y el sistema no responde a la pulsación o requiere varias pulsaciones seguidas.

**7. CÓMO COMPROBARLO**
Verificar el cambio de estado de ambos contactos con polímetro en modo continuidad o leyendo el bloque de valores de medición en la UCE al presionar el botón.

---

### NOTA DE PROCESO — AUTORIZACIÓN DE DESBLOQUEO Y BLOQUEO DE PUERTAS EN KEYLESS ACCESS / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Explica la secuencia de señales, radiofrecuencia y comunicación por bus para bloquear o desbloquear las puertas por proximidad. Aplica al diagnóstico de accesos en el sistema Keyless Access.

**2. FUNDAMENTO**
Emisión de búsqueda en baja frecuencia (125 kHz) desde las antenas y respuesta codificada de la llave en alta frecuencia (434 MHz) validada por la UCE de red de a bordo y transmitida por el CAN-Bus de confort a los motores de las puertas.

**3. CONDICIONES PREVIAS**
Llave autorizada con pila en buen estado a una distancia menor de 1,5 metros de la puerta delantera y vehículo parado.

**4. EQUIPO Y MATERIAL**
Equipo de diagnosis y detector de radiofrecuencia (125 kHz / 434 MHz).

**5. DESARROLLO**
1. El conductor introduce la mano en la manilla de la puerta delantera. El sensor capacitivo aumenta su capacidad y envía la solicitud de apertura a la UCE de acceso y arranque.
2. La UCE de acceso y arranque activa la antena de la manilla a 125 kHz y reexcita por cable convencional a la UCE de la red de a bordo (señal Wake Up).
3. La llave capta la señal de 125 kHz y responde emitiendo su código e identificación de posición a 434 MHz hacia la UCE de red de a bordo.
4. La UCE de red de a bordo verifica la autenticidad de la llave y vuelca la autorización al CAN-Bus de confort.
5. Las UCEs de puerta reciben el mensaje y alimentan los motores eléctricos de desbloqueo.
6. Para el bloqueo, el conductor toca la superficie de contacto exterior de la manilla, ejecutándose idéntica secuencia hasta alimentar los motores de cierre.

📷 IMAGEN: Esquema del proceso de solicitud de apertura desde la puerta del conductor — Fuente: 5. Confort.pdf, pág. 102
📷 IMAGEN: Tarjeta electrónica interior de la manilla con sensores capacitivos y bobina — Fuente: 5. Confort.pdf, pág. 101

**6. VALORES DE REFERENCIA**
| Parámetro / Condición | Valor y Especificación |
| :--- | :--- |
| Distancia máxima de detección de la llave | 1,5 metros desde la manilla de la puerta |
| Frecuencia de emisión de las antenas | 125 kHz (baja frecuencia) |
| Frecuencia de emisión de la llave | 434 MHz (alta frecuencia) |
| Desconexión por reposo del sensor del acompañante | 30 horas de inactividad |
| Desconexión por reposo del sensor del conductor | 90 horas de inactividad |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Falta de respuesta tras varios días parado: No es avería; el sistema deshabilita las manillas tras 30 h o 90 h para ahorrar batería (exige abrir con el mando para reactivar).
* Bloqueo rechazado con llave dentro: El sistema evita dejar la llave encerrada, salvo que se ordene el bloqueo desde el exterior con una segunda llave autorizada.

**8. VERIFICACIÓN FINAL**
Verificar que las puertas se desbloquean al introducir la mano en la manilla y se bloquean al presionar el sensor exterior.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — AUTORIZACIÓN DE CONTACTO, ARRANQUE Y GESTIÓN DE BORNES EN KEYLESS ACCESS / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Describe el procedimiento de detección de la llave en el habitáculo, la comunicación con el inmovilizador y la activación de las líneas de alimentación (bornes S, 15 y 50). Aplica al diagnóstico de fallos de arranque sin llave.

**2. FUNDAMENTO**
Validación de la posición de la llave mediante campos de 125 kHz y 434 MHz, verificación de código con la UCE del inmovilizador y activación discreta/CAN-Bus de la gestión de bornes de corriente.

**3. CONDICIONES PREVIAS**
Llave autorizada en el habitáculo. En cambio manual: pedal de embrague pisado. En cambio automático: palanca en P o N y pedal de freno pisado.

**4. EQUIPO Y MATERIAL**
Equipo de diagnosis.

**5. DESARROLLO**
1. El conductor presiona el pulsador de arranque en la consola central.
2. La UCE de acceso y arranque recibe la señal, despierta el CAN-Bus de confort y activa las antenas interiores (consola y maletero) a 125 kHz.
3. La llave en el habitáculo recibe la señal de mayor intensidad y envía su código y posición a 434 MHz a la UCE de red de a bordo.
4. La UCE de red de a bordo consulta la validez del código con el inmovilizador (ubicado en el Cuadro J285), ignorando llaves externas.
5. El inmovilizador valida el código y transmite la autorización al CAN-Bus de confort.
6. La UCE de la columna de dirección retira el perno eléctrico liberando el volante.
7. La UCE de red de a bordo y la UCE de acceso y arranque activan las líneas de corriente: Borne S (accesorios), Borne 15 (contacto) y Borne 50 (motor de arranque hacia la UCE del motor).
8. En caso de pila de la llave agotada: realizar el arranque de emergencia aproximando la llave a la bobina lectora de la columna de dirección antes de pulsar el botón.
9. Parada del motor: pulsar el botón con el coche parado. Si el vehículo circula a más de 2 km/h en una emergencia, presionar el botón y confirmar con una segunda pulsación tras el aviso en el cuadro.

📷 IMAGEN: Esquema del proceso de autorización de contacto y arranque — Fuente: 5. Confort.pdf, pág. 104
📷 IMAGEN: Esquema de la gestión de bornes de alimentación (S, 15 y 50) — Fuente: 5. Confort.pdf, pág. 104

**6. VALORES DE REFERENCIA**
| Parámetro / Condición | Valor y Especificación |
| :--- | :--- |
| Umbral de velocidad para parada de emergencia | > 2 km/h (exige doble pulsación de confirmación) |
| Distancia de búsqueda de llave exterior | 1,5 metros |
| Frecuencia de antenas interiores | 125 kHz (baja frecuencia) |
| Frecuencia de respuesta de la llave | 434 MHz (alta frecuencia) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Pulsar el botón sin pisar pedales: Se conecta el contacto (borne 15) pero no se acciona el motor de arranque (borne 50).
* Mensaje "llave no detectada": Pila del mando agotada; se soluciona acercando la llave a la columna de dirección para la lectura por inducción.

**8. VERIFICACIÓN FINAL**
Verificar que al pulsar el botón con el pedal pisado, la columna se desbloquea, el cuadro se enciende y el motor arranca sin demoras.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — BLOQUEO Y DESBLOQUEO ELECTRÓNICO DE LA COLUMNA DE DIRECCIÓN / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la lógica de control, la electromecánica interna y los sistemas de seguridad antimanipulación del bloqueo eléctrico de la dirección. Aplica al mantenimiento del conjunto de la columna de dirección.

**2. FUNDAMENTO**
Conversión de movimiento rotativo a desplazamiento lineal del perno mediante reductor de tornillo sin fin. Verificación de posiciones mediante sensores Hall e intercambio de claves con el inmovilizador por CAN-Bus.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Mecanismo de Bloqueo:** Al parar el motor y abrir la puerta del conductor, la UCE alimenta el motor eléctrico, girando el tornillo sin fin para introducir el perno en la columna de dirección.
* **Mecanismo de Desbloqueo:**
  - Caso A (Acceso con llave por puerta): Al entrar y cerrar la puerta, la UCE de red de a bordo consulta las antenas interiores. Si hay llave autorizada, el inmovilizador ordena el desbloqueo a la UCE de la columna, invirtiendo la polaridad del motor para subir el perno.
  - Caso B (Acceso sin llave / puertas abiertas): El desbloqueo se ejecuta al accionar el pulsador de arranque en la consola central tras validar la llave interior.
* **Control de Posición:** Sensores Hall integrados en la placa leen las posiciones finales del perno (bloqueado / desbloqueado).
* **Protección Antimanipulación:** La UCE se aloja en una jaula de metal retenida por un perno fijador. Este perno solo puede presionarse hacia dentro para desmontar la UCE si la columna está mecánicamente DESBLOQUEADA. Si la columna está bloqueada, es imposible desmontarla de la jaula.

📷 IMAGEN: Actuador con motor de bloqueo y perno fijador antimanipulación — Fuente: 5. Confort.pdf, pág. 106

**6. VALORES DE REFERENCIA**
| Parámetro / Condición | Especificación Técnica |
| :--- | :--- |
| Condición obligatoria de desmontaje | Columna de dirección en posición DESBLOQUEADA |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Forzar el desmontaje con la columna bloqueada: Provoca la rotura inservible del actuador al no poder presionar el perno fijador antimanipulación.

**8. VERIFICACIÓN FINAL**
Comprobar en el equipo de diagnosis que las señales de los sensores Hall indican "desbloqueado" al conectar el contacto y "bloqueado" al apagar el motor y abrir la puerta.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL DEL PORTÓN TRASERO ELÉCTRICO
CÓDIGO: No documentado en fuentes
UBICACIÓN: Maletero del vehículo.
APLICACIÓN: Portones traseros con apertura y cierre eléctrico.

**1. MISIÓN**
Reconocer las órdenes de apertura y cierre, alimentar los motores eléctricos de elevación, gobernar el cierre asistido de la cerradura y gestionar la seguridad antiaprisionamiento.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Procesa las señales de los pulsadores de la manilla, consola, mando y línea LIN-Bus de Easy Open. Gobierna los motores de accionamiento comprobando su velocidad y sentido de giro mediante los impulsos de los sensores Hall.

**3. CARACTERÍSTICAS**
Unidad electrónica de potencia conectada a CAN-Bus de confort, red LIN-Bus, zumbador de aviso y etapas de alimentación de motores CC.

**4. VALORES DE TRABAJO**
* Tensión de trabajo: Tensión de red (12 V).
* Control de posición: Conteo de pulsos de los sensores Hall del Motor 1 y Motor 2.

**5. ANOMALÍAS FRECUENTES**
Desajuste de los valores límite de apertura, fallos de lectura en los sensores Hall o caídas de tensión de alimentación.

**6. COMPORTAMIENTO EN AVERÍA**
El portón no responde a los mandos o detiene su recorrido a mitad de camino; requiere abrir y cerrar manualmente aplicando fuerza sobre el portón.

**7. CÓMO COMPROBARLO**
Realizar diagnosis con la máquina en la dirección **6D - Sistema electrónico de la puerta del maletero**, consultar bloques de valores, realizar test de actuadores y ejecutar el ajuste básico de topes.

---

### NOTA DE ELEMENTO — MOTORES ELÉCTRICOS DE ACCIONAMIENTO DEL PORTÓN
CÓDIGO: Motor 1 y Motor 2 del portón trasero
UBICACIÓN: Montados a ambos lados del portón trasero, sustituyendo a los amortiguadores de gas tradicionales.
APLICACIÓN: Portones traseros eléctricos.

**1. MISIÓN**
Desplazar mecánicamente el portón para abrirlo y cerrarlo de forma automatizada y mantenerlo retendido de forma segura en cualquier posición intermedia.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Un motor eléctrico transmite su par a través de dos etapas de engranaje planetario doble hacia un husillo con tuerca, ayudado por un muelle helicoidal. Un freno de muelle envolvente (interior y exterior) aplica fricción mecánica sobre la carcasa en reposo para evitar que el peso del portón lo haga caer. Dos sensores Hall miden las revoluciones y el sentido de giro.

**3. CARACTERÍSTICAS**
Conjunto cilíndrico de accionamiento compuesto por: motor eléctrico de CC, reductor planetario doble, husillo con tuerca, muelle helicoidal de refuerzo, freno de muelle envolvente y 2 sensores Hall de posición.

**4. VALORES DE TRABAJO**
* Tensión de alimentación: Tensión de red (12 V).
* Sensores Hall: 2 sensores por motor (uno para revoluciones/velocidad y otro para sentido de giro).

**5. ANOMALÍAS FRECUENTES**
Desgaste del freno mecánico de muelle, agarrotamiento del husillo o fallo en uno de los sensores Hall.

**6. COMPORTAMIENTO EN AVERÍA**
La UCE detecta diferencias de velocidad entre el motor 1 y el motor 2 y corta la alimentación eléctrica por seguridad.

**7. CÓMO COMPROBARLO**
Medir el consumo de corriente de los motores con el equipo de diagnosis y comprobar los impulsos de los sensores Hall de ambos lados durante todo el recorrido.

---

### NOTA DE ELEMENTO — UNIDAD Y MOTOR DE CIERRE ASISTIDO DEL PORTÓN
CÓDIGO: No documentado en fuentes
UBICACIÓN: Mecanismo de la cerradura y resbalón en el maletero.
APLICACIÓN: Cierre asistido de portones traseros eléctricos.

**1. MISIÓN**
Tirar del resbalón de la cerradura mediante un cable Bowden para realizar el enclavamiento final del portón de forma silenciosa y sin dar portazos.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Al encajar el portón en posición de precierre, se accionan los microinterruptores de la cerradura. La UCE del portón alimenta el motor de cierre asistido, que tensiona un cable Bowden y desplaza el trinquete bajo el resbalón hasta la posición de cerrado definitivo.

**3. CARACTERÍSTICAS**
Motor eléctrico reductor, cable Bowden de tiro y unidad de cierre con dos microinterruptores interiores (Interruptor 1 e Interruptor 2).

**4. VALORES DE TRABAJO**
* Tensión de alimentación: 12 V.
* Señales de confirmación: Interruptores 1 y 2 informan de precierre y cierre total a la UCE de red de a bordo.

**5. ANOMALÍAS FRECUENTES**
Rotura o destensado del cable Bowden, agarrotamiento del electromotor o fallos de contacto en los microinterruptores.

**6. COMPORTAMIENTO EN AVERÍA**
El portón baja hasta el final pero no realiza el tramo de ajuste asistido, permaneciendo el aviso de maletero abierto en el Cuadro.

**7. CÓMO COMPROBARLO**
Verificar el cambio de estado de los microinterruptores 1 y 2 con polímetro o con el equipo de diagnosis al accionar manualmente el resbalón de la cerradura.

---

### NOTA DE ELEMENTO — SENSORES DE APERTURA DEL PORTÓN "EASY OPEN"
CÓDIGO: Sensor 1 y Sensor 2 para la apertura del portón
UBICACIÓN: Colocados horizontalmente bajo el revestimiento del paragolpes trasero.
APLICACIÓN: Sistema de apertura del portón trasero por gesto del pie (Easy Open).

**1. MISIÓN**
Detectar el movimiento pendular del pie del usuario bajo el paragolpes trasero para ordenar la apertura automática del maletero sin contacto manual.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Son electrodos capacitivos que generan un campo magnético. Al pasar el pie por la zona del campo, varía la capacidad e intensidad de corriente, registrándose la solicitud en la UCE de apertura del portón.

**3. CARACTERÍSTICAS**
Sensores fleximétricos capacitivos dobles (Sensor 1 superior y Sensor 2 inferior).

**4. VALORES DE TRABAJO**
* Variación capacitiva: Modulación de corriente al paso de masa corporal.
* Distancia de validación de la llave: Menos de 1,5 metros respecto al portón.

**5. ANOMALÍAS FRECUENTES**
Acumulación de barro en la cara interior del paragolpes, interferencias por chorro de agua a presión o desconexión de conectores.

**6. COMPORTAMIENTO EN AVERÍA**
El gesto del pie no activa los intermitentes ni abre el portón, permaneciendo el maletero bloqueado.

**7. CÓMO COMPROBARLO**
Comprobar el cambio de capacidad de los sensores en los bloques de medición de la UCE de apertura al simular el movimiento pendular del pie.

---

### NOTA DE PROCESO — APERTURA, REGULACIÓN Y FUNCIÓN "EASY OPEN" DEL PORTÓN ELÉCTRICO / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Establece los modos de accionamiento, la memorización de la altura de apertura y el funcionamiento de la función manos libres Easy Open. Aplica al uso y ajuste en taller del portón trasero.

**2. FUNDAMENTO**
Control coordinado por la UCE del portón entre los sensores capacitivos, la consulta de llave por LIN/CAN-Bus con Keyless Access y la inversión de marcha de los motores al detectar un aumento de intensidad (antiaprisionamiento).

**3. CONDICIONES PREVIAS**
Para la función Easy Open: vehículo parado, borne 15 desconectado y llave autorizada a menos de 1,5 m del portón.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Modos de Apertura y Cierre:**
  1. Apertura exterior: accionar el mando a distancia o el pulsador de la manilla del portón.
  2. Apertura interior: accionar el pulsador de la consola central.
  3. Cierre: accionar el pulsador interior montado en el propio portón o los mandos anteriores.
* **Memorización de la Regulación de Apertura Máxima:**
  1. Colocar el portón manualmente en la altura deseada.
  2. Mantener presionado el pulsador de cierre del portón durante 3 segundos.
  3. Confirmación: suena un aviso acústico y parpadean los intermitentes.
* **Proceso de Apertura Manos Libres ("Easy Open"):**
  1. Situarse tras el maletero con la llave en el bolsillo (distancia < 1,5 m).
  2. Realizar un movimiento pendular de entrada y salida con el pie debajo del paragolpes trasero.
  3. Los sensores capacitivos 1 y 2 registran el movimiento y envían la señal a la UCE de apertura del portón.
  4. La UCE de apertura consulta por LIN-Bus a la UCE de acceso y arranque para verificar la llave.
  5. Validada la llave, parpadean los intermitentes y la 3.ª luz de freno, desbloqueándose la cerradura y activándose los motores de elevación.
* **Condiciones de Desactivación de Easy Open:**
  - Se desactiva automáticamente ante lluvia torrencial o lavado a presión (se reactiva a los 90 segundos de cesar la causa).
  - Se puede desactivar manualmente en el menú del Cuadro (Menú CAR / Ajustes / Cierre centralizado / Easy Open).
* **Función Antiaprisionamiento:**
  - Si se detecta un obstáculo cerrando: se frena el portón, suena el zumbador y se abre automáticamente unos 40 cm.
  - Si se detecta un obstáculo abriendo: el portón se frena de inmediato en esa posición.

📷 IMAGEN: Módulo de motores eléctricos con husillo y freno de muelle envolvente — Fuente: 5. Confort.pdf, pág. 109
📷 IMAGEN: Secuencia del gesto pendular con el pie para la función Easy Open — Fuente: 5. Confort.pdf, pág. 112
📷 IMAGEN: Pantalla del menú CAR para activar/desactivar la función Easy Open — Fuente: 5. Confort.pdf, pág. 111

**6. VALORES DE REFERENCIA**
| Parámetro / Condición | Valor y Especificación |
| :--- | :--- |
| Tiempo de pulsación para memorizar altura de apertura | 3 segundos (hasta confirmación acústica e intermitentes) |
| Retroceso por antiaprisionamiento en cierre | Apertura automática de aproximadamente 40 cm |
| Tiempo de reactivación tras lavado a presión | 90 segundos tras desaparecer la interferencia |
| Distancia de la llave al portón en Easy Open | Menor de 1,5 metros |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* El portón no sube hasta arriba: Se ha memorizado una altura baja por error; se soluciona empujándolo manualmente al tope superior y guardando la posición pulsando 3 s.
* Intentar usar Easy Open con remolque: En vehículos con gancho de remolque, la función Easy Open se deshabilita y la apertura solo se realiza desde la manilla.

**8. VERIFICACIÓN FINAL**
Verificar que el portón invierte el sentido al encontrar resistencia física y que el gesto del pie responde activando los intermitentes antes de iniciar la subida.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DIAGNOSIS EOBD DEL PORTÓN TRASERO ELÉCTRICO / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Describe las comprobaciones y ajustes mediante equipo de diagnosis conectado a la dirección **6D - Sistema electrónico de la puerta del maletero**. Aplica a la localización de averías y codificación del portón.

**2. FUNDAMENTO**
Comunicación por protocolo EOBD/CAN-Bus con la UCE del portón para memorización de topes en la EEPROM, lectura de sensores y test de componentes.

**3. CONDICIONES PREVIAS**
Equipo de diagnosis conectado al conector OBD2, contacto conectado (borne 15) y zona de recorrido del portón totalmente despejada.

**4. EQUIPO Y MATERIAL**
Equipo de diagnosis compatible con el grupo VAG (VAS / ODIS / VCDS).

**5. DESARROLLO**
1. Conectar la máquina de diagnosis y acceder a la dirección **6D - Sistema electrónico de la puerta del maletero**.
2. **Lectura de Memoria de Averías y Bloques de Medición:**
   - Seleccionar "Leer bloque de valores de medición" para verificar consumos de corriente de los motores, estado de los microinterruptores y señales de los sensores Hall.
3. **Ajuste Básico de la Electrónica del Portón Trasero:**
   - Seleccionar "6D - Ajuste básico".
   - Confirmar la ausencia de obstáculos en el área de movimiento.
   - Iniciar el ajuste: la UCE desplaza el portón a los límites de cierre y de apertura máxima con la función antiaprisionamiento desactivada para guardar los topes de posición.
4. **Diagnosis de Actuadores:**
   - Seleccionar "6D - Diagnosis de actuadores".
   - Ejecutar individualmente: 1-Abrir portón trasero, 2-Cerrar portón trasero, 3-Abrir gradualmente, 4-Cerrar gradualmente, 5-Zumbador de aviso.
5. **Codificación:**
   - Seleccionar "6D - Codificar la Unidad de Control" en caso de sustituir la UCE para configurar opciones como Easy Open o gancho de remolque.

📷 IMAGEN: Capturas del equipo de diagnosis en la dirección 6D — Fuente: 5. Confort.pdf, pág. 113

**6. VALORES DE REFERENCIA**
| Función de Diagnosis | Dirección EOBD / Parámetro |
| :--- | :--- |
| Módulo de diagnosis del portón | Dirección 6D (Electrónica del portón trasero) |
| Función antiaprisionamiento en Ajuste Básico | Desactivada totalmente durante la prueba de adaptación |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Tocar el portón durante el Ajuste Básico: Aborta el aprendizaje de topes y deja el sistema inoperativo en modo automático.
* No despejar el entorno en el Ajuste Básico: Riesgo de daños materiales al estar desactivada la función antiaprisionamiento durante la rutina.

**8. VERIFICACIÓN FINAL**
Verificar que no quedan códigos de avería registrados y que el portón realiza sus recorridos completos y automáticos desde todos los pulsadores.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — CONJUNTO Y UNIDAD DE CONTROL DEL GANCHO DE REMOLQUE ESCAMOTEABLE
CÓDIGO: No documentado en fuentes
UBICACIÓN: Mecanismo oculto tras el paragolpes trasero; conmutador y UCE montados en el maletero.
APLICACIÓN: Enganche para remolque escamoteable de accionamiento eléctrico.

**1. MISIÓN**
Ocultar el gancho de remolque tras el paragolpes cuando no se utiliza y liberar su cierre mediante un motor eléctrico para desplegarlo hacia la posición de trabajo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Al accionar el conmutador del maletero, la UCE de detección de remolque alimenta un motor eléctrico que retira el perno de bloqueo. Un sensor Hall mide la posición del eje del motor y un microinterruptor confirma la posición de enclavamiento. Al quedar bloqueado en posición de trabajo, la UCE activa la alimentación de la toma de corriente U10.

**3. CARACTERÍSTICAS**
Estructura metálica de enganche, motor eléctrico de desbloqueo, sensor Hall de eje, microinterruptor de posición y toma de corriente U10 de 13 contactos.

**4. VALORES DE TRABAJO**
* Conector eléctrico de remolque: Toma de corriente U10 de 13 contactos.
* Condiciones de activación del motor: Vehículo totalmente parado y portón del maletero abierto.

**5. ANOMALÍAS FRECUENTES**
Deformación por colisiones traseras, sulfatación en los terminales de la toma U10 o avería en el microinterruptor de posición.

**6. COMPORTAMIENTO EN AVERÍA**
El motor no libera el gancho al presionar el pulsador o la UCE no alimenta las luces del remolque al no recibir la señal de gancho bloqueado.

**7. CÓMO COMPROBARLO**
Comprobar el cambio de estado del microinterruptor y la señal del sensor Hall mediante el equipo de diagnosis en la UCE de detección de remolque.
Debido a diferencias en la estructura trasera de la carrocería, en la mayoría de casos requiere pedido a fábrica y no admite montaje posterior.

---

### NOTA DE PROCESO — DESPLIEGUE, BLOQUEO Y RECOGIDA DEL GANCHO DE REMOLQUE ESCAMOTEABLE / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**
Describe las operaciones para desplegar, enclavar manualmente y recoger el gancho de remolque escamoteable. Aplica al mantenimiento y uso del sistema de remolque.

**2. FUNDAMENTO**
Liberación eléctrica del trinquete mediante motor y sensor Hall, guiado y enclavamiento mecánico manual por parte del usuario y activación automatizada de la toma de corriente U10.

**3. CONDICIONES PREVIAS**
Vehículo totalmente parado y portón del maletero abierto.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Procedimiento de Despliegue del Gancho:**
  1. Abrir el portón del maletero con el coche parado.
  2. Presionar el conmutador de desbloqueo situado en el tapizado lateral del maletero.
  3. La UCE de detección de remolque activa el motor eléctrico para liberar el cierre del gancho.
  4. Mover manualmente el gancho desenclavado hacia fuera hasta la posición de trabajo.
  5. Empujar manualmente hasta percibir el encastre mecánico rígido de bloqueo.
  6. El microinterruptor detecta la posición de bloqueo y la UCE activa la corriente en la toma U10 de 13 contactos.
* **Procedimiento de Plegado / Recogida del Gancho:**
  1. Desconectar la clavija del remolque de la toma U10.
  2. Presionar nuevamente el conmutador del maletero para activar el motor de desbloqueo.
  3. Mover manualmente el gancho hacia el interior, ocultándolo tras el protector del paragolpes.
  4. Empujar hasta que el microinterruptor confirme que ha quedado retenido en la posición de reposo.

📷 IMAGEN: Enganche escamoteable desplegado y pulsador de accionamiento en el maletero — Fuente: 5. Confort.pdf, pág. 114
📷 IMAGEN: Cuadro sinóptico de la UCE de detección de remolque y sus componentes — Fuente: 5. Confort.pdf, pág. 115

**6. VALORES DE REFERENCIA**
| Parámetro / Condición | Especificación Técnica |
| :--- | :--- |
| Conector eléctrico de remolque | Toma de corriente U10 de 13 contactos |
| Requisito para autorizar el desbloqueo | Vehículo completamente parado y portón trasero abierto |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Presionar el botón con el portón cerrado: El sistema no alimenta el motor de desbloqueo por seguridad.
* No llevar manualmente el gancho al tope final: La UCE no alimenta la piña de luces U10 al no cerrarse el microinterruptor de posición.

**8. VERIFICACIÓN FINAL**
Comprobar que la toma de corriente U10 recibe tensión tras el bloqueo en posición de trabajo y que el gancho queda firmemente sujeto sin holguras.

**9. SEGURIDAD Y NORMATIVA**
No admite montaje posterior como reforma si la estructura del bastidor trasero difiere de origen.

---

COBERTURA: documento «5. Confort.pdf», páginas 96 a 115 de 115. [completo]

---

💡 ¿Deseas que revisemos algún otro aspecto concreto de los sistemas de confort o que elaboremos alguna guía de comprobación eléctrica específica para la clase?