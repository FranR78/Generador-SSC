### NOTA DE PROCESO — TIPOS DE EQUIPOS DE CLIMATIZACIÓN EN SEAT IBIZA/CÓRDOBA '99 / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica las características, posibilidades térmicas y modos de accionamiento de los cuatro equipos de climatización disponibles en la gama SEAT Ibiza/Córdoba '99 (Ventilación-Calefacción, Aire Acondicionado Manual, Calefacción Motorizada y Autoclima).

**2. FUNDAMENTO**
Comparativa de los sistemas de regulación térmica del habitáculo, diferenciando la selección puramente mecánica mediante cables de la regulación electrónica con motores eléctricos, display central y autodiagnóstico.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Ventilación-Calefacción:** La distribución del aire y la temperatura se seleccionan mecánicamente mediante dos mandos giratorios. La recirculación de aire y la turbina son impulsadas por motores eléctricos. Con este equipo solo es posible elevar la temperatura del aire de entrada haciéndolo pasar a través del radiador de calefacción.
* **Aire Acondicionado Manual:** Mismo sistema de accionamiento mecánico de distribución, temperatura, recirculación y turbina que en la ventilación-calefacción, añadiendo un pulsador para conectar el circuito frigorífico. Permite aumentar o disminuir la temperatura canalizando el aire a través del evaporador y del radiador de calefacción.
* **Calefacción Motorizada:** Mismas posibilidades térmicas que la ventilación-calefacción, pero la turbina, la trampilla de temperatura y la recirculación se accionan mediante motores eléctricos comandados por una unidad de control electrónica. La distribución de aire se selecciona mecánicamente por mando giratorio. Un display de grandes dimensiones en la consola central informa de los parámetros.
* **Autoclima:** Equipo de aire acondicionado que regula y mantiene electrónicamente la temperatura solicitada en el habitáculo de forma automática, independientemente de la exterior. La unidad de control regula el caudal, la temperatura, la recirculación y la velocidad de la turbina. La distribución de aire se realiza mecánicamente mediante mando giratorio y la información se muestra en el display.

**6. VALORES DE REFERENCIA**
| Equipo de Climatización | Control de Temperatura | Accionamiento Trampilla Temp. | Capacidad Frigorífica |
| :--- | :--- | :--- | :--- |
| Ventilación-Calefacción | Mecánico (mando giratorio) | Mecánico (cable Bowden) | Sin capacidad frigorífica (solo eleva temp.) |
| Aire Acondicionado Manual | Mecánico (mando giratorio) | Mecánico (cable Bowden) | Con refrigeración por pulsador manual |
| Calefacción Motorizada | Electrónico por pulsadores | Motor eléctrico por UCE | Sin capacidad frigorífica (solo eleva temp.) |
| Autoclima | Electrónico regulado por UCE | Motor eléctrico por UCE | Refrigeración y regulación automática |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Confundir la Calefacción Motorizada con el Autoclima; la Calefacción Motorizada equipa control electrónico y display pero carece de circuito frigorífico y compresor.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — ARQUITECTURA DE LA UNIDAD CLIMÁTICA Y DISTRIBUCIÓN DE AIRE / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Describe la configuración constructiva, los componentes internos y el sistema de mando de las trampillas en la unidad climática de los vehículos SEAT Ibiza/Córdoba '99.

**2. FUNDAMENTO**
La unidad climática presenta una estructura modular idéntica para todos los equipamientos del vehículo, variando únicamente el tipo de accionamiento de la trampilla de mezcla y los sensores/reguladores integrados.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Estructura común:** La caja climática alberga el evaporador, el radiador de calefacción, la turbina y el conjunto de trampillas.
* **Diferenciación según equipo:**
  - Accionamiento de la trampilla de temperatura: Mecánico por cable en ventilación/calefacción y A/A manual; mediante motor eléctrico en Calefacción Motorizada y Autoclima.
  - Regulación de turbina: Escala de resistencias integradas en la turbina para equipos manuales; regulador electrónico J126 para Autoclima y Calefacción Motorizada.
  - Sensores: Incorporación de dos transmisores de temperatura del aire de entrada (G191 y G192) en la versión Autoclima.
* **Accionamiento de trampillas:**
  - Trampilla de recirculación: Movida en todos los casos por el motor eléctrico V113.
  - Trampillas de distribución de aire: Accionadas mediante cables Bowden desde el mando giratorio central hacia los difusores superior, central e inferior.

📷 IMAGEN: Despiece de componentes de la unidad climática del Ibiza/Córdoba '99 — Fuente: cd.pdf, pág. 6

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Intentar adaptar un regulador electrónico J126 en un equipo con conmutador de resistencias sin modificar la instalación eléctrica de la turbina.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — ARQUITECTURA Y COMPONENTES DEL CIRCUITO FRIGORÍFICO / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica los elementos constitutivos, la ubicación de componentes y las especificaciones de carga del circuito frigorífico cerrado utilizado en los sistemas de A/A Manual y Autoclima.

**2. FUNDAMENTO**
Ciclo frigorífico por compresión de vapor de R134a. El fluido absorbe energía térmica en el evaporador y la cede en el condensador impulsado por el compresor autorregulado.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Condensador:** Situado por delante del radiador de líquido refrigerante del motor.
* **Filtro deshidratador:** Retiene la humedad, filtra residuos de abrasión y evita la formación de burbujas de gas.
* **Válvula de expansión:** Controla la caída de presión y el caudal de agente frigorífico hacia el evaporador.
* **Evaporador:** Ubicado dentro de la unidad climática; realiza el intercambio térmico entre el refrigerante y el aire del habitáculo.
* **Compresor:** De 7 cilindros autorregulado, accionado por correa Poly-V mediante acoplamiento magnético N25.
* **Silenciador:** Montado en la tubería de baja presión cerca del compresor; amortigua el ruido de las ondas de presión entre la válvula de expansión y el compresor.
* **Sensor de presión:** Conmutador F129 (motores diésel) o transmisor electrónico G65 (motores gasolina) situado en la línea de alta junto a la válvula de expansión.

📷 IMAGEN: Esquema del circuito frigorífico con ubicación de componentes y silenciador — Fuente: cd.pdf, pág. 7

**6. VALORES DE REFERENCIA**
| Parámetro | Valor Numérico y Condición de Validez |
| :--- | :--- |
| Carga de fluido refrigerante | 750 ± 50 gramos de R134a |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Desmontar la tubería de baja presión ignorando la presencia del silenciador de masa vibratoria.

**8. VERIFICACIÓN FINAL**
No aplica.

**9. SEGURIDAD Y NORMATIVA**
Manejo de gas fluorado R134a conforme a las normas de recuperación en estación de carga homologada.

