# ¿Hay que parar?

Pregunta: *"analízalo todo, dime si necesitamos parar o el camino es correcto;
y si hay que parar, qué hacer para no deshacer nada dentro de 35 días."*

**Respuesta corta: el camino es correcto. No hay que parar, pero había una cosa
rota que se arregla hoy y no dentro de 35 días. Ya está arreglada.**

---

## 1. Lo que estaba mal: las notas no tenían identidad

La identidad de una nota era su número NT. Y el número NT se asignaba, en
`importar.py`, cogiendo **el siguiente libre**. O sea: el número no dependía de
lo que la nota es, sino de en qué orden se procesaron los PDF.

Con 129 notas y un solo profesor, eso no molesta. Con lo que está planteado,
revienta por tres sitios a la vez:

| Lo que se rompe | Cuándo |
|---|---|
| Las lecturas del alumnado (pestaña *Lecturas* guarda el NT) | al renumerar una sola nota |
| Los embeddings del RAG (cada trozo apunta a su NT) | al renumerar: hay que reindexar el corpus entero |
| Los casos de avería que declaren de qué nota dependen | igual |
| Juntar el corpus de dos profesores | **siempre**: los dos tienen su NT1 |

Ese último es el que mata la idea del grupo de trabajo. Dos compañeros generando
notas en paralelo producen dos NT1, dos NT2, dos NT3. Sus corpus no se pueden
unir sin reescribir uno entero a mano.

Y había un cuarto efecto, el que ya te había molestado: **el número no se podía
reordenar** para que NT1 fuera siempre el compresor, porque cambiarlo rompía
todo lo anterior.

### Cómo queda

Las 129 notas ya tienen un campo `id` permanente:

```yaml
---
id: ssc.clima.compresor-de-aire-acondicionado
modulo: ssc
unidad: clima
nt: 1
titulo: Compresor de aire acondicionado
```

La regla es de una línea: **`id` se escribe una vez y no se toca nunca más**,
aunque cambie el título, la clave, el grupo o el número. `nt` pasa a ser solo
el número que se enseña, y ese **sí** se puede reordenar cuando quieras.

Es decir: el mismo cambio que protege el RAG te da el NT1 = compresor que
pedías hace semanas. `construir.py` ahora se niega a generar nada si una nota no
tiene `id` o si dos lo comparten, porque dos notas con el mismo id mezclarían
lecturas y embeddings sin que nadie se entere.

Esto había que hacerlo con 129 notas. Con 400 habría sido una tarde mala y una
reindexación completa.

---

## 2. Tenías razón con el YAML dentro de la nota (y yo también, en otra cosa)

Insististe dos veces y con razón. La línea correcta no es *"YAML sí o no"*, es
**qué sabe la nota que no sepa nadie más**:

| Va DENTRO de la nota | Va FUERA, en un archivo aparte |
|---|---|
| `id` — quién es | el mapa apartado → RA y criterio |
| `modulo`, `unidad` — de qué unidad es | los RA y criterios del módulo |
| `fuentes` — de qué documento sale | qué títulos son el mismo componente (`claves.yml`) |
| `origen` — PDF, vídeo, apuntes | la estructura de apartados |
| `confirmada_por` — qué otra fuente la corrobora | |

La prueba es mecánica: **si cambia el dato, ¿cuántos archivos hay que tocar?**
Si uno, va dentro. Si 129, va fuera. El `id` de una nota solo lo sabe esa nota:
dentro. Que "Misión" sea RA1 criterio a es igual para las 129: fuera.

Por eso `claves.yml` agrupó las 129 notas sin abrir ninguna, y por eso la
migración de `id` sí tuvo que entrar en las 129: eran datos de naturaleza
distinta.

---

## 3. Tu lectura del currículo cambia el diseño que te propuse ayer

Dijiste algo que yo no tenía: **RA1 criterio a (identificar elementos) y criterio
b (características y funcionamiento) valen para clima, para airbag, para
infotenimiento y para inmovilizadores.** Son transversales. Los criterios c, d,
e… son los específicos de cada unidad.

Eso invalida la parte de `docs/ESCALAR.md` donde cada unidad repetía su mapa
completo. Repetir "Misión → RA1a" en el archivo de clima, en el de airbag y en
el de infotenimiento es exactamente **la maraña que dices que no quieres**: tres
sitios donde cambiar lo mismo, y dos que se quedarán sin cambiar.

La forma correcta son dos niveles:

```yaml
# curriculo/ssc.yml — una vez por MÓDULO, copiado de la orden
apartados_comunes:              # valen para todas las unidades del módulo
  - apartado: Misión
    ra: 1
    criterio: a
  - apartado: Características y funcionamiento
    ra: 1
    criterio: b
```

```yaml
# unidades/ssc-clima.yml — una vez por UNIDAD, solo lo suyo
modulo: ssc
unidad: clima
cuadernos: 4                    # el límite de fuentes de NotebookLM obliga a partirlo
apartados_propios:
  - apartado: Fluidos y cargas
    ra: 2
    criterio: c
```

```yaml
# unidades/ssc-pirotecnicos.yml
modulo: ssc
unidad: pirotecnicos
apartados_propios:
  - apartado: Manipulación y seguridad
    ra: 4
    criterio: a
```

Airbag hereda misión y características sin escribirlas. Solo declara lo suyo. Si
mañana cambia la redacción de RA1a en la orden, **se toca un archivo**, no doce.

El prompt de cada cuaderno se genera a partir de esos dos archivos. Por eso
varía de clima a airbag sin que nadie reescriba nada: lo que varía son los datos.

---

## 4. Los vídeos: confirman, no generan

Dijiste que la transcripción de los vídeos debería *"terminar confirmando notas
técnicas o, en su defecto, casos de avería"*. Esa palabra —confirmar— es la
correcta y conviene no perderla.

Un vídeo de YouTube, por bueno que sea, **no es una fuente del mismo rango que un
manual de fabricante**. Si las transcripciones entran por la misma puerta que los
PDF, en seis meses no habrá manera de saber si un valor de 3 kΩ salió del manual
de Hella o de lo que dijo un señor en un vídeo. Y el alumnado depende al 100 % de
la plataforma: ahí no puede haber esa duda.

La propuesta:

- La nota lleva `origen: manual | video | apuntes` y `fuentes` como ahora.
- Una nota de manual que además aparece en un vídeo gana
  `confirmada_por: [ese vídeo]`. **Eso es una nota más fuerte, y se puede
  enseñar como tal.**
- Un vídeo que habla de algo que no tiene nota genera una nota `origen: video`,
  marcada visiblemente como pendiente de respaldo documental.
- Una discrepancia entre vídeo y manual **no se resuelve sola**: se marca y
  decides tú. Ya existe esa disciplina en el prompt (DISCREPANCIA).

Esto convierte tu biblioteca de vídeos en algo que *sube* la calidad del corpus
en vez de diluirla. Y de paso es contenido didáctico: una nota que dice "esto lo
dice el manual y además se ve en este vídeo" vale más que las dos por separado.

---

## 5. Lo que NO hay que hacer todavía

Igual de importante que la lista de lo que sí:

- **No montar el RAG aún.** Indexar 129 notas que todavía van a cambiar de
  estructura es trabajo que se tira. El RAG entra cuando el formato esté quieto,
  y con `id` estable ya se puede indexar sin miedo a reindexar por un renombrado.
- **No generar más notas con el prompt actual** si vas a añadir el mapa de RA:
  saldrían con apartados que luego no cuadran. Termina clima con lo que hay y
  que el cambio entre con airbag.
- **No meter los criterios en el prompt de NotebookLM.** El modelo los pondrá
  mal cada cierto número de notas y nadie se dará cuenta hasta auditarlo.
- **No hacer el formulario antes que los archivos.** El formulario es la puerta;
  primero hay que saber qué hay detrás.

---

## 6. Orden de trabajo

1. ~~Identidad estable de las notas~~ — **hecho hoy**. Era lo único urgente.
2. Describir en `curriculo/ssc.yml` los apartados comunes que **ya** usan las 129
   notas, con su RA y criterio. Es describir lo que hay, no cambiar nada.
3. Informe de cobertura: qué criterios cubre el corpus y cuáles no. Solo para ti,
   sin tocar el portal.
4. Generar el prompt desde esos archivos, en vez de tenerlo a mano.
5. **Airbag.** Es la prueba de fuego: si sale sin tocar código, esto escala de
   verdad. Si hay que tocar código, el diseño estaba mal y se arregla con dos
   unidades, no con doce.
6. Vídeos, con `origen` y `confirmada_por`.
7. RAG, cuando el formato lleve un tiempo quieto.

El paso 5 es el que responde de verdad a tu pregunta, y conviene hacerlo pronto y
con pocas notas, no tarde y con cuatrocientas.
