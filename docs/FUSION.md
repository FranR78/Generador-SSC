# Fusión automática por entidad — contraoferta

## Qué pides
Una sola NT por cosa (una de electroventiladores, no 20). Que junte TODOS los
datos de todas las fuentes sin repetir, y que use la mejor explicación.

## Qué propongo: dos capas

```
PDF → NotebookLM → FICHA DE FUENTE (una por PDF y entidad)   ← materia prima, no se toca
                         │  fusionar.py (automático, en GitHub)
                         ▼
                  NOTA MAESTRA (una por entidad)             ← lo que ve el alumno
```

- **Fichas de fuente** (`notas/`): lo que ya tenemos. Una por PDF. No se borran
  nunca: son la trazabilidad y la base para refusionar.
- **Nota maestra** (`maestras/<entidad>.md`): una por entidad. Es la única que
  se pinta en el portal y en el dashboard. Las fuentes quedan en un desplegable
  «Ver fuentes originales».

## Cómo fusiona (y cómo se garantiza que no se pierde nada)

1. **Cuándo:** solo cuando cambian las fuentes de una entidad. Se guarda una
   huella de sus fichas: si entra un PDF nuevo del compresor, se refusiona el
   compresor y nada más.
2. **Quién:** un modelo (Gemini, con TU key como secreto de GitHub; la del
   alumnado no se toca). Recibe SOLO las fichas de fuente, que ya vienen con
   su página. Reglas: no añadir nada que no esté en ellas; cada dato conserva
   su «(fuente, pág.)»; de dos explicaciones iguales se queda la más clara y
   completa; las variantes (paletas, espiral…) van como subapartados de «Tipos».
3. **Discrepancias, no elecciones:** si dos fuentes dan valores distintos
   (14 bar / 15 bar), no elige: los pone los dos en una caja «Discrepancias»,
   cada uno con su fuente. Decides tú.
4. **Auditoría automática de datos (lo importante):** un script, sin IA, saca
   todos los valores numéricos con unidad de las fuentes (bar, ºC, rpm, Ω, V,
   g, %, min…) y comprueba que cada uno está en la maestra. Si falta uno, la
   fusión **no se publica**: queda como borrador con la lista de datos perdidos.
   Esto convierte «sin dejar ningún dato atrás» en algo comprobado, no
   prometido.
5. **Tu control:** la maestra nace `estado: borrador`. La lees, corriges si
   quieres y la pasas a `revisada`. Una revisada no se sobrescribe sola: si
   llega una fuente nueva, se genera una propuesta al lado y el panel te avisa
   «hay fuente nueva para compresor».

## Qué cambia en lo que ya tienes
- El guion (`ssc-clima.yml`) y los alias siguen igual: ordenan entidades, y
  ahora cada entidad es UNA maestra.
- Los alias de más (filtro + mirilla → una sola) se fusionan también: el alias
  decide qué cae en la misma maestra.
- `notas-fusionadas/` (el sistema manual antiguo) se retira.
- Las preguntas fijas se generarán sobre las maestras, no sobre las fuentes.

## Capturas del alumnado (ya está hecho, falta encenderlo)
`datos/Puente.gs` → `puenteNT_subirCapturas`, cada 15 min:
- El alumno sube la foto a la carpeta de Drive con el nombre que le enseña la
  propia nota en el hueco de imagen (`NT21_02.jpg`).
- El puente la sube a `notas-tecnicas/imagenes/`, `construir.py` la incrusta en
  su hueco y le quita los EXIF. Nombre incorrecto → carpeta «Nombre
  incorrecto», no se pierde.
- **Mejora ligada a la fusión:** el número NT va con la MAESTRA (uno fijo por
  entidad), así una captura no cambia de sitio aunque entren fuentes nuevas.
  Los huecos 📷 de todas las fuentes se juntan sin repetir en la maestra.
- **Para encenderlo:** propiedades `GITHUB_TOKEN` y `CARPETA_CAPTURAS` en el
  proyecto datos, ejecutar `crearActivador` una vez, y `puenteNT_comprobar`
  para verificar.

## Orden de trabajo
1. `fusionar.py` + auditoría de datos + `maestras/` (probar con compresor y
   electroventiladores).
2. `construir.py` y `notas.json` pintan maestras; fuentes en desplegable.
3. Workflow: fusiona solo lo cambiado. Secreto `GEMINI_API_KEY` en GitHub.
4. Encender capturas.
