---
id: ssc.sin-clasificar.autodiagnostico-del-sistema-climatronic
modulo: ssc
unidad: sin-clasificar
nt: 497
tipo: proceso
subtipo: procedimiento
titulo: "Autodiagnóstico Del Sistema Climatronic"
menu: "Autodiagnóstico Del Sistema Climatroni"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer las funciones de autodiagnóstico disponibles en la unidad Climatronic J255 mediante el equipo de diagnosis VAG.

## Fundamento

La UCE J255 monitoriza continuamente el estado de sus sensores y actuadores. A través del conector OBD y el protocolo de diagnosis VAG, permite consultar memorias, activar componentes y realizar calibraciones de posición inicial.

## Condiciones previas

- Encendido conectado (15 ON).  
- Equipo de diagnosis (VAG 1551 / VAG 1552 / VAS) conectado al puerto de diagnosis del vehículo.

## Equipo y material

- Equipo de diagnosis VAG 1551 / VAG 1552 / VAG 1598 con adaptador VAG 1598/11 y 1598/12.

## Desarrollo

Seleccionar la dirección **08 - Electrónica del climatizador** e ingresar en los siguientes modos de trabajo:  
1. **01 - Versión unidad de control:** Muestra la identificación de hardware y firmware de la UCE.  
2. **02 - Consulta de la memoria de averías:** Lee las averías registradas en sensores y motores.  
3. **03 - Diagnóstico de elementos actuadores:** Activa secuencialmente relés, acoplamiento N25 y servomotores para verificar su respuesta física.  
4. **04 - Iniciar ajuste básico:** Realiza el aprendizaje y calibración de los topes finales de los motores de las trampillas.  
5. **05 - Borrar la memoria de averías:** Elimina los códigos de fallo tras reparar las averías.  
6. **06 - Finalizar la emisión:** Cierra la comunicación de diagnosis.  
7. **07 - Codificar la unidad de control:** Ajusta la codificación según equipamiento y motorización.  
8. **08 - Leer bloque de valores de medición:** Muestra valores en tiempo real de temperatura, posición de potenciómetros y señales de presión.

## Interpretación y errores frecuentes

- Omitir la función **04 - Iniciar ajuste básico** tras sustituir un motor de trampilla o la UCE: la unidad no reconocerá los límites de carrera provocando errores de regulación.

## Verificación final

Ausencia de códigos de avería en la función 02 y confirmación de "Ajuste básico realizado" en la función.
