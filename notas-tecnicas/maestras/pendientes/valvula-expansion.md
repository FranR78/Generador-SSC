---
id: ssc.maestra.valvula-expansion
modulo: ssc
unidad: clima
nt: 1006
tipo: elemento
clase: componente
titulo: "Válvula de expansión"
codigo: "MASTER_VALVULA_EXPANSION"
menu: "Válvula de expansión"
grupo: "Circuito frigorífico"
clave: valvula-expansion
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
estado: pendiente
fusionadas: [15, 53, 54, 219, 234, 248, 277, 490, 614, 658, 689, 710, 727, 788, 804, 885, 918, 919, 920]
huella: a1f53f9adb58
modelo: gemini-3.6-flash
fuentes: "Fusión de 19 fuentes"
niveles:
  "Misión": basico
  "Tipos y características": basico
  "Principio de funcionamiento": intermedio
  "Valores de trabajo": intermedio
  "Anomalías frecuentes": avanzado
  "Comportamiento en avería": avanzado
  "Cómo comprobarlo": avanzado
  "Mantenimiento": avanzado
faltan:
  - "NT920: 100%"
---

## Misión

La misión principal es **distensar, pulverizar y expandir** el agente frigorífico líquido (R134a) procedente del condensador y del filtro deshidratante a la entrada del evaporador, provocando un descenso rápido y brusco de presión y temperatura e iniciando la evaporación (NT15, pág. 20; NT53, págs. 74-75; NT54, págs. 74, 76; NT219, págs. 18-19; NT234, págs. 102, 104; NT248, pág. 18; NT277, págs. 77-78; NT490, pág. 104; NT614, págs. 10-11; NT689, págs. 79, 81, 83; NT788, pág. 37; NT804, págs. 24-25; NT885, págs. 1, 10, 18; NT918, pág. 24; NT919, pág. 24; NT920, pág. 1).

Constituye el **punto de separación física y delimitación** entre la zona de alta presión y la zona de baja presión del circuito de aire acondicionado (NT53, pág. 74; NT54, pág. 76; NT219, págs. 18-19; NT248, pág. 18; NT277, págs. 79-81; NT490, pág. 104; NT658, pág. 7; NT710, pág. 1; NT727, pág. 3; NT788, pág. 37; NT804, págs. 24-25; NT918, pág. 24; NT919, pág. 24; NT920, pág. 1).

Dosifica, regula y controla el flujo y caudal inyectado al evaporador en función de la temperatura del vapor a la salida del evaporador, la presión y la carga térmica para obtener la máxima potencia frigorífica y mantener un **recalentamiento constante** (NT53, págs. 74-75; NT54, págs. 74, 76; NT219, págs. 18-19; NT234, págs. 102, 104; NT248, pág. 18; NT277, págs. 77-78; NT490, pág. 104; NT614, págs. 10-11; NT689, págs. 79, 81, 83; NT710, pág. 1; NT727, pág. 3; NT788, pág. 37; NT804, págs. 24-25; NT885, págs. 1, 10, 11; NT918, pág. 24; NT919, pág. 24; NT920, págs. 1, 2).

Garantiza la evaporación completa en el evaporador para asegurar que el refrigerante retorne al compresor en estado **estrictamente gaseoso** (NT219, pág. 19; NT248, pág. 18; NT710, pág. 1; NT727, pág. 3; NT920, pág. 3).

Cumple simultáneamente una **función dosificadora** (creando la diferencia de presión en líquido pulverizado) y una **función modulante** (ajustando el caudal entre máxima apertura y cierre), realizando el análisis de la temperatura de evaporación, la estabilización de la presión y el control del sobrecalentamiento (NT920, págs. 1, 2).

## Tipos y características

Se instala justo entre el filtro deshidratante y la entrada del evaporador (NT15, págs. 20, 22; NT219, pág. 18; NT234, págs. 107, 109; NT248, pág. 18; NT658, pág. 7; NT710, pág. 1; NT788, pág. 37; NT804, págs. 24-25; NT920, pág. 1). En el circuito se monta junto al conmutador de presión **F129** o el transmisor electrónico **G65** según motorización (NT658, pág. 7).

Su cuerpo está fabricado en **estampado de latón de grano compacto** o en aleación ligera/aluminio (NT277, págs. 79-80; NT920, págs. 1, 3, 4). Consta de un diafragma superior de acero inoxidable conectado por pistón y varilla al elemento modulante, muelle de presión de acero, filtro de malla fina a la entrada para retener impurezas y racores de conexión cónicos, con junta tórica o de brida (NT920, pág. 1).