---

### NOTA DE ELEMENTO — COMPRESOR AUTORREGULADO DE 7 CILINDROS
CÓDIGO: N25 (Acoplamiento magnético)
UBICACIÓN: Vano motor, accionado por la correa Poly-V del motor térmico.
APLICACIÓN: SEAT Ibiza/Córdoba '99 con A/A Manual o Autoclima.

**1. MISIÓN**
Generar la presión y la circulación necesarias del gas refrigerante R134a a través del circuito frigorífico.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Compresor volumétrico de plato oscilante de 7 cilindros autorregulado. Modifica internamente la inclinación del plato y la carrera de los pistones según la presión de aspiración, adaptando el caudal sin necesidad de embragar y desembragar continuamente.

**3. CARACTERÍSTICAS**
Compresor de 7 cilindros con regulación interna de cilindrada. Arrastrado por correa Poly-V mediante acoplamiento magnético N25 e integra una válvula de seguridad de sobrepresión.

**4. VALORES DE TRABAJO**
* Tarado de la válvula de seguridad mecánica: 44 bares.
* Carga de fluido frigorífico del circuito: 750 ± 50 gramos de R134a.

**5. ANOMALÍAS FRECUENTES**
Fugas de gas por el retén del eje, fallo de aislamiento en la bobina N25 o disparo de la válvula de seguridad por sobrepresión a 44 bares.

**6. COMPORTAMIENTO EN AVERÍA**
Ausencia total de producción de aire frío en el habitáculo.

**7. CÓMO COMPROBARLO**
Verificar la presencia de 12 V en la bobina del acoplamiento magnético N25 y comprobar la presión del circuito con el puente de manómetros.

📷 IMAGEN: Vista exterior del compresor autorregulado de 7 cilindros — Fuente: cd.pdf, pág. 7

---

### NOTA DE ELEMENTO — SILENCIADOR DE BAJA PRESIÓN
UBICACIÓN: Intercalado en la tubería del circuito de baja presión, cercano a la boca de aspiración del compresor.
APLICACIÓN: Circuitos frigoríficos de SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Amortiguar el ruido y las pulsaciones acústicas producidas por las ondas de presión en la línea de gas entre la válvula de expansión y el compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Cámara de expansión de volumen calculado que altera la frecuencia de las pulsaciones del gas a la salida del evaporador para evitar su transmisión al salpicadero.

**3. CARACTERÍSTICAS**
Cilindro receptor metálico soldado directamente a la tubería de aluminio de baja presión.

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Fugas de refrigerante por porros o fisuras en las soldaduras de unión con el tubo.

**6. COMPORTAMIENTO EN AVERÍA**
Zumbido o vibración acústica molesta en el habitáculo al conectar el A/A o pérdida de refrigerante.

**7. CÓMO COMPROBARLO**
Inspección visual y comprobación de estanqueidad mediante detector electrónico de fugas.

---

### NOTA DE PROCESO — ESTRUCTURA DESCENTRALIZADA DE CONTROL DE CLIMA / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica la arquitectura electrónica distribuida y las funciones que asumen las distintas unidades de control que participan en los sistemas de Calefacción Motorizada y Autoclima.

**2. FUNDAMENTO**
Estructura descentralizada donde las tareas de regulación térmica, gestión de potencia y comunicación con el usuario se reparten entre varias centralitas conectadas por líneas dedicadas y buses de datos.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Unidad del equipo de mando electrónico J255:** Asume la regulación de temperatura (modos automático, semiautomático y manual), la iluminación del mando de distribución de aire y el autodiagnóstico del sistema.
* **Unidad del aire acondicionado J293:** Controla la conexión del acoplamiento magnético N25 y gestiona las velocidades de los electroventiladores V7/V35.
* **Radiocasete R:** Actúa como pasarela de comunicación entre la botonera/display E87 y la UCE J255, y controla la luminosidad de la pantalla.
* **Codificación de la UCE J255:** La unidad física J255 es común para Calefacción Motorizada y Autoclima. Si el conector del mazo de cables tiene un puente de masa en el contacto 21, la UCE se codifica automáticamente como Calefacción Motorizada; si no tiene puente, trabaja como Autoclima.

📷 IMAGEN: Cuadro sinóptico de sensores, unidades de control y actuadores — Fuente: cd.pdf, págs. 10-11

**6. VALORES DE REFERENCIA**
| Elemento / Configuración | Conexión en Contacto 21 de J255 | Programa Ejecutado |
| :--- | :--- | :--- |
| Mazo de Calefacción Motorizada | Con puente a masa en contacto 21 | Programa de Calefacción Motorizada |
| Mazo de Autoclima | Sin puente (contacto 21 libre) | Programa de Autoclima |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Sustituir la UCE J255 y no verificar la presencia del puente de masa en el contacto 21 del conector al diagnosticar un vehículo con Calefacción Motorizada.

**8. VERIFICACIÓN FINAL**
Comprobar con la función 01 de autodiagnóstico el tipo de equipo identificado por la centralita (Autoclima o Calefacción Motorizada).

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — TRANSMISOR DE TEMPERATURA INTERIOR G56
CÓDIGO: G56
UBICACIÓN: Detrás del tablero de instrumentos, junto a la columna de dirección.
APLICACIÓN: Sistema Autoclima en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Captar la temperatura real del aire del habitáculo para permitir a la unidad del Autoclima calcular la posición de la trampilla de temperatura.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termistor de coeficiente de temperatura negativo (NTC). Al aumentar la temperatura, disminuye su resistencia eléctrica. Para evitar lecturas erróneas por el calor del tablero, el motor V42 aspira aire continuo del habitáculo a través de la sonda.

**3. CARACTERÍSTICAS**
Sensor NTC. Campo de medición de temperatura comprendido entre -40 ºC y +85 ºC.

**4. VALORES DE TRABAJO**
* Rango de medición de la NTC: -40 ºC a +85 ºC.
* Valor sustitutivo fijo en avería: 22 ºC.

**5. ANOMALÍAS FRECUENTES**
Fallo de la resistencia NTC o atascamiento del motor de la turbina V42 por suciedad.

**6. COMPORTAMIENTO EN AVERÍA**
La UCE toma como referencia un valor fijo de 22 ºC. Si se solicita una temperatura diferente a 22 ºC, el sistema enfría o calienta sin límite. Al conectar el Autoclima, parpadean todos los dígitos del display.

**7. CÓMO COMPROBARLO**
Consultar la lectura en el grupo de valores de medición 006 (campo 4) con la función 08 del autodiagnóstico o medir la resistencia de la NTC con un óhmetro.

📷 IMAGEN: Ubicación del transmisor G56 con la turbina de aire V42 — Fuente: cd.pdf, pág. 12

