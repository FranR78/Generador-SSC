### NOTA DE PROCESO — DIAGNÓSTICO Y CONSULTA DE LA MEMORIA DE AVERÍAS DEL CLIMATIZADOR / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica el procedimiento de autodiagnóstico, lectura y borrado de la memoria de averías registradas en la unidad de mandos del aire acondicionado J301 mediante el lector VAG 1551. Se aplica a la localización de averías eléctricas y electrónicas en el SEAT Ibiza III (motor ASY) equipado con climatizador Climatic.

**2. FUNDAMENTO**
La unidad de control J301 monitoriza continuamente las señales de sensores, actuadores, líneas de alimentación y buses de comunicación. Las anomalías se graban en la memoria interna mediante códigos de 5 dígitos (permanentes o esporádicas marcadas con /SP) y se conservan hasta su borrado manual.

**3. CONDICIONES PREVIAS**
Contacto del vehículo encendido (linea de corriente del borne 15 activa) y tensión de batería estable.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis VAG 1551 (o equivalente) y esquema eléctrico de localización de averías del vehículo.

**5. DESARROLLO**
1. Conectar el lector VAG 1551 al conector de diagnosis del vehículo y acceder a la función de autodiagnóstico de la unidad de aire acondicionado J301.
2. Consultar el contenido de la memoria de averías (función 02) e identificar los códigos numéricos mostrados en el display.
3. Discernir si la avería es esporádica (indicada con /SP en la pantalla). En averías esporádicas, comprobar prioritariamente la existencia de contactos movedizos o falsos contactos en los conectores de los componentes afectados.
4. Si la memoria indica componentes defectuosos, medir la continuidad e interrupción de los cables hacia los componentes y verificar la ausencia de cortocircuitos a positivo o masa según el esquema eléctrico.
5. Antes de sustituir cualquier componente o la propia unidad J301, verificar el estado de los terminales de los conectores, la alimentación de tensión (borne 15) y las conexiones a masa.
6. Si al desconectar el encendido la unidad J301 se mantiene en funcionamiento, comprobar la conexión cableada de la unidad de mandos.
7. Tras reparar el defecto físico o eléctrico, borrar la memoria de averías y ejecutar la configuración básica (función 04) si se ha sustituido la unidad J301, el motor V68 o el motor V154.

**6. VALORES DE REFERENCIA**
| Código de Avería | Componente / Circuito Afectado | Condición de Anomaly / Texto en VAG 1551 |
| :--- | :--- | :--- |
| **00538** | Tensión de referencia | Señal demasiado alta (cortocircuito/interrupción) o demasiado baja (V68, V154 o J301 defectuosos) |
| **00576** | Borne 15 | Señal excesiva (> 15 V / alternador), insuficiente (< 9,5 V / batería) o cortocircuito a masa |
| **00705** | Relé del ventilador nivel 1 J279 (en J293) | Cortocircuito a positivo o interrupción / cortocircuito a masa |
| **00706** | Relé del ventilador nivel 2 J513 (en J293) | Cortocircuito a positivo o interrupción / cortocircuito a masa |
| **00796** | Turbina de aire para termosensor V42 | Bloqueada o sin tensión /SP |
| **00819** | Transmisor de alta presión G65 | Cortocircuito a positivo/masa, señal alta/baja o fallo en circuito frigorífico |
| **00898** | Activación del compresor de A/C (N280) | Cortocircuito a masa, interrupción o cortocircuito a positivo |
| **01233** | Válvula de cierre para refrigerante N279 | Cortocircuito a positivo o interrupción / cortocircuito a masa |
| **01271** | Motor regulador de trampilla de temp. V68 | Corto a positivo/masa, bloqueo, fuera de límites o no ajustado |
| **01273** | Turbina de aire fresco V2 | Diferencia de regulación, bloqueo, tensión < 9,5 V o > 15 V (cargador inadecuado) |
| **01296** | Transmisor temp. difusor central G191 | Interrupción / cortocircuito a positivo o cortocircuito a masa |
| **01297** | Transmisor temp. difusor reposapiés G192 | Interrupción / cortocircuito a positivo o cortocircuito a masa |
| **01299** | Interfaz de diagnóstico bus datos J533 | Sin comunicación / consultar memoria de fallos del Gateway (J519) |
| **01314** | Unidad de control del motor | Consultar la memoria de fallos de la unidad del motor |
| **01317** | Cuadro de instrumentos J285 | Señal no plausible / consultar memoria del cuadro de instrumentos |
| **01596** | Motor trampilla aire fresco/recirculación V154 | Corto a positivo/masa, bloqueo, fuera de límites o no ajustado |
| **65535** | Unidad de control defectuosa | Ficha electrónica de J301 defectuosa |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Sustituir componentes sin comprobar previamente la continuidad del cableado y el estado de los conectores; un conector movedizo genera códigos /SP repetidos.
* La avería 01273 por tensión superior a 15 V puede ser causada por el uso de un equipo inadecuado para cargar la batería del vehículo.
* No realizar la configuración básica (función 04) tras sustituir J301, V68 o V154; impedirá el aprendizaje de los límites de ajuste.

