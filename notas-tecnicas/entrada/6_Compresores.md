```yaml
tipo: componente
titulo: Compresor de émbolos
entidad: compresor
variante: embolos
area: climatizacion
sistema: circuito-frigorifico
codigo: FK 50
fuente: "6. Compresores.pdf"
paginas: "49-50"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, evaporador, valvula-sobrepresion]
palabras: [émbolos alternativos, vehículo industrial, autobuses, láminas aspiración, láminas impulsión]
```

## Misión
Aumentar la presión del agente frigorífico gaseoso frío y a baja presión procedente del evaporador e impulsarlo como gas caliente hacia el condensador en el lado de alta presión (págs. 49-50). Incorpora una válvula de sobrepresión para liberar fluido en caso de presión excesiva y proteger el sistema (pág. 49).

## Tipos y características
Utilizados en vehículos industriales, autobuses, vagones de ferrocarril y furgones isotérmicos para transporte refrigerado o congeladores móviles (págs. 49-50). Se fabrican en gamas de 2, 4 o 6 cilindros según las necesidades del equipo (pág. 50). Accionamiento mecánico por correa en autobuses o mediante motor eléctrico en ferrocarril (pág. 50).
Características:
- Alto rendimiento, comprendido entre el 80% y el 90% (pág. 50).
- Elevada robustez y alta fiabilidad (pág. 50).
- Generan oscilaciones de presión y son más ruidosos (pág. 50).

## Principio de funcionamiento
Mecanismo de compresión similar a un motor de combustión pero en ciclo de dos tiempos: admisión de gas al bajar el émbolo y compresión al subir (pág. 50). La admisión y el escape se controlan mediante válvulas de láminas (lámina de aspiración y lámina de impulsión) (págs. 49-50). Es imprescindible que el refrigerante aspirado esté 100% en estado gaseoso; el intento de comprimir líquido destruye mecánicamente el compresor (pág. 49).

📷 IMAGEN: Sección y componentes de un compresor de émbolos de la serie FK 50 para vehículo industrial — Fuente: 6. Compresores.pdf, págs. 49-50

## Valores de trabajo
- Carga de fluido refrigerante de referencia en autobuses: aproximadamente 12 kg de gas (pág. 50).
- Rendimiento volumétrico: 80% - 90% (pág. 50).
- Reparto de lubricante: 50% de la cantidad total de aceite en el compresor (pág. 49).

## Anomalías frecuentes
- Destrucción mecánica por golpe de líquido si ingresa agente frigorífico no evaporado por la toma de aspiración (pág. 49).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Compresor de paletas
entidad: compresor
variante: paletas
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "50-51"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, evaporador]
palabras: [paletas flotantes, rotor excéntrico, fuga lateral, sentido único giro, bajo rendimiento rpm bajas]
```

## Misión
Comprimir el agente frigorífico gaseoso y hacerlo circular mediante el desplazamiento de paletas en cámaras de volumen variable (págs. 50-51).

## Tipos y características
Poco utilizados actualmente en turismos debido a su bajo rendimiento a bajas revoluciones del motor (págs. 50-51).
Características principales:
- Rendimiento entre el 75% y el 90% a velocidades medias y altas (págs. 50-51).
- No precisa válvula de admisión (pág. 50).
- Mantiene la presión de salida muy constante (pág. 50).
- Construcción sencilla con hasta un 30% menos de piezas que otros compresores (pág. 50).
- Tolera mejor los golpes de ariete (líquido) (pág. 51).
- Sentido de giro único: si gira al revés no comprime fluido (pág. 51).

## Principio de funcionamiento
Consta de un rotor con paletas flotantes instalado de forma excéntrica dentro de un cilindro o estator (pág. 51). Al girar el rotor, la fuerza centrífuga desplaza las paletas flotantes hacia el exterior, manteniéndolas en contacto con la carcasa y delimitando cámaras aisladas (pág. 51). La excentricidad del rotor hace que las cámaras aumenten de tamaño en la zona de aspiración (generando depresión para la entrada de gas) y se reduzcan progresivamente hacia la zona de impulsión, comprimiendo el gas y enviándolo al condensador a través de una válvula de impulsión (pág. 51).

📷 IMAGEN: Despiece y sección transversal de un compresor de paletas con indicación de rotor excéntrico, paletas y cámaras — Fuente: 6. Compresores.pdf, pág. 51

## Valores de trabajo
- Rendimiento del compresor: 75% al 90% a régimen medio/alto (pág. 50).
- Reducción de piezas mecánicas: hasta un 30% respecto a otras arquitecturas (pág. 50).

## Anomalías frecuentes
- Fugas internas de gas comprimido a través de las tolerancias laterales de las paletas, necesarias para compensar las dilataciones térmicas durante el funcionamiento (pág. 51).
- Rendimiento insatisfactorio al ralentí o a bajas revoluciones del motor debido a una fuerza centrífuga insuficiente en las paletas (págs. 50-51).

## Comportamiento en avería
Incapacidad total de compresión si el sentido de giro del eje de accionamiento es invertido (pág. 51).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Compresor en espiral
entidad: compresor
variante: espiral
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "51-52"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, aceite-frigorifico]
palabras: [scroll, espiral fija, espiral giratoria, alta tensión, cable naranja, POE, LIN-BUS]
```