---

### NOTA DE ELEMENTO — TRANSMISORES DE TEMPERATURA DEL AIRE DE ENTRADA G191 Y G192
CÓDIGO: G191 (difusor central) / G192 (difusor reposapiés)
UBICACIÓN: G191 montado en el difusor central; G192 montado en el difusor de la zona de los pies.
APLICACIÓN: Sistema Autoclima en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Medir la temperatura del aire tratado impulsado hacia la zona superior e inferior del habitáculo para regular la mezcla de aire.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Resistencias térmicas NTC. La unidad del Autoclima procesa y utiliza el valor medio de las lecturas registradas por ambos transmisores para controlar la trampilla de temperatura.

**3. CARACTERÍSTICAS**
Dos sondas térmicas NTC con rango de medición entre -40 ºC y +85 ºC.

**4. VALORES DE TRABAJO**
* Rango de medición: -40 ºC a +85 ºC.
* Valor procesado por la UCE: Promedio aritmético de las señales de G191 y G192.

**5. ANOMALÍAS FRECUENTES**
Corte eléctrico, cortocircuito a masa en el cableado o deriva de la resistencia NTC.

**6. COMPORTAMIENTO EN AVERÍA**
Ante la pérdida de uno de los transmisores, la UCE anula la regulación automática manteniendo fijos los parámetros del momento de la avería. Al conectar el Autoclima parpadean todos los dígitos del display.

**7. CÓMO COMPROBARLO**
Consultar el grupo de valores de medición 006 (campo 2 para G191 y campo 3 para G192) mediante la función 08 de autodiagnóstico.

📷 IMAGEN: Ubicación de los transmisores G191 y G192 en la unidad climática — Fuente: cd.pdf, pág. 13

---

### NOTA DE ELEMENTO — TRANSMISOR DE TEMPERATURA EXTERIOR G17
CÓDIGO: G17
UBICACIÓN: En el interior de la carcasa del retrovisor exterior derecho (lado del acompañante).
APLICACIÓN: Sistema Autoclima en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Medir la temperatura del aire atmosférico exterior para mostrarla en el display, ajustar la mezcla, regular la turbina y autorizar la marcha del compresor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Resistencia NTC. La unidad del Radiocasete R lee la variación de resistencia, muestra el dato en pantalla y transmite la señal a la unidad del Autoclima.

**3. CARACTERÍSTICAS**
Sensor NTC encapsulado dentro del espejo retrovisor del acompañante.

**4. VALORES DE TRABAJO**
* Valor sustitutivo adoptado por la UCE en avería: 20 ºC fijo.

**5. ANOMALÍAS FRECUENTES**
Corte de cables por plegado de la puerta o deterioro de la NTC por humedad.

**6. COMPORTAMIENTO EN AVERÍA**
El display muestra tres rayas (---) en la indicación exterior. El Autoclima adopta 20 ºC fijos y cancela la señal de marcha del compresor (el A/A no enfría). Parpadean todos los dígitos del display al conectar.

**7. CÓMO COMPROBARLO**
Consultar el grupo de valores de medición 006 (campo 1) mediante la función 08 de autodiagnóstico o medir la resistencia de la NTC en el conector del espejo.

📷 IMAGEN: Ubicación de la NTC del transmisor G17 en el retrovisor derecho — Fuente: cd.pdf, pág. 14

---

### NOTA DE ELEMENTO — INTERRUPTOR TÉRMICO F38
CÓDIGO: F38
UBICACIÓN: En el interior de la caja de aguas (vano motor).
APLICACIÓN: Sistema Autoclima en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Cortar la señal de excitación del compresor cuando la temperatura ambiente es inferior a 5 ºC para evitar que el agua se congele sobre las aletas del evaporador.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Interruptor térmico bimetálico normalmente cerrado. Al descender la temperatura por debajo de 5 ºC, los contactos se abren, interrumpiendo el paso de la señal de 12 V enviada desde la UCE de clima hacia la unidad J293.

**3. CARACTERÍSTICAS**
Termocontacto bimetálico de 2 vías montado en serie sobre la línea de mando del compresor.

**4. VALORES DE TRABAJO**
* Umbral de apertura por baja temperatura: Menos de 5 ºC (abierto < 5 ºC; cerrado >= 5 ºC).
* Tensión de trabajo conmutada: 12 V.

**5. ANOMALÍAS FRECUENTES**
Inmovilización o agarrotamiento de los contactos en posición de cierre permanente.

**6. COMPORTAMIENTO EN AVERÍA**
Si queda atascado en cerrado, el compresor funciona a temperaturas inferiores a 5 ºC, provocando la congelación del evaporador y el bloqueo del paso de aire.

**7. CÓMO COMPROBARLO**
Medir continuidad entre sus bornes con un polímetro: debe indicar 0 ohmios por encima de 5 ºC y resistencia infinita al enfriarlo por debajo de 5 ºC.

📷 IMAGEN: Ubicación del interruptor térmico F38 en la caja de aguas — Fuente: cd.pdf, pág. 14

---

### NOTA DE ELEMENTO — POTENCIÓMETRO DE LA DISTRIBUCIÓN DE AIRE
UBICACIÓN: En el interior de la unidad del Autoclima o Calefacción Motorizada, acoplado al mando giratorio de distribución.
APLICACIÓN: Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Informar a la UCE de la posición angular seleccionada en el mando manual de distribución para detectar cuándo se orienta el aire hacia el parabrisas.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Potenciómetro rotativo de pista resistiva. Modifica el valor de tensión devuelto a la UCE según la posición de la rueda de accionamiento de la distribución.

**3. CARACTERÍSTICAS**
Potenciómetro angular integrado en el mecanismo mecánico de ruedas de la caja de mandos.

**4. VALORES DE TRABAJO**
* Señal de posición en autodiagnóstico: 0% a 100%.

**5. ANOMALÍAS FRECUENTES**
Desgaste de las pistas resistivas o suciedad interna.

**6. COMPORTAMIENTO EN AVERÍA**
Al seleccionar la salida parabrisas, la UCE no aumenta la velocidad de la turbina ni conecta el compresor (Autoclima), y sitúa la recirculación en entrada exterior. Parpadean los dígitos del display al encender.

**7. CÓMO COMPROBARLO**
Consultar la lectura del potenciómetro en el grupo de valores de medición 005 (campo 4) en porcentaje (0-100%).

📷 IMAGEN: Potenciómetro de distribución y ruedas de accionamiento — Fuente: cd.pdf, pág. 15

---

