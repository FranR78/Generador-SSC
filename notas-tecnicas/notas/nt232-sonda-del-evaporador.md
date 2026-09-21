---
id: ssc.sin-clasificar.sonda-del-evaporador
modulo: ssc
unidad: sin-clasificar
nt: 232
titulo: "Sonda Del Evaporador"
codigo: "No documentado en fuentes"
ubicacion: "Pinchada entre las aletas del evaporador, en el punto térmico más frío"
aplicacion: "Sistema de seguridad contra la congelación del evaporador"
menu: "Sonda Del Evaporador No documentado en fuentes"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Supervisar la temperatura del evaporador para desconectar el compresor antes de que se forme hielo sobre las aletas.

## Principio de funcionamiento

Sensor termostático o termistencia. Si la temperatura del evaporador cae hasta -1 ºC, el interruptor/sensor ordena el corte eléctrico del compresor. Cuando la temperatura asciende a +4 ºC, vuelve a permitir el acoplamiento del compresor.

## Características

Sonda mecánica de capilar o sensor electrónico NTC de varilla de inserción directa.

## Valores de trabajo

| Estado de la sonda | Temperatura del evaporador | Acción sobre el compresor |
|---|---|---|
| **Desconexión de seguridad** | **-1 ºC** | Desconecta el compresor (Corte por hielo) |
| **Reconexión de servicio** | **+4 ºC** | Vuelve a conectar el compresor |

## Anomalías frecuentes

Descalibración del elemento sensible; desprendimiento o mala posición de la sonda entre las aletas.

## Comportamiento en avería

El evaporador se bloquea por una masa de hielo impenetrable, cortando por completo el caudal de aire hacia el habitáculo.

## Cómo comprobarlo

Medir la resistencia del captador o verificar los ciclos de corte (a -1 ºC) y reconexión (a +4 ºC) con el equipo de clima funcionando.
