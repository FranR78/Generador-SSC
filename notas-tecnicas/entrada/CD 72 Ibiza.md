### **NOTA DE PROCESO — SISTEMAS DE CLIMATIZACIÓN Y SUS MODOS DE FUNCIONAMIENTO / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Definir los principios de funcionamiento, variantes de equipamiento y lógica de control de los cuatro sistemas de climatización (ventilación/calefacción, aire acondicionado manual, calefacción motorizada y autoclima). Se aplica a la gama SEAT Ibiza y Córdoba modelo 1999.  
📷 IMAGEN: Cuadro esquemático de los cuatro sistemas de climatización del vehículo — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 4

**2. FUNDAMENTO**  
El sistema gestiona el caudal, la mezcla térmica y la distribución del aire impulsado al interior del habitáculo. En los equipos mecánicos, la temperatura y la distribución se seleccionan mediante cables y mandos giratorios. En la calefacción motorizada y el autoclima, una unidad de control electrónica (UCE) gobierna servomotores sobre la trampilla de mezcla y la recirculación, mostrando la información en una pantalla central. El autoclima mantiene automáticamente la temperatura seleccionada evaluando la radiación y las temperaturas interior y exterior.

**3. CONDICIONES PREVIAS**  
- Tensión de batería en rango nominal.  
- Encendido conectado ("borne 15 ON") o motor en marcha.

**4. EQUIPO Y MATERIAL**  
- Polímetro digital y estación de diagnosis con código de dirección 08.

**5. DESARROLLO**  
1. **Ventilación / Calefacción:** La temperatura se regula mezclando el aire que atraviesa el radiador de calefacción de forma mecánica. La velocidad de la turbina se selecciona mediante una escala de resistencias variables en el motor.  
2. **Aire Acondicionado Manual:** Mantiene la arquitectura mecánica de calefacción e incorpora un pulsador de acoplamiento eléctrico para el compresor de refrigeración.  
3. **Calefacción Motorizada:** Ajusta la temperatura mediante el servomotor V68 sobre la trampilla de mezcla y conmuta la recirculación con el servomotor V113. La distribución de aire se mantiene por mando giratorio mecánico.  
4. **Autoclima:** Gestiona electrónicamente la temperatura, la velocidad de la turbina V2, el compresor N25 y la recirculación V113 de forma automática, semiautomática o manual.

**6. VALORES DE REFERENCIA**  

| Sistema / Función | Parámetro de control | Condiciones de validez |
|---|---|---|
| **Ajuste automático de sustitución** | 22 ºC en pantalla | Modo sustitutivo por fallo de sensores o pulsadores |
| **Límite de desconexión A/C por helada** | < 5 ºC ambiente | Medido por interruptor térmico F38 en caja de aguas |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir la calefacción motorizada con el autoclima: la calefacción motorizada no incorpora circuito frigorífico ni sensores de temperatura de conductos, por lo que no puede enfriar por debajo de la temperatura ambiente.

**8. VERIFICACIÓN FINAL**  
Comprobar el desplazamiento suave de la trampilla de temperatura de extremo a extremo al modificar los valores en el panel y verificar la salida de aire a la temperatura deseada.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE PROCESO — CIRCUITO FRIGORÍFICO Y SUS COMPONENTES / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Describir la composición, presiones de trabajo y distribución de los componentes del circuito frigorífico de gas R134a. Se aplica a las versiones con aire acondicionado manual y autoclima.  
📷 IMAGEN: Esquema del circuito frigorífico con compresor, condensador, filtro, válvula de expansión y evaporador — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 7

**2. FUNDAMENTO**  
El circuito frigorífico absorbe el calor del aire que entra al habitáculo haciendo ebullir el fluido R134a a baja presión dentro del evaporador. El compresor eleva la presión y temperatura del gas hacia el condensador, donde se licúa cediendo calor al aire exterior. La válvula de expansión dosifica el caudal de refrigerante líquido que entra al evaporador según la temperatura y presión.

**3. CONDICIONES PREVIAS**  
- Circuito hermético y libre de humedad.  
- Motor en marcha a ralentí o régimen constante.

**4. EQUIPO Y MATERIAL**  
- Estación de carga y reciclaje de R134a.  
- Puente de manómetros de alta y baja presión.

**5. DESARROLLO**  
1. **Compresor:** De 7 cilindros axial autorregulado, arrastrado por correa Poly-V y acoplado por electroimán N25. Incorpora una válvula de seguridad mecánica.  
2. **Condensador:** Situado en el frente, delante del radiador de refrigeración del motor.  
3. **Filtro Deshidratador:** Retiene humedad y partículas, evitando la formación de burbujas en la línea de líquido.  
4. **Válvula de Expansión:** Regula la presión y el caudal a la entrada del evaporador.  
5. **Evaporador:** Alojado dentro de la unidad climática del salpicadero.  
6. **Silenciador de Pulsaciones:** Alojado en el tubo de baja presión, cerca del compresor, para reducir el ruido hidroacústico.

**6. VALORES DE REFERENCIA**  

| Componente / Parámetro | Valor numérico especificado | Condiciones de medición / Estado |
|---|---|---|
| **Carga de fluido refrigerante R134a** | **750 ± 50 gramos** | Carga total del circuito vacío |
| **Tarado de la válvula de seguridad del compresor** | **44 bares** | Disparo de sobrepresión extrema en compresor |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Cargar fluido sin realizar el vacío previo: la presencia de humedad y aire genera burbujas en el circuito y reduce la eficiencia de condensación.

