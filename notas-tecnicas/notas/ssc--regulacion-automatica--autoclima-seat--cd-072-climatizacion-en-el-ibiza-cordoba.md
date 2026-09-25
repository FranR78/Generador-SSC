---
id: ssc.regulacion-automatica.autoclima-seat.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 850
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Sistema de climatización automática Autoclima"
menu: "Sistema de climatización automática Au"
grupo: "Control de climatización"
clave: regulacion-automatica
variante: autoclima-seat
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 4-5, 26-27"
relacionados: ["unidad-control-climatizador", "distribucion-aire"]
palabras: ["Autoclima", "regulación electrónica", "estructura descentralizada", "pantalla compartida", "radiocasete"]
---

## Objeto

Regular y mantener automáticamente la temperatura del habitáculo seleccionada por el usuario de forma independiente de las condiciones meteorológicas exteriores. (págs. 4-5)

## Fundamento

El Autoclima utiliza una estructura de control electrónica descentralizada donde participan la unidad de control del equipo (J255), la unidad del aire acondicionado (J293) y la unidad de control del motor para gestionar automáticamente el caudal, la temperatura del aire de entrada, la recirculación y la activación del compresor. (págs. 5, 8-9)

## Desarrollo

El funcionamiento del Autoclima se adapta a las condiciones seleccionadas:
- **Funcionamiento automático:** La unidad de control procesa las señales enviadas por los transmisores de temperatura exterior (G17), interior (G56) y del aire de entrada (G191, G192), además de los datos de presión del circuito frigorífico. Con estos datos ajusta la posición del servomotor de la trampilla de mezcla (V68), la velocidad de la turbina mediante el regulador electrónico J126 y la conmutación de la recirculación. (págs. 5, 8-9, 26)
- **Descentralización e integración en pantalla:** Los datos de funcionamiento de la climatización se muestran en una pantalla o display central compartido con el equipo de radiocasete y el ordenador de a bordo. (págs. 5, 27)
- **Modo descongelación del parabrisas:** Al seleccionar la salida de aire hacia el parabrisas con el mando de distribución, la centralita mantiene la regulación de temperatura pero posiciona forzosamente la trampilla de recirculación en entrada de aire exterior. (pág. 26)

## Valores de referencia

- Margen de temperatura solicitada: seleccionable mediante pulsadores en la unidad de manejo. (pág. 19)

## Errores de concepto frecuentes

- Asumir que la distribución de aire entre difusores es motorizada en el Autoclima, cuando en este modelo la distribución se realiza mecánicamente mediante cable y mando giratorio. (págs. 5, 26)

## Imágenes requeridas

- Esquema del cuadro sinóptico del Autoclima con la red de sensores y unidades de control descentralizadas — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 8
