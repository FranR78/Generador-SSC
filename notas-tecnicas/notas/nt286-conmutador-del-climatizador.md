---
id: ssc.sin-clasificar.conmutador-del-climatizador
modulo: ssc
unidad: sin-clasificar
nt: 286
titulo: "Conmutador Del Climatizador"
codigo: "E35"
ubicacion: "Panel de mandos del salpicadero"
aplicacion: "Climatizadores de mando manual o semiautomático"
menu: "Conmutador Del Climatizador E35"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Permitir la activación o desconexión manual del sistema de aire acondicionado por parte del usuario.

## Principio de funcionamiento

Interruptor eléctrico que envía la orden de activación a la UCE del climatizador. En sistemas manuales, requiere seleccionar al menos el nivel 1 de la turbina de aire fresco para autorizar la excitación del acoplamiento N25. Puede incorporar en serie un sensor de temperatura exterior que bloquea la señal con frío extremo.

## Características

Pulsador o interruptor basculante integrado en la consola central.

## Valores de trabajo

| Parámetro | Valor de trabajo | Condiciones de validez |
|---|---|---|
| **Bloqueo por temperatura exterior** | **Inferior a +3 ºC a +5 ºC** | Impide el arranque del compresor |
| **Requisito en mando manual** | Turbina de aire en velocidad 1 | Conexión eléctrica en serie |

## Anomalías frecuentes

Fallo de contactos internos por desgaste; fallo del sensor de temperatura exterior intercalado.

## Comportamiento en avería

El compresor no se acopla al pulsar la tecla de A/C.

## Cómo comprobarlo

Medir la continuidad entre sus bornes con multímetro en posición ON y verificar la salida de tensión hacia la UCE.
