# Plan — Panel de control, trazabilidad y aportaciones del alumnado

Documento de diseño. No toca `rag/**` ni `portal/**`.

## 1. Qué hay hoy

`portal/` es un WebApp de Apps Script: el alumno ve el árbol de Drive, marca hasta
5 PDF y pregunta a Gemini. No hay identidad, ni estado, ni configuración: todo el
corpus está visible siempre. Ese es exactamente el problema descrito (181 PDF de
golpe = el alumno abandona).

## 2. Decisión de arquitectura

Todo el estado en **una hoja de cálculo de Drive** (`SSC_DATA`), leída y escrita
desde Apps Script. Hojas:

| Hoja | Contenido |
|---|---|
| `config` | qué tema/carpeta/documento está visible, y para qué grupo |
| `eventos` | append-only: quién, qué, cuándo (consulta, apertura, cierre, latido) |
| `aportaciones` | textos del alumnado, con fuente y estado |
| `votos` | sellos de validación entre pares |
| `resumen` | agregado nocturno por alumno (lo que lee el panel) |

**Pros:** coste cero, backup y versiones nativos de Drive, editable a mano si algo
se rompe, cero infraestructura que mantener, todo dentro del Workspace del centro.
**Contras:** cuotas de Apps Script (tiempo de ejecución diario, `UrlFetch`), Sheets
se degrada por encima de ~50k filas, escrituras concurrentes necesitan `LockService`.

**Mitigación:** ninguna función del portal lee `eventos` en caliente; el panel lee
`resumen`, que lo reconstruye un disparador nocturno. Los eventos se envían
agrupados (uno por minuto, no uno por acción). Toda lectura/escritura pasa por una
capa única (`Datos.gs`), de modo que migrar a Firestore más adelante sea cambiar un
archivo, no el proyecto.

**Alternativa descartada:** Firestore/Supabase desde el principio. Escala mejor pero
añade una cuenta, un despliegue y una consola que mantener. Para ~30-60 alumnos por
curso es sobreingeniería.

## 3. Panel del profesor

Misma WebApp, ruta `?v=panel`, con verificación de correo contra una lista blanca
en `config`. Si el correo no está, devuelve la vista de alumno. Nunca hay dos
despliegues.

Contenido:

1. **Interruptores por tema y por documento.** Un tema oculto desaparece del árbol
   y sus PDF dejan de ser consultables (se filtra en servidor, no en el HTML).
2. **Apertura programada**: fecha de activación opcional, para dejar el curso
   preparado en septiembre y que se abra solo.
3. **Bandeja "Pendiente"**: aportaciones esperando tu sello. Un clic por decisión.
4. **Pulso del grupo**: quién no ha entrado esta semana, quién consulta mucho y no
   aporta nada, qué documento no abre nadie.

Regla de diseño innegociable: **el panel no puede generar trabajo nuevo**. Si algo
exige configurar alumno por alumno, está mal diseñado y se descarta.

## 4. Medir el tiempo: lo que funciona y lo que no

Técnicamente es sencillo: latido cada 60 s solo si `document.visibilityState`
es `visible`, sesión cerrada por 3 min de inactividad, acumulado en `resumen`.

**Pero el tiempo es una métrica mala.** Se falsea dejando la pestaña abierta,
premia al lento y castiga al que resuelve rápido, y a la hora de evaluar no dice
nada. Propuesta: el tiempo se guarda, pero lo que se muestra es **evidencia de
trabajo**:

- documentos abiertos y consultas hechas,
- aportaciones publicadas y validadas,
- señal de **atascado**: muchas consultas seguidas sobre el mismo tema sin salida.
  Eso sí es accionable: te dice a quién acercarte mañana en clase.

**Protección de datos:** son menores. Guardar solo correo institucional, acción y
marca de tiempo; nada de IP ni contenido libre fuera de las aportaciones. Informar
al alumnado en la propia pantalla de acceso, borrado al cierre de curso, y uso
exclusivamente docente. Sin esto, el módulo de tiempo no se despliega.

## 5. Panel del alumno

Vista de solo lectura, misma fuente (`resumen`):

- Temas abiertos ahora mismo y cuáles no (con "se abre el 14 de octubre").
- Documentos ya leídos, con "última vez hace 3 días".
- Sus aportaciones y en qué estado están.

