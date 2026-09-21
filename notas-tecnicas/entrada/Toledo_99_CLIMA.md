### **NOTA DE PROCESO — VARIANTES DEL SISTEMA CLIMÁTICO Y DESCONEXIÓN DE RECIRCULACIÓN / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar las tres variantes del sistema de adecuación climática del habitáculo (sólo calefacción, aire acondicionado manual y Climatronic) y el mecanismo de desconexión de la recirculación de aire en la función de descongelación.

**2. FUNDAMENTO**  
El accionamiento de la trampilla de recirculación se realiza mediante un motor eléctrico, eliminando la antigua electroválvula neumática de tres vías N63. Al seleccionar la salida de descongelación con la recirculación previamente activada, el sistema desconecta mecánicamente (en calefacción y aire acondicionado manual) o electrónicamente (en Climatronic) la recirculación. Esto impide enviar aire húmedo del interior del habitáculo hacia los cristales para evitar su empañado.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Esquema del mueble climático y paneles de mando de aire acondicionado manual y Climatronic — Fuente: Toledo 99 CLIMA.pdf, pág. 44  
- **Variantes del sistema:**  
  1. *Sólo calefacción:* Regulación manual.  
  2. *Aire acondicionado manual:* Accionamiento de trampillas de distribución y temperatura mediante cables Bowden; trampilla de recirculación accionada por motor eléctrico.  
  3. *Climatronic:* Regulación completamente electrónica de todas las trampillas mediante motores eléctricos.  
- **Lógica de desconexión de recirculación:**  
  - Al activar la función de descongelación/desempañado del parabrisas con la recirculación encendida, el mando desacopla mecánicamente la recirculación (en sistemas manuales) o la UCE J255 invierte la posición de la trampilla de forma electrónica (en Climatronic).  
  - Se fuerza la entrada de aire fresco exterior para reducir la humedad en el flujo de ventilación.

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar desempañar los cristales con la recirculación conectada: mantiene la humedad en el interior provocando la condensación inmediata en el parabrisas.

**8. VERIFICACIÓN FINAL**  
Comprobar que al pulsar o girar el mando a la posición de descongelación, el testigo/mando de recirculación se apaga y la trampilla abre el paso de aire fresco.

**9. SEGURIDAD Y NORMATIVA**  
Garantizar la visibilidad a través del parabrisas y cristales delanteros.

---

### **NOTA DE ELEMENTO — TRAMPILLA CENTRAL CON ORIFICIO DE DESEMPAÑADO**
UBICACIÓN: Mueble climatizador, regulando la salida de aire hacia los difusores centrales y laterales.  
APLICACIÓN: Sistema de distribución de aire en el Seat Toledo 99.

**1. MISIÓN**  
Regular la salida del caudal de aire hacia los difusores centrales y laterales, asegurando un flujo constante hacia las ventanillas laterales incluso con la trampilla cerrada.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Trampilla de distribución provista de un orificio físico en su estructura. Aunque la chapaleta se cierre completamente para derivar todo el aire hacia la salida superior de descongelación del parabrisas, el orificio permite el paso continuo de una fracción de aire hacia los difusores laterales para desempañar los cristales de las puertas delanteras.

**3. CARACTERÍSTICAS**  
Chapaleta con orificio calibrado de paso de aire integrado en su cuerpo. Posicionada por cable Bowden (manual) o por el motor eléctrico V70 (Climatronic).

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
Falta de desempañado en los cristales de las puertas delanteras si el orificio se obstruye.

**7. CÓMO COMPROBARLO**  
Verificar la salida de flujo de aire por los difusores laterales al seleccionar la función de descongelación total.

---

### **NOTA DE ELEMENTO — TRANSMISOR DE PRESIÓN PIEZORRESISTIVO G65**
CÓDIGO: G65  
UBICACIÓN: Circuito frigorífico, instalado junto a la válvula de expansión (específico para motores 1.4 L y 1.6 L, sustituyendo al conmutador F129).  
APLICACIÓN: Motores 1.4 L y 1.6 L de Seat Toledo 99.

**1. MISIÓN**  
Medir de forma continua la presión instantánea del fluido refrigerante e informar a la UCE de motor y a la UCE de aire acondicionado para la gestión del ralentí y la protección del circuito.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor piezoeléctrico de silicio. La presión del refrigerante deforma mecánicamente un elemento de silicio, lo que modifica su resistencia eléctrica. Un circuito electrónico interno convierte esta variación de resistencia en una señal de tensión proporcional a la presión existente.

