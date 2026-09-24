---
id: ssc.presostato.conmutador-de-presion
modulo: ssc
unidad: clima
nt: 649
tipo: elemento
clase: componente
titulo: "Conmutador de presión para el aire acondicionado"
codigo: "F129"
menu: "Conmutador de presión para el  F129"
grupo: "Circuito frigorífico"
clave: presostato
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
fuentes: "Conmutador de presión.pdf, págs. 16-17"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador", "compresor"]
palabras: ["F129", "diésel", "alta presión", "baja presión", "presión media", "velocidad ventilador"]
---

## Misión

Detectar la presión en el circuito frigorífico del autoclima en motores diésel para verificar que se mantiene dentro de los límites admisibles de funcionamiento y gestionar la activación del compresor y de las velocidades del ventilador del radiador. (págs. 16-17)

## Tipos y características

Se instala en el circuito frigorífico junto a la válvula de expansión en vehículos con motor diésel. Se compone internamente de dos interruptores:
- Interruptor de presión máxima o mínima (normalmente cerrado).
- Interruptor de presión media (normalmente abierto). (pág. 16)

## Principio de funcionamiento

- Interruptor de presión máxima o mínima: Recibe la señal de conexión del compresor enviada por la unidad de control del autoclima. Estando cerrado, deja pasar la señal hacia la unidad de control del aire acondicionado, la cual conecta el compresor y activa la 1ª velocidad del ventilador del radiador. Si la presión sale del margen admisible, el interruptor se abre e interrumpe la corriente.
- Interruptor de presión media: Está conectado directamente a positivo de contacto (borne 15) y envía su señal a la unidad de control del aire acondicionado. Al cerrar por aumento de presión, la unidad activa la 2ª velocidad del ventilador del radiador. (págs. 16-17)

## Valores de trabajo

- Interruptor de presión máxima o mínima (normalmente cerrado): abre al detectar una presión superior a 32 bar (presión máxima) o inferior a 2 bar (presión mínima).
- Interruptor de presión media (normalmente abierto): cierra al alcanzar una presión aproximada de 16 bar. (pág. 16)

## Comportamiento en avería

No dispone de función sustitutiva. (pág. 17)

## Imágenes requeridas

- Ubicación del conmutador de presión F129 junto a la válvula de expansión — Fuente: Conmutador de presión.pdf, pág. 16
