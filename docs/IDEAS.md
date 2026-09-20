# Ideas pendientes

Cosas decididas pero no construidas. No es una lista de deseos: aquí solo entra
lo que ya se ha hablado y se va a hacer, con lo que haya que recordar el día que
se arranque.

---

## Cuestionario de consolidación al terminar una nota técnica

**Qué es.** Al cerrar una nota en *Apuntes*, el alumno puede pedir un
cuestionario sobre ella. Su propia IA redacta las preguntas a partir del texto
de la nota, él responde, y la misma IA corrige comparando respuesta y nota. Si
no llega a un porcentaje, se le recomienda releerla.

**Por qué.** Leer no es haber aprendido. Si después de la lectura no sabe decir
la misión del elemento, cómo se comprueba o sus averías frecuentes, la lectura
no ha servido. Esto lo detecta en el momento, no en el examen.

**Lo que no cuesta nada.** Corre con la clave personal del alumno
(`UserProperties`), igual que *Consultar*. El coste es suyo, no del centro, y no
hay que racionarlo: preguntar es trabajar. Además la nota ya está en memoria del
servidor (`cargarNota`), así que no hay que ir a buscar nada: se le pasa a la IA
el texto que el alumno acaba de leer y ya.

**Cómo encaja con lo que hay.**

| Pieza | Estado |
|---|---|
| texto de la nota para la IA | hecho (`portal/Notas.gs`, `textoNotasParaIA`) |
| llamada a la IA con clave del alumno | hecho (`portal/IA.gs`) |
| registro de lectura | hecho (`leido` → pestaña *Lecturas*) |
| aleatoriedad entre intentos | falta |
| registro de resultado y umbral | falta |

**Decisiones ya tomadas.**

- **No hay campo que seleccionar.** El cuestionario sale de la nota que acaba de
  leer; pedirle que la elija otra vez en un desplegable es trabajo de más.
- **La corrección la hace la IA contra el texto de la nota**, no contra una
  plantilla de respuestas. Es lo que permite que valga para las 129 notas sin
  escribir nada por nota.
- **Aleatorio de verdad**: si las preguntas se repiten, se memorizan. Que varíe
  qué apartados toca y en qué orden.
- **Reconsolidar, no bloquear.** Aquí no va el freno de horas del simulador:
  repetir un cuestionario es repasar. Lo que se guarda es si lo superó y cuántas
  vueltas le costó.

**Lo que hay que resolver cuando se arranque.**

1. **Un modelo no es un corrector fiable de sí mismo.** Corrige mejor si se le
   pide que cite el trozo de la nota en el que se apoya para dar por buena o
   mala cada respuesta. Sin eso aprueba de más.
2. **El porcentaje es orientativo, no una nota.** Que se vea así en pantalla: en
   cuanto puntúe para calificar, el alumno va a intentar sacarle la respuesta a
   la IA antes de contestar, que es exactamente lo que se quiere evitar.
3. **Nota corta = cuestionario pobre.** Hay notas de tres líneas. Conviene un
   mínimo de texto para ofrecer el cuestionario, o saldrán preguntas de relleno.
4. Enganchar el resultado al *planing* de Inicio: "leída pero no consolidada" es
   un estado distinto de "leída", y es el que debería tirar del siguiente paso.
