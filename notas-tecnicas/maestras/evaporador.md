---
id: ssc.maestra.evaporador
modulo: ssc
unidad: clima
nt: 1002
tipo: elemento
clase: componente
titulo: "El Evaporador de Climatización"
codigo: "EVAP-01"
menu: "El Evaporador de Climatización"
grupo: "Circuito frigorífico"
clave: evaporador
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
estado: borrador
fusionadas: [16, 50, 220, 235, 249, 278, 367, 383, 418, 491, 615, 659, 691, 726, 747, 790, 805, 907]
huella: 0d67c7a28ff7
modelo: gemini-3.5-flash
fuentes: "Fusión de 18 fuentes"
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

El evaporador es un intercambiador que absorbe el calor del aire destinado al habitáculo mediante la ebullición y evaporación del agente frigorífico en su interior (NT16, pág. 21; NT50, págs. 64-66; NT220, págs. 21-22; NT278, pág. 82; NT418, págs. 64-65; NT615, págs. 11-12; NT805, págs. 26-27). Este proceso permite enfriar, deshidratar, deshumidificar y depurar o limpiar el flujo de aire que ingresa al vehículo (NT16, pág. 21; NT50, págs. 64-66; NT235, pág. 115; NT278, pág. 82; NT383, pág. 14; NT491, pág. 117; NT691, págs. 123, 129; NT747, págs. 1, 2; NT805, págs. 26-27; NT907, pág. 36). También genera aire frío y lo transmite al interior mediante la corriente del ventilador (NT726, pág. 3; NT249, pág. 22; NT367, pág. 1; NT659, pág. 7).

## Tipos y características

Se trata de un intercambiador de calor de gran superficie fabricado en aluminio, ubicado en la zona de baja presión dentro de la unidad o caja climática bajo el salpicadero o en el compartimento motor (NT16, pág. 21; NT50, pág. 66; NT220, págs. 22-23; NT249, págs. 21-22; NT278, pág. 82; NT491, pág. 118; NT615, pág. 11; NT659, pág. 7; NT726, págs. 1, 3; NT790, pág. 40; NT805, pág. 26). Se sitúa inmediatamente antes del radiador de calefacción y de la trampilla de mezcla, y después del soplador o impulsor (NT50, pág. 66; NT383, pág. 16; NT747, págs. 1, 2). Incorpora una carcasa envolvente, un canal de recogida de agua condensada y un tubo de descarga al exterior con válvula antirretorno (NT491, págs. 118, 120, 121; NT691, págs. 133, 135; NT907, pág. 36). Existen diferentes variantes constructivas y de montaje: - Monobloque integral, semi-integrado o integrado bajo el salpicadero (NT691, págs. 136, 139, 141, 142). ### Evaporador de tubos y aletas (o de serpentín) - Formado por tubos cilíndricos en horquilla insertados paralelamente entre aletas de aluminio expandidas mecánicamente, alimentados por capilares desde un venturi (NT747, pág. 7; NT790, pág. 40). En vehículos japoneses se usa la variante de serpentín, con un único tubo plano extruido con múltiples canalizaciones internas y aletas en acordeón (NT747, pág. 7). Skoda emplea un laberinto de tubos guiados en una red de aletas lamelares (NT907, pág. 36). ### Evaporador de placas - Formado por placas de aluminio en forma de cubetas con aletas en acordeón intercaladas, soldadas al vacío (NT747, pág. 8). El fluido circula en forma de U con celdillas intermedias que fuerzan la turbulencia del aire para dar mayor rendimiento térmico (NT790, pág. 41). Incorpora placas alveolares, columnas parcializadoras y colectores (NT691, págs. 133, 135). ### Versiones de fábrica vs. recambio (Audi A4 08) - La versión de fábrica incorpora tubos unidos por soldadura fija, mientras que la versión de recambio o de Servicio utiliza tubos independientes atornillables (NT418, págs. 64-65). ### Diseños según refrigerante - En vehículos Fabia, Octavia y Superb con refrigerante R1234yf se utiliza un diseño de brida de conexión reforzado y más robusto (NT907, págs. 24, 26).

## Principio de funcionamiento

