```yaml
tipo: componente
titulo: Presostato
entidad: presostato
area: climatizacion
sistema: circuito-frigorifico
fabricante: BEHR HELLA
fuente: "Climatizacion basicos - Presostatos e interruptores.pdf"
paginas: "1-4"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, electroventilador-condensador, compresor]
palabras: [presostato, alta presión, baja presión, interruptor trinario, protección compresor]
```

## Misión
Proteger el sistema de aire acondicionado de daños provocados por presiones excesivamente altas o demasiado bajas en el circuito frigorífico. (pág. 1)

## Tipos y características
Se distingue entre tres tipos de interruptores:
- Interruptor de baja presión.
- Interruptor de alta presión.
- Interruptor trinario: incluye el interruptor de alta presión, el interruptor de baja presión y un contacto de conmutación adicional para el ventilador del condensador.

Generalmente se encuentra montado en la zona de alta presión del sistema de aire acondicionado. (págs. 1-2)

## Principio de funcionamiento
El presostato conmuta la corriente eléctrica según la presión existente en la zona de alta presión:
- Situación de alta presión: interrumpe la entrada de corriente hasta el embrague del compresor y vuelve a conectarlo cuando la presión desciende.
- Situación de baja presión: interrumpe la corriente eléctrica para evitar daños en el compresor debidos a una falta de lubricación.
- Contacto adicional del interruptor trinario: controla el ventilador del condensador eléctrico para garantizar una condensación óptima del refrigerante. (pág. 2)

## Valores de trabajo
- Desconexión por alta presión: aprox. 26-33 bar.
- Reconexión tras alta presión: cuando la presión desciende a aprox. 5 bar.
- Desconexión por baja presión: aprox. 2 bar. (pág. 2)

## Anomalías frecuentes
Un presostato puede fallar debido a las siguientes causas:
- Fallos en los contactos de las conexiones eléctricas.
- Suciedad en el sistema.
- Daños en la carcasa debido a vibraciones o accidentes. (págs. 1, 3)

## Comportamiento en avería
En caso de fallo o avería en el presostato se observan los siguientes síntomas:
- Rendimiento de refrigeración deficiente.
- El aire acondicionado no funciona.
- Frecuente encendido y apagado del embrague del compresor. (pág. 3)

## Cómo comprobarlo
Pasos a seguir en la diagnosis y comprobación:
1. Realizar una inspección visual de la pieza.
2. Comprobar que los enchufes de las conexiones eléctricas están bien apretados.
3. Comprobar si la pieza presenta algún daño en la carcasa.
4. Medir la presión con el compresor encendido y el motor en marcha.
5. Comprobar los recambios desmontados con una botella de nitrógeno, un manorreductor y un multímetro. (págs. 3-4)

## Mantenimiento
Realizar un mantenimiento periódico del sistema para prevenir averías por suciedad o fallos en los contactos de las conexiones. (pág. 1)

```yaml
tipo: componente
titulo: Potenciómetro de la distribución de aire
entidad: potenciometro-distribucion-aire
area: climatizacion
sistema: distribucion-aire
fuente: "Potenciometro de distribución de aire.pdf"
paginas: "15"
forma_parte_de: unidad-control-climatizador
relacionados: [ventilador-habitaculo, recirculacion, compresor]
palabras: [potenciómetro, mando de distribución, desempañado, parabrisas]
```

## Misión
Indicar constantemente a la unidad del autoclima o calefacción motorizada la posición del mando de distribución de aire elegida por el usuario. (pág. 15)

## Tipos y características
Se encuentra ubicado en el interior de la propia unidad del autoclima o calefacción motorizada y es accionado al girar el mando de distribución de aire. (pág. 15)
📷 IMAGEN: Potenciómetro de distribución y rueda de accionamiento — Fuente: Potenciometro de distribución de aire.pdf, pág. 15

## Principio de funcionamiento
El potenciómetro envía una señal de salida a la unidad de control. Al seleccionar la salida de aire hacia el parabrisas, la unidad procesa la señal y ejecuta las siguientes funciones:
- Aumenta la velocidad de la turbina.
- Coloca la trampilla de recirculación en la posición de entrada de aire fresco.
- Conecta el compresor (sólo en el autoclima). (pág. 15)

## Valores de trabajo
No documentado en fuentes. (pág. 15)

