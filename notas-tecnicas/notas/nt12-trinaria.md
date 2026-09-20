---
id: ssc.clima.presostato-de-tres-funciones-valvula-trinaria
modulo: ssc
unidad: clima
nt: 12
titulo: Presostato de tres funciones (válvula trinaria)
codigo: F129
menu: Trinaria F129
grupo: Sensores de presión
aplicacion: [VW, Audi, Seat, Genérico taller]
ubicacion: Tubería o filtro deshidratador, siempre en la parte de alta presión
marca: ✦ FUSIONADO — 2 fuentes
fuentes: AA Automoción (Hella), págs. 133-134, Fig. 7.4.1 y 7.4.2 · Dashboard Sensores VAG, págs. 83, 88-91
---

## Misión
Agrupar **tres funciones de control en un solo componente**: protección por mínima presión,
protección por máxima presión y control de activación del electroventilador del condensador.

Se instala en vehículos con ventilador **eléctrico** para el radiador y donde se necesita
buena ventilación del condensador.

## Principio de funcionamiento
Aprovecha la deformación de membranas ante tres niveles de presión de contraste
independientes, para actuar sobre **dos pares de contactos**: uno para el circuito de
seguridad del compresor y otro para el relé del electroventilador.

## Características
- Señal: **digital ON/OFF** a través de dos circuitos independientes.
- Dispone de **4 terminales** eléctricos.
- Se conecta con el termostato, el embrague del compresor y el relé del electroventilador,
  alimentado por la batería.

## Valores de trabajo
| Función | Valor de contraste | Acción |
|---|---|---|
| Mínima | **2 a 3 kg/cm²** | Corta el embrague |
| Máxima | **25 a 27 kg/cm²** | Corta el embrague |
| Ventiladores: conexión | **14 a 17 kg/cm²** | Arranca los electroventiladores |
| Ventiladores: desconexión | **11 a 14 kg/cm²** | Los para al bajar la presión |

El control escalonado ahorra energía: el motoventilador solo arranca en semáforos, caravana
y ciudad a baja velocidad, evitando ruido y desgaste precoz.

## Discrepancias
Las dos fuentes no dan los mismos umbrales. La documentación de taller genérica indica
mínima 2-3 bar, máxima 25-27 bar y ventiladores 14-17 / 11-14 bar. La documentación VAG
para el F129 indica corte por baja **por debajo de 2 bar**, conexión de ventiladores en
escalón II a **16 bar** y corte por alta entre **24 y 32 bar**. Los rangos se solapan pero
no coinciden: **verifica siempre el tarado concreto del fabricante del vehículo** antes de
dar por buena o mala una lectura.

## Anomalías frecuentes
- Avería en los contactos de mando del ventilador: no conecta la velocidad.
- Descalibración de los muelles internos de contraste.
- El fallo por alta suele deberse a suciedad en el condensador u obturaciones; el fallo por
  baja, a fugas de fluido.

## Comportamiento en avería
Si falla el contacto del ventilador, el electroventilador no arranca y la alta presión sube
hasta los 25-27 bar, donde actuará el corte por máxima. Si fallan los contactos de mínima o
máxima, **el compresor queda inoperativo**.

## Cómo comprobarlo
**Herramienta:** multímetro en ohmímetro/voltímetro y estación de manómetros.
**Puntos de medida:** los dos pares de terminales del presostato.

- El par de seguridad debe dar continuidad **entre 3 y 25 bar**.
- El par del ventilador debe dar continuidad cuando la alta supere los **14-17 bar**.

## Imágenes requeridas
- Esquema eléctrico de conexiones y funcionamiento interno — AA Automoción, págs. 133-134, Fig. 7.4.1 y 7.4.2
- Diagrama de contactos eléctricos de la trinaria (1-2 y 3-4) — Dashboard Sensores, pág. 88
- Simbología del conmutador F129 en esquema eléctrico — Dashboard Sensores, pág. 83
