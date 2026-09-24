---
id: ssc.sensor-evaporador.11-dispositivos-de-regulacion-y-segurida
modulo: ssc
unidad: clima
nt: 65
tipo: elemento
clase: componente
titulo: "Sensor de temperatura del evaporador"
menu: "Sensor de temperatura del evaporador"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: evaporador
fuentes: "11. Dispositivos de regulación y seguridad.pdf, págs. 87-88"
relacionados: ["evaporador", "unidad-control-climatizador", "compresor"]
palabras: ["sensor evaporador", "NTC", "congelación", "-1 a 0 ºC", "3 ºC"]
---

## Misión

Medir la temperatura existente entre las aletas del evaporador para evitar la congelación del agua condensada en su superficie (págs. 87-88).

## Tipos y características

Sonda térmica de tipo NTC (coeficiente de temperatura negativo) alojada entre las aletas del evaporador (pág. 87). En otros sistemas se sustituye por un termostato electromecánico de corte directo o por un conmutador de temperatura exterior (pág. 88). En compresores de cilindrada variable no se requiere este sensor (pág. 88).

## Principio de funcionamiento

Detecta la temperatura en el bloque del evaporador y transmite una señal analógica de tensión a la Unidad de Control del climatizador (pág. 87). La unidad de control procesa la señal y desconecta el embrague del compresor cuando la temperatura desciende entre -1 ºC y 0 ºC, volviendo a conectar el compresor cuando la temperatura sube a unos 3 ºC (pág. 87).

## Valores de trabajo

- Temperatura de desconexión del compresor: entre -1 ºC y 0 ºC (pág. 87).
- Temperatura de reconexión del compresor: 3 ºC aproximadamente (pág. 87).