**8. VERIFICACIÓN FINAL**  
Comprobar la presencia de frío continuo en la tubería de baja presión y la ausencia de burbujas en el filtro deshidratador.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — TRANSMISOR DE TEMPERATURA INTERIOR**
CÓDIGO: G56  
UBICACIÓN: Detrás del tablero de instrumentos, junto a la columna de dirección.  
APLICACIÓN: Sistema Autoclima del SEAT Ibiza y Córdoba 1999.

**1. MISIÓN**  
Medir la temperatura real del aire del habitáculo para permitir el cálculo de la regulación térmica en modo automático.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Resistencia de Coeficiente de Temperatura Negativo (NTC). Para garantizar que mida el aire representativo de la estancia y no la temperatura de la consola, el motor eléctrico V42 acciona una pequeña turbina que aspira aire continuo del habitáculo sobre la resistencia.

**3. CARACTERÍSTICAS**  
Sensor NTC térmico calibrado con un campo de medición entre -40 ºC y +85 ºC, integrado en un módulo compacto junto con la turbina V42.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Rango de medición del sensor NTC** | **-40 ºC a +85 ºC** | Rango térmico operativo |
| **Valor sustitutivo por avería** | **22 ºC constante** | Adoptado por la UCE J255 tras detectarse fallo |

**5. ANOMALÍAS FRECUENTES**  
Acumulación de pelusa y polvo en el conducto de la turbina V42; interrupción o cortocircuito en la resistencia NTC.

**6. COMPORTAMIENTO EN AVERÍA**  
La UCE adopta el valor de 22 ºC fijo. Al seleccionar temperaturas superiores o inferiores a 22 ºC en el panel, el sistema enfría o calienta en exceso sin detenerse al no registrar la temperatura real. Todos los dígitos del display parpadean al conectar el encendido.

**7. CÓMO COMPROBARLO**  
Consultar el bloque de valores de medición grupo 006 campo 4 mediante el equipo de diagnosis. Comprobar la resistencia NTC desconectada mediante un polímetro en escala de ohmios a temperatura ambiente.

---

### **NOTA DE ELEMENTO — TRANSMISORES DE TEMPERATURA DEL AIRE DE ENTRADA**
CÓDIGO: G191 / G192  
UBICACIÓN: G191 situado en el difusor central; G192 situado en el difusor de la zona de los pies.  
APLICACIÓN: Sistema Autoclima del SEAT Ibiza y Córdoba 1999.

**1. MISIÓN**  
Medir la temperatura del aire que sale hacia el habitáculo por los difusores para regular de forma precisa la mezcla de la trampilla de temperatura.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sondas de resistencia NTC. La UCE calcula la media aritmética de las lecturas entregadas por ambos transmisores para ajustar el posicionamiento del servomotor de temperatura V68.

**3. CARACTERÍSTICAS**  
Sondas térmicas de inserción rápida con conector de 2 polos. Margen de medición de -40 ºC a +85 ºC.  
📷 IMAGEN: Ubicación de los transmisores G191 en el difusor central y G192 en la zona de los pies — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 13

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Rango de medida NTC** | **-40 ºC a +85 ºC** | Mapeo térmico de la UCE |

**5. ANOMALÍAS FRECUENTES**  
Interrupción de los hilos de señal; descalibración del elemento cerámico.

**6. COMPORTAMIENTO EN AVERÍA**  
Al perder la señal de cualquiera de los dos transmisores, la UCE anula la regulación automática del sistema y mantiene fijos los parámetros que existían en el momento de producirse la avería. Todos los dígitos del display parpadean.

**7. CÓMO COMPROBARLO**  
Consultar la temperatura de G191 en el grupo de valores de medición 006 campo 2 y de G192 en el grupo 006 campo 3. Medir la resistencia eléctrica entre bornes con un multímetro.

---

### **NOTA DE ELEMENTO — TRANSMISOR DE TEMPERATURA EXTERIOR**
CÓDIGO: G17  
UBICACIÓN: Montado en el interior de la carcasa del retrovisor exterior derecho (lado del acompañante).  
APLICACIÓN: SEAT Ibiza y Córdoba 1999 con Autoclima o radio con pantalla.

**1. MISIÓN**  
Captar la temperatura del aire ambiente exterior para mostrarla en el display y permitir a las UCEs regular la temperatura del aire y la velocidad de la turbina.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Resistencia NTC conectada a la unidad del radiocasete R. La radio procesa el valor, lo muestra en la pantalla e informa a la UCE de climatización J255.

**3. CARACTERÍSTICAS**  
Sensor termistor estanco integrado en el conjunto del espejo retrovisor exterior derecho.

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Valor de referencia | Estado del sistema |
|---|---|---|
| **Lectura normal en display** | Grados ºC | Procesado por el radiocasete |
| **Valor de sustitución en Autoclima** | **20 ºC constante** | Adoptado si falla la señal de G17 |

**5. ANOMALÍAS FRECUENTES**  
Rotura o corte en el mazo de cables del retrovisor; sulfatación de contactos.

**6. COMPORTAMIENTO EN AVERÍA**  
El display muestra tres rayas '---' en la zona donde se indica la temperatura exterior. El autoclima asume 20 ºC fijos y elimina la señal de conexión del acoplamiento magnético. Todos los dígitos del display parpadean.

**7. CÓMO COMPROBARLO**  
Consultar el bloque de valores de medición grupo 006 campo 1 en el equipo de diagnosis. Medir la continuidad y resistencia de la sonda con un polímetro.

---

### **NOTA DE ELEMENTO — INTERRUPTOR TÉRMICO DE LA CAJA DE AGUAS**
CÓDIGO: F38  
UBICACIÓN: Alojado en el interior de la caja de aguas del vano motor.  
APLICACIÓN: Circuitos de aire acondicionado y Autoclima en la gama Ibiza/Córdoba 1999.

