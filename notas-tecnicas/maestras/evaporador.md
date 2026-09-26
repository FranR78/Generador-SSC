---
id: ssc.maestra.evaporador
modulo: ssc
unidad: clima
nt: 1002
tipo: elemento
clase: componente
titulo: "El Evaporador de Climatización"
codigo: "EVA-CLIM-01"
menu: "El Evaporador de Climatización"
grupo: "Circuito frigorífico"
clave: evaporador
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
estado: borrador
fusionadas: [16, 50, 220, 235, 249, 278, 367, 383, 418, 491, 615, 659, 691, 726, 747, 790, 805, 907]
huella: 0d67c7a28ff7
modelo: gemini-3.6-flash
fuentes: "Fusión de 18 fuentes"
niveles:
  "Misión": basico
  "Tipos y características": basico
  "Principio de funcionamiento": intermedio
  "Valores de trabajo": intermedio
  "Anomalías frecuentes": avanzado
  "Comportamiento en avería": avanzado
  "Cómo comprobarlo": avanzado
  "Mantenimiento": intermedio
---

## Misión

El **evaporador** tiene la misión de absorber el calor del aire que ingresa o circula por el habitáculo mediante la ebullición y evaporación del fluido refrigerante en su interior a baja presión (NT16, pág. 21; NT50, págs. 64-66; NT220, págs. 21-22; NT235, pág. 115; NT249, pág. 22; NT278, pág. 82; NT367, pág. 1; NT383, pág. 14; NT418, págs. 64-65; NT491, pág. 117; NT615, págs. 11-12; NT659, pág. 7; NT691, págs. 123, 129; NT726, pág. 3; NT747, págs. 1-2; NT790, pág. 40; NT805, págs. 26-27; NT907, pág. 36). De este modo se consigue enfriar, deshumidificar (desempañado de cristales al condensar la humedad en sus aletas) y depurar/limpiar el aire enviado al habitáculo (NT16, pág. 21; NT50, págs. 64-66; NT235, pág. 115; NT278, pág. 82; NT383, pág. 14; NT805, págs. 26-27; NT907, pág. 36).

## Tipos y características

Es un **intercambiador de calor** de gran superficie fabricado en aluminio, ubicado en el interior del módulo o unidad climática del habitáculo, situado inmediatamente antes del radiador de la calefacción y de la trampilla de mezcla, tras el impulsor/soplador (NT16, pág. 21; NT50, pág. 66; NT220, págs. 22-23; NT235, pág. 117; NT249, págs. 21-22; NT278, pág. 82; NT383, pág. 16; NT418, págs. 64-65; NT491, págs. 118, 120; NT615, pág. 11; NT659, pág. 7; NT691, págs. 133, 141-142; NT726, págs. 1, 3; NT747, págs. 1-2; NT790, pág. 40; NT805, pág. 26; NT907, pág. 36). Incluye carcasa envolvente, canal de recogida de condensados y tubo de descarga con válvula antirretorno (NT491, pág. 121; NT691, pág. 135; NT907, pág. 36).

### Evaporador de tubos y aletas
Constituido por **tubos cilíndricos en horquilla** insertados paralelamente entre aletas expandidas mecánicamente, o tubos unidos por racores con aletas de aluminio soldadas (NT235, pág. 118; NT691, págs. 129, 131; NT747, pág. 7; NT790, págs. 40-41; NT805, pág. 26; NT907, pág. 36). Se subdivide en secciones paralelas alimentadas por capilares desde un venturi tras la válvula de expansión (NT747, pág. 7).

### Evaporador de serpentín
Formado por un **único tubo plano extruido** con múltiples canalizaciones internas y aletas en acordeón intercaladas, soldado por calor (NT278, pág. 82; NT747, pág. 7).

### Evaporador de placas
Compuesto por **placas alveolares de aluminio** colocadas en forma de cubetas con celdillas intermedias/aletas en acordeón. El fluido circula en forma de U con columnas parcializadoras y colectores de entrada y salida (NT235, pág. 117; NT491, pág. 118; NT691, págs. 133, 135; NT747, pág. 8; NT790, págs. 40-41).

