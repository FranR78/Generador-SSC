### **NOTA DE PROCESO — TOPOLOGÍA Y ARQUITECTURA DE RED DEL SISTEMA DE CLIMATIZACIÓN / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar la estructura de la red de comunicación, los buses de datos y la interconexión de las unidades de control, actuadores y sensores del sistema de climatización del Audi A7 (año modelo 2012).

**2. FUNDAMENTO**  
La arquitectura electrónica del sistema de climatización se basa en la red implementada en el Audi A8 (año modelo 2011). La unidad de control Climatronic J255 actúa como nodo principal del sistema, intercomunicándose con los buses CAN (Convenience CAN, Display and Control CAN), el bus MOST y diversas líneas LIN secundarias para gestionar sensores, actuadores y unidades periféricas.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema de topología de red con los buses CAN, MOST y líneas LIN del sistema de climatización — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 52  
- La unidad Climatronic J255 se conecta directamente al bus CAN de confort (Convenience CAN bus) y al bus CAN de pantalla y mando (Display and Control CAN bus).  
- A través de la interfaz de diagnosis J533 (Gateway) y la unidad J519, el sistema intercambia información con el bus MOST y los módulos de confort.  
- La unidad J255 controla directamente por bus LIN los servomotores de las trampillas (Flap control motors) y la unidad de pantalla/mando trasera E265.  
- La unidad de control de la red de a bordo J519 gestiona por medio de otra línea LIN los sensores ambientales: sensor de temperatura exterior G17, sensor de presión/temperatura G395, sensor de humedad en la admisión G657, sensor de calidad del aire G238 y sensor de humedad G355.  
- Se integran elementos de ejecución directa como la válvula reguladora del compresor N280, la válvula de corte N82, la bomba V50, el fotosensor de radiación solar G107 y la gestión de calefacción de asientos (SH).

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Desconocer la distribución de las líneas LIN: un fallo o cortocircuito en la línea LIN asociada a J519 deja inoperativos múltiples sensores (G17, G395, G657, G238, G355) de forma simultánea.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL CLIMATRONIC**
CÓDIGO: J255  
UBICACIÓN: Salpicadero / consola central del vehículo.  
APLICACIÓN: Sistema de climatización del Audi A7 (2012) y Audi A8 (2011).

**1. MISIÓN**  
Unidad de control principal encargada de procesar las señales de los sensores, gestionar la lógica de confort y gobernar los actuadores del sistema Climatronic.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Se comunica a través del bus CAN de confort (Convenience CAN) y del bus CAN de pantalla y mando. Procesa los datos recibidos y comanda por bus LIN a los servomotores de las trampillas de aire y al cuadro de mandos trasero E265, además de controlar componentes como el regulador del compresor N280.

**3. CARACTERÍSTICAS**  
Módulo de control electrónico integrado con interfaces para bus CAN y bus LIN.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Interrupción o fallo en la regulación automática de la temperatura, caudal y distribución de aire en el habitáculo.

**7. CÓMO COMPROBARLO**  
Diagnóstico electrónico mediante la lectura de memoria de averías e inspección de la red de buses de datos.

---

### **NOTA DE ELEMENTO — UNIDAD DE PANTALLA Y MANDOS DEL CLIMATIZADOR TRASERO**
CÓDIGO: E265  
UBICACIÓN: Consola central en las plazas traseras.  
APLICACIÓN: Climatización de las plazas traseras en Audi A7 / A8.

**1. MISIÓN**  
Permitir a los ocupantes de las plazas traseras seleccionar la temperatura y los parámetros de confort independientes.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Unidad esclava conectada mediante una línea de bus LIN directamente a la unidad de control principal Climatronic J255. Transmite las órdenes de mando seleccionadas por los usuarios traseros.

**3. CARACTERÍSTICAS**  
Módulo con pantalla de visualización y botones de mando con conexión bus LIN.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de ajustar o visualizar la regulación del clima en la zona trasera del habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL DE LA RED DE A BORDO**
CÓDIGO: J519  
UBICACIÓN: Red eléctrica del vehículo.  
APLICACIÓN: Gestión centralizada de la red eléctrica y sensores ambientales del climatizador.

