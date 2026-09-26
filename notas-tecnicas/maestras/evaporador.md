---
id: ssc.maestra.evaporador
modulo: ssc
unidad: clima
nt: 1002
tipo: elemento
clase: componente
titulo: "Evaporador del sistema de climatización"
codigo: "CLIM-COMP-EVAP"
menu: "Evaporador del sistema de climatizació"
grupo: "Circuito frigorífico"
clave: evaporador
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
estado: borrador
fusionadas: [16, 50, 220, 235, 249, 278, 367, 383, 418, 491, 615, 659, 691, 726, 747, 790, 805, 907]
huella: 0d67c7a28ff7
modelo: gemini-3.8-flash
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

El evaporador es el intercambiador térmico encargado de **absorber el calor del aire** que se envía al interior del vehículo para enfriarlo, deshidratarlo y depurarlo (NT16, pág. 21; NT50, págs. 64-66; NT220, págs. 21-22; NT278, pág. 82; NT805, págs. 26-27; NT907, pág. 36).

Actúa como la «bolsa de hielo» de la instalación (NT383, pág. 14). Su función consiste en hacer hervir y evaporar por completo el refrigerante líquido a baja presión mediante el calor extraído del flujo de ventilación (NT235, pág. 115; NT491, pág. 117; NT615, págs. 11-12; NT691, págs. 123, 129).

Al refrigerar el aire por debajo de su temperatura de rocío, la humedad ambiental se condensa sobre sus aletas, lo que permite desempañar los cristales y limpiar el aire reteniendo impurezas (NT235, pág. 115; NT747, págs. 1-2).

## Tipos y características

Se trata de un radiador intercambiador fabricado en aluminio provisto de gran superficie de transmisión (NT50, pág. 66; NT220, págs. 22-23; NT278, pág. 82). Va alojado en la caja de distribución y climatización bajo el salpicadero o en el vano motor, situado tras el soplador o impulsor y justo antes del radiador de calefacción y las trampillas de mezcla (NT50, pág. 66; NT235, pág. 115; NT383, pág. 16; NT491, pág. 118; NT747, págs. 1-2).

[NT383_01]

El cuerpo va provisto de una carcasa envolvente con cubeta colectora y un tubo de descarga inferior provisto de válvula antirretorno para evacuar el agua de condensación al exterior (NT491, págs. 118, 121; NT691, pág. 135; NT907, pág. 36).

Según la tecnología de su haz de tubos y distribución, se clasifican en:

### Evaporador de serpentín
Construido mediante un serpentín o un único tubo plano extruido con múltiples canalizaciones internas y aletas en acordeón intercaladas, ensamblado por soldadura térmica. Es la configuración tradicional empleada por constructores japoneses (NT278, pág. 82; NT747, pág. 7).

### Evaporador de tubos y aletas
Formado por tubos cilíndricos redondos en horquilla insertados en paralelo a través de láminas o aletas de aluminio y expansionados mecánicamente (NT691, pág. 131; NT747, pág. 7; NT790, pág. 40). Se subdivide en varias secciones alimentadas en paralelo por tubos capilares desde un venturi tras la válvula de expansión, diseño habitual de fabricantes europeos (NT747, pág. 7).

### Evaporador de placas
Compuesto por placas de aluminio alveolares estampadas en forma de cubeta que delimitan conductos en forma de «U» con celdillas intermedias para provocar turbulencias (NT691, pág. 133; NT790, pág. 41). Integra columnas parcializadoras y colectores de distribución, soldado al horno en atmósfera neutra o al vacío; es el diseño característico americano y reemplaza al de tubos y aletas por economía de escala (NT691, pág. 135; NT747, pág. 8).

[NT790_01]

### Montaje e integración mecánica
- **Monobloque integral, semi-integrado o integrado bajo salpicadero** junto al grupo calefactor y trampillas (NT691, págs. 136-142).
- **Variante de conexión Audi A4 '08**: el evaporador original de fábrica incorpora tuberías soldadas, mientras que el recambio de Servicio Postventa suministra las tuberías en conjunto independiente atornillable (NT418, págs. 64-65).
- **Variante R1234yf (gama Škoda)**: modelos como Fabia, Octavia y Superb utilizan una brida de acoplamiento reforzada con fijación robusta y juntas específicas (NT907, págs. 24, 26).

