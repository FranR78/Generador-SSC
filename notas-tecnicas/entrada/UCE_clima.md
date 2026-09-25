```yaml
tipo: fundamento
titulo: Influencia de la climatización en la seguridad activa y confort
entidad: higrometria-y-confort
area: climatizacion
sistema: control-climatizacion
fabricante: Hella
fuente: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf"
paginas: "2-5"
relacionados: [unidad-control-climatizador]
palabras: [bienestar, seguridad activa, rendimiento físico, rendimiento mental, concentración]
```

## Objeto
Analizar la relación directa entre el confort térmico en el habitáculo y la capacidad psicofísica del conductor como elemento clave de la seguridad activa. (págs. 2-3)

## Fundamento
El cuerpo humano requiere un ambiente con valores controlados de temperatura y humedad para mantener la concentración y la capacidad de reacción sin fatiga prematura ni estrés térmico. (págs. 2-4)

## Desarrollo
El exceso de calor en el habitáculo produce efectos fisiológicos comparables a una tasa de alcoholemia, reduciendo el tiempo de reacción, provocando somnolencia e incrementando el margen de error en la conducción. Un sistema de climatización eficaz regula la temperatura y la tasa de humedad relativa, previniendo la sudoración excesiva o la deshidratación y manteniendo al conductor en su zona óptima de rendimiento físico y mental. (págs. 2-5)

## Valores de referencia
- Influencia en la conducción: reducción drástica de la fatiga al mantener la temperatura del habitáculo dentro del margen de bienestar. (págs. 2-4)

## Errores de concepto frecuentes
- Considerar el climatizador como un simple elemento de lujo opcional, ignorando su función activa en la prevención de accidentes de tráfico. (págs. 2-3)

---

```yaml
tipo: componente
titulo: Depósito y filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
codigo: C
fabricante: Hella
fuente: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf"
paginas: "18-20, 39"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, valvula-expansion, refrigerante-r134a]
palabras: [deshidratador, humedad, ácido fluorhídrico, corrosión, tamiz filtro]
```

## Misión
Almacenar la reserva de agente frigorífico líquido, retener químicamente la humedad del circuito y filtrar partículas sólidas para proteger el compresor y la válvula de expansión. (págs. 18, 39)

## Tipos y características
Depósito metálico intercalado entre el condensador y la válvula de expansión en sistemas con válvula de expansión termostática. Alberga un lecho desecante y un tamiz filtrante. (págs. 18, 39)

## Principio de funcionamiento
El refrigerante R134a en estado líquido procedente del condensador penetra en el depósito. El fluido atraviesa el material desecante, el cual absorbe el agua en suspensión, y el tamiz retiene las impurezas metálicas. La humedad combinada con el flúor del R134a forma ácido fluorhídrico, altamente corrosivo para los metales de la instalación. (págs. 18, 39)

📷 IMAGEN: Sección del filtro deshidratador con la entrada desde el condensador, la masa deshidratadora y el tamiz filtrante de salida — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 39

## Valores de trabajo
No documentado en fuentes en las páginas 18-20, 39.

## Anomalías frecuentes
Saturación de la capacidad de absorción de agua del deshidratador, con la consiguiente formación de ácido fluorhídrico y corrosión interna de componentes. (pág. 39)

## Comportamiento en avería
Obstrucción por hielo en la válvula de expansión o desprendimiento de partículas del lecho desecante que destruyen el compresor. (pág. 39)

## Cómo comprobarlo
No documentado en fuentes en las páginas 18-20, 39.

## Mantenimiento
Sustituir obligatoriamente el depósito deshidratador cada vez que se abra el circuito frigorífico. Mantener cerrado con sus tapones protectores hasta el momento de su instalación para evitar la absorción de humedad ambiental. (pág. 39)

---

```yaml
tipo: componente
titulo: Conmutador de presión para climatizador F129
entidad: presostato
area: climatizacion
sistema: control-climatizacion
codigo: F129
fabricante: Hella
fuente: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf"
paginas: "38-40, 42"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, electroventilador-condensador, unidad-control-climatizador]
palabras: [F129, presostato triple, 0,2 MPa, 1,6 MPa, 3,2 MPa, protección de presión]
```

## Misión
Supervisar los niveles de alta presión en el circuito frigorífico para desconectar el compresor ante presiones extremas (por defecto o exceso) y accionar el segundo escalón de velocidad del electroventilador. (págs. 38, 42)

## Tipos y características
Presostato hidromecánico de triple función (Trinary) montado en la tubería de alta presión. (págs. 38, 42)

