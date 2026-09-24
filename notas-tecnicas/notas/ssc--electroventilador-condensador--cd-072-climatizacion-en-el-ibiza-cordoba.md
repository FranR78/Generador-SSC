---
id: ssc.electroventilador-condensador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 204
tipo: elemento
clase: componente
titulo: "Electroventiladores del radiador y condensador"
codigo: "V7 / V35"
menu: "Electroventiladores del radiad V7 / V35"
grupo: "Refrigeración del motor"
clave: electroventilador-condensador
area: motor
sistema: "refrigeracion-motor"
forma_parte_de: circuito-refrigeracion-motor
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 25"
relacionados: ["conmutador-termico-ventilador", "unidad-control-climatizador"]
palabras: ["V7", "V35", "dos velocidades", "resistencia serie", "canalizador"]
---

## Misión

Forzar el paso de aire a través del condensador y del radiador para condensar el gas frigorífico y enfriar el líquido refrigerante del motor. (pág. 25)

## Tipos y características

Pareja de motores eléctricos independientes de dos velocidades montados sobre el canalizador de aire posterior del radiador. (pág. 25)

## Principio de funcionamiento

- **Primera velocidad:** Al recibir positivo desde el conmutador térmico F18 (a 95 ºC) o desde la unidad J293 (al conectar el compresor), la corriente pasa a través de una resistencia eléctrica integrada reduciendo la velocidad de giro. (págs. 25, 29)
- **Segunda velocidad:** Al recibir positivo desde la unidad J293 (por presión > 16 bares en F129/G65 o por temperatura > 105 ºC en F18), la corriente alimenta directamente los devanados del motor a máxima potencia. (págs. 25, 29)

## Valores de trabajo

- Tensión de alimentación: 12 V. (pág. 25)

## Comportamiento en avería

- Elevación anómala de la presión de alta en el circuito frigorífico con falta de rendimiento frigorífico al ralentí. (pág. 25)
- Sobrecalentamiento del líquido refrigerante del motor térmico. (pág. 25)

## Cómo comprobarlo

Mediante excitación directa con corriente de batería o verificando la respuesta en la función "03" de diagnosis de actuadores de la unidad del motor. (págs. 25, 36)

## Imágenes requeridas

- Módulo con los dos ventiladores independientes V7 y V35 instalados sobre el canalizador — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 25
