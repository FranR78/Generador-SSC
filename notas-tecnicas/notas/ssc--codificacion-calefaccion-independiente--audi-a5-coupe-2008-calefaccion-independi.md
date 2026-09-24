---
id: ssc.codificacion-calefaccion-independiente.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 577
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Codificación de la unidad de control para calefacción adicional"
codigo: "J364"
menu: "Codificación de la unidad de c J364"
grupo: "Control de climatización"
clave: codificacion-calefaccion-independiente
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 21-25"
relacionados: ["unidad-control-j364", "interfaz-bus-j533", "unidad-bateria-j367"]
palabras: ["J364", "codificación larga", "byte 0", "sistema binario", "hexadecimal", "SVM"]
---

## Objeto y alcance

Configurar la estructura de datos (codificación larga) de la unidad de control J364 según la variante del vehículo, el tipo de motorización y los componentes opcionales instalados. (págs. 21-25)

## Condiciones previas

- Calefacción independiente totalmente desactivada. (pág. 22)
- Memoria de averías consultada, corregida y borrada. (pág. 22)
- Encendido conectado. (pág. 22)

## Equipo y material

- Equipo de diagnosis VAS 5051 / VAS 5052 configurado con la gestión de versiones de software (SVM). (págs. 21-23)

## Pasos

1. Conectar el equipo de diagnosis al conector de 16 polos y seleccionar la dirección "18 - Calefacción adicional/independiente". (págs. 8, 22)
2. Seleccionar la función "07 - Codificar la unidad de control" (o función "008" según la versión del software). (págs. 6, 22)
3. Seleccionar la codificación guiada o gestionar el código largo mediante la muestra de bits/bytes. (págs. 21-22)
4. Configurar las opciones correspondientes al Byte:
   - Desactivación por subtensión (a través del bus de datos mediante J533/J367 o por valor fijo de adaptación). (págs. 22-23)
   - Presencia de bomba de recirculación V55. (pág. 24)
   - Presencia de válvula de cierre de líquido refrigerante N279. (pág. 24)
   - Tipo de motor y combustible (gasolina o diésel). (págs. 24-25)
   - Presencia de mando a distancia por radiofrecuencia R64. (pág. 25)
5. Confirmar y guardar la nueva codificación en la unidad J364. (pág. 22)
6. Finalizar la función y consultar la memoria de averías para verificar la ausencia de fallos de configuración. (págs. 20, 22)

## Valores de referencia

- Ejemplo de codificación larga típica (Audi A5 Coupé diésel con V55, N279 y mando a distancia): "$5D 00 00". (pág. 22)

## Verificación final

Acceder al bloque de valores de medición (grupo de indicación "017", campo 3) para corroborar la recepción y validez del código largo en la unidad J364. (págs. 21, 50)

## Seguridad y normativa

Es imprescindible asegurar que el tipo de motor (gasolina o diésel) codificado en el Byte 0 coincida con el combustible real del vehículo, ya que la unidad de control aplica estrategias de combustión y tiempos de precalentamiento completamente incompatibles entre ambas variantes. (págs. 23, 44)
