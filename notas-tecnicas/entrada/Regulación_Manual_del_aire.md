```yaml
tipo: fundamento
titulo: Sistema de climatización automática Autoclima
entidad: regulacion-automatica
variante: autoclima-seat
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "4-5, 26-27"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [Autoclima, regulación electrónica, estructura descentralizada, pantalla compartida, radiocasete]
```

## Objeto
Regular y mantener automáticamente la temperatura del habitáculo seleccionada por el usuario de forma independiente de las condiciones meteorológicas exteriores. (págs. 4-5)

## Fundamento
El Autoclima utiliza una estructura de control electrónica descentralizada donde participan la unidad de control del equipo (J255), la unidad del aire acondicionado (J293) y la unidad de control del motor para gestionar automáticamente el caudal, la temperatura del aire de entrada, la recirculación y la activación del compresor. (págs. 5, 8-9)

## Desarrollo
El funcionamiento del Autoclima se adapta a las condiciones seleccionadas:
- **Funcionamiento automático:** La unidad de control procesa las señales enviadas por los transmisores de temperatura exterior (G17), interior (G56) y del aire de entrada (G191, G192), además de los datos de presión del circuito frigorífico. Con estos datos ajusta la posición del servomotor de la trampilla de mezcla (V68), la velocidad de la turbina mediante el regulador electrónico J126 y la conmutación de la recirculación. (págs. 5, 8-9, 26)
- **Descentralización e integración en pantalla:** Los datos de funcionamiento de la climatización se muestran en una pantalla o display central compartido con el equipo de radiocasete y el ordenador de a bordo. (págs. 5, 27)
- **Modo descongelación del parabrisas:** Al seleccionar la salida de aire hacia el parabrisas con el mando de distribución, la centralita mantiene la regulación de temperatura pero posiciona forzosamente la trampilla de recirculación en entrada de aire exterior. (pág. 26)

📷 IMAGEN: Esquema del cuadro sinóptico del Autoclima con la red de sensores y unidades de control descentralizadas — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 8

## Valores de referencia
- Margen de temperatura solicitada: seleccionable mediante pulsadores en la unidad de manejo. (pág. 19)

## Errores de concepto frecuentes
- Asumir que la distribución de aire entre difusores es motorizada en el Autoclima, cuando en este modelo la distribución se realiza mecánicamente mediante cable y mando giratorio. (págs. 5, 26)

---

```yaml
tipo: fundamento
titulo: Circuito frigorífico del Autoclima con silenciador de baja presión
entidad: ciclo-frigorifico
variante: silenciador-baja-presion
area: climatizacion
sistema: circuito-frigorifico
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "6-7"
relacionados: [compresor, condensador, valvula-expansion, evaporador]
palabras: [silenciador, baja presión, R134a, 750 gramos, 44 bares, compresor autorregulado]
```

## Objeto
Extraer el calor del aire que entra al habitáculo mediante la circulación de fluido frigorífico R134a en un circuito cerrado equipado con un amortiguador de ondas de presión. (págs. 6-7)

## Fundamento
El circuito frigorífico hace circular el refrigerante a través del condensador, filtro deshidratador, válvula de expansión y evaporador mediante la acción de un compresor autorregulado de 7 cilindros provisto de un silenciador en la tubería de baja presión. (págs. 6-7)

## Desarrollo
El fluido refrigerante recorre los siguientes componentes:
- **Compresión:** El compresor autorregulado de 7 cilindros eleva la presión del refrigerante impulsado por correa Poly V a través de un acoplamiento magnético N25. Incorpora una válvula mecánica de seguridad tarada a 44 bares para protección contra sobrepresiones extremas. (pág. 7)
- **Amortiguación de ruido:** En la línea de baja presión, entre la válvula de expansión y el compresor, se intercala un silenciador que amortigua los ruidos generados por las pulsaciones y ondas de presión del gas. (pág. 7)
- **Condensación y deshidratación:** El condensador cede calor por delante del radiador del motor. El líquido pasa por el filtro deshidratador para retener humedad y residuos de abrasión. (págs. 6-7)
- **Expansión y evaporación:** La válvula de expansión dosifica el caudal hacia el evaporador ubicado en la unidad climática interior, donde el refrigerante se evapora absorbiendo energía térmica del aire del habitáculo. (págs. 6-7)

