# Registro de documentos

Control de qué PDFs están procesados y cuáles no. Se mantiene a mano: una línea por
documento, y se actualiza al procesarlo.

| Documento | Cuaderno | Estado | Notas generadas | Fecha |
|---|---|---|---|---|
| AA AUTOMOCION MD FR.pdf | Elementos | ✅ Procesado | NT1-NT9, NT10-NT15, NT19, NT23 | 2026-09-17 |
| AA AUTOMOCION MD FR.pdf | Procesos | ⏳ Parcial | NT30, NT31, NT32 | 2026-09-17 |
| Regulación del Sistema.pdf | Elementos | ✅ Procesado | NT16-NT18, NT20-NT22 | 2026-09-17 |
| Sensores climatización VAG.pdf | Elementos | ✅ Procesado | NT12, NT13, NT14 | 2026-09-17 |
| 5. Sistemas de Aire Acondicionado.pdf | Procesos | ✅ Procesado | NT40, NT41, NT42 | 2026-09-17 |
| 5. Sistemas de Aire Acondicionado.pdf | Elementos | ❌ Sin procesar | 19 elementos en PENDIENTES.md | — |
| 13. Climatización Electrónica.pdf | Procesos | ✅ Procesado | NT43-NT47 | 2026-09-17 |
| 13. Climatización Electrónica.pdf | Elementos | ❌ Sin procesar | 29 elementos en PENDIENTES.md | — |
| TERMOCONTROL AVANZADO.pdf | — | ❌ Sin procesar | — | — |

## Estados

| Símbolo | Significado |
|---|---|
| ✅ Procesado | Todo el documento está volcado en notas |
| ⏳ Parcial | Solo algunos apartados; anota cuáles faltan |
| ❌ Sin procesar | Todavía no se ha tocado |
| 🚫 Descartado | Revisado y sin contenido aprovechable |

## Reparto por cuaderno

| Cuaderno | Qué va dentro |
|---|---|
| **Elementos** | Piezas físicas sustituibles: compresor, G65, trinaria, evaporador |
| **Procesos** | Fundamentos, cálculos, procedimientos, diagnóstico y normativa |

Un mismo PDF puede aparecer **dos veces**, una por cuaderno: el manual de aire acondicionado
tiene componentes (van a Elementos) y también fundamentos y procedimientos (van a Procesos).
Por eso lleva dos líneas.

## Procesados directamente (sin NotebookLM)

Tres manuales leídos y convertidos a notas en el propio repositorio, sin pasar
por el cuaderno. Se anota aquí porque rompe el recorrido habitual y conviene
saberlo al auditar de dónde sale cada dato.

| Documento | Notas | Qué aportó |
|---|---|---|
| VW SSP 301 · Climatización en el Touareg | NT143, NT145, NT146, NT147 | N280, G308, J255, carga 750 ± 50 g R134a |
| SEAT CD 072 · Climatización en el Ibiza-Córdoba 99 | NT144 | G65, 16 bares y tarado a 44 bares |
| SEAT SSP 172 · Tarraco | NT146 | confirma la arquitectura del Climatronic |

Las cinco salen con `grupo: POR CLASIFICAR`, como manda el importador: clasificar
es decisión del profesor.
