---
id: ssc.sin-clasificar.logica-de-regulacion-de-temperatura-modos-automatico-semiautomatico-y-manual
modulo: ssc
unidad: sin-clasificar
nt: 841
tipo: proceso
subtipo: fundamento
titulo: "Lógica De Regulación De Temperatura (Modos Automático, Semiautomático Y Manual)"
menu: "Lógica De Regulación De Temperatura (M"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el funcionamiento del programa de control de la UCE J255 para ajustar y mantener el clima en el habitáculo en Autoclima y Calefacción Motorizada.

## Fundamento

Procesamiento continuo de las temperaturas de consigna, interior, aire de entrada y exterior para gobernar la posición de la trampilla de mezcla, la velocidad de la turbina, la recirculación y la marcha del compresor.

## Desarrollo

* **Modo Automático (exclusivo de Autoclima):** Indicado con la palabra AUTO en display. La UCE procesa G17, G56, G191 y G192. Actúa automáticamente sobre la trampilla V68 (mezclando el aire que pasa por el evaporador con el del radiador de calefacción), la turbina V2 (ajustando el caudal), la recirculación V113 y el compresor N25. Al seleccionar desorientación parabrisas, anula la recirculación, sube la turbina al máximo y conecta el compresor.
* **Modo Semiautomático (exclusivo de Autoclima):** La UCE mantiene la regulación automática de la temperatura, pero el usuario fija uno o varios parámetros manuales (velocidad de turbina, recirculación o apagado del compresor). Al modificar un parámetro, desaparece la palabra AUTO del display.
* **Modo Manual (único en Calefacción Motorizada; opcional en Autoclima):** La trampilla V68 se desplaza a impulsos de pulsador y queda fija. La turbina V2, la recirculación y el compresor obedecen exclusivamente a las órdenes manuales. En Autoclima manual, la temperatura se indica con letras en lugar de ºC.

## Interpretación y errores frecuentes

* Interpretar la desaparición de la palabra AUTO en el display como una avería; indica que el usuario ha seleccionado manualmente un parámetro en modo semiautomático.

## Verificación final

Verificar en la pantalla del display los modos AUTO, manual o parámetros fijos según la selección introducida en la botonera E87.

## Imágenes requeridas

- Esquema de regulación de entradas y salidas de la UCE J255 — Fuente: cd.pdf, págs. 26-28
