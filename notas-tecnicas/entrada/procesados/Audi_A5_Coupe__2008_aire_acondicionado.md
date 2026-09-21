### **NOTA DE PROCESO — MEDIDAS DE SEGURIDAD Y TRABAJOS EN EL CIRCUITO FRIGORÍFICO R134a / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer las normas de seguridad e higiene laboral para la manipulación del gas refrigerante R134a, evacuación del circuito y precauciones durante los trabajos de pintura en el vehículo. Se aplica a todas las intervenciones de mantenimiento y reparación del sistema de aire acondicionado.  
📷 IMAGEN: Placa indicadora en el vano motor con el tipo de agente frigorífico R134a y la cantidad de llenado — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 4

**2. FUNDAMENTO**  
El refrigerante R134a (Tetrafluoretano CH2F-CF3) se encuentra almacenado a alta presión en estado líquido o gaseoso. La rápida evaporación del fluido al fugar genera temperaturas de congelación que provocan lesiones graves en la piel y los ojos. Bajo la acción del calor o llama directa, el R134a se descompone liberando gases tóxicos irritantes. Asimismo, el secado en horno de pintura con el circuito cargado puede generar sobrepresiones peligrosas de reventón.

**3. CONDICIONES PREVIAS**  
- Encendido desconectado ("borne 15 OFF").  
- Equipo de aspiración del taller preparado y foso bien ventilado.

**4. EQUIPO Y MATERIAL**  
- Estación de carga y reciclaje de R134a.  
- Gafas de protección con solapas laterales y guantes de nitrilo/caucho.  
- Extractor de gases de escape/taller.

**5. DESARROLLO**  
1. Utilizar obligatoriamente gafas y guantes de protección antes de soltar cualquier racor o conectar mangueras de servicio.  
2. En caso de contacto accidental de refrigerante líquido con los ojos o la piel, enjuagar minuciosamente la zona afectada con agua fría durante un mínimo de 15 minutos y acudir inmediatamente al médico.  
3. Extraer los gases fugados mediante instalaciones de aspiración adecuadas; no inhalar bajo ningún concepto la mezcla de gas y aire.  
4. No realizar trabajos de soldadura eléctrica o autógena en componentes del aire acondicionado que contengan refrigerante.  
5. En trabajos de pintura y secado en horno, la temperatura sobre las piezas del vehículo no debe superar bajo ningún concepto los 80 ºC.  
6. Tras vaciar el circuito frigorífico, desacoplar el conector eléctrico de la válvula reguladora del compresor -N280- o del sensor -G395-. Esto impide que la UCE active la válvula reguladora si se arranca el motor, garantizando que el compresor gire al ralentí protegido por su circuito de aceite interno.

**6. VALORES DE REFERENCIA**  

| Parámetro / Condición | Valor límite | Condiciones de validez |
|---|---|---|
| **Temperatura máxima en horno de secado** | 80 ºC | Circuito frigorífico cargado con R134a |
| **Tiempo de lavado cutáneo/ocular por accidente** | Mínimo 15 minutos | Agua fría continua tras contacto con R134a |
| **Radio de seguridad sin fosos de montaje** | 5 metros | Recintos sin extracción forzada de gases |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Dejar conectado el conector de la válvula -N280- con el circuito sin gas R134a y arrancar el motor; la UCE intentará regular la válvula sin flujo de aceite, sobrecalentando y destruyendo el compresor.  
- Introducir componentes del circuito abiertos a la atmósfera durante periodos prolongados; la humedad del aire satura el filtro deshidratador y contamina el aceite.

**8. VERIFICACIÓN FINAL**  
Comprobación de la ausencia de fugas gaseosas en las tomas de servicio y verificación de la estanqueidad de las caperuzas protectoras de plástico provistas de junta.

**9. SEGURIDAD Y NORMATIVA**  
Obligatoriedad del uso de EPIs (gafas y guantes) y cumplimiento de la normativa ambiental sobre recuperación y reciclaje de gases fluorados HFC (R134a).

---

### **NOTA DE PROCESO — AUTODIAGNÓSTICO Y FUNCIONES DE CONTROL DEL CLIMATRONIC / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Sistematizar la secuencia de diagnóstico electrónico, consulta y borrado de averías, lectura de bloques de medición y test de actuadores en la Unidad de Control del Climatronic -J255-. Se aplica en la localización de fallos en el sistema de climatización.  
📷 IMAGEN: Conexión del equipo de diagnosis VAS 5051/5A al conector de diagnóstico de 16 polos del vehículo — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 9

**2. FUNDAMENTO**  
La UCE -J255- dispone de una memoria no volátil que registra fallos de sensores, actuadores y líneas de comunicación, diferenciando entre averías estáticas y esporádicas (/SP). La comunicación con el equipo de diagnosis se realiza en transmisión rápida de datos vía conector de 16 polos. La UCE cuenta además con "Protección de componentes" (seguro antirrobo) que limita sus funciones si se instala en otro vehículo sin autorizar.

**3. CONDICIONES PREVIAS**  
- Tensión de batería del vehículo correcta (> 12,2 V).  
- Fusibles del sistema de climatización en buen estado.  
- Encendido conectado ("borne 15 ON") para activar la interfaz de diagnosis -J533-.

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis homologado (VAS 5051 / VAS 5052).  
- Cable de diagnóstico de 16 polos (-VAS 5051/5A-).

