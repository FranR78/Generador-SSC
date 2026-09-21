---
id: ssc.sin-clasificar.captadores-de-temperatura-ctn
modulo: ssc
unidad: sin-clasificar
nt: 237
titulo: "Captadores De Temperatura Ctn"
codigo: "No documentado en fuentes"
ubicacion: "Repartidos en la entrada de aire exterior, salida del evaporador, salida del radiador de calefacción y dentro del habitáculo"
aplicacion: "Climatizadores automáticos con regulación electrónica"
menu: "Captadores De Temperatura Ctn No documentado en fuentes"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir las temperaturas del aire en los puntos clave del circuito e informar al calculador electrónico.

## Principio de funcionamiento

Termistancias de Coeficiente de Temperatura Negativo (CTN). Su resistencia eléctrica es inversamente proporcional a la temperatura: al aumentar la temperatura, su resistencia disminuye según una curva característica no lineal. La sonda de habitáculo incorpora además una microturbina para aspirar aire y homogeneizar la lectura.

## Características

Sensor termistor de 2 vías encapsulado. La sonda interna incluye un micromotor de turbina.

## Valores de trabajo

| Variación de Temperatura | Comportamiento de la Resistencia |
|---|---|
| **Temperatura AUMENTA** | Resistencia **DISMINUYE** (R ) |
| **Temperatura DISMINUYE** | Resistencia **AUMENTA** (R ) |

## Anomalías frecuentes

Bloqueo de la microturbina por pelusas; interrupción del hilo o cortocircuito a masa.

## Comportamiento en avería

El climatizador expulsa aire excesivamente caliente o frío de forma descontrolada al asumir un valor sustitutivo por avería.

## Cómo comprobarlo

Medir la resistencia con multímetro en Ohmios a diferentes temperaturas y comprobar que la microturbina gira al conectar el encendido.

## Imágenes requeridas

- Curva característica de resistencia frente a temperatura de un sensor CTN — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 171
