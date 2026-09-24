```yaml
tipo: fluido
titulo: Gases refrigerantes alternativos R-406a y R-413a
entidad: refrigerante-r134a
variante: mezclas de sustitucion R406a y R413a
area: climatizacion
sistema: fluidos-frigorificos
fabricante: Hella
fuente: "ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx"
paginas: "99"
relacionados: [refrigerante-r134a, sustitucion-compresor]
palabras: [R-406a, R-413a, ISCEON-49, R-600a, gases alternativos, inflamable]
```

## Designación y norma
R-406a y R-413a (denominado comercialmente ISCEON-49). Mezclas de refrigerantes sintéticos desarrolladas como gases de sustitución directa para reconversiones de circuitos de aire acondicionado. (pág. 99).

## Propiedades
- R-406a: compuesto por R-22 (55% +/- 2%), R-142b (41% +/- 1%, parcialmente inflamable) y R-600a (4% +/- 1%, inflamable). (pág. 99).
- R-413a (ISCEON-49): compuesto por R-134a (88% +/- 2%), R-218 (9% +/- 1%) y R-600a (3% +/- 1%, inflamable). (pág. 99).

## Dónde se usa y cantidades
Se utilizan en instalaciones frigoríficas de automoción como gases de sustitución para reconversión de sistemas antiguos. (pág. 99).

## Compatibilidades y mezclas prohibidas
Contienen componentes inflamables (como el isobutano R-600a al 3%-4%) y parcialmente inflamables (R-142b al 41%), por lo que requieren precauciones especiales de manejo. (pág. 99).

## Identificación
Especificados por su denominación comercial R-406a y R-413a (ISCEON-49) en los recipientes de almacenamiento y fichas técnicas de composición. (pág. 99).

## Manipulación, almacenamiento y residuos
No documentado en fuentes. (pág. 99).

## Riesgos y normativa
Riesgo de inflamabilidad por la presencia de isobutano (R-600a) en la mezcla. (pág. 99).

---

```yaml
tipo: componente
titulo: Compresor Denso 6 SEU 12 de cilindrada variable
entidad: compresor
variante: denso 6 seu 12
area: climatizacion
sistema: circuito-frigorifico
codigo: 6 SEU 12
fabricante: Denso
fuente: "ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx"
paginas: "69-82"
relacionados: [valvula-reguladora-compresor, unidad-control-climatizador, evaporador]
palabras: [Denso 6 SEU 12, regulación externa, electroválvula, 500 Hz, ciclo de trabajo, 2% a 98%]
```

## Misión
Ajustar de forma continua la cilindrada y el caudal de refrigerante impulsado mediante regulación electrónica externa para adaptarse a la demanda térmica de los ocupantes, la temperatura exterior y las cargas del habitáculo. (págs. 69, 72).

## Tipos y características
Compresor alternativo de pistones impulsados por disco oscilante, sin embrague electromagnético, equipado con una válvula de regulación externa fijada en la tapa posterior. En la válvula confluyen la presión de la carcasa del cárter (A), el lado de alta presión (B) y el lado de baja presión (C). (págs. 69, 76, 80).

## Principio de funcionamiento
La UCE de climatización gobierna la electroválvula enviando una señal cuadrada de 500 Hz con modulación por ancho de impulsos (PWM). Debido a la alta frecuencia, el empujador de la válvula trabaja en estado flotante.
- Mínimo rendimiento (2% de activación): la válvula permanece totalmente abierta sin corriente, comunicando la alta presión con el cárter (A y B igualan presiones). El muelle de recuperación endereza el disco oscilante a mínima carrera de los émbolos. (págs. 74, 81).
- Máximo rendimiento (98% de activación): la electroválvula se cierra impulsada por la UCE, separando el cárter (A) de la alta presión (B). La presión del cárter disminuye hacia la baja presión y la fuerza de alta presión inclina el disco oscilante a máxima carrera. (págs. 74, 82).

## Valores de trabajo
- Frecuencia de la señal de activación PWM: 500 Hz. (pág. 78).
- Margen de ciclo de trabajo (señal de activación): entre +2% (mínima carga) y +98% (plena carga). (págs. 74, 82).

## Anomalías frecuentes
Bloqueo o agarrotamiento mecánico de la electroválvula de regulación externa por suciedad o limaduras en el circuito. (págs. 82, 286).

## Comportamiento en avería
- Si la electroválvula se bloquea abierta (o sin corriente): el compresor se mantiene en posición de mínima carga (2%) y no enfría. (págs. 81, 286).
- Si la electroválvula se bloquea cerrada: el compresor trabaja permanentemente a máxima carga (98%), pudiendo provocar la congelación del evaporador. (págs. 82, 254).

