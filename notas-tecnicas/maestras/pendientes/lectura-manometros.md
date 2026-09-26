---
id: ssc.maestra.lectura-manometros
modulo: ssc
unidad: clima
nt: 1003
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Nota Maestra: Diagnóstico del Circuito de Climatización por Lectura de Manómetros y Rendimiento"
codigo: "DIAG-CLIM-MASTER"
menu: "Nota Maestra: Diagnóstico del Circuito"
grupo: "Circuito frigorífico"
clave: lectura-manometros
area: climatizacion
sistema: "circuito-frigorifico"
estado: pendiente
fusionadas: [83, 115, 130, 147, 223, 241, 306, 309, 349, 351, 405, 462, 464, 631, 768, 842, 863, 870, 878]
huella: 11b10aaad1f8
modelo: gemini-3.5-flash
fuentes: "Fusión de 19 fuentes"
niveles:
  "Síntoma": basico
  "Causas posibles": intermedio
  "Cómo separar las causas": avanzado
  "Valores de referencia": intermedio
  "Verificación tras la reparación": avanzado
faltan:
  - "NT223: 2.000 y 2.500 rpm"
  - "NT306: 1.500-2.000 rpm"
  - "NT464: 6,5-9,5 bar"
  - "NT631: 1.500 a 2.000 rpm"
  - "NT631: 1.500-2.000 rpm"
---

## Síntoma

Se presentan las siguientes anomalías en el sistema de climatización:
- **Rendimiento de refrigeración deficiente o nulo** en el habitáculo, con temperatura en la tobera central superior a **8 ºC** (NT223, pág. 17; NT241, págs. 226-229; NT306, pág. 157; NT349, pág. 123; NT351, págs. 124-126; NT462, págs. 123-125; NT464, págs. 124-126; NT631, págs. 24, 25; NT768, pág. 1, 3; NT863, págs. 226, 235; NT870, págs. 41, 47; NT878, pág. 82).
- **Presiones de Alta y Baja fuera de las tolerancias** prescritas o comportamiento anómalo de las agujas de los manómetros (NT83, págs. 123-125; NT405, págs. 1, 10; NT462, págs. 123-125; NT464, págs. 124-126; NT631, págs. 24, 25; NT768, pág. 1, 3; NT878, pág. 82).
- **Agujas de los manómetros inmóviles en 0 bar** tanto con el motor parado como en marcha (NT130, págs. 32-33; NT405, pág. 10-98; NT768, pág. 23, 24).
- **Cortes intermitentes** del climatizador o ruidos extraños durante el funcionamiento (NT306, pág. 157; NT405, págs. 1, 10).

## Causas posibles

