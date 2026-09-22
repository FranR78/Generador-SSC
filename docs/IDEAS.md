# Ideas pendientes

Cosas decididas pero no construidas. No es una lista de deseos: aquí solo entra
lo que ya se ha hablado y se va a hacer, con lo que haya que recordar el día que
se arranque.

---

## Repaso de consolidación al cerrar la sesión

**Qué es.** No va por nota ni al terminar de leerla. Va **al final de la
sesión**: el alumno ha leído hoy una, dos o tres notas, y antes de irse el
sistema le dice *"repasemos lo aprendido"* y le pregunta sobre lo que ha leído
**en esa sesión**. Su propia IA redacta las preguntas y corrige. Según el
resultado:

Los tramos son **orientativos y están sin pensar a fondo**. Primero se monta el
sistema; los porcentajes y qué se recomienda en cada tramo se deciden cuando
esté funcionando y se vea cómo responde el alumnado. Como punto de partida:

| Resultado | Qué le dice el sistema |
|---|---|
| menos del 50 % | vuelve a leerlo todo |
| 50-70 % | repasa lo que has fallado (las notas concretas, no todas) |
| 75-90 % | puedes quedarte tranquilo |

Que los tramos se toquen sin tocar el código: **van en propiedades del script**,
no escritos dentro de las funciones.

**Esto no es una nota y no pesa en ninguna parte.** No califica, no va al
cuaderno del profesor, no puntúa. Es el alumno comprobando si se ha enterado. En
cuanto puntuara para calificar, se dedicarían a sacarle la respuesta a la IA
antes de contestar, que es justo lo que se quiere evitar.

**Formato.** Tipo test es lo más aconsejable —se corrige solo y sin discusión—,
pero puede haber de desarrollo. No es una decisión cerrada.

**Por qué.** Leer no es haber aprendido. Si después de la lectura no sabe decir
la misión del elemento, cómo se comprueba o sus averías frecuentes, la lectura
no ha servido. Esto lo detecta el mismo día, no en el examen.

**Lo que no cuesta nada.** Corre con la clave personal del alumno
(`UserProperties`), igual que *Consultar*. El coste es suyo, no del centro, y no
hay que racionarlo: preguntar es trabajar.

**Cómo encaja con lo que hay.**

| Pieza | Estado |
|---|---|
| texto de la nota para la IA | hecho (`portal/Notas.gs`, `textoNotasParaIA`) |
| llamada a la IA con clave del alumno | hecho (`portal/IA.gs`) |
| registro de lectura | hecho (`leido` → pestaña *Lecturas*) |
| saber qué ha leído **en esta sesión** | falta (*Lecturas* guarda la fecha, hay que acotar por sesión) |
| aleatoriedad entre intentos | falta |
| registro de resultado y umbrales | falta |

**Decisiones ya tomadas.**

- **No hay campo que seleccionar.** Las preguntas salen de lo que ha leído en
  esta sesión; pedirle que lo elija en un desplegable es trabajo de más.
- **Cada pregunta lleva pegada su nota de origen.** Es lo único que permite
  decir *"vuelve a leer esto, esto y esto"* en vez de *"vuelve a leerlo todo"*:
  sin esa marca, con tres notas mezcladas no se sabe cuál ha fallado.
- **La corrección la hace la IA contra el texto de la nota**, no contra una
  plantilla de respuestas. Es lo que permite que valga para las 129 notas sin
  escribir nada por nota.
- **Aleatorio de verdad**: si las preguntas se repiten, se memorizan. Que varíe
  qué apartados toca y en qué orden.
- **Reconsolidar, no bloquear.** Lo que se guarda es si lo superó y cuántas
  vueltas le costó.
- **Sin freno de horas.** Eso es del simulador. Repetir un repaso es repasar.

**Lo que hay que resolver cuando se arranque.**

1. **Un modelo no es un corrector fiable de sí mismo.** Corrige mejor si se le
   pide que cite el trozo de la nota en el que se apoya para dar por buena o
   mala cada respuesta. Sin eso aprueba de más.
2. **Nota corta = cuestionario pobre.** Hay notas de tres líneas. Conviene un
   mínimo de texto para ofrecer el cuestionario, o saldrán preguntas de relleno.
3. Enganchar el resultado al *planing* de Inicio: "leída pero no consolidada" es
   un estado distinto de "leída", y es el que debería tirar del siguiente paso.
4. **Cuándo aparece.** "Antes de cerrar la sesión" no es un momento que el
   navegador sepa: nadie pulsa *salir*, se cierra la pestaña. Habrá que
   dispararlo por otra vía (al volver a Inicio, tras leer la segunda o tercera
   nota, o un aviso que aparezca pasado un rato de lectura).

---

## Iconos y colores de las portadas de curso

