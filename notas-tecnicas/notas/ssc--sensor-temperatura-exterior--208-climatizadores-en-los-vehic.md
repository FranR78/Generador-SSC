---
id: ssc.sensor-temperatura-exterior.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 816
tipo: elemento
clase: componente
titulo: "Termosensor de temperatura exterior G17 y G89"
codigo: "G17 / G89"
menu: "Termosensor de temperatura ext G17 / G89"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "VW"
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 48"
relacionados: ["unidad-control-climatizador"]
palabras: ["G17", "G89", "paragolpes", "canal de aspiración", "valor supletorio +10 ºC"]
---

## Misión

Captar la temperatura del aire atmosférico exterior para ajustar la posición de las trampillas de mezcla y la velocidad de soplado de la turbina de aire fresco. (pág. 48)

## Tipos y características

Sondas térmicas de resistencia NTC. El sistema utiliza dos puntos de medición: la sonda G17 (ubicada en el frente del vehículo tras el paragolpes) y la sonda G89 (instalada en el canal de aspiración de aire fresco). (pág. 48)

## Principio de funcionamiento

La unidad de control compara continuamente las señales de G17 y G89. Procesa siempre el valor de temperatura más bajo para evitar lecturas infladas por el calor radiado del motor cuando el vehículo está detenido o circula a baja velocidad. (pág. 48)

## Valores de trabajo

- Valor supletorio asumido en caso de avería simultánea de G17 y G89: +10 ºC. (pág. 48)

## Anomalías frecuentes

Deterioro por humedad, sulfatación en las clavijas del conector del paragolpes o rotura del cableado tras colisiones frontales. (pág. 48)

## Comportamiento en avería

Si falla el sensor G17, la unidad asume la lectura de G89. Si fallan ambos sensores, la unidad calcula un valor fijo de +10 ºC y anula la función de recirculación de aire. (pág. 48)

## Cómo comprobarlo

Consultar los valores medidos por G17 y G89 en los bloques de medición del autodiagnóstico y comparar con la temperatura ambiental real. (págs. 48, 71)

## Mantenimiento

Inspeccionar el estado de la sonda G89 durante la sustitución del filtro antipolen del habitáculo. (pág. 48)