**5. DESARROLLO**  
1. Conectar el equipo de diagnosis al puerto de 16 polos del vehículo con el encendido desconectado.  
2. Conectar el encendido y seleccionar la función "Autodiagnosis del vehículo", dirección "08 - Electrónica de climatización/calefacción".  
3. Seleccionar la función "02 - Consultar la memoria de averías" para analizar los códigos DTC memorizados y las condiciones de entorno (kilometraje, fecha, temperatura, tensión).  
4. Ejecutar la función "03 - Diagnosis de actuadores" para activar secuencialmente servomotores, válvula del compresor -N280-, ventiladores del radiador -V7/V177-, luneta térmica -Z1- y test de segmentos de pantalla (solo realizable a velocidad < 5 km/h).  
5. Acceder a "08 - Leer bloque de valores de medición" para verificar parámetros de sensores térmicos, presiones e intensidades de corriente en tiempo real.  
6. Subsanar las averías detectadas, realizar el "04 - Ajuste básico" y seleccionar "05 - Borrar la memoria de averías".

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Velocidad máxima para test de actuadores** | < 5 km/h | Vehículo en prueba de taller |
| **Código de dirección de diagnosis** | Dirección 08 | Comunicación con UCE -J255- |
| **Tensión mínima de alimentación** | > 12,2 V | Medido en Borne 30 de J255 |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Desconectar el encendido entre la consulta de averías y el borrado; la UCE impide el borrado si se corta la comunicación mostrando el mensaje "Memoria de averías aún sin consultar".  
- Montar un panel de mandos -J255- procedente de otro vehículo sin anular la protección de componentes; la UCE desactiva las funciones de confort dejando únicamente activas las de desempañado de seguridad.

**8. VERIFICACIÓN FINAL**  
Confirmación del mensaje "Memoria de averías borrada" en la pantalla del equipo de diagnosis y verificación de la ausencia de parpadeo en las teclas del panel.

**9. SEGURIDAD Y NORMATIVA**  
Fijación del equipo de diagnosis con el cinturón de seguridad en el asiento trasero durante pruebas dinámicas de conducción con dos técnicos.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA CLIMATRONIC Y PANEL DE MANDOS**
CÓDIGO: J255  
UBICACIÓN: Consola central del salpicadero.  
APLICACIÓN: Climatizadores automáticos monozona (versión Basis) y bizona/trizona (versión Komfort) del Audi A5 Coupé 2008.

**1. MISIÓN**  
Recibir la información de los sensores del habitáculo y del exterior, procesar las selecciones térmicas del usuario y gobernar automáticamente los servomotores, el regulador de la turbina y la compresión del circuito frigorífico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Módulo electrónico microprocesado que integra en su frontal el panel de mandos. Procesa continuamente las lecturas de los sensores térmicos, fotosensor doble, humedad y calidad de aire. Calcula las posiciones teóricas de las trampillas y las transmite mediante un único cable de datos (LIN-Bus) a los servomotores conectados en serie. Transmite la solicitud de corriente para la válvula -N280- a la UCE de red de a bordo -J519- vía CAN-Bus.

**3. CARACTERÍSTICAS**  
- **Versión Basis:** Pantalla en MMI, regulación monozona, 1 pulsador giratorio de temperatura, gestiona 6 servomotores.  
- **Versión Komfort:** Pantallas digitales integradas en el panel, regulación bizona/trizona independiente, gestiona 10 servomotores.  
- Incorpora en su interior el termosensor del tablero -G56- y la turbina de aspiración -V42-.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Tensión de alimentación (Borne 30)** | 12 V (tensión de batería) | Medido en bloque de valores 042 campo 4 |
| **Salida de alimentación para sensores** | 5,0 V CC | Medido en bloque de valores 032 campo 1 |
| **Salida de alimentación para servomotores** | 12,0 V CC | Medido en bloque de valores 032 campo 2 |
| **Régimen de la turbina V42** | 2.500 a 3.200 rpm (Basis) / 2.800 a 3.500 rpm (Komfort) | Medido en bloque de valores 036 campo 2 |

**5. ANOMALÍAS FRECUENTES**  
Acumulación de polvo en la rejilla de aspiración de la sonda -G56-; bloqueo por activación de la protección de componentes al sustituir la unidad; o fallo de comunicación en el bus LIN.

**6. COMPORTAMIENTO EN AVERÍA**  
Si la protección de componentes se activa, se desactivan las funciones de confort (calefacción de asientos, selección bizona) y se mantiene únicamente el desempañado de seguridad. Si falla la turbina -V42-, la sonda -G56- mide una temperatura superior a la real del habitáculo y enfría en exceso.

**7. CÓMO COMPROBARLO**  
Mediante equipo OBD en dirección 08: consultar memoria de averías, verificar las tensiones de 5 V y 12 V en el bloque 032, verificar las rpm de la turbina -V42- en el bloque 036 y ejecutar el test de actuadores (test de segmentos de pantalla).

---

### **NOTA DE PROCESO — RED DE SERVOMOTORES EN BUS LIN Y AJUSTE BÁSICO DE APRENDIZAJE / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar la arquitectura de comunicación multiplexada LIN-Bus de los servomotores del climatizador y el procedimiento de asignación de direcciones lógicas y memorización de topes finales (Ajuste Básico). Se aplica en la sustitución de servomotores o de la UCE -J255-.  
📷 IMAGEN: Esquema del circuito primitivo en serie del cableado LIN-Bus uniendo los servomotores A a N con la UCE J255 — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 231