Las desviaciones de presión y temperatura pueden deberse a:
- **Carga incorrecta de refrigerante R134a**, ya sea por defecto (fuga) o por exceso (sobrecarga) (NT83, págs. 123-125; NT223, págs. 18-19, 32-33; NT241, págs. 206, 212, 226-227; NT306, págs. 157-158, 161; NT309, pág. 1; NT351, págs. 124-126; NT405, pág. 10-98; NT462, págs. 123-125; NT464, págs. 124-126; NT631, pág. 25; NT768, pág. 5, 6, 30-32; NT863, págs. 226, 227, 234; NT870, págs. 41, 47; NT878, pág. 82).
- **Funcionamiento anómalo o avería interna del compresor** (fijo o variable), pérdida de estanqueidad, placas de válvulas rotas o fallo del embrague electromagnético (NT83, págs. 123-125; NT223, págs. 18-19, 32-33; NT241, pág. 229; NT306, pág. 161; NT349, pág. 123; NT351, pág. 126; NT405, pág. 10-98; NT631, pág. 25; NT768, pág. 45, 47; NT863, pág. 229; NT878, pág. 82).
- **Válvula de expansión defectuosa**, bloqueada en apertura o cierre, bulbo suelto o roto (NT223, págs. 18-19, 32-33; NT306, pág. 161; NT351, pág. 126; NT405, pág. 10-98; NT464, págs. 124-126; NT631, pág. 25; NT768, pág. 7-14; NT878, pág. 82).
- **Filtro deshidratante/deshumidificador saturado** de humedad, colmatado u obstruido (NT241, págs. 221, 228; NT306, pág. 159, 161; NT351, pág. 126; NT405, pág. 85; NT464, págs. 124-126; NT631, pág. 25; NT768, pág. 38-40; NT863, págs. 221, 228, 234; NT878, pág. 82).
- **Condensador sucio u obstruido** o fallo del electroventilador (inoperativo o girando al revés) (NT223, págs. 18-19, 32-33; NT306, pág. 161; NT351, pág. 126; NT405, pág. 10-98; NT464, págs. 124-126; NT631, pág. 25; NT768, pág. 33-36; NT878, pág. 82).
- **Presencia de aire, humedad o gases incondensables** en el circuito (NT223, págs. 18-19, 32-33; NT241, pág. 224; NT309, pág. 1; NT351, pág. 126; NT464, págs. 124-126; NT631, pág. 25; NT870, págs. 41, 47; NT878, pág. 82).
- **Entrada indeseada de aire caliente** por trampillas de mezcla o grifo de calefacción defectuoso (NT405, pág. 10-98; NT768, pág. 41, 42).
- **Tubos de aspiración y descarga invertidos** en el compresor (NT405, pág. 93; NT768, pág. 43, 45).
- **Evaporador congelado** por fallo del termostato o de la válvula de regulación (NT405, pág. 10-98; NT768, pág. 20, 21).
- **Falta de conexión física**, obuses no desplazados, juntas pegadas o circuito totalmente vacío (NT130, pág. 32; NT405, pág. 10-98; NT768, pág. 23, 24).

## Cómo separar las causas

Sigue estos pasos ordenados para diagnosticar el origen exacto de la avería:

1. **Calibración previa**: Con mangueras desconectadas y libre de presión, verifica que las agujas del puente de manómetros para **R134a** marquen exactamente **0 bar**. Si no, ajusta con el tornillo de ajuste a cero (NT115, págs. 1, 17-18).
2. **Prueba de rendimiento estándar**: Conecta las mangueras con las válvulas de la estación cerradas. Arranca el motor a **1.500 rpm** (o entre **1.500-2.000 rpm** según NT306, pág. 157; NT631, pág. 5). Activa la recirculación, pon la turbina a velocidad máxima, dirige el aire a los difusores centrales y cierra los laterales. Coloca un termómetro en el difusor central y compara la temperatura con la tabla de rendimiento según la temperatura exterior (NT83, págs. 123-125; NT349, pág. 123; NT462, págs. 123-125).
3. **Falta de refrigerante vs Válvula de alta semi cerrada**: Añade entre **50 y 100 g** de refrigerante. Si las presiones no reaccionan positivamente, la causa es la válvula de alta del compresor semi cerrada (NT405, pág. 20; NT768, pág. 6).
4. **Bulbo de válvula de expansión suelto vs avería interna**: Si el bulbo exterior está suelto, fíjalo. En válvulas monobloc, aplica espray enfriador sobre el bulbo superior; si no reacciona, sustituye la válvula y el filtro deshidratador (NT405, pág. 24; NT768, pág. 8).
5. **Válvula de expansión demasiado abierta y prueba de válvulas del compresor**: Rocía espray enfriador sobre el bulbo. Si no reacciona, sustituye la válvula y el filtro. Tras sustituir, rocía de nuevo el bulbo; la aguja de baja debe caer a **0 bar**. Para el compresor de inmediato: si la aguja de baja sube rápidamente, las válvulas del compresor están dañadas (NT405, pág. 28, 29; NT768, pág. 10, 11).
6. **Válvulas de baja tapadas vs Gota de hielo en la válvula de expansión**: Para y arranca el equipo. Si el fallo desaparece temporalmente y reaparece, es una gota de hielo. Si es permanente, las válvulas de baja están tapadas. En ambos casos, sustituye el filtro deshidratador y realiza un vacío prolongado (NT405, pág. 38, 39; NT768, pág. 16, 17).
7. **Válvula de baja comunicada**: Rocía espray enfriador sobre el bulbo de la válvula de expansión hasta que la baja llegue a **0 bar** y detén el compresor. Si la aguja de baja sube rápidamente, se confirma la comunicación en el cilindro (NT405, pág. 43; NT768, pág. 19).
8. **Condensador sucio interiormente vs fallo de electroventilador**: Con alta presión excesiva y electroventilador funcionando continuo, rocía agua sobre el condensador. Si la alta presión desciende de inmediato, el condensador está sucio interiormente (NT223, págs. 17-19, 24, 32-33; NT351, pág. 126; NT405, pág. 79, 80; NT464, pág. 126; NT768, pág. 36, 37).
9. **Tubos invertidos en compresor**: En compresores fijos, el embrague acopla a intervalos de pocos segundos. En variables, acopla/desacopla con elevada frecuencia o genera pequeñas oscilaciones en baja (NT405, pág. 93; NT768, pág. 43, 45).
10. **Diagnóstico por subenfriamiento (SC) y recalentamiento (SR)**: Conecta manómetros y termómetros de contacto (o Climtest). Calcula SC (Temp condensación en HP - Temp tubo salida condensador) y SR (Temp tubo salida evaporador - Temp evaporación en BP). Si SC < **2 ºC** y SR > **10 ºC**, falta fluido. Si SC > **10 ºC** y SR < **2 ºC**, hay exceso de carga. Si SC > **10 ºC** y SR es normal (**2-10 ºC**) con salto térmico en el filtro, el filtro está saturado (NT241, págs. 200, 202, 206, 208, 212, 221, 228, 231; NT863, págs. 221, 226-230, 234, 235, 237).
11. **Diagnóstico a vehículo parado**: Conecta manómetros con motor parado y a temp de reposo. Medir temp ambiente y del condensador. Interpretar la presión de baja:
    - Carga correcta: a **24-26 ºC** ambiente y condensador -> BP **6,5 bar** (**25 ºC** en manómetro).
    - Falta de líquido: a **30 ºC** ambiente y condensador -> BP **6,5 bar** (**25 ºC** en manómetro).
    - Asociación de gases: a **24-26 ºC** ambiente y condensador -> BP **7,5 bar** (**30 ºC** en manómetro).
    - Exceso de carga: a **24-26 ºC** ambiente, **30 ºC** condensador y motor frío -> BP **7,5 bar** (**30 ºC** en manómetro) (NT309, pág. 1; NT870, págs. 41, 47).
