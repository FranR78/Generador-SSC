```yaml
tipo: fundamento
titulo: Topología de la red del sistema de climatización
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado).pdf"
paginas: "52"
relacionados: [unidad-control-climatizador, transmisor-presion, sensor-humedad, sensor-calidad-aire, bomba-recirculacion-liquido-refrigerante]
palabras: [topología de red, CAN bus, bus LIN, bus MOST, Climatronic J255, red de a bordo]
```

## Objeto
Describir la arquitectura de red, los buses de comunicación (CAN, LIN, MOST) y la interconexión de las unidades de control, sensores y actuadores del sistema de climatización del Audi A7. (pág. 52).

## Fundamento
La arquitectura electrónica del climatizador se basa en la topología de red del Audi A8 (2011), centralizando la gestión en la unidad Climatronic J255 que se comunica a través de múltiples buses de datos (CAN Confort, CAN Cuadro/Pantalla, LIN y MOST) con la interfaz de diagnosis J533 y las demás unidades del vehículo. (pág. 52).

## Desarrollo
1. Buses de comunicación del sistema:
   - CAN Confort (Convenience CAN bus): conecta la unidad Climatronic J255 con la interfaz de diagnosis de red J533, la unidad de control de la red de a bordo J519, la unidad central del sistema de confort J393, la unidad del funcionamiento solar J355 y la unidad del techo corredizo J245. (pág. 52).
   - CAN Pantalla y Mandos (Display and Control CAN bus): enlaza J255 con la unidad de control e indicación del climatizador trasero E265. (pág. 52).
   - Bus LIN: subredes serie gestionadas por J255 y J519 para sensores y actuadores (servomotores de trampillas, módulo de ventilación J126/V2, válvula reguladora N280, bomba V50, válvula N82, sensor de presión/temperatura G395, sensor de calidad de aire G238, fotosensor G107, sensor de temperatura exterior G17 y sensores de humedad G355 y G657 en el conducto de admisión). (pág. 52).
   - Bus MOST: conecta la interfaz J533 con el cuadro de instrumentos J285, la unidad de electrónica de información J794, la pantalla frontal J685 y la unidad de mandos multimedia E380. (pág. 52).

2. Componentes e interconexión periférica:
   - La unidad J255 gobierna a través de líneas LIN dedicadas los servomotores de las trampillas, el módulo de control del ventilador de aire fresco J126 (que impulsa el ventilador V2), la válvula de corte del líquido refrigerante N82, la bomba de recirculación de líquido refrigerante V50, la calefacción de asientos (SH) y los fotosensores de radiación solar G107. (pág. 52).
   - La unidad de la red de a bordo J519 gestiona a través de otra línea LIN el sensor de temperatura exterior G17, el sensor de calidad del aire G238, el sensor de presión/temperatura del aire acondicionado G395 y el sensor de humedad en el conducto de admisión G657. (pág. 52).

📷 IMAGEN: Esquema de la topología de red de climatización del Audi A7 mostrando las conexiones CAN, LIN y MOST — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 52

## Valores de referencia
No documentado en fuentes. (pág. 52).

## Errores de concepto frecuentes
Creer que todos los sensores del climatizador se conectan directamente a la unidad Climatronic J255; sensores como el de presión/temperatura G395 o el de humedad G657 se conectan por bus LIN a la unidad de la red de a bordo J519, la cual transmite los datos a J255 a través del bus CAN Confort. (pág. 52).

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado).pdf», páginas 52 a 52 de 52. [completo]