## Cómo comprobarlo
1. Analizar con osciloscopio la señal cuadrada de 500 Hz enviada por la UCE a la electroválvula. (pág. 78).
2. Consultar el porcentaje de activación PWM en los bloques de valores de medición del equipo de diagnosis. (págs. 73, 78).

📷 IMAGEN: Sección del compresor Denso 6 SEU 12 mostrando el disco oscilante, émbolos y la válvula de regulación externa de alta frecuencia — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 70

## Mantenimiento
Control del estado de limpieza del refrigerante y aceite del circuito. Si la electroválvula falla por suciedad, es obligatorio lavar el circuito y sustituir el filtro deshidratador. (págs. 82, 287).

---

```yaml
tipo: procedimiento
titulo: Adaptación eléctrica para sustituir un compresor de regulación externa por uno con embrague electromagnético
entidad: sustitucion-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Hella
fuente: "ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx"
paginas: "84-88"
relacionados: [compresor, embrague-compresor, unidad-control-climatizador]
palabras: [sustitución de compresor, regulación externa, relé de mando, Opel, señal por pulsos, embrague electromagnético]
```

## Objeto y alcance
Adaptar la instalación eléctrica del vehículo para permitir el montaje de un compresor equipado con embrague electromagnético tradicional en sustitución de un compresor original de regulación externa. (págs. 84, 87).

## Condiciones previas
1. Compresor de regulación externa desmontado del vehículo.
2. Identificación de los dos cables de alimentación de la antigua electroválvula de regulación: un cable de +12 V y un cable de masa (-) por pulsos PWM. (págs. 84, 87).

## Equipo y material
Relé automotriz de 4 terminales (contactos 30, 85, 86, 87), portafusible aéreo con fusible de protección, cableado eléctrico, terminales y equipo de diagnosis del vehículo. (págs. 84, 87).

## Pasos
Opción A — Proceso recomendado por el fabricante (Opel):
1. Conectar el cable de +12 V procedente de la línea de la antigua válvula al cable positivo (marrón) del embrague del compresor nuevo. (pág. 84).
2. Conectar un cable positivo (+) directo de batería a través de un fusible al terminal 86 del relé. (pág. 84).
3. Conectar un cable negativo (-) directo de batería al terminal 30 del relé. (pág. 85).
4. Conectar el cable de masa (-) por pulsos procedente de la antigua válvula al terminal 85 del relé. (pág. 85).
5. Conectar la salida del terminal 87 del relé al cable de masa (negro/blanco) del nuevo compresor. (pág. 85).
6. Reprogramar la UCE del vehículo mediante el equipo de diagnosis original para modificar la señal de salida de negativo por pulsos (-) a negativo (-) continuo. (pág. 85).

Opción B — Proceso alternativo extraoficial (sin reprogramación de UCE):
1. Conectar el cable negativo (-) del nuevo compresor directamente a masa/batería. (pág. 87).
2. Conectar positivo (+) de batería con fusible al terminal 30 del relé y masa (-) de batería al terminal 86 del relé. (pág. 87).
3. Conectar el cable de +12 V procedente de la antigua válvula al terminal 85 del relé (para excitar la bobina del relé). (pág. 88).
4. Conectar el terminal 87 del relé al cable positivo del embrague del nuevo compresor. (pág. 88).
5. Aislar y anular el cable de negativo por pulsos (-) de la antigua válvula. (pág. 88).

## Valores de referencia
Tensión de excitación del relé y del embrague: +12 V CC. (págs. 84, 87).

## Verificación final
Arrancar el motor, conectar el acondicionador de aire y comprobar que el relé conmuta y el embrague electromagnético acopla la polea sin tirones ni falsos acoplamientos. (págs. 84-88).

## Seguridad y normativa
Instalar siempre un fusible aéreo de amperaje adecuado en la toma positiva directa de la batería para evitar cortocircuitos. (págs. 84, 87).

---

```yaml
tipo: fluido
titulo: Aceite sintético universal PAO-Oil 68
entidad: aceite-frigorifico
variante: PAO-Oil
area: climatizacion
sistema: fluidos-frigorificos
fabricante: Hella
fuente: "ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx"
paginas: "96, 411-412"
relacionados: [aceite-frigorifico, compresor, refrigerante-r134a]
palabras: [PAO-Oil, polialfaolefina, no higroscópico, universal, compresores eléctricos]
```

## Designación y norma
Aceite sintético base Polialfaolefina (PAO-Oil 68 / AA1). Lubricante frigorífico multiuso para instalaciones de climatización en automoción. (págs. 96, 411-412).

## Propiedades
- No es higroscópico: a diferencia del aceite PAG, no absorbe la humedad del aire ambiental, eliminando el riesgo de formación de ácidos corrosivos en el circuito. (pág. 412).
- Amplio margen de viscosidad e índice de fluidez constante. (págs. 411-412).
- Alta capacidad de separación de fases y excelente estabilidad térmica. (págs. 411-412).

