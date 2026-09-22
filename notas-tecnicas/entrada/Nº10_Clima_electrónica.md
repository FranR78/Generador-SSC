### NOTA DE PROCESO — EFECTOS TÉRMICOS Y CONFORT EN EL HABITÁCULO / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la influencia de la temperatura, la humedad y el flujo de aire del habitáculo sobre las capacidades físicas y mentales del conductor, justificando la necesidad del climatizador como elemento de seguridad activa. Aplica al estudio térmico en vehículos de turismo.

**2. FUNDAMENTO**
El calor excesivo constituye una sobrecarga física para el cuerpo humano que reduce la aportación de oxígeno al cerebro. Una temperatura en el habitáculo de entre 25 ºC y 35 ºC disminuye un 20% la capacidad perceptiva y la facultad combinatoria del conductor, lo que equivale en falta de concentración a una tasa de alcoholemia de 0,5 g/l de sangre.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Zonas de confort y estrés térmico:**
  - *Zona A (Margen agradable):* Temperatura interior entre 20 ºC y 22 ºC.
  - *Zona B (Carga climatológica media-alta):* Aumento de transpiración, frecuencia cardíaca y temperatura corporal.
  - *Zona C (Sobrecarga / Estrés climatológico):* Reducción acusada de la atención y tiempos de reacción.
* **Caudal de aire necesario según la temperatura ambiental exterior:**
  - *Ambiente muy frío (-20 ºC exterior):* Aumentar temperatura interior a 28 ºC con un caudal de aire de 8 kg/min.
  - *Ambiente medio (10 ºC exterior):* Aumentar temperatura interior a 21 ºC con un caudal de aire de 4 kg/min.
  - *Ambiente muy cálido (40 ºC exterior):* Disminuir temperatura interior a 23 ºC con un caudal de aire de 10 kg/min.

📷 IMAGEN: Gráfica de curvas de agrado térmico y caudal de aire necesario según la temperatura ambiental — Fuente: Nº10. Clima electrónica.pdf, pág. 98

**6. VALORES DE REFERENCIA**
| Área Corporal | Con Climatizador (1 h a 30 ºC ext. con sol) | Sin Climatizador (1 h a 30 ºC ext. con sol) |
| :--- | :--- | :--- |
| **Cabeza** | 23 ºC | 42 ºC |
| **Tórax** | 24 ºC | 40 ºC |
| **Pies** | 28 ºC | 35 ºC |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Considerar el equipo de climatización exclusivamente como un accesorio de confort; se trata de un elemento de seguridad activa de primer orden.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
Estudios de la Organización Mundial de la Salud (OMS) sobre reducción de capacidad de reacción por estrés térmico.

---

### NOTA DE PROCESO — CLIMATIZACIÓN CON REGULACIÓN MANUAL / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la arquitectura y la lógica de funcionamiento de un equipo de aire acondicionado con regulación manual de temperatura, caudal y distribución de aire.

**2. FUNDAMENTO**
El ajuste de la temperatura y la orientación del caudal se realiza mecánicamente mediante cables Bowden conectados a mandos giratorios. El propio conductor actúa como unidad de control y como actuador, evaluando la temperatura y corrigiendo manualmente los parámetros.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* El aire exterior pasa por el evaporador para ser enfriado, deshumidificado y depurado.
* Según la posición de la trampilla de temperatura accionada por cable, una parte o la totalidad del caudal se desvía a través del radiador de calefacción para obtener la mezcla.
* El caudal se selecciona manualmente mediante un conmutador de 4 velocidades de la turbina.
* Las variaciones de temperatura causadas por la velocidad del vehículo, temperatura del motor o cambios atmosféricos deben ser corregidas manualmente por el conductor.

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Sobrecargar al conductor con correcciones manuales continuas en los mandos durante la conducción.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — CLIMATIZACIÓN CON REGULACIÓN AUTOMÁTICA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la arquitectura electrónica y la lógica de control automático de temperatura, caudal de aire y distribución en un climatizador automático.

