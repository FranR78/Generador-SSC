---
nt: 22
titulo: Servomotor de chapaleta de velocidad y recirculación
codigo: V71 (con potenciómetro G113)
menu: Servomotor V71
grupo: Actuadores y mandos
ubicacion: Conjunto climatizador, accionando las chapaletas de velocidad y de aire fresco
fuentes: Guía Técnica VAG, págs. 46-47, 52
---

## Misión
Accionar mecánicamente **dos chapaletas simultáneamente** con un solo motor: la de velocidad
y la de aire fresco / recirculación.

## Principio de funcionamiento
Motor eléctrico acoplado a un **disco de accionamiento con dos pistas guía**, que permite el
reglaje individual de cada chapaleta según la necesidad: velocidad de marcha por un lado,
recirculación por otro. Ese mecanismo de pistas es lo que permite que un único motor
gestione dos funciones diferenciadas.

El **potenciómetro G113** informa a la UCE de la posición exacta del servomotor en todo
momento.

## Características
- Actuador eléctrico con realimentación de posición por potenciómetro.
- La UCE utiliza la **señal de velocidad de marcha (v)** del vehículo para determinar la
  posición de excitación.

## Valores de trabajo
A velocidades altas de marcha **reduce la sección de paso de aire fresco**, para mantener
constante el caudal que entra al habitáculo pese al aumento de la presión dinámica.

## Anomalías frecuentes
No documentadas en las fuentes disponibles.

## Comportamiento en avería
No documentado en las fuentes disponibles.

## Cómo comprobarlo
**Herramienta:** equipo de diagnosis.
**Método:** activar el servomotor desde diagnosis y comprobar que el potenciómetro G113
devuelve una posición coherente en todo el recorrido, sin saltos ni zonas muertas.

## Imágenes requeridas
- Detalle del servomotor con el disco de pistas guía y las dos chapaletas — Guía Técnica, pág. 47

## Advertencias
Documentado en una sola fuente y con apartados incompletos: faltan valores de diagnóstico y
modos de emergencia. Pendiente de contraste con documentación del fabricante.