Pendiente de decidir con el profesor. Va en `notas-tecnicas/unidades/ssc-*.yml`,
campos `icono` y `color`. No tocar hasta que los confirme todos.

| Unidad | Icono pedido | Color de la barra |
|---|---|---|
| Airbag y pirotécnicos | el símbolo universal de airbag (persona + bolsa) | **amarillo** |
| Audiovisuales / Infotenimiento | una tablet | — |
| Lunas y carrocería | un parabrisas | — |
| Prevención y medio ambiente | el actual (⚠️) vale, o el típico de reciclaje | verde |
| Alarmas e inmovilizadores | un cuadro de instrumentos | — |
| Seguridad del vehículo | **sin decidir** — lo mira él |
| Climatización | el actual (❄️) se queda | azul |

DECIDIDO: se hará con SVG propio, no emoji, incluso donde hay emoji, para que
# todas las portadas tengan el mismo acabado. Requiere tocar Cursos.html.

Notas para cuando toque:
- El "símbolo universal de airbag" y "cuadro de instrumentos" no existen como
  emoji estándar. Habrá que decidir: emoji aproximado, o SVG propio incrustado
  en la portada (el sistema ya mete iconos como texto; para SVG hay que tocar
  Cursos.html). Es una decisión de él: emoji rápido vs SVG fiel.
- El color es un solo valor hex por unidad (`color:`), y pinta a la vez la
  banda de la portada y la barra de progreso.

---

## Unidades editables por el profesor (crear / editar / borrar)

El profesor define una unidad seleccionando **qué criterios** quiere ver, y el
sistema agrupa ahí las NT que los cubren. Sin tocar código ni archivos.

**Lo que ya está resuelto y no hay que inventar:** distinguir `ssc1.a clima` de
`ssc1.a airbag` de `ssc1.a infotenimiento`. El criterio es el mismo (1.a); lo
que cambia es la unidad. Cada nota ya lleva `unidad`, así que la clave real es
la pareja `(criterio, unidad)`. No hace falta un criterio nuevo por temática.

**La bifurcación que decide si esto es barato o un rewrite:** hoy la unidad de
una nota vive DENTRO de la nota (`unidad: clima` en el front-matter). Si las
unidades se van a crear y editar desde el portal, la asignación nota→unidad
NO puede seguir dentro de la nota, o editar una unidad obligaría a editar 129
archivos. Tiene que salir fuera, igual que hicimos con claves.yml y el mapa RA.

Dos caminos, a decidir cuando se arranque:

1. **Por etiquetas (recomendado).** La nota lleva `temas: [clima, alta-presion]`.
   La unidad dice: criterios 1a,1b,3h + tema `clima`. Editar la unidad no toca
   ninguna nota. Una misma nota puede aparecer en dos unidades si comparten
   tema, que es lo natural en un módulo con solapes.
2. **Lista manual por id.** La unidad enumera las NT que la componen. Más
   control, más trabajo a mano, y hay que acordarse de añadir cada nota nueva.

**Dónde viven las unidades:** si son editables desde el portal, dejan de ser
archivos YAML del repo y pasan a la Hoja (pestaña Unidades), como ya están los
casos. El profesor las toca sin git. El generador de prompts y el informe de
cobertura leerían de ahí en vez de de unidades/*.yml.

**Lo que NO cambia:** el id permanente de cada nota. Una nota puede cambiar de
unidad, de tema o de criterios sin que se rompa nada que la apunte (lecturas,
RAG, casos), porque nada de eso usa la unidad como identidad.

Primera pregunta al arrancar: ¿etiquetas o lista manual?

---

## Pendiente de revisar: entrar en un curso no limita a ese curso

Al pinchar una portada de Cursos lleva a Apuntes filtrado por esa unidad, pero
el desplegable de unidad se puede cambiar y el alumno acaba viendo notas de otra
unidad desde dentro de "un curso". Rompe la sensación de curso cerrado.

Opciones a decidir:
- Que al entrar por un curso, Apuntes quede BLOQUEADO en esa unidad (sin
  desplegable), y para cambiar haya que volver a Cursos.
- O una cabecera "Estás en: Climatización" con un botón claro de salir.

No tocar aún; apuntado para cuando se revise la navegación de Cursos.

---

## Optimizar la carga del portal (528 notas tardan)

El portal se trae notas.json entero de Drive en cada arranque, con el texto
completo de las 528 notas. Apuntes y Cursos solo necesitan el índice (título,
unidad, grupo, leída). Partir el JSON en:
- un índice ligero (lo que listan Apuntes/Cursos), que se carga al entrar;
- el texto de cada nota, que se pide solo al abrirla (cargarNota ya lo hace).

notas.json ya pesa cientos de KB y crece; con más unidades será peor. No urge,
pero es la causa del "tarda en cargar".
