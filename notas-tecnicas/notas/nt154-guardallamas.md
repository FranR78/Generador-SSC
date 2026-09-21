---
id: ssc.sin-clasificar.guardallamas
modulo: ssc
unidad: clima
nt: 154
titulo: "Guardallamas"
codigo: "G64"
ubicacion: "Insertado en el interior de la cámara de combustión del calefactor [87, 88]"
aplicacion: "Monitorización térmica de la llama en la calefacción independiente [46, 87]"
menu: "Guardallamas G64"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Detectar la presencia de llama en la cámara de combustión e informar a la UCE para autorizar la desconexión de la bujía -Q9- y mantener la inyección de combustible [46, 75].

## Principio de funcionamiento

Sensor térmico foto-resistivo o de conductividad térmica cuya resistencia cambia en función de la temperatura radiada por la llama de la combustión [46, 89].

## Características

Sonda térmica resistente a altas temperaturas con cableado de conexión hacia las celdas 1 y 2 del conector de 14 polos [37, 88, 89].

## Valores de trabajo

- Rango de medida de resistencia válido: de 780 Ω a 3.040 Ω (a temperatura de funcionamiento) [89].  
- Umbral de interrupción (avería): Resistencia superior a 3.040 Ω [89].  
- Umbral de cortocircuito (avería): Resistencia inferior a 780 Ω [89].

## Anomalías frecuentes

Incrustación de hollín en la superficie de la sonda, interrupción del hilo sensor o cortocircuito por deformación térmica [89].

## Comportamiento en avería

Si el guardallamas registra un valor fuera de rango durante el arranque, la UCE realiza un único intento de repetición; si persiste, interrumpe el paso de combustible y desactiva el calefactor [86, 87, 90].

## Cómo comprobarlo

Expulsar las celdas 1 y 2 del conector de 14 polos y medir con un polímetro la resistencia de la sonda a la temperatura ambiental momentánea (debe situarse estrictamente entre 780 Ω y 3.040 Ω) [88, 89].
