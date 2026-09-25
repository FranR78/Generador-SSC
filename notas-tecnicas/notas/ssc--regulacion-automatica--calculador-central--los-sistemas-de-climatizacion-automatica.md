---
id: ssc.regulacion-automatica.calculador-central.los-sistemas-de-climatizacion-automatica
modulo: ssc
unidad: clima
nt: 880
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Gestión del confort térmico mediante calculador electrónico central"
menu: "Gestión del confort térmico mediante c"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: calculador-central
area: climatizacion
sistema: "control-climatizacion"
marca: "Valeo"
fuentes: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, págs. 1-3, 5-8"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "presostato"]
palabras: ["tarjeta electrónica", "calculador", "sondas de temperatura", "red de entornos", "bucle de regulación"]
---

## Objeto

Procesar la información captada en los diferentes entornos del vehículo (habitáculo, tablero de mandos, conjunto A/C y compartimento motor) para gobernar automáticamente los actuadores de mezcla, distribución e impulsor de aire. (págs. 1, 6-8)

## Fundamento

La tarjeta electrónica o calculador central, instalada habitualmente tras el panel de mandos, actúa como núcleo de control recibiendo señales de entrada de sensores térmicos y emitiendo órdenes hacia los actuadores mecánicos y eléctricos del circuito. (págs. 6, 8)

## Desarrollo

El calculador gestiona el bucle de regulación evaluando las siguientes variables:
- **Entradas de información:** Lee la temperatura ambiente del habitáculo, la temperatura exterior, la temperatura del aire soplado en conductos y la temperatura de la superficie del evaporador para prevenir congelaciones. Lee asimismo la presión del fluido a través del presostato para activar el electroventilador (GMV) o cortar el compresor. (págs. 2, 5, 7)
- **Procesamiento y salidas:** Compara las mediciones reales con la temperatura de consigna seleccionada por el usuario en el display. Genera señales de mando dirigidas a los servomotores de las trampillas de mezcla frío/caliente, repartición de caudal y recirculación, regulando además la velocidad del impulsor de aire. (págs. 6-8)

## Errores de concepto frecuentes

- Atribuir fallos de regulación automática a averías mecánicas complejas, omitiendo que la interrupción o corte de cableado en un sensor secundario altera por completo el algoritmo del calculador. (págs. 6, 8)

## Imágenes requeridas

- Esquema general de la tarjeta electrónica interactuando con los entornos del habitáculo, tablero de mandos, conjunto A/C y compartimento motor — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 7
