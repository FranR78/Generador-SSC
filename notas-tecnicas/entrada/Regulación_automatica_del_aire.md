```yaml
tipo: componente
titulo: Transmisor de presión y temperatura del agente frigorífico G395
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
codigo: G395
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "168-169"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, electroventilador-condensador, valvula-reguladora-compresor]
palabras: [G395, LIN-Bus, carcasa gris, presión del circuito, J519]
```

## Misión
Medir continuamente la presión en el lado de alta presión del circuito frigorífico para informar a las unidades de control de la red sobre las necesidades de condensación y protección del compresor. (pág. 168)

## Tipos y características
Sensor de presión electrónico piezoeléctrico con carcasa de color gris montado en el condensador. Transmite información digitalizada mediante una línea de bus de datos LIN a la unidad de control de la red de a bordo J519. Sustituye al transmisor G65 de versiones anteriores. (págs. 168-169)

## Principio de funcionamiento
Mide la presión del fluido a la salida del condensador. La unidad de control de la red de a bordo J519 lee el valor del sensor a través del cable LIN-Bus y lo retransmite por el bus CAN de confort hacia el panel de mandos e indicación Climatronic J255. La señal de temperatura integrada en el sensor no se utiliza actualmente para la regulación del climatizador. (págs. 168-169)

📷 IMAGEN: Situación del sensor de presión y temperatura G395 en la toma roscada del condensador — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 168

## Valores de trabajo
- Par de apriete de montaje en la toma del condensador: 8 Nm. (pág. 168)
- Lectura por defecto en autodiagnóstico ante falta de señal o desconexión: > 40 bares. (pág. 43)

## Anomalías frecuentes
Fugas de refrigerante por envejecimiento de la junta tórica o interrupción del cable de comunicación LIN-Bus. (pág. 168)

## Comportamiento en avería
Se inscribe una avería en la memoria de las unidades J519 y J255, desconectando el compresor por seguridad para evitar sobrepresiones o trabajo en seco. (págs. 43, 168)

## Cómo comprobarlo
Consultar los bloques de valores de medición 001 (campo 4) y 056 (campo 1) mediante el equipo de autodiagnóstico VAS 5051. (págs. 43, 168)

## Mantenimiento
Reemplazar la junta tórica de sellado en cada desmontaje y humedecerla con aceite para máquinas frigoríficas antes de roscar el sensor al par de 8 Nm. Su desmontaje no exige evacuar el circuito gracias a la válvula de retención del empalme. (pág. 168)

---

```yaml
tipo: componente
titulo: Válvula reguladora del compresor de climatización N280
entidad: valvula-reguladora-compresor
area: climatizacion
sistema: circuito-frigorifico
codigo: N280
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "176-177"
forma_parte_de: compresor
relacionados: [compresor, unidad-control-climatizador]
palabras: [N280, PWM, corriente de control, J519, cilindrada variable, sin acoplamiento]
```

## Misión
Ajustar la presión interna en la cámara del compresor para modificar la inclinación del plato oscilante y variar de forma continua el volumen de desplazamiento de los pistones. (págs. 31, 176)

## Tipos y características
Electroválvula de regulación de presión proporcional alojada en la culata posterior del compresor. Es excitada por la unidad de control de la red de a bordo J519 tras recibir la solicitud de la centralita Climatronic J255. (págs. 12, 176)

## Principio de funcionamiento
Recibe una señal eléctrica modulada por anchura de impulsos (PWM). La unidad J519 regula la intensidad de corriente efectiva que atraviesa la bobina (entre 0 A y 0,8 A). Al variar el campo magnético, la válvula modifica la presión de carrera de los pistones, aumentando o reduciendo el flujo de gas comprimido inyectado al evaporador. (págs. 42, 176-177)

📷 IMAGEN: Conexión del equipo de medición entre el conector del mazo de cables y la válvula reguladora N280 en el compresor — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 176

## Valores de trabajo
- Corriente de control nominal de activación: > 0,3 A para asegurar el inicio de compresión. (pág. 120)
- Modulación PWM en demanda máxima de frío (modo Auto / LO): señal cuadrada con anchura de pulso entre el 75% y el 100%. (pág. 177)
- Modulación PWM en modo OFF o AC OFF: 0 A (0% de anchura de pulso). (pág. 177)

## Anomalías frecuentes
Fallo de aislamiento en la bobina electromagnética o corte en las líneas de alimentación de potencia desde la unidad J519. (págs. 176-177)

