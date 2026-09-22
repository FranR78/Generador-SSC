### NOTA DE ELEMENTO — UNIDAD DE CONTROL DE LA RED DE A BORDO
CÓDIGO: J519  
UBICACIÓN: Montada bajo el salpicadero, en la zona de la red de a bordo.  
APLICACIÓN: Gestión centralizada de las funciones del sistema de confort en SEAT Ibiza y Arona.

**1. MISIÓN**  
Actuar como unidad de control maestra del LIN-Bus puertas, LIN-Bus alarma y LIN-Bus bocina de alarma para coordinar y autorizar todas las funciones del sistema de confort del vehículo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Centralita electrónica conectada a la red CAN-Bus. Recibe información de los conmutadores del habitáculo y de otras unidades de control (ABS, Airbag, Cuadro de instrumentos) y autoriza la ejecución de acciones a las unidades esclavas conectadas a las distintas líneas LIN-Bus.

**3. CARACTERÍSTICAS**  
Unidad electrónica de control maestra con pasarela e interconexión a CAN-Bus Confort y maestra de buses LIN independientes.

**4. VALORES DE TRABAJO**  
Tensión de alimentación nominal de 12 V procedente de batería / línea 30 y línea 15.

**5. ANOMALÍAS FRECUENTES**  
Interrupción de la comunicación en los buses LIN o fallos en los relés de alimentación internos.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad de las funciones centralizadas de confort (cierre centralizado, activación de la alarma, regulación central de elevalunas) y conmutación a función de emergencia en elevalunas de puertas.

**7. CÓMO COMPROBARLO**  
Comprobar las tensiones de alimentación (+12 V en bornes de entrada), masas y diagnosticar el estado del bus de datos y tramas LIN-Bus mediante la máquina de diagnosis y osciloscopio.

---

### NOTA DE PROCESO — GESTIÓN DEL CIERRE CENTRALIZADO Y BLOQUEO SAFE / FUNDAMENTO

**1. OBJETO Y ALCANCE**  
Explica la lógica de control, condicionantes de seguridad, avisos y estrategias de desbloqueo automático del cierre centralizado ejecutadas por la UCE J519. Aplica al sistema de confort.

**2. FUNDAMENTO**  
La UCE de la red de a bordo J519 gobierna las unidades de cierre de las puertas (VX21 a VX24) y del portón trasero (VX25) procesando órdenes del mando a distancia, de la cerradura mecánica o del sistema de autorización de acceso J518, e interactuando con la red CAN-Bus.

**3. CONDICIONES PREVIAS**  
Llaves adaptadas correctamente en el inmovilizador y conmutadores de posición de puerta/capó operativos.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
* **Bloqueo simple o SAFE:** Se realiza al recibir la orden desde el mando a distancia, la cerradura de la puerta o la UCE de autorización de acceso y arranque J518.
* **Bloqueo por velocidad:** Se ejecuta automáticamente al superar una velocidad de **15 km/h**. La señal es transmitida por CAN-Bus desde la UCE del ABS J104.
* **Bloqueo automático de reatrado:** Se activa si transcurren **45 segundos** desde el desbloqueo por mando sin que se haya abierto ninguna puerta.
* **Desbloqueo por borne S:** Se realiza de forma automática al extraer la llave del conmutador de encendido.
* **Desbloqueo por activación del airbag:** Se activa inmediatamente al recibir la señal de colisión transmitida por CAN-Bus desde la UCE del airbag J234.
* **Desbloqueo del portón:** Mediante el accionamiento del conmutador E165.
* **Avisos de confirmación:** La UCE J519 hace dar **1 destello** a los intermitentes al bloquear el vehículo y **2 destellos** al desbloquearlo.

📷 IMAGEN: Esquema funcional de la red de unidades de cierre y señales de control del cierre centralizado — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 40

