---
id: ssc.sin-clasificar.unidad-de-control-para-amortiguacion-regulada-y-valvulas-de-ajuste
modulo: ssc
unidad: sin-clasificar
nt: 743
titulo: "Unidad De Control Para Amortiguación Regulada Y Válvulas De Ajuste"
codigo: "Unidad de control J250 / Válvulas N336, N337, N338, N339"
ubicacion: "UCE J250 en la parte derecha del maletero; válvulas N336-N339 montadas directamente en cada amortiguador"
aplicacion: "Tren de rodaje con regulación electrónica de amortiguación 1BL (Audi drive select)"
menu: "Unidad De Control Para Amortig Unidad de control J250 / Válvulas N336, N337, N338, N339"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Ajustar la fuerza de amortiguación de cada rueda de forma independiente en milisegundos para combinar dinamismo deportivo y confort de marcha.

## Principio de funcionamiento

La unidad J250 calcula el estado dinámico del vehículo a partir de la velocidad, aceleración transversal y ángulo de dirección (vía ESP J104), nivel de las ruedas (sensores G78, G289, G76, G77) y aceleración de la carrocería (sensores G341, G342, G343). Con estos datos, envía una señal de corriente modulada en anchura de pulso (PWM) a las válvulas electromagnéticas N336-N339 para variar el paso de aceite interior.

## Características

Amortiguadores hidráulicos de rigidez variable con válvula proporcional de regulación interna comandados por señal PWM de la UCE J250.

## Valores de trabajo

* Modos de ajuste seleccionables: COMFORT (suave), AUTO (equilibrado) y DYNAMIC (tenso deportivo).

## Anomalías frecuentes

Dañado de los cables de conexión de los sensores de aceleración o fugas de aceite en los amortiguadores.

## Comportamiento en avería

El sistema conmuta a un modo de seguridad rígido y muestra un mensaje de fallo en el cuadro de instrumentos.

## Cómo comprobarlo

Efectuar el diagnóstico EOBD en la unidad J250. Tras reemplazar la UCE J250 o un sensor de nivel, es obligatorio realizar el ajuste básico de la posición de regulación (autoadaptación).

## Imágenes requeridas

- Ubicación de la UCE J250, sensores de aceleración G341-G343 y válvulas de amortiguador N336-N339 — Fuente: 409_e         Audi A4 08.pdf, pág. 42
