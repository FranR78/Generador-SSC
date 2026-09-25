---
id: ssc.servomotor-trampilla.paso-a-paso.6-el-circuito-electrico
modulo: ssc
unidad: clima
nt: 399
tipo: elemento
clase: componente
titulo: "Servomotor de mezcla paso a paso"
menu: "Servomotor de mezcla paso a paso"
grupo: "Distribución de aire"
clave: servomotor-trampilla
variante: paso-a-paso
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: distribucion-aire
fuentes: "6. EL CIRCUITO ELÉCTRICO.pptx, págs. 47-51"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["rotor magnético", "bobinado A", "bobinado B", "inversión de polaridad", "reinicialización"]
---

## Misión

Ejecutar desplazamientos angulares precisos en las trampillas de mezcla, reciclaje o distribución del sistema de aire sin necesidad de potenciómetro de retorno. (pág. 47)

## Tipos y características

Actuador electromecánico formado por un rotor permanente multipolar (4, 6 o 12 pares de polos) y un estator con bobinados independientes (A y B) desfasados angularmente. (pág. 47, 51)

## Principio de funcionamiento

- La alimentación del bobinado A (bornes 1 y 2) genera un campo magnético que hace pivotar el rotor un "paso" (1/8 de vuelta en rotor de 4 polos).
- Para continuar el giro sin bloqueo, la unidad de control alimenta secuencialmente un segundo bobinado B (bornes 3 y 4) situado a 45º.
- Alternando la polaridad (+ / -) entre los bobinados A y B se consigue el desplazamiento en sentido horario o antihorario, completando un ciclo de 4 pasos.
- La unidad de control contabiliza internamente el número de pasos aplicados para determinar la posición teórica de la trampilla.

(pág. 47-51)

## Valores de trabajo

- Secuencia de ciclo básico: 4 pasos para un ciclo magnético completo. (pág. 51)

## Comportamiento en avería

Desfase entre la posición contada por el calculador y la posición real de la trampilla por frenado o bloqueo mecánico. (pág. 51)

## Mantenimiento

Realizar periódicamente un reglaje automático de re-inicialización (búsqueda de topes mecánicos) para que la unidad de control reconozca la posición real de partida y ponga a cero el contador de pasos. (pág. 51)

## Imágenes requeridas

- Disposición de rotor multipolar N-S y electroimán de excitación — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 47
- Montaje de segundo bobinado B a 45º respecto al bobinado A — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 48
- Tabla de impulsos eléctricos y polaridad en bornes 1-2 y 3-4 para giro en ambos sentidos — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 50
