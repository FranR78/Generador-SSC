---
id: ssc.sensor-evaporador.hella02
modulo: ssc
unidad: clima
nt: 795
tipo: elemento
clase: componente
titulo: "Termostato del evaporador"
menu: "Termostato del evaporador"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: distribucion-aire
fuentes: "HELLA02.PDF, págs. 49-51"
relacionados: ["embrague-compresor", "evaporador", "unidad-control-climatizador"]
palabras: ["termostato mecánico", "termostato electrónico", "NTC", "congelación evaporador", "0 ºC", "4 ºC"]
---

## Misión

Regular el funcionamiento del compresor de cilindrada fija interrumpiendo su alimentación eléctrica para mantener la temperatura del evaporador entre 0 ºC y 4 ºC, evitando la congelación del agua condensada en sus aletas. (pág. 49, 50)

## Tipos y características

Dispositivo de regulación térmica instalado en la caja del evaporador. Existen dos tecnologías:
- Termostato mecánico: equipado con bulbo capilar intercalado entre las láminas del evaporador, pulmón de presión, muelle de regulación con tornillo de ajuste, ballesta y platinos de contacto eléctrico.
- Termostato electrónico: formado por una sonda de temperatura NTC (coeficiente de temperatura negativo) conectada a un módulo electrónico de mando.



(pág. 49, 50, 51)

## Principio de funcionamiento

- Mecánico: La variación de temperatura en el evaporador modifica la presión del fluido interno del bulbo. Esta presión (Fp) actúa sobre el pulmón venciendo la fuerza opuesta de un muelle (Fm). Al bajar la temperatura de 0 ºC, Fp disminuye y el muelle abre los platinos, desconectando el electroembrague. Al subir hacia 4 ºC, Fp aumenta y cierra los contactos.
- Electrónico: La sonda NTC varía su resistencia eléctrica según la temperatura del evaporador. La unidad electrónica procesa esta variación y determina la conexión o desconexión del electroembrague del compresor.

(pág. 50, 51)

## Valores de trabajo

- Rango de regulación de temperatura en evaporador: entre 0 ºC (corte) y 4 ºC (conexión). (pág. 50)

## Comportamiento en avería

Si no existiese el dispositivo, el hielo cubriría progresivamente la pared del evaporador, evitando la libre circulación del aire y dejando de expulsar aire por los difusores hacia el habitáculo. (pág. 49)

## Cómo comprobarlo

Medición de la variación de resistencia de la sonda NTC al modificar la temperatura (termostato electrónico) o verificación del equilibrio entre las fuerzas de presión y muelle sobre los contactos (termostato mecánico). (pág. 50, 51)

## Mantenimiento

Ajuste de la fuerza del muelle interior mediante el tornillo de regulación en modelos mecánicos si procede. (pág. 50)

## Imágenes requeridas

- Vista del termostato mecánico (bulbo, pulmón, muelle, platinos) y del termostato electrónico (módulo NTC y curva característica) — Fuente: HELLA02.PDF, pág. 51
