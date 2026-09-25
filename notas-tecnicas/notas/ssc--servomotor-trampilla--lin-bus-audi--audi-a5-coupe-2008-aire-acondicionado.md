---
id: ssc.servomotor-trampilla.lin-bus-audi.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 840
tipo: elemento
clase: componente
titulo: "Servomotores de las chapaletas de climatización con LIN-Bus"
codigo: "V68 / V107 / V108 / V109 / V110 / V111 / V113 / V137 / V158 / V159 / V261"
menu: "Servomotores de las chapaletas V68 / V107 / V108 / V109 / V110 / V111 / V113 / V137 / V158 / V159 / V261"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: lin-bus-audi
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: distribucion-aire
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 18, 231, 236, 249"
relacionados: ["unidad-control-climatizador"]
palabras: ["servomotores", "LIN-Bus", "direccionamiento automático", "sector dentado", "ajuste básico", "circuito en serie"]
---

## Misión

Accionar las chapaletas de regulación de temperatura, descongelación, recirculación y distribución de aire en la carcasa del climatizador. (págs. 231, 236)

## Tipos y características

Actuadores eléctricos equipados con un módulo electrónico integrado. Todos los servomotores del vehículo son técnicamente idénticos como pieza de recambio y están interconectados en serie mediante un único cable de bus de datos LIN-Bus conectado a la centralita Climatronic J255. (págs. 18, 231, 236)

## Principio de funcionamiento

Reciben las órdenes de movimiento transmitidas en serie por la centralita J255 a través del LIN-Bus. Durante la función de "Ajuste básico" (grupo 004), los servomotores reconocen y memorizan permanentemente su dirección física y función específica en función del orden secuencial en el que están instalados en el mazo de cables. (págs. 18, 231, 236)

## Valores de trabajo

- Valores de tope autoadaptados en memoria: tope inferior "10000" y tope superior entre "11000" y "20000". (pág. 45)
- Alimentación: Tensión de red de a bordo e interfaz de bus de datos LIN (terminal T16). (págs. 45, 231)

## Anomalías frecuentes

Desalineación del sector dentado de accionamiento con la marca de la carcasa o alteración de la secuencia de conexión física del cableado durante desmontajes. (págs. 231, 249)

## Comportamiento en avería

Registro de los códigos de avería "Direccionamiento automático incorrecto" o "Límite superior/inferior sobrepasado", provocando un posicionamiento erróneo de las trampillas. (págs. 18, 231)

## Cómo comprobarlo

Iniciar la función "Ajuste básico" en los grupos de indicación 004 y 001 con la estación de diagnosis VAS 5051 para autoadaptar las posiciones finales de recorrido. (págs. 18, 231)

## Mantenimiento

Al montar un servomotor nuevo, comprobar antes de encajarlo que el primer diente del sector dentado queda encarado con la marca "C" del soporte de plástico. Respetar el orden físico de los conectores del mazo en serie. (págs. 249, 306)

## Imágenes requeridas

- Esquema del circuito en serie LIN-Bus entre la centralita J255 y la cadena de servomotores — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 231