**1. MISIÓN**  
Gestionar componentes eléctricos de la red de a bordo e interconectar diversos sensores ambientales del climatizador con el bus CAN.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Recibe la información de múltiples sensores (G17, G395, G657, G238, G355) a través de una línea de comunicación por bus LIN y la retransmite a la red CAN de confort.

**3. CARACTERÍSTICAS**  
Unidad de control electrónica provista de interfaz para bus CAN de confort y bus LIN de sensores.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida de comunicación o lectura errónea de los sensores de calidad de aire, humedad, presión y temperatura exterior.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — INTERFAZ DE DIAGNOSIS PARA BUS DE DATOS (GATEWAY)**
CÓDIGO: J533  
UBICACIÓN: Red de arquitectura electrónica del vehículo.  
APLICACIÓN: Pasarela de comunicación entre buses CAN, MOST y sistema de diagnosis.

**1. MISIÓN**  
Asegurar la transferencia de datos y la traducción de protocolos entre los distintos buses de comunicación del vehículo (Convenience CAN, Display/Control CAN, MOST).

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Actúa como nodo pasarela (Gateway) coordinando la comunicación bidireccional entre la unidad Climatronic J255, la red de confort y las unidades de infotenamiento.

**3. CARACTERÍSTICAS**  
Unidad electrónica central con conexiones de bus CAN y bus MOST.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Fallos de comunicación intermitentes o totales entre el climatizador, el cuadro de instrumentos J285 y la pantalla MMI J794/J685.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — VÁLVULA REGULADORA DEL COMPRESOR DE CLIMATIZACIÓN**
CÓDIGO: N280  
UBICACIÓN: Montada en el compresor de climatización.  
APLICACIÓN: Regulación de la cilindrada y capacidad del compresor.

**1. MISIÓN**  
Regular la cilindrada del compresor para ajustar la presión y el caudal de fluido refrigerante según la demanda.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Electroválvula accionada directamente por la unidad de control Climatronic J255 para modificar la presión en el cárter interno del compresor.

**3. CARACTERÍSTICAS**  
Válvula reguladora de accionamiento eléctrico integrada en el compresor.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no genera la presión necesaria en el lado de alta o se queda fijo en una capacidad, impidiendo el enfriamiento correcto del habitáculo.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — VÁLVULA DE CORTE DEL REFRIGERANTE**
CÓDIGO: N82  
UBICACIÓN: Circuito de líquido refrigerante del motor / calefacción.  
APLICACIÓN: Gestión del paso de refrigerante hacia el radiador de calefacción.

**1. MISIÓN**  
Abrir o interrumpir el paso de líquido refrigerante caliente procedente del motor hacia el circuito de calefacción del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Válvula electromagnética comandada por la unidad Climatronic J255 que bloquea el paso de refrigerante cuando no se requiere calefacción o en fase de máxima refrigeración.

**3. CARACTERÍSTICAS**  
Electroválvula de corte para fluido refrigerante de motor.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de calefacción en el habitáculo o entrada indebida de calor cuando el sistema está en modo de máxima refrigeración.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — BOMBA DE RECIRCULACIÓN DE REFRIGERANTE**
CÓDIGO: V50  
UBICACIÓN: Circuito de líquido refrigerante del motor.  
APLICACIÓN: Recirculación forzada de líquido refrigerante para calefacción.

**1. MISIÓN**  
Garantizar el caudal necesario de líquido refrigerante caliente a través del radiador de calefacción, especialmente a bajas revoluciones del motor o con motor parado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Bomba de accionamiento eléctrico gobernada por la unidad J255 que impulsa el fluido refrigerante de forma independiente a la bomba mecánica del motor.

**3. CARACTERÍSTICAS**  
Electrobomba centrífuga para líquido refrigerante.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Rendimiento insuficiente de la calefacción a ralentí o en retenciones.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — FOTOSENSOR DE RADIACIÓN SOLAR**
CÓDIGO: G107  
UBICACIÓN: Parte superior del salpicadero.  
APLICACIÓN: Medición de la intensidad solar para la regulación Climatronic.

