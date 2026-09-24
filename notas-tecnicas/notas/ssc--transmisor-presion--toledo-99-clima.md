---
id: ssc.transmisor-presion.toledo-99-clima
modulo: ssc
unidad: clima
nt: 343
tipo: elemento
clase: componente
titulo: "Transmisor de presión electrónico"
codigo: "G65"
menu: "Transmisor de presión electrón G65"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "Toledo 99 CLIMA.pdf, págs. 45-46"
relacionados: ["unidad-control-climatizador", "valvula-expansion"]
palabras: ["G65", "transmisor piezorresistivo", "silicio", "12 V", "regulación de ralentí"]
---

## Misión

Informar de la presión instantánea del circuito frigorífico a la unidad de control del motor y a la unidad de control del aire acondicionado para regular el ralentí y proteger el sistema. (págs. 45-46).

## Tipos y características

Transmisor electrónico de presión de tipo piezorresistivo montado junto a la válvula de expansión en los motores 1.4 L y 1.6 L en sustitución del conmutador F129. Consta de un compuesto de silicio y un circuito electrónico interno. (págs. 45-46).

## Principio de funcionamiento

Trabaja con una tensión de alimentación de 12 V. Al variar la presión del circuito frigorífico, el compuesto de silicio sufre una deformación física que altera su resistencia eléctrica. El circuito electrónico convierte este cambio en distintos valores de tensión que se envían a las unidades de control. La unidad de control del motor emplea la señal para regular progresivamente el régimen de ralentí; la unidad de control del aire acondicionado la utiliza para accionar las velocidades del ventilador del radiador y para desconectar el acoplamiento magnético por alta o baja presión. (págs. 45-46).

## Valores de trabajo

- Tensión de alimentación: 12 V. (pág. 45).

## Comportamiento en avería

En caso de avería del transmisor G65, el sistema de aire acondicionado se desconecta automáticamente. (pág. 46).
