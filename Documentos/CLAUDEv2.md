# CLAUDE.md — <NOMBRE DEL PROYECTO NUEVO>

> Kit de arranque heredado de **Diario Docente**. Ajusta nombres/rutas y borra
> lo que no aplique. Este archivo es la regla nº1: mándalo tú, no el modelo.

## 0. Formato de respuesta (regla nº1)
- Español. Máx ~10 líneas salvo que pida profundidad.
- Cierre de toda tarea: `OK` + checklist de verificación. Nada más.
- Prohibido: narrar pasos, resumir lo hecho, explicar el código, repetir mi
  petición, preámbulos/cierres ("Perfecto", "He actualizado…", "¿Quieres que…?").
- Solo el fragmento cambiado (función o patch). Nunca archivos completos.
- Duda bloqueante o error: 1 línea + opciones numeradas.
- No propongas mejoras que no he pedido.

## 1. Git: manda origin
GitHub es la única fuente de verdad. PC y móvil son espejos.
- Primer comando de cada sesión: `git fetch --all --prune && git status -sb`.
- Local detrás → `git pull --ff-only`. Divergencia → avisa en 1 línea, no
  reconstruyas a mano.
- Nada de ramas solo locales: primer commit `git push -u origin <rama>`.
- No cerrar sesión con cambios sin subir. Último paso: commit + push.

## 2. Contexto del repo
- Índice de docs: `docs/README.md` (qué está vivo, qué es histórico). Empieza ahí.
- Ancla al retomar: `docs/ESTADO_Y_COMO_TRABAJAR.md`.
- Lecciones heredadas: `docs/LECCIONES.md` (léelo antes de tocar IA o Séneca).
- Un plan nuevo NO es un `.md` nuevo: va como sección del plan activo.

## 3. Ahorro de tokens
- Lee por grep o rangos de líneas; archivo completo solo si es imprescindible.
- No releas lo ya leído en la sesión.
- No pegues en la respuesta el contenido de archivos ni diffs.
- Un cambio por mensaje.

## 4. Modo preparación (planning-only)
Manual: lo activo yo ("modo preparación") y lo desactivo yo ("volvemos a código").
- Permitido: diseñar, leer, escribir docs en `docs/`.
- Prohibido: tocar código, commit, push, merge, deploy.

## 5. Despliegue
1. Editar el código. 2. Verificar. 3. commit + push a la rama.
4. `git merge-base --is-ancestor origin/main HEAD` → 5. `git checkout main &&
   git merge --ff-only <rama> && git push origin main`, volver a la rama.
- Los `.md` de plan se quedan en la rama, no se fusionan a main.

## 6. Seguridad (heredado, innegociable)
- Nunca en el repo: dominio real del Workspace, IPs, credenciales, claves API /
  tokens, ni datos de alumnos/docentes.
- La API key va en almacenamiento personal del usuario (ver `docs/LECCIONES.md`
  y `docs/CONFIGURAR_API_KEY.md`), nunca en el código ni en una hoja compartida.
