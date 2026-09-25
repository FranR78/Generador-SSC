```yaml
tipo: fundamento
titulo: Ciclo frigorífico
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "1-64, 71-78"
relacionados: [compresor, condensador, filtro-deshidratador, valvula-expansion, evaporador, refrigerante-r134a]
palabras: [alta presion, baja presion, evaporacion, expansion, compresion, condensacion, diagrama de mollier]
```

## Objeto
Explicación del ciclo cerrado de refrigeración para transformar el fluido frigorífico de líquido a gas y de gas a líquido con el fin de generar frío en el habitáculo y disipar calor al exterior (pág. 1, 26, 58).

## Fundamento
Se utiliza la evaporación y la expansión para pasar el fluido de estado líquido a gaseoso (producción de frío), mientras que la compresión y la condensación invierten el fenómeno pasando de gas a líquido (producción de calor) (pág. 26, 60).

## Desarrollo
- **Fases del ciclo frigorífico**:
  1. **Compresión**: El compresor aspira el fluido en estado gaseoso a baja presión y baja temperatura (3 bar, 5 ºC o 0,12 MPa, -7 ºC) y lo comprime saliendo a alta presión y alta temperatura (20 bar, 110 ºC o 1,4 MPa, 65 ºC) (pág. 11, 14).
  2. **Condensación**: El gas a alta presión entra en el condensador cediendo calor al aire exterior impulsado por los ventiladores, produciéndose la condensación y saliendo en estado líquido a alta presión y temperatura media (19 bar, 60 ºC o 1,4 MPa) (pág. 11, 18).
  3. **Filtrado y desecado**: El fluido líquido pasa por el filtro deshidratante, absorbiendo humedad y reteniendo impurezas sin cambiar su estado termodinámico (pág. 21).
  4. **Expansión**: El líquido a alta presión (19 bar, 60 ºC) penetra en el expansor / válvula de expansión, sufriendo una caída brusca de presión y temperatura y saliendo en estado difásico (líquido + vapor 20%) a baja presión y baja temperatura (3 bar, 0 ºC o 0,12 MPa, -7 ºC) (pág. 11, 21, 64).
  5. **Evaporación**: El fluido difásico entra en el evaporador tomando calor del aire exterior o de recirculación que se dirige al habitáculo. El líquido ebulle y se evapora por completo, deshumidificando el aire mediante la condensación de agua sobre las aletas del intercambiador (pág. 23, 24).
- **Diagrama de Mollier**: Representa gráficamente los estados del fluido (presión frente a entalpía/contenido energético en kJ/kg), delimitando la zona de líquido saturado, la zona difásica (líquido+vapor) y la curva de vapor saturado en las etapas A-B (compresión), B-C (condensación), C-D (expansión) y D-A (evaporación) (pág. 71, 73, 74).

📷 IMAGEN: Esquema del ciclo frigorífico con los dos niveles de presión (alta presión / alta temperatura en rojo, baja presión / baja temperatura en azul) — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 7 y 63 (pág. 7, 63)
📷 IMAGEN: Representación del ciclo frigorífico en el Diagrama de Mollier — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 73 y 74 (pág. 73, 74)

## Valores de referencia
- Salida de compresor (compresión): 20 bar, 110 ºC / 1,4 MPa, 65 ºC (pág. 11, 14).
- Salida de condensador (condensación): 19 bar, 60 ºC / 1,4 MPa (pág. 11, 18).
- Salida de expansor (expansión): 3 bar, 0 ºC / 0,12 MPa, -7 ºC (pág. 11, 21).
- Salida de evaporador (evaporación): 3 bar, 5 ºC / 0,12 MPa, -7 ºC (pág. 11, 14).
- Proporción de vapor tras la expansión: 20% (pág. 64).

## Errores de concepto frecuentes
Creer que el aire acondicionado genera frío añadiendo sustancias frías, en lugar de comprender que el frío se obtiene al retirar calor del aire mediante la evaporación del fluido frigorífico (pág. 24, 26).

---

```yaml
tipo: fundamento
titulo: Sub-refrigeración y sobrecalentamiento
entidad: subrefrigeracion-y-sobrecalentamiento
area: climatizacion
sistema: circuito-frigorifico
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "25, 65-70, 79-84"
relacionados: [ciclo-frigorifico, condensador, evaporador, valvula-expansion]
palabras: [sub-refrigeración, sobrecalentamiento, carga de fluido, rendimiento, estado difásico]
```

