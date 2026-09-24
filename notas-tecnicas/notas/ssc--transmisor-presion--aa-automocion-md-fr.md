---
id: ssc.transmisor-presion.aa-automocion-md-fr
modulo: ssc
unidad: clima
nt: 496
tipo: elemento
clase: componente
titulo: "Transmisor de presión de alta"
menu: "Transmisor de presión de alta"
grupo: "Circuito frigorífico"
clave: transmisor-presion
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
fuentes: "AA AUTOMOCION MD FR.pdf, págs. 134-137"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador", "compresor"]
palabras: ["PWM", "cristal de silicio", "modulada en anchura de impulsos", "50 Hz"]
---

## Misión

Vigilar y medir continuamente la presión del fluido refrigerante en todo el ciclo de trabajo. Transforma la presión física en una señal digital PWM para que las UCEs de climatización y motor gestionen el ralentí, los escalones del electroventilador y la seguridad del compresor. (pág. 134, 135, 136)

## Tipos y características

Sensor electrónico piezoresistivo de nueva generación que sustituye a los presostatos mecánicos de contactos. Incorporado en la tubería rígida de Alta Presión. Alimentado con tensión continua por la UCE y equipado con un cristal de silicio y un microprocesador integrado. (pág. 134, 135, 136)

## Principio de funcionamiento

La presión del refrigerante se aplica contra un cristal de silicio, deformándolo mecánicamente y modificando su resistencia eléctrica. El microprocesador interno evalúa esta variación de resistencia y genera una señal de onda cuadrada modulada en anchura de impulsos (PWM) a una frecuencia fija de 50 Hz (período de 20 ms = 100 %).

## Valores de trabajo

Frecuencia fija de señal: 50 Hz (duración de período B = 20 ms).
- A presión baja de 1,4 bar (0,14 MPa): anchura del impulso A = 2,6 ms (13 % del período).
- A presión de 37 bar (3,7 MPa): anchura del impulso A = 18 ms (90 % del período). (pág. 137)

## Anomalías frecuentes

Cable de señal cortado o derivado a masa. Fallo del microprocesador interno o fisura en el cristal de silicio. (pág. 136)

## Comportamiento en avería

Si la UCE no recibe señal (ej. cable cortado), la unidad de control desconecta inmediatamente el compresor por seguridad. En la memoria de autodiagnóstico de la UCE del motor queda registrada la avería (por ej. en el grupo VAG: *00819 Transmisor de Alta presión: Señal muy baja*). (pág. 136)

## Cómo comprobarlo

Conectar un osciloscopio digital en el cable de señal del sensor. Verificar la presencia de una onda cuadrada de 50 Hz con período de 20 ms, comprobando que la anchura del impulso positivo varía proporcionalmente al subir o bajar la presión en la estación de manómetros (2,6 ms a 1,4 bar). (pág. 137, 138)

## Mantenimiento

Verificar la limpieza del conector eléctrico de 3 pines y reemplazar el sensor si la señal PWM permanece fija o ausente. (pág. 136)

## Imágenes requeridas

- Estructura interna del transmisor y oscilograma de la señal PWM de 50 Hz — Fuente: AA AUTOMOCION MD FR.pdf, pág. 136, 137