**6. VALORES DE REFERENCIA**  
| Función del Cierre Centralizado | Condición / Parámetro de Activación | Reacción del Sistema |
| :--- | :--- | :--- |
| **Bloqueo por velocidad** | Velocidad v > 15 km/h (transmitido por UCE ABS J104) | Bloqueo automático de todas las cerraduras |
| **Rebloqueo automático** | Tiempo t = 45 s sin abrir ninguna puerta tras desbloquear | Bloqueo automático del cierre centralizado |
| **Avisos por intermitentes** | Orden de bloqueo / Orden de desbloqueo | 1 destello al bloquear / 2 destellos al desbloquear |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
* Interpretar como avería que el vehículo se vuelva a cerrar solo a los 45 segundos de haberlo abierto con el mando; es la función de rebloqueo automático por no haber abierto ninguna puerta.

**8. VERIFICACIÓN FINAL**  
Comprobar el bloqueo automático al superar 15 km/h en prueba de rodaje y verificar los destellos de confirmación de los intermitentes.

**9. SEGURIDAD Y NORMATIVA**  
Desbloqueo automático de emergencia obligado por normativa de seguridad en caso de impacto coordinado por la UCE de Airbag J234.

---

### NOTA DE ELEMENTO — UNIDADES DE CONTROL DE LAS PUERTAS
CÓDIGO: J386 (Conductor) / J387 (Acompañante) / J388 (Trasera Izquierda) / J389 (Trasera Derecha)  
UBICACIÓN: Montadas en el panel interior de cada una de las puertas.  
APLICACIÓN: Control local de elevalunas, cierres, retrovisores e iluminación ambiental.

**1. MISIÓN**  
Gestionar los actuadores locales de cada puerta e informar a la UCE de la red de a bordo J519 del estado de los conmutadores a través del LIN-Bus puertas.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Módulos electrónicos esclavos. Leen la posición de los conmutadores locales y alimentan los motores de elevalunas, cierres y retrovisores una vez recibida la autorización de la UCE maestra J519.

**3. CARACTERÍSTICAS**  
Existen 2 versiones de equipamiento:
* **Versión "Min":** Gestionan luces de localización de mandos y elevalunas estándar.
* **Versión "Max":** Suman las funciones de bloqueo de elevalunas traseros, plegado eléctrico de retrovisores e iluminación ambiental de puertas.

**4. VALORES DE TRABAJO**  
Tensión de servicio de 12 V; comunicación por bus de datos LIN.

**5. ANOMALÍAS FRECUENTES**  
Corte de cables o cortocircuitos en el mazo pasacables articulado de la puerta.

**6. COMPORTAMIENTO EN AVERÍA**  
Si se interrumpe la línea LIN-Bus, la unidad de control de la puerta entra en *Función de emergencia*, permitiendo accionar el elevalunas únicamente desde el pulsador de su propia puerta.

**7. CÓMO COMPROBARLO**  
Verificar la llegada de +12 V y masa al conector de la puerta y comprobar la señal del LIN-Bus con un osciloscopio o máquina de diagnosis.

---

### NOTA DE PROCESO — SISTEMA DE ELEVALUNAS ELÉCTRICOS Y NORMALIZACIÓN / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**  
Describe el procedimiento de calibración de topes (normalización), protección antiaprisionamiento y funciones de confort de los elevalunas eléctricos.

**2. FUNDAMENTO**  
Las UCEs de puerta calculan la posición del cristal y la fuerza del motor. La normalización es el paso previo obligatorio para memorizar los límites superior e inferior, habilitando la subida automática, el antiaprisionamiento y el confort.

**3. CONDICIONES PREVIAS**  
Contacto encendido (+15) y cristal correctamente guiado en sus marcos.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
1. **Subida y bajada estándar:** La UCE J519 consulta el estado de los pulsadores a las UCEs de puerta y autoriza el movimiento del motor.
2. **Procedimiento de Normalización de topes:**
   * Subir manualmente el cristal manteniendo el pulsador accionado hasta llegar al tope mecánico superior.
   * Liberar el pulsador una vez arriba.
   * Volver a accionar y **mantener presionado el pulsador en posición de subida durante unos segundos**.
   * Efectuar a continuación una bajada automática completa para validar el aprendizaje.
