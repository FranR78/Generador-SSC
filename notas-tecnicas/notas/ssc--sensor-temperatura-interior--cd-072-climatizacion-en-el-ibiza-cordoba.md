---
id: ssc.sensor-temperatura-interior.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 188
tipo: elemento
clase: componente
titulo: "Transmisor de temperatura interior con turbina de aspiración"
codigo: "G56"
menu: "Transmisor de temperatura inte G56"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 12, 24"
relacionados: ["unidad-control-climatizador"]
palabras: ["G56", "V42", "NTC", "aspiración de aire", "parpadeo display"]
---

## Misión

Medir con precisión la temperatura real del aire del habitáculo para que la unidad de control del autoclima ajuste la potencia de refrigeración y calefacción. (págs. 12, 24)

## Tipos y características

Sensor térmico tipo NTC integrado en un conjunto junto a un pequeño electromotor con turbina de aspiración (V42). Va montado detrás del tablero de instrumentos, junto a la columna de dirección. (pág. 12)

## Principio de funcionamiento

El motor eléctrico V42 impulsa de forma continua una turbina que aspira aire del habitáculo haciéndolo pasar a través del elemento sensor NTC. La resistencia NTC varía su valor en función de la temperatura del aire aspirado, enviando la señal eléctrica correspondiente a la unidad de control. El motor V42 incorpora una placa electrónica interna que gobierna su giro y detecta fallos funcionales. (págs. 12, 24)

## Valores de trabajo

- Campo de medición de la NTC: de -40 ºC a +85 ºC. (pág. 12)
- Alimentación eléctrica del motor V42: 12 V con señal de borne 15 (contacto). (pág. 24)

## Comportamiento en avería

- Si falla el transmisor o el motor de la turbina V42, parpadean todos los dígitos del display central al conectar el autoclima. (págs. 12, 24)
- En caso de avería en el motor V42, la unidad de control del autoclima aplica un factor de corrección sobre el valor del transmisor G56 para simular la temperatura del habitáculo. (pág. 24)

## Cómo comprobarlo

Mediante la función "08" (bloque de valores de medición, grupo 005) del equipo de autodiagnosis. (pág. 37)

## Imágenes requeridas

- Sección del transmisor de temperatura interior G56 mostrando la resistencia NTC, la turbina y el motor eléctrico de aspiración V42 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, págs. 12, 24
