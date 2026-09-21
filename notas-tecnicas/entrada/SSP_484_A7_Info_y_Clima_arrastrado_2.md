### **NOTA DE PROCESO — ESTRATEGIA Y FUNCIONAMIENTO DE LOS CINTURONES DE SEGURIDAD INERCIALES / FUNDAMENTO**

**1. OBJETO Y ALCANCE**  
Explicar las estrategias de retención, tensado pirotécnico, limitación de esfuerzo y tensado reversible en los cinturones de seguridad inerciales delanteros en función del equipamiento del vehículo (con o sin Audi presense basic / plus).

**2. FUNDAMENTO**  
En un impacto o maniobra crítica, el sistema reduce la holgura entre el cinturón y el ocupante para minimizar el desplazamiento hacia adelante. A continuación, el limitador de fuerza cede de forma controlada a partir de un umbral de esfuerzo para reducir las cargas mecánicas sobre el tórax. La unidad de control del airbag (J234) coordina la activación de los detonadores y motores eléctricos con el disparo de los airbags.

**3. CONDICIONES PREVIAS**  
No aplica.

**4. EQUIPO Y MATERIAL**  
No aplica.

**5. DESARROLLO**  
📷 IMAGEN: Componentes del carrete retractor y detonador del pretensionador de cinta metálica — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 14  
- **Vehículos sin Audi presense basic / plus:**  
  - *Pretensado:* Activado pirotécnicamente (N153/N154) mediante la deformación de un bucle de cinta metálica que hace girar el eje del retractor.  
  - *Limitación de esfuerzo:* Limitador de dos escalones basado en dos barras de torsión acopladas por engranajes. Inicialmente trabajan ambas barras a la vez (nivel de fuerza alto). Si J234 lo determina por la gravedad del impacto, se activa un detonador que desplaza un elemento deslizante para desacoplar la segunda barra de torsión, dejando actuar solo una barra (nivel de fuerza bajo).  
- **Vehículos con Audi presense basic / plus:**  
  - *Tensores reversibles:* Controlados por las UCEs J854 (izquierda) y J855 (derecha) mediante motores eléctricos con tres niveles de fuerza (baja, media, alta) comunicados por bus Extended CAN y J533.  
  - *Pretensado pirotécnico:* Mecanismo de cremallera y piñón con pistón impulsado por gas que acciona un embrague de rueda libre por rodillos.

**6. VALORES DE REFERENCIA**  

| Función / Componente | Parámetro de trabajo | Condiciones de activación |
|---|---|---|
| **Niveles de fuerza eléctrica (J854/J855)** | **Nivel 1: Fuerza baja** | Reducción de la holgura del cinturón |
| **Niveles de fuerza eléctrica (J854/J855)** | **Nivel 2: Fuerza media** | Tensado parcial |
| **Niveles de fuerza eléctrica (J854/J855)** | **Nivel 3: Fuerza alta** | Tensado total por colisión frontal leve detectada por J234 |
| **Limitador de fuerza pirotécnico** | **No se activan G551 y G552** | En caso de impacto lateral o trasero |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**  
- Esperar la activación pirotécnica de los limitadores de fuerza G551/G552 en colisiones laterales o traseras: la UCE J234 no los activa en este tipo de impactos.

**8. VERIFICACIÓN FINAL**  
No aplica.

**9. SEGURIDAD Y NORMATIVA**  
Componentes pirotécnicos sometidos a reglamentación de explosivos y seguridad pasiva del automóvil.

---

### **NOTA DE ELEMENTO — DETONADORES DEL PRETENSIONADOR DE CINTURÓN DELANTERO N153 Y N154 (TIPO BUCLE DE CINTA METÁLICA)**
CÓDIGO: N153 (Lado conductor) / N154 (Lado acompañante)  
UBICACIÓN: Montados en el carrete retractor del cinturón de seguridad inercial delantero.  
APLICACIÓN: Audi A7 sin equipamiento Audi presense basic o plus.

**1. MISIÓN**  
Eliminar de forma rápida la holgura del cinturón de seguridad en caso de colisión, haciendo girar el eje del retractor mediante la expansión de una banda metálica impulsada por presión pirotécnica.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Una banda metálica está enrollada alrededor del eje del retractor, con sus dos extremos fijos a dicho eje y su extremo cerrado formando un bucle alrededor del detonador N153/N154. Al recibir la señal de la UCE de airbag J234, el detonador se enciende y la acumulación de gas expande el bucle de la banda metálica. Este movimiento tira del eje del retractor haciéndolo girar para recoger el cinturón. La superficie entre las carcasas dispone de una capa de silicona que la banda arrastra al moverse para estanqueizar la cámara y evitar pérdidas de presión.

**3. CARACTERÍSTICAS**  
Conjunto formado por conector eléctrico, inflamador pirotécnico (Igniter 1), banda metálica flexible enrollada en bucle, retractor inercial, carcasa y tapa con revestimiento interno de silicona.  
📷 IMAGEN: Detalle del bucle de la banda metálica y la capa de silicona de estanqueidad — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 14

**4. VALORES DE TRABAJO**  

| Parámetro | Condición de funcionamiento |
|---|---|
| **Cese de pretensado pirotécnico** | Cuando la contrafuerza del cinturón supera la fuerza ejercida por el pretensionador |

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
No documentado en fuentes.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — DETONADORES DEL LIMITADOR ADAPTATIVO DE FUERZA DEL CINTURÓN G551 Y G552**
CÓDIGO: G551 (Lado conductor) / G552 (Lado acompañante)  
UBICACIÓN: Integrados en el mecanismo retractor del cinturón de seguridad delantero.  
APLICACIÓN: Audi A7 sin equipamiento Audi presense basic o plus.

