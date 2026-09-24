---
id: ssc.regulacion-automatica.cd-72-climatizacion-en-ibiza99-2
modulo: ssc
unidad: clima
nt: 589
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Estructura descentralizada de los equipos de mando electrónico"
menu: "Estructura descentralizada de los equi"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 72. Climatización en Ibiza99.pdf, págs. 8-10"
relacionados: ["unidad-control-climatizador"]
palabras: ["descentralizada", "J255", "J293", "radiocasete", "autodiagnóstico"]
---

## Objeto

Explicar el reparto funcional descentralizado entre las diferentes unidades de control que participan en la gestión de los equipos de mando electrónico (calefacción motorizada y autoclima). (págs. 8-10)

## Fundamento

Para simplificar el cableado y optimizar las funciones, la gestión del sistema se distribuye entre varias unidades de control interconectadas que asumen tareas específicas de regulación, conmutación de potencia y comunicación. (págs. 8-10)

## Desarrollo

El cuadro de funciones distribuidas se compone de:
- **Unidad del equipo de mando electrónico (J255):** Gestiona la regulación de temperatura (modos automático, semiautomático y manual), controla la intensidad de iluminación del mando de distribución y realiza las funciones de autodiagnóstico con memoria de averías. (págs. 8, 10)
- **Unidad del aire acondicionado (J293):** Gobierna el acoplamiento magnético del compresor y activa las velocidades de los ventiladores del líquido refrigerante según la presión del gas y la temperatura del motor. (págs. 8, 10)
- **Radiocasete (R):** Actúa como módulo de comunicación entre la unidad de manejo e indicación y la unidad de control J255, controlando además la iluminación del display y de los pulsadores. (págs. 8, 10)
- **Unidad de control del motor:** Interviene enviando señales de inhibición del compresor en fases de alta exigencia o inestabilidad. (págs. 8, 10)

## Errores de concepto frecuentes

- Pensar que la unidad J255 alimenta de forma directa el embrague magnético del compresor sin interposición del módulo de relés J293. (págs. 8-10)

## Imágenes requeridas

- Cuadro sinóptico de la estructura descentralizada identificando la unidad J255, J293, radiocasete R, unidad del motor y sensores/actuadores asociados — Fuente: CD. Climatización en Ibiza99.pdf, págs. 8-11
