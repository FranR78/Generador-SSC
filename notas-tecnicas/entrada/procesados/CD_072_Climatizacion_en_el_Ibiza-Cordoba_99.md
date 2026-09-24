```yaml
tipo: fundamento
titulo: Equipos de climatización en el Ibiza y Córdoba 99
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "4-5"
relacionados: [unidad-control-climatizador, circuito-frigorifico]
palabras: [ventilación, calefacción motorizada, autoclima, aire acondicionado manual]
```

## Objeto
Definir los diferentes sistemas instalados en el Ibiza/Córdoba '99 para regular y mantener la temperatura en el interior del habitáculo. (pág. 4).

## Fundamento
El acondicionamiento del aire se realiza mediante cuatro variantes de equipamiento según el nivel de confort y regulación: ventilación-calefacción manual, aire acondicionado manual, calefacción motorizada y autoclima. (págs. 4-5).

## Desarrollo
1. Ventilación-calefacción: La distribución de aire y la temperatura se seleccionan mecánicamente con mandos giratorios. La recirculación de aire y la turbina de ventilación son impulsadas por motores eléctricos. Con este equipo solo es posible elevar la temperatura de entrada pasándola por el radiador de la calefacción. (pág. 4).
2. Aire acondicionado manual: Dispone del mismo accionamiento para distribución, temperatura, recirculación y turbina que la ventilación-calefacción, añadiendo un pulsador que conecta eléctricamente el aire acondicionado. Permite elevar o disminuir la temperatura canalizando el aire a través del evaporador y del radiador de calefacción. (pág. 4).
3. Calefacción motorizada: La turbina, la trampilla de temperatura de entrada y la trampilla de recirculación se accionan mediante motores eléctricos comandados por una unidad de control electrónica. La distribución de aire se selecciona mecánicamente con un mando giratorio. Un display en la consola central informa de los parámetros de funcionamiento. (pág. 5).
4. Autoclima: Equipo de aire acondicionado con regulación y mantenimiento electrónico de la temperatura. Una unidad de control regula la temperatura del aire y activa la recirculación, el aire acondicionado y la velocidad de la turbina, automáticamente o a voluntad del usuario. La distribución de aire se realiza mecánicamente con mando giratorio. (pág. 5).

## Valores de referencia
No documentado en fuentes. (págs. 4-5).

## Errores de concepto frecuentes
Confundir el autoclima con la calefacción motorizada; la calefacción motorizada no dispone de circuito frigorífico ni de función de refrigeración por evaporador, limitándose a elevar la temperatura mediante el radiador de calefacción con gestión eléctrica de trampillas. (págs. 4-5).

---

```yaml
tipo: fundamento
titulo: Unidad climática
entidad: distribucion-aire
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "6"
relacionados: [evaporador, servomotor-trampilla, ventilador-habitaculo]
palabras: [unidad climática, cables bowden, trampilla de temperatura, trampilla de recirculación, regulador electrónico]
```

## Objeto
Albergar los componentes de intercambio térmico (evaporador y radiador de calefacción), la turbina de ventilación y las trampillas de mezcla y distribución del aire hacia el habitáculo. (pág. 6).

## Fundamento
La unidad climática es constructivamente idéntica para todos los equipos de climatización del vehículo, diferenciándose únicamente en el modo de activación de la trampilla de temperatura (eléctricamente o mecánicamente), la ubicación de transmisores de temperatura y el tipo de regulación de la turbina. (pág. 6).

## Desarrollo
- Trampilla de temperatura: se activa eléctricamente en los equipos de mando electrónico (autoclima y calefacción motorizada) o mecánicamente mediante cable. (pág. 6).
- Trampilla de recirculación: movida siempre por un motor eléctrico en todos los equipos. (pág. 6).
- Trampillas de distribución de aire: accionadas mediante cables Bowden desde el mando giratorio central para dirigir el caudal hacia los difusores superiores, centrales o inferiores. (pág. 6).
- Turbina de ventilación: asegura el caudal de entrada. En los sistemas manuales la velocidad se logra mediante una escala de resistencias en el propio motor; en los de mando electrónico (autoclima y calefacción motorizada) mediante un regulador electrónico de régimen. (pág. 6).
- Intercambiadores: contiene el evaporador y el radiador de la calefacción. (pág. 6).

📷 IMAGEN: Esquema de componentes y trampillas de la unidad climática — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 6

## Valores de referencia
No documentado en fuentes. (pág. 6).

## Errores de concepto frecuentes
Suponer que la unidad climática tiene una carcasa diferente según el equipamiento; la estructura física es idéntica y solo cambian los actuadores, reguladores y sensores instalados sobre ella. (pág. 6).

---

```yaml
tipo: fundamento
titulo: Circuito frigorífico del Ibiza y Córdoba 99
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "7"
relacionados: [compresor, condensador, filtro-deshidratador, valvula-expansion, evaporador, refrigerante-r134a]
palabras: [circuito frigorífico, R134a, compresor autorregulado, silenciador, válvula de seguridad]
```

## Objeto
Generar el ciclo de refrigeración para enfriar y deshumidificar el aire de entrada al habitáculo mediante la circulación y cambio de estado del fluido frigorífico. (pág. 7).

## Fundamento
El circuito frigorífico es idéntico en el sistema de aire acondicionado manual y en el autoclima. Utiliza un compresor autorregulado de 7 cilindros impulsado por correa Poly V y acoplamiento electromagnético. (pág. 7).

