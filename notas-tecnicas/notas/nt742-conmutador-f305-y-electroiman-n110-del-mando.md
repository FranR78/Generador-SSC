---
id: ssc.sin-clasificar.conmutador-f305-y-electroiman-n110-del-mando-del-cambio
modulo: ssc
unidad: sin-clasificar
nt: 742
titulo: "Conmutador F305 Y Electroimán N110 Del Mando Del Cambio"
codigo: "Conmutador F305 / Electroimán N110"
ubicacion: "Mecanismo del mando de la palanca selectora del cambio automático en la consola central"
aplicacion: "Mandos de cambio multitronic 0AW y automático 0B6"
menu: "Conmutador F305 Y Electroimán  Conmutador F305 / Electroimán N110"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Informar a la UCE de confort de la posición "P" para liberar eléctricamente la llave de contacto y bloquear mecánicamente la palanca selectora en posiciones "P" y "N" salvo que se pise el freno.

## Principio de funcionamiento

F305 consta de dos contactos de Reed conectados en serie con una resistencia. Cuando la palanca está en "P", dos imanes permanentes se posicionan sobre los contactos de Reed cerrándolos y enviando señal de masa a la UCE J393. El electroimán N110 acciona el perno de bloqueo: en posición "P" está sin corriente (bloqueado) y recibe corriente al pisar el freno para liberar la palanca.

## Características

Módulo compartido desmontable que integra dos ampolletas de Reed (F305) y un solenoide de bloqueo (N110) alimentado a través de conector de 4 polos.

## Valores de trabajo

* Tensión de alimentación de N110: 12 V al accionar el pedal de freno.
* Estado de F305 en posición "P": Ambos contactos de Reed cerrados (continuidad a masa hacia J393).

## Anomalías frecuentes

Caída o desplazamiento del imán permanente del soporte; impide la lectura del conmutador de Reed.

## Comportamiento en avería

Imposibilidad de extraer la llave de contacto del bombín o bloqueo permanente de la palanca selectora en posición "P".

## Cómo comprobarlo

Medir la resistencia de F305 entre sus bornes con un óhmetro situando la palanca en "P" o consultar el estado de la señal P/N en los bloques de medición con el equipo de diagnosis.

## Imágenes requeridas

- Esquema del conmutador F305 de contactos de Reed y el electroimán de bloqueo N110 — Fuente: 409_e         Audi A4 08.pdf, pág. 35
