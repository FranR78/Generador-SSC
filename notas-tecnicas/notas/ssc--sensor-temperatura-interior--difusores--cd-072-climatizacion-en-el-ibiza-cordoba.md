---
id: ssc.sensor-temperatura-interior.difusores.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 560
tipo: elemento
clase: componente
titulo: "Transmisores de temperatura del aire de entrada"
codigo: "G191 / G192"
menu: "Transmisores de temperatura de G191 / G192"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
variante: difusores
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: distribucion-aire
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 12-13"
relacionados: ["unidad-control-climatizador"]
palabras: ["G191", "G192", "difusor central", "difusor pies", "NTC", "valor medio"]
---

## Misión

Medir la temperatura del aire impulsado a través de las salidas de ventilación hacia el habitáculo para ajustar la mezcla de aire de la unidad climática. (págs. 12-13)

## Tipos y características

Pareja de termistores tipo NTC ubicados en puntos clave de los canales de distribución:
- **Transmisor G191:** Montado en el difusor central. (pág. 13)
- **Transmisor G192:** Montado en el difusor de la zona de los pies. (pág. 13)

## Principio de funcionamiento

Cada elemento varía su resistencia eléctrica según la temperatura del aire impulsado que pasa a su alrededor. La unidad de control del autoclima procesa ambas señales y calcula un valor medio de temperatura para regular con precisión el posicionamiento de la trampilla de mezcla. (págs. 12-13)

## Valores de trabajo

- Margen de temperatura referenciado de las NTC: de -40 ºC a +85 ºC. (pág. 13)

## Comportamiento en avería

- Pérdida de regulación automática del autoclima: el sistema fija los parámetros operativos en el estado en que se encontraban al producirse el fallo. (pág. 13)
- Parpadeo de todos los dígitos de la pantalla del display al conectar el equipo. (pág. 13)

## Cómo comprobarlo

Mediante la función "08" (bloque de valores de medición, grupo 006) del equipo de autodiagnosis. (pág. 37)

## Imágenes requeridas

- Ubicación de los transmisores de temperatura del aire impulsado G191 en el difusor central y G192 en el difusor de los pies — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 13