## Desarrollo
El circuito consta de los siguientes componentes acoplados en serie:
1. Condensador: ubicado por delante del radiador del líquido refrigerante del motor. (pág. 7).
2. Filtro deshidratador: retiene la humedad, filtra residuos de abrasión y evita la formación de burbujas. (pág. 7).
3. Válvula de expansión: controla la presión y el caudal del agente frigorífico. (pág. 7).
4. Evaporador: ubicado en la unidad climática, donde se produce la expansión y el intercambio de calor con el aire. (pág. 7).
5. Compresor: tipo autorregulado de 7 cilindros con válvula de seguridad incorporada. (pág. 7).
6. Elementos de control de presión: conmutador F129 (motores diésel) o transmisor electrónico G65 (motores gasolina), montados en el ramal de alta presión junto a la válvula de expansión. (pág. 7).
7. Silenciador: situado en la tubería de baja presión, cerca del compresor, para amortiguar los ruidos producidos por las ondas de presión entre la válvula de expansión y el compresor. (pág. 7).

📷 IMAGEN: Esquema del circuito frigorífico con la ubicación de componentes y tuberías — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 7

## Valores de referencia
- Carga de agente frigorífico: 750 ± 50 gramos de R134a. (pág. 7).
- Tarado de la válvula de seguridad del compresor: 44 bares. (pág. 7).

## Errores de concepto frecuentes
Creer que el circuito frigorífico del autoclima es diferente al del aire acondicionado manual; el circuito físico, sus componentes frigoríficos y la cantidad de carga son exactamente idénticos. (pág. 7).

---

```yaml
tipo: componente
titulo: Transmisor de temperatura interior
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: G56
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "12, 24"
relacionados: [unidad-control-climatizador]
palabras: [G56, NTC, temperatura interior, turbina de aire, V42]
```

## Misión
Medir la temperatura real del aire del interior del habitáculo para que la unidad de control del autoclima calcule la posición de la trampilla de temperatura. (págs. 12, 24).

## Tipos y características
Resistencia de tipo NTC (coeficiente de temperatura negativo) montada detrás del tablero de instrumentos, junto a la columna de dirección, formando un único conjunto con un motor de turbina V42. (págs. 12, 24).

## Principio de funcionamiento
El motor V42 hace girar una turbina que provoca un flujo continuo de aire del habitáculo a través del sensor NTC. La resistencia eléctrica varía de forma inversamente proporcional a la temperatura del aire aspirado. (págs. 12, 24).

## Valores de trabajo
Campo de medición de la NTC: entre -40 ºC y +85 ºC. (pág. 12).

## Anomalías frecuentes
Acumulación de polvo o suciedad en la toma de aire de la turbina o en la NTC, avería eléctrica del motor V42 o interrupción/cortocircuito en la NTC. (págs. 12, 24).

## Comportamiento en avería
La unidad de control toma como referencia un valor fijo de temperatura de 22 ºC. Al seleccionar temperaturas distintas a 22 ºC, el habitáculo se calienta o enfría más de lo solicitado. Cada vez que se conecta el autoclima, parpadean los dígitos del display. (pág. 12).

## Cómo comprobarlo
No documentado en fuentes. (págs. 12, 24).

## Mantenimiento
No documentado en fuentes. (págs. 12, 24).

---

```yaml
tipo: componente
titulo: Transmisores de temperatura del aire de entrada
entidad: sensor-evaporador
variante: aire de entrada
area: climatizacion
sistema: control-climatizacion
codigo: G191 / G192
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "13"
relacionados: [unidad-control-climatizador]
palabras: [G191, G192, NTC, difusor central, zona de los pies, temperatura de entrada]
```

## Misión
Medir la temperatura del aire impulsado hacia el habitáculo a la salida de la unidad climática. El G191 mide en el difusor central y el G192 en el difusor de la zona de los pies. (pág. 13).

## Tipos y características
Dos resistencias térmicas de tipo NTC ubicadas en el interior de los conductos de la unidad climática. (pág. 13).

## Principio de funcionamiento
Registran térmicamente el aire que sale de la unidad climática. La unidad de control del autoclima calcula y procesa un valor medio entre las lecturas de ambos sensores para regular la posición de la trampilla de mezcla de temperatura. (pág. 13).

## Valores de trabajo
Margen de medición referenciado: entre -40 ºC y +85 ºC. (pág. 13).

## Anomalías frecuentes
Desconexión eléctrica, cortocircuito o fallo de medición NTC por degradación. (pág. 13).

## Comportamiento en avería
Al perderse la señal de cualquiera de los dos transmisores, la unidad pasa automáticamente a funcionar sin regulación automática, manteniendo fijos los parámetros de funcionamiento existentes en el momento de la avería. Cada vez que se conecta el autoclima, parpadean todos los dígitos del display. (pág. 13).

## Cómo comprobarlo
No documentado en fuentes. (pág. 13).

## Mantenimiento
No documentado en fuentes. (pág. 13).

---

```yaml
tipo: componente
titulo: Transmisor de temperatura exterior
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
codigo: G17
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "14"
relacionados: [unidad-control-climatizador, radiocasete-comunicacion]
palabras: [G17, NTC, retrovisor, temperatura exterior, acoplamiento magnético]
```

## Misión
Determinar de forma continua la temperatura del aire exterior del vehículo para la indicación en el display y para la gestión del sistema autoclima. (pág. 14).

## Tipos y características
Resistencia de tipo NTC ubicada en el interior de la carcasa del retrovisor exterior derecho (lado del acompañante). (pág. 14).

## Principio de funcionamiento
Varía su resistencia eléctrica según la temperatura ambiente. La señal es leída por la unidad del radiocasete, que la muestra en el display y la transmite mediante línea de datos a la unidad de control del autoclima. (pág. 14).

## Valores de trabajo
No documentado en fuentes. (pág. 14).

