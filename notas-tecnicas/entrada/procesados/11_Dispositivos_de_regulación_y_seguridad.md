```yaml
tipo: componente
titulo: Interruptor de climatización
entidad: interruptor-climatizacion
area: climatizacion
sistema: control-climatizacion
fuente: "11. Dispositivos de regulación y seguridad.pdf"
paginas: "87"
relacionados: [unidad-control-climatizador, compresor]
palabras: [interruptor AC, mando climatización, turbina aire fresco, conmutador temperatura exterior]
```

## Misión
Dar la orden de activación para el accionamiento del acoplamiento magnético del compresor de aire acondicionado (pág. 87).

## Tipos y características
Mando o conmutador de accionamiento manual o automático (AC) integrado en el panel de control del climatizador del vehículo (pág. 87).

## Principio de funcionamiento
Al accionar el interruptor de AC en sistemas de regulación automática, se conectan simultáneamente la turbina de aire fresco y el electroventilador del radiador (pág. 87). En sistemas manuales, es necesario seleccionar previamente alguna velocidad en el mando de la turbina de aire fresco para permitir el funcionamiento del sistema (pág. 87). La Unidad de Control del motor recibe la señal de AC conectado y ajusta el régimen de ralentí para compensar la carga del compresor (pág. 87). Puede conectarse en serie con un conmutador de temperatura exterior o con el termostato del evaporador (pág. 87).

## Valores de trabajo
- Umbral de corte por temperatura exterior (al estar conectado en serie con conmutador exterior): impide el funcionamiento con temperaturas inferiores a 5 ºC (pág. 87).

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
titulo: Válvula de descarga por sobrepresión
entidad: valvula-sobrepresion
area: climatizacion
sistema: circuito-frigorifico
fuente: "11. Dispositivos de regulación y seguridad.pdf"
paginas: "87-88"
forma_parte_de: compresor
relacionados: [compresor, presostato, transmisor-presion]
palabras: [válvula de sobrepresión, 38 bares, 30-35 bares, precinto, vaciar circuito]
```

## Misión
Proteger el circuito frigorífico frente a sobrepresiones peligrosas liberando agente frigorífico a la atmósfera cuando la presión de alta alcanza el límite de seguridad (pág. 87).

## Tipos y características
Válvula de seguridad mecánica montada habitualmente en la salida de alta presión del compresor (pág. 87). Incorpora un precinto de plástico o aluminio que se rompe o revienta al activarse la válvula (pág. 88).

## Principio de funcionamiento
Abre mecánicamente la descarga del circuito cuando se alcanza una presión de disparo de aproximadamente 38 bares en el lado de alta (pág. 88). Una vez evacuada parte de la masa de gas y cuando la presión desciende al rango de 30 a 35 bares, la válvula se vuelve a cerrar (pág. 88).

## Valores de trabajo
- Presión de apertura/disparo: 38 bares aproximadamente (pág. 88).
- Presión de cierre/rearme: de 30 a 35 bares aproximadamente (pág. 88).

## Anomalías frecuentes
- Activación y reventón del precinto de la válvula provocado por un aumento excesivo de presión debido a una obturación en el circuito frigorífico o fallo de refrigeración en el condensador (pág. 88).

## Comportamiento en avería
Fuga y descarga de fluido refrigerante al exterior con la rotura del precinto de la válvula (pág. 88).

## Cómo comprobarlo
Inspección visual del precinto de plástico o aluminio de la válvula para comprobar si ha reventado tras una sobrepresión (pág. 88).

## Mantenimiento
Tras el disparo de la válvula, investigar y corregir la causa que originó la sobrepresión (como obturaciones) (pág. 88). Para sustituir la válvula es obligatorio vaciar previamente el circuito frigorífico mediante una estación de recarga (pág. 88).

```yaml
tipo: componente
titulo: Sensor de temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fuente: "11. Dispositivos de regulación y seguridad.pdf"
paginas: "87-88"
forma_parte_de: evaporador
relacionados: [evaporador, unidad-control-climatizador, compresor]
palabras: [sensor evaporador, NTC, congelación, -1 a 0 ºC, 3 ºC]
```

## Misión
Medir la temperatura existente entre las aletas del evaporador para evitar la congelación del agua condensada en su superficie (págs. 87-88).

## Tipos y características
Sonda térmica de tipo NTC (coeficiente de temperatura negativo) alojada entre las aletas del evaporador (pág. 87). En otros sistemas se sustituye por un termostato electromecánico de corte directo o por un conmutador de temperatura exterior (pág. 88). En compresores de cilindrada variable no se requiere este sensor (pág. 88).

## Principio de funcionamiento
Detecta la temperatura en el bloque del evaporador y transmite una señal analógica de tensión a la Unidad de Control del climatizador (pág. 87). La unidad de control procesa la señal y desconecta el embrague del compresor cuando la temperatura desciende entre -1 ºC y 0 ºC, volviendo a conectar el compresor cuando la temperatura sube a unos 3 ºC (pág. 87).

## Valores de trabajo
- Temperatura de desconexión del compresor: entre -1 ºC y 0 ºC (pág. 87).
- Temperatura de reconexión del compresor: 3 ºC aproximadamente (pág. 87).

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
titulo: Conmutador de presión trinario
entidad: presostato
variante: trinaria
area: climatizacion
sistema: control-climatizacion
fuente: "11. Dispositivos de regulación y seguridad.pdf"
paginas: "88"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, electroventilador-condensador, transmisor-presion]
palabras: [trinaria, presostato triple, corte por baja, corte por alta, electroventilador, 16 bar]
```