### NOTA DE ELEMENTO — POTENCIÓMETRO DEL MOTOR DE LA TRAMPILLA DE TEMPERATURA G92
CÓDIGO: G92
UBICACIÓN: Integrado en el interior del motor V68, en la parte inferior de la unidad climática.
APLICACIÓN: Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Transmitir a la UCE la posición angular real de la trampilla de mezcla e identificar sus topes mecánicos.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Potenciómetro de cursor accionado por la reductora del motor V68. Ofrece una variación de resistencia proporcional al ángulo de apertura de la trampilla.

**3. CARACTERÍSTICAS**
Potenciómetro con carrera angular de 51º y un rango de resistencia comprendido entre 0 y 4,7 kiloohmios.

**4. VALORES DE TRABAJO**
* Carrera angular: 51º.
* Rango de resistencia: 0 a 4,7 kΩ.
* Tensión en topes (Grupo 002): Tope inferior ~0,76 V; Tope superior ~4,21 V.

**5. ANOMALÍAS FRECUENTES**
Pérdida de contacto en la pista resistiva o cortocircuito entre bornes.

**6. COMPORTAMIENTO EN AVERÍA**
La UCE deja la trampilla en la posición que se encontraba y reduce la velocidad de la turbina para prevenir entradas extremas de aire frío o caliente. Parpadean los dígitos del display.

**7. CÓMO COMPROBARLO**
Consultar el grupo de valores de medición 002 (campo 1 real, campo 2 calculada, campo 3 tope superior, campo 4 tope inferior) o realizar el Ajuste Básico (función 04 en grupo 002).

📷 IMAGEN: Detalle interno del motor V68 con el potenciómetro G92 — Fuente: cd.pdf, pág. 15

---

### NOTA DE ELEMENTO — CONMUTADOR DE PRESIÓN PARA AIRE ACONDICIONADO F129
CÓDIGO: F129
UBICACIÓN: Tubería del circuito de alta presión, junto a la válvula de expansión.
APLICACIÓN: Autoclima y A/A Manual en motorizaciones DIÉSEL del SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Supervisar la presión del refrigerante para cortar la marcha del compresor por alta/baja presión y solicitar la 2.ª velocidad de los electroventiladores.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Presostato cuadruple con dos contactos independientes:
- Interruptor de máxima/mínima (normalmente cerrado): se abre si la presión es inferior a 2 bares o superior a 32 bares.
- Interruptor de presión media (normalmente abierto): se cierra cuando la presión alcanza 16 bares.

**3. CARACTERÍSTICAS**
Presostato hidráulico-eléctrico con conector de 4 vías.

**4. VALORES DE TRABAJO**
* Umbral de corte por baja presión (apertura): < 2 bares.
* Umbral de corte por alta presión (apertura): > 32 bares.
* Umbral de activación de 2.ª velocidad de ventiladores (cierre): ~16 bares.

**5. ANOMALÍAS FRECUENTES**
Fugas de gas por su rosca o fogueado de los contactos internos.

**6. COMPORTAMIENTO EN AVERÍA**
El compresor no acopla si el contacto de máx/mín está abierto, o los electroventiladores no conmutan a la 2.ª velocidad al llegar a 16 bares.

**7. CÓMO COMPROBARLO**
Consultar la lectura en el grupo de valores de medición 001 (campo 2: 0 fuera de rango, 1 rango de trabajo) o medir continuidad entre bornes.

📷 IMAGEN: Conmutador de presión F129 junto a la válvula de expansión — Fuente: cd.pdf, pág. 16

---

### NOTA DE ELEMENTO — TRANSMISOR DE PRESIÓN ELECTRÓNICO G65
CÓDIGO: G65
UBICACIÓN: Tubería de alta presión, junto a la válvula de expansión.
APLICACIÓN: Autoclima y A/A Manual en motorizaciones GASOLINA del SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Medir la presión del circuito frigorífico e informar mediante señal digital a la unidad de control del motor y a la unidad J293.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Transmisor piezoeléctrico. Transforma la presión hidráulica del gas en una señal de onda cuadrada modulada en anchura de pulso (PWM) proporcional a los bares existentes.

**3. CARACTERÍSTICAS**
Sensor electrónico de 3 vías (alimentación 12 V, masa y salida de señal PWM).

**4. VALORES DE TRABAJO**
* Umbral de señal para 2.ª velocidad de ventiladores: 16 bares.

**5. ANOMALÍAS FRECUENTES**
Avería en la electrónica interna o corte en el cable de señal PWM.

**6. COMPORTAMIENTO EN AVERÍA**
La unidad J293 desactiva el compresor de A/A. La avería de G65 solo se registra en la memoria de la Unidad de Control del Motor.

**7. CÓMO COMPROBARLO**
Consultar la memoria de averías de la Unidad del Motor y medir con osciloscopio la señal de salida PWM en el borne de señal del transmisor.

📷 IMAGEN: Instalación del transmisor de presión G65 — Fuente: cd.pdf, pág. 16

---

### NOTA DE PROCESO — ESTRATEGIAS DE INTERVENCIÓN DE LA UNIDAD DE CONTROL DEL MOTOR EN EL CLIMATIZADOR / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica los criterios de inhibición temporal o corte del compresor gestionados por la UCE del motor para garantizar las prestaciones y la seguridad del motor térmico.

**2. FUNDAMENTO**
La UCE del motor envía una señal de masa (negativo) a la unidad del aire acondicionado J293 para desactivar el acoplamiento N25 cuando el motor requiere entregar su máxima potencia o restablecer la estabilidad del ralentí.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Condiciones de inhibición del compresor por la UCE de motor (envío de señal de masa a J293):**
  1. Ausencia de señal de revoluciones (motor parado o calado).
  2. Durante los primeros 10 segundos transcurridos tras el arranque del motor térmico.
  3. Solicitud de plena carga (acelerador pisado a fondo) a altas velocidades.
  4. Activación del interruptor Kick-down en vehículos equipados con cambio automático.
* **Ajuste de régimen:** La UCE del motor eleva automáticamente el régimen de ralentí al recibir la señal de activación de A/A para compensar el par consumido por el compresor.

**6. VALORES DE REFERENCIA**
| Estrategia de la UCE de Motor | Condición de Ejecución |
| :--- | :--- |
| Temporización de corte tras arranque | Compresor inhibido durante los primeros 10 segundos |
| Tipo de señal de desacoplo enviada a J293 | Señal de masa (negativo) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Interpretar como fallo del A/A que el compresor tarde 10 segundos en acoplar tras arrancar el motor; se trata de una estrategia programada de la UCE de motor.

