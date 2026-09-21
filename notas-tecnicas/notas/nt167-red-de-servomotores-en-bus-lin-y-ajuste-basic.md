---
id: ssc.sin-clasificar.red-de-servomotores-en-bus-lin-y-ajuste-basico-de-aprendizaje
modulo: ssc
unidad: clima
nt: 167
tipo: proceso
subtipo: fundamento
titulo: "Red De Servomotores En Bus Lin Y Ajuste Básico De Aprendizaje"
menu: "Red De Servomotores En Bus Lin Y Ajust"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la arquitectura de comunicación multiplexada LIN-Bus de los servomotores del climatizador y el procedimiento de asignación de direcciones lógicas y memorización de topes finales (Ajuste Básico). Se aplica en la sustitución de servomotores o de la UCE -J255-.

## Fundamento

Todos los servomotores montados en el climatizador son físicamente idénticos y cuentan con un microchip interno de bus LIN. Se conectan en serie mediante un único cable de datos de 3 vías (Alimentación 12V, Masa, y LIN-Bus). Durante el Ajuste Básico grupo 004, la UCE asigna automáticamente la dirección lógica a cada motor según su posición física en el cableado. A continuación, en el Ajuste Básico grupo 001, cada motor desplaza su trampilla a ambos extremos registrando los valores de tope en la memoria de -J255-.

## Condiciones previas

- Vehículo detenido con encendido conectado ("borne 15 ON").  
- Batería con tensión estable (> 12,2 V).  
- Cableado LIN y conectores de servomotores libres de cortocircuitos o interrupciones.

## Equipo y material

- Equipo de diagnosis OBD (VAS 5051 / VAS 5052).

## Desarrollo

1. Si se sustituye un servomotor o la UCE -J255-, seleccionar la función "06 - Ajuste básico" e introducir el **grupo de indicación "004"** ("Asignación automática de direcciones"). La UCE asigna las direcciones lógicas a los servomotores por el orden en que se encuentran conectados en el mazo de cables.  
2. Introducir a continuación el **grupo de indicación "001"** ("Ajuste básico de trampillas"): Los servomotores desplazan progresivamente las trampillas hasta el tope inferior y superior, memorizando las posiciones óhmicas internas.  
3. Durante la ejecución del grupo 001, el testigo de la tecla AC parpadea (en versión Basis) o parpadean los dígitos del display (en versión Komfort).  
4. Esperar a que finalice el proceso (aprox. 1 a 2 minutos) hasta que la pantalla muestre "Ajuste básico ejecutado" y los testigos dejen de parpadear.  
5. Ejecutar el **grupo de indicación "003"** ("Primera puesta en funcionamiento del compresor"): Con motor al ralentí, la UCE hace funcionar el compresor durante 5 minutos para adaptar el rodaje de sus componentes internos.

## Valores de referencia

| Parámetro / Grupo de indicación | Valor de referencia |
|---|---|
| **Tope inferior autoadaptado** | Valor fijo ~10000 unidades |
| **Tope superior autoadaptado** | Valor comprendido entre 11000 y 20000 unidades |
| **Tolerancia máxima de carrera (Canal adaptación 70)** | Max. 500 unidades de desviación |
| **Tolerancia máxima de tope en trabajo (Canal adaptación 71)** | Max. 150 unidades de desviación |

## Interpretación y errores frecuentes

- Confundir dos conectores entre servomotores adyacentes; la UCE les asignará direcciones invertidas en el grupo 004 y las trampillas se moverán al contrario de lo solicitado.  
- Si se corta el cable de datos LIN a la entrada de un servomotor (ej. posición C), ese servomotor y todos los siguientes en la cadena (D a N) quedan inactivos y registran la avería "Direccionamiento automático incorrecto".

## Verificación final

Verificar en el bloque de valores de medición (grupos 004 a 023) que la posición efectiva de cada chapaleta coincida con el valor teórico (0% a 100%) y comprobar el borrado automático de la avería "Ajuste básico no ejecutado".

## Imágenes requeridas

- Esquema del circuito primitivo en serie del cableado LIN-Bus uniendo los servomotores A a N con la UCE J255 — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 231