**8. VERIFICACIÓN FINAL**
Consultar nuevamente la memoria de averías tras borrar los códigos y verificar que no queda ninguna avería grabada en el sistema.

**9. SEGURIDAD Y NORMATIVA**
No documentado en fuentes.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA EL AIRE ACONDICIONADO J301
CÓDIGO: J301
UBICACIÓN: Consola central del salpicadero (mando del climatizador Climatic).
APLICACIÓN: Sistema de aire acondicionado Climatic en el SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Gestionar electrónicamente el funcionamiento del sistema de aire acondicionado, procesar las señales de los sensores de temperatura y presión, y controlar la activación del compresor y los servomotores de las trampillas.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Unidad electrónica de control integrada en la consola de mandos con autodiagnóstico mediante VAG 1551.

**4. VALORES DE TRABAJO**
* Tensión de alimentación (Borne 15): Tensión nominal de red (anómala si la señal es insuficiente por batería agotada o excesiva por alternador defectuoso).

**5. ANOMALÍAS FRECUENTES**
* Avería electrónica interna en la placa de la unidad (código 65535).
* Cortocircuito o interrupción en los cables y conectores de la unidad (código 00538 o 00576).
* Mantenimiento en funcionamiento de la unidad tras desconectar el encendido por fallo en la conexión cableada.

**6. COMPORTAMIENTO EN AVERÍA**
Inoperatividad total del aire acondicionado o falta de respuesta en la regulación de los actuadores, registrando los códigos 65535, 00538 o 00576.

**7. CÓMO COMPROBARLO**
Consultar la memoria de averías con VAG 1551 (función 02). Comprobar la alimentación de tensión en el borne 15 y la conexión a masa según esquema eléctrico. Tras su sustitución, es obligatorio realizar la configuración básica (función 04).

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL DEL VENTILADOR PARA EL REFRIGERANTE J293 (RELÉS J279 Y J513)
CÓDIGO: J293 (integra internamente los relés J279 y J513)
UBICACIÓN: Compartimento motor, montada sobre el soporte del electroventilador o larguero.
APLICACIÓN: Sistema de refrigeración del motor y climatización en el SEAT Ibiza III.

**1. MISIÓN**
Gobernar la alimentación eléctrica de las velocidades 1 y 2 del electroventilador del radiador mediante los relés internos J279 (nivel 1) y J513 (nivel 2).

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Módulo electrónico de potencia que integra de forma fija los relés de conmutación J279 (velocidad 1) y J513 (velocidad 2).

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Cortocircuito a positivo en cables o conectores hacia J293.
* Interrupción o cortocircuito a masa en las líneas de control.
* Avería interna de los relés integrados J279 / J513 o del propio módulo J293.

**6. COMPORTAMIENTO EN AVERÍA**
El electroventilador no activa la velocidad 1 o velocidad 2, produciendo sobrepresión en el circuito de A/C o sobrecalentamiento del motor térmico. Registra los códigos 00705 (nivel 1) o 00706 (nivel 2).

**7. CÓMO COMPROBARLO**
Comprobar los cables y conectores de la unidad J293 según esquema eléctrico. Si el cableado es correcto y se registran las averías 00705 o 00706, sustituir la unidad J293.

