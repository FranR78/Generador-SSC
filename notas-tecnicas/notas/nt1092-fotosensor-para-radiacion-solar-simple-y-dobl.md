---
id: ssc.sin-clasificar.fotosensor-para-radiacion-solar-simple-y-doble
modulo: ssc
unidad: sin-clasificar
nt: 1092
titulo: "Fotosensor Para Radiación Solar (Simple Y Doble)"
ubicacion: "Parte central del tablero de instrumentos / rejilla de salida de aire hacia el parabrisas"
aplicacion: "Climatizadores automáticos (simple en monozona, doble en sistemas bizona)"
menu: "Fotosensor Para Radiación Solar (Simpl"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la intensidad y el ángulo de incidencia de los rayos solares para corregir el cálculo de la temperatura interior, la mezcla de aire y la velocidad de la turbina.

## Principio de funcionamiento

Fotodiodo protegido por un elemento óptico apantallador. Cuando la radiación incide oblicuamente (provocando mayor sensación térmica en los ocupantes), la óptica canaliza más luz al fotodiodo, aumentando la intensidad de corriente que lo atraviesa y modificando la tensión de salida.

## Características

Fotodiodo (o doble fotodiodo en bizona) alojado en carcasa con filtro y elemento óptico. Alimentado a 5 V por la UCE.

## Valores de trabajo

* Tensión de alimentación desde la UCE: 5 V.
* Tensión de salida con luz intensa: Elevación de tensión hasta un valor próximo a los 3 V (medido con osciloscopio).

## Anomalías frecuentes

Interrupción del cableado, suciedad en la lente exterior o sustitución del parabrisas atérmico original por uno convencional sin recalibrar.

## Comportamiento en avería

En fotosensor doble, si falla un fotodiodo, la UCE adopta la señal del operativo. Si fallan ambos (o en sensor simple), la UCE asume un valor fijo sustitutivo de radiación intermedia dentro de su escala.

## Cómo comprobarlo

Verificar la llegada de 5 V con el polímetro. Conectar osciloscopio a la salida de señal y aplicar una fuente de luz intensa sobre el sensor: la tensión debe aumentar progresivamente hasta aproximarse a 3 V.

## Imágenes requeridas

- Estructura interna del fotosensor con fotodiodo y elemento óptico — Fuente: Nº10. Clima electrónica.pdf, pág. 107
- Verificación con osciloscopio de la señal del fotosensor al acercar luz intensa — Fuente: Nº10. Clima electrónica.pdf, pág. 108