## Anomalías frecuentes
Pérdida de la señal del potenciómetro por fallo en el componente o en sus conexiones. (pág. 15)

## Comportamiento en avería
Con la pérdida de la señal del potenciómetro, la unidad de control actúa con la siguiente función sustitutiva:
- Sitúa la trampilla de recirculación en la posición de entrada de aire fresco.
- No regula la velocidad de la turbina ni conecta el compresor (en autoclima) al seleccionar la salida de aire hacia el parabrisas.
- Cada vez que se conecta el equipo parpadean los dígitos del display. (pág. 15)

## Cómo comprobarlo
No documentado en fuentes. (pág. 15)

## Mantenimiento
No documentado en fuentes. (pág. 15)

```yaml
tipo: componente
titulo: Potenciómetro del motor de la trampilla de temperatura
entidad: potenciometro-trampilla-temperatura
area: climatizacion
sistema: distribucion-aire
codigo: G92
fuente: "Potenciometro de distribución de aire.pdf"
paginas: "15"
forma_parte_de: servomotor-trampilla
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [G92, trampilla de temperatura, resistencia, carrera angular]
```

## Misión
Informar constantemente de la posición del motor y, en consecuencia, de la posición exacta de la trampilla de temperatura a la unidad de control del autoclima o calefacción motorizada. (pág. 15)

## Tipos y características
Está ubicado en el propio motor accionador. Dispone de una carrera angular de 51° y presenta un rango de resistencia comprendido entre 0 y 4,7 kΩ. (pág. 15)

## Principio de funcionamiento
Envía una señal eléctrica de resistencia variable proporcional a su posición angular. La unidad de control utiliza esta señal para:
- Regular la temperatura del aire de entrada al habitáculo.
- Reconocer el funcionamiento del motor y localizar la posición de los dos topes del recorrido de la trampilla. (pág. 15)

## Valores de trabajo
- Carrera angular: 51°.
- Rango de resistencia: entre 0 y 4,7 kΩ. (pág. 15)

## Anomalías frecuentes
Avería en el potenciómetro o interrupción en la señal emitida hacia la unidad de control. (pág. 15)

## Comportamiento en avería
En caso de avería del potenciómetro, la unidad de control adopta el siguiente comportamiento:
- Deja la trampilla de temperatura en la posición existente en el momento del fallo.
- Reduce la velocidad de la turbina para evitar la entrada excesiva de aire frío o caliente.
- Parpadean los dígitos del display cada vez que se conecta el equipo. (pág. 15)

## Cómo comprobarlo
No documentado en fuentes. (pág. 15)

## Mantenimiento
No documentado en fuentes. (pág. 15)

```yaml
tipo: componente
titulo: Sensor de la calidad del aire
entidad: sensor-calidad-aire
area: climatizacion
sistema: control-climatizacion
codigo: G238
fabricante: Audi
fuente: "Sensor Calidad del Aire G238.pdf"
paginas: "191-200"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador, filtro-habitaculo, recirculacion]
palabras: [G238, NOx, CO, LIN-Bus, recirculación automática, fase de caldeo, prueba con mechero]
```

## Misión
Detectar la presencia de sustancias nocivas en el aire del entorno (principalmente gases de escape de gasolina y diésel) para que la unidad de control Climatronic J255 active el servicio de recirculación de aire y evite la entrada de contaminantes al habitáculo. (págs. 191, 192)

## Tipos y características
Componente electrónico altamente sensible. Montado únicamente en vehículos con climatizador en versión "Confort". Integra un sensor de óxidos nítricos (NOx) y un sensor de monóxido de carbono (CO). Intercambia información con la unidad de control de la red de a bordo J519 a través del sistema de bus de datos LIN-Bus. (págs. 191, 194, 199)
📷 IMAGEN: Desmontaje y ubicación del sensor G238 en la toma de aire fresco — Fuente: Sensor Calidad del Aire G238.pdf, pág. 196

