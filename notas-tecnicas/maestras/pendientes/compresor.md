---
id: ssc.maestra.compresor
modulo: ssc
unidad: clima
nt: 1005
tipo: elemento
clase: componente
titulo: "Compresor de climatización"
codigo: "CMP-A/C-01"
menu: "Compresor de climatización"
grupo: "Circuito frigorífico"
clave: compresor
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
estado: pendiente
fusionadas: [11, 39, 40, 41, 43, 45, 46, 216, 230, 245, 256, 268, 269, 270, 271, 356, 484, 543, 610, 611, 637, 638, 660, 678, 698, 699, 700, 701, 703, 705, 706, 711, 714, 718, 725, 733, 734, 735, 736, 737, 738, 781, 782, 783, 784, 801, 826, 906]
huella: a537be36afb0
modelo: gemini-3.8-flash
fuentes: "Fusión de 48 fuentes"
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
  - "NT484: 1,8 y 2,1 bar"
  - "NT484: 6 y 13 bar"
---

## Misión

La función principal del compresor consiste en **aspirar el agente frigorífico** en fase gaseosa a baja presión y baja temperatura procedente del evaporador, comprimirlo e impulsarlo como vapor caliente a alta presión hacia el condensador (NT11, págs. 20, 22; NT39, págs. 49-50; NT216, págs. 7, 10-11; NT230, pág. 63; NT245, págs. 10-11; NT256; NT268, pág. 47; NT484, págs. 28, 35; NT543, págs. 16-17; NT610, págs. 5-6; NT637, págs. 47-49; NT678, pág. 95; NT698, pág. 49; NT725, pág. 2; NT733, pág. 1; NT781, pág. 30; NT801, págs. 15-16; NT906, pág. 32).

Actúa como punto de separación físico entre la zona de baja presión y la de alta presión del circuito frigorífico, asegurando el caudal continuo de gas y la circulación del aceite lubricante por toda la instalación (NT256; NT543, págs. 16-17; NT610, págs. 5-6; NT660, pág. 7; NT698, pág. 49).

Permite la elevación térmica requerida para posibilitar la cesión de calor y condensación del fluido, además de incorporar válvulas de seguridad o sobrepresión para proteger mecánicamente los componentes en caso de excesos de presión (NT39, pág. 49; NT543, págs. 16-17; NT660, pág. 7; NT698, pág. 49; NT733, págs. 1, 2).

[NT216_01]

## Tipos y características

Los compresores se clasifican por su arquitectura mecánica interna, su método de accionamiento (mecánico por correa trapezoidal/estriada Poly-V o electromotor integrado) y por la gestión de su desplazamiento volumétrico (fijo o variable) (NT11, pág. 20; NT216, pág. 10; NT230, pág. 64; NT245, págs. 10-11; NT484, págs. 35, 51; NT660, pág. 7; NT725, pág. 2; NT733, pág. 2).

### Compresor alternativo de biela-manivela
Basado en el principio de los motores de combustión interna, con cilindros, pistones, bielas y cigüeñal (NT637, pág. 49; NT734, pág. 4). Fabricados habitualmente en configuraciones de 2, 4 o 6 cilindros para vehículo industrial, autobuses, ferrocarril y transporte frigorífico isotérmico (NT39, pág. 50; NT699, pág. 50). Destacan por su alta fiabilidad y rendimiento volumétrico elevado (80% al 90%), aunque generan elevadas vibraciones y ruidos mecánicos (NT39, pág. 50; NT637, pág. 49; NT699, pág. 50; NT734, pág. 4).

[NT39_01]

### Compresor rotativo de paletas
Estructurado mediante un rotor con ranuras radiales y paletas flotantes deslizantes montado dentro de un estátor cilíndrico u ovalado (NT40, pág. 51; NT678, pág. 157; NT700, pág. 51; NT737, pág. 7; NT784, pág. 33). Presenta un diseño simple con hasta un 30% menos de piezas, no requiere válvula de admisión, mantiene la presión estable y tolera mejor los golpes de ariete (NT40, págs. 50-51; NT700, págs. 50-51). Tiene un sentido de giro estricto y baja eficacia al ralentí (NT40, págs. 50-51; NT700, págs. 50-51).

