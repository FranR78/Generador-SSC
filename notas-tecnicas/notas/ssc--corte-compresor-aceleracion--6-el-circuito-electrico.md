---
id: ssc.corte-compresor-aceleracion.6-el-circuito-electrico
modulo: ssc
unidad: clima
nt: 750
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Corte de acoplamiento del compresor en aceleración diésel"
menu: "Corte de acoplamiento del compresor en"
grupo: "Control de climatización"
clave: corte-compresor-aceleracion
area: climatizacion
sistema: "control-climatizacion"
fuentes: "6. EL CIRCUITO ELÉCTRICO.pptx, págs. 23-24"
relacionados: ["embrague-compresor", "unidad-control-climatizador"]
palabras: ["arranque en rampa", "calado", "pedal embrague", "relé temporizado", "diodo"]
---

## Objeto

Evitar el riesgo de calado del motor y optimizar el par disponible en las ruedas durante los arranques en rampa y fases de aceleración con alta carga del motor en versiones diésel. (pág. 23)

## Fundamento

Desconexión temporal y automatizada del embrague electromagnético del compresor mediante la acción combinada de contactores en los pedales y relés de mando temporizados. (pág. 23)

## Desarrollo

El funcionamiento del sistema se desarrolla mediante la siguiente lógica:
1. Al pisar el pedal de embrague a fondo (contactor 421 abierto) y superar un cierto nivel de carga en el acelerador (contactor 405 en la bomba de inyección 589), se reúnen las dos condiciones de activación.
2. La apertura del circuito desexcita el relé 661, interrumpiendo la alimentación del relé temporizado.
3. El relé de mando 584 abre sus contactos, cortando la corriente del embrague electromagnético 171 del compresor durante un periodo fijo de cuatro segundos.
4. Un diodo de protección en la línea evita la retroalimentación del embrague desde el cajetín de pre-postcalentamiento 257 durante las fases de arranque y calentamiento del motor.
5. El contactor del pedal de embrague no requiere reglaje y permanece cerrado con el pedal en reposo (embragado).

(pág. 23, 24)

## Valores de referencia

- Duración del corte temporizado del compresor: 4 segundos. (pág. 23)

## Imágenes requeridas

- Esquema del circuito de corte del embrague del compresor diésel con relés 661, 635, 584 y contactores 405 y 421 — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 24
