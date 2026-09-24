---
id: ssc.corte-compresor-diesel.6-el-circuito-electrico
modulo: ssc
unidad: clima
nt: 396
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Corte de seguridad del compresor en rampa para motor diésel"
menu: "Corte de seguridad del compresor en ra"
grupo: "Control de climatización"
clave: corte-compresor-diesel
area: climatizacion
sistema: "control-climatizacion"
fuentes: "6. EL CIRCUITO ELÉCTRICO.pptx, págs. 23, 35-38"
relacionados: ["embrague-compresor", "unidad-control-climatizador"]
palabras: ["motor diesel", "arranque en rampa", "pedal embrague", "pedal acelerador", "rele temporizado 635", "rele 661"]
---

## Objeto

Optimizar los arranques en rampa y evitar el riesgo de calado del motor diésel anulando temporalmente la carga mecánica del compresor. (pág. 35)

## Fundamento

Interrumpir la corriente de alimentación a la bobina del embrague electromagnético durante un intervalo de cuatro segundos al detectar demanda de aceleración con el pedal de embrague pisado a fondo. (págs. 35-38)

## Desarrollo

1. Para activar el corte, el conductor debe pisar el pedal de embrague a fondo (abriendo el contactor 421) y solicitar alta carga en el acelerador (abriendo el contactor 405 en la palanca de la bomba de inyección 589). (págs. 35, 38)
2. Al abrirse ambos contactores, el relé 661 se desactiva y corta la alimentación al relé temporizado. (págs. 35, 37)
3. El relé temporizado 635 desexcita al relé de mando del embrague (584), interrumpiendo el paso de corriente hacia el embrague del compresor (171) durante cuatro segundos. (págs. 35, 37-38)
4. La instalación incorpora un diodo de desacoplamiento para evitar que el embrague sea alimentado de forma fortuita desde el cajetín de pre-postcalentamiento (257) durante el arranque. (págs. 35-37)

## Valores de referencia

- Tiempo de desacople del compresor: 4 segundos.
- Estado del contactor de pedal de embrague: sin reglaje; posicionado cerrado con el pie levantado (embragado). (págs. 35-36)

## Errores de concepto frecuentes

Pensar que el compresor permanece cortado todo el tiempo que se mantiene pisado el embrague. El desacople eléctrico está limitado a un intervalo fijo de 4 segundos mediante relé temporizado. (pág. 35)

## Imágenes requeridas

- Esquema eléctrico de control de corte de compresor con relé temporizado 635, relé 661 y diodo de desacoplamiento — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 37