## Misión
Impulsar y comprimir el fluido refrigerante (R134a o R1234yf) en vehículos híbridos y eléctricos mediante el movimiento excéntrico de espirales accionadas por un motor eléctrico integrado (págs. 51-52).

## Tipos y características
Compresor de tipo espiral o *scroll* movido por un motor eléctrico interno alimentado con alta tensión procedente de la batería de tracción (págs. 51-52). Puede integrar su propia Unidad de Control comunicada mediante red LIN-BUS con la unidad de climatización (pág. 52). Utiliza obligatoriamente un aceite sintético especial de tipo POE no conductor de la electricidad (pág. 52).

## Principio de funcionamiento
Estructurado por dos espirales engranadas: una espiral fija y una espiral giratoria (pág. 51). El motor eléctrico impulsa la espiral giratoria a través de una excéntrica, describiendo una trayectoria circular orbital (pág. 51). Este movimiento va formando cámaras progresivamente más pequeñas hacia el centro, comprimiendo continuamente el gas refrigerante hacia la salida (pág. 51).

📷 IMAGEN: Sección de un compresor eléctrico en espiral (scroll) indicando terminales de alta/baja tensión, espirales y motor — Fuente: 6. Compresores.pdf, pág. 51

## Valores de trabajo
- Tipo de refrigerante utilizado: R134a o R1234yf (pág. 51).
- Alimentación eléctrica del electromotor: Alta Tensión (HV) procedente de la batería principal (pág. 52).
- Protocolo de comunicación de la unidad integrada: LIN-BUS (pág. 52).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Verificar la ausencia total de tensión en los conectores de alta tensión antes de cualquier manipulación (pág. 52).

## Mantenimiento
- Empleo exclusivo de lubricante POE no conductor (pág. 52).
- Mantenimiento y manipulación reservados estrictamente a personal acreditado como Técnico en Alto Voltaje (HVT) debido a la conexión a la red de alta tensión mediante cableado naranja de seguridad (pág. 52).

```yaml
tipo: fundamento
titulo: Climatización por bomba de calor en vehículos eléctricos
entidad: bomba-calor-climatizacion
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "52-53"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, evaporador, condensador, valvula-expansion]
fabricante: Renault
palabras: [bomba de calor, Renault Zoe, electroválvula 10, electroválvula 11, condensador interior, orificio calibrado]
```

## Objeto
Generación de frío o calor para el habitáculo de un vehículo eléctrico utilizando el mismo circuito de climatización y compresor mediante la inversión funcional de los intercambiadores (págs. 52-53).

## Fundamento
Modificando el trazado hidráulico mediante electroválvulas de conmutación, el refrigerante puede ceder calor en el habitáculo (modo calefacción) o extraer calor del habitáculo (modo refrigeración) sin depender de resistencias eléctricas de alto consumo (págs. 52-53).

## Desarrollo
Componentes del circuito (ejemplo Renault Zoe):
1. Condensador/evaporador externo delantero.
2. Compresor eléctrico de alto voltaje.
3. Filtro/acumulador en tramo de baja.
4. Condensador en el interior del habitáculo.
5. Evaporador en el interior del habitáculo.
6. Válvula expansora de orificio calibrado.
7. Calculador de climatización del automóvil.
8. Calculador para la bomba de calor.
9. Turbina de aire fresco.
10. Electroválvula de conmutación 10.
11. Electroválvula de conmutación 11 (pág. 52).