**8. VERIFICACIÓN FINAL**
Verificar el acoplamiento del compresor transcurridos los 10 segundos iniciales tras la puesta en marcha.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — CONMUTADOR DE ENCENDIDO BORNE "15"
UBICACIÓN: Bombín de la cerradura de encendido en la columna de dirección.
APLICACIÓN: Todos los sistemas de climatización del SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Alimentar con positivo tras contacto las unidades electrónicas de climatización para autorizar el funcionamiento del sistema.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Conmutador eléctrico mecánico. Al girar la llave a posición de marcha, conecta la línea de batería (+30) con la línea de alimentación de componentes (+15).

**3. CARACTERÍSTICAS**
Interruptor de conmutación de potencia del clausor.

**4. VALORES DE TRABAJO**
* Tensión de señal: +12 V nominales con el encendido conectado.

**5. ANOMALÍAS FRECUENTES**
Fogueado o desgaste de las pistas de contacto internas.

**6. COMPORTAMIENTO EN AVERÍA**
Inoperatividad total del sistema de climatización. Al desconectar la señal (+15), la UCE desactiva el sistema y memoriza los parámetros existentes en el momento del corte.

**7. CÓMO COMPROBARLO**
Medir tensión con un voltímetro en la línea de entrada +15 de las centralitas al conectar el encendido.

---

### NOTA DE ELEMENTO — REGULADOR DE LA ILUMINACIÓN E20
CÓDIGO: E20
UBICACIÓN: Lado izquierdo del tablero de instrumentos, integrado en el conjunto conmutador de luces.
APLICACIÓN: SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Regular la intensidad luminosa de los pictogramas de mandos, botoneras y display de la consola central.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Reostato/resistencia variable. Ajusta la caída de tensión en la línea de iluminación del habitáculo según la posición de la ruleta manual.

**3. CARACTERÍSTICAS**
Regulador reostático rotativo integrado en el mando de luces.

**4. VALORES DE TRABAJO**
* Tensión de salida variable: 0 V a 12 V.

**5. ANOMALÍAS FRECUENTES**
Interrupción o corte de la pista resistiva.

**6. COMPORTAMIENTO EN AVERÍA**
Falta de iluminación nocturna en las ruedas de distribución y en la pantalla del display.

**7. CÓMO COMPROBARLO**
Medir la variación de tensión en el borne de salida del regulador E20 al girar la rueda de control.

---

### NOTA DE ELEMENTO — CONMUTADOR TÉRMICO DEL VENTILADOR F18
CÓDIGO: F18
UBICACIÓN: Rosqueado en el cuerpo lateral del radiador del líquido refrigerante.
APLICACIÓN: Sistema de refrigeración de SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Conectar las velocidades 1.ª y 2.ª de los electroventiladores del radiador según la temperatura del líquido refrigerante del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Termocontacto bimetálico doble normalmente abierto con dos escalones térmicos:
- El 1.er interruptor cierra a 95 ºC alimentando con +30 directo los motores V7/V35 a través de una resistencia (1.ª velocidad).
- El 2.º interruptor cierra a 105 ºC enviando señal de +30 a la unidad J293 para conectar la 2.ª velocidad rápida.

**3. CARACTERÍSTICAS**
Sensor bimetálico de 3 vías de conexión roscado sobre el radiador.

**4. VALORES DE TRABAJO**
* Cierre del 1.er escalón (1.ª velocidad): 95 ºC.
* Cierre del 2.º escalón (2.ª velocidad via J293): 105 ºC.

**5. ANOMALÍAS FRECUENTES**
Incrustaciones o fallo de continuidad en las láminas bimetálicas.

**6. COMPORTAMIENTO EN AVERÍA**
Los electroventiladores no se activan por temperatura del motor, produciendo sobrecalentamiento del líquido refrigerante.

**7. CÓMO COMPROBARLO**
Sumergir la zona roscada en recipiente calefactado midiendo continuidad entre sus bornes a 95 ºC y 105 ºC con un polímetro.

📷 IMAGEN: Esquema del conmutador térmico F18 en el radiador — Fuente: cd.pdf, pág. 19

---

### NOTA DE ELEMENTO — UNIDAD DE MANEJO E INDICACIÓN E87 (PULSADORES)
CÓDIGO: E87
UBICACIÓN: Consola central del salpicadero.
APLICACIÓN: Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Recoger la selección de funciones introducidas por el usuario (temperatura, turbina, recirculación y modo A/A) y transmitirlas a la unidad de control.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Botonera de microcontactos. Transmite la orden presionada a través de un bus de datos paralelo de 18 cables hacia el Radiocasete R, el cual la retransmite por un bus de 1 cable a la UCE J255.

**3. CARACTERÍSTICAS**
Módulo frontal de pulsadores alimentado por el radiocasete, integrado en el conjunto compacto de consola central.

**4. VALORES DE TRABAJO**
* Bus de datos entre E87 y Radiocasete: 18 cables.
* Bus de datos entre Radiocasete y UCE J255: 1 cable.

**5. ANOMALÍAS FRECUENTES**
Falso contacto en las membranas de los botones o interrupción en el bus de datos.

**6. COMPORTAMIENTO EN AVERÍA**
El radiocasete emite señal de avería a la UCE J255. El Autoclima entra en modo automático fijando 22 ºC solicitados y 20 ºC exteriores, desactiva el compresor y abre la recirculación.

**7. CÓMO COMPROBARLO**
Consultar el estado de conmutación de los pulsadores en los grupos 003 y 004 (campos 1 a 4: 0 no presionado / 1 presionado) mediante autodiagnóstico.

📷 IMAGEN: Regleta de pulsadores de la unidad de manejo E87 — Fuente: cd.pdf, pág. 20

---

### NOTA DE ELEMENTO — DISPLAY DE LA UNIDAD DE MANEJO E INDICACIÓN E87
CÓDIGO: E87 (pantalla integrada)
UBICACIÓN: Parte central superior del cuadro de la consola central.
APLICACIÓN: Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Mapear y mostrar visualmente la información de funcionamiento del sistema de climatización, radiocasete y ordenador de a bordo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Pantalla de cristal líquido (LCD) de gran formato. Sus segmentos son excitados por la unidad de control del Radiocasete R en base a los mensajes digitales enviados desde la UCE J255.

**3. CARACTERÍSTICAS**
Display LCD multifunción integrado en la unidad E87. Existen dos versiones según monte Autoclima (grados ºC y modo AUTO) o Calefacción Motorizada (niveles COLD/HOT).

**4. VALORES DE TRABAJO**
No documentado en fuentes.

**5. ANOMALÍAS FRECUENTES**
Pérdida de segmentos de cristales líquidos o rotura de cristal por impacto.

**6. COMPORTAMIENTO EN AVERÍA**
Información parcial o nula en la pantalla. Ante averías del bus de datos, la información del climatizador deja de ser visible.

**7. CÓMO COMPROBARLO**
En caso de avería del display debe sustituirse la unidad de manejo e indicación E87 completa.

