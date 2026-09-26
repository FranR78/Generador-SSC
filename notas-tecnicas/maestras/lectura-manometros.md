---
id: ssc.maestra.lectura-manometros
modulo: ssc
unidad: clima
nt: 1003
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Diagnóstico del circuito de climatización mediante lectura de presiones y rendimiento"
codigo: "NT-DIAG-MANOMETROS"
menu: "Diagnóstico del circuito de climatizac"
grupo: "Circuito frigorífico"
clave: lectura-manometros
area: climatizacion
sistema: "circuito-frigorifico"
estado: borrador
fusionadas: [83, 115, 130, 147, 223, 241, 306, 309, 349, 351, 405, 462, 464, 631, 768, 842, 863, 870, 878]
huella: 11b10aaad1f8
modelo: gemini-3.6-flash
fuentes: "Fusión de 19 fuentes"
niveles:
  "Síntoma": basico
  "Causas posibles": basico
  "Cómo separar las causas": avanzado
  "Valores de referencia": intermedio
  "Verificación tras la reparación": avanzado
---

## Síntoma

Insuficiente o nulo rendimiento de refrigeración en el habitáculo, expulsión de aire a temperatura elevada por los difusores con temperatura en tobera central superior a 8 ºC, o cortes intermitentes del climatizador (NT223, pág. 17; NT241, pág. 226; NT306, pág. 157; NT349, pág. 123; NT631, pág. 24; NT863, pág. 226; NT870, pág. 41; NT878, pág. 82).

Agujas de los manómetros de alta y baja presión fuera de las tolerancias prescritas, inmóviles marcando 0 bar tanto a motor parado como en marcha, presiones de alta y baja igualadas o fluctuaciones anómalas (NT83, pág. 123; NT130, pág. 32; NT351, pág. 124; NT405, pág. 1; NT462, pág. 123; NT464, pág. 124; NT768, pág. 1).

Verificación rutinaria de la eficiencia global del equipo, comprobación tras mantenimiento o diagnosis del estado de la carga a vehículo parado (NT115, pág. 1; NT147, pág. 1; NT309, pág. 1; NT842, pág. 311).

## Causas posibles

Las anomalías en el circuito frigorífico se originan por las siguientes causas:

- **Carga de refrigerante incorrecta**: Carga insuficiente o falta total por fugas, o sobrecarga de refrigerante (NT83, pág. 123; NT223, pág. 18; NT241, pág. 206; NT306, pág. 157; NT309, pág. 1; NT351, pág. 124; NT863, pág. 226; NT870, pág. 41).
- **Fallas en el compresor**: Desgaste o daño mecánico interno (válvulas de lámina rotas o tapadas, comunicación de cilindro), compresor no conecta, patinamiento del embrague, fallo en la válvula reguladora de cilindrada N280/PWM, o válvulas de aspiración/descarga invertidas/defectuosas (NT223, pág. 18; NT241, pág. 229; NT306, pág. 161; NT351, pág. 126; NT405, pág. 10; NT631, pág. 25; NT768, pág. 18; NT878, pág. 82).
- **Válvula de expansión defectuosa**: Válvula bloqueada en posición abierta o cerrada, bulbo suelto o roto, o desajuste de regulación (NT223, pág. 18; NT306, pág. 161; NT351, pág. 126; NT405, pág. 10; NT768, pág. 7; NT878, pág. 82).
- **Condensador y ventilación**: Condensador sucio exterior o interiormente, fallo del electroventilador o giro en sentido contrario por cableado invertido (NT223, pág. 18; NT306, pág. 161; NT351, pág. 126; NT405, pág. 10; NT768, pág. 33).
- **Filtro deshidratador**: Obstrucción mecánica o saturación de humedad que provoca preexpansión (filtro helado o gota de hielo en válvula) (NT241, pág. 221; NT306, pág. 159; NT351, pág. 126; NT405, pág. 10; NT768, pág. 15; NT863, pág. 221).
- **Otras anomalías**: Presencia de aire/incondensables en el circuito, exceso de aceite, mezcla/asociación de gases, tubos Rotalock invertidos, o entrada de aire caliente por trampillas de mezcla/grifo de calefacción defectuoso (NT241, pág. 224; NT309, pág. 1; NT351, pág. 126; NT405, pág. 10; NT768, pág. 41; NT870, pág. 41).
- **Errores de conexión de servicio**: Falta de accionamiento de obuses por rosca muy hundida, juntas tóricas pegadas en la toma, o circuito completamente vacío (NT130, pág. 32; NT405, pág. 10; NT768, pág. 23).