## Anomalías frecuentes
Fallo de la NTC, rotura del cableado en el paso de la puerta o conector del retrovisor deteriorado. (pág. 14).

## Comportamiento en avería
El radiocasete muestra tres rayas en la zona de temperatura del display. La unidad del autoclima toma un valor fijo sustitutivo de 20 ºC y elimina la señal de conexión del acoplamiento magnético del compresor (desconecta el aire acondicionado). El sistema sigue funcionando pero sin capacidad de enfriar. Parpadean todos los dígitos del display al conectar. (pág. 14).

## Cómo comprobarlo
No documentado en fuentes. (pág. 14).

## Mantenimiento
No documentado en fuentes. (pág. 14).

---

```yaml
tipo: componente
titulo: Interruptor térmico
entidad: presostato
variante: térmico de seguridad
area: climatizacion
sistema: control-climatizacion
codigo: F38
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "14"
relacionados: [unidad-control-climatizador, unidad-control-aire-acondicionado]
palabras: [F38, caja de aguas, congelación del evaporador, 5 ºC, interruptor térmico]
```

## Misión
Interrumpir la señal eléctrica de conexión del compresor cuando la temperatura ambiente en la caja de aguas cae por debajo de 5 ºC, evitando la congelación del agua condensada en las aletas del evaporador. (pág. 14).

## Tipos y características
Interruptor bimetálico térmico normalmente cerrado, ubicado en la caja de aguas del vehículo. (pág. 14).

## Principio de funcionamiento
Deja pasar la señal de activación de 12 V procedente del autoclima hacia la unidad del aire acondicionado J293. Cuando la temperatura en la caja de aguas desciende de 5 ºC, el interruptor abre sus contactos cortando la tensión. (pág. 14).

## Valores de trabajo
- Estado de contactos: normalmente cerrado a temperaturas superiores a 5 ºC.
- Umbral de apertura: temperatura inferior a 5 ºC (apertura de contactos).
- Tensión de paso: 12 V. (pág. 14).

## Anomalías frecuentes
Bloqueo de los contactos en posición permanentemente cerrada por agarrotamiento o cortocircuito. (pág. 14).

## Comportamiento en avería
No tiene función sustitutiva. Si el interruptor permanece siempre cerrado, el compresor funciona incluso con temperaturas ambiente muy bajas, pudiendo congelar el evaporador y bloquear el flujo de aire. (pág. 14).

## Cómo comprobarlo
No documentado en fuentes. (pág. 14).

## Mantenimiento
No documentado en fuentes. (pág. 14).

---

```yaml
tipo: componente
titulo: Potenciómetro de la distribución de aire
entidad: potenciometro-distribucion-aire
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "14-15"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [potenciómetro, mando de distribución, parabrisas, desempañado]
```

## Misión
Informar constantemente a la unidad de control sobre la posición física seleccionada por el usuario en el mando giratorio de distribución de aire. (págs. 14-15).

## Tipos y características
Potenciómetro rotativo instalado en el interior de la unidad de control del autoclima o calefacción motorizada, accionado mecánicamente al girar el mando de distribución. (págs. 14-15).

## Principio de funcionamiento
Modifica su resistencia eléctrica y tensión de salida según el ángulo de giro del mando. La unidad detecta la posición específica (difusores centrales, pies, parabrisas). Al detectar la posición de salida hacia el parabrisas, la unidad ejecuta automáticamente el protocolo de desempañado: aumenta la turbina, pasa a aire fresco y conecta el compresor (autoclima). (págs. 14-15).

## Valores de trabajo
No documentado en fuentes. (págs. 14-15).

## Anomalías frecuentes
Desgaste de la pista resistiva interna, desalineación de las ruedas de accionamiento mecánicas. (pág. 15).

## Comportamiento en avería
La unidad sitúa la trampilla de recirculación en posición de entrada de aire fresco. No regula la velocidad de la turbina ni conecta el compresor de aire acondicionado al seleccionar la posición de parabrisas. Cada vez que se conecta el equipo, parpadean los dígitos del display. (pág. 15).

## Cómo comprobarlo
No documentado en fuentes. (págs. 14-15).

## Mantenimiento
No documentado en fuentes. (págs. 14-15).

---

```yaml
tipo: componente
titulo: Potenciómetro del motor de la trampilla de temperatura
entidad: potenciometro-trampilla-temperatura
area: climatizacion
sistema: control-climatizacion
codigo: G92
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "15"
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [G92, potenciómetro, V68, tope de recorrido, 51 grados, 4.7 kOhm]
```

## Misión
Informar continuamente a la unidad de control sobre la posición exacta de apertura y los topes de recorrido del servomotor V68 de la trampilla de mezcla de temperatura. (pág. 15).

## Tipos y características
Potenciómetro de resistencia variable integrado en el interior del propio servomotor V68. (pág. 15).

## Principio de funcionamiento
Su eje gira solidario con la reductora del servomotor V68. Ofrece una variación de resistencia proporcional al ángulo de la trampilla. Permite a la unidad controlar la temperatura del aire y reconocer los topes mecánicos. (pág. 15).

## Valores de trabajo
- Carrera angular: 51º.
- Rango de resistencia: de 0 a 4,7 kΩ. (pág. 15).

## Anomalías frecuentes
Pista resistiva gastada o sucia, cortocircuito o corte de señal. (pág. 15).

## Comportamiento en avería
La unidad de control deja la trampilla de temperatura fija en la posición en la que se produjo la avería y reduce la velocidad de la turbina para minimizar la entrada excesiva de aire frío o caliente. Parpadean los dígitos del display al conectar el sistema. (pág. 15).

