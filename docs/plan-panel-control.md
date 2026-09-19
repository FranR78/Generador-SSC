# Plan — Panel del profesor, rondas y manual del ciclo

Plan activo. Parte del código que YA existe en `main`, no de cero.

## 1. Qué hay construido (leído en `main`)

- `appsscript.json`: `executeAs: USER_ACCESSING`, `access: DOMAIN`. Cada alumno
  ejecuta el portal **como él mismo** → su `UserProperties` es suya y por eso
  funciona la key personal.
- `IA.gs`: key en `AI_API_KEY` (UserProperties), cascada de modelos con memoria
  del último que funcionó (`AI_MODEL_OK`), 404 = siguiente modelo.
- `Gating.gs`: `bloques = 1 + min(⌊aporta/REQ⌋, ⌊valora/REQ⌋)`, monótono. Esta
  es la pieza buena del proyecto: la participación **compra** consultas.
- `DB.gs`: Hoja con `Tareas`, `Aportaciones`, `Valoraciones`, `Actividad`.
- `Portal.html` + vistas `Consulta`, `Manual`, `Cuenta`, `Juegos`.

Lo que **no** existe todavía: panel del profesor, visibilidad por temas, última
conexión, rondas con estados y fechas, panel del alumno, generación del manual.

## 2. El problema a resolver antes de añadir nada

`DB.gs` documenta compartir la Hoja **con el dominio como EDITOR**, porque el
script corre como el alumno y necesita escribir. Consecuencia:

- Cualquier alumno puede abrir la Hoja y **poner su fila de `Actividad` a 0**.
  El gating entero se salta en 10 segundos, y es el corazón del sistema.
- Puede leer todas las aportaciones y todos los votos: **no hay anonimato real**
  en la votación, y se ve quién votó a quién.
- Puede borrar filas ajenas.

No es hipotético: se comparte el enlace por WhatsApp y se acabó. **Cerrar esto es
la F1**, antes que cualquier funcionalidad nueva.

### Solución: separar la puerta de datos

Dos proyectos Apps Script:

| Proyecto | Despliegue | Para qué |
|---|---|---|
| **Portal** (el actual) | `USER_ACCESSING`, acceso dominio | UI, identidad, **key personal del alumno**, llamadas a Gemini |
| **Datos** (nuevo, pequeño) | `executeAs: ME`, acceso dominio | Único que toca la Hoja. La Hoja **no se comparte con nadie** |

El Portal llama al Datos con `UrlFetchApp` enviando
`ScriptApp.getIdentityToken()`; el Datos verifica el token, saca el correo de ahí
(no se fía del que le manden) y aplica las reglas. Así:

- El alumno **no puede tocar la Hoja**: no la tiene.
- Los contadores del gating pasan a ser inviolables.
- El anonimato de la votación se sostiene.

Coste: un despliegue más y ~1 s extra por operación de datos. A cambio, el
sistema deja de ser honorífico. Alternativa si se descarta: asumir que el gating
es un acuerdo de confianza, no un control — decisión válida, pero hay que tomarla
a sabiendas.

## 3. Panel del profesor

Vista nueva en el Portal, visible solo para los correos de la lista blanca
(`PROFES` en Propiedades del script), con todo el estado en la Hoja:

1. **Interruptores de visibilidad** por tema/carpeta y por documento, con fecha
   de apertura opcional. Hoy `listarEstructura()` devuelve el árbol entero: hay
   que filtrarlo **en el servidor** contra una pestaña `Config`.
2. **Umbrales del gating desde la UI**: `GATE_LIBRES`, `GATE_REQ_APORTA`,
   `GATE_REQ_VALORA` se editan hoy a mano en Propiedades. Deben ser tres campos.
3. **Tareas/rondas**: crear, abrir, pasar a votación, cerrar.
4. **Bandeja de sellado**: lo más votado esperando tu validación técnica.
5. **Pulso del grupo**: última conexión, quién no ha aportado, quién no ha
   valorado, quién está bloqueado por el gating ahora mismo.

Regla innegociable: el panel no puede generar trabajo nuevo. Nada de configurar
alumno por alumno.

## 4. Rondas: lo que le falta a `Tareas`

`Tareas` ya tiene `estado` (`abierta`). Se amplía a una máquina de estados:

```
borrador → abierta → votacion → cerrada
          (escriben) (leen y votan) (entra al manual)
```

Columnas nuevas en `Tareas`: `modo`, `grupo`, `abre_el`, `cierra_entrega_el`,
`cierra_votacion_el`. Un disparador diario mueve los estados (se usa en casa y en
el aula, no solo en clase).

