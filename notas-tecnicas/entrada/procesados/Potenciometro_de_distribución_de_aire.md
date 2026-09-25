```yaml
tipo: fundamento
titulo: Variantes de climatización en el VW Touareg
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: VW
fuente: "301_e         Climatización en el Touareg.pdf"
paginas: "4-6, 11-17"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [4C-Climatronic, 2C-Climatronic, climatización manual, 4 zonas, calor residual]
```

## Objeto
Definir las tres configuraciones de climatización disponibles en el VW Touareg (4C-Climatronic de 4 zonas, 2C-Climatronic de 2 zonas y aire acondicionado manual) para adaptar el confort térmico a los requerimientos del vehículo. (pág. 4)

## Fundamento
Los tres sistemas comparten un climatizador delantero básico situado debajo del salpicadero y ofrecen funciones comunes como un margen de regulación de temperatura de 16 ºC a 29,5 ºC, la función de calor residual (REST), la recirculación de aire manual, el desempañado del parabrisas y la desactivación de la refrigeración mediante la tecla ECON o AC. (págs. 4-6)

## Desarrollo
- **4C-Climatronic (4 zonas):** Constituye el nivel máximo de equipamiento. Incorpora dos climatizadores independientes (delantero y trasero) con dos evaporadores en paralelo. Permite la regulación automática e individualizada de temperatura, caudal de soplado y distribución de aire en las cuatro plazas del vehículo mediante dos paneles de mando (delantero y trasero). (págs. 11-13)
- **2C-Climatronic (2 zonas):** Nivel medio de confort. Dispone de dos zonas climatizables reguladas por un único climatizador delantero, permitiendo ajustar la temperatura de forma independiente para la izquierda y la derecha, con una gestión unificada del soplador y de la distribución. (págs. 14-15)
- **Aire acondicionado manual:** Equipamiento básico de regulación manual. Mantiene una distribución de aire similar a la versión 2C pero con selección analógica de temperatura, velocidad del soplador y reparto mediante mandos giratorios. (págs. 16-17)

📷 IMAGEN: Disposición de los paneles de mando delantero y trasero del sistema 4C-Climatronic y sus zonas de influencia térmica — Fuente: 301_e         Climatización en el Touareg.pdf, págs. 5, 12, 13

## Valores de referencia
- Margen de regulación de temperatura común: de 16 ºC a 29,5 ºC. (pág. 5)
- Zonas de regulación independiente en 4C-Climatronic: 4 plazas. (pág. 11)
- Zonas de regulación independiente en 2C-Climatronic: 2 zonas (conductor/acompañante). (pág. 14)

## Errores de concepto frecuentes
- Asumir que el sistema 2C-Climatronic equipa dos climatizadores físicos como el 4C-Climatronic, cuando en realidad utiliza un único módulo climatizador bajo el salpicadero. (págs. 11, 14)

---

```yaml
tipo: fundamento
titulo: Circuito frigorífico de doble evaporador del 4C-Climatronic
entidad: ciclo-frigorifico
variante: doble-evaporador
area: climatizacion
sistema: circuito-frigorifico
fabricante: VW
fuente: "301_e         Climatización en el Touareg.pdf"
paginas: "18-20"
relacionados: [compresor, evaporador, valvula-expansion]
palabras: [4C-Climatronic, dos evaporadores, transmisión por engranajes, V10-TDI, R5-TDI, N280]
```

## Objeto
Explicar la arquitectura y funcionamiento del circuito de refrigeración del sistema 4C-Climatronic mediante la conexión en paralelo de dos evaporadores gestionados por un único compresor de regulación externa. (pág. 18)

## Fundamento
Para alimentar los dos climatizadores (delantero y trasero), el circuito frigorífico integra dos evaporadores independientes conectados en paralelo, cada uno provisto de su correspondiente válvula de expansión termostática. (págs. 18-19)

## Desarrollo
El circuito es alimentado por un compresor de disco oscilante de 7 émbolos con regulación externa mediante la válvula reguladora N280.
El tipo de accionamiento del compresor varía en función del motor del vehículo:
- **Motores de gasolina:** Accionamiento directo a través de la transmisión por correa auxiliar. (pág. 18)
- **Motores diésel V10-TDI y R5-TDI:** Accionamiento mecánico directo por tren de ruedas dentadas conjuntamente con la bomba de la servodirección. (pág. 18)

