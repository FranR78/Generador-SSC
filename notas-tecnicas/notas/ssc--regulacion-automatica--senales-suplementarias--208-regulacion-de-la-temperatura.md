---
id: ssc.regulacion-automatica.senales-suplementarias.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 103
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Señales suplementarias para la regulación de la temperatura"
menu: "Señales suplementarias para la regulac"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: senales-suplementarias
area: climatizacion
sistema: "control-climatizacion"
fuentes: "208. Regulación de la temperatura.pdf, págs. 52-53"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "compresor"]
palabras: ["tiempo en parado th", "velocidad v", "régimen n", "CAN-Bus", "chapaleta velocidad", "desacoplamiento compresor"]
---

## Objeto

Integrar parámetros dinámicos del vehículo en la unidad de control del climatizador para optimizar el confort térmico y la gestión de componentes (págs. 52-53).

## Fundamento

Intercambio de datos a través de líneas eléctricas o red CAN-Bus desde el Cuadro de Instrumentos y la Unidad de Control del Motor para adaptar el caudal de aire y las funciones del compresor (págs. 52-53).

## Desarrollo

Las principales señales suplementarias son:
1. Señal de tiempo en parado (th): mide el tiempo transcurrido desde la desconexión del encendido hasta el nuevo arranque (pág. 53). Permite a la unidad de control mantener en memoria la temperatura exterior previa al estacionamiento para evitar falsas regulaciones causadas por el calor radiado del motor al volver a arrancar, logrando un enfriamiento más rápido y sin brusquedades (pág. 53).
2. Señal de velocidad de marcha (v): procedente del transmisor del velocímetro (pág. 53). Actúa sobre la chapaleta de velocidad reduciendo la sección de entrada de aire fresco a altas velocidades para mantener constante el caudal de aire en el habitáculo (pág. 53).
3. Señal de régimen del motor (n): informa del funcionamiento del motor térmico (pág. 53). Sirve para desactivar el compresor (desconectando el acoplamiento magnético) si el motor se apaga o se pierde la señal de régimen (pág. 53).

## Errores de concepto frecuentes

- Creer que el caudal de aire que entra al habitáculo depende únicamente de la velocidad seleccionada en la turbina, omitiendo el ajuste automático de la chapaleta de velocidad según la rapidez del vehículo (pág. 53).

## Imágenes requeridas

- Esquema del procesamiento de las señales suplementarias (tiempo en parado th, régimen n y velocidad v) hacia las chapaletas de temperatura, velocidad y compresor — Fuente: 208. Regulación de la temperatura.pdf, pág. 53
