---
id: ssc.sin-clasificar.fotosensor-para-radiacion-solar-doble
modulo: ssc
unidad: sin-clasificar
nt: 172
titulo: "Fotosensor Para Radiación Solar Doble"
codigo: "G107"
ubicacion: "Montado en la parte central superior del salpicadero, junto a la rejilla de desempañado del parabrisas"
aplicacion: "Climatizadores bizona/trizona del Audi A5 Coupé 2008"
menu: "Fotosensor Para Radiación Sola G107"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la intensidad de la radiación solar que incide sobre el lado izquierdo y derecho del habitáculo para corregir la temperatura de soplado y la distribución del caudal.

## Principio de funcionamiento

Consta de dos fotodiodos independientes orientados a izquierda y derecha bajo un elemento óptico de filtrado. La radiación solar genera una fotocorriente en los fotodiodos que altera la tensión de retorno hacia J255, permitiendo regular de forma diferenciada el lado del conductor y del acompañante.

## Características

Carcasa redonda de plástico fotofiltro oscuro con conector de 4 polos. Alimentado con tensión de referencia de 5 V desde la UCE -J255-.

## Valores de trabajo

| Parámetro | Valor numérico | Condición de medida |
|---|---|---|
| **Tensión de alimentación** | 5,0 V CC | Salida de J255 (bloque de valores 032) |
| **Lectura en bloque de valores 041** | Tensión en voltios (V) e intensidad en W/m2 | Campo 1/2 (Izq) y Campo 3/4 (Der) |

## Anomalías frecuentes

Ocultación de la lente por mapas, documentos u objetos colocados sobre el salpicadero; fallo interno de uno de los fotodiodos.

## Comportamiento en avería

La UCE adopta un valor sustitutivo fijo de radiación solar intermedia y registra el código de avería en memoria.

## Cómo comprobarlo

Acceder al bloque de valores 041 en J255. Tapar el sensor con la mano (la lectura en W/m2 debe caer a cero) y a continuación iluminar directamente con una linterna potente (la radiación en W/m2 y la tensión deben subir proporcionalmente en ambos lados).
