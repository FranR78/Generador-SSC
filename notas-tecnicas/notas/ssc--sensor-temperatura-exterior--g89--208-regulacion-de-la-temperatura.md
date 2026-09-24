---
id: ssc.sensor-temperatura-exterior.g89.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 99
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
marca: "VW"
fuentes: "208. Regulación de la temperatura.pdf, págs. 48-49"
relacionados: ["unidad-control-climatizador", "sensor-temperatura-exterior"]
palabras: ["G89", "conducto aspiración", "segundo punto medición", "valor más bajo"]
---

## Misión

Registrar la temperatura del aire exterior a la entrada del conducto de aspiración como segundo punto de medición para la regulación de la chapaleta de temperatura y de la turbina (págs. 48-49).

## Tipos y características

Sensor térmico instalado directamente en la canalización de aspiración de aire fresco (pág. 48). Susceptible de autodiagnóstico (pág. 48).

## Principio de funcionamiento

Emite la lectura de temperatura de la corriente de aire de entrada hacia la unidad de control (pág. 48). La unidad de control compara esta señal con la del sensor G17 del armazón frontal y asume la cifra más baja de ambas para los cálculos de regulación (págs. 48-49).

## Anomalías frecuentes

- Interrupción de la señal por fallo del elemento sensor (pág. 48).

## Comportamiento en avería

Al ausentarse la señal de G89, la unidad de control utiliza el valor de medición del sensor de temperatura exterior frontal G17 (pág. 48).

## Cómo comprobarlo

Consultar la memoria de averías del sistema mediante autodiagnóstico (pág. 48).
