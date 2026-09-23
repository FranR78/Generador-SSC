```yaml
tipo: componente
titulo: Compresor de aire acondicionado
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Behr Hella / Mercedes
fuente: "6. Compresores.pdf"
paginas: "49"
relacionados: [aceite-frigorifico, condensador, evaporador, valvula-sobrepresion]
palabras: [compresión, aspiración de gas, lubricante, separación de presiones]
```

## Misión
Aumentar la presión del fluido refrigerante en estado gaseoso y obligarlo a circular por los distintos componentes del sistema de aire acondicionado, constituyendo el punto de separación entre los lados de alta y baja presión del circuito frigorífico.

## Tipos y características
- Se clasifica según su mecanismo de compresión en: compresores de émbolos, de paletas, de espiral (scroll) y de disco oscilante.
- Conexión habitual mediante acoplamiento magnético o acoplamiento continuo por disco de arrastre.

📷 IMAGEN: Sección del compresor de aire acondicionado con disco de arrastre y electroválvula reguladora — Fuente: 6. Compresores.pdf, pág. 49

## Principio de funcionamiento
Aspira el agente frigorífico gaseoso frío a baja presión procedente del evaporador. Comprime el volumen de gas reduciendo su espacio interno e impulsa el refrigerante en forma de gas caliente a alta presión hacia el condensador. Trabaja únicamente cuando el sistema de climatización está activado.

## Valores de trabajo
- **Estado del refrigerante a la entrada (aspiración):** Fase gaseosa, frío y a baja presión.
- **Estado del refrigerante a la salida (impulsión):** Fase gaseosa, caliente y a alta presión.
- **Distribución del aceite frigorífico:** El 50% del total de la carga de aceite del sistema se localiza en el interior del compresor (el otro 50% circula solidariamente con el agente frigorífico).

## Anomalías frecuentes
- Aspiración de fluido refrigerante en fase líquida (golpe de líquido / golpe de ariete).
- Trabajo con deficiencia de aceite frigorífico o lubricante contaminado.

## Comportamiento en avería
- Destrucción mecánica interna del compresor debido a la incompresibilidad de los líquidos.

## Cómo comprobarlo
- Verificar que el gas llegue exclusivamente en fase gaseosa por la toma de aspiración de baja presión.
- Comprobar la presencia de presión en el circuito y el correcto acoplamiento de la polea/embrague.

## Mantenimiento
- Utilizar exclusivamente lubricante especial para máquinas frigoríficas compatible con el gas refrigerante del vehículo.

---

```yaml
tipo: componente
titulo: Válvula de sobrepresión del compresor
entidad: valvula-sobrepresion
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "49"
relacionados: [compresor, circuito-frigorifico]
palabras: [protección, sobrepresión, liberación de fluido]
```

## Misión
Proteger al compresor y a todos los componentes del sistema de aire acondicionado frente a picos de presión peligrosos que puedan poner en riesgo la integridad física del circuito.

## Tipos y características
- Válvula mecánica de descarga de seguridad integrada en el cuerpo o carcasa del compresor.

## Principio de funcionamiento
Permanece cerrada en condiciones normales de trabajo. Si la presión interna del circuito supera un umbral máximo de seguridad por anomalía térmica o bloqueo de disipación, la válvula se abre de forma mecánica liberando fluido refrigerante a la atmósfera para bajar la presión.

## Valores de trabajo
- **Condición de disparo:** Presión excesiva en la línea del circuito frigorífico.

## Anomalías frecuentes
- Apertura fortuita o falta de estanqueidad por fatiga del muelle interno tras una descarga de presión.

## Comportamiento en avería
- Fuga continuada de agente frigorífico al exterior tras haber actuado para descargar la sobrepresión.

## Cómo comprobarlo
- Inspeccionar visualmente el cuerpo de la válvula buscando restos de aceite o traza de trazador UV que indiquen descarga de fluido.

## Mantenimiento
- Reemplazar la válvula o verificar la causa que originó el pico de sobrepresión en el sistema de climatización antes de rearmar la carga.

---

```yaml
tipo: componente
titulo: Compresor de émbolos alternativos
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
codigo: FK 50
fuente: "6. Compresores.pdf"
paginas: "50"
relacionados: [compresor, circuito-frigorifico]
palabras: [vehículo industrial, autobús, ferrocarril, válvulas de láminas, 2 tiempos]
```

