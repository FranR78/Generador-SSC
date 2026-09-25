---
id: ssc.diagnostico-compresor.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 843
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Diagnóstico de la desconexión o falta de rendimiento del compresor sin embrague"
menu: "Diagnóstico de la desconexión o falta "
grupo: "Control de climatización"
clave: diagnostico-compresor
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 42, 314-316, 319-320"
relacionados: ["compresor", "valvula-reguladora-compresor", "transmisor-presion"]
palabras: ["N280", "J519", "G395", "desactivación compresor", "grupo 002", "corriente de control"]
---

## Síntoma

El climatizador está conectado pero no produce aire frío, la presión en el bloque de valores de medición no se eleva o el compresor se desactiva intermitentemente. (págs. 316, 319-320)

## Causas posibles

- Presencia de una condición de desconexión activa memorizada en el grupo de indicación. (págs. 43, 320)
- Fallo de excitación eléctrica en la válvula reguladora N280 por parte de la unidad de control de la red de a bordo J519. (págs. 155, 176, 320)
- Falta de carga de agente frigorífico detectada por el transmisor G395. (págs. 43, 168)
- Rotura del elemento de protección contra sobrecarga en la polea del compresor por agarrotamiento mecánico del mecanismo interno. (págs. 179, 399)

## Cómo separar las causas

1. Conectar el equipo de diagnosis VAS 5051 en la dirección "08 - Electrónica de climatización" y consultar la memoria de averías. (págs. 9, 320)
2. Si no hay averías en la memoria, seleccionar "Leer bloque de valores de medición" e ingresar al grupo "002": comprobar el campo 1 ("condición de desconexión actual"). Si el código es distinto de "0", consultar la tabla de condiciones de corte (p. ej., presión fuera de margen, señal de apagado del motor, temperatura exterior demasiado baja). (págs. 43, 320)
3. Acceder al grupo de valores de medición "001": verificar el campo 1 (corriente teórica) y el campo 2 (corriente efectiva). Si la corriente teórica es > 0,3 A pero la corriente efectiva marca 0 A, ingresar a la dirección "09 - Unidad de control de la red de a bordo" y verificar el bloque 034 (salida hacia N280). (págs. 42, 176, 320)
4. Si la corriente efectiva en N280 es correcta (> 0,3 A) pero la presión en el campo 4 no aumenta, realizar una inspección visual del compresor con el motor en marcha: verificar si el disco de arrastre central gira solidario con la polea o si se ha separado por actuación del elastómero de protección contra sobrecarga. (págs. 179, 316, 399)
5. Si la polea gira y N280 recibe corriente pero la presión permanece baja, consultar el valor de presión leído por el transmisor G395 en el grupo 056 (si indica un valor fijo superior a 40 bares, revisar la línea de datos LIN entre G395 y la unidad J519). (págs. 43, 168)

## Valores de referencia

- Campo 1 del grupo 002 con compresor habilitado: "0". (pág. 43)
- Corriente efectiva de control en N280: entre 0,3 A y 0,8 A. (págs. 42, 120, 177)
- Lectura de seguridad por defecto de G395 ante fallo de línea LIN: > 40 bares. (pág. 43)

## Verificación tras la reparación

Confirmar que el código de corte en el campo 1 del grupo 002 vuelve a "0", que la corriente efectiva en N280 se estabiliza y que la presión registrada en el campo 4 del grupo 001 aumenta de forma proporcional a la solicitud de refrigeración. (págs. 42-43, 316)

## Imágenes requeridas

- Bloque de valores de medición 001 en la pantalla del lector mostrando los campos de corriente de N280 y presión del circuito — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 42
