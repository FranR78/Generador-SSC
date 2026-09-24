---
id: ssc.sensor-temperatura-exterior.g89.termosensores
modulo: ssc
unidad: clima
nt: 209
tipo: elemento
clase: componente
titulo: "Termosensor en el conducto de aspiración de aire fresco"
codigo: "G89"
menu: "Termosensor en el conducto de  G89"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
variante: g89
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "TERMOSENSORES.pdf, págs. 1"
relacionados: ["unidad-control-climatizador", "sensor-temperatura-exterior"]
palabras: ["G89", "conducto de aspiración", "aire fresco", "valor más bajo", "segundo punto de medición"]
---

## Misión

Registrar la temperatura exterior efectiva como segundo punto de medición para la gestión de la chapaleta de temperatura y la velocidad de la turbina de aire (pág. 1).

## Tipos y características

Termosensor instalado directamente en la canalización de aspiración de aire fresco, susceptible de autodiagnóstico (pág. 1).

## Principio de funcionamiento

Mide la temperatura del caudal de aire exterior que ingresa por el conducto de aspiración e informa a la unidad de control (pág. 1). La unidad de control compara esta medición con la del primer sensor G17 (armazón delantero) y procesa siempre el valor más bajo de los dos para los cálculos de regulación (pág. 1).

## Anomalías frecuentes

- Ausencia de la señal del sensor (pág. 1).

## Comportamiento en avería

Si se ausenta la señal del sensor G89, la unidad de control utiliza el valor de medición del termosensor de temperatura exterior G17 situado en el armazón delantero (pág. 1).

## Cómo comprobarlo

Mediante la lectura del autodiagnóstico de la unidad de control (pág. 1).