## Misión
Comprimir e impulsar grandes volúmenes de fluido refrigerante en equipos de climatización de gran capacidad para habitáculos de grandes dimensiones o transporte refrigerado.

## Tipos y características
- Arquitectura de 2, 4 o 6 cilindros montados en bloque (ejemplo: FK 50).
- Utilizado principalmente en vehículos industriales, autobuses, furgones isotérmicos/congeladores móviles y vagones de ferrocarril.
- Accionamiento mecánico mediante correa en autobuses o mediante motor eléctrico en ferrocarriles.

📷 IMAGEN: Compresor de émbolos alternativos modelo FK 50 para vehículo industrial y esquema de láminas de aspiración e impulsión — Fuente: 6. Compresores.pdf, pág. 50

## Principio de funcionamiento
Funciona de manera similar a un motor de combustión interna pero en ciclo de dos tiempos: fase de admisión de gas al descender el pistón y fase de compresión al ascender. La apertura y cierre de los conductos se realiza mediante válvulas de láminas flexibles de aspiración e impulsión que actúan automáticamente por diferencia de presión.

## Valores de trabajo
- **Rendimiento volumétrico:** Comprendido entre el 80% y el 90%.
- **Carga de refrigerante orientativa en autobús:** Aproximadamente 12 kg de fluido refrigerante.
- **Configuración de cilindros:** Bloques de 2, 4 o 6 cilindros.

## Anomalías frecuentes
- Generación de oscilaciones de presión y nivel sonoro elevado durante el funcionamiento.
- Desgaste de láminas de aspiración/impulsión o fricción de pistones.

## Comportamiento en avería
- Pérdida de rendimiento en la compresión por fallo de sellado en las láminas flexibles.

## Cómo comprobarlo
- Verificar la presión de impulsión y aspiración mediante puente de manómetros.
- Comprobar la tensión e integridad de la correa de accionamiento o el estado del motor eléctrico de arrastre.

## Mantenimiento
- Controlar el nivel y estado del aceite en el cárter del compresor.

---

```yaml
tipo: componente
titulo: Compresor de paletas
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "51"
relacionados: [compresor, circuito-frigorifico]
palabras: [rotor excéntrico, paletas flotantes, fuerza centrífuga, golpe de ariete]
```

## Misión
Comprimir el agente frigorífico gaseoso mediante la variación de volumen de cámaras creadas por paletas flotantes en un rotor excéntrico.

## Tipos y características
- Compresor rotativo constituido por un rotor de paletas flotantes alojado de forma excéntrica en el interior de una carcasa circular u ovalada (estator).
- Poco utilizado en turismos modernos por su bajo rendimiento a bajas revoluciones del motor.
- Construcción sencilla: contiene hasta un 30% menos de piezas que otros compresores.

📷 IMAGEN: Despiece y sección de un compresor de paletas con rotor excéntrico y válvula de impulsión — Fuente: 6. Compresores.pdf, pág. 51

## Principio de funcionamiento
Al girar el rotor excéntrico, la fuerza centrífuga empuja las paletas flotantes hacia fuera manteniéndolas en contacto con la pared de la carcasa. La posición descentrada forma cámaras rotativas que crecen en la zona de aspiración (generando depresión e inspirando gas) y se reducen paulatinamente hacia la zona de impulsión, comprimiendo el gas y enviándolo al condensador a través de una válvula de impulsión. No precisa válvula de admisión.

## Valores de trabajo
- **Rendimiento:** Comprendido entre el 75% y el 90% (óptimo a régimen medio y alto de giro).
- **Sentido de giro:** Único e invariable (si gira al revés no comprime nada).

## Anomalías frecuentes
- Fugas internas de gas comprimido en los laterales de las paletas a causa de las tolerancias necesarias para la dilatación térmica.
- Caída acusada de rendimiento a bajas r.p.m. por menor fuerza centrífuga sobre las paletas.

## Comportamiento en avería
- Falta de compresión a ralentí. Soporta mejor los golpes de ariete (entrada imprevista de líquido) que los compresores de émbolos.

## Cómo comprobarlo
- Verificar el sentido de rotación del eje de accionamiento.
- Medir presiones de trabajo a ralentí y a régimen medio (2.000 r.p.m.) para detectar pérdidas de rendimiento por fuga lateral.

## Mantenimiento
- Comprobar la limpieza interna y el estado del fluido lubricante.

