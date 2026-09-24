---
id: ssc.turbina-aire-combustion.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 176
tipo: elemento
clase: componente
titulo: "Turbina de aire de combustión"
codigo: "V6"
menu: "Turbina de aire de combustión V6"
grupo: "Calefacción"
clave: turbina-aire-combustion
area: climatizacion
sistema: "calefaccion"
forma_parte_de: calefaccion-independiente
marca: "Eberspächer"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 66, 71-82, 143"
relacionados: ["bomba-dosificadora-v54", "bujia-precalentamiento-calefaccion"]
palabras: ["turbina de aire", "V6", "aire de combustión", "barrido", "ventilador"]
---

## Misión

Aspirar aire del exterior e impulsarlo de forma regulada hacia la cámara de combustión del calefactor independiente para formar la mezcla carburada y realizar el barrido de gases de escape. (págs. 66, 69, 143).

## Tipos y características

Soplante eléctrico impulsado por motor de corriente continua a 12 V, regulado en tensión por la unidad de control J364. (págs. 66, 69, 136).

## Principio de funcionamiento

Su régimen de giro se regula variando la tensión aplicada por la unidad de control J364 (entre 0 V y 12 V) en coordinación con la frecuencia de la bomba dosificadora V54. Funciona en fases de pre-barrido, arranque, plena carga (12 V), carga parcial (aprox. 5 a 6 V) y ciclo de continuación/post-barrido para enfriamiento (8 a 12 V). (págs. 72-82).

## Valores de trabajo

- Tensión de alimentación: 0 a 12 V CC.
- Absorción de corriente: 2 a 3 A a una tensión aplicada de 12 V CC. (pág. 66).
- Resistencia interna: entre 3 y 6 Ω (hasta 40 Ω si lleva mucho tiempo sin funcionar). (pág. 66).

## Anomalías frecuentes

Bloqueo mecánico por suciedad en la toma de aspiración o silenciador, desgaste del motor eléctrico, interrupción o cortocircuito en el bobinado. (págs. 66, 117).

## Comportamiento en avería

Imposibilidad de formar la mezcla aire-combustible correcta, generando mala combustión, exceso de CO2 o falta de llama. El sistema aborta el arranque y registra la avería en la unidad de control J364. (págs. 84, 117).

## Cómo comprobarlo

1. Desconectar el encendido y desacoplar el conector de 14 polos de la UCE J364.
2. Medir la resistencia en el conector entre la celda 13 (cable negro) y la celda 14 (cable marrón) (valor teórico entre 3 y 6 Ω).
3. Medir la resistencia entre la celda 13 y la carcasa del calefactor (debe ser infinita / sin derivación a masa).
4. Aplicar una tensión de 12 V CC y verificar con pinza amperimétrica que la corriente absorbida se sitúa entre 2 y 3 A. (págs. 66, 136).

## Mantenimiento

Sustituir la junta entre la turbina de aire de combustión V6 y la carcasa del calefactor en cada desmontaje. Comprobar que el tubo de aspiración y el silenciador no presenten suciedad ni obstrucciones. (págs. 117, 143).

## Imágenes requeridas

- Medición de la resistencia de la turbina de aire de combustión V6 en el conector de 14 polos — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 66
