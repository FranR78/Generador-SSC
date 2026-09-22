---
id: ssc.sin-clasificar.sensor-de-temperatura-del-evaporador-2
modulo: ssc
unidad: sin-clasificar
nt: 1116
titulo: "Sensor De Temperatura Del Evaporador"
ubicacion: "Insertado entre las aletas del evaporador en la caja climática"
aplicacion: "Protección contra congelación del condensado en el evaporador"
menu: "Sensor De Temperatura Del Evaporador"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura interna del evaporador para desconectar el compresor antes de que el agua condensada se congele y bloquee el paso de aire.

## Principio de funcionamiento

Termistor de Coeficiente de Temperatura Negativo (NTC) o termostato de desconexión directa. La UCE del climatizador analiza su señal y desactiva el embrague del compresor cuando la temperatura roza el punto de congelación, volviendo a conectarlo al subir la temperatura.

## Características

Sonda térmica NTC de inserción física entre aletas.

## Valores de trabajo

* Umbral de desconexión del compresor: Temperatura entre **-1 ºC y 0 ºC**.
* Umbral de reconexión del compresor: Temperatura alcanzada de **3 ºC**.

## Anomalías frecuentes

Deriva en la resistencia NTC o interrupción del cableado eléctrico.

## Comportamiento en avería

Si la sonda falla abriendo el circuito, el compresor no se conecta; si falla manteniendo la señal alta, se produce la congelación física del evaporador obstruyendo el paso del caudal de aire al habitáculo.

## Cómo comprobarlo

Medir la resistencia eléctrica NTC de la sonda a temperatura ambiente y sumergida en agua helada con un polímetro, o verificar el valor indicado en los bloques de medición de la máquina de diagnosis.
