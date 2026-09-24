---
id: ssc.servomotor-trampilla.temperatura.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 583
tipo: elemento
clase: componente
titulo: "Servomotor de la trampilla de temperatura"
codigo: "V68"
menu: "Servomotor de la trampilla de  V68"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: temperatura
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: unidad-climatizadora
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 22"
relacionados: ["sensor-posicion-trampilla", "unidad-control-climatizador"]
palabras: ["V68", "G92", "corriente continua", "giro limitado", "tornillo sin fin"]
---

## Misión

Accionar mecánicamente el posicionamiento de la trampilla de mezcla de temperatura dentro de la unidad climática. (pág. 22)

## Tipos y características

Motor eléctrico de corriente continua de giro limitado mediante engranaje de tornillo sin fin. Va ubicado en la parte inferior de la unidad climática e integra en su interior el potenciómetro de posición G92. (pág. 22)

## Principio de funcionamiento

Recibe alimentación de corriente continua desde la unidad de control J255. La unidad invierte la polaridad de los bornes de alimentación para modificar el sentido de giro del motor, desplazando la trampilla hacia la posición de aire más caliente o más frío. (pág. 22)

## Valores de trabajo

- Tensión de excitación: 12 V con polaridad reversible. (pág. 22)

## Comportamiento en avería

- La trampilla permanece inmovilizada en la posición en que se produjo el fallo. (pág. 22)
- La unidad de control reduce el régimen del soplador de aire para limitar la entrada incontrolada de flujo térmico. (pág. 22)

## Cómo comprobarlo

Mediante la función "03" (diagnosis de actuadores) y función "04" (ajuste básico en grupo 002) con el equipo de autodiagnosis. (págs. 36-37)

## Mantenimiento

Tras la sustitución del servomotor V68 o de la unidad de control J255, es obligatorio realizar el ajuste básico (grupo 002) para memorizar los topes mecánicos. (pág. 36)

## Imágenes requeridas

- Despiece del motor V68 con su mecanismo de tornillo sin fin, rueda de transmisión y potenciómetro G92 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 22
