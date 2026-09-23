```yaml
tipo: fundamento
titulo: Principios físicos de la técnica de refrigeración
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "17-18"
relacionados: [refrigerante-r134a, refrigerante-r1234yf]
palabras: [intercambio térmico, cambio de estado, evaporación, condensación, calor]
```

## Objeto
Explicar las leyes físicas de transferencia de calor y los cambios de estado de agregación de la materia aplicados a la refrigeración del habitáculo del automóvil.

## Fundamento
El intercambio térmico se rige por el principio de conservación de la energía: para provocar un cambio de estado físico es necesario un aporte o extracción de calor. El calor se transmite de forma natural desde la sustancia con mayor temperatura hacia la de menor temperatura.

📷 IMAGEN: Esquema del cambio de estado del agua (hielo a agua líquida y vapor) al aplicar calor — Fuente: 2. Introducción a la refrigeración.pdf, pág. 17

## Desarrollo
**Mecanismo de cambio de estado:**
- **Absorción de calor:** Una sustancia absorbe energía térmica de su entorno al pasar de estado líquido a gaseoso (evaporación).
- **Entrega de calor:** Una sustancia cede energía térmica al entorno al pasar de estado gaseoso a líquido (condensación).

**Fenómenos cotidianos de enfriamiento por evaporación:**
- **Alcohol sobre la piel:** Al evaporarse rápidamente, absorbe el calor de la piel produciendo sensación de frío.
- **Botijo de arcilla:** El agua interior se mantiene fría porque la evaporación a través de los poros de la arcilla absorbe la energía térmica del líquido.
- **Expansión de nitrógeno líquido:** La evaporación de nitrógeno enfría intensamente la zona de expansión (sistema inviable en automoción por pérdida de gas a la atmósfera).

**Aplicación al circuito cerrado de climatización:**
En los vehículos se fuerza la evaporación y condensación de un fluido dentro de un circuito cerrado. En estas condiciones, los cambios de temperatura originan variaciones de presión directamente ligadas: al aumentar la presión aumenta la temperatura y al disminuir la presión disminuye la temperatura.

## Valores de referencia
- **Dirección natural del calor:** Siempre desde el cuerpo más caliente hacia el más frío.

## Errores de concepto frecuentes
- Creer que un sistema de climatización genera "frío" de forma activa; en realidad absorbe y extrae el calor del aire.
- Pensar que la evaporación en circuito abierto es viable en automoción; requeriría reponer constantemente el agente frigorífico consumido.

---

```yaml
tipo: fundamento
titulo: Conceptos físicos de calor, frío y estados de la materia
entidad: higrometria-y-confort
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "18-19"
relacionados: [ciclo-frigorifico]
palabras: [calor, frío, punto crítico, punto de ebullición, condensación, punto de rocío]
```

## Objeto
Definir las magnitudes físicas termodinámicas y los puntos de cambio de fase empleados en la técnica de la climatización automotriz.

## Fundamento
Comportamiento térmico de la materia según la energía calorífica presente y la presión ejercida sobre el sistema.

## Desarrollo
- **Calor:** Forma de energía medible mediante la temperatura. La variación de temperatura modifica los estados de agregación de la materia: sólido, líquido, gaseoso y plasmático.
- **Frío:** Magnitud física inexistente por sí misma; se define como ausencia de calor o energía térmica de baja intensidad (coloquialmente materias por debajo de 0 ºC).
- **Punto crítico:** Estado de elevada presión y temperatura por encima del cual desaparece la frontera entre fase líquida y vapor. Si un gas supera su punto crítico no se puede relicuar por sufrir descomposición molecular.
- **Punto de ebullición:** Temperatura a la que una sustancia pasa de estado líquido a gaseoso.
- **Condensación:** Proceso inverso a la ebullición, pasando de fase gaseosa a líquida al disminuir la temperatura o aumentar la presión.
- **Punto de rocío:** Temperatura a la que se inicia la condensación del vapor de agua presente en el aire.

📷 IMAGEN: Esquema de los estados de agregación de la materia y sus transiciones de fase (vaporización, condensación, fusión, solidificación, sublimación, deposición, ionización, desionización) — Fuente: 2. Introducción a la refrigeración.pdf, pág. 19

