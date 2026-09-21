---
id: ssc.sin-clasificar.conmutador-de-activacion-del-aire-acondicionado
modulo: ssc
unidad: sin-clasificar
nt: 346
titulo: "Conmutador De Activación Del Aire Acondicionado"
ubicacion: "Panel de mandos de la consola central del salpicadero"
aplicacion: "Interfaz de mando para la conexión del sistema de climatización"
menu: "Conmutador De Activación Del Aire Acon"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Permitir al conductor la conexión o desconexión manual del sistema de aire acondicionado.

## Principio de funcionamiento

Interruptor eléctrico.
- *En regulación automática:* Al pulsar el conmutador, la UEGAA alimenta la bobina del compresor, el ventilador del condensador y la turbina de aire.  
- *En regulación manual:* Requiere que el usuario seleccione además la velocidad 1 de la turbina.  
- En ambos casos, envía una señal a la UEGM (Gestión de Motor) para elevar el régimen de ralentí antes de acoplar el compresor. Se inhabilita si la temperatura exterior es inferior a 5 ºC.

## Características

Pulsador basculante con testigo luminoso de estado (AC / AUTO / ECON).

## Valores de trabajo

| Parámetro / Condición | Valor de trabajo | Acción resultante |
|---|---|---|
| **Bloqueo por temperatura exterior** | **< 5 ºC** | Impide la activación del compresor |
| **Requisito en mando manual** | Selección de velocidad 1 de turbina | Autoriza la alimentación eléctrica |

## Anomalías frecuentes

Falso contacto en las pistas internas; fallo de la lámpara/LED testigo.

## Comportamiento en avería

El compresor no se acopla al pulsar la tecla o el motor se cala al ralentí por no elevarse previamente las revoluciones.

## Cómo comprobarlo

Comprobar continuidad eléctrica entre terminales al accionar el botón y medir la señal enviada hacia la UEGAA/UEGM.