## Objeto
Definición, cálculo y diagnóstico del estado de la carga de fluido frigorífico en el circuito a través de los valores de sub-refrigeración en el condensador y sobrecalentamiento en el evaporador (pág. 65, 68, 79).

## Fundamento
- **Sub-refrigeración (SR)**: Indica la cantidad y porcentaje de fluido en estado líquido en el circuito. Es la diferencia entre la temperatura de condensación (leída en el manómetro según la presión) y la temperatura real del fluido a la salida del condensador (pág. 65, 67, 79).
- **Sobrecalentamiento (SC)**: Indica la cantidad y porcentaje de fluido en estado gaseoso en el circuito. Es la diferencia entre la temperatura real del fluido a la salida del evaporador y la temperatura de evaporación (leída en el manómetro) (pág. 25, 68, 79).

## Desarrollo
- **Sub-refrigeración ideal**: Debe situarse entre 2 ºC y 15 ºC. Garantiza que el fluido se ha licuado por completo antes de entrar al expansor (pág. 67).
- **Sobrecalentamiento ideal**: Debe situarse entre 2 ºC y 15 ºC (o entre 2 ºC y 10 ºC según control de válvula termostática). Garantiza que no entre fluido líquido al compresor (pág. 25, 70).
- **Evolución según la masa/carga de fluido**:
  - **Exceso de carga (Masa considerable)**: Aumenta la alta presión -> Licuefacción más rápida -> **Sub-refrigeración elevada (> 15 ºC)**. La baja presión aumenta -> Evaporación más lenta -> **Sobrecalentamiento bajo (< 2 ºC)** (pág. 68, 70, 79, 81, 83).
  - **Falta de carga (Masa escasa)**: Disminuye la alta presión -> Licuefacción más lenta -> **Sub-refrigeración escasa (< 2 ºC)**. La baja presión disminuye -> Evaporación más rápida -> **Sobrecalentamiento elevado (> 10-15 ºC)** (pág. 68, 70, 80, 81, 84).

📷 IMAGEN: Representación del sub-enfriamiento en el condensador y sobrecalentamiento en el evaporador según la masa de fluido — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 81 y 83 (pág. 81, 83)

## Valores de referencia
- Sub-refrigeración (SR) óptima: 2 ºC a 15 ºC (pág. 67).
- Sobrecalentamiento (SC) óptimo: 2 ºC a 15 ºC (o 2 ºC a 10 ºC según válvula de expansión) (pág. 25, 70).
- Ejemplo SR: Presión 15 bar (T. condensación 56 ºC), T. salida 50 ºC -> SR = 6 ºC (pág. 67).
- Ejemplo SC: Presión 2 bar (T. evaporación 0 ºC), T. salida 5 ºC -> SC = 5 ºC (pág. 70).

## Errores de concepto frecuentes
Creer que una sub-refrigeración baja significa falta de enfriamiento en el habitáculo, cuando en realidad indica falta de líquido (subcarga) en el condensador (pág. 68).

---

```yaml
tipo: fluido
titulo: Agente frigorífico R12
entidad: refrigerante-r12
area: climatizacion
sistema: fluidos-frigorificos
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "85-90, 93-94"
relacionados: [refrigerante-r134a, aceite-frigorifico]
palabras: [diclorodifluorometano, CFC, freon 12, capa de ozono, ODP]
```

## Designación y norma
Diclorodifluorometano (CF2Cl2), comercialmente denominado Freón R12. Clasificado como clorofluorocarbono (CFC) (pág. 86, 93).

## Propiedades
- Masa molar: 120,91 g/mol (pág. 93).
- Punto de ebullición a presión atmosférica (1 bar): -29,8 ºC (pág. 86, 88, 93).
- Presiones de vapor saturado: 3,09 bar a 0 ºC; 5,04 bar a 16 ºC; 15,3 bar a 60 ºC (pág. 93).
- Coeficiente frigorífico: 2,10 (pág. 93).
- Potencial de reducción del ozono (ODP): 1 (pág. 93).
- Potencial de calentamiento global (GWP): 3 (pág. 93).
- Inodoro, incombustible, no explosivo, no tóxico en condiciones normales y más pesado que el aire (pág. 88).
- Absorbe con mucha facilidad la humedad (pág. 88).

