# Automatización end-to-end: NotebookLM → GitHub → Drive

Plan para dejar el flujo lo más automático posible y que la carpeta de Drive
sea la barra de progreso. Escrito tras leer las tres piezas reales. **No es
código todavía**: es el guion para la próxima sesión (empezamos limpios).

## Objetivo
Cuando la extensión termina de procesar un cuaderno, que el PDF de cada fuente
ya subida **se mueva solo** de `Pendientes` a `Procesados` en Drive. Así, de un
vistazo, sé por dónde voy sin abrir nada.

## Las tres piezas (lo que ya existe y qué sabe cada una)

1. **Extension-NT-GH** (Chrome, en `Extension-NT-GH/`).
   Recorre las fuentes del cuaderno abierto: selecciona una → manda el prompt →
   copia la respuesta como `.md` → la sube a GitHub (`PUT contents`).
   - Sabe, por fuente: el **título** (= nombre del archivo en el cuaderno) y si
     la subida **fue bien** (`res.ok`).
   - Sanea el nombre así: `NFC` → quita extensión → `[^\p{L}\p{M}\p{N}_-]+` → `_`.
   - Sube a la carpeta que diga su config (`dir`), que apunta a
     `notas-tecnicas/entrada/`.
   - **Hoy no deja rastro** del lote salvo el panel en pantalla.

2. **Pipeline** (`.github/workflows/notas-tecnicas.yml`).
   Importa lo que llega a `entrada/`, genera las notas y **archiva cada `.md`
   importado en `entrada/procesados/<name>.md`**, con el mismo nombre que subió
   la extensión. → Ese archivo existe **solo si la nota se procesó bien**.

3. **SuperSheets** (Apps Script de una hoja, en `Diario-Docente/tools/supersheets/original/`).
   Código que ya funciona, pegado a mano en la hoja:
   - `read new.js` (`escanearEstructuraProfesional`): escanea una carpeta de
     Drive a la hoja `Drive2` con **nombre + ID** de cada archivo.
   - `ssp move.js` (`clasificarSoloDocumentos`): lee IDs de la hoja y **mueve**
     archivos a carpetas destino; escribe estado por fila; corta a los 4,5 min y
     es reanudable. → La maquinaria de mover en Drive **ya está hecha y probada**.

## El enganche (el punto delicado)
La extensión identifica por **nombre**; Drive mueve por **ID**. La única llave
común es el **nombre de archivo saneado**. Regla de oro: **el mismo saneado en
los dos lados**. Si divergen, no casa nada. Se documenta una vez y se usa igual
en la extensión (JS) y en SuperSheets (GAS).

Un PDF se considera **procesado** si existe `entrada/procesados/<name>.md` en
`FranR78/Generador-SSC`. Eso ya implica "confirmado en GitHub": no hace falta un
informe aparte.

## Flujo completo

```
Cuaderno NotebookLM (fuentes = PDFs)
  │  Extension-NT-GH: fuente → .md → PUT a notas-tecnicas/entrada/
  ▼
GitHub FranR78/Generador-SSC
  │  workflow: importa → genera notas → archiva entrada/procesados/<name>.md
  ▼
SuperSheets (hoja + GAS, con acceso a Drive)
  1. read new  → mapa nombre→ID de la carpeta "Pendientes"
  2. lee de GitHub la lista de entrada/procesados/*.md
  3. mueve a "Procesados" SOLO los PDF cuyo <name>.md ya está en el repo
     (reusa ssp move; matching por nombre saneado, no por keyword)
  ▼
Drive: carpeta "Procesados" = barra de progreso
```

## Decisiones cerradas (23/09)
- **D1 = C.** El movedor corre en **los dos sitios**, con la **misma lógica**:
  - **Puente `datos/`**: automático, en disparador. Es el que mueve de verdad.
  - **SuperSheets**: vista y control a mano (hoja + botón de menú). Reusa
    `read new` (nombre→ID) y `ssp move` (mover), adaptado a casar por nombre.
- **D2.** El **vaciado del cuaderno lo hace él a mano**, tras comprobar la
  exportación con el informe (abajo). El sistema **no** borra fuentes de
  NotebookLM (frágil, sin API). Mover el PDF ≠ vaciar cuaderno.
- **D4 — Carpetas configurables desde la extensión.** En las opciones de la
  extensión se ponen `origenId` (dónde están los PDF pendientes) y `destinoId`
  (dónde moverlos). **Ojo:** la extensión **no** toca Drive (su manifest solo
  permite NotebookLM y `api.github.com`); esos IDs **viajan dentro del informe**
  como dato y **el movedor** (puente/SuperSheets) es quien crea/mueve.
  - Sin `destinoId`: el movedor hace **buscar-o-crear** una carpeta
    `NT-GH-Procesados` en *Mi unidad* y **guarda su ID** (una sola vez, no una
    por ejecución).
  - Sin `origenId`: se busca por nombre de forma acotada; si no, por todo Drive
    (más lento y con riesgo de homónimos) → mejor ponerlo.

