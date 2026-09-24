# Auditoría de prompts — 24/09

## Supuestos (corrígelos y se repite)

- **Alcance:** todo el repositorio. Se revisan los prompts que llegan a un
  modelo (NotebookLM, el portal y `rag/`) y las instrucciones para Claude Code
  (`CLAUDE.md`).
- **Modelos:**
  - Las instrucciones `CLAUDE.md` se auditan para el Claude que trabaja en el
    repo (Claude Opus 5.5).
  - Los prompts de producto se auditan para **Gemini**, que es el proveedor del
    código: NotebookLM, `portal/IA.gs` (`generativelanguage.googleapis.com`) y
    `rag/` (`google.genai`, `gemini-2.5-flash`). Allí no se aplica ninguna
    regla específica de la API de Claude.
- No se propone cambiar de proveedor.
- **Aplicado el 24/09:** A1-A4 y M1-M4. F1-F4 se quedan como están.

## Resumen

- 4 hallazgos de **confianza alta**: datos que ya no son verdad en los `CLAUDE.md`.
- 4 de **confianza media**: prompts heredados o parcheados.
- 4 solo **marcados**: están bien como están.

Por grupos:

| Grupo | Hallazgos |
|---|---|
| 2 · Instrucciones que ya no cuadran con el código | 5 |
| 1d · Parches acumulados y prompts retirados | 3 |
| 1b / 1f · Andamiaje antiguo y límites numéricos | 2 |
| Solo marcados (se quedan) | 4 |

Los tres de más impacto:

1. **`notas-tecnicas/CLAUDE.md`** afirma cosas que ya no son ciertas, y Claude
   las lee en cada sesión:
   - `puente-nt/Codigo.gs` no existe; el puente vivo está en `datos/Puente.gs`.
   - «Estado: 34 notas» y «el puente no está configurado» son falsos: hoy hay
     unas 350 fichas y `puenteNT_comprobar` sale «Todo listo».
2. **`notas-tecnicas/PROCESO.md`** manda usar `notebooklm-unico.md` y
   «exportar» la respuesta. Las dos cosas contradicen el flujo actual (prompt
   v2 y copiar desde la extensión) y la regla «De NotebookLM se copia, no se
   exporta».
3. **`portal/IA.gs`**: el prompt por defecto dice «PDF adjuntos» y el código
   le añade un parche para las notas NT. Si se reescribe el prompt por
   defecto, el parche sobra.

## Hallazgos