**1. MISIÓN**  
Interrumpir la señal eléctrica de activación del compresor para evitar la congelación del evaporador por bajas temperaturas exteriores.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Interruptor térmico de contacto bimetálico normalmente cerrado. Recibe la tensión de 12 V procedente de la UCE J255 y la deja pasar hacia la unidad J293 siempre que la temperatura sea superior a 5 ºC.

**3. CARACTERÍSTICAS**  
Conmutador térmico estanco de 2 polos intercalado en serie en la línea de mando del compresor.

**4. VALORES DE TRABAJO**  

| Temperatura ambiente | Estado de los contactos | Tensión de salida a J293 |
|---|---|---|
| **> 5 ºC** | Cerrado | **12 V CC** (permite conectar A/C) |
| **< 5 ºC** | Abierto | **0 V CC** (desconecta A/C) |

**5. ANOMALÍAS FRECUENTES**  
Contactos pegados por arco eléctrico o bloqueados en posición abierta por fallo del bimetal.

**6. COMPORTAMIENTO EN AVERÍA**  
Si el interruptor permanece siempre cerrado, el compresor funciona a temperaturas inferiores a 5 ºC pudiendo provocar la congelación del evaporador. Si queda abierto permanente, la señal de 12 V no pasa y el compresor no se conecta jamás.

**7. CÓMO COMPROBARLO**  
Comprobar continuidad con polímetro entre sus dos bornes a temperatura ambiente por encima de 5 ºC (debe dar 0 Ω) y enfriarlo por debajo de 5 ºC (debe dar circuito abierto / infinito).

---

### **NOTA DE ELEMENTO — POTENCIÓMETRO DE LA DISTRIBUCIÓN DE AIRE**
UBICACIÓN: En el interior de la propia unidad del autoclima o calefacción motorizada, accionado al girar el mando de distribución.  
APLICACIÓN: Calefacción motorizada y Autoclima del SEAT Ibiza y Córdoba 1999.

**1. MISIÓN**  
Informar continuamente a la UCE de la posición angular seleccionada manualmente en el mando giratorio de salida de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Resistencia variable rotativa accionada por ruedas de engranaje. Envía una tensión proporcional a la UCE J255. Cuando se selecciona la salida de aire hacia el parabrisas, la UCE activa la estrategia de máxima eficacia de desempañado.

**3. CARACTERÍSTICAS**  
Potenciómetro rotativo de carbón accionado por las ruedas mecánicas de la ruleta del mando giratorio.

**4. VALORES DE TRABAJO**  

| Posición del mando giratorio | Estrategia activada por UCE J255 |
|---|---|
| **Posición Parabrisas (Defrost)** | Eleva velocidad de turbina, pone recirculación en aire fresco y conecta compresor A/C |
| **Otras posiciones de salida** | Regulación estándar seleccionada |

**5. ANOMALÍAS FRECUENTES**  
Desgaste de la pista de carbón en la zona del parabrisas; rotura de los dientes de accionamiento de las ruedas plásticas.

**6. COMPORTAMIENTO EN AVERÍA**  
En caso de pérdida de señal, la UCE sitúa la trampilla de recirculación en posición de entrada de aire fresco, no regula la velocidad de la turbina ni conecta el compresor al seleccionar la salida hacia el parabrisas. Los dígitos del display parpadean.

**7. CÓMO COMPROBARLO**  
Consultar la posición del mando de distribución en porcentaje (0% a 100%) en el bloque de valores de medición grupo 005 campo 4.

---

### **NOTA DE ELEMENTO — POTENCIÓMETRO DEL MOTOR DE LA TRAMPILLA DE TEMPERATURA**
CÓDIGO: G92  
UBICACIÓN: Alojado en el propio motor V68, en la parte inferior de la unidad climática.  
APLICACIÓN: Calefacción motorizada y Autoclima.

**1. MISIÓN**  
Informar a la UCE de la posición angular exacta de la trampilla de mezcla de temperatura y reconocer los dos topes del recorrido mecánico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Potenciómetro rotativo acoplado al eje del motor V68. Actúa como divisor de tensión entregando una señal variable a la UCE.

**3. CARACTERÍSTICAS**  
Posee una carrera angular de trabajo de 51º y un rango de resistencia eléctrica comprendido entre 0 y 4,7 kΩ.  
📷 IMAGEN: Despiece del motor V68 con sinfín, engranajes y potenciómetro interno G92 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 22

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico / Rango | Condiciones de validez |
|---|---|---|
| **Carrera angular del potenciómetro** | **51º** | Desplazamiento máximo de la trampilla |
| **Rango de resistencia eléctrica** | **0 a 4,7 kΩ** | Medido entre extremos de pista |
| **Ajuste básico (Grupo 002)** | Tensión en voltios de tope alto y bajo | Leído en función 04 grupo 002 |

**5. ANOMALÍAS FRECUENTES**  
Pérdida de contacto en los topes por suciedad de la pista resistiva; desalineación con el sinfín del servomotor.

**6. COMPORTAMIENTO EN AVERÍA**  
En caso de avería del potenciómetro, la UCE deja la trampilla en la posición existente y reduce la velocidad de la turbina para evitar la entrada excesiva de aire frío o caliente. Parpadean los dígitos del display.

**7. CÓMO COMPROBARLO**  
Consultar el grupo de valores de medición 002 (campos 1, 2, 3 y 4) donde se indican los voltajes de posición real, calculada y topes superior e inferior de G92. Realizar el Ajuste Básico en función 04 grupo 002.

---

### **NOTA DE ELEMENTO — CONMUTADOR DE PRESIÓN**
CÓDIGO: F129  
UBICACIÓN: En el circuito de alta presión, junto a la válvula de expansión en el vano motor.  
APLICACIÓN: Vehículos con motorización Diésel equipados con A/C o Autoclima.

