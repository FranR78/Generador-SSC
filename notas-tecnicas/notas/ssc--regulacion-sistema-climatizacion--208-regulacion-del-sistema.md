---
id: ssc.regulacion-sistema-climatizacion.208-regulacion-del-sistema
modulo: ssc
unidad: clima
nt: 109
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación y protección del sistema de climatización"
menu: "Regulación y protección del sistema de"
grupo: "Control de climatización"
clave: regulacion-sistema-climatizacion
area: climatizacion
sistema: "control-climatizacion"
marca: "VW"
fuentes: "208. Regulación del Sistema.pdf, págs. 34-35"
relacionados: ["compresor", "electroventilador-condensador", "presostato", "transmisor-presion", "sensor-evaporador"]
palabras: ["vigilancia", "presiones de trabajo", "engelamiento evaporador", "mando manual", "elevación ralentí"]
---

## Objeto

Evitar alteraciones en las presiones de trabajo que puedan provocar daños en el circuito frigorífico y en el motor, previniendo al mismo tiempo el engelamiento del evaporador (pág. 34).

## Fundamento

Una unidad de control procesa la información enviada por los equipos de vigilancia del circuito de alta y baja presión y gestiona la conexión y desconexión periódica del compresor, así como la velocidad del ventilador para mantener la presión en valores normales (pág. 34).

## Desarrollo

En los sistemas con compresor no regulado, las señales de vigilancia permiten adaptar la activación del acoplamiento electromagnético N25 y del ventilador V7 a las necesidades de rendimiento frigorífico (pág. 34). Al conectar el conmutador de climatización E35, la unidad de control del motor J257 recibe la señal e incrementa el régimen de ralentí para compensar la carga mecánica del compresor (págs. 34-35).
El circuito básico de regulación de mando manual integra los siguientes componentes interconectados: conmutador E35, válvula de descarga de sobrepresión, conmutador de presión F129 (o transmisor de alta presión G65 en sistemas modernos), transmisor de temperatura del evaporador G153 (o conmutador E33), termoconmutador F18, relés J32 y J101, unidad de control del climatizador J301 (y/o unidad de control del ventilador J293) y unidad de control del motor J257 (págs. 34-35).

## Valores de referencia

- Umbrales de conmutación del termoconmutador F18: t1 = 95 ºC (escalón 1), t2 = 103 ºC (escalón 2) (pág. 35).
- Umbrales del conmutador de presión F129: P1 = 0,2 MPa (2 bar) / 3,2 MPa (32 bar); P2 = 1,6 MPa (16 bar) (pág. 35).

## Errores de concepto frecuentes

- Asumir que la activación del conmutador de climatización acciona el compresor sin que la unidad de control del motor intervenga para ajustar el ralentí (págs. 34-35).

## Imágenes requeridas

- Esquema general de la regulación del sistema de aire acondicionado manual con sus equipos de vigilancia, relés y unidades de control — Fuente: 208. Regulación del Sistema.pdf, págs. 34-35
