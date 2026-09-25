---
id: ssc.sensor-calidad-aire.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 820
tipo: elemento
clase: componente
titulo: "Sensor de la calidad del aire G238"
codigo: "G238"
menu: "Sensor de la calidad del aire  G238"
grupo: "Control de climatización"
clave: sensor-calidad-aire
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "VW"
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 61-63"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["G238", "calidad del aire", "contaminantes", "oxidables", "reducibles", "recirculación automática"]
---

## Misión

Analizar la presencia de sustancias nocivas en el aire exterior para ordenar el cierre automático de la trampilla de recirculación antes de que los contaminantes penetren en el habitáculo. (págs. 61-62)

## Tipos y características

Sensor semiconductor térmico instalado en la toma de aspiración de aire fresco en la caja de aguas. Responde a gases oxidables (CO) y reducibles (NOx). (págs. 61-62)

## Principio de funcionamiento

Mide de forma continua la variación de conductividad de su elemento semiconductor provocada por los picos de contaminación del aire exterior. Transmite una señal digital rectangular modulada a la unidad de control, la cual activa el servomotor V71/V113 para conmutar a recirculación de aire. Para evitar el empañado, el sistema limita el tiempo máximo en recirculación y no se activa a temperaturas muy bajas. (págs. 62-63)

## Valores de trabajo

- Tipo de gases detectables: gases oxidables (monóxido de carbono CO) y reducibles (óxidos de nitrógeno NOx). (pág. 62)

## Anomalías frecuentes

Deterioro del elemento sensible por lavados del vano motor con productos desengrasantes o contaminación del filtro. (págs. 62-63)

## Comportamiento en avería

Se anula o restringe la función automática de recirculación de aire, memorizándose el fallo en la centralita. (págs. 62-63)

## Cómo comprobarlo

Consultar las solicitudes del sensor G238 en los bloques de medición del autodiagnóstico o realizar una prueba de campo acercando un gas de prueba a la embocadura. (págs. 63, 71)

## Mantenimiento

Reemplazar el filtro combinado de carbón activo en los intervalos de inspección especificados. (pág. 62)

## Imágenes requeridas

- Esquema del sensor de calidad del aire G238 y su comunicación mediante señal digital con la unidad de control — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 63
