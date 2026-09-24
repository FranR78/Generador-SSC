---
id: ssc.sensor-temperatura-interior.ibiza99-actuadores
modulo: ssc
unidad: clima
nt: 533
tipo: elemento
clase: componente
titulo: "Motor para la turbina del transmisor de temperatura interior"
codigo: "V42"
menu: "Motor para la turbina del tran V42"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "Ibiza99 - Actuadores.pdf, págs. 23-24"
relacionados: ["transmisor-temperatura-interior-g56", "unidad-control-climatizador"]
palabras: ["turbina", "transmisor G56", "placa electrónica", "señal de 15"]
---

## Misión

Genera una corriente constante de aire que aspira y fuerza el paso del aire sobre el transmisor de temperatura interior G56, permitiendo medir con precisión la temperatura del habitáculo. Forma un único conjunto con el transmisor G56. (pág. 23)

## Tipos y características

Aloja en su interior una placa electrónica encargada del control de funcionamiento y del autodiagnóstico de averías. Su rotor consta de una turbina con eje imantado. (pág. 23-24)

## Principio de funcionamiento

Es excitado con positivo y negativo desde la unidad de control del autoclima mientras dicha unidad reciba la señal de contacto (borne "15"). (pág. 24)

## Valores de trabajo

Señal de excitación: Positivo y negativo condicionados a la presencia de señal de borne "15". (pág. 24)

## Comportamiento en avería

Si la unidad del autoclima detecta un fallo en este motor, aplica factores de corrección sobre la señal registrada por el transmisor G56 para estimar un valor aproximado a la temperatura real. (pág. 24)

## Imágenes requeridas

- Vista explosionada del motor V42 con placa electrónica, estator y rotor con turbina imantada — Fuente: Ibiza99 - Actuadores.pdf, pág. 24
