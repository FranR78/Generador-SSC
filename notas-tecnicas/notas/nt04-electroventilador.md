---
id: ssc.clima.ventilador-electrico-del-condensador
modulo: ssc
unidad: clima
nt: 4
titulo: Ventilador eléctrico del condensador
codigo: Sin código documentado
menu: Electroventilador
grupo: Circuito frigorífico
ubicacion: Frente al condensador, o detrás del radiador en el compartimento motor
fuentes: AA Automoción (Hella), págs. 97-99
---

## Misión
Proporcionar el flujo de aire necesario a través del condensador para garantizar la
condensación del refrigerante **cuando el vehículo está parado o circula a baja velocidad**.

## Principio de funcionamiento
Motor eléctrico de 12 V o 24 V que convierte energía eléctrica en rotación. Dos montajes:

| Montaje | Modo | Descripción |
|---|---|---|
| Frontal, delante del condensador | «Empujando» | Aspira aire exterior y lo empuja hacia el condensador |
| Compartimento motor, tras el radiador | «Aspiración» | Aspira el aire exterior a través del condensador |

También puede accionarse por correa o por embrague viscoso (Visco), que siempre trabajan en
aspiración.

## Características
- Señal: **digital ON/OFF** o de velocidad escalonada, gobernada por presostato, unidad de
  control o termocontacto.
- Equipado con carcasa colectora, canalizador de flujo y rejilla de protección.
- Dos alternativas de actuación: funcionamiento continuo mientras el A/A está conectado, o
  intermitente y escalonado según la alta presión.

## Valores de trabajo
Activación por presostato de tres funciones:

| Acción | Presión |
|---|---|
| Conexión | **14 a 17 kg/cm²** |
| Desconexión | **11 a 14 kg/cm²** |

## Anomalías frecuentes
- Motor eléctrico quemado o derivado; fusible fundido.
- Relé de mando agarrotado.
- Polaridad del cableado invertida tras una intervención: gira al revés.

## Comportamiento en avería
| Baja | Alta | Diagnóstico |
|---|---|---|
| 2,3 a 2,8 bar | Sobre 25 bar | No funciona: salta el presostato de máxima |
| 2,3 a 2,5 bar | Sobre 22 bar | Gira al revés por cableado invertido, y no para nunca |

## Cómo comprobarlo
**Herramienta:** multímetro y estación de manómetros.
**Puntos de medida:** conector eléctrico del electroventilador y su relé.

- Debe haber 12 V / 24 V en el conector al alcanzar los 14-17 bar de alta, o al activar el A/A.
- Comprobar visualmente que el flujo de aire va **del exterior hacia el motor**.

## Imágenes requeridas
- Las tres posibilidades de montaje (empujando / aspiración) y el embrague Visco — AA Automoción, págs. 97-98, Fig. 6.7.1 y 6.7.2
