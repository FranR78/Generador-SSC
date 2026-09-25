---
id: ssc.sensor-temperatura-interior.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 815
tipo: elemento
clase: componente
titulo: "Termosensor del tablero de instrumentos G56"
codigo: "G56"
menu: "Termosensor del tablero de ins G56"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: unidad-control-climatizador
marca: "VW"
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 47"
relacionados: ["unidad-control-climatizador"]
palabras: ["G56", "V42", "aspiración de aire", "habitáculo", "NTC"]
---

## Misión

Medir la temperatura real del aire del habitáculo en la zona del cuadro de mandos para proporcionar la señal básica de regulación a la unidad de control. (pág. 47)

## Tipos y características

Resistencia con coeficiente de temperatura negativo (NTC) montada en el propio frontal del panel de mandos e indicación del climatizador E87. (pág. 47)

## Principio de funcionamiento

Para evitar mediciones erróneas causadas por el calor propio de la pantalla electrónica y de los circuitos integrados de la centralita, un pequeño motor eléctrico V42 acciona una turbina que aspira aire del habitáculo a través de la rejilla frontal, haciéndolo pasar directamente por el termistor G56. (pág. 47)

## Valores de trabajo

- Tipo de elemento sensible: resistencia NTC. (pág. 47)

## Anomalías frecuentes

Obstrucción de la rejilla de aspiración por acumulación de pelusa y polvo del habitáculo, o bloqueo mecánico de la turbina V42. (pág. 47)

## Comportamiento en avería

La unidad de control asume un valor supletorio interno para la temperatura del habitáculo, reduciendo la precisión de la regulación automática. (pág. 47)

## Cómo comprobarlo

Verificar si la turbina V42 gira al conectar el encendido y consultar el valor de temperatura leído en el bloque de valores de medición. (págs. 47, 71)

## Mantenimiento

Limpiar la rejilla de aspiración del frontal del panel con aire comprimido a baja presión. (pág. 47)

## Imágenes requeridas

- Módulo interior de la unidad de control mostrando la posición del sensor G56 y la turbina de aspiración V42 — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 47
