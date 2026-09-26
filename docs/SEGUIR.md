# Seguir aquí — estado a 25/09

Lee esto primero al retomar. Detalle en los docs enlazados.

## Hecho y funcionando

- **Notas v2** (`docs/REHACER_NT.md`):
  - El prompt es `notas-tecnicas/prompts/notebooklm-v2.md`: 5 tipos de nota y cabecera YAML.
  - `importar_v2.py` valida cada nota; lo incompleto va a `entrada/rechazadas/`.
  - Las notas v1 están archivadas en la rama `claude/archivo-notas-v1`.
- **Guion del curso:** bloque `indice` de `notas-tecnicas/unidades/ssc-clima.yml`, con subgrupos
  (`- grupo: … claves: […]`) y `alias`. Lo que falta por colocar se lista en `unidades/_sin_colocar.yml`.
- **Extensión 0.9:**
  - Deja un informe tras cada fuente en `notas-tecnicas/informes/`.
  - Límite de minutos por fuente; si NotebookLM está saturado, pausa y reintento automático.
- **Workflow de notas:** reintenta el push si choca con una subida. Hay además una limpieza semanal
  del historial de Actions.
- **Portal:**
  - Menú: Inicio · Cursos · Apuntes · Capturas · Juegos · Simulador · Cuenta · Panel.
  - Consultar ya no está en el menú: se abre con el botón «💬 Preguntar sobre esta nota».
  - Lectura con listas y tablas reales, texto justificado y las páginas como etiqueta discreta.
  - **Capturas:** el alumno elige el hueco, pega con Win+Shift+S y Ctrl+V, y la foto queda
    pendiente en Drive («Por aprobar»). Tú la apruebas en el Panel y el puente la publica.
    Código en `datos/Aprobacion.gs`.
- **Fusión** (`docs/FUSION.md`):
  - Hay una maestra piloto: `notas-tecnicas/maestras/refrigerante-r134a.md`, con 9 fuentes
    y `estado: borrador`.
  - `generador/auditar_fusion.py` comprueba sin IA que no falta ningún dato, y corre en el workflow.
  - Los huecos de captura de una maestra conservan el nombre de su ficha de origen (`[NT22_01]`).
- **Auditoría de prompts aplicada** (`docs/AUDITORIA_PROMPTS.md`).
- **Movedor de Drive:** `datos/Movedor.gs` y el botón 📥 NT-GH de SuperSheets (repo Diario-Docente).

## Pendiente, por orden

0. **Unificar los proyectos Apps Script (tras el lunes 28/09).** Hoy hay tres (Portal, Datos y el
   Puente antiguo), cada uno con sus propiedades, y se lían: el Panel llama a una implementación
   de Datos distinta de la que publica Actions, y `puenteNT_traerNotas` solo tiene token y
   carpetas en el Puente antiguo. Objetivo: Puente dentro de Datos, un único juego de
   propiedades y un único `DEPLOYMENT_ID_DATOS` que coincida con el `DATOS_URL` del portal.

1. **Fusiones con Gemini (25/09).** Workflow «Fusionar notas (Gemini)» + `generador/fusionar.py`.
   Pone nivel básico/intermedio/avanzado por apartado. Lo que no pasa la auditoría va a
   `maestras/pendientes/`. Prueba: evaporador, embrague-compresor, lectura-manometros.
   Después, `--todas` por tandas de 10-20. Claude revisa solo lo que falle.
   (Plan anterior, a mano:)
   - Cómo pedirlo: «fusiona X, Y, Z». Las hace Claude en la sesión y pasa `auditar_fusion.py` a cada una.
   - Candidatas: compresor, electroventiladores, filtro deshidratador, R1234yf, válvula de expansión.
   - Revisar la de R134a y pasarla a `revisada`.
   - Idea pendiente: una marca «🔄 Actualizado dd/mm» en los apartados que cambien al refusionar.
2. **Preguntas con Gemini** (plan abajo). Faltan dos decisiones y la key.
3. **Portal:** cuando una captura esté aprobada, que Apuntes muestre la foto en vez del hueco.
   Hoy solo la muestra el dashboard HTML.
4. **Portal:** pintar los subgrupos del guion (ya van en `notas.json` como `subgrupo`) y la versión
   `breve` de un elemento que se estudia en otra lección.
5. **Tras el lote:** colocar en el guion (o en `alias`) lo que salga en `unidades/_sin_colocar.yml`.
6. **Comprobar a mano:**
   - Publicar de nuevo el proyecto Datos si Actions no lo hizo (tiene las operaciones nuevas de capturas).
   - En el portal, «Restaurar el de fábrica» en el prompt de la IA, para usar el que cubre notas NT.
   - Probar `rag/query.py` en Colab después del cambio a `system_instruction`.

## Plan: preguntas por nota con Gemini (pendiente de decidir)

Base acordada en `docs/CURSO_Y_EVALUACION.md`: guion aparte, preguntas fijas que validas tú y
corrección con la key del alumno.

1. **Generar.** Un workflow `preguntas.yml` con tu key como secreto `GEMINI_API_KEY`.
   - Por nota, 3-5 preguntas según el tipo: valores con su condición, ordenar pasos,
     síntoma → causa, compatibilidades, interpretación.
   - Cada pregunta lleva `apartado`, **cita literal**, correcta y explicación.
   - Un script sin IA descarta las preguntas cuya cita no esté en la nota.
   - Solo se regeneran las notas que cambian (huella del contenido).
2. **Validar.** En el Panel del portal: ✓ aprobar · ✏️ editar · ✗ descartar. Lo aprobado se guarda
   en la hoja de Datos y solo eso llega al alumnado.
3. **Responder.** «Evalúa tus conocimientos» al acabar una nota o una lección.
   - El texto se oculta y las preguntas salen de una en una.
   - **La respuesta correcta nunca llega al navegador:** corrige Datos.
   - Por debajo del umbral, «repasa el apartado X», y reintento a las X horas (como el simulador).
4. **Corregir con la key del alumno.** El botón «¿Por qué?» manda a Gemini la pregunta, lo que
   contestó y la nota, y le explica el error.
5. **Coste.** Unos 1,5 millones de tokens, una vez. Probablemente cabe en el nivel gratuito de
   Gemini Flash. Ojo: en ese nivel Google puede usar los datos, y son manuales de fabricante.

**Decisiones tomadas (26/09):**
- Solo se generan preguntas de las **maestras** (no de las fichas sueltas).
- Cuántas: **de 2 a 6 según la densidad**, medida por la longitud del texto de los apartados
  de cada nivel (básico/intermedio/avanzado). Repartir las preguntas por nivel en proporción.
- La key: el secreto `GEMINI_API_KEY` ya existe (lo usa la fusión).
- Las citas `[NTxx, pág.]` no llegan al alumnado ni a la IA del alumno; las preguntas tampoco
  deben mostrarlas.
