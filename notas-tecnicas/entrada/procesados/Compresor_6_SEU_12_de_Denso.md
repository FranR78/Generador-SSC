```yaml
tipo: componente
titulo: Compresor Denso 6 SEU 12
entidad: compresor
variante: denso-6-seu-12
area: climatizacion
sistema: circuito-frigorifico
codigo: 6 SEU 12
fabricante: Denso
fuente: "Compresor 6 SEU 12 de Denso.docx"
paginas: "1-2"
forma_parte_de: ciclo-frigorifico
relacionados: [valvula-reguladora-compresor, polea-compresor]
palabras: [disco oscilante, regulación externa, sin embrague, suministro nulo]
```

## Misión
Aumentar la presión del agente frigorífico y hacerlo circular por el circuito de climatización adaptando su rendimiento a las necesidades de refrigeración (pág. 1).

## Tipos y características
- Compresor de disco oscilante de regulación externa sin embrague electromagnético (pág. 1).
- Trabaja según el mismo principio básico que los compresores de disco oscilante de regulación interna (pág. 1).
- Funciona de forma continua desde la puesta en marcha del motor térmico debido a su capacidad de operar en régimen de suministro prácticamente nulo (pág. 1, 2).

## Principio de funcionamiento
La cilindrada y el caudal se regulan mediante una válvula reguladora electromagnética comandada externamente por la unidad de mando, modificando la inclinación del disco oscilante desde un suministro nulo hasta la plena carga (pág. 1, 2).

## Valores de trabajo
Rendimiento en desconexión / suministro nulo: por debajo del 2% (pág. 2).

## Anomalías frecuentes
Bloqueo mecánico interno del compresor o de su rodamiento (pág. 2).

## Comportamiento en avería
Ante un bloqueo mecánico, actúa el sistema de protección de sobrecarga integrado en la polea para desolidarizar el arrastre y evitar el deterioro de la correa auxiliar (pág. 2).

## Cómo comprobarlo
No documentado en fuentes (pág. 2).

## Mantenimiento
No documentado en fuentes (pág. 2).

---

```yaml
tipo: componente
titulo: Válvula reguladora del compresor
entidad: valvula-reguladora-compresor
area: climatizacion
sistema: control-climatizacion
fabricante: Denso
fuente: "Compresor 6 SEU 12 de Denso.docx"
paginas: "1-2"
forma_parte_de: compresor
relacionados: [compresor, unidad-control-climatizador]
palabras: [electroválvula, 400 Hz, estado flotante, alta presión, baja presión, carter]
```

## Misión
Gobernar la cilindrada del compresor regulando la comunicación de presiones entre la carcasa del cigüeñal (cárter), la alta presión y la baja presión (pág. 1, 2).

## Tipos y características
- Integra un elemento mecánico (sensible a la presión) y una función electromagnética (pág. 1).
- En su cuerpo se comunican tres presiones: cárter del compresor (A), alta presión (B) y baja presión (C) (pág. 1, 2).

## Principio de funcionamiento
- **Función electromagnética**: La unidad de mando activa la electroválvula a una frecuencia de 400 Hz mediante una señal de proporción de período variable (PWM) (pág. 1). La frecuencia de 400 Hz mantiene al empujador en un estado "flotante" con un recorrido de pocas décimas de milímetro entre topes (pág. 1).
- **Plena carga / Máximo rendimiento**: La válvula se activa y separa el cárter (A) de la alta presión (B), comunicando el cárter con la baja presión (C) (pág. 2). La presión en el cárter desciende y la alta presión sobre los pistones desplaza el disco oscilante a máxima cilindrada (pág. 2).
- **Desconexión / Suministro nulo**: Al desactivar la válvula, esta permanece abierta conectando la alta presión (B) con el cárter (A) (pág. 1, 2). Se igualan las presiones en los pistones y el muelle del disco lo desplaza a rendimiento nulo (por debajo del 2%) (pág. 2).
- **Función mecánica (regulación por baja presión)**: Si la baja presión (C) sube en exceso, comprime el elemento deformable interior y libera el empujador, separando la alta presión (B) del cárter (A) para aumentar la cilindrada y hacer bajar la baja presión a su valor correcto (pág. 2). Si la baja presión es insuficiente, el elemento se descomprime e impide la separación completa de A y B (pág. 2).

📷 IMAGEN: Detalle de la válvula reguladora con las vías de presión del cárter (A), alta presión (B) y baja presión (C) — Fuente: Compresor 6 SEU 12 de Denso.docx, pág. 1 (pág. 1).

## Valores de trabajo
- Frecuencia de activación electromagnética: 400 Hz con señal PWM (pág. 1).
- Recorrido del empujador entre topes: pocas décimas de milímetro (pág. 1).

## Anomalías frecuentes
No documentado en fuentes (pág. 2).

## Comportamiento en avería
En ausencia de excitación eléctrica, la válvula permanece abierta uniendo alta presión con el cárter, situando el compresor en suministro nulo (por debajo del 2%) (pág. 1, 2).

## Cómo comprobarlo
No documentado en fuentes (pág. 2).

## Mantenimiento
No documentado en fuentes (pág. 2).

---

```yaml
tipo: componente
titulo: Polea de accionamiento con protección de sobrecarga
entidad: polea-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Denso
fuente: "Compresor 6 SEU 12 de Denso.docx"
paginas: "2"
forma_parte_de: compresor
relacionados: [compresor]
palabras: [protección de sobrecarga, goma, grafito, disco de arrastre, bloqueo]
```

## Misión
Transmitir el giro de la correa auxiliar al eje del compresor y desolidarizar mecánicamente el arrastre en caso de bloqueo interno para proteger la correa y los grupos auxiliares del motor (pág. 2).

## Tipos y características
- Polea de accionamiento continuo sin embrague electromagnético (pág. 2).
- Unida al disco de arrastre mediante una pieza preformada de goma con una capa de grafito (pág. 2).

## Principio de funcionamiento
- En servicio normal, la pieza preformada de goma transmite el par desde la polea hacia el disco de arrastre (A) del compresor (pág. 2).
- En caso de bloqueo interno del compresor o de su rodamiento, la polea se desplaza mediante la pieza preformada de goma con capa de grafito, separándose del disco de arrastre bloqueado (pág. 2).
- La deformación del disco de arrastre (A) depende de la elasticidad de la pieza de goma, la cual varía según la temperatura del elemento (fría o caliente) (pág. 2).

📷 IMAGEN: Detalle de la polea del compresor con la pieza preformada de goma y el disco de arrastre — Fuente: Compresor 6 SEU 12 de Denso.docx, pág. 2 (pág. 2).

## Valores de trabajo
No documentado en fuentes (pág. 2).

## Anomalías frecuentes
Desacoplamiento de la pieza de goma o deformación del disco de arrastre tras un bloqueo del compresor (pág. 2).

## Comportamiento en avería
Tras desacoplarse por sobrecarga, la polea gira libremente evitando la rotura de la correa de propulsión y garantizando el funcionamiento de la bomba de agua y del alternador (pág. 2).

## Cómo comprobarlo
No documentado en fuentes (pág. 2).

## Mantenimiento
No documentado en fuentes (pág. 2).

COBERTURA: documento «Compresor 6 SEU 12 de Denso.docx», páginas 1 a 2 de 2. [completo]