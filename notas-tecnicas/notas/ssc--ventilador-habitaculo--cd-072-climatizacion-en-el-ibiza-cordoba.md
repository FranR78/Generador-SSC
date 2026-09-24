---
id: ssc.ventilador-habitaculo.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 200
tipo: elemento
clase: componente
titulo: "Turbina de aire e interior y regulador de régimen"
codigo: "V2 / J126"
menu: "Turbina de aire e interior y r V2 / J126"
grupo: "Distribución de aire"
clave: ventilador-habitaculo
area: climatizacion
sistema: "distribucion-aire"
forma_parte_de: unidad-climatizadora
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 22"
relacionados: ["unidad-control-climatizador"]
palabras: ["V2", "J126", "soplador", "regulador electrónico", "variación lineal de tensión"]
---

## Misión

Impulsar el caudal de aire necesario a través de la unidad climática hacia los difusores del habitáculo. (pág. 22)

## Tipos y características

Conjunto formado por un electromotor soplador (V2) y una etapa de potencia o regulador electrónico de régimen (J126) montado directamente en el flujo de aire de la unidad climática. (pág. 22)

## Principio de funcionamiento

La unidad de control J255 envía una señal de pilotaje en tensión al regulador J126. El regulador modula progresivamente la corriente principal suministrada al motor V2, permitiendo un ajuste continuo del caudal de aire sin escalas fijas por resistencias. (pág. 22)

## Valores de trabajo

- Tensión de salida regulada hacia la turbina: de 0 V a 12 V (en pasos progresivos de 2,5 V durante diagnosis). (págs. 22, 36)

## Comportamiento en avería

- Interrupción total o falta de variación en el flujo de soplado de aire hacia el habitáculo. (pág. 22)

## Cómo comprobarlo

Mediante la función "03" (diagnosis de actuadores) y función "08" (bloque de valores de medición, grupo 005) con el equipo de autodiagnosis. (págs. 36-37)

## Imágenes requeridas

- Esquema e instalación de la turbina de aire V2 y el módulo regulador de régimen J126 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 22
