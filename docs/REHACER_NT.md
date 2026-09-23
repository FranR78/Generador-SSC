# Rehacer las notas técnicas desde cero

Estado 23/09: 1.222 notas, **1.187 con `grupo: POR CLASIFICAR`** y casi todas con
`fuentes: POR COMPLETAR`. No hay nada que salvar a mano: se rehace.

## Por qué sale el desastre (3 causas, medidas en el repo)

1. **Agrupar por palabra del título.** `claves.yml` → grupo `refrigerante` mete
   «Bomba de recirculación de *líquido refrigerante*» (motor, V50) junto a
   «Fluidos refrigerantes R12 y R134a» (gas). En castellano *refrigerante* es
   las dos cosas. Ninguna regla por título lo va a separar.
2. **Solo dos plantillas.** ELEMENTO obliga a un gas, un aceite o un filtro a
   rellenar «principio de funcionamiento» y «cómo comprobarlo» → relleno o
   «No aplica» en media ficha.
3. **El modelo no dice dónde va la nota.** Clasifica el importador después, a
   ciegas. El que ha leído el PDF (NotebookLM) es el único que sabe si habla del
   circuito frigorífico o del circuito de refrigeración del motor.

## Lo nuevo (mismo flujo: NotebookLM → extensión → GitHub → dashboard)

### 1. Cinco tipos de nota, cada uno con sus campos

| tipo | ejemplos | apartados |
|---|---|---|
| `componente` | compresor, V50, G65, filtro antipolen | misión · tipos/características · principio · valores de trabajo · anomalías · comportamiento del sistema en avería · comprobación · mantenimiento (intervalo) |
| `fluido` | R134a, R1234yf, aceite PAG/POE, trazador UV, líquido refrigerante motor | designación y norma · propiedades (tabla P-T, GWP) · dónde y cuánto (cargas) · compatibilidades y mezclas prohibidas · identificación (racores, etiqueta) · manipulación, almacenamiento y residuos · riesgos y normativa |
| `fundamento` | ciclo frigorífico, higrometría, regulación bizona | objeto · fundamento · desarrollo · valores de referencia · errores de concepto |
| `procedimiento` | vacío y carga, lavado del circuito | objeto · condiciones previas · equipo · pasos numerados · valores · verificación final · seguridad y normativa |
| `diagnostico` | lectura de manómetros, no enfría | síntoma · causas posibles · cómo separar causas · valores · verificación |

### 2. Cada nota empieza con un bloque YAML que rellena NotebookLM

```yaml
tipo: componente            # componente | fluido | fundamento | procedimiento | diagnostico
titulo: Bomba de recirculación de líquido refrigerante
entidad: bomba-recirculacion-refrigerante-motor   # de la lista canónica; si no está: NUEVA
sistema: refrigeracion-motor # lista cerrada (abajo)
codigo: V50
fabricante: VW              # si aparece
fuente: {archivo: "SSP 208.pdf", paginas: "12-13"}
relacionados: [calefaccion-habitaculo, j255]
palabras: [bomba eléctrica, calefacción, ralentí]
```

- **`sistema`** (lista cerrada en el prompt) decide la unidad/sección:
  `circuito-frigorifico` · `refrigeracion-motor` · `calefaccion` ·
  `distribucion-aire` · `control-electronico` · `fluidos-y-normativa` ·
  `taller-y-equipos`. Así el gas y la V50 no pueden coincidir nunca.
- **`entidad`** sustituye a `claves.yml`: agrupa las notas de la misma cosa de
  distintos manuales. La lista canónica va en el prompt y crece con las `NUEVA`.
- **`fuente` obligatoria** → se acaba el `POR COMPLETAR`.

### 3. El importador valida, no adivina

`importar.py` lee el YAML. Falta `tipo`, `sistema` o `fuente`, o un valor fuera
de lista → la nota va a `entrada/rechazadas/` con el motivo, **no** al dashboard.
Ninguna nota entra como «POR CLASIFICAR».

### 4. El dashboard ordena por sistema → tipo → entidad

Pestañas de fuentes solo dentro de la misma `entidad` (lo de la captura: 27
fuentes de cosas distintas bajo «gas» deja de ser posible).

## Arranque desde cero (reversible)

1. ✅ Archivo: rama `claude/archivo-notas-v1` (= main antes de borrar; los tags no
   se pueden subir desde la nube).
2. ✅ Vaciados `notas/`, `entrada/procesados/`, `claves.yml` (en la rama; a `main`
   cuando el importador v2 esté listo, para no disparar el workflow viejo).
   Pruebas: la extensión sube a `notas-tecnicas/pruebas-v2/` (no dispara nada).
3. ✅ Prompt `prompts/notebooklm-v2.md`; pendiente: + importador/construir adaptados.
4. Prueba con **un** cuaderno de 3 PDF (gas, un componente, un procedimiento).
5. Visto bueno → lote entero. Los PDF de Drive no se han movido: no hay que
   deshacer nada allí.
