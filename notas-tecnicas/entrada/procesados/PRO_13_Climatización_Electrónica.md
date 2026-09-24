```yaml
tipo: fundamento
titulo: Estrés climatológico y márgenes de agrado térmico
entidad: higrometria-y-confort
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "98-99"
relacionados: [regulacion-automatica]
palabras: [estrés climatológico, margen agradable, transpiración, seguridad activa]
```

## Objeto
Analizar la influencia de las condiciones higrotérmicas del habitáculo sobre la capacidad perceptiva del conductor y definir los márgenes de confort y sobrecarga ambiental (págs. 98-99).

## Fundamento
El cuerpo humano se mantiene en estado confortable cuando su entorno se encuentra dentro de límites definidos de temperatura y humedad; el exceso de calor genera una sobrecarga térmica (estrés climatológico) que reduce la oxigenación cerebral y disminuye la seguridad activa del vehículo (págs. 98-99).

## Desarrollo
Efectos de las condiciones climáticas en el habitáculo:
- Margen agradable (Zona A): se sitúa entre 20 ºC y 22 ºC de temperatura ambiente (págs. 98-99).
- Caudales de aire requeridos según la temperatura exterior:
  - A 40 ºC exterior: requiere reducir la temperatura interior a 23 ºC con un caudal intenso de 10 kg/min (pág. 98).
  - A -20 ºC exterior: requiere aumentar la temperatura interior a 28 ºC con un caudal intenso de 8 kg/min (pág. 98).
  - A 10 ºC exterior: requiere elevar la temperatura interior a 21 ºC con un caudal reducido de 4 kg/min (pág. 98).
- Influencia de la radiación solar: en vehículos expuestos al sol, la temperatura del habitáculo puede subir más de 15 ºC respecto al exterior, afectando principalmente a la zona de la cabeza (págs. 98-99).
- Disminución de aptitudes por calor: el aumento de temperatura de 25 ºC a 35 ºC disminuye en un 20% la capacidad perceptiva y la facultad combinatoria del ser humano, lo que equivale en pérdida de concentración a una tasa de alcoholemia de 0,5 g/l de sangre (pág. 99).
- Estrés climatológico (Zona C): sobrecarga térmica intensa donde aumentan la transpiración, la temperatura corporal y la frecuencia cardíaca, impidiendo que el cerebro reciba suficiente oxígeno (págs. 98-99).
- Depuración y deshidratación: el evaporador condensa la humedad del aire reteniendo impurezas; la adición de filtros antipolen y de carbón activo mejora la calidad del aire para personas alérgicas (pág. 99).

📷 IMAGEN: Gráfica de curvas de agrado térmico, caudal de aire en kg/min y zonas de confort, carga media y estrés climatológico — Fuente: PRO 13. Climatización Electrónica.pdf, pág. 98

## Valores de referencia
- Margen de temperatura confortable en habitáculo: 20 ºC a 22 ºC (págs. 98-99).
- Caudal de aire a 40 ºC ambiente: 10 kg/min (pág. 98).
- Caudal de aire a -20 ºC ambiente: 8 kg/min (pág. 98).
- Caudal de aire a 10 ºC ambiente: 4 kg/min (pág. 98).
- Disminución de capacidad perceptiva de 25 ºC a 35 ºC: 20% (equivalente a 0,5 g/l de alcoholemia) (pág. 99).

## Errores de concepto frecuentes
- Considerar el equipo de climatización exclusivamente como un opcional de confort, ignorando que es un elemento de seguridad activa clave para prevenir accidentes por fatiga térmica (pág. 99).

```yaml
tipo: fundamento
titulo: Comparativa entre climatización manual y regulación automática
entidad: regulacion-automatica
variante: manual-vs-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "100-101"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [climatización manual, climatización automática, servomotores, UCE, sensores]
```

## Objeto
Diferenciar la arquitectura, el modo de gestión y la intervención del conductor entre los sistemas de aire acondicionado manuales y los climatizadores automáticos (págs. 100-101).

