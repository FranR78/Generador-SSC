```yaml
tipo: componente
titulo: Condensador
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "34-35"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, filtro-deshidratador, electroventilador-condensador]
palabras: [condensación, subenfriamiento, serpentín, tubos y aletas, flujo paralelo]
```

## Misión
Producir el cambio de estado del fluido refrigerante de gas a líquido (condensación) mediante la cesión de calor al aire ambiente exterior. (pág. 34)

## Tipos y características
Intercambiador térmico de alta presión situado en el frontal del vehículo. Existen tres tecnologías de fabricación:
- Serpentín: formado por un solo tubo continuo en forma de serpentín con placas soldadas interpuestas.
- Tubos y aletas: constituido por una serie de tubos superpuestos (habitualmente de cobre) y panel de aletas de aluminio.
- Flujo paralelo: tecnología de mayor eficacia, conformada por tubos paralelos unidos lateralmente con tabiques intermedios en los colectores para intercambiar la dirección del flujo.

📷 IMAGEN: Configuración de un condensador de flujo paralelo con tubos, aletas, racores de entrada/salida y colectores — Fuente: HELLA02.PDF, pág. 35

(pág. 34, 35)

## Principio de funcionamiento
El proceso térmico se realiza en tres fases consecutivas a lo largo del condensador:
1. Enfriamiento de gas supercalentado (Tramo B-C): El gas procedente del compresor a 20 bar y 110 ºC se enfría hasta alcanzar la temperatura de condensación de 68 ºC a 20 bar, reduciendo su temperatura y entalpía.
2. Condensación (Tramo C-D): Cambio de estado de gas a líquido a presión y temperatura constantes (20 bar y 68 ºC), cediendo calor latente al aire exterior.
3. Subenfriamiento (Tramo D-E): Enfriamiento del refrigerante ya en estado líquido, bajando su temperatura de 68 ºC a 60 ºC a la presión de 20 bar.

(pág. 34, 35)

## Valores de trabajo
- Presión y temperatura de entrada (vapor supercalentado): 20 bar a 110 ºC. (pág. 34)
- Temperatura de condensación a 20 bar: 68 ºC. (pág. 35)
- Temperatura y presión de salida (líquido subenfriado): 60 ºC a 20 bar. (pág. 35)

## Anomalías frecuentes
No documentado en fuentes. (pág. 35)

## Comportamiento en avería
No documentado en fuentes. (pág. 35)

## Cómo comprobarlo
No documentado en fuentes. (pág. 35)

## Mantenimiento
No documentado en fuentes. (pág. 35)

---

```yaml
tipo: componente
titulo: Filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "35-36"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, valvula-expansion, refrigerante-r134a]
palabras: [gel de sílice, humedad, impurezas, mirilla, depósito decantador]
```

## Misión
Retener impurezas derivadas del desgaste mecánico, absorber la humedad del circuito, actuar como depósito decantador enviando solo líquido al evaporador y, en algunos modelos, evaluar el estado del fluido a través de una mirilla. (pág. 35, 36)

## Tipos y características
Componente pasivo ubicado en la línea de alta presión, entre el condensador y la válvula de expansión. Dispone en su interior de dos filtros para partículas sólidas, una masa deshidratante de gel de sílice intercalada y un tubo central de salida. Algunos modelos incorporan una mirilla transparente en la parte superior. (pág. 35, 36)

📷 IMAGEN: Vista seccionada de un filtro deshidratador con boca de entrada, zona de filtrado, gel de sílice, tubo de salida y mirilla — Fuente: HELLA02.PDF, pág. 36

## Principio de funcionamiento
Es un elemento neutro desde el punto de vista termodinámico (no altera la presión ni el estado del fluido). Al pasar el refrigerante líquido a través de las mallas internas, las impurezas sólidas quedan atrapadas para no obstruir la válvula de expansión. El gel de sílice absorbe el agua disuelta para evitar que se congele a 0 ºC en el lado de baja presión. Su diseño vertical garantiza que solo el líquido de la parte inferior sea aspirado hacia la salida. (pág. 35, 36)

