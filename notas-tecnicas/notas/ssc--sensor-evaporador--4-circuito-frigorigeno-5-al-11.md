---
id: ssc.sensor-evaporador.4-circuito-frigorigeno-5-al-11
modulo: ssc
unidad: clima
nt: 696
tipo: elemento
clase: componente
titulo: "Sensor de temperatura del evaporador"
menu: "Sensor de temperatura del evaporador"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, págs. 210, 238-248"
relacionados: ["evaporador", "compresor", "unidad-control-climatizador"]
palabras: ["termostato mecanico", "termostato electronico", "sonda NTC", "congelacion", "0 grados"]
---

## Misión

Medir la temperatura en el panal del evaporador para desconectar el compresor cuando la temperatura roza los 0 ºC, evitando la congelación del agua condensada sobre sus aletas (pág. 210, 240).

## Tipos y características

- **Termostato mecánico**: compuesto por carcasa, fuelle, tubo capilar con sensor de fluido, muelle, tornillo de regulación con pomo, palanca e interruptor eléctrico de 2 o 3 contactos (pág. 239-242).
- **Termostato electrónico**: compuesto por una sonda NTC (resistencia con coeficiente de temperatura negativo) insertada entre las aletas, centralita/módulo electrónico de control, potenciómetro/reostato y relé de mando del compresor (pág. 242-247).

## Principio de funcionamiento

- *Mecánico*: Al descender la temperatura del evaporador, el fluido dentro del bulbo capilar se contrae, reduciendo la fuerza de presión (Fp) sobre el fuelle. Cuando la fuerza del muelle (Fm) supera a Fp, la palanca bascula y abre el interruptor, cortando la alimentación del embrague del compresor (pág. 239, 240).
- *Electrónico*: La sonda NTC varía su resistencia en función de la temperatura. El módulo electrónico analiza la señal y, al alcanzar el umbral de congelación (0 ºC - 1 ºC), desactiva la salida del relé del compresor (pág. 246, 247).

## Valores de trabajo

Umbral de corte por prevención de congelación: 0 ºC a +1 ºC en el evaporador (pág. 240, 247).

## Anomalías frecuentes

Descalibración del muelle en termostatos mecánicos o alteración de la curva de resistencia de la sonda NTC por degradación.

## Comportamiento en avería

- Si queda continuamente cerrado: el evaporador se bloquea por formación de hielo, impidiendo el paso del flujo de aire hacia los difusores.
- Si queda abierto: el compresor nunca llega a acoplarse.

## Cómo comprobarlo

Medición de la resistencia eléctrica de la sonda NTC a diferentes temperaturas o comprobación del punto de corte del termostato mecánico sumergiendo la sonda en agua helada.

## Mantenimiento

Sustitución de la sonda NTC o del módulo del termostato si no efectúa el corte a la temperatura de consigna.

## Imágenes requeridas

- Esquema del termostato mecánico con fuelle, capilar y muelle de regulación, y esquema del termostato electrónico — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL.pptx, pág. 239 y 247 (pág. 239, 247).