## Dónde se usa y cantidades
Utilizado en sistemas frigoríficos automotrices hasta mayo de 1994 (pág. 88).

## Compatibilidades y mezclas prohibidas
Solo se mezcla con aceites minerales (parafínicos o nafténicos). No ataca a los metales ni a las gomas (pág. 88, 230).

## Identificación
Denominación R12 o CFC-12 (pág. 86, 93).

## Manipulación, almacenamiento y residuos
Gas prohibido por su alto impacto medioambiental en la capa de ozono (ODP = 1) (pág. 88, 93).

## Riesgos y normativa
Producido el contacto directo con llamas o superficies calientes genera gases tóxicos (fosgeno, fluoreno). Al contacto con la piel produce congelaciones graves. Al mezclarse con la humedad genera ácidos corrosivos (fluorhídrico, clorhídrico) (pág. 94, 95).

---

```yaml
tipo: fluido
titulo: Agente frigorífico R134a
entidad: refrigerante-r134a
area: climatizacion
sistema: fluidos-frigorificos
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "91-95"
relacionados: [refrigerante-r12, aceite-frigorifico]
palabras: [tetrafluoroetano, HFC, r134a, PAG, sin ODP]
```

## Designación y norma
Tetrafluoroetano / 1,1,1,2-Tetrafluoroetano (CF3-CH2F). Clasificado como hidrofluorocarbono (HFC) (pág. 91, 93).

## Propiedades
- Masa molar: 102,03 g/mol (pág. 93).
- Punto de ebullición a presión atmosférica (1 bar): -26,5 ºC (pág. 91, 92, 93).
- Presiones de vapor saturado: 2,92 bar a 0 ºC; 5,04 bar a 16 ºC; 16,8 bar a 60 ºC (+1,5 bar respecto a R12) (pág. 93).
- Coeficiente frigorífico: 2,06 (pág. 93).
- Potencial de reducción del ozono (ODP): 0 (no daña la capa de ozono) (pág. 93).
- Potencial de calentamiento global (GWP): 0,26 (pág. 93).
- Inodoro, incombustible, no explosivo, no tóxico en bajas concentraciones y más pesado que el aire (pág. 92).
- Absorbe con facilidad la humedad (pág. 92).

## Dónde se usa y cantidades
Sustituto del R12 en circuitos frigoríficos automotrices desde 1994 (pág. 85, 88, 93).

## Compatibilidades y mezclas prohibidas
Solamente se puede mezclar con aceites sintéticos de polialquilenglicol (PAG) o éster. No ataca los metales pero ataca a determinados elastómeros (pág. 92, 230).

## Identificación
Denominación R134a / HFC-134a (pág. 91, 93).

## Manipulación, almacenamiento y residuos
Requiere el uso de gafas de protección y guantes durante su manipulación (pág. 94).

## Riesgos y normativa
Al contacto con la piel causa congelaciones graves. En contacto con llamas o superficies calientes genera gases tóxicos (fosgeno y fluoreno). Al reaccionar con la humedad forma ácidos corrosivos (fluorhídrico y clorhídrico). Riesgo de asfixia en zonas bajas por ser más pesado que el aire (pág. 94, 95).

---

```yaml
tipo: fluido
titulo: Agente frigorífico Dióxido de Carbono CO2
entidad: refrigerante-co2
area: climatizacion
sistema: fluidos-frigorificos
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "199-200"
relacionados: [refrigerante-r134a, ciclo-frigorifico]
palabras: [CO2, R744, micro canales, bomba de calor, alta presion]
```

## Designación y norma
Dióxido de Carbono (CO2 / R744) (pág. 199, 200).

## Propiedades
- Fluido natural no sintético, sin impacto en la capa de ozono y con menor efecto invernadero que los gases fluorados sintéticos (1.400 veces menos potente como gas de efecto invernadero que el R134a) (pág. 199, 200).
- Trabaja a presiones elevadas de 120 a 180 bar (pág. 200).

## Dónde se usa y cantidades
Utilizado en sistemas de climatización con tecnología de microcanales de aluminio y bombas de calor para calefacción del habitáculo. Requiere una carga de 450 gramos (frente a los 750 gramos de R134a) (pág. 200).

