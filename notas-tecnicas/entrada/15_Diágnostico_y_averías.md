```yaml
tipo: diagnostico
titulo: Comprobación de presiones de trabajo y rendimiento
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "123-125"
relacionados: [compresor, evaporador, condensador, valvula-expansion]
palabras: [presiones de trabajo, compresor variable, compresor fijo, aireadores, prueba de rendimiento]
```

## Síntoma
Presiones de Alta y Baja fuera de las tolerancias prescritas o temperatura de salida de aire en aireadores insuficiente. (págs. 123-125)

## Causas posibles
- Carga de refrigerante incorrecta (baja o excesiva).
- Funcionamiento anómalo según el tipo de compresor (fijo o variable).
- Desviación motivada por variaciones de la temperatura ambiente exterior. (págs. 123-125)

## Cómo separar las causas
Para realizar el diagnóstico correcto, seguir los siguientes pasos:
1. Conectar las mangueras de Alta y Baja al vehículo asegurando que todas las válvulas de la estación de carga permanecen cerradas.
2. Arrancar el motor y mantenerlo a 1.500 rpm con la turbina de aire fresco a máxima velocidad.
3. Para la prueba de rendimiento: activar la recirculación, dirigir el aire a los difusores centrales, cerrar las salidas laterales y colocar un termómetro en los aireadores centrales.
4. Comparar las lecturas obtenidas en el manómetro y en el termómetro con las tablas de valores según la temperatura exterior registrada. (págs. 123-125)

## Valores de referencia
- Compresor variable: Alta constante a 8 - 10 bar (puede alcanzar 12 bar con temperatura exterior muy alta); Baja constante a 2 bar (o 1,8 - 2,2 bar en manómetro hidraúlico).
- Compresor fijo: Alta variable entre 10 y 20 bar; Baja variable entre 0,5 y 2,5 bar (o 1 - 2 bar en manómetro hidráulico).
- Prueba de rendimiento (temperatura exterior frente a temperatura en aireadores):
  - 15 ºC exterior: 2 - 4 ºC en aireadores.
  - 20 ºC exterior: 4 - 6 ºC en aireadores.
  - 26 ºC exterior: 4 - 7 ºC en aireadores.
  - 32 ºC exterior: 5 - 8 ºC en aireadores.
  - 37 ºC exterior: 7 - 10 ºC en aireadores.
- Compresor variable eléctrico a 1.500 - 1.700 rpm:
  - Carga normal (550 g): Baja 1,4 bar; Alta 12 bar; Aireadores 1,7 ºC; Reposo 5 bar.
  - Carga baja (300 g): Baja 1,8 bar; Alta 9 - 10 bar; Aireadores 2,4 ºC; Reposo 4,5 bar.
  - Carga excesiva (1.000 g): Baja 1,6 bar; Alta 10,5 bar; Aireadores 1,1 ºC; Reposo 5 bar.
- Compresor fijo a 1.500 rpm (R134a):
  - Carga normal: Baja 1,5 - 2,5 bar; Alta 13,5 - 15 bar.
  - Carga baja: Baja 0,5 - 1 bar; Alta 6,5 - 9 bar (peligro de congelación si la Baja desciende de 0,5 bar al acelerar).
  - Carga excesiva: Baja 2,5 - 3,5 bar; Alta 19 - 24 bar.
- Presiones en reposo según temperatura exterior:
  - 15 ºC: 3,9 bar.
  - 20 ºC: 4,7 bar.
  - 25 ºC: 5,5 bar.
  - 30 ºC: 6,6 bar.
  - 35 ºC: 7,5 bar.
  - 40 ºC: 8,8 bar.
  - 45 ºC: 9,8 bar. (págs. 123-125)

## Verificación tras la reparación
Comprobar que con la carga nominal de refrigerante las presiones de Alta y Baja se estabilizan dentro de los rangos especificados y la temperatura de salida en los aireadores se ajusta a la tabla de rendimiento. (págs. 123-125)

---

```yaml
tipo: procedimiento
titulo: Desconexión del equipo de carga y recuperación de mangueras
entidad: desconexion-mangueras-carga
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "123-124"
relacionados: [carga-refrigerante, recuperacion-refrigerante]
palabras: [desconexion mangueras, aspiracion refrigerante, calibración manómetros, valvula alta, valvula baja]
```

