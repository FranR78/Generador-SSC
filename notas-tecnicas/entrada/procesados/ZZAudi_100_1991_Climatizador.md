### **NOTA DE PROCESO — FUNDAMENTOS FÍSICOS Y PRINCIPIO DEL CLIMATIZADOR / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar los principios termodinámicos, la relación entre presión y temperatura de ebullición, y el ciclo de transferencia de calor aplicado al aire acondicionado del automóvil.

**2. FUNDAMENTO**  
El calor fluye espontáneamente desde la materia más caliente a la más fría. La variación de la presión ejercida sobre un líquido modifica directamente su punto de ebullición. En el climatizador, el fluido frigorífico cambia continuamente de estado (evaporación y condensación), absorbiendo calor del habitáculo al ebullir a baja presión y cediéndolo al aire ambiente al condensarse a alta presión.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Curva de presión de vapor del agua y del agente frigorífico R134a — Fuente: ZZAudi 100_1991_Climatizador.pdf, pág. 3  
- **Proceso frigorífico:** El gas refrigerante es aspirado y comprimido por el compresor. Al elevar la presión, aumentan el contenido térmico y la temperatura del gas por encima de la temperatura ambiental.  
- **Condensación:** En el condensador, el gas cede calor al aire exterior debido al gradiente térmico y pasa a estado líquido a alta presión.  
- **Expansión y evaporación:** La válvula de expansión o estrangulador reduce bruscamente la presión del líquido. El fluido entra al evaporador a baja presión e ebulle absorbiendo el calor del aire del habitáculo que atraviesa sus aletas para enfriarlo.

**6. VALORES DE REFERENCIA**  

| Parámetro / Estado | Valor numérico | Condiciones de validez |
|---|---|---|
| **Relación de presión** | **1 MPa = 10 bar de sobrepresión = 145 psi** | Presión manométrica |
| **Presión atmosférica normal** | **1 bar absoluto (0 bar relativo)** | A nivel del mar |
| **Efecto de confort en habitáculo (Cabeza / Pecho / Pies)** | **23 ºC / 24 ºC / 30 ºC** | Con climatizador tras exposición solar con 30 ºC exterior |
| **Efecto sin climatizador (Cabeza / Pecho / Pies)** | **42 ºC / 40 ºC / 35 ºC** | Sin climatizador tras exposición solar con 30 ºC exterior |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Confundir la presión absoluta con la presión relativa indicada por los manómetros (el valor 0 bar en el manómetro equivale a 1 bar absoluto o presión atmosférica).

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
Prohibición legal de evacuar agentes frigoríficos a la atmósfera.

---

### **NOTA DE ELEMENTO — AGENTE FRIGORÍFICO R134a**
UBICACIÓN: Circuito cerrado de climatización.  
APLICACIÓN: Sistema de aire acondicionado de vehículos.

**1. MISIÓN**  
Actuar como fluido caloportador que absorbe calor del aire del habitáculo al evaporarse a baja presión y lo cede al exterior al condensarse a alta presión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Sustancia sintética de bajo punto de ebullición. A baja presión ebulle absorbiendo calor del aire que atraviesa el evaporador. Al comprimirse, eleva su temperatura sobre la ambiental para ceder energía en el condensador y volver a estado líquido.

**3. CARACTERÍSTICAS**  
- **Fórmula química:** CH2F-CF3 (Tetrafluoroetano).  
- Hidrocarburo fluorado exento de cloro (HFC) que no ataca la capa de ozono y tiene un efecto invernadero 10 veces menor que el R12.  
- Incoloro e invisible en estado gaseoso; en estado líquido es transparente como el agua.  
- Químicamente estable con metales puros, pero genera ácidos si se combina con humedad o compuestos clorados.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico | Condiciones de validez |
|---|---|---|
| **Punto de ebullición** | **-26,5 ºC** | A presión atmosférica (1 bar) |
| **Punto de solidificación** | **-101,6 ºC** | A presión atmosférica (1 bar) |
| **Temperatura crítica** | **100,6 ºC** | Límite por encima del cual siempre es gas |
| **Presión crítica** | **40,56 bar (absolutos)** | Límite de cambio de fase |
| **Factor de llenado máximo** | **1,15 kg/l** | Carga máxima por litro de volumen en depósitos |
| **Presión de vapor en reposo a 20 ºC** | **4,70 bar (sobrepresión)** | Motor parado y temperatura estabilizada |

**5. ANOMALÍAS FRECUENTES**  
Formación de hielo en el orificio de la válvula de expansión o estrangulador por presencia de agua cuando el deshidratador se satura (absorbe más de 7 g de H2O).

**6. COMPORTAMIENTO EN AVERÍA**  
Interrupción del enfriamiento por congelación de la tobera de expansión o degradación de componentes por formación de ácidos.

