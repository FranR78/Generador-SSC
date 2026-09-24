```yaml
tipo: fundamento
titulo: Equipos de protección individual en el mantenimiento de climatización
entidad: equipos-proteccion-individual-climatizacion
area: general
sistema: prl-y-seguridad
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "32"
relacionados: [deteccion-fugas, carga-refrigerante]
palabras: [EPI, gafas EN 166, guantes EN 374, respirador EN 137, quemaduras frio, asfixia]
```

## Objeto
Establecer las medidas de protección individual obligatorias para la prevención de riesgos laborales durante las operaciones de reparación, mantenimiento y diagnóstico de sistemas de aire acondicionado (pág. 32).

## Fundamento
Protección del técnico frente a quemaduras por congelación producidas por escapes de refrigerante a presión (-26 a -29 ºC) y frente a la asfixia por desplazamiento de oxígeno derivada de la inhalación de vapores pesados (pág. 32).

## Desarrollo
Equipos de protección individual (EPI) requeridos:
- Protección ocular: gafas de seguridad o protección contra salpicaduras químicas (normativas EN 166 o ANSI Z87-1) y pantalla protectora facial integral en caso de riesgo de proyecciones (pág. 32). En caso de contacto directo con los ojos, lavar con agua abundante durante 15 minutos y recibir atención médica (pág. 32).
- Protección de las manos: guantes de protección térmicos resistentes a bajas temperaturas (normativas EN 374 o directrices OSHA) (pág. 32).
- Protección de la piel y cuerpo: ropa de vestir protectora antiestática y retardante de la llama (pág. 32).
- Protección respiratoria: equipo respiratorio autónomo (normativa EN 137) para tareas de rescate o intervenciones en depósitos y espacios confinados, dado que los vapores de gas son más pesados que el aire y sustituyen al oxígeno (pág. 32).
- Trabajo continuo en recintos provistos de buena ventilación (pág. 32).

## Valores de referencia
- Temperatura de salida del gas a presión atmosférica: de -26 ºC a -29 ºC (pág. 32).
- Tiempo de lavado ocular por salpicadura: 15 minutos con abundante agua (pág. 32).
- Normativas de cumplimiento: EN 166 / ANSI Z87-1 (gafas), EN 374 (guantes), EN 137 (respirador autónomo) (pág. 32).

## Errores de concepto frecuentes
- Asumir que los vapores de refrigerante se disipan en zonas bajas sin desplazar el oxígeno del aire en espacios cerrados (pág. 32).
- Manipular racores del circuito cargado sin guantes de aislamiento térmico pensando que el gas sale a temperatura ambiente (pág. 32).

```yaml
tipo: componente
titulo: Máquina de verificación y carga con cilindro de carga
entidad: estacion-carga
variante: cilindro-carga
area: climatizacion
sistema: equipos-taller
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "32-33"
relacionados: [carga-refrigerante, vacio-circuito]
palabras: [cilindro de carga, R12, R134a, resistencia calefaccion, escala visual, sin balanza]
```

## Misión
Efectuar la verificación de presiones, realización de vacío y carga de refrigerante en circuitos de aire acondicionado mediante dosificación por nivel visual en cilindro graduado (págs. 32-33).

## Tipos y características
Equipos manuales provistos de uno o dos cilindros de carga graduados (para R12, R134a o ambos), bomba de vacío, mangueras de conexión y puente de manómetros (pág. 32). No disponen de balanza electrónica ni capacidad autónoma de recuperación de refrigerante (págs. 32-33). Incorporan opcionalmente una resistencia eléctrica de calefacción para calentar el cilindro (pág. 32).

## Principio de funcionamiento
El gas se transfiere desde una bombona comercial al cilindro de carga. Para dosificar la masa de gas, se gira manualmente una gráfica exterior hasta alinearla con la presión que marca el manómetro del cilindro (págs. 32-33). Se coloca una marca visual en el nivel inicial, se resta la masa de carga prescrita y se pone una segunda marca; la carga se interrumpe al descender el líquido hasta la segunda marca (pág. 33). Si el gas está frío, la resistencia eleva la presión para cargar por alta; de lo contrario, se introduce lentamente por baja aprovechando la succión del compresor (pág. 32).

## Valores de trabajo
- Presión de recarga por alta mediante calefacción de gas (pág. 32).
- Tolerancia de carga regulada manualmente por lectura óptica de menisco (pág. 33).

