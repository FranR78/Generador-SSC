---
id: ssc.sensor-temperatura-exterior.g17.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 98
tipo: elemento
clase: componente
titulo: "Termosensor de temperatura exterior"
codigo: "G17"
menu: "Termosensor de temperatura ext G17"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
variante: g17
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "VW"
fuentes: "208. Regulación de la temperatura.pdf, págs. 48-49"
relacionados: ["unidad-control-climatizador", "sensor-temperatura-exterior"]
palabras: ["G17", "armazón anterior", "valor supletorio 10 ºC", "valor más bajo"]
---

## Misión

Detectar la temperatura exterior efectiva en la parte frontal del vehículo para la gestión de la chapaleta de temperatura y la velocidad de la turbina de aire (págs. 48-49).

## Tipos y características

Sensor térmico instalado en el armazón anterior del vehículo (pág. 48). Trabaja en combinación con un segundo sensor situado en el conducto de aspiración G89 (págs. 48-49). Susceptible de autodiagnóstico (pág. 48).

## Principio de funcionamiento

Mide la temperatura ambiente exterior y envía la señal a la unidad de control J255 (pág. 48). La unidad de control compara la lectura con el sensor G89 y procesa siempre el valor más bajo de ambos para evitar mediciones erróneas por calor radiado del motor (págs. 48-49).

## Valores de trabajo

- Valor supletorio por fallo de señal de G17 y G89: +10 ºC (pág. 48).

## Anomalías frecuentes

- Ausencia de señal por avería del sensor o corte de cableado (pág. 48).

## Comportamiento en avería

Si falla la señal de G17, la unidad de control adopta la medición del segundo sensor (G89 en el conducto de aspiración) (pág. 48). Si también falla G89, se aplica un valor supletorio fijo de +10 ºC y se bloquea el modo operativo de recirculación de aire (pág. 48).

## Cómo comprobarlo

Mediante la función de autodiagnóstico de la unidad de control del climatizador (pág. 48).
