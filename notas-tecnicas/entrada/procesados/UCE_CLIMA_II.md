```yaml
tipo: fundamento
titulo: Esquema y arquitectura eléctrica del Climatronic en el SEAT Ibiza III
entidad: regulacion-automatica
variante: esquema-electrico-ibiza3
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "clima ibizaIII ASY.pdf"
paginas: "1-6"
relacionados: [unidad-control-climatizador, servomotor-trampilla, transmisor-presion]
palabras: [Climatronic, Ibiza III, J255, J293, N280, G65, CAN-Bus, fusible SB18]
```

## Objeto
Describir la interconexión eléctrica, circuitos de alimentación, red de comunicación CAN-Bus y distribución de fusibles/relés del climatizador automático Climatronic en el SEAT Ibiza III (modelos a partir de noviembre de 2001). (págs. 1-2)

## Fundamento
La unidad de control para Climatronic J255 centraliza la gestión del confort alimentándose mediante líneas protegidas por fusibles (SB18, SB29, SB36) y la línea del relé de contacto X (J59), comunicándose por el bus CAN de confort (High/Low) con la red de a bordo e interconectando actuadores, sensores térmicos y el módulo de potencia de ventiladores J293. (págs. 2-5)

## Desarrollo
El esquema de corriente se distribuye en los siguientes bloques funcionales:
- **Alimentación y gestión de soplador:** La unidad J255 recibe corriente continua de las líneas de borne 15 (fusible SB18 de 10 A y conexión A15), borne 30 (fusible SB36 de 125 A en distribuidor TV2 / SB29) y borne X (conexión A61). Controla la turbina de aire fresco V2 a través de la unidad de control de turbina J126. (pág. 2)
- **Fotosensor solar e indicación:** El fotosensor de radiación solar G107 está conectado a la unidad de manejo e indicación E87/J255, mientras que la turbina V42 aspira aire para el termosensor del habitáculo G56 incorporado en el panel. (págs. 2, 6)
- **Actuadores de trampillas y línea de 5 V:** Los servomotores de mezcla de temperatura (V68) y trampilla central (V70) integran potenciómetros de posición (G92 y G112) alimentados por la línea común de 5 V (L46) y masa M (243). Los servomotores de descongelación (V107) y recirculación (V113) equipan sus respectivos potenciómetros (G135 y G143) bajo la misma arquitectura de tensión. (págs. 3-4)
- **Red de captadores térmicos NTC:** La centralita J255 lee la señal de cuatro sondas de temperatura NTC conectadas a masa común: aire de entrada/aspiración (G89), difusor central (G191), vano reposapiés (G192) y salida del evaporador (G263). (pág. 5)
- **Mando de compresión y ventilación de motor:** En las motorizaciones ASY (1.9 SDI), la válvula reguladora del compresor N280 es comandada desde el conector T11c, mientras que la unidad de control del ventilador J293 gobierna la activación de los electroventiladores V7 y V35 (en velocidad I y II) con alimentación protegida por los fusibles S177, S180 y S269 sobre la batería. (pág. 6)

📷 IMAGEN: Esquema eléctrico de conexiones de la unidad J255 con los fusibles SB18/SB29/SB36 y la unidad de turbina J126 — Fuente: clima ibizaIII ASY.pdf, pág. 2

## Valores de referencia
- Fusibles de protección: SB18 (10 A), SB29, SB36 (125 A en distribuidor TV2). (pág. 2)
- Tensión de alimentación de potenciómetros de servomotores: 5 V (línea L46). (págs. 3-4)
- Fusibles en placa de batería: S177 (5), S180 (8) y S269 (11) de 30 A. (pág. 6)

## Errores de concepto frecuentes
- Asumir que la unidad J255 acciona directamente los ventiladores de refrigeración del motor V7/V35 sin intermediación de la unidad de control J293 ni de los fusibles aéreos de la batería. (págs. 2, 6)

---

```yaml
tipo: componente
titulo: Servomotores de trampillas con potenciómetro de posición del SEAT Ibiza III
entidad: servomotor-trampilla
variante: ibiza-3-potenciometro
area: climatizacion
sistema: distribucion-aire
codigo: V68 / V70 / V107 / V113
fabricante: SEAT
fuente: "clima ibizaIII ASY.pdf"
paginas: "3-4"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [V68, V70, V107, V113, G92, G112, G135, G143, potenciómetro, 5 V, L46]
```

## Misión
Ejecutar el movimiento y posicionamiento angular de las trampillas de mezcla de temperatura, distribución central, descongelación del parabrisas y recirculación de aire fresco en la unidad climática del SEAT Ibiza III. (págs. 3-4)

## Tipos y características
Conjuntos actuadores formados por un motor eléctrico de corriente continua (V68, V70, V107, V113) y un potenciómetro interno de realimentación de posición (G92, G112, G135, G143) conectados a la unidad de control J255. (págs. 3-4)