**2. FUNDAMENTO**  
Todos los servomotores montados en el climatizador son físicamente idénticos y cuentan con un microchip interno de bus LIN. Se conectan en serie mediante un único cable de datos de 3 vías (Alimentación 12V, Masa, y LIN-Bus). Durante el Ajuste Básico grupo 004, la UCE asigna automáticamente la dirección lógica a cada motor según su posición física en el cableado. A continuación, en el Ajuste Básico grupo 001, cada motor desplaza su trampilla a ambos extremos registrando los valores de tope en la memoria de -J255-.

**3. CONDICIONES PREVIAS**  
- Vehículo detenido con encendido conectado ("borne 15 ON").  
- Batería con tensión estable (> 12,2 V).  
- Cableado LIN y conectores de servomotores libres de cortocircuitos o interrupciones.

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis OBD (VAS 5051 / VAS 5052).

**5. DESARROLLO**  
1. Si se sustituye un servomotor o la UCE -J255-, seleccionar la función "06 - Ajuste básico" e introducir el **grupo de indicación "004"** ("Asignación automática de direcciones"). La UCE asigna las direcciones lógicas a los servomotores por el orden en que se encuentran conectados en el mazo de cables.  
2. Introducir a continuación el **grupo de indicación "001"** ("Ajuste básico de trampillas"): Los servomotores desplazan progresivamente las trampillas hasta el tope inferior y superior, memorizando las posiciones óhmicas internas.  
3. Durante la ejecución del grupo 001, el testigo de la tecla AC parpadea (en versión Basis) o parpadean los dígitos del display (en versión Komfort).  
4. Esperar a que finalice el proceso (aprox. 1 a 2 minutos) hasta que la pantalla muestre "Ajuste básico ejecutado" y los testigos dejen de parpadear.  
5. Ejecutar el **grupo de indicación "003"** ("Primera puesta en funcionamiento del compresor"): Con motor al ralentí, la UCE hace funcionar el compresor durante 5 minutos para adaptar el rodaje de sus componentes internos.

**6. VALORES DE REFERENCIA**  

| Parámetro / Grupo de indicación | Valor de referencia |
|---|---|
| **Tope inferior autoadaptado** | Valor fijo ~10000 unidades |
| **Tope superior autoadaptado** | Valor comprendido entre 11000 y 20000 unidades |
| **Tolerancia máxima de carrera (Canal adaptación 70)** | Max. 500 unidades de desviación |
| **Tolerancia máxima de tope en trabajo (Canal adaptación 71)** | Max. 150 unidades de desviación |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir dos conectores entre servomotores adyacentes; la UCE les asignará direcciones invertidas en el grupo 004 y las trampillas se moverán al contrario de lo solicitado.  
- Si se corta el cable de datos LIN a la entrada de un servomotor (ej. posición C), ese servomotor y todos los siguientes en la cadena (D a N) quedan inactivos y registran la avería "Direccionamiento automático incorrecto".

**8. VERIFICACIÓN FINAL**  
Verificar en el bloque de valores de medición (grupos 004 a 023) que la posición efectiva de cada chapaleta coincida con el valor teórico (0% a 100%) y comprobar el borrado automático de la avería "Ajuste básico no ejecutado".

**9. SEGURIDAD Y NORMATIVA**  
No aplica.

---

### **NOTA DE ELEMENTO — TRANSMISOR DE PRESIÓN Y TEMPERATURA DEL AGENTE FRIGORÍFICO**
CÓDIGO: G395  
UBICACIÓN: Enroscado en la tubería de alta presión, junto al condensador en el vano motor frontal.  
APLICACIÓN: Medición de alta presión en el circuito frigorífico del Audi A5 Coupé 2008.

**1. MISIÓN**  
Medir de forma continua la presión del refrigerante R134a e informar a la UCE de red de a bordo -J519- y a -J255- para autorizar el funcionamiento del compresor y regular los electroventiladores.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor piezoeléctrico con microprocesador interno. Convierte la presión hidráulica ejercida por el gas en una señal digital multiplexada transmitida por el bus de datos LIN-Bus a la UCE -J519-. La UCE -J519- retransmite la información vía CAN-Bus hacia -J255-. *(Nota: Sustituye al antiguo sensor de alta presión G65 de señal cuadrada y no es intercambiable con él)*.

**3. CARACTERÍSTICAS**  
- Carcasa de plástico de color **GRIS** con conector de 3 vías (Pin 1: Masa; Pin 2: Señal LIN a J519; Pin 3: +12V Borne 75).  
- Rosca provista de válvula de retención primaria que permite sustituir el sensor sin vaciar el refrigerante R134a.

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Valor numérico | Estado del sistema |
|---|---|---|
| **Tensión de alimentación** | 12 V (Borne 75) | Encendido conectado |
| **Umbral de presión mínima de conexión** | > 1,8 bar (presión absoluta) | Habilita la excitación del compresor N280 |
| **Umbral de activación de electroventiladores V7** | > 9,0 bar | Conecta velocidad forzada de condensación |
| **Umbral de presión máxima de desconexión** | > 32,0 bar | Desconecta el compresor por sobrepresión |
| **Lectura en avería / conector desacoplado** | > 40,0 bar (valor fijo sustitutivo) | Bloquea el compresor e inscribe DTC |

**5. ANOMALÍAS FRECUENTES**  
Interrupción de la línea de datos LIN (pin 2) hacia J519; sulfatación de contactos por entrada de agua; o montaje erróneo de un sensor G65 (carcasa negra).