| # | Ubicación | Evidencia | Patrón | Por qué ya no vale | Conf. | Acción |
|---|---|---|---|---|---|---|
| A1 | `notas-tecnicas/CLAUDE.md:102-104` | «`DESTINO` en `puente-nt/Codigo.gs`» | 2 · datos concretos que caducan | `puente-nt/` solo tiene README y appsscript.json; la constante vive en `datos/Puente.gs:27` | Alta | rewrite |
| A2 | `notas-tecnicas/CLAUDE.md:106-112` | «34 notas (23 de elemento…) … al puente le falta configurar el token» | 2 · datos concretos que caducan | Falso: v2, unas 350 fichas, maestras; el puente está verificado | Alta | rewrite |
| A3 | `notas-tecnicas/CLAUDE.md:85,89,92` | «`importar.py` (NotebookLM → ficha)», «el prompt único», «`puente-nt/` Apps Script» | 2 · datos concretos que caducan | Faltan `importar_v2.py`, `auditar_fusion.py`, `maestras/` e `informes/`; el prompt vigente es `notebooklm-v2.md`; el puente está en `datos/` | Alta | rewrite |
| A4 | `notas-tecnicas/PROCESO.md:10-16` | «El prompt está en `prompts/notebooklm-unico.md`» · «exporta la respuesta a `.md`» | 2 · duplicados que se contradicen + 1d prompt retirado | Contradice a `CLAUDE.md` («se copia, no se exporta») y al flujo actual con la extensión y el v2 | Alta | rewrite |
| M1 | `portal/IA.gs:9-11` (+163-168) | «Responde SOLO con información de los PDF adjuntos» y el parche «Las fuentes que empiezan por NT son notas técnicas…» | 1d · parche acumulado | El prompt por defecto no cubre las notas, y un bloque condicional lo remienda en cada llamada. Mejor decirlo una vez en el prompt | Media | rewrite (el parche puede quedarse mientras haya un prompt personalizado guardado) |
| M2 | `rag/query.py:86-91` | `f"{SYSTEM_PROMPT}\n\nFRAGMENTOS:…\n\nPREGUNTA: …\n\nRESPUESTA:"` | 1b · andamiaje de completado | La pista final «RESPUESTA:» y la instrucción mezclada con los datos son el estilo de los modelos de completar texto. El SDK de Gemini tiene `system_instruction` | Media | replace-with-API-feature |
| M3 | `notas-tecnicas/prompts/{notebooklm-unico,ssc-clima,ssc-airbag,archivo-notebooklm-procesos}.md` | Prompts de las plantillas ELEMENTO/PROCESO | 1d · restos de otra versión | Sustituidos por el v2; conviven en la misma carpeta y la documentación apunta a uno de ellos (A4) | Media | move → `prompts/archivo/` |
| M4 | `CLAUDE.md:4` | «Máx ~10 líneas salvo que pida profundidad.» | 1f · límite numérico de salida | Un tope de líneas corta respuestas que necesitan más (listas de verificación, decisiones). El objetivo real es leer en el móvil | Media | rewrite (puedes rechazarlo: es tu preferencia) |
| F1 | `notas-tecnicas/prompts/notebooklm-v2.md:34` y `:40` | «No fuerces la lista: un procedimiento… nunca la de otra cosa» + «Un diagnostico o un procedimiento NUNCA lleva la entidad de una pieza» | 1c/1a · duplicado con mayúsculas | La línea 40 se añadió porque la 34 sola **falló en la prueba** (15_Diágnostico). Es un fallo que se reprodujo: se queda | — | flag, sin cambio |
| F2 | `notebooklm-v2.md:98` | «Nada de LaTeX» | 1e · prohibición | El fallo se reprodujo (13 fórmulas en una prueba). El importador limpia lo que se cuele: se queda | — | flag |
| F3 | `notebooklm-v2.md:45` | «OJO CON «REFRIGERANTE»» | 1a · énfasis | Énfasis con motivo sobre el fallo que originó el v2 (gas frente a líquido del motor): se queda | — | flag |
| F4 | `notas-tecnicas/generador/prompt.py` y `Documentos/CLAUDEv2.md` | Generador de los prompts antiguos y un CLAUDE heredado | 1d | No sé si los usas todavía; no los toco | Baja | flag |

La regla «Cada frase tiene que estar en la fuente… No documentado… es una
respuesta correcta» y los «Prohibido: …» de tu `CLAUDE.md` son **contexto y
preferencias tuyas**, no restos de otra época. Se quedan.

## Diff propuesto (sin aplicar)

### A1 — `notas-tecnicas/CLAUDE.md`
```diff
-Si se toca el nombre de esta carpeta hay que tocar a la vez las rutas del
-workflow y `DESTINO` en `puente-nt/Codigo.gs`. Si no, la automatización deja de
-dispararse **en silencio**: no falla, simplemente no ocurre. Ya pasó una vez.
+Si se toca el nombre de esta carpeta hay que tocar a la vez las rutas del
+workflow y `DESTINO` en `datos/Puente.gs`. Si no, la automatización deja de
+dispararse **en silencio**: no falla, simplemente no ocurre.
```

### A2 — `notas-tecnicas/CLAUDE.md`
```diff
 ## Estado
-
-34 notas (23 de elemento, 11 de proceso), de los manuales de climatización.
-Pendiente: el puente de Drive está escrito pero le falta configurar el token y
-las propiedades del script; hasta entonces las capturas se suben a mano a
-`imagenes/`. Y la publicación en Google Sites sigue siendo un pegado manual
-del `.txt`.
+
+Fichas v2 en `notas/` (una por PDF y entidad) y maestras fusionadas en
+`maestras/`. El puente (`datos/Puente.gs`) está activo; las capturas entran por
+la pestaña «Capturas» del portal con aprobación en el Panel. La cifra exacta de
+notas, en el registro de `construir.py`.
```

### A3 — `notas-tecnicas/CLAUDE.md` (mapa)
```diff
-| `generador/` | `importar.py` (NotebookLM → ficha), `construir.py` (fichas → HTML), `imagenes.py` |
+| `generador/` | `importar_v2.py` (NotebookLM v2 → ficha), `construir.py` (fichas → HTML y `notas.json`), `auditar_fusion.py`, `imagenes.py` |
 | `notas/` | una ficha Markdown por nota, con front-matter |
+| `maestras/` | una nota fusionada por entidad; sustituye a sus fichas |
+| `informes/` | informe por tanda que deja la extensión |
 | `imagenes/` | las capturas, nombradas `NT21_02.jpg` |
 | `web/` | el HTML generado y su copia `.txt` para Google Sites |
-| `prompts/` | el prompt único de NotebookLM |
+| `prompts/` | `notebooklm-v2.md`, el prompt vigente |
 | `FUENTES.md` | qué documentos están procesados |
 | `PENDIENTES.md` | elementos detectados que aún no tienen nota |
-| `puente-nt/` | Apps Script que sube a `imagenes/` las capturas que el alumnado deja en Drive |
```

