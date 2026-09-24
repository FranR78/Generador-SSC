---
id: ssc.sensor-evaporador.208-regulacion-del-sistema
modulo: ssc
unidad: clima
nt: 112
tipo: elemento
clase: componente
titulo: "Transmisor de temperatura del evaporador"
codigo: "G153"
menu: "Transmisor de temperatura del  G153"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: evaporador
marca: "VW"
fuentes: "208. Regulación del Sistema.pdf, págs. 35"
relacionados: ["evaporador", "unidad-control-climatizador", "compresor"]
palabras: ["G153", "E33", "congelación", "-1 ºC a 0 ºC", "+3 ºC", "aletas evaporador"]
---

## Misión

Medir la temperatura en el bloque del evaporador para evitar su engelamiento por congelación del agua de condensación acumulada en las aletas (pág. 35).

## Tipos y características

Sensor térmico alojado directamente entre las aletas de refrigeración del evaporador (pág. 35). En otros sistemas se sustituye por el conmutador de temperatura del evaporador E33 de corte directo (pág. 35).

## Principio de funcionamiento

Capta la temperatura en la matriz del evaporador y transmite una señal eléctrica a la unidad de control del climatizador (pág. 35). Si la temperatura desciende entre -1 ºC y 0 ºC, la unidad de control desactiva el acoplamiento electromagnético N25 interrumpiendo el trabajo del compresor (pág. 35). Cuando la temperatura asciende de nuevo hasta +3 ºC, se vuelve a conectar el compresor (pág. 35). En los sistemas con conmutador E33, este interrumpe directamente la corriente de alimentación del acoplamiento electromagnético (pág. 35).

## Valores de trabajo

- Temperatura de desconexión del compresor: de -1 ºC a 0 ºC (pág. 35).
- Temperatura de reconexión del compresor: +3 ºC (pág. 35).
