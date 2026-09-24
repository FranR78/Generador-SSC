---
id: ssc.ventilador-habitaculo.regulador-de-velocidad.la-climatizacion
modulo: ssc
unidad: clima
nt: 298
tipo: elemento
clase: componente
titulo: "Regulador de velocidad de la turbina de aire interior"
menu: "Regulador de velocidad de la turbina d"
grupo: "Distribución de aire"
clave: ventilador-habitaculo
variante: regulador-de-velocidad
area: climatizacion
sistema: "distribucion-aire"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 125-126"
relacionados: ["unidad-control-climatizador", "distribucion-aire"]
palabras: ["regulador de velocidad", "módulo de potencia", "resistencias pasivas", "transistores de potencia", "turbina interior"]
---

## Misión

Regular el régimen de giro de la turbina de ventilación para ajustar el caudal de aire introducido al habitáculo según la orden manual o automática de la UEGAA. (págs. 125-126).

## Tipos y características

Ubicado en el conducto de aire junto a la turbina para su refrigeración.
- Resistencias pasivas: cuadro de resistencias cerámicas o de bobina (ofrece hasta 4 velocidades fijas escalonadas). (pág. 126).
- Módulo de potencia por transistores: etapas electrónicas de potencia (con transistores MOSFET) para regulación continua y lineal de velocidad. (pág. 126).

## Principio de funcionamiento

En el sistema electrónico por transistores, la UEGAA envía una señal de tensión de mando de baja corriente. El módulo de potencia modula progresivamente la intensidad suministrada al motor eléctrico de la turbina, ajustando sus revoluciones de forma silenciosa e ininterrumpida. (págs. 125-126).

## Valores de trabajo

Alimentación de potencia por fusible de alto amperaje (25-30 A). (págs. 126, 162).

## Anomalías frecuentes

Fusible térmico fundido en el paquete de resistencias o cortocircuito de los transistores de potencia. (págs. 126, 162).

## Comportamiento en avería

La turbina no gira en ninguna velocidad, o bien se queda fija funcionando únicamente a la máxima velocidad (velocidad directa). (págs. 126, 162).

## Cómo comprobarlo

1. Comprobar la tensión de alimentación de potencia de +12 V y la masa en el conector del módulo. (pág. 162).
2. Medir la señal de tensión de mando enviada desde la UEGAA. (págs. 126, 162).

## Mantenimiento

Asegurar que el disipador de aluminio del módulo está limpio dentro del conducto de aire. (pág. 126).