---

### NOTA DE ELEMENTO — TURBINA DE AIRE PARA TERMOSENSOR V42 Y UNIDAD E87
CÓDIGO: V42 (unidad de indicación y mando E87)
UBICACIÓN: Interior del cuadro de mandos del climatizador.
APLICACIÓN: Climatizador del SEAT Ibiza III.

**1. MISIÓN**
Aspirar un caudal de aire del habitáculo sobre el sensor de temperatura interior para garantizar una lectura representativa del ambiente.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Microturbina eléctrica integrada dentro del módulo de indicación y mando E87.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Bloqueo mecánico por acumulación de suciedad o falta de alimentación de tensión eléctrica.

**6. COMPORTAMIENTO EN AVERÍA**
Medición errónea de la temperatura ambiente interior e imprecisión en el control térmico. Registra el código de avería 00796 (/SP).

**7. CÓMO COMPROBARLO**
Consultar la memoria de averías. Si V42 aparece bloqueada o sin tensión, sustituir el conjunto de la unidad E87.

---

### NOTA DE ELEMENTO — TRANSMISOR DE ALTA PRESIÓN G65
CÓDIGO: G65
UBICACIÓN: Tubería de la línea de alta presión del circuito de aire acondicionado.
APLICACIÓN: Sistema de aire acondicionado Climatic en el SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Medir la presión del gas refrigerante en el tramo de alta e informar a la unidad de control para proteger el circuito y gestionar el electroventilador.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Sensor electrónico de presión conectado a la unidad de control J301.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Cortocircuito a positivo o masa en los cables o conectores.
* Defecto interno del elemento sensor G65.
* Anomalía real de presión en el circuito frigorífico (presión excesivamente alta o baja).
* Defecto asociado en la válvula de regulación N280 o en la unidad J301.

**6. COMPORTAMIENTO EN AVERÍA**
Desconexión de seguridad del compresor de aire acondicionado y registro del código 00819 (señal alta, baja o cortocircuito).

**7. CÓMO COMPROBARLO**
1. Consultar el grupo de valores de medición 002 con el equipo de diagnosis.
2. Comprobar la continuidad y la ausencia de cortocircuitos en las conexiones de G65 según esquema eléctrico.
3. Si la parte eléctrica es correcta, revisar el circuito frigorífico sin autodiagnóstico. Sustituir G65 si está averiado.

---

### NOTA DE ELEMENTO — VÁLVULA DE REGULACIÓN DEL COMPRESOR DE AIRE ACONDICIONADO N280
CÓDIGO: N280
UBICACIÓN: Montada en la parte trasera o lateral del cuerpo del compresor.
APLICACIÓN: Compresores de cilindrada variable del SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Regular la cilindrada y la capacidad de bombeo del compresor ajustando el flujo interno de refrigerante según las instrucciones eléctricas de J301.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Electroválvula de regulación proporcional comandada por la unidad de control J301.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Cortocircuito a masa o a positivo en cables o conectores.
* Interrupción del bobinado eléctrico o fallo interno en la válvula N280.
* Defecto en la etapa de potencia de la unidad J301.

**6. COMPORTAMIENTO EN AVERÍA**
El compresor no acopla ni ajusta su rendimiento, dejando de enfriar el aire del habitáculo y registrando el código 00898.

**7. CÓMO COMPROBARLO**
1. Consultar el grupo de valores de medición 002.
2. Efectuar el diagnóstico de actuadores (función 03) para forzar su activación.
3. Comprobar los cables y conectores a N280 según el esquema eléctrico.
4. Si N280 está defectuosa y no admite despiece independiente, sustituir el compresor de aire acondicionado completo.

---

### NOTA DE ELEMENTO — VÁLVULA DE CIERRE PARA EL REFRIGERANTE N279
CÓDIGO: N279
UBICACIÓN: Tuberías del circuito de fluido refrigerante.
APLICACIÓN: Sistemas de climatización en el SEAT Ibiza III.