## Valores de trabajo
- Temperatura crítica de congelación del agua en baja presión: 0 ºC. (pág. 36)

## Anomalías frecuentes
No documentado en fuentes. (pág. 36)

## Comportamiento en avería
No documentado en fuentes. (pág. 36)

## Cómo comprobarlo
Inspección visual del paso de burbujas o emulsión a través de la mirilla superior cuando está equipada. (pág. 36)

## Mantenimiento
No documentado en fuentes. (pág. 36)

---

```yaml
tipo: componente
titulo: Acumulador deshidratador
entidad: deposito-colector
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "36"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, compresor, estrangulador]
palabras: [tubo en V, baja presión, aspiración de gas, tubo de expansión]
```

## Misión
Retener impurezas, absorber la humedad en el lado de baja presión y garantizar que solo aspire gas el compresor, evitando la entrada de líquido que causaría un golpe de ariete. (pág. 36)

## Tipos y características
Recipiente acumulador montado exclusivamente en circuitos dotados de tubo de expansión (estrangulador). Se instala en la línea de baja presión, entre la salida del evaporador y la aspiración del compresor. (pág. 36)

📷 IMAGEN: Vista seccionada de un acumulador con tubo interno en V y toma de aspiración superior — Fuente: HELLA02.PDF, pág. 36

## Principio de funcionamiento
Integra en su interior un tubo de salida en forma de "V" con la toma de aspiración situada en la parte superior del depósito. El refrigerante procedente del evaporador se decanta en el fondo; el líquido sobrante queda depositado en la base, mientras que el compresor aspira únicamente la fase gaseosa desde la zona superior. (pág. 36)

## Valores de trabajo
No documentado en fuentes. (pág. 36)

## Anomalías frecuentes
No documentado en fuentes. (pág. 36)

## Comportamiento en avería
No documentado en fuentes. (pág. 36)

## Cómo comprobarlo
No documentado en fuentes. (pág. 36)

## Mantenimiento
No documentado en fuentes. (pág. 36)

---

```yaml
tipo: componente
titulo: Válvula de expansión termostática
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "37-39"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, filtro-deshidratador, compresor]
palabras: [expansión, estrangulamiento, orificio calibrado, tipo L, tipo H, membrana, NTC]
```

## Misión
Provocar una caída brusca de presión del refrigerante líquido para iniciar la evaporación y regular el caudal suministrado al evaporador en función de la carga térmica. (pág. 37)

## Tipos y características
Punto divisorio entre el lado de alta y baja presión, ubicado a la entrada del evaporador. Existen dos tecnologías termostáticas:
- Tipo L: con sonda termostática externa acoplada al tubo de salida del evaporador. Puede ser de igualación/estabilización interna o externa (esta última conectada mediante tubo adicional a la salida del evaporador).
- Tipo H: de diseño compacto en bloque (monobloc), donde los flujos de entrada y salida del evaporador atraviesan el propio cuerpo de la válvula. Es la más utilizada en los vehículos europeos.

📷 IMAGEN: Vista seccionada de válvula de expansión tipo L con orificio calibrado, válvula de bola, muelle, vástago, membrana y sonda termostática — Fuente: HELLA02.PDF, pág. 38
📷 IMAGEN: Válvula de expansión tipo H en bloque montada a la entrada del evaporador — Fuente: HELLA02.PDF, pág. 39

(pág. 37, 38, 39)

## Principio de funcionamiento
El efecto de expansión se logra por estrangulamiento al pasar el refrigerante por un orificio calibrado. El caudal se regula equilibrando dos fuerzas opuestas sobre la membrana superior: la presión del fluido contenido en la sonda termostática (que empuja el vástago para abrir la bola/espiga) y la fuerza del muelle inferior (que tiende a cerrarla).
- Si la temperatura a la salida del evaporador sube (falta de refrigerante), la sonda se calienta, aumenta la presión sobre la membrana y abre la válvula de bola aumentando el caudal.
- Si la temperatura de salida baja, la presión sobre la membrana disminuye y el muelle cierra parcialmente el paso.

(pág. 38, 39)