## Compatibilidades y mezclas prohibidas
Requiere tuberías y componentes diseñados para soportar ultra alta presión (120-180 bar) (pág. 200).

## Identificación
CO2 / R744 (pág. 199).

## Manipulación, almacenamiento y residuos
Requiere un sistema de protección en el habitáculo para detectar fugas y prevenir riesgo para los pasajeros (pág. 200).

## Riesgos y normativa
Altas presiones de trabajo en el circuito. Riesgo de asfixia en el habitáculo en caso de fuga masiva (pág. 200).

---

```yaml
tipo: componente
titulo: Compresor
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "95-109, 113-189, 201"
forma_parte_de: ciclo-frigorifico
relacionados: [embrague-compresor, ciclo-frigorifico, aceite-frigorifico]
palabras: [plato oscilante, cilindrada variable, regulación externa, paletas, scroll, Denso 6 SEU 12]
```

## Misión
Bombear el refrigerante en estado gaseoso y aumentar su presión y temperatura en el circuito frigorífico (pág. 95).

## Tipos y características
- **Compresor alternativo de plato oscilante (cilindrada fija)**: Incorpora entre 5 y 7 pistones accionados por un plato inclinado. La potencia se regula por marcha-paro (sonda de evaporador) (pág. 95, 126).
- **Compresor de plato oscilante y cilindrada variable (autorregulado interno)**: Modifica automáticamente el ángulo del plato mediante la presión del cárter (PC). Ejemplos: Harrison V5, Sanden (pág. 128, 130, 135, 145).
- **Compresor de cilindrada variable pilotado (regulación externa)**: La UCE ajusta la cilindrada mediante una electroválvula con señal cuadrada PWM de 500 Hz (frecuencia que mantiene la válvula en estado flotante). Ejemplo: Denso 6 SEU 12 (pág. 132, 185, 189, 191).
- **Compresor rotativo de paletas / aletas**: Consta de rotor excéntrico con paletas deslizantes dentro de una cámara (pág. 95, 157, 161).
- **Compresor Scroll (espirales)**: Utiliza una espiral fija y una espiral móvil/giratoria. Ofrece alto rendimiento, bajo par de arranque y bajo ruido (pág. 171, 173, 176).
- **Compresor eléctrico**: Accionado por motor eléctrico de alta tensión con inversor de C/A integrado (ej. Toyota Prius ES14). Utiliza aceite especial aislante ND11 (pág. 201, 206).

## Principio de funcionamiento
- **Regulación interna de cilindrada**: La cilindrada varía ajustando la inclinación del plato según la presión del cárter (PC) en relación a la baja presión (BP):
  - Si BP > PC: La válvula abre, iguala presiones, aumenta el ángulo del plato y sube la cilindrada (plena carga) (pág. 130, 131).
  - Si BP < PC: La válvula cierra, mantiene la presión en el cárter, disminuye el ángulo y reduce la cilindrada (mínima carga) (pág. 130, 132).
- **Regulación externa (Denso 6 SEU 12 sin embrague)**: Sin corriente (2% de activación), la válvula está abierta y conecta AP con el cárter (mínima carga). Al recibir activación (+98% PWM), la válvula cierra el paso de AP al cárter, reduciendo PC y aumentando la inclinación a plena carga (pág. 187, 195, 196).

📷 IMAGEN: Sección del compresor de cilindrada variable Harrison V5 y detalle de su válvula de regulación — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 138 y 140 (pág. 138, 140)
📷 IMAGEN: Sección del compresor Denso 6 SEU 12 de regulación externa y posición de la electroválvula — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 182 y 192 (pág. 182, 192)
📷 IMAGEN: Funcionamiento de compresión del compresor de espirales Scroll — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 176 (pág. 176)

## Valores de trabajo
- Presión de aspiración (baja presión): 1,2 bar a 3 bar (pág. 11, 14).
- Presión de descarga (alta presión): 14 bar a 20 bar (pág. 11, 14).
- Frecuencia de control de electroválvula de regulación externa: 500 Hz (pág. 191).
- Margen de activación PWM: 2% (mínima carga / apagado) a 98% (plena carga) (pág. 187, 195, 196).

