---
id: ssc.clima.valvula-reguladora-n280
modulo: ssc
unidad: clima
nt: 900
tipo: elemento
titulo: Válvula reguladora del compresor N280
codigo: N280
menu: N280
clave: valvula-reguladora-n280
grupo: Regulación del compresor
ubicacion: Sobre el propio compresor, en la culata o en la tapa posterior (compresores Denso de cilindrada variable)
aplicacion:
  - VW Touareg (Climatronic)
  - SEAT Tarraco
  - Compresores autorregulados de plato oscilante
fuentes: VW SSP 301 «Climatización en el Touareg»; esquema del Climatronic; LA CLIMATIZACIÓN.pdf, pág. 63
fusionadas:
  - 143
  - 169
  - 336
  - 484
---

## Misión
Regular la cilindrada del compresor autorregulado para que el caudal de refrigerante se ajuste a la
demanda de frío sin conectar y desconectar el compresor. Es la pieza que sustituye al embrague
electromagnético en los compresores de cilindrada variable.

## Principio de funcionamiento
Actúa modificando la presión en el cárter del compresor: esa presión cambia la inclinación del plato
oscilante y, con ella, la carrera de los pistones (más inclinación → más caudal). Hay dos formas de
mandarla, según el compresor:

- **Mando eléctrico (N280).** Electroválvula proporcional excitada por señal PWM. La UCE de red de a
  bordo **J519** genera el pulso a partir de la corriente que calcula la unidad del Climatronic
  **J255**. Al subir la corriente, la válvula cierra el paso entre alta presión y cárter, baja la
  presión interna y aumenta la carrera (plena carga); a 0 A abre, sube la presión del cárter y la
  carrera cae al mínimo.
- **Mando mecánico (autopilotada por presión).** Una válvula de cierre comunica el cárter con la baja
  presión (Pb). Si Pb sube, vence al muelle tarado y abre: la presión interna (Pi) cae y el plato
  aumenta la carrera. Si Pb baja, cierra y las fugas de los segmentos elevan Pi, reduciendo la
  carrera. Un vástago expuesto a la alta presión (Pa) limita la Pi máxima.

## Características
Electroválvula de solenoide de 2 vías con conector de 2 polos, integrada en el compresor (versión
N280). La versión mecánica consta de válvula de cierre, muelle de regulación tarado de fábrica, fuelle
metálico amortiguador, microfiltro de partículas, vástago superior y muelle de compensación.

## Valores de trabajo
- **Medido (osciloscopio / VCDS, versión N280):** señal PWM de **500 Hz** (período de 2 ms), corriente
  de control de **0 A a 0,65 A** y ancho de pulso del **0 % (Econ) al 80–100 % (Auto/LO)**. La
  corriente efectiva se lee en el bloque **001, campo 2** de J255.
- **Teórico OEM:** margen de regulación de cilindrada del **5 % al 100 %** de la carrera (≈ +2 % a
  +98 %). La posición de carrera nula no se alcanza nunca, para no dejar el compresor sin engrase.
- **Inferido (pendiente de medida real):** la resistencia del bobinado suele quedar entre **8 y 14 Ω**
  con el contacto quitado y el conector desembornado. Es un rango puesto a mano; **sustituir por una
  medida sobre vehículo** en cuanto se pueda.

## Anomalías frecuentes
Bobinado cortado o en cortocircuito; conector con humedad o mal contacto; corte del cable de mando
entre J519/J255 y la válvula; agarrotamiento de la aguja interna por limaduras; congelación del paso
por humedad en el circuito. Va montada sobre el compresor, así que trabaja con vibración y temperatura.

## Comportamiento en avería
Sin mando válido (0 A o corte), el compresor se queda a cilindrada mínima y no enfría aunque gire y el
circuito tenga carga correcta: alta y baja se igualan entre **4,5 y 6 bar**. Si se agarrota cerrada,
el compresor trabaja al 100 % de forma continua y **congela el evaporador**. El cliente lo cuenta como
«no echa frío», sin ruidos raros y con el ventilador del habitáculo normal.

## Cómo comprobarlo
1. **Resistencia del bobinado** entre los dos bornes de la válvula, con el contacto quitado y el
   conector desembornado. Con el conector puesto se mide el resto del circuito en paralelo y no sirve.
2. **Continuidad del cable de mando** entre el borne de salida de J519/J255 y la válvula.
3. **VCDS, bloque 001 de J255:** campo 1 (corriente teórica) y campo 2 (corriente efectiva) deben
   subir progresivamente hasta ~0,65 A al seleccionar «LO».
4. **Osciloscopio** entre las vías del conector: período constante de 2 ms (500 Hz) y variación del
   ancho de pulso con la demanda. Un valor fijo, sin variación, apunta a la unidad de control, no a la
   válvula.

## Notas fusionadas
Consolida NT143, NT169, NT336 y NT484 (Touareg/Tarraco y compresores Denso de cilindrada variable).
Las fichas originales se conservan en `notas-fusionadas/`.