**3. CARACTERÍSTICAS**  
Sensor piezorresistivo de 3 pines (alimentación 12 V, masa y señal de tensión variable hacia las UCEs).

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Tensión de alimentación** | **12 V CC** | Entre bornes del sensor |
| **Señal de salida** | **Tensión variable continua** | Proporcional a la presión del circuito |

**5. ANOMALÍAS FRECUENTES**  
Fallo de la electrónica interna del sensor o interrupción de su cableado de señal.

**6. COMPORTAMIENTO EN AVERÍA**  
En caso de avería del transmisor G65, el sistema de aire acondicionado se desconecta completamente por seguridad.

**7. CÓMO COMPROBARLO**  
Medir tensión de alimentación de 12 V en su conector, verificar la señal de tensión de salida emitida hacia las UCEs y consultar el registro de averías mediante el equipo de diagnosis.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL CLIMATRONIC J255 / E87**
CÓDIGO: J255 (Unidad de control) / E87 (Unidad de manejo e indicación)  
UBICACIÓN: Consola central / salpicadero del vehículo.  
APLICACIÓN: Climatización automática Climatronic en Seat Toledo 99.

**1. MISIÓN**  
Gestionar de forma automatizada la temperatura interior del habitáculo, el posicionado de todas las trampillas, el acoplamiento del compresor y la velocidad de la turbina, además de incorporar autodiagnóstico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Procesa las señales de entrada de los sensores térmicos (G17, G89, G56, G192), fotosensor (G107), presostato/transmisor (F129/G65) e interruptor de temperatura (F163). Tras calcular la necesidad de confort, emite señales de salida para los motores de trampillas (V68, V70, V71, V85), regulador de turbina (J126), relé de A/C (J293) y embrague N25.

**3. CARACTERÍSTICAS**  
Unidad electrónica integrada con pantalla digital display, pulsadores de control y conectores múltiples (A, B, C, D).

**4. VALORES DE TRABAJO**  
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**  
Fallo en la regulación de trampillas o fallos de comunicación con los sensores.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad de la regulación automática o parpadeo/corte de funciones de climatización.

**7. CÓMO COMPROBARLO**  
Realizar el autodiagnóstico mediante VAG 1551 / VAG 1598 con los cables adaptadores VAG 1598/11 y VAG 1598/12.

---

### **NOTA DE PROCESO — AUTODIAGNÓSTICO DEL SISTEMA CLIMATRONIC / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer las funciones de autodiagnóstico disponibles en la unidad Climatronic J255 mediante el equipo de diagnosis VAG.

**2. FUNDAMENTO**  
La UCE J255 monitoriza continuamente el estado de sus sensores y actuadores. A través del conector OBD y el protocolo de diagnosis VAG, permite consultar memorias, activar componentes y realizar calibraciones de posición inicial.

**3. CONDICIONES PREVIAS**  
- Encendido conectado (15 ON).  
- Equipo de diagnosis (VAG 1551 / VAG 1552 / VAS) conectado al puerto de diagnosis del vehículo.

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis VAG 1551 / VAG 1552 / VAG 1598 con adaptador VAG 1598/11 y 1598/12.

**5. DESARROLLO**  
Seleccionar la dirección **08 - Electrónica del climatizador** e ingresar en los siguientes modos de trabajo:  
1. **01 - Versión unidad de control:** Muestra la identificación de hardware y firmware de la UCE.  
2. **02 - Consulta de la memoria de averías:** Lee las averías registradas en sensores y motores.  
3. **03 - Diagnóstico de elementos actuadores:** Activa secuencialmente relés, acoplamiento N25 y servomotores para verificar su respuesta física.  
4. **04 - Iniciar ajuste básico:** Realiza el aprendizaje y calibración de los topes finales de los motores de las trampillas.  
5. **05 - Borrar la memoria de averías:** Elimina los códigos de fallo tras reparar las averías.  
6. **06 - Finalizar la emisión:** Cierra la comunicación de diagnosis.  
7. **07 - Codificar la unidad de control:** Ajusta la codificación según equipamiento y motorización.  
8. **08 - Leer bloque de valores de medición:** Muestra valores en tiempo real de temperatura, posición de potenciómetros y señales de presión.

**6. VALORES DE REFERENCIA**  
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Omitir la función **04 - Iniciar ajuste básico** tras sustituir un motor de trampilla o la UCE: la unidad no reconocerá los límites de carrera provocando errores de regulación.

**8. VERIFICACIÓN FINAL**  
Ausencia de códigos de avería en la función 02 y confirmación de "Ajuste básico realizado" en la función 04.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — FOTOSENSOR PARA LA RADIACIÓN SOLAR G107**
CÓDIGO: G107  
UBICACIÓN: Parte central del tablero de instrumentos / salpicadero.  
APLICACIÓN: Climatronic de Seat Toledo 99.