## Valores de referencia
- **Conversión a Kelvin:** 0 ºC + 273,15 = 273,15 K. (Ejemplo: 10 ºC + 273,15 = 283,15 K).
- **Cero absoluto:** -273,15 ºC (0 K).
- **Conversión a Fahrenheit:** (0 ºC x 9/5) + 32 = 32 ºF. (Ejemplo: 10 ºC x 9/5 + 32 = 50 ºF).
- **Ebullición del agua a presión atmosférica (1 bar):** 100 ºC.
- **Ebullición del agua en circuito presurizado a 3 bar:** 135 ºC.

## Errores de concepto frecuentes
- Considerar el frío como un fluido o magnitud medible de forma independiente al calor.
- Tratar el punto de ebullición de una sustancia como una constante fija sin tener en cuenta la presión a la que está sometida.

---

```yaml
tipo: fundamento
titulo: Relación entre presión y punto de ebullición en fluidos frigoríficos
entidad: fluidos-frigorificos
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "19-21"
relacionados: [refrigerante-r134a, refrigerante-r1234yf, ciclo-frigorifico]
palabras: [presión de vapor, ebullición, R134a, R1234yf, enfriamiento por distensión]
```

## Objeto
Analizar la dependencia entre la presión aplicada y la temperatura de ebullición en los agentes frigoríficos, así como el fenómeno de enfriamiento por distensión.

## Fundamento
Existe una relación directamente proporcional entre la presión del sistema y la temperatura de ebullición de un líquido. Asimismo, la expansión brusca (distensión) de un gas comprimido a través de una válvula genera una acusada caída de su temperatura.

📷 IMAGEN: Gráfica comparativa de las curvas de presión de vapor de los fluidos refrigerantes R134a y R1234yf — Fuente: 2. Introducción a la refrigeración.pdf, pág. 20

## Desarrollo
**Curva de presión de vapor y distensión:**
- Al reducir drásticamente la presión sobre un líquido refrigerante, disminuye su punto de ebullición, facilitando que hierva y absorba calor a temperaturas bajo cero.
- Cuando un gas presurizado se expande rápidamente a través de un orificio estrecho (válvula), la distensión produce un enfriamiento inmediato (principio aplicado en esprays y en la válvula de expansión del vehículo).

**Agentes frigoríficos empleados en automoción:**
- **R134a:** Punto de ebullición a presión atmosférica de -26,5 ºC. Prohibida su instalación en vehículos nuevos desde 2017 por su elevado PCA, aunque se permite para mantenimiento.
- **R1234yf:** Punto de ebullición a presión atmosférica de -29 ºC. Presenta una curva de presión de vapor casi idéntica al R134a pero con un PCA de solo 4.
- **R744 (CO2):** Gas natural utilizado por marcas como Mercedes, con un PCA de 1.
- **Aceite del compresor:** Su punto de ebullición se sitúa entre 380 ºC y 400 ºC.

## Valores de referencia
- **Punto de ebullición del R134a a 1 bar:** -26,5 ºC.
- **Punto de ebullición del R1234yf a 1 bar:** -29 ºC.
- **Punto de ebullición del aceite del compresor:** 380 ºC a 400 ºC.
- **PCA del R1234yf:** 4.
- **PCA del R744 (CO2):** 1.

## Errores de concepto frecuentes
- Asumir que la distensión de un gas presurizado genera calor; al expandirse repentinamente a través de una válvula, la temperatura desciende notablemente.
- Creer que las presiones de trabajo del R1234yf difieren sustancialmente del R134a; sus curvas de presión de vapor son muy similares.

---

```yaml
tipo: componente
titulo: Compresor de aire acondicionado
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21, 22"
relacionados: [condensador, transmisor-presion, deposito-colector]
palabras: [compresión, cilindrada fija, cilindrada variable, accionamiento mecánico, accionamiento eléctrico]
```

## Misión
Aumentar la presión del fluido refrigerante en estado gaseoso y hacerlo circular de manera continua por todos los componentes del circuito cerrado.

## Tipos y características
- De cilindrada fija o de cilindrada variable.
- De accionamiento mecánico (mediante correa acoplada al motor térmico) o eléctrico (utilizado en vehículos híbridos y eléctricos).

## Principio de funcionamiento
Aspira fluido refrigerante frío en fase gaseosa procedente del evaporador a baja presión. Reduce su volumen mediante pistones o espirales, elevando su presión y temperatura antes de expulsarlo hacia el condensador. Debe recibir únicamente gas, ya que los líquidos son incompresibles.