📷 IMAGEN: Disposición de los componentes del circuito frigorífico indicando la ubicación del silenciador en baja presión y presostato F129/G65 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 7

## Valores de referencia
- Carga nominal de agente frigorífico R134a: 750 ± 50 gramos. (pág. 7)
- Tarado de la válvula de seguridad del compresor: 44 bares. (pág. 7)
- Número de cilindros del compresor: 7 cilindros autorregulados. (pág. 7)

## Errores de concepto frecuentes
- Suponer que el silenciador del circuito está situado en la línea de alta presión, cuando va instalado en la tubería de baja presión próximo a la aspiración del compresor. (pág. 7)

---

```yaml
tipo: componente
titulo: Interruptor térmico de la caja de aguas
entidad: sensor-temperatura-exterior
variante: interruptor-termico-f38
area: climatizacion
sistema: control-climatizacion
codigo: F38
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "14, 28"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, compresor]
palabras: [F38, interruptor térmico, 5 ºC, caja de aguas, protección contra congelación]
```

## Misión
Interrumpir la alimentación eléctrica hacia el compresor de climatización cuando la temperatura del aire exterior desciende por debajo de los límites de seguridad antihielo. (págs. 14, 28)

## Tipos y características
Interruptor térmico de contactos mecánicos normalmente cerrados en reposo, instalado en la intemperie dentro de la caja de aguas del vehículo. (pág. 14)

## Principio de funcionamiento
La señal eléctrica de 12 V enviada desde la unidad del Autoclima para conectar el compresor pasa forzosamente a través de los contactos del interruptor F38. Mientras la temperatura de la caja de aguas se mantenga por encima de 5 ºC, el interruptor permanece cerrado. Si la temperatura exterior cae por debajo de 5 ºC, sus contactos se abren, interrumpiendo la línea eléctrica e impidiendo el acoplamiento magnético del compresor. (págs. 14, 28)

📷 IMAGEN: Ubicación del interruptor térmico F38 en el interior de la caja de aguas — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 14

## Valores de trabajo
- Temperatura umbral de apertura de contactos: < 5 ºC. (pág. 14)
- Tensión de la línea de señal interrumpida: 12 V de corriente continua. (pág. 14)

## Anomalías frecuentes
Sulfatación de los bornes de conexión por exposición a la humedad de la caja de aguas o agarrotamiento del contacto interno en apertura. (págs. 14, 28)

## Comportamiento en avería
El compresor no se acopla en ninguna condición de servicio aunque la temperatura del habitáculo sea elevada. (págs. 14, 28)

## Cómo comprobarlo
Medir la continuidad eléctrica con multímetro entre las dos bornes del interruptor F38 con temperatura ambiental superior a 5 ºC. (págs. 14, 28)

## Mantenimiento
Verificar la estanqueidad de su conector eléctrico y mantener limpia de hojas la zona de la caja de aguas. (pág. 14)

---

```yaml
tipo: componente
titulo: Unidad de control para el aire acondicionado
entidad: unidad-control-climatizador
variante: modulo-rele-j293
area: climatizacion
sistema: control-climatizacion
codigo: J293
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "15, 28-29"
forma_parte_de: control-climatizacion
relacionados: [embrague-compresor, presostato]
palabras: [J293, unidad de control aire acondicionado, relé de potencia, F129, G65, electroventilador]
```

## Misión
Gobernar la alimentación eléctrica directa del acoplamiento electromagnético del compresor (N25) y gestionar la activación de las velocidades del electroventilador (V7 / V35). (págs. 15, 28-29)

## Tipos y características
Módulo electrónico de potencia e interfaz de relés instalado en el vano motor, comunicado con la centralita del climatizador (J255), el presostato (F129 o G65) y la unidad de control del motor. (págs. 15, 28-29)

## Principio de funcionamiento
Recibe la señal de solicitud de conexión del compresor desde la centralita J255 (tras atravesar el conmutador F129/G65 y el interruptor térmico F38). La unidad J293 valida las condiciones de la UCE del motor (régimen, aceleración a plena carga o primeros 10 segundos tras el arranque) y suministra positivo de batería a la bobina del acoplamiento magnético N25. Asimismo, activa el primer escalón de velocidad de los ventiladores al conectar el A/C y conmuta a la velocidad máxima si el termoconmutador F18 detecta más de 105 ºC en el líquido refrigerante. (págs. 15, 28-29)

