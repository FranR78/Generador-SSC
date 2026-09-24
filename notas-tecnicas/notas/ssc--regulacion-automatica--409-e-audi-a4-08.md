---
id: ssc.regulacion-automatica.409-e-audi-a4-08
modulo: ssc
unidad: clima
nt: 416
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Climatizador automático de confort"
codigo: "J255"
menu: "Climatizador automático de con J255"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "409_e         Audi A4 _08.pdf, págs. 64-66"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-temperatura-exterior", "sensor-calidad-aire", "sensor-humedad", "transmisor-presion"]
palabras: ["climatizador automatico", "una zona", "tres zonas", "confort plus", "bus lin", "can confort"]
---

## Objeto

Deshidratar y enfriar el aire del habitáculo garantizando el mantenimiento automático de las condiciones de confort térmico. (pág. 64)

## Fundamento

Combina un sistema de calefacción y ventilación con uno de refrigeración, controlado electrónicamente por la unidad de control para Climatronic J255 e interconectado mediante bus CAN Confort y bus LIN con sensores y servomotores. (págs. 64, 66)

## Desarrollo

El vehículo equipa de serie dos versiones de climatizador automático que se diferencian principalmente por su panel de mandos:
- Climatizador automático de confort de una zona (versión estándar).
- Climatizador automático de confort plus de tres zonas (versión opcional).

El grupo climatizador se compone de la carcasa para el intercambiador de calor, la carcasa de distribución de aire y un mecanismo de empuje que permite separar la carcasa del filtro de aire de la carcasa de aspiración.

La gestión de los servomotores de las chapaletas se realiza mediante una conexión en serie sobre el bus LIN con 4 pines por conector (Borne 30, LIN OUT, LIN IN, Borne 31).

En la arquitectura eléctrica, la unidad J255 no lee directamente todas las señales de los sensores; por ejemplo, el sensor de presión y temperatura G395 y el sensor de humedad G355 procesan sus datos en la unidad de control de la red de a bordo J519 y en la unidad central de confort J393 respectivamente, transmitiéndolos a la J255 a través del bus CAN. (págs. 64-66)

## Valores de referencia

- Conexión del conector de servomotores en bus LIN: A1 (Borne 31), A2 (LIN IN), A3 (LIN OUT), A4 (Borne 30). (pág. 64)

## Errores de concepto frecuentes

Pensar que la unidad de control para Climatronic J255 recibe directamente el cableado de todos los sensores del sistema. Sensores como el G395 o el G355 envían sus señales a otras unidades de control (J519 y J393) que las comparten con la J255 mediante la red CAN Confort. (págs. 66-67)

## Imágenes requeridas

- Grupo climatizador completo con separación de la carcasa del filtro de aire y de la carcasa de aspiración — Fuente: 409_e         Audi A4 _08.pdf, pág. 64
- Esquema de interconexión eléctrica por bus CAN Confort y bus LIN entre J255, J519, J393 y red de sensores — Fuente: 409_e         Audi A4 _08.pdf, pág. 66
