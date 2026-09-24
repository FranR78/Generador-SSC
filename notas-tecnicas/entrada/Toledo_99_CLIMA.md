```yaml
tipo: componente
titulo: Trampilla central de distribución de aire
entidad: distribucion-aire
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "Toledo 99 CLIMA.pdf"
paginas: "44-45"
relacionados: [servomotor-trampilla, regulacion-automatica]
palabras: [trampilla central, difusores laterales, difusores centrales, orificio, desempañado]
```

## Misión
Regular la salida de aire hacia los difusores centrales y laterales, garantizando el caudal hacia las ventanas laterales para el desempañado de los cristales en cualquier modo de funcionamiento. (págs. 44-45).

## Tipos y características
Trampilla mecánica divisoria de la salida de aire hacia los difusores centrales y laterales, dotada de un orificio físico practicado en su estructura. (págs. 44-45).

## Principio de funcionamiento
Regula el paso de aire hacia los difusores centrales y laterales. El orificio practicado en la trampilla permite permanentemente el paso de un caudal de aire hacia los difusores laterales aunque la chapaleta se encuentre totalmente cerrada. Gracias a esto, al seleccionar la función de descongelación (donde todo el flujo principal sale por los difusores superiores), se mantiene una salida de aire por los difusores laterales para desempañar los cristales de las puertas delanteras. (págs. 44-45).

## Valores de trabajo
No documentado en fuentes. (págs. 44-45).

## Anomalías frecuentes
No documentado en fuentes. (págs. 44-45).

## Comportamiento en avería
No documentado en fuentes. (págs. 44-45).

## Cómo comprobarlo
No documentado en fuentes. (págs. 44-45).

## Mantenimiento
No documentado en fuentes. (págs. 44-45).

---

```yaml
tipo: componente
titulo: Transmisor de presión electrónico
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
codigo: G65
fabricante: SEAT
fuente: "Toledo 99 CLIMA.pdf"
paginas: "45-46"
relacionados: [unidad-control-climatizador, valvula-expansion]
palabras: [G65, transmisor piezorresistivo, silicio, 12 V, regulación de ralentí]
```

## Misión
Informar de la presión instantánea del circuito frigorífico a la unidad de control del motor y a la unidad de control del aire acondicionado para regular el ralentí y proteger el sistema. (págs. 45-46).

## Tipos y características
Transmisor electrónico de presión de tipo piezorresistivo montado junto a la válvula de expansión en los motores 1.4 L y 1.6 L en sustitución del conmutador F129. Consta de un compuesto de silicio y un circuito electrónico interno. (págs. 45-46).

## Principio de funcionamiento
Trabaja con una tensión de alimentación de 12 V. Al variar la presión del circuito frigorífico, el compuesto de silicio sufre una deformación física que altera su resistencia eléctrica. El circuito electrónico convierte este cambio en distintos valores de tensión que se envían a las unidades de control. La unidad de control del motor emplea la señal para regular progresivamente el régimen de ralentí; la unidad de control del aire acondicionado la utiliza para accionar las velocidades del ventilador del radiador y para desconectar el acoplamiento magnético por alta o baja presión. (págs. 45-46).

## Valores de trabajo
- Tensión de alimentación: 12 V. (pág. 45).

## Anomalías frecuentes
No documentado en fuentes. (págs. 45-46).

## Comportamiento en avería
En caso de avería del transmisor G65, el sistema de aire acondicionado se desconecta automáticamente. (pág. 46).

## Cómo comprobarlo
No documentado en fuentes. (págs. 45-46).

## Mantenimiento
No documentado en fuentes. (págs. 45-46).

---

```yaml
tipo: componente
titulo: Unidad de control del climatronic
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: SEAT
fuente: "Toledo 99 CLIMA.pdf"
paginas: "46-47"
relacionados: [autodiagnostico-climatizador, servomotor-trampilla, embrague-compresor]
palabras: [J255, Climatronic, autodiagnóstico, ajuste básico, VAG 1598]
```

## Misión
Controlar el funcionamiento integral del sistema de climatización automática recibiendo las señales de los sensores y excitando los elementos actuadores. (págs. 46-47).

## Tipos y características
Unidad central de control electrónica integrada con la unidad de manejo e indicación E87 en el salpicadero. (págs. 46-47).

## Principio de funcionamiento
Procesa las señales de entrada de las sondas y conmutadores para gestionar:
- Control de la temperatura interior del habitáculo. (pág. 47).
- Accionamiento eléctrico de las trampillas de temperatura, recirculación, velocidad y distribución. (pág. 47).
- Conexión y desconexión del acoplamiento magnético del compresor. (pág. 47).
- Regulación del régimen de la turbina de aire mediante el regulador J126. (págs. 46-47).
- Gestión del autodiagnóstico con funciones de versión (01), memoria de averías (02/05), diagnóstico de actuadores (03), ajuste básico (04), fin de emisión (06), codificación (07) y lectura de bloques de medición (08). (pág. 47).