## Valores de trabajo
- **Estado a la salida:** Fase gaseosa a 14 bar de presión y 65 ºC de temperatura.

## Anomalías frecuentes
- Entrada de refrigerante en estado líquido por la toma de aspiración.
- Gripado mecánico por lubricación insuficiente o pérdida de aceite frigorífico.

## Comportamiento en avería
- Destrucción de pistones, válvulas o espirales por choque hidráulico de líquido.
- Incapacidad para elevar la presión del tramo de alta a 14 bar, anulando el rendimiento térmico del sistema.

## Cómo comprobarlo
- Conectar puente de manómetros en la toma de alta y verificar que alcanza aproximadamente 14 bar en funcionamiento.
- Inspeccionar el acoplamiento mecánico o la señal de mando eléctrico procedente de la unidad de control.

## Mantenimiento
- Asegurar la presencia de un silenciador-depósito receptor en la línea de baja si el diseño del circuito lo requiere.
- Respetar el tipo y volumen de aceite frigorífico en el circuito.

---

```yaml
tipo: componente
titulo: Condensador de aire acondicionado
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21, 22"
relacionados: [electroventilador-condensador, filtro-deshidratador, compresor]
palabras: [radiador frontal, licuación, ceder calor, alta presión]
```

## Misión
Recibir el refrigerante gaseoso a alta presión y temperatura impulsado por el compresor, enfriarlo y licuarlo (pasarlo a fase líquida) cediendo su calor al aire exterior.

## Tipos y características
- Radiador intercambiador térmico montado en la parte frontal del vehículo, delante del radiador de refrigeración del motor.

## Principio de funcionamiento
El gas caliente circula por los tubos internos mientras el aire exterior atraviesa sus aletas (por el viento de marcha o forzado por el electroventilador). Al descender la temperatura hasta el punto de rocío a esa presión, el refrigerante se condensa y se transforma en líquido.

## Valores de trabajo
- **Entrada (salida de compresor):** Gas a 14 bar y 65 ºC.
- **Salida:** Líquido a 14 bar y 55 ºC (descenso térmico de unos 10 ºC manteniendo la alta presión).

## Anomalías frecuentes
- Obstrucción externa del panel por acumulación de suciedad, barro o insectos.
- Fugas de refrigerante por impactos de piedras en los tubos de aluminio.

## Comportamiento en avería
- Evaporación o licuación deficiente que dispara la presión de alta por encima de los límites de trabajo, provocando el desacoplamiento del compresor por seguridad.

## Cómo comprobarlo
- Verificar visualmente el estado del aleteado y medir la temperatura con termómetro de contacto a la entrada (65 ºC) y a la salida (55 ºC).

## Mantenimiento
- Limpieza periódica del panel radiador y verificación del correcto funcionamiento del electroventilador.

---

```yaml
tipo: componente
titulo: Filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21, 22"
relacionados: [condensador, valvula-expansion]
palabras: [humedad, impurezas, filtrado, fase líquida]
```

## Misión
Retener las impurezas mecánicas que circulan por el circuito y absorber las moléculas de agua para evitar la acumulación de humedad en el refrigerante líquido.

## Tipos y características
- Depósito metálico vertical ubicado en el tramo de alta presión, entre el condensador y la válvula de expansión.

## Principio de funcionamiento
El refrigerante en fase líquida atraviesa una malla filtrante de partículas y una sustancia desecante de elevada higroscopicidad que fija la humedad antes de enviar el fluido a la válvula de expansión.

## Valores de trabajo
- **Entrada y salida:** Líquido a 14 bar de presión y 55 ºC de temperatura (parámetros inalterados).

## Anomalías frecuentes
- Obstrucción del elemento filtrante por suciedad.
- Saturación del compuesto desecante por humedad excesiva en el circuito.

## Comportamiento en avería
- Caída de presión a la salida del filtro que provoca un enfriamiento anómalo del cuerpo del filtro (estrangulamiento interno).
- Formación de tapones de hielo en la válvula de expansión por humedad libre.

## Cómo comprobarlo
- Comprobar que no exista salto térmico entre la tubería de entrada y la de salida (ambas deben estar a 55 ºC).

## Mantenimiento
- Sustitución obligatoria en cada intervención que implique la apertura del circuito frigorífico a la atmósfera.

---

