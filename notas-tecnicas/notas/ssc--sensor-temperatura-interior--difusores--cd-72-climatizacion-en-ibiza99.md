---
id: ssc.sensor-temperatura-interior.difusores.cd-72-climatizacion-en-ibiza99
modulo: ssc
unidad: clima
nt: 591
tipo: elemento
clase: componente
titulo: "Transmisores de temperatura del aire de entrada"
codigo: "G191 / G192"
menu: "Transmisores de temperatura de G191 / G192"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
variante: difusores
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: distribucion-aire
marca: "SEAT"
fuentes: "CD 72. Climatización en Ibiza99.pdf, págs. 12-13"
relacionados: ["unidad-control-climatizador"]
palabras: ["G191", "G192", "difusor central", "difusor pies", "NTC", "valor medio"]
---

## Misión

Medir la temperatura del aire tratado impulsado hacia las salidas del habitáculo para permitir la regulación de la mezcla en la unidad climática. (págs. 12-13)

## Tipos y características

Pareja de termistores tipo NTC ubicados en los conductos de impulsión:
- **Transmisor G191:** Instalado en el difusor central. (pág. 13)
- **Transmisor G192:** Instalado en el difusor de la zona de los pies. (pág. 13)

## Principio de funcionamiento

Varían su resistencia interna según la temperatura del aire que fluye por los difusores. La unidad del autoclima calcula el valor medio de ambas mediciones para ajustar la posición de la trampilla de temperatura de aire. (págs. 12-13)

## Valores de trabajo

- Campo de medición de las NTC: de -40 ºC a +85 ºC. (pág. 13)

## Comportamiento en avería

- La unidad de control desactiva la regulación automática, inmovilizando los parámetros funcionales en el estado previo a la avería. (pág. 13)
- Parpadean todos los dígitos del display de la consola central al conectar el autoclima. (pág. 13)

## Cómo comprobarlo

A través de la función "08" (bloque de valores de medición, grupo 006, campos 2 y 3) del equipo de autodiagnóstico. (pág. 37)

## Imágenes requeridas

- Ubicación e instalación de los transmisores de temperatura G191 en el difusor central y G192 en la zona de pies — Fuente: CD. Climatización en Ibiza99.pdf, pág. 13