En instalaciones antiguas de R-12 existía la variante de mangueras de conexión de acoplamiento rápido invertidas entre sí (NT130, pág. 32).

## Cómo separar las causas

### Ajuste previo del puente de manómetros
Con las mangueras totalmente desconectadas del vehículo y el puente libre de presión, observar la aguja de los relojes. Si no marcan exactamente 0 bar, girar el tornillo de ajuste de cero con un destornillador plano fino hasta alinear la aguja (NT115, pág. 18).

### Diagnosis con manómetros en 0 bar
1. Si la aguja no se mueve al conectar, verificar si el compresor arranca. Si no arranca por presostato de seguridad, confirmar si el circuito está vacío de gas por fuga masiva (NT130, pág. 32; NT768, pág. 23).
2. Si el compresor sí arranca pero marca 0 bar, desenroscar los conectores y revisar si hay juntas tóricas pegadas de los tapones o si el obús está demasiado hundido por exceso de roscado (NT130, pág. 32).

### Diagnosis a vehículo parado (motor en reposo)
Conectar la batería de manómetros con el motor parado y comparar la presión de baja con las temperaturas ambiental y del condensador:
- Carga correcta: 6,5 bar (25 ºC en manómetro) con 24-26 ºC en condensador y ambiente (NT309, pág. 1; NT870, pág. 41).
- Exceso de carga: 7,5 bar (30 ºC en manómetro) con 30 ºC en condensador, motor frío y 24-26 ºC ambiente (NT309, pág. 1; NT870, pág. 41).
- Asociación de gases / aire incondensable: 7,5 bar (30 ºC en manómetro) con 24-26 ºC en condensador y ambiente (NT309, pág. 1; NT870, pág. 41).
- Falta de líquido refrigerante: 6,5 bar (25 ºC en manómetro) con 30 ºC en condensador y ambiente (NT309, pág. 1; NT870, pág. 41).

### Diagnosis dinámica en marcha
Conectar mangueras de alta y baja con las válvulas de la estación cerradas. Arrancar el motor a 1.500 rpm (o entre 1.500 y 2.000 rpm según manuales), activar la turbina al máximo, poner la recirculación y seleccionar máximo frío (NT83, pág. 123; NT223, pág. 17; NT306, pág. 157; NT349, pág. 123; NT462, pág. 123; NT631, pág. 5; NT768, pág. 1).

