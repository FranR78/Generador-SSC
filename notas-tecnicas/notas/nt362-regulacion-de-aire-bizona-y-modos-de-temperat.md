---
id: ssc.sin-clasificar.regulacion-de-aire-bizona-y-modos-de-temperatura
modulo: ssc
unidad: sin-clasificar
nt: 362
tipo: proceso
subtipo: fundamento
titulo: "Regulación De Aire Bizona Y Modos De Temperatura"
menu: "Regulación De Aire Bizona Y Modos De T"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto and alcance

Explicar las estrategias de mezcla de aire (Mínima, Máxima e Intermedia) y la arquitectura de un bloque climatizador con distribución independiente bizona.

## Fundamento

El aire forzado atraviesa el evaporador. Según la demanda de temperatura, la UEGAA posiciona la compuerta de mezcla para derivar todo o parte del aire hacia el radiador de calefacción antes de ingresar al habitáculo. En el sistema bizona, el bloque duplica las trampillas y canalizaciones para regular de forma independiente el lado izquierdo y derecho.

## Condiciones previas

Climatizador conectado y consignas seleccionadas en el panel E87.

## Desarrollo

- **Temperatura Mínima (LOW):** La UEGAA cierra la compuerta de mezcla y apaga la calefacción. Todo el aire pasa solo por el evaporador al máximo rendimiento.  
- **Temperatura Máxima (HIGH):** La UEGAA abre la compuerta de mezcla al máximo y apaga el A/C. Todo el aire pasa por el radiador de calefacción.  
- **Temperatura Intermedia:** La compuerta se sitúa en posición intermedia; el aire enfriado en el evaporador se divide en dos flujos (uno directo y otro calefactado) que se mezclan a la salida.  
- **Sistema Bizona:** Utiliza un solo conducto de entrada y una turbina, pero duplica conductos internos, trampillas de mezcla con servomotores y sensores de temperatura para conductor y acompañante.

## Valores de referencia

| Modo de temperatura | Posición de compuerta de mezcla | Estado del circuito frigorífico |
|---|---|---|
| **Mínima (LOW)** | Totalmente CERRADA hacia calefacción | **A/C Activado al máximo** |
| **Máxima (HIGH)** | Totalmente ABIERTA hacia calefacción | **A/C Desactivado** |
| **Intermedia** | Posición de regulación proporcional | **A/C y Calefacción activados** |

## Interpretación y errores frecuentes

- Asumir que un sistema bizona lleva dos turbinas de aire: utiliza una única turbina de entrada y duplica las trampillas y canales internos.

## Verificación final

Verificar la salida de aire a diferente temperatura en las toberas del conductor y acompañante.

## Imágenes requeridas

- Bloque climatizador bizona y mandos independientes para conductor y acompañante — Fuente: LA CLIMATIZACIÓN.pdf, pág. 131
