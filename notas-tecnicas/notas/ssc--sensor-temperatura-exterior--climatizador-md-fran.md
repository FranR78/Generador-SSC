---
id: ssc.sensor-temperatura-exterior.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 623
tipo: elemento
clase: componente
titulo: "Termosensor de temperatura exterior G17"
codigo: "G17"
menu: "Termosensor de temperatura ext G17"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 17"
relacionados: ["unidad-control-climatizador"]
palabras: ["G17", "armazón delantero", "valor supletorio +10 ºC", "NTC", "autodiagnóstico"]
---

## Misión

Medir la temperatura real del aire atmosférico en el frontal del vehículo para ajustar la mezcla de aire y el régimen del soplador. (pág. 17)

## Tipos y características

Sonda térmica de coeficiente de temperatura negativo (NTC) ubicada en el armazón frontal del vehículo detras del parachoques. (pág. 17)

## Principio de funcionamiento

Modifica su resistencia eléctrica en función de la temperatura del aire exterior. La unidad de control analiza la señal para determinar la posición inicial de la trampilla de mezcla y la velocidad de la turbina. Si falla, el sistema utiliza la señal del sensor G89 de la canalización de aire. (pág. 17)

## Valores de trabajo

- Valor supletorio por avería simultánea de G17 y G89: +10 ºC. (pág. 17)

## Anomalías frecuentes

Deterioro por impactos de piedras o sulfatación en las clavijas del conector frontal. (pág. 17)

## Comportamiento en avería

La unidad recurre al sensor G89; si fallan ambos, se anula la función de recirculación de aire y se adopta +10 ºC. (pág. 17)

## Cómo comprobarlo

Medir la resistencia en Ohmios del termistor a temperatura conocida o verificar la lectura en los bloques de medición del equipo de diagnosis. (pág. 17)

## Mantenimiento

Limpiar el cuerpo del sensor durante lavados frontales. (pág. 17)