**1. MISIÓN**
Abrir o interrumpir el paso de fluido refrigerante hacia intercambiadores auxiliares según la estrategia de regulación.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Electroválvula de corte de paso de dos posiciones.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Cortocircuito a positivo, cortocircuito a masa o interrupción del bobinado de N279.

**6. COMPORTAMIENTO EN AVERÍA**
Interrupción del flujo de refrigerante y registro del código de avería 01233.

**7. CÓMO COMPROBARLO**
Comprobar cables y conectores según esquema eléctrico. Sustituir N279 si presenta fallo interno.

---

### NOTA DE ELEMENTO — MOTOR REGULADOR PARA LA TRAMPILLA DE TEMPERATURA V68
CÓDIGO: V68
UBICACIÓN: Caja climática en el interior del habitáculo, acoplado al eje de la trampilla de mezcla.
APLICACIÓN: Climatizador Climatic en el SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Accionar mecánicamente la trampilla de temperatura para mezclar las proporciones de aire frío y caliente hacia el habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Servomotor eléctrico con potenciómetro de posición de retorno integrado.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Cortocircuito a positivo o masa, e interrupción en el cableado.
* Atascamiento mecánico de la trampilla de temperatura.
* Avería interna del servomotor o desconfiguración de los límites de ajuste.
* Si presenta cortocircuito interno, puede provocar la avería 00538 (tensión de referencia baja).

**6. COMPORTAMIENTO EN AVERÍA**
La temperatura del aire queda fija en un valor extremo (fuego o frío) sin responder a la ruleta del mando, registrando la avería 01271.

**7. CÓMO COMPROBARLO**
1. Consultar el grupo de valores de medición 005.
2. Realizar el diagnóstico de actuadores (función 03).
3. Si existe el código 00538, desconectar el conector de V68 para aislar si el fallo de tensión de referencia procede de este motor.
4. Verificar manualmente que la trampilla gira suavemente sin atascamientos. Sustituir V68 y realizar obligatoriamente la configuración básica (función 04).

---

### NOTA DE ELEMENTO — TURBINA DE AIRE FRESCO V2 Y UNIDAD DE CONTROL J126
CÓDIGO: V2 (turbina) / J126 (unidad de control de la turbina)
UBICACIÓN: Canal de entrada de la caja climática bajo el salpicadero.
APLICACIÓN: Sistema de aire acondicionado y ventilación del SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Impulsar y regular el caudal de aire exterior o recirculado hacia el interior del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Electromotor centrífugo (V2) gobernado por un módulo electrónico de potencia (J126).

**4. VALORES DE TRABAJO**
* Tensión de alimentación: Anómala si registra caídas por debajo de 9,5 V o tensiones superiores a 15 V (provocadas por regulador de alternador defectuoso o cargadores de batería inapropiados).

**5. ANOMALÍAS FRECUENTES**
* Bloqueo mecánico del rodete V2 o desgaste de escobillas/cojinetes.
* Avería interna en el módulo de regulación J126 o en la unidad E87.
* Resistencias de contacto o cortes en la línea de alimentación/masa.

**6. COMPORTAMIENTO EN AVERÍA**
La turbina no gira, funciona a tirones o queda fija en velocidad máxima, registrando la avería 01273.

**7. CÓMO COMPROBARLO**
1. Comprobar la alimentación y masas hacia J126 y V2 según el esquema eléctrico.
2. Realizar la verificación eléctrica del módulo J126.
3. Comprobar la tensión del alternador si se registran picos de tensión (> 15 V) o caídas (< 9,5 V). Sustituir V2 o J126 según corresponda.

---

### NOTA DE ELEMENTO — TRANSMISOR DE TEMPERATURA PARA DIFUSOR CENTRAL G191
CÓDIGO: G191
UBICACIÓN: Conducto del difusor central de aireación del salpicadero.
APLICACIÓN: Climatizador Climatic en el SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Medir la temperatura del aire que sale por el difusor central para adaptar la regulación de la mezcla.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Sensor térmico acoplado al canal de aire central.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Interrupción o cortocircuito a positivo o masa en los cables/conectores.
* Transmisor G191 defectuoso o no montado de serie en la versión del vehículo.