## Valores de trabajo
- Caída de presión en expansión (ejemplo de funcionamiento): de 20 bar a 3 bar. (pág. 37)

## Anomalías frecuentes
No documentado en fuentes. (pág. 39)

## Comportamiento en avería
No documentado en fuentes. (pág. 39)

## Cómo comprobarlo
No documentado en fuentes. (pág. 39)

## Mantenimiento
No documentado en fuentes. (pág. 39)

---

```yaml
tipo: componente
titulo: Tubo de expansión
entidad: estrangulador
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "38-39"
forma_parte_de: circuito-frigorifico
relacionados: [deposito-colector, evaporador]
palabras: [orificio calibrado, sección fija, estrangulamiento, pasivo]
```

## Misión
Provocar la caída de presión del fluido refrigerante mediante la restricción fija del paso de caudal antes de su entrada al evaporador. (pág. 38, 39)

## Tipos y características
Elemento de expansión de sección fija formado por un tubo de calibración constante alojado en el interior de la tubería de alta presión. No dispone de piezas móviles ni de regulación termostática. Se combina siempre con el montaje de un acumulador en el lado de baja presión. (pág. 38, 39)

📷 IMAGEN: Esquema de instalación de tubo de expansión con acumulador/deshidratador en el lado de baja presión — Fuente: HELLA02.PDF, pág. 39

## Principio de funcionamiento
Ofrece una resistencia calibrada constante al paso del refrigerante líquido a alta presión. Al forzar el paso del fluido a través de su orificio estrecho, la presión cae bruscamente hasta la presión de evaporación. Al no poder regular el caudal según la carga térmica, el exceso de líquido que sale del evaporador es retenido en el acumulador. (pág. 38, 39)

## Valores de trabajo
No documentado en fuentes. (pág. 39)

## Anomalías frecuentes
No documentado en fuentes. (pág. 39)

## Comportamiento en avería
No documentado en fuentes. (pág. 39)

## Cómo comprobarlo
No documentado en fuentes. (pág. 39)