## Cómo comprobarlo
No documentado en fuentes. (pág. 15).

## Mantenimiento
No documentado en fuentes. (pág. 15).

---

```yaml
tipo: componente
titulo: Conmutador de presión para aire acondicionado
entidad: presostato
area: climatizacion
sistema: control-climatizacion
codigo: F129
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "16-17"
relacionados: [unidad-control-aire-acondicionado, electroventilador-condensador]
palabras: [F129, conmutador de presión, presostato, 2 bares, 16 bares, 32 bares, motores diésel]
```

## Misión
Proteger el circuito frigorífico frente a presiones anormalmente altas o bajas y controlar la activación de las velocidades del electroventilador del radiador en motorizaciones diésel. (págs. 16-17).

## Tipos y características
Presostato cuádruple de 4 contactos instalado en la tubería de alta presión junto a la válvula de expansión en vehículos con motor diésel. (págs. 16-17).

## Principio de funcionamiento
Consta de dos interruptores internos independientes:
1. Interruptor de alta/baja presión: normalmente cerrado. Abre sus contactos si la presión desciende de 2 bares (falta de gas) o supera los 32 bares (sobrepresión), interrumpiendo la señal de conexión hacia la unidad J293 para desconectar el compresor.
2. Interruptor de presión media: normalmente abierto. Cierra sus contactos cuando la presión alcanza los 16 bares, enviando un positivo de borne 15 a la unidad J293 para activar la 2ª velocidad del ventilador. (págs. 16-17).

## Valores de trabajo
- Presión mínima de desconexión: < 2 bares (contacto abre).
- Presión máxima de desconexión: > 32 bares (contacto abre).
- Presión de conmutación de velocidad de ventilador: 16 bares (contacto cierra). (pág. 16).

## Anomalías frecuentes
Agarrotamiento de los contactos internos, fugas de fluido en la rosca de montaje o fallos de conexión eléctrica. (págs. 16-17).

## Comportamiento en avería
No tiene función sustitutiva. Si el contacto de baja/alta se queda abierto, el compresor no se conecta jamás. Si no cierra el de presión media, la 2ª velocidad del ventilador no entra por presión de refrigerante. (págs. 16-17).

## Cómo comprobarlo
No documentado en fuentes. (págs. 16-17).

## Mantenimiento
No documentado en fuentes. (págs. 16-17).

---

```yaml
tipo: componente
titulo: Transmisor de presión electrónico
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
codigo: G65
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "16-17"
relacionados: [unidad-control-aire-acondicionado, transmisor-presion]
palabras: [G65, transmisor de presión, PWM, motores gasolina, 16 bares]
```

## Misión
Medir de forma continua e instantánea la presión del fluido frigorífico en el ramal de alta presión para la gestión del compresor, electroventiladores y adaptación del ralentí en motorizaciones de gasolina. (págs. 16-17).

## Tipos y características
Sensor de presión electrónico capacitivo/piezoeléctrico montado en el circuito de alta presión junto a la válvula de expansión en motores de gasolina. Emite una señal modulada en anchura de impulsos (PWM). (págs. 16-17).

## Principio de funcionamiento
Transforma la presión del gas en un tren de impulsos eléctricos de frecuencia fija donde la anchura del impulso varía con la presión. Envía la señal simultáneamente a la unidad de control del motor y a la unidad de control del aire acondicionado J293. La unidad J293 conmuta la 2ª velocidad del ventilador al llegar a 16 bares y desconecta el compresor por presiones límite. (págs. 16-17).

## Valores de trabajo
- Umbral de activación de la 2ª velocidad de ventiladores: 16 bares. (pág. 17).

## Anomalías frecuentes
Fallo en la electrónica interna del sensor, corte o cortocircuito de la línea de señal PWM. (pág. 17).

## Comportamiento en avería
La unidad de control del aire acondicionado desactiva el compresor inmediatamente. La avería de este transmisor únicamente queda registrada en la memoria de averías de la unidad de control del motor. (pág. 17).

## Cómo comprobarlo
No documentado en fuentes. (págs. 16-17).

## Mantenimiento
No documentado en fuentes. (págs. 16-17).

---

```yaml
tipo: componente
titulo: Conmutador térmico del ventilador
entidad: conmutador-termico-ventilador
area: climatizacion
sistema: refrigeracion-motor
codigo: F18
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "19"
relacionados: [electroventilador-condensador, unidad-control-aire-acondicionado]
palabras: [F18, termocontacto, radiador, 95 ºC, 105 ºC, 1ª velocidad, 2ª velocidad]
```

## Misión
Conectar directamente o solicitar a la unidad de aire acondicionado la activación de las velocidades del electroventilador en función de la temperatura del líquido refrigerante del motor. (pág. 19).

## Tipos y características
Termocontacto escalonado de doble escalón montado en la carcasa del radiador de líquido refrigerante. Consta de dos interruptores bimetálicos normalmente abiertos. (pág. 19).

## Principio de funcionamiento
- El primer interruptor cierra al alcanzar los 95 ºC de temperatura de líquido refrigerante, alimentando con positivo (30) directamente a los motores de los ventiladores para activar la 1ª velocidad. (pág. 19).
- El segundo interruptor cierra a los 105 ºC, enviando una señal de positivo (30) a la unidad de control del aire acondicionado J293, la cual activa la 2ª velocidad. (pág. 19).

## Valores de trabajo
- Cierre del primer interruptor (1ª velocidad): 95 ºC.
- Cierre del segundo interruptor (2ª velocidad): 105 ºC.
- Alimentación: Positivo directo de batería (borne 30). (pág. 19).