12. **Diagnóstico electrónico (Audi A5)**: Conecta VAS 5051, entra en '08 - Electrónica de climatización', grupo '001'. En 'Econ' o 'AC OFF', verifica **0 A** en campos 1 y 2, y presión de reposo en campo 4. En 'Auto / AC ON' y temp 'LO', verifica que la corriente de N280 sube a **0,75-0,8 A** y la presión aumenta progresivamente (NT842, págs. 8, 40, 177, 311, 314, 316).

## Valores de referencia

### Condiciones estándar de prueba
Temperatura exterior de **30 ºC** y régimen de motor entre **1.500 y 1.800 rpm** (NT405, pág. 7; NT768, pág. 1, 3).

### Compresor de cilindrada variable
- **Alta constante**: **8-10 bar** (puede alcanzar **12 bar** con calor extremo) (NT83, págs. 123-125; NT349, pág. 123; NT462, págs. 123-125).
- **Baja constante**: **2 bar** (o **1,8-2,2 bar** en manómetro hidráulico) (NT83, págs. 123-125; NT349, pág. 123; NT462, págs. 123-125; NT351, pág. 124).
- **Rango nominal general**: Baja **1,8-2,1 bar**; Alta **6-13 bar** (NT405, pág. 10; NT768, págs. 1, 2).

### Compresor de cilindrada fija / cíclica
- **Alta variable**: **10-20 bar** (NT83, págs. 123-125; NT349, pág. 123; NT405, pág. 16; NT462, págs. 123-125; NT768, págs. 3, 4).
- **Baja variable**: **0,5-2,5 bar** (o **1-2 bar** en manómetro hidráulico) (NT83, págs. 123-125; NT349, pág. 123; NT462, págs. 123-125; NT351, pág. 124). El valor de **0,8 bar** se obtiene solo con muy baja humedad (NT405, pág. 16; NT768, págs. 3, 4).