**2. FUNDAMENTO**
Procesamiento centralizado de señales procedentes de sensores térmicos, fotodiodos y tramas del CAN-Bus. La unidad de control calcula las órdenes de salida y gobierna servomotores con potenciómetros de posición y un regulador electrónico de turbina.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* La UCE recibe datos de temperatura interior, exterior, aire aspirado, difusores, radiación solar y datos del CAN-Bus (velocidad del vehículo, régimen de motor, tiempo parado).
* Compara los valores reales con la temperatura de consigna seleccionada por el usuario.
* Alimenta de forma independiente los servomotores de las trampillas (mezcla, distribución, recirculación) y el módulo regulador de la turbina de aire.
* Los potenciómetros de retorno informan a la UCE de la posición exacta de cada servomotor. Cualquier fallo queda grabado en la memoria de averías.

📷 IMAGEN: Cuadro sinóptico de sensores, UCE y actuadores de un sistema de climatización automática — Fuente: Nº10. Clima electrónica.pdf, pág. 102

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Interpretar una falta de movimiento de la trampilla como un fallo mecánico sin comprobar previamente la señal del potenciómetro de posición.

**8. VERIFICACIÓN FINAL**
Verificar la ausencia de averías registradas en la memoria de la UCE tras la prueba de funcionamiento.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — SENSOR DE TEMPERATURA EXTERIOR Y DE AIRE ASPIRADO
UBICACIÓN: En el paragolpes delantero o en el espejo retrovisor derecho (exterior); en el canal de entrada de aire de la unidad climática (aire aspirado).
APLICACIÓN: Sistemas de climatización electrónica.

**1. MISIÓN**
Medir la temperatura del aire exterior atmosférico y del aire fresco de entrada para la regulación de las trampillas de mezcla, recirculación, velocidad de turbina e indicación en el Cuadro de instrumentos.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termistor de Coeficiente de Temperatura Negativo (NTC). Su resistencia eléctrica disminuye a medida que aumenta la temperatura. La UCE del climatizador suele utilizar la más baja de las dos señales para sus cálculos térmicos.

**3. CARACTERÍSTICAS**
Sensores térmicos NTC de 2 vías de conexión.

**4. VALORES DE TRABAJO**
* Valor sustitutivo de emergencia (si fallan ambos sensores): 10 ºC fijos.

**5. ANOMALÍAS FRECUENTES**
Corte de cableado por impactos en el paragolpes o por el plegado del espejo retrovisor, o deriva de la resistencia NTC.

**6. COMPORTAMIENTO EN AVERÍA**
Si hay dos sensores y falla uno, se utiliza la señal del sensor operativo. Si fallan ambos, la UCE adopta 10 ºC fijos. Si falla el exterior, desaparece la indicación en el cuadro. En climatizadores de un solo sensor exterior, la avería puede desacoplar el compresor de A/C.

**7. CÓMO COMPROBARLO**
Medir la resistencia eléctrica entre bornes con un polímetro y comparar con la curva NTC, o comprobar la lectura en el grupo de valores de medición del equipo de diagnosis.

---

### NOTA DE ELEMENTO — INTERRUPTOR TÉRMICO
UBICACIÓN: En la caja de aguas del vano motor o zonas próximas.
APLICACIÓN: Circuito eléctrico de alimentación del embrague del compresor de A/C.

**1. MISIÓN**
Desconectar la alimentación eléctrica del embrague del compresor cuando la temperatura desciende de 5 ºC para prevenir la congelación del agua en el evaporador.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Interruptor térmico bimetálico normalmente cerrado instalado en serie con la línea de alimentación del compresor.

**3. CARACTERÍSTICAS**
Termocontacto bimetálico de 2 vías con umbral térmico fijo.

**4. VALORES DE TRABAJO**
* Umbral de apertura de contactos: Temperatura inferior a 5 ºC (Contactos cerrados a ≥ 5 ºC; Abiertos a < 5 ºC).