El refrigerante a alta presión se divide tras el condensador (que integra un cartucho secador) hacia las dos válvulas de expansión. Tras evaporarse en los climatizadores delantero y trasero, las líneas de baja presión se unen antes de retornar a la aspiración del compresor. (págs. 18-19)

📷 IMAGEN: Esquema del circuito frigorífico de doble evaporador indicando el trazado de alta y baja presión y la válvula N280 — Fuente: 301_e         Climatización en el Touareg.pdf, pág. 19

## Valores de referencia
- Número de émbolos del compresor de disco oscilante: 7 émbolos alternativos de trabajo unilateral. (pág. 20)
- Módulos de evaporación: 2 evaporadores conectados en paralelo. (págs. 18, 19)

## Errores de concepto frecuentes
- Buscar la correa auxiliar de accionamiento del compresor en las versiones diésel V10-TDI o R5-TDI, omitiendo que en estas motorizaciones el compresor es arrastrado por engranajes. (pág. 18)

---

```yaml
tipo: componente
titulo: Climatizador trasero del 4C-Climatronic
entidad: unidad-climatizadora
variante: trasera
area: climatizacion
sistema: distribucion-aire
fabricante: VW
fuente: "301_e         Climatización en el Touareg.pdf"
paginas: "28-32"
forma_parte_de: distribucion-aire
relacionados: [evaporador, servomotor-trampilla, unidad-control-climatizador]
palabras: [climatizador trasero, montante B, consola central trasera, V313, V314, V239, V240]
```

## Misión
Proporcionar acondicionamiento térmico (calefacción y refrigeración) y distribución de aire independiente para las plazas posteriores en el sistema 4C-Climatronic. (págs. 28-29)

## Tipos y características
Módulo climatizador independiente ubicado en la parte trasera del habitáculo. Alberga un evaporador propio, un intercambiador de calor de calefacción, soplador trasero y carcasas de distribución para los lados izquierdo y derecho. (págs. 28-30)

## Principio de funcionamiento
Recibe instrucciones desde la unidad de mando posterior E265 o desde la centralita principal J255. El soplador impulsa el aire a través del evaporador y/o intercambiador de calor. Múltiples trampillas motorizadas regulan la mezcla y la dirección del flujo:
- **Chapaletas de temperatura traseras (V313/V314):** Ajustan la mezcla de aire frío y caliente para cada lado. (pág. 29)
- **Chapaletas de caudal trasero (V239/V240):** Dosifican la cantidad de aire enviada hacia las plazas traseras. (pág. 29)
- **Chapaletas de cierre de montante B y reposapiés (V211/V212):** Conmutan la salida de aire entre los difusores del pilar B y el vano reposapiés trasero mediante un elemento de chapaleta doble. (págs. 30-32)

📷 IMAGEN: Vista lateral del climatizador trasero con la ubicación de los servomotores V313, V314, V239 y V240 — Fuente: 301_e         Climatización en el Touareg.pdf, pág. 29

## Valores de trabajo
No documentado en fuentes en las páginas 28-32.

## Anomalías frecuentes
No documentado en fuentes en las páginas 28-32.

## Comportamiento en avería
Falta de capacidad frigorífica/calorífica o distribución incorrecta del caudal de aire en las plazas traseras. (pág. 28)

## Cómo comprobarlo
Consultar los bloques de medición de la unidad posterior E265 y ejecutar el diagnóstico de actuadores con el equipo de autodiagnóstico. (págs. 44, 80)

## Mantenimiento
Verificar la estanqueidad de las conexiones en bloque de las tuberías de alta y baja presión del refrigerante y de los racores de calefacción. (pág. 30)

---

```yaml
tipo: componente
titulo: Sensor para regulación del soplador G462
entidad: ventilador-habitaculo
variante: regulador-pwm
area: climatizacion
sistema: distribucion-aire
codigo: G462
fabricante: VW
fuente: "301_e         Climatización en el Touareg.pdf"
paginas: "72"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [G462, Bitron, PWM, soplador V305, señal de respuesta]
```

