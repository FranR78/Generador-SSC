# Plan — Panel de control, rondas de definiciones y manual del ciclo

Documento de diseño (v7, decisiones cerradas). No toca `rag/**` ni `portal/**`.

## 0. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Clave de Gemini | **La suya, cada alumno.** Se guarda en su navegador, nunca en el servidor |
| Dónde vive el estado | Hoja de cálculo en Drive (`SSC_DATA`). Sin base de datos externa |
| Acceso al portal | Cuenta **educativa del dominio**, dada de alta por el profesor |
| Cuenta de la API | **Gmail personal** del alumno (sin bloqueos del administrador) |
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

## 2. Identidad y acceso

Dos cuentas distintas, cada una para una cosa. Ya está probado y funciona así:

- **Para entrar al portal: cuenta educativa del dominio.** El WebApp se despliega
  *ejecutar como yo* + *acceso: usuarios de la organización*, y
  `Session.getActiveUser().getEmail()` devuelve el correo del alumno. Identidad
  real, sin login aparte, sin códigos que repartir.
- **Para la API: su Gmail personal.** La clave de AI Studio la genera con su
  cuenta personal, sin bloqueos del administrador ni cuotas del centro.

| Rol | Cómo se obtiene | Qué puede |
|---|---|---|
| `visita` | Cuenta del dominio que aún no está en `alumnos` | 3 consultas por semana; no entrega, no vota, no ve rondas |
| `alumno` | Alta hecha por el profesor | Corpus visible, rondas, voto, panel propio |
| `profesor` | Lista blanca en `config` | Panel de control completo |

Consecuencias del despliegue *como yo*:

- **No hay que compartir la carpeta de los 181 PDF con nadie.** El alumno los lee
  a través del portal, no desde Drive.
- **`SSC_DATA` no se comparte**: nadie puede abrir la hoja y ver los votos, las
  definiciones ajenas o la configuración.
- El alta es un botón del panel: pegas los correos, eliges grupo, listo.
- **Cuentas de grupo** (del mismo dominio): una cuenta = un participante. Una
  entrega y un juego de estrellas por cuenta. Campos `tipo` e `integrantes` para
  que en el manual figuren todos los nombres.

## 2 bis. La clave de Gemini la pone cada alumno

**Cada alumno genera su propia API key en AI Studio con su Gmail personal y la
pega en su configuración.**
El visitante puede hacer lo mismo. El cupo de 3 consultas por semana **lo impone
el sistema**, no la clave: quien no está de alta queda bloqueado por el contador
de la hoja, aunque su clave siga teniendo cuota de sobra.

Consecuencias buenas: el gasto no lo paga el centro, no hay una clave única que
quemar, y el alumno aprende a gestionar credenciales — que es contenido de FP, no
un trámite.

### Dónde se guarda la clave: en su navegador, no en el servidor

La clave **no se persiste en el servidor ni en la hoja de cálculo**. Se guarda en
el navegador del alumno (`localStorage`, casilla "recordar en este dispositivo") y
viaja en cada llamada a `google.script.run`, que la usa en memoria para la
petición a Gemini y la descarta.

- Nadie custodia claves ajenas: ni el centro, ni tú, ni la hoja.
- Si se filtrara la hoja `SSC_DATA`, no hay ninguna clave dentro.
- Contra asumido: al cambiar de navegador o dispositivo hay que volver a pegarla.
  Es un campo y un botón.

Para saber a quién le falta configurarla sin guardar nada: el servidor anota en
`alumnos` la fecha de la última consulta que funcionó (`clave_ok_el`). El panel te
dice "estos 4 aún no han configurado la suya" sin que exista la clave en ningún
sitio.

### El despliegue sigue siendo "ejecutar como yo"

Aunque la clave sea del alumno, el WebApp se despliega como *ejecutar como yo* +
*acceso a la organización*:

- **No hay que compartir la carpeta de los 181 PDF**: el alumno los lee a través
  del portal, no desde Drive.
- **`SSC_DATA` no se comparte con nadie**: el alumno no puede abrir la hoja y ver
  los votos, las definiciones ajenas o la configuración.
- `Session.getActiveUser().getEmail()` da el correo del alumno (mismo dominio).

### Freno de consumo (independiente de quién pague)

- Caché de respuestas: hoja `cache` con clave `hash(pregunta + docIds)`. Cuando 17
  alumnos preguntan casi lo mismo sobre los mismos PDF, se sirve lo ya calculado y
  no se gasta cuota de nadie.
- **Aviso técnico sobre el código actual:** `MAX_PDFS_PER_QUERY = 5` con
  `MAX_PDF_BYTES = 15 MB` permite peticiones de hasta 75 MB, por encima del
  límite de `UrlFetchApp` (~50 MB) y del tiempo de ejecución. Hay que limitar el
  **total** de la petición, no solo cada archivo. A corregir en F1.

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
| `alumnos` | `email`, `nombre`, `tipo`, `integrantes`, `grupo`, `rol`, `alta`, `ultima_conexion`, `consultas_semana`, `semana_iso`, `clave_ok_el`, `activo` |
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
  `(id_ronda, email)`; un voto por `(id_ronda, email, peso)` y por
  `(id_ronda, email, id_aportacion)` — ni dos estrellas del mismo valor
  ni dos estrellas a la misma definición.
- `curso` en `manual` es lo que permite que 26/27 amplíe lo de 25/26 sin borrarlo.
- Con 17-60 cuentas las cuotas de Apps Script no son un problema.

**Protección de datos:** correo educativo, acción y fecha. Nada más. Aviso en
la pantalla de acceso, uso exclusivamente docente, borrado al cierre de curso.

## 5. Contrato del servidor

Una sola WebApp, una sola URL. El rol se decide en servidor contra `alumnos`.

**Alumno**

- `getSesion()` → rol, cupo restante si es visita, temas visibles, rondas activas
- `probarClave(clave)` → valida contra Gemini y anota `clave_ok_el`; no la guarda
- `listarEstructura()` → árbol **ya filtrado** en servidor
- `preguntar(pregunta, docIds, clave)` → valida visibilidad, aplica cupo y usa la
  clave en memoria; nunca se escribe en ningún sitio
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

1. Altas: pegar la lista de correos, elegir grupo, alta.
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
| F0 | embebido del WebApp en Sites (identidad y clave ya validadas) | condiciona todo lo demás |
| F1 | `SSC_DATA` + `Datos.gs` + altas + interruptores | quita el agobio de los 181 PDF |
| F2 | pantalla de clave, roles, cupo semanal, última conexión, eventos | control de acceso |
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
- **Clave en `localStorage`**: hay que repegarla al cambiar de dispositivo.
- **Textos casi idénticos** en `misma_pregunta`. Se alterna con `reparto`.

## 12. Pendiente de confirmar

1. Nada pendiente. El diseño está cerrado; F0 es lo primero a ejecutar.
