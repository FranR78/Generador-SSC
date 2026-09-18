---
nt: 10
titulo: Presostato de mínima (válvula binaria)
codigo: Sin código documentado
menu: Presostato de mínima
grupo: Sensores de presión
ubicacion: Filtro deshidratador o tubería del circuito de alta presión
fuentes: AA Automoción (Hella), pág. 130, Fig. 7.2.1
---

## Misión
Proteger el compresor **interrumpiendo la alimentación del embrague electromagnético**
cuando la presión del refrigerante desciende por debajo de un valor mínimo de seguridad,
normalmente por una fuga de gas.

## Principio de funcionamiento
Un pequeño cilindro o membrana interna es empujado por la presión del refrigerante contra
un muelle de oposición de valor prefijado.

- Si la presión es suficiente, el cilindro se desplaza y **cierra** el circuito eléctrico.
- Si la presión cae por debajo del valor del muelle, el muelle se expande y **abre** los
  contactos, cortando la alimentación del embrague.

## Características
- Señal: **digital ON/OFF**, contactos normalmente abiertos.
- Dispone de **2 terminales** eléctricos.
- Conectado en serie con la línea de mando del relé del compresor y el termostato.
- Se usa normalmente en vehículos con ventilador **mecánico** para el radiador del motor.

## Valores de trabajo
Corte por baja presión: entre **1,5 y 3 kg/cm²** (cierra el circuito por encima de unos 2 bar).

## Anomalías frecuentes
- Contactos eléctricos fogueados o sulfatados.
- Fugas de refrigerante por la rosca de fijación o por el cuerpo del presostato.

## Comportamiento en avería
Si los contactos quedan abiertos por fallo interno **o por falta de refrigerante**, el
embrague no se conecta y el compresor no arranca.

## Cómo comprobarlo
**Herramienta:** multímetro (continuidad y tensión) y manómetros de la estación.
**Puntos de medida:** bornes de conexión eléctrica del presostato.

- Debe dar **continuidad (0 Ω)** si la presión de alta supera los 2-3 bar.
- Si hay presión correcta en el circuito pero no da continuidad, sustituir el presostato.

## Imágenes requeridas
- Presostato de mínima montado en el filtro deshidratador y su esquema eléctrico — AA Automoción, pág. 130, Fig. 7.2.1

## Advertencias
Protege frente a la falta de lubricación: con poco refrigerante en el circuito, este sería
incapaz de arrastrar el lubricante y el compresor podría agarrotarse.
