---
id: ssc.maestra.ciclo-frigorifico
modulo: ssc
unidad: clima
nt: 1011
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Ciclo Frigorífico y Climatización del Automóvil"
codigo: "Master_Ciclo_Frigorifico"
menu: "Ciclo Frigorífico y Climatización del "
grupo: "Circuito frigorífico"
clave: ciclo-frigorifico
area: climatizacion
sistema: "circuito-frigorifico"
estado: pendiente
fusionadas: [10, 18, 25, 148, 149, 187, 215, 244, 252, 255, 264, 267, 301, 311, 314, 315, 316, 322, 325, 337, 438, 540, 542, 563, 567, 568, 588, 599, 602, 603, 604, 607, 609, 635, 636, 656, 673, 702, 709, 723, 742, 748, 780, 800, 806, 822, 828, 851, 859, 860, 861]
huella: 0061fa9b7cfc
modelo: gemini-3.5-flash
fuentes: "Fusión de 51 fuentes"
niveles:
  "Objeto": basico
  "Fundamento": intermedio
  "Desarrollo": avanzado
  "Valores de referencia": intermedio
  "Errores de concepto frecuentes": avanzado
faltan:
  - "NT10: 45 ºC"
  - "NT148: 1.500 y 2.000 r.p.m."
  - "NT252: 0,1 MPa"
  - "NT255: 1.500 y 2.000 rpm"
  - "NT264: 0,1 MPa"
  - "NT264: 125 ºC"
  - "NT264: 160 ºC"
  - "NT267: 1.500-2.000 rpm"
  - "NT316: -12 ºC"
  - "NT322: 0,1 MPa"
  - "NT325: 1.500-2.000 rpm"
  - "NT540: 0,1 MPa"
  - "NT540: 12 a 0,1 MPa"
  - "NT609: 1.500-2.000 rpm"
  - "NT635: 0,1 MPa"
  - "NT635: 125 ºC"
  - "NT636: 1.500-2.000 rpm"
  - "NT800: 0,1 MPa"
---

## Objeto

Esta nota maestra describe el funcionamiento del ciclo cerrado de refrigeración para extraer calor del habitáculo y disiparlo en el aire exterior mediante cambios de estado del fluido (NT10, pág. 127; NT18, págs. 21-22; NT25, págs. 25-26; NT148, pág. 44; NT149, págs. 45-46; NT255, Sección Circuito; NT267, págs. 41-45; NT325, págs. 12-15; NT542, págs. 12-14; NT567, pág. 10; NT609, págs. 4-5; NT636, págs. 40-46; NT673, pág. 1, 26, 58). El objetivo es generar el salto térmico necesario para enfriar y deshumectar el aire destinado al habitáculo (NT438, pág. 7). Se analizan las leyes físicas de transferencia de calor, cambios de estado y la variación del punto de ebullición según la presión (NT252, págs. 2-3; NT264, págs. 28-31; NT322, págs. 6-7; NT540, págs. 6-7; NT563, págs. 2-4; NT635, págs. 28-31). Asimismo, se diferencian las magnitudes de presión absoluta, relativa y vacío (NT311, pág. 4), y se establecen las medidas de seguridad y prevención de riesgos en el manejo de agentes frigoríficos (NT568, págs. 11-15). Finalmente, se detalla la disposición de componentes en vehículos específicos como el SEAT Ibiza/Córdoba '99 (NT187, pág. 7; NT588, pág. 7; NT656, pág. 7), sistemas multizona (NT337, pág. 50), doble evaporador (NT822, pág. 18) y bomba de calor en vehículos eléctricos (NT702, pág. 52).

## Fundamento

