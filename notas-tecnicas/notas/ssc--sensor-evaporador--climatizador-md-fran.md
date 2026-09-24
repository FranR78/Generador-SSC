---
id: ssc.sensor-evaporador.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 618
tipo: elemento
clase: componente
titulo: "Transmisor de temperatura del evaporador"
codigo: "G153"
menu: "Transmisor de temperatura del  G153"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 13, 14"
relacionados: ["unidad-control-climatizador", "compresor"]
palabras: ["G153", "aletas", "deshabilitación compresor", "-1 ºC", "+3 ºC", "congelación"]
---

## Misión

Medir la temperatura existente entre las aletas del evaporador para desconectar el compresor y prevenir la congelación del agua de condensación. (págs. 13, 14)

## Tipos y características

Sonda térmica tipo NTC o termostato bimetálico insertado directamente entre las laminillas del evaporador. (págs. 13, 14)

## Principio de funcionamiento

Mide la temperatura del paquete de aletas. Cuando la temperatura desciende hasta un valor crítico de congelación (entre -1 ºC y 0 ºC), la unidad de control desacopla el embrague electromagnético N25. Al subir la temperatura a +3 ºC, autoriza de nuevo el acoplamiento del compresor. (pág. 14)

## Valores de trabajo

- Umbral de desconexión del compresor: de -1 ºC a 0 ºC. (pág. 14)
- Umbral de reconexión del compresor: +3 ºC. (pág. 14)

## Anomalías frecuentes

Descalibración del elemento NTC o mal contacto térmico por desplazamiento en la matriz de aletas. (pág. 14)

## Comportamiento en avería

Congelación total del evaporador bloqueando el paso de aire hacia el habitáculo o falta de acoplamiento del compresor. (pág. 14)

## Cómo comprobarlo

Medir la resistencia de la sonda con un multímetro a diferentes temperaturas o consultar su valor en los bloques de medición. (pág. 14)

## Mantenimiento

Verificar el correcto posicionamiento físico del sensor entre las aletas. (pág. 14)
