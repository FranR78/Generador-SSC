```yaml
tipo: componente
titulo: Sensor de temperatura exterior
entidad: sensor-temperatura-exterior
variante: g17
area: climatizacion
sistema: control-climatizacion
codigo: G17
fabricante: Audi
fuente: "TERMOSENSORES A5.pdf"
paginas: "82"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, compresor]
palabras: [G17, J519, J285, J255, ECON, frontal, paragolpes]
```

## Misión
Suministrar la lectura de la temperatura exterior para el análisis y regulación del sistema de climatización en las distintas unidades de control del vehículo (pág. 82).

## Tipos y características
Sensor único ubicado en la zona frontal del vehículo, situado detrás del paragolpes y directamente por delante del condensador (pág. 82).

## Principio de funcionamiento
Captura la temperatura exterior y envía sus señales a la unidad de control de la red de a bordo J519 (pág. 82). A través de la red CAN-Bus, la información se distribuye desde la UCE J519 hacia la unidad de control con cuadro de instrumentos J285 y a la unidad de control para Climatronic J255 (pág. 82).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Avería del sensor G17 registrada en el sistema de control (pág. 82).

## Comportamiento en avería
Al averiarse el sensor G17, el sistema activa automáticamente la función ECON e ilumina su LED indicador, señalizando que el compresor del climatizador queda desactivado y que el climatizador automático deja de marchar (pág. 82).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Sensor de humedad y temperatura del parabrisas
entidad: sensor-humedad
area: climatizacion
sistema: control-climatizacion
codigo: G458
fabricante: Audi
fuente: "TERMOSENSORES A5.pdf"
paginas: "82"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G458, G355, humedad, parabrisas, sensor capacitivo, capa delgada, empañamiento]
```

## Misión
Medir la humedad del aire y la temperatura directamente ante el cristal parabrisas para evitar su empañamiento (pág. 82).

## Tipos y características
Sensor térmico e higrométrico de capa delgada de tipo capacitivo (código G458 / G355) instalado directamente ante el parabrisas (pág. 82).

## Principio de funcionamiento
Funciona de forma comparable a un condensador de placas (pág. 82). Mide la variación de capacidad eléctrica generada por el contenido de humedad del aire ante el parabrisas (pág. 82). El sistema electrónico integrado transforma la capacidad medida en una magnitud de tensión que transmite hacia la unidad de control (pág. 82).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Sensor de presión y temperatura del agente frigorífico
entidad: transmisor-presion
variante: g395
area: climatizacion
sistema: circuito-frigorifico
codigo: G395
fabricante: Audi
fuente: "TERMOSENSORES A5.pdf"
paginas: "82"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, compresor]
palabras: [G395, LIN-Bus, J519, J255, CAN-Bus, bloques de valores de medición]
```

## Misión
Medir la presión y la temperatura del agente frigorífico en el circuito de climatización (pág. 82).

## Tipos y características
Sensor electrónico combinado de presión y temperatura (código G395) implantado en la línea del refrigerante (pág. 82).

## Principio de funcionamiento
Capta la presión y temperatura del fluido y transmite sus datos mediante señales LIN-Bus a la unidad de control de la red de a bordo J519 (pág. 82). Desde la UCE J519, los datos se retransmiten a través del CAN-Bus a la unidad de control para Climatronic J255 (pág. 82). La magnitud medida no se analiza activamente en la regulación del sistema, aunque sus valores se pueden consultar en los bloques de valores de medición (pág. 82).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Consultar los bloques de valores de medición mediante el equipo de diagnosis conectado a la unidad de control (pág. 82).

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Sensor de la calidad del aire
entidad: sensor-calidad-aire
variante: g238
area: climatizacion
sistema: control-climatizacion
codigo: G238
fabricante: Audi
fuente: "TERMOSENSORES A5.pdf"
paginas: "82"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, recirculacion]
palabras: [G238, J255, recirculación automática, contaminantes]
```

## Misión
Detectar contaminantes en el aire para enviar su señal a la unidad de control para Climatronic J255 y gobernar la regulación automática de la recirculación de aire (pág. 82).

## Tipos y características
Sensor electrónico de detección de la calidad del aire exterior (código G238) (pág. 82).

## Principio de funcionamiento
Analiza el aire de entrada e informa a la UCE J519 / J255 para activar de forma automatizada el modo de recirculación de aire (pág. 82).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Avería interna o fallo de señal del sensor G238 (pág. 82).

## Comportamiento en avería
En caso de avería del sensor G238, deja de estar disponible la función de recirculación de aire automática (pág. 82).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «TERMOSENSORES A5.pdf», páginas 82 a 82 de 82. completo