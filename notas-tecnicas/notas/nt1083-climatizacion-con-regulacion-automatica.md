---
id: ssc.sin-clasificar.climatizacion-con-regulacion-automatica
modulo: ssc
unidad: sin-clasificar
nt: 1083
tipo: proceso
subtipo: fundamento
titulo: "Climatización Con Regulación Automática"
menu: "Climatización Con Regulación Automátic"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la arquitectura electrónica y la lógica de control automático de temperatura, caudal de aire y distribución en un climatizador automático.

## Fundamento

Procesamiento centralizado de señales procedentes de sensores térmicos, fotodiodos y tramas del CAN-Bus. La unidad de control calcula las órdenes de salida y gobierna servomotores con potenciómetros de posición y un regulador electrónico de turbina.

## Desarrollo

* La UCE recibe datos de temperatura interior, exterior, aire aspirado, difusores, radiación solar y datos del CAN-Bus (velocidad del vehículo, régimen de motor, tiempo parado).
* Compara los valores reales con la temperatura de consigna seleccionada por el usuario.
* Alimenta de forma independiente los servomotores de las trampillas (mezcla, distribución, recirculación) y el módulo regulador de la turbina de aire.
* Los potenciómetros de retorno informan a la UCE de la posición exacta de cada servomotor. Cualquier fallo queda grabado en la memoria de averías.

## Interpretación y errores frecuentes

* Interpretar una falta de movimiento de la trampilla como un fallo mecánico sin comprobar previamente la señal del potenciómetro de posición.

## Verificación final

Verificar la ausencia de averías registradas en la memoria de la UCE tras la prueba de funcionamiento.

## Imágenes requeridas

- Cuadro sinóptico de sensores, UCE y actuadores de un sistema de climatización automática — Fuente: Nº10. Clima electrónica.pdf, pág. 102