## Fundamento
En el sistema manual el conductor realiza las funciones de unidad de control y actuador ajustando mandos mecánicos por cable; en el sistema automático una UCE procesa información de múltiples sensores y comanda servomotores con potenciómetro de realimentación (págs. 100-101).

## Desarrollo
Características comparativas:
1. Climatización manual:
   - El movimiento de las trampillas de mezcla y distribución se realiza mediante cables conectados físicamente al panel de mandos (pág. 100).
   - El caudal de aire depende de la selección manual entre las 4 velocidades de giro de la turbina (págs. 100-101).
   - El conductor debe corregir manualmente de forma continua las fluctuaciones de temperatura provocadas por cambios en el clima exterior, la velocidad de marcha o la temperatura del refrigerante del motor (pág. 100).
2. Climatización automática:
   - El conductor únicamente selecciona la temperatura de confort deseada (pág. 101).
   - La UCE del climatizador recibe lecturas de sensores térmicos (entrada de aire, salida del evaporador, difusor central, zona pies, interior, exterior, radiación solar) e información vía Can-Bus (velocidad de marcha, r.p.m. del motor, tiempo parado) (pág. 101).
   - La UCE calcula las señales de salida para alimentar servomotores eléctricos que posicionan las trampillas, modula el regulador de la turbina de aire fresco y memoriza las averías en su registro de diagnóstico (pág. 101).

📷 IMAGEN: Esquema comparativo de la unidad climática manual con mando por cables frente a la unidad automática provista de servomotores y sensores — Fuente: PRO 13. Climatización Electrónica.pdf, págs. 100-101

## Valores de referencia
- Velocidades de selección manual de la turbina: 4 velocidades (pág. 100).

## Errores de concepto frecuentes
- Asumir que en un climatizador automático el conductor debe reajustar los mandos cuando varía la velocidad del vehículo o la temperatura del motor (págs. 100-101).

```yaml
tipo: componente
titulo: Sensor de temperatura exterior y de aire aspirado
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "103"
relacionados: [unidad-control-climatizador]
palabras: [NTC, paragolpes, retrovisor, canal aspiración, valor más bajo, 10 ºC]
```

## Misión
Medir la temperatura del aire ambiente exterior y la temperatura en el canal de entrada de aire fresco a la unidad climática para la regulación de las trampillas y de la turbina (pág. 103).

## Tipos y características
Sensores formados por resistencias de coeficiente de temperatura negativo (NTC). El sensor exterior se instala en el paragolpes delantero o en el espejo retrovisor derecho; el sensor de aire aspirado se ubica en el canal de entrada de aire (pág. 103).

## Principio de funcionamiento
Modifican su resistencia eléctrica de forma inversamente proporcional a la temperatura (pág. 103). La UCE del climatizador recibe ambas señales y suele utilizar el valor más bajo de las dos para realizar los cálculos de regulación de la trampilla de temperatura, recirculación, velocidad de la turbina e indicación en el cuadro de instrumentos (pág. 103). En sistemas actuales, el sensor exterior comunica la señal al cuadro de instrumentos y este la transmite por Can-Bus a la UCE del climatizador (pág. 103).

## Valores de trabajo
- Valor supletorio fijo por fallo de ambos sensores: +10 ºC (pág. 103).

## Anomalías frecuentes
- Registradas en la memoria de autodiagnóstico de la UCE (pág. 103).

## Comportamiento en avería
Si se avería uno de los dos sensores, la UCE adopta la señal del sensor que funciona (pág. 103). Si fallan ambos, se aplica el valor sustitutivo de +10 ºC (pág. 103). Si falla el sensor exterior, desaparece la indicación en el cuadro de instrumentos (pág. 103). En sistemas con un único sensor exterior, su fallo puede cancelar el acoplamiento magnético del compresor (pág. 103).

