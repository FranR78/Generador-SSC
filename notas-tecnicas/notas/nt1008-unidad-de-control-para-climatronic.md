---
id: ssc.sin-clasificar.unidad-de-control-para-climatronic
modulo: ssc
unidad: sin-clasificar
nt: 1008
titulo: "Unidad De Control Para Climatronic"
codigo: "J255"
ubicacion: "Consola central del salpicadero"
aplicacion: "Climatizador automático del Audi A5"
menu: "Unidad De Control Para Climatr J255"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Gobernar el sistema de climatización automática recibiendo las señales directas e indirectas de los sensores, calculando la estrategia térmica y accionando el compresor, la turbina y los servomotores de chapaletas.

## Principio de funcionamiento

Unidad electrónica de control central que procesa la información de sus sensores directos (G238 vía LIN-Bus) y los datos compartidos en el CAN Confort a través del Gateway J533 por la UCE J519 (sensor G395) y la UCE J393 (sensor G355/G458). Controla por señal eléctrica la válvula N280 del compresor.

## Características

Centralita electrónica conectada a la red CAN Confort y máster de líneas LIN-Bus hacia la unidad de turbina J126, servomotores de chapaletas y sensor de calidad del aire G238.

## Cómo comprobarlo

Interrogar la memoria de averías y los bloques de medición conectando el equipo de diagnosis al terminal para diagnósticos a través de la interfaz J533.