**6. COMPORTAMIENTO EN AVERÍA**  
La UCE -J255- desactiva inmediatamente la excitación de la válvula -N280- (corriente cae a 0 A), deteniendo la compresión, e inscribe el código de avería en -J255- y -J519- mientras activa los electroventiladores a máxima velocidad por seguridad.

**7. CÓMO COMPROBARLO**  
Verificar con polímetro en el conector de 3 vías: Pin 3 = 12 V; Pin 1 = Continuidad a masa. Leer la presión indicada en el grupo de medición 001 campo 4 o grupo 056 campo 1 en J255 (debe coincidir con la lectura de los manómetros de taller). Par de apriete al sustituir: 8 Nm (reemplazar junta tórica violeta/roja).

---

### **NOTA DE ELEMENTO — VÁLVULA REGULADORA PARA COMPRESOR DEL CLIMATIZADOR**
CÓDIGO: N280  
UBICACIÓN: Alojada en la tapa posterior del compresor de climatización (Denso).  
APLICACIÓN: Control dinámico del rendimiento en compresores de cilindrada variable sin embrague magnético.

**1. MISIÓN**  
Ajustar la presión interna en el cárter del compresor para modificar la inclinación del plato oscilante y regular la cilindrada entre el mínimo (+2%) y el máximo (+98%).

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Electroválvula proporcional accionada por modulación de anchura de impulsos (PWM) a una frecuencia fija de 500 Hz emitida por la UCE de red de a bordo -J519- (tras recibir la demanda de corriente calculada por -J255-). Al aumentar la corriente (hasta 0,65 A), la válvula cierra la comunicación entre alta presión y cárter, reduciendo la presión interna y aumentando la carrera de los pistones a plena carga. A 0 A, la válvula abre, sube la presión del cárter y reduce la carrera al mínimo.

**3. CARACTERÍSTICAS**  
Electroválvula de solenoide de 2 vías con conector de 2 polos integrada en el compresor. Excitada por corriente continua modulada en pulso PWM.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condición de trabajo |
|---|---|---|
| **Frecuencia de la señal PWM** | 500 Hz (período constante de 2 ms) | Generada por UCE J519 |
| **Corriente de control** | 0,0 A (desconectado) a 0,65 A (plena carga) | Medido en bloque 001 campo 2 de J255 |
| **Ancho de pulso PWM** | 0% (Econ OFF) a 75%-100% (Temp LO / Plena carga) | Medido con osciloscopio |

**5. ANOMALÍAS FRECUENTES**  
Interrupción o cortocircuito de la bobina electromagnética; agarrotamiento mecánico de la aguja interna por limaduras metálicas; congelación del paso de gas por presencia de humedad en el circuito.

**6. COMPORTAMIENTO EN AVERÍA**  
Si no recibe corriente (0 A), el compresor permanece en cilindrada mínima (~2%), las presiones de alta y baja se igualan entre 4,5 y 6,0 bar y no se genera aire frío. Si se agarrota en posición cerrada, el compresor trabaja continuamente al 100% congelando el evaporador.

**7. CÓMO COMPROBARLO**  
1. Verificar en el bloque de valores de medición 001 de J255: Campo 1 (corriente teórica) y Campo 2 (corriente efectiva medida por J519) deben subir progresivamente hasta ~0,65 A al seleccionar "LO".  
2. Medir la señal cuadrada PWM con osciloscopio entre las vías del conector: Comprobar el período constante de 2 ms (500 Hz) y la variación del ancho de pulso positivo entre el 0% (Econ) y el 80-100% (Auto/LO).

---

### **NOTA DE ELEMENTO — COMPRESOR DE CILINDRADA VARIABLE CON PROTECCIÓN CONTRA SOBRECARGA**
CÓDIGO: Denso 6 SEU 14 (motores 4 y 6 cil.) / Denso 7 SEU 17 (motores 8 cil. FSI)  
UBICACIÓN: Montado en el bloque motor mediante soporte de aluminio con manguitos de ajuste y arrastrado permanentemente por la correa Poly-V.  
APLICACIÓN: Todos los modelos Audi A5 Coupé 2008.

**1. MISIÓN**  
Aspirar el gas refrigerante R134a a baja presión y comprimirlo hacia la línea de alta presión manteniendo una circulación continua de fluido y aceite lubricante.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Compresor de 6 ó 7 pistones axiales accionados por un plato oscilante. Al carecer de acoplamiento magnético, gira ininterrumpidamente mientras el motor esté en marcha. Para evitar la rotura de la correa de accesorios si el compresor se agarrota mecánicamente, el disco de arrastre de la polea incorpora un **elemento de protección contra sobrecarga** (silentblocks de goma/chapa) que se cizalla, permitiendo que la polea siga girando loca sin bloquear el motor.

**3. CARACTERÍSTICAS**  
- Compresor rotativo alternativo de pistones axiales.  
- Sin embrague magnético (accionamiento permanente).  
- Circuito interno de lubricación que garantiza la engrasa de sus partes móviles incluso al +2% de cilindrada (reposo).

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Presión de alta (HP) en trabajo** | 8 a 16 bar | Motor a ralentí/régimen nominal |
| **Presión de baja (LP) en trabajo** | 1,8 a 2,1 bar | Motor a 1.500 rpm constante |
| **Par de apriete del disco de arrastre** | 30 Nm (Denso 6 SEU 14) / 60 Nm (7 SEU 17) | Rosca del eje de accionamiento |
| **Par de apriete tornillos al soporte** | 25 Nm | Tornillos de fijación al bloque |

