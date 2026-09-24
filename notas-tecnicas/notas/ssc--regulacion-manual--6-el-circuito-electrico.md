---
id: ssc.regulacion-manual.6-el-circuito-electrico
modulo: ssc
unidad: clima
nt: 393
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Climatización no regulada"
menu: "Climatización no regulada"
grupo: "Control de climatización"
clave: regulacion-manual
area: climatizacion
sistema: "control-climatizacion"
fuentes: "6. EL CIRCUITO ELÉCTRICO.pptx, págs. 3-10, 16-18, 26-30"
relacionados: ["sensor-evaporador", "unidad-control-climatizador", "compresor", "electroventilador-condensador"]
palabras: ["climatizacion manual", "a/a on", "a/a ciclo", "a/a aut", "rele compresion"]
---

## Objeto

Regular manualmente el encendido del aire acondicionado y la ventilación del habitáculo sin gestión automática de la temperatura ni de la posición de las trampillas. (págs. 3, 18)

## Fundamento

El conductor demanda el encendido mediante mandos mecánicos o eléctricos. La conexión del compresor requiere la autorización simultánea del usuario, de la sonda de temperatura del evaporador y de la unidad de control del motor. (págs. 4-10, 16, 26-27)

## Desarrollo

El sistema maneja tres estados de señal para autorizar la excitación del relé del compresor:
1. A/A ON: Solicitud directa del usuario al pulsar el botón del cuadro de mandos. La unidad de control del motor incrementa el régimen de ralentí para compensar el esfuerzo mecánico del compresor. (págs. 10, 26, 27)
2. A/A CICLO: Puesta en marcha o parada del compresor comandada por la sonda de temperatura del evaporador. Solo se autoriza el funcionamiento con temperaturas superiores a 4 ºC para evitar la congelación del intercambio. (págs. 10, 27)
3. A/A AUT: Autorización final emitida por la unidad de control del motor (UCE) tras verificar las condiciones de carga, aceleración y estabilidad del motor. (págs. 10, 26, 27)

El circuito eléctrico de potencia integra conmutadores de ventilación de varias velocidades por resistencias en serie, presostato tri-función de seguridad, termostato de agua del motor y relé de mando del electroventilador. (págs. 5, 7, 9, 28-30)

## Valores de referencia

- Temperatura mínima de activación en evaporador (A/A CICLO): superior a 4 ºC. (págs. 10, 27)

## Errores de concepto frecuentes

Pensar que pulsar el botón A/A acopla directamente el compresor. La conexión real depende de que el evaporador esté por encima de 4 ºC y de que la UCE de motor confirme la autorización A/A AUT. (págs. 10, 27)
