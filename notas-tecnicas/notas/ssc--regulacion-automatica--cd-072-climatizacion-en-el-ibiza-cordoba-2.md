---
id: ssc.regulacion-automatica.cd-072-climatizacion-en-el-ibiza-cordoba-2
modulo: ssc
unidad: clima
nt: 559
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
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 8-10"
relacionados: ["unidad-control-climatizador"]
palabras: ["descentralizada", "J255", "J293", "radiocasete", "gestión electrónica"]
---

## Objeto

Explicar el funcionamiento interconectado y descentralizado de los equipos de mando electrónico (calefacción motorizada y autoclima) en el SEAT Ibiza/Córdoba '99. (págs. 8-10)

## Fundamento

Para gestionar la climatización se utiliza una arquitectura descentralizada en la que las tareas de selección, procesamiento de datos, acoplamiento de potencia y gestión de ventilación se reparten entre varias unidades de control interconectadas. (págs. 8-10)

## Desarrollo

El sistema distribuye sus funciones entre los siguientes módulos:
- **Unidad del equipo de mando electrónico (J255):** Procesa las señales de los sensores térmicos y establece la estrategia de regulación de temperatura, aire de entrada y soplado. (págs. 8, 10)
- **Radiocasete (R):** Actúa como pasarela de comunicación entre la unidad de manejo e indicación (E87) accesible al usuario y la unidad de control J255. (págs. 8, 10)
- **Unidad del aire acondicionado (J293):** Gobierna directamente la alimentación del acoplamiento magnético del compresor y activa las distintas velocidades de los electroventiladores del radiador según la presión del gas y la temperatura del motor. (págs. 8, 10)
- **Unidad de control del motor:** Interviene en la gestión del compresor para inhibir su acoplamiento en fases de arranque, solicitud de plena carga, kick-down o falta de señal de revoluciones. (págs. 8, 10)

## Errores de concepto frecuentes

- Considerar que la unidad de control del climatizador J255 alimenta directamente el embrague del compresor y los electroventiladores del radiador sin pasar por el módulo J293. (págs. 8-10)

## Imágenes requeridas

- Cuadro sinóptico de la estructura descentralizada con las unidades J255, J293, radiocasete R, unidad de motor y sus sensores/actuadores asociados — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, págs. 8-11
