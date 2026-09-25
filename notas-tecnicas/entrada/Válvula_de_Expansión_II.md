```yaml
tipo: componente
titulo: Válvula de expansión termostática con tubo de sensor
entidad: valvula-expansion
variante: tubo-sensor
area: climatizacion
sistema: circuito-frigorifico
fabricante: VW
fuente: "Válvula de Expansión II.pdf"
paginas: "24"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, compresor, condensador]
palabras: [tubo de sensor, diafragma, muelle regulador, tres fuerzas, preajustada]
```

## Misión
Distensar el agente frigorífico en el evaporador haciéndolo enfriar, constituyendo el punto de separación entre el lado de alta y de baja presión del circuito frigorífico, y regular el flujo hacia el evaporador en función de la temperatura del vapor a la salida del evaporador para mantener una climatización uniforme.

## Tipos y características
- Válvula de expansión termostática provista de un tubo de sensor (capilar) exterior cargado con un gas especial.
- Dispone de un diafragma superior, una válvula de bola interna y un muelle regulador.
- Viene preajustada de fábrica y no debe alterarse su tarado.

## Principio de funcionamiento
Trabaja mediante la acción conjunta y equilibrada de 3 fuerzas:
1. Presión en el tubo del sensor (P_FÜ): depende de la temperatura del agente frigorífico intensamente calentado a la salida del evaporador y actúa como fuerza de apertura sobre la cara superior del diafragma.
2. Presión del evaporador (P_Sa): actúa en dirección opuesta al diafragma (fuerza de cierre).
3. Presión del muelle regulador (P_Fe): actúa en la misma dirección que la presión del evaporador (fuerza de cierre).
Si aumenta la temperatura a la salida del evaporador, el gas en el sensor se expande aumentando la presión P_FÜ, venciendo las fuerzas opuestas y abriendo la válvula de bola para incrementar el flujo hacia el evaporador. Si la temperatura baja, el volumen de gas se reduce en el termostato, disminuyendo la presión y reduciendo el flujo hacia el evaporador.

📷 IMAGEN: Esquema de la válvula termostática de expansión con tubo de sensor mostrando el diafragma, muelle regulador, válvula de bola y la acción de las tres fuerzas P_FÜ, P_Sa y P_Fe — Fuente: Válvula de Expansión II.pdf, pág. 24

(pág. 24).

## Valores de trabajo
No documentado en fuentes (pág. 24).

## Anomalías frecuentes
- Plegado o daño mecánico en el tubo del sensor.
- Manipulación o alteración del preajuste de fábrica de la válvula.

(pág. 24).

## Comportamiento en avería
No documentado en fuentes (pág. 24).

## Cómo comprobarlo
No documentado en fuentes (pág. 24).

## Mantenimiento
- Prohibido alterar la regulación preajustada de fábrica en la válvula.
- Prohibido plegar el tubo del sensor, ya que se encuentra cargado con un gas especial.

(pág. 24).

---

```yaml
tipo: componente
titulo: Válvula de expansión de nueva generación
entidad: valvula-expansion
variante: cabezal-termico-integrado
area: climatizacion
sistema: circuito-frigorifico
fabricante: VW
fuente: "Válvula de Expansión II.pdf"
paginas: "24-26"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, compresor, condensador]
palabras: [cabezal térmico, taladros de compensación, varilla de émbolo, válvula de bola, aislamiento térmico]
```

## Misión
Distensar el agente frigorífico a la entrada del evaporador separando la zona de alta y baja presión del circuito, y gestionar térmicamente el flujo de rociado de agente frigorífico en función de la temperatura reinante en el escape del evaporador.

## Tipos y características
- Válvula de expansión monobloque de nueva generación integrada entre los lados de alta y baja presión, directamente ante el evaporador.
- Integra una unidad de regulación con cabezal térmico y válvula de bola accionada mediante una varilla de émbolo.
- El cabezal térmico dispone de un diafragma con una carga de gas especial en la cara superior; la cara opuesta comunica directamente con el escape del evaporador (baja presión) a través de taladros de compensación de presión internos.
- Se instala obligatoriamente provista de un aislamiento de protección térmica.

📷 IMAGEN: Sección de la válvula de expansión de nueva generación con cabezal térmico, diafragma, varilla de émbolo, taladros de compensación, válvula de bola y muelle regulador — Fuente: Válvula de Expansión II.pdf, pág. 25

(pág. 24, 25).

## Principio de funcionamiento
- La temperatura por el lado de baja presión (escape del evaporador) determina la presión del gas especial dentro del cabezal térmico y gradúa el paso de la válvula de bola a través de la varilla de émbolo.
- **Aumento de la carga de refrigeración**: Aumenta la temperatura a la salida del evaporador, incrementando la presión (p_a) de la carga de gas en el cabezal térmico. A través del diafragma y la varilla de émbolo se aumenta la sección de paso en la válvula de bola, fluyendo más agente frigorífico hacia el evaporador para extraer calor del aire pasante.
- **Disminución de la carga de refrigeración**: Si la temperatura baja a la salida del evaporador, se produce una caída de presión (p_b) en el cabezal térmico, reduciéndose la sección en la válvula de bola y disminuyendo el caudal de paso hacia el evaporador.

📷 IMAGEN: Secuencia de regulación indicando las variaciones de presión p_a y p_b en el cabezal térmico y el movimiento de la varilla de émbolo sobre la válvula de bola — Fuente: Válvula de Expansión II.pdf, pág. 26

(pág. 25, 26).

## Valores de trabajo
No documentado en fuentes (pág. 24, 25, 26).

## Anomalías frecuentes
Falta o ausencia del aislamiento de protección térmica exterior de la válvula.

(pág. 25).

## Comportamiento en avería
Si falta el aislamiento de protección térmica en la válvula de expansión, se altera la curva característica de regulación programada por la influencia térmica exterior.

(pág. 25).

## Cómo comprobarlo
No documentado en fuentes (pág. 25).

## Mantenimiento
Instalar y mantener siempre la válvula de expansión provista de su aislamiento de protección térmica.

(pág. 25).

COBERTURA: documento «Válvula de Expansión II.pdf», páginas 24 a 26 de 26. [completo]