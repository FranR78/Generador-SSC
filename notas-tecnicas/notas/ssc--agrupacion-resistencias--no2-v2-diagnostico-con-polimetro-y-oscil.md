---
id: ssc.agrupacion-resistencias.no2-v2-diagnostico-con-polimetro-y-oscil
modulo: ssc
unidad: clima
nt: 140
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Agrupación de resistencias en serie, paralelo y mixta"
menu: "Agrupación de resistencias en serie, p"
grupo: "Herramientas y medida"
clave: agrupacion-resistencias
area: electricidad-electronica
sistema: "herramientas-y-medida"
fuentes: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, págs. 18-21"
relacionados: ["resistencia-electrica", "ley-de-ohm", "potencia-electrica"]
palabras: ["agrupación serie", "agrupación paralelo", "circuito mixto", "resistencia equivalente", "caídas de tensión"]
---

## Objeto

Determinar el valor óhmico equivalente, las caídas de tensión y el consumo de corriente en circuitos con múltiples receptores interconectados en serie, paralelo o combinaciones mixtas (págs. 18-21).

## Fundamento

La distribución de corriente y tensión se rige por las reglas de asociación de receptores según exista un único camino o múltiples caminos independientes de circulación (págs. 18-21).

## Desarrollo

1. Agrupación en serie:
   - Los receptores se conectan uno a continuación de otro existiendo un solo camino para la corriente (pág. 18).
   - La intensidad es la misma en todos los componentes del circuito (pág. 18).
   - Resistencia total: RT = R1 + R2 + R3... (pág. 18).
   - La tensión total se reparte entre los componentes generando caídas de tensión parciales (pág. 18).
   - Aplicación práctica: regulación de la velocidad de la turbina de calefacción mediante resistencias escalonadas (págs. 18-19).
   - Inconveniente: la interrupción de un elemento corta la corriente a todo el conjunto (pág. 19).

2. Agrupación en paralelo:
   - Cada receptor está alimentado directamente de la fuente existiendo caminos independientes (pág. 20).
   - Todos los componentes reciben la misma tensión (12 V) (pág. 20).
   - Resistencia total: 1 / RT = (1 / R1) + (1 / R2) + (1 / R3)... (pág. 20).
   - La resistencia total del conjunto siempre es menor que la resistencia más pequeña de la agrupación (pág. 20).
   - Para dos resistencias en paralelo: RT = (R1 · R2) / (R1 + R2) (pág. 20).
   - Para N resistencias iguales: RT = R / N (pág. 20).
   - Aplicación práctica: circuito de alumbrado de posición e iluminación general (págs. 20-21).
   - Ventaja: la avería o fundido de un componente no interrumpe el funcionamiento de los demás (pág. 20).

3. Agrupaciones mixtas (serie-paralelo y paralelo-serie):
   - Se resuelven simplificando por etapas el bloque serie o paralelo hasta obtener un circuito equivalente simple (págs. 21-22).
   - Aplicación práctica: potenciómetro en serie con las lámparas del cuadro de instrumentos para regular la intensidad luminosa (pág. 22).

## Valores de referencia

- Resistencia equivalente de N resistencias iguales en paralelo: RT = R / N (pág. 20).

## Errores de concepto frecuentes

- Creer que al conectar más receptores en paralelo la resistencia total del circuito aumenta, cuando en realidad disminuye y la intensidad total consumida se incrementa (pág. 20).

## Imágenes requeridas

- Esquema del selector de velocidades de la turbina de calefacción con resistencias en serie — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 18
- Esquema del circuito de alumbrado de posición con lámparas asociadas en paralelo — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 21