**5. ANOMALÍAS FRECUENTES**  
Cizallamiento del elemento de protección contra sobrecarga de la polea por rozamiento pesado del compresor; fuga por el retén frontal del eje; o pérdida de compresión por desgaste de láminas.

**6. COMPORTAMIENTO EN AVERÍA**  
Si salta la protección contra sobrecarga, la polea exterior gira impulsada por la correa pero el eje central del compresor permanece totalmente parado, igualándose las presiones de alta y baja.

**7. CÓMO COMPROBARLO**  
- Inspección visual frontal con el motor en marcha: Verificar que el tornillo/eje central gira solidario con la polea exterior. Si la polea gira y el centro está parado, la protección ha saltado por agarrotamiento interno.  
- Tras instalar un compresor nuevo, dar al menos 10 vueltas a mano al eje antes del primer arranque para expulsar el aceite acumulado en las cámaras de compresión.  
📷 IMAGEN: Despiece del disco de arrastre con elementos de goma de la protección contra sobrecarga en la polea del compresor Denso — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 181

---

### **NOTA DE ELEMENTO — SENSOR DE LA CALIDAD DEL AIRE**
CÓDIGO: G238  
UBICACIÓN: Montado en la caja de aguas, junto al conducto de entrada de aire fresco al climatizador.  
APLICACIÓN: Climatizadores de la versión Komfort del Audi A5 Coupé 2008.

**1. MISIÓN**  
Detectar la presencia de sustancias nocivas y gases contaminantes (CO y NOx) en el aire exterior para ordenar el cierre automático de la chapaleta de recirculación.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor semiconductor de óxidos metálicos con microprocesador interno. Mide simultáneamente las concentraciones de monóxido de carbono CO (gases de gasolina) y óxidos de nitrógeno NOx (gases diésel). Modifica su resistencia interna y transmite la información vía LIN-Bus a la UCE -J519-, que la reenvía por CAN-Bus a -J255-.

**3. CARACTERÍSTICAS**  
- Sensor electrónico con conector de 3 polos (Pin 1: +12V Borne 15; Pin 2: Masa Borne 31; Pin 3: Señal LIN a J519).  
- Requiere un tiempo de calentamiento interno de **2 minutos** tras conectar el encendido para estabilizar la resistencia.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condición de funcionamiento |
|---|---|---|
| **Tiempo de caldeo interno** | 2 minutos | Tras conectar el encendido "borne 15" |
| **Tiempo mínimo en recirculación** | 25 segundos | Mantenimiento tras detectar pico de contaminación |
| **Duración máxima en ambiente contaminado** | ~12 minutos | Programa de autoadaptación de sensibilidad |

**5. ANOMALÍAS FRECUENTES**  
Saturación o destrucción del elemento semiconductor por contacto directo con disolventes, petroleado del motor o lavados de motor; indicación de avería falsa durante los 2 minutos de calentamiento inicial.

**6. COMPORTAMIENTO EN AVERÍA**  
La UCE anula la recirculación automática y registra el código DTC. *(Nota: Solo debe sustituirse si la avería permanece estática pasados los 2 minutos de caldeo inicial)*.

**7. CÓMO COMPROBARLO**  
1. Consultar el bloque de medición 058 (campos 1, 3 y 4) en J255.  
2. **Prueba práctica con gas de mechero:** Desmontar el sensor de su alojamiento, mantenerlo conectado, acceder al bloque de valores 058 y aplicar una pequeña ráfaga de gas de mechero sobre la cabeza del sensor; los valores de CO y NOx en los campos 3 y 4 deben subir de inmediato y el campo 3 del grupo 039 debe conmutar a modo recirculación.  
📷 IMAGEN: Prueba funcional del sensor de calidad de aire G238 aplicando gas de mechero sobre el sensor — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 197

---

### **NOTA DE ELEMENTO — FOTOSENSOR PARA RADIACIÓN SOLAR DOBLE**
CÓDIGO: G107  
UBICACIÓN: Montado en la parte central superior del salpicadero, junto a la rejilla de desempañado del parabrisas.  
APLICACIÓN: Climatizadores bizona/trizona del Audi A5 Coupé 2008.

**1. MISIÓN**  
Medir la intensidad de la radiación solar que incide sobre el lado izquierdo y derecho del habitáculo para corregir la temperatura de soplado y la distribución del caudal.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Consta de dos fotodiodos independientes orientados a izquierda y derecha bajo un elemento óptico de filtrado. La radiación solar genera una fotocorriente en los fotodiodos que altera la tensión de retorno hacia J255, permitiendo regular de forma diferenciada el lado del conductor y del acompañante.

**3. CARACTERÍSTICAS**  
Carcasa redonda de plástico fotofiltro oscuro con conector de 4 polos. Alimentado con tensión de referencia de 5 V desde la UCE -J255-.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condición de medida |
|---|---|---|
| **Tensión de alimentación** | 5,0 V CC | Salida de J255 (bloque de valores 032) |
| **Lectura en bloque de valores 041** | Tensión en voltios (V) e intensidad en W/m2 | Campo 1/2 (Izq) y Campo 3/4 (Der) |

**5. ANOMALÍAS FRECUENTES**  
Ocultación de la lente por mapas, documentos u objetos colocados sobre el salpicadero; fallo interno de uno de los fotodiodos.

