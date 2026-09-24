# CLAUDE.md — Generador-SSC (biblioteca PDF + super-manual)

## 0. Formato de respuesta (regla nº1)
- Español. Respuestas cortas, que se lean en el móvil sin desplazar; más
  detalle solo si lo pido.
- Cierre de tarea: `OK` + checklist de verificación. Nada más.
- Prohibido: narrar pasos, resumir lo hecho, explicar el código, repetir mi
  petición, preámbulos/cierres ("Perfecto", "He actualizado…", "¿Quieres que…?").
- Solo el fragmento cambiado. Nunca archivos completos en el chat.
- Duda bloqueante o error: 1 línea + opciones numeradas.
- Tengo permiso para todo. No pidas permiso por cada paso; solo tráeme dudas.
- No propongas mejoras que no he pedido.

Plantilla de cierre:
```
OK
- [ ] probar <acción>
- [ ] revisar <archivo/carpeta>
- [ ] pusheado: sí / no
```

## 1. Git: manda origin
GitHub (`FranR78/Generador-SSC`) es la única fuente de verdad. PC y móvil, espejos.
- Primer comando de sesión: `git fetch --all --prune && git status -sb`
- Local detrás → `git pull --ff-only`. Divergencia → avisa 1 línea + propón
  `git reset --hard origin/main`. No reconstruyas a mano.
- Nada de ramas solo locales: `git push -u origin <rama>`.
- No cerrar sesión con cambios sin subir. Último paso: commit + push.
- Rama por defecto: `main`.

## 2. Arquitectura (dónde corre cada cosa)
- **GitHub** = armario del código. No ejecuta, no tiene PDF.
- **Colab** (`colab/`) = ejecuta: monta Drive, lee los PDF, crea el índice.
- **Drive** = los PDF y el índice. Los IDs de carpeta origen/destino NO se fijan
  en código: los pone él en las opciones de la extensión (cambian por extracción).
- **`portal/`** = Apps Script, frontend del alumnado (login Google, Gemini, Sites).
- **`rag/`** = pipeline Python: `ingest` → `embed` → `query`.
- Los PDF NUNCA se suben a git (los excluye `.gitignore`).
- **Lecciones heredadas:** `Documentos/LECCIONESv2.md` y
  `Documentos/CONFIGURAR_API_KEYv2.md` — leer antes de tocar IA o Apps Script.
  La key de cada alumno va en `UserProperties` (personal), nunca en el código.

## 3. Ahorro de tokens
- Lee por grep o rangos de líneas; archivo completo solo si es imprescindible.
- No releas lo ya leído en la sesión.
- No pegues en la respuesta el contenido de archivos ni diffs.
- Un cambio por mensaje.

## 4. Modo preparación (planning-only)
Lo activo yo ("modo preparación") y lo desactivo yo ("volvemos a código").
- Permitido: diseñar, leer, escribir `.md`.
- Prohibido: tocar `rag/**` y `portal/**`, commit, push, deploy.

## 5. Estado del proyecto
- Corpus: 181 PDF (climatización) en Drive, creciendo.
- Alcance: SSC + Optativa de Osciloscopio → escalar a todo Electromecánica.
- Hecho: `portal/` (MVP Apps Script), `rag/` (pipeline embeddings).
- Pendiente: indexar en Colab, enchufar el índice al portal, capa de votación.
