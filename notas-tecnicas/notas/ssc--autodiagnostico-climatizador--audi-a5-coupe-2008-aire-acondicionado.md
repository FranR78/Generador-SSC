---
id: ssc.autodiagnostico-climatizador.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 168
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Autodiagnóstico del climatizador"
menu: "Autodiagnóstico del climatizador"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 4-11"
relacionados: ["unidad-control-climatizador"]
palabras: ["autodiagnosis", "memoria de averías", "avería estática", "avería esporádica", "VAS 5051"]
---

## Objeto

Monitorizar y supervisar el funcionamiento de los componentes y sensores gestionados por el climatizador, memorizando los fallos para la localización asistida de averías en el taller. (págs. 4-5).

## Fundamento

La unidad de control para Climatronic J255 analiza continuamente las señales e informaciones del sistema. Al detectar un fallo en un sensor o componente vigilado, graba el registro en su memoria de averías junto con el tipo de avería correspondiente. (págs. 4-5).

## Desarrollo

La unidad de control J255 clasifica las averías registradas en dos categorías:
1. Averías estáticas o permanentes: se registran si las condiciones de fallo se mantienen de forma continua durante un tiempo determinado.
2. Averías esporádicas: se registran cuando la condición de fallo desaparece durante un tiempo determinado, añadiéndose la indicación /SP en la pantalla del equipo de diagnosis. Este proceso de evaluación se repite ininterrumpidamente.

Para acceder a la autodiagnosis, se conecta el equipo de diagnosis (VAS 5051 o VAS 5052) al conector de diagnosis de 16 polos del vehículo con el encendido desconectado, accediendo a la dirección "08 - Electrónica de climatización/calefacción".

Las funciones de autodiagnosis disponibles son:
- 01 / 001: Consultar la versión de la unidad de control.
- 02 / 004: Consultar la memoria de averías.
- 03 / 005: Diagnosis de actuadores.
- 04 / 006: Ajuste básico.
- 05 / 004.10: Borrar la memoria de averías.
- 06 / 022: Finalizar la edición.
- 07 / 007: Codificación.
- 08 / 011: Leer el bloque de valores de medición.
- 10 / 012: Adaptación.

Antes de sustituir el panel de mandos e indicación J255, es obligatorio consultar su codificación y adaptación mediante la función "Unidad de control: sustituir" en la localización guiada de averías. (págs. 4-9).

## Valores de referencia

Conector de diagnosis de 16 polos.
Velocidad del vehículo no superior a 5 km/h para ejecutar la diagnosis de actuadores. (págs. 6, 8).

## Errores de concepto frecuentes

Considerar las averías esporádicas como errores de lectura sin valor técnico; reflejan fallos reales cuya condición desapareció temporalmente pero que permanecen memorizados hasta su borrado explícito. (pág. 5).