Modos de funcionamiento:
- Modo Climatización (Refrigerar): se activa la electroválvula (10) creando un *by-pass* que anula la válvula expansora colocada antes del condensador exterior (pág. 53). El compresor hace circular el refrigerante por ambos condensadores (1) y (4). La válvula de orificio calibrado (6) reduce la presión antes del evaporador interior (5). La trampilla de calefacción se cierra y la turbina (9) impulsa aire frío al habitáculo (pág. 53).

📷 IMAGEN: Esquema hidráulico de la bomba de calor funcionando en modo climatización para refrigerar el habitáculo — Fuente: 6. Compresores.pdf, pág. 53

- Modo Calefacción (Calentar): se activa la electroválvula (11) anulando el paso hacia el evaporador interior (pág. 53). El compresor envía gas caliente al condensador interior (4). A continuación, la válvula de orificio calibrado (6) reduce la presión del gas que se dirige al condensador exterior (1), el cual pasa a funcionar como evaporador (pág. 53). El aire impulsado por la turbina (9) se calienta al atravesar el condensador interior (4) y entra caliente al habitáculo (pág. 53).

📷 IMAGEN: Esquema hidráulico de la bomba de calor funcionando en modo calefacción para calentar el habitáculo — Fuente: 6. Compresores.pdf, pág. 53

## Valores de referencia
- Regulación de expansión: válvula de orificio calibrado y filtro/acumulador en circuito de baja (págs. 52-53).

## Errores de concepto frecuentes
- Creer que la bomba de calor de un vehículo eléctrico requiere dos compresores independientes para generar frío y calor (págs. 52-53).

```yaml
tipo: componente
titulo: Compresor de disco oscilante de cilindrada fija
entidad: compresor
variante: disco-oscilante-fijo
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "53-54"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, evaporador, condensador]
palabras: [cilindrada fija, disco oscilante, émbolos concéntricos, válvulas láminas, 800 a 6000 rpm]
```

## Misión
Comprimir un volumen constante de agente frigorífico por cada vuelta de su eje de accionamiento transformando el movimiento rotativo en movimiento alternativo de émbolos (págs. 53-54).

## Tipos y características
Compresores en los que la carrera de los émbolos es invariable (págs. 53-54). Construidos con una arquitectura de entre 3 y 10 émbolos dispuestos de forma concéntrica respecto al eje de impulsión (págs. 53-54). El rendimiento depende de las revoluciones del motor térmico (entre 800 y 6.000 r.p.m.) (pág. 54). Adaptan la producción de frío mediante la conexión y desconexión periódica guiada por un embrague electromagnético (pág. 54).

## Principio de funcionamiento
El eje de impulsión gira accionado por el motor y mueve el disco oscilante (pág. 54). La inclinación fija del disco transforma el giro rotativo en un movimiento lineal alternativo de los émbolos (pág. 54). En la culata opuesta se ubica una placa de válvulas provista de una válvula de lámina de aspiración y otra de impulsión para cada émbolo, las cuales abren y cierran automáticamente por diferencia de presión (pág. 54).

📷 IMAGEN: Sección longitudinal de un compresor de disco oscilante fijo mostrando eje, disco, émbolos y placa de válvulas — Fuente: 6. Compresores.pdf, pág. 53

## Valores de trabajo
- Número de émbolos concéntricos: entre 3 y 10 émbolos (pág. 54).
- Rango de régimen de giro del compresor: de 800 a 6.000 r.p.m. (pág. 54).