---

```yaml
tipo: componente
titulo: Compresor de espiral
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "52"
relacionados: [compresor, aceite-frigorifico, unidad-control-climatizador]
palabras: [vehículo eléctrico, alto voltaje, espiral fija, espiral giratoria, LIN-BUS, aceite POE]
```

## Misión
Comprimir el fluido refrigerante (R134a o R1234yf) en vehículos eléctricos e híbridos mediante la acción de espirales engranadas accionadas por un motor eléctrico de alto voltaje.

## Tipos y características
- Compresor tipo espiral o scroll integrado monobloc con un motor eléctrico trifásico de alta tensión.
- Incorpora o comunica con una unidad de control electrónica del compresor interconectada por red LIN-BUS con la unidad de control de climatización.

📷 IMAGEN: Sección y esquema de componentes del compresor de espiral eléctrico de alto voltaje — Fuente: 6. Compresores.pdf, pág. 52

## Principio de funcionamiento
Está constituido por dos espirales engranadas: una espiral fija y otra espiral giratoria orbital. El motor eléctrico impulsa la espiral giratoria mediante una excéntrica describiendo una trayectoria circular. Esta órbita crea cámaras lunares concéntricas que se reducen progresivamente hacia el centro, comprimiendo el gas refrigerante e impulsándolo hacia la línea de alta.

## Valores de trabajo
- **Alimentación eléctrica:** Corriente alterna trifásica suministrada por el inversor interno a partir de la batería de alta tensión (cableado de color naranja).
- **Tipo de lubricante frigorífico obligatorio:** Aceite sintético POE especial no conductor de la electricidad.
- **Fluidos compatibles:** R134a o R1234yf.

## Anomalías frecuentes
- Pérdida del aislamiento eléctrico interno del motor o contaminación del aceite con lubricantes conductores (PAG).
- Avería en la unidad de control o en la línea de comunicación LIN-BUS.

## Comportamiento en avería
- Bloqueo de seguridad del sistema de alta tensión del vehículo por fallo de aislamiento o desconexión del compresor.

## Cómo comprobarlo
- Verificar la ausencia de tensión de alta antes de manipular el cableado o conectores naranjas.
- Medir el aislamiento eléctrico entre las fases del motor y la carcasa/masa mediante megóhmetro.

## Mantenimiento
- Usar estrictamente aceite POE dieléctrico. Intervención permitida únicamente a personal cualificado como Técnico en Alto Voltaje (HVT).

---

```yaml
tipo: fundamento
titulo: Climatización por bomba de calor en vehículo eléctrico
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: Renault
fuente: "6. Compresores.pdf"
paginas: "52-53"
relacionados: [compresor, evaporador, condensador]
palabras: [bomba de calor, Renault Zoe, electroválvula, condensador interior, orificio calibrado]
```

## Objeto
Explicar la inversión del ciclo frigorífico en vehículos eléctricos para generar tanto frío como calor para el habitáculo utilizando el mismo compresor eléctrico de alto voltaje con un consumo energético reducido.

## Fundamento
Mediante la conmutación de electroválvulas direccionales en el circuito, se invierte la función de los intercambiadores térmicos: el condensador exterior pasa a actuar como evaporador (absorbiendo calor del ambiente exterior incluso a bajas temperaturas) y el condensador interior cede calor directamente al aire del habitáculo.

📷 IMAGEN: Esquemas de flujo del circuito en modo refrigeración y modo calefacción en Renault Zoe — Fuente: 6. Compresores.pdf, pág. 53

## Desarrollo
**Modo Climatización (Refrigeración):**
1. La electroválvula de bypass (10) se activa anulando la válvula expansora del condensador exterior.
2. El compresor eléctrico impulsa el refrigerante hacia el condensador exterior delantero (1) y el condensador interior (4).
3. La válvula de expansión de orificio calibrado (6) reduce la presión antes de entrar al evaporador del habitáculo (5).
4. La trampilla de calefacción permanece cerrada y la turbina (9) impulsa aire frío al habitáculo.

**Modo Calefacción (Bomba de calor):**
1. La electroválvula (11) se activa bloqueando el paso de fluido hacia el evaporador interior (5).
2. El compresor impulsa el gas caliente hacia el condensador interior (4) donde cede calor al aire impulsado por la turbina (9).
3. El fluido pasa por la válvula de expansión de orificio calibrado (6) reduciendo su presión hacia el condensador exterior delantero (1), que funciona ahora como evaporador absorbiendo calor del aire exterior.

