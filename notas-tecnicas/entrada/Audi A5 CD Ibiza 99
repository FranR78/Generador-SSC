### NOTA DE PROCESO — AUTODIAGNÓSTICO DE LA CALEFACCIÓN INDEPENDIENTE / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**  
Establecer el procedimiento de consulta, análisis y borrado de la memoria de averías del sistema de calefacción independiente [1, 2]. Se aplica en las labores de mantenimiento preventivo y localización de fallos eléctricos o mecánicos en el módulo del calefactor [3, 4].

**2. FUNDAMENTO**  
La unidad de control monitoriza de forma continua el estado de sensores y actuadores [3]. Si una perturbación o señal fuera de rango se mantiene durante un tiempo determinado, se registra como avería estática; si desaparece, conmuta a avería esporádica (/SP) y termina borrándose automáticamente tras un período prefijado sin reproducirse [4, 5]. La memoria es de tipo no volátil, manteniendo el registro aunque se interrumpa la alimentación eléctrica [6].

**3. CONDICIONES PREVIAS**  
- Tensión de alimentación de la batería de servicio correcta [7].  
- Fusibles del sistema de calefacción independiente comprobados y en buen estado [7].  
- Conexión del encendido ("borne 15 ON") para iniciar la comunicación con la interfaz de diagnosis para bus de datos -J533- [8, 9].

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis homologado (VAS 5051, VAS 5052 o equivalente) [1, 3].  
- Cable de diagnóstico con conector de 16 polos -VAS 5051/5A- [7].

**5. DESARROLLO**  
* **Síntomas de avería:** El calefactor no arranca, se interrumpe la combustión tras el ciclo de inicio, emite humo denso o no genera rendimiento térmico en el habitáculo [10, 11].  
* **Causas probables:** Fallo en los componentes de encendido (bujía -Q9-), falta de llama (guardallamas -G64-), sobretemperatura en sensores (-G18-, -G587-), defecto en bombas (-V54-, -V55-) o bloqueo activado por falta de combustible o señal de colisión [12-15].  
* **Procedimiento de comprobación e interpretación:**  
  1. Conectar el equipo de diagnosis al conector de 16 polos con el encendido desconectado [7].  
  2. Conectar el encendido y seleccionar el código de dirección "18 - Calefacción adicional/independiente" [8, 16].  
  3. Ejecutar la función "02 - Consultar la memoria de averías" [17, 18].  
  4. Analizar el código de avería, el componente afectado y las condiciones de entorno registradas (kilometraje, tensión, temperatura del motor) [18, 19].  
  5. Reparar la avería física detectada [20].  
  6. Seleccionar la función "05 - Borrar la memoria de averías" [17, 21]. En caso de bloqueo persistente, desbloquear previamente en el canal de adaptación "42" [20, 22, 23].

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| Tensión de alimentación ("borne 30") | > 11,5 V | Encendido conectado, motor parado [24] |
| Estado de la memoria | 0 averías detectadas | Tras la reparación y borrado [18, 25] |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar borrar la memoria de averías habiendo desconectado el encendido entre la consulta y el borrado (el sistema impide el borrado si se corta la comunicación) [25].  
- Ignorar que una señal de colisión bloquea inmediatamente la calefacción independiente sin inscribir una avería con texto explícito en el registro [15, 26].

**8. VERIFICACIÓN FINAL**  
Confirmar la indicación "Memoria de averías borrada" en la pantalla del equipo de diagnosis y realizar un ciclo de prueba de funcionamiento del calefactor [10, 25].

**9. SEGURIDAD Y NORMATIVA**  
Fijar el equipo de diagnosis con cinturón de seguridad si se realizan pruebas dinámicas en carretera, requiriéndose la presencia de un segundo operario [27, 28].

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA CALEFACCIÓN ADICIONAL
CÓDIGO: J364  
UBICACIÓN: Montada directamente sobre la carcasa del calefactor de la calefacción independiente [29, 30].  
APLICACIÓN: Gestión electrónica de la calefacción independiente y adicional en modelos Audi A5 Coupé 2008 [29, 31].

**1. MISIÓN**  
Procesar las señales de los sensores del calefactor y del bus de datos para gobernar los actuadores del sistema (bomba dosificadora, turbina de aire, bujía y bombas de agua) [2, 12, 32].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Módulo microprocesado que ejecuta las secuencias de arranque, regulación de potencia (plena carga/carga parcial), pausa de regulación y desconexión por inercia [32, 33]. Se comunica con el cuadro de instrumentos, la UCE del climatizador -J255- y la interfaz de diagnosis -J533- mediante la red CAN-Bus [8, 34, 35].

**3. CARACTERÍSTICAS**  
Carcasa estanca fijada al calefactor con conector principal de 14 polos hacia los componentes internos y conectores externos de 2 y 6 polos [36-39]. Existen versiones diferenciadas para motorizaciones de gasolina y diésel no intercambiables [40, 41].

**4. VALORES DE TRABAJO**  
- Tensión de alimentación: 12 V ("borne 30") [24, 39].  
- Umbral de desconexión por sobretemperatura en placa electrónica: 130 ºC [42].  
- Frecuencia de control de la bomba dosificadora: 0 a 8 Hz [43, 44].

