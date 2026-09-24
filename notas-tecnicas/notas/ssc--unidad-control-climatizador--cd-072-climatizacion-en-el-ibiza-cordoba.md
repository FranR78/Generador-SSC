---
id: ssc.unidad-control-climatizador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 205
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Unidad del equipo de mando electrónico J255"
codigo: "J255"
menu: "Unidad del equipo de mando ele J255"
grupo: "Control de climatización"
clave: unidad-control-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 26-28, 34"
relacionados: ["autodiagnostico-climatizador", "regulacion-automatica"]
palabras: ["J255", "modo automático", "modo semiautomático", "modo manual", "codificación"]
---

## Objeto

Procesar las señales de los sensores, los comandos del usuario y gestionar la regulación térmica y la activación de los actuadores del autoclima o de la calefacción motorizada. (págs. 26-28).

## Fundamento

La unidad J255 es idéntica físicamente para el autoclima y para la calefacción motorizada. Su programa de funcionamiento se determina mediante una codificación externa por cableado en el conector de la unidad. (pág. 34).

## Desarrollo

1. Codificación: Al conectar la unidad al mazo de cables, si el contacto 21 recibe masa a través de un puente de codificación, la unidad trabaja como calefacción motorizada. Si no recibe masa en el contacto 21, funciona como autoclima. (pág. 34).
2. Modos de funcionamiento del Autoclima:
   - Modo automático (AUTO): La unidad evalúa la temperatura solicitada, exterior, interior y del aire de entrada. Controla automáticamente la trampilla de temperatura, velocidad de turbina, recirculación y conexión del compresor. (págs. 26-27).
   - Modo semiautomático: La regulación de temperatura se mantiene activa, pero el usuario fija manualmente uno o varios parámetros (velocidad de turbina, recirculación o conexión AC). Desaparece la palabra AUTO del display. (pág. 27).
   - Modo manual: La unidad acciona los componentes únicamente a petición del usuario desde los pulsadores. En el display la temperatura se indica con letras (p. ej. COLD / HOT) en lugar de ºC. (pág. 28).
3. Iluminación: Regula la intensidad luminosa de los leds de los pictogramas del mando de distribución según la señal del regulador E20. (pág. 28).

## Valores de referencia

Masa en el contacto 21 del conector de J255: Calefacción motorizada.
Sin masa en contacto: Autoclima. (pág. 34).

## Errores de concepto frecuentes

Creer que existen dos unidades de control físicamente distintas para recambio (una para autoclima y otra para calefacción motorizada); se comercializa una única unidad de control J255 cuya lógica de funcionamiento se selecciona mediante la masa presente en el pín 21 del conector. (pág. 34).
