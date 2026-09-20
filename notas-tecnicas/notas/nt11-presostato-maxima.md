---
id: ssc.clima.presostato-de-maxima-valvula-binaria
modulo: ssc
unidad: clima
nt: 11
titulo: Presostato de máxima (válvula binaria)
codigo: Sin código documentado
menu: Presostato de máxima
grupo: Sensores de presión
ubicacion: Lado de alta presión, frecuentemente en el filtro deshidratador, opuesto al de mínima
fuentes: AA Automoción (Hella), pág. 131
---

## Misión
Proteger tuberías, compresor y componentes contra **sobrepresiones peligrosas**,
interrumpiendo la alimentación eléctrica del embrague electromagnético en caso de anomalía.

## Principio de funcionamiento
Funcionamiento electromecánico **inverso al de mínima**. Los contactos se mantienen
normalmente cerrados; cuando la presión sobre la membrana supera la fuerza de contraste del
muelle, la membrana se desplaza y **abre** el circuito, desconectando el compresor.

## Características
- Señal: **digital ON/OFF**, contactos normalmente cerrados (NC).
- **2 terminales** eléctricos, en serie con la alimentación del embrague.

## Valores de trabajo
Corte por alta presión: abre el circuito entre **25 y 27 kg/cm²**.

## Anomalías frecuentes
- Contactos agarrotados o quemados.
- Fallo en la membrana interna de presión.

## Comportamiento en avería
Si queda atascado en abierto, **el compresor no se activará nunca**. Si salta por
sobrepresión real (electroventilador parado o condensador sucio), desconecta el compresor de
forma cíclica o permanente para evitar roturas de canalizaciones.

## Cómo comprobarlo
**Herramienta:** multímetro (resistencia) y manómetro de alta presión.
**Puntos de medida:** terminales del presostato.

- Debe dar **continuidad (0 Ω)** en condiciones normales, por debajo de 25 bar.
- Si a presiones normales marca circuito abierto (resistencia infinita), sustituirlo.

## Imágenes requeridas
- Ubicación y circuito eléctrico asociado del presostato de máxima — AA Automoción, pág. 131
