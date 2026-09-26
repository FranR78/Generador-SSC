---
id: ssc.maestra.valvula-expansion
modulo: ssc
unidad: clima
nt: 1006
tipo: elemento
clase: componente
titulo: "Válvula de expansión"
codigo: "VALV-EXP"
menu: "Válvula de expansión"
grupo: "Circuito frigorífico"
clave: valvula-expansion
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
estado: pendiente
fusionadas: [15, 53, 54, 219, 234, 248, 277, 490, 614, 658, 689, 710, 727, 788, 804, 885, 918, 919, 920]
huella: a1f53f9adb58
modelo: gemini-3.8-flash
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

Constituye el punto de **separación física** entre la zona de alta presión y la zona de baja presión del circuito frigorífico (NT53, pág. 74; NT54, pág. 76; NT219, págs. 18-19; NT248, pág. 18; NT277, págs. 77-78; NT490, pág. 104; NT710, pág. 1; NT727, pág. 3; NT788, pág. 37; NT804, págs. 24-25; NT885, pág. 1; NT918, pág. 24; NT919, pág. 24).

Provoca la **distensión o caída brusca de presión y temperatura** del agente frigorífico líquido (R134a) procedente del condensador y filtro deshidratante, pulverizándolo a la entrada del evaporador para permitir e iniciar su evaporación (NT15, pág. 20; NT234, págs. 102, 104; NT277, págs. 77-78; NT490, pág. 104; NT614, págs. 10-11; NT689, págs. 79, 81; NT804, págs. 24-25; NT885, pág. 1; NT918, pág. 24; NT920, pág. 1).

Regula y dosifica de forma continua el **caudal másico** inyectado al evaporador en función de la temperatura y la carga térmica, estabilizando la presión de evaporación, manteniendo una refrigeración uniforme y asegurando un recalentamiento que impida el retorno de líquido al compresor (NT53, págs. 74-75; NT54, págs. 74, 76; NT219, págs. 18-19; NT234, págs. 102, 104; NT248, pág. 18; NT658, pág. 7; NT710, pág. 1; NT788, pág. 37; NT885, págs. 1, 10; NT920, págs. 1-2).

## Tipos y características

Se instala justo a la **entrada del evaporador** (NT15, págs. 20, 22; NT219, pág. 18; NT248, pág. 18; NT710, pág. 1; NT788, pág. 37; NT804, págs. 24-25; NT920, pág. 1). En el circuito de alta presión, junto a ella puede montarse el presostato F129 o el transmisor G65 (NT658, pág. 7).

Su cuerpo se construye en aleación ligera de aluminio o estampado de **latón de grano compacto** (NT277, págs. 79-80; NT920, págs. 1, 3). Consta de diafragma superior de acero inoxidable, pistón/varilla de empuje, platillo con bola o aguja modulante, muelle de recalentamiento de acero, filtro de malla fina de entrada y racores cónicos, con junta tórica o brida (NT885, págs. 12, 14; NT920, pág. 1). Se dimensiona según su capacidad frigorífica (en TON) y su recalentamiento estático de regulación (en K) (NT234, pág. 104; NT885, págs. 1-2).

### Válvula con bulbo o sensor exterior (Tipo L o en ángulo)
Dispone de un bulbo sensor fijado externamente al tubo de salida del evaporador y conectado por un **tubo capilar** cargado con fluido térmico sensible (NT53, págs. 74-75; NT234, págs. 107, 109; NT490, pág. 104; NT614, pág. 10; NT689, págs. 83, 90; NT788, págs. 37-38; NT918, pág. 24). Empleada en vehículos veteranos (NT53, pág. 74). Puede ser:
- **Con equilibrado/estabilizador interior**: toma la presión de referencia en la propia entrada del evaporador a través de un canal interno; válida para bajas pérdidas de carga (NT689, págs. 83, 93; NT788, pág. 38; NT885, págs. 4-5; NT920, págs. 3-4).
- **Con equilibrado/estabilizador exterior (ecualizador)**: toma la presión al final del evaporador mediante un conducto o capilar externo adicional, eliminando el error por pérdida de carga del evaporador (NT689, págs. 83, 95; NT788, pág. 38; NT885, págs. 4-6; NT920, págs. 3-4).

