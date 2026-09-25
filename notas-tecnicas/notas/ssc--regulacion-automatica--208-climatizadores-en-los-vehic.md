---
id: ssc.regulacion-automatica.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 814
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación automática de temperatura Climatronic"
codigo: "J255 / E87"
menu: "Regulación automática de tempe J255 / E87"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
marca: "VW"
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 42-46"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["Climatronic", "J255", "E87", "regulación electrónica", "autodiagnóstico", "CAN-Bus"]
---

## Objeto

Mantener de forma automática e invariable la temperatura del habitáculo seleccionada por los ocupantes sin necesidad de reajustes manuales. (págs. 42-43)

## Fundamento

El Climatronic procesa mediante un microprocesador integrado en la unidad de control J255/E87 las señales de múltiples sensores térmicos y ópticos, calculando la posición exacta de los servomotores y la tensión de alimentación de la turbina de aire fresco. (págs. 43-45)

## Desarrollo

La unidad de control recibe datos de la temperatura interior (G56), exterior (G17, G89), aire tratado en reposapiés (G192) e radiación solar (G107). Asimismo, recibe por CAN-Bus o líneas suplementarias el régimen del motor, la velocidad del vehículo y el tiempo de parada.
Un microprocesador compara continuamente las magnitudes medidas con la consigna teórica elegida. Como respuesta, envía señales de mando a los servomotores paso a paso (V68, V70, V71, V85) y al regulador electrónico de la turbina (J126) para ajustar el caudal, la mezcla de aire frío/caliente y la distribución por los difusores. (págs. 43-46)

## Valores de referencia

- Margen de regulación de temperatura seleccionable: de 18 ºC a 29 ºC (o de 16 ºC a 29,5 ºC según versión). (págs. 46, 56)

## Errores de concepto frecuentes

- Asumir que ante el fallo de un sensor el sistema queda inoperativo, omitiendo que la unidad de control calcula valores supletorios fijos para mantener el servicio de emergencia. (págs. 48-50)

## Imágenes requeridas

- Cuadro general del sistema Climatronic con la interconexión entre sensores, la unidad de control J255 y los actuadores — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 44-45