## Anomalías frecuentes
Incrustaciones de cal o suciedad que aíslan térmicamente la ampolla, agarrotamiento de contactos bimetálicos. (pág. 19).

## Comportamiento en avería
No tiene función sustitutiva. Si el termocontacto falla, el electroventilador no entrará por temperatura de motor, pudiendo producir sobrecalentamientos al ralentí o en retenciones. (pág. 19).

## Cómo comprobarlo
No documentado en fuentes. (pág. 19).

## Mantenimiento
No documentado en fuentes. (pág. 19).

---

```yaml
tipo: componente
titulo: Pulsadores de activación de la unidad de manejo e indicación
entidad: unidad-mando-climatizador
variante: pulsadores de activación
area: climatizacion
sistema: control-climatizacion
codigo: E87
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "20"
relacionados: [unidad-control-climatizador, radiocasete-comunicacion]
palabras: [E87, pulsadores, bus de datos, 18 cables, radiocasete, 22 ºC]
```

## Misión
Permitir al usuario seleccionar las funciones del climatizador o la calefacción motorizada (temperatura, velocidad de turbina, recirculación, modo AC/AUTO). (pág. 20).

## Tipos y características
Regleta de pulsadores integrada con el radiocasete y el display formando un bloque único compacto en la consola central. (pág. 20).

## Principio de funcionamiento
Al presionar un pulsador, la orden se envía a través de un bus de datos de 18 cables al radiocasete. La unidad del radiocasete retransmite la información a la unidad de control J255 por un bus de datos monofilamento (1 cable). La regleta es alimentada eléctricamente desde el propio radiocasete. (pág. 20).

## Valores de trabajo
Bus de conexión E87 - Radiocasete: 18 cables.
Bus de conexión Radiocasete - UCE J255: 1 cable. (pág. 20).

## Anomalías frecuentes
Desgaste mecánico de los contactos de los pulsadores o interrupción en las líneas del bus de datos. (pág. 20).

## Comportamiento en avería
Al fallar un pulsador, el radiocasete emite una señal de avería general hacia la unidad J255 sin precisar el pulsador concreto. La unidad anula la señal de los pulsadores y pasa a modo automático con temperatura solicitada fija de 22 ºC, exterior de 20 ºC, desconecta el compresor y abre la recirculación a aire fresco. En calefacción motorizada mantiene los parámetros fijos vigentes al ocurrir la avería. (pág. 20).

## Cómo comprobarlo
No documentado en fuentes. (pág. 20).

## Mantenimiento
No documentado en fuentes. (pág. 20).

---

```yaml
tipo: componente
titulo: Display de la unidad de manejo e indicación
entidad: display-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: E87
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "21"
relacionados: [unidad-mando-climatizador, radiocasete-comunicacion]
palabras: [E87, display, pantalla, bus de datos, cristal líquido, consola central]
```

## Misión
Visualizar de forma clara los parámetros de funcionamiento del autoclima o la calefacción motorizada, así como del radiocasete y del ordenador de a bordo. (pág. 21).

## Tipos y características
Pantalla de cristal líquido (LCD) de grandes dimensiones situada en la consola central, integrada en el conjunto E87. Existen dos versiones según monte autoclima o calefacción motorizada. (pág. 21).

## Principio de funcionamiento
La unidad de control J255 transmite los datos de funcionamiento mediante el bus de 1 cable al radiocasete. El radiocasete procesa los datos y excita los segmentos del display a través del bus interno de 18 cables. El radiocasete proporciona asimismo la alimentación eléctrica a la pantalla. (pág. 21).

## Valores de trabajo
No documentado en fuentes. (pág. 21).

## Anomalías frecuentes
Fallo de píxeles/segmentos, rotura del cristal o pérdida de la línea de comunicación con el radiocasete. (pág. 21).

## Comportamiento en avería
Si falla la comunicación por el bus entre el radiocasete y la unidad de climatización, los datos del climatizador dejan de ser visibles en el display. Ante la avería del display es necesario sustituir el conjunto completo E87. (pág. 21).

## Cómo comprobarlo
No documentado en fuentes. (pág. 21).

## Mantenimiento
Sustitución de la unidad completa de manejo e indicación E87 en caso de avería del display. (pág. 21).

---

```yaml
tipo: componente
titulo: Motor de la trampilla de temperatura
entidad: servomotor-trampilla
variante: de temperatura
area: climatizacion
sistema: distribucion-aire
codigo: V68
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "22"
relacionados: [potenciometro-trampilla-temperatura, unidad-control-climatizador]
palabras: [V68, servomotor, G92, trampilla de mezcla, corriente continua]
```

## Misión
Posicionar mecánicamente la trampilla de temperatura de la unidad climática para regular la mezcla de aire frío y caliente hacia el habitáculo. (pág. 22).

## Tipos y características
Servomotor eléctrico de corriente continua de giro limitado, situado en la parte inferior de la unidad climática, con el potenciómetro G92 integrado en su interior. (pág. 22).

## Principio de funcionamiento
La unidad de control J255 alimenta el motor con positivo y negativo, invirtiendo la polaridad de sus bornes para cambiar el sentido de giro del motor térmico. El movimiento se transmite mediante un tornillo sin fin a una rueda de transmisión acoplada a la trampilla. (pág. 22).

## Valores de trabajo
Alimentación de polaridad variable (12 V CC). (pág. 22).

## Anomalías frecuentes
Bloqueo mecánico de la piñonería interna de plástico, agarrotamiento de la trampilla o fallo del bobinado del motor eléctrico. (pág. 22).

## Comportamiento en avería
La trampilla de temperatura permanece inmóvil en la posición en que falló y la unidad de control disminuye la velocidad de la turbina para reducir el flujo de aire molesto. (pág. 22).