## Cómo comprobarlo
A través del volumen de diagnóstico del equipo de diagnosis conectado a la UCE (pág. 103).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Interruptor térmico para desacoplamiento del compresor
entidad: presostato
variante: interruptor-termico
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "104"
forma_parte_de: control-climatizacion
relacionados: [embrague-compresor, evaporador]
palabras: [interruptor térmico, caja de aguas, < 5 ºC, congelación evaporador, normalmente cerrado]
```

## Misión
Interrumpir la alimentación eléctrica del embrague electromagnético del compresor cuando la temperatura exterior desciende de un límite de seguridad para prevenir la congelación del evaporador (pág. 104).

## Tipos y características
Conmutador térmico mecánico instalado en la caja de aguas o zonas próximas, conectado en serie con la línea de alimentación del embrague del compresor (pág. 104).

## Principio de funcionamiento
Sus contactos permanecen normalmente cerrados permitiendo el paso de corriente hacia el embrague (pág. 104). Cuando la temperatura exterior desciende por debajo de 5 ºC, abre automáticamente sus contactos cortando la corriente al compresor (pág. 104).

## Valores de trabajo
- Umbral de apertura de contactos por baja temperatura: 5 ºC (pág. 104).

## Anomalías frecuentes
- Bloqueo mecánico de contactos en posición cerrada (pág. 104).

## Comportamiento en avería
No dispone de función de emergencia; si el interruptor no abre sus contactos por debajo de 5 ºC, el compresor continúa funcionando provocando la congelación del evaporador (pág. 104).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensor de temperatura interior
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "104"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [NTC interior, turbina aspiración, valor supletorio 22 a 26 ºC, salpicadero]
```

## Misión
Medir la temperatura real del aire en el habitáculo para el cálculo de la posición de la trampilla de temperatura (pág. 104).

## Tipos y características
Sensor térmico NTC que puede estar integrado directamente en la UCE/panel de mandos o alojarse de forma independiente en el salpicadero (págs. 104-105). Incorpora un pequeño electro motor que hace girar una turbina de aspiración (pág. 104).

## Principio de funcionamiento
El motor con turbina aspira de forma continua un caudal de aire del habitáculo haciéndolo pasar sobre la resistencia NTC para obtener una lectura precisa sin interferencias del calor local de la consola (pág. 104). La UCE analiza la variación de resistencia para posicionar las trampillas (pág. 104).

## Valores de trabajo
- Valor supletorio por ausencia de señal: entre +22 ºC y +26 ºC según el sistema (pág. 104).

## Anomalías frecuentes
- Ausencia de señal por fallo de la resistencia NTC o agarrotamiento del motorcillo de la turbina (pág. 104).

## Comportamiento en avería
La UCE sustituye la señal ausente por un valor fijo de entre 22 ºC y 26 ºC (pág. 104). El sistema sigue funcionando, pero al seleccionar temperaturas superiores o inferiores a la de referencia, el habitáculo se calentará o enfriará por encima de lo solicitado al carecer de lectura real (pág. 104).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensores de temperatura del difusor central y zona de pies
entidad: sensor-temperatura-interior
variante: difusores
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "104"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [difusor central, zona pies, NTC, -10 a +85 ºC, valor medio]
```

## Misión
Registrar la temperatura del aire tratado en las salidas del difusor central y del vano reposapiés de la unidad climática para la regulación de la temperatura de entrada (pág. 104).

## Tipos y características
Sondas térmicas del tipo NTC ubicadas directamente en las canalizaciones de salida del difusor central y de la zona de pies (pág. 104).

## Principio de funcionamiento
Miden la temperatura de impulsión del aire en ambas salidas (pág. 104). La UCE del climatizador procesa un valor medio de las lecturas indicadas por ambos sensores, siendo este un factor fundamental para la regulación automática (pág. 104).

## Valores de trabajo
- Rango de temperatura de registro de las sondas: de -10 ºC a +85 ºC (pág. 104).

## Anomalías frecuentes
- Ausencia de señal por fallo de una de las sondas (pág. 104).

## Comportamiento en avería
Si uno de los sensores deja de emitir señal, el sistema no puede realizar la regulación automática, manteniéndose fijos los parámetros existentes en el momento de producirse la avería (pág. 104).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensor para la temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "105"
forma_parte_de: evaporador
relacionados: [compresor, transmisor-presion]
palabras: [NTC evaporador, congelación, sensor MAP, rendimiento reducido, cilindrada variable]
```