3. **Apertura y cierre de confort:** Permite subir o bajar todos los cristales desde la cerradura, mando a distancia o manilla de acceso sin llave (exige normalización previa).
4. **Antiaprisionamiento:** Invierte la marcha del cristal si detecta un obstáculo durante la subida (exige normalización previa).
5. **Bloqueo de elevalunas traseros:** Se activa desde el mando de la puerta del conductor (el pulsador se ilumina en amarillo); anula los mandos traseros.
6. **Protección térmica:** Las UCEs de puerta calculan la temperatura del motor eléctrico e inmovilizan el elevalunas hasta que se enfría.
7. **Función de emergencia:** En caso de avería en la línea LIN-Bus, el cristal solo puede accionarse desde el pulsador de su propia puerta.

📷 IMAGEN: Esquema de la red de elevalunas eléctricos y comunicación LIN-Bus — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 42

**6. VALORES DE REFERENCIA**  
| Función de Elevalunas | Condición / Requisito | Resultado del Procedimiento |
| :--- | :--- | :--- |
| **Normalización de topes** | Subir a tope superior + mantener pulsador en subida unos segundos + bajada automática | Memorización de límites; habilita confort y antiaprisionamiento |
| **Bloqueo traseros** | Pulsador en puerta de conductor activado | Testigo amarillo encendido; pulsadores traseros inhabilitados |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
* Intentar reparar el antiaprisionamiento tras desconectar la batería; la causa del fallo es únicamente la pérdida de la normalización de topes.

**8. VERIFICACIÓN FINAL**
Verificar la inversión del sentido de marcha del cristal al colocar un objeto blando en el marco superior durante la subida automática.

**9. SEGURIDAD Y NORMATIVA**
Función antiaprisionamiento de cumplimiento obligatorio para evitar lesiones por atrapamiento.

---

### NOTA DE ELEMENTO — SENSOR DE VIGILANCIA DEL HABITÁCULO Y REMOLCADO
CÓDIGO: G273 / G578  
UBICACIÓN: Montado en el plafón del techo interior del vehículo.  
APLICACIÓN: Sistema de alarma antirrobo en SEAT Ibiza y Arona.

**1. MISIÓN**  
Detectar la intrusión de objetos o personas en el habitáculo e identificar variaciones de inclinación en la carrocería para prevenir el remolcado no autorizado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor combinado. Utiliza ultrasonidos para la vigilancia volumétrica del habitáculo e incorpora un sensor capacitivo que actúa como acelerómetro para medir la inclinación en la función de protección contra remolcado.

**3. CARACTERÍSTICAS**  
Módulo electrónico de detección ultrasónica y capacitiva conectado a la UCE de la red de a bordo J519.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Falsos disparos provocados por corrientes de aire si se dejan las ventanillas entreabiertas o por objetos sueltos dentro del vehículo.

**6. COMPORTAMIENTO EN AVERÍA**  
Incapacidad para activar la alarma por intrusión o disparos intempestivos de los intermitentes y de la bocina H12.

**7. CÓMO COMPROBARLO**  
Consultar el estado del sensor mediante la máquina de diagnosis en la UCE J519 e introducir la mano por una ventanilla abierta estando la alarma conectada para verificar el disparo.

---

### NOTA DE PROCESO — GESTIÓN DE LA ALARMA ANTIRROBO Y BÚSQUEDA DE DISPAROS / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**  
Explica el funcionamiento, componentes supervisados y procedimiento de consulta de los orígenes de disparo de la alarma antirrobo.

**2. FUNDAMENTO**  
La UCE J519 monitoriza el sensor G273, los conmutadores de puertas, maletero y capó (F387) y la línea LIN-Bus de la bocina H8/H12. Ante una intrusión, activa la señalización acústica y luminosa.

