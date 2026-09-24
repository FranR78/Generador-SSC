---
id: ssc.unidad-control-climatizador.modulo-ventiladores.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 621
tipo: elemento
clase: componente
titulo: "Unidad de control para el ventilador del líquido refrigerante J293"
codigo: "J293"
menu: "Unidad de control para el vent J293"
grupo: "Control de climatización"
clave: unidad-control-climatizador
variante: modulo-ventiladores
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 15-16"
relacionados: ["electroventilador-condensador", "embrague-compresor", "presostato"]
palabras: ["J293", "escalón 1", "escalón 2", "F18", "F129", "retardo de activación"]
---

## Misión

Gobernar la alimentación de los electroventiladores del radiador/condensador y gestionar la activación del acoplamiento magnético del compresor. (págs. 15-16)

## Tipos y características

Módulo electrónico de potencia alojado en el vano motor (por ejemplo en VW Golf / Audi A3). (pág. 15)

## Principio de funcionamiento

Procesa las señales del termoconmutador F18, presostato F129/G819 y del panel e indicación E87. Al conectar el climatizador, activa ambos electroventiladores en velocidad. Si la presión de alta supera 1,6 MPa (16 bar) o la temperatura del refrigerante supera 99 ºC, conmuta ambos ventiladores al escalón de velocidad 2 con un breve retardo. (págs. 15-16)

## Valores de trabajo

- Escalón 1 ventiladores por F18: ON a 92-97 ºC, OFF a 84-91 ºC. (pág. 16)
- Escalón 2 ventiladores por F18: ON a 99-105 ºC, OFF a 91-98 ºC. (pág. 16)
- Escalón 2 ventiladores por presión: ON a > 1,6 MPa (16 bares). (pág. 16)

## Anomalías frecuentes

Fallo de relés internos de potencia o sulfatación en los conectores de entrada. (pág. 16)

## Comportamiento en avería

Los electroventiladores no funcionan o el embrague magnético del compresor queda inoperativo. (pág. 16)

## Cómo comprobarlo

Comprobar entradas de alimentación directa, señales de activación de sensores y salidas de tensión hacia los motores. (pág. 16)

## Mantenimiento

Verificar el correcto apriete de sus conexiones de masa a carrocería. (pág. 16)

## Imágenes requeridas

- Esquema del módulo J293 y tabla de conmutación de los escalones de velocidad 1 y 2 de los ventiladores — Fuente: CLIMATIZADOR MD FRAN.docx, pág. 16
