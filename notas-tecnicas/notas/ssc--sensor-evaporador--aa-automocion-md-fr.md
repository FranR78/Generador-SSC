---
id: ssc.sensor-evaporador.aa-automocion-md-fr
modulo: ssc
unidad: clima
nt: 498
tipo: elemento
clase: componente
titulo: "Interruptor termostático"
menu: "Interruptor termostático"
grupo: "Control de climatización"
clave: sensor-evaporador
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "AA AUTOMOCION MD FR.pdf, págs. 139-141"
relacionados: ["evaporador", "compresor", "embrague-compresor"]
palabras: ["termostato", "tubo capilar", "congelación", "sonda NTC"]
---

## Misión

Detectar la temperatura del evaporador para conectar y desconectar el embrague electromagnético del compresor de forma cíclica, regulando la potencia frigorífica y evitando la congelación del evaporador. (pág. 138, 139)

## Tipos y características

Dos tecnologías principales:
1. Termostato mecánico de tubo capilar: provisto de un tubo capilar de cobre insertado entre las aletas del evaporador que contiene un gas sensible, fuelle/membrana y muelle de tarado ajustable.
2. Termostato electrónico: utiliza una sonda NTC sensible a la temperatura conectada a un módulo electrónico que conmuta la alimentación del compresor. (pág. 139, 142)

## Principio de funcionamiento

En el mecánico, la variación de volumen del gas del capilar por efecto de la temperatura hace comprimir o expandir el fuelle (fuerza Fp) contra la fuerza del muelle de regulación (Fm), accionando una palanca que abre o cierra los contactos eléctricos.
Desconecta el compresor cuando la temperatura desciende a valores próximos a la congelación y lo vuelve a conectar cuando la temperatura sube.

## Valores de trabajo

- Temperatura de desconexión del compresor: aproximadamente a -1,5 ºC (o +1 ºC en electrónicos).
- Temperatura de reconexión del compresor: aproximadamente a +3 ºC superior a la de desconexión. (pág. 139, 142)

## Anomalías frecuentes

Fuga de gas del tubo capilar o rotura del mismo. Sonda NTC suelta o desplazada de las aletas del evaporador. Contactos eléctricos fogueados. (pág. 139)

## Comportamiento en avería

- Si queda averiado en cerrado: El compresor no desconecta nunca y el evaporador se congela completamente, bloqueando la salida de aire frío.
- Si queda abierto o sin gas en el capilar: El compresor no arranca. (pág. 139, 164)

## Cómo comprobarlo

Con manómetros conectados y aire acondicionado a máximo rendimiento, verificar si el compresor conecta y desconecta cíclicamente a las presiones de baja equivalentes a las temperaturas de corte (-1,5 ºC / +3 ºC). Con un ohmímetro, verificar la continuidad entre sus bornes según la temperatura del capilar. (pág. 139, 151)

## Mantenimiento

Asegurar que el bulbo/capilar esté correctamente insertado entre las aletas de la batería evaporadora sin doblarlo. (pág. 139)

## Imágenes requeridas

- Esquema del funcionamiento del termostato de tubo capilar y sonda NTC — Fuente: AA AUTOMOCION MD FR.pdf, pág. 139, 142
