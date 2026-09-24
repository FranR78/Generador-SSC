---
id: ssc.sensor-evaporador.climatizacion-introduccion
modulo: ssc
unidad: clima
nt: 239
tipo: elemento
clase: componente
titulo: "Sonda del evaporador"
menu: "Sonda del evaporador"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "CLIMATIZACION INTRODUCCION.PDF, págs. 141-144"
relacionados: ["evaporador", "compresor", "unidad-control-climatizador"]
palabras: ["sonda de evaporador", "antihielo", "captador de temperatura", "-1 ºC", "4 ºC", "corte de compresor"]
---

## Misión

Evitar la congelación del agua en las aletas del evaporador desconectando el compresor cuando la temperatura desciende de los límites de congelación. (pág. 143).

## Tipos y características

Sonda mecánica o sensor de temperatura NTC insertado entre las aletas del evaporador en el punto de menor temperatura. (págs. 142-143).

## Principio de funcionamiento

Mide la temperatura del evaporador. Si desciende hasta -1 ºC, abre el circuito para desconectar el compresor. Cuando la temperatura de las aletas sube a +4 ºC, permite la reconexión del compresor. (pág. 143).

## Valores de trabajo

- Desconexión del compresor: -1 ºC. (pág. 143).
- Reconexión del compresor: +4 ºC. (pág. 143).

## Anomalías frecuentes

Desplazamiento de la sonda fuera de las aletas del evaporador o fallo del elemento NTC. (pág. 143).

## Comportamiento en avería

- Si mide temperatura superior a la real: el compresor no corta, congelando el evaporador y taponando el paso de aire al habitáculo. (pág. 143).
- Si mide temperatura inferior a la real: el compresor no se conecta. (pág. 143).

## Cómo comprobarlo

1. Medir la resistencia eléctrica NTC en función de la temperatura del evaporador. (págs. 143, 170).
2. Comprobar la colocación física del bulbo/espiga entre las aletas. (pág. 142).

## Mantenimiento

Asegurar la firme fijación de la sonda en el punto más frío del evaporador tras intervenir en la caja climática. (pág. 142).