## Valores de referencia
- **Componentes del circuito (Renault Zoe):** Condensador/evaporador externo (1), compresor eléctrico (2), filtro acumulador (3), condensador interior (4), evaporador interior (5), válvula expansora de orificio calibrado (6), calculador de climatización (7), calculador bomba de calor (8), turbina (9), electroválvula bypass (10), electroválvula de corte (11).

## Errores de concepto frecuentes
- Creer que la calefacción en un vehículo eléctrico con bomba de calor se logra mediante resistencias eléctricas PTC de alto consumo; la bomba de calor aprovecha la energía termodinámica del refrigerante con mayor eficiencia.

---

```yaml
tipo: componente
titulo: Compresor de disco oscilante de cilindrada fija
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "54"
relacionados: [embrague-compresor, compresor]
palabras: [cilindrada fija, émbolos, disco oscilante, válvulas de láminas, embrague electromagnético]
```

## Misión
Comprimir un volumen constante de fluido refrigerante por cada revolución del eje de impulsión mediante pistones accionados por un disco inclinado de ángulo fijo.

## Tipos y características
- Compresor de cilindrada constante con arquitectura de 3 a 10 émbolos distribuidos de forma concéntrica alrededor del eje de impulsión.
- Requiere acoplamiento y desacoplamiento periódico mediante embrague electromagnético para regular el rendimiento frigorífico del sistema.

📷 IMAGEN: Sección de un compresor de disco oscilante de cilindrada fija — Fuente: 6. Compresores.pdf, pág. 54

## Principio de funcionamiento
El movimiento rotativo del eje de impulsión es transformado por el disco oscilante en un movimiento alternativo lineal de los émbolos. En la parte posterior se sitúa una placa de válvulas provista de láminas flexibles automáticas de aspiración e impulsión para cada cilindro. Al tener una inclinación fija, la carrera de los émbolos y la cilindrada son siempre constantes.

## Valores de trabajo
- **Rango de velocidad de giro del compresor:** De 800 r.p.m. a 6.000 r.p.m. (según régimen del motor térmico).
- **Número de émbolos:** De 3 a 10 émbolos concéntricos.

## Anomalías frecuentes
- Fluctuaciones acusadas en el volumen de gas impelido al evaporador debido a variaciones bruscas de r.p.m. del motor del vehículo.
- Desgaste térmico del embrague por ciclos continuos de conexión y desconexión.

## Comportamiento en avería
- Variación inconstante de la temperatura del aire en difusores al cambiar las r.p.m. del motor.

## Cómo comprobarlo
- Verificar el acoplamiento magnético del embrague y medir el salto de presión entre la línea de aspiración y la de impulsión a régimen constante.

## Mantenimiento
- Inspeccionar el estado de la correa de arrastre y la holgura del embrague electromagnético.

---

```yaml
tipo: componente
titulo: Embrague electromagnético del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Sanden / Nippondenso
fuente: "6. Compresores.pdf"
paginas: "54-55"
relacionados: [compresor, unidad-control-climatizador]
palabras: [acoplamiento magnético, polea, bobina, plato de acoplamiento, juego de montaje]
```

## Misión
Transmitir o interrumpir la fuerza de accionamiento mecánico desde la correa del motor térmico hacia el eje de impulsión del compresor de aire acondicionado.

## Tipos y características
- Acoplamiento magnético accionado por corriente continua de 12 V.
- Compuesto por tres partes principales: polea con rodamiento de bolas, placa elástica con plato de acoplamiento (de acero con < 0,6% de carbono) y bobina electromagnética fija a la carcasa.

📷 IMAGEN: Despiece y esquemas de acoplamiento activado y desactivado del embrague electromagnético — Fuente: 6. Compresores.pdf, pág. 55

## Principio de funcionamiento
La correa del motor hace girar libremente la polea sobre su rodamiento cuando no hay corriente. Al aplicar corriente eléctrica a la bobina, se genera un campo magnético que atrae el plato de la placa elástica contra la cara frontal de la polea anulando el juego de montaje y arrastrando el eje del compresor. Al cortar la corriente, los muelles separan el plato.