**1. MISIÓN**  
Reducir el nivel de fuerza retenedora que ejerce el cinturón sobre el tórax del ocupante durante una colisión, desacoplando mecánicamente una de las dos barras de torsión del retractor.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
El eje del retractor está diseñado como una barra de torsión conectada a una segunda barra de torsión (torsión shaft 2) mediante un tren de engranajes (ruedas 1 y 2). En la primera fase trabajan ambas barras a la vez (nivel de fuerza alto). Cuando la UCE J234 activa el detonador G551/G552 según la gravedad del impacto y la posición del asiento, la presión de gas desplaza un elemento deslizante (sliding element) que desacopla la rueda dentada de la segunda barra de torsión. A partir de ese momento, solo la barra principal opone resistencia (nivel de fuerza bajo).

**3. CARACTERÍSTICAS**  
Dispositivo pirotécnico de dos etapas con ignitor, elemento deslizante de desacoplamiento, rueda 1, rueda 2 y dos barras de torsión engranadas.  
📷 IMAGEN: Elemento deslizante desacoplando las ruedas 1 y 2 de la segunda barra de torsión — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 15

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Estado del sistema |
|---|---|
| **Fuerza alta (2 barras conectadas)** | Ruedas 1 y 2 engranadas; ambas barras de torsión giran |
| **Fuerza baja (1 barra conectada)** | Elemento deslizante accionado por gas pirotécnico; desacopla la barra 2 |
| **Condición de no activación** | No se activan en colisiones laterales ni traseras |

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
No documentado en fuentes.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — UNIDADES DE CONTROL DEL TENSOR REVERSIBLE DE CINTURÓN J854 Y J855**
CÓDIGO: J854 (Lado izquierdo) / J855 (Lado derecho)  
UBICACIÓN: Montadas junto a los retractores de los cinturones de seguridad delanteros.  
APLICACIÓN: Audi A7 con equipamiento Audi presense basic o Audi presense plus.

**1. MISIÓN**  
Accionar por motor eléctrico el tensado preventivo o de seguridad del cinturón de seguridad en tres niveles de fuerza previa señal del bus de datos.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
Las unidades J854 y J855 reciben información a través del bus Extended CAN y de la interfaz de diagnosis J533. Al detectarse una situación crítica o colisión leve, alimentan un motor eléctrico interno. El motor mueve un plato de arrastre mediante un engranaje. Dos ganchos basculantes (hooks) se despliegan y conectan el plato de arrastre con el eje del retractor, enrollando el cinturón. Cuando el motor se detiene o invierte ligeramente el sentido de giro, los ganchos se recogen y liberan el eje del retractor.

**3. CARACTERÍSTICAS**  
Módulo electrónico de control con motor eléctrico integrado, mecanismo de reducción por engranajes, plato de arrastre y dos ganchos mecánicos de acoplamiento.  
📷 IMAGEN: Motor eléctrico, plato de arrastre y ganchos de acoplamiento al eje del retractor — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 16

**4. VALORES DE TRABAJO**  

| Nivel de fuerza asignado | Función del motor eléctrico |
|---|---|
| **Nivel 1: Fuerza baja** | Reducción de la holgura del cinturón (belt slack) |
| **Nivel 2: Fuerza media** | Tensado parcial |
| **Nivel 3: Fuerza alta** | Tensado total ante colisiones leves detectadas por J234 |

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
No documentado en fuentes.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

### **NOTA DE ELEMENTO — DETONADORES DEL PRETENSIONADOR PIROTÉCNICO DE CREMALLERA Y PIÑÓN N153 Y N154**
CÓDIGO: N153 (Lado conductor) / N154 (Lado acompañante)  
UBICACIÓN: En el conjunto retractor del cinturón de seguridad delantero.  
APLICACIÓN: Audi A7 equipado con Audi presense basic o Audi presense plus.

**1. MISIÓN**  
Efectuar un tensado pirotécnico ultrarrápido e irreversible del cinturón mediante un mecanismo de cremallera, piñón y rueda libre de rodillos en colisiones graves.

**2. PRINCIPIO DE FUNCIONAMIENTO**  
La señal de encendido de la UCE J234 detona la carga N153 o N154. La presión de gas empuja hacia arriba un pistón solidario a una cremallera. La cremallera hace girar el piñón y los engranajes 1 y 2. La rueda 2 está unida al anillo exterior de un embrague de rueda libre. Al girar este anillo, desplaza hacia el interior unos rodillos que quedan aprisionados entre el anillo exterior y el eje del retractor, bloqueándolos solidariamente e imprimiendo un rápido movimiento de recogida al cinturón.

**3. CARACTERÍSTICAS**  
Mecanismo pirotécnico de cremallera formado por conector eléctrico, ignitor 1, pistón con cremallera, piñón, rueda dentada 1, rueda dentada 2, anillo de rueda libre con rodillos, elemento amortiguador y eje retractor.  
📷 IMAGEN: Despiece de la cremallera, piñón, rueda libre y posición de enclave de los rodillos — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 17

**4. VALORES DE TRABAJO**  

| Parámetro / Condición | Comportamiento |
|---|---|
| **Cese de tensado** | Se detiene cuando la contrafuerza del cinturón supera la fuerza del pirotécnico |
| **Enclave de rueda libre** | Los rodillos se desplazan al interior aprisionando el anillo exterior con el eje retractor |

**5. ANOMALÍAS FRECUENTES**  
No documentado en fuentes.

**6. COMPORTAMIENTO EN AVERÍA**  
No documentado en fuentes.

**7. CÓMO COMPROBARLO**  
No documentado en fuentes.

---

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 2.pdf», páginas 14 a 17 de 17. [completo]