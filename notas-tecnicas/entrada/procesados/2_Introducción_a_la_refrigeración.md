```yaml
tipo: fundamento
titulo: Principios físicos de la refrigeración y termodinámica
entidad: ciclo-frigorifico
area: general
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "17-19"
relacionados: [refrigerante-r134a, refrigerante-r1234yf]
palabras: [calor, frio, ebullicion, condensacion, distension, punto critico, punto de rocio]
```

## Objeto
Explicación de las leyes físicas naturales de la termodinámica que regulan el intercambio de calor, las variaciones de presión y los cambios de estado en los sistemas de climatización (págs. 17-19).

## Fundamento
Los cambios de estado físico de la materia (sólido, líquido, gaseoso) exigen un aporte o cesión energética en forma de calor y son fenómenos reversibles mediante transferencias térmicas y variaciones de presión en un circuito cerrado (págs. 17-18).

## Desarrollo
Principios térmicos y termodinámicos fundamentales:
- Una sustancia absorbe calor al pasar de estado líquido a gaseoso (evaporación) y entrega calor al pasar de estado gaseoso a líquido (condensación) (pág. 18).
- La propagación térmica se produce de forma natural siempre desde la zona o sustancia más caliente hacia la más fría (pág. 18).
- El frío no existe como magnitud física medible; representa la ausencia de calor o un calor de baja intensidad (considerado cotidianamente por debajo de 0 ºC) (pág. 18).
- Relación presión-temperatura: en un circuito cerrado, la presión y la temperatura están unidas; al aumentar la presión aumenta la temperatura de ebullición y al disminuir la presión disminuye dicha temperatura (págs. 18-19).
- Ejemplos de enfriamiento por evaporación: el alcohol rociado en la piel (absorbe calor corporal), el botijo (el agua se evapora por los poros de la arcilla absorbiendo calor del interior) o la distensión de un gas a través de una válvula (pág. 18).
- Punto crítico: límite de presión y temperatura por encima del cual no existe separación entre fase líquida y vapor. Si se calienta un gas por encima de su punto crítico, no es posible licuarlo debido a una descomposición química y molecular (pág. 18).
- Punto de rocío: temperatura a la que comienza a condensarse el vapor de agua contenido en el aire (pág. 19).
- Enfriamiento por distensión: cuando un gas sometido a presión se expande o distensa repentinamente al atravesar una válvula, su temperatura desciende bruscamente (pág. 19).
- Transiciones de fase (entalpía del sistema): sólido a líquido (fusión), líquido a sólido (solidificación), líquido a gas (vaporización), gas a líquido (condensación), sólido a gas (sublimación), gas a sólido (deposición), gas a plasma (ionización) y plasma a gas (desionización) (pág. 19).

📷 IMAGEN: Esquema con los estados de agregación de la materia (sólido, líquido, gas, plasma) y sus transiciones de fase en función de la entalpía — Fuente: 2. Introducción a la refrigeración.pdf, pág. 19

- Puntos de ebullición de agentes frigoríficos a presión atmosférica: R134a (-26,5 ºC) y R1234yf (-29 ºC) (pág. 19).

📷 IMAGEN: Gráfica de las curvas de presión de vapor de los fluidos refrigerantes R134a y R1234yf — Fuente: 2. Introducción a la refrigeración.pdf, pág. 19

## Valores de referencia
- Conversión a grados Kelvin: K = ºC + 273,15 (ejemplo: 10 ºC = 283,15 K; cero absoluto = -273,15 ºC) (pág. 18).
- Conversión a grados Fahrenheit: ºF = (ºC x 9/5) + 32 (ejemplo: 10 ºC = 50 ºF) (pág. 18).
- Ebullición del agua: 100 ºC a 1 bar de presión atmosférica; 135 ºC a 3 bares de presión en circuito presurizado (pág. 18).
- Ebullición del aceite de compresor: 380-400 ºC (pág. 19).
- Ebullición del agente frigorífico R134a: -26,5 ºC a presión atmosférica (pág. 19).
- Ebullición del agente frigorífico R1234yf: -29 ºC a presión atmosférica (pág. 19).

## Errores de concepto frecuentes
- Tratar el frío como una energía independiente o medible, en lugar de la ausencia de calor (pág. 18).
- Considerar que la temperatura de ebullición de un líquido es constante y no varía al modificar la presión (págs. 18-19).