Procedimiento para aislar la causa según la lectura:
1. **Falta de refrigerante vs Válvula de alta semi cerrada**: Añadir entre 50 y 100 g de refrigerante. Si los manómetros no reaccionan positivamente, la causa es la válvula de alta del compresor semi cerrada (NT405, pág. 20; NT768, pág. 6).
2. **Bulbo de expansión suelto o averiado**: Si el bulbo exterior está suelto, fijarlo. En válvulas monobloc, aplicar espray enfriador sobre el bulbo superior; si no reacciona, sustituir válvula y filtro. Si tras la sustitución se rocía el bulbo y la baja cae a 0 bar pero al parar el compresor la aguja sube rápidamente en positivo, las válvulas del compresor están dañadas (NT405, pág. 24-29; NT768, pág. 8-11).
3. **Gota de hielo vs Válvulas de baja tapadas**: Parar el equipo y volver a arrancar. Si la avería desaparece y vuelve a surgir cuando el fluido pasa de nuevo por la válvula, es una gota de hielo. Si el fallo es permanente, son las válvulas de baja del compresor tapadas. En ambos casos sustituir el filtro y hacer vacío prolongado (NT405, pág. 38; NT768, pág. 16).
4. **Válvula de baja comunicada**: Aplicar espray enfriador en el bulbo de la válvula de expansión hasta que la baja baje a 0 bar y detener el compresor. Si la baja sube rápidamente en positivo, existe comunicación de presiones en el cilindro (NT405, pág. 43; NT768, pág. 19).
5. **Condensador sucio interiormente vs Electroventilador**: Rociar un chorro de agua sobre la parte superior del condensador. Si la alta presión baja inmediatamente mientras cae el agua, el condensador está sucio interiormente (NT223, pág. 24; NT351, pág. 126; NT405, pág. 79; NT464, pág. 126; NT768, pág. 36).
6. **Tubos invertidos en compresor**: En compresión fija el acoplamiento ocurre a intervalos de pocos segundos; en compresión variable surgen oscilaciones repetidas en baja presión (NT405, pág. 93; NT768, pág. 43).

### Diagnosis por Subenfriamiento (SC) y Recalentamiento (SR)
Conectar sondas de temperatura a la salida del condensador y aspiración del evaporador (o equipo Climtest):
- SC < 2 ºC y SR > 10 ºC con baja presión débil: Falta de fluido por fuga (NT241, pág. 206; NT863, pág. 226).
- SC > 10 ºC y SR < 2 ºC con alta presión elevada: Exceso de carga de fluido (NT241, pág. 206; NT863, pág. 227).
- SC > 10 ºC, SR normal (2-10 ºC) y salto térmico en el cuerpo del filtro: Filtro deshidratante saturado/preexpansión (NT241, pág. 221; NT863, pág. 228).

### Diagnosis por equipo de diagnosis electrónica (Audi A5 / V280)
Conectar el equipo VAS 5051 a la dirección 08 - Electrónica de climatización y leer el grupo de medición 001:
- En modo Econ / AC OFF: los campos 1 y 2 deben mostrar 0 A (compresor desactivado).
- En modo Auto / AC ON en LO: la corriente de la válvula reguladora N280 debe subir a 0,75 - 0,8 A y la presión del campo 4 debe aumentar progresivamente. Los electroventiladores V7/V177 se activan al superar los 9 bar de alta presión (NT842, pág. 314-321).

## Valores de referencia

### Presiones en reposo según la temperatura exterior
| Temp. Exterior (ºC) | Presión en Reposo (bar) |
|---|---|
| 15 ºC | 3,9 bar |
| 20 ºC | 4,7 bar (0,47 MPa) |
| 25 ºC | 5,5 bar (6,5 bar a 25 ºC en manómetro) |
| 30 ºC | 6,6 bar |
| 35 ºC | 7,5 bar |
| 40 ºC | 8,8 bar |
| 45 ºC | 9,8 bar |
(fuente: NT83, pág. 125; NT306, pág. 46; NT309, pág. 1; NT351, pág. 125; NT462, pág. 125; NT631, pág. 5; NT870, pág. 41).

### Presiones de trabajo según tecnología de compresor
- **Compresor de cilindrada fija**: Alta entre 10 y 20 bar; Baja entre 0,5 y 2,5 bar (o 0,8 a 2,2 bar a 1.500-1.800 rpm con 30 ºC) (NT83, pág. 123; NT349, pág. 123; NT405, pág. 16; NT462, pág. 123; NT768, pág. 3).
  - Carga normal R134a (a 1.500 rpm): Baja 1,5 a 2,5 bar; Alta 13,5 a 15 bar (NT83, pág. 125; NT351, pág. 125).
  - Carga baja R134a: Baja 0,5 a 1 bar; Alta 6,5 a 9 bar (peligro de congelación si Baja < 0,5 bar al acelerar) (NT83, pág. 125; NT351, pág. 125; NT464, pág. 125).
  - Carga excesiva R134a: Baja 2,5 a 3,5 bar; Alta 19 a 24 bar (NT83, pág. 125; NT351, pág. 125; NT464, pág. 125).