## Principio de funcionamiento
La centralita J255 aplica polaridad y tensión al motor eléctrico correspondiente para desplazar la trampilla. El potenciómetro asociado, alimentado con una tensión estabilizada de 5 V desde la línea L46 del mazo de cables Climatronic y conectado a masa (243), modifica su resistencia interna enviando una señal analógica de tensión de retorno a los pines T20a de la centralita para informar de la posición exacta. (págs. 3-4)

📷 IMAGEN: Esquema eléctrico de conexiones de los servomotores V68 y V70 con sus potenciómetros G92 y G112 a la línea L46 de 5 V — Fuente: clima ibizaIII ASY.pdf, pág. 3

## Valores de trabajo
- Tensión de alimentación de los potenciómetros: 5 V CC (línea de conexión L46). (págs. 3-4)
- Conexión de masa compartida: punto de masa 243 en mazo Climatronic. (págs. 3-4)

## Anomalías frecuentes
Suciedad o desgaste en la pista del potenciómetro interno provocando saltos de tensión de señal o fallo de motor eléctrico por bloqueo mecánico de la compuerta. (págs. 3-4)

## Comportamiento en avería
La unidad de control registra un código de avería en la memoria del autodiagnóstico y limita la regulación del aireado en la zona afectada. (págs. 3-4)

## Cómo comprobarlo
Medir la presencia de 5 V en la línea L46 y verificar con multímetro o equipo de diagnosis la variación lineal de tensión del potenciómetro durante el recorrido de la trampilla. (págs. 3-4)

## Mantenimiento
Realizar el ajuste básico con la herramienta de diagnosis tras la sustitución de cualquier servomotor para autoadaptar sus topes mecánicos inicial y final. (págs. 3-4)

---

```yaml
tipo: componente
titulo: Unidad de control para el ventilador del líquido refrigerante J293 del SEAT Ibiza III
entidad: unidad-control-climatizador
variante: modulo-ventiladores-ibiza3
area: climatizacion
sistema: control-climatizacion
codigo: J293
fabricante: SEAT
fuente: "clima ibizaIII ASY.pdf"
paginas: "6"
forma_parte_de: control-climatizacion
relacionados: [electroventilador-condensador, transmisor-presion, valvula-reguladora-compresor]
palabras: [J293, V7, V35, F18, G65, N280, S177, S180, S269, motor ASY]
```

## Misión
Gobernar la activación de las dos velocidades de los electroventiladores de refrigeración del motor/condensador (V7 y V35) y la excitación de la válvula del compresor N280 en el SEAT Ibiza III. (pág. 6)

## Tipos y características
Módulo electrónico de relés de potencia alojado en el vano motor (cerca de la servodirección), conectado al transmisor de alta presión G65, al termoconmutador del radiador F18, a la unidad del motor y a la centralita Climatronic J255. (pág. 6)

## Principio de funcionamiento
Recibe las solicitudes de refrigeración del motor y del climatizador. Procesa la señal de alta presión procedente de G65 y la temperatura del refrigerante del termoconmutador F18. Suministra corriente de potencia a los motores de los ventiladores V7 y V35 a través de la línea de velocidad I (resistencia en serie D167) o velocidad II (línea D168), alimentado directamente desde la batería a través de los fusibles S177, S180 y S269. (pág. 6)

📷 IMAGEN: Esquema eléctrico de conexiones del módulo J293 con el transmisor de alta presión G65, la válvula N280 y los electroventiladores V7/V35 — Fuente: clima ibizaIII ASY.pdf, pág. 6

## Valores de trabajo
- Fusibles de alimentación de potencia (borne 30): S177 (5), S180 (8) y S269 (11) en portafusibles de batería. (pág. 6)
- Punto de masa principal del módulo: punto de masa 49 en el larguero izquierdo delantero. (pág. 6)

## Anomalías frecuentes
Fallo en los relés internos de conmutación de velocidad o sulfatación en las bornes de los fusibles aéreos montados sobre la batería. (pág. 6)

## Comportamiento en avería
Inoperatividad de los ventiladores V7 y V35, elevación excesiva de la alta presión en parado con desconexión del compresor N280 o riesgo de sobrecalentamiento del motor térmico. (pág. 6)

## Cómo comprobarlo
Verificar la presencia de 12 V en las bornes de entrada procedentes de la batería (S177, S180) y puentear las salidas de activación hacia V7 y V35 para comprobar los motores eléctricos. (pág. 6)

## Mantenimiento
Inspeccionar periódicamente la ausencia de sulfatación y la firmeza de apriete de las tuercas de los fusibles de pletina montados en la caja de la batería. (pág. 6)

---

COBERTURA: documento «clima ibizaIII ASY.pdf», páginas 1 a 6 de 6. [completo]

👉 *Quedan pendientes de procesar los manuales «MANUAL CLIMATIZACION 2010 HELLA EN WORD.pdf», «Climatizacion-conocimientos-basios-para-el-taller_3.pdf» y «AA AUTOMOCION 1 Enero 2010 HELLA.pptx». ¿Cuál deseas que analicemos a continuación?*