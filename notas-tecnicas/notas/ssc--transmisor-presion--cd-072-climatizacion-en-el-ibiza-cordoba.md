---
id: ssc.transmisor-presion.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 195
tipo: elemento
clase: componente
titulo: "Transmisor de presión electrónico"
codigo: "G65"
menu: "Transmisor de presión electrón G65"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 16-17"
relacionados: ["compresor", "electroventilador-condensador", "unidad-control-climatizador"]
palabras: ["G65", "gasolina", "PWM", "señal modulada", "16 bares"]
---

## Misión

Medir de forma continua el valor exacto de presión del agente frigorífico en el circuito de alta presión e informar a la unidad de control del motor y a la unidad del aire acondicionado. (págs. 16-17)

## Tipos y características

Sensor de presión electrónico montado en las motorizaciones de gasolina, ubicado junto a la válvula de expansión. Emite una señal de onda cuadrada modulada en anchura de impulso (PWM). (págs. 16-17)

## Principio de funcionamiento

Transforma la presión física del gas frigorífico en una señal de alta frecuencia cuya anchura de impulso varía proporcionalmente a la presión. La unidad del aire acondicionado J293 procesa la señal para desacoplar el compresor por presión crítica (mínima o máxima) e iniciar la 2ª velocidad de los electroventiladores al alcanzar 16 bares. La unidad de control del motor utiliza la información para compensar el régimen de ralentí según la carga absorbida por el compresor. (págs. 16-17)

## Valores de trabajo

- Umbral de activación de la 2ª velocidad de ventiladores: 16 bares. (pág. 17)

## Comportamiento en avería

- La unidad de control del aire acondicionado desactiva de inmediato el compresor. (pág. 17)
- La avería de este transmisor queda registrada únicamente en la memoria de averías de la unidad de control del motor. (pág. 17)

## Cómo comprobarlo

A través de la lectura de memoria de averías y bloques de valores de medición en la unidad de control del motor. (pág. 17)

## Imágenes requeridas

- Instalación del transmisor de presión electrónico G65 en la tubería de alta presión — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 16