```yaml
tipo: componente
titulo: Transmisor de presión del circuito de aire acondicionado
entidad: transmisor-presion
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21, 22"
relacionados: [compresor, unidad-control-climatizador]
palabras: [trinaria, manocontacto, sensor MAP, circuito alta presión]
```

## Misión
Supervisar la presión existente en la línea de alta presión para enviar la información a la unidad de control y gestionar la activación del compresor y del electroventilador.

## Tipos y características
- Manocontacto electromecánico de presión por saltos (conmutador tipo trinaria).
- Sensor de presión electrónico de señal continua proporcional (tipo MAP).

## Principio de funcionamiento
Transforma la presión hidráulica del gas en una señal eléctrica (discreta o analógica/PWM) para que la unidad de control corte la corriente al compresor si la presión es peligrosamente baja (fuga) o excesivamente alta (sobrepresión).

## Valores de trabajo
- **Ubicación:** Tramo de alta presión (~14 bar nominales).

## Anomalías frecuentes
- Fallo de comunicación o cortocircuito interno.
- Descalibración de la resistencia interna de medida.

## Comportamiento en avería
- Desconexión permanente del compresor por falsa lectura de presión peligrosa.
- No activación de las velocidades del electroventilador del condensador.

## Cómo comprobarlo
- Lectura de bloques de valores con equipo de diagnosis o verificación de continuidad eléctrica con polímetro.

## Mantenimiento
- Reemplazar la junta tórica de sellado en la rosca de conexión al sustituir la pieza.

---

```yaml
tipo: componente
titulo: Válvula de expansión
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21, 22, 23"
relacionados: [evaporador, filtro-deshidratador, estrangulador]
palabras: [distensión, caída de presión, pulverización, evaporador]
```

## Misión
Producir la caída drástica de presión del agente frigorífico líquido y pulverizarlo hacia el interior del evaporador para provocar su inmediata distensión y enfriamiento.

## Tipos y características
- Válvula dosificadora de expansión térmica (o estrangulador fijo según el esquema del circuito).

## Principio de funcionamiento
Obliga al fluido líquido a alta presión a pasar por un orificio estrecho hacia el tramo de baja presión. Durante esta distensión súbita, el gas se atomiza y su temperatura se reduce drásticamente.

## Valores de trabajo
- **Entrada (alta presión):** Líquido a 14 bar y 55 ºC.
- **Salida (baja presión):** Mezcla pulverizada a 1,2 bar y -7 ºC.

## Anomalías frecuentes
- Bloqueo del paso interno por congelación de agua o impurezas.
- Grietas o fallos en el elemento termostático de regulación.

## Comportamiento en avería
- **Bloqueo en posición cerrada:** Falta total de paso de gas al evaporador; la presión de baja cae al vacío y el sistema no enfría.
- **Bloqueo en posición abierta:** Paso masivo de líquido sin evaporar que alcanza la toma de aspiración del compresor.

## Cómo comprobarlo
- Comprobar la diferencia de presiones y temperaturas entre la tubería de entrada (14 bar / 55 ºC) y la de salida (1,2 bar / -7 ºC) con manómetros.

## Mantenimiento
- Garantizar la sustitución periódica del filtro deshidratador para evitar la acumulación de humedad.

---

```yaml
tipo: componente
titulo: Evaporador de aire acondicionado
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21, 23"
relacionados: [valvula-expansion, deposito-colector, ventilador-habitaculo]
palabras: [radiador interior, absorción de calor, deshidratación de aire, turbina]
```

## Misión
Intercambiador térmico instalado en el módulo de climatización interior donde el refrigerante se evapora absorbiendo el calor del aire que ingresa al habitáculo, enfriándolo, deshidratándolo y depurándolo.

## Tipos y características
- Radiador de aletas finas de aluminio situado en la caja distribuidora de aire bajo el salpicadero.

## Principio de funcionamiento
El agente frigorífico rociado a baja presión (-7 ºC) circula por sus tubos. La turbina fuerza el paso del aire exterior caliente a través del panal; el refrigerante hierve al absorber ese calor y el aire pierde energía térmica, condensando su humedad sobre las aletas exteriores.

## Valores de trabajo
- **Estado interno del fluido:** 1,2 bar de presión y -7 ºC de temperatura.
- **Descenso térmico del aire soplado:** Aire captado a 24 ºC se reduce hasta salir impulsa a 4 ºC (caída térmica de unos 20 ºC).