[NT40_01]

### Compresor de espiral (Scroll)
Compresor pseudo-rotativo constituido por dos espirales engranadas: una fija y otra móvil orbital (NT41, pág. 51; NT271, pág. 61; NT678, pág. 171; NT738, pág. 7; NT783, pág. 32). Ofrece funcionamiento muy silencioso, bajas vibraciones y mínimo par de arranque (NT678, pág. 176; NT783, pág. 32). Se aplica en vehículos eléctricos e híbridos con motor eléctrico interno de alta tensión (HV) y comunicación LIN-BUS, así como en vehículos japoneses y refrigeración comercial (NT41, págs. 51-52; NT271, pág. 61; NT701, págs. 51-52; NT738, pág. 7).

[NT41_01]

### Compresor de disco oscilante de cilindrada fija
Emplea émbolos dispuestos en disposición concéntrica/axial respecto al eje (entre 3 y 10 pistones según versión) movidos por un plato de inclinación invariable (NT43, pág. 54; NT256; NT268, págs. 50-51; NT638, págs. 50-51; NT678, pág. 126; NT703, pág. 54; NT735, pág. 5; NT781, pág. 30). Su carrera es fija; adapta la producción de frío mediante conexión y desconexión cíclica gobernada por un embrague electromagnético comandado por presostato o sonda térmica del evaporador (NT43, pág. 54; NT230, pág. 68; NT256; NT543, pág. 17; NT610, pág. 6; NT638, pág. 50; NT703, pág. 54; NT735, pág. 5).

[NT43_01]

### Compresor de disco oscilante de cilindrada variable autorregulado (regulación interna)
Ajusta automáticamente el ángulo del disco entre el 5% y el 100% mediante una válvula hidráulica interna gobernada por presiones (NT45, pág. 56; NT256; NT269, pág. 59; NT543, pág. 18; NT705, pág. 56; NT736, págs. 5-6). Mantiene la presión de baja estable entre 1,8 y 2,0 bares sin desconectar el embrague, evitando tirones al motor y prescindiendo de termostato en el evaporador (NT45, págs. 55-56; NT705, pág. 56; NT736, pág. 6). Ejemplos: Harrison V5 y Sanden (NT678, pág. 128).

[NT45_01]

### Compresor de disco oscilante con electroválvula de regulación externa (Denso 6 SEU 12 y afines)
Prescinde del embrague electromagnético tradicional y su eje gira de forma continua (NT46, pág. 58; NT356, pág. 69; NT706, pág. 58; NT711, pág. 1; NT714, pág. 3). La UCE modula su carrera del 0% al 100% mediante una electroválvula con señal PWM (NT46, pág. 58; NT356, pág. 78; NT611, pág. 8; NT678, pág. 191; NT706, pág. 58). Incorpora un fusible mecánico en el plato de arrastre de la polea (láminas partidas o tacos de goma deformables) para desacoplar el eje en caso de gripado (NT46, pág. 60; NT356; NT484, pág. 52; NT611, pág. 8; NT706, pág. 60; NT714, pág. 3). En el Lupo FSI reduce el peso en aprox. 500 g por omisión de embrague (NT714, pág. 3).

[NT46_02]

[NT714_01]

### Variantes ŠKODA para R1234yf
Compresores axiales de 6 o 7 pistones adaptados al refrigerante R1234yf (NT906, pág. 32):
- Citigo: 6 pistones, **90 cm3**, con regulador interno y embrague electromagnético (NT906, págs. 32-33).
- Fabia, Octavia, Superb y Yeti: 6 pistones, **140,3 cm3**, de control externo sin embrague (NT906, págs. 32, 34).
- Yeti (países de clima cálido): 7 pistones, **171,4 cm3**, de control externo sin embrague (NT906, págs. 32, 34).

[NT906_01]

### Compresores de CO2
Diseñados para R744 (dióxido de carbono) en circuitos con conductos microcanal de aluminio, soportando presiones de trabajo elevadas (NT718, pág. 1).

