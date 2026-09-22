---
id: ssc.sin-clasificar.servomotor-de-mezcla-paso-a-paso
modulo: ssc
unidad: sin-clasificar
nt: 666
titulo: "Servomotor De Mezcla Paso A Paso"
ubicacion: "Fijado sobre la carcasa de la caja climática, accionando las trampillas de mezcla, distribución o recirculación"
aplicacion: "Climatizadores electrónicos de precisión"
menu: "Servomotor De Mezcla Paso A Paso"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Posicionar con alta exactitud las trampillas de regulación del climatizador mediante impulsos eléctricos digitales sin necesidad de utilizar un potenciómetro de retorno.

## Principio de funcionamiento

Utiliza un rotor con imanes permanentes (polos Norte y Sur) y un estator con múltiples bobinados desfasados (ej. bobinado A y B a 45º). La unidad de control alimenta secuencialmente los bobinados invirtiendo la polaridad (+ / -), obligando al rotor a girar un ángulo discreto ("paso"). La unidad de control determina la posición exacta contando el número de pasos emitidos.

## Características

Motor sin escobillas paso a paso con rotor magnético de 4, 6 o 12 pares de polos y estator multifase.

## Valores de trabajo

* Ángulo de giro: 1/8 de vuelta por cada paso eléctrico.
* Ciclo completo de conmutación: 4 pasos por ciclo elemental.
* Estrategia de posición real: Requiere un reglaje automático de re-inicialización (búsqueda mecánica del tope cero).
* Tabla de secuencias de impulsos para sentido horario:
  - 1.er paso: Bobinado A1(+), A2(-); Bobinado B3(X), B4(X)
  - 2.º paso: Bobinado A1(X), A2(X); Bobinado B3(-), B4(+)
  - 3.er paso: Bobinado A1(-), A2(+); Bobinado B3(X), B4(X)
  - 4.º paso: Bobinado A1(X), A2(X); Bobinado B3(+), B4(-)
  - 5.º paso: Repite secuencia del.er paso.
* Tabla para sentido anti-horario: Inversión de las polaridades asignadas a los bobinados A y B.

## Anomalías frecuentes

Pérdida de pasos por duresa mecánica en las articulaciones de las trampillas o fallo de conmutación en la etapa de potencia de la UCE.

## Comportamiento en avería

Desalineación entre la posición real de la trampilla y la posición calculada por la UCE, produciendo ruidos de chasquido ("clac-clac") continuo al intentar calibrar los topes.

## Cómo comprobarlo

Medir la resistencia interna de las fases A y B del motor con un polímetro (deben ofrecer valores idénticos) y ejecutar el procedimiento de re-inicialización o ajuste básico mediante la máquina de diagnosis.

| 
|---|---|---|---|---|---|---|
|

## Imágenes requeridas

- Esquema del rotor bipolar y los bobinados de excitación del motor paso a paso — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx | pág. 64 | 65 | 67 | 69 | 70 | 71 |
- Tabla de secuencias de impulsos eléctricos para sentido horario y anti-horario — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx | pág. 73 | 74 |  |  |  |  |
