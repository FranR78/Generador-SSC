---
id: ssc.maestra.embrague-compresor
modulo: ssc
unidad: clima
nt: 1004
tipo: elemento
clase: componente
titulo: "Acoplamiento de embrague electromagnético del compresor"
codigo: "NT-MASTER-EMBRAGUE-ELECTROMAGNETICO"
menu: "Acoplamiento de embrague electromagnét"
grupo: "Circuito frigorífico"
clave: embrague-compresor
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: compresor
estado: borrador
fusionadas: [44, 203, 231, 257, 274, 485, 527, 535, 679, 704, 739, 797]
huella: db50385861d4
modelo: gemini-3.8-flash
fuentes: "Fusión de 12 fuentes"
niveles:
  "Misión": basico
  "Tipos y características": basico
  "Principio de funcionamiento": intermedio
  "Valores de trabajo": intermedio
  "Anomalías frecuentes": avanzado
  "Comportamiento en avería": avanzado
  "Cómo comprobarlo": avanzado
  "Mantenimiento": avanzado
---

## Misión

El embrague electromagnético se ubica en el frontal del compresor y tiene como misión **conectar o interrumpir mecánicamente la transmisión de giro** entre la polea (arrastrada por la correa auxiliar del motor térmico) y el eje de impulsión del compresor (NT44, págs. 54-55; NT203, pág. 25; NT231, págs. 72-73; NT257, pág. 7; NT274, págs. 70-71; NT485, pág. 72; NT679, págs. 99, 111, 113; NT704, págs. 54-55; NT797, pág. 52).

Permite acoplar y desacoplar el compresor a voluntad del conductor, por solicitud de la unidad de control de climatización o por seguridad para generar la presión frigorífica necesaria (NT485, pág. 72; NT527, pág. 1; NT535, pág. 24; NT739, pág. 8).

## Tipos y características

Es un **embrague de fricción en seco** de accionamiento electromagnético (NT274, pág. 71). Consta de tres elementos principales montados en el frontal del compresor (NT44, pág. 54; NT203, pág. 25; NT257, pág. 7; NT485, pág. 72; NT527, pág. 1; NT535, págs. 24-25; NT704, pág. 54; NT797, pág. 52):

- **Polea exterior de arrastre**: montada loca sobre la carcasa mediante un cojinete de bolas con guardapolvo o rodamiento doble (NT44, pág. 54; NT231, pág. 72; NT274, pág. 71; NT485, pág. 72; NT739, pág. 9; NT797, pág. 52). Puede disponer de 2 canales o perfil poly-v (NT44, pág. 55; NT739, pág. 9).
- **Bobina electromagnética (electroimán)**: devanado fijo a la carcasa con protección de resina (NT44, pág. 54; NT257, pág. 7; NT274, pág. 71; NT485, pág. 72; NT679, pág. 111).
- **Plato de embrague o disco de acoplamiento**: inducido metálico fijado al eje mediante tuerca o cubo cónico con chaveta, provisto de flejes, muelles planos, remaches o silentblocks de goma que absorben cargas dinámicas (NT44, pág. 54; NT203, pág. 25; NT231, pág. 72; NT274, pág. 71; NT485, pág. 72; NT739, pág. 9; NT797, pág. 52).

El disco de acoplamiento está fabricado en **acero con menos del 0,6% de carbono** para evitar que retenga magnetismo remanente tras desenergizar la bobina (NT44, pág. 55; NT704, pág. 54).

[NT231_01]

## Principio de funcionamiento

- **Posición de desacoplamiento (sin corriente)**: la correa arrastra de forma continua la polea sobre su rodamiento. Los flejes o muelles planos mantienen separado el plato frontal, por lo que la polea gira loca sin transmitir giro al eje (NT44, pág. 55; NT274, págs. 71-73; NT485, pág. 72; NT679, pág. 111; NT739, pág. 9; NT797, pág. 52).
- **Posición de acoplamiento (con corriente)**: la unidad de climatización (por ejemplo J293) alimenta la bobina con positivo continuo. El campo magnético generado atrae axialmente el disco inducido contra la cara frontal de la polea, venciendo la fuerza elástica de las ballestas o flejes y transmitiendo el movimiento por rozamiento al eje (NT44, pág. 55; NT203, pág. 25; NT231, págs. 72-73; NT257, pág. 7; NT274, págs. 71-73; NT485, pág. 72; NT535, pág. 25; NT679, pág. 112; NT739, pág. 9; NT797, pág. 52).
- **Desconexión**: al cortar la corriente, el campo se anula y los muelles retornan el disco a su posición inicial de reposo, deshabilitando el compresor (NT44, pág. 55; NT203, pág. 25; NT274, págs. 71-73; NT704, págs. 54-55; NT797, pág. 52).

Un relé de control interrumpe la alimentación de la bobina de forma automática si detecta peligro de congelación en el evaporador o sobrepresión en el circuito (NT739, pág. 10).

[NT739_02]

## Valores de trabajo

Los parámetros de funcionamiento y calibración del conjunto son:

- **Tensión de alimentación eléctrica**: 12 V de corriente continua (NT44, pág. 55; NT203, pág. 25; NT257, pág. 7; NT679), o 12 V / 24 V de corriente continua (NT485, págs. 72, 73, 98).
- **Señal de excitación**: positivo continuo emitido por la unidad de control del climatizador (NT203, pág. 25; NT535, pág. 25).
- **Composición del plato de acoplamiento**: acero con contenido en carbono menor al 0,6% (< 0,6% C) (NT44, pág. 55; NT704, pág. 55).
- **Entrehierro o juego de montaje en reposo (desconectado)**:
  - En compresores Sanden: **0,4 a 0,8 mm** (NT44, pág. 55; NT704, pág. 55).
  - En compresores Nippondenso: **0,2 a 0,5 mm** (NT44, pág. 55; NT704, pág. 55).
  - Margen genérico de holgura en reposo: **0,3 a 0,6 mm** (NT485, págs. 73, 74, 98).