**6. COMPORTAMIENTO EN AVERÍA**
Regulación imprecisa de la temperatura en el difusor central y registro del código 01296.

**7. CÓMO COMPROBARLO**
Comprobar la lectura de G191 en el grupo de valores de medición 08. Reparar cables o sustituir G191 si está defectuoso.

---

### NOTA DE ELEMENTO — TRANSMISOR DE TEMPERATURA PARA DIFUSOR DE ZONA REPOSAPIÉS G192
CÓDIGO: G192
UBICACIÓN: Conducto de aireación inferior en la zona de los pies.
APLICACIÓN: Climatizador Climatic en el SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Medir la temperatura del caudal de aire impulsado a la zona de los pies del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Sensor térmico acoplado al canal inferior de aire.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Cortocircuito a masa, interrupción o cortocircuito a positivo en el cableado.
* Transmisor G192 defectuoso o no montado según equipamiento.

**6. COMPORTAMIENTO EN AVERÍA**
Error en el ajuste térmico de la zona inferior del habitáculo y registro del código 01297.

**7. CÓMO COMPROBARLO**
Consultar el grupo de valores de medición 08 con VAG 1551. Reparar el cableado o sustituir G192 si da valor erróneo.

---

### NOTA DE ELEMENTO — INTERFAZ DE DIAGNÓSTICO PARA EL BUS DE DATOS J533 (GATEWAY INTEGRADO EN J519)
CÓDIGO: J533 (integrado en la unidad de control de la red de a bordo J519)
UBICACIÓN: Bajo el salpicadero, integrado físicamente en el módulo J519.
APLICACIÓN: Red CAN-Bus en el SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Interconectar y traducir la información entre los distintos buses de datos del vehículo (Tracción, Confort, Cuadro, Diagnosis) y la unidad J301 del aire acondicionado.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Módulo interfaz electrónico de comunicación integrado en la unidad de red de a bordo J519.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Cortocircuito o corte en los cables físicos del BUS de datos.
* Defecto interno en la unidad J519 / Gateway J533.

**6. COMPORTAMIENTO EN AVERÍA**
Pérdida de comunicación entre la unidad de climatización J301, la unidad del motor (01314) y el cuadro de instrumentos J285 (01317), registrando el código 01299.

**7. CÓMO COMPROBARLO**
Comprobar los cables del BUS de datos según el grupo de reparación 90 y consultar la memoria de fallos del Gateway. El fallo se borra automáticamente al restablecerse la línea de datos.

---

### NOTA DE ELEMENTO — MOTOR REGULADOR PARA LA TRAMPILLA DE AIRE FRESCO/RECIRCULACIÓN V154
CÓDIGO: V154
UBICACIÓN: Entrada de aire de la caja climática.
APLICACIÓN: Climatizador Climatic en el SEAT Ibiza III (motor ASY).

**1. MISIÓN**
Mover mecánicamente la trampilla para alternar entre la toma de aire fresco del exterior y la recirculación del aire del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
No documentado en fuentes.

**3. CARACTERÍSTICAS**
Servomotor eléctrico con potenciómetro interno de posición de retorno.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
* Cortocircuito a positivo o a masa en la línea eléctrica.
* Trampilla de recirculación atascada mecánicamente.
* Pérdida de límites de ajuste, falta de corriente de referencia (provoca la avería 00538) o falta de configuración básica.

**6. COMPORTAMIENTO EN AVERÍA**
Imposibilidad de seleccionar la recirculación o el paso de aire exterior, registrando la avería 01596.

**7. CÓMO COMPROBARLO**
1. Consultar el grupo de valores de medición 004.
2. Ejecutar el diagnóstico de actuadores (función 03).
3. En caso de avería 00538, desenchufar el conector de V154 para comprobar si la caída de tensión de referencia procede de este motor.
4. Verificar que la trampilla no está atascada mecánicamente, sustituir V154 y realizar la configuración básica (función 04).

---

COBERTURA: documento «averías clima ibizaIII ASY.pdf», páginas 1 a 7 de 7. [completo]

---

💡 ¿Deseas que preparemos alguna guía de comprobación paso a paso en el taller con el VAG 1551 o la prueba de actuadores para esta unidad?