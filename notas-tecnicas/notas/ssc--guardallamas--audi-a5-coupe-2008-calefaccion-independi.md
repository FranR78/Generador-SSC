---
id: ssc.guardallamas.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 177
tipo: elemento
clase: componente
titulo: "Guardallamas"
codigo: "G64"
menu: "Guardallamas G64"
grupo: "Calefacción"
clave: guardallamas
area: climatizacion
sistema: "calefaccion"
forma_parte_de: calefactor-independiente
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 66, 141"
relacionados: ["calefactor-independiente", "bujia-precalentamiento-calefaccion"]
palabras: ["G64", "guardallamas", "detección de llama", "junta de grafito", "resistencia de llama"]
---

## Misión

Supervisar de forma continua la presencia y la estabilidad de la llama en la cámara de combustión del calefactor. (págs. 34, 141)

## Tipos y características

Sensor de temperatura fototransistor o resistencia térmica especial alojada en una ranura de la cámara de combustión equipada con junta de grafito. (págs. 136, 141)

## Principio de funcionamiento

Mide el calor radiado por la combustión. Cuando la temperatura en la cámara alcanza el umbral de combustión con llama, la UCE J364 detecta la señal "detectada", confirmando la estabilización del fuego para cortar la bujía Q9. Si la llama se apaga de forma imprevista, la señal pasa a "no detectada" y la UCE inicia el ciclo de seguridad. (págs. 34, 74-76)

## Valores de trabajo

- Estado en diagnosis: "detectada" durante el funcionamiento de combustión y "no detectada" en frío. (pág. 34)

## Anomalías frecuentes

Incrustación de hollín o carbonilla sobre la ventana de captación del sensor, o deterioro de la junta de grafito. (págs. 66, 141)

## Comportamiento en avería

Cancelación del ciclo de arranque al cabo de 90 segundos por falta de detección de llama, registrando avería en J364. (págs. 75, 84)

## Cómo comprobarlo

Medir la resistencia del sensor entre sus terminales a temperatura ambiente (evaluando desviaciones) y revisar el estado visual en el bloque de valores de medición. (págs. 34, 66)

## Mantenimiento

Sustituir obligatoriamente la junta de grafito al desmontar el guardallamas e insertarla con cuidado utilizando un destornillador sin aristas vivas. (pág. 141)

## Imágenes requeridas

- Montaje del guardallamas G64 en la ranura con su junta de grafito — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 141