## Valores de trabajo
- **Juego de montaje entre polea y plato (Sanden):** 0,4 mm a 0,8 mm.
- **Juego de montaje entre polea y plato (Nippondenso):** 0,2 mm a 0,5 mm.
- **Composición del plato:** Acero con menos del 0,6% de carbono (para evitar magnetización remanente).

## Anomalías frecuentes
- Desgaste del plato por patinamiento continuo si el compresor se endurece mecánicamente.
- Cortocircuito o interrupción en el devanado de la bobina electromagnética.
- Juego de montaje fuera de tolerancia.

## Comportamiento en avería
- Sobrecalentamiento y quemado del embrague por rozamiento si el compresor patina. (El embrague es la víctima de una dureza mecánica del compresor, no la causa inicial).

## Cómo comprobarlo
- Medir con galga de espesores el juego de montaje en tres puntos equidistantes (ajustar mediante arandelas de reglaje o juntas de papel en el tope del eje).
- Medir la resistencia eléctrica y la alimentación de 12 V en la bobina electromagnética.

## Mantenimiento
- Ajustar el juego de montaje si difiere de las especificaciones del fabricante.

---

```yaml
tipo: componente
titulo: Compresor de disco oscilante autorregulado por válvula hidráulica
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "6. Compresores.pdf"
paginas: "56-58"
relacionados: [compresor, valvula-expansion]
palabras: [cilindrada variable, autorregulado, válvula hidráulica, presión de cámara, presión de baja]
```

## Misión
Adaptar automáticamente el caudal de refrigerante impelido y la carrera de los pistones entre un 5% y un 100% en función de la demanda térmica del sistema sin necesidad de desconectar el embrague.

## Tipos y características
- Compresor de cilindrada variable de accionamiento continuo (embrague siempre conectado durante el funcionamiento del climatizador).
- Regulación interna autónoma por válvula hidráulica mecánica con fuelles barométricos y taladro estrangulador calibrado.

📷 IMAGEN: Esquema del mecanismo interno de disco oscilante y sección de la válvula hidráulica reguladora con fuelles 1 y 2 — Fuente: 6. Compresores.pdf, pág. 56, 57, 58

## Principio de funcionamiento
El disco oscilante se desplaza en un carril guía guiado por dos muelles (posición de reposo a 40% de caudal). La inclinación del disco depende del equilibrio entre la presión de baja (que actúa en la cabeza de los émbolos) y la presión del cárter/cámara (que actúa en la parte inferior). Una válvula hidráulica interna con fuelles barométricos comunica o aísla la cámara con la baja presión según la presión de succión y la de alta, alterando el ángulo de inclinación y la carrera.

## Valores de trabajo
- **Margen de caudal impelido:** Desde el 5% (mínimo) hasta el 100% (máximo).
- **Caudal nominal de reposo de muelles:** Aproximadamente 40%.
- **Presión de baja estabilizada en funcionamiento:** Entre 1,8 bar y 2,0 bar (evita congelación del evaporador sin necesidad de termostato).

## Anomalías frecuentes
- Bloqueo o fallo de calibración de los fuelles en la válvula hidráulica reguladora.
- Obstrucción del taladro estrangulador calibrado que comunica la alta presión con el cárter.

## Comportamiento en avería
- Incapacidad para aumentar la carrera de los émbolos ante alta demanda de frío (el compresor se queda congelado en mínimo rendimiento).

## Cómo comprobarlo
- Verificar con manómetros que la presión de baja se mantiene de forma estable entre 1,8 y 2 bar al variar el régimen del motor.

## Mantenimiento
- Mantener la carga correcta de gas y aceite para garantizar el movimiento hidráulico de los fuelles.

---

```yaml
tipo: componente
titulo: Sistema de desacoplamiento de seguridad de la polea del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "6. Compresores.pdf"
paginas: "59-60"
relacionados: [compresor, valvula-reguladora-compresor]
palabras: [fusible mecánico, piezas de goma, láminas metálicas, disco de arrastre, bloqueo compresor]
```

## Misión
Proteger la correa de accesorios (poly-v) y los demás componentes auxiliares del motor térmico liberando la polea en caso de gripado o bloqueo mecánico del compresor.

## Tipos y características
- Dispositivo de seguridad por fusible mecánico integrado en la polea de transmisión de los compresores de cilindrada variable que carecen de embrague electromagnético.
- Variantes: unión mediante piezas de goma elastómeras o mediante láminas de chapa metálica de rotura programada.