**5. ANOMALÍAS FRECUENTES**  
- Bloqueo de funcionamiento tras 3 intentos fallidos de arranque consecutivos [45, 46].  
- Sobrecalentamiento de la placa electrónica por fallo en la circulación de agua [42].  
- Activación de la protección de componentes tras la sustitución del módulo [29, 47].

**6. COMPORTAMIENTO EN AVERÍA**  
El sistema se desconecta inmediatamente o entra en ciclo de post-marcha [48]. La UCE desactiva el funcionamiento y transmite la prohibición de arranque a la pantalla del MMI y al cuadro de instrumentos [49, 50].

**7. CÓMO COMPROBARLO**  
Comprobar alimentación de 12 V en conector de 2 polos [39]. Diagnosticar mediante equipo OBD la identificación de la versión en el grupo de indicación "012", la temperatura interna de la tarjeta en el grupo "023" y el código de bloqueo en el canal de adaptación "42" [14, 23, 42].

---

### NOTA DE PROCESO — DIAGNOSIS DE ACTUADORES EN LA CALEFACCIÓN INDEPENDIENTE / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**  
Describir la secuencia de activación individualizada e intermitente de los componentes eléctricos de la calefacción independiente [12, 51]. Se aplica para verificar el estado operativo mecánico y eléctrico de los actuadores sin necesidad de iniciar la combustión [51].

**2. FUNDAMENTO**  
La UCE -J364- excita secuencialmente cada salida eléctrica durante un tiempo determinado [51]. El técnico verifica mediante percepción acústica (chasquidos, zumbidos) o mediciones con pinza amperimétrica si el actuador responde a la señal eléctrica [12, 13].

**3. CONDICIONES PREVIAS**  
- Vehículo detenido o a velocidad inferior a 5 km/h [17, 51].  
- Encendido conectado y memoria de averías consultada y corregida previamente [33, 52].  
- Para activar la bomba dosificadora -V54-, el calefactor debe haber trabajado al menos una vez a plena carga desde la última diagnosis de actuadores [51].

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis (VAS 5051 / VAS 5052) [52].  
- Pinza amperimétrica de 50 A (-VAS 5051/9-) [12, 53].

**5. DESARROLLO**  
1. Conectar el equipo de diagnosis e iniciar la "Localización guiada de averías" [52].  
2. Seleccionar la función "03 - Diagnosis de actuadores" en el sistema de la calefacción independiente [17, 33].  
3. Iniciar la prueba y verificar la respuesta del primer componente:  
   - **Bomba de recirculación -V55-:** Se activa y desactiva a ritmo de 5 segundos (sonoridad audible) [12].  
   - **Turbina de aire de combustión -V6-:** Se activa y desactiva a ritmo de 5 segundos (sonoridad audible) [12].  
   - **Bujía de precalentamiento -Q9-:** Se activa durante 5 segundos (consumo térmico/eléctrico hasta 20 A en frío con pinza amperimétrica) [12].  
   - **Bomba dosificadora -V54-:** Emite impulsos audibles durante aproximadamente 10 segundos [54].  
   - **Bomba de preelevación de combustible -G6-:** Sonoridad de funcionamiento en el depósito audible [13].  
   - **Válvula de cierre para refrigerante -N279-:** Excitación intermitente a 0,5 Hz (sonoridad audible) [13].  
   - **Elemento calefactor de combustible -Z66-:** Consumo de corriente registrado hasta aprox. 20 A [13].  
4. Avanzar manualmente de componente pulsando la tecla de confirmación o finalizar la prueba [52, 55].

**6. VALORES DE REFERENCIA**  

| Actuador | Señal de excitación / Consumo | Criterio de verificación |
|---|---|---|
| Bomba de recirculación -V55- | Intermitencia a 5 s | Sonoridad de giro audible [12] |
| Bujía de precalentamiento -Q9- | Consumo hasta 20 A en frío | Medición con pinza amperimétrica [12] |
| Bomba dosificadora -V54- | Impulsos durante 10 s | Chasquido característico intermitente [54] |
| Válvula de cierre -N279- | Conmutación a 0,5 Hz | Clic audible de conmutación [13] |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar repetir el test de la bomba dosificadora -V54- seguidamente sin haber hecho funcionar el calefactor a plena carga (el sistema bloquea la reexcitación para evitar inyectar exceso de combustible en la cámara) [51].  
- No consultar la memoria de averías al finalizar la diagnosis de actuadores (los fallos detectados durante el test se memorizan al concluir) [51, 55].

**8. VERIFICACIÓN FINAL**  
Consultar la memoria de averías tras finalizar el test para confirmar la ausencia de registros provocados durante la prueba [55].

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### NOTA DE PROCESO — AJUSTE BÁSICO Y ADAPTACIÓN EN LA CALEFACCIÓN INDEPENDIENTE / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**  
Establecer las secuencias operativas para restituir las funciones de fábrica, sincronizar los mandos a distancia por radiofrecuencia, realizar el purgado/llenado de la tubería de combustible y desbloquear la UCE [17, 23, 56, 57].