**7. CÓMO COMPROBARLO**  
Verificar la relación presión-temperatura en reposo mediante las tablas de presión de vapor e identificar fugas con un detector electrónico (sensibilidad < 5 g/año).

---

### **NOTA DE ELEMENTO — ACEITE PARA MÁQUINAS FRIGORÍFICAS (PAG)**
UBICACIÓN: Cárter del compresor y distribuido en emulsión por el circuito frigorífico.  
APLICACIÓN: Lubricación interna de compresores de R134a.

**1. MISIÓN**  
Lubricar las partes móviles del compresor, estanqueizar retenes y disipar el calor generado en el rozamiento mecánico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Aceite sintético especial de Polialquilenglicol (PAG) miscible con el refrigerante R134a a cualquier temperatura. Es arrastrado en una proporción del 20 % al 40 % por el fluido refrigerante a través de todo el circuito.

**3. CARACTERÍSTICAS**  
- Aceite sintético exento de ácidos y agua.  
- **Altamente higroscópico:** absorbe la humedad ambiental con gran rapidez.  
- Incompatible con aceites minerales de R12.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor prescrito |
|---|---|
| **Proporción de aceite en circuito** | **20 % a 40 %** respecto al volumen de refrigerante |
| **Contenido de agua** | Extremadamente bajo (exige cierre hermético inmediato de envases) |

**5. ANOMALÍAS FRECUENTES**  
Envejecimiento y acidificación por absorción de humedad ambiental al dejar los envases abiertos; se vuelve oscuro, denso y agresivo con los metales.

**6. COMPORTAMIENTO EN AVERÍA**  
Ruidos mecánicos, desgaste acelerado y gripado o destrucción del compresor.

**7. CÓMO COMPROBARLO**  
Inspeccionar la viscosidad y coloración del aceite extraído del compresor (descartar si está oscuro o denso).

---

### **NOTA DE PROCESO — MEDIDAS DE SEGURIDAD, MANEJO Y PRIMEROS AUXILIOS / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer las normas de seguridad laboral, prevención de riesgos y primeros auxilios al manipular R134a, aceites PAG y recipientes a presión.

**2. FUNDAMENTO**  
La rápida evaporación del R134a a presión atmosférica (-26,5 ºC) provoca congelación instantánea al contacto con tejidos humanos. A temperaturas superiores a 50 ºC o bajo llamas de soldadura, el refrigerante se descompone en productos altamente tóxicos y corrosivos (ácido fluorhídrico).

**3. CONDICIONES PREVIAS**  
Locales con ventilación intensiva de taller o extracción forzada. Prohibido trabajar en recintos subterráneos o fosas.

**4. EQUIPO Y MATERIAL**  
Gafas de protección, guantes de protección, delantal e instalación para enjuague ocular.

**5. DESARROLLO**  
1. **Equipos de Protección Individual (EPI):** Utilizar siempre gafas protectoras estancas y guantes resistentes a productos químicos antes de abrir cualquier racor.  
2. **Manejo de botellas de gas:** Transportar siempre con el capuchón protector enroscado. Asegurar botellas verticales contra caídas y no calentar en ningún caso a más de 50 ºC ni exponer al sol directo.  
3. **Trabajos de soldadura o pintura:** Extraer obligatoriamente el refrigerante antes de soldar cerca del circuito. En cabinas u hornos de secado de pintura, la temperatura máxima de los componentes no debe superar los 80 ºC.  
4. **Primeros Auxilios:**  
   - *Contacto con los ojos:* Enjuagar de inmediato con abundante agua limpia durante al menos 15 minutos. Aplicar gotas de colirio neutro y acudir urgentemente al oftalmólogo informando del producto R134a.  
   - *Contacto con la piel:* Retirar las prendas mojadas y lavar la zona afectada con agua abundante.  
   - *Inhalación de vapores:* Trasladar a la víctima al aire libre, administrar oxígeno si hay dificultad o practicar respiración artificial si no respira.

**6. VALORES DE REFERENCIA**  

| Parámetro de seguridad | Valor límite |
|---|---|
| **Temperatura máxima en depósitos / hornos** | **50 ºC en depósitos / 80 ºC en objetos** |
| **Tiempo de lavado ocular / cutáneo** | **Mínimo 15 minutos** con agua limpia |
| **Diámetro mínimo de cable de prolongación** | **2 mm2** de sección |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Percibir un olor penetrante indica la presencia de productos de descomposición tóxicos (ácido fluorhídrico); se debe evacuar la zona inmediatamente.

**8. VERIFICACIÓN FINAL**  
Comprobar la ausencia de fugas y la utilización de los EPIs por parte del personal de taller.

**9. SEGURIDAD Y NORMATIVA**  
Normativa legal de depósitos a presión, TRG 400/402 y Ley de Gestión de Residuos.

---

