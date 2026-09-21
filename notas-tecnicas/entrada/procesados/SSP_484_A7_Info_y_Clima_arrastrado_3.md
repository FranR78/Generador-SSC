### **NOTA DE PROCESO — DETECCIÓN DE OCUPACIÓN DEL ASIENTO DEL ACOMPAÑANTE / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar la lógica de funcionamiento y evaluación de la ocupación del asiento delantero del acompañante para determinar la activación o desactivación del airbag del acompañante.

**2. FUNDAMENTO**  
El sistema mide de manera continua la variación de la capacidad eléctrica (capacitancia) del sensor G128 alojado en la banqueta del asiento. La unidad de control J706 realiza esta medición de forma cíclica para determinar si el asiento está ocupado por un adulto o por una silla infantil. La información se transmite a través del bus LIN a la unidad de control del airbag J234, la cual activa o desactiva el airbag e ilumina el testigo K145.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema de interconexión entre la unidad J706, el sensor G128 por cable coaxial, la UCE J234 por bus LIN y el testigo K145 — Fuente: SSP 484 A7 Info y Clima (arrastrado) 3.pdf, pág. 22  
- El sensor capacitivo G128 detecta la presencia y masa sobre el acolchado del asiento del acompañante.  
- La unidad J706 mide cíclicamente los cambios de capacitancia recibidos desde el sensor G128 mediante un cable coaxial.  
- La unidad J706 procesa la información mediante un software adaptado específicamente a cada tipo de asiento e informa a la UCE de airbag J234 por medio del bus LIN.  
- La UCE de airbag J234 activa o desactiva la bolsa de aire del acompañante y conmuta el estado del testigo indicador K145 ("PASSENGER AIRBAG OFF").

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Montar una unidad J706 que no corresponda al modelo exacto de asiento: el programa informático (software) de la unidad de control está adaptado de forma específica a cada tipo de asiento.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
Para cualquier trabajo de reparación en el sistema de detección de ocupación del asiento, se debe recurrir obligatoriamente a la Localización Guiada de Averías, al catálogo ETKA y a la información técnica de servicio actualizada.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL PARA DETECCIÓN DE OCUPACIÓN DEL ASIENTO J706**
CÓDIGO: J706  
UBICACIÓN: Montada en la parte inferior del asiento del acompañante.  
APLICACIÓN: Sistema de seguridad pasiva (detección de ocupantes).

**1. MISIÓN**  
Detectar la variación de capacitancia del sensor del asiento para clasificar la ocupación (adulto o silla infantil) e informar a la unidad de control de airbag J234.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad electrónica que mide cíclicamente la capacidad eléctrica del sensor G128 a través de una línea coaxial. Analiza los datos mediante software específico de asiento y transmite el estado por bus LIN a la UCE J234.

**3. CARACTERÍSTICAS**  
Módulo de control con software adaptado a la banqueta. Incorpora conexión de cable coaxial para G128, interfaz para bus LIN con J234 y conector eléctrico de asiento.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Error en la activación/desactivación del airbag del acompañante.

**7. CÓMO COMPROBARLO**  
Efectuar la diagnosis mediante la Localización Guiada de Averías y la documentación técnica de servicio.

---

### **NOTA DE ELEMENTO — SENSOR DE OCUPACIÓN DEL ASIENTO DEL ACOMPAÑANTE G128**
CÓDIGO: G128  
UBICACIÓN: Alojado en el acolchado de la banqueta del asiento del acompañante.  
APLICACIÓN: Captación de presencia de ocupantes para la gestión del airbag.

**1. MISIÓN**  
Modificar su capacidad eléctrica en respuesta a la presencia y peso de un ocupante o silla infantil sobre el asiento del acompañante.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Captador capacitivo que altera su valor de capacidad eléctrica según la carga recibida. Transmite la señal de capacitancia hacia la unidad J706 mediante un cable coaxial.

**3. CARACTERÍSTICAS**  
Sensor capacitivo flexible ubicado en el acolchado del asiento, provisto de conector para cable coaxial.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
No documentado en fuentes.

**7. CÓMO COMPROBARLO**  
Comprobar mediante el procedimiento de Localización Guiada de Averías.

---

### **NOTA DE ELEMENTO — TESTIGO DE DESACTIVACIÓN DEL AIRBAG DEL ACOMPAÑANTE K145**
CÓDIGO: K145  
UBICACIÓN: Salpicadero / consola central del vehículo.  
APLICACIÓN: Indicador óptico del estado del airbag del acompañante.

**1. MISIÓN**  
Alertar visualmente a los ocupantes de que el airbag del acompañante se encuentra desactivado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Indicador luminoso activado por la UCE de airbag J234 al recibir la señal de la unidad J706 indicando presencia de silla infantil o ausencia de ocupante adulto.

**3. CARACTERÍSTICAS**  
Lámpara / testigo indicador con la inscripción "PASSENGER AIRBAG OFF".

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Ausencia de indicación del estado de desactivación del airbag del acompañante.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — CONMUTADOR DEL CINTURÓN DE SEGURIDAD DEL ACOMPAÑANTE E25**
CÓDIGO: E25  
UBICACIÓN: Integrado en el cierre del cinturón de seguridad del asiento del acompañante.  
APLICACIÓN: Detección de abrochado de cinturón de seguridad.

**1. MISIÓN**  
Detectar la inserción de la lengüeta del cinturón en el abroche del acompañante.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Interruptor de contacto eléctrico que conmuta su estado al introducir o extraer la lengüeta del cinturón.

**3. CARACTERÍSTICAS**  
Conmutador eléctrico de contacto alojado en la hebilla de cierre.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
No documentado en fuentes.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 3.pdf», página 22 de 22. [completo]