## Anomalías frecuentes
- Bloqueo mecánico de pistones o paletas por falta de lubricante.
- Fugas de refrigerante por la empaquetadura del eje o juntas del cuerpo.
- Fallo de la electroválvula de regulación de cilindrada (quedándose fija en mínima carga) (pág. 195).

## Comportamiento en avería
Falta de compresión (presiones de alta y baja igualadas), imposibilidad de enfriar el habitáculo o ruidos metálicos intensos en el motor.

## Cómo comprobarlo
- Lectura de manómetros: verificar salto de presión entre aspiración (BP) y descarga (AP).
- Medición con osciloscopio / polímetro de la señal cuadrada PWM (500 Hz) en la electroválvula de regulación externa (pág. 191).

## Mantenimiento
Control del nivel y tipo de aceite específico (PAG para R134a, ND11 para híbridos/eléctricos) y reposición al sustituir componentes (pág. 201, 230, 245).

---

```yaml
tipo: componente
titulo: Embrague electromagnético del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "110-112, 198"
forma_parte_de: compresor
relacionados: [compresor]
palabras: [bobina electromagnética, entrehierro, polea, placa elástica, acoplamiento]
```

## Misión
Transmitir o interrumpir el movimiento de arrastre desde la polea accionada por el motor hacia el eje de impulsión del compresor (pág. 99, 111, 113).

## Tipos y características
Está compuesto por:
- Polea montada sobre rodamiento con cojinete (pág. 111).
- Bobina electromagnética (electroimán) fijada a la carcasa del compresor (pág. 111).
- Placa elástica de acoplamiento conectada al eje del compresor (pág. 111).

## Principio de funcionamiento
- **Acoplamiento desactivado (sin corriente)**: Existe una holgura (entrehierro) entre el plato y la polea. La polea gira libremente arrastrada por la correa sin mover el eje del compresor (pág. 111).
- **Acoplamiento activado (con corriente)**: La bobina crea un campo magnético que atrae la placa elástica contra la cara de la polea, uniendo solidariamente la polea con el eje de impulsión del compresor (pág. 112).

📷 IMAGEN: Sección del embrague electromagnético en posición desactivada (con holgura) y activada — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 111 y 112 (pág. 111, 112)

## Valores de trabajo
No documentado en fuentes (pág. 111).

## Anomalías frecuentes
- Desgaste del entrehierro por fricción excesiva.
- Interrupción o cortocircuito en el devanado de la bobina electromagnética.
- Patinamiento entre la placa elástica y la polea.

## Comportamiento en avería
El compresor no gira al activar el climatizador (placa no atraída) o emite ruidos de patinamiento y sobrecalentamiento en la polea.

## Cómo comprobarlo
- Comprobar continuidad y resistencia de la bobina electromagnética.
- Verificar con galgas la holgura (entrehierro) entre la polea y el disco de arrastre.
- Alimentación directa con 12 V para comprobar la atracción magnética.

## Mantenimiento
Ajuste de la holgura del entrehierro mediante arandelas de calado o sustitución del conjunto de polea y bobina.

---

```yaml
tipo: fundamento
titulo: Sistema de ciclo eyector
entidad: sistema-eyector
area: climatizacion
sistema: circuito-frigorifico
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "207-208"
relacionados: [evaporador, ciclo-frigorifico, valvula-expansion]
palabras: [eyector, evaporador ECS, tubo capilar, remolinos, eficiencia energética]
```

## Objeto
Optimización de la eficiencia energética y la capacidad de enfriamiento en el ciclo frigorífico mediante la reducción de pérdidas de energía por remolinos tras la expansión (pág. 207, 208).

## Fundamento
Sustituye la expansión convencional sin trabajo por un sistema con eyector y evaporador ECS (dividido en zona de ascenso y zona de descenso) que aprovecha la velocidad del fluido expandido para recircular refrigerante sin consumo de energía adicional (pág. 207, 208).

## Desarrollo
- **Estructura del circuito eyector**:
  - Válvula de expansión de entrada (pág. 208).
  - Eyector: boquilla que acelera el fluido dirigiéndolo hacia la zona de ascenso del evaporador ECS (pág. 208).
  - Evaporador ECS: dividido internamente en zona de ascenso y zona de descenso (pág. 208).
  - Tubo capilar de retorno desde la zona de descenso hacia la entrada del eyector (pág. 208).
