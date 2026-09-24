# Curso guiado y «Evalúa tus conocimientos» — contraoferta

## La idea en una frase
**Las notas son el almacén; el curso es el escaparate.** Las notas salen de
NotebookLM (muchas, de muchos PDF, se regeneran). El **orden lo decides tú en un
archivo aparte** que nadie regenera. Así el orden no se pierde al reprocesar un
PDF, y una nota puede aparecer en dos cursos (SSC y Osciloscopio) sin copiarla.

## 1. El guion del curso: `cursos/ssc-clima.yml` (lo escribes tú)

```yaml
curso: ssc-clima
titulo: Climatización
umbral: 70            # % para no recibir el «vuelve a leer» (por defecto)

lecciones:
  - id: L01
    titulo: Por qué importa el gas
    notas: [efecto-invernadero-y-cambio-climatico, agotamiento-capa-ozono,
            potencial-calentamiento-atmosferico, reglamento-ue-517-2014]

  - id: L05
    titulo: El compresor
    principal: compresor              # ficha madre: misión, tipos…
    variantes: [embolos, paletas, espiral, disco-oscilante-fijo]
    elementos:                        # «Elementos que lo componen»
      - embrague-compresor
      - valvula-sobrepresion
      - valvula-reguladora-compresor: {breve: true, ver: L09}
    umbral: 80                        # esta lección pide más

  - id: L09
    titulo: Actuadores
    notas: [valvula-reguladora-compresor, servomotor-trampilla]
```

- Se ordena **por entidad**, no por archivo. Si mañana entra otro PDF del
  compresor, aparece solo como otra pestaña de fuente en L05.
- `breve: true` pinta solo «Misión» y un enlace «Se estudia a fondo en L09».
  Es justo tu «mencionar brevemente, estudiar en actuadores».
- **Mejora:** `construir.py` genera `cursos/_sin_colocar.yml` con las entidades
  que aún no están en ninguna lección. No se te escapa ninguna nota: copias la
  línea donde toque.

## 2. Que NotebookLM te ayude con el árbol (1 campo más en el YAML de cada nota)

```yaml
forma_parte_de: compresor       # el embrague lo dice el PDF, no tú
```

Con eso el constructor **te propone** los «Elementos que lo componen» de cada
lección. Tú decides: lo que escribas en `cursos/*.yml` manda siempre.

## 3. «Evalúa tus conocimientos»: banco fijo + la IA como tutor

Tu propuesta: preguntas generadas en directo con la key de cada alumno.
**Contraoferta:** las preguntas se generan **una vez**, las revisas tú y quedan
guardadas. La key del alumno se usa para otra cosa: **explicarle por qué ha fallado**.

| | Generadas en directo (key alumno) | Banco fijo revisado (propuesta) |
|---|---|---|
| Mismo examen para todos | No | Sí → nota comparable |
| Puede inventarse una pregunta falsa | Sí, y nadie la ve | Tú las apruebas antes |
| Funciona sin key o con la cuota agotada | No | Sí |
| Sirve como evidencia de un CE | Difícil | Sí: cada pregunta lleva su RA-CE |
| Coste y espera por intento | Cada vez | Cero |

**De dónde salen:** un segundo prompt de NotebookLM sobre el mismo cuaderno
(«genera preguntas de esta nota»), con la página de la que sale cada una. Así se
basan en tus fuentes y no en lo que sabe el modelo. Van en YAML:

```yaml
- nota: compresor
  apartado: Tipos y características
  ce: 1a
  tipo: test            # test · vf · valor · ordenar · causa
  pregunta: ¿Qué compresor varía su cilindrada cambiando el ángulo del plato?
  opciones: [Paletas, Espiral, Disco oscilante variable, Émbolos en línea]
  correcta: 2
  pagina: 56
```

**Tipos de pregunta según el tipo de nota** (lo que se evalúa cambia):
- componente → valores con su condición, identificar la pieza, qué hace si falla
- procedimiento → **ordenar los pasos** (vacío, carga…)
- diagnóstico → síntoma → causa más probable
- fluido → compatibilidades y normativa
- fundamento → interpretación, no memoria

## 4. El freno: blando y con dirección
- 4-6 preguntas por **lección**, más una pregunta rápida al final de cada nota
  (sin nota numérica). Hacer un cuestionario por cada apartado de cada nota
  (misión, tipos…) serían cientos y cansa.
- Por debajo del umbral **no se bloquea**. Sale: «Repasa **Tipos** del compresor
  y **Valores** de la válvula», porque cada pregunta sabe de qué apartado sale.
- Reintento con espera de X horas. **Ya existe** en `datos/Progreso.gs` (lo usa
  el simulador): se reutiliza.
- Al fallar, botón «¿Por qué?» → Gemini con **su** key explica usando la nota.
  Si no tiene key, se le muestra la página de la fuente.
- Tu panel: % por lección y por **CE**, y las preguntas que más se fallan (o la
  pregunta está mal, o el apartado está mal explicado).

## Orden de trabajo propuesto
1. Añadir `forma_parte_de` al prompt v2 (ya, antes de procesar el lote).
2. Importador v2 + `cursos/ssc-clima.yml` + portal pintando lecciones.
3. Prompt de preguntas + revisión de preguntas en el panel del profesor.
4. Cuestionario, freno y registro en `datos/`.