## Anomalías frecuentes
- Acumulación de bacterias y hongos por humedad estancada en las aletas.
- Congelación de la humedad sobre la superficie exterior del panel que tapona el paso del aire.

## Comportamiento en avería
- Malos olores en la salida de los difusores.
- Reducción brusca del caudal de aire impulsado al habitáculo por congelación del panal.

## Cómo comprobarlo
- Medir la temperatura del aire soplado en difusores con termómetro (debe alcanzar ~4 ºC con aire de entrada a 24 ºC).

## Mantenimiento
- Sustitución periódica del filtro antipolen y aplicación de productos químicos higienizantes sobre el panal.

---

```yaml
tipo: componente
titulo: Silenciador - depósito receptor
entidad: deposito-colector
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21"
relacionados: [compresor, evaporador]
palabras: [circuito de baja, aspiración de líquido, protección de compresor]
```

## Misión
Retener el fluido refrigerante que pudiera permanecer en estado líquido a la salida del evaporador para impedir que sea aspirado por el compresor.

## Tipos y características
- Depósito cilíndrico acumulador dispuesto en el tramo de baja presión. No se monta en la totalidad de los circuitos y en determinados modelos se vende acoplado a la tubería de baja sin recambio independiente.

## Principio de funcionamiento
Separa por gravedad la fase líquida de la gaseosa en la línea de aspiración, garantizando que el compresor absorba únicamente gas refrigerante.

## Valores de trabajo
- **Ubicación:** Tramo de baja presión entre la salida del evaporador y la entrada de aspiración del compresor (~1,2 bar).

## Anomalías frecuentes
- Deformaciones mecánicas o fugas en las uniones de las tuberías.

## Comportamiento en avería
- Paso imprevisto de refrigerante líquido al compresor con riesgo de avería catastrófica de los elementos móviles.

## Cómo comprobarlo
- Inspeccionar visualmente el estado del cuerpo cilíndrico y sus conexiones rígidas.

## Mantenimiento
- Sustitución junto con el tramo flexo-rígido de baja presión cuando la pieza no se despiece individualmente.

---

```yaml
tipo: fundamento
titulo: Funcionamiento hidráulico del circuito de aire acondicionado
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21-23"
relacionados: [compresor, condensador, valvula-expansion, evaporador]
palabras: [tramo alta presión, tramo baja presión, intercambio térmico, temperaturas y presiones de trabajo]
```

## Objeto
Describir el recorrido del fluido refrigerante en circuito cerrado por compresión, sus cambios de estado y las evoluciones de presión y temperatura.

## Fundamento
Transferencia de calor continua mediante compresión en fase gaseosa, condensación (cesión de calor a alta presión) y evaporación por distensión (absorción de calor a baja presión).

📷 IMAGEN: Esquema hidráulico general del circuito de aire acondicionado con indicación de presiones (14 bar / 1,2 bar) y temperaturas (65 ºC, 55 ºC, -7 ºC, 24 ºC, 4 ºC) — Fuente: 2. Introducción a la refrigeración.pdf, pág. 22

## Desarrollo
**Secuencia del circuito de Alta Presión:**
1. **Compresor:** Aspira gas frío de baja presión y lo comprime elevándolo a 14 bar y 65 ºC en fase gaseosa.
2. **Condensador:** El flujo de aire exterior enfría el gas hasta su punto de rocío a 14 bar, licuándolo a 55 ºC (cede calor al exterior).
3. **Filtro deshidratador:** Retiene humedad e impurezas manteniendo el líquido a 14 bar y 55 ºC.

**Secuencia del circuito de Baja Presión:**
4. **Válvula de expansión:** Rocía el líquido hacia el evaporador provocando una caída brusca a 1,2 bar y -7 ºC.
5. **Evaporador:** El refrigerante hierve absorbiendo energía térmica del aire movido por la turbina (el aire entra a 24 ºC y sale a 4 ºC al habitáculo).
6. **Retorno:** El refrigerante sale del evaporador en estado gaseoso a 1,2 bar y -7 ºC hacia la aspiración del compresor.

## Valores de referencia
- **Salida del compresor:** 14 bar / 65 ºC (Gaseoso).
- **Salida del condensador y filtro:** 14 bar / 55 ºC (Líquido).
- **Salida de la válvula de expansión / evaporador:** 1,2 bar / -7 ºC (Mezcla/Gas).
- **Salto térmico del aire en habitáculo:** Entrada a 24 ºC, salida a 4 ºC (caída de 20 ºC).