### Presiones normales de trabajo con R134a
- Baja: **1,5-2,5 bar**; Alta: **12-18 bar** (NT306, págs. 43, 45, 157-158).
- Presión de alta en manómetro rojo (HP): **16 bar** (**230 psi**); Presión de baja en manómetro azul (LP): **1,8 bar** (**26 psi**) (NT147, pág. 1).
- Baja presión (BP) en sistema con válvula de expansión: **0,5 a 3,0 bares** (NT223, págs. 17-18).
- Baja presión (BP) en compresor de potencia regulada: aprox. **2,0 bares** constantes (NT223, págs. 17-18).
- Alta presión (AP): **6,0 a 25,0 bares** (NT223, págs. 17-18).
- Temperatura del aire de salida en tobera central: **3 a 8 ºC** (NT223, págs. 17-18).
- Subenfriamiento (SC) correcto: entre **2 ºC y 10 ºC** (NT241, pág. 203).
- Recalentamiento (SR) correcto: entre **2 ºC y 10 ºC** (NT241, pág. 209).
- Temperatura de soplado en difusores: de **2 ºC a 10 ºC** (a **15-25 ºC** ambiente) (NT241, pág. 235; NT863, págs. 235-236).

### Tabla de rendimiento (Temp exterior vs Temp aireadores centrales a 1.500 rpm con recirculación)
| Temp Exterior | Temp Aireadores |
|---|---|
| **15 ºC** | **2 a 4 ºC** |
| **20 ºC** | **4 a 6 ºC** |
| **26 ºC** | **4 a 7 ºC** |
| **32 ºC** | **5 a 8 ºC** |
| **37 ºC** | **7 a 10 ºC** |
*(Fuentes: NT83, págs. 123-125; NT349, pág. 123; NT462, págs. 123-125)*

### Compresor variable eléctrico a 1.500-1.700 rpm
- **Carga normal (550 g)**: Baja **1,4 bar**; Alta **12 bar**; Aireadores **1,7 ºC**; Reposo **5 bar** (NT83, págs. 123-125).
- **Carga baja (300 g)**: Baja **1,8 bar**; Alta **9-10 bar**; Aireadores **2,4 ºC**; Reposo **4,5 bar** (NT83, págs. 123-125).
- **Carga excesiva (1.000 g)**: Baja **1,6 bar**; Alta **10,5 bar**; Aireadores **1,1 ºC**; Reposo **5 bar** (NT83, págs. 123-125).

### Compresor fijo a 1.500 rpm (R134a)
- **Carga normal**: Baja **1,5-2,5 bar**; Alta **13,5-15 bar** (NT83, págs. 123-125).
- **Carga baja**: Baja **0,5-1 bar**; Alta **6,5-9 bar** (peligro congelación si Baja < **0,5 bar** al acelerar) (NT83, págs. 123-125).
- **Carga excesiva**: Baja **2,5-3,5 bar**; Alta **19-24 bar** (NT83, págs. 123-125).

### Presiones aproximadas en reposo según la temperatura exterior
| Temp Exterior | Presión de Reposo |
|---|---|
| **15 ºC** | **3,9 bar** |
| **20 ºC** | **4,7 bar** (**0,47 MPa**) |
| **25 ºC** | **5,5 bar** |
| **30 ºC** | **6,6 bar** |
| **35 ºC** | **7,5 bar** |
| **40 ºC** | **8,8 bar** |
| **45 ºC** | **9,8 bar** |
*(Fuentes: NT83, págs. 123-125; NT306, pág. 46; NT351, pág. 125; NT462, págs. 123-125; NT631, pág. 5)*

### Variaciones de presión de trabajo según la temperatura exterior (Compresor fijo R134a)
| Temp Exterior | Baja Presión | Alta Presión |
|---|---|---|
| **15 ºC** | **1,2 - 1,5 bar** | **8 - 10 bar** |
| **20 ºC** | **1,5 - 1,8 bar** | **9 - 12 bar** |
| **26 ºC** | **1,8 - 2 bar** | **12 - 14,5 bar** |
| **32 ºC** | **2,1 - 2,3 bar** | **14,5 - 18 bar** |
| **37 ºC** | **2,3 - 2,5 bar** | **18 - 20 bar** |
*(Fuente: NT351, pág. 125)*