## Misión
Registrar la temperatura del aire enfriado inmediatamente a la salida del evaporador para regular el rendimiento del compresor y evitar su congelación (pág. 105).

## Tipos y características
Sonda térmica de tipo NTC ubicada a la salida del evaporador o alojada directamente entre sus aletas (pág. 105). En compresores de cilindrada variable suele omitirse (pág. 105).

## Principio de funcionamiento
Emite una señal eléctrica hacia la UCE informando de la temperatura del aire tras pasar por el evaporador (pág. 105). La UCE utiliza este dato para ajustar el trabajo del compresor y garantizar la temperatura requerida evitando la formación de hielo (pág. 105).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Corte del cableado o avería interna de la sonda (pág. 105).

## Comportamiento en avería
Al ausentarse la señal o averiarse la sonda, el compresor se pasa a regular exclusivamente mediante la señal del sensor MAP de alta presión, limitándose el rendimiento del compresor para prevenir la congelación (pág. 105).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: fundamento
titulo: Señal de carga eléctrica del alternador en la climatización
entidad: regulacion-automatica
variante: carga-alternador
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "105"
relacionados: [unidad-control-climatizador, compresor, electroventilador-condensador]
palabras: [borne L, borne DF, red de abordo, Can-Bus, desconexión compresor, batería]
```

## Objeto
Informar a la UCE del climatizador sobre el nivel de saturación o trabajo del alternador para evitar la descarga accidental de la batería (pág. 105).

## Fundamento
El alternador genera una señal digital evaluando la tensión de trabajo (borne L) y el rendimiento (borne +/DF) que envía a la UCE de la red de a bordo, la cual emite un mensaje por el Can-Bus de confort (pág. 105).

## Desarrollo
Procesamiento y estrategia de gestión:
- Cuando el alternador supera un límite de trabajo prefijado, la UCE de la red de a bordo transmite un mensaje de exceso de carga a través del Can-Bus (pág. 105).
- La UCE del climatizador interpreta el mensaje y desactiva el compresor al tiempo que desconecta los electroventiladores (pág. 105).
- Esta acción reduce drásticamente el consumo de corriente impidiendo la descarga de la batería (pág. 105).

## Valores de referencia
- Bornes de evaluación del alternador: borne L (tensión de trabajo) y borne +/DF (rendimiento) (pág. 105).

## Errores de concepto frecuentes
- Creer que el climatizador funciona al máximo rendimiento ignorando las situaciones de sobrecarga eléctrica del alternador (pág. 105).

```yaml
tipo: fundamento
titulo: Señal de marcha atrás para el cierre automático de aire exterior
entidad: recirculacion
variante: marcha-atras
area: climatizacion
sistema: distribucion-aire
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "106"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [marcha atrás, gases de escape, Can-Bus, trampilla recirculación, aire exterior]
```

## Objeto
Activar de forma automática la recirculación de aire al engranar la marcha atrás para evitar la penetración de los gases de escape al habitáculo (pág. 106).

## Fundamento
El conmutador de la caja de cambios informa de la selección de la marcha atrás a la UCE de la red de a bordo, la cual vuelca el dato a la línea Can-Bus de confort hacia la UCE del climatizador (pág. 106).

## Desarrollo
Lógica de actuación:
- Al reconocer el mensaje de marcha atrás conectada, la UCE del climatizador manda accionar la trampilla de recirculación (pág. 106).
- La trampilla cierra la entrada de aire exterior impidiendo que los humos del tubo de escape sean aspirados hacia el interior mientras el vehículo recula (pág. 106).
- Si la señal se ausenta por avería, la función no se realiza, manteniéndose abierta la entrada de aire exterior al circular marcha atrás (pág. 106).

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Pensar que el cierre de la entrada de aire exterior solo se produce mediante la pulsación manual del botón de recirculación (pág. 106).

```yaml
tipo: componente
titulo: Unidad de control del climatizador y panel de mandos
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "106"
relacionados: [servomotor-trampilla, sensor-temperatura-interior]
palabras: [panel de mandos, UCE indivisible, display, AUTO, ECON, bizona]
```

## Misión
Procesar las lecturas de los sensores e instrucciones del usuario para gobernar servomotores, turbina, compresor y luneta térmica (pág. 106).

## Tipos y características
Módulo electrónico que forma un conjunto indivisible con el panel de mandos frontal, adaptado a la estética del salpicadero de cada modelo (pág. 106).

## Principio de funcionamiento
Recibe las señales de los sensores y las solicitudes del usuario (temperatura conductor/acompañante, salidas de aire, recirculación manual/automática, turbina, modo AUTO, ECON, luneta, asientos térmicos) (pág. 106). Calcula y envía señales de salida hacia los actuadores para regular la temperatura y el caudal (págs. 101, 106).

📷 IMAGEN: Panel de mandos y UCE indivisible de un climatizador automático bizona con pantallas digitales y pulsadores de función — Fuente: PRO 13. Climatización Electrónica.pdf, pág. 106

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Registro de averías de sensores o servomotores en la memoria de autodiagnóstico (págs. 101, 106).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
A través de la lectura de averías mediante el conector de diagnóstico OBD (págs. 101, 103).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Fotosensor para radiación solar
entidad: fotosensor-solar
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "107-108"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [fotodiodo, elemento óptico, incidencia oblicua, 5 V, 3 V osciloscopio, parabrisas atérmico]
```