### Válvula monobloque o en «H» (bulbo/diafragma interior)
Diseño compacto de aleación de aluminio donde los tramos de entrada y salida del evaporador atraviesan el propio cuerpo monobloc (NT54, págs. 74, 76-77; NT277, págs. 79-80; NT490, pág. 104; NT614, págs. 10-11; NT689, pág. 81; NT788, págs. 37, 39; NT804, págs. 24-25; NT885, págs. 4, 9; NT919, págs. 24-25; NT920, págs. 4-5). Generalizada en vehículos modernos (NT54, pág. 74; NT788, pág. 39). El cabezal térmico integra el elemento sensible y taladros internos de compensación conectados al paso de retorno (NT54, págs. 76-77; NT919, págs. 24-25; NT920, pág. 5). Requiere obligatoriamente coquilla de **aislamiento térmico exterior** si se monta en el compartimento motor (NT54, pág. 76; NT614, págs. 10-11; NT919, pág. 25; NT920, pág. 5).

### Variantes según la carga del bulbo sensor
- **Carga gaseosa**: mínima masa de refrigerante gaseoso con condensación parcial; ofrece respuesta ultrarrápida pero propensión al bombeo (NT885, págs. 8, 32).
- **Carga líquida**: volumen suficiente de líquido que no evapora del todo; respuesta más lenta y estable (NT885, pág. 8).
- **Carga de adsorción**: contiene gas refrigerante y carbón activo (ej. R13 en TGK); amortigua oscilaciones al retener o liberar moléculas según la temperatura (NT885, págs. 7, 9, 29-32).
- **Carga cruzada**: bulbo cargado con refrigerante distinto al del circuito (como contexto de diseño: R12 en bulbo con R134a en circuito, o viceversa) (NT885, pág. 7).
- **Carga mixta**: mezcla de fluidos en el bulbo (ej. R12 + NH2 + ...) (NT885, pág. 7).

### Tubo de orificio calibrado (Orifice Tube - OT)
Dispositivo de estrangulamiento fijo de tubo calibrado con mallas filtrantes integradas a la entrada y a la salida, sin regulación térmica móvil (NT219, pág. 18; NT248, pág. 18; NT490, págs. 104, 114). Se identifica mediante **código de colores** (rojo en Ford; azul o blanco en Audi/VW/GM) (NT490, págs. 116-117).

## Principio de funcionamiento

El refrigerante líquido a alta presión atraviesa el orificio calibrado interno estrangulándose y pulverizándose hacia el evaporador, pasando a ser una mezcla difásica de baja presión y baja temperatura formada por un **30 % vapor y 70 % líquido** en peso (NT15, págs. 20, 22; NT490, pág. 104; NT689, págs. 97, 110; NT885, pág. 18).

El caudal inyectado se regula mediante el **equilibrio dinámico de tres fuerzas** aplicadas sobre el diafragma móvil (NT53, pág. 75; NT234, págs. 105, 119; NT689, pág. 100; NT885, págs. 20-21; NT918, pág. 24; NT920, págs. 4-5):
- **F1 / Fa / PFü (Fuerza de apertura)**: presión ejercida en la cara superior del diafragma por la dilatación del gas del bulbo térmico, sensible a la temperatura del tubo de retorno del evaporador (NT53, pág. 75; NT234, pág. 119; NT689, pág. 100; NT885, pág. 20; NT918, pág. 24).
- **F2 / Fb / PSa (Fuerza de cierre)**: presión del refrigerante en el evaporador aplicada sobre la cara inferior del diafragma directamente o por conductos internos (NT53, pág. 75; NT234, pág. 119; NT689, pág. 100; NT885, pág. 20; NT918, pág. 24).
- **F3 / Fc / PFe (Fuerza de cierre)**: fuerza mecánica ejercida por el muelle interno tarado de sobrecalentamiento, que tiende a cerrar la bola o aguja modulante (NT53, pág. 75; NT234, págs. 105, 119; NT689, pág. 100; NT885, págs. 13, 21; NT918, pág. 24).