### Variantes de servicio e integración
- **Versión de serie**: tubos unidos mecánicamente por soldadura fija (NT418, págs. 64-65).
- **Versión de recambio/Servicio**: grupo de tubos independientes en versión atornillable (NT418, págs. 64-65).
- **Variante R1234yf**: brida de conexión reforzada y más robusta (NT907, págs. 24, 26).
- **Integración**: puede ir en montaje monobloque integral, semi-integrado o integrado bajo el salpicadero (NT691, págs. 136, 139, 141-142).

## Principio de funcionamiento

El refrigerante pulverizado entra en fase difásica (líquido/gas) a baja presión. Al atravesar las aletas el aire forzado por la turbina, el refrigerante absorbe la energía térmica del aire y entra en ebullición (NT16, págs. 21-22; NT50, pág. 65; NT220, pág. 22; NT235, págs. 115-116; NT249, pág. 22; NT278, pág. 82; NT367, pág. 1; NT418, págs. 64-65; NT491, pág. 117; NT615, págs. 11-12; NT691, págs. 129, 135; NT726, pág. 3; NT747, págs. 3-4; NT790, pág. 40; NT805, págs. 26-27; NT907, pág. 36).

El intercambio térmico combina **conducción térmica** por los materiales y **convección térmica** entre superficies y fluidos (NT747, págs. 4-5). Al enfriarse el aire por debajo de su punto de rocío, la humedad ambiental se condensa sobre las aletas frías, deshumidificando el aire y evacuando el agua por gravedad al exterior por el drenaje (NT50, pág. 65; NT278, pág. 82; NT383, pág. 15; NT491, pág. 117; NT615, págs. 11-12; NT691, pág. 135; NT907, pág. 36).

En el tramo final, el refrigerante evaporado absorbe calor sensible recalentándose por encima de la temperatura de ebullición para garantizar la salida de gas 100% gaseoso al compresor (NT235, págs. 115-116; NT747, págs. 3-4; NT790, pág. 40).

- **Balance energético del aire**: Pfrigo = Qa · Cp · (Ti - Tf) + Qa · (Hai - Haf) · L con condensación (Hai > Haf); o Pfrigo = Qa · Cp · (Ti - Tf) sin condensación (NT747, págs. 1, 3).
- **Balance energético del fluido**: Pfrigo = Qf · (h2 - h1) (NT747, pág. 3).
- **Eficacia de intercambio (hevap)**: Pfrigo = hevap · S · (Ti - Tev). Sustituir por un evaporador de menor eficacia reduce la presión de baja BP y la potencia frigorífica, aumentando la relación de compresión (NT747, págs. 5-6).

## Valores de trabajo

Valores característicos de funcionamiento registrados en las fichas técnicas:

- **Presión interna y temperatura del fluido**:
  - 1,2 bares a -7 ºC (NT16, pág. 22).
  - 2 bares (0,2 MPa) a una temperatura de -1 ºC a -5 ºC (NT278, pág. 82) o 2 bar a ~0 ºC con R134a (NT491, págs. 117, 165).
  - 3 bar a -1 ºC a 0 ºC en estado difásico a la entrada (NT235, pág. 116; NT790, pág. 40).
  - 3 bar a +3 ºC a +6 ºC en el tramo de recalentamiento a la salida (NT235, pág. 116; NT790, pág. 40).
- **Recalentamiento mínimo**: RC = T2 - Tev > 2 ºC para evitar retorno de líquido al compresor (NT747, pág. 4).
- **Temperatura del aire de entrada**: 24 ºC (NT16, pág. 22) o 35 ºC con 40% HR (humedad absoluta Hai = 0,0141 kg de agua por kg de aire seco) (NT747, pág. 2).
- **Temperatura del aire de salida**: 4 ºC (descenso de ~20 ºC) (NT16, pág. 22), +3 ºC a +7 ºC en toberas (NT278, pág. 82), o 10 ºC con 100% HR (humedad absoluta Haf = 0,0078 kg de agua por kg de aire seco) (NT747, pág. 2).
- **Rendimiento de condensación**: con un caudal de aire de 500 kg/h entre 35 ºC y 10 ºC, produce 3,15 kg/h de agua (NT747, pág. 2).
- **Aceite retenido**: aprox. 50 cc retenidos en el evaporador (NT50, pág. 71).
- **Procedimiento de purgado de aceite**: 3 minutos a 5.000 r.p.m. del motor con A/C y calefacción al máximo y recirculación activada (NT50, pág. 65).

## Anomalías frecuentes

