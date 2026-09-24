---
id: ssc.electroventilador-condensador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 204
tipo: elemento
clase: componente
titulo: "Ventiladores de líquido refrigerante"
codigo: "V7 / V35"
menu: "Ventiladores de líquido refrig V7 / V35"
grupo: "Circuito frigorífico"
clave: electroventilador-condensador
area: climatizacion
sistema: "circuito-frigorifico"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 25"
relacionados: ["unidad-control-aire-acondicionado", "condensador"]
palabras: ["V7", "V35", "electroventilador", "1ª velocidad", "2ª velocidad", "resistencia previa"]
---

## Misión

Generar un flujo forzado de aire a través del condensador y del radiador para enfriar el fluido frigorífico R134a y el líquido refrigerante del motor. (pág. 25).

## Tipos y características

Dos electroventiladores independientes montados en el frontal del vano motor, cada uno con motor eléctrico de dos velocidades. (pág. 25).

## Principio de funcionamiento

- 1ª velocidad: Se activa a través de una resistencia eléctrica integrada en el canalizador. Se alimenta por la unidad J293 (al conectar el compresor) o por el conmutador térmico F18 al alcanzar 95 ºC. (págs. 25, 29).
- 2ª velocidad: Se alimenta directamente con 12 V sin resistencia desde la unidad J293 cuando la presión en el circuito frigorífico supera 16 bares (vía F129/G65) o la temperatura del motor supera 105 ºC (vía F18). (págs. 25, 29).

## Valores de trabajo

- Alimentación: 12 V CC.
- Conexión 1ª velocidad: señal de compresor o t ºC motor = 95 ºC.
- Conexión 2ª velocidad: P frigorífica > 16 bares o t ºC motor = 105 ºC. (págs. 25, 29).

## Anomalías frecuentes

Resistencia de la 1ª velocidad cortada, escobillas quemadas, fusible principal fundido en el portafusibles de la batería. (pág. 25).

## Comportamiento en avería

No existe función sustitutiva. El fluido frigorífico sube drásticamente de presión por falta de condensación, provocando la desconexión del compresor por alta presión (32 bares). (págs. 16, 25).