- **Compresor de cilindrada variable**: Alta constante entre 8 y 10 bar (puede alcanzar 12 bar con calor extremo); Baja constante a 2 bar (o 1,8 a 2,2 bar en manómetro hidráulico) (NT83, pág. 123; NT349, pág. 123; NT351, pág. 124; NT462, pág. 123).
  - Baja presión en compresor de potencia regulada: aprox. 2,0 bares constantes (NT223, pág. 18).
  - Compresor variable eléctrico a 1.500 - 1.700 rpm (carga normal 550 g): Baja 1,4 bar; Alta 12 bar; Aireadores 1,7 ºC; Reposo 5 bar (NT83, pág. 124; NT351, pág. 124).
  - Carga baja (300 g): Baja 1,8 bar; Alta 9 - 10 bar; Aireadores 2,4 ºC; Reposo 4,5 bar (NT83, pág. 124; NT351, pág. 124).
  - Carga excesiva (1.000 g): Baja 1,6 bar; Alta 10,5 bar; Aireadores 1,1 ºC; Reposo 5 bar (NT83, pág. 124; NT351, pág. 124).
  - A 30 ºC ambiente (1.500-1.800 rpm): Baja 1,8 a 2,1 bar; Alta 6 a 13 bar (NT405, pág. 10; NT768, pág. 1).
- **Lectura específica puntual**: Alta en manómetro rojo (HP) 16 bar (230 psi); Baja en manómetro azul (LP) 1,8 bar (26 psi) (NT147, pág. 1).

### Variación de presiones según temperatura exterior (Compresor fijo R134a)
| Temp. Exterior (ºC) | Baja Presión (bar) | Alta Presión (bar) |
|---|---|---|
| 15 ºC | 1,2 - 1,5 bar | 8 - 10 bar |
| 20 ºC | 1,5 - 1,8 bar | 9 - 12 bar |
| 26 ºC | 1,8 - 2,0 bar | 12 - 14,5 bar |
| 32 ºC | 2,1 - 2,3 bar | 14,5 - 18 bar |
| 37 ºC | 2,3 - 2,5 bar | 18 - 20 bar |
(fuente: NT351, pág. 125).

### Prueba de rendimiento (Temperatura exterior frente a salida en aireadores centrales)
- 15 ºC exterior: 2 a 4 ºC en aireadores (NT83, pág. 123; NT349, pág. 123; NT462, pág. 123).
- 20 ºC exterior: 4 a 6 ºC en aireadores (NT83, pág. 123; NT349, pág. 123; NT462, pág. 123).
- 26 ºC exterior: 4 a 7 ºC en aireadores (NT83, pág. 123; NT349, pág. 123; NT462, pág. 123).
- 32 ºC exterior: 5 a 8 ºC en aireadores (NT83, pág. 123; NT349, pág. 123; NT462, pág. 123).
- 37 ºC exterior: 7 a 10 ºC en aireadores (NT83, pág. 123; NT349, pág. 123; NT462, pág. 123).
- Margen de temperatura de confort estándar en tobera: 3 a 8 ºC (NT223, pág. 17) o 2 a 10 ºC con 15-25 ºC exteriores (NT241, pág. 235; NT863, pág. 235).
- Valores correctos de Subenfriamiento (SC) y Recalentamiento (SR): entre 2 ºC y 10 ºC (NT241, pág. 203, 209; NT863, pág. 231).