## Cómo comprobarlo
Mediante la función de autodiagnóstico "03 - Diagnóstico de elementos actuadores", la unidad desplaza el motor V68 desde la posición mínima a la máxima para verificar su recorrido. (pág. 36).

## Mantenimiento
Tras la sustitución del motor V68 o de la unidad J255, es obligatorio realizar el procedimiento de ajuste básico (función 04, grupo 002) con el equipo de diagnosis. (pág. 36).

---

```yaml
tipo: componente
titulo: Motor de la turbina de aire y regulador de régimen
entidad: ventilador-habitaculo
area: climatizacion
sistema: distribucion-aire
codigo: V2 / J126
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "22"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [V2, J126, turbina de aire, regulador de régimen, caudal de aire]
```

## Misión
Impulsar el caudal de aire necesario a través de la unidad climática para renovar y climatizar la atmósfera del habitáculo. (pág. 22).

## Tipos y características
Motor eléctrico impulsado por un módulo electrónico de potencia (regulador de régimen J126) en lugar de resistencias fijas en los sistemas con autoclima y calefacción motorizada. (págs. 6, 22).

## Principio de funcionamiento
La unidad de control J255 envía una señal de tensión de mando al regulador J126, el cual varía progresivamente la corriente aplicada al motor V2 para ajustar su velocidad de giro de manera continua. (págs. 22, 36).

## Valores de trabajo
Variación de tensión de regulación en pasos de 2,5 V de 0 V a máxima tensión durante diagnosis de actuadores. (pág. 36).

## Anomalías frecuentes
Desgaste de escobillas del motor V2, fallo de los transistores de potencia del regulador J126, agarrotamiento del rodamiento de la turbina. (pág. 22).

## Comportamiento en avería
No existe función sustitutiva. La avería se detecta de inmediato al interrumpirse o reducirse drásticamente el flujo de aire por los difusores. (pág. 22).

## Cómo comprobarlo
Se comprueba mediante la función "03 - Diagnóstico de elementos actuadores": el sistema realiza una regulación progresiva de la velocidad desde 0 V hasta la máxima en pasos de 2,5 V cada 2 segundos. (pág. 36).

## Mantenimiento
No documentado en fuentes. (pág. 22).

---

```yaml
tipo: componente
titulo: Motor de la trampilla de recirculación
entidad: servomotor-trampilla
variante: de recirculación
area: climatizacion
sistema: distribucion-aire
codigo: V113
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "23"
relacionados: [unidad-control-climatizador, recirculacion]
palabras: [V113, recirculación, tres pistas, giro libre, aire fresco]
```

## Misión
Cambiar la posición de la trampilla de recirculación para conmutar entre la admisión de aire fresco exterior y la recirculación del aire interno del habitáculo. (pág. 23).

## Tipos y características
Motor eléctrico de corriente continua de giro libre en un único sentido, instalado en la parte superior de la unidad climática. Dispone internamente de tres pistas eléctricas de contactos. (pág. 23).

## Principio de funcionamiento
Tiene tres bornes: uno con masa continua y dos alimentados alternativamente a 12 V según el movimiento requerido. Al recibir tensión en uno de los contactos, el motor gira alimentándose internamente a través de una de sus pistas de contacto hasta que el cursor llega al final de pista y se detiene sobre la pista no excitada, quedando listo para la siguiente conmutación. (pág. 23).

## Valores de trabajo
Tensión de alimentación: 12 V CC. (pág. 23).

## Anomalías frecuentes
Desgaste o suciedad en las pistas eléctricas internas, rotura de las palancas o guías de accionamiento de la trampilla. (pág. 23).

## Comportamiento en avería
No tiene función sustitutiva. Cada vez que se conecta el autoclima, parpadean todos los dígitos del display. (pág. 23).

## Cómo comprobarlo
Se comprueba mediante la función "03 - Diagnóstico de elementos actuadores": el motor desplaza la trampilla desde la posición de aire exterior a recirculación y viceversa. (pág. 36).

## Mantenimiento
No documentado en fuentes. (pág. 23).

---

```yaml
tipo: componente
titulo: Motor para la turbina del transmisor de temperatura interior
entidad: sensor-temperatura-interior
variante: turbina de aspiración
area: climatizacion
sistema: control-climatizacion
codigo: V42
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "24"
relacionados: [sensor-temperatura-interior, unidad-control-climatizador]
palabras: [V42, turbina, G56, rotor imantado, placa electrónica]
```

## Misión
Aspirar y forzar un flujo continuo de aire procedente del habitáculo hacia la resistencia NTC del sensor G56 para asegurar mediciones térmicas precisas y sin estancamiento. (pág. 24).

## Tipos y características
Pequeño motor eléctrico integrado con el transmisor G56. Consta de un estator, un rotor imantado acoplado a la turbina y una placa electrónica de gestión interna. (pág. 24).

## Principio de funcionamiento
La unidad J255 alimenta el motor V42 con positivo y negativo siempre que la línea de encendido (borne 15) esté conectada. La placa electrónica del motor gobierna el giro y detecta posibles fallos en el motor. (pág. 24).

## Valores de trabajo
Alimentación: Borne 15 (12 V CC). (pág. 24).

## Anomalías frecuentes
Bloqueo del rotor por acumulación de pelusa o polvo del habitáculo, fallo de los componentes de la placa electrónica integrada. (pág. 24).

## Comportamiento en avería
Al detectar una avería en el motor V42, la unidad del autoclima aplica factores de corrección matemáticos a la temperatura medida por el transmisor G56 para simular un valor aproximado al real. (pág. 24).

## Cómo comprobarlo
No documentado en fuentes. (pág. 24).