**1. MISIÓN**  
Proteger el circuito frigorífico contra sobrepresión o falta de gas y gobernar la 2ª velocidad de los ventiladores del líquido refrigerante.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Integra dos interruptores en un mismo cuerpo:  
1. *Interruptor de máxima o mínima:* Normalmente cerrado. Abre al detectar una presión superior a 32 bares o inferior a 2 bares, interrumpiendo la señal del compresor.  
2. *Interruptor de presión media:* Normalmente abierto. Cierra al detectar una presión aproximada de 16 bares para enviar positivo (15) a la unidad del aire acondicionado.

**3. CARACTERÍSTICAS**  
Conmutador cuádruple presostático montado sobre toma de alta presión y conector eléctrico de 4 polos.

**4. VALORES DE TRABAJO**  

| Contacto interno | Umbral de presión de conmutación | Función / Resultado eléctrico |
|---|---|---|
| **Max / Min (Pines 1 y 2)** | Abre a **< 2 bares** o **> 32 bares** | Corta señal de acoplamiento del compresor |
| **Media presión (Pines 3 y 4)** | Cierra a **~16 bares** | Conecta 2ª velocidad de ventiladores V7/V35 |

**5. ANOMALÍAS FRECUENTES**  
Fugas de refrigerante por la toma de roscado; membrana bloqueada por sedimentos de aceite.

**6. COMPORTAMIENTO EN AVERÍA**  
Si el contacto de máxima/mínima abre, la unidad desactiva el compresor y la 1ª velocidad. Si el de media no cierra, no se activa la 2ª velocidad de ventiladores al subir la presión a 16 bares.

**7. CÓMO COMPROBARLO**  
Consultar el estado del conmutador F129 en el grupo de valores de medición 001 campo 2 (0 = fuera de rango, 1 = rango de trabajo). Comprobar la continuidad de bornes con polímetro.

---

### **NOTA DE ELEMENTO — TRANSMISOR DE PRESIÓN ELECTRÓNICO**
CÓDIGO: G65  
UBICACIÓN: Tubería de alta presión, junto a la válvula de expansión en el vano motor.  
APLICACIÓN: Vehículos con motorización de Gasolina equipados con A/C o Autoclima.

**1. MISIÓN**  
Medir la presión del gas R134a para informar a la UCE del motor y a la unidad de control del aire acondicionado J293.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sensor piezoeléctrico de estado sólido. Convierte la presión en una señal modulada que envía a la UCE del motor (para regular el ralentí según la carga) y a la UCE J293 (para desconexión y control de ventiladores).

**3. CARACTERÍSTICAS**  
Sensor electrónico de 3 polos (Alimentación 12 V, Masa y Salida de señal).

**4. VALORES DE TRABAJO**  

| Condición de presión en alta | Respuesta del sistema vía J293 |
|---|---|
| **Presión < 2 bares o > 32 bares** | Desconexión del compresor por presión máxima o mínima |
| **Presión >= 16 bares** | Conexión de la 2ª velocidad de ventiladores V7/V35 |

**5. ANOMALÍAS FRECUENTES**  
Fallo de la electrónica interna del transmisor; sulfatación del conector.

**6. COMPORTAMIENTO EN AVERÍA**  
Si el transmisor está averiado, la unidad de control del aire acondicionado desactiva el compresor. La avería de este transmisor únicamente se registra en la memoria de averías de la unidad de control del motor.

**7. CÓMO COMPROBARLO**  
Verificar la presencia de la señal con un osciloscopio o leer la memoria de averías en la dirección "01 - Motor" mediante el equipo de diagnosis.

---

### **NOTA DE ELEMENTO — REGULADOR DE LA ILUMINACIÓN**
CÓDIGO: E20  
UBICACIÓN: Lado izquierdo del tablero de instrumentos, formando una pieza única con el conmutador de luces y la regulación de altura de faros.  
APLICACIÓN: Todos los modelos SEAT Ibiza y Córdoba 1999.

**1. MISIÓN**  
Ajustar la intensidad luminosa del cuadro de instrumentos, el display de la unidad de manejo e indicación y los pictogramas de los mandos.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Modifica, mediante una resistencia interna, la tensión de alimentación aplicada a los componentes de iluminación.

**3. CARACTERÍSTICAS**  
Módulo electrónico integrado junto con el conmutador de luces y la regulación de alcance de faros.

**4. VALORES DE TRABAJO**  

| Entrada de señal | Función de control |
|---|---|
| Tensión analógica variable | Modula la iluminación de pictogramas en J255 y pulsadores/display en la radio |

**5. ANOMALÍAS FRECUENTES**  
Interrupción de la resistencia interna por sobrecalentamiento.

**6. COMPORTAMIENTO EN AVERÍA**  
Pérdida de regulación o apagado de la luz de localización en los pictogramas del mando de distribución y en el display central.

**7. CÓMO COMPROBARLO**  
Medir la variación de voltaje con un multímetro en la línea de salida del regulador al accionar la rueda de control.

---

### **NOTA DE ELEMENTO — CONMUTADOR TÉRMICO DEL VENTILADOR**
CÓDIGO: F18  
UBICACIÓN: Roscado en el radiador del líquido refrigerante.  
APLICACIÓN: Todos los modelos equipados con aire acondicionado o Autoclima.

**1. MISIÓN**  
Conectar la 1ª y 2ª velocidad de los ventiladores del líquido refrigerante según la temperatura del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Formado por dos interruptores normalmente abiertos. El 1er interruptor cierra a los 95 ºC alimentando con positivo (30) la 1ª velocidad; el 2º interruptor cierra a los 105 ºC enviando un positivo (30) hacia la UCE del aire acondicionado J293 para conectar la 2ª velocidad.