**5. ANOMALÍAS FRECUENTES**
Falso contacto interno o inmovilización de la lámina bimetálica por corrosión.

**6. COMPORTAMIENTO EN AVERÍA**
No dispone de función de emergencia. Si los contactos quedan agarrotados en posición de cierre, el compresor sigue funcionando por debajo de 5 ºC provocando la congelación del evaporador.

**7. CÓMO COMPROBARLO**
Medir continuidad con un polímetro entre sus bornes: debe marcar 0 Ω con temperaturas iguales o superiores a 5 ºC y resistencia infinita (circuito abierto) al enfriarlo por debajo de 5 ºC.

---

### NOTA DE ELEMENTO — TERMOSENSOR DE TEMPERATURA INTERIOR
UBICACIÓN: Integrado en la propia UCE/panel de mandos del climatizador o montado de forma independiente en el salpicadero.
APLICACIÓN: Sistemas de climatización electrónica.

**1. MISIÓN**
Medir la temperatura real del aire del habitáculo para permitir a la UCE calcular la posición de la trampilla de mezcla.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Resistencia NTC combinada con un electromotor que acciona una pequeña turbina para forzar un flujo continuo de aire del habitáculo sobre la sonda.

**3. CARACTERÍSTICAS**
Sensor compacto NTC con microturbina de aspiración integrada.

**4. VALORES DE TRABAJO**
* Valor sustitutivo de emergencia en avería: Valor fijo comprendido entre 22 ºC y 26 ºC (según el fabricante).

**5. ANOMALÍAS FRECUENTES**
Atascamiento mecánico del eje de la turbina por acumulación de pelusas/polvo o degradación del termistor NTC.

**6. COMPORTAMIENTO EN AVERÍA**
La UCE sustituye la señal por el valor fijo de 22–26 ºC. Al seleccionar una temperatura diferente a la de referencia, el sistema calienta o enfría el habitáculo sin límite por falta de señal de retorno real.

**7. CÓMO COMPROBARLO**
Medir la resistencia eléctrica de la NTC con un polímetro y verificar la tensión de alimentación y el giro libre de la turbina.

---

### NOTA DE ELEMENTO — TERMOSENSORES DE TEMPERATURA DEL DIFUSOR CENTRAL Y DE ZONA DE PIES
UBICACIÓN: En la unidad climática, situados en la salida de aire del difusor central y en la salida del canal de la zona de los pies.
APLICACIÓN: Sistemas de climatización electrónica.

**1. MISIÓN**
Medir la temperatura del aire tratado que se introduce por las salidas superior e inferior del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Sondas térmicas del tipo NTC. La UCE del climatizador procesa el valor medio de las lecturas de ambos sensores para regular la temperatura de entrada.

**3. CARACTERÍSTICAS**
Dos sondas térmicas NTC con campo de medición comprendido entre -40 ºC y +85 ºC.

**4. VALORES DE TRABAJO**
* Rango de temperatura de medición: -40 ºC a +85 ºC.

**5. ANOMALÍAS FRECUENTES**
Cortocircuito a masa, corte en el cableado o derivas resistivas.

**6. COMPORTAMIENTO EN AVERÍA**
Al dejar de informar uno de los sensores, el climatizador cancela la regulación automática y mantiene fijos los parámetros existentes en el momento de la avería.

**7. CÓMO COMPROBARLO**
Medir la resistencia de los sensores con un polímetro a diferentes temperaturas y comprobar los valores devueltos en la máquina de diagnosis.

---

### NOTA DE ELEMENTO — TERMOSENSOR PARA LA TEMPERATURA DEL EVAPORADOR
UBICACIÓN: En la unidad climática, situado justo a la salida del evaporador o insertado entre sus aletas.
APLICACIÓN: Climatizadores con compresor de cilindrada fija (posiblemente no se instale en compresores de cilindrada variable).