Se dimensiona específicamente para cada circuito según su **capacidad frigorífica** (expresada en TON, ej. 1,5 TON, 2 TON) y el **recalentamiento** que asegura (expresado en K, ej. 2 K, 3,5 K) (NT234, pág. 104; NT885, págs. 1, 2).

[NT788_02]

[NT885_01]

[NT885_02]

[NT920_02]

Se clasifica según el equilibrado de presión (NT885, págs. 4-6; NT920, págs. 3, 4):
- **Equilibrado/estabilizador interior**: mide la presión al principio de la evaporación mediante un canal interior. Indicado para instalaciones de poca capacidad y bajas pérdidas de carga (NT885, pág. 5; NT920, págs. 3, 4).
- **Equilibrado/estabilizador exterior (ecualizador)**: mide la presión al final de la evaporación mediante un tubo capilar y racor externo, eliminando la influencia de las pérdidas de carga (NT885, págs. 4, 6; NT920, págs. 3, 4).

Se clasifica también según la carga del bulbo (NT885, págs. 6-8):
- **Carga cruzada**: contiene un refrigerante distinto al del circuito, como R12 en bulbo para R134a (dato histórico) (NT885, pág. 7).
- **Carga mixta**: contiene una mezcla de fluidos (R12 + NH2 + ...) (dato histórico) (NT885, pág. 7).
- **Carga de adsorción**: contiene fluido frigorífico y carbono activo, ofreciendo una respuesta diferida para amortiguar fluctuaciones (NT885, págs. 7, 32).
- **Carga gaseosa**: contiene refrigerante en estado gaseoso con masa mínima y respuesta muy rápida (NT885, págs. 8, 32).
- **Carga líquida**: conserva siempre fase líquida y tiene una respuesta más lenta (NT885, pág. 8).

### Válvula de expansión con bulbo exterior (variante: bulbo-exterior)
Empleado en vehículos más antiguos o configuraciones tipo ángulo o L. Dispone de un bulbo sensor o sonda termostática exterior conectada mediante un tubo capilar cargado con gas especial (NT53, págs. 74-75; NT234, págs. 107, 109; NT614, pág. 10; NT689, págs. 83, 90; NT788, págs. 37-38; NT885, pág. 9; NT918, pág. 24; NT920, pág. 1). Viene preajustada de fábrica y no admite manipulación en su tapón inferior (NT53, pág. 75; NT918, pág. 24).

[NT53_01]

### Válvula de expansión con bulbo interior (variante: bulbo-interior)
Válvula monobloque muy compacta con bulbo interior instalada inmediatamente antes del evaporador recubierta por una protección térmica (NT54, págs. 74, 76-77). Preajustada de fábrica sin opción de ajuste manual (NT54, pág. 76).

[NT54_01]

### Válvula de expansión termostática con tubo de sensor (variante: tubo-sensor)
Dispone de un tubo capilar exterior cargado con gas especial, diafragma superior, válvula de bola interna y muelle regulador tarado de fábrica (NT918, pág. 24).

[NT918_01]

### Válvula de expansión de nueva generación (variante: cabezal-termico-integrado)
Válvula monobloque integrada entre el lado de alta y baja presión. Su cabezal térmico dispone de un diafragma con gas especial en la cara superior y taladros de compensación internos conectados a la baja presión en la cara inferior, accionando la bola mediante varilla de émbolo (NT614, págs. 10-11; NT919, págs. 24-25; NT920, pág. 5).

[NT614_01]

[NT919_01]

### Válvula monobloc o en bloque/H
Cuerpo rígido de aleación ligera que integra los pasos de alta y baja presión (NT234, págs. 108, 109; NT277, págs. 79-80; NT490, pág. 104; NT689, pág. 81; NT788, págs. 38-39; NT920, pág. 4).

### Tubo de expansión calibrado (Orificio Calibrado / Orifice Tube - OT)
Estrangulamiento fijo de tubo capilar con mariposa fija y mallas filtrantes, identificado por código de color (rojo para Ford, azul/blanco para Audi/VW/GM) (NT219, pág. 18; NT248, pág. 18; NT490, págs. 104, 114, 116, 117).

[NT490_01]

## Principio de funcionamiento

Desarrolla dos funciones simultáneas: dosificadora (su orificio calibrado transforma el líquido a alta presión en una **mezcla difásica de 30 % vapor y 70 % líquido** en peso a baja presión y temperatura) y modulante (regula el caudal en función de la temperatura del evaporador) (NT490, págs. 104, 110; NT689, págs. 97, 110; NT885, pág. 18; NT920, págs. 1, 10).