📷 IMAGEN: Pantalla del display en Autoclima y Calefacción Motorizada — Fuente: cd.pdf, pág. 21

---

### NOTA DE ELEMENTO — MOTOR DE LA TRAMPILLA DE TEMPERATURA V68
CÓDIGO: V68
UBICACIÓN: Parte inferior de la unidad climática.
APLICACIÓN: Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Mover mecánicamente la trampilla de mezcla de temperatura para ajustar el paso de aire caliente y frío según las órdenes de la UCE.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Electromotor de corriente continua de giro limitado. La UCE invierte la polaridad de sus dos bornes para seleccionar el sentido de giro. Arrastra una reductora con sinfín e incorpora el potenciómetro G92.

**3. CARACTERÍSTICAS**
Motor eléctrico de CC con potenciómetro de posición G92 integrado en su carcasa.

**4. VALORES DE TRABAJO**
* Tensión de alimentación: 12 V con polaridad reversible.

**5. ANOMALÍAS FRECUENTES**
Desgaste de los piñones de plástico o bloqueo del tornillo sin fin.

**6. COMPORTAMIENTO EN AVERÍA**
La trampilla queda fija en la posición que estaba. La UCE reduce la velocidad de la turbina para disminuir el impacto térmico en el habitáculo.

**7. CÓMO COMPROBARLO**
Ejecutar la prueba de actuadores (función 03) para comprobar su desplazamiento completo de posición mínima a máxima.

📷 IMAGEN: Motor V68 con reductora de sinfín y potenciómetro G92 — Fuente: cd.pdf, pág. 22

---

### NOTA DE ELEMENTO — MOTOR DE LA TURBINA DE AIRE V2 Y REGULADOR DE RÉGIMEN J126
CÓDIGO: V2 (Motor) / J126 (Regulador)
UBICACIÓN: Carcasa de entrada de la unidad climática.
APLICACIÓN: Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Impulsar el caudal de aire necesario hacia el habitáculo modulando su velocidad de rotación.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Motor de corriente continua V2 alimentado desde el módulo electrónico transistorizado J126, el cual varía de forma continua la tensión aplicada en función de la orden recibida de la UCE J255.

**3. CARACTERÍSTICAS**
Turbina centrífuga con motor de CC de tensión variable y módulo electrónico regulador de potencia J126.

**4. VALORES DE TRABAJO**
* Tensión de excitación en prueba de actuadores: Subida progresiva de velocidad en pasos de 2,5 V cada 2 segundos desde 0 V hasta el máximo.

**5. ANOMALÍAS FRECUENTES**
Desgaste de escobillas en V2 o fallo del transistor de potencia en J126.

**6. COMPORTAMIENTO EN AVERÍA**
Reducción drástica o anulación total del caudal de aire en los difusores del habitáculo.

**7. CÓMO COMPROBARLO**
Ejecutar la función 03 de autodiagnóstico (prueba de actuadores) observando la subida progresiva de tensión en el motor V2.

📷 IMAGEN: Regulador de régimen J126 y motor de la turbina V2 — Fuente: cd.pdf, pág. 22

---

### NOTA DE ELEMENTO — MOTOR DE LA TRAMPILLA DE RECIRCULACIÓN V113
CÓDIGO: V113
UBICACIÓN: Parte superior de la unidad climática, unido a la trampilla de recirculación.
APLICACIÓN: Todos los sistemas de climatización del SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Mover la trampilla para alternar entre el paso de aire exterior fresco y la recirculación del aire del habitáculo.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Motor de corriente continua de giro libre en un solo sentido. Equipa internamente tres pistas conductoras. Al excitar dos de sus contactos, el motor gira alimentado por la pista interna hasta que el cursor llega al final de la pista y se detiene en la posición deseada.

**3. CARACTERÍSTICAS**
Motor eléctrico de CC de giro unidireccional con 3 terminales de conexión (1 masa permanente y 2 de excitación).

**4. VALORES DE TRABAJO**
* Tensión de excitación: 12 V.

**5. ANOMALÍAS FRECUENTES**
Suciedad o desgaste en las pistas conmutadoras internas.

**6. COMPORTAMIENTO EN AVERÍA**
Imposibilidad de cambiar la posición de la trampilla de recirculación. Parpadean todos los dígitos del display al encender el Autoclima.

**7. CÓMO COMPROBARLO**
Ejecutar la prueba de actuadores (función 03) para verificar la conmutación entre aire exterior y recirculación.

📷 IMAGEN: Mecanismo de pistas, cursor y palanca en el motor V113 — Fuente: cd.pdf, pág. 23

---

### NOTA DE ELEMENTO — MOTOR PARA LA TURBINA DEL TRANSMISOR DE TEMPERATURA INTERIOR V42
CÓDIGO: V42
UBICACIÓN: Formando un bloque compacto con la sonda NTC G56, detrás del tablero de instrumentos.
APLICACIÓN: Autoclima en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Hacer girar una turbina centrífuga para generar una corriente constante de aire del habitáculo sobre la sonda de temperatura NTC G56.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Motor sin escobillas (brushless) con estator bobinado, rotor imantado y placa electrónica interna. La placa electrónica gestiona el giro e identifica averías de funcionamiento.

**3. CARACTERÍSTICAS**
Microturbina con rotor imantado, estator y placa electrónica integrados.

**4. VALORES DE TRABAJO**
* Tensión de excitación: 12 V bajo señal de contacto +15.

**5. ANOMALÍAS FRECUENTES**
Atascamiento mecánico del rotor por pelusas de polvo.

**6. COMPORTAMIENTO EN AVERÍA**
La UCE del Autoclima detecta el fallo y aplica factores de corrección matemáticos sobre la temperatura de G56 para simular un valor próximo al real.

**7. CÓMO COMPROBARLO**
Verificar la presencia de 12 V en sus terminales con contacto puesto y comprobar la libre rotación del rotor.

📷 IMAGEN: Placa electrónica, estator y rotor imantado del motor V42 — Fuente: cd.pdf, pág. 24

---

### NOTA DE ELEMENTO — ACOPLAMIENTO MAGNÉTICO N25
CÓDIGO: N25
UBICACIÓN: En la parte frontal del compresor de aire acondicionado.
APLICACIÓN: A/A Manual y Autoclima en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Unir mecánicamente la polea movida por la correa del motor con el eje interno del compresor cuando se demanda frío.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Embrague electromagnético. Al recibir 12 V en su bobina, genera un campo electromagnético que atrae el plato de arrastre contra la cara de la polea, haciendo girar el eje del compresor de forma solidaria.

**3. CARACTERÍSTICAS**
Electroimán con bobina de cobre, polea de arrastre y plato de embrague frontal.