### **NOTA DE ELEMENTO — COMPRESOR DE CLIMATIZACIÓN (CON Y SIN EMBRAGUE ELECTROMAGNÉTICO)**
UBICACIÓN: Vano motor, accionado por la correa Poly-V del cigüeñal.  
APLICACIÓN: Generación de la diferencia de presión en el circuito frigorífico.

**1. MISIÓN**  
Aspirar el agente frigorífico gaseoso a baja presión procedente del evaporador, comprimirlo e impulsarlo a alta presión hacia el condensador.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- **Compresor con embrague electromagnético N25:** Transmite el movimiento rotativo de la polea al eje del compresor mediante la excitación electromagnética de una bobina.  
- **Compresor sin embrague electromagnético (con electroválvula N280):** Gira continuamente con el motor. Ajusta su cilindrada mediante la activación externa de la electroválvula N280 pilotada por la UCE. Dispone de protección de sobrecarga de goma/grafito de rotura programada en la polea en caso de gripado mecánico.

**3. CARACTERÍSTICAS**  
Cuerpo de aluminio con pistones axiales. Contiene en su interior el aceite lubricante PAG. Incorpora en la culata la válvula reguladora N280 y, en algunos modelos, el transmisor de régimen G111.  
📷 IMAGEN: Mueble del compresor con acoplamiento magnético y protección de sobrecarga — Fuente: ZZAudi 100_1991_Climatizador.pdf, pág. 18

**4. VALORES DE TRABAJO**  

| Parámetro | Valor de trabajo | Condiciones de validez |
|---|---|---|
| **Rotación previa manual** | **10 vueltas a mano** | Antes de la primera puesta en marcha tras llenado |
| **Rodaje inicial** | **Mínimo 10 minutos a ralentí** | Tras rellenado o sustitución |
| **Presión en lado de baja (regulada por N280)** | **Approx. 1,2 bar de sobrepresión** | Régimen estabilizado |

**5. ANOMALÍAS FRECUENTES**  
Gripado por falta de lubricante; daños en válvulas por compresión de fluido líquido ("golpe de ariete").

**6. COMPORTAMIENTO EN AVERÍA**  
Igualación de las presiones de alta y baja, ruidos mecánicos o desconexión física de la polea por rotura del elemento de seguridad.

**7. CÓMO COMPROBARLO**  
Girar manualmente 10 vueltas la polea antes del arranque, verificar la señal PWM de la válvula N280 y medir presiones de trabajo con el puente de manómetros.

---

### **NOTA DE ELEMENTO — CONDENSADOR**
UBICACIÓN: Frontal del vehículo, delante del radiador del motor.  
APLICACIÓN: Intercambiador térmico de alta presión.

**1. MISIÓN**  
Transferir el calor del gas refrigerante comprimido al aire ambiente, provocando su condensación al estado líquido.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El gas caliente a alta presión entra por la zona superior. Al fluir por sus tubos y aletas de aluminio, cede su calor a la corriente de aire que lo atraviesa, pasando de fase gaseosa a líquida.

**3. CARACTERÍSTICAS**  
Intercambiador de tubos planos y aletas radiantes de aluminio. Puede llevar adosado o integrado el depósito de líquido deshidratador.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor numérico |
|---|---|
| **Temperatura de entrada / salida del gas** | **Approx. +65 ºC / +55 ºC** |
| **Presión de trabajo en alta** | **Approx. 14 bar de sobrepresión** |

**5. ANOMALÍAS FRECUENTES**  
Suciedad externa (hojas, barro, insectos) o deformación de aletas.

**6. COMPORTAMIENTO EN AVERÍA**  
Elevación excesiva de la alta presión en el circuito y caída acusada del rendimiento frigorífico.

**7. CÓMO COMPROBARLO**  
Inspección visual de aletas (enderezar con peine de láminas si procede) y comprobación del salto térmico entre la entrada y salida.

---

### **NOTA DE ELEMENTO — EVAPORADOR**
UBICACIÓN: Alojado en el interior de la caja de distribución de aire (salpicadero).  
APLICACIÓN: Enfriamiento y deshumidificación del aire del habitáculo.

**1. MISIÓN**  
Enfriar y deshumidificar el aire que entra al habitáculo absorbiendo su calor térmico.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El refrigerante líquido pulverizado entra a baja presión e ebulle a temperaturas bajo cero. Al pasar el aire exterior por sus aletas húmedas, cede su calor al fluido y la humedad ambiental se condensa sobre las aletas exteriormente, evacuándose por el tubo de drenaje.

**3. CARACTERÍSTICAS**  
Serpentín o bloque intercambiador de aluminio con aletas de gran superficie radiante.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor de trabajo |
|---|---|
| **Presión de ebullición interna** | **Approx. 1,2 bar de sobrepresión** |
| **Temperatura de ebullición** | **Approx. -7 ºC** |

