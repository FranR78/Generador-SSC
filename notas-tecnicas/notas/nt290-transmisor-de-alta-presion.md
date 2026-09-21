---
id: ssc.sin-clasificar.transmisor-de-alta-presion
modulo: ssc
unidad: sin-clasificar
nt: 290
titulo: "Transmisor De Alta Presión"
codigo: "G819 (o Transmisor de alta presión)"
ubicacion: "Montado en la tubería de alta presión del circuito"
aplicacion: "Climatizadores modernos y gestión de motor de nueva generación"
menu: "Transmisor De Alta Presión G819 (o Transmisor de alta presión)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir de forma continua la presión del refrigerante en todo el ciclo de trabajo y emitir una señal modulada digital para la UCE de motor y de ventiladores.

## Principio de funcionamiento

Sensor piezoeléctrico de cristal de silicio con microprocesador integrado. La presión de alta deforma el cristal modificando su resistencia y tensión. El microprocesador convierte esa tensión en una señal rectangular modulada en anchura de impulsos (PWM) a una frecuencia fija de 50 Hz.

## Características

Sensor electrónico estanco de 3 pines. Genera señales PWM a 50 Hz (período de 20 ms = 100 %).

## Valores de trabajo

| Presión de trabajo | Anchura de impulso (A) | Porcentaje del período (20 ms) |
|---|---|---|
| **Presión baja: 0,14 MPa (1,4 bar)** | **2,6 ms** | **13 % de duración del período** |
| **Presión alta: 3,7 MPa (37 bar)** | **18 ms** | **90 % de duración del período** |
| **Frecuencia de la señal PWM** | **50 Hz (20 ms = 100 %)** | Emisión digital constante |

## Anomalías frecuentes

Avería en el microprocesador interno; cortocircuito o corte de cables de señal.

## Comportamiento en avería

Registro de la avería 00819 en la UCE de motor ("Transmisor de alta presión: señal muy baja"); la UCE deshabilita el compresor por seguridad.

## Cómo comprobarlo

Medir con osciloscopio digital la señal rectangular en el pin de salida y verificar la variación de la anchura de impulso (ms) al cambiar la presión.
