---
id: ssc.sin-clasificar.autodiagnosis-y-funciones-de-control-de-climatizacion
modulo: ssc
unidad: clima
nt: 201
tipo: proceso
subtipo: diagnostico
titulo: "Autodiagnosis Y Funciones De Control De Climatización"
menu: "Autodiagnosis Y Funciones De Control D"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer el procedimiento de autodiagnosis, lectura y borrado de averías, ajuste básico y análisis del bloque de valores de medición en las UCEs J255. Se aplica a la localización de averías en calefacción motorizada y autoclima.

## Fundamento

La UCE J255 supervisa el estado de sensores y actuadores. Memoriza averías esporádicas (se eliminan tras 40 puestas en marcha sin repetirse) y permanentes (requieren reparación física y borrado manual).

## Condiciones previas

- Tensión de batería correcta.  
- Encendido conectado ("borne 15 ON").

## Equipo y material

- Equipo de diagnosis homologado con cable de conexión al puerto T16 de 16 polos.

## Desarrollo

1. Ingresar en la diagnosis por el **Código de dirección "08 - Aire acondicionado"**.  
2. **Función 01 (Versión de la unidad de control):** Comprobar la clave de recambios y el tipo de equipo (220 = Autoclima, 110 = Calefacción Motorizada).  
3. **Función 02 (Consultar memoria de averías):** Leer los códigos DTC de sensores y actuadores.  
4. **Función 03 (Diagnóstico de elementos actuadores):** Excitar cíclicamente el acoplamiento N25, la turbina V2 (variación de 0 a 12 V en pasos de 2,5 V cada 2 s), el motor V68 (de mínimo a máximo) y V113 (de aire exterior a recirculación).  
5. **Función 04 (Ajuste básico):** Introducir el **Grupo 002** para que la UCE reconozca y memorice las posiciones límite del motor V68. Realizar siempre al sustituir V68 o la UCE J255.  
6. **Función 08 (Bloque de valores de medición):** Analizar los parámetros de trabajo en tiempo real en los grupos 001 al.  
7. Subsanar las averías, ejecutar la **Función 05 (Borrar memoria de averías)** y salir con **Función 06 (Finalizar emisión)**.

## Valores de referencia

| Función / Grupo | Parámetro leído / Valor teóricamente correcto |
|---|---|
| **Función 04 — Grupo 002** | Muestra posición real, calculada y topes superior e inferior de V68 en Voltios |
| **Función 08 — Grupo 001** | Campo 1 (Compresor: 0=OFF, 1=ON); Campo 2 (Presostato F129: 1=OK); Campo 3 (V113: 0=Ext, 1=Rec) |
| **Función 08 — Grupo 005** | Campo 1 (Voltios solicitados V2); Campo 2 (Voltios reales V2); Campo 4 (Mando distribución: 0-100%) |

## Interpretación y errores frecuentes

- Omitir el Ajuste Básico (Función 04 Grupo 002) al sustituir el motor V68 o la UCE J255: genera desacoples en la regulación de mezcla de aire y parpadeo continuo en el display.

## Verificación final

Confirmar la ausencia de códigos en la memoria de averías (Función 02) y comprobar que el display no parpadee al conectar el encendido.