**5. ANOMALÍAS FRECUENTES**  
Congelación de aletas por fallo de regulación de la válvula de expansión o sensor de temperatura; proliferación de moho y malos olores.

**6. COMPORTAMIENTO EN AVERÍA**  
Reducción drástica del caudal de aire en los difusores o empañado continuado de cristales.

**7. CÓMO COMPROBARLO**  
Medir la temperatura del aire soplado en los difusores y verificar la lectura del sensor de salida de evaporador G263.

---

### **NOTA DE ELEMENTO — VÁLVULA DE EXPANSIÓN TERMOSTÁTICA**
UBICACIÓN: Entrada del evaporador, delimitando el lado de alta y baja presión.  
APLICACIÓN: Circuitos frigoríficos provistos de depósito de líquido en alta.

**1. MISIÓN**  
Estrangular el flujo de refrigerante líquido de alta presión, atomizarlo e inyectar el caudal exacto al evaporador para que se transforme completamente en gas a la salida.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Modula la sección de paso de una tobera mediante una bola/émbolo accionada por un diafragma térmico. El cabezal térmico lee la temperatura de salida del evaporador y ajusta la apertura para garantizar que todo el refrigerante salga en fase gaseosa sin líquido residual.

**3. CARACTERÍSTICAS**  
Cuerpo de aluminio o latón con paso calibrado y cápsula termostática.  
📷 IMAGEN: Sección interior y componentes de la válvula de expansión de bloque — Fuente: ZZAudi 100_1991_Climatizador.pdf, pág. 21

**4. VALORES DE TRABAJO**  

| Tramo de la válvula | Presión de trabajo | Temperatura |
|---|---|---|
| **Lado de Alta Presión (Entrada)** | **Approx. 14 bar** | **+55 ºC** |
| **Lado de Baja Presión (Salida)** | **Approx. 1,2 bar** | **-7 ºC** |

**5. ANOMALÍAS FRECUENTES**  
Obstrucción por partículas; congelación de la tobera interna por presencia de agua.

**6. COMPORTAMIENTO EN AVERÍA**  
- Si se bloquea cerrada: baja presión cae a vacío o valor muy bajo, sin enfriamiento.  
- Si se bloquea abierta: alta presión y baja presión elevadas, con riesgo de aspirar líquido en el compresor.

**7. CÓMO COMPROBARLO**  
Verificar presiones con el puente de manómetros e inspeccionar si existe condensación/congelación anómala en sus tuberías.

---

### **NOTA DE ELEMENTO — ESTRANGULADOR (TUBO DE EXPANSIÓN / ORIFICE TUBE)**
UBICACIÓN: Entrada del evaporador en circuitos con depósito colector en baja.  
APLICACIÓN: Dosificación de paso fijo en sistemas con acumulador en baja.

**1. MISIÓN**  
Estrangular el paso del refrigerante líquido para provocar la caída de presión, atomizar el fluido y separar el lado de alta y baja presión.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Elemento de calibración pasivo sin piezas móviles. El refrigerante es forzado a pasar a través de un tubo capilar de paso estrecho. Incorpora un tamiz de entrada para retener partículas y un tamiz posterior para pulverizar el líquido hacia el evaporador.

**3. CARACTERÍSTICAS**  
Cuerpo plástico con tubo calibrado interno y mallas filtrantes. Dispone de codificación por colores según el diámetro del taladro.  
📷 IMAGEN: Mallas filtrantes y flecha de sentido de flujo del estrangulador — Fuente: ZZAudi 100_1991_Climatizador.pdf, pág. 20

**4. VALORES DE TRABAJO**  

| Código de color / Tipo | Diámetro del taladro calibrado |
|---|---|
| **Sin tintar** | **1,83 mm** |
| **Tintado en Amarillo** | **1,54 mm** |
| **Tintado en Rojo / Naranja** | **1,42 mm** |

**5. ANOMALÍAS FRECUENTES**  
Obstrucción total o parcial de su malla filtrante por partículas de desgaste del compresor o lodos del aceite.

**6. COMPORTAMIENTO EN AVERÍA**  
Caída rápida de la baja presión por debajo del valor normal y falta de rendimiento frigorífico en la cabina.

**7. CÓMO COMPROBARLO**  
Extraer el estrangulador de la tubería e inspeccionar la limpieza visual de sus mallas filtrantes.

---

### **NOTA DE ELEMENTO — DEPÓSITO COLECTOR Y DEPÓSITO DE LÍQUIDO**
UBICACIÓN:  
- **Depósito Colector:** Lado de baja presión, entre la salida del evaporador y la aspiración del compresor.  
- **Depósito de Líquido:** Lado de alta presión, entre el condensador y la válvula de expansión.  
APLICACIÓN: Almacenamiento, filtrado de impurezas y deshumidificación del fluido refrigerante.