**Mejora sobre "visto / no visto":** un tic no demuestra nada y se llena por inercia.
Al cerrar un documento, una sola caja: *¿qué te llevas de aquí?* — una línea. Esa
línea es suya, se acumula en "Mis apuntes" y es lo que se ofrece precargado cuando
va a hacer una aportación. El registro deja de ser un checklist y pasa a ser su
cuaderno.

## 6. Aportaciones y validación entre pares

Formulario: **tema → elemento → tipo de ítem** (función, características, valores y
presiones de trabajo, procedimiento de comprobación, avería típica) **→ texto**.
Todo a `aportaciones`.

Riesgos reales del "me gusta / no me gusta" tal cual:

- La popularidad no es calidad técnica: gana el gracioso o el grupo grande.
- El "no me gusta" entre menores en un aula es castigo social, no evaluación.
- Riesgo nº1: pegar la respuesta de Gemini y firmarla.

Propuesta:

1. **Fuente obligatoria.** El sistema ya sabe qué PDF tenía abierto: autorrellena
   documento y deja que indique la página. Sin fuente, no se publica. Esto ataca el
   copia-pega y enseña trazabilidad, que es lo que se les va a exigir en el taller.
2. **Etiqueta epistemológica obligatoria**: *Medido / Teórico OEM / Inferido*. Es el
   marco de diagnóstico del propio ciclo. Obliga a distinguir lo que dice el manual
   de lo que se ha comprobado con el polímetro.
3. **Sellos en vez de "me gusta"**, y limitados: tres por alumno y tema —
   *me sirvió*, *bien explicado*, *cita bien la fuente*. Al ser escasos hay que leer
   para gastarlos.
4. **Sin "no me gusta".** Se sustituye por *"pediría una aclaración"*, que abre un
   comentario obligatorio. Criticar exige argumentar.
5. **Ciego hasta el cierre**: el autor no se muestra mientras se vota. Tú sí lo ves.
   Elimina el voto por amistad.
6. **Tu sello pesa más que todos los votos.** Los votos filtran y ordenan; tú
   validas lo que entra al manual. Cinco minutos, no una tarde.

## 7. Lo que esto tiene que no exista ya

Conviene ser honesto: los interruptores de visibilidad y el registro de tiempo los
hace Moodle, y consultar un PDF con IA lo hace NotebookLM gratis. Copiar eso no
merece el esfuerzo. Lo que no existe es el bucle completo:

> consulta al corpus → extracción con fuente citada y etiquetada → validación entre
> iguales → **manual del ciclo que sobrevive al curso**.

El producto no es el portal: es el **manual vivo de Electromecánica**, escrito por
promociones sucesivas y trazable a la documentación del fabricante. La promoción de
26/27 no empieza en blanco: corrige y amplía lo que dejó la de 25/26. Ninguna
plataforma comercial ofrece eso, porque ninguna conoce el dominio.

Dos extensiones que refuerzan esa diferencia:

- **Modo taller (móvil).** Con las manos sucias delante del vehículo: una sola
  pantalla con la ficha del elemento, el valor de referencia OEM y un botón para
  anotar la medida real. Queda el contraste medido/OEM, que es el diagnóstico en sí.
  Ahí es donde el manual deja de ser un trabajo de clase.
- **Su párrafo, con su nombre, en el manual.** El incentivo no es la nota ni el
  "me gusta": es abrir el documento del ciclo y leerse dentro.

## 8. Fases

| Fase | Entrega | Desbloquea |
|---|---|---|
| F1 | `SSC_DATA` + capa `Datos.gs` + interruptores de visibilidad | quita el agobio de los 181 PDF |
| F2 | identidad por correo + eventos + panel del alumno | "qué he visto" |
| F3 | formulario de aportación con fuente y etiqueta | contenido propio |
| F4 | muro de sellos + bandeja del profesor | validación |
| F5 | generación del manual desde lo validado | el producto |

F1 y F2 se pueden usar en clase por separado; no hay que esperar a F5 para que sirva.

## 9. Dudas a cerrar antes de codificar

1. ¿La visibilidad se configura por grupo/clase o es única para todo el alumnado?
2. ¿El alumnado accede con cuenta del centro? (determina si el filtro de correo por
   dominio vale como control de acceso)
3. ¿El super-manual se publica en Sites, en un Doc o en el propio portal?
