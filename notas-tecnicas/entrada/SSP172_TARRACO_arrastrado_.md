```yaml
tipo: fundamento
titulo: Climatronic de 3 zonas
entidad: regulacion-automatica
variante: tres-zonas
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "59-61"
relacionados: [unidad-control-climatizador, unidad-mandos-trasera, distribucion-aire]
palabras: [climatronic, 3 zonas, regulación automática, aircare, pureair]
```

## Objeto
Regular automáticamente la temperatura, el caudal y la salida del aire de forma independiente en 3 zonas del habitáculo (conductor, acompañante y plazas traseras) en el SEAT Tarraco. (págs. 59-60)

## Fundamento
El sistema utiliza dos configuraciones de climatización (manual y Climatronic). En la versión Climatronic de 3 zonas, la unidad de control J255 procesa la información de múltiples sensores térmicos y solares, y se comunica vía CAN-Bus Confort y LIN-Bus Clima para accionar eléctricamente los servomotores y la turbina. (págs. 59-61)

## Desarrollo
El sistema Climatronic de 3 zonas abarca las siguientes funciones principales:
- Regulación independiente de la temperatura para el conductor, acompañante y plazas traseras (esta última gestionada localmente desde la unidad de mandos E265 en la consola central trasera).
- Regulación del caudal y de las salidas de aire hacia los difusores.
- Recirculación automática según la calidad del aire detectada por el sensor G238.
- Función PureAir (AirCare) para la purificación del aire del habitáculo.
- Solicitud de activación de la luneta térmica y de los asientos calefactados (delanteros y traseros).
- Programación de la calefacción estacionaria y gestión de parámetros desde la pantalla del equipo de infotenimiento.

La arquitectura de red interconecta a la UCE J255 mediante el CAN-Bus Confort con la interfaz J533, UCE de red de a bordo J519 y unidades de puerta, mientras que al LIN-Bus Clima están abonados el sensor de presión G805, el sensor de calidad del aire G238, la unidad trasera E265 y la UCE de la turbina J126. (págs. 59-61)

📷 IMAGEN: Esquema de interconexión vía CAN-Bus Confort y LIN-Bus Clima de la unidad de control J255 con sus sensores y actuadores — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 61

## Valores de referencia
- Número de zonas de regulación independiente: 3 zonas (conductor, acompañante y plazas traseras). (pág. 59)

## Errores de concepto frecuentes
Asumir que los mandos traseros E265 regulan la temperatura directamente mediante cableado analógico hacia los servomotores. La unidad E265 transmite las solicitudes a la UCE J255 a través de la línea digital LIN-Bus Clima. (págs. 59, 61)

---

```yaml
tipo: componente
titulo: Unidad de control del Climatronic
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "59-61"
relacionados: [unidad-mandos-trasera, servomotor-trampilla, regulacion-automatica]
palabras: [j255, climatronic, can-bus confort, lin-bus clima, aircare]
```

## Misión
Procesar las señales de los sensores, gestionar las comunicaciones de red y gobernar los actuadores del sistema para conseguir el funcionamiento totalmente automático de la climatización de 3 zonas. (págs. 59-61)

## Tipos y características
Unidad de control electrónica integrada en la consola central con panel de mandos e indicación digital. Conectada al CAN-Bus Confort como nodo principal del sistema y como maestra de la línea LIN-Bus Clima. (págs. 59-61)

## Principio de funcionamiento
Recibe señales analógicas y digitales de sensores (G308, G385, G386, G192, G107, G174 y potenciómetros) e información del LIN-Bus Clima (G805, G238, E265, J126). Procesa estos datos para calcular la temperatura y caudal óptimos, gobernando la válvula N280 del compresor, la turbina V2 y los servomotores de trampillas (V158, V159, V137, V237, V425, V107). (págs. 59-61)

## Valores de trabajo
- Tensión de alimentación: tensión de red de a bordo (12 V nominales). (pág. 61)

## Anomalías frecuentes
No documentado en fuentes. (págs. 59-61)

## Comportamiento en avería
No documentado en fuentes. (págs. 59-61)

## Cómo comprobarlo
Diagnóstico electrónico mediante la conexión U31 accediendo por la interfaz J533 a la memoria de averías y valores de medición del CAN-Bus Confort. (pág. 61)

## Mantenimiento
No requiere mantenimiento preventivo. (págs. 59-61)

---

