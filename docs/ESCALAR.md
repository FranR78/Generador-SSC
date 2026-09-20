# Cómo escalar esto a otras unidades y a otras materias

Propuesta, no decisión tomada. Responde a: si mañana toca airbag (RA4) en vez
de climatización, o si lo coge otro compañero para otro módulo, ¿qué hay que
cambiar y qué no?

---

## 1. Lo primero: no hay que repasar las notas

`claves.yml` **no toca las notas**. Trabaja sobre los títulos, desde fuera. Las
129 notas quedaron agrupadas en 48 componentes sin abrir ni una. Esa fue justo
la razón de hacerlo como tabla aparte y no como un campo dentro de cada nota:
para no condenarse a repasar 129 archivos cada vez que cambie un criterio.

**La misma idea vale para los RA y los criterios**, y es lo que sostiene todo lo
que viene debajo: lo que cambia de una unidad a otra vive en un archivo suyo,
no repartido por dentro de cada nota.

---

## 2. Dónde va el RA: en el apartado, no en la nota

Lo dijiste tú sin darle nombre: *"la misión es el RA1 criterio A; las
características, el RA1 criterio B; las comprobaciones, el RA3"*.

Eso significa que **la unidad mínima que se evalúa no es la nota, es el
apartado**. Una nota de compresor toca tres criterios distintos, uno por
apartado. Si el RA se pone en la cabecera de la nota, se pierde esa distinción y
ya no se puede decir qué criterio cubre cada trozo.

Así que la estructura de apartados y el mapa de criterios **son la misma cosa**,
y se declaran juntos, una vez por unidad didáctica:

```yaml
# unidades/ssc-climatizacion.yml
modulo: SSC
unidad: Climatización
elemento:                 # apartados de una nota de pieza
  - apartado: Misión
    ra: 1
    criterio: a
    obligatorio: sí
  - apartado: Características y constitución
    ra: 1
    criterio: b
  - apartado: Cómo comprobarlo
    ra: 3
    criterio: c
    obligatorio: sí
  - apartado: Averías frecuentes
    ra: 3
    criterio: d
proceso:                  # apartados de una nota de procedimiento
  - apartado: Objeto y alcance
    ra: 1
    criterio: a
  - apartado: Fundamento
    ra: 1
    criterio: b
```

Para airbag sería `unidades/ssc-pirotecnicos.yml`, con RA4 y sus criterios. Para
otro módulo, otro archivo. **El código no cambia. Cambia el archivo.**

---

## 3. Ese archivo hace cuatro trabajos, no uno

Aquí está el porqué de meterlo en un archivo en vez de en un formulario que
escupa un prompt y se olvide. El mismo dato sirve para:

| Trabajo | Qué sale |
|---|---|
| **Generar el prompt** | Los apartados exactos que NotebookLM tiene que escribir, en orden, con sus nombres literales |
| **Validar lo que vuelve** | Una nota sin un apartado `obligatorio` se rechaza al importar, con su nombre |
| **Etiquetar el dashboard** | Cada apartado se pinta con su RA y criterio, sin escribirlo a mano 129 veces |
| **Medir la cobertura** | "Del RA1 tienes 7 criterios de 9; los criterios e y f no los toca ninguna nota" |

El cuarto es el que no habías pedido y probablemente es el que más vale: es
justificación curricular automática, la que hay que enseñar cuando alguien
pregunte qué cubre esta plataforma. Sale gratis si el mapa está en un archivo; no
sale de ninguna manera si el prompt se genera y se tira.

---

## 4. El RA lo pone el importador, nunca el modelo

