---
id: ssc.clima.transmisor-alta-presion-g65
modulo: ssc
unidad: clima
nt: 144
tipo: elemento
titulo: Transmisor de alta presión G65
codigo: G65
menu: G65
grupo: POR CLASIFICAR
ubicacion: Circuito de alta presión, junto a la válvula de expansión
aplicacion:
  - SEAT Ibiza / Córdoba 99
  - VW Touareg
fuentes: SEAT CD 072 «Climatización en el Ibiza-Córdoba 99»; VW SSP 301 «Climatización en el Touareg»
---

## Misión
Informar a la unidad de control de la presión que hay en el lado de alta del circuito frigorífico,
para que el sistema decida si puede conectar el compresor y cuándo tiene que arrancar el ventilador
del condensador.

## Principio de funcionamiento
Es un transmisor electrónico: entrega una señal proporcional a la presión, no un simple contacto de
abrir y cerrar. Por eso la unidad de control conoce el valor de presión en todo momento y no solo si
está por encima o por debajo de un umbral.

## Características
Según la motorización, en esa misma posición del circuito puede ir montado el **conmutador de presión
F129** en lugar del transmisor electrónico G65. No son intercambiables sin más: uno da contacto y el
otro da señal.

## Valores de trabajo
De las fuentes:

| Valor | Qué es | Origen |
|---|---|---|
| 16 bares | presión a la que se ordena la conexión del electroventilador | Teórico OEM |
| 44 bares | tarado de la válvula de seguridad del circuito | Teórico OEM |

La válvula de seguridad **no es este componente**: es el elemento que descarga el circuito si la
presión llega a ese valor. Se recoge aquí porque marca el techo del rango de trabajo.

## Anomalías frecuentes
Conector con humedad, señal fuera de rango por deriva del sensor, y fugas por la junta de su asiento
al desmontarlo sin recuperar el refrigerante.

## Comportamiento en avería
Si la señal no es válida, el sistema no autoriza el compresor por seguridad: no enfría aunque el
circuito esté bien. También puede quedarse el ventilador del condensador siempre en marcha o sin
arrancar nunca.

## Cómo comprobarlo
1. Alimentación y masa del sensor, con el contacto puesto, entre sus bornes correspondientes.
2. Señal de salida con el motor en marcha, comparando el valor que lee la diagnosis con el que marcan
   los manómetros de la estación de carga. Si no coinciden, el sensor miente.
3. **No desmontarlo con el circuito cargado.** Se recupera el refrigerante antes.

## Advertencias
Trabajar sobre el circuito de alta con carga es la causa habitual de quemaduras por refrigerante.
La recuperación previa con la estación no es opcional.
