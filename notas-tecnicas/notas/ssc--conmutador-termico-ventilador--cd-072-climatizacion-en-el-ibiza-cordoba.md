---
id: ssc.conmutador-termico-ventilador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 196
tipo: elemento
clase: componente
titulo: "Conmutador térmico del ventilador del radiador"
codigo: "F18"
menu: "Conmutador térmico del ventila F18"
grupo: "Refrigeración del motor"
clave: conmutador-termico-ventilador
area: motor
sistema: "refrigeracion-motor"
forma_parte_de: circuito-refrigeracion-motor
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 19"
relacionados: ["electroventilador-condensador", "unidad-control-climatizador"]
palabras: ["F18", "95 ºC", "105 ºC", "termoswitch", "1ª velocidad", "2ª velocidad"]
---

## Misión

Conectar directamente o gobernar las dos velocidades de los electroventiladores según la temperatura del líquido refrigerante del motor. (pág. 19)

## Tipos y características

Termostato térmico doble normalmente abierto roscado en el depósito del radiador de líquido refrigerante. (pág. 19)

## Principio de funcionamiento

- **Primer conmutador interno:** Cierra sus contactos cuando la temperatura del líquido refrigerante alcanza 95 ºC, enviando corriente de positivo directo (borne 30) a los motores de los ventiladores para activar la 1ª velocidad. (pág. 19)
- **Segundo conmutador interno:** Cierra sus contactos cuando la temperatura alcanza 105 ºC, enviando una señal de positivo (borne 30) a la unidad de control del aire acondicionado J293 para activar la 2ª velocidad. (págs. 19, 29)

## Valores de trabajo

- Temperatura de cierre de 1ª velocidad: 95 ºC. (pág. 19)
- Temperatura de cierre de 2ª velocidad: 105 ºC. (pág. 19)

## Comportamiento en avería

- Si no cierra el primer contacto, los ventiladores no se activan por temperatura de motor a 95 ºC. (pág. 19)
- Si no cierra el segundo contacto, se pierde el escalonamiento a 2ª velocidad por sobrecalentamiento del motor a 105 ºC. (págs. 19, 29)

## Cómo comprobarlo

Comprobación de continuidad eléctrica entre bornes en baño térmico a 95 ºC y 105 ºC. (pág. 19)

## Imágenes requeridas

- Conmutador térmico F18 montado en el radiador de refrigerante — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 19
