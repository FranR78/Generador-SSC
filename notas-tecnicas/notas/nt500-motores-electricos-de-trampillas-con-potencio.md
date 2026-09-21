---
id: ssc.sin-clasificar.motores-electricos-de-trampillas-con-potenciometro-v68-v70-v71-v85
modulo: ssc
unidad: sin-clasificar
nt: 500
titulo: "Motores Eléctricos De Trampillas Con Potenciómetro (V68, V70, V71, V85)"
codigo: "V68 (con potenciómetro G92), V70 (con G112), V71 (con G113), V85 (con G114)"
ubicacion: "Mueble climatizador"
aplicacion: "Climatronic de Seat Toledo"
menu: "Motores Eléctricos De Trampill V68 (con potenciómetro G92), V70 (con G112), V71 (con G113), V85 (con G114)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Mover mecánicamente las trampillas de temperatura, central, velocidad/recirculación y reposapiés/descongelación, informando a la UCE de su posición exacta.

## Principio de funcionamiento

Motores de corriente continua de giro limitado. Se alimentan a 12 V y cambian su sentido de giro al invertir la polaridad de la alimentación enviada por la UCE J255. En su interior, un potenciómetro solidario al eje emite una señal de tensión variable que informa a la UCE de la posición angular real de la trampilla.

## Características y asociación de componentes

- **V68:** Motor de trampilla de temperatura (con potenciómetro **G92**).  
- **V70:** Motor de trampilla central (con potenciómetro **G112**).  
- **V71:** Motor de trampillas de velocidad y recirculación (con potenciómetro **G113**).  
- **V85:** Motor de trampilla de descongelación / reposapiés (con potenciómetro **G114**).

## Valores de trabajo

| Parámetro | Valor prescrito | Condiciones de validez |
|---|---|---|
| **Tensión de alimentación del motor** | **12 V CC** | En bornes del motor (polaridad reversible) |
| **Señal del potenciómetro** | **Tensión variable de retorno** | Entre cursor y masa según posición |

## Anomalías frecuentes

Desgaste o suciedad en las pistas de carbón del potenciómetro interno; rotura de piñones de plástico.

## Comportamiento en avería

Bloqueo de la trampilla en una posición fija y registro de código de error en la memoria de averías.

## Cómo comprobarlo

Realizar el **Ajuste Básico mediante el VAG 1551** (función 04) cada vez que se sustituya un motor o la UCE J255 para memorizar los topes finales de carrera.
