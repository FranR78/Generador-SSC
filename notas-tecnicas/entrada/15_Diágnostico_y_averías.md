```yaml
tipo: procedimiento
titulo: Comprobación de presiones de trabajo y rendimiento de la climatización
entidad: comprobacion-presiones-y-rendimiento-climatizador
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "123-124"
relacionados: [lectura-manometros, estacion-carga]
palabras: [presiones de trabajo, prueba de rendimiento, 1500 rpm, difusores centrales, recuperacion mangueras]
```

## Objeto y alcance
Verificación práctica de las presiones hidráulicas de alta y baja presión y del salto térmico en los aireadores para evaluar el rendimiento global del equipo de aire acondicionado y desconexión segura del equipo de carga sin descalibrar manómetros (págs. 123-124).

## Condiciones previas
- Vehículo estacionado con el motor a temperatura de servicio (págs. 123-124).
- Estación de carga conectada con todas sus válvulas cerradas (pág. 123).

## Equipo y material
- Estación de servicio / puente de manómetros de A/C con mangueras de alta y baja presión (pág. 123).
- Termómetro digital de inserción para difusores de aire (pág. 123).

## Pasos
1. Conectar las mangueras de "ALTA" y "BAJA" del equipo de carga a las tomas de servicio del vehículo manteniendo cerradas todas las válvulas de la máquina (pág. 123).
2. Arrancar el motor del vehículo y mantener el régimen a 1.500 r.p.m. (pág. 123).
3. Conectar el aire acondicionado seleccionando la velocidad máxima en la turbina de aire fresco y activando el modo de recirculación (págs. 123-124).
4. Dirigir el flujo de aire hacia los difusores centrales y cerrar totalmente las salidas laterales (pág. 124).
5. Colocar el termómetro en el interior de los difusores centrales para medir la temperatura del aire tratado (pág. 124).
6. Verificar que las lecturas de los manómetros de alta y baja presión se mantienen dentro de los márgenes especificados (págs. 123-124).
7. Procedimiento de desconexión y purga de mangueras: con el A/C en marcha, desconectar el acoplador de la manguera de "ALTA" del vehículo (pág. 124).
8. Abrir la válvula de "ALTA" de la estación y abrir lentamente la válvula de "BAJA" para que el compresor aspire el refrigerante contenido en las mangueras (pág. 124).
9. Una vez igualadas las presiones, cerrar las válvulas de "ALTA" y "BAJA", desconectar la manguera de "BAJA" y recuperar el gas remanente en la máquina hasta que los manómetros marquen exactamente 0 bar (pág. 124).

📷 IMAGEN: Tabla de valores de temperatura del aire en aireadores en función de la temperatura exterior durante la prueba de rendimiento — Fuente: 15. Diágnostico y averías.pdf, pág. 124

## Valores de referencia
- Régimen del motor para la prueba: 1.500 r.p.m. constantes (págs. 123-124).
- Presiones en compresor variable: Alta entre 8 y 10 bar (hasta 12 bar con temperatura exterior muy elevada); Baja a 2 bar constantes (pág. 123).
- Presiones en compresor fijo: Alta variable entre 10 y 20 bar; Baja variable entre 0,5 y 2,5 bar (pág. 123).
- Rendimiento térmico en aireadores según temperatura exterior:
  - 15 ºC exterior → 2 a 4 ºC en aireadores (pág. 124).
  - 20 ºC exterior → 4 a 6 ºC en aireadores (pág. 124).
  - 26 ºC exterior → 4 a 7 ºC en aireadores (pág. 124).
  - 32 ºC exterior → 5 a 8 ºC en aireadores (pág. 124).
  - 37 ºC exterior → 7 a 10 ºC en aireadores (pág. 124).
- Presión final en manómetros al desconectar: 0 bar (evita la descalibración del instrumento) (pág. 124).

