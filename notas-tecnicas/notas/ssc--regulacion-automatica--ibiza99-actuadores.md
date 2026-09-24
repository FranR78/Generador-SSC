---
id: ssc.regulacion-automatica.ibiza99-actuadores
modulo: ssc
unidad: clima
nt: 534
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Señal de salida para conexión del aire acondicionado"
menu: "Señal de salida para conexión del aire"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
fuentes: "Ibiza99 - Actuadores.pdf, págs. 24"
relacionados: ["unidad-control-climatizador", "compresor", "embrague-compresor", "unidad-control-motor"]
palabras: ["señal de positivo", "excitación compresor", "régimen de ralentí"]
---

## Objeto

Habilitar la activación del compresor de aire acondicionado y coordinar la gestión de carga con la unidad de control del motor térmico. (pág. 24)

## Fundamento

La demanda de frío requiere el acoplamiento del compresor y el incremento simultáneo del par del motor para evitar oscilaciones o calados al ralentí. (pág. 24)

## Desarrollo

La unidad del autoclima envía una señal de positivo tanto a la unidad del aire acondicionado como a la unidad de control del motor. Mediante esta señal, la unidad del aire acondicionado conecta el compresor activando el acoplamiento magnético N25, mientras que la unidad del motor incrementa el régimen de ralentí. No existe función sustitutiva. (pág. 24)

## Valores de referencia

Tensión de señal: Positivo (12 V). (pág. 24)

## Imágenes requeridas

- Esquema de envío de la señal de positivo desde la unidad del autoclima hacia la unidad del aire acondicionado y la unidad del motor — Fuente: Ibiza99 - Actuadores.pdf, pág. 24