Reglas que garantizan el trabajo:

1. **Portón**: `aportacionesParaValorar()` debe filtrar por tarea y exigir haber
   entregado la tuya en esa tarea. Hoy no lo exige.
2. Orden **distinto por alumno** (semilla derivada de su correo), para que no
   gane siempre la primera de la lista.
3. **3 estrellas ponderadas 3-2-1** en lugar del actual `voto` 1-5: obliga a
   jerarquizar y no a marcar "4" a todo. Unicidad por `(tarea, usuario, peso)`.
4. `modo`: `misma_pregunta` (todos el mismo ítem) o `reparto` (cada uno un ítem
   distinto del mismo elemento). Con 17 respuestas al mismo ítem, a la octava se
   lee en diagonal.

## 5. Calidad de las aportaciones

Dos campos obligatorios nuevos en `Aportaciones`:

- **`fuente_doc` + `pagina`.** El portal ya sabe qué PDF tenía abierto: lo
  autorrellena. Sin fuente, no se publica. Es la defensa contra pegar la
  respuesta de Gemini y firmarla — que con la IA integrada es el riesgo nº1.
- **`etiqueta`: Medido / Teórico OEM / Inferido.** El marco de diagnóstico del
  ciclo: obliga a distinguir lo que dice el manual de lo comprobado con el
  aparato. Ninguna plataforma genérica pide esto.

## 6. Registro de uso

- **Última conexión**, no tiempo de permanencia: una escritura por carga en
  `Actividad`. Responde a "yo sí he trabajado" sin vigilar a nadie.
- `Actividad` ya cuenta consultas/aportaciones/valoraciones: con eso basta.
- Datos guardados: correo del centro, acción y fecha. Nada más.

## 7. Panel del alumno

Solo lectura, desde `Actividad` y sus propias filas:

- Cuántas consultas le quedan y **qué tiene que hacer para desbloquear más**
  (esto ya lo calcula `gate_estado`, solo falta enseñarlo bien).
- Documentos ya consultados y hace cuánto.
- Sus aportaciones, cuáles se sellaron y si alguna entró en el manual.

## 8. El manual del ciclo

Pestaña `Manual` en la Hoja: lo que tú sellas se vuelca ahí con autor, fuente y
etiqueta, más el `curso`. Se publica como **HTML autocontenido** (colores del
centro, Open Sans) pegado en el insertador de código de Google Sites, para que la
versión publicada sea legible aunque el portal esté caído.

Ese es el producto: no el portal, sino el manual vivo de Electromecánica escrito
por promociones sucesivas y trazable a la documentación del fabricante. 26/27 no
empieza en blanco: corrige y amplía lo de 25/26. Eso no lo da Moodle ni
NotebookLM, porque ninguno conoce el dominio.

Extensión natural, **modo taller** en móvil: ficha del elemento, valor de
referencia OEM y un botón para anotar la medida real. El contraste medido/OEM es
el diagnóstico.

## 9. Fases

| Fase | Entrega | Por qué en este orden |
|---|---|---|
| F1 | Proyecto **Datos** + Hoja sin compartir | sin esto, el gating es decorativo |
| F2 | Pestaña `Config` + filtro de visibilidad en servidor | quita el agobio de los 181 PDF |
| F3 | Panel del profesor (visibilidad, umbrales, pulso) | control sin trabajo extra |
| F4 | Rondas: estados, fechas, portón, estrellas 3-2-1 | el bucle de lectura entre iguales |
| F5 | Fuente y etiqueta obligatorias | calidad y anti copia-pega |
| F6 | Sellado → `Manual` → HTML para Sites | el producto |
| F7 | Panel del alumno | autonomía |

## 10. Errores a corregir de paso

- `MAX_PDFS_PER_QUERY = 5` × `MAX_PDF_BYTES = 15 MB` permite peticiones de 75 MB,
  por encima del límite de `UrlFetchApp` (~50 MB). Limitar el **total**.
- `aportacionesParaValorar()` llama a `db_enunciado_()` por cada aportación, y
  cada llamada relee la pestaña `Tareas` entera. Cachear el mapa una vez.
- `db_inc_` hace `getDataRange()` para localizar la fila en cada incremento.

## 11. Decisión pendiente

Solo una, y es la de la sección 2: **¿se monta el proyecto Datos, o se asume que
el gating es un pacto de confianza?** Todo lo demás está cerrado.