- **Ventajas frente al ciclo convencional**: En el ciclo convencional, la expansión en la válvula provoca turbulencias y pérdidas de energía por remolinos. El ciclo eyector recupera parte de la energía de expansión, mejorando el rendimiento del climatizador (ejemplo en Toyota Prius) (pág. 206, 208).

📷 IMAGEN: Comparativa esquemática entre el ciclo frigorífico convencional y el sistema de ciclo eyector con evaporador ECS — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 208 (pág. 208)

## Valores de referencia
No documentado en fuentes (pág. 208).

## Errores de concepto frecuentes
Considerar el eyector como un elemento de estrangulación simple, ignorando su función de recuperación de energía cinemática en el fluido (pág. 208).

---

```yaml
tipo: fundamento
titulo: Sistema de ventilación por energía solar
entidad: ventilacion-solar
area: climatizacion
sistema: distribucion-aire
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "210-220"
relacionados: [ventilador-habitaculo, fuentes-de-calor-vehiculo]
palabras: [módulo solar, celdas solares, ECU ventilación solar, 53 W, recirculación]
```

## Objeto
Renovación del aire e introducción de aire fresco del exterior en el habitáculo mientras el vehículo se encuentra estacionado al sol, reduciendo el calentamiento interior sin consumir energía de la batería principal (pág. 210, 218, 224).

## Fundamento
Un módulo fotovoltaico instalado en el techo del vehículo genera energía eléctrica con la luz solar para alimentar el motor del ventilador del habitáculo mientras el contacto está apagado (pág. 210, 211, 214).

## Desarrollo
- **Componentes de la instalación**:
  - **Módulo solar**: Integrado en el techo, compuesto por 36 celdas fotovoltaicas (pág. 214).
  - **ECU de ventilación solar**: Unidad de control que gestiona el funcionamiento según parámetros de radiación y tiempo (pág. 211).
  - **Motor del ventilador**: Motor sin escobillas accionado a través de un relé específico (pág. 206, 209, 211).
  - **Servomotores de entrada y salida de aire**: Posicionan las trampillas en entrada de aire exterior y modo frontal (pág. 211, 218).
- **Condiciones de funcionamiento**:
  - **Condiciones de inicio**: Botón de arranque en OFF, botón de ventilación solar en ON, transcurridos aproximadamente 10 minutos desde el apagado del vehículo e irradiación solar mayor o igual a 500 W/m² (pág. 216, 218).
  - **Condiciones de parada**: Botón de arranque en IG-ON, botón de ventilación en OFF, irradiación menor a 500 W/m² durante más de 5 minutos, o voltaje solar fuera de rango (< 10 V o > 18 V) (pág. 216, 217).

📷 IMAGEN: Esquema eléctrico y posición de componentes del sistema de ventilación solar en el vehículo — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 211 y 212 (pág. 211, 212)
📷 IMAGEN: Diagrama de tiempos de funcionamiento de la ventilación solar con el vehículo aparcado — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 218 (pág. 218)

## Valores de referencia
- Potencia máxima de salida del módulo solar: 53 W (a 1.000 W/m² de irradianza y 25 ºC de temperatura de celda) (pág. 214).
- Umbral de irradianza solar de trabajo: 500 W/m² (pág. 216).
- Tensión de trabajo del módulo solar: 10 V a 18 V (pág. 217).
- Retardo de inicio tras estacionar: 10 minutos (pág. 216, 218).

## Errores de concepto frecuentes
Pensar que la ventilación solar enciende el compresor de aire acondicionado, cuando únicamente acciona el ventilador del habitáculo para renovar el aire (pág. 210, 218).

---

```yaml
tipo: fundamento
titulo: Sistema de aire acondicionado remoto
entidad: climatizacion-remota
area: climatizacion
sistema: control-climatizacion
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "221-225"
relacionados: [compresor, unidad-control-climatizador]
palabras: [mando a distancia, batería HV, pre-climatización, Toyota Prius]
```

## Objeto
Permitir el encendido a distancia del sistema de climatización mediante el mando de la llave para enfriar previamente el habitáculo antes de que accedan los ocupantes (pág. 221, 222, 224).

## Fundamento
Utiliza la energía acumulada en la batería de alta tensión (batería HV) para alimentar el compresor eléctrico y el ventilador sin necesidad de encender el motor térmico ni estar dentro del vehículo (pág. 221, 222).