## Objeto y alcance
Recuperar el refrigerante alojado en el interior de las mangueras de servicio tras una intervención y evacuar la presión acumulada en los manómetros. (págs. 123-124)

## Condiciones previas
Sistema de aire acondicionado del vehículo en pleno funcionamiento. (pág. 124)

## Equipo y material
Estación de carga de aire acondicionado y puente de manómetros de la unidad. (págs. 123-124)

## Pasos
1. Con el aire acondicionado funcionando, desconectar la manguera de Alta del vehículo.
2. Abrir la válvula de Alta de la estación de carga.
3. Abrir lentamente la válvula de Baja para que el compresor aspire el refrigerante acumulado en las tuberías de la estación.
4. Cuando las presiones se igualen en el manómetro, cerrar las válvulas de Alta y de Baja.
5. Desconectar la manguera de Baja del vehículo.
6. Recuperar el refrigerante residual de los tubos mediante la estación hasta que las agujas de los manómetros queden situadas en cero. (pág. 124)

## Valores de referencia
- Lectura final exigida en manómetros de Alta y Baja: 0 bar. (pág. 124)

## Verificación final
Constatar que los manómetros han quedado ajustados a cero para evitar que se descalibren o registren presiones erróneas en intervenciones futuras. (pág. 124)

## Seguridad y normativa
No documentado en fuentes.

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías hidráulicas por combinación de presiones
entidad: diagnostico-presiones-hidraulicas
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "126"
relacionados: [compresor, valvula-expansion, condensador, electroventilador-condensador, filtro-deshidratador]
palabras: [averias hidraulicas, combinacion presiones, compresor averiado, obstruccion linea, aireadores]
```

## Síntoma
Temperatura en aireadores insuficiente o igual a la ambiental, tubería de baja más fría que el evaporador, hielo en el filtro o tuberías de líquido, o variaciones anómalas de las agujas de los manómetros. (pág. 126)

## Causas posibles
- Alta normal y Baja normal: exceso de aceite en el sistema, contaminación por aire/humedad, o válvula de expansión cerrada.
- Tubería de baja más fría que la carcasa del evaporador: válvula de expansión demasiado abierta.
- Alta igual a Baja (presiones igualadas): falta de compresión por problema mecánico del compresor, fallo en válvulas/juntas de descarga, o baja cantidad de refrigerante en el circuito.
- Presión de Alta desproporcionada: exceso de refrigerante, condensador obstruido, o avería en el electroventilador.
- Manguito de baja más frío que el evaporador: obstrucción mecánica en la zona de baja presión.
- Hielo en la línea de líquido o en el filtro deshidratador: obstrucción en la tubería de líquido o filtro deshidratador bloqueado. (pág. 126)

## Cómo separar las causas
- Si la presión de Alta es igual a la de Baja y ambas bajan al enfriar el condensador con agua: confirma exceso de refrigerante, condensador sucio o avería en el electroventilador.
- Si las presiones de Alta y Baja se equilibran rápidamente al parar el compresor y fluctúan durante el funcionamiento: indica partícula bajo la válvula de descarga, fallo en las juntas o avería interna en la placa de válvulas.
- Si la tubería de baja está más fría que la carcasa del evaporador: sustituir la válvula de expansión por estar bloqueada en posición abierta.
- Si aparece hielo sobre el filtro deshidratador: sustituir el filtro y reparar la obstrucción en la línea de líquido. (pág. 126)

## Valores de referencia
- Presiones nominales de trabajo en compresor fijo: Baja 1 - 2 kg/cm2; Alta 10 - 15 kg/cm2.
- Presiones nominales de trabajo en compresor variable: Baja 1,8 - 2,2 kg/cm2; Alta 8 - 12 kg/cm2. (pág. 126)

## Verificación tras la reparación
Recuperar el refrigerante, realizar un vacío profundo, cargar la cantidad exacta de aceite nuevo y refrigerante prescrita por el fabricante y verificar que desciende la temperatura en los aireadores. (pág. 126)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías mecánicas e internas del compresor
entidad: diagnostico-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "126-130"
relacionados: [compresor, embrague-compresor, valvula-expansion, filtro-deshidratador]
palabras: [averia compresor, aceite rojo, aceite negro, aceite purpurina, plato oscilante, placa de valvulas]
```

