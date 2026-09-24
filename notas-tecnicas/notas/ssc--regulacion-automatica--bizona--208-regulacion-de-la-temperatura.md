---
id: ssc.regulacion-automatica.bizona.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 106
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Distribución del aire dividida para regulación bizona"
menu: "Distribución del aire dividida para re"
grupo: "Distribución de aire"
clave: regulacion-automatica
variante: bizona
area: climatizacion
sistema: "distribucion-aire"
fuentes: "208. Regulación de la temperatura.pdf, págs. 58-59"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["bizona", "flujo dividido", "chapaleta temperatura izquierda", "chapaleta temperatura derecha", "Audi A6"]
---

## Objeto

Permitir el ajuste de temperatura independiente y diferenciado para las zonas izquierda y derecha del habitáculo mediante la división del caudal de aire en la carcasa del climatizador (págs. 58-59).

## Fundamento

Regulación del caudal de aire en el lado del aire mediante dos chapaletas de mezcla independientes (izquierda y derecha) accionadas por servomotores individuales (págs. 58-59).

## Desarrollo

En esta arquitectura (ejemplo Audi A6), el caudal de aire pasa de forma común por el evaporador e intercambiador de calor, pero en la carcasa de distribución posterior se divide en dos canales (lado izquierdo y lado derecho) (págs. 58-59).
Cada canal dispone de su propia chapaleta de mezcla:
- Servomotor para chapaleta de temperatura izquierda V158 (con potenciómetro G220) (págs. 46, 58).
- Servomotor para chapaleta de temperatura derecha V159 (con potenciómetro G221) (págs. 46, 58).
- Transmisores de temperatura de salida en aireadores izquierdo G150 y derecho G151 (pág. 46).
La unidad de control J255 analiza las selecciones de ambos lados (ajustables entre 18 ºC y 29 ºC) y posiciona de forma independiente ambas chapaletas para dosificar la proporción de aire frío y caliente hacia cada lado del habitáculo (págs. 58-59).

## Valores de referencia

- Rango de selección de temperatura independiente por lado: de 18 ºC a 29 ºC (pág. 59).

## Errores de concepto frecuentes

- Asumir que la regulación bizona requiere dos evaporadores independientes en lugar de dividir el caudal de aire tratado mediante chapaletas dobles (págs. 58-59).

## Imágenes requeridas

- Sección de la carcasa de distribución de aire dividida en lados izquierdo y derecho con sus respectivas chapaletas de temperatura — Fuente: 208. Regulación de la temperatura.pdf, pág. 58
