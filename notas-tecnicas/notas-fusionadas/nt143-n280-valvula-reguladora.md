---
id: ssc.clima.valvula-reguladora-n280
modulo: ssc
unidad: clima
nt: 143
tipo: elemento
titulo: Válvula reguladora para compresor N280
codigo: N280
menu: N280
grupo: POR CLASIFICAR
ubicacion: Montada sobre el propio compresor, en su culata
aplicacion:
  - VW Touareg (Climatronic)
  - SEAT Tarraco
fuentes: VW SSP 301 «Climatización en el Touareg», esquema eléctrico del Climatronic
---

## Misión
Regula la cilindrada del compresor autorregulado, de modo que el caudal de agente frigorífico se
ajusta a la demanda de frío sin conectar y desconectar el compresor continuamente. Es la pieza que
sustituye al embrague electromagnético en los compresores de cilindrada variable.

## Principio de funcionamiento
La unidad de control del Climatronic **J255** la excita con una señal modulada. Al variar la corriente
que recibe la bobina, la válvula modifica la presión en el cárter del compresor, y esa presión cambia
la inclinación del plato oscilante. Más inclinación, más carrera de los pistones y más caudal.

## Características
Válvula electromagnética de mando proporcional, mandada desde J255. En el Touareg, el compresor que
regula es del tipo autorregulado de 7 cilindros. En los motores Diesel V10-TDI y R5-TDI el compresor
no se acciona directamente: va a través de un embrague montado entre la bomba de la servodirección y
el propio compresor.

## Valores de trabajo
No documentado en fuentes. Las fuentes describen la función de la válvula pero no dan la resistencia
del bobinado ni los valores de la señal de mando.

**Inferido:** un bobinado de este tipo suele quedar entre 8 y 14 Ω medido con el contacto quitado y
el conector desembornado. Ese rango está puesto a mano y **hay que sustituirlo por una medida real**
en cuanto se pueda hacer sobre un vehículo.

## Anomalías frecuentes
Bobinado cortado o en cortocircuito, conector con humedad o mal contacto, y corte del cable de mando
entre J255 y la válvula. Al ir montada sobre el compresor, trabaja con vibración y temperatura.

## Comportamiento en avería
Sin mando válido, el compresor se queda a cilindrada mínima y no enfría, aunque el compresor gire y
el circuito tenga carga correcta. El cliente lo cuenta como «no echa frío», sin ruidos raros y con el
ventilador del habitáculo funcionando con normalidad.

## Cómo comprobarlo
1. Resistencia del bobinado entre los dos bornes de la válvula, **con el contacto quitado y el
   conector desembornado**. Con el conector puesto se mide el resto del circuito en paralelo y el
   valor no sirve.
2. Continuidad del cable de mando entre el borne de salida de J255 y el borne de la válvula, en las
   mismas condiciones.
3. Con el motor en marcha y la climatización pedida, comprobar que J255 da mando. Un valor de tensión
   fijo, sin variación al cambiar la demanda, apunta a la unidad de control y no a la válvula.
