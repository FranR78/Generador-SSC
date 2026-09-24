```yaml
tipo: fundamento
titulo: Regulación y protección del sistema de climatización
entidad: regulacion-sistema-climatizacion
area: climatizacion
sistema: control-climatizacion
fabricante: VW
fuente: "208. Regulación del Sistema.pdf"
paginas: "34-35"
relacionados: [compresor, electroventilador-condensador, presostato, transmisor-presion, sensor-evaporador]
palabras: [vigilancia, presiones de trabajo, engelamiento evaporador, mando manual, elevación ralentí]
```

## Objeto
Evitar alteraciones en las presiones de trabajo que puedan provocar daños en el circuito frigorífico y en el motor, previniendo al mismo tiempo el engelamiento del evaporador (pág. 34).

## Fundamento
Una unidad de control procesa la información enviada por los equipos de vigilancia del circuito de alta y baja presión y gestiona la conexión y desconexión periódica del compresor, así como la velocidad del ventilador para mantener la presión en valores normales (pág. 34).

## Desarrollo
En los sistemas con compresor no regulado, las señales de vigilancia permiten adaptar la activación del acoplamiento electromagnético N25 y del ventilador V7 a las necesidades de rendimiento frigorífico (pág. 34). Al conectar el conmutador de climatización E35, la unidad de control del motor J257 recibe la señal e incrementa el régimen de ralentí para compensar la carga mecánica del compresor (págs. 34-35).
El circuito básico de regulación de mando manual integra los siguientes componentes interconectados: conmutador E35, válvula de descarga de sobrepresión, conmutador de presión F129 (o transmisor de alta presión G65 en sistemas modernos), transmisor de temperatura del evaporador G153 (o conmutador E33), termoconmutador F18, relés J32 y J101, unidad de control del climatizador J301 (y/o unidad de control del ventilador J293) y unidad de control del motor J257 (págs. 34-35).

📷 IMAGEN: Esquema general de la regulación del sistema de aire acondicionado manual con sus equipos de vigilancia, relés y unidades de control — Fuente: 208. Regulación del Sistema.pdf, págs. 34-35

## Valores de referencia
- Umbrales de conmutación del termoconmutador F18: t1 = 95 ºC (escalón 1), t2 = 103 ºC (escalón 2) (pág. 35).
- Umbrales del conmutador de presión F129: P1 = 0,2 MPa (2 bar) / 3,2 MPa (32 bar); P2 = 1,6 MPa (16 bar) (pág. 35).

## Errores de concepto frecuentes
- Asumir que la activación del conmutador de climatización acciona el compresor sin que la unidad de control del motor intervenga para ajustar el ralentí (págs. 34-35).

```yaml
tipo: componente
titulo: Conmutador para climatizador
entidad: interruptor-climatizacion
area: climatizacion
sistema: control-climatizacion
codigo: E35
fabricante: VW
fuente: "208. Regulación del Sistema.pdf"
paginas: "35"
forma_parte_de: control-climatizacion
relacionados: [embrague-compresor, electroventilador-condensador, ventilador-habitaculo]
palabras: [E35, mando A/C, ralentí, conmutador temperatura exterior, < 5 ºC]
```

## Misión
Establecer la orden eléctrica de activación hacia el compresor a través del acoplamiento electromagnético N25 e informar a la unidad de control del motor para elevar el ralentí (pág. 35).

## Tipos y características
Mando de accionamiento manual situado en el salpicadero que puede llevar conectado a continuación un conmutador de temperatura exterior (pág. 35).

## Principio de funcionamiento
Al accionar el conmutador E35, se habilita la alimentación del acoplamiento electromagnético N25 (pág. 35). En sistemas de regulación automática, arrancan simultáneamente el ventilador para líquido refrigerante V7 y la turbina de aire fresco V2 (pág. 35). En climatizadores manuales, se exige seleccionar al menos el escalón de velocidad 1 en la turbina (pág. 35). Paralelamente, la unidad de control del motor eleva el régimen de ralentí para compensar la potencia absorbida por el compresor (pág. 35). Si equipa conmutador de temperatura exterior conectado en serie, este impide la puesta en marcha con temperaturas inferiores a 5 ºC (pág. 35).