El calor fluye espontáneamente desde la sustancia más caliente hacia la más fría hasta igualar temperaturas (NT252, págs. 2-3; NT264, pág. 29; NT567, pág. 10; NT603, págs. 11-12; NT635, pág. 29; NT859, págs. 11-12). El sistema no genera frío, sino que extrae calor del habitáculo evaporando un refrigerante a baja presión y baja temperatura (Tev < Tambiente) y lo cede al exterior condensándolo a alta presión y alta temperatura (Tc > Tambiente) (NT10, pág. 113, 136, 140; NT18, págs. 21-22; NT148, pág. 44; NT255, Sección Circuito; NT267, págs. 41-45; NT325, págs. 12-13; NT540, págs. 6-7; NT542, págs. 12-13; NT567, pág. 10; NT609, pág. 4; NT636, págs. 41-42; NT673, pág. 26, 60; NT742, pág. 8; NT748, pág. 9; NT780, pág. 23, 24; NT800, págs. 6-7). Todos los componentes se interconectan mediante mangueras flexibles y conductos de aluminio formando un circuito cerrado hermético por el que circulan el gas refrigerante y una porción del aceite de lubricación (NT215, pág. 6; NT244, págs. 7-8; NT607, págs. 7-8; NT709, pág. 1; NT723, pág. 1). La entalpía (H = U + P x V) mide la energía total por unidad de masa (kJ/kg) (NT25, pág. 25; NT604, págs. 20-21; NT742, pág. 8; NT748, pág. 9; NT860, págs. 20, 25-31). En cambios de estado a presión constante, el calor intercambiado equivale al producto de la masa por la variación de entalpía (NT742, pág. 8; NT748, pág. 9). El punto de ebullición de un líquido depende directamente de la presión ejercida sobre su superficie: a mayor presión, mayor temperatura de ebullición (NT252, pág. 3; NT264, págs. 30-31; NT322, págs. 6-7; NT540, págs. 6-7; NT563, págs. 2-4; NT604, págs. 23-24; NT635, págs. 29-31).

## Desarrollo

### 1. Magnitudes de Presión y Leyes Físicas
- **Presión absoluta**: Origen en el vacío absoluto (0 bar de presión absoluta) (NT311, pág. 4). Presión absoluta = Presión medida + Presión atmosférica (NT311, pág. 4).
- **Presión relativa**: Referencia cero en la presión atmosférica (0 bar relativo) (NT311, pág. 4). La presión atmosférica normal equivale a 1 bar de presión absoluta (0 bar de sobrepresión en manómetro) (NT563, págs. 2-4).
- **Vacío o depresión**: Presión por debajo de la atmosférica (NT311, pág. 4). A vacío (0 bar), el agua hierve a 30 ºC (NT604, pág. 24).
- **Calor sensible**: Modifica la temperatura sin cambiar el estado físico (NT603, pág. 13; NT859, págs. 13, 16). Calentar 1 kg de agua de 0 ºC a 20 ºC requiere +85 kJ, y de 20 ºC a 100 ºC requiere +335 kJ (NT603, pág. 18). Calentar 1 kg de hielo de -10 ºC a 0 ºC requiere +20 kJ (NT603, pág. 18).
- **Calor latente**: Energía para cambiar de estado a temperatura constante (NT603, pág. 14; NT742, pág. 9; NT748, pág. 10; NT859, págs. 16-18). Fusión de 1 kg de hielo a 0 ºC: +335 kJ (NT603, pág. 18; NT859, págs. 17-18). Vaporización de 1 kg de agua a 100 ºC: +2250 kJ (NT603, pág. 18; NT859, págs. 16, 18).
- **Volumen específico**: El gas ocupa mucho más volumen que el líquido. Para R134a a 20 ºC, 1,2 kg ocupan 1 litro en líquido y 31 litros en gas (NT604, pág. 22). Por ello, las tuberías de alta presión (líquido) son de pequeño diámetro y las de baja presión (gas) son de mayor diámetro (NT604, pág. 22).

[NT859_01]