La posición se mantiene estable bajo la condición de equilibrio: **Fa = Fb + Fc** (o F1 = F2 + F3) (NT234, pág. 119; NT885, pág. 21):
- **Aumento de temperatura a la salida del evaporador** (mayor demanda o calor): el gas del bulbo se calienta y dilata (sube pa), empujando el diafragma y la varilla; la bola abre la sección de paso, aumentando el caudal inyectado para incrementar la potencia frigorífica (NT53, págs. 74-75; NT54, págs. 76-77; NT277, págs. 79-81; NT490, pág. 104; NT614, págs. 10-11; NT788, págs. 38-39; NT804, págs. 25-26; NT885, pág. 27; NT918, pág. 24; NT919, págs. 25-26; NT920, pág. 5).
- **Disminución de temperatura a la salida del evaporador** (menor demanda): el gas del sensor se enfría y contrae (cae pb); las fuerzas Fb y Fc superan a Fa, cerrando parcialmente la aguja para restringir el flujo y evitar la llegada de líquido al compresor (NT53, pág. 75; NT54, págs. 76-77; NT219, pág. 19; NT277, págs. 79-81; NT490, pág. 104; NT614, págs. 10-11; NT788, págs. 38-39; NT804, págs. 25-26; NT885, pág. 27; NT918, pág. 24; NT919, págs. 25-26; NT920, pág. 5).
- **Parada del compresor**: al cesar la aspiración, la presión de baja (Fb/Pe) sube rápidamente y la válvula cierra por completo (NT885, pág. 28).

## Valores de trabajo

Parámetros y condiciones de trabajo reflejados en manuales:

- **Presión interna máxima admisible**: 15 bar (presiones mayores deforman la membrana irreversiblemente) (NT234, pág. 123; NT885, pág. 40).
- **Filtrado de impurezas**: tamaño máximo admisible de partículas de 50 micras (NT234, pág. 123; NT885, pág. 41).
- **Recalentamiento en evaporador**: margen de trabajo admisible entre 2 ºC y 10 ºC (ajustado en fábrica según K) (NT234, pág. 116; NT885, pág. 2; NT920, pág. 3).
- **Condición a 30 ºC de temperatura exterior**: presión de baja a la salida estabilizada entre 1,8 y 2,2 bar (NT490, págs. 104, 165).
- **Inclinación del sensor sobre tubo de salida**: aproximadamente a 30º respecto a la horizontal (NT689, pág. 112).
- **Dimensiones de racores estándar**: entrada de 3/8" (rosca 8/8" UNF 18 hilos/pulgada) y salida de 1/2" (rosca 3/4" UNF 16 hilos/pulgada) (NT920, pág. 1).
- **Régimen de motor para pruebas**: 1.500 - 1.700 r.p.m. (NT53, pág. 79; NT54, pág. 79).
- **Estabilidad de depresión en prueba de frío**: retención mínima durante 3 minutos (NT53, pág. 79; NT54, pág. 79).
- **Regulación del muelle**: tarado fijado en fábrica; tornillo o tapón inalterable (NT53, pág. 75; NT54, pág. 76; NT219, pág. 33; NT248, pág. 33; NT277, pág. 80; NT804, pág. 25; NT885, pág. 40; NT918, pág. 24; NT920, pág. 3).

## Anomalías frecuentes