## Valores de trabajo
- Umbral de bloqueo por temperatura exterior: inferior a 5 ºC (pág. 35).
- Escalón mínimo requerido en la turbina (manual): escalón 1 (pág. 35).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Válvula de descarga de sobrepresión
entidad: valvula-sobrepresion
area: climatizacion
sistema: circuito-frigorifico
fabricante: VW
fuente: "208. Regulación del Sistema.pdf"
paginas: "35"
forma_parte_de: compresor
relacionados: [compresor, filtro-deshidratador]
palabras: [válvula descarga, sobrepresión, 38 bares, 30-35 bares, precinto de ruptura]
```

## Misión
Evitar daños estructurales e higiénicos en el circuito frigorífico liberando fluido al exterior al registrarse una sobrepresión excesiva (pág. 35).

## Tipos y características
Válvula de seguridad mecánica montada directamente en el cuerpo del compresor o en el depósito de líquido deshidratador (pág. 35). Según la versión, puede incorporar un disco o precinto de plástico que se revienta al responder la válvula (pág. 35).

## Principio de funcionamiento
Permanece cerrada durante el funcionamiento normal. Si la presión en el lado de alta alcanza aproximadamente 3,8 MPa (38 bares), la válvula abre descargando fluido a la atmósfera (pág. 35). Una vez cedida la sobrepresión y cuando el nivel desciende a un rango de 3,0 a 3,5 MPa (30 a 35 bares), la válvula se vuelve a cerrar (pág. 35).

## Valores de trabajo
- Presión de apertura de la válvula: 3,8 MPa (38 bares) aprox. (pág. 35).
- Presión de cierre de la válvula: 3,0 a 3,5 MPa (30 a 35 bares) aprox. (pág. 35).

## Anomalías frecuentes
- Reventón del disco de plástico por sobrepresión derivada de anomalías en la condensación o bloqueos del circuito (pág. 35).

## Comportamiento en avería
Descarga de agente frigorífico al exterior y rotura del precinto plástico protector (pág. 35).

## Cómo comprobarlo
Inspección visual del disco de plástico para verificar si ha reventado tras un episodio de sobrepresión (pág. 35).

## Mantenimiento
Tras la respuesta de la válvula, investigar la causa que originó la sobrepresión en el sistema (pág. 35). El precinto de ruptura sólo se debe sustituir estando el sistema completamente vacío de refrigerante (pág. 35).

```yaml
tipo: componente
titulo: Transmisor de temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
codigo: G153
fabricante: VW
fuente: "208. Regulación del Sistema.pdf"
paginas: "35"
forma_parte_de: evaporador
relacionados: [evaporador, unidad-control-climatizador, compresor]
palabras: [G153, E33, congelación, -1 ºC a 0 ºC, +3 ºC, aletas evaporador]
```

## Misión
Medir la temperatura en el bloque del evaporador para evitar su engelamiento por congelación del agua de condensación acumulada en las aletas (pág. 35).

## Tipos y características
Sensor térmico alojado directamente entre las aletas de refrigeración del evaporador (pág. 35). En otros sistemas se sustituye por el conmutador de temperatura del evaporador E33 de corte directo (pág. 35).

## Principio de funcionamiento
Capta la temperatura en la matriz del evaporador y transmite una señal eléctrica a la unidad de control del climatizador (pág. 35). Si la temperatura desciende entre -1 ºC y 0 ºC, la unidad de control desactiva el acoplamiento electromagnético N25 interrumpiendo el trabajo del compresor (pág. 35). Cuando la temperatura asciende de nuevo hasta +3 ºC, se vuelve a conectar el compresor (pág. 35). En los sistemas con conmutador E33, este interrumpe directamente la corriente de alimentación del acoplamiento electromagnético (pág. 35).

## Valores de trabajo
- Temperatura de desconexión del compresor: de -1 ºC a 0 ºC (pág. 35).
- Temperatura de reconexión del compresor: +3 ºC (pág. 35).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Conmutador de presión para climatizador
entidad: presostato
variante: trinaria
area: climatizacion
sistema: control-climatizacion
codigo: F129
fabricante: VW
fuente: "208. Regulación del Sistema.pdf"
paginas: "36"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, electroventilador-condensador, unidad-control-climatizador]
palabras: [F129, trinaria, 24-32 bar, 2 bar, 16 bar, suciedad condensador, fugas]
```

## Misión
Vigilar y limitar la presión en el lado de alta del circuito frigorífico cerrado, protegiendo el compresor mediante desacoplamiento y garantizando el caudal de aire en el condensador (pág. 36).

## Tipos y características
Conmutador de presión de versión combinada triple montado en la tubería de alta presión o en el depósito de líquido (pág. 36).

📷 IMAGEN: Conmutador de presión triple F129 y sus rangos de actuación sobre el circuito de refrigeración y compresor — Fuente: 208. Regulación del Sistema.pdf, pág. 36

