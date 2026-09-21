# Plataforma colaborativa y multiusuario

Estudio, no decisión tomada. Responde a: que cualquier profesor pueda usar el
proyecto entrando por una dirección, generar su propia config, ejecutar lo suyo
sin interferir con nadie, y reutilizar NT de otros desde un Drive común.

No se toca nada hasta cerrar clima. Esto es para no construir hoy algo que
mañana haya que deshacer.

---

## 1. Etiquetas: el trabajo de fondo ya decidido

Las unidades se componen por etiquetas (ver docs/IDEAS.md). Implica:

- Cada NT lleva `temas: [clima, alta-presion, ...]` en su front-matter.
- Una unidad dice: «criterios 1a,1b,3h + tema clima» y el sistema agrupa sola.
- El importador tendría que sugerir temas al crear la nota, pero el vocabulario
  de etiquetas lo fija el profesor: es decisión suya, no se adivina.

Primera pregunta al arrancar: **¿qué etiquetas existen?** Un vocabulario corto y
cerrado (clima, seguridad, airbag, alta-presion, baja-presion, mando, sensor…)
vale más que etiquetas libres, que se llenan de sinónimos y dejan de agrupar.

---

## 2. El id necesita autor (esto va ANTES del pool compartido)

Hoy: `ssc.clima.compresor`. En cuanto dos profesores compartan Drive, sus dos
compresores colisionan: es el fallo del NT1 duplicado, pero entre personas.

DECIDIDO: el prefijo es la parte local del correo (lo anterior a la @). Para
`frostov381@…` el prefijo es `frostov381`, y el id queda
`frostov381.ssc.clima.compresor`. Es único por persona, ya lo tiene el sistema
(userEmail) y no hay que inventar un registro de autores aparte.

Como el id es
opaco y permanente, añadir el prefijo ahora no rompe nada; añadirlo tarde obliga
a renombrar el corpus entero y a rehacer todo lo que apunte a él (lecturas, RAG,
casos). Por eso este cambio va el primero, aunque el pool venga después.

---

## 3. Tres capas, separadas limpias

| Capa | Qué es | Dónde vive | Quién la toca |
|---|---|---|---|
| **Programa** | el código del portal | un repositorio, un despliegue | nadie (solo mantenimiento) |
| **Config** | unidades, etiquetas, umbrales, casos | la Hoja de cada profesor, en su Drive | cada profesor, la suya |
| **NT** | las notas | el Drive de cada uno; las compartidas, en el Drive común | su autor |

La regla: **el código es común, los datos son de cada uno.** Es lo que ya guía
el proyecto (el HTML lo genera construir.py; los casos y las notas son datos).
Aquí solo se lleva a varios usuarios.

---

## 4. «Entrar por una URL y generar tu config»

El alta de un profesor nuevo:

1. Entra por una dirección.
2. El sistema le **clona una plantilla de Hoja** en su propio Drive (unidades
   de ejemplo, umbrales por defecto, pestañas vacías de casos).
3. A partir de ahí ejecuta lo suyo: su Hoja, sus notas, su alumnado. Sin tocar
   la config de nadie.

Es el mismo patrón que el `.clasp.json` que genera el workflow al vuelo, o la
plantilla de casos: una plantilla que se rellena, no un original que se comparte.

---

## 5. El Drive público como pool de solo lectura

Alta manual por el administrador (tú), como pediste. No es un Drive donde todos
escriben: es un escaparate.

- Un compañero no «usa tu unidad»: **copia una NT concreta a su config**.
- La copia conserva la procedencia: `id` original, `autor`, `origen`, `fuentes`.
  Reutilizar sin saber de dónde viene un dato es lo que ensucia un corpus.
- Quien copia puede editar su copia sin afectar al original. Si el original
  cambia, la copia no se entera: es una foto, no un enlace. (Igual que las
  fuentes de NotebookLM: copia al importar.)

Decisión pendiente: ¿se puede saber que una NT copiada tiene una versión más
nueva en el pool? Útil, pero no imprescindible para empezar.

---

## 5b. Ya hay un precedente que funciona: Diario Docente