## Informe por cuaderno (nuevo — para no comprobar uno a uno)
Al terminar un lote, la **extensión** deja un informe legible: *"el cuaderno ***
ha procesado estos PDF"*. Es lo que él mira antes de vaciar el cuaderno.

- **Quién lo hace:** la extensión, al acabar el `run` (ya tiene token y hace PUT).
- **Qué lleva:** nombre del cuaderno, fecha/hora, **subidas OK** (con su `.md`),
  **fallidas** con el motivo, totales y los **IDs de carpeta** (`origenId` /
  `destinoId`) de las opciones, para que el movedor sepa de dónde a dónde.
- **Dónde:** `PUT notas-tecnicas/informes/<fecha>_<cuaderno>.md` (uno por lote).
  Se lee desde el móvil en GitHub; más adelante se puede listar en el Panel del
  portal.
- **Dos niveles de verdad** (que el informe distinga, para que el borrado sea
  seguro):
  - **Subido** = la extensión hizo PUT OK. Inmediato.
  - **Nota confirmada** = existe `entrada/procesados/<name>.md` (el pipeline la
    importó). Llega minutos después. **Este** es el que da luz verde a vaciar.
- **Requiere tocar la extensión:** leer el **título del cuaderno** del DOM,
  acumular el resultado del lote y subir el informe. *A verificar en código: que
  el título del cuaderno sea legible en la página.*

## Quién hace qué (con D1=C)
- **Extensión:** procesa fuentes → sube `.md` a `entrada/` → **emite el informe**.
- **Pipeline (ya existe):** importa → genera nota → archiva `entrada/procesados/`.
- **Puente `datos/` (nuevo, automático):** lee `entrada/procesados/` → mueve en
  Drive los PDF confirmados de `Pendientes` a `Procesados` → avisa de los que no
  casan.
- **SuperSheets (nuevo, manual/visual):** misma lógica en una hoja —
  archivo · ID · subido · nota confirmada · movido— con botón para mover.

## Guardas (no negociables)
- **Mover, nunca borrar** el PDF. Reversible.
- Mover **solo** si `<name>.md` está en el repo. Si no, se queda en Pendientes.
- **Nombres únicos** en el corpus: dos PDF con el mismo nombre colisionan (una
  nota pisa a la otra). El movedor debe **avisar** de los que no casan, no adivinar.
- No volcar todo `supersheets/original/` en el repo: extraer solo `read new` +
  `ssp move` adaptados; lo demás se queda fuera.

## Tareas (en orden) — hechas 1-5 (23/09); pendiente 6
Fundamento compartido primero, luego cada pieza.

1. **Contrato** — Fijar el **saneado de nombres** en un solo sitio (documentado)
   y replicarlo idéntico en extensión (JS), puente y SuperSheets (GAS). Definir
   que "nota confirmada" = existe `entrada/procesados/<name>.md`.
2. **Drive** — Confirmar el ID de `Pendientes` y crear `Procesados` (que él dé
   los IDs). Verificar la config `dir` de la extensión (que apunte a `entrada/`).
3. **Informe (extensión)** — Leer el título del cuaderno del DOM; acumular el
   lote; al acabar, `PUT informes/<fecha>_<cuaderno>.md` con subidas/fallidas.
   Verificar antes que el título se puede leer.
4. **Movedor (puente `datos/`)** — Nueva función en disparador: lee el informe
   (o `entrada/procesados/*.md`) de GitHub → toma `origenId`/`destinoId` → si no
   hay destino, **buscar-o-crear** `NT-GH-Procesados` y guardar su ID → casa por
   nombre saneado los PDF de `origen` → `moveTo(destino)` → registra no-casados.
   Guarda: mover nunca borrar; solo si la nota está confirmada.
5. **SuperSheets** — Extraer y adaptar `read new` + `ssp move` (matching por
   nombre, no por keyword). Hoja con archivo·ID·subido·confirmada·movido y botón.
   No volcar el resto de `original/`.
6. **Prueba** — Un lote pequeño de punta a punta antes de soltarlo entero.

## Resuelto en código (23/09)
- Pendientes = Drive `CLIMA` (`1dLPXEWc9wkdBwEVfCVWSBL2GxBvs11gm`); la antigua
  `input` está vacía. Procesados = `CLIMA/Procesados` (`1lxvL8Li5j2uF9QHpULeTvhoIrTEmpXFB`),
  por defecto en la extensión. Hay un `CLIMA/Sistema/Procesados` del archivador PRO.
- Informe: `.md` + `.json` gemelo. SuperSheets: hoja nueva `NT-GH`
  (`supersheets/NT-GH.gs`), no toca `Drive2`. Duplicados: se marcan, no se mueven.

## Preguntas a resolver ya en código (no bloquean el plan)
- ¿El título del cuaderno se lee del DOM de NotebookLM? (selector).
- IDs de las carpetas `Pendientes` / `Procesados`.
- Informe: ¿solo `.md`, o también `.json` gemelo para que lo lea el movedor?
- SuperSheets: ¿hoja nueva o reutiliza `Drive2`?
- Nombres únicos en el corpus (dos PDF igual de nombre colisionan): ¿cómo avisar?
