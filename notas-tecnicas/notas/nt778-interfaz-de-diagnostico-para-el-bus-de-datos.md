---
id: ssc.sin-clasificar.interfaz-de-diagnostico-para-el-bus-de-datos-j533-gateway-integrado-en-j519
modulo: ssc
unidad: sin-clasificar
nt: 778
titulo: "Interfaz De Diagnóstico Para El Bus De Datos J533 (Gateway Integrado En J519)"
codigo: "J533 (integrado en la unidad de control de la red de a bordo J519)"
ubicacion: "Bajo el salpicadero, integrado físicamente en el módulo J519"
aplicacion: "Red CAN-Bus en el SEAT Ibiza III (motor ASY)"
menu: "Interfaz De Diagnóstico Para E J533 (integrado en la unidad de control de la red de a bordo J519)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Interconectar y traducir la información entre los distintos buses de datos del vehículo (Tracción, Confort, Cuadro, Diagnosis) y la unidad J301 del aire acondicionado.

## Características

Módulo interfaz electrónico de comunicación integrado en la unidad de red de a bordo J519.

## Anomalías frecuentes

* Cortocircuito o corte en los cables físicos del BUS de datos.
* Defecto interno en la unidad J519 / Gateway J533.

## Comportamiento en avería

Pérdida de comunicación entre la unidad de climatización J301, la unidad del motor (01314) y el cuadro de instrumentos J285 (01317), registrando el código 01299.

## Cómo comprobarlo

Comprobar los cables del BUS de datos según el grupo de reparación 90 y consultar la memoria de fallos del Gateway. El fallo se borra automáticamente al restablecerse la línea de datos.
