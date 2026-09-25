```yaml
tipo: fundamento
titulo: Higrometría y zona de confort térmico
entidad: higrometria-y-confort
area: climatizacion
sistema: distribucion-aire
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "5-9"
relacionados: [unidades-control-climatizador, filtro-habitaculo]
palabras: [higrometría, confort térmico, zona de confort, humedad relativa, deshidratación, sudoración]
```

## Objeto
Definir los parámetros de temperatura y humedad ambiental necesarios para alcanzar el estado de equilibrio y el bienestar térmico de los ocupantes del habitáculo. (págs. 5, 9)

## Fundamento
El cuerpo humano busca un estado de equilibrio térmico en el que cede las calorías producidas sin llegar a la deshidratación por calor seco ni a la sudoración excesiva por alta humedad. (págs. 6-9)

## Desarrollo
- **Higrometría:** Es la relación porcentual entre la cantidad de agua contenida en el aire y la cantidad máxima de vapor de agua que podría contener bajo las mismas condiciones de presión y temperatura. (pág. 8)
- **Zona de confort:** Queda delimitada por un margen de temperatura comprendido entre 20 ºC y 28 ºC, asociado a una tasa de humedad relativa de entre el 30% y el 70%. Fuera de estos límites se producen sensaciones de frío seco, frío con niebla, calor deshidratante o calor con sudoración. (págs. 7, 9)

📷 IMAGEN: Gráfica del diagrama de zona de confort relacionando la temperatura ambiental de 20 ºC a 28 ºC con la tasa de humedad del 30% al 70% — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 9

## Valores de referencia
- Temperatura en ambiente templado/equilibrio: entre 20 ºC y 28 ºC. (págs. 7, 9)
- Tasa de humedad relativa en zona de confort: entre 30% y 70%. (pág. 9)

## Errores de concepto frecuentes
- Medir únicamente la temperatura del aire para valorar el confort, ignorando la tasa de humedad relativa (higrometría) del habitáculo. (págs. 8-9)

---

```yaml
tipo: fundamento
titulo: Transmisión de calor, calor sensible y calor latente
entidad: ciclo-frigorifico
variante: termodinamica-basica
area: climatizacion
sistema: circuito-frigorifico
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "10-18"
relacionados: [refrigerante-r134a, evaporador, condensador]
palabras: [transmisión térmica, calor sensible, calor latente, cambio de estado, ebullición, fusión]
```

## Objeto
Explicar los mecanismos físicos de cesión térmica y los cambios de fase requeridos para la refrigeración por evaporación. (págs. 10-18)

## Fundamento
Cuando dos cuerpos o fluidos entran en contacto, el calor fluye espontáneamente desde el foco más caliente hacia el foco más frío hasta alcanzar la temperatura de equilibrio térmico. (págs. 11-12)

## Desarrollo
- **Calor sensible:** Cantidad de energía térmica que se aporta o se extrae de un cuerpo para modificar su temperatura sin alterar su estado físico. Para el agua en fase líquida requiere 420 kJ entre 0 ºC y 100 ºC. (págs. 13, 16)
- **Calor latente:** Cantidad de energía térmica necesaria para provocar un cambio de estado de agregación (fase) a temperatura constante (meseta térmica):
  - *Calor latente de fusión:* 335 kJ/kg para el paso de sólido a líquido. (págs. 17-18)
  - *Calor latente de vaporización:* 2.250 kJ/kg para el paso de líquido a gas a 100 ºC. (págs. 16, 18)

📷 IMAGEN: Gráfica de cambio de estado del agua indicando las mesetas de calor latente a 0 ºC y 100 ºC — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 16

## Valores de referencia
- Calor latente de fusión del agua: 335 kJ/kg. (págs. 17-18)
- Calor latente de vaporización del agua: 2.250 kJ/kg a 100 ºC. (págs. 16, 18)

## Errores de concepto frecuentes
- Suponer que durante la ebullición la temperatura del fluido continúa aumentando mientras absorbe calor. (pág. 16)

---

```yaml
tipo: fundamento
titulo: Entalpía y diagrama de Mollier aplicado a la climatización
entidad: ciclo-frigorifico
variante: diagrama-mollier
area: climatizacion
sistema: circuito-frigorifico
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "19-32, 54-57"
relacionados: [compresor, condensador, valvula-expansion, evaporador]
palabras: [entalpía, diagrama de Mollier, campana de mezcla, presión absoluta, ciclo teórico]
```

## Objeto
Representar gráficamente las transformaciones térmicas, presiones y cambios de fase del fluido frigorífico durante el ciclo de refrigeración en el automóvil. (págs. 25-32, 54-57)

## Fundamento
La entalpía (H) representa la energía total contenida en un fluido por unidad de masa (J/kg o kJ/kg). El diagrama de Mollier relaciona la presión absoluta (en el eje vertical) con la entalpía (en el eje horizontal), permitiendo trazar la curva de campana de cambio de estado del refrigerante. (págs. 20, 25-31)