```yaml
tipo: componente
titulo: Compresor de aire acondicionado
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20"
forma_parte_de: circuito-frigorifico
relacionados: [transmisor-presion, valvula-expansion]
palabras: [compresor, alta presion, cilindrada fija, cilindrada variable, accionamiento electrico]
```

## Misión
Aumentar la presión del fluido refrigerante en fase gaseosa y hacerlo circular de manera continua por todos los componentes del circuito de climatización (pág. 20).

## Tipos y características
Existen compresores de cilindrada fija y de cilindrada variable, con sistemas de accionamiento mecánico (por correa) o eléctrico según los requerimientos del vehículo (pág. 20).

## Principio de funcionamiento
Aspira el agente frigorífico frío en estado gaseoso a baja presión procedente del evaporador. Mediante compresión mecánica incrementa su presión y temperatura, enviándolo en fase gaseosa hacia el condensador (págs. 20, 22).

## Valores de trabajo
- Presión de salida (alta presión): 14 bares aprox. en estado gaseoso (pág. 22).
- Temperatura de salida: 65 ºC aprox. en estado gaseoso (pág. 22).

## Anomalías frecuentes
- Deterioro o rotura mecánica si ingresa refrigerante en estado líquido por la toma de aspiración, dado que los líquidos son incompresibles mecánicamente (pág. 22).

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Condensador
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20"
forma_parte_de: circuito-frigorifico
relacionados: [electroventilador-condensador, filtro-deshidratador]
palabras: [condensador, radiador frontal, licuar gas, disipación calor]
```

## Misión
Enfriar el gas refrigerante comprimido y provocar su condensación (paso a estado líquido) cediendo calor al aire exterior (pág. 20).

## Tipos y características
Radiador intercambiador montado en la parte frontal del vehículo para recibir el flujo de aire de la marcha o el aire forzado por un electroventilador (págs. 20, 22).

## Principio de funcionamiento
Recibe el refrigerante gaseoso a alta presión y temperatura. Al enfriarse por el paso del aire exterior, el gas alcanza su punto de rocío a 14 bares y se licúa pasando a estado líquido (págs. 20, 22).

## Valores de trabajo
- Presión de trabajo: 14 bares mantenidos a la entrada y a la salida (pág. 22).
- Temperatura de entrada: 65 ºC (estado gaseoso) (pág. 22).
- Temperatura de salida: 55 ºC (estado líquido, tras enfriarse unos 10 ºC) (pág. 22).

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
titulo: Filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, valvula-expansion]
palabras: [filtro deshidratador, humedad, impurezas, fase liquida]
```

## Misión
Retener las impurezas sólidas y la humedad presentes en el fluido refrigerante líquido en la línea de alta presión (pág. 20).

## Tipos y características
Componente filtrante situado a la salida del condensador que trabaja con el agente frigorífico en fase líquida (págs. 20, 22).

## Principio de funcionamiento
El fluido en estado líquido procedente del condensador atraviesa el elemento filtrante deshidratador antes de llegar a la válvula de expansión, depurando el gas de agua e impurezas (págs. 20, 22).

## Valores de trabajo
- Presión de paso: 14 bares (pág. 22).
- Temperatura de paso: 55 ºC en estado líquido (pág. 22).

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
titulo: Transmisor de presión
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, unidad-control-climatizador]
palabras: [transmisor presion, trinaria, sensor MAP, alta presion, control compresor]
```

## Misión
Registrar la presión existente en la línea de alta del circuito cerrado para proporcionar esta información al sistema de gestión y controlar el funcionamiento del compresor (pág. 20).

## Tipos y características
Puede ser un manocontacto de presión de tipo electromecánico (trinaria) o un sensor electrónico de presión (tipo sensor MAP) (pág. 20).

## Principio de funcionamiento
Mide la presión del fluido refrigerante en el sector de alta y genera una señal de control para conectar, desconectar o regular el trabajo del compresor de aire acondicionado (pág. 20).

## Valores de trabajo
Ubicado en el tramo de alta presión (14 bares de presión nominal de funcionamiento) (págs. 20, 22).

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
titulo: Válvula de expansión
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, filtro-deshidratador]
palabras: [valvula expansion, distension, caida de presion, pulverizacion]
```

## Misión
Distensar y pulverizar el agente frigorífico líquido a la entrada del evaporador, provocando un rápido descenso de presión y temperatura (pág. 20).

## Tipos y características
Elemento de estrangulamiento hidráulico situado entre el tramo de alta presión y la entrada del evaporador (págs. 20, 22).

