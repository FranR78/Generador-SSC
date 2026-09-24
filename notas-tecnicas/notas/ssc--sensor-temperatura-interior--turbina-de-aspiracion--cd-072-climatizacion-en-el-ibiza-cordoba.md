---
id: ssc.sensor-temperatura-interior.turbina-de-aspiracion.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 202
tipo: elemento
clase: componente
titulo: "Motor para la turbina del transmisor de temperatura interior"
codigo: "V42"
menu: "Motor para la turbina del tran V42"
grupo: "Control de climatización"
clave: sensor-temperatura-interior
variante: turbina-de-aspiracion
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 24"
relacionados: ["sensor-temperatura-interior", "unidad-control-climatizador"]
palabras: ["V42", "turbina", "G56", "rotor imantado", "placa electrónica"]
---

## Misión

Aspirar y forzar un flujo continuo de aire procedente del habitáculo hacia la resistencia NTC del sensor G56 para asegurar mediciones térmicas precisas y sin estancamiento. (pág. 24).

## Tipos y características

Pequeño motor eléctrico integrado con el transmisor G56. Consta de un estator, un rotor imantado acoplado a la turbina y una placa electrónica de gestión interna. (pág. 24).

## Principio de funcionamiento

La unidad J255 alimenta el motor V42 con positivo y negativo siempre que la línea de encendido (borne 15) esté conectada. La placa electrónica del motor gobierna el giro y detecta posibles fallos en el motor. (pág. 24).

## Valores de trabajo

Alimentación: Borne 15 (12 V CC). (pág. 24).

## Anomalías frecuentes

Bloqueo del rotor por acumulación de pelusa o polvo del habitáculo, fallo de los componentes de la placa electrónica integrada. (pág. 24).

## Comportamiento en avería

Al detectar una avería en el motor V42, la unidad del autoclima aplica factores de corrección matemáticos a la temperatura medida por el transmisor G56 para simular un valor aproximado al real. (pág. 24).

## Mantenimiento

Limpieza periódica del conducto de aspiración para evitar el agarrotamiento de la turbina por suciedad. (pág. 24).
