---
id: ssc.sensor-posicion-trampilla.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 579
tipo: elemento
clase: componente
titulo: "Potenciómetro del motor de la trampilla de temperatura"
codigo: "G92"
menu: "Potenciómetro del motor de la  G92"
grupo: "Control de climatización"
clave: sensor-posicion-trampilla
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: servomotor-trampilla
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 15, 22"
relacionados: ["servomotor-trampilla", "unidad-control-climatizador"]
palabras: ["G92", "V68", "51 grados", "topes finales", "resistencia variable"]
---

## Misión

Informa constantemente a la unidad de control sobre la posición física angular exacta de la trampilla de mezcla de temperatura. (págs. 15, 22)

## Tipos y características

Potenciómetro rotativo de resistencia variable integrado en el interior de la carcasa del servomotor V68. (págs. 15, 22)

## Principio de funcionamiento

El eje del potenciómetro gira solidario con el engranaje de salida del servomotor V68. Al modificar la posición de la trampilla, varía el valor de resistencia eléctrica informando a la unidad de control sobre el ángulo real alcanzado y permitiendo la detección de los dos topes mecánicos del recorrido. (págs. 15, 22)

## Valores de trabajo

- Carrera angular de trabajo: 51º. (pág. 15)
- Rango de resistencia eléctrica: de 0 a 4,7 kΩ. (pág. 15)

## Comportamiento en avería

- La unidad de control inmoviliza la trampilla de temperatura en la posición en que se encontraba al detectar el fallo. (pág. 15)
- Se reduce automáticamente la velocidad de la turbina para evitar la entrada excesiva de aire frío o caliente no regulado. (pág. 15)
- Parpadeo de los dígitos del display al encender el sistema. (pág. 15)

## Cómo comprobarlo

Mediante la función "08" (bloque de valores de medición, grupo 002) del equipo de autodiagnosis. (pág. 37)

## Imágenes requeridas

- Vista interna del servomotor V68 mostrando la ubicación del potenciómetro G92 y las ruedas de transmisión — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 22
