---
id: ssc.regulacion-automatica.corte-compresor-motor.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 580
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Gestión de acoplamiento del compresor por la unidad de control del motor"
menu: "Gestión de acoplamiento del compresor "
grupo: "Control de climatización"
clave: regulacion-automatica
variante: corte-compresor-motor
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 18"
relacionados: ["compresor", "embrague-compresor", "unidad-control-climatizador"]
palabras: ["corte compresor", "plena carga", "arranque", "kick-down", "señal negativo"]
---

## Objeto

Inhibir la conexión del compresor de aire acondicionado durante fases críticas de funcionamiento del motor térmico para priorizar la potencia de propulsión o facilitar el arranque. (pág. 18)

## Fundamento

El compresor de aire acondicionado representa una carga mecánica considerable para el motor. La unidad de control del motor interrumpe el acoplamiento magnético mediante una señal de inactivación en situaciones de alta demanda dinámica o inestabilidad de revoluciones. (pág. 18)

## Desarrollo

La unidad de control del motor genera y envía una señal de masa (negativo) hacia la unidad del aire acondicionado J293 para desactivar el compresor en las siguientes circunstancias:
- Ausencia de señal de revoluciones del motor.
- Durante los primeros 10 segundos transcurridos tras el arranque del motor.
- Solicitud de plena aceleración (plena carga) a altas velocidades de circulación.
- Accionamiento de la función kick-down en vehículos equipados con cambio automático.

Al recibir esta señal de negativo, la unidad J293 interrumpe la alimentación de la bobina del acoplamiento magnético N25. (pág. 18)

## Valores de referencia

- Tiempo de inhibición tras el arranque del motor: 10 segundos. (pág. 18)

## Errores de concepto frecuentes

- Suponer que el desacoplamiento del compresor en aceleraciones intensas se debe a una avería del presostato o de la unidad del climatizador. (pág. 18)

## Imágenes requeridas

- Diagrama de bloques entre la unidad de control del motor, la unidad de climatización y la unidad J293 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 18
