---
id: ssc.conmutador-termico-ventilador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 196
tipo: elemento
clase: componente
titulo: "Conmutador térmico del ventilador"
codigo: "F18"
menu: "Conmutador térmico del ventila F18"
grupo: "Refrigeración del motor"
clave: conmutador-termico-ventilador
area: climatizacion
sistema: "refrigeracion-motor"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 19"
relacionados: ["electroventilador-condensador", "unidad-control-aire-acondicionado"]
palabras: ["F18", "termocontacto", "radiador", "95 ºC", "105 ºC", "1ª velocidad", "2ª velocidad"]
---

## Misión

Conectar directamente o solicitar a la unidad de aire acondicionado la activación de las velocidades del electroventilador en función de la temperatura del líquido refrigerante del motor. (pág. 19).

## Tipos y características

Termocontacto escalonado de doble escalón montado en la carcasa del radiador de líquido refrigerante. Consta de dos interruptores bimetálicos normalmente abiertos. (pág. 19).

## Principio de funcionamiento

- El primer interruptor cierra al alcanzar los 95 ºC de temperatura de líquido refrigerante, alimentando con positivo (30) directamente a los motores de los ventiladores para activar la 1ª velocidad. (pág. 19).
- El segundo interruptor cierra a los 105 ºC, enviando una señal de positivo (30) a la unidad de control del aire acondicionado J293, la cual activa la 2ª velocidad. (pág. 19).

## Valores de trabajo

- Cierre del primer interruptor (1ª velocidad): 95 ºC.
- Cierre del segundo interruptor (2ª velocidad): 105 ºC.
- Alimentación: Positivo directo de batería (borne 30). (pág. 19).

## Anomalías frecuentes

Incrustaciones de cal o suciedad que aíslan térmicamente la ampolla, agarrotamiento de contactos bimetálicos. (pág. 19).

## Comportamiento en avería

No tiene función sustitutiva. Si el termocontacto falla, el electroventilador no entrará por temperatura de motor, pudiendo producir sobrecalentamientos al ralentí o en retenciones. (pág. 19).