Regla nueva, hermana de la que ya hay (*"el HTML lo genera construir.py, nunca
un modelo"*):

> **NotebookLM escribe el contenido de los apartados. No escribe a qué RA
> pertenecen.** El modelo no ve los criterios; escribe apartados con nombres
> fijos. El mapa apartado → RA lo aplica `importar.py` al leer el archivo de la
> unidad.

Si se le pide al modelo que etiquete cada apartado con su RA, lo hará: y pondrá
RA2 donde toca RA3 cada cierto número de notas, sin avisar y sin que se note
hasta que alguien lo audite. Un mapa determinista no se equivoca nunca. Además
así el prompt queda más corto, que es lo que se le da bien a NotebookLM.

---

## 5. El formulario sí, pero como entrada, no como almacén

Tu instinto del formulario es bueno: nadie quiere escribir YAML en el móvil. La
corrección es dónde queda lo que se rellena.

- **Formulario** (una página HTML, entra en el portal o suelta): eliges módulo,
  unidad, y vas marcando apartados y su RA/criterio. Abajo, dos botones:
  **copiar el prompt** y **copiar el YAML**.
- **El YAML es la verdad**, y vive en el repositorio junto a las notas. Se
  versiona, se compara, se puede volver atrás, y lo leen el importador y el
  generador.
- La hoja de cálculo se descarta: no se versiona con las notas, no valida nada, y
  obliga a estar conectado.

Es el mismo reparto que ya funciona con `claves.yml`: se edita fácil, se guarda
en texto, lo lee el código.

Para que el formulario sepa qué criterios ofrecer hace falta cargar el catálogo
del currículo (los RA y criterios del módulo, tal cual salen de la orden). Es un
archivo más, `curriculo/ssc.yml`, y se escribe una vez por módulo.

---

## 6. Qué hace falta de cada persona que quiera usarlo

Si mañana lo coge otro compañero, esto es lo que tiene que aportar:

| Aporta | Cuántas veces |
|---|---|
| RA y criterios de su módulo, copiados de la orden | una vez por módulo |
| Qué apartados quiere en sus notas y a qué criterio va cada uno | una vez por unidad |
| Los PDF | por unidad |
| El nombre común de las piezas que sus manuales llaman de varias formas | según vaya saliendo, avisado por el propio generador |

Nada de eso es programar. Es lo que ya tiene en su programación didáctica.

---

## 7. Simular una avería es otra cosa, y conviene no mezclarlas

Preguntas qué nivel de detalle hace falta para simular. La respuesta incómoda es
que **el caso de avería no es una nota técnica con más campos**: es otro tipo de
dato, con otras exigencias.

| | Nota técnica | Caso de avería |
|---|---|---|
| De dónde sale | un PDF, vía NotebookLM | lo construyes tú |
| Qué garantiza | que el contenido está documentado | que las medidas que dé el simulador sean coherentes |
| Qué necesita | apartados y fuente | esquema como grafo, puntos con condiciones de validez, rangos con etiqueta epistemológica |
| Se puede generar con IA | sí, con revisión | **no** |

Un caso mínimo utilizable necesita:

1. **El esquema como grafo**, no como imagen: nodos, tramos y su resistencia. Es
   lo que permite que el simulador *calcule* lo que marca el polímetro en vez de
   llevar la respuesta escrita. Un esquema bonito en JPG no sirve para simular.
2. **Puntos de medida con sus condiciones de validez**: en qué pin, y qué tiene
   que pasar para que la medida valga (contacto quitado, conector desembornado,
   punta roja en VΩ). Esto es tu ficha de comprobación, que ya es el centro del
   sistema.
3. **Rangos, no valores exactos**, cada uno con su etiqueta: *Medido* si lo has
   medido tú en ese coche, *Teórico OEM* si viene del manual, *Inferido* si es un
   rango razonable puesto a mano. Lo dijiste bien: lo que importa no es acertar
   el decimal, es que nadie diga 1 Ω donde hay 3 kΩ.
4. **Qué criterios evalúa ese caso**, que es lo que lo engancha con todo lo
   anterior.

Y el enganche entre los dos mundos es una línea: **el caso declara de qué notas
depende**. Con eso, si el alumno falla el caso, el sistema sabe qué mandarle a
releer; y si aún no ha leído esas notas, sabe que el caso todavía no le toca.

---

## 8. Por dónde empezar

Sin prisa y sin romper nada de lo que ya funciona:

1. Escribir `unidades/ssc-climatizacion.yml` con los apartados que **ya** usan las
   129 notas, y su RA y criterio. Es describir lo que hay, no cambiarlo.
2. Que `construir.py` lo lea y saque el informe de cobertura. Nada visible para
   el alumnado todavía; es para ver si el mapa cuadra con la realidad.
3. Generar el prompt desde ese archivo, en vez de tenerlo escrito a mano en
   `prompts/`.
4. Ya con eso rodado, el formulario.
5. La segunda unidad (airbag, RA4) es la prueba de verdad: si sale sin tocar
   código, esto escala. Si hay que tocar código, el diseño estaba mal y se
   arregla ahí, con dos unidades, no con doce.
