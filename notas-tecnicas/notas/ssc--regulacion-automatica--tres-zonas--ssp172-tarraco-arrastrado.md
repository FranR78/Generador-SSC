---
id: ssc.regulacion-automatica.tres-zonas.ssp172-tarraco-arrastrado
modulo: ssc
unidad: clima
nt: 517
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Climatronic de 3 zonas"
menu: "Climatronic de 3 zonas"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: tres-zonas
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "SSP172 TARRACO (arrastrado).pdf, págs. 59-61"
relacionados: ["unidad-control-climatizador", "unidad-mandos-trasera", "distribucion-aire"]
palabras: ["climatronic", "3 zonas", "regulación automática", "aircare", "pureair"]
---

## Objeto

Regular automáticamente la temperatura, el caudal y la salida del aire de forma independiente en 3 zonas del habitáculo (conductor, acompañante y plazas traseras) en el SEAT Tarraco. (págs. 59-60)

## Fundamento

El sistema utiliza dos configuraciones de climatización (manual y Climatronic). En la versión Climatronic de 3 zonas, la unidad de control J255 procesa la información de múltiples sensores térmicos y solares, y se comunica vía CAN-Bus Confort y LIN-Bus Clima para accionar eléctricamente los servomotores y la turbina. (págs. 59-61)

## Desarrollo

El sistema Climatronic de 3 zonas abarca las siguientes funciones principales:
- Regulación independiente de la temperatura para el conductor, acompañante y plazas traseras (esta última gestionada localmente desde la unidad de mandos E265 en la consola central trasera).
- Regulación del caudal y de las salidas de aire hacia los difusores.
- Recirculación automática según la calidad del aire detectada por el sensor G238.
- Función PureAir (AirCare) para la purificación del aire del habitáculo.
- Solicitud de activación de la luneta térmica y de los asientos calefactados (delanteros y traseros).
- Programación de la calefacción estacionaria y gestión de parámetros desde la pantalla del equipo de infotenimiento.

La arquitectura de red interconecta a la UCE J255 mediante el CAN-Bus Confort con la interfaz J533, UCE de red de a bordo J519 y unidades de puerta, mientras que al LIN-Bus Clima están abonados el sensor de presión G805, el sensor de calidad del aire G238, la unidad trasera E265 y la UCE de la turbina J126. (págs. 59-61)

## Valores de referencia

- Número de zonas de regulación independiente: 3 zonas (conductor, acompañante y plazas traseras). (pág. 59)

## Errores de concepto frecuentes

Asumir que los mandos traseros E265 regulan la temperatura directamente mediante cableado analógico hacia los servomotores. La unidad E265 transmite las solicitudes a la UCE J255 a través de la línea digital LIN-Bus Clima. (págs. 59, 61)

## Imágenes requeridas

- Esquema de interconexión vía CAN-Bus Confort y LIN-Bus Clima de la unidad de control J255 con sus sensores y actuadores — Fuente: SSP172 TARRACO (arrastrado).pdf, pág. 61