### A4 — `notas-tecnicas/PROCESO.md`
```diff
-   se hace, cómo se diagnostica). El prompt está en
-   `prompts/notebooklm-unico.md`.
-2. Lanza el prompt y **exporta la respuesta a `.md`**.
-3. Sube ese `.md` a la carpeta **`notas-tecnicas/entrada/`** de este repositorio.
+   se hace, cómo se diagnostica). El prompt está en
+   `prompts/notebooklm-v2.md` (va en «Configurar conversación» del cuaderno).
+2. Lanza la extensión NotebookLM → GitHub: copia cada respuesta (no la
+   exporta) y la sube sola a **`notas-tecnicas/entrada/`**.
```

### M1 — `portal/IA.gs`
```diff
 var IA_PROMPT_DEFAULT = 'Eres un asistente de estudio de Electromecánica de Vehículos. ' +
-  'Responde SOLO con información de los PDF adjuntos. Si algo no está en ellos, dilo en vez ' +
-  'de inventar. Cita el documento del que sacas cada dato. Responde en español, claro y conciso.';
+  'Responde solo con la información de las fuentes adjuntas: PDF o notas técnicas (las que ' +
+  'empiezan por NT). Si algo no está en ellas, dilo en vez de inventar. Cita de dónde sale cada ' +
+  'dato: el nombre del PDF o el número de la nota. Responde en español, claro y conciso.';
```
El bloque condicional de las líneas 163-168 puede quedarse. Solo hace falta
mientras haya guardado un prompt personalizado que hable únicamente de PDF.

### M2 — `rag/query.py`
```diff
-    prompt = (
-        f"{SYSTEM_PROMPT}\n\n"
-        f"FRAGMENTOS:\n{build_context(hits)}\n\n"
-        f"PREGUNTA: {question}\n\nRESPUESTA:"
-    )
-    resp = client.models.generate_content(model=config.GEN_MODEL, contents=prompt)
+    contenido = f"FRAGMENTOS:\n{build_context(hits)}\n\nPREGUNTA: {question}"
+    resp = client.models.generate_content(
+        model=config.GEN_MODEL,
+        contents=contenido,
+        config=types.GenerateContentConfig(system_instruction=SYSTEM_PROMPT),
+    )
```
Hay que añadir `from google.genai import types`. Antes de darlo por bueno,
prueba una pregunta real en Colab y compara las respuestas.

### M3 — archivar los prompts antiguos
```diff
-notas-tecnicas/prompts/notebooklm-unico.md
-notas-tecnicas/prompts/ssc-clima.md
-notas-tecnicas/prompts/ssc-airbag.md
-notas-tecnicas/prompts/archivo-notebooklm-procesos.md
+notas-tecnicas/prompts/archivo/notebooklm-unico.md
+notas-tecnicas/prompts/archivo/ssc-clima.md
+notas-tecnicas/prompts/archivo/ssc-airbag.md
+notas-tecnicas/prompts/archivo/archivo-notebooklm-procesos.md
```
Es un `git mv`. `generador/prompt.py` escribe en `prompts/<unidad>.md`: si
lo sigues usando, apúntalo a `archivo/` o retíralo (queda en F4).

### M4 — `CLAUDE.md`
```diff
-- Español. Máx ~10 líneas salvo que pida profundidad.
+- Español. Respuestas cortas, que se lean en el móvil sin desplazar; más
+  detalle solo si lo pido.
```

## Verificación (antes de aceptar M1 y M2)

- **M1:** en el portal, pregunta con **solo notas NT** seleccionadas y con
  **solo PDF**. En los dos casos la respuesta tiene que citar la fuente
  correcta.
- **M2:** la misma pregunta en `rag/query.py` antes y después del cambio. La
  respuesta tiene que mantener las citas `[archivo, pág. N]`.
- **A1-A4 y M3** son documentación y rutas: no cambian cómo se comporta
  ningún modelo.
