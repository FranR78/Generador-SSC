---
nt: 91
tipo: proceso
subtipo: fundamento
titulo: "Recirculación Automática Y Control De Calidad Del Aire"
menu: "Recirculación Automática Y Control De "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el funcionamiento de la recirculación automática mediante el sensor de calidad del aire.

## Fundamento

El sensor (SnO2) evalúa continuamente la pureza del aire exterior. Al detectar gases nocivos, envía una señal digital a la UCE para activar automáticamente la recirculación sin intervención del conductor.

## Condiciones previas

* Climatizador activado con función de recirculación automática seleccionada.

## Equipo y material

* Sensor de calidad del aire (SnO2).  
* UCE del climatizador y servomotor de recirculación.

## Desarrollo

1. El aire ambiental atraviesa el filtro del sensor y entra en contacto con la zona de medición de dióxido de estaño (SnO2) a 350 ºC.  
2. Los gases oxidables (monóxido de carbono CO, hexano C6H14, benceno C6H6, n-heptano C7H16, vapores de combustible) hacen que el SnO2 libere oxígeno, reduciendo su resistencia eléctrica.  
3. Los gases reducibles (óxidos de nitrógeno NOx, dióxido de azufre SO2, sulfuro de carbono CS2, ácido sulfhídrico H2S) hacen que el SnO2 absorba oxígeno, aumentando su resistencia eléctrica.  
4. La electrónica de medición procesa las variaciones de resistencia y genera una señal digital enviada a la UCE.  
5. La UCE acciona el servomotor para cerrar la chapaleta de entrada de aire exterior mientras persista la contaminación.

## Valores de referencia

| Tipo de Gas | Ejemplos de Gases | Reacción en SnO2 |
| ----- | ----- | ----- |
| Gases oxidables | CO, C6H14, C6H6, C7H16, vapores de gasolina | Libera O2 -> Reduce resistencia eléctrica |
| Gases reducibles | NOx, SO2, CS2, H2S | Absorbe O2 -> Aumenta resistencia eléctrica |

## Verificación final

Verificación del cierre automático inmediato de la chapaleta de recirculación al exponer la toma de aire a gases contaminantes de prueba.

## Seguridad y normativa

Protección de los ocupantes contra la inhalación de gases tóxicos de escape diésel y gasolina (CO, NOx, SO2).

## Imágenes requeridas

- Esquema del sensor de calidad del aire indicando la zona de medición de dióxido de estaño, la electrónica de medición y las reacciones ante gases oxidables y reducibles — Fuente: 13. Climatización Electrónica.pdf, pág. 112 y 113