**2. FUNDAMENTO**  
El ajuste básico fuerza a la UCE a ejecutar rutinas de calibración interna o arranques controlados fuera de la lógica habitual [56, 58]. La función de adaptación permite modificar parámetros almacenados en canales no volátiles de la memoria EEPROM para ajustar el comportamiento del sistema a requerimientos específicos [59, 60].

**3. CONDICIONES PREVIAS**  
- Encendido conectado y motor parado [61].  
- Ausencia de códigos de avería registrados en la memoria [61, 62].  
- Batería de servicio cargada y nivel de combustible en depósito por encima de la reserva [50, 63].

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis (VAS 5051 / VAS 5052) [61].

**5. DESARROLLO**  
* **Desbloqueo de la unidad de control (Canal 42):**  
  1. Acceder a la función "12 - Adaptación" [62].  
  2. Seleccionar el canal "42" [23].  
  3. Cambiar el valor de "0" a "1" y guardar en memoria [23]. El valor retorna automáticamente a "0" y el bloqueo queda anulado [23].  
* **Autoadaptación del mando a distancia R64 (Ajuste Básico 004):**  
  1. Acceder a "06 - Ajuste básico" e introducir el grupo "004" [17, 56].  
  2. En pantalla se muestra la indicación 'Autoadaptación' [56].  
  3. Mantener pulsada la tecla "OFF" del radiotelemando durante al menos 3 segundos [56, 64].  
  4. Verificar la indicación 'Autoadaptado' en el display [56].  
* **Llenado de la tubería de combustible (Ajuste Básico 066):**  
  1. En el canal de adaptación "30", introducir el tiempo deseado en segundos (ej. 30 s) [65, 66].  
  2. En el canal de adaptación "36", escribir el valor "1" para autorizar el proceso [23, 67].  
  3. Seleccionar "Ajuste básico", grupo "066" y pulsar 'Activar' [57, 68, 69]. La bomba dosificadora -V54- trabajará de forma continua a 8 Hz durante el tiempo programado [44, 69].

**6. VALORES DE REFERENCIA**  

| Función / Canal | Valor de ajuste | Resultado esperado |
|---|---|---|
| Canal de adaptación 03 | 0 o 1 | 0 = Funciona tras "borne 15 OFF"; 1 = Desconecta al parar motor [70] |
| Canal de adaptación 30 | 3 a 240 segundos | Tiempo programado para la bomba dosificadora -V54- [66, 71] |
| Canal de adaptación 36 | 1 | Anulación del bloqueo de primer llenado [23, 68] |
| Canal de adaptación 42 | 1 | Anulación del bloqueo de la UCE -J364- [23] |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Aparece "Función desconocida o no se puede ejecutar": El calefactor se encuentra en fase de ciclo de post-marcha, existe un nivel de combustible en reserva o persiste un fallo en memoria [58].  
- No reejecutar el llenado excesivas veces: inyectar combustible masivo en la cámara de combustión sin encendido genera emisiones de humo denso y fallos en arranques posteriores [11, 65].

**8. VERIFICACIÓN FINAL**  
Confirmar la indicación "Fin" o "Autoadaptado" en la pantalla del equipo de diagnosis y consultar la memoria de averías [56, 72, 73].

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### NOTA DE ELEMENTO — BUJÍA DE PRECALENTAMIENTO PARA CALEFACCIÓN
CÓDIGO: Q9  
UBICACIÓN: Montada en el suplemento del quemador, en la cámara de combustión del calefactor [12, 74].  
APLICACIÓN: Puesta en marcha y supervisión de la combustión en la calefacción independiente [12, 75].

**1. MISIÓN**  
Inflamar la mezcla de aire y combustible durante la fase de arranque y actuar como sensor de control de llama mediante la variación de su resistencia en caliente [12, 75].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Elemento de incandescencia eléctrico. Al recibir alimentación de la UCE, eleva rápidamente la temperatura de su espiga para vaporizar e inflamar el combustible. Tras estabilizarse la llama, se desactiva la potencia de caldeo y se mide la resistencia del filamento para confirmar la combustión [75].

**3. CARACTERÍSTICAS**  
Espiga de incandescencia metálica con cables de alimentación y conector de 2 polos [12, 76].  
📷 IMAGEN: Desmontaje de la bujía de precalentamiento Q9 y medición con polímetro — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 65

**4. VALORES DE TRABAJO**  
- Tensión nominal de trabajo: 8 V [75, 76].  
- Absorción de corriente inicial en frío: entre 9 y 20 A (con tensión de prueba de 9 V) [77].  
- Resistencia eléctrica nominal a 20 ºC: entre 0,42 Ω y 0,63 Ω [77].

**5. ANOMALÍAS FRECUENTES**  
Deposición de sedimentos de carbono/coquización por uso de combustible PME/RME o degradación del filamento incandescente [74, 78].

**6. COMPORTAMIENTO EN AVERÍA**  
El calefactor realiza un intento de arranque fallido, efectúa el barrido de la cámara con la turbina -V6- e intenta una re-comprobación; si no hay inflamación, se bloquea el sistema [45].

