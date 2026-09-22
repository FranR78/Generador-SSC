---
id: ssc.clima.sensor-de-refrigerante-del-motor
modulo: ssc
unidad: clima
nt: 909
tipo: elemento
titulo: Sensor / conmutador de temperatura del refrigerante del motor
codigo: No documentado en fuentes
menu: Temperatura del refrigerante (protección del clima)
clave: sensor-de-refrigerante-del-motor
grupo: Sensores y protección
ubicacion: Roscado al circuito de refrigeración del motor (culata o caja del termostato)
aplicacion:
  - Protección del compresor frente al sobrecalentamiento del motor
fuentes: POR COMPLETAR
fusionadas:
  - 292
  - 352
  - 386
---

## Misión
Vigilar la temperatura del líquido refrigerante del motor y **desconectar el compresor de
climatización** cuando alcanza un valor crítico, para aliviar carga mecánica al motor.

## Principio de funcionamiento
Dos implementaciones según el vehículo:

- **Conmutador bimetálico** (corte directo). Permanece cerrado en condiciones normales; si la
  temperatura supera el umbral, abre sus contactos e interrumpe el circuito del acoplamiento del
  compresor (p. ej. N25) sin pasar por la centralita.
- **Sonda analógica** (corte por centralita). Un captador térmico transmite la temperatura del motor a
  la unidad de climatización; si es excesiva, es la centralita la que ordena desacoplar el compresor.

## Características
Sensor térmico de rosca directa al circuito de refrigeración del motor. En la versión de conmutador,
el umbral viene tarado de fábrica; en la de sonda, el umbral lo decide la centralita.

## Valores de trabajo
- **Teórico OEM:** desconexión de seguridad a **118–119 ºC**; reconexión de servicio a **110–112 ºC**
  (los dos manuales dan 119/112 y 118/110 según fabricante).

## Anomalías frecuentes
Descalibración del bimetal, sedimentos de cal sobre la cápsula sensible, o deriva de la sonda.

## Comportamiento en avería
El climatizador se desconecta con frecuencia en verano aunque el motor no esté sobrecalentado (corte
prematuro), o bien **no** corta el compresor cuando el motor sube de temperatura (protección perdida).

## Cómo comprobarlo
Comprobar continuidad en frío (el conmutador debe dar **cerrado**) y verificar la apertura en torno a
**118–119 ºC**. En la versión de sonda, leer el valor de temperatura del motor en la centralita y
contrastarlo con la temperatura real.

## Notas fusionadas
Consolida NT292 y NT352 (conmutadores bimetálicos) y NT386 (sonda analógica). Las fichas originales se
conservan en `notas-fusionadas/`.