**3. CARACTERÍSTICAS**  
Sensor termostático roscado con conector de 3 vías de potencia.

**4. VALORES DE TRABAJO**  

| Escalón térmico | Temp. Cierre de contactos | Resultado eléctrico |
|---|---|---|
| **1er Escalón (Velocidad I)** | **95 ºC** | Alimenta directamente con +30 la 1ª velocidad de V7/V35 |
| **2º Escalón (Velocidad II)** | **105 ºC** | Envía +30 a UCE J293 para activar la 2ª velocidad |

**5. ANOMALÍAS FRECUENTES**  
Fogueo o desgaste de los contactos bimetálicos internos.

**6. COMPORTAMIENTO EN AVERÍA**  
El motor del vehículo se sobrecalienta en parado al no saltar los electroventiladores.

**7. CÓMO COMPROBARLO**  
Puentear el terminal de alimentación (+30) con las salidas de 1ª y 2ª velocidad para verificar la activación de los electroventiladores.

---

### **NOTA DE ELEMENTO — UNIDAD DE MANEJO E INDICACIÓN (PULSADORES)**
CÓDIGO: E87  
UBICACIÓN: Consola central del salpicadero, formando un único conjunto compacto con el display y la radio.  
APLICACIÓN: Calefacción motorizada y Autoclima.

**1. MISIÓN**  
Recoger las órdenes del usuario relativas a temperatura, turbina, recirculación y A/C para transmitirlas a la unidad de control J255.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Al presionar un pulsador, se transmite una señal mediante un bus de datos de 18 cables al radiocasete. El radiocasete la reenvía por un bus de datos de 1 cable hacia la unidad del autoclima o calefacción motorizada J255. La unidad E87 es alimentada por la radio.

**3. CARACTERÍSTICAS**  
Regleta frontal compacta de pulsadores integrada en el marco de la consola central.

**4. VALORES DE TRABAJO**  

| Bus de comunicación | Número de hilos | Función |
|---|---|---|
| **Bus E87 a Radiocasete R** | **18 cables** | Envió de pulsaciones |
| **Bus Radiocasete R a J255** | **1 cable** | Enlace de datos serie |

**5. ANOMALÍAS FRECUENTES**  
Fallo mecánico o cortocircuito en alguno de los pulsadores de la regleta.

**6. COMPORTAMIENTO EN AVERÍA**  
Cuando un pulsador no funciona, la radio emite una señal de avería hacia J255. El autoclima pasa a modo automático fijo, toma 22 ºC solicitados y 20 ºC exterior, desconecta el compresor y abre la recirculación a aire fresco. La calefacción motorizada trabaja con los parámetros existentes en el momento de la avería.

**7. CÓMO COMPROBARLO**  
Consultar el estado de pulsación (0 = No presionado, 1 = Presionado) en los grupos 003 y 004 del bloque de valores de medición.

---

### **NOTA DE ELEMENTO — UNIDAD DE MANEJO E INDICACIÓN (DISPLAY)**
CÓDIGO: E87  
UBICACIÓN: Consola central del salpicadero.  
APLICACIÓN: Calefacción motorizada y Autoclima.

**1. MISIÓN**  
Informar sobre los parámetros de funcionamiento del autoclima o calefacción motorizada, del radiocasete y del ordenador de a bordo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Los dígitos referentes al climatizador son excitados por la unidad del radiocasete mediante el bus de 18 cables, tras recibir previamente la información desde J255 por el bus de 1 cable. Su alimentación eléctrica procede también de la radio.

**3. CARACTERÍSTICAS**  
Pantalla LCD de grandes dimensiones. Existen dos variantes según se monte autoclima (indica ºC o letras) o calefacción motorizada (indica escala Cold/Hot).

**4. VALORES DE TRABAJO**  

| Tipo de equipo | Formato de indicación de temperatura |
|---|---|
| **Autoclima** | Valor numérico en ºC (modo automático) o letras (modo manual) |
| **Calefacción Motorizada** | Barras gráficas entre COLD y HOT |

**5. ANOMALÍAS FRECUENTES**  
Pérdida de segmentos de cristal líquido; interrupción del bus de datos de 1 cable entre J255 y la radio.

**6. COMPORTAMIENTO EN AVERÍA**  
Si se produce una avería en la comunicación del bus de datos entre el radiocasete y J255, los datos referentes al climatizador dejan de ser visibles en el display.

**7. CÓMO COMPROBARLO**  
Verificar la continuidad de la línea del bus de 1 cable. En caso de avería propia del display, debe sustituirse la unidad E87 completa.

---

### **NOTA DE ELEMENTO — MOTOR DE LA TRAMPILLA DE TEMPERATURA**
CÓDIGO: V68  
UBICACIÓN: Parte inferior de la unidad climática.  
APLICACIÓN: Calefacción motorizada y Autoclima.

**1. MISIÓN**  
Accionar mecánicamente la trampilla de mezcla de temperatura para regular el paso de aire a través del radiador de calefacción.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Motor eléctrico de corriente continua de giro limitado. La UCE J255 lo excita con positivo y negativo, alternando la polaridad de los bornes según el sentido de giro deseado hacia frío o calor. Monta en su interior el potenciómetro G92.

**3. CARACTERÍSTICAS**  
Módulo actuador provisto de motor eléctrico, tornillo sinfín y rueda de transmisión de movimiento.  
📷 IMAGEN: Sección del motor V68 con sinfín, engranajes y potenciómetro interno G92 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 22

**4. VALORES DE TRABAJO**  