## Anomalías frecuentes
- Fluctuar la capacidad de llenado del evaporador debido a las variaciones bruscas de r.p.m. del motor del vehículo (pág. 54).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Acoplamiento de embrague electromagnético del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "54-55"
forma_parte_de: compresor
relacionados: [compresor]
fabricante: Sanden
palabras: [embrague electromagnético, bobina, polea poly-v, placa elástica, juego de montaje, galga]
```

## Misión
Transmitir o interrumpir mecánicamente la fuerza motriz entre la correa del motor térmico y el eje de impulsión del compresor de aire acondicionado (págs. 54-55).

## Tipos y características
Conjunto electromecánico compuesto por:
- Polea exterior con rodamiento de bolas (montada sobre la carcasa del compresor) (pág. 54).
- Placa elástica con plato de acoplamiento (fijada al eje del compresor mediante una tuerca) (pág. 54).
- Bobina electromagnética (fijada a la carcasa del compresor) (pág. 54).
El plato de acoplamiento se fabrica en acero con menos del 0,6% de carbono para evitar que retenga magnetismo remanente tras cortar la corriente (pág. 55).

📷 IMAGEN: Despiece y estados (desactivado y activado) del acoplamiento magnético del compresor — Fuente: 6. Compresores.pdf, págs. 54-55

## Principio de funcionamiento
Con la bobina sin corriente, la polea impulsada por la correa poly-v gira libremente sin mover el eje del compresor (pág. 55). Al alimentar la bobina con 12 V, el campo magnético atrae el plato de la placa elástica contra la cara de la polea, venciendo el juego de montaje y uniendo por rozamiento la polea con el eje de impulsión (pág. 55). Al interrumpirse la corriente, los muelles de la placa elástica separan el plato devolviéndolo a su posición de reposo (pág. 55).

## Valores de trabajo
Juego de montaje obligatorio entre la polea y el plato de acoplamiento:
- Compresores Sanden: entre 0,4 y 0,8 mm (pág. 55).
- Compresores Nippondenso: entre 0,2 y 0,5 mm (pág. 55).
- Composición del plato: acero con bajo contenido en carbono (< 0,6% C) (pág. 55).

## Anomalías frecuentes
- Desgaste por rozamiento, patinado y quemado de la bobina si el compresor ofrece excesiva resistencia mecánica al giro (pág. 55). El embrague no suele ser la causa primera de la avería sino la consecuencia de la dureza del compresor (pág. 55).

## Comportamiento en avería
El patinado continuo por agarrotamiento del compresor genera un fuerte incremento de temperatura que destruye el aislamiento de la bobina electromagnética (pág. 55).

## Cómo comprobarlo
Medir el juego de montaje en reposo utilizando una galga de espesores en tres puntos equidistantes a 120º entre la polea y el plato (pág. 55). Si el valor medido está fuera de tolerancia, corregir añadiendo o quitando arandelas o juntas de papel de ajuste en el tope del eje (pág. 55).

## Mantenimiento
Ajuste del entrehierro o juego de montaje mediante arandelas de reglaje (pág. 55).

```yaml
tipo: componente
titulo: Compresor de disco oscilante autorregulado
entidad: compresor
variante: disco-oscilante-autorregulado
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "55-58"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, valvula-expansion, evaporador]
fabricante: Seat
palabras: [autorregulado, hidráulico, carrera variable, presión de cámara, fuelle 1, fuelle 2, 1.8 a 2 bar]
```

## Misión
Ajustar automáticamente el caudal de refrigerante y la potencia absorbida modificando hidráulicamente la inclinación del disco oscilante para mantener constante la presión de baja (págs. 55-58).

## Tipos y características
Compresores de cilindrada variable regulados mecánicamente por una válvula hidráulica interna (págs. 55-57). Trabajan en un margen continuo de cilindrada desde el 5% hasta el 100% de su capacidad (pág. 56). Mantienen siempre conectado el embrague durante el funcionamiento del climatizador, evitando los tirones y ruidos de acoplamiento (pág. 55). Mantienen la presión de baja estable entre 1,8 y 2 bares, prescindiendo del termostato en el evaporador (pág. 56).

## Principio de funcionamiento
La carrera de los pistones se determina por la diferencia entre la presión reinante en el cárter o cámara del compresor (que actúa en la parte inferior de los émbolos) y la presión de succión o baja presión (que actúa en la cabeza) (pág. 56).
- Válvula reguladora hidráulica: incorpora el fuelle 1 (sometido a la baja presión) y el fuelle 2 (sometido a la alta presión) (págs. 56-57).
- Alta demanda de frío (válvula de expansión muy abierta, presión de baja alta): las presiones comprimen ambos fuelles, la válvula reguladora abre y comunica la cámara del cárter con la admisión de baja (págs. 56-57). La presión de cámara desciende, la baja empuja las cabezas de los émbolos y el disco oscilante aumenta su inclinación al máximo, produciendo carrera máxima y alto caudal (págs. 56-57).
- Baja demanda de frío (válvula de expansión casi cerrada, presión de baja cae): los fuelles se expanden y la válvula reguladora cierra la comunicación (págs. 56, 58). La alta presión ingresa al cárter a través de un taladro estrangulador calibrado, elevando la presión de cámara (págs. 56, 58). Esto reduce la inclinación del disco oscilante a la carrera mínima (~5%), disminuyendo el caudal y la potencia absorbida (págs. 56, 58).

📷 IMAGEN: Esquema del compresor autorregulado en posición de máximo caudal (baja presión en cámara) y mínimo caudal (alta presión en cámara) — Fuente: 6. Compresores.pdf, págs. 56-58

## Valores de trabajo
- Rango de variación de cilindrada: de un 5% a un 100% (pág. 56).
- Posición de reposo de muelles (sin presión): inclinación para un caudal del 40% aprox. (pág. 56).
- Presión de baja estabilizada en funcionamiento: entre 1,8 y 2,0 bares (pág. 56).

| DEMANDA DE FRÍO | VÁLVULA DE EXPANSIÓN | PRESIÓN DE BAJA | SITUACIÓN PRESIÓN | ÁNGULO DE LEVA | CARRERA | CAUDAL | POTENCIA ABSORBIDA |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alta | Muy abierta | Alta | Pc < Ps | Aumenta | Aumenta | Aumenta | Aumenta |
| Baja | Casi cerrada | Baja | Pc > Ps | Disminuye | Disminuye | Disminuye | Disminuye |
(donde Pc = Presión de cámara, Ps = Presión de succión) (pág. 56).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Compresor de disco oscilante regulado con electroválvula
entidad: compresor
variante: disco-oscilante-electrovalvula
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. Compresores.pdf"
paginas: "58-62"
forma_parte_de: circuito-frigorifico
relacionados: [valvula-reguladora-compresor, unidad-control-climatizador]
fabricante: Seat
palabras: [electroválvula exterior, fusible mecánico, disco de arrastre, carrera nula, sin embrague, gomitas]
```