## Mantenimiento
Limpieza periódica del conducto de aspiración para evitar el agarrotamiento de la turbina por suciedad. (pág. 24).

---

```yaml
tipo: componente
titulo: Acoplamiento magnético
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
codigo: N25
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "25"
relacionados: [compresor, unidad-control-aire-acondicionado]
palabras: [N25, acoplamiento magnético, electroembrague, bobina, polea]
```

## Misión
Acoplar mecánicamente el eje del compresor a la polea de arrastre para que gire solidario con el motor térmico cuando se solicita la producción de frío. (pág. 25).

## Tipos y características
Electroembrague magnético montado en el plato frontal del compresor del aire acondicionado. (pág. 25).

## Principio de funcionamiento
Al recibir una tensión de 12 V procedentes de la unidad de control del aire acondicionado J293, la bobina electromagnética crea un campo magnético que atrae la placa del embrague contra la polea en movimiento, transmitiendo el par motor al eje del compresor. (págs. 25, 29).

## Valores de trabajo
Tensión de activación: 12 V CC. (pág. 25).

## Anomalías frecuentes
Bobina cortada o derivada a masa, separación (entrehierro) excesiva por desgaste de la superficie de fricción, cortocircuito. (pág. 25).

## Comportamiento en avería
No existe función sustitutiva. El compresor no gira y el aire que entra al habitáculo no se enfría en absoluto. (pág. 25).

## Cómo comprobarlo
En la función "03 - Diagnóstico de elementos actuadores", la unidad ejecuta la conexión y desconexión repetida del acoplamiento N25 cada dos segundos para verificar el chasquido de acoplamiento. (pág. 36).

## Mantenimiento
No documentado en fuentes. (pág. 25).

---

```yaml
tipo: componente
titulo: Ventiladores de líquido refrigerante
entidad: electroventilador-condensador
area: climatizacion
sistema: circuito-frigorifico
codigo: V7 / V35
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "25"
relacionados: [unidad-control-aire-acondicionado, condensador]
palabras: [V7, V35, electroventilador, 1ª velocidad, 2ª velocidad, resistencia previa]
```

## Misión
Generar un flujo forzado de aire a través del condensador y del radiador para enfriar el fluido frigorífico R134a y el líquido refrigerante del motor. (pág. 25).

## Tipos y características
Dos electroventiladores independientes montados en el frontal del vano motor, cada uno con motor eléctrico de dos velocidades. (pág. 25).

## Principio de funcionamiento
- 1ª velocidad: Se activa a través de una resistencia eléctrica integrada en el canalizador. Se alimenta por la unidad J293 (al conectar el compresor) o por el conmutador térmico F18 al alcanzar 95 ºC. (págs. 25, 29).
- 2ª velocidad: Se alimenta directamente con 12 V sin resistencia desde la unidad J293 cuando la presión en el circuito frigorífico supera 16 bares (vía F129/G65) o la temperatura del motor supera 105 ºC (vía F18). (págs. 25, 29).

## Valores de trabajo
- Alimentación: 12 V CC.
- Conexión 1ª velocidad: señal de compresor o t ºC motor = 95 ºC.
- Conexión 2ª velocidad: P frigorífica > 16 bares o t ºC motor = 105 ºC. (págs. 25, 29).

## Anomalías frecuentes
Resistencia de la 1ª velocidad cortada, escobillas quemadas, fusible principal fundido en el portafusibles de la batería. (pág. 25).

## Comportamiento en avería
No existe función sustitutiva. El fluido frigorífico sube drásticamente de presión por falta de condensación, provocando la desconexión del compresor por alta presión (32 bares). (págs. 16, 25).

## Cómo comprobarlo
No documentado en fuentes. (pág. 25).

## Mantenimiento
No documentado en fuentes. (pág. 25).

---

```yaml
tipo: fundamento
titulo: Unidad del equipo de mando electrónico J255
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "26-28, 34"
relacionados: [autodiagnostico-climatizador, regulacion-automatica]
palabras: [J255, modo automático, modo semiautomático, modo manual, codificación]
```

## Objeto
Procesar las señales de los sensores, los comandos del usuario y gestionar la regulación térmica y la activación de los actuadores del autoclima o de la calefacción motorizada. (págs. 26-28).

## Fundamento
La unidad J255 es idéntica físicamente para el autoclima y para la calefacción motorizada. Su programa de funcionamiento se determina mediante una codificación externa por cableado en el conector de la unidad. (pág. 34).

## Desarrollo
1. Codificación: Al conectar la unidad al mazo de cables, si el contacto 21 recibe masa a través de un puente de codificación, la unidad trabaja como calefacción motorizada. Si no recibe masa en el contacto 21, funciona como autoclima. (pág. 34).
2. Modos de funcionamiento del Autoclima:
   - Modo automático (AUTO): La unidad evalúa la temperatura solicitada, exterior, interior y del aire de entrada. Controla automáticamente la trampilla de temperatura, velocidad de turbina, recirculación y conexión del compresor. (págs. 26-27).
   - Modo semiautomático: La regulación de temperatura se mantiene activa, pero el usuario fija manualmente uno o varios parámetros (velocidad de turbina, recirculación o conexión AC). Desaparece la palabra AUTO del display. (pág. 27).
   - Modo manual: La unidad acciona los componentes únicamente a petición del usuario desde los pulsadores. En el display la temperatura se indica con letras (p. ej. COLD / HOT) en lugar de ºC. (pág. 28).
3. Iluminación: Regula la intensidad luminosa de los leds de los pictogramas del mando de distribución según la señal del regulador E20. (pág. 28).

