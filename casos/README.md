# Casos de avería

Un archivo por caso. El código es el programa; esto son los casos reales.

## Hacer un caso nuevo

1. Copia `PLANTILLA.yml` y ponle de nombre el id (`leon-n280-cable.yml`).
2. Rellénalo. Está comentado entero.
3. `python3 casos/construir.py` — valida y genera `casos.json`.

`leon-n280-cable.yml` es un caso real y sirve de ejemplo.

## Por qué el esquema es un grafo y no una imagen

Se describe con nodos y tramos, con la resistencia de cada tramo. Con eso el
simulador **calcula** lo que marca el polímetro. Si solo hubiera un JPG, habría
que escribir a mano lo que sale en cada punto, y el alumno acabaría
memorizando respuestas en vez de midiendo.

De paso, dos esquemas distintos del mismo caso dan dos exámenes distintos.

## Por qué rangos y no valores exactos

Esquemas se pueden conseguir todos; valores medidos en un coche real, de muy
pocos. Y no hace falta: lo que hay que detectar no es un decimal, es que
alguien diga 1 Ω donde hay 3 kΩ. Por eso cada valor lleva de dónde sale:

| Etiqueta | Qué significa |
|---|---|
| `Medido` | lo has medido tú en ese coche |
| `Teórico OEM` | viene del manual del fabricante |
| `Inferido` | es un rango razonable puesto a mano |

Un caso con todo `Inferido` sirve para practicar. Para evaluar, conviene que lo
que se mida sea `Medido` o `Teórico OEM`, y eso se ve de un vistazo.

## Lo que comprueba el validador

Un caso mal escrito no se nota al escribirlo: se nota cuando un alumno mide y
el polímetro dice algo imposible, delante de toda la clase.

- Los tramos unen nodos que existen, y ninguno va a sí mismo.
- Hay camino de `+` a `-`. Sin eso el circuito está abierto de origen y todas
  las medidas salen iguales.
- No hay nodos sueltos.
- La avería apunta a un tramo que existe.
- Todo valor lleva origen válido, y el mínimo no es mayor que el máximo.
- **Medir ohmios o continuidad exige contacto quitado y conector desembornado.**
  Es la regla de la ficha de comprobación, hecha código: con el circuito
  alimentado el valor no significa nada y se puede dañar el aparato.
- Un tramo con rango de resistencia dice qué componente es. Un cable no tiene
  rango; una bobina sí.
- Las notas técnicas que declara el caso existen en `notas.json`.

Si algo falla, no se genera nada: mejor sin caso nuevo que con un caso que
miente.

## Pendiente

`casos.json` todavía no lo lee el portal: los casos siguen sirviéndose desde la
Hoja. El siguiente paso es que el puente lo suba a Drive, como ya hace con
`notas.json`, y que `Casos.gs` lea de ahí.
