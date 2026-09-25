---
id: ssc.autodiagnostico-climatizador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 207
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Autodiagnóstico del sistema Autoclima"
menu: "Autodiagnóstico del sistema Autoclima"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 33-36"
relacionados: ["unidad-control-climatizador"]
palabras: ["autodiagnóstico", "dirección 08", "función 01", "función 02", "función 03", "función 04", "función 08", "parpadeo display", "puente pin 21"]
---

## Síntoma

Parpadeo de todos los dígitos de la pantalla o display al conectar el encendido, falta de producción de aire frío o imposibilidad de regular la temperatura en la versión Autoclima. (págs. 14, 33)

## Causas posibles

- Registro de averías permanentes en la memoria no volátil de la unidad J255 (sensores de temperatura G17, G56, G191, G192 o potenciómetro V68). (págs. 17, 33)
- Interrupción de la señal de presión del circuito frigorífico (F129 / G65) o apertura del interruptor térmico F38. (págs. 14-15)
- Fallo interno en la unidad de control J255 o puunteado de codificación de mazo de cables defectuoso. (pág. 34)

## Cómo separar las causas

1. Conectar el lector de averías V.A.G 1551, V.A.G 1552 o estación equivalente al conector de diagnóstico T16 de 16 polos del vehículo. (pág. 33)
2. Seleccionar la dirección "08 - Aire acondicionado". (pág. 33)
3. Seleccionar la función "01 - Versión de la unidad de control" para verificar la clave de recambios (6K0959291) y confirmar el tipo de equipo (Autoclima = código; Calefacción motorizada = código 110 por presencia de masa en el pin 21 del conector). (págs. 33-34)
4. Ejecutar la función "02 - Consultar memoria de averías" para identificar los códigos de fallo registrados (diferenciando averías esporádicas de permanentes). (págs. 33-34)
5. Seleccionar la función "03 - Diagnóstico de elementos actuadores" para activar secuencialmente el servomotor de temperatura V68, el servomotor de recirculación V113 y el embrague N25. (pág. 33)
6. Seleccionar la función "08 - Leer bloque de valores de medición" para analizar las señales de los sensores de temperatura y la tensión de los potenciómetros en tiempo real. (pág. 33)
7. Tras reparar las anomalías, seleccionar la función "04 - Iniciar ajuste básico" para autoadaptar los topes del motor de la trampilla de mezcla y finalizar ejecutando la función "05 - Borrar la memoria de averías". (pág. 33)

## Valores de referencia

- Dirección de acceso en diagnosis: "08 - Aire acondicionado". (pág. 33)
- Clave de recambios leída en función: 6K0959291. (pág. 34)
- Código de tipo de equipo: "220" para Autoclima; "110" para Calefacción motorizada (pin 21 a masa). (pág. 34)
- Criterio de borrado automático de averías esporádicas: tras 40 puestas en marcha sin reaparición del fallo. (pág. 33)

## Verificación tras la reparación

Conectar el encendido y confirmar que los símbolos del display central no parpadean y que al ingresar en la función 02 no se registran códigos de avería almacenados. (págs. 14, 33)

## Imágenes requeridas

- Muestra de la pantalla del lector de diagnosis indicando la clave de recambio y la codificación del tipo de equipo Autoclima (6K-AUTOCLIMA-220) — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 34