## Valores de trabajo
Alimentación por borne 30, borne 15 y borne X. (pág. 52).

## Anomalías frecuentes
No documentado en fuentes. (págs. 46-47).

## Comportamiento en avería
Registro de códigos de fallo en la memoria de averías consultable por autodiagnóstico. (pág. 47).

## Cómo comprobarlo
1. Consultar la memoria de averías y ejecutar el diagnóstico de actuadores o el ajuste básico (función 04) con el equipo de diagnosis. (pág. 47).
2. Verificación del circuito eléctrico mediante la caja de comprobación VAG 1598 y los adaptadores VAG 1598/11 y 1598/12. (pág. 47).

## Mantenimiento
Ejecutar el ajuste básico tras la sustitución de la unidad de control o de cualquier motor eléctrico de trampilla. (págs. 47, 50).

---

```yaml
tipo: componente
titulo: Fotosensor para la radiación solar
entidad: fotosensor-solar
area: climatizacion
sistema: control-climatizacion
codigo: G107
fabricante: SEAT
fuente: "Toledo 99 CLIMA.pdf"
paginas: "48"
relacionados: [unidad-control-climatizador, regulacion-automatica]
palabras: [G107, fotodiodo, elemento óptico, radiación solar, incidencia oblicua]
```

## Misión
Registrar la intensidad de la radiación solar incidente sobre los ocupantes para corregir la temperatura del aire y la velocidad de la turbina. (pág. 48).

## Tipos y características
Sensor óptico ubicado en la parte central del tablero de instrumentos. Consta de carcasa con tapa, filtro, elemento óptico apantallador de luz vertical y fotodiodo semiconductor. (pág. 48).

## Principio de funcionamiento
Los rayos solares pasan a través del filtro y del elemento óptico hasta el fotodiodo, el cual modifica el paso de la corriente eléctrica según la luminosidad recibida. La unidad J255 mide la caída de tensión en bornes del fotosensor para determinar la radiación solar.
El elemento óptico redirige un alto porcentaje de rayos cuando inciden de forma oblicua sobre el fotodiodo (requiriendo mayor refrigeración), mientras que apantalla y reduce los rayos que inciden de forma vertical (requiriendo menor refrigeración al disminuir la sensación de calor). (pág. 48).

## Valores de trabajo
Variación del paso de corriente eléctrica por caída de tensión en bornes del fotodiodo. (pág. 48).

## Anomalías frecuentes
No documentado en fuentes. (pág. 48).

## Comportamiento en avería
En caso de avería, la unidad de control asume un valor sustitutivo de radiación intermedio dentro de su escala de medición. (pág. 48).

## Cómo comprobarlo
No documentado en fuentes. (pág. 48).

## Mantenimiento
No documentado en fuentes. (pág. 48).

---

```yaml
tipo: componente
titulo: Transmisores de temperatura exterior
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
codigo: G17, G89
fabricante: SEAT
fuente: "Toledo 99 CLIMA.pdf"
paginas: "49"
relacionados: [unidad-control-climatizador, regulacion-automatica]
palabras: [G17, G89, NTC, temperatura exterior, canal de entrada, valor sustitutivo 10 ºC]
```

## Misión
Medir la temperatura del aire exterior y del aire aspirado para regular la temperatura de impulsión, la recirculación, la velocidad de la turbina y mostrar la indicación en el cuadro de instrumentos. (pág. 49).

## Tipos y características
Dos captadores de temperatura formados por resistencias de tipo NTC:
- G17: ubicado en la zona izquierda del paragolpes delantero. (pág. 49).
- G89: ubicado en el canal de entrada de aire a la unidad climática. (pág. 49).

## Principio de funcionamiento
Miden la temperatura del aire exterior mediante la variación de resistencia eléctrica NTC. La unidad de control J255 recibe ambas señales y utiliza comparativamente el valor de temperatura más bajo para posicionar la trampilla de temperatura, la trampilla de recirculación y regular la turbina, además de enviar la lectura al indicador G106 del cuadro de instrumentos. (pág. 49).

## Valores de trabajo
Valor sustitutivo fijo en avería doble: 10 ºC. (pág. 49).

## Anomalías frecuentes
No documentado en fuentes. (pág. 49).

## Comportamiento en avería
- Si se avería un transmisor, la unidad de control toma la lectura del transmisor que permanece operativo. (pág. 49).
- Si se averían ambos transmisores (G17 y G89), la unidad de control asume un valor fijo sustitutivo de 10 ºC. (pág. 49).

