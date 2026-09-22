---
id: ssc.sin-clasificar.diagnostico-de-calefaccion-motorizada-inoperativa-con-display-apagado
modulo: ssc
unidad: sin-clasificar
nt: 868
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Calefacción Motorizada Inoperativa Con Display Apagado"
menu: "Diagnóstico De Calefacción Motorizada "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establece el procedimiento de comprobación visual, verificación eléctrica y localización de averías cuando la calefacción motorizada no se conecta y la pantalla del display permanece totalmente apagada. Aplica a los sistemas de climatización de SEAT Ibiza/Córdoba '99.

## Fundamento

La pantalla del display y la botonera E87 son alimentadas y gestionadas eléctricamente a través del radiocasete R. La falta de alimentación general (+30, +15, masa) o la avería en el radiocasete/fusibles provoca el apagado total del display y la inoperatividad del sistema.

## Condiciones previas

Tensión de batería suficiente (12 V) y encendido conectado.

## Equipo y material

Polímetro, esquemas eléctricos del vehículo y equipo de diagnosis.

## Desarrollo

* **Comprobación visual inicial:**
  - Inspeccionar el estado de los fusibles de alimentación de la calefacción motorizada, cuadro e iluminación.
  - Verificar la correcta inserción de los conectores traseros del radiocasete R y de la consola central E87.
* **Componentes que pueden provocar la avería:**
  - Fusibles de alimentación (+30 / +15) fundidos.
  - Unidad del radiocasete R (fallo interno en la alimentación de la pantalla).
  - Mazo de cables de interconexión o fallo de masa en la línea.
  - Unidad de control J255 / consola de mandos E87.
* **Tabla de verificaciones eléctricas:**
  1. Comprobar tensión de +12 V en borne 30 (positivo directo) y borne 15 (positivo tras contacto).
  2. Comprobar continuidad a masa en borne 31 del radiocasete R y UCE J255.
  3. Verificar la continuidad del bus de datos de interconexión.
  4. Si las alimentaciones son correctas y el display continúa apagado, sustituir la unidad del radiocasete o la botonera E87.

## Valores de referencia

| Punto de Verificación | Valor Esperado y Condición |
| :--- | :--- |
| Tensión en línea +30 | 12 V (constante directo de batería) |
| Tensión en línea +15 | 12 V (con contacto encendido) |
| Resistencia en línea 31 (Masa) | 0 Ω respecto a chasis |

## Interpretación y errores frecuentes

* Sustituir la centralita de clima J255 pensando que está averiada cuando el fallo real proviene del fusible del radiocasete R (encargado de alimentar y gestionar el display).

## Verificación final

Verificar el encendido de los dígitos en el display al conectar el contacto y la respuesta de la calefacción motorizada al accionar los pulsadores.
