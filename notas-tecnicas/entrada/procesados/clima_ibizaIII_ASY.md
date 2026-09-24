```yaml
tipo: fundamento
titulo: Esquema eléctrico del Climatronic en el SEAT Ibiza III (motor ASY)
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "clima ibizaIII ASY.pdf"
paginas: "1-7"
relacionados: [unidad-control-climatizador, regulacion-automatica]
palabras: [esquema eléctrico, Climatronic, ASY, colores de cables, fusibles, puntos de masa]
```

## Objeto
Definir la distribución de corriente, interconexiones eléctricas, patillaje de conectores, codificación de colores de cables y protección por fusibles del sistema Climatronic en el SEAT Ibiza III con motor 1,9l SDI (ASY) a partir de noviembre de 2001. (págs. 1-7)

## Fundamento
El esquema de circuitos de corriente documenta gráficamente el conexionado eléctrico entre la unidad de control para Climatronic J255, la unidad de manejo e indicación E87, los servomotores con sus potenciómetros de posición, los sensores térmicos y de presión, y los módulos de potencia para la turbina de aire y los electroventiladores. (págs. 1-7)

## Desarrollo
La arquitectura eléctrica del Climatronic se compone de los siguientes bloques interconectados:
- **Alimentación y mando de la turbina de aire:** La unidad J255 y la unidad de manejo E87 reciben alimentación desde el distribuidor de cables TV2 (borne 30) y las líneas de contacto 15 y X (a través del relé J59) protegidas por los fusibles SB18, SB29 y SB36. La turbina V2 es gobernada por la unidad de control J126, recibiendo información del fotosensor de radiación solar G107. (págs. 1-2)
- **Servomotores de mezcla y distribución de aire:** La unidad J255 controla la alimentación e inversión de polaridad de los servomotores V68 (trampilla de temperatura), V70 (trampilla central), V107 (trampilla de descongelación) y V113 (trampilla de recirculación). Asimismo, lee la posición real de sus potenciómetros G92, G112, G135 y G143 alimentados a 5 V por la línea L46. (págs. 3-4)
- **Red de sensores térmicos y comunicación CAN-Bus:** Procesa las señales analógicas de los termosensores del canal de aspiración G89, difusor central G191, difusor de reposapiés G192 y salida del evaporador G263. Incorpora las conexiones CAN-Bus Confort High (A146/B397) y Low (A147/B406) para la red de a bordo. (págs. 5)
- **Gestión de la válvula del compresor y electroventiladores:** La unidad J255 gobierna la válvula reguladora del compresor N280 y lee el termosensor de temperatura interior G56 (asociado a la turbina V42). En los vehículos con motor ASY, la unidad J293 controla el funcionamiento de los dos ventiladores del radiador (V7 y V35) en sus velocidades I y II (líneas D167 y D168), recibiendo señales del termoconmutador F18 y del transmisor de alta presión G65. La alimentación principal de la unidad J293 proviene del portafusibles de batería mediante S177 (40 A), S180 (30 A) y S269 (5 A). (págs. 6-7)

📷 IMAGEN: Esquema eléctrico de la unidad J293 con el conexionado de la válvula N280, el sensor G65 y los ventiladores V7 y V35 para el motor ASY — Fuente: clima ibizaIII ASY.pdf, págs. 6-7

## Valores de referencia
- Fusible de la turbina/Climatronic SB36: 25 A. (pág. 2)
- Fusibles en el portafusibles de batería para J293: S177 (40 A), S180 (30 A) y S269 (5 A). (pág. 7)
- Tensión de alimentación de los potenciómetros de trampillas (línea L46): 5 V. (págs. 3, 4)
- Motorizaciones aplicables documentadas: 1,9l SDI / 47 kW (ASY), 1,2l / 47 kW (AZQ), 1,4l 16V / 55 kW (BBY), 1,4l 16V / 74 kW (AUB). (pág. 1)
- Conector de diagnóstico: T16a (conector de 16 polos). (págs. 2, 5)

## Errores de concepto frecuentes
- Confundir el mando de los electroventiladores pensando que cada uno requiere un módulo independiente en la motorización ASY, cuando la unidad J293 gobierna simultáneamente el ventilador principal V7 y el secundario V35. (pág. 6)
- Ignorar que los potenciómetros de todas las trampillas motorizadas comparten una misma línea estabilizada de referencia a 5 voltios (L46) suministrada desde la unidad J255. (págs. 3, 4)

---

COBERTURA: documento «clima ibizaIII ASY.pdf», páginas 1 a 7 de 7. [completo]