## Misión
Medir la intensidad y el ángulo de incidencia de la radiación solar sobre el salpicadero para corregir la regulación de la temperatura, trampillas y turbina (págs. 107-108).

## Tipos y características
Sensor óptico compuesto por carcasa, filtro, elemento óptico y fotodiodo, ubicado en el centro del salpicadero (págs. 107-108). Puede ser de versión simple (climatizador normal) o doble (climatizador bizona) (pág. 108).

## Principio de funcionamiento
La corriente que atraviesa el fotodiodo es directamente proporcional a la luminosidad (pág. 107). El elemento óptico apantalla la luz de incidencia vertical y encauza mayor radiación hacia el fotodiodo cuando el sol entra de forma oblicua (que genera mayor sensación térmica), ordenando a la UCE aumentar la refrigeración y modificar la velocidad de la turbina (págs. 107-108).

📷 IMAGEN: Sección del fotosensor solar con filtro, elemento óptico y fotodiodo, junto con señal de osciloscopio al aplicar luz — Fuente: PRO 13. Climatización Electrónica.pdf, págs. 107-108

## Valores de trabajo
- Tensión de alimentación suministrada por la UCE: 5 V (pág. 108).
- Tensión de salida en osciloscopio ante luz intensa: subida de tensión hasta aprox. 3 V (pág. 108).

## Anomalías frecuentes
- Sustitución del parabrisas atérmico original por uno normal, lo que provoca que el climatizador no regule correctamente al recibir mayor radiación (pág. 108).

## Comportamiento en avería
En fotosensores dobles, si falla uno la UCE utiliza la señal del otro; si fallan ambos o el sensor simple, la UCE adopta un valor sustitutivo de radiación intermedia (pág. 108).

