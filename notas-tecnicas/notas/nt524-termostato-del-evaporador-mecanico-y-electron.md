---
id: ssc.sin-clasificar.termostato-del-evaporador-mecanico-y-electronico
modulo: ssc
unidad: clima
nt: 524
titulo: "Termostato Del Evaporador (Mecánico Y Electrónico)"
ubicacion: "Mueble climatizador, con el elemento sensor junto a las aletas del evaporador"
aplicacion: "Protección contra la congelación del evaporador"
menu: "Termostato Del Evaporador (Mecánico Y "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Desconectar el compresor si la temperatura del evaporador baja de 0 ºC para evitar que la humedad condensada se hiele y tupa el paso de aire.

## Principio de funcionamiento

- *Mecánico:* Un tubo capilar con fluido mueve un fuelle interno que actúa sobre una palanca y muelle regulable, abriendo los contactos eléctricos de alimentación del compresor.  
- *Electrónico:* Una sonda NTC mide la temperatura y envía la señal a un módulo electrónico con potenciómetro de ajuste que gobierna un relé.

## Características

Termostato de 2 o 3 contactos con tubo capilar (mecánico) o sonda NTC con módulo electrónico.

## Valores de trabajo

| Estado térmico del evaporador | Respuesta del termostato |
|---|---|
| **Temperatura <= 0 ºC** | Abre contactos: desconecta el compresor |
| **Temperatura >= +3 ºC** | Cierra contactos: reconecta el compresor |

## Anomalías frecuentes

Pérdida de carga de gas del tubo capilar o descalibración del muelle mecánico.

## Comportamiento en avería

Congelación total del evaporador, bloqueando la salida de aire por las rejillas de ventilación.

## Cómo comprobarlo

Comprobar apertura de contactos en frío o medir la resistencia de la sonda NTC a diferentes temperaturas.
