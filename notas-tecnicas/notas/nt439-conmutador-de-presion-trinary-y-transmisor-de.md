---
id: ssc.sin-clasificar.conmutador-de-presion-trinary-y-transmisor-de-alta-presion-sensor-pwm
modulo: ssc
unidad: clima
nt: 439
titulo: "Conmutador De Presión (Trinary) Y Transmisor De Alta Presión (Sensor Pwm)"
codigo: "F129 (Conmutador Trinary) / Transmisor de alta presión"
ubicacion: "Montado en la tubería de alta presión o sobre el filtro deshidratador"
aplicacion: "Protección de presión y gestión de velocidad de electroventiladores"
menu: "Conmutador De Presión (Trinary F129 (Conmutador Trinary) / Transmisor de alta presión"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Proteger el sistema desconectando el compresor por presión excesiva o insuficiente, y ordenar el salto a la velocidad superior del electroventilador.

## Principio de funcionamiento

- **Conmutador Trinary (F129):** Funciona por microcontactos mecánicos en tres umbrales de presión:  
  1. p < 0,2 MPa (2 bar): Abre contactos por falta de gas (fugas), desacoplando N25.  
  2. p > 1,6 MPa (16 bar): Cierra contactos para activar la 2ª velocidad del electroventilador.  
  3. p > 2,4 - 3,2 MPa (24 - 32 bar): Abre contactos por sobrepresión, desacoplando N25.  
- **Transmisor de Alta Presión (Electrónico):** Un cristal de silicio se deforma por la presión, cambiando su resistencia. Un microprocesador interno alimentado con tensión convierte este cambio en una señal digital de anchura de pulso modulada (PWM) a una frecuencia fija de 50 Hz (período de 20 ms).

## Características

Sensor electrónico o presostato electromecánico roscado sobre la tubería de alta.

## Valores de trabajo

| Presión en circuito | Ancho de pulso PWM | Porcentaje de período (20 ms a 50 Hz) |
|---|---|---|
| **Baja presión: 0,14 MPa (1,4 bar)** | **2,6 ms** | **13 % de duración** |
| **Alta presión: 3,7 MPa (37 bar)** | **18 ms** | **90 % de duración** |

## Anomalías frecuentes

Interrupción del cable de señal del transmisor electrónico; fogueo de contactos en el F129.

## Comportamiento en avería

Si la UCE J293 no recibe señal del transmisor electrónico, desconecta el compresor por seguridad e inscribe la avería 00819 ("Señal muy baja") en la memoria.

## Cómo comprobarlo

Verificar la señal cuadrada PWM a 50 Hz con un osciloscopio digital midiendo la variación del ancho de pulso (ms) al modificar la presión.