### 2. El Ciclo Frigorífico y sus Fases
El circuito se divide en dos zonas: Alta Presión (HP/HD) (desde salida del compresor hasta entrada de válvula de expansión) y Baja Presión (LP/ND) (desde salida de válvula de expansión hasta aspiración del compresor) (NT10, pág. 140; NT18, págs. 21-22; NT148, pág. 44; NT215, pág. 6; NT244, págs. 7-9; NT255, Sección Circuito; NT316, págs. 10-11; NT325, pág. 14; NT599, págs. 6-7; NT607, págs. 8-9; NT709, pág. 1; NT723, pág. 2). Las fases consecutivas son:
1. **Compresión**: El compresor aspira gas a baja presión y temperatura y lo comprime elevando su presión y temperatura (NT10, pág. 134, 140; NT18, págs. 21-22; NT148, pág. 44; NT149, pág. 45; NT255, Sección Circuito; NT267, pág. 43; NT316, págs. 10-11; NT325, págs. 12, 14; NT542, pág. 13; NT567, pág. 10; NT602, pág. 4; NT609, pág. 4; NT636, págs. 42-43; NT673, pág. 11, 14; NT780, pág. 24; NT806, pág. 28; NT860, págs. 21, 56, 60).
2. **Condensación**: El gas caliente a alta presión cede calor al aire exterior (forzado por marcha o electroventilador) en el condensador, alcanzando su punto de rocío y licuándose (NT10, pág. 136, 140; NT18, pág. 22; NT148, pág. 44; NT149, pág. 45; NT255, Sección Circuito; NT267, pág. 44; NT315, págs. 9-10; NT316, págs. 10-11; NT325, págs. 12-14; NT542, pág. 13; NT567, pág. 10; NT602, pág. 4; NT609, pág. 4; NT636, pág. 44; NT673, pág. 11, 18; NT709, pág. 1; NT780, pág. 24; NT806, pág. 28; NT860, págs. 56, 82).
3. **Filtrado y desecado**: El líquido pasa por el filtro deshidratador (en alta presión para sistemas con válvula de expansión) que retiene humedad, impurezas por abrasión, inclusiones de aire y evita burbujas (NT10, pág. 138, 140; NT18, pág. 22; NT148, pág. 44; NT187, pág. 7; NT215, pág. 6; NT244, págs. 8-9; NT438, pág. 7; NT588, pág. 7; NT599, págs. 6-7; NT607, págs. 8-9; NT656, pág. 7; NT673, pág. 21; NT709, pág. 1; NT780, pág. 24; NT851, págs. 6-7).
4. **Expansión**: El líquido a alta presión pasa por la válvula de expansión (o estrangulador), sufriendo una caída brusca de presión y temperatura, pulverizándose en mezcla difásica (líquido + vapor, aprox. 20% vapor) (NT10, pág. 127, 140; NT18, pág. 22; NT148, pág. 44; NT149, págs. 45-46; NT255, Sección Circuito; NT267, págs. 45, 82; NT316, págs. 10-11; NT325, págs. 13-15; NT542, págs. 13-14; NT609, págs. 4-5; NT636, págs. 44-45; NT673, pág. 11, 21, 64; NT780, pág. 24; NT806, pág. 28; NT860, págs. 56, 100).
5. **Evaporación**: El fluido difásico entra en el evaporador, absorbe calor del aire del habitáculo impulsado por la turbina, hierve y se evapora por completo, deshumidificando el aire (NT10, pág. 128, 129, 140; NT18, pág. 22; NT148, págs. 44, 46; NT149, pág. 45; NT255, Sección Circuito; NT267, págs. 45, 82; NT314, págs. 7-8; NT316, págs. 10-11; NT325, págs. 13, 15; NT542, págs. 13-14; NT567, pág. 10; NT602, pág. 4; NT609, pág. 5; NT636, págs. 44-45; NT673, pág. 23, 24; NT780, pág. 24; NT860, págs. 56, 114).

[NT148_01]

### 3. El Diagrama de Mollier
Representa la presión absoluta frente a la entalpía (kJ/kg) (NT25, pág. 25; NT673, pág. 71; NT860, págs. 20, 25-31). La curva de saturación (Csat) en forma de campana delimita tres zonas: líquido saturado (izquierda), vapor saturado (derecha) y mezcla difásica líquido+vapor (bajo la curva) (NT25, pág. 25; NT742, pág. 8, 9; NT748, pág. 9, 10; NT860, págs. 25-31). Las isotermas (líneas de temperatura constante) son horizontales en la zona difásica, indicando que el cambio de estado a presión constante ocurre a temperatura constante (NT742, pág. 9; NT748, pág. 10).

[NT860_01]

### 4. Diagnóstico mediante Subenfriamiento y Recalentamiento
- **Subenfriamiento (SC)**: Diferencia entre la temperatura de condensación (escala del manómetro HP) y la temperatura real medida con termómetro de contacto a la salida del condensador (NT861, pág. 201). Valor nominal: 2 ºC a 10 ºC (NT861, págs. 202, 231). Si es < 2 ºC indica falta de refrigerante; si es > 10 ºC indica exceso (NT861, págs. 204-206, 234).
- **Recalentamiento (SR)**: Diferencia entre la temperatura real medida en la tubería de aspiración (salida del evaporador) y la temperatura de evaporación (escala del manómetro BP) (NT861, pág. 207). Valor nominal: 2 ºC a 10 ºC (NT861, págs. 209, 231). Si es < 2 ºC indica exceso de refrigerante en el evaporador; si es > 10 ºC indica falta (NT861, págs. 210-212, 234).

