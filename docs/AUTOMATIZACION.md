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

## Decisiones abiertas (a cerrar al empezar)
- **D1 — ¿Dónde corre el movedor?**
  - (a) **En el puente `datos/`** (ya tiene Drive + token GitHub + disparadores):
    100% automático, sin abrir la hoja. *Recomendada para "todo automático".*
  - (b) **En SuperSheets**: visual y a mano desde el menú; reusa su código tal cual.
  - (c) Las dos: el puente lo hace solo y SuperSheets queda como vista/control.
- **D2 — ¿La extensión deja informe?** No hace falta para mover (basta el repo).
  Solo si más adelante queremos más datos (fecha, cuaderno de origen).
- **D3 — Vaciar el cuaderno** (borrar fuentes en NotebookLM): sigue **aparte** y
  frágil (DOM, sin API). No entra en este plan. Mover el PDF ≠ vaciar cuaderno.

## Guardas (no negociables)
- **Mover, nunca borrar** el PDF. Reversible.
- Mover **solo** si `<name>.md` está en el repo. Si no, se queda en Pendientes.
- **Nombres únicos** en el corpus: dos PDF con el mismo nombre colisionan (una
  nota pisa a la otra). El movedor debe **avisar** de los que no casan, no adivinar.
- No volcar todo `supersheets/original/` en el repo: extraer solo `read new` +
  `ssp move` adaptados; lo demás se queda fuera.

## Tareas para la próxima sesión
- [ ] Cerrar D1 (dónde corre el movedor).
- [ ] Fijar el **saneado compartido** en un sitio y replicarlo en ambos lados.
- [ ] Confirmar la carpeta `Pendientes` y crear `Procesados` en Drive (IDs).
- [ ] Escribir el movedor: leer `entrada/procesados/*.md` de GitHub → casar por
      nombre saneado → `moveTo(Procesados)` → reportar no casados.
- [ ] Verificar la config `dir` de la extensión (que apunte a `entrada/`).
- [ ] Probar con un lote pequeño antes de soltarlo entero.