[NT418_01]

## Principio de funcionamiento

El fluido refrigerante penetra por la parte inferior a baja presión y baja temperatura en estado difásico (mezcla pulverizada de líquido y gas) tras cruzar la válvula de expansión (NT50, pág. 65; NT235, pág. 116; NT790, pág. 40).

[NT50_01]

El intercambio de energía combina conducción a través del metal y convección térmica entre el aire exterior y las aletas, y entre la pared interna y el fluido (NT747, págs. 4-5). El refrigerante absorbe el calor latente del aire forzado por el ventilador y entra en ebullición completa a presión de baja (NT16, págs. 21-22; NT220, pág. 22; NT747, págs. 3-4).

[NT907_01]

En el tramo final del circuito, el gas saturado absorbe calor sensible adicional incrementando su temperatura por encima del punto de ebullición. Este proceso se denomina **recalentamiento** y garantiza que el refrigerante entre 100% gaseoso al compresor para evitar golpes de ariete líquido (NT235, pág. 116; NT615, pág. 11; NT747, pág. 4; NT790, pág. 40; NT805, pág. 26).

Al enfriarse el flujo de aire por debajo de su punto de rocío, la humedad se condensa en agua líquida sobre las aletas frías, atrapando a su vez partículas de polvo en suspensión antes de salir al exterior por el desagüe (NT50, pág. 65; NT491, pág. 117; NT691, pág. 129).

El balance energético de intercambio térmico se rige por las siguientes ecuaciones (NT747, págs. 1-5):
- Potencia con condensación: Pfrigo = Qa · Cp · (Ti - Tf) + Qa · (Hai - Haf) · L
- Potencia sin condensación: Pfrigo = Qa · Cp · (Ti - Tf)
- Potencia del refrigerante: Pfrigo = Qf · (h2 - h1)
- Eficacia de intercambio: Pfrigo = hevap · S · (Ti - Tev)

## Valores de trabajo

Las condiciones termo-hidráulicas de trabajo reportadas en los manuales de servicio son las siguientes:

| Parámetro | Condición / Medida | Fuente |
| :--- | :--- | :--- |
| Presión interna de baja (BP) | 1,2 bar a -7 ºC | (NT16, pág. 22) |
| Presión y temp. de entrada | Aprox. 2 bar (0,2 MPa) entre -1 ºC y -5 ºC | (NT278, pág. 82) |
| Presión y temp. R134a | 2 bar a aprox. 0 ºC | (NT491, págs. 117, 165) |
| Ciclo difásico / ebullición | 3 bar de -1 ºC a +1 ºC | (NT235, pág. 116) |
| Ciclo difásico estándar | 3 bar a 0 ºC | (NT790, pág. 40) |
| Salida de gas recalentado | 3 bar a +3 ºC | (NT235, pág. 116) |
| Salida de gas recalentado | 3 bar a +6 ºC | (NT790, pág. 40) |
| Recalentamiento mínimo | RC = T2 - Tev > 2 ºC | (NT747, pág. 4) |
| Aire: entrada habitáculo | 24 ºC | (NT16, pág. 22) |
| Aire: salida en toberas | 4 ºC (salto térmico de aprox. 20 ºC) | (NT16, pág. 22) |
| Aire: difusores centrales | +3 ºC a +7 ºC | (NT278, pág. 82) |

En un ejemplo práctico con Ti = 35 ºC (40% HR, Hai = 0,0141 kg/kg), Tf = 10 ºC (100% HR, Haf = 0,0078 kg/kg) y caudal de 500 kg/h, la **producción de condensados** alcanza 3,15 kg/h de agua (NT747, pág. 2).

[NT747_01]

El volumen de lubricante retenido en el interior del evaporador es de aproximadamente **50 cc de aceite**, el cual puede purgarse manteniendo el motor a 5.000 r.p.m. durante 3 minutos con A/C y calefacción al máximo en modo recirculación (NT50, págs. 65, 71).

## Anomalías frecuentes

