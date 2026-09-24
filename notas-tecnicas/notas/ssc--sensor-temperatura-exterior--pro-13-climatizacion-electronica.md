---
id: ssc.sensor-temperatura-exterior.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 153
tipo: elemento
clase: componente
titulo: "Sensor de temperatura exterior y de aire aspirado"
menu: "Sensor de temperatura exterior y de ai"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
area: climatizacion
sistema: "control-climatizacion"
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 103"
relacionados: ["unidad-control-climatizador"]
palabras: ["NTC", "paragolpes", "retrovisor", "canal aspiración", "valor más bajo", "10 ºC"]
---

## Misión

Medir la temperatura del aire ambiente exterior y la temperatura en el canal de entrada de aire fresco a la unidad climática para la regulación de las trampillas y de la turbina (pág. 103).

## Tipos y características

Sensores formados por resistencias de coeficiente de temperatura negativo (NTC). El sensor exterior se instala en el paragolpes delantero o en el espejo retrovisor derecho; el sensor de aire aspirado se ubica en el canal de entrada de aire (pág. 103).

## Principio de funcionamiento

Modifican su resistencia eléctrica de forma inversamente proporcional a la temperatura (pág. 103). La UCE del climatizador recibe ambas señales y suele utilizar el valor más bajo de las dos para realizar los cálculos de regulación de la trampilla de temperatura, recirculación, velocidad de la turbina e indicación en el cuadro de instrumentos (pág. 103). En sistemas actuales, el sensor exterior comunica la señal al cuadro de instrumentos y este la transmite por Can-Bus a la UCE del climatizador (pág. 103).

## Valores de trabajo

- Valor supletorio fijo por fallo de ambos sensores: +10 ºC (pág. 103).

## Anomalías frecuentes

- Registradas en la memoria de autodiagnóstico de la UCE (pág. 103).

## Comportamiento en avería

Si se avería uno de los dos sensores, la UCE adopta la señal del sensor que funciona (pág. 103). Si fallan ambos, se aplica el valor sustitutivo de +10 ºC (pág. 103). Si falla el sensor exterior, desaparece la indicación en el cuadro de instrumentos (pág. 103). En sistemas con un único sensor exterior, su fallo puede cancelar el acoplamiento magnético del compresor (pág. 103).

## Cómo comprobarlo

A través del volumen de diagnóstico del equipo de diagnosis conectado a la UCE (pág. 103).