**1. MISIÓN**  
Medir la intensidad de la radiación solar directa que incide sobre los ocupantes del vehículo para corregir la temperatura del aire soplado.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Contiene un fotodiodo semiconductor sensible a la luz que modifica su paso de corriente eléctrica según la intensidad luminosa recibida. Un filtro y un elemento óptico dirigen los rayos: si la radiación incide de forma oblicua, el elemento óptico canaliza un mayor porcentaje de luz al fotodiodo (exige mayor refrigeración); si la radiación es vertical, la apantalla parcialmente (reduce la exigencia de refrigeración al disminuir la sensación térmica).

**3. CARACTERÍSTICAS**  
Sensor fotoeléctrico formado por carcasa con tapa, filtro, elemento óptico apantallante y fotodiodo semiconductor.

**4. VALORES DE TRABAJO**  

| Estado de radiación solar | Comportamiento del elemento óptico | Respuesta del Climatronic |
|---|---|---|
| **Incidencia oblicua del sol** | Canaliza alto porcentaje de luz al fotodiodo | Aumenta la capacidad de refrigeración |
| **Incidencia vertical del sol** | Apantalla y dirige menos radiación al fotodiodo | Modera la capacidad de refrigeración |

**5. ANOMALÍAS FRECUENTES**  
Suciedad o tapado accidental de la lente con objetos depositados sobre el salpicadero.

**6. COMPORTAMIENTO EN AVERÍA**  
En caso de avería del fotosensor G107, la UCE adopta una **función sustitutiva**, asumiendo un **valor fijo de radiación intermedio** dentro de su escala de medición.

**7. CÓMO COMPROBARLO**  
Comprobar la variación de caída de tensión en sus bornes al taparlo y exponerlo a una fuente de luz intensa, o consultar el bloque de valores de medición (función 08).

---

### **NOTA DE ELEMENTO — TRANSMISORES DE TEMPERATURA EXTERIOR G17 Y G89**
CÓDIGO: G17 (Exterior paragolpes) / G89 (Canal de aire aspirado)  
UBICACIÓN:  
- G17: Zona izquierda del paragolpes delantero.  
- G89: Canal de entrada de aire a la unidad climática (bajo el torpedo/vicio).  
APLICACIÓN: Climatronic de Seat Toledo 99.

**1. MISIÓN**  
Medir la temperatura del aire atmosférico exterior y del aire fresco de entrada para calcular la posición de las trampillas de mezcla, recirculación y velocidad del ventilador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensores térmicos basados en resistencias de coeficiente de temperatura negativo (NTC). Al aumentar la temperatura del aire, disminuye su resistencia eléctrica. La UCE J255 lee ambos sensores y **utiliza siempre el valor de temperatura más bajo** para evitar errores causados por el calor radiado del motor o del asfalto.

**3. CARACTERÍSTICAS**  
Dos termistores NTC conectados a la unidad Climatronic J255.

**4. VALORES DE TRABAJO**  

| Estado de los sensores | Valor utilizado por la UCE J255 |
|---|---|
| **Ambos sensores OK** | La UCE selecciona y procesa el **valor más bajo** de los dos |
| **Avería de un transmisor** | La UCE toma la medición del **transmisor que funciona** |
| **Avería de ambos transmisores (G17 y G89)** | La UCE adopta el **valor sustitutivo fijo de 10 ºC** |

**5. ANOMALÍAS FRECUENTES**  
Corte por impacto en el paragolpes (G17) o sulfatación de conectores por humedad.

**6. COMPORTAMIENTO EN AVERÍA**  
Si se avería uno, el sistema utiliza el otro. Si fallan ambos, adopta un valor fijo sustitutivo de 10 ºC.

**7. CÓMO COMPROBARLO**  
Medir resistencia con un multímetro en bornes de cada sensor a diferentes temperaturas ambientales y comprobar lecturas en el bloque de valores de medición 08.

---

### **NOTA DE ELEMENTO — MOTORES ELÉCTRICOS DE TRAMPILLAS CON POTENCIÓMETRO (V68, V70, V71, V85)**
CÓDIGO: V68 (con potenciómetro G92), V70 (con G112), V71 (con G113), V85 (con G114)  
UBICACIÓN: Mueble climatizador.  
APLICACIÓN: Climatronic de Seat Toledo 99.

