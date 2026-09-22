---
id: ssc.sin-clasificar.diagnostico-de-parpadeo-en-display-y-fallo-de-comunicacion-en-autoclima
modulo: ssc
unidad: sin-clasificar
nt: 853
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Parpadeo En Display Y Fallo De Comunicación En Autoclima"
menu: "Diagnóstico De Parpadeo En Display Y F"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la metodología de diagnóstico ante la presencia de dígitos parpadeantes en el display del aire acondicionado y la pérdida de comunicación entre la unidad del autoclima y el radiocasete. Aplica a los modelos SEAT Ibiza '99 y Córdoba '99.

## Fundamento

El parpadeo continuo de los dígitos en la pantalla AC indica la presencia de averías memorizadas en la unidad de control del autoclima. Asimismo, la falta de comunicación serie entre el radiocasete R y la UCE del autoclima impide la transmisión de órdenes de usuario e indicación de datos.

## Condiciones previas

Vehículo en taller con contacto encendido (+15) y conector de diagnosis T16 accesible.

## Equipo y material

Lector de averías / equipo de diagnosis (VAG 1551 o equivalente).

## Desarrollo

* **Síntomas de avería:**
  - Los dígitos de la pantalla AC parpadean continuamente al solicitar el aire acondicionado y el sistema no enfría.
  - El display no indica datos del autoclima o no reacciona al presionar los pulsadores.
  - El sistema conmuta automáticamente al modo automático de emergencia.
* **Causas probables:**
  - Presencia de un código de avería memorizado en la UCE de climatización.
  - Ausencia de comunicación o interrupción de la línea de bus entre la unidad del autoclima y el radiocasete.
  - Transmisor de temperatura exterior G17 o sondas térmicas defectuosas.
* **Procedimiento de diagnosis:**
  1. Conectar el lector de averías al conector de diagnosis del vehículo.
  2. Interrogar la memoria de averías mediante la función "02" en la dirección del climatizador.
  3. Comprobar las averías registradas (esporádicas /SP o permanentes).
  4. Verificar el cableado del bus serie entre la unidad del autoclima y la unidad del radiocasete.
  5. Reparar la causa del fallo o restablecer la comunicación, borrar la memoria con la función "05" y argumentar los motivos de la avería al cliente.

## Valores de referencia

| Parámetro / Síntoma | Estado de Indicación | Comportamiento del Sistema |
| :--- | :--- | :--- |
| Parpadeo de dígitos en pantalla AC | Parpadeo continuo al encender | Avería memorizada en UCE; compresor inhibido |
| Pérdida de comunicación con radiocasete | Display sin datos / no responde | Conmuta a modo automático de emergencia |

## Interpretación y errores frecuentes

* Intentar reparar el compresor o recargar gas sin consultar previamente la función "02" del lector de averías cuando la pantalla está parpadeando.
* Reemplazar la pantalla del display cuando la falta de indicación se debe a un fallo de comunicación en el bus con el radiocasete.

## Verificación final

Verificar que los dígitos del display permanecen fijos sin parpadear al conectar el aire acondicionado y que el sistema responde a la presión de los pulsadores.

## Imágenes requeridas

- Diagrama de interconexión y fallo de comunicación entre la unidad del autoclima y el radiocasete — Fuente: ce0.pdf, pág. 13