**7. CÓMO COMPROBARLO**  
Limpiar cuidadosamente la espiga con un cepillo de latón [76]. Medir la resistencia eléctrica entre los terminales con polímetro (valor nominal 0,42 a 0,63 Ω a 20 ºC) o verificar la corriente absorbida con una pinza amperimétrica durante el test de actuadores (entre 9 y 20 A) [12, 77].

---

### NOTA DE ELEMENTO — TURBINA DE AIRE DE COMBUSTIÓN
CÓDIGO: V6  
UBICACIÓN: Montada en la carcasa superior del calefactor de la calefacción independiente [79-81].  
APLICACIÓN: Suministro de aire comburente en la calefacción independiente [12, 32].

**1. MISIÓN**  
Aspirar aire del exterior e introducirlo en la cámara de combustión para lograr la mezcla estequiométrica con el combustible y barrer los gases quemados [32, 45].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Motor eléctrico accionado por corriente continua regulado por modulación de tensión desde la UCE -J364-. Ajusta su régimen de giro entre la fase de arranque, plena carga, carga parcial y ciclo de post-marcha de enfriamiento [32, 75, 82, 83].

**3. CARACTERÍSTICAS**  
Soplante centrífugo integrado con carcasa de cierre y conexión eléctrica al conector de 14 polos [80, 81, 84].

**4. VALORES DE TRABAJO**  
- Tensión de alimentación regulada: de 4 V (carga parcial / arranque) a 12 V (plena carga / post-marcha) [75, 82, 83].  
- Consumo de corriente continuo a 12 V: entre 2 y 3 A [80].  
- Resistencia interna del bobinado: Medida entre la celda "13" del conector de 14 polos y la carcasa del calefactor (valor nominal en ohmios) [37, 80].

**5. ANOMALÍAS FRECUENTES**  
Agarrotamiento del rodamiento por suciedad, desequilibrio del rodete o interrupción del bobinado eléctrico [80, 85].

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de realizar el barrido previo de la cámara; la UCE aborta inmediatamente la secuencia de encendido e inscribe la avería en memoria [45, 86].

**7. CÓMO COMPROBARLO**  
Medir la resistencia del bobinado entre la celda 13 y la masa de la carcasa [80]. Aplicar 12 V de corriente continua directamente al motor y verificar con un multímetro una intensidad absorbida de 2 a 3 A [80].

---

### NOTA DE ELEMENTO — GUARDALLAMAS
CÓDIGO: G64  
UBICACIÓN: Insertado en el interior de la cámara de combustión del calefactor [87, 88].  
APLICACIÓN: Monitorización térmica de la llama en la calefacción independiente [46, 87].

**1. MISIÓN**  
Detectar la presencia de llama en la cámara de combustión e informar a la UCE para autorizar la desconexión de la bujía -Q9- y mantener la inyección de combustible [46, 75].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor térmico foto-resistivo o de conductividad térmica cuya resistencia cambia en función de la temperatura radiada por la llama de la combustión [46, 89].

**3. CARACTERÍSTICAS**  
Sonda térmica resistente a altas temperaturas con cableado de conexión hacia las celdas 1 y 2 del conector de 14 polos [37, 88, 89].

**4. VALORES DE TRABAJO**  
- Rango de medida de resistencia válido: de 780 Ω a 3.040 Ω (a temperatura de funcionamiento) [89].  
- Umbral de interrupción (avería): Resistencia superior a 3.040 Ω [89].  
- Umbral de cortocircuito (avería): Resistencia inferior a 780 Ω [89].

**5. ANOMALÍAS FRECUENTES**  
Incrustación de hollín en la superficie de la sonda, interrupción del hilo sensor o cortocircuito por deformación térmica [89].

**6. COMPORTAMIENTO EN AVERÍA**  
Si el guardallamas registra un valor fuera de rango durante el arranque, la UCE realiza un único intento de repetición; si persiste, interrumpe el paso de combustible y desactiva el calefactor [86, 87, 90].

**7. CÓMO COMPROBARLO**  
Expulsar las celdas 1 y 2 del conector de 14 polos y medir con un polímetro la resistencia de la sonda a la temperatura ambiental momentánea (debe situarse estrictamente entre 780 Ω y 3.040 Ω) [88, 89].

---

### NOTA DE ELEMENTO — TERMOSENSOR DE TEMPERATURA DEL CALEFACTOR
CÓDIGO: G18  
UBICACIÓN: Alojado en la camisa de agua del calefactor de la calefacción independiente [84, 87, 91].  
APLICACIÓN: Control de la temperatura del líquido refrigerante dentro del calefactor [87].

**1. MISIÓN**  
Medir la temperatura del líquido refrigerante a la salida del calefactor para gestionar las conmutaciones entre plena carga, carga parcial y pausa de regulación [48, 87, 92].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Resistencia de coeficiente térmico (NTC/PTC) instalada en contacto térmico directo con la camisa de agua, enviando su variación de resistencia a la UCE -J364- [93].