## Principio de funcionamiento
- La señal del sensor es analizada por la unidad de control de la red de a bordo J519 y transmitida por bus de datos a la unidad de control para Climatronic J255, la cual decide conmutar a recirculación de aire si no existen condiciones de desactivación.
- El sensor cuenta con un programa de autoadaptación que ajusta su sensibilidad al nivel medio de contaminación del ambiente para evitar que el climatizador trabaje de forma continua en recirculación en zonas de alta contaminación persistente (la solicitud suele ser inferior a 12 minutos salvo picos consecutivos).
- Para evitar la conmutación frecuente de las trampillas, una solicitud de recirculación automática se mantiene como mínimo 25 segundos (tiempo mínimo de permanencia). Ante pequeños aumentos de contaminación no conmuta inmediatamente, confiando en la filtración del elemento de carbón activo.
- Al conectar el encendido, el sensor requiere un tiempo de calentamiento (fase de caldeo) de aprox. 30 segundos a 2 minutos para alcanzar su temperatura operativa, estando su función limitada durante ese periodo. (págs. 191-193)

## Valores de trabajo
- Ocupación de contactos del conector de 3 polos:
  - Pin 1: Polo positivo (borne 15).
  - Pin 2: Polo negativo (borne 31).
  - Pin 3: Cable de señales hacia la unidad de control de la red de a bordo J519.
- Tiempo de calentamiento tras conectar el encendido: de 30 segundos a 2 minutos.
- Tiempo mínimo de permanencia en recirculación: 25 segundos.
- Duración máxima habitual de recirculación continua por autoadaptación: inferior a 12 minutos.
- Condiciones de funcionamiento según temperatura exterior y modo operativo:
  - Temp. exterior > +2 °C: conmuta a recirculación al ascender ligeramente los contaminantes.
  - Temp. exterior < -1 °C y modo Econ (compresor desactivado): conmuta solo ante aumentos intensos de contaminantes y por aprox. 15 segundos máximo.
  - Temp. exterior < +10 °C: permanece aprox. 30 segundos en recirculación automática antes de volver a aire fresco.
  - Temp. exterior < -5 °C: no es posible hacer funcionar el compresor.
- Bloques de valores de medición en Climatronic J255 (VAS 5051):
  - Grupo 058, campo 1: contaminación del aire medida (00 = sin contaminación).
  - Grupo 058, campo 3: contenido de NOx medido.
  - Grupo 058, campo 4: contenido de CO medido.
  - Grupo 039, campo 3: 00 = modo aire fresco; 1X = solicitud de recirculación por G238; 11 = solicitud activa pero no ejecutada por condición de desactivación en J255. (págs. 191-193, 196-200)

## Anomalías frecuentes
- Posible inscripción de mensaje de avería durante la fase de caldeo si existen altas cargas contaminantes en el aire al conectar el encendido.
- Destrucción del sensor por contacto directo o vapores de disolventes, combustibles o compuestos químicos.
- Filtro antipolvo y antipolen saturado, imposibilitando la retención de gases nocivos antes del cierre de trampillas. (págs. 192, 193, 199)

## Comportamiento en avería
- Registro de avería estática o esporádica en la memoria de la unidad de control J519 (código de dirección 09, bloques 73 y 74) o de Climatronic J255.
- Sin señal válida del sensor no se ejecuta la solicitud automática de recirculación. (págs. 192, 193, 195)

## Cómo comprobarlo
Condiciones previas:
- Vehículo en zona con aire ambiental limpio, compartimento motor y caja de aguas limpios sin presencia ni rociado de disolventes, combustibles o productos con disolventes.
- Función "recirculación automática de aire" activada en el MMI.

Procedimiento de comprobación con VAS 5051 y mechero de gas:
1. Conectar el equipo VAS 5051 al conector de diagnosis de 16 polos con el encendido desconectado y arrancar el motor.
2. Seleccionar modo "Auto" en Climatronic J255 y activar la recirculación automática en el MMI.
3. Esperar 2 minutos (tiempo de calentamiento del sensor G238).
4. Seleccionar "Leer bloque de valores de medición", grupo de indicación 058, y consultar campos 1, 3 (NOx) y 4 (CO).
5. Girar el sensor G238 90° a la izquierda y desmontarlo de la toma de aspiración de aire fresco.
6. Hacer pasar una pequeña cantidad de gas de mechero por arriba en la zona A del sensor.
7. Comprobar que en los campos 3 y 4 del grupo 058 los valores de medición aumentan en comparación con el valor inicial, confirmando el correcto funcionamiento de los semiconductores y la electrónica.
8. Esperar aprox. 1 minuto y verificar que los valores retornan a los niveles iniciales.
9. Consultar el grupo 039, campo 3: al aplicar gas debe indicar la solicitud de recirculación y regresar a "00" tras disiparse el gas.
10. Si existe avería registrada al conectar el encendido, desconectar el encendido como mínimo 2 minutos, volver a conectar y esperar como mínimo 2 minutos. Consultar la memoria de averías en J519: si la avería pasa de estática a esporádica, el sensor está en perfectas condiciones y solo debe borrarse la memoria. (págs. 194-198)

