---
id: ssc.autodiagnostico-climatizador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 207
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Autodiagnóstico del autoclima y calefacción motorizada"
codigo: "J255"
menu: "Autodiagnóstico del autoclima  J255"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 34-38"
relacionados: ["unidad-control-climatizador"]
palabras: ["autodiagnóstico", "memoria de averías", "dirección 08", "función 01", "función 02", "función 03", "función 04", "función 08"]
---

## Objeto

Supervisar eléctricamente los sensores y actuadores del sistema de climatización, memorizar los fallos detectados y permitir el diagnóstico guiado en taller a través del equipo de diagnosis. (págs. 34-38).

## Fundamento

La unidad de control J255 vigila constantemente sus circuitos de entrada y salida. Para acceder a la autodiagnosis se utiliza el equipo de diagnosis conectado al conector de 16 polos bajo la dirección "08 - Aire acondicionado". (págs. 34-35).

## Desarrollo

Las funciones disponibles en el menú de autodiagnosis son:
- Función 01 (Versión de la unidad de control): Muestra la clave de recambio (p. ej. 6K0959291), versión de software (p. ej. X01), código de taller y tipo de equipo (código 220 para autoclima, código 110 para calefacción motorizada). (pág. 34).
- Función 02 (Consultar memoria de averías): Muestra los fallos de sensores y actuadores memorizados. Distingue entre averías permanentes (requieren reparación y borrado manual) y esporádicas (se borran automáticamente tras 40 puestas en marcha sin repetirse). (págs. 34-35).
- Función 03 (Diagnóstico de elementos actuadores): Activa secuencialmente el acoplamiento N25 (2 s ON/OFF), turbina V2 (pasos de 2,5 V), motor V68 (mínimo a máximo) y motor V113 (recirculación a aire fresco). (pág. 36).
- Función 04 (Ajuste básico): Ejecuta la calibración y memorización de topes del motor V68 seleccionando el grupo. Obligatorio tras sustituir V68 o J255. (pág. 36).
- Función 05 (Borrar memoria de averías). (pág. 34).
- Función 06 (Finalizar emisión). (pág. 34).
- Función 08 (Leer bloque de valores de medición): Muestra parámetros reales en tiempo real (grupos 001 a: estados del compresor, presostato, posiciones de potenciómetro V68 en voltios, estado de pulsadores, temperaturas NTC y posición del mando de distribución en %). (págs. 36-37).

## Valores de referencia

Dirección de acceso en equipo de diagnosis: "08".
Averías esporádicas: borradas tras 40 ciclos de arranque sin fallo.
Código de tipo de equipo en función: 220 = Autoclima, 110 = Calefacción motorizada. (págs. 34-35).

## Errores de concepto frecuentes

Intentar borrar la memoria de averías sin solucionar la falla física previa; si el fallo es permanente, permanecerá grabado en la unidad de control. (págs. 34-35).