### Cuadro sintomático de lecturas en anomalías (a 30 ºC / 1.500-1.800 rpm)
- Falta refrigerante / Válvula alta semi cerrada: Baja 0,5 a 0,8 bar; Alta 6 a 8 bar (NT405, pág. 20; NT768, pág. 5).
- Bulbo suelto: Baja 3 a 3,8 bar; Alta 12 a 14 bar (NT405, pág. 24; NT768, pág. 7).
- Válvula expansión demasiado abierta: Baja 3,5 a 4,5 bar; Alta 10 a 14 bar (NT405, pág. 28; NT768, pág. 9).
- Válvula expansión cerrada / obturada: Baja 0 bar (vacío); Alta 10 a 13 bar (NT405, pág. 10; NT768, pág. 12).
- Válvulas baja tapadas / Gota de hielo: Baja ~0 bar; Alta 4 a 6 bar (NT405, pág. 38; NT768, pág. 15).
- Válvula baja comunicada: Baja 2,2 a 2,5 bar; Alta 10 a 12 bar (NT405, pág. 43; NT768, pág. 18).
- Evaporador congelado: Baja ~0 bar; Alta 7 a 10 bar (NT405, pág. 10; NT768, pág. 20).
- Exceso de carga (1.100 g en circuito de 800 g): Baja 2,5 a 2,7 bar; Alta 16 a 18 bar (NT405, pág. 71; NT768, pág. 30).
- Electroventilador girando al revés: Baja 2,3 a 2,5 bar; Alta ~22 bar (NT405, pág. 10; NT768, pág. 33).
- Electroventilador inoperativo / Condensador sucio: Baja 2,3 a 2,8 bar; Alta >25 bar (NT405, pág. 10; NT768, pág. 35).
- Filtro deshumidificador obstruido: Baja 4,5 a 4,7 bar; Alta 21 a 27 bar (NT405, pág. 85; NT768, pág. 38).
- Filtro deshumidificador helado (saturado): Baja 0,3 a 0,5 bar; Alta 19 a 20 bar (NT405, pág. 85; NT768, pág. 40).
- Trampillas/grifo calefacción defectuosos: Baja 1,8 bar; Alta 12 a 15 bar (NT405, pág. 10; NT768, pág. 41).
- Tubos invertidos en compresor: Baja 4,5 a 4,8 bar; Alta 7 a 8 bar (NT405, pág. 93; NT768, pág. 43).
- Compresor no conecta / Válvula regulación defectuosa: Baja 4,5 a 6 bar; Alta igual a la baja (NT405, pág. 10; NT768, pág. 45).
- Vacío de prueba de estanqueidad: Baja -1 bar (1 atm depresión); Alta con aguja al tope (NT405, pág. 58; NT768, pág. 25).
- Carga parcial a motor parado (350 g): Baja y Alta igualadas entre 3 y 4 bar (NT405, pág. 62; NT768, pág. 26).
- Media carga en marcha: Baja ~0,8 bar; Alta 7 a 8 bar (NT405, pág. 10; NT768, pág. 28).
- Carga por baja a ralentí: límite de seguridad de presión máxima de 2,5 bar durante adición de líquido (NT405, pág. 67; NT768, pág. 30).

- Medición con motor entre 2.000 y 2.500 rpm y climatizador a máxima potencia de frío: Baja 0,5 a 3,0 bares (sistema con válvula de expansión); Alta 6,0 a 25,0 bares (NT223, pág. 17).
- Carga baja (R134a): Baja 0,5-1 bar; Alta 6,5-9,5 bar; peligro de congelación si la baja cae a < 0,5 bar al acelerar (NT464, págs. 124-126).

## Verificación tras la reparación