## Comportamiento en avería
El compresor permanece regulado al mínimo rendimiento (aproximadamente 0% de caudal), interrumpiéndose la producción de aire frío. (págs. 155, 177)

## Cómo comprobarlo
Conectar el osciloscopio digital (DSO) con el set de cables adaptadores V.A.G 1594 C al conector de la válvula para verificar la forma de onda rectangular de la señal PWM y medir la corriente efectiva en el bloque de valores de medición 001. (págs. 42, 176-177)

## Mantenimiento
La válvula N280 forma un conjunto indivisible con el cuerpo del compresor de recambio; si sufre un fallo mecánico interno exige la sustitución del compresor. (pág. 28)

---

```yaml
tipo: componente
titulo: Servomotores de las chapaletas de climatización con LIN-Bus
entidad: servomotor-trampilla
variante: lin-bus-audi
area: climatizacion
sistema: distribucion-aire
codigo: V68 / V107 / V108 / V109 / V110 / V111 / V113 / V137 / V158 / V159 / V261
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "18, 231, 236, 249"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [servomotores, LIN-Bus, direccionamiento automático, sector dentado, ajuste básico, circuito en serie]
```

## Misión
Accionar las chapaletas de regulación de temperatura, descongelación, recirculación y distribución de aire en la carcasa del climatizador. (págs. 231, 236)

## Tipos y características
Actuadores eléctricos equipados con un módulo electrónico integrado. Todos los servomotores del vehículo son técnicamente idénticos como pieza de recambio y están interconectados en serie mediante un único cable de bus de datos LIN-Bus conectado a la centralita Climatronic J255. (págs. 18, 231, 236)

## Principio de funcionamiento
Reciben las órdenes de movimiento transmitidas en serie por la centralita J255 a través del LIN-Bus. Durante la función de "Ajuste básico" (grupo 004), los servomotores reconocen y memorizan permanentemente su dirección física y función específica en función del orden secuencial en el que están instalados en el mazo de cables. (págs. 18, 231, 236)

📷 IMAGEN: Esquema del circuito en serie LIN-Bus entre la centralita J255 y la cadena de servomotores — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 231

## Valores de trabajo
- Valores de tope autoadaptados en memoria: tope inferior "10000" y tope superior entre "11000" y "20000". (pág. 45)
- Alimentación: Tensión de red de a bordo e interfaz de bus de datos LIN (terminal T16). (págs. 45, 231)

## Anomalías frecuentes
Desalineación del sector dentado de accionamiento con la marca de la carcasa o alteración de la secuencia de conexión física del cableado durante desmontajes. (págs. 231, 249)

## Comportamiento en avería
Registro de los códigos de avería "Direccionamiento automático incorrecto" o "Límite superior/inferior sobrepasado", provocando un posicionamiento erróneo de las trampillas. (págs. 18, 231)

## Cómo comprobarlo
Iniciar la función "Ajuste básico" en los grupos de indicación 004 y 001 con la estación de diagnosis VAS 5051 para autoadaptar las posiciones finales de recorrido. (págs. 18, 231)

## Mantenimiento
Al montar un servomotor nuevo, comprobar antes de encajarlo que el primer diente del sector dentado queda encarado con la marca "C" del soporte de plástico. Respetar el orden físico de los conectores del mazo en serie. (págs. 249, 306)

---

```yaml
tipo: fundamento
titulo: Arquitectura de climatización versiones Basis y Komfort
entidad: regulacion-automatica
variante: basis-komfort
area: climatizacion
sistema: control-climatizacion
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "206, 226, 229, 307-308"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-calidad-aire]
palabras: [Basis, Komfort, pared divisoria, regulación bizona, monozona, G238, G355]
```

## Objeto
Establecer las diferencias técnicas, componentes y esquemas de distribución entre la versión estándar de aire acondicionado monozona (Basis) y la versión climatizador automático bizona (Komfort). (págs. 206, 226, 307)

## Fundamento
La versión Basis distribuye una única temperatura homogénea para todo el habitáculo mediante un climatizador simplificado. La versión Komfort dispone de circuitos mecánicos y electrónicos divididos que permiten regular de forma independiente la temperatura y el flujo de aire para el lado izquierdo y derecho, integrando sensores ambientales avanzados. (págs. 206, 226, 307-308)

