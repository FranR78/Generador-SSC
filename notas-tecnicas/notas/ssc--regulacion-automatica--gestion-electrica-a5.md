---
id: ssc.regulacion-automatica.gestion-electrica-a5
modulo: ssc
unidad: clima
nt: 450
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Parte eléctrica del climatizador automático"
codigo: "J255"
menu: "Parte eléctrica del climatizad J255"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "GESTIÓN ELÉCTRICA A5.pdf, págs. 80"
relacionados: ["unidad-control-climatizador", "transmisor-presion", "sensor-humedad", "sensor-temperatura-exterior", "sensor-calidad-aire", "servomotor-trampilla"]
palabras: ["climatizador automático", "audi a5", "can-bus", "lin-bus", "j255", "j519", "j393"]
---

## Objeto

Gestionar eléctricamente el climatizador automático distribuyendo el procesamiento de señales entre distintas unidades de control interconectadas en red. (pág. 80)

## Fundamento

En el Audi A5, no todas las señales de los sensores llegan de forma directa a la unidad de control para Climatronic J255. Las distintas unidades de control leen sensores específicos y comparten la información a través del CAN-Bus. (pág. 80)

## Desarrollo

El procesamiento de la información se reparte según la siguiente arquitectura:
- La **unidad de control de la red de a bordo J519** procesa las señales del sensor de presión y temperatura del agente frigorífico G395 y del sensor de temperatura exterior G17, además de gestionar la válvula reguladora para el compresor N280.
- La **unidad de control central para el sistema de confort J393** procesa la señal del sensor de humedad y temperatura del parabrisas (G355/G458) y se comunica con la UCE para el techo corredizo J245.
- La **unidad de control para Climatronic J255** recibe directamente vía LIN-Bus las señales del sensor de calidad del aire G238, de la unidad para la turbina de aire fresco J126 y de los servomotores de gestión de chapaletas.
- Las unidades J519, J393, J255, la UCE para calefacción adicional J364 y la interfaz de diagnosis J533 están interconectadas mediante el **CAN Confort** para poner todos los datos procesados a disposición de la unidad de control J255. (pág. 80)

## Errores de concepto frecuentes

Asumir que todos los sensores del sistema de climatización están cableados directamente a la unidad de control para Climatronic J255. Sensores como el G395 o el de humedad se leen en otras unidades (J519 o J393) y se transmiten a la J255 a través de la red CAN-Bus. (pág. 80)

## Imágenes requeridas

- Esquema de interconexión eléctrica por CAN Confort y LIN-Bus entre J255, J519, J393 y la red de sensores del Audi A5 — Fuente: GESTIÓN ELÉCTRICA A5.pdf, pág. 80