## Misión
Variar de forma continua la cilindrada y la presión de impulsión en función de las órdenes electrónicas de la Unidad de Control mediante la actuación de una electroválvula proporcional (págs. 58-62).

## Tipos y características
Compresores sin acoplamiento magnético (o con él en determinados modelos) cuyo eje gira siempre que el motor térmico esté en marcha (págs. 58-59). Disponen de un sistema de seguridad o "fusible mecánico" integrado en el disco de arrastre para desacoplar la polea si el compresor se agarrota (págs. 59-60). Permiten reducir la cilindrada a cero (carrera nula) cuando se desconecta el aire acondicionado (págs. 58, 61).

## Principio de funcionamiento
El movimiento del motor llega a través de una polea con correa poly-v conectada a un disco de arrastre solidario con el eje por medio de piezas de goma amortiguadoras o láminas metálicas (pág. 59). Una electroválvula modulada electrónicamente modifica el paso de gas entre la alta presión, la baja presión y la cámara del cárter (págs. 58, 61-62):
- Mínimo rendimiento (A/A desconectado o sin demanda): excitación mínima de la electroválvula. Se comunica la alta presión con el cárter, la presión del cárter sube y fuerza al disco oscilante a colocarse en plano (carrera casi nula, 0% caudal) (pág. 61).
- Máximo rendimiento (A/A con alta demanda): excitación máxima de la electroválvula. Se comunica el cárter con la presión de succión (baja), la presión del cárter cae y la presión de baja empuja las cabezas de los émbolos inclinando el disco al máximo (carrera máxima, 100% caudal) (pág. 62).

📷 IMAGEN: Esquema del compresor en posición de mínimo rendimiento (disco plano) y máximo rendimiento (disco inclinado) — Fuente: 6. Compresores.pdf, págs. 61-62

Sistema de seguridad antiderrapante de correa:
Si el compresor se bloquea mecánicamente, el disco de arrastre de chapa se deforma hacia el exterior por unos cortes mecanizados liberando los tacos de goma, o bien se rompen las láminas metálicas de unión, permitiendo que la polea siga girando loca sin romper la correa poly-v (págs. 60-60).

📷 IMAGEN: Detalle del disco de arrastre con cortes de deformación controlada y tacos de goma de seguridad — Fuente: 6. Compresores.pdf, págs. 60-60

## Valores de trabajo
- Rango de cilindrada: de 0% (carrera nula) al 100% (pág. 58).
- Modo de seguridad: liberación mecánica por deformación del disco o rotura de láminas al superar el par crítico de bloqueo (págs. 60-60).