## Errores de concepto frecuentes
- Creer que el circuito suministra "aire frío" creado de la nada; el sistema funciona extrayendo el calor del aire captado del exterior.
- Suponer que la compresión puede realizarse sobre líquido; comprimir fase líquida destruye mecánicamente el compresor.

---

```yaml
tipo: componente
titulo: Tuberías y racores del circuito frigorífico
entidad: tuberias-y-racores
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "23"
relacionados: [ciclo-frigorifico]
palabras: [aluminio, neopreno, nylon, juntas tóricas HNBR, verde]
```

## Misión
Interconectar los elementos hidráulicos del sistema de climatización asegurando la estanqueidad absoluta del fluido refrigerante y del aceite a altas presiones y temperaturas.

## Tipos y características
- Tuberías rígidas de aluminio para tramos fijos montados sobre la carrocería.
- Tubos flexibles de neopreno reforzado con barrera interior de nylon para tramos sometidos a oscilaciones del motor.
- Juntas tóricas de goma hidrogenada de color verde (HNBR).

## Principio de funcionamiento
Canalizan mecánicamente el fluido. Las juntas tóricas verdes HNBR absorben las expansiones y deformaciones de las uniones roscadas manteniendo el sellado frente a la acción química del refrigerante y del aceite del compresor.

## Valores de trabajo
- **Resistencia térmica máxima de las juntas verdes (HNBR):** Hasta 130 ºC.
- **Presión de trabajo soportada:** Hasta 14 bar en el tramo de alta presión.

## Anomalías frecuentes
- Cuarteamiento o rozamiento en el neopreno exterior de los tubos flexibles.
- Deformación o envejecimiento térmico de las juntas tóricas.

## Comportamiento en avería
- Pérdida progresiva de la carga de gas frigorífico con caída paulatina de la capacidad de enfriamiento.

## Cómo comprobarlo
- Buscar rastros de aceite o aplicar detector electrónico de fugas y lámpara ultravioleta (UV) sobre los racores de conexión.

## Mantenimiento
- Sustituir las juntas tóricas verdes (HNBR) por unidades nuevas en cada desmontaje, humedeciéndolas previamente con aceite frigorífico antes de su apriete.

---

```yaml
tipo: fundamento
titulo: Opciones de climatización en el automóvil
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "23"
relacionados: [unidad-control-climatizador]
palabras: [calefacción, aire acondicionado, climatizador automático, monozona, bizona, autodiagnóstico]
```

## Objeto
Diferenciar las distintas tecnologías de acondicionamiento del aire en los vehículos según su capacidad de regulación térmica y grado de automatización.

## Fundamento
Gestión de la temperatura, caudal y distribución del aire impulsado al interior del habitáculo por medios manuales, semiautomáticos o electrónicos.

## Desarrollo
**Categorías de equipamiento:**
- **Calefacción-Ventilación:** Control manual por el usuario. Permite únicamente elevar la temperatura del aire sobre la del exterior aprovechando el calor del circuito de refrigeración del motor.
- **Aire Acondicionado:** Sistema manual o semiautomático dotado de circuito frigorífico. Permite elevar o reducir la temperatura del aire. El usuario selecciona la velocidad del ventilador y los difusores de salida.
- **Climatización Automática (Climatronic):** Regulación gestionada por unidad de control electrónica. El usuario fija la temperatura deseada (consigna) y la UCE regula automáticamente la velocidad de la turbina, la mezcla y la distribución del aire por los difusores.
  - *Variantes de habitáculo:* Configuración monozona, bizona o cuatrizona (ajuste independiente para distintos ocupantes).
  - *Diagnóstico:* Dispone de memoria de averías y autodiagnóstico mediante equipo de diagnosis.

## Valores de referencia
- **Opciones de climatización automática:** Monozona, bizona y cuatrizona.

## Errores de concepto frecuentes
- Asumir que la calefacción tradicional puede enfriar el aire exterior por debajo de la temperatura ambiente sin contar con un sistema por compresión.
- Ajustar manualmente la velocidad del ventilador en un climatizador automático para enfocar una bajada de temperatura; el sistema ajusta el caudal de forma autónoma según la consigna.

---

COBERTURA: documento «2. Introducción a la refrigeración.pdf», páginas 17 a 23 de 23. [completo]