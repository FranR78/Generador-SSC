# Plan — Panel de control, rondas de definiciones y manual del ciclo

Documento de diseño (v2, decisiones cerradas). No toca `rag/**` ni `portal/**`.

## 0. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Dónde vive el estado | Hoja de cálculo en Drive (`SSC_DATA`). Nada de base de datos externa |
| Tiempo de permanencia | **No se mide.** Solo `última conexión` y registro de acciones |
| Votación | Solo "me gusta", anónimo mientras se vota. **Sin "no me gusta"** |
| Objetivo pedagógico | Que los 17 escriban una definición y lean las 16 de los demás |

## 1. Qué hay hoy

`portal/` es un WebApp de Apps Script: árbol de Drive, hasta 5 PDF, pregunta a
Gemini. Sin identidad, sin estado, sin configuración. Todo el corpus visible
siempre: 181 PDF de golpe.

## 2. El concepto central: la Ronda

Todo el sistema gira alrededor de una unidad: la **ronda**. Una ronda es
*un elemento + un ítem a definir*, abierta a un grupo, con cuatro estados:

```
borrador  →  abierta  →  votación  →  cerrada
            (escriben)  (leen y votan)  (entra al manual)
```

Reglas que garantizan el trabajo:

1. **Para ver las definiciones de los demás hay que haber entregado la tuya.**
   Ese portón es lo que convierte "leer a los compañeros" en algo inevitable.
2. En votación, cada alumno ve las 16 restantes **sin autor** y en **orden
   distinto** (barajado con semilla derivada de su correo), para que no gane
   siempre la primera de la lista.
3. Cada alumno reparte **3 "me gusta"** entre las 16. Al ser escasos, hay que
   leerlas para decidir.
4. Al cerrar, se revelan autores, se ve la más votada y tú pones el sello de
   validación técnica. Lo sellado entra al manual del ciclo.

Con eso, el mínimo garantizado por ronda es: leer documentación → redactar →
leer 16 textos → decidir. Aunque no funcione nada más, eso ya vale la sesión.

### Modo de ronda (campo `modo`)

- `misma_pregunta`: los 17 definen lo mismo. Comparación directa, gana la mejor.
- `reparto`: la ronda tiene varios ítems del mismo elemento y cada alumno coge
  uno (con cupo máximo por ítem). Cada alumno lee 16 textos **distintos** y el
  manual se completa en una sola sesión.

Conviene alternar: `misma_pregunta` para conceptos clave, `reparto` para cubrir
un elemento entero. Con 17 definiciones del mismo ítem, a la octava se lee en
diagonal; con reparto, cada lectura aporta algo nuevo.

## 3. Datos: la hoja `SSC_DATA`

Una hoja por tabla. Todo el acceso pasa por una capa única (`Datos.gs`), de modo
que migrar en el futuro sea cambiar un archivo.

| Hoja | Columnas |
|---|---|
| `config_temas` | `id_tema`, `nombre`, `carpeta_id`, `visible`, `fecha_apertura`, `orden` |
| `config_docs` | `doc_id`, `id_tema`, `nombre`, `visible` |
| `alumnos` | `email`, `nombre`, `grupo`, `alta`, `ultima_conexion`, `activo` |
| `rondas` | `id_ronda`, `id_tema`, `elemento`, `item`, `modo`, `enunciado`, `grupo`, `estado`, `votos_por_alumno`, `abierta_el`, `cerrada_el` |
| `aportaciones` | `id`, `id_ronda`, `email`, `texto`, `fuente_doc`, `fuente_pagina`, `etiqueta`, `creada_el`, `estado`, `sello` |
| `votos` | `id_ronda`, `email_votante`, `id_aportacion`, `creado_el` |
| `eventos` | `ts`, `email`, `accion`, `detalle` |
| `manual` | `id_tema`, `elemento`, `item`, `texto_final`, `autor`, `fuente`, `etiqueta`, `fecha` |

Notas de implementación:

- `ultima_conexion` se actualiza en cada carga del portal: una escritura por
  sesión, nada de latidos. Sin medir permanencia.
- `eventos` es append-only y solo registra acciones con valor (consulta,
  apertura de documento, entrega, voto). Sirve para el panel y para responder
  a "yo sí he trabajado".
- `LockService` en entregar y votar. Unicidad por `(id_ronda, email)` en
  aportaciones y por `(id_ronda, email_votante, id_aportacion)` en votos.
- Con 17-60 alumnos las cuotas de Apps Script no son un problema.

**Protección de datos:** correo institucional, acción y fecha. Nada más. Aviso en
la pantalla de acceso, uso exclusivamente docente, borrado al cierre de curso.

## 4. Contrato del servidor

Una sola WebApp, una sola URL. El rol se decide por correo contra `alumnos` y la
lista blanca de profesorado; si el correo no está autorizado, no hay panel.

**Alumno**

- `getSesion()` → rol, temas visibles, rondas activas, avisos
- `listarEstructura()` → árbol **ya filtrado** por `config_*` en servidor
- `preguntar(pregunta, docIds)` → valida que cada documento sea visible
- `entregar(idRonda, {texto, fuenteDoc, pagina, etiqueta})`
- `listarParaVotar(idRonda)` → error si no has entregado; anónimo y barajado
- `votar(idRonda, idAportacion)`
- `miPanel()` → documentos leídos y cuándo, mis entregas, qué me falta

