---
id: ssc.transmisor-presion.transmisor-de-presion-ii
modulo: ssc
unidad: clima
nt: 648
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
fuentes: "Transmisor de presión II.pdf, págs. 15-17"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador", "compresor"]
palabras: ["G65", "transmisor de presión", "ralentí", "16 bares", "función sustitutiva"]
---

## Misión

Medir la presión del fluido refrigerante y enviar la señal electrónica a la unidad de control del motor y a la unidad de control del aire acondicionado. (pág. 15)

## Tipos y características

Transmisor de presión electrónico de diseño idéntico al montado en el modelo Toledo. (pág. 15)

## Principio de funcionamiento

El transmisor mide la presión del circuito y transmite la señal a dos unidades de control:
- Unidad del aire acondicionado: procesa la señal para efectuar la desconexión del compresor por presión máxima o mínima, conectar la 2ª velocidad de los ventiladores del líquido refrigerante al llegar a 16 bar, e informar sobre el estado de conexión del compresor.
- Unidad de control del motor: procesa la señal para actuar sobre la gestión del ralentí según las necesidades requeridas por la carga del motor. (pág. 15)

## Valores de trabajo

- Presión de activación de la 2ª velocidad de los ventiladores del líquido refrigerante: 16 bar. (pág. 15)

## Anomalías frecuentes

Avería en el transmisor de presión o en su línea de señal. (pág. 15)

## Comportamiento en avería

En caso de avería en el transmisor G65:
- La unidad de control del aire acondicionado desactiva el compresor.
- La avería únicamente queda registrada en la memoria de averías de la unidad de control del motor. (pág. 15)

## Imágenes requeridas

- Transmisor de presión G65 y su conexionado con la unidad del aire acondicionado J293 y la unidad de motor — Fuente: Transmisor de presión II.pdf, pág. 17
