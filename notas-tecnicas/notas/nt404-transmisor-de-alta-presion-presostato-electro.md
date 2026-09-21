---
id: ssc.sin-clasificar.transmisor-de-alta-presion-presostato-electronico
modulo: ssc
unidad: sin-clasificar
nt: 404
titulo: "Transmisor De Alta Presión (Presostato Electrónico)"
ubicacion: "Montado sobre el tubo de alta presión del circuito frigorífico"
aplicacion: "Climatizadores modernos con gestión electrónica de motor y electroventiladores"
menu: "Transmisor De Alta Presión (Presostato"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir continuamente la presión del refrigerante en todo el ciclo de trabajo y emitir una señal digital para las UCEs de climatización y motor.

## Principio de funcionamiento

La presión del refrigerante actúa sobre un cristal de silicio deformándolo. La deformación varía la resistencia eléctrica y la tensión de medición captada. Un microprocesador integrado convierte esta tensión en una señal cuadrada de anchura de impulsos modulada (PWM) a una frecuencia fija de 50 Hz.

## Características

Sensor piezoeléctrico de 3 pines con electrónica interna alimentada a tensión constante.

## Valores de trabajo

| Presión del agente frigorífico | Anchura del impulso PWM (A) | Porcentaje del período (20 ms) |
|---|---|---|
| **Baja presión: 0,14 MPa (1,4 bar)** | **2,6 ms** | **13 % de duración del período** |
| **Alta presión: 3,7 MPa (37 bar)** | **18 ms** | **90 % de duración del período** |
| **Frecuencia de la señal PWM** | **50 Hz** | **Duración del período = 20 ms (100 %)** |

## Anomalías frecuentes

Interrupción de la señal o avería de la electrónica interna del sensor.

## Comportamiento en avería

Si la unidad de control del ventilador no detecta señal, desconecta el compresor por seguridad.

## Cómo comprobarlo

Verificación con osciloscopio de la señal cuadrada PWM a 50 Hz y comprobación del cambio de anchura de pulso (ms) al variar la presión.