La regulación se realiza mediante el equilibrio de **tres fuerzas opuestas** sobre la membrana o diafragma (Fa = Fb + Fc o F1 = F2 + F3 o PFü = PSa + PFe):
1. **Fuerza de apertura (Fa / F1 / PFü / pa)**: ejercida sobre la cara superior por la presión del gas del bulbo/cabezal al dilatarse por el aumento de temperatura a la salida del evaporador (NT53, pág. 75; NT234, pág. 119; NT277, págs. 79-81; NT614, págs. 10-11; NT689, pág. 100; NT788, págs. 38-39; NT804, págs. 25-26; NT885, págs. 20-22; NT918, pág. 24; NT919, pág. 25; NT920, págs. 4-5).
2. **Fuerza de cierre del evaporador (Fb / F2 / PSa)**: ejercida por la presión de baja del evaporador sobre la cara inferior del diafragma (NT53, pág. 75; NT234, pág. 119; NT277, págs. 79-81; NT689, pág. 100; NT885, págs. 20-22; NT918, pág. 24; NT920, págs. 4-5).
3. **Fuerza de cierre del muelle (Fc / F3 / PFe)**: ejercida por el muelle regulador o de recalentamiento tarado de fábrica (NT53, pág. 75; NT234, págs. 105, 119; NT277, pág. 80; NT689, pág. 100; NT788, pág. 38; NT885, págs. 13, 21; NT918, pág. 24; NT920, pág. 4).

Dinámica de funcionamiento:
- Si la temperatura a la salida sube: la presión del bulbo sube, vence las fuerzas de cierre y la varilla **abre la bola** aumentando el caudal (NT53, págs. 74-75; NT54, págs. 76-77; NT219, pág. 19; NT248, pág. 19; NT277, págs. 79-81; NT490, pág. 104; NT614, págs. 10-11; NT710, pág. 1; NT788, págs. 38-39; NT804, págs. 25-26; NT885, págs. 27, 28; NT918, pág. 24; NT919, pág. 25; NT920, pág. 5).
- Si la temperatura a la salida baja: la presión del bulbo cae y el muelle **cierra parcialmente la bola** reduciendo el caudal (NT53, pág. 75; NT54, págs. 76-77; NT219, pág. 19; NT248, pág. 19; NT277, págs. 79-81; NT490, pág. 104; NT614, págs. 10-11; NT710, pág. 1; NT788, págs. 38-39; NT804, págs. 25-26; NT885, págs. 27, 28; NT918, pág. 24; NT919, págs. 25-26; NT920, pág. 5).
- En parada del compresor: la presión de evaporación sube por falta de aspiración y **la válvula se cierra totalmente** (NT885, pág. 28).

En la variante de **carga de adsorción** (bulbo con carbono activo), el carbono captura moléculas de gas a bajas temperaturas y las libera a altas temperaturas, ofreciendo un tiempo de respuesta más largo para amortiguar oscilaciones (NT885, págs. 7, 29, 30, 32).

[NT219_01]

[NT234_01]

[NT277_01]

[NT689_01]

[NT788_01]

[NT804_01]

[NT885_03]

[NT919_02]

[NT920_01]

## Valores de trabajo

A continuación se resumen los parámetros numéricos y de trabajo de la válvula de expansión:

| Parámetro | Valor y unidad | Condiciones / Detalles | Fuente |
|---|---|---|---|
| Presión de entrada (Alta) | **14 bar** | Estado líquido a +55 ºC / +50 ºC | (NT15, pág. 22; NT689, págs. 97, 110) |
| Presión de salida (Baja) | **1,2 - 1,5 bar** | Mezcla líquido/vapor a -7 ºC / -6 ºC | (NT15, pág. 22; NT689, págs. 97, 110) |
| Caída en expansión (ejemplo) | **20 bar a 3 bar** | Ejemplo de funcionamiento | (NT788, pág. 37) |
| Salida en expansión correcta | **4 bar y 9 ºC** | Salida de la válvula | (NT885, pág. 36) |
| Presión de baja (a 30 ºC ext.) | **1,8 a 2,2 bar** | Con temperatura exterior de 30 ºC | (NT490, págs. 104, 165) |
| Salida evaporador a compresor | **1,5 bar y +10 ºC** | Estado vapor | (NT689, págs. 97, 110) |
| Presión máxima admisible | **15 bar** | Límite para no deformar membrana | (NT234, pág. 123; NT885, pág. 40) |
| Tamaño máximo impurezas | **50 micras** | Partículas mayores la bloquean | (NT234, pág. 123; NT885, pág. 41) |
| Régimen de motor en pruebas | **1.500 - 1.700 r.p.m.** | Durante comprobaciones | (NT53, pág. 79; NT54, pág. 79) |
| Tiempo prueba de depresión | **mínimo 3 minutos** | Compresor fijo en prueba de frío | (NT53, pág. 79; NT54, pág. 79) |
| Recalentamiento evaporador | **2 ºC a 10 ºC** | O recalentamiento estático de 2 K a 3,5 K | (NT234, pág. 116; NT885, pág. 2) |
| Inclinación del sensor | **~30º** | Respecto a la horizontal en tubo de salida | (NT689, pág. 112) |
| Racor de entrada estándar | **3/8"** | Rosca 8/8" UNF 18 hilos/pulgada | (NT920, pág. 1) |
| Racor de salida estándar | **1/2"** | Rosca 3/4" UNF 16 hilos/pulgada | (NT920, pág. 1) |
| Reglaje tornillo/muelle | **Inalterable** | Prohibido modificar tarado de fábrica | (NT219, pág. 33; NT248, pág. 33; NT277, pág. 80; NT804, pág. 25; NT920, pág. 3) |

## Anomalías frecuentes

Las anomalías más habituales detectadas en la válvula de expansión son:
- **Plegado, doblado, torsión o rotura del tubo capilar del sensor**: provoca la fuga del gas especial y anula la regulación (NT53, págs. 75-76; NT804, pág. 25; NT885, pág. 39; NT918, pág. 24).
- **Manipulación del tapón o tornillo de reglaje**: descalibra la válvula y causa daños irreversibles inutilizándola (NT53, pág. 75; NT885, pág. 40; NT918, pág. 24; NT920, pág. 3).
- **Ausencia del aislamiento térmico exterior**: la influencia del calor del motor o corrientes de aire altera la curva de regulación (NT54, pág. 76; NT614, págs. 10-11; NT919, pág. 25; NT920, págs. 3, 5).
- **Fuga de la carga de gas del cabezal térmico**: inhabilita el movimiento del diafragma (NT54, págs. 75-76; NT277, págs. 79-80; NT490, pág. 116).
- **Obstrucción por suciedad o congelación**: acumulación de impurezas, barro o limaduras metálicas mayores a 50 micras, o formación de una gota de hielo interna por humedad en el circuito al saturarse el filtro deshidratante (NT219, págs. 18, 20; NT234, pág. 123; NT248, pág. 17; NT277, págs. 79-80; NT490, págs. 99, 116; NT689, pág. 50; NT885, pág. 41).
- **Agarrotamiento de la aguja/bola**: atascada en posición abierta o cerrada (NT490, pág. 116; NT614, págs. 10, 11).
- **Deformación irreversible de la membrana**: por someter el componente a sobrepresión superior a 15 bar (NT234, pág. 123; NT885, pág. 40).
- **Uso de una válvula adaptable inadaptada**: orificio incorrecto que genera 6 bar y 21 ºC a la salida, elevando la evaporación a 5 bar y 25 ºC con un caudal muy débil (NT234, pág. 110; NT885, págs. 36-38).
- **Bombeo de la válvula**: oscilaciones inestables de apertura y cierre por respuesta demasiado rápida (habitual en carga gaseosa) (NT885, págs. 34-36).
- **Posicionamiento incorrecto del sensor termostático** en la salida del evaporador (NT920, pág. 3).
- **Fugas en empalmes o tuberías** y desajuste térmico por sobrecalentamiento (NT219, pág. 20; NT248, págs. 17, 20; NT710, pág. 1).

[NT885_04]

## Comportamiento en avería

Provoca baja potencia frigorífica, rendimiento insuficiente o falta total de frío en el habitáculo (NT219, pág. 20; NT234, págs. 110, 121; NT248, pág. 20; NT614, pág. 11; NT689, pág. 50; NT710, pág. 1; NT885, págs. 2, 38).