## Principio de funcionamiento
Integra tres contactos eléctricos accionados por la presión del refrigerante:
- **Desconexión por baja/alta presión:** Desconecta el acoplamiento magnético N25 si la presión cae por debajo de 0,2 MPa (2 bar) o si supera los 3,2 MPa (32 bar). (pág. 42)
- **Conmutación del ventilador:** Cierra el contacto hacia el relé J101 cuando la alta presión alcanza los 1,6 MPa (16 bar), activando la velocidad rápida del ventilador V7 para forzar la condensación. (pág. 42)

📷 IMAGEN: Esquema eléctrico de conexiones del presostato F129 en la línea de control del relé del compresor y del ventilador — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 42

## Valores de trabajo
- Umbral de corte por baja presión: < 0,2 MPa (2 bar). (pág. 42)
- Umbral de activación del 2º escalón del ventilador: > 1,6 MPa (16 bar). (pág. 42)
- Umbral de corte por alta presión: > 3,2 MPa (32 bar). (pág. 42)

## Anomalías frecuentes
Sulfatación de contactos o fallo de conmutación interna por picos reiterados de sobrepresión. (págs. 38, 42)

## Comportamiento en avería
Inoperatividad del acoplamiento del compresor N25 o falta de activación del 2º escalón de los electroventiladores. (págs. 38, 42)

## Cómo comprobarlo
Verificar la continuidad eléctrica de sus bornes con multímetro o comprobar los estados con el equipo de autodiagnóstico. (págs. 38, 42)

## Mantenimiento
En instalaciones de nueva generación este conmutador hidromecánico es sustituido por un transmisor de alta presión piezoeléctrico (G65). (pág. 42)

---

```yaml
tipo: componente
titulo: Unidad de control para el ventilador del líquido refrigerante J293
entidad: unidad-control-climatizador
variante: modulo-ventiladores-j293
area: climatizacion
sistema: control-climatizacion
codigo: J293
fabricante: Hella
fuente: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf"
paginas: "40, 47"
forma_parte_de: control-climatizacion
relacionados: [electroventilador-condensador, presostato, embrague-compresor]
palabras: [J293, escalón 1, escalón 2, F18, F129, conmutación combinada]
```

## Misión
Gobernar la activación y los escalones de velocidad (I y II) de los electroventiladores de refrigeración del motor/condensador en respuesta a la presión del circuito y a la temperatura del líquido refrigerante. (págs. 40, 47)

## Tipos y características
Módulo electrónico de potencia equipado con relés de conmutación combinada, ubicado en el compartimento motor. (págs. 40, 47)

## Principio de funcionamiento
Recibe las señales del conmutador de presión F129 y del termoconmutador del radiador F18:
- **Escalón 1:** Se conecta en cuanto se activa el climatizador (compresor A/C acoplado) siempre que la presión en el circuito frigorífico supere los 0,2 MPa (2 bar). (pág. 47)
- **Escalón 2:** Se conmuta cuando la alta presión en el circuito frigorífico supera los 1,6 MPa (16 bar) o cuando la temperatura del líquido refrigerante del motor sobrepasa los 99 ºC. Retorna al escalón 1 cuando la presión cae de 1,6 MPa y la temperatura baja de 99 ºC. (pág. 47)

## Valores de trabajo
- Umbral de activación del escalón 1 por A/C: A/C conectado y presión > 0,2 MPa (2 bar). (pág. 47)
- Umbral de activación del escalón 2 por presión: alta presión > 1,6 MPa (16 bar). (pág. 47)
- Umbral de activación del escalón 2 por temperatura de agua (F18): temperatura del refrigerante del motor > 99 ºC. (pág. 47)

## Anomalías frecuentes
Deterioro de los relés de potencia internos o cortocircuito en las salidas hacia los motores de los electroventiladores. (págs. 40, 47)

## Comportamiento en avería
Inoperatividad de los ventiladores del radiador/condensador, elevación crítica de la alta presión en tráfico urbano y corte de seguridad del compresor. (págs. 40, 47)

## Cómo comprobarlo
Efectuar la prueba de actuadores con el equipo de diagnosis comprobando la activación de la velocidad 1 y 2 de los ventiladores. (págs. 40, 47)

## Mantenimiento
Verificar la limpieza y el estado de apriete de los conectores eléctricos del módulo. (pág. 40)

---

