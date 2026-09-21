---
id: ssc.sin-clasificar.estructura-e-integracion-de-la-plataforma-radio-media-center-rmc
modulo: ssc
unidad: sin-clasificar
nt: 466
tipo: proceso
subtipo: fundamento
titulo: "Estructura E Integración De La Plataforma Radio Media Center (Rmc)"
menu: "Estructura E Integración De La Platafo"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la arquitectura e integración de funciones de infotenamiento dentro de la plataforma Radio Media Center (RMC) y el sistema MMI Radio plus.

## Fundamento

A diferencia de los sistemas MMI de tercera generación que utilizan un módulo de radio independiente, la plataforma RMC unifica casi todas las funciones de hardware de infotenamiento y el sintonizador de radio en una única unidad central (J794), simplificando el cableado y la estructura de red del vehículo.

## Desarrollo

- La plataforma Radio Media Center (RMC) agrupa en una única carcasa equivalente a un dispositivo de tamaño 1-DIN la mayoría de las funciones de infotenamiento.  
- Actúa como controlador central del sistema de infotenamiento.  
- Elimina el módulo de control de radio separado, integrando sus funciones directamente en la unidad de control de electrónica de información 1 J794.  
- En vehículos con equipamiento MMI Radio plus, la unidad J794 incorpora además un amplificador de audio adicional.  
- Agrupa y gestiona de forma centralizada las siguientes funciones y componentes:  
  * Reproductor de CD (R89).  
  * Unidad de control para la pantalla de información frontal (J523).  
  * Módulo de control de entrada por voz (J507).  
  * Conexión para fuentes de audio externas Audi Music Interface / AMI (R199).  
  * Lector de tarjetas SD.  
  * Transceptor de teléfono (R36).  
  * Interfaz con la unidad de control del sistema de sonido digital (J525).

## Valores de referencia

| Parámetro / Dimensión | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Tamaño del alojamiento del módulo RMC** | **1-DIN** | Estándar de montaje en salpicadero |

## Interpretación y errores frecuentes

- Buscar un módulo de control de radio independiente durante las tareas de diagnosis o sustitución: en la plataforma RMC la radio está integrada dentro de la propia unidad J794.

## Imágenes requeridas

- Módulos de control y funciones agrupadas en la unidad J794 del Radio Media Center — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 31