## Anomalías frecuentes
- Imposibilidad de recuperar el refrigerante del vehículo directamente con la máquina, requiriendo una recicladora externa independiente para filtrar y separar el aceite (pág. 33).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
Llenado directo del cilindro desde la bombona comercial de gas refrigerante (pág. 33).

```yaml
tipo: componente
titulo: Estación de servicio y recarga automática de refrigerante
entidad: estacion-carga
area: climatizacion
sistema: equipos-taller
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "33-36"
relacionados: [recuperacion-refrigerante, vacio-circuito, carga-refrigerante, lectura-manometros]
palabras: [estación automática, Wigam, manómetro baja, manómetro alta, bombona interna 1 kg, recipiente aceite]
```

## Misión
Realizar las operaciones de recuperación de gas, separación de aceite usado, evacuación de vacío, inyección de aceite nuevo y carga precisa de refrigerante de forma programada o automática (págs. 33-36).

## Tipos y características
Equipo de taller informatizado provisto de módulo de control digital, manómetros de alta y baja presión, llaves manuales de corte, bomba de vacío, compresor de recuperación, bombona interna de almacenamiento con balanza electrónica, recipiente de aceite usado y recipiente de aceite limpio (págs. 34-36).

📷 IMAGEN: Estación de recuperación, carga y verificación de aire acondicionado con indicación de manómetros, llaves de paso, panel informativo y módulo de control — Fuente: 4. Equipos básicos de reparación.pdf, pág. 34

📷 IMAGEN: Detalle de manómetros de baja (-1 a 15 bar), alta (-1 a 35 bar), llaves de paso, módulo digital y recipientes de aceite — Fuente: 4. Equipos básicos de reparación.pdf, págs. 35-36

## Principio de funcionamiento
- Posición de válvulas en puente de manómetros: ambas abiertas para Recuperación y Vacío; baja cerrada y alta abierta para Carga de gas; ambas cerradas para Test de presiones (pág. 34).
- Manómetro de baja: escala de -1 a 15 bar (-0,1 a 1,5 MPa / -30 a 210 PSI) y lectura de temperatura equivalente de R134a de -60 ºC a +58 ºC (pág. 35).
- Manómetro de alta: escala de -1 a 35 bar (-0,1 a 3,5 MPa / -30 a 500 PSI) y lectura de temperatura equivalente de R134a de -60 ºC a +95 ºC (pág. 35).
- Gestión de almacenamiento de refrigerante: la máquina exige la presencia mínima permanente de 1 kg de gas en la bombona interna tras efectuar una carga. Si el peso remanente es menor de 1 kg, el proceso de carga se interrumpe automáticamente (pág. 35).
- Gestión de aceite: la inyección de aceite limpio exige una reserva mínima de seguridad (por ejemplo, 30 dl sobrantes) en el bote para evitar la aspiración de aire hacia los conductos internos de la máquina (pág. 36).

## Valores de trabajo
- Reserva mínima infranqueable en la bombona interna: 1 kg de refrigerante (pág. 35).
- Reserva mínima en bote de aceite limpio: 30 dl para iniciar proceso (pág. 36).
- Rango lectura manómetro de baja: -1 a 15 bar (ejemplo: 2 bar = 0 ºC en R134a) (pág. 35).
- Rango lectura manómetro de alta: -1 a 35 bar (ejemplo: 15 bar = 58 ºC en R134a) (pág. 35).

## Anomalías frecuentes
- Interrupción de la función de carga por falta de masa suficiente de gas en la bombona interior (< 1 kg) (pág. 35).
- Bloqueo de la inyección de aceite por nivel insuficiente en el depósito de aceite limpio (pág. 36).

## Comportamiento en avería
Activación de aviso acústico y chivato luminoso de alarma ("ALARM"), junto con indicación del código de error en la pantalla del panel de control (pág. 36).

## Cómo comprobarlo
Verificación inicial del nivel de refrigerante en el display digital al conectar el interruptor principal ("ON" / "1") (pág. 36).

## Mantenimiento
Control del recipiente de aceite usado extraído tras la recuperación y reposición periódica del bote de aceite limpio sintético (pág. 36).

```yaml
tipo: componente
titulo: Estación de servicio y recarga para gas R1234yf
entidad: estacion-carga
variante: r1234yf
area: climatizacion
sistema: equipos-taller
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "37"
relacionados: [refrigerante-r1234yf, recuperacion-refrigerante, carga-refrigerante, deteccion-fugas]
palabras: [SAE J2788, R1234yf, analizador de gas, prueba en dos pasos, orificios ventilacion, anti-chispas]
```