## Mantenimiento
- Sustituir el filtro de polvo y polen con capa de carbón activo en los intervalos de servicio.
- Precaución de taller: No montar sensores que hayan estado guardados en cajas de herramientas o en contacto con disolventes o combustibles. (págs. 193, 199)

```yaml
tipo: componente
titulo: Marco de salida de aire para desaireación forzada
entidad: marco-desaireacion-habitaculo
area: climatizacion
sistema: distribucion-aire
fuente: "Sensor Calidad del Aire G238.pdf"
paginas: "200-201"
forma_parte_de: distribucion-aire
relacionados: [ventilador-habitaculo, filtro-habitaculo]
palabras: [desaireación forzada, marco de salida de aire, maletero, tapadera acústica]
```

## Misión
Garantizar la evacuación del caudal de aire del interior del habitáculo hacia el exterior para permitir la correcta circulación y renovación del aire introducido por el climatizador. (págs. 200, 201)

## Tipos y características
Se compone de dos marcos de salida de aire (uno a la izquierda y otro a la derecha) montados en las bocas de desaireación de la carrocería en el maletero. Existen versiones con y sin tapadera acústica. (pág. 200)
📷 IMAGEN: Marcos de salida de aire para desaireación forzada en la carrocería del maletero — Fuente: Sensor Calidad del Aire G238.pdf, pág. 201

## Principio de funcionamiento
El aire interior fluye desde el habitáculo a través de las rendijas del revestimiento del maletero y atraviesa los marcos de salida de aire hacia el exterior del vehículo. (pág. 200)

## Valores de trabajo
No documentado en fuentes. (págs. 200, 201)

## Anomalías frecuentes
Obstrucción de las rendijas del revestimiento o bloqueo de los marcos de salida por suciedad o equipaje. (págs. 200, 201)

## Comportamiento en avería
Dificultad en la renovación del aire, empañamiento de cristales o sobrepresión en el habitáculo al cerrar puertas. (págs. 200, 201)

## Cómo comprobarlo
1. Revisar la limpieza y despeje de las rendijas de desaireación en el revestimiento del maletero.
2. Comprobar la continuidad de paso del aire desde el guarnecido del maletero hacia los marcos de salida.
3. Para desmontar y montar los marcos de salida de aire, retirar por el exterior el moldeado del paragolpes. (págs. 200, 201)

## Mantenimiento
Mantener libres de obstáculos las rendijas de desaireación del maletero. (págs. 200, 201)

```yaml
tipo: componente
titulo: Sensor de la calidad del aire
entidad: sensor-calidad-aire
area: climatizacion
sistema: control-climatizacion
codigo: G238
fabricante: VW
fuente: "Sensor Calidad del Aire.pdf"
paginas: "62-63"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador, servomotor-trampilla, filtro-habitaculo]
palabras: [G238, dióxido de estaño, SnO2, platino, paladio, sonda lambda, señal rectangular digitalizada]
```

## Misión
Determinar la polución del aire atmosférico para que la unidad de control del climatizador cierre automáticamente la chapaleta de recirculación al detectar concentraciones punta de contaminantes. (págs. 62, 63)

## Tipos y características
Componente electrónico no sujeto a desgaste. Funciona básicamente como una sonda lambda. Su elemento de medición es un semiconductor de óxidos mixtos de dióxido de estaño (SnO2), cuya sensibilidad se incrementa con aditivos catalíticos de platino y paladio. Incorpora un analizador electrónico en el módulo sensor. (págs. 62, 63)
📷 IMAGEN: Conexión y esquema del sensor de calidad del aire G238 con la unidad de control E87 — Fuente: Sensor Calidad del Aire.pdf, pág. 63