**3. CARACTERÍSTICAS**  
Sensor de inmersión provisto de junta tórica de estanqueidad y cableado negro hacia las celdas 10 y 11 del conector de 14 polos [37, 91, 93].

**4. VALORES DE TRABAJO**  
- Umbral de cambio a Carga Parcial: 77 ºC [94].  
- Umbral de entrada a Pausa de Regulación: 89 ºC [48, 95, 96].  
- Temperatura crítica de desconexión por sobretemperatura: 110 ºC / 130 ºC [14, 92].  
- Umbrales de avería eléctrica: Interrupción si resistencia > 2 MΩ; Cortocircuito si resistencia < 50 Ω [93, 97].

**5. ANOMALÍAS FRECUENTES**  
Fugas de refrigerante por la junta tórica, derivación a masa o degradación del termistor por ciclos térmicos [91, 93].

**6. COMPORTAMIENTO EN AVERÍA**  
Si el sensor indica 'fallo', el calefactor se desactiva por seguridad para evitar la ebullición del agua [86, 87].

**7. CÓMO COMPROBARLO**  
Medir la resistencia óhmica entre las celdas 10 y 11 del conector de 14 polos con un polímetro a la temperatura ambiental y comparar con la curva característica [91, 93].

---

### NOTA DE ELEMENTO — TERMOSENSOR 2 PARA CALEFACTOR Y CALEFACCIÓN INDEPENDIENTE
CÓDIGO: G587  
UBICACIÓN: Montado en el cuerpo metálico del intercambiador de calor del calefactor [87, 98].  
APLICACIÓN: Protección de seguridad redundante contra sobrecalentamiento excesivo [87].

**1. MISIÓN**  
Supervisar la temperatura física del cuerpo de aluminio del calefactor para prevenir daños estructurales por falta de flujo de agua [42, 87].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Termistor cuyo valor de resistencia cambia con la temperatura del aluminio de la camisa, permitiendo a la UCE comparar su lectura con la del sensor -G18- [87, 97].

**3. CARACTERÍSTICAS**  
Sonda de contacto térmico con cables de color blanco conectados a las celdas 7 y 8 del conector de 14 polos [37, 98, 99].

**4. VALORES DE TRABAJO**  
- Límite máximo de sobrecalentamiento admisible: 130 ºC (registra contador en bloque de medidas 012) [14, 42].  
- Umbrales de avería: Interrupción si resistencia > 2 MΩ; Cortocircuito si resistencia < 50 Ω [99].

**5. ANOMALÍAS FRECUENTES**  
Deformación del soporte de fijación o fallo interno del termistor [98, 99].

**6. COMPORTAMIENTO EN AVERÍA**  
Inscripción de avería en la UCE y desconexión inmediata del sistema [86, 87].

**7. CÓMO COMPROBARLO**  
Medir la resistencia entre las celdas 7 y 8 del conector de 14 polos [98, 99].

---

### NOTA DE ELEMENTO — ELEMENTO CALEFACTOR PARA PRECALENTAMIENTO DEL COMBUSTIBLE
CÓDIGO: Z66  
UBICACIÓN: Integrado en el tubo de alimentación de combustible del evaporador del quemador [13, 100, 101].  
APLICACIÓN: Acondicionamiento térmico del combustible en arranques con bajas temperaturas [13, 101].

**1. MISIÓN**  
Calentar el combustible antes de su salida por el fieltro evaporador para facilitar la gasificación e inflamación [101].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Resistencia de caldeo eléctrica que se activa mediante señal de la UCE durante los primeros segundos de la secuencia de arranque [13, 75].

**3. CARACTERÍSTICAS**  
Módulo térmico sellado mediante seguro elástico Seeger con cables hacia las celdas 9 y 12 del conector de 14 polos [100, 101].

**4. VALORES DE TRABAJO**  
- Tensión de alimentación: 12 V [13].  
- Absorción de corriente de caldeo: hasta 20 A [13].

**5. ANOMALÍAS FRECUENTES**  
Cortocircuito por sobrecalentamiento del aislamiento de los cables de alimentación o fusión de la resistencia [102].

**6. COMPORTAMIENTO EN AVERÍA**  
Dificultad o imposibilidad de arranque del calefactor en frío, con emisión de humo por mala pulverización [11, 103].

**7. CÓMO COMPROBARLO**  
Comprobar visualmente que los cables de alimentación no presenten huellas de sobrecalentamiento [102]. Medir la absorción de corriente aplicando una pinza amperimétrica en el conector de alimentación durante la diagnosis de actuadores [12, 13].

---

### NOTA DE ELEMENTO — BOMBA DE RECIRCULACIÓN DE LÍQUIDO REFRIGERANTE
CÓDIGO: V55  
UBICACIÓN: Montada en el vano motor, intercalada en los tubos flexibles de calefacción cerca del calefactor [104, 105].  
APLICACIÓN: Circulación forzada del refrigerante en modo de calefacción independiente y apoyo al motor [104, 106, 107].

**1. MISIÓN**  
Impulsar el líquido refrigerante a través del calefactor y del intercambiador de calor del salpicadero cuando el motor del vehículo está parado [104, 108].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Electrobomba centrífuga accionada por un motor eléctrico de corriente continua, gobernada directamente por la UCE -J364- o por solicitud de la UCE del motor [104, 107].