## Misión
Recuperar, vaciar, verificar e inyectar refrigerante R1234yf con alta precisión en cumplimiento de las normativas de seguridad para gases levemente inflamables (pág. 37).

## Tipos y características
Máquina automatizada homologada bajo la norma SAE J2788. Incorpora de serie un analizador integrado de pureza del agente frigorífico, ventilación reinforced, componentes internos protegidos contra la formación de chispas y racores de conexión de manguera de diseño exclusivo incompatibles con R134a (pág. 37).

📷 IMAGEN: Estación de servicio específica para la recarga y mantenimiento del gas R1234yf con analizador integrado — Fuente: 4. Equipos básicos de reparación.pdf, pág. 37

## Principio de funcionamiento
- Análisis previo: antes de proceder a la recuperación, el analizador interno toma una muestra del gas. Si detecta contaminación o mezcla con otros gases, detiene la operación, alerta al usuario y bloquea la aspiración hacia la bombona interna (pág. 37).
- Procedimiento estanco de recarga en dos pasos:
  1. Control de vacío: si la depresión no alcanza o mantiene el valor especificado, la máquina cancela la operación y no permite la recarga (pág. 37).
  2. Control de presión: si el vacío es correcto, la máquina introduce únicamente el 10% de la carga total prescrita y monitorea si la presión cae. Si detecta una fuga, interrumpe el proceso y no introduce el 90% restante del gas (pág. 37).

## Valores de trabajo
- Precisión en la recuperación de refrigerante: +/- 30 gramos (pág. 37).
- Eficiencia de recuperación: mínimo del 95% de la carga a una temperatura ambiente de 20 a 24 ºC (pág. 37).
- Precisión en la carga de refrigerante: +/- 15 gramos (pág. 37).
- Prueba de presión previa a la carga completa: inyección inicial del 10% de la masa total (pág. 37).
- Envases comerciales de R1234yf: contenedores blancos con franja superior roja y pictogramas de inflamabilidad (pág. 37).

## Anomalías frecuentes
- Bloqueo del proceso de recuperación por contaminación del refrigerante detectada por el analizador (pág. 37).
- Cancelación de la carga en la fase de prueba del 10% por presencia de inestanqueidades en el circuito (pág. 37).