[NT861_01]

### 5. Normas de Seguridad e Higiene
- **Protección**: Uso obligatorio de gafas de protección con solapas laterales y guantes resistentes. Disponer de una botella de agua para enjuague ocular en el área de trabajo (NT568, págs. 13-14).
- **Manipulación**: Asegurar las botellas contra caídas o deslizamientos. No llenar recipientes por encima del factor de llenado (1,15 kg/l) para mantener la cámara de expansión de gas. No calentar botellas ni exponerlas al sol directo (NT568, págs. 12-14).
- **Prevención de toxicidad**: Prohibición absoluta de fumar o realizar trabajos de soldadura cerca de componentes del circuito. Las llamas o arcos volticos descomponen el R134a en gases tóxicos e irritantes (NT568, págs. 11, 14).
- **Condiciones del taller**: Trabajar en zonas bien ventiladas con los sistemas de aspiración activados. Prohibido manipular o almacenar gas en recintos subterráneos, fosos o bajadas de ventanas (NT568, págs. 13-14).
- **Horno de secado de pintura**: Si se introduce un vehículo con el circuito lleno en un horno de secado, la temperatura máxima de los componentes no debe superar 80 ºC para evitar sobrepresiones y la apertura de la válvula de descarga. Si se supera esa temperatura, vaciar previamente el gas (NT568, págs. 14-15).
- **Humedad**: El R134a y el aceite PAG en presencia de agua y altas temperaturas reaccionan químicamente formando ácido fluorhídrico que corroe los componentes internos (NT301, págs. 139-140). Las gotas de agua que escapan del filtro deshidratador se congelan en el orificio de la válvula de expansión, bloqueando el paso de refrigerante (NT301, pág. 139). El aceite PAG es altamente higroscópico y absorbe la humedad ambiental en pocos minutos (NT301, págs. 70, 142).
- **Limpieza**: Si el circuito ha permanecido abierto, ha sufrido un accidente o una rotura mecánica de compresor, es obligatorio realizar un lavado/barrido del circuito con aire seco o nitrógeno y sustituir el filtro deshidratador antes de cargar aceite y gas nuevo (NT301, págs. 141-142).

### Tipos y características

### Sistema con Válvula de Expansión
Utiliza una válvula de expansión para dosificar el caudal y regular la caída de presión (NT148, pág. 44). El filtro deshidratador se sitúa en la zona de alta presión (NT148, págs. 44, 45; NT215, pág. 6; NT244, págs. 7-9; NT255, Sección Circuito; NT599, págs. 6-7; NT607, págs. 8-9). Componentes típicos: Compresor, condensador, filtro deshidratador, conmutador de alta presión/trinaria/MAP, empalme de servicio HP, válvula de expansión, evaporador, empalme de servicio LP (NT148, pág. 44; NT723, pág. 1, 5). Algunos modelos incorporan un amortiguador/silenciador antes del compresor para atenuar oscilaciones de presión e impedir que absorba líquido (NT148, pág. 44; NT255, Sección Circuito).

### Sistema con Tubo Estrangulador / Inyector
El rociado se realiza mediante un tubo estrangulador o inyector calibrado de sección fija sin variación de caudal (NT149, págs. 45-46; NT806, págs. 28-29; NT828, págs. 83-85). Se identifican por colores según el diámetro del orificio (NT149, pág. 46). Al carecer de regulación de caudal a la entrada, requiere un filtro deshidratador / depósito colector (acumulador de expansión) de mayores dimensiones en el lado de baja presión (entre evaporador y aspiración del compresor) para asegurar que el compresor aspire solo gas, evitando golpes de ariete (NT149, págs. 45-46; NT806, págs. 28-29; NT828, págs. 83-85). Se suele ubicar en una zona caliente del compartimento motor (NT149, págs. 45-46; NT828, pág. 85). Las presiones de trabajo en el lado de alta (aprox. 20 bares) y la temperatura de compresión (aprox. 70 ºC) son superiores a las de los sistemas con válvula de expansión (NT149, págs. 45-46).

[NT149_01]