**3. CARACTERÍSTICAS**  
Cuerpo de plástico técnico con racores de entrada y salida de agua, soporte de sujeción antivibratorio y conector eléctrico de 2 polos [38, 105].

**4. VALORES DE TRABAJO**  
- Tensión de trabajo: 12 V [38].  
- Operatividad: Se activa desde la fase de arranque y permanece encendida durante todo el ciclo de calefacción [83, 109].

**5. ANOMALÍAS FRECUENTES**  
Destrucción por funcionamiento en seco (sin refrigerante) o desgaste de las escobillas del motor [110].

**6. COMPORTAMIENTO EN AVERÍA**  
El agua dentro del calefactor se calienta instantáneamente alcanzando los 89 ºC / 110 ºC, provocando que la UCE entre en pausa de regulación o se bloquee por sobretemperatura [48, 92].

**7. CÓMO COMPROBARLO**  
Comprobar el giro suave e intermitente durante la diagnosis de actuadores [12]. Verificar la llegada de 12 V al conector de 2 polos [38].

---

### NOTA DE ELEMENTO — BOMBA DOSIFICADORA DE COMBUSTIBLE
CÓDIGO: V54  
UBICACIÓN: Montada en los bajos del vehículo, junto al depósito de combustible [111, 112].  
APLICACIÓN: Suministro de combustible a impulsos al calefactor independiente [32, 54, 111].

**1. MISIÓN**  
Aspirar combustible del depósito e impulsarlo en dosis exactas hacia la cámara de combustión del calefactor [32, 113].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Bomba de émbolo oscilante accionada por impulsos electromagnéticos. Cada impulso eléctrico de la UCE desplaza el émbolo una carrera fija, inyectando un volumen preciso de combustible [44, 114].

**3. CARACTERÍSTICAS**  
Cuerpo metálico cilíndrico con amortiguadores elásticos de caucho, conector de 2 polos y conexiones para tubo fino de combustible [111, 115].

**4. VALORES DE TRABAJO**  
- Caudal por carrera en diésel: aprox. 0,03 ml/carrera [44, 114].  
- Caudal por carrera en gasolina: aprox. 0,027 ml/carrera [114].  
- Frecuencia de excitación: de 0 Hz a 8 Hz [44, 75, 82].

**5. ANOMALÍAS FRECUENTES**  
Bloqueo mecánico del émbolo por impurezas o gomosis del combustible, o generación de ruidos molestos por contacto directo del cuerpo contra la chapa del vehículo [85, 115].

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de combustible en el calefactor, imposibilidad de formación de llama y posterior bloqueo del sistema [45, 46].

**7. CÓMO COMPROBARLO**  
Verificar la sonoridad de los impulsos (chasquidos) durante la diagnosis de actuadores [54]. Realizar la prueba de medición de caudal impelido con probeta graduada mediante el grupo de ajuste básico "066" [57, 116, 117].

---

### NOTA DE ELEMENTO — VÁLVULA DE CIERRE PARA LÍQUIDO REFRIGERANTE DE LA CALEFACCIÓN
CÓDIGO: N279  
UBICACIÓN: Montada en el vano motor, en las tuberías de agua hacia la caja de aguas del salpicadero [118].  
APLICACIÓN: Conmutación entre el circuito menor (solo habitáculo) y el circuito mayor (habitáculo + motor) [119, 120].

**1. MISIÓN**  
Priorizar el calentamiento rápido del aire del habitáculo aislando el bloque motor durante el inicio del funcionamiento de la calefacción independiente [108, 120].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Electroválvula de vías controlada por solenoide. Al recibir alimentación de la UCE (100% excitación), cierra el paso hacia el motor para hacer circular todo el líquido por el intercambiador del climatizador (circuito menor); a medida que sube la temperatura, reduce la excitación para integrar el bloque motor (circuito mayor) [119-121].

**3. CARACTERÍSTICAS**  
Cuerpo de plástico técnico de 3 vías de agua con solenoide electromagnético y conector de 2 polos [13, 120].

**4. VALORES DE TRABAJO**  
- Tensión de alimentación: 12 V [13].  
- Porcentaje de excitación: 100% (circuito menor) / 0% (circuito mayor) [119, 120].  
- Temperatura de conmutación progresiva: entre 65 ºC y 78 ºC [108].

**5. ANOMALÍAS FRECUENTES**  
Agarrotamiento de la maza de cierre por cal o sedimentos del refrigerante [120].

**6. COMPORTAMIENTO EN AVERÍA**  
Si se queda bloqueada en circuito menor, el motor del vehículo no recibe precalentamiento; si queda en circuito mayor, se retrasa el caldeo del habitáculo [120, 122].

**7. CÓMO COMPROBARLO**  
Verificar el pulso de conmutación a 0,5 Hz durante la diagnosis de actuadores [13]. Medir el porcentaje de activación en el bloque de valores de medida "003", campo 3 [119].

---