El profesor ya trabaja así en otro proyecto suyo (Diario Docente): un proyecto,
y cada usuario con su propia Hoja de cálculo, independiente. No hay que diseñar
el multiusuario desde cero: hay que **leer cómo lo resuelve ahí y replicarlo**.

### Cómo lo hace (leído del repositorio, apps-script/diario/FR_HdC.gs)

Es un **despliegue único, multi-inquilino por correo**, y resuelve justo lo que
nos preocupaba. Las piezas:

- `frTenantId_()` — coge el correo del usuario, lo pasa a minúsculas y sustituye
  todo lo que no sea letra o número por `_`. Ese es el identificador de inquilino.
  **Es exactamente nuestro prefijo de autor**, con la misma regla.
- `frTenantKey_(clave)` — antepone `T_<tenant>__` a cada clave de configuración.
  Así la config de cada profesor vive en las **Script Properties del mismo
  proyecto**, separada por ese prefijo. Un despliegue, un juego de propiedades,
  cada profesor ve solo lo suyo.
- **Fallback a la clave sin prefijo**: si no encuentra la propiedad del inquilino,
  lee la clave antigua (la del primer usuario, de antes de separar por profesor).
  Es lo que permitió migrar de un usuario a varios sin romper al que ya estaba.
- **Un DIRECTORIO** (una Hoja, `FR_DIRECTORIO_ID`) que asocia correo → HdC de ese
  profesor. `frAccesoUsuario_()` busca al usuario por su correo en esa tabla.
- **Puerta con interruptor explícito** (`FR_PUERTA_PROP`): crear el directorio NO
  da de alta a nadie automáticamente. Mientras la puerta está apagada, todos
  entran por el fallback; encenderla es un acto deliberado. Esto es el alta
  manual que pediste, y con una red de seguridad para no dejar a nadie fuera sin
  querer.

Qué copiamos tal cual:
- La regla del tenant-id por correo (idéntica a nuestro prefijo).
- Separar la config por prefijo en Script Properties, con fallback a la clave sin
  prefijo, para migrar sin romper.
- El directorio correo → recurso, con puerta de interruptor explícito para el
  alta manual.

Qué cambia en nuestro caso: en Diario el recurso por profesor es una Hoja; en el
nuestro es su Hoja de config **y** su carpeta de NT en Drive. El directorio
tendría una columna más.

Con esto, la sección 6 (¿un despliegue o varios?) ya está respondida por un
sistema en producción: **uno solo**, multi-inquilino por correo.


## 6. La parte incómoda: Apps Script no es multiusuario de serie

Dos caminos, hay que elegir antes de escalar:

- **Un despliegue por profesor.** Cada uno tiene su copia del proyecto y su
  Hoja. Simple de entender, pero son N despliegues que mantener, y una mejora
  del código hay que llevarla a todos (el workflow de clasp ayuda).
- **Un despliegue único que elige config según quién entra.** El portal corre
  como el alumno (executeAs USER_ACCESSING, ya está así) y la puerta de datos
  decide qué Hoja usar según el profesor dueño del aula. Más elegante, bastante
  más trabajo, y hay que resolver cómo se asocia cada alumno a su profesor.

Recomendación ACTUALIZADA tras leer Diario Docente: **un despliegue único,
multi-inquilino por correo**. No es la versión compleja que temía: Diario ya lo
tiene resuelto y en producción con el patrón de la sección 5b (tenant-id por
correo + config por prefijo en Script Properties + directorio con puerta). Se
replica ese mecanismo en vez de mantener N despliegues.

---

## 7. Orden, cuando toque

1. Etiquetas (`temas`) en las notas y unidades que agrupan por ellas.
2. Prefijo de autor en el id. Va antes de compartir nada.
3. Config en la Hoja (unidades, etiquetas) en vez de en archivos del repo.
4. Plantilla de Hoja + alta por URL.
5. Drive público de solo lectura y «copiar una NT a mi config».
6. Multiusuario de verdad, si hace falta.

Nada de esto antes de que clima esté cerrado y probado con alumnado real. Un
sistema colaborativo sobre una base sin rodar multiplica los fallos por el
número de usuarios.