**1. MISIÓN**  
- **Depósito Colector:** Retener la mezcla de gas y líquido procedentes del evaporador para asegurar que el compresor aspire exclusivamente gas seco, filtrando la humedad e impurezas.  
- **Depósito de Líquido:** Almacenar reservas de refrigerante líquido y alimentar de forma continua la válvula de expansión, absorbiendo la humedad residual mediante su bolsa deshidratadora.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- *Depósito Colector:* El gas se aspira por la parte superior mientras el líquido decanta. Un taladro inferior de succión reabsorbe el aceite lubricante acumulado para retornarlo al compresor.  
- *Depósito de Líquido:* El refrigerante líquido atraviesa la bolsa de secante (capaz de absorber hasta approx. 7 g de H2O) y un filtro de partículas.

**3. CARACTERÍSTICAS**  
Recipientes metálicos cilíndricos herméticos conteniendo bolsas de compuesto deshidratante higroscópico.

**4. VALORES DE TRABAJO**  

| Parámetro | Valor prescrito |
|---|---|
| **Capacidad de absorción de agua** | **Approx. 7 g de H2O** |
| **Sustitución obligatoria** | Tras apertura prolongada del circuito o presencia de humedad |

**5. ANOMALÍAS FRECUENTES**  
Saturación del compuesto deshidratante por contacto con el aire ambiente si se retiran los tapones antes de su montaje inmediato.

**6. COMPORTAMIENTO EN AVERÍA**  
Formación de hielo en los elementos de expansión y generación de ácidos corrosivos en el circuito.

**7. CÓMO COMPROBARLO**  
Verificar que los tapones de protección originales permanezcan instalados hasta el momento exacto del montaje en el vehículo.

---

### **NOTA DE ELEMENTO — CONMUTADOR DE PRESIÓN F129 Y TRANSMISORES DE ALTA PRESIÓN G65 / G395**
CÓDIGO: F129 / G65 / G395  
UBICACIÓN: Tubería de alta presión del circuito frigorífico.  
APLICACIÓN: Protección de seguridad y gestión de electroventiladores.

**1. MISIÓN**  
Supervisar los niveles de presión del circuito para proteger el compresor contra sobrepresión o falta de gas, y ordenar el salto de velocidad de los electroventiladores.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
- **Conmutador F129:** Interruptor electromecánico de 3 funciones:  
  1. Salto a velocidad superior del ventilador a approx. 16 bar.  
  2. Desconexión por sobrepresión a approx. 32 bar.  
  3. Desconexión por falta de presión (fugas) a approx. 2 bar.  
- **Transmisor G65:** Sensor electrónico que emite una señal digital cuadrada de ancho de pulso modulado (PWM) proporcional a la presión.  
- **Transmisor G395:** Sensor electrónico con comunicación por bus LIN directamente integrado con la UCE Climatronic J255 (carcasa gris).

**3. CARACTERÍSTICAS**  
- F129 / G65: Carcasa negra roscada sobre válvula de servicio.  
- G395: Carcasa gris con electrónica para bus LIN.

**4. VALORES DE TRABAJO**  

| Dispositivo / Función | Umbral de presión de trabajo |
|---|---|
| **F129 Corte por baja presión** | **Approx. 2 bar de sobrepresión** |
| **F129 Activa ventilador 2ª Vel.** | **Approx. 16 bar de sobrepresión** |
| **F129 Corte por alta presión** | **Approx. 32 bar de sobrepresión** |

**5. ANOMALÍAS FRECUENTES**  
Confusión entre el transmisor G65 (señal PWM) y G395 (señal LIN) por similitud física.

**6. COMPORTAMIENTO EN AVERÍA**  
Desconexión de seguridad del embrague electromagnético N25 o falta de modulación de la electroválvula N280.

**7. CÓMO COMPROBARLO**  
Consultar los valores de presión en el bloque de valores de medición del equipo de diagnosis o analizar la señal con osciloscopio/diagnosis LIN.

---

### **NOTA DE PROCESO — LIMPIEZA INTERNA DEL CIRCUITO MEDIANTE ENJUAGUE CON R134a / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer el procedimiento normalizado de enjuague (flushing) continuo del circuito frigorífico utilizando refrigerante R134a en estado líquido para eliminar aceite degradado, humedad y partículas mecánicas.

**2. FUNDAMENTO**  
El R134a líquido disuelve el aceite usado y arrastra las impurezas mecánicas al circular en sentido inverso al de trabajo normal. El proceso es ecológico y no introduce sustancias extrañas al sistema.

**3. CONDICIONES PREVIAS**  
- Circuito frigorífico completamente vaciado de refrigerante.  
- Compresor desmontado del vehículo.

**4. EQUIPO Y MATERIAL**  
- Estación de servicio con función y programa de enjuague.  
- Dispositivo de enjuague con mirilla y filtro reemplazable.  
- Maletín de adaptadores VAS 6338/1.  
- Manguera de puenteo de gran diámetro VAS 6338/31.

