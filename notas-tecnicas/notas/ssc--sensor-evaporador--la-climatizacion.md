---
id: ssc.sensor-evaporador.la-climatizacion
modulo: ssc
unidad: clima
nt: 283
tipo: elemento
clase: componente
titulo: "Sensor de temperatura del evaporador"
menu: "Sensor de temperatura del evaporador"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 90"
relacionados: ["evaporador", "unidad-control-climatizador", "embrague-compresor"]
palabras: ["sensor evaporador", "NTC", "protección antihielo", "0 ºC", "3 ºC", "corte de compresor"]
---

## Misión

Informar a la UEGAA de la temperatura de las aletas del evaporador para desconectar el compresor cuando existe riesgo de congelación del agua condensada. (pág. 90).

## Tipos y características

Resistencia NTC (coeficiente de temperatura negativo) montada entre las aletas de la zona más fría del evaporador, o bien un interruptor térmico bimetálico. (pág. 90).

## Principio de funcionamiento

Mide continuamente la temperatura del evaporador y envía la señal eléctrica a la UEGAA. Si la temperatura desciende hasta valores críticos de congelación (entre 0 ºC y -1 ºC), la UEGAA (o el interruptor térmico directamente) corta la alimentación del acoplamiento electromagnético del compresor. Al subir la temperatura por encima de +3 ºC, se restablece la alimentación y el compresor vuelve a funcionar. (pág. 90).

## Valores de trabajo

- Temperatura de desconexión del compresor: 0 ºC a -1 ºC. (pág. 90).
- Temperatura de reconexión del compresor: > +3 ºC. (pág. 90).

## Anomalías frecuentes

Desplazamiento físico fuera de las aletas del evaporador, o derivación a masa/interrupción del cableado NTC. (págs. 90, 271).

## Comportamiento en avería

- Si mide temperatura erróneamente alta: el compresor no corta nunca y el evaporador se congela, bloqueando el paso de aire al habitáculo. (págs. 90, 271).
- Si mide temperatura erróneamente baja: la UCE desactiva el compresor permanentemente. (págs. 90, 271).

## Cómo comprobarlo

1. Medir la resistencia eléctrica de la NTC a distintas temperaturas. (págs. 90, 179).
2. Consultar el bloque de valores de medición con el equipo de autodiagnosis. (pág. 274).

## Mantenimiento

Asegurar el correcto calado de la sonda entre las aletas del evaporador al intervenir en el bloque climatizador. (pág. 90).