El refrigerante entra pulverizado en estado difásico (líquido y gas) a baja presión y temperatura tras pasar por la válvula de expansión (NT16, págs. 21-22; NT50, pág. 65; NT220, pág. 22; NT235, págs. 115-116; NT278, pág. 82; NT491, pág. 117; NT790, pág. 40). Al circular por los conductos, absorbe el calor del aire impulsado por la turbina a través de las aletas mediante conducción y convección térmica (NT16, págs. 21-22; NT50, pág. 65; NT220, pág. 22; NT249, pág. 22; NT278, pág. 82; NT383, pág. 15; NT418, págs. 64-65; NT491, pág. 117; NT615, págs. 11-12; NT691, págs. 129, 135; NT747, págs. 4, 5; NT790, pág. 40; NT805, págs. 26-27; NT907, pág. 36). El refrigerante hierve y se evapora por completo a temperatura constante Tev mediante calor latente, y luego se recalienta mediante calor sensible hasta salir en estado 100% gaseoso hacia el compresor, asegurando que no entre líquido (NT220, pág. 22; NT235, págs. 115-116; NT278, pág. 82; NT615, pág. 11; NT747, págs. 3, 4; NT790, pág. 40; NT805, pág. 26). Al enfriarse el aire por debajo de su punto de rocío, la humedad se condensa en las aletas frías, generando agua que se evacúa al exterior por el drenaje (NT50, pág. 65; NT235, págs. 115-116; NT278, pág. 82; NT383, pág. 15; NT491, pág. 117; NT615, págs. 11-12; NT691, págs. 129, 135; NT805, págs. 26-27; NT907, pág. 36). El balance energético del aire cumple la fórmula Pfrigo = Qa · Cp · (Ti - Tf) + Qa · (Hai - Haf) · L si hay condensación, o Pfrigo = Qa · Cp · (Ti - Tf) si no la hay (NT747, págs. 1, 3). El balance del fluido es Pfrigo = Qf · (h2 - h1) (NT747, pág. 3). La eficacia de intercambio cumple Pfrigo = hevap · S · (Ti - Tev); un evaporador de menor eficacia (hevap inferior) reduce la presión de baja, aumenta la relación de compresión, disminuye el rendimiento del compresor y provoca cortes cíclicos (NT747, págs. 5, 6).

## Valores de trabajo

Los valores de presión y temperatura del refrigerante varían según el diseño: - Presión de 1,2 bares a -7 ºC (NT16, pág. 22). - Presión de 3 bar a -1 ºC en la entrada, de -1 ºC a +1 ºC durante la evaporación, y salida de gas a 3 bar y +3 ºC (NT235, pág. 116). - Presión de 3 bar a 0 ºC en la entrada y ebullición, y salida a 3 bar y 6 ºC tras el recalentamiento (NT790, pág. 40). - Presión de trabajo de 2 bares (0,2 MPa) con temperatura de entrada de -1 ºC a -5 ºC (NT278, pág. 82). - Temperatura de ebullición del R134a de 0 ºC a 2 bar (NT491, págs. 117, 165) o bastante inferior a los 0 ºC de congelación del agua (NT50, pág. 65). El recalentamiento mínimo debe ser superior a 2 ºC (NT747, pág. 4). Respecto al aire: - Temperatura de entrada de 24 ºC y salida a 4 ºC (descenso de 20 ºC) (NT16, pág. 22). - Temperatura de salida del aire soplado de +3 ºC a +7 ºC (NT278, pág. 82). - Ejemplo práctico: entrada a 35 ºC (40% HR, Hai = 0,0141 kg/kg), salida a 10 ºC (100% HR, Haf = 0,0078 kg/kg) con caudal de 500 kg/h, produciendo 3,15 kg/h de agua condensada (NT747, pág. 2). En cuanto al aceite: - Volumen de aceite retenido en el evaporador: 50 cc (NT50, pág. 71). - Purga de aceite: 3 minutos a 5.000 r.p.m. con calefacción y A/C al máximo en recirculación (NT50, pág. 65).

## Anomalías frecuentes

