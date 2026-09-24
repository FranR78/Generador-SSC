---
id: ssc.sensor-temperatura-exterior.conducto-aspiracion.regulacion-del-sistema
modulo: ssc
unidad: clima
nt: 502
tipo: elemento
clase: componente
titulo: "Termosensor en el conducto de aspiración de aire fresco"
codigo: "G89"
menu: "Termosensor en el conducto de  G89"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
variante: conducto-aspiracion
area: climatizacion
sistema: "control-climatizacion"
fuentes: "Regulación del Sistema.pdf, págs. 48-49"
relacionados: ["unidad-control-climatizador", "sensor-temperatura-exterior"]
palabras: ["entrada de aire", "segundo punto de medición", "valor más bajo"]
---

## Misión

Registrar la temperatura exterior efectiva directamente en el canal de entrada como segundo punto de medición para la gestión de la posición de la chapaleta de temperatura y la velocidad de la turbina de aire. (pág. 48-49)

## Tipos y características

Instalado directamente en el conducto de aspiración de aire fresco. La unidad de control procesa siempre el valor más bajo registrado entre el termosensor G17 y el G89. (pág. 48-49)

## Comportamiento en avería

Si se ausenta la señal, se utiliza el valor de medición del primer termosensor G17 instalado en el armazón delantero. En caso de fallo doble de ambos sensores exteriores, el sistema adopta el valor supletorio de +10 ºC y anula la recirculación de aire. (pág. 49)

## Cómo comprobarlo

Es susceptible de autodiagnóstico a través de la memoria de averías de la unidad de control. (pág. 49)