**3. CONDICIONES PREVIAS**  
Alarma antirrobo conectada mediante el mando a distancia o la cerradura.

**4. EQUIPO Y MATERIAL**  
Equipo de diagnosis conectado al puerto de diagnóstico J533.

**5. DESARROLLO**  
* **Ámbitos de vigilancia del sistema:**
  1. Vigilancia volumétrica del habitáculo (por ultrasonidos con el sensor G273).
  2. Protección contra remolcado (por acelerómetro capacitivo con el sensor G273).
  3. Vigilancia de apertura de puertas, maletero y capó mediante los conmutadores de contacto.
  4. Vigilancia de la bocina H12 mediante mensajes de verificación periódicos a través de la línea LIN-Bus bocina de alarma.
* **Respuesta en caso de disparo:** La UCE J519 activa la bocina de alarma e ilumina los intermitentes delanteros (M5/M7), traseros (M6/M8) y de los retrovisores (L131/L132).

📷 IMAGEN: Esquema de conexiones de la alarma antirrobo, sensor G578/G273 y bocina H8 por LIN-Bus — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 44

**6. VALORES DE REFERENCIA**  
| Elemento Supervisado | Canal / Línea de Comunicación | Acción ante Intrusión o Avería |
| :--- | :--- | :--- |
| **Sensor habitáculo/remolcado G273** | Entrada electrónica a UCE J519 | Disparo por ultrasonidos o cambio de inclinación |
| **Bocina de alarma H12 / H8** | LIN-Bus bocina de alarma | Comprobación periódica por mensajes LIN; disparo acústico |
| **Conmutador capó F387 / puertas** | Conmutador de contacto a masa | Disparo directo por apertura de circuito |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
* Sustituir la bocina H12 al pensar que está averiada cuando la causa real es la interrupción de la línea de datos LIN-Bus de la alarma.

**8. VERIFICACIÓN FINAL**  
Interrogar la memoria de la UCE J519 con la máquina de diagnosis para leer el histórico con las últimas causas de disparo registradas.

**9. SEGURIDAD Y NORMATIVA**  
Directiva europea sobre dispositivos de protección contra el uso no autorizado de vehículos.

---

### NOTA DE PROCESO — CONTROL Y REGULACIÓN DE RETROVISORES EXTERIORES / FUNDAMENTO

**1. OBJETO Y ALCANCE**  
Describe las diferencias de control, calefacción, regulación y abatimiento de los espejos retrovisores exteriores según la versión de las UCEs de puerta.

**2. FUNDAMENTO**  
La calefacción del cristal se activa en paralelo con la luneta térmica. La regulación y el plegado dependen de si el vehículo equipa unidades de control de puerta en versión "Min" o "Max".

**3. CONDICIONES PREVIAS**  
Contacto encendido (+15) o luneta térmica accionada.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
* **Calefacción de espejos:** Se conecta de forma conjunta con la luneta térmica Z1 y es alimentada directamente por la UCE de la red de a bordo J519 mediante positivo y masa.
* **Regulación eléctrica:**
  * **Con UCEs de puerta versión "Min":** Los motores de regulación de los espejos se alimentan directamente desde el conmutador de regulación E43.
  * **Con UCEs de puerta versión "Max":** Los motores de regulación son alimentados y gestionados electrónicamente por las unidades de control de las puertas delanteras J386 y J387.
* **Plegado eléctrico:** Disponible únicamente si el vehículo equipa la versión "Max" de las unidades de control de las puertas.

📷 IMAGEN: Esquema eléctrico de retrovisores exteriores VX4/VX5, conmutador E43 y UCEs J386/J387 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 45