## Comportamiento en avería
Parada del ciclo de trabajo con mensaje de advertencia en pantalla e impedimento técnico de inyección de gas en circuitos con fugas (pág. 37).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: procedimiento
titulo: Recuperación de refrigerante R1234yf contaminado mediante condensación por hielo seco
entidad: recuperacion-refrigerante-contaminado
area: climatizacion
sistema: circuito-frigorifico
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "37-38"
relacionados: [refrigerante-r1234yf, estacion-carga]
palabras: [R1234yf contaminado, refrigerante deficiente, hielo seco, -80 ºC, bombona de reciclaje, nevera]
```

## Objeto y alcance
Extraer de forma segura el refrigerante R1234yf degradado o mezclado con otros gases cuando la estación de servicio detecta "refrigerante deficiente" y rechaza su recuperación automática (págs. 37-38).

## Condiciones previas
- Notificación de "refrigerante deficiente" o contaminación en la pantalla de la máquina de servicio de A/C (págs. 37-38).
- Vehículo estacionado en zona ventilada con el motor apagado.

## Equipo y material
- Equipo de recuperación secundario con mangueras y acoplador de baja presión (pág. 38).
- Bombona de reciclaje vacía proporcionada por el distribuidor de gas (pág. 38).
- Nevera portátil con capacidad para albergar la bombona de reciclaje (pág. 38).
- Bloques/paquetes de hielo seco (dióxido de carbono sólido a -80 ºC) (págs. 38-39).
- Adaptadores y conectores para toma de baja presión del vehículo o boca de desecho de la estación de servicio (pág. 38).

📷 IMAGEN: Componentes del kit de recuperación de gas R1234yf contaminado (nevera, bombona de reciclaje, hielo seco, manguera y acopladores) — Fuente: 4. Equipos básicos de reparación.pdf, pág. 38

## Pasos
1. Acomodar la bombona de reciclaje vacía dentro de la nevera portadora y rodearla completamente con el hielo seco (pág. 38).
2. Esperar a que la bombona de reciclaje alcance la temperatura de enfriamiento de -80 ºC generada por el hielo seco (págs. 38-39).
3. Conectar la manguera de recuperación a la toma de baja presión del circuito del vehículo o a la salida de desecho de la estación de servicio (pág. 38).
4. Unir el extremo opuesto de la manguera a la válvula de entrada de la bombona de reciclaje fría mediante el adaptador (pág. 38).
5. Abrir las válvulas del circuito para permitir la transferencia por termodinámica; el gas contaminado se desplaza por succión térmica y se condensa en estado líquido en el interior de la bombona sin requerir bomba de aspiración mecánica (pág. 38).
6. Cerrar las válvulas de la bombona una vez completada la extracción y entregar el contenedor a un centro de eliminación de residuos autorizado (págs. 37-38).

## Valores de referencia
- Temperatura de condensación por hielo seco: -80 ºC (pág. 38).

## Verificación final
Comprobar con manómetro o estación de servicio que la presión en el circuito del vehículo ha descendido a 0 bar antes de desacoplar las mangueras.

## Seguridad y normativa
El método de enfriamiento a -80 ºC inhibe la reactividad química de las mezclas de sustancias peligrosas (pág. 38). Queda estrictamente prohibido liberar gas contaminado a la atmósfera o introducirlo en la bombona interna de la estación de servicio (págs. 37-38).

```yaml
tipo: componente
titulo: Estación de servicio y recarga para gas R744 (CO2)
entidad: estacion-carga
variante: r744
area: climatizacion
sistema: equipos-taller
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "38-40"
relacionados: [refrigerante-r744, carga-refrigerante, vacio-circuito]
palabras: [R744, CO2, alta presion, 130 bar, sensor de CO2, interrupción automatica]
```

## Misión
Efectuar las operaciones de evacuación, prueba y recarga de dióxido de carbono (R744) en vehículos equipados con sistemas de climatización transcríticos de alta presión (págs. 38-40).

## Tipos y características
Maquinaria automatizada de alta resistencia estructural provista de medidor de concentración ambiental de CO2, canalizaciones de alta presión y software homologado para sistemas frigoríficos de R744 (pág. 39).

📷 IMAGEN: Estación de recarga automática TEXA para el refrigerante R744 (CO2) con indicación de presiones de trabajo — Fuente: 4. Equipos básicos de reparación.pdf, pág. 39

## Principio de funcionamiento
Suministra el gas CO2 desde botellas comerciales hacia el vehículo controlando de forma continua las elevadísimas presiones del circuito (pág. 39). Monitorea simultáneamente la presencia de dióxido de carbono en el aire del taller mediante un sensor integrado; si la concentración ambiental alcanza niveles de riesgo, la máquina interrumpe la carga automáticamente (pág. 39).

## Valores de trabajo
- Presiones de trabajo en el circuito de alta del vehículo: de 60 a 130 bares (págs. 39, 40).
- Presiones de trabajo en el circuito de baja del vehículo: de 35 a 50 bares (págs. 39, 40).
- Concentración límite de CO2 en aire para mareos/dolores de cabeza: superior al 5% (pág. 39).
- Propiedades del R744: Temperatura crítica = 31 ºC; Presión crítica = 74 bar (pág. 40).
- Valores de evaporación R744 (bar relativos): 0 bar (-78,4 ºC), 10 bar (-40 ºC), 40 bar (6 ºC), 60 bar (22 ºC), 74 bar (31 ºC) (pág. 40).

## Anomalías frecuentes
- Parada de seguridad automática del proceso de carga por fugas de gas que elevan la concentración de CO2 en el entorno del taller (pág. 39).

## Comportamiento en avería
Interrupción inmediata del llenado y requerimiento de ventilación del recinto antes de reanudar el trabajo (pág. 39).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Detector sonoro-visual de fugas de refrigerante
entidad: detector-fugas
variante: sonoro-visual
area: climatizacion
sistema: equipos-taller
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "40-41"
relacionados: [deteccion-fugas, tuberias-y-racores, condensador, evaporador]
palabras: [detector sonoro, sonda flexible, regulacion sensibilidad, leds, fuga de gas]
```

## Misión
Localizar fugas puntuales de gas refrigerante en tuberías, uniones, radiadores y componentes del circuito mediante señalización acústica y luminosa (págs. 40-41).

