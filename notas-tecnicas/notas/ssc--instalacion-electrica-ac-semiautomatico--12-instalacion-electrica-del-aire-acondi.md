---
id: ssc.instalacion-electrica-ac-semiautomatico.12-instalacion-electrica-del-aire-acondi
modulo: ssc
unidad: clima
nt: 410
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Instalación eléctrica de aire acondicionado semiautomático con sensor MAP y compresor de cilindrada variable"
menu: "Instalación eléctrica de aire acondici"
grupo: "Control de climatización"
clave: instalacion-electrica-ac-semiautomatico
area: climatizacion
sistema: "control-climatizacion"
fuentes: "12. Instalación eléctrica del aire acondicionado.pdf, págs. 95"
relacionados: ["transmisor-presion", "valvula-reguladora-compresor", "unidad-control-climatizador"]
palabras: ["semiautomático", "sensor map", "electroválvula", "compresor sin embrague", "uce climatizador"]
---

## Objeto

Describir la arquitectura eléctrica y de control de un sistema de climatización semiautomático con compresor regulado mediante electroválvula interna (sin embrague electromagnético) y sensor de presión MAP. (pág. 95)

## Fundamento

Sustituye el acoplamiento mecánico por embrague y los presostatos de contactos por una electroválvula de regulación de cilindrada modulada por la UCE del climatizador y un sensor de presión continua (MAP) situado en la línea de alta. (pág. 95)

## Desarrollo

El sistema semiautomático integra la señalización de múltiples sensores y actuadores gestionados centralizadamente:
1. Regulación del compresor: el compresor carece de embrague electromagnético y gira continuamente movido por el motor. La UCE del climatizador regula su rendimiento mediante una electroválvula proporcional de cilindrada.
2. Medición de presión (Sensor MAP): transmite una señal de presión continua de la línea de alta a la UCE de climatización y a la UCE de motor para ajustar la cilindrada y gestionar la velocidad de los electroventiladores.
3. Red de sensores de temperatura: consta de sensor de temperatura exterior, sensor de temperatura de salida del evaporador, sensores en difusores central y zona de pies.
4. Gestión de trampillas: motores eléctricos con potenciómetros de posición de retorno para la trampilla de temperatura (mezcla) y la trampilla de recirculación.
5. Módulo de potencia del ventilador: regulador electrónico de velocidad para la turbina de aire fresco.
6. Interconexión de unidades: la UCE del climatizador intercambia datos con la UCE del motor, la UCE de la red de a bordo y el cuadro de instrumentos para la gestión de cargas y la diagnosis. (pág. 95)

## Errores de concepto frecuentes

Pensar que la ausencia de corriente en el compresor significa que este se detiene por completo. Al ser un compresor sin embrague, gira siempre mecánicamente y la electroválvula simplemente ajusta su rendimiento al mínimo. (págs. 95, 97)

## Imágenes requeridas

- Esquema eléctrico de sistema semiautomático con sensor MAP, UCE de climatización y compresor con electroválvula de regulación — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 95
