---
id: ssc.sensor-calidad-aire.208-regulacion-de-la-temperatura
modulo: ssc
unidad: clima
nt: 108
tipo: elemento
clase: componente
titulo: "Sensor de la calidad del aire"
codigo: "G238"
menu: "Sensor de la calidad del aire G238"
grupo: "Control de climatización"
clave: sensor-calidad-aire
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "VW"
fuentes: "208. Regulación de la temperatura.pdf, págs. 61-63"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "recirculacion"]
palabras: ["G238", "dióxido de estaño", "SnO2", "platino", "paladio", "350 ºC", "PWM", "monóxido de carbono", "NOx"]
---

## Misión

Detectar la presencia y concentración de contaminantes químicos en el aire exterior para activar automáticamente la recirculación antes de que penetren en el habitáculo (págs. 61-63).

## Tipos y características

Sensor electrónico de óxidos mixtos en versión de semiconductor de dióxido de estaño SnO2, sensible a gases nocivos (págs. 62-63). Incorpora aditivos catalíticos de platino y paladio para aumentar la sensibilidad (pág. 63). Instalado en la canalización de aspiración de aire fresco, por delante del filtro combinado de carbón activo (pág. 62). No está sujeto a desgaste mecánico (pág. 63).

## Principio de funcionamiento

Funciona de forma similar a una sonda lambda, trabajando a una temperatura de servicio de unos 350 ºC con un consumo reducido de 0,5 W (pág. 63). El módulo electrónico integrado evalúa los cambios de conductividad del semiconductor SnO2 ante la presencia de contaminantes (pág. 63):
- Gases de motores de gasolina detectados: monóxido de carbono CO, hexano C6H14, benceno C6H6, n-heptano C7H16 (pág. 62).
- Gases de motores diésel detectados: óxidos nítricos NOx, dióxido de azufre SO2, ácido sulfhídrico H2S, carbono sulfuro CS2 (pág. 62).
El sensor es autoadaptable: analiza el nivel medio de polución de fondo y envía una señal digital rectangular a la unidad de control J255 (pág. 63). Ante picos bruscos de contaminación, la unidad de control cierra la chapaleta de recirculación durante un tiempo ajustado a la temperatura exterior (págs. 62-63). También activa la recirculación automáticamente al usar el limpia-lavaparabrisas (pág. 63).

## Valores de trabajo

- Temperatura de servicio interna del sensor: 350 ºC aproximadamente (pág. 63).
- Potencia absorbida: 0,5 W (pág. 63).
- Fase de calentamiento inicial tras arranque: 30 segundos aprox. (pág. 63).
- Tª exterior > +2 ºC (pico leve): recirculación conectada mínimo 25 segundos (pág. 63).
- Tª exterior de +2 ºC a -5 ºC (pico intenso): recirculación conectada (pág. 63).
- Tª exterior < -5 ºC o función ECON: recirculación conectada máximo 15 segundos (pág. 63).
- En función de descongelación: la recirculación automática queda inhabilitada (pág. 63).

## Anomalías frecuentes

- Obstrucción o colmatación del filtro combinado de carbón activo adyacente (pág. 63).

## Cómo comprobarlo

A través de la lectura de bloques de valores y autodiagnóstico de la unidad de control (págs. 62-63).

## Mantenimiento

El sensor G238 no requiere mantenimiento; el filtro combinado de carbón activo debe sustituirse periódicamente en las intervenciones de servicio (pág. 63).

## Imágenes requeridas

- Sensor de la calidad del aire G238 ante el filtro combinado y esquema de comunicación por señal rectangular hacia la unidad de control — Fuente: 208. Regulación de la temperatura.pdf, pág. 62