## Desarrollo
El ciclo cerrado de climatización dibuja en la campana de Mollier cuatro fases termodinámicas:
1. **Compresión (puntos 1 a 2):** El compresor aporta trabajo mecánico al gas a baja presión, elevando su entalpía, presión (hasta 20 bares) y temperatura (hasta 110 ºC). (págs. 21, 56, 60)
2. **Condensación y subenfriamiento (puntos 2 a 5):** El fluido cede calor al aire exterior en el condensador, licuándose a 19 bares y 60 ºC. (págs. 56, 82)
3. **Expansión (puntos 5 a 6):** La válvula de expansión provoca una caída drástica de presión (de 19 bares a 3 bares) y de temperatura (hasta -1 ºC), transformando el líquido en mezcla difásica. (págs. 56, 100)
4. **Evaporación y recalentamiento (puntos 6 a 1/8):** El fluido ebulle en el evaporador absorbiendo calor del aire del habitáculo a 3 bares y retornando gaseoso al compresor a +3 ºC. (págs. 56, 114)

📷 IMAGEN: Ciclo frigorífico completo trazado sobre la curva de campana del diagrama de Mollier — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 57

## Valores de referencia
- Presión y temperatura salida compresor (punto 2): 20 bares / 110 ºC. (págs. 56, 60)
- Presión y temperatura salida condensador (punto 5): 19 bares / 60 ºC. (págs. 56, 82)
- Presión y temperatura salida evaporador (punto 8): 3 bares / +3 ºC. (págs. 56, 114)

## Errores de concepto frecuentes
- Confundir la presión relativa indicada por los manómetros de taller con la presión absoluta utilizada en los diagramas de entalpía. (pág. 20)

---

```yaml
tipo: fundamento
titulo: Subenfriamiento y recalentamiento del fluido frigorífico
entidad: ciclo-frigorifico
variante: subenfriamiento-recalentamiento
area: climatizacion
sistema: circuito-frigorifico
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "57, 201-212, 231-235"
relacionados: [condensador, evaporador, valvula-expansion]
palabras: [subenfriamiento, recalentamiento, carga de refrigerante, diagnóstico térmico, Climtest]
```

## Objeto
Definir los dos parámetros termodinámicos clave para diagnosticar la cantidad exacta de carga de refrigerante y la eficiencia del circuito frigorífico. (págs. 201, 207, 231)

## Fundamento
El subenfriamiento garantiza que el refrigerante entra 100% en estado líquido a la válvula de expansión, mientras que el recalentamiento asegura que el refrigerante entra 100% en estado gaseoso al compresor, evitando golpes de líquido. (págs. 202, 208, 231)

## Desarrollo
- **Subenfriamiento (SC):** Es la diferencia entre la temperatura de condensación (leída en la escala de temperatura del manómetro de alta presión HP) y la temperatura real medida con un termómetro de contacto a la salida del condensador.
  - *Valor nominal de trabajo:* Entre 2 ºC y 10 ºC. (págs. 202, 231)
  - *Subenfriamiento débil (< 2 ºC):* Indica falta de fluido frigorífico en el condensador. (págs. 204, 206, 234)
  - *Subenfriamiento excesivo (> 10 ºC):* Indica exceso de fluido frigorífico en el circuito. (págs. 205, 206, 234)
- **Recalentamiento (SR):** Es la diferencia entre la temperatura real medida con termómetro de contacto en la tubería de aspiración (salida del evaporador) y la temperatura de evaporación leída en la escala del manómetro de baja presión BP.
  - *Valor nominal de trabajo:* Entre 2 ºC y 10 ºC. (págs. 209, 231)
  - *Recalentamiento débil (< 2 ºC):* Indica exceso de fluido frigorífico en el evaporador. (págs. 211, 212, 234)
  - *Recalentamiento excesivo (> 10 ºC):* Indica falta de fluido frigorífico en el evaporador. (págs. 210, 212, 234)

📷 IMAGEN: Gráfica de evolución simultánea del subenfriamiento y del recalentamiento en función de la masa de carga de refrigerante — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 233

## Valores de referencia
- Margen óptimo de subenfriamiento: entre 2 ºC y 10 ºC. (págs. 202, 231)
- Margen óptimo de recalentamiento: entre 2 ºC y 10 ºC. (págs. 209, 231)

## Errores de concepto frecuentes
- Efectuar recargas o rellenados de fluido frigorífico basándose únicamente en la presión de lectura de los manómetros sin calcular previamente el subenfriamiento y el recalentamiento. (págs. 206, 212)

---

```yaml
tipo: componente
titulo: Captadores de temperatura NTC
entidad: sensor-temperatura-interior
variante: termistancia-ntc
area: climatizacion
sistema: control-climatizacion
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "170-173"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [termistancia, NTC, CTN, resistencia negativa, curva característica]
```

