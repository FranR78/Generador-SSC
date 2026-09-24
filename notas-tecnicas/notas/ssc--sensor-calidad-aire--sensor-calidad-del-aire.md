---
id: ssc.sensor-calidad-aire.sensor-calidad-del-aire
modulo: ssc
unidad: clima
nt: 647
tipo: elemento
clase: componente
titulo: "Sensor de la calidad del aire"
codigo: "G238"
menu: "Sensor de la calidad del aire G238"
grupo: "Control de climatización"
clave: sensor-calidad-aire
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: unidad-control-climatizador
marca: "VW"
fuentes: "Sensor Calidad del Aire.pdf, págs. 62-63"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "filtro-habitaculo"]
palabras: ["G238", "dióxido de estaño", "SnO2", "platino", "paladio", "sonda lambda", "señal rectangular digitalizada"]
---

## Misión

Determinar la polución del aire atmosférico para que la unidad de control del climatizador cierre automáticamente la chapaleta de recirculación al detectar concentraciones punta de contaminantes. (págs. 62, 63)

## Tipos y características

Componente electrónico no sujeto a desgaste. Funciona básicamente como una sonda lambda. Su elemento de medición es un semiconductor de óxidos mixtos de dióxido de estaño (SnO2), cuya sensibilidad se incrementa con aditivos catalíticos de platino y paladio. Incorpora un analizador electrónico en el módulo sensor. (págs. 62, 63)

## Principio de funcionamiento

- El analizador electrónico integrado reacciona ante las variaciones en la conductividad eléctrica del sensor causadas por los gases contaminantes.
- La electrónica detecta el contenido medio de contaminantes del aire y transmite hacia la unidad de control del climatizador una señal rectangular digitalizada con la índole y cantidad de contaminantes.
- El sistema es autoadaptable: reconoce el nivel medio de contaminación ambiental para actuar únicamente ante picos de polución, evitando la conexión continua en recirculación.
- La unidad de control cierra la chapaleta de recirculación según la polución y la temperatura exterior. Adicionalmente, en algunos sistemas se conmuta a recirculación al accionar el limpia-lavaparabrisas. (págs. 62, 63)

## Valores de trabajo

- Temperatura de servicio: aprox. 350 ºC.
- Potencia absorbida: 0,5 W.
- Fase de calentamiento del sensor: aprox. 30 s (sin función de recirculación).
- Comportamiento según temperatura atmosférica y contaminación:
  - > +2 ºC y leve ascenso de contaminación: Recirculación activada (mínimo 25 s).
  - > +2 ºC y escasa contaminación: Recirculación no activada.
  - De +2 ºC a -5 ºC y ascenso más intenso: Recirculación activada.
  - < -5 ºC y ascenso más intenso: Recirculación activada por un máximo de 15 s.
  - Función ECON (compresor desactivado): Recirculación activada por un máximo de 15 s.
  - Función de descongelación: Recirculación no activada. (págs. 62, 63)

## Mantenimiento

El sensor no requiere mantenimiento por no estar sujeto a desgaste. Se debe sustituir el filtro combinado en los intervalos de servicio. (pág. 63)

## Imágenes requeridas

- Conexión y esquema del sensor de calidad del aire G238 con la unidad de control E87 — Fuente: Sensor Calidad del Aire.pdf, pág. 63