📷 IMAGEN: Detalle del disco de arrastre con cortes mecanizados, piezas de goma y sistema de desacoplamiento por deformación/rotura — Fuente: 6. Compresores.pdf, pág. 60

## Principio de funcionamiento
En condiciones normales, las piezas de goma o láminas metálicas transmiten el par desde la polea accionada por la correa hacia el disco de arrastre solidario al eje del compresor. Si el compresor se bloquea, la resistencia al giro provoca que el disco de arrastre se deforme hacia el exterior a través de cortes mecanizados guiados (o que las láminas metálicas se rompan), liberando las piezas de goma para que la polea siga girando loca sin romper la correa.

## Valores de trabajo
- **Estado normal:** Transmisión directa de giro entre polea y disco de arrastre.
- **Estado de rotura/desacoplamiento:** Polea girando libremente sin arrastrar el eje.

## Anomalías frecuentes
- Rotura prematura del fusible mecánico en vehículos equipados con sistema Start/Stop por arranques frecuentes si el compresor no ha regresado a la posición de mínimo rendimiento.

## Comportamiento en avería
- Polea girando loca permanentemente con imposibilidad de accionar el compresor tras sufrir un desacoplamiento.

## Cómo comprobarlo
- Inspeccionar visualmente la cara frontal del disco de arrastre para detectar deformaciones en las muescas o rotura de las láminas metálicas.

## Mantenimiento
- En caso de disparo accidental sin gripado, montar conjuntos de recambio reforzados o kits de reparación con embrague eléctrico de adaptación.

---

```yaml
tipo: componente
titulo: Electroválvula de regulación del compresor
entidad: valvula-reguladora-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "6. Compresores.pdf"
paginas: "59, 61-63"
relacionados: [compresor, unidad-control-climatizador]
palabras: [electroválvula, señal PWM, presión de cárter, carrera nula, máximo rendimiento]
```

## Misión
Regular electrónicamente la presión en el cárter del compresor mediante señales modulares de la unidad de control para modificar la inclinación del disco oscilante y la carrera de los émbolos.

## Tipos y características
- Actuador electromagnético integrado en el cuerpo exterior del compresor de cilindrada variable.
- Consta de una bobina eléctrica, un núcleo magnético de hierro dulce y un vástago de distribución hidráulica.

📷 IMAGEN: Diagrama de activación PWM (2% y 98%) y movimiento del vástago de la electroválvula de regulación del compresor — Fuente: 6. Compresores.pdf, pág. 61, 62, 63

## Principio de funcionamiento
La unidad de control de climatización pilota la bobina con una señal de onda cuadrada a frecuencia fija y relación de trabajo variable (PWM). 
- **Mínimo rendimiento (activación PWM ~2% / baja excitación):** El muelle del vástago comunica la salida de alta presión con el cárter. La alta presión en el cárter empuja la parte inferior de los émbolos, colocando el disco oscilante en posición plana (carrera y caudal nulos).
- **Máximo rendimiento (activación PWM ~98% / alta excitación):** El vástago se desplaza cerrando el paso de alta y comunicando el cárter con la línea de baja presión (succión). Al caer la presión del cárter, la baja presión en la cabeza de los émbolos inclina al máximo el disco oscilante (carrera y caudal máximos).

## Valores de trabajo
- **Señal de mando:** Frecuencia fija, ciclo de trabajo PWM variable entre el 2% (mínimo) y el 98% (máximo).
- **Posición de seguridad por fallo eléctrico:** Mínimo rendimiento (carrera casi nula) por acción del muelle de retorno del vástago.

## Anomalías frecuentes
- Cortocircuito o interrupción en la bobina de la electroválvula.
- Gripado mecánico del vástago interno por contaminación o virutas en el aceite.

## Comportamiento en avería
- Ante corte de corriente o fallo del actuador, la electroválvula adopta por seguridad la posición de mínimo rendimiento para evitar sobrepresiones en el circuito.

## Cómo comprobarlo
- Verificar la señal de activación PWM con osciloscopio o función de ciclo de trabajo en el polímetro.
- Medir la resistencia de la bobina electromagnética.

## Mantenimiento
- En caso de fallo en modelos que no dispongan de despiece individual de la electroválvula, sustituir el compresor completo.

---

COBERTURA: documento «6. Compresores.pdf», páginas 49 a 63 de 63. [completo]