## Desarrollo
- **Condiciones previas de inicio (deben cumplirse todas)**:
  - Mantener pulsado el botón "A/C" del mando a distancia durante 0,8 segundos o más (pág. 222).
  - Botón de arranque en posición OFF y no presionado (pág. 222).
  - Palanca de cambios en posición P (pág. 222).
  - Puertas cerradas y bloqueadas, capó cerrado y pedal de freno no presionado (pág. 222).
  - Estado de carga de la batería HV en nivel 3 o superior (pág. 222).
- **Condiciones de parada automática**:
  - Transcurso de un tiempo máximo de funcionamiento de aproximadamente 3 minutos (pág. 223).
  - Pulsación del botón A/C del mando dos veces en 3 segundos (pág. 223).
  - Incumplimiento de cualquiera de las condiciones de seguridad iniciales (pág. 223).
- **Efectos en el habitáculo**: En combinación con la ventilación solar previa, logra reducir la temperatura del habitáculo hasta 35 ºC por debajo de un vehículo no acondicionado tras 1 minuto de funcionamiento (pág. 224).

📷 IMAGEN: Activación del A/C remoto desde la llave y flujo de energía desde la batería HV — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 221 (pág. 221)
📷 IMAGEN: Gráfica de reducción de temperatura en habitáculo mediante ventilación solar + A/C remoto — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 224 (pág. 224)

## Valores de referencia
- Tiempo de pulsación en mando: 0,8 segundos o más (pág. 222).
- Tiempo máximo de funcionamiento: 3 minutos (pág. 223).
- Carga mínima de batería HV: Nivel 3 (pág. 222).
- Reducción de temperatura lograda: hasta 35 ºC respecto a modelo convencional (pág. 224).

## Errores de concepto frecuentes
Creer que el A/C remoto puede funcionar de forma indefinida con el coche aparcado, omitiendo el límite de seguridad de 3 minutos para proteger la batería HV (pág. 223).

---

```yaml
tipo: fluido
titulo: Aceite lubricante del circuito frigorífico
entidad: aceite-frigorifico
area: climatizacion
sistema: fluidos-frigorificos
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "201, 227-245"
relacionados: [compresor, refrigerante-r134a, refrigerante-r12]
palabras: [aceite mineral, PAG, ester, ND11, higroscopía, distribución de aceite]
```

## Designación y norma
Aceite para compresores de climatización automotriz (pág. 227, 243).

## Propiedades
- **Funciones principales**: Lubricar las piezas en movimiento, refrigerar el compresor, reforzar la estanqueidad de los componentes y evacuar impurezas (pág. 228).
- **Higroscopía**: Capacidad de absorber agua de la atmósfera. Varía fuertemente según la base química (pág. 233, 236, 238, 243).

## Dónde se usa y cantidades
- **Distribución media en el circuito** (compresores con cárter o depósito de aceite):
  - Compresor: 50% (pág. 244).
  - Evaporador: 20% (pág. 244).
  - Condensador: 10% (pág. 244).
  - Filtro deshidratador / acumulador: 10% (pág. 244).
  - Tuberías y mangueras: 10% (pág. 244).
- En compresores sin cárter ni depósito, el aceite circula repartido en mayor proporción por todo el circuito junto con el fluido frigorífico (pág. 245).

## Compatibilidades y mezclas prohibidas
- **Aceites minerales (parafínicos / nafténicos)**: Solamente compatibles con R12. Muy poco higroscópicos (pág. 230, 243).
- **Aceites de polialquilenglicol (PAG)**: Utilizados fundamentalmente con R134a (ej. ND8). Buen índice de viscosidad, muy higroscópicos. En presencia de agua son agresivos con metales, elastómeros y plásticos (pág. 201, 230, 236).
- **Aceites éster**: Compatibles con R134a y R12. Higroscopía media. Se utilizan principalmente en la reconversión de circuitos (pág. 230, 238).
- **Aceite ND11**: Aceite sintético específico para compresores eléctricos de alta tensión (ej. Toyota Prius). Posee un alto aislamiento eléctrico. **Prohibido mezclar con aceites convencionales ND8** por riesgo de derivación eléctrica y descarga (pág. 201, 206).