| Prueba en diagnosis | Comportamiento del motor V68 |
|---|---|
| **Diagnosis de actuadores (Función 03)** | Se desplaza progresivamente desde la posición mínima a la máxima |
| **Ajuste básico (Función 04 Grupo 002)** | Desplaza la trampilla a ambos extremos memorizando voltajes |

**5. ANOMALÍAS FRECUENTES**  
Ruptura o desgaste de los dientes de la rueda de transmisión o sinfín; agarrotamiento de la trampilla.

**6. COMPORTAMIENTO EN AVERÍA**  
En caso de avería, la trampilla se queda en la posición existente y la UCE aminora la velocidad de la turbina para reducir la entrada brusca de aire.

**7. CÓMO COMPROBARLO**  
Ejecutar la Función 03 (Diagnosis de actuadores) para verificar el movimiento de mínimo a máximo. Ejecutar el Ajuste Básico grupo 002.

---

### **NOTA DE ELEMENTO — MOTOR DE LA TURBINA DE AIRE Y REGULADOR DE RÉGIMEN**
CÓDIGO: V2 (Motor de la turbina) / J126 (Regulador de régimen)  
UBICACIÓN: Alojados en la cavidad de entrada de la unidad climática.  
APLICACIÓN: Calefacción motorizada y Autoclima.

**1. MISIÓN**  
Generar y ajustar de forma continua el caudal de aire impulsado al interior del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El regulador electrónico J126 recibe la tensión de mando de J255 y modula la tensión continua aplicada al motor V2 de la turbina.

**3. CARACTERÍSTICAS**  
Motor eléctrico de corriente continua alimentado a través de la etapa de potencia electrónica J126.

**4. VALORES DE TRABAJO**  

| Diagnóstico de actuadores (Función 03) | Respuesta de regulación |
|---|---|
| **Verificación de la turbina V2** | Regulación progresiva de la velocidad desde 0 hasta la máxima, en pasos de 2,5 V cada 2 segundos |

**5. ANOMALÍAS FRECUENTES**  
Desgaste de escobillas del motor V2; fallo de transistores en el regulador J126.

**6. COMPORTAMIENTO EN AVERÍA**  
La avería es detectable al disminuir notablemente o cesar por completo la entrada de aire al habitáculo.

**7. CÓMO COMPROBARLO**  
Consultar la tensión solicitada y real de V2 en el grupo 005 (campos 1 y 2) del bloque de valores de medición. Probar el barrido de tensión en el test de actuadores.

---

### **NOTA DE ELEMENTO — MOTOR DE LA TRAMPILLA DE RECIRCULACIÓN**
CÓDIGO: V113  
UBICACIÓN: Parte superior de la unidad climática, unido a la trampilla de recirculación.  
APLICACIÓN: Todos los sistemas de climatización de la gama.

**1. MISIÓN**  
Conmutar el paso entre la admisión de aire fresco del exterior y la recirculación del aire del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Motor de corriente continua de giro libre con un único sentido de rotación. Dispone de un cursor interno sobre una pista fija; el cursor se sitúa sobre la pista no excitada a la espera de la señal para activar de nuevo el motor.

**3. CARACTERÍSTICAS**  
Actuador electromecánico provisto de guía y palanca de giro conectadas al eje de la trampilla.  
📷 IMAGEN: Esquema del motor V113 con palanca de giro, guía y pista del cursor — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 23

**4. VALORES DE TRABAJO**  

| Estado en bloque de valores 001 (Campo 3) | Posición de la trampilla |
|---|---|
| **0** | Aire exterior |
| **1** | Recirculación |

**5. ANOMALÍAS FRECUENTES**  
Fallo de contacto en el cursor interno; desgaste de la palanca de giro o guía.

**6. COMPORTAMIENTO EN AVERÍA**  
Imposibilidad de cambiar la posición de la trampilla de recirculación. Cada vez que se conecta el autoclima parpadean todos los dígitos del display.

**7. CÓMO COMPROBARLO**  
Comprobar el desplazamiento alternativo entre aire exterior y recirculación en el diagnóstico de actuadores (Función 03).

---

### **NOTA DE ELEMENTO — MOTOR PARA LA TURBINA DEL TRANSMISOR G56**
CÓDIGO: V42  
UBICACIÓN: Forma un único conjunto con el transmisor de temperatura interior G56, tras el salpicadero.  
APLICACIÓN: Sistema Autoclima.

**1. MISIÓN**  
Generar un flujo de aire continuo que atraviese el transmisor G56 para poder registrar el valor de temperatura real del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Motor eléctrico con estator y rotor imantado. Monta en su interior una placa electrónica que gobierna el funcionamiento y detecta las posibles averías. Es alimentado con positivo y negativo por J255 mientras reciba la señal de encendido (15).

**3. CARACTERÍSTICAS**  
Soplante de turbina micrométrica con placa de control integrada.

**4. VALORES DE TRABAJO**  

| Tensión de excitación | Estado operativo |
|---|---|
| **12 V CC (Borne 15)** | Funcionamiento continuo mientras el encendido esté conectado |

**5. ANOMALÍAS FRECUENTES**  
Bloqueo del rotor por acumulación de suciedad o pelusa.

**6. COMPORTAMIENTO EN AVERÍA**  
Cuando se detecta una avería del motor V42, la unidad del autoclima aplica factores de corrección a la temperatura registrada por el transmisor G56 para simular un valor más o menos próximo al real.

**7. CÓMO COMPROBARLO**  
Verificar si existe succión de aire en la rejilla del salpicadero con una tira fina de papel.

---

### **NOTA DE ELEMENTO — ACOPLAMIENTO MAGNÉTICO DEL COMPRESOR**
CÓDIGO: N25  
UBICACIÓN: Ubicado en el compresor de aire acondicionado.  
APLICACIÓN: Versiones con aire acondicionado manual y Autoclima.