- **Inundación o exceso de aceite sintético**: disminuye el rendimiento frigorífico (NT50, pág. 65).
- **Proliferación de bacterias y hongos**: por acumulación de humedad en aletas, genera malos olores en el habitáculo (NT50, pág. 65; NT220, págs. 4, 21; NT235, pág. 119; NT278, pág. 161; NT491, pág. 124; NT615, pág. 12).
- **Fugas y grietas**: picaduras o corrosión en tubos, placas o empalmes/bridas (NT220, pág. 23; NT235, pág. 119; NT249, pág. 23; NT367, pág. 1; NT418, págs. 64-65; NT691, pág. 210; NT907, págs. 24, 26).
- **Porosidad del material**: pérdida del revestimiento protector de aluminio (NT491, págs. 125, 126).
- **Obstrucción interna**: taponamiento de tuberías por virutas o suciedad (NT220, pág. 23; NT249, pág. 21; NT367, pág. 1).
- **Obstrucción externa**: acumulación de polvo y polen en el panal de aletas (NT220, pág. 23; NT249, pág. 23; NT367, pág. 1; NT491, pág. 124; NT747, pág. 8).
- **Obstrucción del desagüe de condensados**: atasco del tubo o válvula antirretorno (NT278, pág. 161; NT491, pág. 124; NT615, pág. 12; NT691, pág. 210; NT805, pág. 27; NT907, pág. 36).
- **Congelación de la superficie**: fallo de la sonda antihielo o termostato (NT235, pág. 119; NT491, pág. 124; NT691, pág. 210; NT747, pág. 8).
- **Montaje de recambio adaptable inadecuado**: menor eficacia frigorífica (hevap menor) (NT235, pág. 119; NT747, págs. 5-6).

## Comportamiento en avería

- **Falta de rendimiento frigorífico** o fallo total del aire acondicionado (NT220, pág. 23; NT235, pág. 119; NT249, pág. 23; NT367, pág. 1; NT418, pág. 64; NT747, pág. 8; NT805, pág. 26; NT907, pág. 36).
- **Caudal de aire insuficiente** por las toberas por congelación de aletas o suciedad exterior (NT220, pág. 23; NT235, pág. 119; NT249, pág. 23; NT367, pág. 1; NT491, pág. 124).
- **Emisión de malos olores** al encender la ventilación (NT50, pág. 65; NT220, pág. 23; NT235, pág. 119; NT278, pág. 90; NT491, pág. 124; NT615, pág. 12).
- **Filtración e inundación de agua** sobre la moqueta del habitáculo y vaho constante en los cristales por drenaje atascado (NT278, pág. 90; NT491, pág. 124; NT615, pág. 12; NT691; NT907, pág. 36).
- **Cortes cíclicos continuos del compresor**: por menor eficacia térmica o interrupción de la unidad de control al fallar la turbina de aire para evitar la congelación (NT50, pág. 65; NT747, págs. 5-6).

## Cómo comprobarlo

1. **Comprobación de presiones y estanqueidad**: medir presiones del circuito con compresor activo y verificar fugas con detector de gas o nitrógeno en el cuerpo, tuberías y tubo de drenaje (NT220, pág. 24; NT235, pág. 119; NT249, pág. 24; NT367, pág. 1; NT418, págs. 64-65; NT691).
2. **Medición de temperaturas**: medir la temperatura en la tubería de entrada y salida, así como el aire soplado en toberas centrales (+3 ºC a +7 ºC) (NT220, pág. 24; NT249, pág. 24; NT278, pág. 82; NT367, pág. 1; NT907, pág. 36).
3. **Medir recalentamiento**: calcular la diferencia entre la temperatura de salida del gas y la temperatura de evaporación leída en el manómetro de BP (NT235, pág. 115).
4. **Inspección visual**: verificar estanqueidad, ausencia de suciedad, corrosión o congelación en la matriz de aletas y colocación de manguitos (NT50, pág. 71; NT220, págs. 23-24; NT249, págs. 23-24; NT367, pág. 1; NT418, págs. 64-65; NT747, pág. 8).
5. **Verificación de drenaje**: comprobar la evacuación libre de agua condensada bajo el vehículo con A/C encendido (NT235, pág. 119; NT278, pág. 161; NT491, pág. 125; NT615, pág. 12; NT691; NT907, pág. 36).
6. **Prueba de inundación de aceite**: hacer funcionar el motor a 5.000 r.p.m. durante 3 minutos con A/C y calefacción al máximo en recirculación; si aumenta el rendimiento frigorífico, había exceso de aceite (NT50, pág. 65).
7. **Prueba de porosidad**: si persisten malos olores tras desinfección por ultrasonidos, desmontar y sustituir por pérdida del revestimiento (NT491, págs. 125, 126).

