---
id: ssc.sin-clasificar.regulacion-de-temperatura-manual-y-automatica-climatronic
modulo: ssc
unidad: clima
nt: 442
tipo: proceso
subtipo: fundamento
titulo: "Regulación De Temperatura Manual Y Automática (Climatronic)"
menu: "Regulación De Temperatura Manual Y Aut"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Comparar el principio de regulación manual frente a la regulación electrónica digital (Climatronic).

## Fundamento

El evaporador enfría el aire al máximo de su capacidad. Para lograr la temperatura deseada en el habitáculo, se mezcla una parte del caudal frío haciéndolo pasar por el intercambiador de calor de la calefacción. En el sistema manual, el conductor actúa como unidad de control moviendo las trampillas; en el sistema automático (Climatronic), la UCE J255 analiza sensores y calcula la posición exacta de los servomotores de las trampillas.

## Condiciones previas

Sistema de climatización encendido.

## Desarrollo

- La unidad de control digital (J255 / E87) procesa las entradas de los termosensores (exterior, habitáculo, aireadores, fotosensor).  
- El microprocesador compara la temperatura teórica (consigna) con la efectiva.  
- Envía órdenes eléctricas a las etapas finales para posicionar los servomotores y regular la turbina de aire fresco.  
- Red CAN-BUS: permite integrar señales adicionales como velocidad del vehículo, régimen del motor y tiempo en parado.

## Valores de referencia

| Parámetro | Rango de ajuste |
|---|---|
| **Margen de regulación bizona (Dual)** | **18 ºC a 29 ºC** |

## Interpretación y errores frecuentes

- Un parpadeo de todos los símbolos del display de Climatronic durante unos segundos al dar el contacto indica la presencia de averías registradas en la memoria.

## Verificación final

Realizar la lectura de la memoria de averías y el "ajuste básico" de los servomotores con el equipo de diagnosis.

## Imágenes requeridas

- Ubicación de sensores y estructura del sistema Climatronic — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 49
