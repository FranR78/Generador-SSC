---
id: ssc.sensor-calidad-aire.sensor-calidad-del-aire-g238
modulo: ssc
unidad: clima
nt: 645
tipo: elemento
clase: componente
titulo: "Sensor de la calidad del aire"
codigo: "G238"
menu: "Sensor de la calidad del aire G238"
grupo: "Control de climatización"
clave: sensor-calidad-aire
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: unidad-control-climatizador
marca: "Audi"
fuentes: "Sensor Calidad del Aire G238.pdf, págs. 191-200"
relacionados: ["unidad-control-climatizador", "filtro-habitaculo", "recirculacion"]
palabras: ["G238", "NOx", "CO", "LIN-Bus", "recirculación automática", "fase de caldeo", "prueba con mechero"]
---

## Misión

Detectar la presencia de sustancias nocivas en el aire del entorno (principalmente gases de escape de gasolina y diésel) para que la unidad de control Climatronic J255 active el servicio de recirculación de aire y evite la entrada de contaminantes al habitáculo. (págs. 191, 192)

## Tipos y características

Componente electrónico altamente sensible. Montado únicamente en vehículos con climatizador en versión "Confort". Integra un sensor de óxidos nítricos (NOx) y un sensor de monóxido de carbono (CO). Intercambia información con la unidad de control de la red de a bordo J519 a través del sistema de bus de datos LIN-Bus. (págs. 191, 194, 199)

## Principio de funcionamiento

- La señal del sensor es analizada por la unidad de control de la red de a bordo J519 y transmitida por bus de datos a la unidad de control para Climatronic J255, la cual decide conmutar a recirculación de aire si no existen condiciones de desactivación.
- El sensor cuenta con un programa de autoadaptación que ajusta su sensibilidad al nivel medio de contaminación del ambiente para evitar que el climatizador trabaje de forma continua en recirculación en zonas de alta contaminación persistente (la solicitud suele ser inferior a 12 minutos salvo picos consecutivos).
- Para evitar la conmutación frecuente de las trampillas, una solicitud de recirculación automática se mantiene como mínimo 25 segundos (tiempo mínimo de permanencia). Ante pequeños aumentos de contaminación no conmuta inmediatamente, confiando en la filtración del elemento de carbón activo.
- Al conectar el encendido, el sensor requiere un tiempo de calentamiento (fase de caldeo) de aprox. 30 segundos a 2 minutos para alcanzar su temperatura operativa, estando su función limitada durante ese periodo. (págs. 191-193)

## Valores de trabajo

- Ocupación de contactos del conector de 3 polos:
  - Pin: Polo positivo (borne 15).
  - Pin: Polo negativo (borne 31).
  - Pin: Cable de señales hacia la unidad de control de la red de a bordo J519.
- Tiempo de calentamiento tras conectar el encendido: de 30 segundos a 2 minutos.
- Tiempo mínimo de permanencia en recirculación: 25 segundos.
- Duración máxima habitual de recirculación continua por autoadaptación: inferior a 12 minutos.
- Condiciones de funcionamiento según temperatura exterior y modo operativo:
  - Temp. exterior > +2 °C: conmuta a recirculación al ascender ligeramente los contaminantes.
  - Temp. exterior < -1 °C y modo Econ (compresor desactivado): conmuta solo ante aumentos intensos de contaminantes y por aprox. 15 segundos máximo.
  - Temp. exterior < +10 °C: permanece aprox. 30 segundos en recirculación automática antes de volver a aire fresco.
  - Temp. exterior < -5 °C: no es posible hacer funcionar el compresor.
- Bloques de valores de medición en Climatronic J255 (VAS 5051):
  - Grupo 058, campo: contaminación del aire medida (00 = sin contaminación).
  - Grupo 058, campo: contenido de NOx medido.
  - Grupo 058, campo: contenido de CO medido.
  - Grupo 039, campo: 00 = modo aire fresco; 1X = solicitud de recirculación por G238; 11 = solicitud activa pero no ejecutada por condición de desactivación en J255. (págs. 191-193, 196-200)

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
9. Consultar el grupo 039, campo: al aplicar gas debe indicar la solicitud de recirculación y regresar a "00" tras disiparse el gas.
10. Si existe avería registrada al conectar el encendido, desconectar el encendido como mínimo 2 minutos, volver a conectar y esperar como mínimo 2 minutos. Consultar la memoria de averías en J519: si la avería pasa de estática a esporádica, el sensor está en perfectas condiciones y solo debe borrarse la memoria. (págs. 194-198)

## Mantenimiento

- Sustituir el filtro de polvo y polen con capa de carbón activo en los intervalos de servicio.
- Precaución de taller: No montar sensores que hayan estado guardados en cajas de herramientas o en contacto con disolventes o combustibles. (págs. 193, 199)

## Imágenes requeridas

- Desmontaje y ubicación del sensor G238 en la toma de aire fresco — Fuente: Sensor Calidad del Aire G238.pdf, pág. 196