### Circuito del SEAT Ibiza y Córdoba '99
Circuito idéntico para sistema manual y autoclima (NT187, pág. 7; NT588, pág. 7; NT656, pág. 7). Componentes: Compresor de 7 cilindros autorregulado arrastrado por correa Poly V mediante acoplamiento magnético, con válvula de seguridad tarada a 44 bares (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT656, pág. 7; NT851, pág. 7). Condensador delante del radiador de motor (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT656, pág. 7; NT851, págs. 6-7). Filtro deshidratador, válvula de expansión, evaporador en la unidad climática (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT656, pág. 7; NT851, págs. 6-7). Conmutador F129 (diésel) o transmisor G65 (gasolina) en la línea de alta junto a la válvula de expansión (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT656, pág. 7; NT851, pág. 7). Silenciador en la línea de baja presión cerca del compresor para amortiguar ruidos de ondas de presión (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT656, pág. 7; NT851, pág. 7). Carga de R134a: 750 ± 50 gramos (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT656, pág. 7; NT851, pág. 7).

[NT851_01]

### Sistemas Multizona y Doble Evaporador
- **Sistemas de 3 y 4 zonas**: Utilizan un único evaporador común para todo el habitáculo e integran un intercambiador de calor interno entre la línea de alta y baja presión para optimizar el consumo y reducir emisiones de CO2 (NT337, pág. 50). El aceite PAG circula emulsionado (NT337, pág. 50).
- **Sistema 4C-Climatronic (ej. Touareg)**: Integra dos evaporadores independientes conectados en paralelo, cada uno con su válvula de expansión termostática, gestionados por un único compresor de disco oscilante de 7 émbolos con regulación externa mediante la válvula N280 (NT822, págs. 18-20). El accionamiento del compresor es directo por correa auxiliar en motores de gasolina, y directo por tren de ruedas dentadas (junto a la bomba de servodirección) en motores diésel V10-TDI y R5-TDI (NT822, pág. 18).

[NT822_01]

### Climatización por Bomba de Calor (Vehículo Eléctrico)
Permite generar frío y calor invirtiendo el recorrido del refrigerante mediante electroválvulas de conmutación (NT702, pág. 52). Componentes (ej. Renault Zoe): Condensador/evaporador externo delantero, compresor eléctrico de alto voltaje, filtro/acumulador, condensador interior, evaporador interior, válvula expansora de orificio calibrado, calculador de climatización, calculador para la bomba de calor, turbina de aire fresco, electroválvula de by-pass, electroválvula de corte de evaporador interior (NT702, págs. 52-53).
- **Modo Refrigeración**: Electroválvula de by-pass (10) activada anulando la expansora del condensador exterior. El compresor circula por condensadores (1 y 4). La expansora (6) reduce presión antes del evaporador interior (5). Trampilla de calefacción cerrada (NT702, pág. 53).
- **Modo Calefacción**: Electroválvula de corte (11) activada anulando el evaporador interior (5). El compresor envía refrigerante al condensador interior (4). La válvula (6) reduce presión hacia el condensador exterior (1), que actúa como evaporador. La turbina (9) calienta el aire al pasar por el condensador interior (4) (NT702, pág. 53).

[NT702_01]

## Valores de referencia

### Tabla de Valores Físicos y de Referencia

