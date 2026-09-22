---
id: ssc.sin-clasificar.recirculacion-y-refrigeracion-de-gases-de-escape-egr-en-motores-v6-tdi
modulo: ssc
unidad: sin-clasificar
nt: 740
tipo: proceso
subtipo: fundamento
titulo: "Recirculación Y Refrigeración De Gases De Escape (Egr) En Motores V6 Tdi"
menu: "Recirculación Y Refrigeración De Gases"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto and alcance

Explica el funcionamiento del circuito de refrigeración del radiador de EGR y las estrategias de conmutación de la mariposa de bypass en los motores 2.7 y 3.0 V6 TDI. Aplica al control de emisiones de NOx.

## Fundamento

Reducir la temperatura de la combustión en los cilindros mediante la introducción de gases de escape enfriados por el líquido refrigerante procedente directamente de la salida del radiador principal.

## Condiciones previas

Motor en funcionamiento y gestión de inyección en fase de recirculación activa.

## Desarrollo

* **Funcionamiento de la bomba de agua adicional V400 y termostato:**
  - La bomba V400 se activa para impulsar agua fría al radiador de EGR cuando la mariposa de bypass neumática está cerrada (modo refrigerado).
  - Si la temperatura del refrigerante a la salida del radiador (sensor G83) supera los 70 ºC, la bomba V400 se desactiva y no se vuelve a encender hasta que la temperatura cae por debajo de 63 ºC.
  - El termostato para EGR abre cuando la temperatura en G83 supera los 70 ºC para proteger el radiador de EGR contra sobretemperaturas.
* **Condiciones de paso a modo NO REFRIGERADO (bypass abierto):**
  - Temperatura del motor inferior a 55 ºC.
  - Líquido refrigerante a la salida del radiador inferior a 18 ºC o superior a 70 ºC.
  - Motor marchando al ralentí.
  - Temperatura de los gases de escape detrás del radiador de EGR inferior a 120 ºC.
  - Temperatura del entorno inferior a 16 ºC.

## Valores de referencia

| Condición de Funcionamiento | Umbral de Temperatura |
| :--- | :--- |
| Desactivación de bomba adicional V400 | Temp. en G83 > 70 ºC (reactivación a < 63 ºC) |
| Apertura del termostato de EGR | Temp. en G83 > 70 ºC |
| Desconexión de refrigeración (modo bypass) | Temp. motor < 55 ºC / Temp. gases < 120 ºC / Temp. ambiente < 16 ºC |

## Interpretación y errores frecuentes

* Diagnosticar como avería que el radiador de EGR trabaje en modo bypass con el motor frío o al ralentí; es la estrategia prevista para acelerar el calentamiento y evitar condensaciones.

## Verificación final

Comprobar con la máquina de diagnosis la activación del servomotor V338 y la conmutación de la mariposa de bypass según la temperatura.

## Seguridad y normativa

Cumplimiento de los límites de emisiones contaminantes según norma EU.

## Imágenes requeridas

- Esquema del circuito de refrigeración y componentes del radiador de EGR — Fuente: 409_e         Audi A4 08.pdf, pág. 20
