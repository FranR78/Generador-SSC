---
id: ssc.sin-clasificar.diagnostico-de-autoclima-inoperativo
modulo: ssc
unidad: sin-clasificar
nt: 870
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Autoclima Inoperativo"
menu: "Diagnóstico De Autoclima Inoperativo"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la redacción del proceso de localización de averías ante un fallo total de funcionamiento del sistema Autoclima. Aplica a los modelos SEAT Ibiza '99 y Córdoba '99.

## Fundamento

El funcionamiento global del Autoclima requiere la presencia de alimentación eléctrica, integridad del bus de datos serie entre el radiocasete R y la UCE J255, y ausencia de averías críticas que bloqueen la unidad de control.

## Condiciones previas

Tensión de batería de 12 V y encendido conectado (borne 15).

## Equipo y material

Lector de averías, polímetro y esquemas de cableado del vehículo.

## Desarrollo

* **Cuatro componentes principales que pueden provocar el fallo total:**
  1. Unidad de control del autoclima J255.
  2. Unidad del radiocasete R (pasarela de datos e interfaz).
  3. Fusibles de alimentación de la instalación de climatización y del radiocasete.
  4. Mazo de cables del bus de datos o fallo en la línea de masa (borne 31).
* **Proceso de localización de averías:**
  1. Verificar los fusibles de la caja central del vehículo asociados al climatizador y la radio.
  2. Conectar el equipo de diagnosis al conector T16 e intentar comunicar con la dirección 08 (Aire acondicionado).
  3. Si hay comunicación, consultar la memoria de averías (función 02) para identificar el código de fallo.
  4. Si no hay comunicación, comprobar con el polímetro las alimentaciones (+30 y +15) y la masa en la UCE J255 y en el radiocasete R.
  5. Verificar la continuidad del cable del bus serie entre el radiocasete y la UCE J255.
  6. Reparar el corte eléctrico o sustituir el elemento averiado, borrar códigos y verificar el sistema.

## Valores de referencia

| Punto de Comprobación | Valor Numérico | Condición de Validez |
| :--- | :--- | :--- |
| Alimentaciones +30 y +15 | 12 V | Medido en conectores de UCE J255 y Radiocasete R |
| Continuidad del Bus Serie | 0 Ω | Entre conector del Radiocasete R y UCE J255 |

## Interpretación y errores frecuentes

* Atribuir la falta de funcionamiento a la falta de gas refrigerante; si no hay gas el compresor no acopla, pero la electrónica y la turbina del Autoclima deben encender y funcionar.

## Verificación final

Verificar que la UCE responde al equipo de diagnosis, enciende el display y ejecuta la regulación del caudal y de la temperatura.
