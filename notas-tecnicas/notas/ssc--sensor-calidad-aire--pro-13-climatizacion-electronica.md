---
id: ssc.sensor-calidad-aire.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 166
tipo: elemento
clase: componente
titulo: "Sensor de la calidad del aire"
menu: "Sensor de la calidad del aire"
grupo: "Control de climatización"
clave: sensor-calidad-aire
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 112-113"
relacionados: ["unidad-control-climatizador", "recirculacion"]
palabras: ["G238", "dióxido de estaño", "SnO2", "350 ºC", "0.5 W", "gases oxidables", "gases reducibles", "CO", "NOx"]
---

## Misión

Detectar la presencia de gases contaminantes en el aire de entrada y enviar una señal digital a la UCE para activar automáticamente la recirculación (págs. 112-113).

## Tipos y características

Sensor de óxidos mixtos con semiconductor de dióxido de estaño (SnO2), situado en la entrada de aire a la unidad climática junto al sensor de temperatura (págs. 112-113).

## Principio de funcionamiento

Trabaja a una temperatura de servicio de unos 350 ºC con un consumo de 0,5 W, funcionando de forma similar a una sonda lambda (pág. 112). Modifica su resistencia al absorber o liberar oxígeno (pág. 113):
- Gases oxidables (absorben oxígeno): monóxido de carbono (CO), vapores de gasolina, hexano (C6H14), benceno (C6H6), n-heptano (C7H16). Al contacto con el SnO2 liberan oxígeno, reduciendo la resistencia del sensor (págs. 112-113).
- Gases reducibles (ceden oxígeno): óxidos nítricos (NOx), dióxido de azufre (SO2), ácido sulfhídrico (H2S), carbono sulfuro (CS2). Al contacto con el SnO2 ceden oxígeno, aumentando la resistencia del sensor (págs. 112-113).
La electrónica integrada mide la variación de resistencia y emite una señal digital a la UCE del climatizador (pág. 113).

## Valores de trabajo

- Temperatura de servicio interna: 350 ºC aprox. (pág. 112).
- Potencia absorbida: 0,5 W (pág. 112).

## Imágenes requeridas

- Estructura interna del sensor G238, zona de medición de SnO2 y esquema de reacción ante gases oxidables y reducibles — Fuente: PRO. Climatización Electrónica.pdf, págs. 112-113