**6. VALORES DE REFERENCIA**  
| Función del Retrovisor | Versión UCE de Puertas | Alimentación / Gobierno del Sistema |
| :--- | :--- | :--- |
| **Calefacción de espejo** | Versiones "Min" y "Max" | Alimentación desde UCE J519 junto con luneta Z1 |
| **Regulación eléctrica** | Versión "Min" | Alimentación directa desde conmutador E43 |
| **Regulación eléctrica** | Versión "Max" | Gobernado por UCEs de puerta J386 / J387 |
| **Plegado eléctrico** | Versión "Max" | Función exclusiva de la versión "Max" |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
* Intentar codificar el plegado automático en un vehículo con UCEs de puerta "Min"; requiere la sustitución de las UCEs de puerta por la versión "Max".

**8. VERIFICACIÓN FINAL**  
Verificar el calentamiento de los cristales de los retrovisores al conectar el mando de la luneta térmica.

**9. SEGURIDAD Y NORMATIVA**  
Reglamento de homologación de retrovisores para visibilidad posterior.

---

### NOTA DE PROCESO — CONFIGURACIÓN DE PARÁMETROS DE CONFORT EN INFOTENIMIENTO / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**  
Explica el procedimiento de personalización de las funciones de la UCE J519 desde el menú del equipo de infotenimiento (EASY CONNECT / modo Vehículo).

**2. FUNDAMENTO**  
La pantalla táctil permite al usuario ajustar parámetros de confort que la unidad de infotenimiento transmite vía CAN-Bus hacia la UCE de la red de a bordo J519.

**3. CONDICIONES PREVIAS**  
Encendido conectado y vehículo detenido.

**4. EQUIPO Y MATERIAL**  
Sistema de infotenimiento Easy Connect.

**5. DESARROLLO**  
1. Entrar en la pantalla de infotenimiento, seleccionar el modo *Vehículo* y acceder a *Ajustes del vehículo (Vehicle settings)*.
2. **Menú Luces:** Configurar la luz de autopista, luz de lluvia automática, intermitentes de confort y ajustar los tiempos de las funciones Coming Home y Leaving Home (**10 segundos** de selección estándar).
3. **Menú Iluminación interior:** Ajustar la intensidad de la luz ambiental por zonas y seleccionar el color de la iluminación de las puertas.
4. **Menú Retrovisores y limpiaparabrisas:** Activar/desactivar el plegado al aparcar, limpiado automático con lluvia y barrido del limpialuneta al insertar la marcha atrás.
5. **Menú Apertura y cierre:**
   * Apertura de confort de elevalunas: Configurable en tres modos (*Todas las puertas*, *Puerta del conductor* o *Desactivado*).
   * Desbloqueo de puertas: Configurable en tres modos (*Todas las puertas*, *Sólo la puerta del conductor* o *Lado del vehículo*).
   * Activar o desactivar el bloqueo automático por velocidad.

📷 IMAGEN: Pantallas del menú de ajustes del modo Vehículo para luces, retrovisores y cierre — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 46-47

**6. VALORES DE REFERENCIA**  
| Menú de Configuración | Opciones Seleccionables en Pantalla |
| :--- | :--- |
| **Tiempos Coming/Leaving Home** | Selección de tiempo (ejemplo en pantalla: 10 s) |
| **Apertura de confort elevalunas** | Modos: Todas las puertas / Puerta del conductor / Desactivado |
| **Desbloqueo de puertas** | Modos: Todas las puertas / Sólo puerta del conductor / Lado del vehículo |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
* Reclamar que no se abren las puertas traseras con el mando a distancia; se debe a una configuración seleccionada en el menú "Apertura y cierre" (opción "Sólo puerta del conductor").

**8. VERIFICACIÓN FINAL**  
Comprobar que el comportamiento de las cerraduras o elevalunas se modifica al cambiar la opción en la pantalla del Easy Connect.

**9. SEGURIDAD Y NORMATIVA**  
No aplica.

---

### NOTA DE ELEMENTO — CUADRO DE INSTRUMENTOS
CÓDIGO: J285  
UBICACIÓN: En el salpicadero, frente al volante.  
APLICACIÓN: Cuadro de instrumentos en SEAT Ibiza y Arona.

