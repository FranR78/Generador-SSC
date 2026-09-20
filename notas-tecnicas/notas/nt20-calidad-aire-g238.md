---
id: ssc.clima.sensor-de-la-calidad-del-aire
modulo: ssc
unidad: clima
nt: 20
titulo: Sensor de la calidad del aire
codigo: G238
menu: Calidad de aire G238
grupo: Sensores ambientales
aplicacion: [Sistemas con recirculación automática]
ubicacion: Ante el filtro combinado de partículas y carbón activo, en la entrada de aire exterior
marca: ✦ FUSIONADO — 2 fuentes
fuentes: Guía Técnica VAG, págs. 62, 112-113 · Dashboard Sensores VAG, págs. 79-80
---

## Misión
Detectar la concentración de gases contaminantes en el aire exterior y ordenar el paso a
**recirculación antes de que los contaminantes y olores penetren en el habitáculo**.

## Principio de funcionamiento
Sensor de gases **semiconductor de dióxido de estaño (SnO₂)** con óxidos mixtos y aditivos
de platino y paladio.

El material modifica su resistencia eléctrica al absorber o liberar partículas de oxígeno en
presencia de gases contaminantes — funcionamiento análogo al de una **sonda lambda**. Una
electrónica de control integrada convierte las variaciones de resistencia en señales
digitales para la UCE.

## Características
- Temperatura de servicio: aproximadamente **350 °C**, con un consumo de **0,5 W**.
- Fase de calentamiento: unos **30 segundos** tras el arranque.
- El sensor **no está sujeto a desgaste**; el filtro combinado sí debe sustituirse por
  intervalos.

## Valores de trabajo
| Tipo de gas | Efecto sobre el sensor | Ejemplos |
|---|---|---|
| **Oxidables** (reductores) | Liberan oxígeno → **reducen** la resistencia | CO, hexano, benceno, n-heptano (gasolina) |
| **Reducibles** (oxidantes) | Absorben oxígeno → **aumentan** la resistencia | NOx, SO₂, H₂S, CS₂ (diésel) |

Esta distinción explica por qué el sensor reacciona de forma distinta según el origen de la
contaminación: un vehículo de gasolina delante o uno diésel producen respuestas opuestas en
la resistencia.

Condiciones que **inhiben** la recirculación automática:

- Temperatura exterior inferior a **-5 °C**.
- Función **ECON** o **Descongelación** activa.

## Anomalías frecuentes
No documentadas específicamente en las fuentes. Al no tener desgaste, los fallos suelen
venir del cableado, del conector o de la electrónica integrada.

## Comportamiento en avería
Sin señal válida, el sistema pierde la función de recirculación automática y el aire exterior
entra sin filtrado selectivo de gases.

## Cómo comprobarlo
**Herramienta:** equipo de diagnosis.
**Método:** comprobar en diagnosis que el sensor responde ante una fuente de contaminación
(por ejemplo, gases de escape de otro vehículo), y que el sistema conmuta a recirculación.
Verificar antes que no se dé ninguna de las condiciones inhibidoras (menos de -5 °C, ECON o
descongelación).

## Imágenes requeridas
- Diagrama de bloques del sensor G238 y su conexión a la unidad E87 — Dashboard Sensores, pág. 80
- Tabla de condiciones para la activación de la recirculación — Dashboard Sensores, pág. 79
- Esquema del sensor situado ante el filtro de carbón activo — Guía Técnica, pág. 62
- Representación del intercambio de oxígeno en el semiconductor SnO₂ — Guía Técnica, pág. 113