**1. MISIÓN**  
Acoplar el eje del compresor para que gire solidario con la polea de arrastre y generar la presión en el circuito frigorífico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Electroimán alimentado con positivo por la unidad de control del aire acondicionado J293. La fuerza de la bobina atrae el disco de embrague contra la polea en movimiento.

**3. CARACTERÍSTICAS**  
Bobina electromagnética de alta intensidad, polea de arrastre y disco de embrague de fricción.  
📷 IMAGEN: Sección del acoplamiento magnético N25 con la bobina, embrague y polea — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 25

**4. VALORES DE TRABAJO**  

| Tensión de excitación | Estado de acoplamiento |
|---|---|
| **12 V CC desde UCE J293** | Conectado / Compresor girando solidario |
| **0 V CC** | Desconectado / Polea girando loca |

**5. ANOMALÍAS FRECUENTES**  
Interrupción del arrollamiento de la bobina por temperatura; desgaste en la cara de fricción del embrague.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no gira y el aire que entra al habitáculo no se enfría.

**7. CÓMO COMPROBARLO**  
Comprobar la presencia de 12 V en el conector de N25. Ejecutar la prueba de conexión y desconexión en el test de actuadores (Función 03).

---

### **NOTA DE ELEMENTO — VENTILADORES DEL LÍQUIDO REFRIGERANTE**
CÓDIGO: V7 / V35  
UBICACIÓN: Frontal del vehículo, en el radiador del líquido refrigerante.  
APLICACIÓN: Todos los modelos equipados con A/C o Autoclima.

**1. MISIÓN**  
Evacuar el calor cediéndolo al aire exterior a través del condensador y del radiador de refrigeración.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Motores eléctricos de corriente continua de dos velocidades. La 1ª velocidad se activa directamente por el conmutador térmico F18 (a 95 ºC) o por la UCE J293 al conectar el compresor. La 2ª velocidad se activa por F18 (a 105 ºC) o por J293 al superarse 16 bares de presión.

**3. CARACTERÍSTICAS**  
Dos electromotores independientes con material resistivo interno para la 1ª velocidad.

**4. VALORES DE TRABAJO**  

| Velocidad del electroventilador | Condiciones de activación |
|---|---|
| **1ª Velocidad** | Señal de conexión del compresor o Temp. refrigerante a **95 ºC** |
| **2ª Velocidad** | Presión de gas **> 16 bares** o Temp. refrigerante a **105 ºC** |

**5. ANOMALÍAS FRECUENTES**  
Fogueo o interrupción del material resistivo de la 1ª velocidad; desgaste de escobillas.

**6. COMPORTAMIENTO EN AVERÍA**  
Sobrecalentamiento del líquido refrigerante del motor o disparo de sobrepresión en el circuito frigorífico.

**7. CÓMO COMPROBARLO**  
Puentear las salidas de F18 para verificar la activación de la 1ª y 2ª velocidad.

---

### **NOTA DE ELEMENTO — UNIDAD DEL EQUIPO DE MANDO ELECTRÓNICO**
CÓDIGO: J255  
UBICACIÓN: Ubicada detrás del mando giratorio de distribución de aire en la consola central.  
APLICACIÓN: Calefacción motorizada y Autoclima.

**1. MISIÓN**  
Regular la temperatura del aire, gestionar los servomotores V68 y V113, controlar la turbina V2 y emitir la señal de conexión del compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Módulo electrónico microprocesado. La unidad es la misma para autoclima y calefacción motorizada. Al conectar la UCE al mazo de cables, si el contacto 21 recibe masa mediante un puente de codificación, la UCE adopta el programa de Calefacción Motorizada; si no hay puente, adopta el programa de Autoclima.

**3. CARACTERÍSTICAS**  
Unidad electrónica con autodiagnóstico integral accesible por dirección 08.  
📷 IMAGEN: Módulo de la unidad J255 con la asignación de pines y conector de diagnosis — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 11

**4. VALORES DE TRABAJO**  

| Codificación en lectura (Función 01) | Tipo de equipo / Programa activo |
|---|---|
| **2 2 0** | **Autoclima** (Regulación electrónica de temperatura y caudal) |
| **1 1 0** | **Calefacción Motorizada** (Accionamiento eléctrico sin regulación automática) |

**5. ANOMALÍAS FRECUENTES**  
Interrupción del puente de masa en el contacto 21 que modifica la codificación interna; fallo del microprocesador.

**6. COMPORTAMIENTO EN AVERÍA**  
Inoperatividad del sistema o parpadeo continuo de todos los dígitos de la pantalla al conectar el encendido.

**7. CÓMO COMPROBARLO**  
Consultar el código de equipo mediante la Función 01 en el equipo de diagnosis. Consultar la memoria de averías mediante la Función 02.

---

### **NOTA DE ELEMENTO — UNIDAD DE CONTROL DEL AIRE ACONDICIONADO**
CÓDIGO: J293  
UBICACIÓN: Alojada en el vano motor.  
APLICACIÓN: Vehículos con aire acondicionado manual y Autoclima.

**1. MISIÓN**  
Gobernar la alimentación del acoplamiento magnético N25 y activar las dos velocidades de los ventiladores del líquido refrigerante.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Módulo electrónico relé de potencia. Conecta el acoplamiento N25 al recibir la señal de solicitud de J255 (pasando por F38 y F129/G65), siempre que no exista señal de corte por negativo enviada por la UCE del motor.

**3. CARACTERÍSTICAS**  
Módulo estanco provisto de fusibles aéreos de protección S164 y S180.

**4. VALORES DE TRABAJO**  