### Valores de averías específicas (a 30 ºC exterior y 1.500-1.800 rpm)
- **Falta refrigerante / Válvula alta semi cerrada**: Baja **0,5-0,8 bar**; Alta **6-8 bar** (NT405, pág. 20; NT768, pág. 5, 6).
- **Bulbo suelto**: Baja **3-3,8 bar**; Alta **12-14 bar** (NT405, pág. 24; NT768, pág. 7, 8).
- **Válvula expansión demasiado abierta**: Baja **3,5-4,5 bar**; Alta **10-14 bar** (NT405, pág. 28; NT768, pág. 9, 10).
- **Válvula expansión cerrada / obturada**: Baja **0 bar** (vacío); Alta **10-13 bar** (NT405, pág. 12, 14; NT768, pág. 12, 14).
- **Válvulas de baja tapadas / gota de hielo**: Baja **~0 bar**; Alta **4-6 bar** (NT405, pág. 38, 39; NT768, pág. 15, 16).
- **Válvula de baja comunicada**: Baja **2,2-2,5 bar**; Alta **10-12 bar** (NT405, pág. 43; NT768, pág. 18, 19).
- **Evaporador congelado**: Baja **~0 bar**; Alta **7-10 bar** (NT405, pág. 20, 21; NT768, pág. 20, 21).
- **Vacío de prueba de estanqueidad**: Baja **-1 bar** (1 atm depresión); Alta con aguja al tope (NT405, pág. 58; NT768, pág. 25).
- **Parado tras carga parcial (350 g en circuito de 800 g)**: Baja y Alta igualadas a **3-4 bar** (NT405, pág. 62; NT768, pág. 26, 27).
- **En marcha con media carga**: Baja **~0,8 bar**; Alta **7-8 bar** (NT405, pág. 10-98; NT768, pág. 28, 29).
- **Exceso de carga (1.100 g en circuito de 800 g)**: Baja **2,5-2,7 bar**; Alta **16-18 bar** (NT405, pág. 71; NT768, pág. 31, 32).
- **Electroventilador al revés**: Baja **2,3-2,5 bar**; Alta **~22 bar** (NT405, pág. 10-98; NT768, pág. 33, 34).
- **Electroventilador inoperativo / condensador sucio**: Baja **2,3-2,8 bar**; Alta **>25 bar** (NT405, pág. 10-98; NT768, pág. 35, 36).
- **Filtro deshidratador obstruido**: Baja **4,5-4,7 bar**; Alta **21-27 bar** (NT405, pág. 85; NT768, pág. 38, 39).
- **Filtro deshidratador saturado de humedad (helado)**: Baja **0,3-0,5 bar**; Alta **19-20 bar** (NT405, pág. 85; NT768, pág. 40).
- **Trampillas/grifo de calefacción defectuosos**: Baja **1,8 bar**; Alta **12-15 bar** (NT405, pág. 10-98; NT768, pág. 41, 42).
- **Tubos invertidos (Rotalock)**: Baja **4,5-4,8 bar**; Alta **7-8 bar** (NT405, pág. 93; NT768, pág. 43, 44).
- **Compresor no conecta / válvula regulación defectuosa**: Baja **4,5-6 bar**; Alta igual a la baja (NT405, pág. 10-98; NT768, pág. 46, 47).

### Valores de referencia Audi A5
- Temperatura ambiental mínima para la prueba: **> 15 ºC** (NT842, pág. 311).
- Corriente de activación de N280 a máximo rendimiento: entre **0,75 A y 0,8 A** (NT842, págs. 120, 177).
- Presión de activación de electroventiladores V7/V177: **9 bares** en la línea de alta (NT842, pág. 321).

## Verificación tras la reparación

