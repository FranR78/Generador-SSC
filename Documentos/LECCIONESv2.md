# LECCIONES — errores ya pagados en Diario Docente

Para ir más rápido en el proyecto nuevo. Cada punto es un error real y su regla.

## IA / API key
- **Dónde vive la key.** En `PropertiesService.getUserProperties()` (clave
  `AI_API_KEY`), nunca en ScriptProperties ni en el Sheet. Es personal de cada
  usuario y de cada proyecto Apps Script: **otro proyecto NO la hereda**, se
  re-pega. La misma key de Google AI Studio sirve para varias apps.
- **Orden de modelos importa por cuota.** La cascada empieza por
  `gemini-3.6-flash` (aguantó 11 informes seguidos); poner primero el alias
  `gemini-flash-latest` agotaba la cuota gratuita en el primer alumno. Recuerda
  el último modelo que funcionó (`AI_MODEL_OK`) para no repetir 404s.
- **404 ≠ error de clave.** 404 = ese modelo no existe para esa clave → prueba
  el siguiente. Si TODOS dan 404, falta habilitar la *Generative Language API*
  en el proyecto de Google Cloud de esa clave, no es que la clave sea mala.
- **El texto de IA es un borrador.** Se muestra para revisar, nunca se guarda
  solo. Solo se persiste cuando el usuario pulsa el botón explícito.
- **Proveedores "avanzado".** Lista ordenada de `{tipo, apiKey, baseUrl, modelo}`
  en UserProperties (`AI_PROVEEDORES`); `tipo` openai cubre cualquier servidor
  compatible. El orden del array = orden de intento.

## Aislamiento por usuario (multi-inquilino)
- Datos de un usuario en ScriptProperties → SIEMPRE por un envoltorio
  (`frGet/Set/DeleteTenantProp_`), nunca `getScriptProperties().getProperty()`
  directo. Apps Script comparte un único ámbito global entre `.gs`: un
  `getProperties()` masivo sin filtrar por prefijo del usuario **filtra datos de
  otros**.

## Séneca
- **TSV con tabuladores reales** entre columnas: sin ellos Séneca trata todo
  como una sola columna al pegar.
- Las siglas de los CE deben coincidir **exactamente** con las de Séneca
  (ej. `AN06530`, no el nombre del cuaderno) o el volcado no cuadra.
- Abre la ventana de respaldo DENTRO del propio clic, o el navegador la bloquea
  como popup no solicitado.

## Front / Apps Script
- `google.script.run` es asíncrono: la función real del servidor es la que va
  tras el ÚLTIMO `.withFailureHandler(...)`, no el último `.algo(` de la cadena.
- Nombres de función duplicados entre dos `.gs` se sobrescriben en silencio
  (ámbito global único). Verifícalo antes de dar por bueno un cambio grande.
- CSS: `.hint { margin-top:-4px }` bajo un botón grande lo solapa. Mide el
  layout (no lo mires a ojo) cuando reportan "se solapa texto y botón".

## Proceso
- `git fetch` SIEMPRE antes de suponer que algo "está antiguo".
- Verificación con un script/skill de solo lectura, no revisando a ojo.
- Un cambio por mensaje; no ampliar el alcance por tu cuenta.