[NT718_01]

## Principio de funcionamiento

El compresor transforma el trabajo mecánico transmitido a su árbol en incremento de presión y entalpía en el gas refrigerante mediante cuatro etapas: aspiración a presión de evaporación P1, compresión mecánica hasta P2, expulsión al condensador en PMS y reexpansión del gas remanente en el espacio muerto V0 al descender hacia PMI (NT733, págs. 1-4).

[NT733_01]

[NT733_02]

En los compresores de cilindrada fija, la relación de compresión es invariable y el volumen generado por vuelta responde a C = n · Vg (NT733, pág. 4). La placa portaválvulas dispone de láminas de acero elástico que actúan de modo antirretorno; la sección de descarga es menor que la de admisión debido a la mayor densidad del gas a alta presión (NT268, págs. 52-54; NT637, pág. 49; NT734, pág. 4).

[NT268_01]

En los sistemas autorregulados internamente, el plato oscilante pivota modificando la carrera entre el 5% y el 100%, manteniendo el PMS fijo y variando el PMI (NT45, pág. 56; NT269, págs. 57-59; NT826, págs. 56-58):
- **Alta demanda de frío**: la válvula interna comunica el cárter con la baja presión. La presión de cámara Pc baja (Pc < Ps), predominando la fuerza sobre la cabeza de los émbolos, lo que incrementa el ángulo de inclinación y eleva la carrera al máximo (NT45, págs. 56-57; NT256; NT705, págs. 56-57).
- **Baja demanda de frío**: los fuelles cierran la válvula y el gas de impulsión penetra al cárter por un orificio calibrado. Pc aumenta (Pc > Ps), forzando el enderezamiento del disco y reduciendo la carrera al mínimo (~5%) (NT45, págs. 56-58; NT256; NT705, págs. 56-58).

[NT543_01]

[NT826_01]

En los compresores de regulación externa continua (ej. Denso 6 SEU 12), la UCE modula una electroválvula externa (N280) mediante señal cuadrada PWM, dejando el inducido en posición flotante (NT356, pág. 78; NT611, pág. 8; NT678, pág. 191; NT714, pág. 3):
- **Mínimo rendimiento / OFF**: excitación mínima (~2% PWM). La válvula comunica la alta presión con el cárter; la presión en la cámara endereza el plato a carrera prácticamente nula (0% a 2%) (NT46, pág. 61; NT356, págs. 74, 81; NT678, págs. 187, 195; NT706, págs. 60-61; NT714, pág. 3).
- **Máximo rendimiento**: excitación alta (~98% PWM). Se descarga el cárter hacia la admisión de baja; el disco alcanza la inclinación máxima (100% de caudal) (NT46, pág. 62; NT356, págs. 74, 82; NT678, págs. 187, 196; NT706, págs. 61-62).

[NT46_01]

En compresores de paletas, la rotación excéntrica hace salir las paletas por fuerza centrífuga contra la pista del estátor; el volumen atrapado se reduce conforme avanza tangencialmente hacia la lumbrera de salida (NT40, pág. 51; NT270, pág. 60; NT700, págs. 50-51; NT784, pág. 33). En espiral Scroll, la órbita de la espiral móvil atrapa gas periférico en una vuelta (360º) y lo expulsa comprimido por el orificio central tras 3 vueltas completas (NT271, pág. 61; NT783, pág. 32).

[NT678_03]

[NT784_01]

## Valores de trabajo

Parámetros y magnitudes de funcionamiento recopilados:

- **Presión de baja (aspiración)**: 1,2 a 3,0 bar en circuito general (NT678, págs. 11, 14); de 1,4 a 2,2 bar en cilindrada fija a 1500-1800 rpm y 30 ºC (NT484, pág. 165); estabilizada entre 1,8 y 2,0 bar o 2 bar efectivos en autorregulados (NT45, pág. 56; NT484, pág. 166; NT705, pág. 56; NT736, pág. 6).
- **Presión de alta (impulsión)**: aprox. 14 bar (NT11, pág. 22); de 10 a 20 bar (NT484, pág. 165); de 14 a 20 bar (NT678, págs. 11, 14); aprox. 16 bar / 1,6 MPa (NT268, pág. 43).
- **Temperatura de salida de gas**: aprox. 65 ºC en estado gaseoso (NT11, pág. 22).
- **Régimen de giro**: 800 a 6.000 rpm acoplado al motor (NT43, pág. 54; NT703, pág. 54) o de 0 a 6.000 rpm de rango general (NT543, pág. 17; NT801, pág. 16).
- **Rendimiento volumétrico**: 80% al 90% en émbolos/biela-manivela (NT39, pág. 50; NT268, pág. 49; NT637, pág. 49; NT699, pág. 50; NT734, pág. 4); 75% al 90% en paletas a medio/alto régimen (NT40, pág. 50; NT700, pág. 50; NT737, pág. 7).
- **Distribución de aceite**: 50% alojado en el cárter del compresor y 50% distribuido por el resto del circuito (NT39, pág. 49; NT256; NT543, pág. 16; NT610, pág. 5; NT698, pág. 49).
- **Posición nominal por muelles (sin presión)**: inclinación ajustada para ~40% de caudal (NT45, pág. 56; NT256; NT543, pág. 19; NT610, pág. 6; NT705, pág. 56).
- **Tarado de válvula de seguridad**: 44 bar (NT660, pág. 7).
- **Circuitos con CO2**: presión de trabajo entre 120 y 180 bar (NT718, pág. 1).
- **Carga de refrigerante en autobuses**: aprox. 12 kg (NT39, pág. 50; NT699, pág. 50).
- **Prueba de durabilidad industrial (Valeo)**: 556 horas cíclicas (equivalente a 80.000 km a 72 km/h) (NT230, pág. 45).

Comportamiento del compresor autorregulado por presiones:
| Demanda de frío | Válvula de expansión | Presión de baja | Situación de presiones | Ángulo de leva | Carrera | Caudal | Potencia absorbida |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Alta | Muy abierta | Alta | Pc < Ps | Aumenta | Aumenta | Aumenta | Aumenta |
| Baja | Casi cerrada | Baja | Pc > Ps | Disminuye | Disminuye | Disminuye | Disminuye |
*(Pc: Presión de cámara/cárter, Ps: Presión de succión)* (NT45, pág. 56).

## Anomalías frecuentes

Las incidencias registradas en los compresores son:

- **Golpe de ariete / líquido**: entrada de refrigerante no evaporado en la succión que destruye válvulas de láminas, émbolos y espirales al ser los líquidos incompresibles (NT11, pág. 22; NT39, pág. 49; NT230, pág. 74; NT256; NT268, pág. 61; NT271, págs. 61, 230; NT638, pág. 54; NT698, pág. 49; NT906, pág. 32).
- **Gripado y agarrotamiento**: rotura de pistones, espirales o paletas por falta de engrase, acidez, presencia de humedad o contaminación con cloro y luz UV (NT216, pág. 10; NT230, pág. 74; NT245, pág. 10; NT484, págs. 66-67; NT678; NT906, pág. 12).
- **Fugas de fluido y lubricante**: rotura o desgaste en el retén/junta tórica rotativa del eje o en las juntas de estanqueidad de la carcasa (NT216, pág. 10; NT230, pág. 74; NT245, pág. 10; NT484, págs. 66-67; NT678).
- **Fugas internas y holguras**: derivación de gas en compresores de paletas por holguras de dilatación lateral y rayaduras en el estátor (NT40, pág. 51; NT270, pág. 60; NT700, pág. 51; NT737, pág. 7).
- **Rotura del fusible mecánico de la polea**: deformación del plato exterior o rotura de láminas elásticas ante arranques frecuentes con sistema Stop-Start si el compresor arranca fuera de su cilindrada mínima (NT46, pág. 60; NT706, pág. 60).
- **Bloqueo de la válvula de regulación**: suciedad o limaduras que dejan fija la válvula en mínima carga o en máxima carrera continua (NT269, pág. 62; NT356, págs. 82, 286; NT678, pág. 195; NT826, págs. 61-65).

## Comportamiento en avería

