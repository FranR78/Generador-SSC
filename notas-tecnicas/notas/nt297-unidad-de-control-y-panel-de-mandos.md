---
id: ssc.sin-clasificar.unidad-de-control-y-panel-de-mandos
modulo: ssc
unidad: sin-clasificar
nt: 297
titulo: "Unidad De Control Y Panel De Mandos"
codigo: "E87 / Climatronic"
ubicacion: "Consola central del salpicadero"
aplicacion: "Climatizadores de regulación automática electrónica"
menu: "Unidad De Control Y Panel De M E87 / Climatronic"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Permitir la selección de parámetros por el usuario, mostrar la información del sistema, procesar señales de sensores y gobernar los actuadores del climatizador.

## Principio de funcionamiento

Módulo microprocesado que integra en su estructura el panel de mando, la pantalla, la memoria de autodiagnosis y el sensor de habitáculo G56 con su turbina V42. Recibe informaciones de los sensores, las compara con la consigna del usuario y emite señales de excitación hacia los servomotores y relés.

## Características

Módulo electrónico provisto de pantalla LCD/display, memoria de averías volátil/no volátil e interfaz de comunicación CAN-BUS.

## Valores de trabajo

| Parámetro | Valor numérico |
|---|---|
| **Tensión de alimentación** | **12 V CC** de la red de a bordo |

## Anomalías frecuentes

Fallos en el microprocesador; interrupción de líneas de alimentación; parpadeo de pantalla por defectos memorizados.

## Comportamiento en avería

Parpadeo de todos los símbolos del display al conectar el encendido; entrada en modo operativo de emergencia con parámetros sustitutivos fijos.

## Cómo comprobarlo

Interrogación de la memoria de averías a través del conector de diagnóstico OBD.