## Misión
Vigilar y limitar las condiciones de presión en el circuito hidráulico del climatizador, protegiendo el compresor y asegurando el caudal de aire en el condensador (pág. 88).

## Tipos y características
Presostato electromecánico de combinación triple (trinaria) montado en el tubo de alta presión o directamente en el filtro deshidratador (pág. 88). En vehículos actuales se encuentra sustituido por el transmisor de presión en alta (sensor MAP) (pág. 88).

## Principio de funcionamiento
Supervisa tres umbrales de presión mediante contactos eléctricos internos para gobernar el embrague del compresor y el electroventilador (pág. 88):
- Corte por baja presión: si la presión desciende por debajo de 2 bares (debido a una fuga de refrigerante), abre contactos y corta la alimentación del embrague del compresor (pág. 88).
- Conexión del electroventilador: al alcanzar los 16 bares en alta, cierra los contactos de alimentación del electroventilador a máxima velocidad para optimizar la condensación (pág. 88).
- Corte por alta presión: si la presión sube entre 24 y 32 bares (por suciedad en el condensador u obturación), abre contactos y desacopla el compresor (pág. 88).

## Valores de trabajo
- Umbral de corte por baja presión: presión de alta inferior a 2 bares (pág. 88).
- Umbral de activación del electroventilador a máxima velocidad: presión de alta igual o superior a 16 bares (pág. 88).
- Umbral de corte por alta presión: presión de alta entre 24 y 32 bares (pág. 88).

## Anomalías frecuentes
- Descenso de presión (< 2 bar) por fugas de agente frigorífico (pág. 88).
- Sobrepresión (24 a 32 bar) por acumulación de suciedad en el condensador u obturación en las conducciones (pág. 88).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Transmisor de presión de alta
entidad: transmisor-presion
variante: map
area: climatizacion
sistema: control-climatizacion
fuente: "11. Dispositivos de regulación y seguridad.pdf"
paginas: "89-91"
forma_parte_de: circuito-frigorifico
relacionados: [presostato, unidad-control-climatizador, electroventilador-condensador]
palabras: [sensor MAP, cristal de silicio, PWM, anchura de impulsos, 14 bar, 8 ms, 37 bar]
```

## Misión
Medir de forma continua el valor exacto de la presión del agente frigorífico en el tramo de alta y convertirlo en una señal eléctrica para la unidad de control (pág. 89).

## Tipos y características
Sensor electrónico de presión piezoeléctrico/piezorresistivo colocado en el tubo de alta presión que sustituye a la trinaria tradicional (pág. 89). Compuesto por un cristal de silicio sensible a las variaciones de presión y un microprocesador integrado (pág. 90). Emite una señal digital modulada en anchura de impulsos (PWM a 12 V) o una señal analógica (1 V a 4 V alimentado a 5 V o 12 V) (págs. 89, 91).

## Principio de funcionamiento
El cristal de silicio se deforma proporcionalmente a la presión aplicada, aumentando su resistencia eléctrica cuanto mayor es la deformación (pág. 90). El microprocesador procesa la variación de tensión y genera una señal digital PWM cuyo ancho de impulso es directamente proporcional a la presión existente (pág. 90). La señal se envía a la Unidad de Control del motor (sistemas manuales) o a la de Climatización (sistemas automáticos) para adaptar el ralentí, activar los electroventiladores con un retardo suave (decalado) y proteger el compresor (págs. 89-90).

## Valores de trabajo
- Tensión de alimentación: 12 V o 5 V según la variante del sensor (págs. 89, 91).
- Ancho de impulso PWM a 1,4 bar (mínima presión): 2,6 ms (pág. 90).
- Ancho de impulso PWM a 5 bar (circuito en reposo): 5 ms aproximadamente (pág. 90).
- Ancho de impulso PWM a 14 bar (funcionamiento nominal A/C): 8 ms aproximadamente (pág. 91).
- Ancho de impulso PWM a 37 bar (presión máxima): 18 ms (pág. 91).
- Tensión de salida en versión analógica: comprendida entre 1 V y 4 V (págs. 89, 91).

## Anomalías frecuentes
- Código de avería en memoria de la unidad de control: "Transmisor de alta presión, señal muy baja" (pág. 91).

## Comportamiento en avería
Si la Unidad de Control de los ventiladores no recibe señal o registra una señal excesivamente baja, desconecta el compresor por motivos de seguridad (pág. 91).

## Cómo comprobarlo
Conectar un osciloscopio en el cable de señal del sensor y medir la amplitud de la señal (12 V) y el ancho de impulso en milisegundos (ms), verificando que varía en proporción directa a la presión del circuito de alta (págs. 90-91). En versiones analógicas, medir la tensión con un polímetro (entre 1 V y 4 V) (pág. 91).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Conmutadores de alta y baja presión
entidad: presostato
variante: independientes
area: climatizacion
sistema: control-climatizacion
fuente: "11. Dispositivos de regulación y seguridad.pdf"
paginas: "91"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, estrangulador, valvula-sobrepresion]
palabras: [conmutador baja, conmutador alta, 1.7 bar, 30 bar, estrangulador]
```