## Dónde se usa y cantidades
Se utiliza en compresores de aire acondicionado de turismos y vehículos industriales, incluyendo compresores de accionamiento eléctrico de alto voltaje. La cantidad se distribuye por regla general: 50% en el compresor, 20% en el evaporador, 10% en el condensador, 10% en el filtro deshidratador y 10% en las mangueras. (págs. 97, 412, 413).

## Compatibilidades y mezclas prohibidas
Compatible y miscible con todos los lubricantes de climatización (PAG, Ester, aceite mineral) y con los agentes refrigerantes R12, R134a y R1234yf. Es apto para compresores eléctricos. (pág. 412).

## Identificación
Envase de plástico blanco etiquetado con la marca PAO-Oil 68 (ISO Grade 68). (págs. 96, 411).

## Manipulación, almacenamiento y residuos
Al no ser higroscópico, simplifica el almacenamiento en el taller sin degradarse al contacto breve con el aire. Almacenar en su envase original y gestionar los restos usados como residuo industrial de aceite sintético. (págs. 411-412).

## Riesgos y normativa
No genera ácido fluorhídrico por hidratación al no absorber agua del ambiente, protegiendo las juntas y componentes metálicos del compresor. (pág. 412).

---

```yaml
tipo: procedimiento
titulo: Lavado del circuito frigorífico con estación Hella ACTT 200 y montaje de tamiz de protección
entidad: lavado-circuito
area: climatizacion
sistema: circuito-frigorifico
fabricante: Hella
fuente: "ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx"
paginas: "208-209, 218-221, 556-557, 565-568"
relacionados: [compresor, valvula-expansion, filtro-deshidratador]
palabras: [lavado de circuito, Hella ACTT 200, recipiente transparente, tamiz de aspiración, limaduras, gripado]
```

## Objeto y alcance
Limpiar y arrastrar del interior de las tuberías e intercambiadores las limaduras metálicas, aceites degradados, humedad y acidez producidos tras el gripado o fallo mecánico grave de un compresor. (págs. 214, 221).

## Condiciones previas
1. Desmontar del circuito los elementos de paso restringido: el compresor, la válvula de expansión (o tubo de expansión) y el filtro deshidratador. (págs. 217, 563).
2. Instalar los adaptadores puente específicos en las conexiones del compresor y de la válvula de expansión. (págs. 217, 218).

## Equipo y material
Estación de servicio Hella ACTT 200 (o SECUsmart/SECUmobile) equipada con función de lavado, módulo visor transparente de decantación y juego de mangueras (azul, roja y amarilla). (págs. 209, 218-219).

## Pasos
1. Conectar la manguera azul desde la salida del dispositivo visor de lavado hasta la toma de entrada de la estación de servicio. (págs. 218, 565).
2. Conectar la manguera roja con la válvula antirretorno a la entrada de alta presión del circuito de aire acondicionado del vehículo. (págs. 220, 567).
3. Conectar la manguera amarilla desde la salida de baja presión del circuito hasta la entrada del dispositivo visor transparente de lavado. (págs. 220, 567).
4. Iniciar el ciclo de lavado automático impulsando el líquido de lavado a través de las canalizaciones y observando la extracción de suciedad y partículas en las botellas de cristal transparentes del visor. (págs. 218-219).
5. Tras completar el lavado y secado con nitrógeno, desmontar los adaptadores puente. (pág. 217).
6. Insertar obligatoriamente un tamiz o filtro de malla en el tubo de aspiración (lado de baja presión) del compresor antes de conectar las tuberías. (págs. 221, 568).
7. Instalar un compresor nuevo (o revisado), una válvula de expansión nueva y un filtro deshidratador nuevo. (págs. 221, 246).

📷 IMAGEN: Módulo visor transparente de decantación de la estación Hella ACTT 200 conectado al condensador mediante las mangueras de lavado — Fuente: ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx, pág. 219

## Valores de referencia
No documentado en fuentes. (págs. 208-221).

## Verificación final
Verificar que el refrigerante extraído en el visor transparente sale totalmente limpio y sin limaduras, ejecutar el vacío del circuito y comprobar la ausencia de fugas. (págs. 219, 221).

## Seguridad y normativa
Es imprescindible insertar el tamiz de protección en la aspiración del compresor tras el lavado para impedir que limaduras residuales atrapadas en los rincones del evaporador entren al compresor provocando un nuevo gripado. Instalar el tamiz sin haber lavado previamente el circuito provocará un efecto de esmerilado que destruirá el compresor a medio plazo. (págs. 221, 568).

COBERTURA: documento «ZZAA AUTOMOCION 1 Enero 2010 HELLA.pptx», páginas 1 a 288 de 288. [completo]