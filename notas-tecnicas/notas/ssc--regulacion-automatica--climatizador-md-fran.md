---
id: ssc.regulacion-automatica.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 622
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación automática de temperatura"
menu: "Regulación automática de temperatura"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 16-17"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["Climatronic", "microprocesador", "valor teórico", "valor efectivo", "CAN-Bus", "modo emergencia"]
---

## Objeto

Explicar el funcionamiento de los sistemas digitales de gestión térmica automática (Climatronic) que mantienen constante la temperatura seleccionada sin intervención del conductor. (págs. 16-17)

## Fundamento

A diferencia del sistema manual donde el usuario evalúa y corrige la mezcla de aire, en el Climatronic una unidad de control analiza múltiples sensores, compara los valores reales con los teóricos y posiciona los servomotores de forma automatizada. (págs. 16-17)

## Desarrollo

La unidad de control digital recibe información de sensores de temperatura (exterior, interior, difusores, radiación solar), así como señales por CAN-Bus (velocidad del vehículo, régimen motor, tiempo en parado).
Un microprocesador procesa estos datos y calcula las órdenes de salida transmitidas a los servomotores y al regulador de la turbina.

En caso de avería de un sensor principal, el sistema adopta valores supletorios prefijados y mantiene el servicio en un modo de emergencia programado, registrando el fallo en la memoria de autodiagnóstico. (págs. 16-17)

## Valores de referencia

- Frecuencia de actualización de cálculo: continua en tiempo real por microprocesador. (pág. 17)

## Errores de concepto frecuentes

- Suponer que al fallar un sensor de temperatura el Climatronic deja de funcionar por completo, ignorando el modo de funcionamiento de emergencia. (pág. 17)
