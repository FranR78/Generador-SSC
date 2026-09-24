---
id: ssc.unidad-control-climatizador.ssp172-tarraco-arrastrado
modulo: ssc
unidad: clima
nt: 518
tipo: elemento
clase: componente
titulo: "Unidad de control del Climatronic"
codigo: "J255"
menu: "Unidad de control del Climatro J255"
grupo: "Control de climatización"
clave: unidad-control-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "SSP172 TARRACO (arrastrado).pdf, págs. 59-61"
relacionados: ["unidad-mandos-trasera", "servomotor-trampilla", "regulacion-automatica"]
palabras: ["j255", "climatronic", "can-bus confort", "lin-bus clima", "aircare"]
---

## Misión

Procesar las señales de los sensores, gestionar las comunicaciones de red y gobernar los actuadores del sistema para conseguir el funcionamiento totalmente automático de la climatización de 3 zonas. (págs. 59-61)

## Tipos y características

Unidad de control electrónica integrada en la consola central con panel de mandos e indicación digital. Conectada al CAN-Bus Confort como nodo principal del sistema y como maestra de la línea LIN-Bus Clima. (págs. 59-61)

## Principio de funcionamiento

Recibe señales analógicas y digitales de sensores (G308, G385, G386, G192, G107, G174 y potenciómetros) e información del LIN-Bus Clima (G805, G238, E265, J126). Procesa estos datos para calcular la temperatura y caudal óptimos, gobernando la válvula N280 del compresor, la turbina V2 y los servomotores de trampillas (V158, V159, V137, V237, V425, V107). (págs. 59-61)

## Valores de trabajo

- Tensión de alimentación: tensión de red de a bordo (12 V nominales). (pág. 61)

## Cómo comprobarlo

Diagnóstico electrónico mediante la conexión U31 accediendo por la interfaz J533 a la memoria de averías y valores de medición del CAN-Bus Confort. (pág. 61)

## Mantenimiento

No requiere mantenimiento preventivo. (págs. 59-61)