Las incidencias registradas en la válvula de expansión son:
- **Obstrucción física del orificio o filtro**: acumulación de impurezas o limaduras superiores a 50 micras procedentes del circuito o del compresor (NT219, págs. 18, 20; NT234, págs. 110, 123; NT248, págs. 17, 20; NT490, págs. 99, 116; NT689, págs. 50, 52; NT710, pág. 1; NT885, pág. 41).
- **Taponamiento por gota de hielo**: congelación de humedad residual en el orificio calibrado por saturación del filtro deshidratante (NT219, pág. 18; NT234, pág. 110; NT277, págs. 79-80; NT490, págs. 99, 116; NT689, págs. 50, 52; NT885, pág. 41).
- **Pérdida de gas en el bulbo/cabezal**: producida por torsión, plegado o fractura del tubo capilar o agrietamiento del diafragma, anulando la fuerza de apertura Fa (NT53, págs. 75-76; NT54, págs. 75-76; NT234, págs. 110, 121; NT277, págs. 79-80; NT490, págs. 116, 171; NT689, págs. 50, 52; NT804, pág. 25; NT885, pág. 39; NT918, pág. 24).
- **Bloqueo mecánico o agarrotamiento**: bola, aguja o varilla trabada por barnices, desgaste o deformación del diafragma por picos superiores a 15 bar (NT234, pág. 123; NT277, págs. 79-80; NT490, pág. 174; NT614, pág. 10; NT885, pág. 40).
- **Bombeo (hunting)**: oscilaciones inestables de apertura y cierre debidas a una respuesta térmica excesivamente rápida del bulbo de carga gaseosa (NT885, págs. 34-36).
- **Falta del aislamiento térmico o sensor mal ubicado**: recepción de calor directo del vano motor o mal contacto en el tubo, alterando la curva de regulación (NT54, pág. 76; NT614, págs. 10-11; NT919, pág. 25; NT920, págs. 3, 5).
- **Válvula adaptable inadecuada o desajustada**: montaje de una pieza con características térmicas y calibre discordantes, o alteración del tapón/tornillo de reglaje de fábrica (NT53, pág. 75; NT234, págs. 121-122; NT885, págs. 36-38, 40; NT918, pág. 24; NT920, pág. 3).

## Comportamiento en avería

Según el modo de fallo presentado por el elemento:

- **Válvula bloqueada en posición cerrada u obturada**: el flujo cae drásticamente. La presión de baja desciende hacia valores negativos (-1 bar o vacío) o 0 bar (NT53, pág. 79; NT54, pág. 79; NT234, págs. 110, 121; NT277, págs. 78-80; NT490, págs. 171, 174; NT689, págs. 50, 52). La alta presión sube, el evaporador no produce frío y en sistemas con compresor de cilindrada variable se manifiesta un **ralentí irregular** (NT53, pág. 79; NT54, pág. 79).
- **Válvula bloqueada en apertura excesiva**: no realiza la caída de presión requerida. La presión de baja asciende anómalamente (de 3,5 a 4,5 bar) (NT490, pág. 174), el evaporador se anega y se genera **retorno de líquido con riesgo de rotura de válvulas del compresor** (golpe de líquido) y escarcha en el conducto de baja (NT53, pág. 79; NT54, pág. 79; NT219, pág. 20; NT234, pág. 110; NT277, págs. 78-80; NT490, págs. 172, 174; NT614, pág. 11; NT689, págs. 50, 52; NT920, pág. 3).
- **Presencia de hielo intermitente**: el climatizador enfría al inicio, pero deja de enfriar a los pocos minutos por formación del tapón de hielo; al detener el vehículo el calor funde el hielo y vuelve a enfriar temporalmente al reanudar la marcha (NT490, págs. 171-172).
- **Falta de aislamiento o desajuste de reglaje**: oscilaciones bruscas térmicas en habitáculo, ciclos cortos del compresor con sobrecarga sobre la correa auxiliar y fallo global de potencia frigorífica (NT248, pág. 20; NT710, pág. 1; NT885, págs. 2, 38; NT919, pág. 25; NT920, págs. 3, 5).

## Cómo comprobarlo

Pasos metódicos de diagnóstico en taller:

1. **Inspección visual y fijación**: verificar la estanqueidad de empalmes y cuerpo, la ausencia de torsión o rotura en el tubo capilar y la integridad del aislamiento térmico (NT234, pág. 122; NT248, pág. 21; NT710, pág. 1; NT885, pág. 39). En válvulas tipo L, comprobar que la zona de contacto del sensor esté limpia, orientada a unos 30º en un tramo horizontal y fijada firmemente con su muelle de retención (NT689, pág. 112; NT920, pág. 3).
2. **Medición dinámica de presiones y temperaturas**: arrancar el motor entre **1.500 y 1.700 r.p.m.** con el climatizador conectado y manómetros instalados (NT53, pág. 79; NT54, pág. 79; NT219, pág. 21; NT248, pág. 21; NT710, pág. 1). Evaluar el salto térmico entre entrada y salida del evaporador y verificar que el recalentamiento esté comprendido entre 2 ºC y 10 ºC (NT234, pág. 116; NT277, pág. 158; NT614, pág. 11; NT689, págs. 97, 110).
3. **Prueba funcional de frío (con spray enfriador)**: aplicar frío directo sobre el bulbo sensor o cabezal térmico (NT53, pág. 79; NT54, pág. 79; NT490, págs. 171, 175). En compresor fijo, la presión de baja debe descender gradualmente hacia el vacío; al apagar el A/C manteniendo el frío, la **depresión debe mantenerse al menos 3 minutos** (si la presión sube, la fuga es del compresor) (NT53, pág. 79; NT54, pág. 79). En compresor variable, el cierre completo inducirá un ralentí inestable (NT53, pág. 79; NT54, pág. 79).
4. **Prueba funcional de calor**: aplicar calor al bulbo/cabezal. En compresor fijo, la presión de baja debe subir y la de alta bajar progresivamente; en compresor variable, la apertura máxima provoca la aparición de escarcha en la tubería de baja (NT53, pág. 79; NT54, pág. 79).
5. **Comprobación acústica**: escuchar el flujo de pulverización continua sin chasquidos ni siseos erráticos de cavitación (NT219, págs. 20-21; NT248, págs. 20-21; NT710, pág. 1).

## Mantenimiento

Pautas de intervención y precauciones en taller:

- **Prohibición de reglaje**: nunca manipular, apretar o girar el tornillo o tuerca de tarado del muelle ni el tapón inferior preajustado de fábrica (NT53, pág. 75; NT54, pág. 76; NT219, pág. 33; NT234, pág. 122; NT248, pág. 33; NT277, pág. 80; NT804, pág. 25; NT885, pág. 40; NT918, pág. 24; NT920, pág. 3).
- **Criterio de sustitución**: ante fallos mecánicos de cierre/apertura, fuga del fluido sensor o gripado del compresor con limaduras, sustituir la válvula por una pieza nueva con idéntica capacidad (Ton) y recalentamiento (K) (NT53, pág. 75; NT54, pág. 76; NT219, pág. 39; NT490, pág. 175; NT689, págs. 50, 52; NT885, págs. 1, 38).
- **Sustitución vinculada del deshidratador**: es obligatorio reemplazar el filtro deshidratante siempre que se monte una válvula nueva o cada dos años como prevención ante la humedad (NT490, pág. 172; NT885, pág. 41), verificando el aceite en el compresor (NT490, pág. 172).
- **Protocolo de montaje**: recuperar refrigerante, limpiar el circuito si hubo gripado, sustituir todas las juntas tóricas por recambios nuevos y realizar obligatoriamente un **vacío profundo de al menos 45 minutos** (NT53, pág. 75; NT54, pág. 76).
- **Protección contra contaminación y sobrepresión**: taponar mangueras inmediatamente tras la desconexión para vetar partículas superiores a 50 micras (NT234, pág. 123; NT885, pág. 41) y no superar 15 bar durante pruebas neumáticas de presión interna (NT234, pág. 123; NT885, pág. 40).
- **Aislamiento**: reinstalar siempre los aislamientos térmicos originales envolviendo el cuerpo de la válvula y el bulbo sensor para evitar transferencias de calor del compartimento motor (NT53, pág. 75; NT54, pág. 76; NT614, pág. 11; NT919, pág. 25; NT920, págs. 3, 5).

## Discrepancias