| Parámetro / Condición | Valor / Rango | Fuente |
|---|---|---|
| Punto de ebullición del agua a 1 bar | **100 ºC** | (NT252, pág. 3; NT264, pág. 30; NT322, pág. 6; NT635, pág. 30) |
| Punto de ebullición del R12 a 1 bar (Contexto antiguo) | **-29,8 ºC** | (NT252, pág. 3; NT322, pág. 6; NT540, pág. 6; NT800, pág. 6) |
| Punto de ebullición del R134a a 1 bar | **-26,5 ºC** | (NT252, pág. 3; NT264, pág. 30; NT322, pág. 6; NT540, pág. 6; NT800, pág. 6) |
| Punto de ebullición del aceite para máquinas | **380 ºC a 400 ºC** | (NT322, pág. 6) |
| Presión de vapor R134a a -25 ºC | **0,06 bares** de sobrepresión | (NT563, pág. 4) |
| Presión de vapor R134a a 0 ºC | **1,92 bares** de sobrepresión | (NT563, pág. 4) |
| Presión de vapor R134a a 20 ºC | **4,70 bares** de sobrepresión | (NT563, pág. 4) |
| Presión de vapor R134a a 80 ºC | **25,21 bares** de sobrepresión | (NT563, pág. 4) |
| Calor latente de evaporación R134a a -10 ºC (2,005 bar abs) | **48,23 kcal/kg (201,87 kJ/kg)** | (NT314, pág. 7) |
| Calor latente de evaporación R134a a -26,1 ºC (1,013 bar abs) | **50,90 kcal/kg (213,03 kJ/kg)** | (NT314, pág. 7) |
| Presiones nominales R134a / R1234yf | BP: **1,2 a 2 bar** \| AP: **14 a 20 bar** | (NT25, págs. 25-26) |
| Presiones nominales R744 (CO2) | BP: **30 a 50 bar** \| AP: **60 a 130 bar** | (NT25, págs. 24-25) |
| Presión de reposo (motor parado a 20 ºC) | **4,7 bar (0,47 MPa)** | (NT148, pág. 44; NT255, Sección Circuito; NT267, pág. 46; NT325, pág. 16; NT609, pág. 5; NT636, pág. 46) |
| Presión de reposo (motor parado a 30 ºC) | **6,6 bar** | (NT148, pág. 44) |
| Carga R134a SEAT Ibiza/Córdoba '99 | **750 ± 50 gramos** | (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT656, pág. 7; NT851, pág. 7) |
| Tarado válvula seguridad compresor SEAT | **44 bar** | (NT187, pág. 7; NT438, pág. 7; NT588, pág. 7; NT851, pág. 7) |
| Número de cilindros compresor SEAT | **7 cilindros** | (NT187, pág. 7; NT588, pág. 7; NT851, pág. 7) |
| Número de émbolos compresor Touareg | **7 émbolos** | (NT822, pág. 20) |
| Margen óptimo de subenfriamiento (SC) | **2 ºC a 10 ºC** | (NT861, págs. 202, 231) |
| Margen óptimo de recalentamiento (SR) | **2 ºC a 10 ºC** | (NT861, págs. 209, 231) |
| Temperatura máxima en horno de secado | **80 ºC** | (NT568, págs. 14-15) |
| Factor de llenado máximo en botellas | **1,15 kg/l** | (NT568, pág. 12) |
| Calor latente de fusión del agua | **335 kJ/kg** | (NT603, pág. 18; NT859, págs. 17-18) |
| Calor latente de vaporización del agua | **2.250 kJ/kg** a 100 ºC | (NT603, pág. 18; NT859, págs. 16, 18) |
| Temperatura de ebullición del agua a vacío (0 bar) | **30 ºC** | (NT604, pág. 24) |
| Volumen de 1,2 kg de R134a a 20 ºC | Líquido: **1 litro** \| Gas: **31 litros** | (NT604, pág. 22) |

**Presiones de trabajo según temperatura ambiente (R134a)** (NT316, pág. 12):
- A 12 ºC: BP = **0,5 a 2 bar** | AP = **9,5 a 13 bar**.
- A 21 ºC: BP = **0,5 a 2 bar** | AP = **12,5 a 15 bar**.
- A 26 ºC: BP = **0,5 a 2 bar** | AP = **14 a 17 bar**.
- A 32 ºC: BP = **1 a 2 bar** | AP = **15 a 18 bar**.
- A 38 ºC: BP = **1 a 2,5 bar** | AP = **18,5 a 22 bar**.
- A 43 ºC: BP = **1 a 2,5 bar** | AP = **20 a 24 bar**.

**Valores de trabajo típicos (Sistema con Válvula de Expansión)**:
- Salida compresor (compresión): **14 bar (1,4 MPa) y 65 ºC** (NT18, pág. 22; NT148, pág. 44; NT325, pág. 14; NT542, pág. 13; NT673, pág. 14) / **16 bar (1,6 MPa) y 80-90 ºC** (NT267, pág. 43; NT636, pág. 43) / **20 bar y 110 ºC** (NT602, pág. 4; NT780, pág. 24; NT860, pág. 56).
- Salida condensador (condensación): **14 bar (1,4 MPa) y 55 ºC** (NT18, pág. 22; NT325, pág. 14) / **14 bar con enfriamiento de ~10 ºC** (NT148, pág. 44; NT325, pág. 14) / **16 bar (1,6 MPa) y 50-60 ºC** (NT267, pág. 44; NT636, pág. 44) / **19 bar y 60 ºC** (NT602, pág. 4; NT673, pág. 11; NT860, pág. 56) / **16,7 bar y 50 ºC** (salida) o **60 ºC** (entrada) (NT315, págs. 9-10).
- Salida válvula de expansión / entrada evaporador: **1,2 bar (0,12 MPa) y -7 ºC** (NT18, pág. 22; NT325, pág. 15; NT542, pág. 14; NT673, pág. 21) / **1,5 a 2 bar y -5 ºC a 0 ºC** (NT148, pág. 44) / **2 bar (0,2 MPa) y -1 ºC** (NT267, pág. 45; NT636, pág. 45) o **-10 ºC** (NT314, pág. 8) / **3 bar y -1 ºC** (NT602, pág. 4) o **0 ºC** (NT673, pág. 21; NT780, pág. 25).
- Salida evaporador / entrada compresor: **1,2 bar (0,12 MPa) y -7 ºC** (NT18, pág. 22; NT325, pág. 15; NT673, pág. 14) / **1,5 a 2 bar y -5 ºC a 0 ºC** (NT148, pág. 44) / **2 bar y -1 ºC a +7 ºC** (NT267, págs. 45, 82) / **3 bar y 3 ºC a 5 ºC** (NT602, pág. 4) o **6 ºC** (NT780, pág. 24) o **+3 ºC** (NT860, pág. 56) / **10 ºC** (NT10, pág. 140).
- Salto térmico del aire en evaporador: Entrada a **24 ºC**, salida a **4 ºC** (salto de **20 ºC**) (NT18, pág. 22) / entrada a **40 ºC**, salida a **10 ºC** (NT314, pág. 8) / aire impulsado a **10 ºC** con exterior a **35 ºC** (NT602, pág. 4).