## Mantenimiento

- **Desinfección higienizante**: efectuar tratamientos periódicos bactericidas/fungicidas por nebulización ultrasónica o química para eliminar gérmenes, evitando limpiadores químicos agresivos (NT220, pág. 4; NT235, págs. 119, 184; NT249, pág. 4; NT278, pág. 161; NT367, pág. 1; NT491, pág. 125; NT615, pág. 12; NT691, pág. 135).
- **Filtro de habitáculo**: sustituir el filtro antipolen periódicamente (NT235, pág. 184).
- **Limpieza de drenaje**: verificar y limpiar el orificio/tubo de evacuación de agua de condensación en cada revisión (NT50, pág. 71; NT278, pág. 161; NT491, pág. 125; NT615, pág. 12; NT691, pág. 135; NT805, pág. 27; NT907, pág. 36). Nota: la presencia de charcos bajo el coche parado es normal (NT805, pág. 27).
- **Sonda antihielo**: controlar el correcto funcionamiento de la sonda de temperatura para evitar congelación (NT747, pág. 8).
- **Sustitución de componente**: prohibido instalar recambios adaptables de menor eficacia (NT747, pág. 8). Si se sustituye el evaporador de serie de tubos soldados, emplear el kit atornillable de Servicio (NT418, pág. 65). Añadir 50 cc de aceite nuevo, aislar tubos y válvula de expansión, renovar juntas tóricas y realizar un vacío profundo de al menos 45 minutos antes de la recarga (NT50, pág. 71). En sistemas con R1234yf montar brida robusta y juntas específicas (NT907, págs. 12, 24).

## Discrepancias

- Presión y temperatura de trabajo/ebullición del fluido: NT16 señala 1,2 bares a -7 ºC (NT16, pág. 22); NT278 y NT491 señalan aprox. 2 bares (0,2 MPa) a una temperatura de -1 ºC a -5 ºC o 0 ºC con R134a (NT278, pág. 82; NT491, pág. 117); mientras que NT235 y NT790 indican 3 bar a -1 ºC a 0 ºC en entrada/evaporación difásica y 3 bar a +3 ºC a +6 ºC a la salida por recalentamiento (NT235, pág. 116; NT790, pág. 40).
- Temperatura de salida del aire refrigerado hacia el habitáculo: NT16 da un valor de 4 ºC (NT16, pág. 22); NT278 establece un rango de +3 ºC a +7 ºC (NT278, pág. 82); y NT747 ilustra un cálculo con el aire saliendo a 10 ºC con 100% HR (NT747, pág. 2).

## Imágenes requeridas

- [NT50_01] Esquema del evaporador con la entrada de agente frigorífico a través de la válvula de expansión y flujo de aire refrigerado
- [NT220_01] Módulo del evaporador con sus tubos de entrada y aletas de disipación
- [NT367_01] Flujo de refrigerante y transmisión del calor hacia la corriente de aire en el evaporador
- [NT383_01] Vista del evaporador de climatización junto a la caja de aireación
- [NT418_01] Despiece del evaporador del grupo climatizador y detalle del conjunto de tubos atornillables para Servicio
- [NT491_01] Estructura del evaporador y su carcasa con canal de condensados
- [NT615_01] Módulo del evaporador montado en el interior de la caja climática con aletas de condensación
- [NT691_01] Sección de un evaporador de placas con colectores, aletas y tubo de descarga de condensación
- [NT747_01] Diagrama psicrométrico de condensación de agua en aletas para aire a 35 ºC y 40% HR saliendo a 10 ºC y 100% HR
- [NT747_02] Evolución del ciclo en el Diagrama de Mollier al sustituir el evaporador por uno de menor eficacia con caída de BP a BP'
- [NT790_01] Esquema del ciclo de evaporación en el diagrama p-h y vista de evaporador de tubos y aletas y evaporador de placas
- [NT907_01] Esquema del cuerpo del evaporador mostrando el flujo de aire exterior caliente, la admisión/salida del refrigerante y la salida del aire refrigerado