📷 IMAGEN: Esquema de conexión de la unidad J293 con el acoplamiento magnético N25, ventiladores y conmutador de presión F129 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 29

## Valores de trabajo
- Inhibición del compresor por la UCE motor: durante los primeros 10 segundos tras el arranque o por aceleración Kick-down a plena carga. (pág. 15)
- Activación de velocidad máxima de ventiladores por temperatura de líquido refrigerante: > 105 ºC. (pág. 29)

## Anomalías frecuentes
Fallo en los contactos internos de potencia del relé o degradación del conector expuesto a la intemperie en el compartimento motor. (págs. 28-29)

## Comportamiento en avería
El compresor no se acopla o los electroventiladores no se activan al conectar la climatización, provocando sobrepresión en el circuito frigorífico. (págs. 28-29)

## Cómo comprobarlo
Verificar la presencia de masa y tensiones de alimentación en las bornes de entrada del módulo J293 y ejecutar la prueba de actuadores con el equipo de diagnosis. (págs. 29, 33)

## Mantenimiento
Revisar el estado de los fusibles aéreos montados sobre la batería que alimentan la unidad J293. (pág. 31)

---

```yaml
tipo: diagnostico
titulo: Autodiagnóstico del sistema Autoclima
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "33-36"
relacionados: [unidad-control-climatizador]
palabras: [autodiagnóstico, dirección 08, función 01, función 02, función 03, función 04, función 08, parpadeo display, puente pin 21]
```

## Síntoma
Parpadeo de todos los dígitos de la pantalla o display al conectar el encendido, falta de producción de aire frío o imposibilidad de regular la temperatura en la versión Autoclima. (págs. 14, 33)

## Causas posibles
- Registro de averías permanentes en la memoria no volátil de la unidad J255 (sensores de temperatura G17, G56, G191, G192 o potenciómetro V68). (págs. 17, 33)
- Interrupción de la señal de presión del circuito frigorífico (F129 / G65) o apertura del interruptor térmico F38. (págs. 14-15)
- Fallo interno en la unidad de control J255 o puunteado de codificación de mazo de cables defectuoso. (pág. 34)

## Cómo separar las causas
1. Conectar el lector de averías V.A.G 1551, V.A.G 1552 o estación equivalente al conector de diagnóstico T16 de 16 polos del vehículo. (pág. 33)
2. Seleccionar la dirección "08 - Aire acondicionado". (pág. 33)
3. Seleccionar la función "01 - Versión de la unidad de control" para verificar la clave de recambios (6K0959291) y confirmar el tipo de equipo (Autoclima = código 220; Calefacción motorizada = código 110 por presencia de masa en el pin 21 del conector). (págs. 33-34)
4. Ejecutar la función "02 - Consultar memoria de averías" para identificar los códigos de fallo registrados (diferenciando averías esporádicas de permanentes). (págs. 33-34)
5. Seleccionar la función "03 - Diagnóstico de elementos actuadores" para activar secuencialmente el servomotor de temperatura V68, el servomotor de recirculación V113 y el embrague N25. (pág. 33)
6. Seleccionar la función "08 - Leer bloque de valores de medición" para analizar las señales de los sensores de temperatura y la tensión de los potenciómetros en tiempo real. (pág. 33)
7. Tras reparar las anomalías, seleccionar la función "04 - Iniciar ajuste básico" para autoadaptar los topes del motor de la trampilla de mezcla y finalizar ejecutando la función "05 - Borrar la memoria de averías". (pág. 33)

📷 IMAGEN: Muestra de la pantalla del lector de diagnosis indicando la clave de recambio y la codificación del tipo de equipo Autoclima (6K-AUTOCLIMA-220) — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 34

## Valores de referencia
- Dirección de acceso en diagnosis: "08 - Aire acondicionado". (pág. 33)
- Clave de recambios leída en función 01: 6K0959291. (pág. 34)
- Código de tipo de equipo: "220" para Autoclima; "110" para Calefacción motorizada (pin 21 a masa). (pág. 34)
- Criterio de borrado automático de averías esporádicas: tras 40 puestas en marcha sin reaparición del fallo. (pág. 33)

## Verificación tras la reparación
Conectar el encendido y confirmar que los símbolos del display central no parpadean y que al ingresar en la función 02 no se registran códigos de avería almacenados. (págs. 14, 33)

---

COBERTURA: documento «CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf», páginas 1 a 37 de 37. [completo]