## Desarrollo
- **Climatizador versión Basis:** La carcasa interna no equipa paredes divisorias en el lado del aire. Las chapaletas de mezcla y reposapiés están comunicadas entre sí por varillas de unión y accionadas por servomotores únicos (V68 para temperatura global y V261 para reposapiés). No equipa sensor de calidad del aire G238, sensor de humedad G355 ni difusores traseros ajustables. (págs. 226, 307)
- **Climatizador versión Komfort:** La carcasa de mezcla cuenta con una pared divisoria central hermética. Dispone de regulación bizona independiente con servomotores individuales para temperatura izquierda (V158), temperatura derecha (V159), vano reposapiés izquierdo (V108), vano reposapiés derecho (V109), difusor central izquierdo (V110) y derecho (V111). Incorpora de serie el sensor de calidad del aire G238 en la toma de aire fresco y el sensor de humedad G355 en la base del retrovisor interior. (págs. 229, 307-308)

📷 IMAGEN: Vista seccionada del climatizador Komfort mostrando la pared divisoria de separación entre los flujos izquierdo y derecho — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 307

## Valores de referencia
- Configuración Basis: 1 zona de temperatura, 1 curva de regulación calculada. (pág. 106)
- Configuración Komfort: 2 zonas de regulación independientes (adaptables automáticamente según capota abierta o cerrada en modelos Cabriolet). (págs. 33, 106)

## Errores de concepto frecuentes
- Intentar codificar la presencia del sensor de calidad del aire G238 o válvulas de corte en una unidad de control instalada en un vehículo versión Basis, lo que genera fallos permanentes en el autodiagnóstico. (págs. 11, 226)

---

```yaml
tipo: procedimiento
titulo: Comprobación del rendimiento frigorífico del climatizador
entidad: lectura-manometros
area: climatizacion
sistema: circuito-frigorifico
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "311-316, 319-321"
relacionados: [compresor, valvula-reguladora-compresor, transmisor-presion]
palabras: [rendimiento frigorífico, corriente teórica, corriente efectiva, G395, N280, 9 bares]
```

## Objeto y alcance
Evaluar la capacidad de enfriamiento del sistema de climatización y verificar la respuesta electrónica del compresor de cilindrada variable sin embrague electromagnético. (págs. 311, 314)

## Condiciones previas
1. Temperatura ambiente exterior superior a 15 ºC. (pág. 311)
2. Radiador del motor y condensador limpios y sin suciedad. (pág. 311)
3. Correa poli-V en correcto estado de conservación y tensión. (pág. 311)
4. Capó delantero, puertas y ventanillas completamente cerrados. (págs. 311, 314)
5. Motor en marcha a temperatura de servicio. (págs. 311, 314)

## Equipo y material
Estación de diagnosis VAS 5051 (o VAS 5052) con cable de conexión T16 y termómetro digital de aireación. (págs. 311, 314)

## Pasos
1. Abrir todos los difusores del salpicadero y arrancar el motor del vehículo. (pág. 314)
2. Conectar el equipo de diagnosis VAS 5051 al conector de 16 polos e iniciar la autodiagnosis en la dirección "08 - Electrónica de climatización". (págs. 8, 314)
3. Seleccionar la función "Leer bloque de valores de medición" e ingresar al grupo "001". (págs. 40, 314)
4. Seleccionar el modo "Econ" o "AC OFF" en el panel de mandos y verificar que los campos 1 y 2 del grupo 001 muestren 0 A de corriente (compresor desactivado) y que el campo 4 indique la presión de reposo adecuada a la temperatura ambiente. (pág. 314)
5. Pulsar la tecla "Auto / AC ON" y situar la preselección de temperatura en "LO" (frío máximo) en ambos lados. (págs. 314, 316)
6. Comprobar que en los campos 1 y 2 del grupo 001 la corriente teórica y la corriente efectiva de la válvula N280 aumenten por encima de 0,3 A (hasta alcanzar entre 0,75 A y 0,8 A). (págs. 177, 316)
7. Comprobar que la presión visualizada en el campo 4 del grupo 001 aumente de forma progresiva por encima del valor de reposo. (pág. 316)
8. Verificar que los electroventiladores del radiador (V7 / V177) se conectan automáticamente en cuanto la presión en el lado de alta supera los 9 bares. (pág. 321)
9. Medir la temperatura del aire soplado por los difusores centrales confirmando que desciende a los valores de confort especificados. (págs. 314, 316)

## Valores de referencia
- Temperatura ambiental mínima para la prueba: > 15 ºC. (pág. 311)
- Corriente de activación de N280 a máximo rendimiento: entre 0,75 A y 0,8 A. (págs. 120, 177)
- Presión de activación de electroventiladores V7/V177: 9 bares en la línea de alta. (pág. 321)