### NOTA DE ELEMENTO — RECEPTOR DE RADIOFRECUENCIA Y MANDO A DISTANCIA
CÓDIGO: R64  
UBICACIÓN: Receptor -R64- montado en el maletero, parte derecha bajo el guarnecido lateral; Mando a distancia portátil [123-125].  
APLICACIÓN: Activación y desactivación remota por radiofrecuencia de la calefacción/ventilación independiente [123, 124].

**1. MISIÓN**  
Permitir al usuario encender o apagar la calefacción/ventilación independiente a distancia y recibir confirmación óptica del estado operativo [124, 126, 127].

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El mando portátil emite una señal codificada por radiofrecuencia de alta frecuencia. El receptor -R64- procesa la orden, la transmite a la UCE -J364- mediante el bus de datos y devuelve un impulso de confirmación al mando que hace parpadear su LED de control [126-128].

**3. CARACTERÍSTICAS**  
- **Mando a distancia:** Provisto de tecla ON, tecla OFF y testigo LED multicolor [64].  
- **Batería del mando:** 1 pila de botón de litio tipo CR2430 (3V, 280 mAh) [129].  
- **Receptor R64:** Módulo electrónico conectado a la antena del techo del vehículo y al bus de datos [39, 130].

**4. VALORES DE TRABAJO**  
- Alcance máximo de emisión en campo libre: aprox. 600 metros [64].  
- Consumo del receptor R64 en reposo: < 1 mA (modo normal) / 0,04 mA (modo ahorro de energía) [131, 132].  
- Tiempo de pulsación requerido en mando: mínimo 3 segundos [64, 124].

**5. ANOMALÍAS FRECUENTES**  
Agotamiento de la pila de litio CR2430, pérdida de sincronización de la clave o apantallamiento de la señal por obstáculos [64, 129, 133].

**6. COMPORTAMIENTO EN AVERÍA**  
- Si no hay comunicación con el vehículo: El testigo LED del mando parpadea en color rojo a 4 Hz (4 veces por segundo) durante 10 segundos [134].  
- Si la pila está agotada: El LED de control no se enciende al pulsar las teclas [126].

**7. CÓMO COMPROBARLO**  
Pulsar la tecla ON durante 3 segundos: el LED debe encenderse en verde 2 segundos y luego parpadear 30 veces a 1 Hz en verde (confirmación de encendido) [64, 126]. Si falla, ejecutar la autoadaptación del mando mediante el grupo de ajuste básico "004" [56, 135].

---

### NOTA DE PROCESO — COMPROBACIÓN DEL CAUDAL DE LA BOMBA DOSIFICADORA V54 / PROCEDIMIENTO

**1. OBJETO Y ALCANCE**  
Describir el método de medición volumétrica de la cantidad de combustible bombeada por la bomba dosificadora -V54- [57, 136]. Se aplica para verificar la dosificación exacta cuando existen fallos de combustión, emisión de humo o desviaciones en la prueba de CO2 [65, 137].

**2. FUNDAMENTO**  
La UCE excita la bomba dosificadora a una frecuencia fija de 8 Hz durante un tiempo programado [44, 69]. El combustible impulsado se recoge en una probeta graduada; si el volumen recuperado no alcanza o supera los márgenes normativos, la dosificación es incorrecta [117].

**3. CONDICIONES PREVIAS**  
- Temperatura ambiente inferior a 25 ºC y temperatura del refrigerante del motor inferior a 30 ºC (para evitar errores por evaporación) [136].  
- Nivel de combustible en depósito fuera de la zona de reserva [138].  
- Batería del vehículo totalmente cargada [138].  
- Tubería de combustible previamente llena y purgada de aire de forma completa (ejecutando Ajuste Básico 066 durante 30 s) [44, 69, 139].

**4. EQUIPO Y MATERIAL**  
- Probeta/recipiente graduado de precisión [140].  
- Equipo de diagnosis (VAS 5051 / VAS 5052) [139].  
- Manguera transparente de prolongación [139].

**5. DESARROLLO**  
1. Desmontar el casco del pasarrueda delantero derecho para acceder al tubo de combustible [140].  
2. Desconectar el tubo de combustible -A- a la entrada del calefactor y conducirlo al interior de la probeta graduada [140].  
3. Llenar previamente la tubería: En adaptación, canal "30", introducir "30" (segundos); en canal "36", introducir "1"; seleccionar "Ajuste básico", grupo "066" y activar [66-69].  
4. Vaciar la probeta graduada tras el llenado inicial [141].  
5. Programar la prueba de medición: En adaptación, canal "30", introducir "240" (segundos); en canal "36", introducir "1" [71, 142, 143].  
6. Seleccionar "Ajuste básico", grupo "066" y pulsar 'Activar' [116]. La bomba funcionará durante 240 segundos a 8 Hz [116].  
7. Esperar a que finalice la activación (indicación 'Fin') y medir el volumen de combustible acumulado en la probeta [117].

**6. VALORES DE REFERENCIA**  

