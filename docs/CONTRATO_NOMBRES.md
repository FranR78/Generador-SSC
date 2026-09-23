# Contrato de nombres (tarea 1 de AUTOMATIZACION.md)

Única llave entre NotebookLM (nombre) y Drive (ID): el **nombre saneado**.

```js
sanear(s) = s.normalize("NFC")
             .replace(/\.[^.]+$/, "")                  // quita extensión
             .replace(/[^\p{L}\p{M}\p{N}_-]+/gu, "_")  // resto → _
```

Copias que deben ser **idénticas** (si se toca una, se tocan todas):
- `Extension-NT-GH/defaults.js` → `sanear()`
- `datos/Movedor.gs` → `sanear()`
- SuperSheets (cuando se extraiga) → `sanear()`

Definiciones:
- **Subido** = la extensión hizo PUT OK de `entrada/<name>.md`.
- **Nota confirmada** = existe `notas-tecnicas/entrada/procesados/<name>.md`
  (se compara saneando también ese nombre, así casan las notas antiguas).
- **Movido** = el PDF está en la carpeta destino. Nunca se borra.

Informe por lote: `notas-tecnicas/informes/<AAAA-MM-DD_HHMM>_<cuaderno>.{md,json}`.
El `.json` lleva `cuaderno, fecha, origenId, destinoId, fuentes[{title,name,ok,motivo}]`.
