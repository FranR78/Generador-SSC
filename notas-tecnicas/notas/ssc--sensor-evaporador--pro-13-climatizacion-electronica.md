---
id: ssc.sensor-evaporador.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 157
tipo: elemento
clase: componente
titulo: "Termosensor para la temperatura del evaporador"
menu: "Termosensor para la temperatura del ev"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: evaporador
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 105"
relacionados: ["compresor", "transmisor-presion"]
palabras: ["NTC evaporador", "congelación", "sensor MAP", "rendimiento reducido", "cilindrada variable"]
---

## Misión

Registrar la temperatura del aire enfriado inmediatamente a la salida del evaporador para regular el rendimiento del compresor y evitar su congelación (pág. 105).

## Tipos y características

Sonda térmica de tipo NTC ubicada a la salida del evaporador o alojada directamente entre sus aletas (pág. 105). En compresores de cilindrada variable suele omitirse (pág. 105).

## Principio de funcionamiento

Emite una señal eléctrica hacia la UCE informando de la temperatura del aire tras pasar por el evaporador (pág. 105). La UCE utiliza este dato para ajustar el trabajo del compresor y garantizar la temperatura requerida evitando la formación de hielo (pág. 105).

## Anomalías frecuentes

- Corte del cableado o avería interna de la sonda (pág. 105).

## Comportamiento en avería

Al ausentarse la señal o averiarse la sonda, el compresor se pasa a regular exclusivamente mediante la señal del sensor MAP de alta presión, limitándose el rendimiento del compresor para prevenir la congelación (pág. 105).
