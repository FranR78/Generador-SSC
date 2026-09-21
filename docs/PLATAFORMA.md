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

Con pool compartido, el id pasa a `<autor>.ssc.clima.compresor`. Como el id es
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

## 6. La parte incómoda: Apps Script no es multiusuario de serie

Dos caminos, hay que elegir antes de escalar:

- **Un despliegue por profesor.** Cada uno tiene su copia del proyecto y su
  Hoja. Simple de entender, pero son N despliegues que mantener, y una mejora
  del código hay que llevarla a todos (el workflow de clasp ayuda).
- **Un despliegue único que elige config según quién entra.** El portal corre
  como el alumno (executeAs USER_ACCESSING, ya está así) y la puerta de datos
  decide qué Hoja usar según el profesor dueño del aula. Más elegante, bastante
  más trabajo, y hay que resolver cómo se asocia cada alumno a su profesor.

Recomendación provisional: empezar por **un despliegue por profesor**, que
funciona ya, y pasar al despliegue único solo si el número de profesores lo
justifica. No montar la versión compleja para dos usuarios.

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