- **Falta de compresión o rendimiento nulo**: las presiones de alta y baja se igualan (presión de baja sube a 4,5-6 bar e iguala a la alta), deteniéndose la refrigeración (NT268, pág. 61; NT484, págs. 52, 175; NT678).
- **Válvula reguladora bloqueada en apertura / sin corriente**: el compresor opera en cilindrada mínima continua (~2%) y no enfría el habitáculo (NT356, págs. 81, 286; NT678, pág. 195).
- **Válvula reguladora bloqueada en cierre**: el compresor trabaja permanentemente a plena carga (~98%), congelando el evaporador (NT269, pág. 64; NT356, págs. 82, 254; NT826, pág. 64).
- **Bloqueo del compresor sin embrague**: se deforman los cortes mecanizados o se rompe la masa de goma/láminas del disco de arrastre, dejando la polea girando libre para salvaguardar la correa Poly-V auxiliar (NT46, pág. 60; NT484, pág. 52; NT611, pág. 8; NT706, pág. 60; NT711, pág. 2).
- **Giro invertido en paletas**: imposibilidad total de compresión y circulación de gas (NT40, pág. 51; NT700, pág. 51).
- **Disparo de la válvula de alivio**: expulsión controlada de gas refrigerante al exterior en caso de sobrepresión extrema por fallo de ventilación (NT256; NT660, pág. 7; NT698, pág. 49).

## Cómo comprobarlo

1. **Comprobación de presiones y estanqueidad interna**: conectar la estación de manómetros en tomas de servicio. A 1500-1800 rpm con climatizador encendido, pulverizar spray enfriador en el bulbo de la válvula de expansión para forzar su cierre; si la baja presión cae a vacío (<= 0 bar) y al parar el motor sube rápidamente, las válvulas de láminas están comunicadas o rotas (NT484, págs. 171, 175).
2. **Inspección visual**: examinar retenes del eje y juntas de carcasa para localizar fugas de aceite/refrigerante (NT216, págs. 10-11; NT230, pág. 76; NT256). Verificar si el fusible mecánico de la polea exterior presenta deformaciones o rotura de láminas (NT46, pág. 60; NT611, pág. 8; NT706, pág. 60).
3. **Diagnosis electrónica y osciloscopio**: monitorizar con herramienta de diagnosis el porcentaje de modulación PWM y verificar con osciloscopio la señal cuadrada de mando hacia la electroválvula (NT356, págs. 73, 78; NT611, pág. 8; NT678, pág. 191; NT906, pág. 34).
4. **Verificación de embrague electromagnético**: revisar alimentación eléctrica, resistencia de bobina y acoplamiento mecánico (NT230, pág. 76; NT906, págs. 33-34).
5. **Seguridad en compresores de espiral HV**: comprobar la ausencia total de tensión en los conectores antes de intervenir sobre cableados naranjas de alta tensión (NT41, pág. 52; NT701, pág. 52).

## Mantenimiento

- **Aceite lubricante**: usar únicamente la especificación recomendada respetando viscosidad y volumen prescrito (PAG o PAO para R134a; PAG con aditivos específicos para R1234yf; aceite POE no conductor o ND11 aislante en compresores eléctricos de alta tensión) (NT41, pág. 52; NT484, págs. 66-67; NT610, pág. 5; NT678, págs. 201, 230; NT701, pág. 52; NT906, pág. 18).
- **Prohibición de incompatibilidades**: está terminantemente prohibido instalar compresores diseñados para R134a en sistemas que utilicen R1234yf (NT906, págs. 18, 32).
- **Lavado y sustitución de filtro**: tras una rotura mecánica, gripado o fallo por suciedad de la válvula, es obligatorio realizar un lavado exhaustivo del circuito y sustituir el filtro deshidratador/acumulador para eliminar partículas residuales (NT269, pág. 70; NT356, pág. 287; NT484, pág. 67).
- **Reacondicionamiento**: sustitución obligatoria de juntas, rodamientos, segmentos y casquillos en compresores reparados, seguido de test de estanqueidad y de presión funcional (NT230, págs. 74-79).
- **Fijación mecánica**: verificar el par de apriete correcto en los soportes del bloque motor para prevenir vibraciones o fracturas graves del cuerpo (NT733, pág. 1).
- **Cualificación técnica**: las intervenciones en compresores de tracción eléctrica de alto voltaje están reservadas estrictamente a personal acreditado como Técnico en Alto Voltaje (HVT) (NT41, pág. 52; NT701, pág. 52).

