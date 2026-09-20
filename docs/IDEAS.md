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
