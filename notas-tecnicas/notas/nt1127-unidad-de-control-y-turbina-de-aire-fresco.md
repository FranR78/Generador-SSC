---
id: ssc.sin-clasificar.unidad-de-control-y-turbina-de-aire-fresco-2
modulo: ssc
unidad: sin-clasificar
nt: 1127
titulo: "Unidad De Control Y Turbina De Aire Fresco"
codigo: "J126 (Unidad de control para turbina de aire fresco) / V2 (Motor de la turbina de aire fresco)"
ubicacion: "Instalados en la carcasa de entrada de aire de la unidad climática, tras la guantera"
aplicacion: "Climatronic de SEAT León y plataforma VAG"
menu: "Unidad De Control Y Turbina De J126 (Unidad de control para turbina de aire fresco) / V2 (Motor de la turbina de aire fresco)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

La turbina V2 impulsa el caudal de aire forzado a través del evaporador y del radiador de calefacción hacia el habitáculo. La unidad J126 regula de forma electrónica y progresiva la velocidad de giro del motor V2 en función de las órdenes recibidas de la UCE Climatronic J255.

## Principio de funcionamiento

La unidad de control de la turbina J126 es una etapa de potencia electrónica por transistores. Recibe una señal de control desde la UCE Climatronic J255 a través del conector T16f/3 y regula la corriente continua aplicada al motor eléctrico V2 mediante modulación electrónica, conectada a la masa principal en el punto 47/374.

## Características

* Módulo de potencia J126 con disipador de aluminio integrado en el canal de aire, conector de 6 vías (T6t) con cables de sección 4,0 mm² (rojo/blanco positivo directo, marrón masa) y líneas de control de 0,35 mm².
* Motor eléctrico V2 de corriente continua de alta potencia.

## Valores de trabajo

* Tensión de alimentación de potencia: +12 V directos (línea de cable de 4,0 mm² ro/ws).
* Sección de cables de potencia: 4,0 mm² (para soportar el elevado consumo de corriente del motor V2).

## Anomalías frecuentes

* J126: Cortocircuito o destrucción del transistor de potencia por sobrecalentamiento debido a filtro de habitáculo atascado.
* V2: Desgaste de las escobillas de carbono del motor o agarrotamiento del eje por suciedad/hojas.

## Comportamiento en avería

Si la unidad J126 o el motor V2 fallan, la turbina deja de girar. Sin caudal de aire, el sistema de climatización se deshabilita por completo y no produce ni calefacción ni aire frío.

## Cómo comprobarlo

Verificar la presencia de +12 V y masa en los cables de 4,0 mm² de J126, comprobar la señal de mando procedente del conector T16f/3 de J255 y alimentar directamente el motor V2 a 12 V para comprobar su giro libre.

## Imágenes requeridas

- Esquema eléctrico de potencia de la unidad J126 y la turbina de aire fresco V2 con conexiones CAN-Bus de J255 — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 6 (León)
