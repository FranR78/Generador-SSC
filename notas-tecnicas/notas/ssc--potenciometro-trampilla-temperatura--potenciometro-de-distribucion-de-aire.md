---
id: ssc.potenciometro-trampilla-temperatura.potenciometro-de-distribucion-de-aire
modulo: ssc
unidad: clima
nt: 644
tipo: elemento
clase: componente
titulo: "Potenciómetro del motor de la trampilla de temperatura"
codigo: "G92"
menu: "Potenciómetro del motor de la  G92"
grupo: "Distribución de aire"
clave: potenciometro-trampilla-temperatura
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: servomotor-trampilla
fuentes: "Potenciometro de distribución de aire.pdf, págs. 15"
relacionados: ["servomotor-trampilla", "unidad-control-climatizador"]
palabras: ["G92", "trampilla de temperatura", "resistencia", "carrera angular"]
---

## Misión

Informar constantemente de la posición del motor y, en consecuencia, de la posición exacta de la trampilla de temperatura a la unidad de control del autoclima o calefacción motorizada. (pág. 15)

## Tipos y características

Está ubicado en el propio motor accionador. Dispone de una carrera angular de 51° y presenta un rango de resistencia comprendido entre 0 y 4,7 kΩ. (pág. 15)

## Principio de funcionamiento

Envía una señal eléctrica de resistencia variable proporcional a su posición angular. La unidad de control utiliza esta señal para:
- Regular la temperatura del aire de entrada al habitáculo.
- Reconocer el funcionamiento del motor y localizar la posición de los dos topes del recorrido de la trampilla. (pág. 15)

## Valores de trabajo

- Carrera angular: 51°.
- Rango de resistencia: entre 0 y 4,7 kΩ. (pág. 15)

## Anomalías frecuentes

Avería en el potenciómetro o interrupción en la señal emitida hacia la unidad de control. (pág. 15)

## Comportamiento en avería

En caso de avería del potenciómetro, la unidad de control adopta el siguiente comportamiento:
- Deja la trampilla de temperatura en la posición existente en el momento del fallo.
- Reduce la velocidad de la turbina para evitar la entrada excesiva de aire frío o caliente.
- Parpadean los dígitos del display cada vez que se conecta el equipo. (pág. 15)
