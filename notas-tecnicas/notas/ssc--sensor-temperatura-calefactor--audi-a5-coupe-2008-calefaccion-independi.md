---
id: ssc.sensor-temperatura-calefactor.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 178
tipo: elemento
clase: componente
titulo: "Termosensor de temperatura del calefactor"
codigo: "G18"
menu: "Termosensor de temperatura del G18"
grupo: "Calefacción"
clave: sensor-temperatura-calefactor
area: climatizacion
sistema: "calefaccion"
forma_parte_de: calefaccion-independiente
marca: "Eberspächer"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 67, 72-90, 139"
relacionados: ["sensor-temperatura-calefactor-2", "unidad-control-calefaccion-adicional"]
palabras: ["G18", "termosensor", "NTC", "temperatura del refrigerante", "sobrecalentamiento"]
---

## Misión

Medir la temperatura del líquido refrigerante en el interior del calefactor independiente para regular el rendimiento de la calefacción y proteger la instalación contra sobrecalentamientos. (págs. 67, 77-89, 139).

## Tipos y características

Sensor de temperatura de tipo NTC (coeficiente de temperatura negativo) montado mediante estribo de sujeción sobre la carcasa del intercambiador de calor y sellado con junta tórica. (págs. 67, 136, 139).

## Principio de funcionamiento

Disminuye su resistencia eléctrica a medida que aumenta la temperatura del líquido refrigerante en el calefactor. La UCE J364 utiliza esta señal para conmutar los modos de funcionamiento:
- Menor de 77 ºC: Plena carga (100% potencia calorífica).
- Alcanza 77 ºC: Conmuta a carga parcial (50% potencia calorífica).
- Cae por debajo de 60 ºC: Retorna a plena carga.
- Alcanza 89 ºC: Conmuta a pausa de regulación (desconexión de combustión).
- Si alcanza 110 ºC o más: Desconexión de seguridad inmediata (OFF). (págs. 18, 77-80).

## Valores de trabajo

- Rango de medición normal NTC según curva característica:
  - A 20 ºC: aprox. 12 a 15 kΩ.
  - A 80 ºC: aprox. 1,5 a 2,5 kΩ.
  - A 100 ºC: aprox. 1 kΩ.
- Límite de interrupción (avería): Resistencia superior a 2 MΩ.
- Límite de cortocircuito (avería): Resistencia inferior a 50 Ω. (pág. 67).

## Anomalías frecuentes

Fallo de estanqueidad de la junta tórica (fuga de refrigerante), degradación del elemento NTC, cortocircuito o interrupción de los cables. (págs. 67, 139).

## Comportamiento en avería

El equipo de diagnosis muestra la indicación "fallo" en el grupo de medición 002 campo. Se interrumpe el funcionamiento del calefactor por seguridad y se registra la avería en la unidad J364. (págs. 31, 67).

## Cómo comprobarlo

1. Desconectar el encendido y desacoplar la carcasa del conector de 14 polos de la UCE J364.
2. Medir la resistencia eléctrica entre la celda 10 (cable negro) y la celda 11 (cable negro).
3. Comparar el valor medido con la curva característica según la temperatura del líquido en ese momento.
4. Si la resistencia es mayor a 2 MΩ existe interrupción; si es menor a 50 Ω existe cortocircuito. (págs. 67, 136).

## Mantenimiento

Sustituir el anillo toroidal de goma en cada desmontaje, humedeciéndolo ligeramente con líquido refrigerante antes de la instalación. (pág. 139).

## Imágenes requeridas

- Curva característica de resistencia NTC en función de la temperatura para el termosensor G18 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 67