**1. MISIÓN**
Registrar la temperatura del aire enfriado a la salida del evaporador para regular el compresor y evitar la formación de hielo en el panal.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termorresistencia NTC que altera su valor ohmico según la temperatura del caudal de aire saliente del evaporador.

**3. CARACTERÍSTICAS**
Sonda de contacto/inmersión NTC de 2 vías.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Corte del cableado por vibraciones o derivas en la resistencia NTC.

**6. COMPORTAMIENTO EN AVERÍA**
Ante la falta de señal o avería del compresor, el sistema pasa a regularse exclusivamente por la señal del sensor MAP de alta presión, limitando el rendimiento del compresor para evitar la congelación del evaporador.

**7. CÓMO COMPROBARLO**
Medir la resistencia de la NTC entre sus terminales con un polímetro y verificar la coherencia de la señal mediante el equipo de diagnosis.

---

### NOTA DE PROCESO — SEÑAL DE CARGA ELÉCTRICA DEL ALTERNADOR / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la estrategia de protección eléctrica del vehículo mediante el corte del compresor y electroventiladores en situaciones de sobrecarga del alternador.

**2. FUNDAMENTO**
La UCE de la red de a bordo evalúa el rendimiento del alternador (borne L y +/DF). Si la carga supera un umbral límite, emite un mensaje digital vía CAN Confort hacia la UCE del climatizador para reducir la demanda eléctrica y mecánica sobre el motor.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* El alternador transmite su estado mediante una señal digital a la UCE de red de a bordo.
* Al detectarse una carga límite, la UCE de red de a bordo emite el mensaje correspondiente por la línea CAN-Bus de confort.
* La UCE del climatizador recibe la trama, desactiva la bobina del compresor y desconecta los electroventiladores para prevenir la descarga de la batería.

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* No existe función de emergencia; en caso de ausencia o corte de la señal de carga del alternador, la función de protección queda totalmente desactivada.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — INTERRUPTOR DE MARCHA ATRÁS
UBICACIÓN: Montado sobre la carcasa de la caja de cambios.
APLICACIÓN: Sistemas con recirculación de aire automática y gestión de red de a bordo.

**1. MISIÓN**
Informar del engranamiento de la marcha atrás para activar la recirculación e impedir la entrada de gases de escape al habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Conmutador mecánico accionado por el selector interno del cambio. Envía una señal analógica a la UCE de red de a bordo, la cual vuelca la información a la red CAN Confort para la UCE del climatizador.

**3. CARACTERÍSTICAS**
Conmutador eléctrico de posición de 2 vías.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Falso contacto en los bornes o desgaste de la leva accionadora.

**6. COMPORTAMIENTO EN AVERÍA**
No hay función de emergencia. Si falta la señal, la entrada de aire exterior se mantiene abierta al circular marcha atrás.

**7. CÓMO COMPROBARLO**
Medir la continuidad entre sus terminales al insertar la marcha atrás con un polímetro o verificar la recepción del mensaje CAN en el equipo de diagnosis.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL DEL CLIMATIZADOR Y PANEL DE MANDOS
UBICACIÓN: Consola central del salpicadero.
APLICACIÓN: Climatizadores electrónicos automáticos.

**1. MISIÓN**
Recoger las selecciones del usuario, procesar las señales de los sensores térmicos y gobernar los actuadores del sistema de climatización.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Centralita electrónica con microprocesador integrada en un conjunto compacto con botones de selección (AUTO, ECON, recirculación, luneta, etc.) y pantallas indicadoras LCD.

**3. CARACTERÍSTICAS**
Unidad compacta e indivisible conectada a los sensores, actuadores y red CAN-Bus del vehículo.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Fallo de visualización en las pantallas LCD, avería en la placa de circuito impreso o desgaste de los microcontactos de los botones.

**6. COMPORTAMIENTO EN AVERÍA**
Interrupción de la regulación automática o fallo total del sistema, registrando códigos de avería en su memoria interna.