**Profesor**

- `setVisible(tipo, id, visible, fechaApertura)`
- `crearRonda(...)`, `pasarAVotacion(id)`, `cerrarRonda(id)`
- `sellar(idAportacion)` → entra al `manual`
- `pase(email, idRonda)` → desbloquea a quien entregó en papel o llegó tarde
- `pulso(grupo)` → última conexión de cada uno, entregas pendientes, sin votar

El filtrado de visibilidad **siempre en servidor**. Si se hace en el HTML, el
alumno ve el corpus entero mirando el código.

## 5. Panel del profesor

1. Interruptores por tema y por documento, con fecha de apertura opcional (dejas
   el curso montado en septiembre y se abre solo).
2. Rondas: crear, abrir, pasar a votación, cerrar. Cuatro botones.
3. Bandeja de sellado: los textos más votados esperando tu validación. Un clic.
4. Pulso del grupo: última conexión, quién no ha entregado, quién no ha votado.

Regla innegociable: **el panel no puede generar trabajo nuevo.** Si algo exige
configurar alumno por alumno, está mal diseñado.

## 6. Panel del alumno

Solo lectura:

- Temas abiertos y cuáles no ("se abre el 14 de octubre").
- Documentos ya leídos, con "última vez hace 3 días".
- Rondas: entregada / pendiente de votar / cerrada, y si ganó la suya.
- **Mis apuntes**: al cerrar un documento, una caja de una línea —
  *¿qué te llevas de aquí?*. Se acumula y se ofrece precargado al entregar.
  Un tic de "visto" se rellena por inercia; una línea escrita, no.

## 7. Lo que sostiene todo: el manual del ciclo

Interruptores de visibilidad y registro de acceso los hace Moodle; consultar un
PDF con IA lo hace NotebookLM. Copiar eso no merece el esfuerzo. Lo que no existe
es el bucle completo:

> consulta al corpus → definición propia con fuente citada y etiquetada →
> lectura y voto entre iguales → **manual del ciclo que sobrevive al curso**

El producto no es el portal: es el manual vivo de Electromecánica, escrito por
promociones sucesivas y trazable a la documentación del fabricante. La promoción
de 26/27 no empieza en blanco: corrige y amplía lo de 25/26.

Dos elementos que lo hacen propio del ciclo y no de una plataforma genérica:

- **Fuente obligatoria.** El sistema ya sabe qué PDF tenía abierto: autorrellena
  el documento y el alumno indica la página. Sin fuente, no se publica. Es la
  defensa contra pegar la respuesta de Gemini y firmarla.
- **Etiqueta obligatoria: Medido / Teórico OEM / Inferido.** Es el marco de
  diagnóstico del ciclo. Obliga a distinguir lo que dice el manual de lo que se
  ha comprobado con el aparato. Eso es enseñar a diagnosticar.

Extensión natural, **modo taller** en móvil: una sola pantalla con la ficha del
elemento, el valor de referencia OEM y un botón para anotar la medida real. El
contraste medido/OEM es el diagnóstico. Ahí el manual deja de ser trabajo de
clase y pasa a ser herramienta.

## 8. Fases

| Fase | Entrega | Desbloquea |
|---|---|---|
| F1 | `SSC_DATA` + `Datos.gs` + interruptores de visibilidad | quita el agobio de los 181 PDF |
| F2 | identidad por correo + última conexión + eventos | "quién ha entrado y qué ha hecho" |
| F3 | rondas: entregar con fuente y etiqueta | contenido propio |
| F4 | votación anónima con portón de entrega + sellado | el bucle completo |
| F5 | volcado a `manual` y publicación | el producto |
| F6 | panel del alumno y "mis apuntes" | autonomía |

F1 y F3+F4 se pueden usar en clase por separado. No hay que esperar a F5.

## 9. Riesgos asumidos

- **Coordinación por WhatsApp** durante la votación ("votad la que empieza por…").
  El anonimato lo dificulta, los 3 votos lo diluyen y tu sello decide. No se
  intenta blindar más.
- **El que no entrega se queda fuera del muro.** Por diseño; para eso está `pase`.
- **Textos casi idénticos** en `misma_pregunta` con 17 alumnos. Se resuelve
  alternando con `reparto`.

## 10. Dudas abiertas

1. ¿Visibilidad y rondas **por grupo** (SSC / optativa de osciloscopio) o única
   para todo el alumnado?
2. ¿El alumnado entra con **cuenta del centro**? Si es así, el filtro por dominio
   basta como control de acceso y no hace falta dar de alta a nadie a mano.
3. ¿Dónde se publica el manual: Google Sites, un Doc generado, o dentro del
   propio portal?
4. ¿Se confirman **3 votos** por alumno y ronda?
5. ¿Entrar en la plataforma se hace en el aula (hora fija) o también desde casa?
   Cambia si las rondas se abren y cierran a mano o por fecha.