## Anomalías frecuentes
- Rotura accidental del fusible mecánico de seguridad (disco de arrastre) en vehículos con sistema *Start-Stop* o arranques y paradas muy frecuentes si el compresor no está en posición de mínimo rendimiento en el momento del arranque (pág. 60).

## Comportamiento en avería
Si se deforma el disco de arrastre o se rompen sus láminas, la polea gira libremente sin transmitir movimiento al compresor, dejando el sistema de aire acondicionado inoperativo (págs. 60-60).

## Cómo comprobarlo
Inspección visual del disco de arrastre exterior para verificar si presenta deformaciones hacia fuera o rotura de láminas (págs. 60-60).

## Mantenimiento
Existen en el mercado conjuntos de recambio con discos de arrastre reforzados o kits de conversión para adaptar embrague electromagnético tradicional en caso de fallos repetitivos del fusible mecánico (pág. 60).

```yaml
tipo: componente
titulo: Electroválvula de regulación del compresor
entidad: valvula-reguladora-compresor
area: climatizacion
sistema: circuito-frigorifico
codigo: N280
fuente: "6. Compresores.pdf"
paginas: "62-63"
forma_parte_de: compresor
relacionados: [compresor, unidad-control-climatizador]
palabras: [electroválvula regulación, señal PWM, periodo positivo, vástago, posición de seguridad, 2% a 98%]
```

## Misión
Regular la presión en la cámara del cárter del compresor mediante el control electrónico de los pasos de fluido entre alta y baja presión (págs. 62-63).

## Tipos y características
Electroválvula proporcional montada directamente en la carcasa exterior del compresor (págs. 58, 63). Formada por una bobina eléctrica de accionamiento, un núcleo magnético de hierro dulce, un muelle de retorno y un vástago de cierre de orificios (pág. 63). Gobernada directamente por la Unidad de Control de Climatización (pág. 63).

📷 IMAGEN: Esquema interno de la electroválvula de regulación con vástago, núcleo y pasajes de alta/baja presión — Fuente: 6. Compresores.pdf, págs. 62-63

## Principio de funcionamiento
La Unidad de Control excita la bobina con una señal de tensión de frecuencia fija y proporción de periodo variable (señal modulada en anchura de pulso, PWM) (pág. 63):
- Excitación elevada (hasta 98% de periodo positivo): la fuerza magnética desplaza el vástago cerrando el paso de alta presión al cárter y abriendo la comunicación entre cárter y baja presión. La presión de cárter cae y el compresor pasa a máximo rendimiento (pág. 63).
- Excitación reducida (hasta 2% de periodo positivo): la fuerza magnética disminuye y el muelle retrotrae el vástago, comunicando la alta presión con el cárter. La presión en el cárter sube y el compresor pasa a mínimo rendimiento (carrera nula) (pág. 63).

📷 IMAGEN: Oscilogramas de la corriente de excitación PWM al 2% y al 98% para el control de la electroválvula — Fuente: 6. Compresores.pdf, pág. 63

## Valores de trabajo
- Señal de control: frecuencia fija con ciclo de trabajo PWM variable (pág. 63).
- Margen de excitación del periodo positivo: de 2% (mínimo rendimiento) a 98% (máximo rendimiento) (pág. 63).
- Tensión de excitación: impulsos de 0 V a 12 V (pág. 63).

## Anomalías frecuentes
- Cortocircuito o interrupción eléctrica en la bobina de la electroválvula (pág. 63).
- Agarrotamiento mecánico del vástago por suciedad o virutas en el fluido (pág. 63).

## Comportamiento en avería
En caso de avería eléctrica de la electroválvula o corte de la señal de excitación, el muelle desplaza el vástago a la posición de reposo, manteniendo la comunicación de alta presión al cárter. El compresor se queda en posición de mínimo rendimiento (carrera nula) como medida de seguridad para evitar sobrepresiones en el circuito (pág. 63).

## Cómo comprobarlo
Medir con osciloscopio la señal de excitación PWM enviada por la unidad de control entre los terminales de la electroválvula (pág. 63).

## Mantenimiento
En algunos modelos de compresores no existe despiece ni comercialización de la electroválvula como recambio independiente, exigiendo la sustitución completa del compresor en caso de avería de la electroválvula (pág. 63).

COBERTURA: documento «6. Compresores.pdf», páginas 49 a 63 de 63. completo