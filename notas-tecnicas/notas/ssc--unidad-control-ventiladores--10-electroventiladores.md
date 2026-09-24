---
id: ssc.unidad-control-ventiladores.10-electroventiladores
modulo: ssc
unidad: clima
nt: 59
tipo: elemento
clase: componente
titulo: "Unidad de control para los ventiladores de refrigeración"
menu: "Unidad de control para los ventiladore"
grupo: "Control de climatización"
clave: unidad-control-ventiladores
area: electricidad-electronica
sistema: "control-climatizacion"
fuentes: "10. Electroventiladores.pdf, págs. 84-85"
relacionados: ["electroventilador-condensador", "compresor", "unidad-control-climatizador"]
palabras: ["caja de relés", "embrague compresor", "fusible", "Can-Bus", "trinaria", "sensor MAP"]
---

## Misión

Gestionar la activación de las distintas velocidades de los electroventiladores, controlar el acoplamiento magnético del compresor y supervisar la temperatura del sistema (págs. 83-85).

## Tipos y características

Módulo o caja electrónica instalada en el compartimento motor (pág. 84). Integra en su interior los relés de conmutación de los electroventiladores, el relé de excitación del embrague del compresor, un fusible de protección y la electrónica de gestión (pág. 84).

## Principio de funcionamiento

Recibe señales de entrada desde el termocontacto del radiador, el conmutador de presión (trinaria), el transmisor de alta presión (sensor MAP), el panel de mandos de la climatización y la red Can-Bus de datos (pág. 85). Procesa esta información para activar los relés de velocidad de los electroventiladores y la excitación del compresor, vigilar la temperatura del refrigerante, gestionar bombas de agua auxiliares e intercambiar información con la unidad de motor y de cambio automático (pág. 85).
