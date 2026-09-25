---
id: ssc.sensor-evaporador.la-climatizacion
modulo: ssc
unidad: clima
nt: 283
tipo: elemento
clase: componente
titulo: "Sensor de temperatura del evaporador"
menu: "Sensor de temperatura del evaporador"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 88-90"
relacionados: ["unidad-control-climatizador", "compresor", "evaporador"]
palabras: ["sonda del evaporador", "termistor NTC", "protección antihielo", "desconexión del compresor"]
---

## Misión

Medir la temperatura de la matriz de aletas del evaporador para prevenir la congelación del agua de condensación. (págs. 88-89)

## Tipos y características

Sensor térmico de tipo termistor (NTC) o interruptor térmico, alojado directamente entre las aletas del evaporador. (págs. 88-90)

## Principio de funcionamiento

Mide de forma continua la temperatura del evaporador y transmite su señal eléctrica a la unidad de gestión electrónica (UEGAA). Si la temperatura desciende hasta el umbral de formación de hielo, la centralita (o el interruptor térmico directamente) abre el circuito e interrumpe la corriente hacia el acoplamiento electromagnético del compresor. Al subir la temperatura, vuelve a acoplar el compresor. (págs. 88-90)

## Anomalías frecuentes

Descalibración de la resistencia NTC o mal posicionamiento físico del elemento sensible entre las aletas del evaporador. (págs. 88, 90)

## Comportamiento en avería

Bloqueo del flujo de aire hacia el habitáculo por congelación total del agua en el evaporador o corte prematuro e injustificado del compresor. (págs. 88, 161)

## Cómo comprobarlo

Comprobar la curva de resistencia NTC del sensor a diferentes temperaturas y consultar la memoria de averías mediante autodiagnóstico. (págs. 88, 161)

## Mantenimiento

Asegurar la correcta colocación e inserción del elemento sensible en el cuerpo del evaporador. (págs. 88-89)