## Misión
Regular de forma electrónica y continua la velocidad del motor del soplador del climatizador (V305) respondiendo a las órdenes de la unidad de control J255. (pág. 72)

## Tipos y características
Módulo electrónico de regulación de potencia (fabricado por Bitron) instalado directamente en la carcasa del climatizador junto al motor del soplador. (págs. 72, 80)

## Principio de funcionamiento
La unidad de control J255 envía al módulo G462 una señal modulada por anchura de impulso (PWM). El regulador procesa esta señal y ajusta la tensión de alimentación aplicada al motor del soplador V305. Asimismo, el módulo G462 devuelve a la unidad de control J255 una señal de "información de respuesta" sobre el estado operativo de la turbina. (pág. 72)

📷 IMAGEN: Esquema del regulador G462 recibiendo la señal PWM de la centralita J255 y alimentando al motor del soplador V305 — Fuente: 301_e         Climatización en el Touareg.pdf, pág. 72

## Valores de trabajo
- Tipo de señal de mando: señal digital PWM procedente de la unidad J255. (pág. 72)
- Alimentación eléctrica: Borne 30 (positivo de batería) y Borne 31 (masa). (pág. 72)

## Anomalías frecuentes
Fallo de los componentes electrónicos de potencia del módulo por sobrecalentamiento. (pág. 72)

## Comportamiento en avería
Inoperatividad total del soplador del habitáculo o funcionamiento permanente a la máxima velocidad sin posibilidad de regulación. (pág. 72)

## Cómo comprobarlo
Verificar con osciloscopio la llegada de la señal PWM desde la unidad J255 y medir la tensión continua de salida suministrada al motor V305. (pág. 72)

## Mantenimiento
Reemplazar el filtro antipolvo y antipolen en los intervalos prescritos para evitar sobreesfuerzos térmicos en el módulo regulador. (pág. 23)

---

```yaml
tipo: componente
titulo: Servomotores de trampillas con comunicación LIN-Bus
entidad: servomotor-trampilla
variante: lin-bus
area: climatizacion
sistema: distribucion-aire
fabricante: VW
fuente: "301_e         Climatización en el Touareg.pdf"
paginas: "44-48, 80-84"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [servomotores, LIN-Bus, direccionamiento automático, ajuste básico, V158, V159, V107]
```

## Misión
Accionar de forma regulada y precisa las trampillas de mezcla, distribución, recirculación y soplado del sistema de climatización mediante una red en serie de bus de datos LIN. (págs. 44-48)

## Tipos y características
Actuadores eléctricos equipados con un módulo electrónico interno, conectados en serie a través de un cable de datos (LIN-Bus) acoplado a la unidad de control J255. (págs. 44, 80-84)

## Principio de funcionamiento
Todos los servomotores de la red son electrónicamente idénticos de recambio. Reciben las órdenes digitales enviadas por la centralita J255 a través del bus LIN. Durante el "ajuste básico" y direccionamiento automático, la centralita J255 asigna a cada servomotor su dirección y función específica basándose en el orden físico en el que están conectados en el circuito en serie del mazo de cables. (págs. 80-84)

## Valores de trabajo
- Tensión de alimentación: 12 V de corriente continua y línea de datos en serie LIN-Bus. (págs. 81, 83)

## Anomalías frecuentes
Asignación o direccionamiento incorrecto de los servomotores si se altera la secuencia física de conexión del mazo de cables durante trabajos de desmontaje. (págs. 80-84)

## Comportamiento en avería
La unidad de control registra códigos de avería de "direccionamiento automático incorrecto" o "límite superior/inferior excedido", provocando un posicionamiento erróneo de las trampillas de aireación. (págs. 80-84)

## Cómo comprobarlo
Efectuar la consulta de averías con el equipo de diagnosis VAS 5051, borrar los códigos presentes y ejecutar la función de asignación automática de direcciones y ajuste básico. (págs. 80-84)

## Mantenimiento
Respetar estrictamente el orden de conexionado del mazo de cables en serie al sustituir o reinstalar servomotores en la unidad climática. (págs. 80-84)

---

COBERTURA: documento «301_e         Climatización en el Touareg.pdf», páginas 1 a 75 de 75. [completo]