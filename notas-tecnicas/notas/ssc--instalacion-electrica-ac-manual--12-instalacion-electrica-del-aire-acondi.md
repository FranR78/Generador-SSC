---
id: ssc.instalacion-electrica-ac-manual.12-instalacion-electrica-del-aire-acondi
modulo: ssc
unidad: clima
nt: 409
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Instalación eléctrica de aire acondicionado manual con trinaria"
menu: "Instalación eléctrica de aire acondici"
grupo: "Control de climatización"
clave: instalacion-electrica-ac-manual
area: climatizacion
sistema: "control-climatizacion"
fuentes: "12. Instalación eléctrica del aire acondicionado.pdf, págs. 94"
relacionados: ["presostato", "electroventilador-condensador", "sensor-evaporador", "embrague-compresor", "unidad-control-climatizador"]
palabras: ["esquema manual", "trinaria", "presostato", "conmutador turbina", "relé electroventilador", "sonda evaporador"]
---

## Objeto

Explicar la estructura eléctrica, la interconexión de componentes y la lógica de control para el funcionamiento de un sistema de aire acondicionado manual equipado con presostato trinaria. (pág. 94)

## Fundamento

El sistema combina la activación manual de la turbina por el conductor con la supervisión eléctrica automatizada de presiones, temperaturas de evaporación y refrigerante del motor, junto con la autorización de la UCE del motor para acoplar el compresor y accionar las velocidades del electroventilador. (pág. 94)

## Desarrollo

El circuito eléctrico articula la activación de sus componentes mediante las siguientes funciones interconectadas:
1. Interruptor de A/C y selector de turbina: conecta o desconecta el sistema a voluntad del conductor y selecciona la velocidad de la turbina de aire fresco. Es condición imprescindible que la turbina gire como mínimo a velocidad lenta para habilitar la conexión eléctrica del A/C.
2. Control de presiones (Trinaria de alta): presostato que mide la presión en la línea de alta. Sus bornes 1-2 determinan el arranque o parada de seguridad del compresor (corte por baja presión a 2 bar o por sobrepresión a 32 bar). Sus bornes 3-4 conectan la II velocidad del electroventilador al alcanzar 16 bar.
3. Control de temperatura del evaporador (Sonda NTC del evaporador): monitoriza la temperatura de evaporación para desconectar el compresor si existe riesgo de congelación en el panal. No se utiliza en sistemas provistos de compresor variable.
4. Gestión del motor (UCE de motor y NTC de refrigerante): la UCE del motor no autoriza la conexión del compresor hasta que el motor gire de forma regular a ralentí y desconecta el embrague en aceleraciones bruscas. Además, si la sonda NTC del refrigerante del motor detecta un sobrecalentamiento excesivo, se interrumpe la alimentación del A/C por seguridad.
5. Control de ventilación del condensador (Termostato de refrigerante y relés): el electroventilador se activa siempre en velocidad lenta al conectar el aire acondicionado. El termostato del radiador conecta la velocidad lenta a 95 ºC (t1) y la velocidad rápida a 103 ºC (t2) o mediante el relé de II velocidad cuando la trinaria cierra a 16 bar. (pág. 94)

## Valores de referencia

- Presión P1 de corte por baja presión en trinaria: 2 bar.
- Presión P1 de corte por sobrepresión en trinaria: 32 bar.
- Presión P2 de activación de la II velocidad del electroventilador en trinaria: 16 bar.
- Temperatura t1 de activación de I velocidad en termostato de refrigerante: 95 ºC.
- Temperatura t2 de activación de II velocidad en termostato de refrigerante: 103 ºC. (pág. 94)

## Errores de concepto frecuentes

Creer que el compresor se conecta inmediatamente al accionar el interruptor de A/C. El sistema exige que la turbina esté girando al menos en velocidad lenta, que la UCE de motor confirme el ralentí regular, que la sonda del evaporador no detecte hielo y que la presión en la trinaria esté comprendida entre 2 y 32 bar. (pág. 94)

## Imágenes requeridas

- Esquema eléctrico de aire acondicionado manual con presostato trinaria, relés, sonda NTC y UCE de motor — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 94
