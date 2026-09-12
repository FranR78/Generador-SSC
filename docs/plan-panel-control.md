# Plan — Panel de control, rondas de definiciones y manual del ciclo

Documento de diseño (v4, decisiones cerradas). No toca `rag/**` ni `portal/**`.

## 0. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Dónde vive el estado | Hoja de cálculo en Drive (`SSC_DATA`). Sin base de datos externa |
| Acceso | Solo cuentas **dadas de alta por el profesor**. El dominio no basta |
| Tipo de cuenta | Corporativa del centro o de grupo; ambas válidas, siempre autorizadas a mano |
| Visita (sin alta) | Cupo de **3 consultas por semana**, luego pantalla de "pide el alta" |
| Tiempo de permanencia | **No se mide.** Solo `última conexión` y registro de acciones |
| Votación | **3 estrellas ponderadas (3-2-1)** — confirmado, anónimas mientras dura. Sin voto negativo |
| Publicación del manual | **Google Sites** |
| Uso | Aula y casa → las rondas abren y cierran **por fecha**, no solo a mano |
| Objetivo pedagógico | Que los 17 escriban una definición y lean las 16 de los demás |

## 1. Qué hay hoy

`portal/` es un WebApp de Apps Script: árbol de Drive, hasta 5 PDF, pregunta a
Gemini. Sin identidad, sin estado, sin configuración. Todo el corpus visible
siempre: 181 PDF de golpe.

## 2. Roles y acceso

| Rol | Cómo se obtiene | Qué puede |
|---|---|---|
| `visita` | Entra con cuenta del dominio pero no está en `alumnos` | 3 consultas por semana; no entrega, no vota, no ve rondas |
| `alumno` | Alta hecha por el profesor | Todo el corpus visible, rondas, voto, panel propio |
| `profesor` | Lista blanca en `config` | Panel de control completo |

Notas:

- El cupo de visita se cuenta en `alumnos` (`consultas_semana` + `semana_iso`),
  no en el navegador: vaciar la caché no lo reinicia. El reseteo es perezoso: al
  consultar, si la semana ISO guardada no es la actual, el contador vuelve a 0.
- **Cuentas de grupo**: una cuenta = un participante a todos los efectos. Una
  entrega y un juego de estrellas por cuenta, no por persona. Campo
  `tipo` (`individual` / `grupo`) e `integrantes` para que en el manual figuren
  todos los nombres.
- El alta es un botón del panel: pegas los correos, eliges grupo, listo. Nunca
  configuración por alumno más allá de eso.

## 2 bis. La clave de Gemini: el visitante no configura nada

Duda resuelta: **ningún alumno ni visitante necesita clave de API.** La clave vive
en *Propiedades del script* del proyecto de Apps Script, es tuya, y nunca sale del
servidor: el HTML del alumno solo llama a `google.script.run`, y la petición a
Gemini la hace el servidor con `UrlFetchApp`. Quien mire el código fuente de la
página no ve nada.

La consecuencia es la contraria a la que parece: **como paga tu clave, hace falta
el cupo**. Los 3 por semana del visitante no son una traba pedagógica, son el
freno de gasto.

Esto obliga a un despliegue muy concreto:

- **Ejecutar como: yo (el propietario).** Así la clave y los PDF se usan con tus
  permisos y **no hay que compartir la carpeta de los 181 PDF con nadie**. Es una
  ventaja grande: el alumno lee los documentos a través del portal sin tener
  acceso a Drive.
- **Acceso: usuarios de la organización.** Con esa combinación,
  `Session.getActiveUser().getEmail()` devuelve el correo del alumno y hay
  identidad real sin pedir login aparte.

**Aviso importante sobre las cuentas de grupo:** lo anterior solo funciona si esas
cuentas están **en el mismo Workspace del centro**. Una cuenta de otro dominio (o
`@gmail.com`) puede devolver correo vacío y dejarnos sin identidad. Si hiciera
falta admitirlas, el plan B es un código de acceso por grupo en la URL, con menos
garantías. Conviene decidirlo antes de F1.

### Freno de gasto (además del cupo)

- Caché de respuestas: hoja `cache` con clave `hash(pregunta + docIds)`. Cuando 17
  alumnos preguntan casi lo mismo sobre los mismos PDF, se sirve lo ya calculado.
- **Aviso técnico sobre el código actual:** `MAX_PDFS_PER_QUERY = 5` con
  `MAX_PDF_BYTES = 15 MB` permite construir peticiones de hasta 75 MB, por encima
  del límite de `UrlFetchApp` (~50 MB) y del tiempo de ejecución. Hay que limitar
  el **total** de la petición, no solo cada archivo. A corregir en F1.

## 3. El concepto central: la Ronda

Todo gira alrededor de una unidad: la **ronda**. Una ronda es *un elemento + un
ítem a definir*, abierta a un grupo, con cuatro estados:

```
borrador  →  abierta  →  votación  →  cerrada
            (escriben)  (leen y votan)  (entra al manual)
```