**4. VALORES DE TRABAJO**
* Tensión de excitación: 12 V suministrados desde la unidad de control J293.

**5. ANOMALÍAS FRECUENTES**
Corte de la bobina electromagnética por sobretemperatura o entrehierro excesivo por desgaste.

**6. COMPORTAMIENTO EN AVERÍA**
El compresor no gira y el aire impulsado no se enfría.

**7. CÓMO COMPROBARLO**
Medir la resistencia del bobinado N25 con un óhmetro o aplicar 12 V directos desde batería a la bobina comprobando el acoplamiento mecánico.

📷 IMAGEN: Despiece de la bobina, polea y plato de embrague N25 — Fuente: cd.pdf, pág. 25

---

### NOTA DE ELEMENTO — VENTILADORES DE LÍQUIDO REFRIGERANTE V7 Y V35
CÓDIGO: V7 / V35
UBICACIÓN: Montados en el canalizador posterior del radiador del motor.
APLICACIÓN: SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Crear un caudal de aire forzado a través del condensador y del radiador para enfriar el gas refrigerante R134a y el líquido refrigerante del motor.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Electromotores de corriente continua de dos velocidades. La 1.ª velocidad (lenta) se logra conectando en serie una resistencia eléctrica ubicada en el canalizador; la 2.ª velocidad (rápida) se activa alimentando el motor a 12 V directos sin pasar por la resistencia.

**3. CARACTERÍSTICAS**
Dos conjuntos de motores eléctricos independientes con hélice y resistencia de potencia integrada.

**4. VALORES DE TRABAJO**
* Excitación 1.ª velocidad: Alimentados al conectar el A/A o por el termocontacto F18 a 95 ºC.
* Excitación 2.ª velocidad: Alimentados por J293 al superar 16 bares en F129/G65 o F18 a 105 ºC.

**5. ANOMALÍAS FRECUENTES**
Fundido de la resistencia en serie de 1.ª velocidad o desgaste de escobillas del electromotor.

**6. COMPORTAMIENTO EN AVERÍA**
Sobrepresión en el circuito de alta del A/A al detener el vehículo o sobrecalentamiento del motor térmico.

**7. CÓMO COMPROBARLO**
Alimentar con 12 V directos los terminales de 1.ª y 2.ª velocidad de cada motor V7 y V35 para verificar su marcha.

📷 IMAGEN: Posición de los electroventiladores V7 y V35 en el canalizador — Fuente: cd.pdf, pág. 25

---

### NOTA DE PROCESO — LÓGICA DE REGULACIÓN DE TEMPERATURA (MODOS AUTOMÁTICO, SEMIAUTOMÁTICO Y MANUAL) / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica el funcionamiento del programa de control de la UCE J255 para ajustar y mantener el clima en el habitáculo en Autoclima y Calefacción Motorizada.

**2. FUNDAMENTO**
Procesamiento continuo de las temperaturas de consigna, interior, aire de entrada y exterior para gobernar la posición de la trampilla de mezcla, la velocidad de la turbina, la recirculación y la marcha del compresor.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Modo Automático (exclusivo de Autoclima):** Indicado con la palabra AUTO en display. La UCE procesa G17, G56, G191 y G192. Actúa automáticamente sobre la trampilla V68 (mezclando el aire que pasa por el evaporador con el del radiador de calefacción), la turbina V2 (ajustando el caudal), la recirculación V113 y el compresor N25. Al seleccionar desorientación parabrisas, anula la recirculación, sube la turbina al máximo y conecta el compresor.
* **Modo Semiautomático (exclusivo de Autoclima):** La UCE mantiene la regulación automática de la temperatura, pero el usuario fija uno o varios parámetros manuales (velocidad de turbina, recirculación o apagado del compresor). Al modificar un parámetro, desaparece la palabra AUTO del display.
* **Modo Manual (único en Calefacción Motorizada; opcional en Autoclima):** La trampilla V68 se desplaza a impulsos de pulsador y queda fija. La turbina V2, la recirculación y el compresor obedecen exclusivamente a las órdenes manuales. En Autoclima manual, la temperatura se indica con letras en lugar de ºC.

📷 IMAGEN: Esquema de regulación de entradas y salidas de la UCE J255 — Fuente: cd.pdf, págs. 26-28

**6. VALORES DE REFERENCIA**
No documentado en fuentes.

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Interpretar la desaparición de la palabra AUTO en el display como una avería; indica que el usuario ha seleccionado manualmente un parámetro en modo semiautomático.

**8. VERIFICACIÓN FINAL**
Verificar en la pantalla del display los modos AUTO, manual o parámetros fijos según la selección introducida en la botonera E87.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE PROCESO — GESTIÓN DEL COMPRESOR Y ELECTROVENTILADORES POR LA UNIDAD J293 / FUNDAMENTO

**1. OBJETO Y ALCANCE**
Explica las condiciones eléctricas de seguridad y potencia que procesa la unidad J293 para excitar el acoplamiento magnético del compresor N25 y los electroventiladores V7/V35.

**2. FUNDAMENTO**
La unidad de control J293 actúa como etapa final de potencia. Condiciona la conexión del compresor a la existencia de presión de trabajo, temperatura ambiente mínima y ausencia de inhibición por parte de la UCE de motor.

**3. CONDICIONES PREVIAS**
No aplica.

**4. EQUIPO Y MATERIAL**
No aplica.

**5. DESARROLLO**
* **Requisitos para conectar el acoplamiento magnético N25:**
  1. Recepción de la señal de petición de A/A desde la UCE de clima J255.
  2. La señal debe atravesar el conmutador de presión F129 en posición cerrada (o ser validada por G65 entre 2 y 32 bares).
  3. La señal debe atravesar el interruptor térmico F38 en posición cerrada (temperatura de caja de aguas > 5 ºC).
  4. Ausencia de señal de corte (negativo) procedente de la Unidad de Control del Motor.
* **Activación de electroventiladores V7 y V35:**
  - 1.ª Velocidad: Conectada por J293 al recibir la señal de excitación del compresor desde J255, o directamente por F18 al alcanzar 95 ºC.
  - 2.ª Velocidad: Conectada por J293 cuando la presión en F129/G65 supera los 16 bares o cuando F18 alcanza 105 ºC.

📷 IMAGEN: Esquema funcional de la unidad de control del aire acondicionado J293 — Fuente: cd.pdf, pág. 29

**6. VALORES DE REFERENCIA**
| Función / Componente | Condición de Excitación por J293 |
| :--- | :--- |
| Activación de 1.ª velocidad de ventiladores | Señal de marcha de compresor A/A o F18 a 95 ºC |
| Activación de 2.ª velocidad de ventiladores | Presión de circuito en F129/G65 > 16 bares o F18 a 105 ºC |
| Condición térmica de F38 para A/A | Temperatura ambiental > 5 ºC |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Buscar fallos en el compresor N25 cuando la causa es la apertura del interruptor térmico F38 por trabajar con temperaturas ambiente inferiores a 5 ºC.