- **Si queda bloqueada o obturada en cierre**: la presión de baja cae a 0 bar o vacío (-1 bar), la alta presión sube o se mantiene alta, la temperatura de evaporación sube y no enfría (NT53, pág. 79; NT54, pág. 79; NT277, págs. 78-80; NT490, pág. 171; NT689, pág. 50). En compresores variables genera un **ralentí irregular** (NT53, pág. 79; NT54, pág. 79).
- **Si queda bloqueada en apertura total**: la baja presión sube en exceso (3,5 a 4,5 bar), hay evaporación incompleta, se escarcha la tubería de baja y existe **riesgo de golpe de líquido al compresor** dañando sus válvulas (NT53, pág. 79; NT54, pág. 79; NT219, pág. 20; NT234, pág. 110; NT277, págs. 78-80; NT490, pág. 172; NT614, pág. 11; NT689, pág. 50; NT920, pág. 3).
- **Si hay gota de hielo interna**: el aire acondicionado deja de enfriar intermitentemente; al apagar el equipo el hielo se funde y vuelve a enfriar de forma temporal al arrancar (NT490, pág. 174).
- **Si se produce bombeo o inestabilidad**: origina un funcionamiento cíclico intermitente del compresor, causando desgaste prematuro del compresor y correa auxiliar, con fluctuaciones de frío y calor (NT885, pág. 2).

## Cómo comprobarlo

1. **Inspección visual y acústica**: comprobar que no haya pliegues en el capilar, verificar la estanqueidad de empalmes, colocación de tuberías y escuchar el paso de flujo (NT219, págs. 20-21; NT234, pág. 122; NT248, págs. 20-21; NT710, pág. 1; NT885, pág. 39).
2. **Ubicación del sensor**: verificar que la zona de contacto con la salida del evaporador esté limpia y orientada en tramo horizontal mediante su muelle (NT920, pág. 3).
3. **Prueba de frío y calor** (motor a 1.500 - 1.700 r.p.m.):
   - **Prueba de frío**: aplicar frío o spray enfriador sobre el bulbo/cabezal. En compresor fijo, la baja presión debe caer a depresión; al desconectar el A/C y seguir enfriando, la depresión **debe mantenerse constante al menos 3 minutos** (si sube, la avería es del compresor) (NT53, pág. 79; NT54, pág. 79; NT490, págs. 171, 172, 175). En compresor variable causa ralentí irregular (NT53, pág. 79; NT54, pág. 79). Al quitar el frío debe volver a presión normal; si no reacciona, está defectuosa (NT490, pág. 175).
   - **Prueba de calor**: aplicar calor al bulbo/cabezal. En compresor fijo sube la baja presión y cae la alta (NT53, pág. 79; NT54, pág. 79). En compresor variable se forma escarcha en el tubo de baja (NT53, pág. 79; NT54, pág. 79).
4. **Medición de presiones, temperaturas y recalentamiento**: comprobar que la presión de baja se sitúe entre 1,8 y 2,2 bar (a 30 ºC ext.) y medir el recalentamiento en el evaporador (debe estar entre 2 ºC y 10 ºC) (NT219, pág. 21; NT234, pág. 116; NT248, pág. 21; NT490, pág. 165; NT614, pág. 11; NT710, pág. 1).
5. **Diagnóstico diferencial**: distinguir si el fallo es por válvula inadaptada o por falta de fluido en el circuito (NT885, pág. 38).

[NT885_05]

## Mantenimiento

- **Prohibido manipular el reglaje**: está estrictamente prohibido intentar cualquier ajuste manual, alterar la tuerca de reglaje o girar el tornillo de tarado de fábrica (NT53, pág. 75; NT54, pág. 76; NT219, pág. 33; NT234, pág. 122; NT248, pág. 33; NT277, pág. 80; NT804, pág. 25; NT885, pág. 40; NT918, pág. 24; NT920, pág. 3).
- **Precauciones mecánicas**: no doblar ni plegar el tubo capilar (NT53, pág. 75; NT804, pág. 25; NT918, pág. 24). Evitar golpes que alteren el calibrado y no someter a presiones de prueba superiores a 15 bar (NT234, pág. 123; NT885, págs. 39, 40).
- **Sustitución**: ante avería o presencia de limaduras tras un gripado del compresor, sustituir la válvula por un recambio original de idéntica capacidad (TON) y recalentamiento (K) (NT53, pág. 75; NT54, pág. 76; NT219, pág. 39; NT234, pág. 123; NT689, pág. 50; NT885, págs. 1, 2, 38). Al sustituir la válvula es **obligatorio cambiar el filtro deshidratador** (mínimo cada dos años) y cambiar todas las juntas tóricas (NT54, pág. 76; NT490, pág. 172; NT885, pág. 41).
- **Procedimiento de taller**: recuperar el refrigerante, limpiar el circuito, taponar las mangueras para evitar partículas mayores a 50 micras y realizar un **vacío profundo de al menos 45 minutos** (NT53, pág. 75; NT54, pág. 76; NT234, pág. 123; NT885, pág. 41).
- **Montaje y aislamiento**: colocar el sensor apoyado cerca del paquete de aletas en un tramo horizontal (~30º de inclinación) fijado con su muelle (NT689, pág. 112; NT920, pág. 3). Es obligatorio **reinstalar el aislamiento térmico** envolviendo el sensor, tubos y cuerpo de la válvula (NT53, pág. 75; NT54, pág. 76; NT614, pág. 11; NT919, pág. 25; NT920, págs. 3, 5).