## Misión
Captar las variaciones de temperatura de los diferentes puntos de medición (habitáculo, exterior, evaporador, aire soplado) y convertirlas en señales eléctricas para la centralita electrónica. (págs. 170, 172)

## Tipos y características
Sensores térmicos basados en termistancias de coeficiente de temperatura negativo (NTC / CTN). (pág. 170)

## Principio de funcionamiento
Su resistencia eléctrica interna varía de forma inversamente proporcional a la temperatura detectada: cuando la temperatura aumenta, la resistencia eléctrica disminuye siguiendo una curva no lineal característica. La centralita mide la caída de tensión en el sensor para calcular la temperatura real. (págs. 170-171)

📷 IMAGEN: Curva característica no lineal de una termistancia de coeficiente de temperatura negativo (NTC / CTN) — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 171

## Valores de trabajo
- Comportamiento resistivo: disminución exponencial de la resistencia en ohmios al elevarse la temperatura en grados Celsius. (pág. 171)

## Anomalías frecuentes
Descalibración por envejecimiento del semiconductor interno o cortocircuito/corte del cableado. (págs. 170, 198)

## Comportamiento en avería
La centralita adopta valores supletorios fijos memorizados para mantener el funcionamiento en modo de emergencia. (págs. 172, 198)

## Cómo comprobarlo
Medir la resistencia eléctrica del captador con multímetro en ohmios a temperaturas conocidas y comparar el resultado con su curva característica. (págs. 170-171)

## Mantenimiento
No documentado en fuentes en las páginas 170-173.

---

```yaml
tipo: diagnostico
titulo: Diagnóstico del sistema de climatización por Climtest
entidad: lectura-manometros
variante: climtest-valeo
area: climatizacion
sistema: circuito-frigorifico
fuente: "CLIMATIZACION INTRODUCCION.PDF"
paginas: "225-239"
relacionados: [compresor, valvula-expansion, filtro-deshidratador]
palabras: [Climtest, subenfriamiento, recalentamiento, temperatura de soplado, preexpansión]
```

## Síntoma
La instalación de climatización no produce frío o muestra un rendimiento frigorífico insuficiente en los difusores. (págs. 226, 235)

## Causas posibles
- Carga insuficiente de fluido frigorífico R134a. (págs. 226, 234)
- Exceso de carga de fluido frigorífico. (págs. 227, 234)
- Filtro deshidratante saturado de humedad produciendo preexpansión. (págs. 221, 228, 234)
- Pérdida de capacidad de compresión en el compresor. (pág. 229)

## Cómo separar las causas
1. Conectar las tomas del equipo de diagnóstico Climtest a las válvulas de alta (HP) y baja presión (BP) y fijar las sondas de temperatura en la entrada de la válvula de expansión, aspiración del compresor y difusor central. (págs. 230, 237)
2. Medir la temperatura ambiente y la temperatura del aire soplado en difusores: con temperatura ambiente entre 15 ºC y 25 ºC, la temperatura de soplado correcta debe situarse entre 2 ºC y 10 ºC. (págs. 235-236)
3. Evaluar la baja presión y las temperaturas:
   - Baja presión débil + recalentamiento elevado (> 10 ºC) + subenfriamiento débil (< 2 ºC): Diagnóstico de **falta de fluido frigorífico**. (págs. 226, 234)
   - Recalentamiento débil (< 2 ºC) + alta presión elevada + subenfriamiento elevado (> 10 ºC): Diagnóstico de **exceso de fluido frigorífico**. (págs. 227, 234)
   - Recalentamiento normal (2-10 ºC) + subenfriamiento elevado (> 10 ºC) + salto térmico entre la entrada y salida del filtro: Diagnóstico de **filtro deshidratante saturado (preexpansión)**. (págs. 221, 228, 234)
   - Baja presión alta + alta presión débil (en compresores de cilindrada fija): Diagnóstico de **compresor averiado**. (pág. 229)

📷 IMAGEN: Pantalla del analizador Climtest con los mensajes de diagnóstico (falta de fluido, exceso de fluido, filtro deshidratante saturado) — Fuente: CLIMATIZACION INTRODUCCION.PDF, pág. 238

## Valores de referencia
- Temperatura de soplado en difusores con buen funcionamiento (15-25 ºC ambientales): de 2 ºC a 10 ºC. (págs. 235-236)
- Umbral de temperatura exterior para prueba con Climtest: > 16 ºC (a temperaturas inferiores el compresor corta prematuramente). (pág. 239)

## Verificación tras la reparación
Confirmar que tras la intervención los valores de subenfriamiento y recalentamiento retornan al intervalo de 2 ºC a 10 ºC y que la temperatura de los difusores desciende al rango de 2 ºC a 10 ºC. (págs. 231, 235)

---

COBERTURA: documento «CLIMATIZACION INTRODUCCION.PDF», páginas 1 a 249 de 249. [completo]