```yaml
tipo: componente
titulo: Unidad de mandos e indicación trasera del climatizador
entidad: unidad-mandos-trasera
area: climatizacion
sistema: control-climatizacion
codigo: E265
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "59, 61, 66"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador, asientos-calefactados]
palabras: [e265, mandos traseros, consola central, lin-bus clima, asientos traseros calefactados]
```

## Misión
Permitir a los pasajeros de las plazas traseras ajustar de forma independiente la temperatura de su zona y accionar la calefacción de los asientos traseros. (págs. 59, 61, 66)

## Tipos y características
Módulo de mando e indicación ubicado en la parte trasera de la consola central, abonado como esclavo a la línea LIN-Bus Clima. (págs. 59, 61)

## Principio de funcionamiento
Captura los impulsos de los botones de selección de temperatura y de los pulsadores de los asientos traseros calefactados (ZX10 y ZX12), transmitiendo estos estados a la UCE máster J255 a través del LIN-Bus Clima. (págs. 59, 61, 66)

## Valores de trabajo
No documentado en fuentes. (págs. 59, 61, 66)

## Anomalías frecuentes
No documentado en fuentes. (págs. 59, 61, 66)

## Comportamiento en avería
No documentado en fuentes. (págs. 59, 61, 66)

## Cómo comprobarlo
Verificación de la comunicación en la línea LIN-Bus Clima y lectura de bloques de valores mediante el equipo de diagnosis conectado a J255. (pág. 61)

## Mantenimiento
No requiere. (págs. 59, 61, 66)

---

```yaml
tipo: componente
titulo: Unidad climática
entidad: caja-climatizadora
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "62-63"
forma_parte_de: distribucion-aire
relacionados: [servomotor-trampilla, evaporador, radiador-calefaccion]
palabras: [unidad climatica, bloque distribucion, g308, g192, v2, j126, servomotores]
```

## Misión
Albergar y agrupar físicamente los intercambiadores térmicos (evaporador del aire acondicionado y radiador de la calefacción), los sensores de temperatura y los actuadores encargados de mezclar e impulsar el aire hacia el habitáculo. (págs. 62-63)

## Tipos y características
Caja o bloque de distribución térmica montado tras el salpicadero. Integra el evaporador, el radiador de la calefacción, la turbina de aire exterior V2 con su UCE J126, los sensores G308 y G192, y 6 servomotores eléctricos de trampillas. (págs. 62-63)

📷 IMAGEN: Despiece de componentes de la unidad climática con ubicación de servomotores, radiador de calefacción y sensores — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 62

## Principio de funcionamiento
Canaliza el flujo de aire generado por la turbina V2 impulsándolo a través del evaporador y/o radiador de calefacción según la posición geométrica de las trampillas accionadas por los servomotores (V158, V159, V137, V237, V425, V107). (págs. 62-63)

## Valores de trabajo
No documentado en fuentes. (págs. 62-63)

## Anomalías frecuentes
No documentado en fuentes. (págs. 62-63)

## Comportamiento en avería
No documentado en fuentes. (págs. 62-63)

## Cómo comprobarlo
No documentado en fuentes. (págs. 62-63)

## Mantenimiento
Sustitución o limpieza periódica de componentes asociados según el plan de mantenimiento del vehículo. (págs. 62-63)

---

```yaml
tipo: componente
titulo: Servomotor del difusor de aire directo delantero izquierdo
entidad: servomotor-trampilla
variante: difusor-directo-v237
area: climatizacion
sistema: distribucion-aire
codigo: V237
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "60, 62-64"
forma_parte_de: caja-climatizadora
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [v237, servomotor, palancas, cables bowden, tablero, reposapies, consola central]
```

## Misión
Accionar mecánicamente las trampillas de distribución de aire hacia los difusores del tablero de instrumentos, zona reposapiés delantera, reposapiés trasera y consola central trasera. (págs. 63-64)

## Tipos y características
Actuador eléctrico de posicionamiento con potenciómetro de realimentación integrado, ubicado en la unidad climática. Conectado cinemáticamente mediante un sistema combinado de palancas rígidas y dos cables Bowden. (págs. 60, 63-64)

## Principio de funcionamiento
Al recibir órdenes de la UCE J255, el servomotor V237 gira accionado sus varillajes:
- Sistema de palancas: acciona directamente las trampillas de los difusores del tablero de instrumentos y de la zona reposapiés delantera.
- Cables Bowden: transmiten el movimiento hacia la trampilla de la zona reposapiés trasera (izquierda y derecha) y hacia la trampilla trasera de la consola central.
Cuando se selecciona salida por el tablero, abre difusores del tablero y consola central trasera mientras cierra reposapiés delantero y trasero; al seleccionar reposapiés, actúa de forma inversa. (págs. 63-64)