**7. CÓMO COMPROBARLO**
Efectuar la lectura de la memoria de averías, diagnóstico de actuadores y verificación de bloques de medición mediante el equipo de diagnosis de taller.

---

### NOTA DE ELEMENTO — FOTOSENSOR PARA RADIACIÓN SOLAR (SIMPLE Y DOBLE)
UBICACIÓN: Parte central del tablero de instrumentos / rejilla de salida de aire hacia el parabrisas.
APLICACIÓN: Climatizadores automáticos (simple en monozona, doble en sistemas bizona).

**1. MISIÓN**
Medir la intensidad y el ángulo de incidencia de los rayos solares para corregir el cálculo de la temperatura interior, la mezcla de aire y la velocidad de la turbina.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Fotodiodo protegido por un elemento óptico apantallador. Cuando la radiación incide oblicuamente (provocando mayor sensación térmica en los ocupantes), la óptica canaliza más luz al fotodiodo, aumentando la intensidad de corriente que lo atraviesa y modificando la tensión de salida.

**3. CARACTERÍSTICAS**
Fotodiodo (o doble fotodiodo en bizona) alojado en carcasa con filtro y elemento óptico. Alimentado a 5 V por la UCE.

**4. VALORES DE TRABAJO**
* Tensión de alimentación desde la UCE: 5 V.
* Tensión de salida con luz intensa: Elevación de tensión hasta un valor próximo a los 3 V (medido con osciloscopio).

**5. ANOMALÍAS FRECUENTES**
Interrupción del cableado, suciedad en la lente exterior o sustitución del parabrisas atérmico original por uno convencional sin recalibrar.

**6. COMPORTAMIENTO EN AVERÍA**
En fotosensor doble, si falla un fotodiodo, la UCE adopta la señal del operativo. Si fallan ambos (o en sensor simple), la UCE asume un valor fijo sustitutivo de radiación intermedia dentro de su escala.

**7. CÓMO COMPROBARLO**
Verificar la llegada de 5 V con el polímetro. Conectar osciloscopio a la salida de señal y aplicar una fuente de luz intensa sobre el sensor: la tensión debe aumentar progresivamente hasta aproximarse a 3 V.

📷 IMAGEN: Estructura interna del fotosensor con fotodiodo y elemento óptico — Fuente: Nº10. Clima electrónica.pdf, pág. 107
📷 IMAGEN: Verificación con osciloscopio de la señal del fotosensor al acercar luz intensa — Fuente: Nº10. Clima electrónica.pdf, pág. 108

---

### NOTA DE PROCESO — SEÑALES SUPLEMENTARIAS DE CONTROL (TIEMPO PARADO, VELOCIDAD Y REVOLUCIONES) / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la función de las señales de tiempo parado (Tp), velocidad de marcha (v) y régimen del motor (n) en la optimización del confort y la protección del compresor.

**2. FUNDAMENTO**
Intercambio de datos a través de la red CAN-Bus entre la UCE del climatizador, el Cuadro de instrumentos, el ABS y la UCE del motor para adaptar la masa de aire de entrada y evitar pérdidas de potencia o sobreenfriamientos tras el arranque.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Tiempo del vehículo parado (Tp):** Medido desde el corte de encendido. Al arrancar de nuevo, la UCE mantiene los valores de temperatura previos a la parada para evitar el sobreenfriamiento inicial que provocaría el calor radiado en el vano motor.
* **Velocidad de marcha (v):** Procedente del ABS/velocímetro. Al aumentar la velocidad del vehículo, la UCE reduce progresivamente la sección de la chapaleta de velocidad para compensar la presión dinámica y mantener constante el caudal de aire introducido.
* **Régimen de revoluciones (n):** Procedente de la UCE de motor. El compresor no se acopla hasta que el ralentí se estabiliza, se desactiva con el motor parado y se desconecta durante unos segundos al acelerar a fondo (kick-down/adelantamiento) para ofrecer la máxima potencia.

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* No aplica.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — REGULACIÓN AUTOMÁTICA DE TEMPERATURA SEGÚN CONDICIONES EXTERIORES / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica el comportamiento de los circuitos de mezcla y paso de aire a través del evaporador y radiador de calefacción en función de la temperatura exterior.

