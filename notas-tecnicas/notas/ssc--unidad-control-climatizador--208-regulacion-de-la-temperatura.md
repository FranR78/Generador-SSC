---
id: ssc.unidad-control-climatizador.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 97
tipo: elemento
clase: componente
titulo: "Unidad de control de climatización"
codigo: "J255"
menu: "Unidad de control de climatiza J255"
grupo: "Control de climatización"
clave: unidad-control-climatizador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "VW"
fuentes: "208. Regulación de la temperatura.pdf, págs. 45-47"
relacionados: ["servomotor-trampilla", "sensor-temperatura-interior", "sensor-temperatura-exterior", "fotosensor-solar"]
palabras: ["J255", "E87", "Climatronic", "memoria de averías", "autodiagnóstico", "función de emergencia", "G56"]
---

## Misión

Procesar las señales de los sensores, compararlas con los valores teóricos de selección y emitir señales de salida hacia los actuadores (servomotores, electroventiladores, compresor) para regular automáticamente la climatización del habitáculo (págs. 45-47).

## Tipos y características

Unidad de control combinada en un solo cuerpo con el panel de mandos e indicación E87, con diseño adaptado al salpicadero de cada modelo de vehículo (págs. 45-47). Integra en su propio frontal el termosensor de temperatura del habitáculo G56 (pág. 47). Dispone de memoria de averías y autodiagnóstico (pág. 47).

## Principio de funcionamiento

Recibe información eléctrica y electrónica de los sensores del sistema y de señales suplementarias externas vía CAN-Bus (págs. 45-47). Modula las etapas finales para accionar los servomotores de las chapaletas de aire y la turbina de aire fresco V2 mediante la unidad de control J126 (págs. 45-47). En caso de fallo o interrupción en un cable o componente, registra la avería en memoria y mantiene el funcionamiento en un programa o función de emergencia (pág. 47).

## Anomalías frecuentes

- Averías eléctricas en sensores o interrupción de líneas registradas en la memoria de autodiagnóstico (pág. 47).

## Comportamiento en avería

Al registrarse una avería, la unidad de control mantiene en vigor el modo operativo seleccionado mediante una función de emergencia con valores supletorios (pág. 47).

## Cómo comprobarlo

Localizar los defectos mediante el equipo de autodiagnóstico conectado al terminal de diagnosis de 16 polos T16 (págs. 46-47).
