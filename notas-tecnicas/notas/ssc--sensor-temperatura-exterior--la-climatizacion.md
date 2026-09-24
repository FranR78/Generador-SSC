---
id: ssc.sensor-temperatura-exterior.la-climatizacion
modulo: ssc
unidad: clima
nt: 291
tipo: elemento
clase: componente
titulo: "Sensores de temperatura exterior"
menu: "Sensores de temperatura exterior"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 111-112"
relacionados: ["unidad-control-climatizador", "regulacion-automatica"]
palabras: ["sensor de temperatura exterior", "NTC", "valor sustitutivo +10 ºC", "entrada de aire"]
---

## Misión

Medir la temperatura del aire atmosférico exterior para que la UEGAA posicione las trampillas de mezcla y regule la velocidad de la turbina. (págs. 111-112).

## Tipos y características

Dos resistencias NTC independientes: una montada en la parte frontal de la carrocería (paragolpes/retrovisor) y otra sobre el canal de entrada de aire fresco al evaporador. (pág. 112).

## Principio de funcionamiento

Varían su resistencia eléctrica según la temperatura del aire exterior. La UEGAA recibe ambas lecturas y procesa el valor más bajo para sus cálculos de regulación. (pág. 112).

## Valores de trabajo

Valor por defecto asignado en caso de avería de ambos sensores: +10 ºC. (pág. 112).

## Anomalías frecuentes

Corte del cableado por impactos frontales o derivación a masa. (págs. 112, 163).

## Comportamiento en avería

Si falla un sensor, la UEGAA toma la lectura del segundo. Si fallan ambos, la UEGAA asume +10 ºC fijos y se anula la función de recirculación de aire. (pág. 112).

## Cómo comprobarlo

1. Comprobar la resistencia de la NTC a distintas temperaturas ambiente. (pág. 112).
2. Consultar el valor medido en el bloque de valores de medición del equipo de diagnosis. (pág. 163).

## Mantenimiento

Asegurar que el sensor de carrocería está limpio de barro o nieve. (pág. 112).