## Discrepancias

- Presión y temperatura de salida hacia el evaporador: NT15 (pág. 22) indica una presión de salida de 1,2 bar y temperatura de -7 ºC (partiendo de entrada a 14 bar y 55 ºC); NT689 (págs. 97, 110) señala una presión de salida de 1,5 bar y temperatura de -6 ºC (partiendo de entrada a 14 bar y +50 ºC); NT788 (pág. 37) menciona un ejemplo de caída de 20 bar a 3 bar; mientras que NT885 (pág. 36) indica una presión de 4 bar y 9 ºC a la salida de la válvula en una expansión correcta.

## Imágenes requeridas

- [NT53_01] Sección de la válvula de expansión con bulbo exterior mostrando la ubicación del diafragma, muelle regulador, válvula de bola y las tres fuerzas que actúan sobre ella
- [NT54_01] Sección y esquema de funcionamiento de la válvula de expansión de bulbo interior monobloque en fases de apertura por alta temperatura y cierre por baja temperatura
- [NT219_01] Corte funcional de la válvula de expansión mostrando el paso de regulación de caudal
- [NT234_01] Sección de la válvula de expansión monobloc con la cabeza termostática, membrana, varilla, muelle y bola
- [NT277_01] Sección de la válvula de expansión monobloc en H mostrando la cabeza térmica, diafragma, varilla de empuje y bola
- [NT490_01] Sección interna de una válvula de expansión monobloc en H y tubo OT
- [NT614_01] Detalle en corte de la válvula de expansión monobloque con diafragma interno, varilla de émbolo y muelle
- [NT689_01] Sección y esquema de fuerzas (PFü, PSa, PFe) en una válvula de expansión monobloc con diafragma
- [NT788_01] Vista seccionada de válvula de expansión tipo L con orificio calibrado, válvula de bola, muelle, vástago, membrana y sonda termostática
- [NT788_02] Válvula de expansión tipo H en bloque montada a la entrada del evaporador
- [NT804_01] Sección de la válvula de expansión monobloc mostrando el cabezal térmico, el diafragma, la válvula de bola y las vías de alta y baja presión
- [NT885_01] Esquema comparativo de válvulas de expansión (bloque, ángulo y orificio calibrado)
- [NT885_02] Sección en despiece de la válvula de expansión termostática con indicación de la cabeza termostática, vástago, membrana, muelle de reglaje, bola o cabeza de válvula y conexiones
- [NT885_03] Diagrama de las fuerzas F1 (presión bulbo), F2 (presión evaporador) y F3 (muelle) actuando sobre la membrana de la válvula
- [NT885_04] Curva temporal de presión y apertura de válvula mostrando el fenómeno de inestabilidad por bombeo
- [NT885_05] Esquema comparativo entre la válvula de origen (4 bar / 9 ºC) y una válvula adaptable inadaptada (6 bar / 21 ºC y 5 bar / 25 ºC en evaporador)
- [NT918_01] Esquema de la válvula termostática de expansión con tubo de sensor mostrando el diafragma, muelle regulador, válvula de bola y la acción de las tres fuerzas P_FÜ, P_Sa y P_Fe
- [NT919_01] Sección de la válvula de expansión de nueva generación con cabezal térmico, diafragma, varilla de émbolo, taladros de compensación, válvula de bola y muelle regulador
- [NT919_02] Secuencia de regulación indicando las variaciones de presión p_a y p_b en el cabezal térmico y el movimiento de la varilla de émbolo sobre la válvula de bola
- [NT920_01] Esquema funcional de la válvula de expansión termostática con diafragma, muelle, elemento modulante, racores y sensor termostático
- [NT920_02] Sección comparativa de las válvulas de expansión con estabilizador interior, estabilizador exterior y monobloc en H
