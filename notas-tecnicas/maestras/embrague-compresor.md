---
id: ssc.maestra.embrague-compresor
modulo: ssc
unidad: clima
nt: 1004
tipo: elemento
clase: componente
titulo: "Acoplamiento de embrague electromagnético del compresor"
codigo: "CMP-EMB-01"
menu: "Acoplamiento de embrague electromagnét"
grupo: "Circuito frigorífico"
clave: embrague-compresor
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: compresor
estado: borrador
fusionadas: [44, 203, 231, 257, 274, 485, 527, 535, 679, 704, 739, 797]
huella: db50385861d4
modelo: gemini-3.6-flash
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

El embrague electromagnético tiene la misión de **transmitir o interrumpir mecánicamente el movimiento de rotación** entre la correa de accesorios del motor térmico y el eje de impulsión del compresor de aire acondicionado [NT44, págs. 54-55] [NT203, pág. 25] [NT231, págs. 72-73] [NT257, pág. 7] [NT274, págs. 70-71] [NT485, pág. 72] [NT527, pág. 1] [NT535, pág. 24] [NT679, págs. 99, 111, 113] [NT704, págs. 54-55] [NT739, pág. 8] [NT797, pág. 52].

Permite acoplar y desacoplar el compresor a voluntad del conductor, a demanda del sistema de climatización o de forma automática por motivos de seguridad, generando la presión indispensable en el circuito frigorífico [NT231, págs. 72-73] [NT485, pág. 72] [NT527, pág. 1] [NT535, pág. 24] [NT739, pág. 8].

## Tipos y características

Es un conjunto electromecánico de fricción en seco montado en el extremo frontal de la carcasa del compresor [NT44, pág. 54] [NT203, pág. 25] [NT257, pág. 7] [NT274, págs. 71-72] [NT797, pág. 52]. Se compone de tres elementos fundamentales:
- **Polea de arrastre**: montada sobre la carcasa mediante un rodamiento de bolas (simple o doble) con guardapolvo, arrastrada por la correa poly-v [NT44, pág. 54] [NT203, pág. 25] [NT231, pág. 72] [NT257, pág. 7] [NT274, págs. 71-72] [NT485, pág. 72] [NT679, pág. 111] [NT704, pág. 54] [NT739, págs. 8, 9] [NT797, pág. 52]. Puede ser de 2 canales [NT739, pág. 8].
- **Bobina electromagnética**: electroimán anular fijo a la carcasa del compresor, que en algunas ejecuciones está protegido con resina [NT44, pág. 54] [NT203, pág. 25] [NT231, pág. 72] [NT257, pág. 7] [NT274, págs. 71-72] [NT485, pág. 72] [NT679, pág. 111] [NT704, pág. 54] [NT739, pág. 8] [NT797, pág. 52].
- **Placa elástica o disco de acoplamiento**: fijado al eje del compresor mediante tuerca, chaveta o cubo cónico, y suspendido mediante láminas elásticas, flejes, ballestas de recuperación o silentblocks de goma [NT44, págs. 54-55] [NT203, pág. 25] [NT231, pág. 72] [NT257, pág. 7] [NT274, págs. 71-72] [NT485, págs. 72, 73] [NT679, pág. 111] [NT704, págs. 54-55] [NT739, págs. 8, 9] [NT797, pág. 52].

### Composición del plato de acoplamiento
El plato de acoplamiento se fabrica en **acero con menos del 0,6% de carbono** para evitar que retenga magnetismo remanente tras cortar la corriente eléctrica [NT44, pág. 55] [NT704, pág. 55].

## Principio de funcionamiento

