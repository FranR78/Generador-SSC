---
id: ssc.presostato.trinaria.208-regulacion-del-sistema
modulo: ssc
unidad: clima
nt: 113
tipo: elemento
clase: componente
titulo: "Conmutador de presión para climatizador"
codigo: "F129"
menu: "Conmutador de presión para cli F129"
grupo: "Control de climatización"
clave: presostato
variante: trinaria
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
marca: "VW"
fuentes: "208. Regulación del Sistema.pdf, págs. 36"
relacionados: ["embrague-compresor", "electroventilador-condensador", "unidad-control-climatizador"]
palabras: ["F129", "trinaria", "24-32 bar", "2 bar", "16 bar", "suciedad condensador", "fugas"]
---

## Misión

Vigilar y limitar la presión en el lado de alta del circuito frigorífico cerrado, protegiendo el compresor mediante desacoplamiento y garantizando el caudal de aire en el condensador (pág. 36).

## Tipos y características

Conmutador de presión de versión combinada triple montado en la tubería de alta presión o en el depósito de líquido (pág. 36).

## Principio de funcionamiento

Supervisa la presión del agente frigorífico actuando sobre tres umbrales de seguridad (pág. 36):
1. Desconexión por alta presión: a una presión positiva de 2,4 a 3,2 MPa (24 a 32 bares), la unidad de control del climatizador desactiva el acoplamiento electromagnético del compresor (ej. por suciedad intensa en el condensador) (pág. 36).
2. Desconexión por baja presión: si la presión cae a 0,2 MPa (2 bares), la unidad de control desactiva el acoplamiento electromagnético para evitar que el compresor gire sin gas ni lubricante (ej. por fugas de refrigerante) (pág. 36).
3. Conmutación del electroventilador: a una presión de 1,6 MPa (16 bares), conmuta el ventilador V7 a un escalón de velocidad superior para incrementar la condensación (pág. 36).

## Valores de trabajo

- Umbral de desconexión por sobrepresión alta: 2,4 a 3,2 MPa (24 a 32 bares) (pág. 36).
- Umbral de desconexión por falta de presión: 0,2 MPa (2 bares) (pág. 36).
- Umbral de activación del escalón superior del ventilador: 1,6 MPa (16 bares) (pág. 36).

## Anomalías frecuentes

- Desconexión del compresor por sobrepresión (> 24-32 bar) derivada de colmatación exterior o falta de intercambio en el condensador (pág. 36).
- Desconexión por baja presión (< 2 bar) por fugas de agente frigorífico (pág. 36).

## Imágenes requeridas

- Conmutador de presión triple F129 y sus rangos de actuación sobre el circuito de refrigeración y compresor — Fuente: 208. Regulación del Sistema.pdf, pág. 36
