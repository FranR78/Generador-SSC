---
id: ssc.sin-clasificar.sensor-de-temperatura-del-evaporador
modulo: ssc
unidad: clima
nt: 348
titulo: "Sensor De Temperatura Del Evaporador"
ubicacion: "Pinchado directamente entre las aletas de aluminio del evaporador"
aplicacion: "Sistema de protección anti-hielo del evaporador"
menu: "Sensor De Temperatura Del Evaporador"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del núcleo del evaporador para desconectar el compresor antes de que el agua condensada se congele sobre las aletas.

## Principio de funcionamiento

Sonda térmica NTC o interruptor térmico. Si la temperatura del evaporador cae entre 0 ºC y -1 ºC, la UEGAA interrumpe la corriente del acoplamiento electromagnético del compresor. Cuando la temperatura asciende por encima de 3 ºC, vuelve a conectar el compresor.

## Características

Termistor NTC de varilla de inserción entre aletas o capsula termostática de corte directo.

## Valores de trabajo

| Estado de funcionamiento | Temperatura del evaporador | Acción sobre el compresor |
|---|---|---|
| **Desconexión por seguridad** | **0 ºC a -1 ºC** | Desconecta el acoplamiento electromagnético |
| **Reconexión de servicio** | **> 3 ºC** | Vuelve a conectar el compresor |

## Anomalías frecuentes

Descalibración del valor NTC; desprendimiento físico de la sonda de su alojamiento entre aletas.

## Comportamiento en avería

Formación de un bloque impenetrable de hielo sobre el evaporador (corta el caudal de aire) o inoperatividad del A/C.

## Cómo comprobarlo

Medir la resistencia del sensor NTC a diferentes temperaturas y verificar los umbrales de corte (0 ºC / -1 ºC) y conexión (3 ºC).
