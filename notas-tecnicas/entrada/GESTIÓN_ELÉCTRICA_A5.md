### NOTA DE PROCESO — ARQUITECTURA Y BUSES DE COMUNICACIÓN DE LA CLIMATIZACIÓN / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la arquitectura electrónica descentralizada y la estructura de interconexión por bus de datos del climatizador automático. Aplica a la gestión eléctrica de la climatización en el Audi A5.

**2. FUNDAMENTO**
En el Audi A5, las señales de varios sensores no ingresan directamente a la unidad de control para Climatronic J255. Los datos de los sensores de presión y temperatura del agente frigorífico G395 y de humedad y temperatura del parabrisas G458 / G355 son procesados por la unidad de control de la red de a bordo J519 o la unidad central para sistema de confort J393. Estas centralitas vuelcan la información al CAN-Bus para ponerla a disposición de la UCE J255.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* Las señales del sensor de presión y temperatura del agente frigorífico G395 se transmiten por LIN-Bus a la unidad de control de la red de a bordo J519.
* Las señales del sensor de humedad y temperatura del parabrisas (G458 / G355) se transmiten por LIN-Bus a la unidad de control central para el sistema de confort J393.
* El sensor de la calidad del aire G238, la unidad de control para turbina de aire fresco J126 y los servomotores para gestión de chapaletas comunican por líneas LIN-Bus dedicadas directamente con la UCE para Climatronic J255.
* La interconexión general entre la UCE J255, la UCE J519, la UCE J393 y la UCE para calefacción adicional J364 se realiza mediante el CAN Confort a través de la interfaz de diagnosis para bus de datos J533.
* La interfaz J533 vincula el sistema con el CAN Cuadro / tren de rodaje y con el terminal para diagnósticos.
* La UCE de red de a bordo J519 procesa directamente la señal del sensor de temperatura exterior G17.
* La UCE para Climatronic J255 gobierna directamente la válvula reguladora para compresor del climatizador N280.

📷 IMAGEN: Cuadro sinóptico de la arquitectura eléctrica, unidades interconectadas y buses CAN-Bus y LIN-Bus — Fuente: GESTIÓN ELÉCTRICA A5.pdf, pág. 80

**6. VALORES DE REFERENCIA**
| Componente / Bus | Tipo de Conexión / Bus de Comunicación |
| :--- | :--- |
| Sensor G395 a UCE J519 | LIN-Bus |
| Sensor G355 / G458 a UCE J393 | LIN-Bus |
| Sensor G238 a UCE J255 | LIN-Bus |
| Unidad J126 a UCE J255 | LIN-Bus |
| Servomotores de chapaletas a UCE J255 | LIN-Bus |
| Interconexión J255, J519, J393, J533 y J364 | Red CAN Confort |
| Interfaz J533 a terminal de diagnosis | CAN Cuadro / tren de rodaje |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Buscar la conexión cableada directa de los sensores G395 o G458/G355 en los conectores de la UCE Climatronic J255; sus datos ingresan en J519 o J393 y se transmiten a J255 mediante tramas CAN-Bus.

**8. VERIFICACIÓN FINAL**
Comprobar con el equipo de diagnosis conectado al terminal de diagnóstico que la UCE J255 recibe correctamente los bloques de valores transmitidos por J519 y J393.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA CLIMATRONIC
CÓDIGO: J255
UBICACIÓN: Consola central del salpicadero.
APLICACIÓN: Climatizador automático del Audi A5.

**1. MISIÓN**
Gobernar el sistema de climatización automática recibiendo las señales directas e indirectas de los sensores, calculando la estrategia térmica y accionando el compresor, la turbina y los servomotores de chapaletas.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Unidad electrónica de control central que procesa la información de sus sensores directos (G238 vía LIN-Bus) y los datos compartidos en el CAN Confort a través del Gateway J533 por la UCE J519 (sensor G395) y la UCE J393 (sensor G355/G458). Controla por señal eléctrica la válvula N280 del compresor.

**3. CARACTERÍSTICAS**
Centralita electrónica conectada a la red CAN Confort y máster de líneas LIN-Bus hacia la unidad de turbina J126, servomotores de chapaletas y sensor de calidad del aire G238.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
Interrogar la memoria de averías y los bloques de medición conectando el equipo de diagnosis al terminal para diagnósticos a través de la interfaz J533.

---