**6. COMPORTAMIENTO EN AVERÍA**  
La UCE adopta un valor sustitutivo fijo de radiación solar intermedia y registra el código de avería en memoria.

**7. CÓMO COMPROBARLO**  
Acceder al bloque de valores 041 en J255. Tapar el sensor con la mano (la lectura en W/m2 debe caer a cero) y a continuación iluminar directamente con una linterna potente (la radiación en W/m2 y la tensión deben subir proporcionalmente en ambos lados).

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL Y TURBINA DE AIRE FRESCO**
CÓDIGO: J126 (Unidad de control/Regulador) / V2 (Motor de la turbina)  
UBICACIÓN: Montados en la caja de aspiración de aire, detrás de la guantera del acompañante.  
APLICACIÓN: Sistema de ventilación del habitáculo del Audi A5 Coupé 2008.

**1. MISIÓN**  
Impulsar el caudal de aire fresco exterior o recirculado a través de la unidad climática hacia los difusores del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
La UCE -J255- transmite la solicitud de velocidad por el bus LIN hacia el regulador electrónico -J126-. La etapa de potencia de -J126- ajusta la tensión continua aplicada al motor -V2- mediante regulación de masa, variando suavemente las revoluciones del rodete.

**3. CARACTERÍSTICAS**  
- Motor eléctrico -V2- de corriente continua con rodete centrífugo de álabes equilibrado dinámicamente.  
- Regulador electrónico -J126- provisto de disipador térmico de aluminio refrigerado por el propio flujo de aire de aspiración.

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Valor numérico | Condición de medida |
|---|---|---|
| **Tensión teórica de soplado** | 2,0 V (mínimo) a 12,0 V (máximo / HI) | Medido en bloque 066 campo 4 |
| **Tensión en modo recirculación / clima indep.** | Limitada a max. 7,0 V (canal adaptación 15) | Para reducir sonoridad de soplado |
| **Consumo de corriente máximo** | Hasta 20 - 25 A | A máxima velocidad de turbina |

**5. ANOMALÍAS FRECUENTES**  
Desgaste de escobillas del motor -V2-; sobrecalentamiento del disipador de -J126- por filtro antipolen atascado; o ruidos y vibraciones por rotura de álabes del rodete.

**6. COMPORTAMIENTO EN AVERÍA**  
La turbina no gira o se queda fija en la máxima velocidad. La UCE -J255- registra el código DTC de -J126- o -V2-.

**7. CÓMO COMPROBARLO**  
1. Consultar el bloque de valores 066 en J255: Campo 1 (corriente teórica A), Campo 3 (tensión efectiva V) y Campo 4 (tensión teórica V).  
2. En diagnosis de actuadores: Activar la turbina -V2- y verificar el incremento progresivo del caudal de aire y de la tensión.

---

### **NOTA DE ELEMENTO — ELEMENTO CALEFACTOR ADICIONAL ELÉCTRICO (PTC)**
CÓDIGO: Z35  
UBICACIÓN: Montado en el módulo del climatizador, directamente detrás del radiador de calefacción de agua.  
APLICACIÓN: Exclusivo para vehículos con motor Diésel (TDI) sin calefacción independiente. *(En motores de gasolina se instala un "cuerpo lobular" de plástico para mantener idéntica aerodinámica)*.

**1. MISIÓN**  
Suministrar calefacción eléctrica inmediata al habitáculo tras el arranque en frío en motores diésel de alta eficiencia y bajo desprendimiento térmico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Radiador eléctrico compuesto por elementos de resistencia de coeficiente de temperatura positivo (PTC). A baja temperatura, su resistencia eléctrica es reducida y absorbe la máxima corriente; a medida que se calienta, su resistencia sube autorregulando el calor. Es gestionado por la UCE del motor en 3 etapas mediante dos relés (J359 para baja potencia y J360 para alta potencia) tras recibir la demanda de J255.

**3. CARACTERÍSTICAS**  
- Potencia calorífica máxima: **1.000 W** (al activar las 3 etapas).  
- Tres bornes de alimentación eléctrica (contactos A, B y C) y masa común.

**4. VALORES DE TRABAJO**  

| Etapa de potencia | Relés activados / Bornes | Potencia entregada |
|---|---|---|
| **Etapa 1 (Baja)** | Relé J359 en Borne A | ~330 W |
| **Etapa 2 (Media)** | Relé J360 en Bornes B y C | ~660 W |
| **Etapa 3 (Alta)** | Relés J359 y J360 en A, B y C | 1.000 W |
| **Condiciones de activación J255** | Motor > 8 s y > 500 rpm; Temp. motor < 75 ºC; Temp. ext. < 8 ºC; Batería > 12,2 V | Carga alternador C < 30-77% |

**5. ANOMALÍAS FRECUENTES**  
Fogueo de contactos en los relés J359/J360; o inhibición de la activación por batería baja o sobrecarga del alternador (> 95%).

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de calefacción en el habitáculo durante los primeros minutos de marcha en invierno con el motor diésel frío.

**7. CÓMO COMPROBARLO**  
Consultar la solicitud en el bloque de valores 047 campo 1 en J255 (debe marcar solicitud activa). Consultar en la UCE del motor (dirección 01) la activación de los relés J359 y J360 y medir la corriente absorbida con pinza amperimétrica en los cables A, B y C (hasta ~80 A a plena potencia).  
📷 IMAGEN: Esquema interno de las resistencias PTC del elemento calefactor adicional Z35 y bornes de conexión A, B, C — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 160