**8. VERIFICACIÓN FINAL**
Verificar el arranque de la 1.ª velocidad de ventiladores de forma simultánea a la excitación de la bobina N25 al pulsar A/A.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

### NOTA DE ELEMENTO — RADIOCASETE R Y GESTIÓN DE BUS DE COMUNICACIÓN
CÓDIGO: R
UBICACIÓN: Consola central del salpicadero.
APLICACIÓN: Autoclima y Calefacción Motorizada en SEAT Ibiza/Córdoba '99.

**1. MISIÓN**
Actuar como pasarela de comunicación bidireccional entre el panel E87 y la UCE J255, y regular la luminosidad del display y pulsadores.

**2. PRINCIPIO DE FUNCIONAMIENTO**
Módulo electrónico de audio y pasarela de datos. Convierte la señal del bus paralelo de 18 cables enviado por los pulsadores de E87 en un protocolo serie de 1 cable hacia la UCE J255, y genera la excitación para la pantalla LCD.

**3. CARACTERÍSTICAS**
Unidad de radio integrada con microprocesador de gestión de bus de datos.

**4. VALORES DE TRABAJO**
* Bus entre E87 y Radiocasete: 18 cables.
* Bus serie entre Radiocasete y UCE J255: 1 cable.

**5. ANOMALÍAS FRECUENTES**
Fallo interno de comunicación en el bus serie o falta de alimentación hacia la botonera.

**6. COMPORTAMIENTO EN AVERÍA**
Los datos de funcionamiento del climatizador dejan de ser visibles en la pantalla del display.

**7. CÓMO COMPROBARLO**
Verificar la continuidad del cable del bus serie entre la radio R y la UCE J255, y comprobar las alimentaciones eléctricas de la radio.

📷 IMAGEN: Esquema de interconexión del Radiocasete R con E87 y J255 — Fuente: cd.pdf, pág. 30

---

### NOTA DE PROCESO — AUTODIAGNOSIS Y LECTURA DE PARÁMETROS EN AUTOCLIMA Y CALEFACCIÓN MOTORIZADA / DIAGNÓSTICO

**1. OBJETO Y ALCANCE**
Explica el procedimiento de interrogación electrónica, comprobación de actuadores, ajuste básico de topes y lectura de bloques de parámetros en la UCE J255.

**2. FUNDAMENTO**
La UCE J255 monitoriza continuamente sus sensores y actuadores. Registra averías esporádicas (se borran tras 40 puestas en marcha sin fallo) y permanentes, consultables desde la dirección de diagnóstico 08.

**3. CONDICIONES PREVIAS**
Encendido conectado (+15) y equipo de diagnosis conectado al conector T16.

**4. EQUIPO Y MATERIAL**
Lector de averías / equipo de diagnosis conectado al conector de diagnosis T16 de 16 polos.

**5. DESARROLLO**
1. Acceder al sistema de diagnóstico introduciendo la **Dirección 08 — Aire acondicionado**.
2. **Función 01 (Versión de la unidad):** Identifica la clave de recambios (ej. 6K0959291), versión de software y el programa codificado por el puente de masa en el contacto 21 (Autoclima o Calefacción Motorizada).
3. **Función 02 (Consultar memoria de averías):** Muestra los códigos de avería de sensores y actuadores memorizados.
4. **Función 03 (Diagnóstico de elementos actuadores):** Activa secuencialmente:
   - Acoplamiento N25: Conexión/desconexión cada 2 segundos (solo Autoclima).
   - Turbina V2: Subida escalonada de velocidad de 0 V al máximo en pasos de 2,5 V cada 2 segundos.
   - Motor V68: Desplazamiento completo de posición mínima a máxima.
   - Motor V113: Desplazamiento alternativo entre aire exterior y recirculación.
5. **Función 04 (Ajuste Básico):** Obligatorio al sustituir el motor V68 o la UCE J255. Entrar en el grupo 002 para memorizar los topes de V68.
6. **Función 05 (Borrar memoria)** y **Función 06 (Finalizar emisión)**.
7. **Función 08 (Leer bloque de valores de medición):** Muestra los grupos de datos:
   - *Grupo 001:* Estado salida compresor (0/1), estado F129 (0 fuera/1 rango), estado V113 (0 ext/1 recir), velocidad vehículo.
   - *Grupo 002:* V68 posición real (V), calculada (V), tope superior (V) y tope inferior (V).
   - *Grupo 003:* Pulsador aumento turbina (0/1), disminución turbina (0/1), pulsador AC (0/1), pulsador AUTO (0/1).
   - *Grupo 004:* Pulsador recirculación (0/1), disminución temp. (0/1), aumento temp. (0/1), posición de distribución (0-100%).
   - *Grupo 005:* Tensión solicitada V2 (V), tensión real V2 (V), tensión de alimentación (V).
   - *Grupo 006:* Temp. exterior G17 (ºC), difusor central G191 (ºC), difusor reposapiés G192 (ºC), habitáculo G56 (ºC).

**6. VALORES DE REFERENCIA**
| Grupo de Medición | Campo 1 | Campo 2 | Campo 3 | Campo 4 |
| :--- | :--- | :--- | :--- | :--- |
| **Grupo 001** | Estado salida compresor (0/1) | Estado F129 (0 fuera/1 rango) | Estado V113 (0 ext/1 recir) | Velocidad vehículo (km/h) |
| **Grupo 002** | V68 posición real (V) | V68 posición calculada (V) | V68 tope superior (V) | V68 tope inferior (V) |
| **Grupo 005** | Tensión solicitada V2 (V) | Tensión real V2 (V) | Tensión de alimentación (V) | Libre |
| **Grupo 006** | Temp. exterior G17 (ºC) | Temp. difusor central G191 (ºC) | Temp. difusor reposapiés G192 (ºC) | Temp. habitáculo G56 (ºC) |

**7. INTERPRETACIÓN Y ERRORES FRECUENTES**
* Intentar realizar la Función 04 (Ajuste Básico) sin seleccionar el grupo 002; la UCE no memorizará las posiciones límite del motor V68.

**8. VERIFICACIÓN FINAL**
Verificar la ausencia de averías grabadas en la memoria tras efectuar el borrado y comprobar el movimiento correcto de las trampillas durante el diagnóstico de actuadores.

**9. SEGURIDAD Y NORMATIVA**
No aplica.

---

COBERTURA: documento «cd.pdf», páginas 1 a 38 de 38. [completo]