---
id: ssc.sin-clasificar.fotosensores-de-radiacion-solar-y-sensores-de-temperatura-en-canales-de-aire
modulo: ssc
unidad: sin-clasificar
nt: 1125
titulo: "Fotosensores De Radiación Solar Y Sensores De Temperatura En Canales De Aire"
codigo: "G107 / G134 (Fotosensores) | G89 / G150 / G151 / G263 (Sensores térmicos)"
ubicacion: "G107 y G134 en el centro del salpicadero; G89 en canal de aspiración de aire fresco; G150/G151 en difusores de aire izquierdo/derecho; G263 en la salida del evaporador"
aplicacion: "Climatronic bizona en SEAT León y gama VAG"
menu: "Fotosensores De Radiación Sola G107 / G134 (Fotosensores) | G89 / G150 / G151 / G263 (Sensores térmicos)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la intensidad de la radiación solar (G107/G134) y las temperaturas del aire en el canal de aspiración (G89), en las salidas de los difusores izquierdo/derecho (G150/G151) y a la salida del evaporador (G263) para la regulación precisa de la mezcla térmica bizona.

## Principio de funcionamiento

Los fotosensores G107 y G134 utilizan fotodiodos que varían su conducción según la luz solar recibida. Los sensores G89, G150, G151 y G263 son resistencias con Coeficiente de Temperatura Negativo (NTC) cuya resistencia ohmica disminuye al aumentar la temperatura. Todos comparten una línea común de masa de sensores (L7 / conector T16g/10 de J255).

## Características

* Fotosensores G107 y G134: Conectados a los pines T20c/9 y T20c/3 de la UCE J255.
* Sensores NTC G89, G150, G151 y G263: Conexión de 2 vías conectados a la UCE Climatronic J255 (G89 a T20c/11; G150 a T20c/13; G151 a T20c/14; G263 a T20c/17) y masa común en empalme L7.

## Valores de trabajo

* Tensión de referencia de sensores: Alimentación desde la UCE Climatronic J255 a través del conector T20c y T16g.

## Anomalías frecuentes

Corte o cortocircuito en el mazo de cables del salpicadero, o deriva de las resistencias NTC por envejecimiento térmico.

## Comportamiento en avería

Si falla G263 (evaporador), la UCE toma la presión del transmisor G65 para calcular la evaporación. Si fallan G150 o G151, se cancela la regulación automática independiente en el lado afectado. Si falla G89, se adopta la lectura del sensor de temperatura exterior.

## Cómo comprobarlo

Medir la resistencia de los sensores NTC con un polímetro desconectado y comparar con la curva de temperatura, o consultar las lecturas en tiempo real en los bloques de valores de medición con la máquina de diagnosis.

## Imágenes requeridas

- Esquema de interconexión del mazo de cables L7 con los fotosensores G107/G134 y sondas NTC G89, G150, G151 y G263 — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 3 (León)