**Valores de trabajo típicos (Sistema con Tubo Estrangulador)**:
- Compresión: **~20 bar (2 MPa) y ~70 ºC** (NT149, pág. 45; NT806, pág. 28).
- Condensación: **~20 bar con enfriamiento de ~10 ºC** (NT149, pág. 45; NT806, pág. 28).
- Expansión/Evaporación: **1,5 bar y -4 ºC** (NT149, pág. 45).
- Temperatura salida estrangulador: **4 ºC** (NT149, pág. 45).
- Temperatura retorno al filtro colector: **24 ºC** (NT149, pág. 45).

## Errores de concepto frecuentes

- **Creer que el aire acondicionado "inyecta/produce frío"**, en lugar de comprender que extrae el calor del habitáculo evaporando el refrigerante (NT10, pág. 136; NT18, pág. 22; NT252, pág. 3; NT255, Sección Circuito; NT540, pág. 7; NT542, pág. 12; NT567, pág. 10; NT673, págs. 24, 26).
- **Permitir la llegada de fluido en fase líquida al compresor (golpe de ariete)**, lo que destruye el compresor por ser incompresibles los líquidos (NT18, pág. 22; NT149, págs. 45-46; NT609, pág. 6).
- **Interpretar el diagrama de entalpía ignorando que la capacidad de refrigeración depende de la masa de fluido** que cambia de fase en el evaporador (NT25, pág. 25).
- **Asumir que los valores de presión y temperatura del circuito son fijos e inmutables**, ignorando que varían según el tiempo de funcionamiento, tipo de compresor y temperatura ambiente (NT148, pág. 44; NT252, pág. 3; NT264, págs. 30-31; NT322, págs. 6-7; NT540, pág. 6; NT635, págs. 30-31; NT636, pág. 46).
- **Creer que el filtro deshidratador en un sistema con estrangulador se ubica en la zona de alta presión** igual que en los sistemas con válvula de expansión, omitiendo que se instala en la de baja presión (NT149, págs. 45-46; NT806, pág. 28; NT828, págs. 74, 85).
- **Confundir la capacidad de regulación de un estrangulador con la de una válvula de expansión**, ignorando que el estrangulador es de sección fija (NT149, pág. 46).
- **Pensar que el circuito del climatizador automático (autoclima) requiere componentes mecánicos principales distintos** a los del sistema manual (NT187, pág. 7; NT588, pág. 7).
- **Confundir la función del silenciador de baja presión con un filtro de impurezas** (NT187, pág. 7; NT588, pág. 7) o suponer que está situado en la línea de alta presión (NT851, pág. 7).
- **Considerar que solo circula refrigerante en el circuito**; un porcentaje del aceite de lubricación circula continuamente arrastrado por el refrigerante (NT215, págs. 6, 22; NT244, pág. 8; NT599, págs. 6-7; NT607, pág. 8).
- **Creer que la presión estática con el motor parado indica la cantidad exacta de masa de gas** en el circuito; solo indica que existe fase líquida en equilibrio de saturación (NT267, pág. 46; NT325, pág. 16).
- **Dejar las tuberías abiertas al aire durante reparaciones**; la higroscopía del aceite PAG absorbe la humedad ambiental en pocos minutos (NT301, págs. 70, 142).
- **Interpretar la lectura de los manómetros de taller como presión absoluta**; marcan la presión relativa respecto a la atmosférica (NT311, pág. 4; NT563, págs. 2-3; NT860, pág. 20).
- **Permitir que el refrigerante complete su evaporación demasiado pronto en el evaporador**, lo que recalienta el gas y anula la transferencia térmica (NT314, pág. 8).
- **Suponer que la condensación requiere una caída brusca de presión**; se realiza a alta presión prácticamente constante (NT315, págs. 9-10).
- **Interpretar los valores de alta presión sin considerar la temperatura exterior** (NT316, pág. 12).
- **Creer que los equipamientos traseros de 3 y 4 zonas incorporan evaporadores independientes**; utilizan un único evaporador común (NT337, pág. 50).
- **Buscar la correa auxiliar de accionamiento del compresor en las versiones diésel V10-TDI o R5-TDI**, omitiendo que es arrastrado por engranajes (NT822, pág. 18).
- **Intentar reparar tuberías de aluminio dañadas mediante soldadura sin evacuar totalmente el agente frigorífico** (NT568, pág. 14).
- **Llenar un recipiente de gas por completo en estado líquido sin dejar espacio para la dilatación térmica** (NT568, pág. 14).
- **Efectuar recargas basándose únicamente en la presión de lectura de los manómetros sin calcular previamente el subenfriamiento y el recalentamiento** (NT861, págs. 206, 212).
- **Considerar que la presión leída en alta corresponde siempre a la presión real del fluido**, ignorando que la presencia de incondensables (aire) eleva la presión total (NT742, pág. 2).
- **Intentar evaluar las prestaciones considerando únicamente las temperaturas antes y después del evaporador**, ignorando la humedad del aire (NT748, pág. 3).
- **Suponer que el paso del fluido por el filtro deshidratante modifica las condiciones de presión o temperatura** (NT780, pág. 26).