| Condición de entrada | Salida en J293 |
|---|---|
| **Señal J255 activa + F38 cerrado + F129/G65 OK + Sin negativo de UCE motor** | Activa acoplamiento N25 y 1ª velocidad de ventiladores V7/V35 |
| **Señal de negativo desde UCE motor** | Desconecta inmediatamente el acoplamiento N25 |

**5. ANOMALÍAS FRECUENTES**  
Fogueo de los contactos de potencia internos; fundición de los fusibles S164 o S180.

**6. COMPORTAMIENTO EN AVERÍA**  
El compresor no se acopla o los electroventiladores no se activan al solicitar frío.

**7. CÓMO COMPROBARLO**  
Comprobar las alimentaciones de potencia en las patillas de J293 y verificar la presencia de 12 V en la salida hacia N25.

---

### **NOTA DE ELEMENTO — RADIOCASETE**
CÓDIGO: R  
UBICACIÓN: Consola central del salpicadero.  
APLICACIÓN: Vehículos con Calefacción Motorizada o Autoclima.

**1. MISIÓN**  
Servir de pasarela de comunicación multiplexada entre la unidad E87 y la UCE J255, y controlar la iluminación del display.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Recibe las órdenes enviadas por E87 a través del bus de datos de 18 cables, las convierte y las reenvía a J255 mediante un bus de datos de 1 cable. Recibe de J255 los mensajes de indicación y los emite en el display.

**3. CARACTERÍSTICAS**  
Unidad central de audio e interfaz electrónica de comunicación multiplexada.

**4. VALORES DE TRABAJO**  

| Línea de bus de datos | Tipo de interconexión |
|---|---|
| **Bus de 18 cables** | Enlace entre pulsadores E87 y el radiocasete R |
| **Bus de 1 cable** | Enlace serie bidireccional entre radiocasete R y la UCE J255 |

**5. ANOMALÍAS FRECUENTES**  
Interrupción de la línea del bus de 1 cable; fallo interno de la pasarela de datos de la radio.

**6. COMPORTAMIENTO EN AVERÍA**  
Los datos referentes al autoclima o calefacción motorizada dejan de ser visibles en el display.

**7. CÓMO COMPROBARLO**  
Comprobar la continuidad del conductor del bus de 1 cable entre la radio y la UCE J255.

---

### **NOTA DE PROCESO — AUTODIAGNOSIS Y FUNCIONES DE CONTROL DE CLIMATIZACIÓN / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Establecer el procedimiento de autodiagnosis, lectura y borrado de averías, ajuste básico y análisis del bloque de valores de medición en las UCEs J255. Se aplica a la localización de averías en calefacción motorizada y autoclima.

**2. FUNDAMENTO**  
La UCE J255 supervisa el estado de sensores y actuadores. Memoriza averías esporádicas (se eliminan tras 40 puestas en marcha sin repetirse) y permanentes (requieren reparación física y borrado manual).

**3. CONDICIONES PREVIAS**  
- Tensión de batería correcta.  
- Encendido conectado ("borne 15 ON").

**4. EQUIPO Y MATERIAL**  
- Equipo de diagnosis homologado con cable de conexión al puerto T16 de 16 polos.

**5. DESARROLLO**  
1. Ingresar en la diagnosis por el **Código de dirección "08 - Aire acondicionado"**.  
2. **Función 01 (Versión de la unidad de control):** Comprobar la clave de recambios y el tipo de equipo (220 = Autoclima, 110 = Calefacción Motorizada).  
3. **Función 02 (Consultar memoria de averías):** Leer los códigos DTC de sensores y actuadores.  
4. **Función 03 (Diagnóstico de elementos actuadores):** Excitar cíclicamente el acoplamiento N25, la turbina V2 (variación de 0 a 12 V en pasos de 2,5 V cada 2 s), el motor V68 (de mínimo a máximo) y V113 (de aire exterior a recirculación).  
5. **Función 04 (Ajuste básico):** Introducir el **Grupo 002** para que la UCE reconozca y memorice las posiciones límite del motor V68. Realizar siempre al sustituir V68 o la UCE J255.  
6. **Función 08 (Bloque de valores de medición):** Analizar los parámetros de trabajo en tiempo real en los grupos 001 al 006.  
7. Subsanar las averías, ejecutar la **Función 05 (Borrar memoria de averías)** y salir con **Función 06 (Finalizar emisión)**.

**6. VALORES DE REFERENCIA**  

| Función / Grupo | Parámetro leído / Valor teóricamente correcto |
|---|---|
| **Función 04 — Grupo 002** | Muestra posición real, calculada y topes superior e inferior de V68 en Voltios |
| **Función 08 — Grupo 001** | Campo 1 (Compresor: 0=OFF, 1=ON); Campo 2 (Presostato F129: 1=OK); Campo 3 (V113: 0=Ext, 1=Rec) |
| **Función 08 — Grupo 005** | Campo 1 (Voltios solicitados V2); Campo 2 (Voltios reales V2); Campo 4 (Mando distribución: 0-100%) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Omitir el Ajuste Básico (Función 04 Grupo 002) al sustituir el motor V68 o la UCE J255: genera desacoples en la regulación de mezcla de aire y parpadeo continuo en el display.

**8. VERIFICACIÓN FINAL**  
Confirmar la ausencia de códigos en la memoria de averías (Función 02) y comprobar que el display no parpadee al conectar el encendido.

**9. SEGURIDAD Y NORMATIVA**  
No documentado en fuentes.

---

COBERTURA: documento «CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf», páginas 1 a 38 de 38. [completo]

---

🔍 ¿Quieres que elaboremos un cuestionario de comprobación práctica o un examen tipo test sobre este cuaderno didáctico para los alumnos?