## Tipos y características
Instrumento portátil provisto de una sonda de exploración montada sobre un cuello flexible de longitud orientable, regulador de sensibilidad y dispositivos de aviso (zumbador, leds ordenados o pantalla digital) (pág. 41).

📷 IMAGEN: Detector de fugas electrónico de tipo sonoro-visual con sonda flexible — Fuente: 4. Equipos básicos de reparación.pdf, pág. 40

## Principio de funcionamiento
El sensor electrónico situado en el extremo de la sonda analiza el aire próximo a las canalizaciones. Al detectar moléculas de refrigerante, altera la frecuencia de emisión de los pitidos acústicos e ilumina los diodos leds de forma proporcional a la concentración de la fuga (pág. 41).

## Valores de trabajo
Ajuste de la sensibilidad de la sonda antes de iniciar la exploración en función del nivel de fondo del taller (pág. 41).

## Anomalías frecuentes
- Falsas lecturas si la sonda se desplaza a velocidad excesiva o si hay corrientes de aire intensas que dispersan la bolsa de gas escapado (pág. 41).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Pasar el extremo del sensor muy lentamente por el contorno de los racores, soldaduras y componentes del sistema (pág. 41).

## Mantenimiento
Sustitución periódica de los elementos sensores consumibles instalados en la punta de la sonda (pág. 41).

```yaml
tipo: componente
titulo: Lámpara de luz ultravioleta y trazador de contraste para detección de fugas
entidad: detector-fugas
variante: ultravioleta
area: climatizacion
sistema: equipos-taller
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "41-42"
relacionados: [deteccion-fugas, trazador-uv, aceite-frigorifico]
palabras: [lámpara UV, contraste ultravioleta, aditivo 5%, gafas amarillas, mancha fluorescente]
```

## Misión
Visualizar de forma óptica el punto exacto de fuga de refrigerante mediante la luminiscencia de un aditivo fluorescente expuesto a luz ultravioleta (págs. 41-42).

## Tipos y características
Equipo compuesto por una lámpara emisora de luz ultravioleta (UV), gafas protectoras de contraste amarillo y líquido aditivo trazador/colorante (págs. 41-42).

📷 IMAGEN: Kit de detección de fugas por luz ultravioleta, incluyendo lámpara UV, gafas amarillas y botes de líquido colorante fluorescente — Fuente: 4. Equipos básicos de reparación.pdf, pág. 41

## Principio de funcionamiento
El aditivo colorante se introduce en el circuito (inyectado por baja, mezclado previamente con el aceite sintético o empleando un aceite que ya lo incorpora de fábrica en un 5% de dosis) (págs. 41-42). El fluido en circulación arrastra el trazador; en el punto inestanco, la fuga expulsa el aceite marcando la zona exterior. Al iluminar con la lámpara UV y observar a través de las gafas especiales, la mancha resplandece con un color fluorescente intenso (pág. 41).

## Valores de trabajo
- Proporción de aditivo trazador en el circuito: aproximadamente un 5% sobre la masa de aceite (pág. 42).

## Anomalías frecuentes
- Imposibilidad de detectar inestanqueidades internas situadas dentro de la caja del climatizador sin desmontar componentes (pág. 42).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Inyectar el aditivo, hacer funcionar el aire acondicionado durante un tiempo prudencial para permitir su distribución y examinar el circuito con la lámpara UV y gafas de seguridad en un entorno atenuado (pág. 41).

## Mantenimiento
Consultar la ficha técnica del fabricante para no sobrepasar la dosis del 5% y evitar alteraciones en la viscosidad del lubricante (pág. 42).

```yaml
tipo: componente
titulo: Endoscopio de inspección con pantalla LCD
entidad: endoscopio-inspeccion
area: general
sistema: herramientas-y-medida
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "42"
relacionados: [evaporador, deteccion-fugas]
palabras: [endoscopio, pantalla LCD, cable flexible 1 m, leds blancos, cabezal estanco, evaporador]
```

## Misión
Inspeccionar visualmente cavidades ocultas o componentes inaccesibles del sistema de climatización, tales como el evaporador dentro del Módulo HVAC (pág. 42).

## Tipos y características
Herramienta óptica compuesta por una unidad principal con pantalla de visualización LCD (en algunos modelos extraíble con salida de vídeo), cámara con cabezal estanco al agua e iluminación por leds blancos, montada sobre un cable guía flexible de aproximadamente 1 metro de longitud (pág. 42).