## Verificación final
Confirmar que el tubo de baja presión (diámetro grueso) entre el acoplamiento rápido y el compresor se enfría intensamente y verificar que en el grupo de valores de medición 002 el campo 1 permanezca en "0" (sin condiciones de desconexión). (págs. 43, 316, 323)

## Seguridad y normativa
Prohibido arrancar el motor si las tuberías de refrigerante del compresor están desconectadas. Al carecer de acoplamiento electromagnético, el compresor gira de forma ininterrumpida con el motor y se destruye por sobrecalentamiento interno si trabaja en seco. (págs. 339, 378)

---

```yaml
tipo: diagnostico
titulo: Diagnóstico de la desconexión o falta de rendimiento del compresor sin embrague
entidad: diagnostico-compresor
area: climatizacion
sistema: control-climatizacion
fabricante: Audi
fuente: "Audi A5 Coupé_2008_aire acondicionado.pdf"
paginas: "42, 314-316, 319-320"
relacionados: [compresor, valvula-reguladora-compresor, transmisor-presion]
palabras: [N280, J519, G395, desactivación compresor, grupo 002, corriente de control]
```

## Síntoma
El climatizador está conectado pero no produce aire frío, la presión en el bloque de valores de medición no se eleva o el compresor se desactiva intermitentemente. (págs. 316, 319-320)

## Causas posibles
- Presencia de una condición de desconexión activa memorizada en el grupo de indicación 002. (págs. 43, 320)
- Fallo de excitación eléctrica en la válvula reguladora N280 por parte de la unidad de control de la red de a bordo J519. (págs. 155, 176, 320)
- Falta de carga de agente frigorífico detectada por el transmisor G395. (págs. 43, 168)
- Rotura del elemento de protección contra sobrecarga en la polea del compresor por agarrotamiento mecánico del mecanismo interno. (págs. 179, 399)

## Cómo separar las causas
1. Conectar el equipo de diagnosis VAS 5051 en la dirección "08 - Electrónica de climatización" y consultar la memoria de averías. (págs. 9, 320)
2. Si no hay averías en la memoria, seleccionar "Leer bloque de valores de medición" e ingresar al grupo "002": comprobar el campo 1 ("condición de desconexión actual"). Si el código es distinto de "0", consultar la tabla de condiciones de corte (p. ej., presión fuera de margen, señal de apagado del motor, temperatura exterior demasiado baja). (págs. 43, 320)
3. Acceder al grupo de valores de medición "001": verificar el campo 1 (corriente teórica) y el campo 2 (corriente efectiva). Si la corriente teórica es > 0,3 A pero la corriente efectiva marca 0 A, ingresar a la dirección "09 - Unidad de control de la red de a bordo" y verificar el bloque 034 (salida hacia N280). (págs. 42, 176, 320)
4. Si la corriente efectiva en N280 es correcta (> 0,3 A) pero la presión en el campo 4 no aumenta, realizar una inspección visual del compresor con el motor en marcha: verificar si el disco de arrastre central gira solidario con la polea o si se ha separado por actuación del elastómero de protección contra sobrecarga. (págs. 179, 316, 399)
5. Si la polea gira y N280 recibe corriente pero la presión permanece baja, consultar el valor de presión leído por el transmisor G395 en el grupo 056 (si indica un valor fijo superior a 40 bares, revisar la línea de datos LIN entre G395 y la unidad J519). (págs. 43, 168)

📷 IMAGEN: Bloque de valores de medición 001 en la pantalla del lector mostrando los campos de corriente de N280 y presión del circuito — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 42

## Valores de referencia
- Campo 1 del grupo 002 con compresor habilitado: "0". (pág. 43)
- Corriente efectiva de control en N280: entre 0,3 A y 0,8 A. (págs. 42, 120, 177)
- Lectura de seguridad por defecto de G395 ante fallo de línea LIN: > 40 bares. (pág. 43)

## Verificación tras la reparación
Confirmar que el código de corte en el campo 1 del grupo 002 vuelve a "0", que la corriente efectiva en N280 se estabiliza y que la presión registrada en el campo 4 del grupo 001 aumenta de forma proporcional a la solicitud de refrigeración. (págs. 42-43, 316)

---

COBERTURA: documento «Audi A5 Coupé_2008_aire acondicionado.pdf», páginas 1 a 414 de 414. [completo]