## Cómo comprobarlo
Verificar continuidad del cableado y alimentación de 5 V con encendido puesto (pág. 108). Conectar osciloscopio a las salidas de señal y acercar una luz intensa; la tensión debe subir hasta aprox. 3 V (pág. 108).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: fundamento
titulo: Señales suplementarias de intercambio de datos entre UCEs
entidad: regulacion-automatica
variante: senales-suplementarias
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "109"
relacionados: [unidad-control-climatizador, servomotor-trampilla, compresor]
palabras: [tiempo parado Tp, velocidad marcha v, régimen n, acelerador a fondo, Can-Bus]
```

## Objeto
Aumentar el confort térmico y optimizar la potencia del motor integrando datos dinámicos transmitidos vía Can-Bus desde otras unidades de control (pág. 109).

## Fundamento
Uso compartido de las señales de tiempo de parada, velocidad del vehículo y r.p.m. del motor entre el cuadro de instrumentos, la UCE de motor y la UCE del climatizador (pág. 109).

## Desarrollo
Efecto de las tres señales suplementarias:
1. Tiempo del vehículo parado (Tp): mide el tiempo desde que se desconecta el encendido hasta que se vuelve a conectar. Al arrancar, la UCE utiliza la temperatura exterior previa para evitar errores por calor radiado del motor, impidiendo un enfriamiento excesivo (pág. 109).
2. Velocidad de marcha (v): procedente del velocímetro/ABS. A medida que aumenta la velocidad, la UCE reduce la sección de paso de la chapaleta de velocidad para mantener invariable el caudal que entra (pág. 109).
3. Régimen de revoluciones (n): procedente de la UCE de motor. Impide conectar el compresor si el motor está parado o el ralentí no está estabilizado, y desconecta el compresor unos segundos al pisar el acelerador a fondo para disponer de toda la potencia en adelantamientos (pág. 109).

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Creer que al pisar a fondo el acelerador para adelantar el compresor permanece conectado restando potencia al motor (pág. 109).

```yaml
tipo: fundamento
titulo: Modo de regulación de la temperatura (frío, caliente e intermedio)
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "110"
relacionados: [evaporador, unidad-control-climatizador]
palabras: [modo frío, modo caliente, modo intermedio, mezcla de aire, regulación automática]
```

## Objeto
Mantener invariable la temperatura interior del habitáculo ajustando automáticamente el paso de aire por los intercambiadores térmicos (pág. 110).

## Fundamento
Posicionamiento automático de las chapaletas de mezcla según la temperatura exterior medida y la selección del usuario (pág. 110).

## Desarrollo
Estrategia de paso del aire:
- Con temperatura exterior fría: el aire de entrada se dirige hacia el radiador de calefacción antes de introducirlo en el habitáculo (pág. 110).
- Con temperatura exterior caliente: el aire de entrada se hace pasar por el evaporador, donde se enfría, deshidrata y depura (pág. 110).
- Con temperatura exterior intermedia: el aire pasa por el evaporador y una fracción se calienta en el radiador; la mezcla entra exactamente a la temperatura seleccionada sin intervención manual (pág. 110).

📷 IMAGEN: Esquema del paso de aire en la unidad climática automática en modos de temperatura fría, caliente e intermedia — Fuente: PRO 13. Climatización Electrónica.pdf, pág. 110

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Asumir que en temperaturas intermedias el climatizador apaga el compresor en lugar de mezclar proporciones de aire frío y caliente (pág. 110).

```yaml
tipo: fundamento
titulo: Distribución de aire y regulación bizona
entidad: regulacion-automatica
variante: bizona
area: climatizacion
sistema: distribucion-aire
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "111"
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [bizona, servomotor izquierdo, servomotor derecho, cuatro zonas, unidad trasera]
```

## Objeto
Permitir el ajuste de temperaturas independientes entre el lado del conductor y el del acompañante mediante la división del caudal de aire (pág. 111).

## Fundamento
Utilización de dos servomotores eléctricos independientes para accionar la chapaleta de mezcla del lado izquierdo y la del lado derecho (pág. 111).

## Desarrollo
Gestión bizona y multizona:
- En los conductos de distribución se divide el caudal en frío o caliente y para las partes izquierda y derecha del habitáculo (pág. 111).
- Un servomotor regula la mezcla en la zona izquierda y otro en la derecha (pág. 111).
- Aunque el aire se mezcla finalmente en el habitáculo, a la salida de los aireadores se aprecia una clara diferencia de temperatura y sensación térmica (pág. 111).
- En vehículos de alta gama se instala una segunda unidad climática en la zona trasera para regular hasta cuatro zonas independientes con su propio panel de mandos (pág. 111).

📷 IMAGEN: Esquema de la carcasa de distribución bizona dividida en conductos izquierdo y derecho accionados por servomotores — Fuente: PRO 13. Climatización Electrónica.pdf, pág. 111

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Creer que la regulación bizona exige montar dos evaporadores independientes en la parte delantera (pág. 111).

```yaml
tipo: fundamento
titulo: Sistema de recirculación de aire
entidad: recirculacion
area: climatizacion
sistema: distribucion-aire
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "112"
relacionados: [servomotor-trampilla, sensor-calidad-aire]
palabras: [recirculación, empañamiento, aire viciado, servomotor, vacío]
```

## Objeto
Acondicionar el aire del propio habitáculo sin tomar aire del exterior para acelerar el calentamiento o enfriamiento y aislar de olores o contaminación (pág. 112).

## Fundamento
Cierre de la chapaleta de entrada de aire fresco mediante un actuador de vacío o un servomotor eléctrico (combinado en ocasiones con el reglaje de velocidad) (pág. 112).

## Desarrollo
Ventajas y limitaciones:
- Permite calentar o enfriar más rápidamente al hacer recircular aire previamente acondicionado (pág. 112).
- Evita la entrada de gases contaminantes u olores molesto (pág. 112).
- Debe limitarse en el tiempo: si no se desactiva, el aire se vicia por falta de renovación de oxígeno y los cristales se empañan por acumulación de humedad (pág. 112).

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Mantener conectada la recirculación de forma permanente durante viajes largos ignorando el empañamiento de cristales y la falta de oxígeno (pág. 112).

```yaml
tipo: componente
titulo: Sensor de la calidad del aire
entidad: sensor-calidad-aire
area: climatizacion
sistema: control-climatizacion
fuente: "PRO 13. Climatización Electrónica.pdf"
paginas: "112-113"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, recirculacion]
palabras: [G238, dióxido de estaño, SnO2, 350 ºC, 0.5 W, gases oxidables, gases reducibles, CO, NOx]
```

## Misión
Detectar la presencia de gases contaminantes en el aire de entrada y enviar una señal digital a la UCE para activar automáticamente la recirculación (págs. 112-113).

## Tipos y características
Sensor de óxidos mixtos con semiconductor de dióxido de estaño (SnO2), situado en la entrada de aire a la unidad climática junto al sensor de temperatura (págs. 112-113).

## Principio de funcionamiento
Trabaja a una temperatura de servicio de unos 350 ºC con un consumo de 0,5 W, funcionando de forma similar a una sonda lambda (pág. 112). Modifica su resistencia al absorber o liberar oxígeno (pág. 113):
- Gases oxidables (absorben oxígeno): monóxido de carbono (CO), vapores de gasolina, hexano (C6H14), benceno (C6H6), n-heptano (C7H16). Al contacto con el SnO2 liberan oxígeno, reduciendo la resistencia del sensor (págs. 112-113).
- Gases reducibles (ceden oxígeno): óxidos nítricos (NOx), dióxido de azufre (SO2), ácido sulfhídrico (H2S), carbono sulfuro (CS2). Al contacto con el SnO2 ceden oxígeno, aumentando la resistencia del sensor (págs. 112-113).
La electrónica integrada mide la variación de resistencia y emite una señal digital a la UCE del climatizador (pág. 113).

📷 IMAGEN: Estructura interna del sensor G238, zona de medición de SnO2 y esquema de reacción ante gases oxidables y reducibles — Fuente: PRO 13. Climatización Electrónica.pdf, págs. 112-113

## Valores de trabajo
- Temperatura de servicio interna: 350 ºC aprox. (pág. 112).
- Potencia absorbida: 0,5 W (pág. 112).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «PRO 13. Climatización Electrónica.pdf», páginas 98 a 113 de 113. completo