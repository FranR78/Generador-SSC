---
id: ssc.sin-clasificar.unidad-de-control-de-la-red-de-a-bordo-2
modulo: ssc
unidad: sin-clasificar
nt: 1193
titulo: "Unidad De Control De La Red De A Bordo"
codigo: "J519"
ubicacion: "Montada bajo el salpicadero, en la zona de la red de a bordo"
aplicacion: "Gestión centralizada de las funciones del sistema de confort en SEAT Ibiza y Arona"
menu: "Unidad De Control De La Red De J519"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Actuar como unidad de control maestra del LIN-Bus puertas, LIN-Bus alarma y LIN-Bus bocina de alarma para coordinar y autorizar todas las funciones del sistema de confort del vehículo.

## Principio de funcionamiento

Centralita electrónica conectada a la red CAN-Bus. Recibe información de los conmutadores del habitáculo y de otras unidades de control (ABS, Airbag, Cuadro de instrumentos) y autoriza la ejecución de acciones a las unidades esclavas conectadas a las distintas líneas LIN-Bus.

## Características

Unidad electrónica de control maestra con pasarela e interconexión a CAN-Bus Confort y maestra de buses LIN independientes.

## Valores de trabajo

Tensión de alimentación nominal de 12 V procedente de batería / línea 30 y línea.

## Anomalías frecuentes

Interrupción de la comunicación en los buses LIN o fallos en los relés de alimentación internos.

## Comportamiento en avería

Inoperatividad de las funciones centralizadas de confort (cierre centralizado, activación de la alarma, regulación central de elevalunas) y conmutación a función de emergencia en elevalunas de puertas.

## Cómo comprobarlo

Comprobar las tensiones de alimentación (+12 V en bornes de entrada), masas y diagnosticar el estado del bus de datos y tramas LIN-Bus mediante la máquina de diagnosis y osciloscopio.