### NOTA DE ELEMENTO — SENSOR DE PRESIÓN Y TEMPERATURA DEL AGENTE FRIGORÍFICO
CÓDIGO: G395
UBICACIÓN: Tubería de la línea de alta presión del circuito frigorífico.
APLICACIÓN: Climatizador automático del Audi A5.

**1. MISIÓN**
Medir la presión y la temperatura del agente frigorífico en el circuito para la gestión y protección del sistema.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Sensor electrónico que convierte la presión y temperatura del gas en datos digitales y los envía mediante bus LIN a la unidad de control de la red de a bordo J519.

**3. CARACTERÍSTICAS**
Sensor combinado de presión y temperatura con salida de comunicación por LIN-Bus conectado a la UCE J519.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
Consultar los valores transmitidos por G395 en los bloques de medición de la unidad de control de la red de a bordo J519 utilizando la máquina de diagnosis.

---

### NOTA DE ELEMENTO — SENSOR DE HUMEDAD Y TEMPERATURA DEL PARABRISAS
CÓDIGO: G458 / G355
UBICACIÓN: Adherido en la cara interior del parabrisas, en la zona del retrovisor interior.
APLICACIÓN: Climatizador automático del Audi A5.

**1. MISIÓN**
Medir la humedad relativa y la temperatura en el parabrisas para prevenir el empañamiento de los cristales.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Sensor electrónico que mide la temperatura y humedad interior y transmite sus datos por LIN-Bus a la unidad de control central para sistema de confort J393.

**3. CARACTERÍSTICAS**
Sensor combinado conectado mediante línea LIN-Bus a la UCE de confort J393.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
Consultar la lectura de humedad y temperatura en los bloques de medición de la UCE central para sistema de confort J393 con el equipo de diagnosis.

---

### NOTA DE ELEMENTO — VÁLVULA REGULADORA PARA COMPRESOR DEL CLIMATIZADOR
CÓDIGO: N280
UBICACIÓN: Montada en el compresor del climatizador.
APLICACIÓN: Climatizador automático del Audi A5.

**1. MISIÓN**
Regular la cilindrada y la capacidad de bombeo del compresor según la demanda térmica.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Electroválvula proporcional accionada por señal eléctrica transmitida desde la unidad de control para Climatronic J255.

**3. CARACTERÍSTICAS**
Electroválvula de regulación integrada en el compresor y conectada a la UCE J255.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
Efectuar la prueba de actuadores desde la UCE Climatronic J255 con el equipo de diagnosis y verificar la señal de control y resistencia de la bobina.

---

### NOTA DE ELEMENTO — SENSOR DE LA CALIDAD DEL AIRE
CÓDIGO: G238
UBICACIÓN: En la entrada de aire fresco exterior.
APLICACIÓN: Climatizador automático del Audi A5.

**1. MISIÓN**
Detectar la presencia de contaminantes en el aire exterior para activar la recirculación de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Sensor semiconductor que analiza el aire exterior y envía su señal mediante bus LIN directamente a la UCE para Climatronic J255.

**3. CARACTERÍSTICAS**
Sensor electrónico de calidad de aire conectado por línea LIN-Bus a la UCE J255.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
Consultar el estado del sensor G238 en los bloques de medición de la UCE Climatronic J255 con la máquina de diagnosis.

---

### NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA TURBINA DE AIRE FRESCO
CÓDIGO: J126
UBICACIÓN: En la caja climática, junto al motor del soplador.
APLICACIÓN: Climatizador automático del Audi A5.

**1. MISIÓN**
Regular la velocidad del motor de la turbina de aire fresco.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Módulo electrónico de potencia que recibe la velocidad seleccionada por bus LIN desde la UCE J255 y ajusta la tensión aplicada a la turbina.

**3. CARACTERÍSTICAS**
Etapa de potencia gobernada por línea LIN-Bus desde la UCE J255.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**
No documentado en fuentes.

**7. CÓMO COMPROBARLO**
Realizar la prueba de actuadores de la turbina de aire fresco desde la UCE Climatronic J255 con el equipo de diagnosis.

---

COBERTURA: documento «GESTIÓN ELÉCTRICA A5.pdf», página 80 de 80. [completo]

---

💡 ¿Quieres que preparemos algún esquema en pizarra o actividad de localización de averías en bus de datos para trabajar esta arquitectura con los alumnos?