**2. FUNDAMENTO**
Ajuste automático de la trayectoria del flujo de aire forzado mediante servomotores para mantener invariable la temperatura de consigna seleccionada en la pantalla.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Temperatura exterior fría:** El aire de entrada se dirige de forma prioritaria a través del radiador de calefacción antes de entrar al habitáculo.
* **Temperatura exterior caliente:** El aire de entrada se canaliza por el evaporador donde se enfría, deshidrata y depura sin pasar por la calefacción.
* **Temperatura exterior intermedia:** El aire atraviesa el evaporador y posteriormente una fracción del caudal se calienta en el radiador de calefacción para obtener la mezcla óptima.

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* No aplica.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — DISTRIBUCIÓN Y MEZCLA DE AIRE BIZONA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la lógica de control para la regulación independiente de temperatura entre la zona del conductor y del acompañante.

**2. FUNDAMENTO**
División física de la carcasa de distribución de aire en canales independientes para los lados izquierdo y derecho del habitáculo, regulados por servomotores mecánicos dedicados.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* La carcasa climática divide el aire tratado en lado izquierdo y derecho.
* Un servomotor de temperatura controla la mezcla del lado del conductor y un segundo servomotor controla de forma independiente el lado del acompañante.
* El sistema combina las proporciones de aire frío y caliente según las consignas del panel de mandos, logrando una sensación térmica diferenciada a la salida de los aireadores.
* En vehículos de alta gama, una segunda unidad climática en la zona trasera permite regular hasta 4 zonas independientes.

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* No aplica.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — SENSOR DE CALIDAD DEL AIRE
UBICACIÓN: En el canal de entrada de aire de la unidad climática, junto al sensor de temperatura.
APLICACIÓN: Climatizadores automáticos dotados de función de recirculación automática.

**1. MISIÓN**
Detectar la presencia de gases contaminantes (oxidables y reducibles) en el aire exterior para enviar una señal digital a la UCE que active automáticamente la recirculación de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Semiconductor de óxido mixto de dióxido de estaño (SnO2) alimentado por la UCE que trabaja a una temperatura de 350 ºC. La absorción o cesión de oxígeno en su superficie modifica el valor ohmico de su resistencia:
* *Gases oxidables (CO, vapores de gasolina, hidrocarburos, hexano, benceno, n-heptano):* Liberan oxígeno de la zona de medición y reducen su resistencia.
* *Gases reducibles (NOx, SO2, CS2, H2S):* Ceden oxígeno al sensor y aumentan su resistencia.
La electrónica interna convierte las variaciones de resistencia en una señal digital para la UCE.

**3. CARACTERÍSTICAS**
Sensor semiconductor de dióxido de estaño (SnO2) con electrónica de evaluación integrada.

**4. VALORES DE TRABAJO**
* Temperatura de trabajo del semiconductor: 350 ºC.
* Potencia consumida: 0,5 W.

**5. ANOMALÍAS FRECUENTES**
Contaminación de la superficie del semiconductor de SnO2 por partículas grasas o fallo del elemento calefactor interno.

**6. COMPORTAMIENTO EN AVERÍA**
El sistema deja de conmutar automáticamente a recirculación ante la presencia de gases nocivos o de escape de otros vehículos.

**7. CÓMO COMPROBARLO**
Consultar la señal digital y el estado del sensor en el bloque de valores de medición del equipo de diagnosis.

---

COBERTURA: documento «Nº10. Clima electrónica.pdf», páginas 98 a 115 de 115. [completo]

---

💡 ¿Necesitas que elaboremos un cuestionario de repaso o una guía de comprobación con osciloscopio para los fotodiodos y sensores NTC para tus clases de taller?