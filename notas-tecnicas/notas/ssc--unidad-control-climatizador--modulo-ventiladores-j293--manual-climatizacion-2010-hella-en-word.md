---
id: ssc.unidad-control-climatizador.modulo-ventiladores-j293.manual-climatizacion-2010-hella-en-word
modulo: ssc
unidad: clima
nt: 876
tipo: elemento
clase: componente
titulo: "Unidad de control para el ventilador del líquido refrigerante J293"
codigo: "J293"
menu: "Unidad de control para el vent J293"
grupo: "Control de climatización"
clave: unidad-control-climatizador
variante: modulo-ventiladores-j293
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
marca: "Hella"
fuentes: "MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, págs. 40, 47"
relacionados: ["electroventilador-condensador", "presostato", "embrague-compresor"]
palabras: ["J293", "escalón 1", "escalón 2", "F18", "F129", "conmutación combinada"]
---

## Misión

Gobernar la activación y los escalones de velocidad (I y II) de los electroventiladores de refrigeración del motor/condensador en respuesta a la presión del circuito y a la temperatura del líquido refrigerante. (págs. 40, 47)

## Tipos y características

Módulo electrónico de potencia equipado con relés de conmutación combinada, ubicado en el compartimento motor. (págs. 40, 47)

## Principio de funcionamiento

Recibe las señales del conmutador de presión F129 y del termoconmutador del radiador F18:
- **Escalón:** Se conecta en cuanto se activa el climatizador (compresor A/C acoplado) siempre que la presión en el circuito frigorífico supere los 0,2 MPa (2 bar). (pág. 47)
- **Escalón:** Se conmuta cuando la alta presión en el circuito frigorífico supera los 1,6 MPa (16 bar) o cuando la temperatura del líquido refrigerante del motor sobrepasa los 99 ºC. Retorna al escalón 1 cuando la presión cae de 1,6 MPa y la temperatura baja de 99 ºC. (pág. 47)

## Valores de trabajo

- Umbral de activación del escalón 1 por A/C: A/C conectado y presión > 0,2 MPa (2 bar). (pág. 47)
- Umbral de activación del escalón 2 por presión: alta presión > 1,6 MPa (16 bar). (pág. 47)
- Umbral de activación del escalón 2 por temperatura de agua (F18): temperatura del refrigerante del motor > 99 ºC. (pág. 47)

## Anomalías frecuentes

Deterioro de los relés de potencia internos o cortocircuito en las salidas hacia los motores de los electroventiladores. (págs. 40, 47)

## Comportamiento en avería

Inoperatividad de los ventiladores del radiador/condensador, elevación crítica de la alta presión en tráfico urbano y corte de seguridad del compresor. (págs. 40, 47)

## Cómo comprobarlo

Efectuar la prueba de actuadores con el equipo de diagnosis comprobando la activación de la velocidad 1 y 2 de los ventiladores. (págs. 40, 47)

## Mantenimiento

Verificar la limpieza y el estado de apriete de los conectores eléctricos del módulo. (pág. 40)