**1. MISIÓN**  
Mover mecánicamente las trampillas de temperatura, central, velocidad/recirculación y reposapiés/descongelación, informando a la UCE de su posición exacta.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Motores de corriente continua de giro limitado. Se alimentan a 12 V y cambian su sentido de giro al invertir la polaridad de la alimentación enviada por la UCE J255. En su interior, un potenciómetro solidario al eje emite una señal de tensión variable que informa a la UCE de la posición angular real de la trampilla.

**3. CARACTERÍSTICAS Y ASOCIACIÓN DE COMPONENTES**  
- **V68:** Motor de trampilla de temperatura (con potenciómetro **G92**).  
- **V70:** Motor de trampilla central (con potenciómetro **G112**).  
- **V71:** Motor de trampillas de velocidad y recirculación (con potenciómetro **G113**).  
- **V85:** Motor de trampilla de descongelación / reposapiés (con potenciómetro **G114**).

**4. VALORES DE TRABAJO**  

| Parámetro | Valor prescrito | Condiciones de validez |
|---|---|---|
| **Tensión de alimentación del motor** | **12 V CC** | En bornes del motor (polaridad reversible) |
| **Señal del potenciómetro** | **Tensión variable de retorno** | Entre cursor y masa según posición |

**5. ANOMALÍAS FRECUENTES**  
Desgaste o suciedad en las pistas de carbón del potenciómetro interno; rotura de piñones de plástico.

**6. COMPORTAMIENTO EN AVERÍA**  
Bloqueo de la trampilla en una posición fija y registro de código de error en la memoria de averías.

**7. CÓMO COMPROBARLO**  
Realizar el **Ajuste Básico mediante el VAG 1551** (función 04) cada vez que se sustituya un motor o la UCE J255 para memorizar los topes finales de carrera.

---

### **NOTA DE PROCESO — REGULACIÓN CONJUNTA DE LAS TRAMPILLAS DE VELOCIDAD Y RECIRCULACIÓN / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar el funcionamiento y las posiciones de trabajo de las trampillas de velocidad y recirculación accionadas mecánicamente por el único motor V71.

**2. FUNDAMENTO**  
Ambas trampillas están vinculadas mecánicamente mediante dos guías a las que se conecta el eje del motor V71. El sistema adapta el caudal de aire fresco para evitar variaciones causadas por la presión dinámica al aumentar la velocidad del vehículo, o bien bloquea la entrada de aire exterior en modo recirculación.

**3. CONDICIONES PREVIAS**  
Sistema Climatronic encendido y vehículo en circulación.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Posiciones de las guías de accionamiento del motor V71 para aire fresco, regulación por velocidad y recirculación — Fuente: Toledo 99 CLIMA.pdf, pág. 51  
El motor V71 posiciona simultáneamente ambas trampillas en tres estados de servicio:  
1. **Entrada de aire fresco:** Las dos trampillas abren completamente el paso de aire desde el exterior hacia el habitáculo.  
2. **Entrada de aire en función de la velocidad:** A altas velocidades, la chapaleta de velocidad reduce su apertura para evitar un aumento excesivo de caudal en el habitáculo.  
   - Se activa a partir de **80 km/h**.  
   - Por encima de **160 km/h** se cierra por completo, dejando únicamente una pequeña entrada residual de aire.  
   - *Excepción:* Si existe una gran diferencia entre la temperatura solicitada y la temperatura real del habitáculo, la trampilla se mantiene abierta aunque se supere la velocidad para enfriar/calentar rápidamente la cabina.  
3. **Recirculación activada:** Ambas trampillas se desplazan a su posición superior cerrando por completo la entrada de aire exterior.

**6. VALORES DE REFERENCIA**  

| Condición de velocidad del vehículo | Estado de la trampilla de velocidad |
|---|---|
| **Velocidad < 80 km/h** | Trampilla totalmente abierta |
| **Velocidad entre 80 km/h y 160 km/h** | Cierre progresivo en función de la velocidad |
| **Velocidad > 160 km/h** | Cierre completo (mantiene paso residual) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Notar que el caudal de aire disminuye al superar 80 km/h o 160 km/h no es una avería: es la estrategia normal de la trampilla de velocidad para estabilizar la ventilación del habitáculo.

**8. VERIFICACIÓN FINAL**  
Verificar el movimiento simultáneo de las dos trampillas al activar la recirculación o al simular señal de velocidad mediante el autodiagnóstico.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

COBERTURA: documento «Toledo 99 CLIMA.pdf», páginas 44 a 53 de 53. [completo]

---
💡 ¿Quieres que preparemos una tabla comparativa de comprobación rápida con los potenciómetros de los servomotores (G92, G112, G113, G114) o un cuestionario tipo test para repasar con el alumnado en el taller?