**5. DESARROLLO**  
📷 IMAGEN: Esquema del circuito de enjuague en sentido inverso con estación de servicio y adaptador de puenteo — Fuente: ZZAudi 100_1991_Climatizador.pdf, pág. 61  
1. Vaciar completamente el refrigerante del vehículo con la estación de servicio.  
2. Desmontar el compresor del vehículo.  
3. Desmontar el estrangulador o la válvula de expansión e instalar en su lugar el adaptador de puenteo correspondiente del kit VAS 6338/1 (o una válvula abocardada/taladrada a 6 mm).  
4. Desmontar el depósito colector o depósito de líquido y puentear sus canalizaciones utilizando la manguera VAS 6338/31. *(Nota: si el deshidratador está integrado en el condensador, retirar el cartucho deshidratador interior y cerrar de nuevo la tapa del depósito).*  
5. Conectar la manguera de alta presión (roja) de la estación al tubo de baja presión del compresor (diámetro mayor).  
6. Conectar la manguera del dispositivo de enjuague al tubo de alta presión del compresor (diámetro menor).  
7. Iniciar el programa de enjuague automatizado: el sistema efectúa el vacío, inyecta R134a líquido en sentido inverso, lo hace circular y lo aspira a través del filtro del dispositivo de enjuague.  
8. Observar el fluido por la mirilla de cristal del dispositivo de enjuague hasta que el refrigerante refluya totalmente transparente e incoloro.  
9. Tras finalizar, montar un compresor nuevo (o vaciado con el nivel de aceite corregido), una válvula de expansión / estrangulador nuevo y un depósito deshidratador nuevo.

**6. VALORES DE REFERENCIA**  

| Parámetro / Condición | Valor de referencia |
|---|---|
| **Carga mínima de R134a en estación** | **Mínimo 7 kg de R134a** |
| **Duración del ciclo de enjuague** | **1 a 1,5 horas** (3 operaciones de inyección/succión) |
| **Cambio de filtro del recipiente de enjuague** | Máximo cada **5 a 10 ciclos** de trabajo |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Intentar enjuagar el circuito sin desmontar el estrangulador, la válvula de expansión o el filtro deshidratador: obstruye el flujo de líquido e impide el lavado correcto.

**8. VERIFICACIÓN FINAL**  
Observar a través de la mirilla del recipiente de lavado que el refrigerante retorna limpio, transparente y sin partículas.

**9. SEGURIDAD Y NORMATIVA**  
Recuperación obligatoria del R134a sin emisiones a la atmósfera.

---

### **NOTA DE PROCESO — BARRIDO DEL CIRCUITO CON AIRE COMPRIMIDO Y NITRÓGENO / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer los pasos para soplar y secar componentes individuales del circuito frigorífico mediante aire comprimido seco y nitrógeno.

**2. FUNDAMENTO**  
El soplado con aire comprimido expulsará mecánicamente el aceite viejo y la suciedad gruesa de tuberías o evaporadores independientes; la aplicación posterior de nitrógeno elimina los restos de humedad interior.

**3. CONDICIONES PREVIAS**  
Componentes individuales desmontados o independizados del circuito frigorífico.

**4. EQUIPO Y MATERIAL**  
- Filtro deshidratador para la línea de aire comprimido de taller.  
- Botella de nitrógeno con reductor de presión.  
- Sistema de extracción de gases del taller.  
- Pistola de aire con boquilla de goma o adaptadores V.A.G 1785.

**5. DESARROLLO**  
1. Desconectar los componentes a barrer (evaporador, condensador o tuberías). *(Nunca soplar a través del compresor, válvula de expansión, estrangulador ni depósitos deshidratadores).*  
2. Conectar la manguera de extracción del taller a la salida del componente para recoger los residuos.  
3. Aplicar aire comprimido seco (presión máxima de 15 bar) en **sentido inverso** al de circulación habitual para expulsar el aceite sucio.  
4. A continuación, soplar nitrógeno seco a través del componente para evacuar los restos de aire húmedo.  
5. Sustituir obligatoriamente el depósito deshidratador y el estrangulador/válvula de expansión tras el barrido.

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor límite |
|---|---|
| **Presión máxima de trabajo** | **15 bar** de presión regulada |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Usar aire comprimido sin filtro deshidratador: introduce aceite sintético de compresor de taller y agua en las tuberías del climatizador.

**8. VERIFICACIÓN FINAL**  
Ausencia de humedad y partículas en la salida del componente barrido.

**9. SEGURIDAD Y NORMATIVA**  
Utilizar siempre reductores de presión en la botella de nitrógeno e inhalación cero de residuos.

---

