---
id: ssc.sin-clasificar.transmisor-de-temperatura-exterior
modulo: ssc
unidad: clima
nt: 182
titulo: "Transmisor De Temperatura Exterior"
codigo: "G17"
ubicacion: "Montado en el interior de la carcasa del retrovisor exterior derecho (lado del acompañante)"
aplicacion: "SEAT Ibiza y Córdoba 1999 con Autoclima o radio con pantalla"
menu: "Transmisor De Temperatura Exte G17"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Captar la temperatura del aire ambiente exterior para mostrarla en el display y permitir a las UCEs regular la temperatura del aire y la velocidad de la turbina.

## Principio de funcionamiento

Resistencia NTC conectada a la unidad del radiocasete R. La radio procesa el valor, lo muestra en la pantalla e informa a la UCE de climatización J255.

## Características

Sensor termistor estanco integrado en el conjunto del espejo retrovisor exterior derecho.

## Valores de trabajo

| Parámetro / Condición | Valor de referencia | Estado del sistema |
|---|---|---|
| **Lectura normal en display** | Grados ºC | Procesado por el radiocasete |
| **Valor de sustitución en Autoclima** | **20 ºC constante** | Adoptado si falla la señal de G17 |

## Anomalías frecuentes

Rotura o corte en el mazo de cables del retrovisor; sulfatación de contactos.

## Comportamiento en avería

El display muestra tres rayas '---' en la zona donde se indica la temperatura exterior. El autoclima asume 20 ºC fijos y elimina la señal de conexión del acoplamiento magnético. Todos los dígitos del display parpadean.

## Cómo comprobarlo

Consultar el bloque de valores de medición grupo 006 campo 1 en el equipo de diagnosis. Medir la continuidad y resistencia de la sonda con un polímetro.
