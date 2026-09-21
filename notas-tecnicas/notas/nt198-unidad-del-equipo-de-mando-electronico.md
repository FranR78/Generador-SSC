---
id: ssc.sin-clasificar.unidad-del-equipo-de-mando-electronico
modulo: ssc
unidad: clima
nt: 198
titulo: "Unidad Del Equipo De Mando Electrónico"
codigo: "J255"
ubicacion: "Ubicada detrás del mando giratorio de distribución de aire en la consola central"
aplicacion: "Calefacción motorizada y Autoclima"
menu: "Unidad Del Equipo De Mando Ele J255"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Regular la temperatura del aire, gestionar los servomotores V68 y V113, controlar la turbina V2 y emitir la señal de conexión del compresor.

## Principio de funcionamiento

Módulo electrónico microprocesado. La unidad es la misma para autoclima y calefacción motorizada. Al conectar la UCE al mazo de cables, si el contacto 21 recibe masa mediante un puente de codificación, la UCE adopta el programa de Calefacción Motorizada; si no hay puente, adopta el programa de Autoclima.

## Características

Unidad electrónica con autodiagnóstico integral accesible por dirección.

## Valores de trabajo

| Codificación en lectura (Función 01) | Tipo de equipo / Programa activo |
|---|---|
| **2 2 0** | **Autoclima** (Regulación electrónica de temperatura y caudal) |
| **1 1 0** | **Calefacción Motorizada** (Accionamiento eléctrico sin regulación automática) |

## Anomalías frecuentes

Interrupción del puente de masa en el contacto 21 que modifica la codificación interna; fallo del microprocesador.

## Comportamiento en avería

Inoperatividad del sistema o parpadeo continuo de todos los dígitos de la pantalla al conectar el encendido.

## Cómo comprobarlo

Consultar el código de equipo mediante la Función 01 en el equipo de diagnosis. Consultar la memoria de averías mediante la Función.

## Imágenes requeridas

- Módulo de la unidad J255 con la asignación de pines y conector de diagnosis — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 11