## Cómo comprobarlo
No documentado en fuentes. (pág. 49).

## Mantenimiento
No documentado en fuentes. (pág. 49).

---

```yaml
tipo: componente
titulo: Motores eléctricos con potenciómetro para trampillas
entidad: servomotor-trampilla
area: climatizacion
sistema: distribucion-aire
codigo: V68, V70, V71, V85
fabricante: SEAT
fuente: "Toledo 99 CLIMA.pdf"
paginas: "50"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [V68, V70, V71, V85, G92, G112, G113, G114, potenciómetro, ajuste básico]
```

## Misión
Accionar mecánicamente las trampillas del climatizador (temperatura, central, velocidad/recirculación y descongelación/reposapiés) e informar de su posición exacta a la unidad de control. (pág. 50).

## Tipos y características
Motores eléctricos de giro limitado dotados de un potenciómetro interno de posición:
- V68: motor de la trampilla de temperatura con potenciómetro G92. (págs. 47, 50).
- V70: motor de la trampilla central con potenciómetro G112. (págs. 47, 50).
- V71: motor de las trampillas de velocidad y recirculación con potenciómetro G113. (págs. 47, 50).
- V85: motor de la trampilla de descongelación/reposapiés con potenciómetro G114. (págs. 47, 50).

## Principio de funcionamiento
La unidad de control excita los motores aplicando 12 V en sus bornes. Para invertir el sentido de giro del motor, la unidad invierte la polaridad de alimentación. El potenciómetro interno envía una señal de tensión variable a la unidad J255, informando en todo momento de la posición angular instantánea de la trampilla. (pág. 50).

## Valores de trabajo
Tensión de alimentación: 12 V (con polaridad conmutable para inversión de giro). (pág. 50).

## Anomalías frecuentes
No documentado en fuentes. (pág. 50).

## Comportamiento en avería
No documentado en fuentes. (pág. 50).

## Cómo comprobarlo
Realizar el ajuste básico mediante el equipo de diagnosis (VAG 1551/1552) cada vez que se sustituya un motor o la unidad de control, para que la centralita memorice y reconozca los topes finales de cada motor. (pág. 50).

## Mantenimiento
Ejecutar obligatoriamente el ajuste básico del sistema tras cualquier sustitución de un motor o de la unidad J255. (pág. 50).

---

```yaml
tipo: fundamento
titulo: Control conjunto de las trampillas de recirculación y velocidad
entidad: recirculacion
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "Toledo 99 CLIMA.pdf"
paginas: "51"
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [trampilla de recirculación, trampilla de velocidad, motor V71, 80 km/h, 160 km/h, aire fresco]
```

## Objeto
Regular el paso de aire exterior y la recirculación interior mediante el accionamiento coordinado de dos trampillas con un único motor eléctrico. (pág. 51).

## Fundamento
El motor V71 desplaza los ejes de la trampilla de recirculación y de la trampilla de velocidad a través de dos guías mecánicas, modificando la posición de ambas a la vez para mantener el confort y evitar aumentos excesivos de caudal a alta velocidad. (pág. 51).

## Desarrollo
1. Modalidades de posicionamiento de las trampillas:
- Entrada de aire fresco: ambas trampillas abren completamente el paso de aire exterior al habitáculo. (pág. 51).
- Entrada de aire en función de la velocidad: la trampilla de velocidad se ajusta para evitar un aumento excesivo de caudal por la presión dinámica a altas velocidades. Se gestiona en función de la velocidad del vehículo y de la diferencia entre la temperatura solicitada y la real del habitáculo (si la diferencia térmica es grande, la trampilla se mantiene abierta para climatizar rápido). El control de esta chapaleta se activa a partir de 80 km/h; por encima de 160 km/h se cierra por completo, dejando solo una pequeña entrada residual de aire. (pág. 51).
- Recirculación activada: ambas trampillas se sitúan en la posición superior impidiendo totalmente la entrada de aire del exterior. (pág. 51).

📷 IMAGEN: Esquema de las posiciones de las trampillas de velocidad y recirculación en la entrada de aire fresco, regulación por velocidad y recirculación total — Fuente: Toledo 99 CLIMA.pdf, pág. 51

## Valores de referencia
- Velocidad de inicio de regulación de la trampilla de velocidad: 80 km/h. (pág. 51).
- Velocidad de cierre completo de la trampilla de velocidad: 160 km/h. (pág. 51).

## Errores de concepto frecuentes
Creer que las trampillas de recirculación y de velocidad disponen de servomotores independientes; en el sistema del SEAT Toledo 99 ambas se mueven simultáneamente mediante guías accionadas por el motor V71. (pág. 51).

COBERTURA: documento «Toledo 99 CLIMA.pdf», páginas 44 a 53 de 53. [completo]