---

### **NOTA DE PROCESO — LIMPIEZA DEL EVAPORADOR POR ULTRASONIDOS / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer los pasos operativos para la desinfección y eliminación de microorganismos, mohos y bacterias acumulados en las aletas del evaporador mediante nebulización por ultrasonidos. Se aplica ante reclamaciones de malos olores en el habitáculo.  
📷 IMAGEN: Equipo nebulizador por ultrasonidos VAS 6189 colocado en el vano reposapiés del acompañante — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 225

**2. FUNDAMENTO**  
La humedad condensada en el evaporador favorece la proliferación de bacterias y hongos que generan malos olores y reacciones alérgicas al encender la ventilación. El equipo ultrasónico atomiza un producto desinfectante líquido específico en microgotas finas que son aspiradas por la turbina en modo de recirculación, cubriendo la totalidad de las aletas del evaporador y eliminando la carga bacteriana.

**3. CONDICIONES PREVIAS**  
- Filtro de polvo y polen suelto y desmontado del climatizador.  
- Tapa de la cavidad del filtro de habitáculo montada de nuevo.  
- Motor en marcha con puertas, ventanillas y techo corredizo cerrados.

**4. EQUIPO Y MATERIAL**  
- Equipo de limpieza de A/C por ultrasonidos (-VAS 6189-).  
- Dosis de líquido desinfectante específico (-VAS 6189/1-).  
- Filtro de polvo y polen nuevo.

**5. DESARROLLO**  
1. Desmontar el filtro antipolen viejo y limpiar la cavidad de aspiración de hojas y suciedad.  
2. Volver a cerrar la tapa de la cavidad del filtro en el climatizador.  
3. Arrancar el motor del vehículo.  
4. Seleccionar en el panel de mandos -J255- la temperatura mínima ("LO"), desactivar el compresor (tecla AC OFF con testigo apagado), seleccionar la dirección de salida por los difusores del tablero de instrumentos y ajustar la turbina al nivel mínimo de soplado.  
5. Activar la función de **recirculación de aire**.  
6. Agitar el frasco de fluido -VAS 6189/1- e introducir su contenido en el depósito del equipo ultrasonidos -VAS 6189-.  
7. Colocar el equipo nebulizador en el suelo del vano reposapiés del acompañante y orientar el tubo flexible de salida hacia la boca de aspiración de la recirculación (detrás de la guantera).  
8. Conectar el equipo de ultrasonidos, cerrar todas las puertas y dejar actuar el sistema durante **15 a 20 minutos** hasta agotar el fluido.  
9. Desactivar el equipo, abrir todas las puertas del vehículo y ventilar el habitáculo durante un mínimo de 10 minutos antes de entregar el vehículo.  
10. Instalar un filtro antipolen nuevo.

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Duración del ciclo de nebulización** | 15 a 20 minutos | Modo recirculación, turbina al mínimo |
| **Tiempo de ventilación final** | Mínimo 10 minutos | Puertas abiertas tras el tratamiento |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Realizar el proceso con el compresor conectado (AC ON); el evaporador frío condensa el vapor desinfectante en forma de agua drenándolo al exterior antes de que limpie la superficie.  
- Dejar el filtro antipolen viejo instalado; el filtro absorbe el fluido impidiendo que llegue al evaporador.

**8. VERIFICACIÓN FINAL**  
Ausencia de malos olores al activar la ventilación en modo de aire fresco y recirculación.

**9. SEGURIDAD Y NORMATIVA**  
No permanecer en el interior del habitáculo durante la nebulización activa ni inhalar directamente el vapor desinfectante concentrado.

---

### **NOTA DE PROCESO — COMPROBACIÓN DE LA POTENCIA FRIGORÍFICA Y SALTO TÉRMICO / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Establecer el procedimiento de verificación del rendimiento del circuito frigorífico midiendo la temperatura de salida del evaporador y el salto térmico en los difusores centrales. Se aplica en el diagnóstico de falta de rendimiento del aire acondicionado.  
📷 IMAGEN: Gráfica de tolerancia de la temperatura de salida del evaporador G263 en función de la temperatura ambiente — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 317

**2. FUNDAMENTO**  
Con el compresor trabajando a plena carga (N280 alimentada a 0,65 A), el R134a ebulle en el evaporador absorbiendo la energía del aire soplado. La sonda de temperatura de salida del evaporador -G263- permite verificar la regulación de la masa de refrigerante. Contrastando la lectura de -G263- con la temperatura ambiente y las presiones del circuito se aísla si el fallo es de compresión, carga de gas o de regulación de trampillas.

**3. CONDICIONES PREVIAS**  
- Temperatura ambiente exterior > 15 ºC.  
- Motor a temperatura de servicio (> 80 ºC).  
- Correa Poly-V y condensador limpios y en buen estado.  
- Puertas, ventanillas y capó delantero cerrados.  
- Climatizador en modo "Auto", preselección de temperatura en "LO" (mínima), compresor activado (AC ON), turbina a régimen máximo (nivel 10) y difusores del salpicadero abiertos.

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis OBD (VAS 5051 / VAS 5052).  
- Termómetro digital de varilla / contacto para difusores.