## Discrepancias

- Presión y temperatura de compresión (salida compresor): NT18, NT148, NT325, NT542 y NT673 indican aprox. 14 bar (1,4 MPa) y 65 ºC; NT267 y NT636 indican aprox. 16 bar (1,6 MPa) y 80-90 ºC; mientras que NT602, NT780 y NT860 indican 20 bar y 110 ºC.
- Presión y temperatura de expansión/evaporación: NT18, NT325, NT542 y NT673 indican 1,2 bar (0,12 MPa) y -7 ºC; NT148 indica de 1,5 a 2 bar y de -5 ºC a 0 ºC; NT267 y NT636 indican 2 bar y -1 ºC; NT314 indica 2 bar y -10 ºC; NT602 indica 3 bar y -1 ºC; NT673 y NT780 indican 3 bar y 0 ºC.
- Temperatura de salida del evaporador: NT10 indica 10 ºC; NT602 indica de 3 ºC a 5 ºC; NT780 indica 6 ºC; NT860 indica +3 ºC; NT267 indica de -1 ºC a +7 ºC.
- Carga de refrigerante en SEAT Ibiza/Córdoba '99: NT187, NT438, NT588 y NT851 indican '750 ± 50 gramos', mientras que NT656 indica '750-50 gramos' (claramente una errata de transcripción por omitir el símbolo ±).

## Imágenes requeridas

- [NT859_01] Gráfica de cambio de estado del agua indicando las mesetas de calor latente a 0 ºC y 100 ºC
- [NT148_01] Esquema del circuito frigorífico con válvula de expansión indicando fases de compresión, condensación, expansión y evaporación con sus presiones y componentes
- [NT860_01] Ciclo frigorífico completo trazado sobre la curva de campana del diagrama de Mollier
- [NT861_01] Gráfica de evolución simultánea del subenfriamiento y del recalentamiento en función de la masa de carga de refrigerante
- [NT149_01] Esquema del circuito frigorífico con estrangulador e indicación de presiones, temperaturas y posición del depósito colector en baja presión
- [NT851_01] Disposición de los componentes del circuito frigorífico indicando la ubicación del silenciador en baja presión y presostato F129/G65
- [NT822_01] Esquema del circuito frigorífico de doble evaporador indicando el trazado de alta y baja presión y la válvula N280
- [NT702_01] Esquema de componentes del sistema de climatización con bomba de calor en Renault Zoe
