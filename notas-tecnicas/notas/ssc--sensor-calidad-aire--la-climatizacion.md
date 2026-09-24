---
id: ssc.sensor-calidad-aire.la-climatizacion
modulo: ssc
unidad: clima
nt: 300
tipo: elemento
clase: componente
titulo: "Sensor de calidad del aire"
menu: "Sensor de calidad del aire"
grupo: "Control de climatización"
clave: sensor-calidad-aire
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 135-137"
relacionados: ["recirculacion", "filtro-habitaculo", "unidad-control-climatizador"]
palabras: ["sensor de calidad de aire", "dióxido de estaño", "SnO2", "platino y paladio", "350 ºC", "recirculación automática"]
---

## Misión

Detectar de forma automática la presencia de gases contaminantes en el aire exterior para cerrar la trampilla de entrada y activar la recirculación antes de que penetren al habitáculo. (págs. 135-136).

## Tipos y características

Sensor semiconductor instalado en la toma de entrada de aire exterior (vierteaguas). Consta de una capa de dióxido de estaño (SnO2) con aditivos catalíticos de platino y paladio, e incluye una resistencia de calefacción interna (consume 0,5 W a aprox. 350 ºC) y electrónica integrada. (pág. 136).

## Principio de funcionamiento

La resistencia interna calienta el elemento a 350 ºC. La presencia de gases oxidantes o reductores altera la conductividad eléctrica del dióxido de estaño. La electrónica integrada mide la variación de resistencia y envía una señal digital rectangular a la UEGAA. Al detectar contaminación elevada, la UEGAA activa automáticamente el servomotor de recirculación. Cuando el aire exterior vuelve a estar limpio, abre de nuevo la entrada de aire fresco. (pág. 136).

## Valores de trabajo

- Temperatura de trabajo interna del sensor: aprox. 350 ºC (potencia 0,5 W). (pág. 136).
- Contaminantes detectados:
  - Motores gasolina: Monóxido de carbono (CO), Benceno (C6H6), Hexano (C6H14), n-heptano (C7H16). (pág. 137).
  - Motores diésel: Óxidos de nitrógeno (NO_x), Dióxido de azufre (SO2), Ácido sulfhídrico (H2S), Sulfuro de carbono (CS2). (pág. 137).

## Anomalías frecuentes

Fallo de la resistencia calefactora interna o envenenamiento de la capa catalítica por vapores químicos. (pág. 136).

## Comportamiento en avería

La recirculación automática deja de funcionar. La función de recirculación no se activa durante la fase de calentamiento del sensor ni cuando está encendido el modo desempañado/defrost. (págs. 136, 216).

## Cómo comprobarlo

Comprobar mediante autodiagnosis el estado de la señal digital y el código de avería memorizado. (págs. 136, 163).

## Mantenimiento

Sustitución conjunta con el filtro de habitáculo polivalente de carbón activo. (págs. 106, 135).