Reglas que garantizan el trabajo:

1. **Para ver las definiciones de los demás hay que haber entregado la tuya.**
   Ese portón convierte "leer a los compañeros" en algo inevitable.
2. En votación se ven **sin autor** y en **orden distinto** por alumno (barajado
   con semilla derivada de su correo): no gana la primera de la lista.
3. Cada uno reparte **3 estrellas ponderadas**: una de 3 puntos, una de 2 y una
   de 1. Obliga a ordenar preferencias, no solo a marcar lo primero decente.
4. Al cerrar se revelan autores, se ve el ranking y tú pones el sello técnico.
   Lo sellado entra al manual del ciclo.

Mínimo garantizado por ronda: leer documentación → redactar → leer 16 textos →
jerarquizarlos. Aunque no funcione nada más, eso ya vale la sesión.

### Fechas (aula y casa)

Cada ronda lleva `abre_el`, `cierra_entrega_el` y `cierra_votacion_el`. Un
disparador diario mueve el estado solo. Los botones manuales del panel siguen
existiendo para adelantar o retrasar. El alumno ve siempre "cierra en 2 días".

### Modo de ronda (campo `modo`)

- `misma_pregunta`: los 17 definen lo mismo. Comparación directa.
- `reparto`: varios ítems del mismo elemento, cada alumno coge uno (con cupo por
  ítem). Cada uno lee 16 textos **distintos** y el manual cubre un elemento
  entero en una sesión.

Conviene alternar: con 17 definiciones del mismo ítem, a la octava se lee en
diagonal.

## 4. Datos: la hoja `SSC_DATA`

Todo el acceso pasa por una capa única (`Datos.gs`), para que migrar en el futuro
sea cambiar un archivo.

| Hoja | Columnas |
|---|---|
| `config_temas` | `id_tema`, `nombre`, `carpeta_id`, `visible`, `fecha_apertura`, `grupo`, `orden` |
| `config_docs` | `doc_id`, `id_tema`, `nombre`, `visible` |
| `alumnos` | `email`, `nombre`, `tipo`, `integrantes`, `grupo`, `rol`, `alta`, `ultima_conexion`, `consultas_semana`, `semana_iso`, `activo` |
| `rondas` | `id_ronda`, `id_tema`, `elemento`, `item`, `modo`, `enunciado`, `grupo`, `estado`, `abre_el`, `cierra_entrega_el`, `cierra_votacion_el` |
| `aportaciones` | `id`, `id_ronda`, `email`, `texto`, `fuente_doc`, `fuente_pagina`, `etiqueta`, `creada_el`, `estado`, `puntos`, `sello` |
| `votos` | `id_ronda`, `email_votante`, `id_aportacion`, `peso`, `creado_el` |
| `eventos` | `ts`, `email`, `accion`, `detalle` |
| `manual` | `id_tema`, `elemento`, `item`, `texto_final`, `autor`, `fuente`, `etiqueta`, `fecha`, `curso` |

Implementación:

- `ultima_conexion` se actualiza en cada carga: una escritura por sesión, sin
  latidos. No se mide permanencia.
- `eventos` es append-only y solo registra acciones con valor (consulta, apertura
  de documento, entrega, voto). Es lo que responde a "yo sí he trabajado".
- `LockService` en entregar y votar. Unicidad: una aportación por
  `(id_ronda, email)`; un voto por `(id_ronda, email_votante, peso)` y por
  `(id_ronda, email_votante, id_aportacion)` — ni dos estrellas del mismo valor
  ni dos estrellas a la misma definición.
- `curso` en `manual` es lo que permite que 26/27 amplíe lo de 25/26 sin borrarlo.
- Con 17-60 cuentas las cuotas de Apps Script no son un problema.

**Protección de datos:** correo institucional, acción y fecha. Nada más. Aviso en
la pantalla de acceso, uso exclusivamente docente, borrado al cierre de curso.

## 5. Contrato del servidor

Una sola WebApp, una sola URL. El rol se decide en servidor contra `alumnos`.

**Alumno**

- `getSesion()` → rol, cupo restante si es visita, temas visibles, rondas activas
- `listarEstructura()` → árbol **ya filtrado** en servidor
- `preguntar(pregunta, docIds)` → valida visibilidad y descuenta cupo de visita
- `entregar(idRonda, {texto, fuenteDoc, pagina, etiqueta})`
- `listarParaVotar(idRonda)` → error si no has entregado; anónimo y barajado
- `votar(idRonda, idAportacion, peso)` → peso 3, 2 o 1
- `miPanel()` → documentos leídos y cuándo, mis entregas, qué me falta

**Profesor**

- `altaCuentas(correos, grupo, tipo)` / `bajaCuenta(email)`
- `setVisible(tipo, id, visible, fechaApertura)`
- `crearRonda(...)`, `pasarAVotacion(id)`, `cerrarRonda(id)`
- `sellar(idAportacion)` → vuelca a `manual`
- `pase(email, idRonda)` → desbloquea a quien entregó en papel o llegó tarde
- `pulso(grupo)` → última conexión, sin entregar, sin votar
- `publicarManual(idTema)` → genera el HTML del manual

