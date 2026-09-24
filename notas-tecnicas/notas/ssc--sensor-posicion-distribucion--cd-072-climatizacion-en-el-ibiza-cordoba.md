---
id: ssc.sensor-posicion-distribucion.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 578
tipo: elemento
clase: componente
titulo: "Potenciómetro de la distribución de aire"
menu: "Potenciómetro de la distribución de ai"
grupo: "Control de climatización"
clave: sensor-posicion-distribucion
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: distribucion-aire
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 15"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["potenciómetro", "distribución de aire", "desempañamiento", "parabrisas"]
---

## Misión

Indicar constantemente a la unidad de control la posición del mando de distribución de aire elegida por el usuario. (pág. 15)

## Tipos y características

Potenciómetro resistivo accionado mecánicamente al girar la rueda del mando de distribución de aire en la consola central. (pág. 15)

## Principio de funcionamiento

Al girar el mando de distribución, varía la resistencia del potenciómetro enviando una señal de tensión analógica a la unidad de control (autoclima o calefacción motorizada). Cuando la señal indica la selección de salida hacia el parabrisas, la unidad incrementa la velocidad de la turbina, coloca la trampilla de recirculación en entrada de aire fresco y conecta el compresor (en autoclima). (pág. 15)

## Comportamiento en avería

- La unidad sitúa automáticamente la trampilla de recirculación en posición de entrada de aire fresco. (pág. 15)
- No se incrementa automáticamente la velocidad de la turbina ni se conecta el compresor al seleccionar la salida de aire hacia el parabrisas. (pág. 15)
- Parpadean todos los dígitos de la pantalla del display al conectar el equipo. (pág. 15)

## Cómo comprobarlo

Mediante la función "08" (bloque de valores de medición, grupo 004, campo 4) del equipo de autodiagnosis. (pág. 37)

## Imágenes requeridas

- Mando con potenciómetro de distribución de aire y rueda de accionamiento — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 15