## Verificación final
Comprobar que la temperatura obtenida en los difusores centrales se corresponde con el valor de la tabla de rendimiento para la temperatura ambiente medida y verificar que los manómetros quedan a 0 bar tras la purga (pág. 124).

## Seguridad y normativa
Cerrar las válvulas de la estación antes de desconectar para evitar fugas de refrigerante a la atmósfera. Recuperar el gas residual de los tubos hasta dejar los manómetros a cero para preservar la calibración del equipo (pág. 124).

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías hidráulicas del circuito frigorífico por lectura de manómetros
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "124-126"
relacionados: [comprobacion-presiones-y-rendimiento-climatizador, compresor, valvula-expansion, filtro-deshidratador]
palabras: [manómetros, carga baja, carga excesiva, alta igual baja, obstrucción, congelación]
```

## Síntoma
Anomalías en el rendimiento térmico de la climatización (falta de frío, enfriamiento insuficiente o nulo) acompañadas de lecturas anormales en los manómetros de alta y baja presión con el compresor en funcionamiento a 1.500 - 1.700 r.p.m. (págs. 124-126).

📷 IMAGEN: Manómetros de alta y baja presión mostrando lecturas del circuito hidráulico — Fuente: 15. Diágnostico y averías.pdf, pág. 124

📷 IMAGEN: Tabla general de diagnóstico de averías hidráulicas según lecturas de alta y baja presión, síntomas, causas y soluciones — Fuente: 15. Diágnostico y averías.pdf, pág. 126

## Causas posibles
1. Carga insuficiente o baja cantidad de refrigerante en el circuito:
   - En compresor fijo: presiones de Alta (6,5 a 9 bar en R134a) y Baja (0,5 a 1 bar en R134a) muy por debajo de lo normal. Temperatura en aireadores elevada. Si la Baja desciende de 0,5 bar existe riesgo de congelación (págs. 125, 126).
   - En compresor variable: Baja muy reducida (1,4 a 1,6 bar a ralentí) y Alta fluctuante (8 a 12 bar). Presión en reposo algo baja (4,5 bar a 300 g) (págs. 124-125).
2. Carga excesiva de refrigerante en el circuito:
   - En compresor fijo: presiones de Alta (19 a 24 bar en R134a) y Baja (2,5 a 3,5 bar en R134a) muy elevadas. Temperatura en aireadores alta (págs. 125, 126).
   - En compresor variable: presiones en reposo elevadas (5 bar a 1000 g), el compresor absorbe más potencia del motor y sufre mayor desgaste mecánico (págs. 124-125).
3. Presión de Alta y Baja igualadas (no varían al acelerar con el compresor girando):
   - Problema mecánico interno del compresor, fallo en las válvulas de descarga/admisión o empaquetadura (págs. 126-127).
   - Partícula incrustada bajo la válvula de descarga (pág. 126).
4. Presión de Alta excesivamente elevada y Baja normal o alta (baja al enfriar el condensador con agua):
   - Condensador obstruido externamente por suciedad o fallo en el electroventilador de refrigeración (pág. 126).
   - Presencia de aire o humedad incondensable en el circuito (pág. 126).
5. Presión de Alta baja y Baja en depresión o excesivamente baja (con formación de hielo/escarcha en la línea):
   - Obstrucción parcial o total en el filtro deshidratador o en la línea de líquido (pág. 126).
   - Válvula de expansión bloqueada o cerrada (pág. 126).
   - Obstrucción en el manguito/tubería del tramo de baja presión (pág. 126).
6. Presión de Baja excesivamente alta y Alta normal o baja:
   - Válvula de expansión bloqueada en posición muy abierta (pág. 126).
   - Exceso de aceite en el circuito frigorífico (pág. 126).

## Cómo separar las causas
- Comprobar las presiones estáticas en reposo antes de arrancar (deben guardar relación con la temperatura ambiente; ej. 5,5 bar a 25 ºC) (pág. 125).
- Arrancar el motor a 1.500 r.p.m. y observar si las agujas de Alta y Baja se desplazan; si ambas permanecen igualadas, verificar si el plato del compresor gira realmente antes de diagnosticar fallo interno de compresión (págs. 126-127).
- Pulverizar agua fría sobre el condensador: si la presión de Alta desciende bruscamente, confirma falta de intercambio térmico en el condensador o fallo del electroventilador (pág. 126).
- Tocar con la mano las conducciones: si la tubería está fría o presenta escarcha antes del evaporador (en el filtro o en la línea rígida), indica una obstrucción en ese punto (pág. 126). Si la tubería de baja está más fría que la carcasa del evaporador, existe obstrucción en la zona de baja (pág. 126).
- Rociar aire y nitrógeno para verificar si la válvula de expansión está bloqueada abierta o cerrada (pág. 126).

## Valores de referencia
- Presiones nominales de trabajo a 1.500 r.p.m. (con R134a a 20-25 ºC ambiente):
  - Compresor fijo (Carga normal): Alta = 13,5 a 15 bar; Baja = 1,5 a 2,5 bar (págs. 124, 125).
  - Compresor variable (Carga normal 550 g): Alta = 8 a 12 bar; Baja = 1,8 a 2,2 bar (págs. 124, 125).
- Presiones en reposo según temperatura ambiente (R134a):
  - 15 ºC → 3,9 bar (pág. 125).
  - 20 ºC → 4,7 bar (pág. 125).
  - 25 ºC → 5,5 bar (pág. 125).
  - 30 ºC → 6,6 bar (pág. 125).
  - 35 ºC → 7,5 bar (pág. 125).
  - 40 ºC → 8,8 bar (pág. 125).
- Variaciones de trabajo del compresor fijo según temperatura exterior:
  - 15 ºC → Baja 1,2-1,5 bar / Alta 8-10 bar (pág. 125).
  - 20 ºC → Baja 1,5-1,8 bar / Alta 9-12 bar (pág. 125).
  - 26 ºC → Baja 1,8-2 bar / Alta 12-14,5 bar (pág. 125).
  - 32 ºC → Baja 2,1-2,3 bar / Alta 14,5-18 bar (pág. 125).
  - 37 ºC → Baja 2,3-2,5 bar / Alta 18-20 bar (pág. 125).

## Verificación tras la reparación
Realizar el vacío profundo de 45 minutos, cargar la masa exacta de refrigerante prescrita por el fabricante, arrancar a 1.500 r.p.m. y verificar que los manómetros de Alta y Baja se estabilizan dentro de los valores de trabajo según la temperatura ambiente (págs. 125, 126).

```yaml
tipo: diagnostico
titulo: Diagnóstico de averías y daños mecánicos en el compresor
entidad: diagnostico-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "126-130"
relacionados: [compresor, sustitucion-compresor-y-lavado-circuito, lectura-manometros]
palabras: [compresor averiado, golpe de líquido, purpurina, aceite negro, aceite rojo, virutas]
```

## Síntoma
Compresor girando con presiones de Alta y Baja completamente igualadas, incapacidad para comprimir fluido, agarrotamiento del eje o presencia de contaminantes visibles en el lubricante (págs. 126-128).

📷 IMAGEN: Muestras de daños internos en compresores Sanden: plato oscilante desgastado, rótula soldada, bielas dobladas y pistones marcados — Fuente: 15. Diágnostico y averías.pdf, págs. 128-130

## Causas posibles
1. Falta de lubricante y/o falta de refrigerante de retorno:
   - Carga insuficiente de gas, fugas por porosidad o por el retén del eje (pág. 128).
   - Provoca desgaste extremo del plato oscilante, deformación o soldadura de la rótula del pistón (págs. 128, 129).
2. Presencia de suciedad o virutas en el circuito:
   - Falta de limpieza en intervenciones anteriores o introducción de contaminantes (pág. 128).
   - Genera partículas atrapadas bajo la válvula de descarga (impidiendo su cierre), rotura de la placa de válvulas o marcando las faldas de los pistones (págs. 128-130).
3. Entrada de refrigerante en estado líquido (golpe de ariete/líquido):
   - Válvula de expansión bloqueada en apertura total o recarga efectuada incorrectamente por el tramo de baja (pág. 128).
   - Al ser incompresible el líquido, provoca la flexión y doblado de las bielas, quemado del embrague y ruidos intensos (págs. 128-129).
4. Presencia de humedad en el circuito:
   - Reacción química del agua con el refrigerante formando ácidos corrosivos (pág. 128).
   - Causa ataque ácido en las cabezas de los pistones y la degradación del lubricante (págs. 128, 130).
5. Daños por mala manipulación en el montaje:
   - Forzado de soportes por casquillos de sujeción gripados, daños en roscas de racores, o golpes en la polea y placa frontal durante la instalación (pág. 127).

## Cómo separar las causas
- Verificar primero si el eje del compresor gira realmente descartando un fallo eléctrico en el embrague electromagnético o la liberación del fusible mecánico del disco de arrastre (pág. 126).
- Desconectar los racores y examinar el estado del aceite del compresor:
  - Aceite de color rojo: indica presencia de restos de humedad en el circuito (págs. 127, 130).
  - Aceite de color negro: indica desgastes intensos por fricción, sobrecalentamiento o gripado por falta de lubricación (págs. 127, 130).
  - Aceite de aspecto purpurina (partículas metálicas brillantes): indica destrucción interna por desprendimiento de virutas de aluminio (págs. 127, 130).
- Inspeccionar la entrada de la válvula de expansión y el interior de los tubos: si hay ferricha o suciedad gris, exige el lavado completo del sistema antes de montar un nuevo compresor (págs. 127, 131).

## Valores de referencia
- Estado normal del aceite extraído: limpio, transparente e incoloro o de tono amarillo claro (págs. 127, 130).
- Tiempo de vacío profundo tras reparación: mínimo 45 minutos para eliminar residuos de humedad (págs. 128, 132).

## Verificación tras la reparación
Si se detecta aceite rojo, negro, purpurina o ferricha, es obligatorio sustituir el compresor conjuntamente con la válvula de expansión y el filtro deshidratador, previo lavado exhaustivo de todas las tuberías con aire seco y nitrógeno líquido (págs. 127, 131-132).

```yaml
tipo: diagnostico
titulo: Diagnóstico de ruidos en el compresor de aire acondicionado
entidad: ruidos-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "131"
relacionados: [compresor, embrague-compresor, lectura-manometros]
palabras: [ruidos compresor, desembragado, embragado, entrehierro, roce polea, golpe de líquido, patinado]
```

## Síntoma
Aparición de ruidos extraños (roces, chirridores, golpeteos metálicos o zumbidos) procedentes de la zona del compresor de aire acondicionado, diferenciando entre la condición de compresor desembragado y compresor embragado (pág. 131).

## Causas posibles
1. Con el compresor DESEMBRAGADO (polea girando loca sin corriente en la bobina):
   - Contacto o roce directo de la placa frontal contra la polea por entrehierro incorrecto (pág. 131).
   - Oscilación o excentricidad en el rodamiento del rotor/polea producido por un golpe externo (pág. 131).
   - Contacto o interferencia de la polea con algún elemento extraño en el vano motor (pág. 131).
2. Con el compresor EMBRAGADO (compresor acoplado y girando en carga):
   - Cantidad incorrecta de agente frigorífico (sobrecarga o falta de gas) (pág. 131).
   - Compresión de agente frigorífico en estado líquido (golpe de líquido por válvula de expansión muy abierta o exceso de carga) (pág. 131).
   - Contacto directo de las tuberías o mangueras de A/C contra el chasis o la carrocería del vehículo que transmite vibraciones (pág. 131).
   - Patinado del embrague electromagnético por contaminación de aceite o grasa en las caras de rozamiento (pág. 131).
   - Partícula o viruta incrustada bajo la válvula de descarga de la placa de válvulas (pág. 131).
   - Daños mecánicos internos del compresor (desgaste de pistones, bielas o plato oscilante) (pág. 131).

## Cómo separar las causas
- Escuchar el ruido con el motor a ralentí y el A/C desconectado: si el ruido persiste, el fallo se localiza en la polea, rodamiento o entrehierro del embrague (pág. 131).
- Conectar el A/C a ralentí: si el ruido aparece solo al embragar, realizar un diagnóstico de presiones con los manómetros de alta y baja (pág. 131).
- Inspeccionar visualmente el recorrido de las tuberías de la climatización para verificar que no toquen partes rígidas de la carrocería (pág. 131).
- Desmontar la correa y revisar si hay restos de grasa o aceite en el plato del embrague o si el entrehierro está fuera de medida (págs. 131, 127).

## Valores de referencia
- Entrehierro/distancia prescrita entre polea y plato:
  - Compresores Sanden: de 0,4 a 0,8 mm (págs. 131, 127).
  - Otras marcas de compresor: de 0,2 a 0,5 mm (págs. 131, 127).

## Verificación tras la reparación
- Si el ruido era desembragado: ajustar el entrehierro o sustituir el conjunto de la polea y rodamiento (pág. 131).
- Si el ruido era por aceite en el plato: desmontar y limpiar desengrasando las caras del acoplamiento (pág. 131).
- Si el ruido era embragado: corregir la carga de gas, eliminar contactos de tubos o sustituir el compresor si padece daños mecánicos internos (pág. 131).

```yaml
tipo: procedimiento
titulo: Sustitución de un compresor nuevo y preparación del circuito
entidad: sustitucion-compresor-y-lavado-circuito
area: climatizacion
sistema: circuito-frigorifico
fuente: "15. Diágnostico y averías.pdf"
paginas: "131-132"
relacionados: [compresor, valvula-expansion, filtro-deshidratador, vacio-circuito, carga-refrigerante]
palabras: [sustitución compresor, lavado circuito, aire seco, nitrógeno líquido, trinomio obligatorio, 1000 rpm]
```

## Objeto y alcance
Procedimiento para la retirada de un compresor averiado, lavado exhaustivo de canalizaciones e instalación de un compresor nuevo garantizando la sustitución conjunta de la válvula de expansión y del filtro deshidratador (págs. 131-132).

📷 IMAGEN: Esquema del proceso de decisión de lavado del circuito y sustitución del trinomio compresor-válvula-filtro — Fuente: 15. Diágnostico y averías.pdf, págs. 131-132

## Condiciones previas
- Diagnóstico de avería del compresor confirmado mediante prueba de presiones (págs. 131, 126).
- Recuperación previa completa del refrigerante con anotación de la masa de gas y aceite extraída (pág. 131).

## Equipo y material
- Estación de servicio para A/C y nitrógeno líquido con aire seco para barrido (págs. 127, 131).
- Compresor nuevo, válvula de expansión nueva y filtro deshidratador nuevo (trinomio obligatorio) (págs. 127, 132).
- Aceite sintético específico y tapones de sellado para racores (págs. 131, 132).

## Pasos
1. Recuperar el agente frigorífico del sistema anotando exactamente las cantidades de refrigerante y aceite recuperadas (pág. 131).
2. Desmontar la correa de accesorios y desacoplar los tubos de entrada y salida del compresor (pág. 131).
3. Verificar la posición del compresor y desmontarlo de sus soportes mecánicos (pág. 131).
4. Taponar inmediatamente todos los racores de los tubos para evitar la entrada de suciedad y humedad (pág. 131).
5. Verificar el estado del compresor viejo: inspeccionar polea, cuerpo, signos de recalentamiento, pérdidas, distancia polea-plato y retirar la culata para observar el color del aceite (rojo, negro o purpurina) y presencia de partículas o ferricha (pág. 131).
6. Si se detecta suciedad, ferricha, o aceite deteriorado (rojo, negro o purpurina), realizar el lavado del circuito haciendo pasar aire seco y deshumedecer con nitrógeno líquido a través de tubos, manguitos, condensador y evaporador en sentido contrario a la circulación habitual (págs. 127, 131-132).
7. Tras el lavado, sustituir obligatoriamente de forma conjunta: el compresor nuevo, la válvula de expansión nueva y el filtro deshidratador nuevo (págs. 127, 132).
8. Ajuste de aceite en el compresor nuevo: vaciar el aceite que trae el compresor nuevo de fábrica en un recipiente graduado (pág. 132).
9. Introducir en el cárter del compresor una cantidad de aceite calculada sumando: el aceite extraído manualmente del compresor viejo + el aceite extraído en la recuperación + 20 cc adicionales (pág. 132).
10. Si se han sustituido componentes adicionales o se ha efectuado el lavado completo del circuito, añadir los suplementos de aceite prescritos por el fabricante en el cárter (pág. 132):
    - Tras lavado completo: introducir la cantidad total recomendada por el fabricante (pág. 132).
    - Suplemento por Evaporador nuevo: 50 cc (pág. 132).
    - Suplemento por Condensador nuevo: 30 cc (pág. 132).
    - Suplemento por Filtro deshidratador nuevo: 10 cc (pág. 132).
    - Suplemento por Tubo/manguito nuevo: 10 cc (pág. 132).
11. Montar el compresor nuevo, la válvula de expansión y el filtro deshidratador ajustando los pares de apriete (pág. 132).
12. Efectuar un vacío profundo al circuito con una duración mínima de 45 minutos y realizar la prueba de estanqueidad (pág. 132).
13. Cargar el circuito con la masa exacta de refrigerante prescrita por la toma de alta presión (pág. 132).
14. Comprobar la tensión de la correa de accesorios (pág. 132).
15. Arrancar el motor a ralentí, verificar la ausencia de ruidos extraños y conectar el A/C verificando el correcto acoplamiento del plato sobre la polea (pág. 132).
16. Rodaje inicial obligatorio: no superar las 1.000 r.p.m. durante los primeros 5 minutos de funcionamiento del nuevo compresor (pág. 132).

## Valores de referencia
- Suplemento base de aceite en sustitución simple: aceite viejo extraído + aceite recuperado + 20 cc (pág. 132).
- Suplementos específicos de aceite por componentes: Evaporador (50 cc), Condensador (30 cc), Filtro (10 cc), Tubo (10 cc) (pág. 132).
- Tiempo de vacío profundo: mínimo 45 minutos (págs. 128, 132).
- Régimen máximo en rodaje inicial: no sobrepasar 1.000 r.p.m. durante los primeros 5 minutos de marcha (pág. 132).
- Entrehierro de polea: 0,4 a 0,8 mm en Sanden / 0,2 a 0,5 mm en otras marcas (pág. 131).

## Verificación final
Comprobar las presiones de funcionamiento de alta y baja en los manómetros y verificar que la temperatura de salida en los aireadores centrales alcanza el valor de rendimiento térmico especificado (págs. 132, 124).

## Seguridad y normativa
Es imperativo sustituir la válvula de expansión y el filtro deshidratador junto con el compresor; la mayoría de los fabricantes anulan la garantía del compresor si no se acredita el cambio de estos dos componentes (págs. 127, 132). El vacío de 45 minutos es obligatorio para eliminar restos de humedad que formarían ácidos corrosivos (págs. 128, 132).

```yaml
tipo: procedimiento
titulo: Autodiagnóstico del sistema de climatización automática mediante equipo OBD
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "15. Diágnostico y averías.pdf"
paginas: "133-134"
relacionados: [unidad-control-climatizador, servomotor-trampilla, transmisor-presion, sensor-evaporador]
palabras: [autodiagnóstico, memoria de averías, averías fugaces, test de actuadores, ajuste básico, valores de medición]
```

## Objeto y alcance
Ejecución de las funciones de diagnóstico electrónico con máquina OBD en sistemas de climatización automática para la localización de fallos en sensores, verificación de actuadores y calibración de servomotores (págs. 133-134).

📷 IMAGEN: Mapeo de componentes contemplados en el autodiagnóstico del climatizador automático y unidades de control interconectadas — Fuente: 15. Diágnostico y averías.pdf, pág. 134

## Condiciones previas
- Conector de diagnóstico OBD del vehículo localizado y equipo de diagnosis compatible conectado (págs. 133, 134).
- Tensión de batería estabilizada y contacto puesto (págs. 133-134).

## Equipo y material
- Máquina o terminal de diagnosis multimarca o específica con protocolo de comunicación OBD / Can-Bus (págs. 133-134).

## Pasos
1. Conectar la máquina de diagnosis al terminal OBD e interrogar la UCE del climatizador (págs. 133-134).
2. Función 1 — Consultar la memoria de averías:
   - Diferenciar entre averías esporádicas/fugaces (se borran automáticamente tras 30 a 40 arranques si no se repiten) y averías permanentes/actuales (requieren reparación física y borrado manual con la máquina) (pág. 133).
   - Verificar averías en unidades asociadas vía Can-Bus: Cuadro de instrumentos (sensor de temperatura exterior y velocidad), UCE Red de a Bordo (sensor de marcha atrás, alternador, reóstato) y UCE del Motor (temperatura refrigerante y revoluciones) (págs. 133-134).
3. Función 2 — Diagnóstico de elementos actuadores (test de actuadores):
   - Test de segmentos: ilumina todos los dígitos del display para verificar fallos de información en el panel (pág. 133).
   - Velocidades del electroventilador: activa las distintas etapas para comprobar la conmutación eléctrica (pág. 133).
   - Turbina de aire: acciona la turbina en todo su rango de trabajo (pág. 133).
   - Embrague del compresor: conmuta cíclicamente el acoplamiento magnético comprobando acústicamente su funcionamiento (pág. 133).
   - Motores de trampillas: activa los servomotores comprobando la variación de temperatura y las salidas de aire (pág. 133).
4. Función 3 — Ajuste básico:
   - Activar el aprendizaje de topes mecánicos. La UCE mueve todos los servomotores desde el principio hasta el fin de su recorrido memorizando las posiciones de mínimo y máximo de cada potenciómetro de posición (pág. 133).
5. Función 4 — Lectura de valores de funcionamiento individual (bloques de valores de medición):
   - Verificar parámetros en tiempo real: estado del compresor, r.p.m. del motor, velocidad de marcha, tiempo de parada, posición teórica/real de los servomotores (temperatura, central, deshielo, recirculación), lecturas de sondas (exterior, entrada de aire, interior, evaporador, pies, difusor central, fotosensor solar), porcentaje de activación de la electroválvula del compresor, señal del sensor MAP y solicitud de elevación de ralentí (págs. 133-134).

## Valores de referencia
- Borrado automático de averías fugaces: tras 30 a 40 arranques del vehículo sin reproducirse el fallo (pág. 133).
- Tensión de alimentación leída en bloques de valores: aproximadamente igual a la tensión de batería (~12 V) (pág. 134).
- Ajuste básico obligatorio: tras sustituir cualquier servomotor o la propia UCE del Climatizador (pág. 133).

## Verificación final
Efectuar el borrado de la memoria de averías tras reparar el componente defectuoso y realizar una nueva lectura para confirmar que no se registran averías permanentes (pág. 133).

## Seguridad y normativa
Es estrictamente imprescindible ejecutar la función de ajuste básico tras sustituir un servomotor o la UCE del climatizador; de lo contrario, la UCE no reconocerá las posiciones límite de las trampillas ocasionando fallos de regulación (pág. 133).

COBERTURA: documento «15. Diágnostico y averías.pdf», páginas 123 a 134 de 134. completo