- **Inundación de aceite sintético**: la retención de exceso de lubricante crea una película interna que reduce la transferencia térmica y merma el rendimiento (NT50, pág. 65).
- **Obstrucción externa e interna**: bloqueo de conductos por virutas mecánicas o acumulación exterior de hojas, polen y suciedad sobre las aletas por falta o rotura del filtro de polen (NT220, pág. 23; NT249, pág. 21; NT367, pág. 1; NT491, pág. 124).
- **Atasco del tubo de desagüe**: acumulación de lodos en la cubeta o válvula antirretorno, provocando rebose de agua hacia la moqueta y malos olores (NT278, pág. 82; NT491, pág. 124; NT615, pág. 12; NT691, pág. 135).
- **Contaminación biológica**: hongos y bacterias proliferan en las aletas húmedas provocando olores fétidos (NT50, pág. 65; NT220, pág. 21; NT235, pág. 119; NT491, pág. 124).
- **Fugas de agente frigorífico**: fisuras por fatiga en placas, perforaciones por corrosión del aluminio y pérdidas en juntas o bridas de acoplamiento (NT220, pág. 23; NT235, pág. 119; NT418, pág. 65; NT491, pág. 124; NT907, pág. 26).
- **Congelación del panal**: formación de hielo por fallo del termostato o sonda de temperatura antihielo, cegando el paso del aire (NT235, pág. 119; NT491, pág. 126; NT747, pág. 8).
- **Instalación de evaporador adaptable de menor eficacia**: reduce la presión de baja a BP', eleva la relación de compresión y genera cortes cíclicos (NT235, pág. 119; NT747, págs. 5-6).

[NT747_02]

- **Aislamiento defectuoso**: pérdida de rendimiento si no se aíslan los tubos o la válvula de expansión frente a la radiación térmica del motor (NT50, pág. 71).

## Comportamiento en avería

- **Falta o caída acusada de rendimiento frigorífico**: el aire sale templado por los difusores o el sistema deja de enfriar totalmente (NT220, pág. 23; NT367, pág. 1; NT418, pág. 64; NT805, pág. 26).
- **Reducción severa del caudal de ventilación**: causada por bloqueo exterior de suciedad o congelación de la matriz en bloque de hielo (NT220, pág. 23; NT249, pág. 23; NT491, pág. 164).
- **Inundación del suelo del habitáculo**: agua condensada rebosando sobre la moqueta de los pasajeros al estar obstruido el drenaje inferior (NT491, pág. 124; NT691, pág. 135; NT907, pág. 36).
- **Vaho persistente en cristales**: incapacidad de deshumidificar el aire impulsado por anegamiento o saturación de condensados (NT278, pág. 90; NT615, pág. 12; NT747, pág. 2).
- **Emisión de olores desagradables**: olor a moho al accionar la ventilación por colonias de microorganismos en las aletas (NT220, pág. 23; NT491, pág. 177; NT615, pág. 12).
- **Parada preventiva por soplador**: si la turbina falla o no gira a velocidad lenta, la UCE desconecta el compresor para evitar la congelación del evaporador (NT50, pág. 65).

## Cómo comprobarlo

Para diagnosticar el evaporador se siguen las siguientes operaciones de taller:

1. **Inspección visual**: verificar la limpieza exterior de las aletas, la ausencia de deformaciones y la integridad del revestimiento protector de aluminio (NT220, pág. 23; NT249, págs. 23-24; NT491, pág. 126; NT747, pág. 8).
2. **Prueba de estanqueidad**: aplicar detector electrónico de fugas o contraste en el orificio del desagüe de condensados, racores y brida de conexión; o verificar pérdidas presurizando con nitrógeno (NT235, pág. 119; NT418, págs. 64-65; NT691, pág. 135).
3. **Comprobación de presiones y temperaturas**: medir con manómetros las presiones de baja con motor en marcha y compresor activado (NT220, pág. 24; NT367, pág. 1). Contrastar las temperaturas en la tubería de entrada y salida (NT220, pág. 24; NT249, pág. 24).
4. **Cálculo del recalentamiento**: restar a la temperatura física del tubo de salida la temperatura de saturación obtenida en el manómetro de baja; debe ser mayor a 2 ºC (NT235, pág. 115; NT747, pág. 4).
5. **Medición del salto térmico**: comprobar que el aire en las toberas centrales se sitúe entre +3 ºC y +7 ºC (NT278, pág. 82; NT907, pág. 36).
6. **Verificación del drenaje**: confirmar el goteo constante de condensación bajo el piso del vehículo con el A/C conectado (NT278, pág. 161; NT615, pág. 12; NT907, pág. 36).
7. **Prueba de inundación de aceite**: rodar el motor a 5.000 r.p.m. durante 3 minutos con A/C y calefacción al máximo en recirculación; si el frío aumenta significativamente después, el evaporador acumulaba exceso de aceite (NT50, pág. 65).