### **NOTA DE PROCESO — LOCALIZACIÓN DE FUGAS CON ADITIVO FLUORESCENTE UV Y DETECTOR ELECTRÓNICO / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Explicar la detección de inestanqueidades en el circuito frigorífico mediante el uso del aditivo fluorescente sensible a luz ultravioleta (VAS 6201) o el detector electrónico V.A.G 1796.

**2. FUNDAMENTO**  
Al producirse una fuga, el refrigerante se evapora pero el aceite lubricante sale al exterior impregnando la zona adyacente. El aditivo fluorescente (PAG con colorante UV) disuelto en el aceite luce con alta intensidad al ser iluminado con una lámpara ultravioleta.

**3. CONDICIONES PREVIAS**  
- Vehículo situado en un área oscura del taller sin luz solar directa.  
- Climatizador puesto en marcha durante al menos 60 minutos tras añadir el aditivo para asegurar su distribución por todo el circuito.

**4. EQUIPO Y MATERIAL**  
- Sistema buscafugas VAS 6201 (bomba manual VAS 6201/1, cartuchos de aditivo VAS 6201/2).  
- Lámpara de luz ultravioleta VAS 6201/4 y gafas amarillas protectoras VAS 6201/6.  
- Detector electrónico de fugas V.A.G 1796.

**5. DESARROLLO**  
1. **Inyección del aditivo UV en circuito vacío:** Conectar la bomba manual VAS 6201/1 en un empalme abierto e inyectar exactamente 2,5 ml de aditivo. Cerrar el circuito, realizar vacío y cargar refrigerante.  
2. **Inyección en circuito lleno:** Conectar la bomba manual a la toma de servicio de baja presión e inyectar 2,5 ml de aditivo a través de la válvula. Limpiar inmediatamente los restos de aditivo del racor con papel para evitar falsas lecturas.  
3. **Distribución:** Hacer funcionar el climatizador con el compresor acoplado durante un mínimo de 60 minutos.  
4. **Inspección UV:** Equiparse con las gafas amarillas de protección UV. Iluminar con la lámpara ultravioleta todas las uniones, racores, el condensador y el drenaje de condensados del evaporador. Las fugas destacarán con un brillo fluorescente verde/amarillo.

**6. VALORES DE REFERENCIA**  

| Parámetro | Valor numérico |
|---|---|
| **Dosis de aditivo UV por vehículo** | **2,5 ml (+/- 0,5 ml)** por circuito |
| **Tiempo mínimo de funcionamiento previo** | **60 minutos** con compresor encendido |
| **Sensibilidad del detector electrónico** | Detecta fugas inferiores a **5 g/año** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- No limpiar la toma de servicio tras la inyección: conducirá a un falso diagnóstico de fuga en la propia válvula.  
- Confundir la fluorescencia del aditivo con ceras de protección o productos de oxidación del aluminio que también brillan con luz UV.

**8. VERIFICACIÓN FINAL**  
Identificación del punto exacto de fuga y sellado posterior mediante sustitución de la junta/componente.

**9. SEGURIDAD Y NORMATIVA**  
No mirar nunca directamente al haz de luz de la lámpara UV.

---

### **NOTA DE PROCESO — COMPROBACIÓN DE PRESIONES Y DIAGNÓSTICO EN CIRCUITOS FRIGORÍFICOS / DIAGNÓSTICO**

**1. OBJETO Y ALCANCE**  
Localizar averías en el circuito frigorífico mediante la lectura de las presiones de alta (HD) y baja (ND) en el puente de manómetros según el tipo de compresor y sistema de expansión.

**2. FUNDAMENTO**  
Las presiones de trabajo varían según el régimen del motor, la carga de gas, la temperatura ambiental y el tipo de regulación del compresor (interna o electrónica externa N280).

**3. CONDICIONES PREVIAS**  
- Motor a temperatura de servicio y régimen estabilizado a 2.000 rpm.  
- Climatizador ajustado en modo de máxima potencia frigorífica ("LO", Auto, ventilador al máximo y recirculación activada).  
- Temperatura ambiente superior a 15 ºC.

**4. EQUIPO Y MATERIAL**  
Estación de servicio o puente de manómetros homologado para R134a.

**5. DESARROLLO Y CUADRO DE DIAGNÓSTICO**  
1. Conectar las mangueras de servicio a las tomas HD y ND del vehículo.  
2. Mantener el motor a 2.000 rpm durante 20 minutos para estabilizar el sistema.  
3. Leer las presiones e interpretar según el cuadro de desviaciones:  
   - **Alta presión NORMAL / Baja presión NORMAL:** Sistema correcto. *(En compresor variable N280: baja presión entre 1,5 bar y 2,2 bar absolutos según la corriente PWM de 0,3 A a 0,85 A).*  
   - **Alta presión BAJA / Baja presión BAJA (o en vacío):** Falta de refrigerante por fuga, o estrangulador/válvula de expansión bloqueada cerrada.  
   - **Alta presión ALTA / Baja presión BAJA:** Obstrucción o estrechamiento físico en la línea de alta o en el evaporador; humedad congelada en el elemento de expansión.  
   - **Alta presión ALTA / Baja presión ALTA:** Exceso de carga de refrigerante, condensador sucio o avería de los electroventiladores.  
   - **Alta y Baja presión CASI IGUALES (con compresor girando):** Compresor defectuoso (placa de válvulas rota) o falla de excitación de la electroválvula reguladora N280.