📷 IMAGEN: Mecanismo cinemático del servomotor V237 con sistema de palancas y cables Bowden hacia la zona trasera — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 64

## Valores de trabajo
No documentado en fuentes. (págs. 63-64)

## Anomalías frecuentes
Desajuste, agarrotamiento o rotura en los cables Bowden o palancas articuladas. (págs. 63-64)

## Comportamiento en avería
Imposibilidad de alternar el flujo de aire entre la zona superior (tablero/consola) y la zona inferior (reposapiés). (págs. 63-64)

## Cómo comprobarlo
Comprobación del recorrido de los cables Bowden y lectura de posiciones del potenciómetro en la función de diagnóstico de actuadores y ajuste básico de J255. (págs. 60, 63-64)

## Mantenimiento
Ajuste básico de topes mediante equipo de diagnosis tras su sustitución o desmontaje. (págs. 60, 63-64)

---

```yaml
tipo: componente
titulo: Servomotor de la trampilla de temperatura trasera
entidad: servomotor-trampilla
variante: temperatura-trasera-v137
area: climatizacion
sistema: control-climatizacion
codigo: V137
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "60, 62-65"
forma_parte_de: caja-climatizadora
relacionados: [unidad-control-climatizador, regulacion-automatica]
palabras: [v137, temperatura trasera, palancas, aire frio, aire caliente]
```

## Misión
Accionar las trampillas de mezcla de aire frío y aire caliente dedicadas específicamente a la regulación térmica de las plazas traseras. (págs. 63, 65)

## Tipos y características
Servomotor eléctrico de regulación con potenciómetro de posición interno, montado en la unidad climática y enlazado con dos sistemas independientes de palancas a ambos lados de la carcasa. (págs. 60, 63, 65)

## Principio de funcionamiento
Gobernado por la UCE J255, su eje acciona un mecanismo cinemático de palancas dobles:
- Parte izquierda de la unidad climática: el sistema de palancas acciona la trampilla de aire frío de la zona trasera.
- Parte derecha de la unidad climática: el sistema de palancas acciona la trampilla de aire caliente de la zona trasera.
Variando la apertura proporcional de ambas trampillas se logra la mezcla térmica solicitada, la cual es supervisada por el termosensor G174. (págs. 64-65)

📷 IMAGEN: Ubicación del servomotor V137 y sistema de palancas articuladas a ambos lados de la unidad climática — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 65

## Valores de trabajo
No documentado en fuentes. (págs. 63-65)

## Anomalías frecuentes
Holguras o desarticulación en las palancas laterales. (págs. 64-65)

## Comportamiento en avería
Incapacidad para ajustar la temperatura en la zona trasera (salida constante de aire frío o caliente). (págs. 64-65)

## Cómo comprobarlo
Supervisión del valor de temperatura del sensor G174 y diagnóstico de actuadores/ajuste básico con máquina de diagnosis. (págs. 60, 65)

## Mantenimiento
Ajuste básico con equipo de diagnosis tras cualquier intervención. (págs. 60, 65)

---

```yaml
tipo: fundamento
titulo: Distribución del aire en la zona trasera
entidad: distribucion-aire
variante: zona-trasera
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "63-64"
relacionados: [servomotor-trampilla, caja-climatizadora]
palabras: [distribución trasera, v237, palancas, cables bowden, reposapiés, consola central]
```

## Objeto
Coordinar el flujo de aire hacia los difusores de las plazas traseras de forma simultánea a la selección realizada para las plazas delanteras. (págs. 63-64)

## Fundamento
La distribución trasera no cuenta con un servomotor independiente exclusivo, sino que se realiza de forma conjunta con la delantera mediante el accionamiento del servomotor V237. (págs. 63-64)

## Desarrollo
Cuando el usuario selecciona la salida del aire desde el panel de mandos, la UCE J255 acciona el servomotor V237 de la siguiente forma:
- Selección por difusores del tablero: el V237 abre las trampillas del tablero de instrumentos y cierra las del reposapiés delantero (mediante palancas); simultáneamente, abre la trampilla de la consola central trasera y cierra las trampillas del reposapiés trasero (mediante los cables Bowden).
- Selección por reposapiés: el V237 invierte el movimiento, cerrando el tablero de instrumentos y la consola central trasera, y abriendo las trampillas de reposapiés delantero y reposapiés trasero. (págs. 63-64)

