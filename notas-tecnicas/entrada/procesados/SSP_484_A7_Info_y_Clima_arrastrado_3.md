```yaml
tipo: componente
titulo: Unidad de control para la detección de ocupación del asiento J706
entidad: unidad-control-deteccion-ocupacion-asiento
area: confort-y-seguridad
sistema: NUEVO-seguridad-pasiva
codigo: J706
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 3.pdf"
paginas: "22-23"
forma_parte_de: sistema-airbag
relacionados: [sensor-ocupacion-asiento-g128, unidad-control-airbag-j234]
palabras: [J706, detección de ocupación, bus LIN, cable coaxial, desactivación de airbag]
```

## Misión
Detectar la ocupación del asiento del acompañante y determinar si está ocupado por una silla infantil o por un adulto, transmitiendo esta información a la unidad de control del airbag J234 para activar o desactivar el airbag frontal del acompañante. (págs. 22-23).

## Tipos y características
Unidad de control electrónica montada debajo del asiento del acompañante delantero. Existen diferentes tipos de asientos y diferentes módulos de control de reconocimiento de ocupación, contando cada uno con un software adaptado específicamente a cada tipo de asiento. Se conecta mediante un cable coaxial con el sensor de ocupación G128 y mediante bus LIN con la unidad de control del airbag J234. (págs. 22-23).

## Principio de funcionamiento
Mide de forma cíclica la variación de la capacidad eléctrica (capacitancia) del sensor del asiento G128. En función de este cambio de capacidad, determina si el asiento está ocupado por un adulto o por un asiento infantil. Envía esta información a través del bus LIN a la unidad de control del airbag J234, la cual activa o desactiva el airbag del acompañante e ilumina el testigo de advertencia de airbag del acompañante desactivado K145. (págs. 22-23).

📷 IMAGEN: Esquema de la unidad de control J706 bajo el asiento del acompañante, conectada al sensor G128, unidad J234 y testigo K145 — Fuente: SSP 484 A7 Info y Clima (arrastrado) 3.pdf, pág. 22

## Valores de trabajo
No documentado en fuentes. (págs. 22-23).

## Anomalías frecuentes
No documentado en fuentes. (págs. 22-23).

## Comportamiento en avería
No documentado en fuentes. (págs. 22-23).

## Cómo comprobarlo
Consultar la Localización Guiada de Averías (Guided Fault Finding), el catálogo ETKA y la información técnica de servicio electrónica actual. (pág. 23).

## Mantenimiento
No documentado en fuentes. (págs. 22-23).

---

```yaml
tipo: componente
titulo: Sensor de ocupación del asiento del acompañante G128
entidad: sensor-ocupacion-asiento
area: confort-y-seguridad
sistema: NUEVO-seguridad-pasiva
codigo: G128
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 3.pdf"
paginas: "22-23"
forma_parte_de: unidad-control-deteccion-ocupacion-asiento
relacionados: [unidad-control-deteccion-ocupacion-asiento, unidad-control-airbag-j234]
palabras: [G128, sensor de ocupación, capacitancia, cable coaxial, cojín del asiento]
```

## Misión
Captar la presencia y el tipo de ocupante en el asiento del acompañante delantero mediante la variación de su capacidad eléctrica (capacitancia). (págs. 22-23).

## Tipos y características
Sensor de tipo capacitivo integrado en el cojín del asiento del acompañante delantero. Se conecta directamente a la unidad de control J706 mediante un cable coaxial a través del conector situado debajo del asiento. (págs. 22-23).

## Principio de funcionamiento
Modifica su capacidad eléctrica (capacitancia) en función de la masa y presión ejercidas sobre el cojín del asiento. Esta variación es medida cíclicamente por la unidad de control J706 a través del cable coaxial para discriminar entre un asiento infantil y un ocupante adulto. (págs. 22-23).

## Valores de trabajo
No documentado en fuentes. (págs. 22-23).

## Anomalías frecuentes
No documentado en fuentes. (págs. 22-23).

## Comportamiento en avería
No documentado en fuentes. (págs. 22-23).

## Cómo comprobarlo
Consultar la Localización Guiada de Averías (Guided Fault Finding) y la documentación técnica de servicio. (pág. 23).

## Mantenimiento
No documentado en fuentes. (págs. 22-23).

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 3.pdf», páginas 22 a 23 de 23. [completo]