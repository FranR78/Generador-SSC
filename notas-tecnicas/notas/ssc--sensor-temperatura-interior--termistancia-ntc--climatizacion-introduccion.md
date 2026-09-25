---
id: ssc.sensor-temperatura-interior.termistancia-ntc.climatizacion-introduccion
modulo: ssc
unidad: clima
nt: 862
tipo: elemento
clase: componente
titulo: "Captadores de temperatura NTC"
menu: "Captadores de temperatura NTC"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
variante: termistancia-ntc
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "CLIMATIZACION INTRODUCCION.PDF, págs. 170-173"
relacionados: ["unidad-control-climatizador"]
palabras: ["termistancia", "NTC", "CTN", "resistencia negativa", "curva característica"]
---

## Misión

Captar las variaciones de temperatura de los diferentes puntos de medición (habitáculo, exterior, evaporador, aire soplado) y convertirlas en señales eléctricas para la centralita electrónica. (págs. 170, 172)

## Tipos y características

Sensores térmicos basados en termistancias de coeficiente de temperatura negativo (NTC / CTN). (pág. 170)

## Principio de funcionamiento

Su resistencia eléctrica interna varía de forma inversamente proporcional a la temperatura detectada: cuando la temperatura aumenta, la resistencia eléctrica disminuye siguiendo una curva no lineal característica. La centralita mide la caída de tensión en el sensor para calcular la temperatura real. (págs. 170-171)

## Valores de trabajo

- Comportamiento resistivo: disminución exponencial de la resistencia en ohmios al elevarse la temperatura en grados Celsius. (pág. 171)

## Anomalías frecuentes

Descalibración por envejecimiento del semiconductor interno o cortocircuito/corte del cableado. (págs. 170, 198)

## Comportamiento en avería

La centralita adopta valores supletorios fijos memorizados para mantener el funcionamiento en modo de emergencia. (págs. 172, 198)

## Cómo comprobarlo

Medir la resistencia eléctrica del captador con multímetro en ohmios a temperaturas conocidas y comparar el resultado con su curva característica. (págs. 170-171)

## Imágenes requeridas

- Curva característica no lineal de una termistancia de coeficiente de temperatura negativo (NTC / CTN) — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 171