## Misión
Desconectar el embrague electromagnético del compresor ante caídas acusadas de presión en baja o ante elevaciones excesivas de presión en alta en circuitos con estrangulador (pág. 91).

## Tipos y características
Dos presostatos electromecánicos instalados de forma independiente: uno en el tramo de baja presión y otro en el tramo de alta presión (pág. 91). Utilizados en sistemas provistos de estrangulador (pág. 91).

## Principio de funcionamiento
- Conmutador de baja presión: Desconecta el compresor cuando la presión en la zona de baja cae por debajo de 1,7 bares, evitando la congelación del evaporador y protegiendo el compresor frente a fugas o carga insuficiente (pág. 91).
- Conmutador de alta presión: Desconecta el compresor cuando la presión en la zona de alta supera aproximadamente los 30 bares, evitando el reventón o disparo de la válvula de seguridad por suciedad en el condensador, obstrucción o fallo de los electroventiladores (pág. 91).

## Valores de trabajo
- Umbral de corte del conmutador de baja presión: P < 1,7 bares (pág. 91).
- Umbral de corte del conmutador de alta presión: P > 30 bares aproximadamente (pág. 91).

## Anomalías frecuentes
- Corte en baja por fuga de refrigerante o carga insuficiente de gas (pág. 91).
- Corte en alta por suciedad en el condensador, obstrucciones hidráulicas o avería en los electroventiladores (pág. 91).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termoconmutador para la temperatura de refrigerante
entidad: sensor-temperatura-motor
variante: termoconmutador
area: motor
sistema: refrigeracion-motor
fuente: "11. Dispositivos de regulación y seguridad.pdf"
paginas: "91-92"
forma_parte_de: circuito-refrigeracion-motor
relacionados: [compresor, unidad-control-climatizador, liquido-refrigerante-motor]
palabras: [termoconmutador, 119 ºC, 112 ºC, sobrecalentamiento, Can-Bus, carga motor]
```

## Misión
Proteger el motor del vehículo frente a sobrecalentamientos térmicos desacoplando la carga adicional que supone el compresor del aire acondicionado (págs. 91-92).

## Tipos y características
Interruptor térmico de contacto tarado o sonda NTC montada en el circuito de refrigeración del motor que transmite información a través de la red Can-Bus (págs. 91-92).

## Principio de funcionamiento
Mide la temperatura del líquido refrigerante del motor. Si durante una conducción con alta exigencia (subida de pendientes o fuerte carga) la temperatura del refrigerante alcanza aproximadamente 119 ºC, el conmutador abre sus contactos (o la unidad de motor envía la orden por Can-Bus a la unidad de climatización) y desacopla el compresor (págs. 91-92). Cuando el motor se enfría y el líquido desciende a 112 ºC, vuelve a conectar el compresor (pág. 92).

## Valores de trabajo
- Temperatura de desconexión del compresor: 119 ºC aproximadamente (pág. 92).
- Temperatura de reconexión del compresor: 112 ºC aproximadamente (pág. 92).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «11. Dispositivos de regulación y seguridad.pdf», páginas 87 a 92 de 92. completo