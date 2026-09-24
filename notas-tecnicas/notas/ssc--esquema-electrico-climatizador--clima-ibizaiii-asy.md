---
id: ssc.esquema-electrico-climatizador.clima-ibizaiii-asy
modulo: ssc
unidad: clima
nt: 213
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Esquema eléctrico del Climatronic en el Ibiza III (motor ASY)"
menu: "Esquema eléctrico del Climatronic en e"
grupo: "Control de climatización"
clave: esquema-electrico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "clima ibizaIII ASY.pdf, págs. 1-7"
relacionados: ["unidad-control-climatizador", "unidad-control-aire-acondicionado"]
palabras: ["esquema eléctrico", "Climatronic", "Ibiza III", "motor ASY", "CAN-Bus"]
---

## Objeto

Definir la arquitectura eléctrica, la distribución de alimentaciones, masas, sensores, servomotores de trampillas y conexiones del sistema Climatronic en el SEAT Ibiza III (a partir de noviembre de 2001, motor 1,9 l SDI letras ASY y motores gasolina AZQ, BBY, AUB). (pág. 1).

## Fundamento

El sistema se representa mediante esquemas de circuitos de corriente numerados del 10/1 al 10/7, identificando los elementos por códigos alfanuméricos, secciones y colores de cable, así como sus interconexiones con el conector de diagnosis T16, el cuadro de instrumentos J285, la unidad de red de a bordo y la unidad de control de motor mediante CAN-Bus Confort (High/Low). (págs. 1-7).

## Desarrollo

El esquema eléctrico se estructura en siete hojas principales:

1. Identificación del vehículo y motorizaciones (Hoja 10/1):
- Válido para Ibiza a partir de noviembre de 2001 con motores 1,2 l Simos (AZQ), 1,4 l 16V Marelli (BBY/AUB) y 1,9 l SDI 47 kW (ASY). (pág. 1).

2. Alimentación eléctrica y turbina de aire fresco (Hoja 10/2):
- Alimentación por positivo de encendido (15) desde el fusible SB18 y el distribuidor TV2.
- Alimentación por positivo de contacto X desde el relé J59 a través del fusible SB29.
- Alimentación por positivo permanente (30) a través del fusible SB36.
- Unidad de manejo e indicación E87 / Unidad de control para Climatronic J255.
- Unidad de control para turbina de aire fresco J126 y motor de la turbina V2.
- Fotosensor para radiación solar G107.
- Punto de masa 606 (debajo de la consola central, cerca de la palanca de cambios). (pág. 2).

3. Trampillas de temperatura y central (Hoja 10/3):
- Servomotor de la trampilla de temperatura V68 con su potenciómetro G92.
- Servomotor para trampilla central V70 con su potenciómetro G112.
- Conexión de alimentación de 5 V (L46) y masa de sensores Climatronic (243). (pág. 3).

4. Trampillas de descongelación y recirculación (Hoja 10/4):
- Servomotor para trampilla de descongelación V107 con su potenciómetro G135.
- Servomotor para trampilla de recirculación V113 con su potenciómetro G143.
- Conexión a la unidad de control de red de a bordo (T18b) y líneas de masa/alimentación de 5 V. (pág. 4).

5. Sensores de temperatura y CAN-Bus (Hoja 10/5):
- Termosensor del canal de aspiración de aire fresco G89.
- Transmisor de temperatura del difusor central G191.
- Transmisor de temperatura del difusor de la zona de los pies G192.
- Transmisor de temperatura del aire a la salida del evaporador G263.
- Líneas CAN-Bus Confort High (A146/B397) y Low (A147/B406) conectadas a la UCE J255 (conectores T12/9 y T12/10).
- Conexión al conector de diagnosis T16a (pines 13 y 14) y puntos de masa 80 (cuadro de instrumentos) y 605 (columna de dirección, arriba). (pág. 5).

6. Válvula del compresor, ventiladores e iluminación/sensor interior (Hoja 10/6):
- Termosensor de temperatura interior G56 con turbina de aspiración V42.
- Válvula reguladora del compresor de aire acondicionado N280 (conectada a J255 pines T11c/8 y T11c/9).
- Unidad de control para ventilador del líquido refrigerante J293.
- Ventiladores del líquido refrigerante V7 y V35 (conexiones D167 para velocidad I y D168 para velocidad II en mazo de vano motor).
- Conexión a masa 162 en mazo de cables del motor de ventilador. (pág. 6).

7. Presostato, termoconmutador y protecciones de batería (Hoja 10/7):
- Transmisor de alta presión G65 (conectado a J293 pin T6y/2).
- Termoconmutador del ventilador del líquido de refrigeración F18 (conectado a J293 pines T6y/6 y T6y/5).
- Fusibles en el portafusibles de la batería A: S177 (40 A), S180 (30 A) y S269 (5 A).
- Punto de masa 49 (cerca de la servodirección, en larguero izquierdo delantero) y conexión D61 en mazo de vano motor. (pág. 7).

## Valores de referencia

- Fusible SB18: línea de positivo (15) en portafusibles. (pág. 2).
- Fusible SB29: línea de positivo (X) en portafusibles. (pág. 2).
- Fusible SB36: línea de positivo permanente (30) en portafusibles. (pág. 2).
- Fusible S177: 40 A en portafusibles/batería. (pág. 7).
- Fusible S180: 30 A en portafusibles/batería. (pág. 7).
- Fusible S269: 5 A en portafusibles/batería. (pág. 7).
- Alimentación de potenciómetros (L46): 5 V. (págs. 3, 4).
- Secciones de cableado: de 0,35 mm² (líneas de señal/sensores) a 6 mm² (alimentación principal de ventiladores). (págs. 2-7).

## Imágenes requeridas

- Esquema eléctrico general de corriente de Climatronic para Ibiza III — Fuente: clima ibizaIII ASY.pdf, pág. 1