**6. VALORES DE REFERENCIA**  

| Tipo de sistema / Parámetro | Presión de Baja (ND) | Presión de Alta (HD) |
|---|---|---|
| **Reposos a 20 ºC (Motor parado)** | **4,7 bar (sobrepresión)** | **4,7 bar (sobrepresión)** |
| **Sistema con Estrangulador (a 2.000 rpm)** | **1,4 a 1,6 bar (sobrepresión)** | **Hasta 20 bar (sobrepresión)** |
| **Sistema con Válvula de Expansión (a 2.000 rpm)** | **1,2 a 1,6 bar (sobrepresión)** | **Hasta 20 bar (sobrepresión)** |
| **Sistema con Regulación Externa N280** | **1,5 a 2,5 bar (absolutos)** | **Aumentando hasta 20 bar (o 29 bar máx)** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Interpretar una baja presión elevada como fallo de gas sin verificar la corriente de control de N280 en el bloque de valores de medición del climatizador.

**8. VERIFICACIÓN FINAL**  
Presiones de HD y ND estabilizadas dentro de los márgenes teóricos del diagrama y producción continua de aire frío en difusores.

**9. SEGURIDAD Y NORMATIVA**  
No abrir las válvulas de paso de la estación estando el motor en marcha.

---

### **NOTA DE PROCESO — PROCEDIMIENTO DE SUSTITUCIÓN DE COMPONENTES Y REPOSICIÓN DE ACEITE / PROCEDIMIENTO**

**1. OBJETO Y ALCANCE**  
Establecer los pasos de trabajo para la sustitución de piezas del circuito frigorífico y la restitución exacta de la cantidad de aceite PAG.

**2. FUNDAMENTO**  
Al cambiar un componente dañado, parte del aceite sintético queda retenido en su interior. Es imprescindible medir el aceite extraído o aplicar los volúmenes tabulados para evitar que el compresor funcione sin lubricación o con exceso de aceite.

**3. CONDICIONES PREVIAS**  
Circuito frigorífico totalmente vaciado con la estación de servicio.

**4. EQUIPO Y MATERIAL**  
Probeta graduada de medición, juntas toroidales nuevas y aceite PAG homologado.

**5. DESARROLLO**  
1. Vaciar el refrigerante del circuito.  
2. Desmontar el componente defectuoso.  
3. **Sustitución de componente individual (evaporador, condensador, tubería):** Recoger y medir el aceite extraído del componente sustituido. Añadir al nuevo componente el volumen equivalente de aceite PAG nuevo más la tolerancia prescrita (+20 cm3 para evaporador; +10 cm3 para condensador o tuberías).  
4. **Sustitución de compresor:** Desmontar el tornillo de evacuación de aceite del compresor averiado, girar la polea a mano y vaciar todo su aceite en la probeta. Desmontar el tornillo del compresor nuevo, vaciar su aceite de fábrica y cargar exactamente la misma cantidad que se extrajo del compresor viejo. *(Nota: en el compresor se deben mantener al menos 80 cm3 para garantizar la lubricación en el primer arranque).*  
5. Reemplazar siempre las juntas toroidales por unas nuevas humedecidas en aceite PAG.  
6. Montar el componente, evacuar durante al menos 30 minutos y recargar la masa exacta de R134a.

**6. VALORES DE REFERENCIA**  

| Componente reemplazado | Añadido de aceite PAG nuevo |
|---|---|
| **Evaporador** | Aceite derramado **+ 20 cm3** |
| **Condensador** | Aceite derramado **+ 10 cm3** |
| **Tubería / Manguera** | Aceite derramado **+ 10 cm3** |
| **Mínimo de aceite dentro del compresor** | **Mínimo 80 cm3** |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Montar un compresor de recambio directamente con toda su carga de aceite de fábrica sin ajustar el nivel al volumen real del circuito: provoca sobrecarga de aceite, ruidos hidráulicos y pérdida de potencia de refrigeración.

**8. VERIFICACIÓN FINAL**  
Realizar una prueba de estanqueidad por vacío (presión < 10 mbar mantenida) y comprobar el rendimiento tras 10 minutos de funcionamiento a ralentí.

**9. SEGURIDAD Y NORMATIVA**  
Eliminación del aceite PAG usado como residuo especial contaminante de origen desconocido.

---

COBERTURA: documento «ZZAudi 100_1991_Climatizador.pdf», páginas 1 a 178 de 178. [completo]