**5. DESARROLLO**  
1. Conectar el equipo de diagnosis y verificar en el bloque 001 que la corriente de N280 sea > 0,55 A y la presión en el campo 4 se eleve normalmente.  
2. Seleccionar el modo de **recirculación de aire** e incrementar el régimen del motor a **2.000 rpm constantes** durante 5 minutos.  
3. Acceder al bloque de valores de medición **grupo 035 campo 1** para leer la temperatura de la sonda del evaporador -G263-.  
4. Comparar la lectura de -G263- con la gráfica de tolerancia oficial:  
   - A 20 ºC ambiente: La temperatura de -G263- debe situarse entre **2 ºC y 5 ºC**.  
   - A 30 ºC ambiente: La temperatura de -G263- debe situarse entre **3 ºC y 7 ºC**.  
5. Medir con el termómetro de sonda la temperatura del aire expelido por los difusores centrales del tablero (debe ser como máximo 5 ºC superior a la temperatura indicada por -G263-).

**6. VALORES DE REFERENCIA**  

| Temperatura Ambiente | Temp. Teórica Evaporador (-G263-) | Presión Alta (HP) en Trabajo |
|---|---|---|
| **15 ºC a 20 ºC** | 2,0 ºC a 5,0 ºC | 9,0 a 14,0 bar |
| **25 ºC a 30 ºC** | 3,0 ºC a 7,0 ºC | 12,0 a 18,0 bar |
| **35 ºC a 40 ºC** | 5,0 ºC a 9,0 ºC | 16,0 a 24,0 bar |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- **Presión HP no sube y G263 > 10 ºC:** Subcarga de refrigerante R134a por fugas o válvula N280 averiada.  
- **Presión HP > 25 bar y G263 > 10 ºC:** Falta de condensación; comprobar suciedad en el condensador o fallo de los electroventiladores V7/V177.  
- **G263 < 0 ºC sostenido con pérdida de caudal:** Congelación del evaporador por humedad en el circuito o sonda G263 descalibrada.

**8. VERIFICACIÓN FINAL**  
Estabilización de la lectura de temperatura en los difusores centrales dentro de los márgenes de la curva de tolerancia.

**9. SEGURIDAD Y NORMATIVA**  
No aplica.

---

### **NOTA DE PROCESO — PUESTA EN FUNCIONAMIENTO TRAS EL RELLENADO DE REFRIGERANTE / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer el protocolo de arranque y rodaje inicial del compresor tras sustituir componentes del circuito o recargar el refrigerante R134a. Se aplica en el acabado de reparaciones del circuito frigorífico.  
📷 IMAGEN: Placa de datos de llenado de agente frigorífico R134a colocada en el vano motor — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 4

**2. FUNDAMENTO**  
Los compresores Denso de cilindrada variable giran continuamente arrastrados por la correa de accesorios al carecer de embrague electromagnético. Poner en marcha el motor con el circuito bajo vacío o acelerar bruscamente tras el llenado provoca el retorno masivo de líquido o la falta de aceite en las cámaras de compresión, causando el golpe de ariete y el agarrotamiento mecánico del plato oscilante.

**3. CONDICIONES PREVIAS**  
- Circuito de refrigerante R134a y aceite para máquinas frigoríficas cargado con la masa nominal especificada en la placa del vano motor.  
- En caso de compresor nuevo o circuito lavado: haber girado el eje del compresor manualmente un mínimo de **10 vueltas completas** antes de montarlo.

**4. EQUIPO Y MATERIAL**  
- Estación de carga de A/C.  
- Equipo de diagnosis OBD.

**5. DESARROLLO**  
1. En caso de compresor recién instalado, hacer girar a mano el eje central de la polea 10 vueltas completas en su sentido de rotación antes del arranque.  
2. Arrancar el motor del vehículo manteniendo el compresor **desactivado** (modo "Econ" / tecla AC OFF con testigo apagado).  
3. Esperar a que el régimen del motor se estabilice completamente en ralentí.  
4. Abrir todos los difusores del tablero de instrumentos y seleccionar la temperatura en "LO" (mínima) en el panel -J255-.  
5. Activar el compresor pulsando la tecla AC (modo "Auto" / AC ON) y mantener el motor funcionando estrictamente a **régimen de ralentí durante un mínimo de 5 minutos**.  
6. Si excepcionalmente se requiere arrancar el motor con el circuito de refrigerante totalmente vacío por motivos de pruebas de taller: asegurar que el circuito esté ensamblado, no exista vacío en las tuberías, se conserve como mínimo 1/4 de la cantidad nominal de aceite en el cárter del compresor y no superar bajo ninguna circunstancia las 2.500 rpm.

**6. VALORES DE REFERENCIA**  

| Operación de rodaje | Valor de referencia |
|---|---|
| **Tiempo de rodaje a ralentí tras llenado** | Mínimo 5 minutos continuos |
| **Giros manuales previos al eje del compresor** | 10 vueltas completas |
| **Régimen máximo si el circuito está vacío** | Máximo 2.500 rpm |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
Acelerar el motor inmediatamente después de efectuar la carga de gas provoca la migración repentina de refrigerante líquido al compresor, cizallando los pistones y haciendo saltar la protección contra sobrecarga de la polea.

**8. VERIFICACIÓN FINAL**  
Comprobación de la estabilidad de presiones de alta y baja en la batería de manómetros y ausencia de ruidos o vibraciones en la polea del compresor.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

COBERTURA: documento «Audi A5 Coupé_2008_aire acondicionado.pdf», páginas 1 a 414 de 414. [completo]

---

💡 ¿Quieres que pasemos a procesar la siguiente fuente del cuaderno?