El filtrado de visibilidad **siempre en servidor**. Si se hace en el HTML, el
alumno ve el corpus entero mirando el código fuente.

## 6. Panel del profesor

1. Altas: pegar correos, elegir grupo, alta.
2. Interruptores por tema y documento, con fecha de apertura.
3. Rondas: crear, abrir, votación, cerrar. Y las fechas hacen el resto.
4. Bandeja de sellado: lo más votado esperando tu validación. Un clic.
5. Pulso: última conexión, quién no ha entregado, quién no ha votado.

Regla innegociable: **el panel no puede generar trabajo nuevo.**

## 7. Panel del alumno

Solo lectura:

- Temas abiertos y cuáles no ("se abre el 14 de octubre").
- Documentos ya leídos, con "última vez hace 3 días".
- Rondas: entregada / pendiente de votar / cerrada, con cuenta atrás.
- **Mis apuntes**: al cerrar un documento, una caja de una línea —
  *¿qué te llevas de aquí?*. Se acumula y se ofrece precargada al entregar. Un
  tic de "visto" se rellena por inercia; una línea escrita, no.

## 8. Publicación en Google Sites

Dos piezas distintas, no confundirlas:

- **El portal** (consulta, rondas, paneles) se embebe en Sites como WebApp de
  Apps Script, desplegado como *ejecutar como yo* + *acceso a la organización*
  (ver sección 2 bis). A verificar en F0: dentro del iframe de Sites el alumno
  debe estar logueado con la cuenta autorizada y `getActiveUser()` debe devolver
  su correo; ahí es donde suele fallar y condiciona todo lo demás.
- **El manual** se genera como **HTML autocontenido** (colores del centro, Open
  Sans) y se pega en el insertador de código de Sites. Así la versión publicada
  queda congelada y legible aunque el portal esté caído o en mantenimiento.
  Republicar es regenerar y volver a pegar: 30 segundos.

## 9. Lo que sostiene todo: el manual del ciclo

Interruptores de visibilidad y registro de acceso los hace Moodle; consultar un
PDF con IA lo hace NotebookLM. Copiar eso no merece el esfuerzo. Lo que no existe
es el bucle completo:

> consulta al corpus → definición propia con fuente citada y etiquetada →
> lectura y voto entre iguales → **manual del ciclo que sobrevive al curso**

El producto no es el portal: es el manual vivo de Electromecánica, escrito por
promociones sucesivas y trazable a la documentación del fabricante. La promoción
de 26/27 no empieza en blanco: corrige y amplía lo de 25/26.

Dos elementos que lo hacen propio del ciclo y no de una plataforma genérica:

- **Fuente obligatoria.** El sistema sabe qué PDF tenía abierto: autorrellena el
  documento y el alumno indica la página. Sin fuente, no se publica. Es la
  defensa contra pegar la respuesta de Gemini y firmarla.
- **Etiqueta obligatoria: Medido / Teórico OEM / Inferido.** Es el marco de
  diagnóstico del ciclo: obliga a distinguir lo que dice el manual de lo que se
  ha comprobado con el aparato.

Extensión natural, **modo taller** en móvil: una pantalla con la ficha del
elemento, el valor de referencia OEM y un botón para anotar la medida real. El
contraste medido/OEM es el diagnóstico.

## 10. Fases

| Fase | Entrega | Desbloquea |
|---|---|---|
| F0 | embebido en Sites + `getActiveUser()` dentro del iframe | condiciona todo lo demás |
| F1 | `SSC_DATA` + `Datos.gs` + altas + interruptores | quita el agobio de los 181 PDF |
| F2 | roles, cupo semanal de visita, última conexión, eventos | control de acceso y de gasto |
| F3 | rondas: entregar con fuente y etiqueta | contenido propio |
| F4 | votación 3-2-1 con portón de entrega + sellado | el bucle completo |
| F5 | volcado a `manual` + generador de HTML para Sites | el producto |
| F6 | panel del alumno y "mis apuntes" | autonomía |

F0 va primero y es barato: si el embebido en Sites da guerra, mejor saberlo antes
de construir encima.

## 11. Riesgos asumidos

- **Coordinación por WhatsApp** durante la votación. El anonimato lo dificulta,
  las estrellas ponderadas lo diluyen y tu sello decide. No se blinda más.
- **El que no entrega se queda fuera del muro.** Por diseño; para eso está `pase`.
- **Cuentas de grupo**: no se puede saber quién del grupo trabajó. Asumido.
- **Textos casi idénticos** en `misma_pregunta`. Se alterna con `reparto`.

## 12. Pendiente de confirmar

1. ¿Las cuentas de grupo estarán en el Workspace del centro? Si no, hay que
   rediseñar la identidad antes de F1 (ver sección 2 bis).
