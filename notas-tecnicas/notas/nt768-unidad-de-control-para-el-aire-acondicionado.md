---
id: ssc.sin-clasificar.unidad-de-control-para-el-aire-acondicionado-j301
modulo: ssc
unidad: sin-clasificar
nt: 768
titulo: "Unidad De Control Para El Aire Acondicionado J301"
codigo: "J301"
ubicacion: "Consola central del salpicadero (mando del climatizador Climatic)"
aplicacion: "Sistema de aire acondicionado Climatic en el SEAT Ibiza III (motor ASY)"
menu: "Unidad De Control Para El Aire J301"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Gestionar electrónicamente el funcionamiento del sistema de aire acondicionado, procesar las señales de los sensores de temperatura y presión, y controlar la activación del compresor y los servomotores de las trampillas.

## Características

Unidad electrónica de control integrada en la consola de mandos con autodiagnóstico mediante VAG 1551.

## Valores de trabajo

* Tensión de alimentación (Borne 15): Tensión nominal de red (anómala si la señal es insuficiente por batería agotada o excesiva por alternador defectuoso).

## Anomalías frecuentes

* Avería electrónica interna en la placa de la unidad (código 65535).
* Cortocircuito o interrupción en los cables y conectores de la unidad (código 00538 o 00576).
* Mantenimiento en funcionamiento de la unidad tras desconectar el encendido por fallo en la conexión cableada.

## Comportamiento en avería

Inoperatividad total del aire acondicionado o falta de respuesta en la regulación de los actuadores, registrando los códigos 65535, 00538 o 00576.

## Cómo comprobarlo

Consultar la memoria de averías con VAG 1551 (función 02). Comprobar la alimentación de tensión en el borne 15 y la conexión a masa según esquema eléctrico. Tras su sustitución, es obligatorio realizar la configuración básica (función 04).
