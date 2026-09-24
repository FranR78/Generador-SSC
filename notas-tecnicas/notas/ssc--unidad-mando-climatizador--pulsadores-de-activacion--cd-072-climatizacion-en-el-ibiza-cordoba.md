---
id: ssc.unidad-mando-climatizador.pulsadores-de-activacion.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 197
tipo: elemento
clase: componente
titulo: "Pulsadores de activación de la unidad de manejo e indicación"
codigo: "E87"
menu: "Pulsadores de activación de la E87"
grupo: "Control de climatización"
clave: unidad-mando-climatizador
variante: pulsadores-de-activacion
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 20"
relacionados: ["unidad-control-climatizador", "radiocasete-comunicacion"]
palabras: ["E87", "pulsadores", "bus de datos", "18 cables", "radiocasete", "22 ºC"]
---

## Misión

Permitir al usuario seleccionar las funciones del climatizador o la calefacción motorizada (temperatura, velocidad de turbina, recirculación, modo AC/AUTO). (pág. 20).

## Tipos y características

Regleta de pulsadores integrada con el radiocasete y el display formando un bloque único compacto en la consola central. (pág. 20).

## Principio de funcionamiento

Al presionar un pulsador, la orden se envía a través de un bus de datos de 18 cables al radiocasete. La unidad del radiocasete retransmite la información a la unidad de control J255 por un bus de datos monofilamento (1 cable). La regleta es alimentada eléctricamente desde el propio radiocasete. (pág. 20).

## Valores de trabajo

Bus de conexión E87 - Radiocasete: 18 cables.
Bus de conexión Radiocasete - UCE J255: 1 cable. (pág. 20).

## Anomalías frecuentes

Desgaste mecánico de los contactos de los pulsadores o interrupción en las líneas del bus de datos. (pág. 20).

## Comportamiento en avería

Al fallar un pulsador, el radiocasete emite una señal de avería general hacia la unidad J255 sin precisar el pulsador concreto. La unidad anula la señal de los pulsadores y pasa a modo automático con temperatura solicitada fija de 22 ºC, exterior de 20 ºC, desconecta el compresor y abre la recirculación a aire fresco. En calefacción motorizada mantiene los parámetros fijos vigentes al ocurrir la avería. (pág. 20).
