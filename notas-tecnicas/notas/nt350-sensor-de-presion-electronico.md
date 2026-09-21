---
id: ssc.sin-clasificar.sensor-de-presion-electronico
modulo: ssc
unidad: sin-clasificar
nt: 350
titulo: "Sensor De Presión Electrónico"
ubicacion: "Montado en el depósito acumulador o en la tubería de alta presión"
aplicacion: "Medición continua de presión y gestión de ralentí y electroventiladores por la UEGAA/UEGM"
menu: "Sensor De Presión Electrónico"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir continuamente la presión del refrigerante y emitir una señal digital modulada para que las UCEs gestionen de forma progresiva la carga del motor, los ventiladores y el compresor.

## Principio de funcionamiento

Sensor piezorresistivo con microprocesador. El refrigerante deforma un cristal de silicio de forma directamente proporcional a la presión. La deformación altera la resistencia eléctrica interna del cristal y modifica la tensión de alimentación. El microprocesador convierte la tensión en una señal rectangular de anchura de impulso variable (PWM) a una frecuencia fija de 50 Hz (período de 20 ms = 100 %).

## Características

Cuerpo roscado estanco de 3 terminales que aloja un cristal de silicio y un microprocesador integrado alimentado por la UEGAA.

## Valores de trabajo

| Presión en el circuito | Anchura del impulso PWM | Porcentaje del período (20 ms) |
|---|---|---|
| **Baja presión: 2,4 bar (0,24 MPa)** | **2,6 ms** | **13 % de duración del período** |
| **Alta presión: 30 bar (3,0 MPa)** | **18 ms** | **90 % de duración del período** |
| **Frecuencia de emisión** | **50 Hz** | **20 ms de período total (100 %)** |

## Anomalías frecuentes

Avería en el microprocesador interno; interrupción de la línea de señal hacia la UEGM.

## Comportamiento en avería

Si la UEGM no recibe la señal PWM del sensor, desactiva el compresor por seguridad y registra el código de fallo en la memoria.

## Cómo comprobarlo

Comprobar con un osciloscopio la señal digital rectangular a 50 Hz y verificar la variación de la anchura de pulso al aumentar la presión.

## Imágenes requeridas

- Generación de la señal rectangular PWM a 50 Hz por el sensor electrónico — Fuente: LA CLIMATIZACIÓN.pdf, pág. 96
