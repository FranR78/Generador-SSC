```yaml
tipo: componente
titulo: Termosensor de temperatura exterior
entidad: sensor-temperatura-exterior
variante: g17
area: climatizacion
sistema: control-climatizacion
codigo: G17
fuente: "TERMOSENSORES.pdf"
paginas: "1"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, sensor-temperatura-exterior]
palabras: [G17, armazón anterior, temperatura exterior, valor supletorio +10 ºC, recirculación]
```

## Misión
Detectar la temperatura exterior efectiva para que la unidad de control gestione la posición de la chapaleta de temperatura y la velocidad de la turbina de aire fresco (pág. 1).

## Tipos y características
Termosensor instalado en el armazón anterior del vehículo, susceptible de autodiagnóstico (pág. 1).

## Principio de funcionamiento
Mide la temperatura ambiental exterior y envía la lectura a la unidad de control (pág. 1). La unidad de control analiza la señal comparándola con la del segundo sensor G89 (ubicado en el conducto de aspiración) y asume siempre la cifra más baja de ambas para regular la chapaleta de mezcla de temperatura y el caudal de la turbina de aire (pág. 1).

## Valores de trabajo
- Valor supletorio por ausencia de señal en G17 y G89: +10 ºC (pág. 1).

## Anomalías frecuentes
- Ausencia o pérdida de la señal del sensor (pág. 1).

## Comportamiento en avería
Si se ausenta la señal de G17, la unidad de control emplea automáticamente el valor medido por el termosensor G89 en el conducto de aspiración de aire fresco (pág. 1). Si también se ausenta la señal de G89, el sistema continúa en funcionamiento aplicando un valor supletorio fijo de +10 ºC y desactivando el modo de recirculación de aire (pág. 1).

## Cómo comprobarlo
A través de la función de autodiagnóstico de la unidad de control (pág. 1).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensor en el conducto de aspiración de aire fresco
entidad: sensor-temperatura-exterior
variante: g89
area: climatizacion
sistema: control-climatizacion
codigo: G89
fuente: "TERMOSENSORES.pdf"
paginas: "1"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, sensor-temperatura-exterior]
palabras: [G89, conducto de aspiración, aire fresco, valor más bajo, segundo punto de medición]
```

## Misión
Registrar la temperatura exterior efectiva como segundo punto de medición para la gestión de la chapaleta de temperatura y la velocidad de la turbina de aire (pág. 1).

## Tipos y características
Termosensor instalado directamente en la canalización de aspiración de aire fresco, susceptible de autodiagnóstico (pág. 1).

## Principio de funcionamiento
Mide la temperatura del caudal de aire exterior que ingresa por el conducto de aspiración e informa a la unidad de control (pág. 1). La unidad de control compara esta medición con la del primer sensor G17 (armazón delantero) y procesa siempre el valor más bajo de los dos para los cálculos de regulación (pág. 1).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Ausencia de la señal del sensor (pág. 1).

## Comportamiento en avería
Si se ausenta la señal del sensor G89, la unidad de control utiliza el valor de medición del termosensor de temperatura exterior G17 situado en el armazón delantero (pág. 1).

## Cómo comprobarlo
Mediante la lectura del autodiagnóstico de la unidad de control (pág. 1).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Termosensor del tablero de instrumentos con turbina de aire
entidad: sensor-temperatura-interior
variante: g56
area: climatizacion
sistema: control-climatizacion
codigo: G56
fuente: "TERMOSENSORES.pdf"
paginas: "1-2"
forma_parte_de: unidad-control-climatizador
relacionados: [unidad-control-climatizador]
palabras: [G56, V42, turbina de aire, habitáculo, valor supletorio +24 ºC, valor teórico]
```

## Misión
Transmitir a la unidad de control la temperatura efectiva del aire en el interior del habitáculo para compararla con el valor teórico seleccionado y ajustar las funciones de la chapaleta de temperatura y de la turbina de aire fresco (págs. 1-2).

## Tipos y características
Termosensor instalado habitualmente en la propia unidad de control del Climatronic / tablero de instrumentos, ubicado en la corriente de aire impulsada por una pequeña turbina de aspiración V42, susceptible de autodiagnóstico (págs. 1-2).

## Principio de funcionamiento
La turbina de aspiración V42, gestionada desde el panel de mandos e indicación, aspira aire directamente del habitáculo haciéndolo pasar de forma continua sobre el termosensor G56 para evitar acumulaciones de calor local y errores de medición (pág. 1). La unidad de control compara la lectura con el valor teórico fijado y gobierna correspondientemente los servomotores de la chapaleta de mezcla y la velocidad de la turbina (págs. 1-2).

📷 IMAGEN: Módulo de mandos Climatronic con la turbina de aspiración de aire V42 y el termosensor del tablero de instrumentos G56 — Fuente: TERMOSENSORES.pdf, pág. 2

## Valores de trabajo
- Valor supletorio por ausencia de señal: +24 ºC (pág. 2).

## Anomalías frecuentes
- Ausencia de la señal del sensor por fallo eléctrico o de la turbina (pág. 2).

## Comportamiento en avería
Si se ausenta la señal, la unidad de control pone en vigor un valor supletorio fijo de +24 ºC y mantiene el sistema en funcionamiento (pág. 2).

## Cómo comprobarlo
Mediante la función de autodiagnóstico del sistema (pág. 2).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Transmisor de temperatura a la salida del vano reposapiés
entidad: sensor-temperatura-interior
variante: g192
area: climatizacion
sistema: control-climatizacion
codigo: G192
fuente: "TERMOSENSORES.pdf"
paginas: "2"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G192, NTC, vano reposapiés, descongelación, valor supletorio +80 ºC, caudal turbina]
```

## Misión
Medir la temperatura del aire tratado a la salida del calefactor/climatizador hacia el vano reposapiés antes de ingresar en el habitáculo (pág. 2).

## Tipos y características
Transmisor térmico del tipo resistencia eléctrica variable NTC, cuya resistencia aumenta progresivamente a medida que desciende la temperatura del aire, susceptible de autodiagnóstico (pág. 2).

## Principio de funcionamiento
Registra la temperatura de salida del aire en el canal inferior e informa a la unidad de control (pág. 2). La unidad de control analiza esta señal para gestionar la distribución de aire entre las posiciones de descongelación del parabrisas / vano reposapiés y para regular el caudal impelido por la turbina de aire fresco (pág. 2).

## Valores de trabajo
- Comportamiento de la resistencia: aumenta a medida que desciende la temperatura (pág. 2).
- Valor supletorio por ausencia de señal: +80 ºC (pág. 2).

## Anomalías frecuentes
- Ausencia de la señal del transmisor (pág. 2).

## Comportamiento en avería
Si se ausenta la señal, la unidad de control calcula un valor supletorio fijo de +80 ºC y mantiene el sistema en funcionamiento (pág. 2).

## Cómo comprobarlo
Mediante la función de autodiagnóstico de la unidad de control (pág. 2).

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «TERMOSENSORES.pdf», páginas 1 a 2 de 2. completo