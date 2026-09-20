---
id: ssc.clima.sensor-termico-evaporador-g308
modulo: ssc
unidad: clima
nt: 145
tipo: elemento
titulo: Sensor térmico de evaporador G308
codigo: G308
menu: G308
grupo: POR CLASIFICAR
ubicacion: En el evaporador, dentro de la unidad climática
aplicacion:
  - VW Touareg (Climatronic)
  - SEAT Tarraco
fuentes: VW SSP 301 «Climatización en el Touareg», esquema del Climatronic
---

## Misión
Medir la temperatura del evaporador para que la unidad de control evite que se congele. Es el sensor
que marca el límite inferior de todo el sistema.

## Principio de funcionamiento
Sonda de temperatura montada en el propio evaporador. La unidad J255 usa su lectura para reducir la
cilindrada del compresor —a través de la válvula reguladora N280— antes de que el agua condensada en
las aletas llegue a helarse y tape el paso de aire.

## Características
Va junto al resto de sensores térmicos del sistema: G385 y G386 para los aireadores directos
delanteros, G261 y G262 para la salida de los vanos reposapiés, y G89 en el canal de aspiración de
aire fresco. Todos alimentan la misma unidad de control.

## Valores de trabajo
No documentado en fuentes. El manual identifica el sensor y su función, pero no da la curva
resistencia-temperatura.

## Anomalías frecuentes
Conector con humedad —está en la zona donde condensa el evaporador—, cable rozado en el paso por la
carcasa de la unidad climática y deriva de la sonda con los años.

## Comportamiento en avería
Dos cuadros distintos y opuestos:

- Si lee **más frío de lo que hay**, el sistema limita el compresor antes de tiempo y el coche enfría
  poco, sin ninguna avería aparente en el circuito.
- Si lee **más calor del que hay**, el evaporador puede llegar a helarse: el caudal de aire cae poco
  a poco hasta casi desaparecer y se recupera solo tras parar un rato. Es un síntoma muy
  característico y conviene que el alumnado lo reconozca.

## Cómo comprobarlo
1. Resistencia de la sonda **con el contacto quitado y el conector desembornado**, y comparación con
   la temperatura real del evaporador.
2. Lectura del valor por diagnosis con el sistema en marcha, contrastada con la temperatura del aire
   que sale por los aireadores.
3. Estado del conector: por su ubicación, la humedad es la primera sospecha.