**1. MISIÓN**  
Medir la radiación solar incidente sobre el vehículo e informar a la unidad Climatronic J255.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Captador óptico que genera una señal eléctrica proporcional a la intensidad de la luz solar recibida, permitiendo compensar el efecto térmico del sol sobre los ocupantes.

**3. CARACTERÍSTICAS**  
Sensor fotoeléctrico conectado como señal de entrada a la unidad J255.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
El sistema no compensa el aumento de temperatura causado por la radiación solar directa.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — TRANSMISOR DE PRESIÓN Y TEMPERATURA DEL AIRE ACONDICIONADO**
CÓDIGO: G395  
UBICACIÓN: Tubería del circuito frigorífico de alta presión.  
APLICACIÓN: Vigilancia de presión y temperatura del agente frigorífico.

**1. MISIÓN**  
Medir continuamente la presión y la temperatura del fluido refrigerante en el circuito de alta presión e informar al sistema de control.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor dual que transmite sus datos de medición a través del bus LIN hacia la unidad de control de la red de a bordo J519.

**3. CARACTERÍSTICAS**  
Captador de presión y temperatura integrado con salida para bus LIN.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Desconexión de seguridad del compresor por falta de señal de presión del circuito.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SENSOR DE HUMEDAD EN EL CONDUCTO DE ADMISIÓN DE AIRE FRESCO**
CÓDIGO: G657  
UBICACIÓN: Conducto de admisión de aire fresco del climatizador.  
APLICACIÓN: Medición de la humedad y temperatura del aire exterior entrante.

**1. MISIÓN**  
Medir la humedad y la temperatura del aire en la toma de aire fresco antes de que ingrese al mueble climatizador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Capta los valores higrométricos del aire de admisión y transmite los datos por el bus LIN a la unidad J519.

**3. CARACTERÍSTICAS**  
Sensor de humedad y temperatura con electrónica para bus LIN.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Cálculo impreciso de la humedad relativa para la prevención de empañado de cristales.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SENSOR DE LA CALIDAD DEL AIRE**
CÓDIGO: G238  
UBICACIÓN: Conducto de admisión de aire fresco.  
APLICACIÓN: Control automático de la trampilla de recirculación.

**1. MISIÓN**  
Detectar la presencia de sustancias contaminantes en el aire exterior para activar de forma automática la recirculación de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Analiza la concentración de gases nocivos en el aire exterior y envía la señal a través del bus LIN a la unidad J519.

**3. CARACTERÍSTICAS**  
Sensor semiconductor de calidad del aire con conexión bus LIN.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad de la función de recirculación automática de aire.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — SENSOR DE HUMEDAD DEL AIRE**
CÓDIGO: G355  
UBICACIÓN: Interior del habitáculo / zona del parabrisas.  
APLICACIÓN: Detección de humedad para el sistema antihielo / desempañado Climatronic.

**1. MISIÓN**  
Medir la humedad en el interior del habitáculo para prevenir el empañado de los cristales.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Transmite la señal de la humedad medida por medio de la línea bus LIN a la unidad J519.

**3. CARACTERÍSTICAS**  
Sensor higrométrico con interfaz bus LIN.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Retardo o fallo en la activación automática de las medidas antihielo/desempañado del parabrisas.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL DEL TURBOVENTILADOR Y TURBINA DE AIRE FRESCO**
CÓDIGO: J126 / V2  
UBICACIÓN: Mueble climatizador.  
APLICACIÓN: Impulsión y regulación del caudal de aire al habitáculo.

**1. MISIÓN**  
Forzar y regular el caudal de aire impulsado hacia el habitáculo según las órdenes de la unidad Climatronic.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
La unidad de control J126 recibe la señal de mando de la unidad Climatronic y regula mediante una etapa de potencia la velocidad del motor eléctrico del ventilador V2.

**3. CARACTERÍSTICAS**  
Módulo de potencia J126 acoplado a la turbina/soplador eléctrico V2.

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Ausencia de flujo de aire o velocidad fija inalterable en los difusores.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado).pdf», páginas 52 a 52 de 52. [completo]