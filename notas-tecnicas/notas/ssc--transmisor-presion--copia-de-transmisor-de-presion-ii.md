---
id: ssc.transmisor-presion.copia-de-transmisor-de-presion-ii
modulo: ssc
unidad: clima
nt: 655
tipo: elemento
clase: componente
titulo: "Transmisor de presión electrónico"
codigo: "G65"
menu: "Transmisor de presión electrón G65"
grupo: "Circuito frigorífico"
clave: transmisor-presion
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
fuentes: "Copia de Transmisor de presión II.pdf, págs. 15-17"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador", "compresor"]
palabras: ["G65", "transmisor de presión", "ralentí", "16 bares", "función sustitutiva"]
---

## Misión

Medir la presión del fluido refrigerante en el circuito y enviar la señal electrónica a la unidad de control del motor y a la unidad de control del aire acondicionado. (pág. 15)

## Tipos y características

Transmisor de presión electrónico con un diseño idéntico al montado en el modelo Toledo.

## Principio de funcionamiento

El transmisor mide la presión del circuito frigorífico y envía la señal a dos unidades de control:
- **Unidad del aire acondicionado:** procesa la señal para efectuar la desconexión del compresor por presión máxima o mínima, conectar la 2ª velocidad de los ventiladores del líquido refrigerante al llegar a 16 bares e informar a la unidad del autoclima sobre la conexión o desconexión del compresor.
- **Unidad de control del motor:** procesa la señal enviada por el transmisor y actúa sobre la regulación del ralentí según las necesidades requeridas por la carga del motor. (págs. 15-17)

## Valores de trabajo

- **Presión para conexión de la 2ª velocidad de los ventiladores del líquido refrigerante:** 16 bares. (pág. 15)

## Anomalías frecuentes

Avería o fallo interno en el propio transmisor de presión. (pág. 17)

## Comportamiento en avería

En caso de avería en el transmisor G65:
- La unidad de control del aire acondicionado desactiva el compresor como función sustitutiva.
- La avería de este transmisor únicamente queda registrada en la memoria de averías de la unidad de control del motor. (pág. 17)

## Imágenes requeridas

- Transmisor de presión G65 y esquema de conexionado eléctrico con la unidad del aire acondicionado J293, la unidad del motor y la unidad del autoclima J255 — Fuente: Copia de Transmisor de presión II.pdf, págs. 15-17