Para confirmar la correcta resolución de la avería, realiza las siguientes comprobaciones:
- **Estabilización de presiones**: Con la carga nominal de refrigerante, verifica que las presiones de Alta y Baja se estabilizan dentro de los rangos especificados y la temperatura de salida en los aireadores se ajusta a la tabla de rendimiento (NT83, págs. 123-125; NT223, pág. 17; NT306, págs. 157, 161; NT349, pág. 123; NT351, págs. 123, 125; NT462, págs. 123-125; NT631, págs. 24, 25; NT768, pág. 1, 3; NT878, págs. 79, 82).
- **Enfriamiento del tubo de baja**: Confirma que el tubo de baja presión (diámetro grueso) entre el acoplamiento rápido y el compresor se enfría intensamente y verifica que en el grupo de valores de medición 002 el campo 1 permanezca en **0** (sin condiciones de desconexión) (NT842, págs. 43, 316, 323).
- **Estado del filtro deshidratador**: Toca el filtro deshidratador en la línea de alta presión para comprobar que se mantiene caliente y seco (NT405, pág. 85; NT768, pág. 40).
- **Ciclado del electroventilador**: Confirma el ciclado automático del electroventilador del condensador sin quedar permanente ni inoperativo (NT768, pág. 34, 36).
- **Lavado y aceite**: En reparaciones con presencia de partículas o agarrotamiento del compresor, verifica que se ha efectuado el lavado del circuito y el reabastecimiento del nivel de aceite frigorífico antes de dar por concluida la intervención (NT768, pág. 14, 48).
- **Fugas y vacío**: Si se detecta falta de líquido, realiza la prueba de detección de fugas; si se determina la presencia de aire o exceso de carga, evacua por completo el refrigerante, efectúa un vacío de **20 minutos** y recarga la masa exacta de fluido recomendada (NT870, págs. 39, 41, 47).

## Discrepancias

- En compresor fijo a 1.500 rpm, NT83 (pág. 125) y NT351 (pág. 125) indican una Baja normal de 1,5 a 2,5 bar, mientras que NT464 (pág. 124-125) indica de 1,5 a 2 bar.
- En bulbo de válvula de expansión suelto, NT405 (pág. 24) indica una Baja de 3 a 3,8 bar, mientras que NT768 (pág. 7) indica de 3 a 8 bar, lo cual es claramente una errata de formato en NT768.
- En válvula de expansión demasiado abierta, NT405 (pág. 28) indica una Baja de 3,5 a 4,5 bar, mientras que NT768 (pág. 9) indica de 5 a 5 bar, lo cual es claramente una errata de formato en NT768.
- En motor en marcha con media carga, NT405 (pág. 10-98) indica una Baja de ~0,8 bar, mientras que NT768 (pág. 28) indica sobre 8 bar, lo cual es claramente una errata de formato en NT768.
- En exceso de carga de refrigerante, NT405 (pág. 71) indica una Baja de 2,5 a 2,7 bar, mientras que NT768 (pág. 30) indica de 5 a 7 bar, lo cual es claramente una errata de formato en NT768.
- En electroventilador girando al revés, NT405 (pág. 10-98) indica una Baja de 2,3 a 2,5 bar, mientras que NT768 (pág. 33) indica de 3 a 5 bar, lo cual es claramente una errata de formato en NT768.
- En electroventilador inoperativo o condensador sucio, NT405 (pág. 10-98) indica una Baja de 2,3 a 2,8 bar, mientras que NT768 (pág. 35) indica de 3 a 8 bar, lo cual es claramente una errata de formato en NT768.

## Imágenes requeridas

- [NT115_01] Puente de manómetros de alta y baja presión indicando la ubicación de los tornillos de ajuste de cero en la carátula
- [NT130_01] Manómetros marcando 0 bar en ambas carátulas por falta de accionamiento de los obuses o vaciado total
- [NT147_01] Manómetro de alta presión (HP, reloj rojo) en 16 bar (230 psi) y manómetro de baja presión (LP, reloj azul) en 1,8 bar (26 psi)
- [NT306_01] Manómetros de alta y baja presión con las escalas de lectura de presión y temperatura
- [NT309_01] Tabla de diagnosis de presiones a vehículo parado según temperaturas ambiente, del condensador, del manómetro y del motor
- [NT405_03] Conjunto de puente de manómetros de alta y baja presión para diagnóstico R134a
- [NT768_03] Manómetros en prueba de estanqueidad por depresión (vacío)
- [NT863_01] Pantalla del analizador Climtest con los mensajes de diagnóstico (falta de fluido, exceso de fluido, filtro deshidratante saturado)
