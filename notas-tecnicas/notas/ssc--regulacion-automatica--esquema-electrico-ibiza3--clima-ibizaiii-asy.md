---
id: ssc.regulacion-automatica.esquema-electrico-ibiza3.clima-ibizaiii-asy
modulo: ssc
unidad: clima
nt: 871
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Esquema y arquitectura eléctrica del Climatronic en el SEAT Ibiza III"
menu: "Esquema y arquitectura eléctrica del C"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: esquema-electrico-ibiza3
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "clima ibizaIII ASY.pdf, págs. 1-6"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "transmisor-presion"]
palabras: ["Climatronic", "Ibiza III", "J255", "J293", "N280", "G65", "CAN-Bus", "fusible SB18"]
---

## Objeto

Describir la interconexión eléctrica, circuitos de alimentación, red de comunicación CAN-Bus y distribución de fusibles/relés del climatizador automático Climatronic en el SEAT Ibiza III (modelos a partir de noviembre de 2001). (págs. 1-2)

## Fundamento

La unidad de control para Climatronic J255 centraliza la gestión del confort alimentándose mediante líneas protegidas por fusibles (SB18, SB29, SB36) y la línea del relé de contacto X (J59), comunicándose por el bus CAN de confort (High/Low) con la red de a bordo e interconectando actuadores, sensores térmicos y el módulo de potencia de ventiladores J293. (págs. 2-5)

## Desarrollo

El esquema de corriente se distribuye en los siguientes bloques funcionales:
- **Alimentación y gestión de soplador:** La unidad J255 recibe corriente continua de las líneas de borne 15 (fusible SB18 de 10 A y conexión A15), borne 30 (fusible SB36 de 125 A en distribuidor TV2 / SB29) y borne X (conexión A61). Controla la turbina de aire fresco V2 a través de la unidad de control de turbina J126. (pág. 2)
- **Fotosensor solar e indicación:** El fotosensor de radiación solar G107 está conectado a la unidad de manejo e indicación E87/J255, mientras que la turbina V42 aspira aire para el termosensor del habitáculo G56 incorporado en el panel. (págs. 2, 6)
- **Actuadores de trampillas y línea de 5 V:** Los servomotores de mezcla de temperatura (V68) y trampilla central (V70) integran potenciómetros de posición (G92 y G112) alimentados por la línea común de 5 V (L46) y masa M (243). Los servomotores de descongelación (V107) y recirculación (V113) equipan sus respectivos potenciómetros (G135 y G143) bajo la misma arquitectura de tensión. (págs. 3-4)
- **Red de captadores térmicos NTC:** La centralita J255 lee la señal de cuatro sondas de temperatura NTC conectadas a masa común: aire de entrada/aspiración (G89), difusor central (G191), vano reposapiés (G192) y salida del evaporador (G263). (pág. 5)
- **Mando de compresión y ventilación de motor:** En las motorizaciones ASY (1.9 SDI), la válvula reguladora del compresor N280 es comandada desde el conector T11c, mientras que la unidad de control del ventilador J293 gobierna la activación de los electroventiladores V7 y V35 (en velocidad I y II) con alimentación protegida por los fusibles S177, S180 y S269 sobre la batería. (pág. 6)

## Valores de referencia

- Fusibles de protección: SB18 (10 A), SB29, SB36 (125 A en distribuidor TV2). (pág. 2)
- Tensión de alimentación de potenciómetros de servomotores: 5 V (línea L46). (págs. 3-4)
- Fusibles en placa de batería: S177 (5), S180 (8) y S269 (11) de 30 A. (pág. 6)

## Errores de concepto frecuentes

- Asumir que la unidad J255 acciona directamente los ventiladores de refrigeración del motor V7/V35 sin intermediación de la unidad de control J293 ni de los fusibles aéreos de la batería. (págs. 2, 6)

## Imágenes requeridas

- Esquema eléctrico de conexiones de la unidad J255 con los fusibles SB18/SB29/SB36 y la unidad de turbina J126 — Fuente: clima ibizaIII ASY.pdf, pág. 2
