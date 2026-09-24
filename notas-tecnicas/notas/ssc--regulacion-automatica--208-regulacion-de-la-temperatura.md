---
id: ssc.regulacion-automatica.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 96
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación automática de la temperatura en el habitáculo"
menu: "Regulación automática de la temperatur"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
fuentes: "208. Regulación de la temperatura.pdf, págs. 42-44"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-temperatura-exterior", "sensor-temperatura-interior"]
palabras: ["Climatronic", "regulación digital", "microprocesador", "valores teóricos", "valores efectivos", "CAN-Bus"]
---

## Objeto

Acondicionar el aire fresco refrigerado en el evaporador mezclándolo con aire caliente del intercambiador para mantener una temperatura confortable e invariable en el habitáculo de forma automática (págs. 42-43).

## Fundamento

El sistema detecta las temperaturas efectivas mediante sensores, las compara en un microprocesador con los valores teóricos preprogramados y gobierna servomotores que posicionan las chapaletas de aire y la velocidad de la turbina (págs. 42-43).

## Desarrollo

El aire enfriado por el evaporador suele estar más frío de lo necesario; para obtener la temperatura deseada, se hace pasar una parte del caudal a través del intercambiador de calor de la calefacción (pág. 42).
En los sistemas automáticos (Climatronic o regulación digital), la unidad de control procesa las señales de entrada de los sensores (temperatura exterior, temperatura interior, radiación solar), las desparasita y calcula las señales de salida hacia los servomotores del calefactor/climatizador (págs. 43-44). Los climatizadores de última generación intercambian información mediante CAN-Bus con otras unidades de control (motor, cambio, cuadro de instrumentos) integrando parámetros como velocidad de marcha, régimen del motor y tiempo en parado (pág. 44).

## Errores de concepto frecuentes

- Creer que la regulación automática depende de intervenciones manuales continuas del conductor como ocurre en el climatizador manual (págs. 42-43).

## Imágenes requeridas

- Esquema del proceso de regulación automática de temperatura con sensores, unidad de control y servomotores — Fuente: 208. Regulación de la temperatura.pdf, pág. 43