- Acumulación excesiva o inundación de aceite sintético, lo que disminuye el rendimiento frigorífico (NT50, pág. 65). - Proliferación de bacterias, hongos y microorganismos en la humedad de las aletas, generando malos olores (NT50, pág. 65; NT220, págs. 4, 21; NT235, pág. 119; NT278, págs. 82, 161; NT491, págs. 124-126; NT615, pág. 12). - Fugas de refrigerante por corrosión, picaduras, fisuras en empalmes, cuerpo o brida de unión (NT220, pág. 23; NT235, pág. 119; NT249, págs. 21, 23; NT367, pág. 1; NT418, págs. 64-65; NT691, pág. 210; NT907, págs. 24, 26). - Obstrucción interna de tuberías por suciedad o virutas (NT220, pág. 23; NT249, págs. 21, 23; NT367, pág. 1). - Obstrucción externa de la entrada de aire por polvo, polen y suciedad (NT220, pág. 23; NT249, págs. 21, 23; NT367, pág. 1; NT491, págs. 124-126). - Obstrucción o grietas en el tubo de drenaje de condensados (NT278, págs. 82, 161; NT491, págs. 124-126; NT615, pág. 12; NT691, pág. 210; NT907, pág. 36). - Congelación de la superficie por fallo del termostato, sensor o sonda antihielo (NT235, pág. 119; NT491, págs. 124-126; NT691, pág. 210; NT747, pág. 8). - Montaje incorrecto del aislamiento térmico de tubos o válvula de expansión, alterando la regulación por radiación de calor (NT50, pág. 71). - Pérdida del revestimiento protector de aluminio que vuelve poroso el material (NT491, págs. 124-126). - Sustitución por un evaporador adaptable de menor eficacia, que provoca caída de la presión de baja y cortes cíclicos (NT235, pág. 119; NT747, págs. 5, 6).

## Comportamiento en avería

- Pérdida de capacidad de enfriamiento, rendimiento deficiente o fallo total del aire acondicionado (NT220, pág. 23; NT235, pág. 119; NT249, pág. 23; NT278, pág. 82; NT367, pág. 1; NT418, pág. 64; NT747, págs. 2, 5, 8; NT805, pág. 26; NT907, pág. 36). - Caudal de aire insuficiente o potencia deficiente del ventilador hacia el habitáculo (NT220, pág. 23; NT249, pág. 23; NT367, pág. 1). - Emisión de malos olores desagradables al activar la ventilación (NT220, pág. 23; NT235, pág. 119; NT278, pág. 161; NT491, pág. 177; NT615, pág. 12). - Vaho constante o empañado de cristales por falta de deshumidificación (NT278, pág. 90; NT615, pág. 12; NT691; NT747, pág. 2; NT907, pág. 36). - Congelación de la carcasa o superficie, bloqueando el paso de aire a los difusores (NT278, pág. 90; NT491, pág. 164). - Si falla la turbina de aire fresco o no funciona a velocidad lenta, la unidad de control interrumpe el compresor para evitar la congelación (NT50, pág. 65). - Si se obstruye el drenaje, el agua condensada rebosa o se filtra al piso/moqueta del habitáculo (NT491, pág. 124; NT615, pág. 12; NT691). - Desconexiones cíclicas continuas del compresor si el evaporador es de menor eficacia (NT747, págs. 5, 8).

## Cómo comprobarlo

1. Comprobar inundación de aceite: hacer funcionar el motor a 5.000 r.p.m. durante 3 minutos con A/C y calefacción al máximo en recirculación; si el rendimiento aumenta, hay exceso de aceite (NT50, pág. 65). 2. Inspección visual: verificar que la matriz de aletas esté limpia, sin suciedad, daños ni corrosión (NT220, pág. 23; NT249, págs. 23-24; NT367, pág. 1; NT747, pág. 8). 3. Comprobar manguitos: verificar la colocación correcta de las mangueras de conexión (NT249, pág. 24; NT367, pág. 1). 4. Comprobar estanqueidad: realizar pruebas de estanqueidad en el cuerpo y tuberías con detector de fugas, detector de gas en el tubo de drenaje o nitrógeno (NT220, pág. 24; NT235, pág. 119; NT249, pág. 24; NT367, pág. 1; NT418, págs. 64-65; NT691). 5. Verificar drenaje: comprobar la salida constante y libre goteo de agua condensada bajo el vehículo con el sistema en marcha (NT278, pág. 161; NT491, pág. 125; NT615, pág. 12; NT691; NT907, pág. 36). 6. Medir temperaturas: registrar la temperatura en la tubería de entrada y de salida (NT220, pág. 24; NT249, pág. 24; NT367, pág. 1), y en las toberas centrales o difusores (debe ser de +3 ºC a +7 ºC) (NT278, pág. 82; NT907, pág. 36). 7. Medir presiones: verificar las presiones de trabajo con el compresor activado y motor en marcha (NT220, pág. 24; NT249, pág. 24; NT367, pág. 1). 8. Medir recalentamiento: calcular la diferencia entre la temperatura de salida del gas y la de evaporación en el manómetro de baja presión (NT235, pág. 115). 9. Controlar la sonda: verificar que la superficie no se congele controlando el funcionamiento de la sonda del evaporador (NT747, pág. 8). 10. Si persisten malos olores tras desinfectar por ultrasonidos, desmontar para verificar porosidad del recubrimiento (NT491, pág. 126).