| Tipo de Motorización | Tiempo de prueba / Frecuencia | Volumen recolectado nominal |
|---|---|---|
| Motor Diésel | 240 segundos a 8 Hz | No documentado en fuentes (aprox. 0,03 ml/carrera) [114, 117] |
| Motor Gasolina | 240 segundos a 8 Hz | No documentado en fuentes (aprox. 0,027 ml/carrera) [114, 117] |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Medir el caudal con la tubería de combustible parcialmente vacía (aporta un volumen muy inferior al real) [139, 144].  
- Volúmenes excesivos: Provocan humo denso, coquización de la bujía -Q9- y fallos de encendido [11, 65].  
- Volúmenes deficientes: Generan falta de llama o valores de CO2 inferiores a los nominales [137, 145].

**8. VERIFICACIÓN FINAL**  
Reconectar la manguera al calefactor asegurando que no toque partes metálicas para evitar ruidos de retumbo, y hacer funcionar el calefactor a plena carga durante 10 minutos [115, 146].

**9. SEGURIDAD Y NORMATIVA**  
Observar estrictamente las normas de seguridad e higiene para el trabajo con sistemas de combustible abiertos; no fumar ni generar chispas [136].

---

### NOTA DE PROCESO — VERIFICACIÓN DEL CONTENIDO DE CO2 EN GASES DE ESCAPE / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**  
Describir la medición del porcentaje de dióxido de carbono (CO2) en los gases de escape de la calefacción independiente [147, 148]. Se aplica para comprobar la calidad de la combustión tras sustituir componentes (turbina -V6-, quemador, bujía -Q9-) o ante la emisión de humo [47, 85, 146].

**2. FUNDAMENTO**  
El porcentaje de CO2 en los gases quemados refleja la proporción exacta entre el aire introducido por la turbina -V6- y el combustible inyectado por la bomba -V54- [32, 147]. Valores fuera de tolerancia indican desajustes de caudal o restricciones en la aspiración/escape [85].

**3. CONDICIONES PREVIAS**  
- Depósito con suficiente combustible y batería cargada [147].  
- Memoria de averías consultada y sin registros [149].  
- Calefactor funcionando en régimen de plena carga estabilizado durante al menos 4 minutos [150, 151].

**4. EQUIPO Y MATERIAL**  
- Estación de análisis de gases de escape homologada (-VAS 6300-) [152].  
- Sonda de extracción de gases con tubo flexible [149, 153].  
- Equipo de diagnosis (VAS 5051 / VAS 5052) [152].

**5. DESARROLLO**  
1. Arrancar el motor del vehículo y conectar el equipo de diagnosis [149, 154].  
2. Introducir la sonda de gases -B- de la estación -VAS 6300- en el tubo de escape -A- del calefactor [149].  
3. Seleccionar la temperatura máxima ("HI") en el climatizador y ajustar la turbina de aire al 50% [153].  
4. Activar la calefacción independiente (vía MMI o por Ajuste Básico grupo "011" u "022") [150, 155].  
5. Desacoplar opcionalmente el conector de la válvula -N279- para forzar al calefactor a trabajar a plena carga sin calentar el motor prematuramente [151].  
6. Esperar a que el calefactor alcance el modo de plena carga y mantenerlo funcionando ahí durante un mínimo de 1 minuto adicional [150, 151].  
7. Leer el valor del porcentaje en volumen de CO2 mostrado en el analizador [156]. Si la aguja oscila, calcular la media aritmética entre el valor máximo y mínimo leídos [137].

**6. VALORES DE REFERENCIA**  

| Tipo de Combustible | Valor nominal de CO2 (% en volumen) | Condiciones de medición |
|---|---|---|
| Motor Diésel | 8,0 % a 11,0 % en vol. | Plena carga estabilizada tras 4 min [145] |
| Motor Gasolina | 7,5 % a 10,5 % en vol. | Plena carga estabilizada tras 4 min [145] |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Valores de CO2 bajos (< 9% en diésel / < 8,5% en gasolina): Provocan fallos de combustión al circular a altas velocidades; verificar el caudal de la bomba dosificadora -V54- [137, 145].  
- Valores fuera de norma con caudal de bomba correcto: Comprobar la existencia de suciedad o estrechamientos en la tubería de aspiración de aire o en el tubo de escape, o fallo en la turbina -V6- [85].  
- Oscilación fuerte de la lectura (> ±0,6%): La sonda de medición está mal posicionada dentro del tubo de escape [137].

**8. VERIFICACIÓN FINAL**  
Reacoplar el conector de la válvula -N279-, consultar y borrar la memoria de averías y hacer funcionar el sistema durante 10 minutos a plena carga [146, 151, 156].

**9. SEGURIDAD Y NORMATIVA**  
Peligro de quemaduras graves: No tocar con las manos desnudas la sonda de gases ni el tubo de escape del calefactor durante o inmediatamente después de la prueba, ya que alcanzan temperaturas extremadamente elevadas [149].

---

COBERTURA: documento «Audi A5 Coupé_2008_Calefacción independiente.pdf», páginas 1 a 149 de 149. [completo]

---

💡 ¿Quieres que continuemos ahora procesando el documento «Audi A5 Coupé_2008_aire acondicionado.pdf» para redactar las notas de los componentes de climatización del habitáculo y vano motor?