- Presión y temperatura de entrada: NT15 (pág. 22) indica 14 bares en fase líquida a 55 ºC, mientras que NT689 (págs. 97, 110) registra 14 bar / kg/cm² a +50 ºC.
- Presión y temperatura de salida hacia el evaporador: NT15 (pág. 22) especifica una caída a 1,2 bares y -7 ºC; NT689 (págs. 97, 110) indica 1,5 bar / kg/cm² y -6 ºC; NT788 (pág. 37) cita un ejemplo de caída de 20 bar a 3 bar; NT490 (págs. 104, 165) establece que a 30 ºC ambiente la presión de baja a la salida se sitúa entre 1,8 y 2,2 bar; y NT885 (pág. 36) sitúa los valores de trabajo típicos de expansión correcta en 4 bar y 9 ºC a la salida de la válvula (frente a 6 bar y 21 ºC en una válvula adaptable inadaptada).

## Imágenes requeridas

- [NT53_01] Sección de la válvula de expansión con bulbo exterior mostrando la ubicación del diafragma, muelle regulador, válvula de bola y las tres fuerzas que actúan sobre ella.
- [NT54_01] Sección y esquema de funcionamiento de la válvula de expansión de bulbo interior monobloque en fases de apertura por alta temperatura y cierre por baja temperatura.
- [NT219_01] Corte funcional de la válvula de expansión mostrando el paso de regulación de caudal.
- [NT234_01] Sección de la válvula de expansión monobloc con la cabeza termostática, membrana, varilla, muelle y bola.
- [NT277_01] Sección de la válvula de expansión monobloc en H mostrando la cabeza térmica, diafragma, varilla de empuje y bola.
- [NT490_01] Sección interna de una válvula de expansión monobloc en H y tubo OT.
- [NT614_01] Detalle en corte de la válvula de expansión monobloque con diafragma interno, varilla de émbolo y muelle.
- [NT689_01] Sección y esquema de fuerzas (PFü, PSa, PFe) en una válvula de expansión monobloc con diafragma.
- [NT788_01] Vista seccionada de válvula de expansión tipo L con orificio calibrado, válvula de bola, muelle, vástago, membrana y sonda termostática.
- [NT788_02] Válvula de expansión tipo H en bloque montada a la entrada del evaporador.
- [NT804_01] Sección de la válvula de expansión monobloc mostrando el cabezal térmico, el diafragma, la válvula de bola y las vías de alta y baja presión.
- [NT885_01] Esquema comparativo de válvulas de expansión (bloque, ángulo y orificio calibrado).
- [NT885_02] Sección en despiece de la válvula de expansión termostática con indicación de la cabeza termostática, vástago, membrana, muelle de reglaje, bola o cabeza de válvula y conexiones.
- [NT885_03] Diagrama de las fuerzas F1 (presión bulbo), F2 (presión evaporador) y F3 (muelle) actuando sobre la membrana de la válvula.
- [NT885_04] Curva temporal de presión y apertura de válvula mostrando el fenómeno de inestabilidad por bombeo.
- [NT885_05] Esquema comparativo entre la válvula de origen (4 bar / 9 ºC) y una válvula adaptable inadaptada (6 bar / 21 ºC y 5 bar / 25 ºC en evaporador).
- [NT918_01] Esquema de la válvula termostática de expansión con tubo de sensor mostrando el diafragma, muelle regulador, válvula de bola y la acción de las tres fuerzas P_FÜ, P_Sa y P_Fe.
- [NT919_01] Sección de la válvula de expansión de nueva generación con cabezal térmico, diafragma, varilla de émbolo, taladros de compensación, válvula de bola y muelle regulador.
- [NT919_02] Secuencia de regulación indicando las variaciones de presión p_a y p_b en el cabezal térmico y el movimiento de la varilla de émbolo sobre la válvula de bola.
- [NT920_01] Esquema funcional de la válvula de expansión termostática con diafragma, muelle, elemento modulante, racores y sensor termostático.
- [NT920_02] Sección comparativa de las válvulas de expansión con estabilizador interior, estabilizador exterior y monobloc en H.