## Mantenimiento

El mantenimiento periódico requiere higienizar las aletas mediante productos químicos bactericidas/fungicidas o tratamiento antiséptico por ultrasonidos (tipo EVIDIS), evitando detergentes agresivos (NT235, págs. 119, 184; NT278, pág. 161; NT491, págs. 125-126). Si tras higienizar persisten los olores, el revestimiento del aluminio se ha vuelto poroso y exige sustituir el evaporador (NT491, pág. 126).

Es obligatorio sustituir periódicamente el filtro de habitáculo y desobstruir el orificio y tubo de descarga de agua (NT50, pág. 65; NT278, pág. 161; NT491, pág. 125). La presencia de un charco de agua bajo el coche en paradas es un proceso normal de deshidratación y no constituye avería (NT805, pág. 27).

En caso de sustitución física del componente:
- Añadir **50 cc de aceite nuevo** al circuito y realizar un vacío profundo de al menos **45 minutos** antes de cargar (NT50, pág. 71).
- Renovar juntas tóricas, asegurar que la junta aislante contorneada quede sellada sin rasgaduras y aislar térmicamente tubos y válvula (NT50, pág. 71).
- Montar tuberías atornillables de Servicio si se interviene en Audi A4 '08 desoldando las de origen (NT418, pág. 65).
- En vehículos con R1234yf, asegurar la brida de fijación robusta y juntas verdes compatibles (NT907, págs. 24, 26).
- Queda terminantemente prohibido montar evaporadores adaptables de inferior eficacia térmica (NT747, pág. 8).

## Discrepancias

- Presión de trabajo en baja y punto de ebullición: NT16 (pág. 22) registra 1,2 bar a -7 ºC; NT278 (pág. 82) indica aprox. 2 bar (0,2 MPa) entre -1 ºC y -5 ºC; NT491 (págs. 117, 165) documenta 2 bar a aprox. 0 ºC; mientras que NT235 (pág. 116) y NT790 (pág. 40) indican 3 bar a 0 ºC o entre -1 ºC y +1 ºC. Responde a distintas curvas características de refrigerante y condiciones de ensayo descritas por los respectivos manuales.
- Función expansora: NT659 (pág. 7) afirma textualmente que la misión del evaporador incluye «producir la expansión del agente frigorífico», mientras que la totalidad de las restantes fuentes (NT50 pág. 65, NT220 pág. 22, NT235 pág. 115, NT249 pág. 22, NT278 pág. 82, NT367 pág. 1, NT747 pág. 7) señalan que la expansión la realiza la válvula de expansión previa al evaporador. Se cataloga como una imprecisión conceptual de NT659.

## Imágenes requeridas

- [NT383_01] Vista del evaporador de climatización junto a la caja de aireación
- [NT790_01] Esquema del ciclo de evaporación en el diagrama p-h y vista de evaporador de tubos y aletas y evaporador de placas
- [NT418_01] Despiece del evaporador del grupo climatizador y detalle del conjunto de tubos atornillables para Servicio
- [NT50_01] Esquema del evaporador con la entrada de agente frigorífico a través de la válvula de expansión y flujo de aire refrigerado
- [NT907_01] Esquema del cuerpo del evaporador mostrando el flujo de aire exterior caliente, la admisión/salida del refrigerante y la salida del aire refrigerado
- [NT747_01] Diagrama psicrométrico de condensación de agua en aletas para aire a 35 ºC y 40% HR saliendo a 10 ºC y 100% HR
- [NT747_02] Evolución del ciclo en el Diagrama de Mollier al sustituir el evaporador por uno de menor eficacia con caída de BP a BP'
