---
id: ssc.sin-clasificar.unidad-de-control-del-porton-trasero-electrico
modulo: ssc
unidad: sin-clasificar
nt: 616
titulo: "Unidad De Control Del Portón Trasero Eléctrico"
codigo: "No documentado en fuentes"
ubicacion: "Maletero del vehículo"
aplicacion: "Portones traseros con apertura y cierre eléctrico"
menu: "Unidad De Control Del Portón T No documentado en fuentes"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Reconocer las órdenes de apertura y cierre, alimentar los motores eléctricos de elevación, gobernar el cierre asistido de la cerradura y gestionar la seguridad antiaprisionamiento.

## Principio de funcionamiento

Procesa las señales de los pulsadores de la manilla, consola, mando y línea LIN-Bus de Easy Open. Gobierna los motores de accionamiento comprobando su velocidad y sentido de giro mediante los impulsos de los sensores Hall.

## Características

Unidad electrónica de potencia conectada a CAN-Bus de confort, red LIN-Bus, zumbador de aviso y etapas de alimentación de motores CC.

## Valores de trabajo

* Tensión de trabajo: Tensión de red (12 V).
* Control de posición: Conteo de pulsos de los sensores Hall del Motor 1 y Motor.

## Anomalías frecuentes

Desajuste de los valores límite de apertura, fallos de lectura en los sensores Hall o caídas de tensión de alimentación.

## Comportamiento en avería

El portón no responde a los mandos o detiene su recorrido a mitad de camino; requiere abrir y cerrar manualmente aplicando fuerza sobre el portón.

## Cómo comprobarlo

Realizar diagnosis con la máquina en la dirección **6D - Sistema electrónico de la puerta del maletero**, consultar bloques de valores, realizar test de actuadores y ejecutar el ajuste básico de topes.