## Principio de funcionamiento
- El analizador electrónico integrado reacciona ante las variaciones en la conductividad eléctrica del sensor causadas por los gases contaminantes.
- La electrónica detecta el contenido medio de contaminantes del aire y transmite hacia la unidad de control del climatizador una señal rectangular digitalizada con la índole y cantidad de contaminantes.
- El sistema es autoadaptable: reconoce el nivel medio de contaminación ambiental para actuar únicamente ante picos de polución, evitando la conexión continua en recirculación.
- La unidad de control cierra la chapaleta de recirculación según la polución y la temperatura exterior. Adicionalmente, en algunos sistemas se conmuta a recirculación al accionar el limpia-lavaparabrisas. (págs. 62, 63)

## Valores de trabajo
- Temperatura de servicio: aprox. 350 ºC.
- Potencia absorbida: 0,5 W.
- Fase de calentamiento del sensor: aprox. 30 s (sin función de recirculación).
- Comportamiento según temperatura atmosférica y contaminación:
  - > +2 ºC y leve ascenso de contaminación: Recirculación activada (mínimo 25 s).
  - > +2 ºC y escasa contaminación: Recirculación no activada.
  - De +2 ºC a -5 ºC y ascenso más intenso: Recirculación activada.
  - < -5 ºC y ascenso más intenso: Recirculación activada por un máximo de 15 s.
  - Función ECON (compresor desactivado): Recirculación activada por un máximo de 15 s.
  - Función de descongelación: Recirculación no activada. (págs. 62, 63)

## Anomalías frecuentes
No documentado en fuentes. (págs. 62, 63)

## Comportamiento en avería
No documentado en fuentes. (págs. 62, 63)

## Cómo comprobarlo
No documentado en fuentes. (págs. 62, 63)

## Mantenimiento
El sensor no requiere mantenimiento por no estar sujeto a desgaste. Se debe sustituir el filtro combinado en los intervalos de servicio. (pág. 63)

```yaml
tipo: componente
titulo: Transmisor de presión electrónico
entidad: transmisor-presion
area: climatizacion
sistema: circuito-frigorifico
codigo: G65
fuente: "Transmisor de presión II.pdf"
paginas: "15-17"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, electroventilador-condensador, compresor]
palabras: [G65, transmisor de presión, ralentí, 16 bares, función sustitutiva]
```

## Misión
Medir la presión del fluido refrigerante y enviar la señal electrónica a la unidad de control del motor y a la unidad de control del aire acondicionado. (pág. 15)

## Tipos y características
Transmisor de presión electrónico de diseño idéntico al montado en el modelo Toledo. (pág. 15)
📷 IMAGEN: Transmisor de presión G65 y su conexionado con la unidad del aire acondicionado J293 y la unidad de motor — Fuente: Transmisor de presión II.pdf, pág. 17

## Principio de funcionamiento
El transmisor mide la presión del circuito y transmite la señal a dos unidades de control:
- Unidad del aire acondicionado: procesa la señal para efectuar la desconexión del compresor por presión máxima o mínima, conectar la 2ª velocidad de los ventiladores del líquido refrigerante al llegar a 16 bar, e informar sobre el estado de conexión del compresor.
- Unidad de control del motor: procesa la señal para actuar sobre la gestión del ralentí según las necesidades requeridas por la carga del motor. (pág. 15)

## Valores de trabajo
- Presión de activación de la 2ª velocidad de los ventiladores del líquido refrigerante: 16 bar. (pág. 15)

## Anomalías frecuentes
Avería en el transmisor de presión o en su línea de señal. (pág. 15)

## Comportamiento en avería
En caso de avería en el transmisor G65:
- La unidad de control del aire acondicionado desactiva el compresor.
- La avería únicamente queda registrada en la memoria de averías de la unidad de control del motor. (pág. 15)

## Cómo comprobarlo
No documentado en fuentes. (pág. 15)

## Mantenimiento
No documentado en fuentes. (pág. 15)

COBERTURA: documento «Climatizacion basicos - Presostatos e interruptores.pdf», páginas 1 a 4 de 4. [completo]
COBERTURA: documento «Potenciometro de distribución de aire.pdf», páginas 1 a 15 de 15. [completo]
COBERTURA: documento «Sensor Calidad del Aire G238.pdf», páginas 191 a 201 de 201. [completo]
COBERTURA: documento «Sensor Calidad del Aire.pdf», páginas 62 a 63 de 63. [completo]
COBERTURA: documento «Transmisor de presión II.pdf», páginas 15 a 17 de 17. [completo]