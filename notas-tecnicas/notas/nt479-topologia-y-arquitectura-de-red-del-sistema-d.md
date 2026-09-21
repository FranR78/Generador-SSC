---
id: ssc.sin-clasificar.topologia-y-arquitectura-de-red-del-sistema-de-climatizacion
modulo: ssc
unidad: sin-clasificar
nt: 479
tipo: proceso
subtipo: fundamento
titulo: "Topología Y Arquitectura De Red Del Sistema De Climatización"
menu: "Topología Y Arquitectura De Red Del Si"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la estructura de la red de comunicación, los buses de datos y la interconexión de las unidades de control, actuadores y sensores del sistema de climatización del Audi A7 (año modelo 2012).

## Fundamento

La arquitectura electrónica del sistema de climatización se basa en la red implementada en el Audi A8 (año modelo 2011). La unidad de control Climatronic J255 actúa como nodo principal del sistema, intercomunicándose con los buses CAN (Convenience CAN, Display and Control CAN), el bus MOST y diversas líneas LIN secundarias para gestionar sensores, actuadores y unidades periféricas.

## Desarrollo

- La unidad Climatronic J255 se conecta directamente al bus CAN de confort (Convenience CAN bus) y al bus CAN de pantalla y mando (Display and Control CAN bus).  
- A través de la interfaz de diagnosis J533 (Gateway) y la unidad J519, el sistema intercambia información con el bus MOST y los módulos de confort.  
- La unidad J255 controla directamente por bus LIN los servomotores de las trampillas (Flap control motors) y la unidad de pantalla/mando trasera E265.  
- La unidad de control de la red de a bordo J519 gestiona por medio de otra línea LIN los sensores ambientales: sensor de temperatura exterior G17, sensor de presión/temperatura G395, sensor de humedad en la admisión G657, sensor de calidad del aire G238 y sensor de humedad G355.  
- Se integran elementos de ejecución directa como la válvula reguladora del compresor N280, la válvula de corte N82, la bomba V50, el fotosensor de radiación solar G107 y la gestión de calefacción de asientos (SH).

## Interpretación y errores frecuentes

- Desconocer la distribución de las líneas LIN: un fallo o cortocircuito en la línea LIN asociada a J519 deja inoperativos múltiples sensores (G17, G395, G657, G238, G355) de forma simultánea.

## Imágenes requeridas

- Esquema de topología de red con los buses CAN, MOST y líneas LIN del sistema de climatización — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 52
