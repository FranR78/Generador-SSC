---
id: ssc.sensor-temperatura-exterior.g17.termosensores-a5
modulo: ssc
unidad: clima
nt: 181
tipo: elemento
clase: componente
titulo: "Sensor de temperatura exterior"
codigo: "G17"
menu: "Sensor de temperatura exterior G17"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
variante: g17
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "Audi"
fuentes: "TERMOSENSORES A5.pdf, págs. 82"
relacionados: ["unidad-control-climatizador", "compresor"]
palabras: ["G17", "J519", "J285", "J255", "ECON", "frontal", "paragolpes"]
---

## Misión

Suministrar la lectura de la temperatura exterior para el análisis y regulación del sistema de climatización en las distintas unidades de control del vehículo (pág. 82).

## Tipos y características

Sensor único ubicado en la zona frontal del vehículo, situado detrás del paragolpes y directamente por delante del condensador (pág. 82).

## Principio de funcionamiento

Captura la temperatura exterior y envía sus señales a la unidad de control de la red de a bordo J519 (pág. 82). A través de la red CAN-Bus, la información se distribuye desde la UCE J519 hacia la unidad de control con cuadro de instrumentos J285 y a la unidad de control para Climatronic J255 (pág. 82).

## Anomalías frecuentes

- Avería del sensor G17 registrada en el sistema de control (pág. 82).

## Comportamiento en avería

Al averiarse el sensor G17, el sistema activa automáticamente la función ECON e ilumina su LED indicador, señalizando que el compresor del climatizador queda desactivado y que el climatizador automático deja de marchar (pág. 82).
