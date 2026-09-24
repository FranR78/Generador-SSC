---
id: ssc.sensor-temperatura-exterior.toledo-99-clima
modulo: ssc
unidad: clima
nt: 346
tipo: elemento
clase: componente
titulo: "Transmisores de temperatura exterior"
codigo: "G17, G89"
menu: "Transmisores de temperatura ex G17, G89"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "Toledo 99 CLIMA.pdf, págs. 49"
relacionados: ["unidad-control-climatizador", "regulacion-automatica"]
palabras: ["G17", "G89", "NTC", "temperatura exterior", "canal de entrada", "valor sustitutivo 10 ºC"]
---

## Misión

Medir la temperatura del aire exterior y del aire aspirado para regular la temperatura de impulsión, la recirculación, la velocidad de la turbina y mostrar la indicación en el cuadro de instrumentos. (pág. 49).

## Tipos y características

Dos captadores de temperatura formados por resistencias de tipo NTC:
- G17: ubicado en la zona izquierda del paragolpes delantero. (pág. 49).
- G89: ubicado en el canal de entrada de aire a la unidad climática. (pág. 49).

## Principio de funcionamiento

Miden la temperatura del aire exterior mediante la variación de resistencia eléctrica NTC. La unidad de control J255 recibe ambas señales y utiliza comparativamente el valor de temperatura más bajo para posicionar la trampilla de temperatura, la trampilla de recirculación y regular la turbina, además de enviar la lectura al indicador G106 del cuadro de instrumentos. (pág. 49).

## Valores de trabajo

Valor sustitutivo fijo en avería doble: 10 ºC. (pág. 49).

## Comportamiento en avería

- Si se avería un transmisor, la unidad de control toma la lectura del transmisor que permanece operativo. (pág. 49).
- Si se averían ambos transmisores (G17 y G89), la unidad de control asume un valor fijo sustitutivo de 10 ºC. (pág. 49).
