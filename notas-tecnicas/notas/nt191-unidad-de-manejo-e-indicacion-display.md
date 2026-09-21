---
id: ssc.sin-clasificar.unidad-de-manejo-e-indicacion-display
modulo: ssc
unidad: clima
nt: 191
titulo: "Unidad De Manejo E Indicación (Display)"
codigo: "E87"
ubicacion: "Consola central del salpicadero"
aplicacion: "Calefacción motorizada y Autoclima"
menu: "Unidad De Manejo E Indicación  E87"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Informar sobre los parámetros de funcionamiento del autoclima o calefacción motorizada, del radiocasete y del ordenador de a bordo.

## Principio de funcionamiento

Los dígitos referentes al climatizador son excitados por la unidad del radiocasete mediante el bus de 18 cables, tras recibir previamente la información desde J255 por el bus de 1 cable. Su alimentación eléctrica procede también de la radio.

## Características

Pantalla LCD de grandes dimensiones. Existen dos variantes según se monte autoclima (indica ºC o letras) o calefacción motorizada (indica escala Cold/Hot).

## Valores de trabajo

| Tipo de equipo | Formato de indicación de temperatura |
|---|---|
| **Autoclima** | Valor numérico en ºC (modo automático) o letras (modo manual) |
| **Calefacción Motorizada** | Barras gráficas entre COLD y HOT |

## Anomalías frecuentes

Pérdida de segmentos de cristal líquido; interrupción del bus de datos de 1 cable entre J255 y la radio.

## Comportamiento en avería

Si se produce una avería en la comunicación del bus de datos entre el radiocasete y J255, los datos referentes al climatizador dejan de ser visibles en el display.

## Cómo comprobarlo

Verificar la continuidad de la línea del bus de 1 cable. En caso de avería propia del display, debe sustituirse la unidad E87 completa.
