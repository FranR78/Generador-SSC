---
id: ssc.sensor-humedad.409-e-audi-a4-08
modulo: ssc
unidad: clima
nt: 421
tipo: elemento
clase: componente
titulo: "Sensor de humedad y temperatura del parabrisas G355"
codigo: "G355"
menu: "Sensor de humedad y temperatur G355"
grupo: "Control de climatización"
clave: sensor-humedad
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "Audi"
fuentes: "409_e         Audi A4 _08.pdf, págs. 66-67"
relacionados: ["unidad-control-climatizador"]
palabras: ["g355", "humedad parabrisas", "empañamiento", "sensor capacitivo", "punto de rocío"]
---

## Misión

Medir la humedad relativa del aire interior y la temperatura de la cara interna del cristal para prevenir el empañamiento del parabrisas. (págs. 66-67)

## Tipos y características

Sensor capacitivo de capa delgada que funciona de forma comparable a un condensador de laminillas. Montado en contacto directo con el parabrisas (exclusivo de la versión confort plus). (págs. 66-67)

## Principio de funcionamiento

Mide el contenido de agua en el aire midiendo las variaciones de capacidad en su capa delgada y transforma dicho valor en una tensión eléctrica. Mide la temperatura del cristal por contacto directo. La unidad central para sistema de confort J393 procesa la señal y la envía vía CAN a la unidad J255 para ajustar la mezcla y el caudal de aire antes de que la temperatura del cristal descienda por debajo del punto de rocío. (págs. 66-67)

## Anomalías frecuentes

Pérdida de contacto físico con el cristal o fallo de la electrónica integrada. (págs. 66-67)

## Comportamiento en avería

Desactivación de la regulación preventiva contra el empañamiento del parabrisas. (págs. 66-67)

## Cómo comprobarlo

Lectura de los valores de capacidad/tensión y temperatura de cristal en los bloques de valores de medición de la unidad J393/J255. (págs. 66-67)

## Mantenimiento

Garantizar el contacto térmico directo contra la superficie del parabrisas tras operaciones de sustitución del cristal. (págs. 66-67)
