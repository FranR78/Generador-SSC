---
id: ssc.servomotor-trampilla.lin-bus.301-e-climatizacion-en-el-touareg
modulo: ssc
unidad: clima
nt: 825
tipo: elemento
clase: componente
titulo: "Servomotores de trampillas con comunicación LIN-Bus"
menu: "Servomotores de trampillas con comunic"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: lin-bus
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: distribucion-aire
marca: "VW"
fuentes: "301_e         Climatización en el Touareg.pdf, págs. 44-48, 80-84"
relacionados: ["unidad-control-climatizador"]
palabras: ["servomotores", "LIN-Bus", "direccionamiento automático", "ajuste básico", "V158", "V159", "V107"]
---

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
