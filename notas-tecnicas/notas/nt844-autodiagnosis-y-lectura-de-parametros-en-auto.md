---
id: ssc.sin-clasificar.autodiagnosis-y-lectura-de-parametros-en-autoclima-y-calefaccion-motorizada
modulo: ssc
unidad: sin-clasificar
nt: 844
tipo: proceso
subtipo: diagnostico
titulo: "Autodiagnosis Y Lectura De Parámetros En Autoclima Y Calefacción Motorizada"
menu: "Autodiagnosis Y Lectura De Parámetros "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el procedimiento de interrogación electrónica, comprobación de actuadores, ajuste básico de topes y lectura de bloques de parámetros en la UCE J255.

## Fundamento

La UCE J255 monitoriza continuamente sus sensores y actuadores. Registra averías esporádicas (se borran tras 40 puestas en marcha sin fallo) y permanentes, consultables desde la dirección de diagnóstico.

## Condiciones previas

Encendido conectado (+15) y equipo de diagnosis conectado al conector T16.

## Equipo y material

Lector de averías / equipo de diagnosis conectado al conector de diagnosis T16 de 16 polos.

## Desarrollo

1. Acceder al sistema de diagnóstico introduciendo la **Dirección 08 — Aire acondicionado**.
2. **Función 01 (Versión de la unidad):** Identifica la clave de recambios (ej. 6K0959291), versión de software y el programa codificado por el puente de masa en el contacto 21 (Autoclima o Calefacción Motorizada).
3. **Función 02 (Consultar memoria de averías):** Muestra los códigos de avería de sensores y actuadores memorizados.
4. **Función 03 (Diagnóstico de elementos actuadores):** Activa secuencialmente:
   - Acoplamiento N25: Conexión/desconexión cada 2 segundos (solo Autoclima).
   - Turbina V2: Subida escalonada de velocidad de 0 V al máximo en pasos de 2,5 V cada 2 segundos.
   - Motor V68: Desplazamiento completo de posición mínima a máxima.
   - Motor V113: Desplazamiento alternativo entre aire exterior y recirculación.
5. **Función 04 (Ajuste Básico):** Obligatorio al sustituir el motor V68 o la UCE J255. Entrar en el grupo 002 para memorizar los topes de V68.
6. **Función 05 (Borrar memoria)** y **Función 06 (Finalizar emisión)**.
7. **Función 08 (Leer bloque de valores de medición):** Muestra los grupos de datos:
   - *Grupo:* Estado salida compresor (0/1), estado F129 (0 fuera/1 rango), estado V113 (0 ext/1 recir), velocidad vehículo.
   - *Grupo:* V68 posición real (V), calculada (V), tope superior (V) y tope inferior (V).
   - *Grupo:* Pulsador aumento turbina (0/1), disminución turbina (0/1), pulsador AC (0/1), pulsador AUTO (0/1).
   - *Grupo:* Pulsador recirculación (0/1), disminución temp. (0/1), aumento temp. (0/1), posición de distribución (0-100%).
   - *Grupo:* Tensión solicitada V2 (V), tensión real V2 (V), tensión de alimentación (V).
   - *Grupo:* Temp. exterior G17 (ºC), difusor central G191 (ºC), difusor reposapiés G192 (ºC), habitáculo G56 (ºC).

## Valores de referencia

| Grupo de Medición | Campo 1 | Campo 2 | Campo 3 | Campo 4 |
| :--- | :--- | :--- | :--- | :--- |
| **Grupo 001** | Estado salida compresor (0/1) | Estado F129 (0 fuera/1 rango) | Estado V113 (0 ext/1 recir) | Velocidad vehículo (km/h) |
| **Grupo 002** | V68 posición real (V) | V68 posición calculada (V) | V68 tope superior (V) | V68 tope inferior (V) |
| **Grupo 005** | Tensión solicitada V2 (V) | Tensión real V2 (V) | Tensión de alimentación (V) | Libre |
| **Grupo 006** | Temp. exterior G17 (ºC) | Temp. difusor central G191 (ºC) | Temp. difusor reposapiés G192 (ºC) | Temp. habitáculo G56 (ºC) |

## Interpretación y errores frecuentes

* Intentar realizar la Función 04 (Ajuste Básico) sin seleccionar el grupo; la UCE no memorizará las posiciones límite del motor V68.

## Verificación final

Verificar la ausencia de averías grabadas en la memoria tras efectuar el borrado y comprobar el movimiento correcto de las trampillas durante el diagnóstico de actuadores.