1. Conectar el puente de manómetros y comprobar que con la carga nominal exacta prescrita las presiones de alta y baja se estabilizan dentro de los valores de referencia según la temperatura ambiente y el tipo de compresor (NT83, pág. 125; NT223, pág. 17; NT306, pág. 157; NT405, pág. 10; NT462, pág. 125; NT631, pág. 24; NT768, pág. 1; NT870, pág. 47).
2. Medir la temperatura de salida del aire en los difusores centrales verificando que cumple la tabla de rendimiento frente a la temperatura exterior (NT83, pág. 125; NT223, pág. 17; NT349, pág. 123; NT462, pág. 125; NT768, pág. 42; NT863, pág. 235).
3. Tocar el filtro deshidratador situado en la línea de alta presión para verificar que se mantiene caliente y seco (NT405, pág. 85; NT768, pág. 40).
4. Verificar mediante el equipo Climtest o sondas que las mediciones de Subenfriamiento y Recalentamiento retornan al intervalo óptimo de 2 ºC a 10 ºC (NT241, pág. 232; NT863, pág. 231).
5. Confirmar que el electroventilador del condensador cicla automáticamente de forma correcta sin quedar inoperativo ni conectado de manera permanente (NT768, pág. 34).
6. En compresores de cilindrada variable sin acoplamiento magnético (ej. Audi A5), verificar que el tubo grueso de baja presión entre la toma de servicio y el compresor se enfría intensamente y confirmar que en el bloque de medición 002 el campo 1 permanezca en 0 (sin criterios de desconexión) (NT842, pág. 316, 323).

## Discrepancias

- Presiones de trabajo nominales en compresor fijo a 1.500 rpm: las fichas NT83, NT349 y NT462 fijan Alta de 10 a 20 bar y Baja de 0,5 a 2,5 bar. Por su parte, la ficha NT351 indica Alta de 10 a 15 kg/cm² y Baja de 1 a 2 kg/cm² (o 13,5 a 15 bar en Alta y 1,5 a 2,5 bar en Baja para R134a) y la ficha NT464 especifica Alta de 13,5 a 15 bar y Baja de 1,5 a 2 bar.
- Presiones de trabajo nominales en compresor variable: las fichas NT83, NT349 y NT462 establecen Alta constante de 8 a 10 bar (hasta 12 bar en calor extremo) y Baja constante a 2 bar. Sin embargo, las fichas NT405 y NT768 indican a 30 ºC ambiente Alta de 6 a 13 bar y Baja de 1,8 a 2,1 bar, mientras que NT464 señala Alta de 9 a 12 bar y Baja de 1,4 a 1,8 bar para compresor variable eléctrico.
- Presión estática en reposo a 25 ºC ambiente: las fichas NT309 y NT870 asignan 6,5 bar a 25 ºC ambiente (25 ºC en escala del manómetro), mientras que las fichas NT83, NT351 y NT462 le asignan 5,5 bar a 25 ºC y reservan los 6,6 bar para 30 ºC.

## Imágenes requeridas

- [NT115_01] Puente de manómetros de alta y baja presión indicando la ubicación de los tornillos de ajuste de cero en la carátula
- [NT130_01] Manómetros marcando 0 bar en ambas carátulas por falta de accionamiento de los obuses o vaciado total
- [NT147_01] Manómetro de alta presión (HP, reloj rojo) en 16 bar (230 psi) y manómetro de baja presión (LP, reloj azul) en 1,8 bar (26 psi)
- [NT306_01] Manómetros de alta y baja presión con las escalas de lectura de presión y temperatura
- [NT309_01] Tabla de diagnosis de presiones a vehículo parado según temperaturas ambiente, del condensador, del manómetro y del motor
- [NT405_01] Esfera de manómetro de baja presión R134a indicando escala en bar y psi
- [NT405_02] Esfera de manómetro de alta presión R134a indicando escala en bar y psi
- [NT405_03] Conjunto de puente de manómetros de alta y baja presión para diagnóstico R134a
- [NT631_01] Cuadro de diagnóstico comparativo de lecturas de manómetros para los lados de alta y baja presión
- [NT768_01] Esfera de manómetro de baja presión R134a con escalas en bar | psi | kPa y temperaturas de saturación
- [NT768_02] Esfera de manómetro de alta presión R134a con escalas en bar | psi y kPa
- [NT768_03] Manómetros en prueba de estanqueidad por depresión (vacío)
- [NT863_01] Pantalla del analizador Climtest con los mensajes de diagnóstico (falta de fluido, exceso de fluido, filtro deshidratante saturado)
