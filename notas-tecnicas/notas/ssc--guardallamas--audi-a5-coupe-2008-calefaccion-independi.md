---
id: ssc.guardallamas.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 177
tipo: elemento
clase: componente
titulo: "Guardallamas"
codigo: "G64"
menu: "Guardallamas G64"
grupo: "Calefacción"
clave: guardallamas
area: climatizacion
sistema: "calefaccion"
forma_parte_de: calefaccion-independiente
marca: "Eberspächer"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 66-67, 72-88, 141"
relacionados: ["bujia-precalentamiento-calefaccion", "unidad-control-calefaccion-adicional"]
palabras: ["G64", "termosensor", "detector de llama", "resistencia NTC", "llama"]
---

## Misión

Detectar la presencia y estabilidad de la llama en la cámara de combustión del calefactor independiente mediante la variación de su resistencia eléctrica según la temperatura existente. (págs. 66, 88).

## Tipos y características

Sensor de temperatura resistente a altas temperaturas montado en la zona del quemador, dotado de una junta de grafito. (págs. 66, 137, 141).

## Principio de funcionamiento

Modifica su resistencia eléctrica en función de la temperatura en la cámara de combustión. La unidad de control J364 evalúa constantemente la curva característica de resistencia de G64 para determinar si se ha formado llama ("detectada") o si la temperatura es insuficiente ("no detectada"). (págs. 34, 88).

## Valores de trabajo

- Estado "detectada": temperatura de cámara propia de combustión activa.
- Estado "no detectada": temperatura inferior a la requerida para el modo de combustión.
- Límite de interrupción (avería): Resistencia superior a 3040 Ω.
- Límite de cortocircuito (avería): Resistencia inferior a 780 Ω. (págs. 34, 67).

## Anomalías frecuentes

Deformación por sobrecalentamiento, acumulación de carbonilla, interrupción del cableado o cortocircuito. (págs. 67, 141).

## Comportamiento en avería

Si la resistencia de G64 se encuentra fuera de margen durante el ciclo de arranque, se cancela el proceso y se realiza un intento de repetición. Si tras la repetición persiste el fallo, la UCE J364 aborta la puesta en marcha, registra la avería y desactiva el sistema. (págs. 76, 86-87).

## Cómo comprobarlo

1. Desconectar el encendido y desacoplar la carcasa del conector de 14 polos de la unidad de control J364.
2. Medir la resistencia con un multímetro entre la celda 1 (cable marrón) y la celda 2 (cable marrón).
3. Evaluar el valor según la temperatura momentánea: si la resistencia es superior a 3040 Ω indica interrupción; si es inferior a 780 Ω indica cortocircuito. (págs. 66-67, 136).

## Mantenimiento

Reemplazar obligatoriamente la junta de grafito por una nueva en cada desmontaje, orientando el lado sin rebarbas hacia el collar del guardallamas G64 e introduciéndola sin aristas vivas. (pág. 141).

## Imágenes requeridas

- Gráfica de curva característica resistencia-temperatura para la comprobación del guardallamas G64 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 67
