---
id: ssc.calefactor-independiente.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 845
tipo: elemento
clase: componente
titulo: "Unidad de control para calefacción adicional y calefactor"
codigo: "J364"
menu: "Unidad de control para calefac J364"
grupo: "Calefacción"
clave: calefactor-independiente
area: climatizacion
sistema: "calefaccion"
forma_parte_de: calefaccion-independiente
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 1, 131-138"
relacionados: ["bomba-dosificadora-combustible", "bujia-precalentamiento-calefaccion", "turbina-aire-combustion"]
palabras: ["J364", "Hydronic II-SF", "Eberspächer", "UCE calefacción", "conector de 14 polos", "autodiagnóstico"]
---

## Misión

Gobernar de forma autónoma el proceso de combustión, controlar los sensores térmicos y de llama, e integrar la calefacción independiente en la red de datos del vehículo. (págs. 3, 136)

## Tipos y características

Módulo electrónico integrado físicamente en la carcasa superior del propio calefactor de agua (Eberspächer Hydronic II-SF), situado en el pasarruedas delantero derecho. Existen versiones específicas para motores de gasolina y diésel. (págs. 1, 123, 136)

## Principio de funcionamiento

Procesa las órdenes recibidas por el bus CAN desde la pantalla del MMI o la antena de radiofrecuencia R64. Evalúa las señales de los sensores internos de temperatura (G18, G587) y del guardallamas (G64) para alimentar secuencialmente la bujía Q9, la turbina V6, la bomba dosificadora V54, la bomba de recirculación V55 y la válvula N279. (págs. 71-76, 136)

## Valores de trabajo

- Tensión de alimentación: 12 V de corriente continua (Borne 30) mediante conector de 2 polos. (pág. 136)
- Conexión de señales: conector de 14 polos para sensores/actuadores internos y conector de 6 polos para la red del vehículo. (pág. 136)
- Límite de desconexión por sobrecalentamiento de la placa electrónica interna: 130 ºC. (pág. 55)

## Anomalías frecuentes

Bloqueo de seguridad tras 3 intentos fallidos de arranque consecutivos por falta de combustible o por registrar temperaturas internas superiores a 130 ºC en su placa electrónica. (págs. 8, 55)

## Comportamiento en avería

Inoperatividad total de la calefacción independiente, memorizándose el fallo y requiriendo la anulación del bloqueo a través del canal de adaptación 42 con el equipo VAS 5051. (págs. 8, 58)

## Cómo comprobarlo

Consultar la memoria de averías en la dirección "18 - Calefacción adicional/independiente", evaluar los bloques de valores de medición del 001 al 023 e iniciar la diagnosis de actuadores. (págs. 8, 10, 27-55)

## Mantenimiento

Inscribir el año de la primera puesta en servicio en la etiqueta adhesiva duplicada del vano motor al sustituir la unidad. (págs. 1, 127)

## Imágenes requeridas

- Cuadro de montaje del calefactor mostrando la unidad de control J364 y la turbina de aire de combustión V6 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 136