## Discrepancias

- Frecuencia de la señal PWM de la electroválvula de regulación externa (ej. Denso 6 SEU 12): NT356 (pág. 78) y NT678 (pág. 191) indican 500 Hz, mientras que NT611 (pág. 8) documenta 400 Hz.
- Presión de trabajo en alta presión (impulsión): NT11 (pág. 22) señala aprox. 14 bar; NT268 (pág. 43) indica aprox. 16 bar (1,6 MPa); NT484 (pág. 165) registra entre 10 y 20 bar; NT678 (págs. 11, 14) sitúa el rango entre 14 y 20 bar; y para sistemas con CO2 (R744) NT718 (pág. 1) define entre 120 y 180 bar.
- Número de cilindros o émbolos en compresores de plato oscilante: NT43 (pág. 54), NT256, NT543 (pág. 17), NT610 (pág. 6) y NT703 (pág. 54) establecen de 3 a 10 émbolos; NT781 (pág. 30) especifica de 4 a 6 cilindros; NT268 (pág. 51), NT638 (pág. 51) y NT826 (pág. 57) marcan de 5 a 10 cilindros; NT678 (pág. 126) cita de 5 a 7 pistones; y NT660 (pág. 7) detalla una versión autorregulada fija de 7 cilindros.
- Régimen de giro mínimo del compresor acoplado: NT43 (pág. 54) y NT703 (pág. 54) indican régimen operativo entre 800 y 6.000 rpm, mientras que NT543 (pág. 17) y NT801 (pág. 16) establecen variación de 0 a 6.000 rpm.

## Imágenes requeridas

- [NT216_01] Vista general de un compresor de aire acondicionado accionable por correa
- [NT39_01] Sección y componentes de un compresor de émbolos de la serie FK 50 para vehículo industrial
- [NT40_01] Despiece y sección transversal de un compresor de paletas con indicación de rotor excéntrico, paletas y cámaras
- [NT41_01] Sección de un compresor eléctrico en espiral (scroll) indicando terminales de alta/baja tensión, espirales y motor
- [NT43_01] Sección longitudinal de un compresor de disco oscilante fijo mostrando eje, disco, émbolos y placa de válvulas
- [NT45_01] Esquema del compresor autorregulado en posición de máximo caudal (baja presión en cámara) y mínimo caudal (alta presión en cámara)
- [NT46_01] Esquema del compresor en posición de mínimo rendimiento (disco plano) y máximo rendimiento (disco inclinado)
- [NT46_02] Detalle del disco de arrastre con cortes de deformación controlada y tacos de goma de seguridad
- [NT714_01] Vista del compresor de climatización de regulación externa DENSO 6 SEU 12
- [NT906_01] Sección del compresor con regulador de presión interno y tambor de posición variable, y esquema de la válvula electromagnética de control externo
- [NT718_01] Esquema y vista del compresor de CO2
- [NT733_01] Diagrama de Mollier (presión frente a entalpía) representando el proceso de compresión del fluido
- [NT733_02] Gráfica p-V del ciclo de compresión alternativo indicando PMI, PMS, P1, P2, P3, volumen de espacio muerto V0, volumen generado Vg y volumen aspirado Va
- [NT268_01] Sección del compresor de plato oscilante mostrando cilindros, pistones, bielas y placa de válvulas
- [NT543_01] Sección del compresor de disco oscilante autorregulado en posición de alto y bajo caudal impelido
- [NT826_01] Variación de la inclinación del plato oscilante y de la carrera útil del pistón según la presión interna
- [NT678_03] Funcionamiento de compresión del compresor de espirales Scroll
- [NT784_01] Esquema del ciclo de trabajo (aspiración, compresión y descarga) de un compresor rotativo de paletas
