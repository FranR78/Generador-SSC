---
id: ssc.presostato.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 194
tipo: elemento
clase: componente
titulo: "Conmutador de presión para aire acondicionado"
codigo: "F129"
menu: "Conmutador de presión para air F129"
grupo: "Control de climatización"
clave: presostato
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 16-17"
relacionados: ["unidad-control-aire-acondicionado", "electroventilador-condensador"]
palabras: ["F129", "conmutador de presión", "presostato", "2 bares", "16 bares", "32 bares", "motores diésel"]
---

## Misión

Proteger el circuito frigorífico frente a presiones anormalmente altas o bajas y controlar la activación de las velocidades del electroventilador del radiador en motorizaciones diésel. (págs. 16-17).

## Tipos y características

Presostato cuádruple de 4 contactos instalado en la tubería de alta presión junto a la válvula de expansión en vehículos con motor diésel. (págs. 16-17).

## Principio de funcionamiento

Consta de dos interruptores internos independientes:
1. Interruptor de alta/baja presión: normalmente cerrado. Abre sus contactos si la presión desciende de 2 bares (falta de gas) o supera los 32 bares (sobrepresión), interrumpiendo la señal de conexión hacia la unidad J293 para desconectar el compresor.
2. Interruptor de presión media: normalmente abierto. Cierra sus contactos cuando la presión alcanza los 16 bares, enviando un positivo de borne 15 a la unidad J293 para activar la 2ª velocidad del ventilador. (págs. 16-17).

## Valores de trabajo

- Presión mínima de desconexión: < 2 bares (contacto abre).
- Presión máxima de desconexión: > 32 bares (contacto abre).
- Presión de conmutación de velocidad de ventilador: 16 bares (contacto cierra). (pág. 16).

## Anomalías frecuentes

Agarrotamiento de los contactos internos, fugas de fluido en la rosca de montaje o fallos de conexión eléctrica. (págs. 16-17).

## Comportamiento en avería

No tiene función sustitutiva. Si el contacto de baja/alta se queda abierto, el compresor no se conecta jamás. Si no cierra el de presión media, la 2ª velocidad del ventilador no entra por presión de refrigerante. (págs. 16-17).