## Principio de funcionamiento
Recibe el agente frigorífico líquido a alta presión y lo rocía hacia el interior del evaporador. Al expandirse o distensarse repentinamente, el fluido experimenta un fuerte enfriamiento (págs. 20, 22).

## Valores de trabajo
- Presión de entrada: 14 bares (fase líquida a 55 ºC) (pág. 22).
- Presión de salida hacia el evaporador: cae a 1,2 bares (pág. 22).
- Temperatura de salida: cae a -7 ºC (pág. 22).

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
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-21"
forma_parte_de: circuito-frigorifico
relacionados: [valvula-expansion, ventilador-habitaculo, silenciador-deposito-receptor]
palabras: [evaporador, unidad climatica, absorcion calor, enfriamiento aire, deshidratacion]
```

## Misión
Absorber el calor del aire que ingresa al habitáculo mediante la evaporación del agente frigorífico en su interior, enfriando, deshidratando y depurando dicho aire (pág. 21).

## Tipos y características
Radiador intercambiador de calor ubicado en el interior del módulo o unidad climática del habitáculo (pág. 21).

## Principio de funcionamiento
El refrigerante rociado en fase líquida/gas absorbe el calor del aire forzado por la turbina de aire fresco a través de sus aletas. Al absorber este calor, el refrigerante se evapora por completo y el aire que atraviesa el evaporador se enfría y pierde humedad (págs. 21-22).

## Valores de trabajo
- Presión interna del fluido: 1,2 bares a -7 ºC (pág. 22).
- Temperatura del aire de entrada: 24 ºC (pág. 22).
- Temperatura del aire de salida hacia el habitáculo: 4 ºC (descenso de temperatura del aire de aprox. 20 ºC) (pág. 22).

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
titulo: Silenciador-depósito receptor
entidad: silenciador-deposito-receptor
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, compresor]
palabras: [silenciador, deposito receptor, trampa liquido, golpes liquido, aspiracion compresor]
```

## Misión
Retener el agente frigorífico en fase líquida residual para impedir que llegue al compresor en estado líquido y atenuar los ruidos en la línea de baja presión (pág. 21).

## Tipos y características
Depósito acumulador instalado en el tramo de baja presión, inmediatamente antes de la toma de aspiración del compresor (pág. 21). No se equipa en todos los sistemas de aire acondicionado y en ocasiones se suministra únicamente de forma conjunta con el tubo de baja presión (pág. 21).

## Principio de funcionamiento
Almacena el líquido sobrante y garantiza que el fluido que abandona el depósito hacia el compresor esté 100% en fase gaseosa, protegiendo los componentes mecánicos del compresor (págs. 21-22).