**1. MISIÓN**  
Mostrar la velocidad, revoluciones y estado del vehículo al conductor, y actuar como unidad de control maestra del sistema de inmovilizador electrónico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad electrónica de control y visualización. Recibe datos por CAN-Bus Confort para representarlos en pantalla y ejecuta los algoritmos de seguridad del inmovilizador 5C.

**3. CARACTERÍSTICAS**  
Disponible en 2 versiones:
* **Versión Basic:** Pantalla central mediante display de segmentos.
* **Versión Mid:** Pantalla central TFT en color blanco.  
Monta un botón inferior de ajuste y visualización multifunción.

**4. VALORES DE TRABAJO**  
* **Funciones según el tiempo de pulsación del botón de ajuste:**
  * *Accionamiento e inmediato corte:* Reinicia el contador de kilometraje parcial (trip).
  * *Pulsación durante 3 segundos:* Accede al menú de ajuste de la hora.
  * *Pulsación durante 5 segundos:* Muestra en pantalla el tiempo y kilometraje restante hasta el siguiente servicio de mantenimiento.
  * *Pulsación durante 15 segundos:* Visualiza en la pantalla las letras distintivas del motor (ejemplo: CHZJ). Para salir hay que desconectar el contacto.

**5. ANOMALÍAS FRECUENTES**  
Fallo en la pantalla central o avería en el chip de memoria del inmovilizador.

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de arrancar el motor (el inmovilizador bloquea la UCE del motor J623) o apagado del cuadro de instrumentos.

**7. CÓMO COMPROBARLO**  
Efectuar el test de actuadores y consultar los bloques de medición de la dirección 17 (Cuadro de instrumentos) con el equipo de diagnosis.

---

### NOTA DE PROCESO — GESTIÓN Y DIAGNÓSTICO DEL INMOVILIZADOR 5C / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**  
Explica la arquitectura, unidades maestras/esclavas y procedimiento de lectura de valores de medición del inmovilizador 5C.

**2. FUNDAMENTO**  
El inmovilizador 5C equipa un nuevo transponder en las llaves y medidas de seguridad reforzadas. El cuadro J285 actúa como unidad maestra y valida los códigos de las unidades esclavas.

**3. CONDICIONES PREVIAS**  
Contacto encendido (+15) y máquina de diagnosis conectada.

**4. EQUIPO Y MATERIAL**  
Equipo de diagnosis con acceso a dirección 17 (Cuadro de instrumentos) y conexión online a servidor FAZIT/Geko.

**5. DESARROLLO**  
* **Componentes del inmovilizador 5C:**
  * **Unidad de control maestra:** Cuadro de instrumentos J285.
  * **Unidades de control esclavas:** UCE del motor J623, UCE mecatrónica del cambio DSG J743 y actuador de bloqueo de la columna N360.
  * **Elementos de lectura:** Transponder de la llave y bobina lectora D2 (o sistema J518).
* **Consulta de Valores de Medición (Dirección 17):**
  1. **Estado de la unidad maestra:** Código hexadecimal de 20 cifras:
     * *Dígitos 1-2:* Estado del inmovilizador (**1:** virgen, **2:** adaptado, **3:** adaptando llaves).
     * *Dígitos 3-4:* Contador de nuevas identidades.
     * *Dígitos 9-10:* Número de llaves adaptadas.
     * *Dígitos 13-14:* Tiempo restante para conectar borne 15 tras un bloqueo.
     * *Dígitos 15-16:* Tiempo de bloqueo para descarga en FAZIT.
     * *Dígitos 17-18:* Tiempo de bloqueo en minutos para realizar el acceso a Geko.
  2. **Estado de los esclavos:** Código hexadecimal de 2 cifras (convertible a código binario de 8 cifras) para verificar si la unidad esclava está codificada, adaptada, si responde o si tiene contraseña/firma digital válida.