El funcionamiento del conjunto electromecánico se desarrolla en tres fases:
- **Desconectado (reposo)**: Sin alimentación en la bobina, la polea gira libremente accionada por la correa. Se mantiene un entrehierro o espacio libre en reposo entre la polea y el disco de arrastre [NT44, pág. 55] [NT257, pág. 7] [NT274, págs. 71-73] [NT485, pág. 73] [NT679, pág. 111] [NT704, págs. 54-55] [NT739, pág. 9] [NT797, pág. 52].
- **Conectado (activado)**: Al recibir una señal eléctrica de positivo desde la unidad de control (J293), la bobina genera un campo magnético que atrae axialmente el disco frontal venciendo la fuerza de las láminas elásticas o ballestas [NT44, pág. 55] [NT203, pág. 25] [NT231, págs. 72-73] [NT257, pág. 7] [NT274, págs. 71-73] [NT485, pág. 73] [NT527, pág. 1] [NT535, pág. 25] [NT679, pág. 112] [NT704, págs. 54-55] [NT739, pág. 9] [NT797, pág. 52]. El disco se adosa por rozamiento contra la polea, reduciendo el espacio libre a 0,0 mm y haciendo girar el eje del compresor [NT274, págs. 71-73] [NT485, pág. 74].
- **Desconexión**: Al interrumpirse la corriente eléctrica, el campo magnético desaparece y las láminas elásticas separan el disco de la polea devolviéndolo a su posición inicial [NT44, pág. 55] [NT203, pág. 25] [NT231, págs. 72-73] [NT257, pág. 7] [NT274, págs. 71-73] [NT704, pág. 55] [NT797, pág. 52].

El sistema incorpora un relé de control para cortar automáticamente la alimentación de la bobina si se detecta riesgo de congelación en el evaporador o sobrepresiones excesivas en el circuito [NT739, pág. 10].

## Valores de trabajo

Los parámetros y valores de trabajo de la instalación son:
- **Tensión de alimentación**: 12 V de corriente continua [NT44, pág. 55] [NT203, pág. 25] [NT257, pág. 7] [NT485, pág. 98] o 24 V de corriente continua [NT485, pág. 98].
- **Señal de excitación**: Positivo continuo proporcionado por la unidad de control de climatización [NT203, pág. 25] [NT535, pág. 25].
- **Entrehierro acoplado**: **0,0 mm** [NT485, pág. 74].
- **Entrehierro desconectado (reposo)**:
  - Compresores Sanden: **entre 0,4 y 0,8 mm** [NT44, pág. 55] [NT704, pág. 55].
  - Compresores Nippondenso: **entre 0,2 y 0,5 mm** [NT44, pág. 55] [NT704, pág. 55].
  - Margen general de ajuste: **entre 0,3 y 0,6 mm** [NT485, pág. 73].
- **Contenido de carbono en el disco**: **< 0,6% C** [NT44, pág. 55] [NT704, pág. 55].

## Anomalías frecuentes

Las fallas más comunes observadas en el acoplamiento son:
- **Desgaste del material de fricción**: ocasionado por un patinado continuo entre la cara de la polea y el plato de arrastre [NT231, pág. 74] [NT274, pág. 71] [NT485, pág. 72] [NT679].
- **Fallo eléctrico de la bobina**: interrupción, cortocircuito, fogueo o derivación a masa por sobretemperatura [NT231, pág. 74] [NT257, pág. 7] [NT274, pág. 73] [NT485, pág. 72] [NT679]. Generalmente no es la causa raíz, sino la consecuencia de la excesiva resistencia mecánica o gripado del compresor [NT44, pág. 55] [NT704, pág. 55].
- **Desajuste del entrehierro**: espacio libre fuera de tolerancia por pérdida o desgaste de las arandelas de reglaje [NT257, pág. 7] [NT485, pág. 73] [NT679].
- **Deterioro de elementos mecánicos**: holgura, ruidos o gripado del rodamiento de la polea [NT231, pág. 74] [NT257, pág. 7] [NT485, pág. 188], así como deformación en los flejes o láminas elásticas [NT231, pág. 74] [NT274, pág. 71].

## Comportamiento en avería

En caso de interrupción eléctrica o avería de la bobina, el plato no es atraído, el compresor no gira y el sistema es incapaz de generar frío en el habitáculo [NT203, pág. 25] [NT231, págs. 73-74] [NT257, pág. 7] [NT485, pág. 72] [NT527, pág. 1] [NT535, pág. 25] [NT679]. Este componente no dispone de función sustitutiva [NT527, pág. 1] [NT535, pág. 25].

Si se produce un patinado constante por rozamiento o agarrotamiento mecánico del compresor, el aumento de temperatura destruye el aislamiento térmico de la bobina electromagnética, generando ruidos mecánicos, olor a quemado e impidiendo alcanzar las presiones de trabajo [NT44, pág. 55] [NT257, pág. 7] [NT274, págs. 72-73] [NT485, pág. 188] [NT679] [NT704, pág. 55]. Asimismo, los relés de protección cortarán el acoplamiento ante congelación del evaporador o sobrepresiones del gas [NT739, pág. 10].