## Mantenimiento
No documentado en fuentes. (pág. 39)

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "40-41"
forma_parte_de: distribucion-aire
relacionados: [valvula-expansion, compresor, ventilador-habitaculo]
palabras: [evaporación, recalentamiento, tubos y aletas, placas, deshumectación]
```

## Misión
Absorber el calor del aire destinado al habitáculo para reducir su temperatura y disminuir su grado de humedad mediante la condensación de agua sobre su superficie. (pág. 40)

## Tipos y características
Intercambiador de calor de baja presión ubicado en la caja de distribución de aire. Existen dos tecnologías constructivas:
- Tubos y aletas: tubos unidos por racores con placas/aletas de aluminio soldadas para mejorar la transmisión térmica.
- Placas: constituido por placas de aluminio por cuyo interior circula el fluido en forma de "U" con celdillas intermedias que fuerzan la turbulencia del aire, ofreciendo mayor rendimiento térmico.

📷 IMAGEN: Esquema del ciclo de evaporación en el diagrama p-h y vista de evaporador de tubos y aletas y evaporador de placas — Fuente: HELLA02.PDF, pág. 40, 41

(pág. 40, 41)

## Principio de funcionamiento
El refrigerante entra al evaporador a 3 bar y 0 ºC en estado difásico (líquido + gas). Al chocar el aire del habitáculo contra las aletas frías, cede su energía térmica provocando la ebullición del refrigerante (Tramo F-G). Una vez evaporado totalmente a 0 ºC, el gas continúa absorbiendo calor en el tramo final del evaporador hasta alcanzar los 6 ºC a 3 bar, fenómeno denominado recalentamiento, que asegura la ausencia de líquido a la salida. (pág. 40)

## Valores de trabajo
- Condiciones de entrada (Punto F): 3 bar a 0 ºC (líquido + gas). (pág. 40)
- Condiciones al final de ebullición (Punto G): 3 bar a 0 ºC (gas saturado). (pág. 40)
- Condiciones de salida (Punto A, recalentamiento): 3 bar a 6 ºC (gas supercalentado). (pág. 40)

## Anomalías frecuentes
No documentado en fuentes. (pág. 41)

## Comportamiento en avería
No documentado en fuentes. (pág. 41)

## Cómo comprobarlo
No documentado en fuentes. (pág. 41)

## Mantenimiento
Evacuación del agua de condensación generada en la superficie de sus aletas mediante la canalización de desagüe del vehículo. (pág. 40)

---

```yaml
tipo: fluido
titulo: Refrigerante R12
entidad: refrigerante-r134a
variante: r12
area: climatizacion
sistema: fluidos-frigorificos
fuente: "HELLA02.PDF"
paginas: "42-43"
relacionados: [aceite-frigorifico, compresor]
palabras: [CFC, diclorodifluorometano, cloro, capa de ozono, efecto invernadero]
```

## Designación y norma
R-12 (Diclorodifluorometano - CF2Cl2). Pertenece a la familia de los Clorofluorocarbonos (CFC). (pág. 43)

## Propiedades
- Inodoro, no inflamable y no tóxico en condiciones normales. (pág. 42)
- Muy corrosivo en presencia de agua. (pág. 42)
- Contiene átomos de cloro en su molécula, responsables de la destrucción de la capa de ozono estratosférica y contribuyente de elevado impacto al efecto invernadero. (pág. 43)

## Dónde se usa y cantidades
Utilizado históricamente como agente frigorígeno en sistemas de aire acondicionado automotriz de antigua fabricación (actualmente sustituido en vehículos nuevos). Cantidades no documentadas en fuentes. (pág. 43)

## Compatibilidades y mezclas prohibidas
Compatible únicamente con aceites lubricantes de base mineral (nafteníticos o parafínicos). Incompatible con aceites sintéticos PAG. Prohibida su mezcla con R134a. (pág. 43, 44)

## Identificación
Fórmula química CF2Cl2. Racores de servicio de tipo cónico roscado (SAE). (pág. 43, 46)

## Manipulación, almacenamiento y residuos
Prohibida su emisión a la atmósfera debido a su elevado potencial de agotamiento de la capa de ozono. (pág. 43)

## Riesgos y normativa
Sustancia sustituida por normativas de protección medioambiental. Genera ácidos muy corrosivos al entrar en contacto con agua. (pág. 42, 43)

---

```yaml
tipo: fluido
titulo: Refrigerante R134a
entidad: refrigerante-r134a
area: climatizacion
sistema: fluidos-frigorificos
fuente: "HELLA02.PDF"
paginas: "42-43"
relacionados: [aceite-frigorifico, compresor, valvula-expansion]
palabras: [HFC, 1,1,1,2-tetrafluoroetano, sin cloro, efecto invernadero, PAG, Ester]
```

## Designación y norma
R134a (1,1,1,2-Tetrafluoroetano - C2H2F4). Pertenece al grupo de los Hidrofluorocarbonos (HFC). (pág. 43)

## Propiedades
- Inodoro, no inflamable y no tóxico en condiciones normales. (pág. 42)
- Exento de cloro en su molécula, por lo que no ataca a la capa de ozono. (pág. 43)
- Posee potencial de calentamiento atmosférico (contribuye a la formación del efecto invernadero). (pág. 43)
- Muy corrosivo en presencia de agua o humedad. (pág. 42)

## Dónde se usa y cantidades
Agente frigorígeno estándar utilizado en todos los sistemas de aire acondicionado para automoción de nueva fabricación. Cantidades no documentadas en fuentes. (pág. 43)

## Compatibilidades y mezclas prohibidas
Compatible con lubricantes sintéticos de tipo PAG (Polialquilenglicol) y ESTER. Incompatible con aceites minerales. Prohibida la mezcla directa con refrigerante R12. (pág. 43, 45)

## Identificación
Fórmula química C2H2F4. Conexiones de servicio de alta y baja presión de tipo acoplamiento rápido O'Ring. (pág. 43, 47)

## Manipulación, almacenamiento y residuos
Manipular en circuitos cerrados impidiendo fugas y humedad en las operaciones de carga y recuperación. (pág. 42, 43)

## Riesgos y normativa
No ataca la capa de ozono pero está sujeto a control de emisiones por normativa ambiental sobre gases de efecto invernadero. (pág. 43)

---

```yaml
tipo: fluido
titulo: Lubricantes para circuito frigorífico
entidad: aceite-frigorifico
area: climatizacion
sistema: fluidos-frigorificos
fuente: "HELLA02.PDF"
paginas: "44-45"
relacionados: [refrigerante-r134a, compresor, valvula-expansion]
palabras: [mineral, sintético, PAG, Ester, higroscopacidad, estanqueidad]
```

## Designación y norma
Aceites lubricantes específicos para climatización clasificados en dos familias:
- Minerales (nafteníticos o parafínicos): para R-12.
- Sintéticos (PAG - Polialquilenglicol y ESTER): para R134a.

(pág. 44, 45)

## Propiedades
- Protegen contra el desgaste por fricción las partes sometidas a esfuerzo mecánico (compresor y válvula de expansión). (pág. 44)
- Refuerzan la estanqueidad en retenes y juntas de racores. (pág. 44)
- Deben permanecer fluidos a bajas temperaturas, no tostarse a altas temperaturas y no reaccionar con el refrigerante. (pág. 44)
- Deben estar unidos al fluido en estado líquido y separarse cuando el refrigerante se encuentra en estado de vapor. (pág. 44)
- Los aceites sintéticos (PAG y Ester) presentan una gran absorción de humedad y son muy corrosivos en presencia de agua. (pág. 45)

## Dónde se usa y cantidades
Circulando disueltos en el fluido refrigerante por todo el circuito, lubricando compresor y válvula de expansión. Cantidades no documentadas en fuentes. (pág. 44)

## Compatibilidades y mezclas prohibidas
- Aceite mineral: compatible solo con R-12.
- Aceite PAG: compatible solo con R134a.
- Aceite Ester: compatible tanto con R-12 como con R134a (ideal en operaciones de reconversión).

(pág. 44, 45)

## Identificación
Aceites de coloración clara y ausencia de humedad. (pág. 44)

## Manipulación, almacenamiento y residuos
Mantener los envases herméticamente cerrados para evitar la absorción de humedad ambiental. La presencia de agua degrada el aceite y genera corrosión. (pág. 45)

## Riesgos y normativa
Muy corrosivos en presencia de agua. Su degradación por humedad exige mantener en perfecto estado el filtro deshidratante. (pág. 45)

---

```yaml
tipo: componente
titulo: Canalizaciones y racores del circuito frigorífico
entidad: tuberias-y-racores
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "46-48"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, condensador, evaporador, filtro-deshidratador]
palabras: [canalizaciones, mangueras, elastómeros, nylon, racor SAE, O'ring, Rotalock, brida]
```

## Misión
Conectar los componentes del circuito frigorífico para la conducción del fluido refrigerante en sus distintas condiciones de presión, temperatura y estado físico. (pág. 46)

## Tipos y características
Las canalizaciones pueden ser rígidas, flexibles o mixtas. Las mangueras flexibles constan de 5 capas: 3 capas a base de elastómeros, 1 capa interna de nylon (impermeabilidad) y 1 o varias mallas de refuerzo para la presión.

Diámetros interiores según el tramo:
- Evaporador a compresor (gas a baja presión/temperatura): 5/8" (15,9 mm) o 1/2" (12,7 mm).
- Compresor a condensador (gas a alta presión/temperatura): 13/32" (10,3 mm).
- Condensador a evaporador (líquido a alta presión): 5/16" (7,9 mm).

Tipos de racores de conexión:
- Cónicos o SAE: roscados con asiento cónico (equipos R-12; requieren teflón en la rosca). Medidas: 3/8", 1/2", 5/8" y 3/4".
- Conexión O'ring: con anillo tórico en el extremo de la tuerca (estándar para R134a). Medidas: 3/8", 1/2", 5/8" y 3/4".
- Rotalock: estanqueidad por anillo tórico con cuello de asiento de 1" y tubo base de 1/2" o 5/8".
- Brida: pletina atornillada al compresor que presiona los tubos sobre la culata con anillos tóricos.

📷 IMAGEN: Estructura en capas de manguera flexible y tipos de racores (SAE, O'ring, Rotalock y Brida) — Fuente: HELLA02.PDF, pág. 46, 47, 48

(pág. 46, 47, 48)

## Principio de funcionamiento
Las dimensiones de los tubos responden a las variaciones de volumen específico del refrigerante: el tramo de gas a baja presión requiere el diámetro mayor (15,9 mm) por el elevado volumen del gas, mientras que la línea de líquido requiere el diámetro menor (7,9 mm). (pág. 46)

## Valores de trabajo
- Diámetro tramo aspiración (baja presión): 5/8" (15,9 mm) o 1/2" (12,7 mm). (pág. 46)
- Diámetro tramo descarga (alta presión gas): 13/32" (10,3 mm). (pág. 46)
- Diámetro tramo líquido (alta presión líquido): 5/16" (7,9 mm). (pág. 46)

## Anomalías frecuentes
No documentado en fuentes. (pág. 48)

## Comportamiento en avería
No documentado en fuentes. (pág. 48)

## Cómo comprobarlo
No documentado en fuentes. (pág. 48)

## Mantenimiento
Reemplazar la junta tórica en cada desmontaje en conexiones O'ring, Rotalock y de brida. Utilizar teflón en roscas cónicas SAE. (pág. 46, 47)

---

```yaml
tipo: componente
titulo: Termostato del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fuente: "HELLA02.PDF"
paginas: "49-51"
forma_parte_de: distribucion-aire
relacionados: [embrague-compresor, evaporador, unidad-control-climatizador]
palabras: [termostato mecánico, termostato electrónico, NTC, congelación evaporador, 0 ºC, 4 ºC]
```

## Misión
Regular el funcionamiento del compresor de cilindrada fija interrumpiendo su alimentación eléctrica para mantener la temperatura del evaporador entre 0 ºC y 4 ºC, evitando la congelación del agua condensada en sus aletas. (pág. 49, 50)

## Tipos y características
Dispositivo de regulación térmica instalado en la caja del evaporador. Existen dos tecnologías:
- Termostato mecánico: equipado con bulbo capilar intercalado entre las láminas del evaporador, pulmón de presión, muelle de regulación con tornillo de ajuste, ballesta y platinos de contacto eléctrico.
- Termostato electrónico: formado por una sonda de temperatura NTC (coeficiente de temperatura negativo) conectada a un módulo electrónico de mando.

📷 IMAGEN: Vista del termostato mecánico (bulbo, pulmón, muelle, platinos) y del termostato electrónico (módulo NTC y curva característica) — Fuente: HELLA02.PDF, pág. 51

(pág. 49, 50, 51)

## Principio de funcionamiento
- Mecánico: La variación de temperatura en el evaporador modifica la presión del fluido interno del bulbo. Esta presión (Fp) actúa sobre el pulmón venciendo la fuerza opuesta de un muelle (Fm). Al bajar la temperatura de 0 ºC, Fp disminuye y el muelle abre los platinos, desconectando el electroembrague. Al subir hacia 4 ºC, Fp aumenta y cierra los contactos.
- Electrónico: La sonda NTC varía su resistencia eléctrica según la temperatura del evaporador. La unidad electrónica procesa esta variación y determina la conexión o desconexión del electroembrague del compresor.

(pág. 50, 51)

## Valores de trabajo
- Rango de regulación de temperatura en evaporador: entre 0 ºC (corte) y 4 ºC (conexión). (pág. 50)

## Anomalías frecuentes
No documentado en fuentes. (pág. 51)

## Comportamiento en avería
Si no existiese el dispositivo, el hielo cubriría progresivamente la pared del evaporador, evitando la libre circulación del aire y dejando de expulsar aire por los difusores hacia el habitáculo. (pág. 49)

## Cómo comprobarlo
Medición de la variación de resistencia de la sonda NTC al modificar la temperatura (termostato electrónico) o verificación del equilibrio entre las fuerzas de presión y muelle sobre los contactos (termostato mecánico). (pág. 50, 51)

## Mantenimiento
Ajuste de la fuerza del muelle interior mediante el tornillo de regulación en modelos mecánicos si procede. (pág. 50)

---

```yaml
tipo: componente
titulo: Presostato de seguridad del climatizador
entidad: presostato
area: climatizacion
sistema: control-climatizacion
fuente: "HELLA02.PDF"
paginas: "52"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, electroventilador-condensador, unidad-control-climatizador]
palabras: [trinary, corte por alta, corte por baja, electroventilador, seguridad]
```

## Misión
Cumplir una función de seguridad en el circuito interrumpiendo la alimentación de la bobina del compresor ante presiones anómalas (corte por alta y corte por baja presión) y controlar el funcionamiento del electroventilador del condensador. (pág. 52)

## Tipos y características
Interruptor manométrico roscado a la línea del circuito. Se pueden clasificar en:
- Presostatos sencillos / dobles: contemplan únicamente el corte del sistema por alta y baja presión.
- Presostato "Trinary": integra en un único componente las tres funciones (corte por baja presión, corte por alta presión y conexión del electroventilador del condensador).

📷 IMAGEN: Vista exterior e interior del presostato trinary con contactos normalmente abiertos y normalmente cerrados — Fuente: HELLA02.PDF, pág. 52

(pág. 52)

## Principio de funcionamiento
En condiciones normales de funcionamiento no realiza acciones sobre el sistema salvo la gestión del electroventilador. Ante una anomalía, sus membranas internas actúan sobre los contactos eléctricos:
- Corte por baja presión: interrumpe el circuito si la presión cae por debajo del umbral mínimo de seguridad.
- Corte por alta presión: interrumpe el circuito si la presión supera el límite máximo tolerable.
- Conexión del electroventilador: cierra un contacto normalmente abierto al elevarse la presión para activar la ventilación del condensador.

(pág. 52)

## Valores de trabajo
No documentado en fuentes. (pág. 52)

## Anomalías frecuentes
No documentado en fuentes. (pág. 52)

## Comportamiento en avería
Interrupción permanente del circuito eléctrico de la bobina del compresor por disparo de seguridad. (pág. 52)

## Cómo comprobarlo
No documentado en fuentes. (pág. 52)

## Mantenimiento
No documentado en fuentes. (pág. 52)

---

```yaml
tipo: componente
titulo: Electroembrague del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "HELLA02.PDF"
paginas: "52"
forma_parte_de: compresor
relacionados: [compresor, presostato, sensor-evaporador]
palabras: [bobina, polea, rodamiento, plato de presión, campo magnético, acoplamiento]
```

## Misión
Controlar la conexión y desconexión mecánica entre la polea de arrastre y el eje principal del compresor para activar o detener el funcionamiento del aire acondicionado. (pág. 52)

## Tipos y características
Acoplamiento electromagnético integrado en el frontal del compresor. Consta de tres partes diferenciadas:
1. Conjunto plato de presión: solidario al eje principal del compresor mediante ballestas.
2. Conjunto polea-rodamiento: gira libre sobre el eje del compresor gracias a su rodamiento.
3. Conjunto bobina: electroimán fijo.

📷 IMAGEN: Despiece del conjunto electroembrague mostrando el plato de presión, polea con rodamiento y bobina electromagnética — Fuente: HELLA02.PDF, pág. 52

(pág. 52)

## Principio de funcionamiento
El movimiento del cigüeñal se transmite mediante una correa hacia la polea, que gira loca gracias a su rodamiento. Cuando la bobina recibe alimentación eléctrica, crea un campo magnético capaz de vencer la acción de las ballestas del plato de presión. El plato de presión es atraído contra la polea, transmitiendo el movimiento de giro directamente al eje principal del compresor. Al cortar la corriente de la bobina, las ballestas separan el plato de presión de la polea y el compresor se detiene. (pág. 52)

## Valores de trabajo
No documentado en fuentes. (pág. 52)

## Anomalías frecuentes
No documentado en fuentes. (pág. 52)

## Comportamiento en avería
No documentado en fuentes. (pág. 52)

## Cómo comprobarlo
No documentado en fuentes. (pág. 52)

## Mantenimiento
No documentado en fuentes. (pág. 52)

---

```yaml
tipo: componente
titulo: Filtro de habitáculo
entidad: filtro-habitaculo
area: climatizacion
sistema: distribucion-aire
fuente: "HELLA02.PDF"
paginas: "56-58"
forma_parte_de: distribucion-aire
relacionados: [ventilador-habitaculo, distribucion-aire]
palabras: [filtro antipolen, elementos sólidos, carbón activo, esporas, partículas, CO, HC, NOx]
```

## Misión
Evitar que las impurezas, partículas sólidas, polen, alérgenos y gases contaminantes contenidos en el aire penetren en el interior del habitáculo del vehículo. (pág. 56, 57, 58)

## Tipos y características
Elemento filtrante montado habitualmente debajo del parabrisas (conjunto monomotor) o en el interior del vehículo entre el impulsor y el evaporador. Existen dos tipos principales:
- Filtros de elementos sólidos: fabricados en papel o materiales sintéticos.
- Filtros de carbón activo: incorporan gránulos de carbón activado integrados en la estructura filtrante.

📷 IMAGEN: Detalle del filtro de elementos sólidos y del filtro de carbón activo — Fuente: HELLA02.PDF, pág. 57, 58

(pág. 56, 57, 58)

## Principio de funcionamiento
- Filtro de elementos sólidos: retiene mecánicamente partículas sólidas en suspensión como polen, ácaros, hollín derivado de motores diésel y partículas de desgaste de frenos y embragues.
- Filtro de carbón activo: suma a la retención de partículas la capacidad de adsorción de componentes gaseosos (CO, HC y NOx) derivados de las combustiones gracias a las propiedades del carbón activado.

(pág. 57, 58)

## Valores de trabajo
No documentado en fuentes. (pág. 58)

## Anomalías frecuentes
Saturación por acumulación de suciedad con el paso del tiempo. (pág. 56, 57)

## Comportamiento en avería
Degradación del material filtrante que puede llegar a producir malos olores en el interior del habitáculo y reducción del caudal de aire. (pág. 57)

## Cómo comprobarlo
No documentado en fuentes. (pág. 58)

## Mantenimiento
Sustitución periódica del filtro de habitáculo para evitar la degradación y malos olores. (pág. 57)

---

```yaml
tipo: componente
titulo: Impulsor de habitáculo
entidad: ventilador-habitaculo
area: climatizacion
sistema: distribucion-aire
fuente: "HELLA02.PDF"
paginas: "58-59"
forma_parte_de: distribucion-aire
relacionados: [filtro-habitaculo, distribucion-aire, unidad-control-climatizador]
palabras: [turbina, motor eléctrico, resistencias en serie, transistores de potencia, caudal de aire]
```

## Misión
Producir el movimiento necesario del aire para introducirlo e impulsarlo hacia el interior del habitáculo. (pág. 58)

## Tipos y características
Conjunto electromecánico del circuito de aire compuesto por tres partes diferenciadas:
1. Turbina.
2. Motor eléctrico.
3. Módulo de regulación de velocidad.

📷 IMAGEN: Esquema del impulsor de habitáculo y circuito eléctrico de regulación de velocidad — Fuente: HELLA02.PDF, pág. 58, 59

(pág. 58, 59)

## Principio de funcionamiento
La turbina accionada por el motor eléctrico aspira y mueve la masa de aire. La regulación de la velocidad de giro se realiza mediante dos sistemas:
- Grupo de resistencias: varía los valores de tensión aplicados sobre el motor eléctrico mediante distintas combinaciones de resistencias en serie.
- Regulación electrónica: modula la velocidad mediante transistores de potencia.

(pág. 58, 59)

## Valores de trabajo
No documentado en fuentes. (pág. 59)

## Anomalías frecuentes
No documentado en fuentes. (pág. 59)

## Comportamiento en avería
No documentado en fuentes. (pág. 59)

## Cómo comprobarlo
No documentado en fuentes. (pág. 59)

## Mantenimiento
No documentado en fuentes. (pág. 59)

---

COBERTURA: documento «HELLA02.PDF», páginas 34 a 59 de 59. completo