---
id: ssc.transmisor-presion.la-climatizacion
modulo: ssc
unidad: clima
nt: 285
tipo: elemento
clase: componente
titulo: "Transmisor de presión electrónico"
menu: "Transmisor de presión electrónico"
grupo: "Control de climatización"
clave: transmisor-presion
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 95-97"
relacionados: ["unidad-control-climatizador", "electroventilador-condensador"]
palabras: ["transmisor de presión", "cristal de silicio", "señal PWM", "50 Hz", "20 ms", "modulación por anchura de impulsos"]
---

## Misión

Medir de forma continua e instantánea la presión del circuito de alta presión y convertirla en una señal digital para la UEGAA y la UEGM. (págs. 95, 97).

## Tipos y características

Sensor piezoeléctrico de presión con un cristal de silicio y microprocesador integrado en su cuerpo. Se alimenta eléctricamente desde la UEGAA. (pág. 96).

## Principio de funcionamiento

El fluido frigorífico actúa sobre el cristal de silicio. Al deformarse por la presión, el cristal modifica su resistencia eléctrica interna de manera directamente proporcional a la deformación. El microprocesador mide las variaciones de tensión y las convierte en un tren de impulsos digitales con frecuencia fija de 50 Hz (período de 20 ms) y anchura de impulso (PWM) variable según la presión.
- A baja presión (2,4 bares / 0,24 MPa): la anchura del impulso es de 2,6 ms (13% del período). (pág. 97).
- A alta presión (30 bares / 3 MPa): la anchura del impulso aumenta a 18 ms (90% del período). (pág. 97).

## Valores de trabajo

- Frecuencia de la señal PWM: 50 Hz (período T = 20 ms). (pág. 96).
- Ancho de impulso a 2,4 bares: 2,6 ms (13% ciclo de trabajo). (pág. 97).
- Ancho de impulso a 30 bares: 18 ms (90% ciclo de trabajo). (pág. 97).

## Anomalías frecuentes

Fallo del cristal de silicio, interrupción del cableado de señal o alimentación de 5V/12V. (págs. 97, 150).

## Comportamiento en avería

La UEGM no detecta señal y desactiva el compresor inmediatamente por seguridad. La avería queda memorizada en la UEGAA y en la UEGM. (pág. 97).

## Cómo comprobarlo

1. Medir con osciloscopio la señal de salida PWM verificando la variación del ancho de impulso al subir la presión. (págs. 96-97).
2. Leer la memoria de averías mediante el equipo de autodiagnosis. (págs. 97, 150).

## Mantenimiento

Verificación de los pines del conector estanco para evitar falsos contactos. (pág. 96).