## Cómo comprobarlo

El procedimiento de comprobación técnica se realiza mediante los siguientes pasos:
1. **Verificación del entrehierro**: Con el motor parado, medir el juego de montaje con una galga de espesores en tres puntos equidistantes a 120º entre la polea y el plato [NT44, pág. 55] [NT231, pág. 76] [NT257, pág. 7] [NT274, pág. 73] [NT485, pág. 73] [NT679] [NT704, pág. 55].
2. **Comprobación de la bobina**: Medir la continuidad y la resistencia eléctrica de la bobina con un ohmímetro [NT231, pág. 76] [NT257, pág. 7] [NT274, pág. 71] [NT485, pág. 98] [NT679].
3. **Verificación del circuito eléctrico**: Con un multímetro en voltios, comprobar la presencia de tensión de batería (12 V ó 24 V) en el conector al activar la climatización, o excitar directamente a 12 V para comprobar la atracción magnética [NT485, pág. 74] [NT679].
4. **Diagnóstico con equipo de autodiagnosis**: Utilizar la función "03" (diagnosis de actuadores) y la función "08" (bloque de valores de medición, grupo 001, campo 1) [NT203, págs. 36-37].
5. **Inspección de la polea**: Comprobar el alabeo geométrico y el estado del perfil de la polea [NT231, pág. 76].

## Mantenimiento

El mantenimiento del conjunto comprende el **ajuste de la distancia de entrehierro** intercalando, añadiendo o retirando arandelas de reglaje de precisión o juntas de papel de ajuste en el tope del eje del plato [NT44, pág. 55] [NT257, pág. 7] [NT274, págs. 71-72] [NT485, pág. 73] [NT679] [NT704, pág. 55]. En las revisiones periódicas se debe controlar la resistencia del devanado de la bobina, el alabeo de la polea o proceder a la sustitución completa del conjunto de polea y electroimán si está dañado [NT231, pág. 76] [NT679].

## Discrepancias

- En relación con el entrehierro en reposo, [NT485] señala una distancia general de 0,3 a 0,6 mm, mientras que [NT44] y [NT704] desglosan el valor exacto según el fabricante del compresor: 0,4 a 0,8 mm para marcas Sanden y 0,2 a 0,5 mm para marcas Nippondenso.
- Respecto a la tensión eléctrica de trabajo, la mayoría de fichas ([NT44], [NT203], [NT257], [NT679], [NT704]) especifican únicamente 12 V de corriente continua, mientras que [NT485] amplía la especificación técnica indicando sistemas de 12 V o 24 V de corriente continua.

## Imágenes requeridas

- [NT44_01] Despiece y estados (desactivado y activado) del acoplamiento magnético del compresor
- [NT203_01] Sección del acoplamiento magnético N25 sobre el cuerpo del compresor
- [NT231_01] Despiece e identificación de componentes del embrague electromagnético
- [NT257_01] Esquema del acoplamiento electromagnético con detalle del espacio libre A y rodamiento
- [NT274_01] Despiece del acoplamiento electromagnético con la polea, bobina magnética y disco de arrastre de flejes
- [NT485_01] Detalle de la holgura entre el disco frontal y la polea (0,0 mm conectado y 0,3 a 0,6 mm desconectado)
- [NT527_01] Esquema del acoplamiento magnético N25 mostrando la bobina electromagnética, el compresor, el embrague y la polea de arrastre
- [NT535_01] Despiece del acoplamiento magnético N25 con bobina electromagnética, embrague, polea de arrastre y compresor
- [NT679_01] Sección del embrague electromagnético en posición desactivada (con holgura) y activada
- [NT704_01] Acoplamiento de embrague electromagnético en posición desactivada y activada con indicación del juego de montaje
- [NT739_01] Sección numerada del embrague electromagnético mostrando el plato, remaches, ballestas, cubo, rodamiento, bobina y polea
- [NT739_02] Esquema del funcionamiento del embrague electromagnético en posición desembragada (sin corriente) y embragada (con corriente)
- [NT797_01] Despiece del conjunto electroembrague mostrando el plato de presión, polea con rodamiento y bobina electromagnética