📷 IMAGEN: Gráfica de absorción de agua (PPM) a lo largo del tiempo entre aceites PAG, Éster y Mineral — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 233 (pág. 233)
📷 IMAGEN: Gráfico de sectores con el reparto porcentual de aceite por componentes del circuito — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, pág. 244 (pág. 244)

## Identificación
Especificaciones ND8 (PAG para R134a), ND11 (para compresor eléctrico), PAG 46 / 100 / 150, Éster, Mineral (pág. 201, 230).

## Manipulación, almacenamiento y residuos
Deben mantenerse los envases herméticamente cerrados hasta el momento de su introducción para evitar la absorción de humedad ambiental debido a su alta higroscopía (pág. 233, 236).

## Riesgos y normativa
Los aceites PAG descompuestos por humedad forman ácidos que corroen los componentes metálicos y dañan las juntas sintéticas. El uso de aceite no aislado en compresores eléctricos crea riesgo mortal de alta tensión (pág. 201, 236).

---

```yaml
tipo: procedimiento
titulo: Sustitución de compresor de regulación externa por compresor con embrague
entidad: adaptacion-compresor-embrague
area: climatizacion
sistema: circuito-frigorifico
fuente: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx"
paginas: "246-249"
relacionados: [compresor, embrague-compresor, unidad-control-climatizador]
palabras: [reles, instalacion electrica, cambio de compresor, negativo por pulsos]
```

## Objeto y alcance
Adaptación de la instalación eléctrica para montar un compresor equipado con acoplamiento electromagnético en un vehículo que equipaba originalmente un compresor de cilindrada variable de regulación externa (pág. 246, 248).

## Condiciones previas
- Circuito frigorífico descargado y despresurizado.
- Contacto del vehículo quitado y batería desconectada.
- Identificación de los dos cables de la electroválvula de regulación externa original (un cable con +12 V y otro con masa por pulsos PWM) (pág. 246, 248).

## Equipo y material
- Relé automotriz estándar de 4 bornes (contactos 30, 85, 86, 87) con portarrelé (pág. 246, 248).
- Cableado eléctrico, portafusible aéreo con fusible de protección y conectores aislados.
- Equipo de diagnosis para codificación de UCE (método oficial) (pág. 247).

## Pasos
- **Método Oficial (con modificación de software en UCE)**:
  1. Conectar el cable de +12 V procedente de la antigua válvula reguladora al cable positivo (marrón) del compresor nuevo (pág. 246).
  2. Conectar la línea de +12 V directo de batería (a través de fusible) al terminal 86 del relé (pág. 247).
  3. Conectar una masa (-) directa de batería al terminal 30 del relé (pág. 247).
  4. Conectar el cable de masa por pulsos procedente de la UCE al terminal 85 del relé (pág. 247).
  5. Conectar la salida del terminal 87 del relé al cable de masa (negro/blanco) del nuevo compresor (pág. 247).
  6. Acceder con el equipo de diagnosis a la UCE del vehículo y modificar la configuración de la salida de masa por pulsos a salida de masa continua (pág. 247).

- **Método Alternativo / Extraoficial (sin modificación de software en UCE)**:
  1. Conectar el cable de masa (negro/blanco) del nuevo compresor directamente a una masa (-) de batería (pág. 248).
  2. Conectar una línea de +12 V directo de batería (a través de fusible) al terminal 30 del relé (pág. 248).
  3. Conectar el terminal 86 del relé a masa (-) directa de batería (pág. 248).
  4. Conectar el cable de +12 V procedente de la antigua válvula de regulación al terminal 85 del relé (pág. 249).
  5. Conectar el terminal 87 del relé al cable positivo (marrón) del nuevo compresor (pág. 249).
  6. Aislar y anular el cable de masa por pulsos de la antigua electroválvula (pág. 249).

## Valores de referencia
Tensión de alimentación: +12 V (pág. 246, 248).

## Verificación final
Conectar el climatizador desde el salpicadero y verificar que el relé conmuta permitiendo el acoplamiento magnético del embrague del compresor sin generar fallos en UCE.

## Seguridad y normativa
Instalar siempre un fusible aéreo en la toma de positivo directo de batería para evitar cortocircuitos e incendios en la instalación eléctrica.

COBERTURA: documento «3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx», páginas 1 a 249 de 249. [completo]