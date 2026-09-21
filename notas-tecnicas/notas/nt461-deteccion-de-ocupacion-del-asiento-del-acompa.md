---
id: ssc.sin-clasificar.deteccion-de-ocupacion-del-asiento-del-acompanante
modulo: ssc
unidad: sin-clasificar
nt: 461
tipo: proceso
subtipo: fundamento
titulo: "Detección De Ocupación Del Asiento Del Acompañante"
menu: "Detección De Ocupación Del Asiento Del"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la lógica de funcionamiento y evaluación de la ocupación del asiento delantero del acompañante para determinar la activación o desactivación del airbag del acompañante.

## Fundamento

El sistema mide de manera continua la variación de la capacidad eléctrica (capacitancia) del sensor G128 alojado en la banqueta del asiento. La unidad de control J706 realiza esta medición de forma cíclica para determinar si el asiento está ocupado por un adulto o por una silla infantil. La información se transmite a través del bus LIN a la unidad de control del airbag J234, la cual activa o desactiva el airbag e ilumina el testigo K145.

## Desarrollo

- El sensor capacitivo G128 detecta la presencia y masa sobre el acolchado del asiento del acompañante.  
- La unidad J706 mide cíclicamente los cambios de capacitancia recibidos desde el sensor G128 mediante un cable coaxial.  
- La unidad J706 procesa la información mediante un software adaptado específicamente a cada tipo de asiento e informa a la UCE de airbag J234 por medio del bus LIN.  
- La UCE de airbag J234 activa o desactiva la bolsa de aire del acompañante y conmuta el estado del testigo indicador K145 ("PASSENGER AIRBAG OFF").

## Interpretación y errores frecuentes

- Montar una unidad J706 que no corresponda al modelo exacto de asiento: el programa informático (software) de la unidad de control está adaptado de forma específica a cada tipo de asiento.

## Seguridad y normativa

Para cualquier trabajo de reparación en el sistema de detección de ocupación del asiento, se debe recurrir obligatoriamente a la Localización Guiada de Averías, al catálogo ETKA y a la información técnica de servicio actualizada.

## Imágenes requeridas

- Esquema de interconexión entre la unidad J706, el sensor G128 por cable coaxial, la UCE J234 por bus LIN y el testigo K145 — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 22