📷 IMAGEN: Endoscopio digital de inspección con pantalla LCD portátil y cable guía de un metro — Fuente: 4. Equipos básicos de reparación.pdf, pág. 42

## Principio de funcionamiento
Captura imágenes en tiempo real a través de la microcámara iluminada por leds ajustables y transmite la señal de vídeo a la pantalla LCD o a un monitor externo (pág. 42). Incorpora accesorios de acople en la punta (gancho o imán) para rescatar objetos caídos en el interior de los conductos (pág. 42).

## Valores de trabajo
- Longitud de la manguera o cable flexible: 1 metro aproximadamente (pág. 42).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Introducir el cabezal flexible por las rejillas de aireación o registros del climatizador e inspeccionar el estado superficial del evaporador en busca de humedades o manchas de trazador (pág. 42).

## Mantenimiento
Limpieza del cristal protector de la cámara tras intervenciones en zonas con grasas o agua (pág. 42).

```yaml
tipo: fundamento
titulo: Precauciones de seguridad, prohibición de soldadura y contaminación en climatización
entidad: seguridad-y-precauciones-climatizacion
area: general
sistema: prl-y-seguridad
fuente: "4. Equipos básicos de reparación.pdf"
paginas: "42-43"
relacionados: [filtro-deshidratador, valvula-expansion, refrigerante-r134a, refrigerante-r1234yf]
palabras: [prohibición soldadura, fosfeno, disociación química, saturación filtro 6-12 g, ácidos, mezcla gases]
```

## Objeto
Definición de los riesgos físicos y químicos asociados a los trabajos de reparación en circuitos cargados, así como las consecuencias del agua y las mezclas de refrigerantes (págs. 42-43).

## Fundamento
Evitar accidentes graves por explosión o intoxicación química y prevenir la destrucción hidráulica de los componentes por corrosión ácida o congelación de agua (págs. 42-43).

## Desarrollo
1. Prohibición de trabajos de soldadura o estañado:
- Prohibido soldar en circuitos cargados con gas: el calentamiento aumenta bruscamente la presión y provoca el disparo de la válvula de seguridad por sobrepresión (pág. 42).
- La radiación ultravioleta de la soldadura eléctrica atraviesa las mangueras flexibles de neopreno y degrada el refrigerante (pág. 42).
- Prohibición de llamas abiertas, soldaduras o fumar en presencia de refrigerante en el aire: el calor de una llama provoca la disociación química del gas produciendo fosfeno (gas tóxico venenoso) (pág. 42). Su inhalación causa tos irritante, náuseas y asfixia; requiere trasladar al afectado al aire libre, administrar oxígeno o practicar respiración artificial (págs. 42-43).
- Los componentes inestancos o dañados no deben repararse con soldadura; deben sustituirse por recambios nuevos tras evacuar el circuito (pág. 42).

2. Efectos de la humedad en el circuito:
- El agua es insoluble en refrigerante líquido, pero mezclable en fase gaseosa (pág. 43).
- El filtro deshidratador absorbe entre 6 y 12 gramos de agua (pág. 43). Una vez saturado, las gotas de agua viajan hasta la válvula de expansión o estrangulador, se congelan y taponan la circulación del fluido (pág. 43).
- A altas presiones y temperaturas, el agua reacciona formando ácidos corrosivos e impurezas que destruyen el sistema (pág. 43).

3. Mezcla de agentes frigoríficos:
- Prohibido mezclar diferentes gases refrigerantes por poseer distintas propiedades térmicas y requerir aceites específicos (pág. 43). Ante una mezcla detectada, se debe extraer el gas y lavar por completo el circuito (pág. 43).

📷 IMAGEN: Advertencia de prohibición de mezclar gases R1234yf y R134a y prohibición de soldar en circuitos cargados — Fuente: 4. Equipos básicos de reparación.pdf, pág. 42

## Valores de referencia
- Capacidad de absorción de agua del filtro deshidratador: de 6 a 12 gramos (pág. 43).

## Errores de concepto frecuentes
- Intentar reparar poros de un condensador o tubería mediante soldadura autógena sin vaciar previamente el refrigerante del vehículo (pág. 42).
- Considerar que una pequeña cantidad de agua en el circuito no perjudica el sistema al disolverse en el aceite (pág. 43).

COBERTURA: documento «4. Equipos básicos de reparación.pdf», páginas 32 a 43 de 43. completo