📷 IMAGEN: Esquema de componentes y red de comunicación del inmovilizador 5C — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 50

**6. VALORES DE REFERENCIA**  
| Código de Medición (Dir. 17) | Posición de Dígitos | Significado de la Información |
| :--- | :--- | :--- |
| **Estado Maestra (Hex 20 cifras)** | Dígitos 1-2 | 1: virgen / 2: adaptado / 3: adaptando llaves |
| **Estado Maestra (Hex 20 cifras)** | Dígitos 9-10 | Número de llaves adaptadas en el sistema |
| **Estado Maestra (Hex 20 cifras)** | Dígitos 17-18 | Tiempo de bloqueo en minutos para acceso a Geko |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
* Intentar adaptar unidades esclavas usadas de la generación 5A previa; la generación 5C utiliza una firma digital incompatible.

**8. VERIFICACIÓN FINAL**  
Confirmar que el motor arranca sin pararse a los 2 segundos y la ausencia de códigos de avería de inmovilizador en J285 y J623.

**9. SEGURIDAD Y NORMATIVA**  
Protección antirrobo del vehículo conforme a normativa europea de homologación.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL Y MOTOR DEL TECHO CORREDIZO
CÓDIGO: J245 (Unidad de control) / V1 (Motor del techo)  
UBICACIÓN: Montados en la parte trasera de la estructura del techo panorámico.  
APLICACIÓN: Techo panorámico deflector y corredizo en SEAT Ibiza.

**1. MISIÓN**  
La UCE J245 gestiona el movimiento del techo panorámico procesando órdenes del conmutador E8 y de la UCE J519. El motor V1 ejecuta la fuerza mecánica de accionamiento.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
J245 y V1 son componentes independientes unidos por cableado convencional. El motor V1 integra 2 sensores Hall decalados entre sí enfocados al eje del motor eléctrico; la UCE J245 evalúa las señales de los sensores Hall para reconocer la posición exacta y el sentido de giro del techo.

**3. CARACTERÍSTICAS**  
UCE J245 conectada al CAN-Bus Confort; motor eléctrico V1 con doble sensor Hall interno.

**4. VALORES DE TRABAJO**  
Alimentación de sensores y motor gestionada por la UCE J245.

**5. ANOMALÍAS FRECUENTES**  
Descalibración de los sensores Hall por resistencias mecánicas o suciedad en las guías.

**6. COMPORTAMIENTO EN AVERÍA**  
El techo panorámico no responde al conmutador o invierte la marcha por falso disparo del antiaprisionamiento.

**7. CÓMO COMPROBARLO**  
Comprobar con osciloscopio la señal de los dos sensores Hall durante el giro del motor V1 y verificar la presencia de J245 en el CAN-Bus Confort con el equipo de diagnosis.

---

### NOTA DE PROCESO — FUNCIONALIDADES Y NORMALIZACIÓN DEL TECHO PANORÁMICO / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**  
Explica el procedimiento de normalización, apertura de confort y la estrategia de reintento del antiaprisionamiento del techo panorámico.

**2. FUNDAMENTO**  
La UCE J245 exige memorizar los topes de cierre mediante el proceso de normalización para habilitar el antiaprisionamiento y la apertura/cierre de confort.

**3. CONDICIONES PREVIAS**  
Contacto encendido (+15) y guías del techo libres de obstrucciones.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
1. **Apertura y cierre manual:** Se efectúa desde el conmutador E8.
2. **Procedimiento de Normalización:**
   * Cerrar por completo el techo panorámico accionando E8.
   * Soltar el conmutador E8 y volver a **mantenerlo accionado en posición de cierre**. La UCE memoriza el tope de cierre.
   * La normalización debe estar activa para habilitar el confort y el antiaprisionamiento.