## Valores de referencia
Masa en el contacto 21 del conector de J255: Calefacción motorizada.
Sin masa en contacto 21: Autoclima. (pág. 34).

## Errores de concepto frecuentes
Creer que existen dos unidades de control físicamente distintas para recambio (una para autoclima y otra para calefacción motorizada); se comercializa una única unidad de control J255 cuya lógica de funcionamiento se selecciona mediante la masa presente en el pín 21 del conector. (pág. 34).

---

```yaml
tipo: fundamento
titulo: Unidad de control del aire acondicionado J293
entidad: unidad-control-aire-acondicionado
area: climatizacion
sistema: control-climatizacion
codigo: J293
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "29"
relacionados: [embrague-compresor, electroventilador-condensador, presostato]
palabras: [J293, rele de aire acondicionado, acoplamiento magnético, ventiladores, corte por motor]
```

## Objeto
Gestionar la alimentación eléctrica de potencia hacia el acoplamiento magnético N25 del compresor y la excitación de los electroventiladores V7 y V35. (pág. 29).

## Fundamento
Recibe las solicitudes de conexión desde la unidad de climatización J255 y contrasta dichas órdenes con los interruptores de seguridad de presión (F129/G65), temperatura de agua (F38/F18) y las señales de inhibición enviadas por la unidad de control del motor. (pág. 29).

## Desarrollo
1. Control del acoplamiento magnético N25:
   - Para conectar N25 requiere recibir la señal de positivo desde la UCE J255. Dicha señal debe atravesar previamente el conmutador de presión F129 (cerrado en rango 2-32 bares) y el interruptor térmico F38 (cerrado con t > 5 ºC) o bien estar en margen correcto en el sensor G65. (pág. 29).
   - Simultáneamente exige la ausencia de señal de masa enviada por la UCE del motor (quien inhibe el compresor en aceleración brusca, kick-down, primeros 10 s tras arranque o falta de r.p.m.). (págs. 18, 29).
2. Control de ventiladores V7 y V35:
   - Conecta la 1ª velocidad al activarse el compresor o por señal de 95 ºC del termocontacto F18. (pág. 29).
   - Conecta la 2ª velocidad si la presión del circuito alcanza 16 bares (vía F129/G65) o el refrigerante alcanza 105 ºC (vía F18). (pág. 29).

## Valores de referencia
Inhibición por UCE de motor: envío de masa a la unidad J293.
Corte de compresor por baja presión: < 2 bares.
Corte de compresor por alta presión: > 32 bares. (págs. 16, 18, 29).

## Errores de concepto frecuentes
Sustituir la unidad J293 ante la falta de acoplamiento del compresor sin comprobar la línea de inhibición procedente de la UCE de motor; si la UCE de motor envía masa fija a la J293, el compresor no se conectará aunque el circuito frigorífico esté en perfectas condiciones. (págs. 18, 29).

---

```yaml
tipo: fundamento
titulo: Autodiagnóstico del autoclima y calefacción motorizada
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "34-38"
relacionados: [unidad-control-climatizador]
palabras: [autodiagnóstico, memoria de averías, dirección 08, función 01, función 02, función 03, función 04, función 08]
```

## Objeto
Supervisar eléctricamente los sensores y actuadores del sistema de climatización, memorizar los fallos detectados y permitir el diagnóstico guiado en taller a través del equipo de diagnosis. (págs. 34-38).

## Fundamento
La unidad de control J255 vigila constantemente sus circuitos de entrada y salida. Para acceder a la autodiagnosis se utiliza el equipo de diagnosis conectado al conector de 16 polos bajo la dirección "08 - Aire acondicionado". (págs. 34-35).

## Desarrollo
Las funciones disponibles en el menú de autodiagnosis son:
- Función 01 (Versión de la unidad de control): Muestra la clave de recambio (p. ej. 6K0959291), versión de software (p. ej. X01), código de taller y tipo de equipo (código 220 para autoclima, código 110 para calefacción motorizada). (pág. 34).
- Función 02 (Consultar memoria de averías): Muestra los fallos de sensores y actuadores memorizados. Distingue entre averías permanentes (requieren reparación y borrado manual) y esporádicas (se borran automáticamente tras 40 puestas en marcha sin repetirse). (págs. 34-35).
- Función 03 (Diagnóstico de elementos actuadores): Activa secuencialmente el acoplamiento N25 (2 s ON/OFF), turbina V2 (pasos de 2,5 V), motor V68 (mínimo a máximo) y motor V113 (recirculación a aire fresco). (pág. 36).
- Función 04 (Ajuste básico): Ejecuta la calibración y memorización de topes del motor V68 seleccionando el grupo 002. Obligatorio tras sustituir V68 o J255. (pág. 36).
- Función 05 (Borrar memoria de averías). (pág. 34).
- Función 06 (Finalizar emisión). (pág. 34).
- Función 08 (Leer bloque de valores de medición): Muestra parámetros reales en tiempo real (grupos 001 a 006: estados del compresor, presostato, posiciones de potenciómetro V68 en voltios, estado de pulsadores, temperaturas NTC y posición del mando de distribución en %). (págs. 36-37).

## Valores de referencia
Dirección de acceso en equipo de diagnosis: "08".
Averías esporádicas: borradas tras 40 ciclos de arranque sin fallo.
Código de tipo de equipo en función 01: 220 = Autoclima, 110 = Calefacción motorizada. (págs. 34-35).

## Errores de concepto frecuentes
Intentar borrar la memoria de averías sin solucionar la falla física previa; si el fallo es permanente, permanecerá grabado en la unidad de control. (págs. 34-35).

COBERTURA: documento «CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf», páginas 1 a 38 de 38. [completo]