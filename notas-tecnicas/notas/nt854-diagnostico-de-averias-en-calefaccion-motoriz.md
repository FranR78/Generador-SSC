---
id: ssc.sin-clasificar.diagnostico-de-averias-en-calefaccion-motorizada-y-regulacion-de-temperatura
modulo: ssc
unidad: sin-clasificar
nt: 854
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Averías En Calefacción Motorizada Y Regulación De Temperatura"
menu: "Diagnóstico De Averías En Calefacción "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establece los pasos para identificar las causas que impiden el calentamiento del aire de entrada o provocan el fallo total de la calefacción motorizada. Aplica a los sistemas de calefacción motorizada y autoclima del SEAT Ibiza/Córdoba '99.

## Fundamento

En los sistemas con calefacción motorizada y autoclima, la regulación de la temperatura depende de la UCE, el motor de la trampilla de temperatura V68, el radiocasete y las sondas térmicas. El fallo de cualquiera de estos elementos impide la mezcla adecuada de aire caliente.

## Condiciones previas

Motor en marcha a temperatura de servicio y contacto encendido.

## Equipo y material

Lector de averías / equipo de diagnosis y Manual de Reparaciones.

## Desarrollo

* **Componentes que pueden provocar la ausencia de aire caliente:**
  - Motor de la trampilla de temperatura V68 (bloqueado o defectuoso).
  - Cable o articulación mecánica de la trampilla de temperatura.
  - Unidad de control del autoclima / calefacción motorizada J255.
  - Radiocasete (pasarela de datos de pulsadores).
  - Transmisor de temperatura exterior G17.
  - Pulsador de temperatura en el display / panel de mandos E87.
  - Radiador de calefacción / circuito de refrigerante del motor.
* **Pasos de diagnosis:**
  1. Efectuar un reconocimiento de funcionamiento del sistema evaluando la respuesta al accionar los pulsadores de temperatura.
  2. Conectar el lector de averías y consultar la memoria de fallos (función "02").
  3. Ejecutar la prueba de actuadores (función "03") para verificar el movimiento completo del motor V68 de tope a tope.
  4. Consultar los valores de posición real y calculada de V68 en la función "08" (bloques de medición).
  5. Consultar el Manual de Reparaciones para proceder al desmontaje y sustitución del componente defectuoso.

## Valores de referencia

| Elemento Afectado | Verificación en Lector | Criterio de Avería |
| :--- | :--- | :--- |
| Motor de trampilla de temp. V68 | Función "03" / Bloque "08" | Bloqueo mecánico o fuera de límites en tensión |
| Transmisor de temp. exterior G17 | Función "08" | Lectura errónea o valor sustitutivo de 20 ºC |

## Interpretación y errores frecuentes

* Atribuir el fallo de calefacción al compresor de aire acondicionado o al conmutador de presión; ninguno de estos elementos interviene en el calentamiento del aire.
* Cambiar la UCE sin comprobar previamente si el motor V68 se encuentra atascado mecánicamente.

## Verificación final

Confirmar que al seleccionar la temperatura máxima (HOT o ºC elevados) el caudal de aire sale caliente por los difusores seleccionados.

## Seguridad y normativa

Riesgo de quemaduras por líquido refrigerante al intervenir en los latiguillos del radiador de calefacción.