```yaml
tipo: fundamento
titulo: Regulación automática de temperatura dividida en dos partes (Climatronic Dual)
entidad: distribucion-aire
variante: dual-bizona
area: climatizacion
sistema: distribucion-aire
fabricante: Hella
fuente: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf"
paginas: "63-66"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [Climatronic, dual, bizona, 18 ºC a 29 ºC, mezcla independiente, servomotores V158 V159]
```

## Objeto
Permitir la selección y regulación automática e independiente de la temperatura para el lado izquierdo (conductor) y derecho (acompañante) del habitáculo. (págs. 63-65)

## Fundamento
El sistema Climatronic dual utiliza una carcasa de distribución de aire provista de chapaletas de mezcla independientes para el lado izquierdo y derecho, accionadas por servomotores individuales comandados por la centralita J255/E87. (págs. 63-66)

## Desarrollo
La unidad de control analiza la temperatura solicitada en cada lado (regulable entre 18 ºC y 29 ºC) junto con las lecturas de los sensores de salida de aire (G150 en difusor izquierdo, G151 en difusor derecho, G192 en reposapiés) y el fotosensor de radiación solar G107.
Como respuesta, la centralita excita de forma independiente el servomotor de temperatura izquierda V158 (con potenciómetro G220) y el servomotor de temperatura derecha V159 (con potenciómetro G221), variando la mezcla de aire frío/caliente que se canaliza hacia cada lado del vehículo. (págs. 63-66)

📷 IMAGEN: Cuadro del sistema Climatronic dual mostrando la centralita J255, los sensores térmicos individuales y los servomotores V158 y V159 — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 65

## Valores de referencia
- Margen de regulación de temperatura seleccionable por lado: de 18 ºC a 29 ºC. (pág. 65)

## Errores de concepto frecuentes
- Asumir que el sistema dual requiere dos compresores o dos evaporadores independientes, ignorando que el circuito frigorífico es único y la división de temperatura es mecánica en la caja de mezcla. (págs. 63, 65)

---

```yaml
tipo: diagnostico
titulo: Tabla de diagnóstico de averías del circuito frigorífico por manómetros
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fabricante: Hella
fuente: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf"
paginas: "79, 82"
relacionados: [compresor, valvula-expansion, condensador, presostato]
palabras: [diagnóstico por manómetros, alta presión, baja presión, tabla de presiones, averías comunes]
```

## Síntoma
Falta de rendimiento frigorífico, enfriamiento nulo o comportamiento anormal de las presiones de trabajo en la estación de manómetros. (pág. 82)

## Causas posibles
- Válvula de expansión bloqueada en apertura o en cierre. (pág. 82)
- Compresor dañado (daños en placas de válvulas o desgastes mecánicos). (pág. 82)
- Válvula de regulación de cilindrada del compresor defectuosa o desajustada. (pág. 82)
- Excesso o falta de agente frigorífico R134a. (pág. 82)
- Filtro deshidratador saturado de humedad. (pág. 82)
- Presencia de aire en el interior del circuito. (pág. 82)

## Cómo separar las causas
1. Acoplar la batería de manómetros a las tomas de alta (HP) y baja presión (BP) y poner en marcha la instalación a régimen de servicio. (págs. 79, 82)
2. Interpretar la lectura combinada de presiones según la tabla de diagnóstico:
   - **Baja presión Alta / Alta presión Baja:** Válvula de expansión bloqueada en apertura, compresor dañado (válvulas rotas) o válvula de regulación de cilindrada defectuosa. (pág. 82)
   - **Baja presión Baja / Alta presión Baja:** Carga de refrigerante escasa o fuga en el circuito. (pág. 82)
   - **Baja presión Baja / Alta presión Alta:** Válvula de expansión bloqueada en cierre, filtro deshidratante saturado de humedad u obstrucción en el condensador/evaporador. (pág. 82)
   - **Baja presión Alta / Alta presión Alta:** Exceso de refrigerante, presencia de aire en el circuito o falta de condensación por fallo en los electroventiladores. (pág. 82)
   - **Baja y Alta presión casi iguales:** Compresor destruido mecánicamente, correa rota o fallo en el embrague electromagnético. (pág. 82)

## Valores de referencia
- Lectura de referencia: valores comparados con la tabla del manual de reparación específico según temperatura ambiental. (pág. 79)

## Verificación tras la reparación
Corregir la causa detectada (limpieza/enjuague, sustitución del componente o recarga exacta) y verificar que las presiones de alta y baja se estabilizan dentro de los márgenes nominales. (págs. 79, 82)

---

COBERTURA: documento «MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf», páginas 1 a 85 de 85. [completo]