## Valores de trabajo
Ubicado en el circuito de baja presión (1,2 bares a -7 ºC) (págs. 21-22).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: fundamento
titulo: Ciclo frigorífico por compresión y funcionamiento hidráulico
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21-22"
relacionados: [compresor, condensador, valvula-expansion, evaporador]
palabras: [ciclo frigorifico, alta presion, baja presion, 14 bares, 1.2 bares, absorcion calor]
```

## Objeto
Descripción del proceso térmico e hidráulico continuo que realiza el fluido refrigerante en circuito cerrado en el sistema de aire acondicionado por compresión (págs. 21-22).

## Fundamento
El sistema no genera frío sino que extrae el calor del aire destinado al habitáculo, forzando la circulación de un agente frigorífico que alterna continuamente entre estado líquido y gaseoso mediante cambios de presión (págs. 21-22).

## Desarrollo
El circuito hidráulico cerrado se divide en dos tramos de presión:

1. Tramo de Alta Presión:
- El compresor aspira el gas refrigerante frío a baja presión y lo comprime, elevando su presión a 14 bares y su temperatura a 65 ºC en fase gaseosa (págs. 21-22).
- En el condensador, la corriente de aire (de la marcha o del electroventilador) enfría el gas hasta alcanzar su punto de rocío y lo licúa. Abandona el condensador en estado líquido a 14 bares y 55 ºC (pág. 22).
- El filtro deshidratador elimina impurezas y humedad manteniéndose los valores en 14 bares y 55 ºC (pág. 22).

2. Tramo de Baja Presión:
- La válvula de expansión rocía el líquido hacia el evaporador, provocando una caída de presión hasta 1,2 bares y de temperatura hasta -7 ºC (pág. 22).
- En el evaporador, el fluido se distensa y evapora absorbiendo calor del aire exterior impulsado por la turbina. El aire se enfría de 24 ºC a 4 ºC (descenso térmico de ~20 ºC) (pág. 22).
- El refrigerante en estado gaseoso frío (1,2 bares y -7 ºC) regresa a la toma de aspiración del compresor para reiniciar el ciclo (págs. 21-22).

📷 IMAGEN: Esquema del funcionamiento hidráulico del circuito de aire acondicionado con indicación de presiones y temperaturas en circuito de alta y baja — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21

## Valores de referencia
Valores nominales del circuito frigorífico:
- Salida de compresor (alta presión, gas): 14 bares con 65 ºC (pág. 22).
- Salida de condensador y filtro (alta presión, líquido): 14 bares con 55 ºC (pág. 22).
- Salida de válvula de expansión y evaporador (baja presión, líquido/gas): 1,2 bares con -7 ºC (pág. 22).
- Salto térmico del aire en el evaporador: captado a 24 ºC y expulsado a 4 ºC (salto de 20 ºC) (pág. 22).

## Errores de concepto frecuentes
- Creer que el aire acondicionado "inyecta frío" en el vehículo, en lugar de extraer el calor del aire del habitáculo (pág. 22).
- Permitir la llegada de fluido en fase líquida al compresor, lo que destruye el compresor por ser incompresibles los líquidos (pág. 22).

```yaml
tipo: componente
titulo: Tuberías, canalizaciones y juntas de estanqueidad del circuito frigorífico
entidad: tuberias-y-racores
area: climatizacion
sistema: circuito-frigorifico
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "22"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, condensador, evaporador]
palabras: [tuberias aluminio, latiguillos neopreno, juntas toricas HNBR, hermeticidad]
```

## Misión
Unir hidráulicamente los componentes del sistema de aire acondicionado asegurando la conducción estanca del fluido refrigerante (pág. 22).

## Tipos y características
Combina tubos rígidos de aluminio y tubos flexibles (latiguillos) de neopreno provistos de una barrera interior de nylon (pág. 22). La hermeticidad en las uniones se realiza mediante juntas tóricas hidrogenadas (HNBR) de color verde (pág. 22).

## Principio de funcionamiento
Soportan las variaciones de presión internas y absorben las vibraciones del motor y los movimientos relativos entre el motor y la carrocería del vehículo (pág. 22).

## Valores de trabajo
- Resistencia térmica de las juntas tóricas HNBR verdes: soportan temperaturas de hasta 130 ºC (pág. 22).
- Presiones de trabajo: desde 1,2 bares en baja presión hasta 14 bares en alta presión (pág. 22).

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: fundamento
titulo: Sistemas y opciones de climatización en el automóvil
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "22-23"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [calefaccion, aire acondicionado, climatizador automatico, monozona, bizona, autodiagnostico]
```

## Objeto
Clasificación y características de los distintos sistemas de acondicionamiento de aire empleados en el automóvil (págs. 22-23).

## Fundamento
Regulación de la temperatura, caudal y distribución del aire impulsado al interior del habitáculo para garantizar el confort de los pasajeros (págs. 22-23).

## Desarrollo
Modalidades de equipamiento de climatización:

1. Calefacción-Ventilación:
- El conductor controla de forma manual la temperatura, velocidad del aire y selección de difusores.
- Solo permite incrementar la temperatura del aire respecto a la del ambiente exterior, no disminuirla (pág. 22).

2. Aire Acondicionado:
- Sistema manual o semiautomático con regulación de temperatura.
- Permite subir o bajar la temperatura del aire. El conductor selecciona manualmente la velocidad de entrada del aire y las salidas de ventilación (pág. 22).

3. Climatización Automática (Climatizador):
- El conductor selecciona la temperatura deseada en el cuadro de mando.
- La unidad de control regula de forma automática la velocidad de la turbina y la posición de las trampillas de distribución.
- Configuraciones: monozona, bizona o cuatrizona (temperaturas independientes por zonas).
- Incorpora función de autodiagnóstico de averías (pág. 23).

## Valores de referencia
- Opciones de distribución por zonas en climatizadores automáticos: monozona, bizona o cuatrizona (pág. 23).

## Errores de concepto frecuentes
- Asumir que un equipo convencional de calefacción y ventilación permite enfriar el aire por debajo de la temperatura exterior (pág. 22).

COBERTURA: documento «2. Introducción a la refrigeración.pdf», páginas 17 a 23 de 23. completo