## Principio de funcionamiento
Supervisa la presión del agente frigorífico actuando sobre tres umbrales de seguridad (pág. 36):
1. Desconexión por alta presión: a una presión positiva de 2,4 a 3,2 MPa (24 a 32 bares), la unidad de control del climatizador desactiva el acoplamiento electromagnético del compresor (ej. por suciedad intensa en el condensador) (pág. 36).
2. Desconexión por baja presión: si la presión cae a 0,2 MPa (2 bares), la unidad de control desactiva el acoplamiento electromagnético para evitar que el compresor gire sin gas ni lubricante (ej. por fugas de refrigerante) (pág. 36).
3. Conmutación del electroventilador: a una presión de 1,6 MPa (16 bares), conmuta el ventilador V7 a un escalón de velocidad superior para incrementar la condensación (pág. 36).

## Valores de trabajo
- Umbral de desconexión por sobrepresión alta: 2,4 a 3,2 MPa (24 a 32 bares) (pág. 36).
- Umbral de desconexión por falta de presión: 0,2 MPa (2 bares) (pág. 36).
- Umbral de activación del escalón superior del ventilador: 1,6 MPa (16 bares) (pág. 36).

## Anomalías frecuentes
- Desconexión del compresor por sobrepresión (> 24-32 bar) derivada de colmatación exterior o falta de intercambio en el condensador (pág. 36).
- Desconexión por baja presión (< 2 bar) por fugas de agente frigorífico (pág. 36).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Transmisor de alta presión
entidad: transmisor-presion
variante: map
area: climatizacion
sistema: control-climatizacion
codigo: G65
fabricante: VW
fuente: "208. Regulación del Sistema.pdf"
paginas: "36-37"
forma_parte_de: circuito-frigorifico
relacionados: [presostato, unidad-control-climatizador, unidad-control-ventiladores, electroventilador-condensador]
palabras: [G65, cristal de silicio, PWM, 50 Hz, 20 ms, 1.4 bar, 2.6 ms, 13%, avería 00819]
```

## Misión
Medir de forma continua y electrónica la presión del agente frigorífico en todo el ciclo de trabajo, transformando la magnitud física de presión en una señal eléctrica para las unidades de control del climatizador, del motor y de los ventiladores (págs. 36-37).

## Tipos y características
Sensor de presión electrónico que sustituye al conmutador F129, instalado en el tubo de alta presión (págs. 36-37). Integra un cristal de silicio (resistencia variable) y un microprocesador en el propio cuerpo del sensor (pág. 37). Susceptible de autodiagnóstico (pág. 37).

📷 IMAGEN: Transmisor de alta presión G65, sección del sensor con cristal de silicio y gráfica de la señal PWM (frecuencia 50 Hz, periodo 20 ms, pulso 2,6 ms a 1,4 bar) — Fuente: 208. Regulación del Sistema.pdf, págs. 36-37

## Principio de funcionamiento
La presión del refrigerante actúa contra el cristal de silicio deformándolo en proporción a la fuerza ejercida (pág. 37). Al deformarse, el cristal modifica su resistencia eléctrica y varía la tensión de medición captada en su estructura (pág. 37). El microprocesador interno procesa esta tensión y emite una señal digital modulada en anchura de impulsos (PWM) a una frecuencia fija de 50 Hz (duración de período de 20 ms = 100%) (pág. 37).
- A presión baja (0,14 MPa / 1,4 bares): la deformación es leve, la resistencia es baja y el microprocesador genera impulsos estrechos de 2,6 ms (13% del período) (pág. 37).
Las unidades de control utilizan esta señal para adaptar con precisión el ralentí del motor a la potencia absorbida por el compresor y para conmutar las velocidades del ventilador de forma decalada (con un breve retardo), evitando variaciones bruscas de régimen al ralentí (pág. 37).

## Valores de trabajo
- Frecuencia de la señal PWM: 50 Hz (período de 20 ms = 100%) (pág. 37).
- Ancho de impulso a 0,14 MPa (1,4 bares): 2,6 ms (13% de la duración del período) (pág. 37).

## Anomalías frecuentes
- Registro del código de avería 00819 "Transmisor de alta presión G65 - Señal muy baja" en la memoria del autodiagnóstico (pág. 37).

## Comportamiento en avería
Si la unidad de control para el ventilador del líquido refrigerante no detecta señal proveniente del sensor G65, desconecta el compresor automáticamente por motivos de seguridad (pág. 37).

## Cómo comprobarlo
Consultar la memoria de averías del sistema mediante el equipo de diagnosis (código 00819) y verificar con osciloscopio la señal PWM entre sus terminales (pág. 37).

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «208. Regulación del Sistema.pdf», páginas 34 a 37 de 37. completo