---
id: ssc.unidad-control-climatizador.modulo-rele-j293.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 853
tipo: elemento
clase: componente
titulo: "Unidad de control para el aire acondicionado"
codigo: "J293"
menu: "Unidad de control para el aire J293"
grupo: "Control de climatización"
clave: unidad-control-climatizador
variante: modulo-rele-j293
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 15, 28-29"
relacionados: ["embrague-compresor", "presostato"]
palabras: ["J293", "unidad de control aire acondicionado", "relé de potencia", "F129", "G65", "electroventilador"]
---

## Misión

Gobernar la alimentación eléctrica directa del acoplamiento electromagnético del compresor (N25) y gestionar la activación de las velocidades del electroventilador (V7 / V35). (págs. 15, 28-29)

## Tipos y características

Módulo electrónico de potencia e interfaz de relés instalado en el vano motor, comunicado con la centralita del climatizador (J255), el presostato (F129 o G65) y la unidad de control del motor. (págs. 15, 28-29)

## Principio de funcionamiento

Recibe la señal de solicitud de conexión del compresor desde la centralita J255 (tras atravesar el conmutador F129/G65 y el interruptor térmico F38). La unidad J293 valida las condiciones de la UCE del motor (régimen, aceleración a plena carga o primeros 10 segundos tras el arranque) y suministra positivo de batería a la bobina del acoplamiento magnético N25. Asimismo, activa el primer escalón de velocidad de los ventiladores al conectar el A/C y conmuta a la velocidad máxima si el termoconmutador F18 detecta más de 105 ºC en el líquido refrigerante. (págs. 15, 28-29)

## Valores de trabajo

- Inhibición del compresor por la UCE motor: durante los primeros 10 segundos tras el arranque o por aceleración Kick-down a plena carga. (pág. 15)
- Activación de velocidad máxima de ventiladores por temperatura de líquido refrigerante: > 105 ºC. (pág. 29)

## Anomalías frecuentes

Fallo en los contactos internos de potencia del relé o degradación del conector expuesto a la intemperie en el compartimento motor. (págs. 28-29)

## Comportamiento en avería

El compresor no se acopla o los electroventiladores no se activan al conectar la climatización, provocando sobrepresión en el circuito frigorífico. (págs. 28-29)

## Cómo comprobarlo

Verificar la presencia de masa y tensiones de alimentación en las bornes de entrada del módulo J293 y ejecutar la prueba de actuadores con el equipo de diagnosis. (págs. 29, 33)

## Mantenimiento

Revisar el estado de los fusibles aéreos montados sobre la batería que alimentan la unidad J293. (pág. 31)

## Imágenes requeridas

- Esquema de conexión de la unidad J293 con el acoplamiento magnético N25, ventiladores y conmutador de presión F129 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 29