## Síntoma
Alta y Baja presión igualadas con el compresor en giro, ruidos intensos, gripaje mecánico o alteración en el color y estado del aceite lubricante. (págs. 126-130)

## Causas posibles
- Fallos en el embrague electromagnético o en el sistema de seguridad en compresores sin embrague.
- Averías internas: fallo en electroválvula de regulación, rotura en la placa de válvulas de admisión/descarga, desgaste en pistones o fugas internas.
- Mala manipulación en el montaje: forzado de sujetadores, falta de deslizamiento de casquillos, daños en roscas de fijación, golpes en la polea/plato o grietas en orejetas.
- Malas condiciones de servicio: falta de lubricante/refrigerante (por fuga, obstrucción de tubos o fallo de válvula de expansión), entrada de refrigerante en estado líquido (golpe de líquido por carga incorrecta o válvula abierta), suciedad en el circuito, presencia de humedad, o falta de uso (fugas por el retén del eje). (págs. 126-128)

## Cómo separar las causas
- Verificar si el compresor gira realmente descartando un fallo del embrague electromagnético o del fusible térmico de seguridad.
- Analizar el estado y color del aceite extraído del circuito:
  - Aceite rojo: indica presencia de restos de humedad que han producido ataque ácido sobre los componentes internos.
  - Aceite negro: señala desgastes severos o gripados por falta de lubricación o exceso de temperatura.
  - Aceite purpurina: demuestra la presencia de partículas metálicas por golpes o desgaste de componentes internos.
- Inspeccionar las piezas dañadas tras el desmontaje del compresor:
  - Desgastes en el plato oscilante o rótula de pistón soldada/deformada: originados por falta de aceite o de refrigerante de retorno.
  - Partícula bajo la válvula de descarga o lámina rota: presencia de suciedad dura en la cámara de compresión.
  - Bielas dobladas: provocadas por presencia de partículas bajo la válvula de descarga o entrada de refrigerante en estado líquido.
  - Pistones marcados: entrada de suciedad o partículas sólidas en los cilindros.
  - Ataque ácido en la cabeza de los pistones: corrosión motivada por humedad en el circuito. (págs. 127-130)

## Valores de referencia
- Estado del aceite en circuito sano: transparente, sin emulsiones, sin olor a quemado y sin partículas metálicas. (págs. 127, 130)

## Verificación tras la reparación
Si se detecta suciedad, ferricha o aceite de color rojo, negro o purpurina, es obligatorio realizar la limpieza exhaustiva del circuito antes de montar el compresor nuevo y sustituir sin excepción la válvula de expansión y el filtro deshidratador. (págs. 127, 131)

---

```yaml
tipo: procedimiento
titulo: Lavado del circuito frigorífico
entidad: lavado-circuito
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "127, 128, 131, 132"
relacionados: [compresor, valvula-expansion, filtro-deshidratador, vacio-circuito]
palabras: [lavado circuito, aire seco, nitrogeno liquido, deshumedecer, ferricha]
```

## Objeto y alcance
Limpiar exhaustivamente el interior de tubos, manguitos, condensador y evaporador para eliminar ferricha, partículas metálicas, humedad o aceite deteriorado antes de instalar un compresor nuevo. (págs. 127, 131)

## Condiciones previas
Refrigerante recuperado completamente y desmontados del circuito el compresor averiado, la válvula de expansión y el filtro deshidratador. (págs. 127, 131)

## Equipo y material
Instalación de aire seco y botella de nitrógeno líquido. (pág. 127)

## Pasos
1. Desconectar los racores de todos los tubos, manguitos, condensador y evaporador.
2. Hacer pasar aire seco por el interior de cada componente para arrastrar los restos de suciedad gruesa y aceite.
3. Hacer pasar nitrógeno líquido para deshumedecer y limpiar las canalizaciones, aplicando el flujo en sentido contrario a la circulación habitual del refrigerante.
4. Tras finalizar la limpieza, instalar conjuntamente el compresor nuevo, la válvula de expansión nueva y el filtro deshidratador nuevo. (págs. 127, 131)

## Valores de referencia
- Ausencia total de suciedad gris, partículas metálicas o restos de humedad en la superficie interna de las tuberías. (págs. 127, 128)

## Verificación final
Efectuar un vacío profundo en el circuito con una duración mínima de 45 minutos para garantizar la evaporación y eliminación de cualquier resto de humedad o condensación. (págs. 128, 132)

