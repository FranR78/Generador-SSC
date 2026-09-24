---
id: ssc.unidad-control-climatizador.reles.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 585
tipo: elemento
clase: componente
titulo: "Unidad de control del aire acondicionado"
codigo: "J293"
menu: "Unidad de control del aire aco J293"
grupo: "Control de climatización"
clave: unidad-control-climatizador
variante: reles
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 29"
relacionados: ["embrague-compresor", "electroventilador-condensador", "presostato"]
palabras: ["J293", "módulo de relés", "acoplamiento magnético", "velocidades electroventiladores"]
---

## Misión

Gobernar la alimentación eléctrica de alta potencia del acoplamiento magnético N25 y gestionar la activación de las dos velocidades de los electroventiladores V7/V35. (pág. 29)

## Tipos y características

Módulo electromecánico con etapas de potencia y relés integrado en la caja de aguas / vano motor. (pág. 29)

## Principio de funcionamiento

- **Gobierno del compresor:** Al recibir la señal de activación enviada por la unidad J255 (pasando previamente por el presostato F129/G65 y el termostato F38) y constatar la ausencia de señal de corte por parte de la UCE del motor, conecta el relé interno para alimentar el acoplamiento N25. (pág. 29)
- **Gobierno de ventiladores:** Activa la 1ª velocidad al conectar el compresor o al recibir señal del termocontacto F18 (95 ºC). Activa la 2ª velocidad si la presión del gas supera los 16 bares (señal de F129/G65) o si la temperatura del agua alcanza los 105 ºC (señal de F18). (pág. 29)

## Valores de trabajo

- Tensión de alimentación: 12 V (protegido por fusibles de potencia S164 y S180). (pág. 32)

## Comportamiento en avería

- Incapacidad para accionar el acoplamiento electromagnético del compresor. (pág. 29)
- Fallo en la activación de las velocidades de los electroventiladores de refrigeración. (pág. 29)

## Cómo comprobarlo

Comprobación de tensiones de entrada de señales en el conector y salidas hacia N25 y V7/V35. (págs. 29, 32)

## Imágenes requeridas

- Diagrama de bloques funcional de las entradas y salidas de la unidad J293 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 29