## Valores de referencia
No documentado en fuentes. (págs. 63-64)

## Errores de concepto frecuentes
Creer que la zona trasera dispone de un servomotor independiente para seleccionar si el aire sale por los pies o por la consola central. La selección de salida trasera está vinculada a la delantera a través del servomotor V237 y sus cables Bowden. (págs. 63-64)

---

```yaml
tipo: fundamento
titulo: Regulación de la temperatura del aire en la zona trasera
entidad: regulacion-automatica
variante: temperatura-trasera
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "64-65"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [temperatura trasera, v137, g174, mezcla frio caliente, palancas]
```

## Objeto
Gestionar la mezcla de aire frío y caliente necesaria para mantener la temperatura consignada en la 3ª zona (plazas traseras). (págs. 64-65)

## Fundamento
La UCE J255 regula la posición del servomotor V137 según el valor solicitado en los mandos traseros E265 (o en la pantalla principal) y retroalimenta el bucle de control con el sensor G174. (págs. 64-65)

## Desarrollo
El proceso de regulación abarca los siguientes componentes y pasos:
- Servomotor V137: modifica la posición de las trampillas de aire frío (ubicadas a la izquierda) y de aire caliente (ubicadas a la derecha de la unidad climática) mediante palancas articuladas.
- Sensor de temperatura G174: montado en el difusor trasero de la consola central, mide continuamente la temperatura del aire soplado hacia atrás.
- Control en bucle cerrado: la UCE J255 compara la medición de G174 con la consigna solicitada en E265 y corrige la posición de V137 hasta estabilizar la temperatura del flujo. (págs. 64-65)

## Valores de referencia
No documentado en fuentes. (págs. 64-65)

## Errores de concepto frecuentes
Pensar que la temperatura trasera se calcula de forma estimada sin sensor de verificación. El sistema utiliza el sensor G174 montado en la consola central trasera para medir en tiempo real el aire soplado. (pág. 65)

---

```yaml
tipo: fundamento
titulo: Gestión eléctrica de los asientos calefactados
entidad: asientos-calefactados
area: confort-y-seguridad
sistema: NUEVO-calefaccion-asientos
fabricante: SEAT
fuente: "SSP172 TARRACO (arrastrado).pdf"
paginas: "65-66"
relacionados: [unidad-control-climatizador, unidad-mandos-trasera]
palabras: [asientos calefactados, z45, z46, zx10, zx12, j519, gestion carga electrica, can-bus confort]
```

## Objeto
Gobernar la alimentación y encendido de las mantas térmicas de los asientos delanteros y traseros coordinadamente con la gestión de la carga eléctrica del vehículo. (págs. 65-66)

## Fundamento
Los pulsadores de activación leen sus órdenes a través de la UCE J255 (asientos delanteros Z45 y Z46) o de la unidad trasera E265 (asientos traseros ZX10 y ZX12 vía LIN-Bus Clima). La activación final la autoriza la UCE de la red de a bordo J519. (págs. 65-66)

## Desarrollo
El flujo de funcionamiento y control eléctrico es el siguiente:
- Selección de mando: los asientos delanteros se activan desde los pulsadores de la UCE J255. Los asientos traseros laterales de la segunda fila se activan desde la unidad E265, la cual envía el estado de los pulsadores a J255 por la línea LIN-Bus Clima.
- Transmisión por CAN-Bus: la UCE J255 emite hacia el CAN-Bus Confort las solicitudes de encendido de todos los asientos calefactados.
- Validación por la UCE J519: la unidad de control de la red de a bordo J519 recibe los mensajes. Si la función de gestión de la carga eléctrica está activa (por baja tensión de batería o elevado consumo del alternador), J519 deniega o desactiva la alimentación de los asientos calefactados para proteger el balance eléctrico. (págs. 65-66)

📷 IMAGEN: Esquema eléctrico de conexiones de los asientos calefactados Z45, Z46, ZX10, ZX12 con J255, E265 y J519 vía CAN-Bus — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 65

## Valores de referencia
- Ubicación de plazas calefactadas: delanteras e izquierda/derecha de la 2ª fila trasera. (pág. 65)

## Errores de concepto frecuentes
Creer que el climatizador activa directamente los relés o mantas térmicas de los asientos calefactados. La habilitación definitiva depende de la UCE J519, que puede desactivarlos en función del estado de la gestión de carga eléctrica. (pág. 66)

---

COBERTURA: documento «SSP172 TARRACO (arrastrado).pdf», páginas 59 a 66 de 66. [completo]