## Mantenimiento

- Realizar desinfección periódica y tratamientos higiénicos/antisépticos de las aletas mediante productos bactericidas/fungicidas o nebulización ultrasónica (ej. sistema EVIDIS) para eliminar microorganismos, evitando limpiadores químicos agresivos (NT220, págs. 4, 21; NT235, págs. 119, 184; NT249, págs. 4, 21; NT278, pág. 161; NT367, pág. 1; NT491, págs. 125, 126; NT615, pág. 12; NT691, pág. 135). - Sustituir el filtro de habitáculo (NT235, pág. 184). - Verificar, limpiar y mantener libre el orificio o tubo de evacuación de condensados en cada revisión (NT50, pág. 71; NT278, pág. 161; NT383, pág. 15; NT491, págs. 125, 126; NT615, pág. 12; NT805, pág. 27). La presencia de charcos de agua bajo el vehículo es normal (NT805, pág. 27). - Prohibido sustituir el evaporador original por un modelo adaptable de menor eficacia (NT747, pág. 8). - Al sustituir el evaporador: pegar la junta aislante contorneada en todo su perímetro sin dañarla (NT50, pág. 71); sustituir juntas tóricas, aislar tubos de empalme y válvula de expansión, y añadir 50 cc de aceite nuevo (NT50, pág. 71); realizar un vacío profundo de al menos 45 minutos antes de la recarga (NT50, pág. 71). - En Audi A4 08, si se sustituye el evaporador de serie (tubos soldados), desunir los tubos originales y montar el grupo de tubos atornillables de Servicio (NT418, pág. 65). - En sistemas con R1234yf, montar la brida de fijación robusta específica y reemplazar las juntas por anillos compatibles con R1234yf (NT907, págs. 12, 24, 26). - Controlar periódicamente el estado de la sonda del evaporador para prevenir la congelación (NT747, pág. 8).

## Discrepancias

- Presión y temperatura de trabajo del refrigerante: NT16 (pág. 22) indica 1,2 bares a -7 ºC; NT235 (pág. 116) indica 3 bar a -1 ºC (entrada) y de -1 ºC a +1 ºC (evaporación); NT278 (pág. 82) indica aprox. 2 bares (0,2 MPa) de -1 ºC a -5 ºC; NT491 (pág. 117, 165) indica 2 bar a aprox. 0 ºC; NT790 (pág. 40) indica 3 bar a 0 ºC.
- Temperatura del aire soplado a la salida: NT16 (pág. 22) indica 4 ºC (con entrada a 24 ºC); NT278 (pág. 82) indica de +3 ºC a +7 ºC; NT747 (pág. 2) indica 10 ºC (con entrada a 35 ºC en su ejemplo práctico).

## Imágenes requeridas

- [NT50_01] Esquema del evaporador con la entrada de agente frigorífico a través de la válvula de expansión y flujo de aire refrigerado
- [NT418_01] Despiece del evaporador del grupo climatizador y detalle del conjunto de tubos atornillables para Servicio
- [NT691_01] Sección de un evaporador de placas con colectores, aletas y tubo de descarga de condensación
- [NT747_02] Evolución del ciclo en el Diagrama de Mollier al sustituir el evaporador por uno de menor eficacia con caída de BP a BP'
- [NT907_01] Esquema del cuerpo del evaporador mostrando el flujo de aire exterior caliente, la admisión/salida del refrigerante y la salida del aire refrigerado
