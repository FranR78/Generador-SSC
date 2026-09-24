---
id: ssc.autodiagnostico-climatizador.cd
modulo: ssc
unidad: clima
nt: 439
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Autodiagnóstico de los equipos de mando electrónico"
codigo: "J255"
menu: "Autodiagnóstico de los equipos J255"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "cd.pdf, págs. 34-38"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-temperatura-interior"]
palabras: ["autodiagnosis", "direccion 08", "funcion 01", "funcion 02", "funcion 03", "funcion 04", "funcion 08", "40 puestas en marcha"]
---

## Síntoma

Parpadeo general de los dígitos del display al conectar el equipo o mal funcionamiento del sistema. (págs. 12-15, 20, 23, 34)

## Causas posibles

Averías en sensores, actuadores, potenciómetros o líneas de bus de datos. (págs. 34-35)

## Cómo separar las causas

Conectar un equipo de diagnosis (VAG 1551/1552) e introducir el código de dirección **"08 - Aire acondicionado"**:
1. Función 01 (Versión de la unidad): identifica el número de recambio y la codificación (un puente a masa en el pin 21 indica Calefacción motorizada; sin puente indica Autoclima).
2. Función 02 (Consultar memoria de averías): muestra los fallos registrados. Distingue averías esporádicas (se borran tras 40 puestas en marcha sin repetirse) de permanentes (exigen reparación física y borrado manual).
3. Función 03 (Diagnóstico de actuadores): conmuta el compresor N25 cada 2 s, acelera la turbina V2 de 0 a 12 V en pasos de 2,5 V, desplaza la trampilla V68 de tope a tope y conmuta la recirculación V113.
4. Función 04 (Ajuste básico): en el grupo 002 calibra los topes del motor V68 (obligatorio al cambiar V68 o la UCE J255).
5. Función 08 (Bloque de valores de medición): analiza en tiempo real los valores numéricos y estados lógicos divididos en grupos (001 a 006):
   - Grupo: estado salida compresor (0/1), estado presostato F129 (0/1), estado recirculación V113 (0/1).
   - Grupo: tensión real, calculada y topes (superior/inferior) del servomotor V68 en voltios.
   - Grupo 003 a: estado de pulsadores (0/1), tensiones de turbina V2, lecturas de sondas G17, G56, G191, G192 en ºC y tensión de alimentación. (págs. 34-38)

## Valores de referencia

- Código de dirección de diagnosis: 08.
- Criterio de borrado de averías esporádicas: 40 puestas en marcha sin fallo.
- Pin de codificación de equipo en conector: Pin 21 a masa = Calefacción motorizada; Pin 21 libre = Autoclima. (págs. 34, 38)

## Verificación tras la reparación

Ejecutar el ajuste básico (función 04, grupo 002) tras cambiar componentes, borrar la memoria de averías (función 05) y comprobar la ausencia de parpadeo en los dígitos del display. (págs. 34, 36)
