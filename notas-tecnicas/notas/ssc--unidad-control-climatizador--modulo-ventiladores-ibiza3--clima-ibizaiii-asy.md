---
id: ssc.unidad-control-climatizador.modulo-ventiladores-ibiza3.clima-ibizaiii-asy
modulo: ssc
unidad: clima
nt: 873
tipo: elemento
clase: componente
titulo: "Unidad de control para el ventilador del líquido refrigerante J293 del SEAT Ibiza III"
codigo: "J293"
menu: "Unidad de control para el vent J293"
grupo: "Control de climatización"
clave: unidad-control-climatizador
variante: modulo-ventiladores-ibiza3
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "SEAT"
fuentes: "clima ibizaIII ASY.pdf, págs. 6"
relacionados: ["electroventilador-condensador", "transmisor-presion", "valvula-reguladora-compresor"]
palabras: ["J293", "V7", "V35", "F18", "G65", "N280", "S177", "S180", "S269", "motor ASY"]
---

## Misión

Gobernar la activación de las dos velocidades de los electroventiladores de refrigeración del motor/condensador (V7 y V35) y la excitación de la válvula del compresor N280 en el SEAT Ibiza III. (pág. 6)

## Tipos y características

Módulo electrónico de relés de potencia alojado en el vano motor (cerca de la servodirección), conectado al transmisor de alta presión G65, al termoconmutador del radiador F18, a la unidad del motor y a la centralita Climatronic J255. (pág. 6)

## Principio de funcionamiento

Recibe las solicitudes de refrigeración del motor y del climatizador. Procesa la señal de alta presión procedente de G65 y la temperatura del refrigerante del termoconmutador F18. Suministra corriente de potencia a los motores de los ventiladores V7 y V35 a través de la línea de velocidad I (resistencia en serie D167) o velocidad II (línea D168), alimentado directamente desde la batería a través de los fusibles S177, S180 y S269. (pág. 6)

## Valores de trabajo

- Fusibles de alimentación de potencia (borne 30): S177 (5), S180 (8) y S269 (11) en portafusibles de batería. (pág. 6)
- Punto de masa principal del módulo: punto de masa 49 en el larguero izquierdo delantero. (pág. 6)

## Anomalías frecuentes

Fallo en los relés internos de conmutación de velocidad o sulfatación en las bornes de los fusibles aéreos montados sobre la batería. (pág. 6)

## Comportamiento en avería

Inoperatividad de los ventiladores V7 y V35, elevación excesiva de la alta presión en parado con desconexión del compresor N280 o riesgo de sobrecalentamiento del motor térmico. (pág. 6)

## Cómo comprobarlo

Verificar la presencia de 12 V en las bornes de entrada procedentes de la batería (S177, S180) y puentear las salidas de activación hacia V7 y V35 para comprobar los motores eléctricos. (pág. 6)

## Mantenimiento

Inspeccionar periódicamente la ausencia de sulfatación y la firmeza de apriete de las tuercas de los fusibles de pletina montados en la caja de la batería. (pág. 6)

## Imágenes requeridas

- Esquema eléctrico de conexiones del módulo J293 con el transmisor de alta presión G65, la válvula N280 y los electroventiladores V7/V35 — Fuente: clima ibizaIII ASY.pdf, pág. 6