## Seguridad y normativa
No documentado en fuentes.

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de ruidos anómalos en el compresor
entidad: ruidos-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "131"
relacionados: [compresor, embrague-compresor]
palabras: [ruidos compresor, desembragado, embragado, holgura polea, golpe de liquido, patinado]
```

## Síntoma
Percepción de ruidos extraños, golpeteos o chirrido en la zona del compresor con el motor a ralentí o al conectar la climatización. (pág. 131)

## Causas posibles
- Con el compresor desembragado:
  - Contacto entre la placa frontal y la polea.
  - Oscilación del rodamiento del rotor a causa de un golpe externo.
  - Rozamiento de la polea con algún elemento extraño.
- Con el compresor embragado:
  - Cantidad incorrecta de refrigerante en el circuito.
  - Compresión de refrigerante en estado líquido (golpe de líquido).
  - Contacto de las tuberías de climatización con el chasis o la carrocería.
  - Patinado del embrague por presencia de aceite o grasa en sus caras de fricción.
  - Partícula atrapada bajo la válvula de descarga.
  - Daños mecánicos internos en el compresor. (pág. 131)

## Cómo separar las causas
- Desconectar el climatizador y verificar si el ruido persiste con el compresor desembragado:
  - Si hay ruido desembragado: revisar la distancia de separación entre la polea y el plato (Sanden = 0,4 - 0,8 mm; otras marcas = 0,2 - 0,5 mm) o sustituir el rodamiento/embrague.
- Conectar el climatizador y evaluar las causas con el compresor embragado:
  - Efectuar un diagnóstico de presiones de trabajo para verificar si la cantidad de refrigerante es incorrecta o existe golpe de líquido.
  - Inspeccionar visualmente el trazado de las tuberías para eliminar contactos rígidos con el chasis.
  - Desmontar el plato frontal y limpiar las caras de fricción si se detecta grasa o aceite.
  - Si las presiones fluctúan y el ruido se mantiene internamente: desmontar el compresor para inspeccionar los componentes mecánicos. (pág. 131)

## Valores de referencia
- Distancia entre la polea y el plato frontal:
  - Compresores Sanden: 0,4 - 0,8 mm.
  - Otras marcas: 0,2 - 0,5 mm. (pág. 131)

## Verificación tras la reparación
Verificar a ralentí la ausencia de vibraciones y ruidos extraños tanto en posición desembragada como tras acoplar el embrague del compresor. (pág. 131)

---

```yaml
tipo: procedimiento
titulo: Sustitución y montaje de un compresor nuevo
entidad: sustitucion-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "131-132"
relacionados: [compresor, valvula-expansion, filtro-deshidratador, aceite-frigorifico, vacio-circuito]
palabras: [sustitucion compresor, adicion aceite, vacio profundo, rodaje inicial, 1000 rpm]
```

## Objeto y alcance
Sustituir el compresor dañado ajustando las dosis de aceite, garantizando la estanqueidad del circuito y ejecutando el protocolo de rodaje inicial. (págs. 131-132)

## Condiciones previas
Refrigerante recuperado registrando las cantidades de gas y aceite extraídas, y verificado el circuito para determinar si requiere lavado previo. (págs. 131-132)

## Equipo y material
Estación de carga, compresor nuevo, válvula de expansión nueva, filtro deshidratador nuevo, recipiente con aceite frigorífico y llaves dinamométricas. (págs. 131-132)

## Pasos
1. Desmontar la correa de accesorios y los tubos de entrada y salida del compresor inservible.
2. Desmontar el compresor viejo y taponar los racores del circuito para evitar la entrada de suciedad.
3. Inspeccionar el compresor sustituido (analizar color/olor de aceite, presencia de partículas y distancia entre polea y plato).
4. Extraer el aceite del compresor nuevo.
5. Ajustar e reintroducir en el cárter del compresor nuevo una cantidad de aceite igual a la extraída manualmente del compresor viejo, más la recuperada durante la fase de descarga, más un añadido de 20 cc.
   (En caso de haber sustituido otros componentes adicionales, añadir también: 50 cc si se cambió el evaporador, 30 cc por el condensador, 10 cc por el filtro y 10 cc por cada tubo. Si se realizó el lavado completo del circuito, introducir la cantidad total prescrita por el fabricante).
6. Montar el compresor nuevo, la válvula de expansión nueva y el filtro deshidratador nuevo.
7. Realizar un vacío profundo al circuito con una duración mínima de 45 minutos y verificar la estanqueidad.
8. Cargar el circuito con la masa de refrigerante indicada por el fabricante, introduciéndola por el lado de Alta presión.
9. Verificar la tensión de la correa de accesorios y comprobar la ausencia de ruidos a ralentí.
10. Conectar el A/C, verificar el correcto acoplamiento del plato y realizar el rodaje sin superar las 1.000 rpm durante los primeros 5 minutos de funcionamiento. (págs. 131-132)

## Valores de referencia
- Suplementos de aceite por componente sustituido:
  - Evaporador: 50 cc.
  - Condensador: 30 cc.
  - Filtro: 10 cc.
  - Tubo: 10 cc.
  - Base de rellenado: aceite extraído + 20 cc.
- Tiempo mínimo de vacío: 45 minutos.
- Régimen máximo en los primeros 5 minutos de rodaje: 1.000 rpm. (págs. 131-132)

## Verificación final
Comprobar las presiones de trabajo en el puente de manómetros y verificar que la temperatura de salida de aire en los aireadores es correcta. (pág. 132)

## Seguridad y normativa
No documentado en fuentes.

---

```yaml
tipo: diagnostico
titulo: Autodiagnóstico del sistema de climatización automática
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "15. Diágnostico y averías.pdf"
paginas: "133-134"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-temperatura-exterior, transmisor-presion]
palabras: [autodiagnostico, memoria averias, test actuadores, ajuste basico, valores individuales]
```

## Síntoma
Registros de avería memorizados en la centralita de climatización, mal funcionamiento de servomotores o indicación anómala de parámetros en el panel de mandos. (págs. 133-134)

## Causas posibles
- Averías fugaces o esporádicas: fallos temporales de comunicación o lecturas puntuales fuera de rango.
- Averías actuales o permanentes: interrupciones de circuito, cortocircuitos o fallos en sensores y actuadores.
- Fallos en sensores específicos (memorizados en la UCE del climatizador) o en sensores compartidos (memorizados en Cuadro de Instrumentos para temperatura exterior y velocidad; o en Red de A bordo para marcha atrás, alternador e iluminación). (págs. 133-134)

## Cómo separar las causas
Conectar una máquina de diagnosis al terminal del vehículo y ejecutar las siguientes funciones:
1. Consultar la memoria de averías: diferenciar averías esporádicas (se borran tras 30 o 40 arranques si no se repiten) de averías permanentes (solo se borran tras reparar la pieza y ejecutar "borrar memoria").
2. Diagnóstico de elementos actuadores:
   - Test de segmentos: ilumina los dígitos del display.
   - Velocidades del electroventilador: verifica las distintas velocidades o la regulación continua.
   - Turbina de aire: acciona el motor en todo su margen de trabajo.
   - Embrague del compresor: conecta y desconecta cíclicamente el embrague.
   - Motores de trampillas: activa los servomotores para comprobar la variación de temperatura y el reparto del flujo.
3. Ajuste básico: activa todos los servomotores de principio a fin memorizando sus posiciones límite de mínimo y máximo (obligatorio al cambiar un servomotor o la UCE del climatizador).
4. Lectura de valores de funcionamiento individual: comprobar los valores teóricos y reales de los servomotores (temperatura, central, deshielo, recirculación), las lecturas de los sensores de temperatura (exterior, entrada de aire, habitáculo, refrigerante), el porcentaje de radiación del fotosensor solar, la tensión de alimentación, la señal de alta presión del sensor MAP y la activación de la electroválvula del compresor. (págs. 133-134)

## Valores de referencia
- Borrado automático de averías esporádicas: 30 a 40 arranques del sistema sin reproducirse el fallo.
- Tensión de alimentación en diagnosis: aproximadamente igual a la tensión real de batería. (págs. 133-135)

## Verificación tras la reparación
Borrar la memoria de averías, realizar el ajuste básico de los servomotores y comprobar en el bloque de valores de medición que las lecturas reales se corresponden con las teóricas al accionar los mandos del climatizador. (págs. 133-134)

---

COBERTURA: documento «15. Diágnostico y averías.pdf», páginas 123 a 134 de 134. [completo]