---
id: ssc.bujia-precalentamiento-calefaccion.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 175
tipo: elemento
clase: componente
titulo: "Bujía de precalentamiento para calefacción"
codigo: "Q9"
menu: "Bujía de precalentamiento para Q9"
grupo: "Calefacción"
clave: bujia-precalentamiento-calefaccion
area: climatizacion
sistema: "calefaccion"
forma_parte_de: calefaccion-independiente
marca: "Eberspächer"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 65, 71-75, 141-142"
relacionados: ["guardallamas", "suplemento-quemador"]
palabras: ["bujía de incandescencia", "Q9", "precalentamiento", "vigilancia de llama"]
---

## Misión

Inflamar la mezcla de combustible y aire en la cámara de combustión del calefactor independiente durante el proceso de arranque y realizar la vigilancia de la llama en determinadas fases de funcionamiento. (págs. 65, 72-73).

## Tipos y características

Bujía de incandescencia eléctrica con espiga calefactora alimentada a una tensión nominal de 8 V. Absorción de corriente de 9 a 20 A al aplicarle 9 V. (págs. 65, 137).

## Principio de funcionamiento

Recibe alimentación eléctrica regulada por la unidad de control J364 durante la fase de arranque para alcanzar la temperatura de incandescencia e inflamar el combustible suministrado por la bomba dosificadora V54. Una vez establecida la combustión, se desactiva o pasa a monitorizar la presencia de llama. (págs. 72-73, 142).

## Valores de trabajo

- Tensión nominal: 8 V. (pág. 137).
- Absorción de corriente: entre 9 A y 20 A a 9 V de tensión continua. (pág. 65).
- Resistencia nominal: 0,42 a 0,63 Ω a 20 ± 2 ºC de temperatura ambiente. (pág. 65).

## Anomalías frecuentes

Desgaste térmico de la espiga de incandescencia, acumulación de carbonilla o sedimentos del combustible, cortocircuito o interrupción eléctrica en sus cables de alimentación. (págs. 76, 142).

## Comportamiento en avería

Si la resistencia de Q9 se encuentra fuera del margen definido, se cancela el proceso de arranque (se realiza 1 repetición de arranque). Si el fallo persiste, se aborta el ciclo, se inscribe la avería en la memoria de la UCE J364 y se desactiva el calefactor tras varias repeticiones. (págs. 76, 88).

## Cómo comprobarlo

1. Desconectar el encendido y desacoplar el conector de 14 polos de la unidad de control J364.
2. Medir la resistencia en el conector entre el contacto 3 (cable marrón) y el contacto 6 (cable blanco).
3. El valor teórico debe ser de 0,42 a 0,63 Ω a 20 ± 2 ºC (resistencia en conector inferior a 1 Ω).
4. Medir el aislamiento midiendo la resistencia entre el contacto 3 y la carcasa del calefactor (valor teórico: sin derivación a masa).
5. Aplicar una tensión de 9 V CC y verificar con pinza amperimétrica que la absorción de corriente se sitúa entre 9 y 20 A.
6. Limpiar cuidadosamente la espiga de incandescencia con un cepillo de latón. (págs. 65, 137).

## Mantenimiento

Limpiar la espiga de incandescencia con cepillo de latón. Si la bujía Q9 resulta dañada, comprobar y limpiar o sustituir el suplemento del quemador si presenta sedimentos no eliminables. (págs. 137, 142).

## Imágenes requeridas

- Esquema del conector de 14 polos indicando los contactos 3 y 6 para la comprobación de la bujía Q9 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 65