- **Holgura conectado**: **0,0 mm** (NT485, pág. 74).

[NT485_01]

## Anomalías frecuentes

- **Bobina electromagnética cortada, derivada o quemada**: fallo de aislamiento o corte por sobrecalentamiento excesivo (NT231, págs. 74-75; NT257, pág. 7; NT274, págs. 71-73; NT485, págs. 72, 188; NT679).
- **Patinamiento continuado y desgaste del material de fricción**: por falta de presión de contacto, holgura excesiva o resistencia anormal al giro (NT44, pág. 55; NT231, págs. 74-75; NT485, págs. 72, 188; NT679; NT704, pág. 55).
- **Dureza o agarrotamiento del compresor**: el embrague no suele ser la causa primaria, sino la víctima del esfuerzo mecánico excesivo del compresor, provocando aumento de temperatura y fogueo de la bobina (NT44, pág. 55; NT704, pág. 55).
- **Deformación o rotura de los flejes o láminas elásticas** de recuperación (NT231, págs. 74-75; NT274, págs. 71-73).
- **Holgura, ruido o gripado en el rodamiento** de la polea (NT231, págs. 74-75; NT257, pág. 7; NT485, págs. 73, 188).
- **Desajuste del entrehierro** por desgaste del disco o pérdida/desgaste de las arandelas de reglaje (NT257, pág. 7; NT485, pág. 73; NT679).

## Comportamiento en avería

- **Falta total de enfriamiento**: si la bobina no atrae el plato, el eje del compresor no gira y la instalación no comprime refrigerante ni genera frío en el habitáculo; no existe función sustitutiva (NT203, pág. 25; NT231, págs. 73-74; NT485, pág. 72; NT527, pág. 1; NT535, pág. 25; NT679).
- **Pérdida de rendimiento frigorífico**: si el embrague patina por entrehierro incorrecto, las presiones de alta y baja no alcanzan los valores de trabajo (NT485, págs. 72, 188).
- **Ruidos mecánicos y olores a quemado**: producidos por fricción continua al patinar la polea sobre el plato o por rozamiento interno del rodamiento averiado (NT257, pág. 7; NT274, págs. 72-73; NT679).
- **Desconexión preventiva**: apertura del circuito por relés de protección al detectar congelación en el evaporador o sobrepresión en el circuito frigorífico (NT739, pág. 10).

## Cómo comprobarlo

1. **Comprobación con diagnosis**: utilizar la función 03 (diagnosis de actuadores) y la función 08 (bloque de valores de medición, grupo 001, campo 1) para comprobar la activación del acoplamiento (NT203, págs. 36-37).
2. **Alimentación eléctrica**: comprobar con un voltímetro la presencia de tensión continua de batería (12 V o 24 V según sistema) en el conector de la bobina al conectar el climatizador, o excitar directamente con 12 V para verificar la atracción del plato (NT485, págs. 73, 98; NT679).
3. **Resistencia y continuidad de la bobina**: medir con ohmímetro que el devanado no esté interrumpido, derivado a masa ni en cortocircuito (NT231, pág. 76; NT257, pág. 7; NT274, págs. 71-73; NT485, págs. 73, 98; NT679).
4. **Medición del entrehierro en reposo**: con el motor parado, verificar con una galga de espesores el juego en tres puntos equidistantes a 120º entre la cara de fricción de la polea y el plato (NT44, pág. 55; NT274, págs. 71-73; NT485, págs. 73-74; NT679; NT704, pág. 55).
5. **Inspección mecánica**: verificar la ausencia de alabeo y el buen estado del perfil en la polea de arrastre (NT231, pág. 76).

## Mantenimiento

- **Ajuste del entrehierro o juego de montaje**: si la distancia queda fuera de tolerancia, se corrige modificando el espesor del conjunto de arandelas de reglaje o calado (o juntas de papel de ajuste) situadas en el tope del eje frontal (NT44, pág. 55; NT257, pág. 7; NT274, págs. 71-72; NT485, pág. 73; NT679; NT704, pág. 55).
- **Inspección periódica**: control de la bobina electromagnética, verificación del alabeo y perfil de la polea durante las revisiones, o sustitución del conjunto de polea y bobina si presentan holgura o daño térmico (NT231, pág. 76; NT679).

## Discrepancias

- Juego de entrehierro en reposo: NT485 (págs. 73, 74) establece una holgura genérica de entre 0,3 mm y 0,6 mm (y 0,0 mm conectado), mientras que NT44 (pág. 55) y NT704 (pág. 55) especifican tolerancias diferenciadas por fabricante del compresor: 0,4 a 0,8 mm para Sanden y 0,2 a 0,5 mm para Nippondenso.
- Tensión nominal de funcionamiento: NT44 (pág. 55), NT203 (pág. 25), NT257 (pág. 7) y NT679 definen únicamente alimentación a 12 V de corriente continua, mientras que NT485 (págs. 72, 73, 98) contempla alimentación tanto a 12 V como a 24 V de corriente continua (aplicaciones de vehículo industrial).

## Imágenes requeridas

- [NT231_01] Despiece e identificación de componentes del embrague electromagnético
- [NT739_02] Esquema del funcionamiento del embrague electromagnético en posición desembragada (sin corriente) y embragada (con corriente)
- [NT485_01] Detalle de la holgura entre el disco frontal y la polea (0,0 mm conectado y 0,3 a 0,6 mm desconectado)