3. **Apertura y cierre de confort:** Ejecutado por la UCE J245 al recibir la señal enviada por la UCE J519 vía CAN-Bus, actuando conjuntamente con los elevalunas.
4. **Antiaprisionamiento:** Si detecta un obstáculo al cerrar, invierte la marcha e inicie la apertura inmediata.
5. **Estrategia de reintento forzado:** Si tras activarse el antiaprisionamiento se vuelve a accionar el cierre en los **siguientes 5 segundos**, el techo se cierra **sin la función antiaprisionamiento** para superar resistencias duras (ejemplo: presencia de hielo en las guías).

📷 IMAGEN: Esquema del circuito eléctrico del techo corredizo J245, motor V1 y conmutador E8 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 52-53

**6. VALORES DE REFERENCIA**  
| Función del Techo Panorámico | Condición de Ejecución / Tiempo | Comportamiento del Sistema |
| :--- | :--- | :--- |
| **Normalización** | Techo cerrado + mantener conmutador E8 en posición de cierre | Memorización de topes; habilita confort y antiaprisionamiento |
| **Reintento sin antiaprisionamiento** | Accionar el cierre en los **siguientes 5 s** tras un salto | Cierre forzado del techo sin función antiaprisionamiento |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
* Intentar cerrar un techo helado y que se abra solo por antiaprisionamiento; para forzar el cierre hay que accionar el conmutador antes de transcurridos 5 segundos.

**8. VERIFICACIÓN FINAL**  
Verificar el cierre y apertura automática del techo al mantener pulsado el mando a distancia del vehículo.

**9. SEGURIDAD Y NORMATIVA**  
Sistema de protección antiaprisionamiento para prevención de atrapamientos.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA DETECCIÓN DEL REMOLQUE
CÓDIGO: J345  
UBICACIÓN: Montada en la zona posterior/maletero del vehículo.  
APLICACIÓN: Vehículos equipados con enganche de remolque.

**1. MISIÓN**  
Detectar la conexión eléctrica de un remolque en la toma U10 e informar vía CAN-Bus al resto de UCEs del vehículo para adaptar sus funciones.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad electrónica de red. Registra el consumo eléctrico de la piña de luces en la toma U10 y transmite el estado por CAN-Bus Confort hacia la pasarela J533 para adaptar el comportamiento de los sistemas de seguridad y confort.

**3. CARACTERÍSTICAS**  
Centralita de control conectada al CAN-Bus Confort y a la toma de corriente de remolque U10.

**4. VALORES DE TRABAJO**  
* **Adaptaciones coordinadas vía CAN-Bus al acoplar un remolque:**
  * *UCE Red de a bordo J519:* Desactiva las luces antiniebla traseras del coche, activa las del remolque y detecta el fundido de sus lámparas.
  * *UCE del ABS J104:* Activa la función de Estabilización del Remolque (TSA).
  * *UCE del Motor J623:* Modifica los parámetros de inyección/par para compensar el aumento de masa arrastrada.
  * *UCE de Ayuda al aparcamiento J446:* Desactiva los sensores de aparcamiento traseros.
  * *UCEs de Ángulo muerto J1086 / J1087:* Se desactivan automáticamente.

**5. ANOMALÍAS FRECUENTES**  
Falso contacto o sulfatación por sulfito en los pines de la toma U10.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de detección del remolque (no se activa la función TSA en el ABS ni se desconectan los sensores traseros) o aviso falso de bombilla fundida.

**7. CÓMO COMPROBARLO**  
Conectar la piña de prueba en la toma U10 y verificar en los bloques de datos de J345 y J519 el parámetro "Remolque detectado: SÍ", comprobando la desactivación del radar de marcha atrás J446.

---

COBERTURA: documento «SSP 168 SISTEMA ELÉCTRICO Confort.pdf», páginas 38 a 54 de 54. [completo]

---

💡 ¿Deseas que adaptemos este conjunto de notas técnicas en una guía de localización de averías en redes LIN-Bus o en un cuestionario de comprobación de inmovilizadores 5C para el taller?