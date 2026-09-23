```yaml
tipo: fundamento
titulo: Principios físicos de la refrigeración y cambios de estado
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "16-17"
relacionados: [refrigerante-r134a, refrigerante-r1234yf, compresor, evaporador]
palabras: [cambio de estado, intercambio termico, absorcion de calor, presion y temperatura]
```

1. ELEMENTO: Principios físicos de la refrigeración y cambios de estado.
2. APLICACIÓN: General en climatización de automóviles (Seat y otros fabricantes).
3. FUNDAMENTO TÉCNICO:
- La materia puede encontrarse en estados sólido, líquido o gaseoso. El paso de un estado a otro requiere aporte o extracción energética en forma de calor. [Teórico OEM]
- Una sustancia absorbe calor al pasar de estado líquido a estado gaseoso (evaporación). [Teórico OEM]
- Una sustancia entrega calor al pasar de estado gaseoso a estado líquido (condensación). [Teórico OEM]
- La propagación del calor se produce siempre de forma espontánea desde la sustancia o zona más caliente hacia la más fría. [Teórico OEM]
- En un circuito cerrado, los cambios de estado y temperatura provocan variaciones directas de presión: al aumentar la temperatura aumenta la presión, y al aumentar la presión se eleva la temperatura. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN: No aplica.
5. FUSIÓN DE FUENTES: Todos los datos proceden de la documentación técnica de ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 16-17).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Diagrama de cambios de estado del agua (hielo, agua líquida y vapor) por aplicación de calor — Fuente: 2. Introducción a la refrigeración.pdf, pág. 16]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: fundamento
titulo: Conceptos térmicos y parámetros de ebullición
entidad: higrometria-y-confort
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "17-19"
relacionados: [refrigerante-r134a, refrigerante-r1234yf]
palabras: [calor, frio, punto critico, punto de ebullicion, punto de rocio, distension]
```

1. ELEMENTO: Conceptos térmicos y parámetros de ebullición.
2. APLICACIÓN: Termodinámica aplicada a la climatización del automóvil.
3. FUNDAMENTO TÉCNICO:
- Calor: Forma de energía medible mediante temperatura expresada en ºC, K o ºF (0 ºC = 273,15 K, 0 ºC = 32 ºF). Fórmulas de conversión: K = ºC + 273,15; ºF = (ºC × 9/5) + 32. Cero absoluto: -273,15 ºC. [Teórico OEM]
- Frío: Ausencia de calor o calor de baja intensidad. Se considera cotidianamente frío por debajo de 0 ºC. [Teórico OEM]
- Punto crítico: Estado límite de presión y temperatura por encima del cual no existe superficie de separación entre líquido y vapor. Si se calienta un gas por encima de este punto, se produce su descomposición química. [Teórico OEM]
- Punto de ebullición: Temperatura a la que una sustancia pasa de líquido a gas. Aumenta directamente al aumentar la presión (el agua hierve a 100 ºC a 1 bar y a 135 ºC a 3 bar). [Teórico OEM]
- Punto de rocío: Temperatura a la que comienza la condensación del vapor de agua contenido en el aire. [Teórico OEM]
- Enfriamiento por distensión: Al expandirse bruscamente un gas a presión a través de una válvula, su temperatura disminuye notablemente. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN: No aplica.
5. FUSIÓN DE FUENTES: Datos extraídos del manual técnico de refrigeración (Fuente: «2. Introducción a la refrigeración.pdf», pág. 17-19).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Esquema de estados de agregación de la materia (Sólido, Líquido, Gas, Plasma) y transformaciones de fase — Fuente: 2. Introducción a la refrigeración.pdf, pág. 19]
- 📷 [IMAGEN: Curva de presión de vapor del agua (H2O) — Fuente: 2. Introducción a la refrigeración.pdf, pág. 18]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: fluido
titulo: Agentes frigoríficos R134a y R1234yf
entidad: refrigerante-r1234yf
area: climatizacion
sistema: fluidos-frigorificos
codigo: R1234yf
fabricante: Seat, Mercedes
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "19-20"
relacionados: [refrigerante-r134a, condensador, evaporador]
palabras: [R134a, R1234yf, R744, punto de ebullicion, PCA, curva de presion de vapor]
```

1. ELEMENTO: Agentes frigoríficos R134a y R1234yf.
2. APLICACIÓN: Sistemas de aire acondicionado en automóviles (Seat, Mercedes y parque móvil general).
3. FUNDAMENTO TÉCNICO:
- Fluidos químicos de fácil ebullición empleados para el intercambio térmico en circuito cerrado. [Teórico OEM]
- Punto de ebullición a presión atmosférica (1 bar):
  - R134a: -26,5 ºC. [Teórico OEM]
  - R1234yf: -29 ºC. [Teórico OEM]
- Características ambientales y normativa:
  - R134a: Prohibida su instalación en vehículos de nueva homologación desde 2017 por su elevado PCA (Potencial de Calentamiento Atmosférico). Permitido solo para recarga de vehículos antiguos. [Teórico OEM]
  - R1234yf: Gas estándar actual con PCA = 4. [Teórico OEM]
  - R744 (CO2): Utilizado por fabricantes como Mercedes con PCA = 1. [Teórico OEM]
- Comportamiento en circuito: En el condensador pasa de gas a líquido cediendo calor (presión constante, menor temperatura); en el evaporador pasa de líquido a gas absorbiendo calor (reducción de presión). [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
## Designación y norma
R134a (HFC) y R1234yf (HFO).
## Propiedades
Puntos de ebullición de -26,5 ºC (R134a) y -29 ºC (R1234yf) a 1 bar.
## Dónde se usa y cantidades
Circuitos frigoríficos automotrices cerrados.
## Compatibilidades y mezclas prohibidas
Prohibido mezclar R134a y R1234yf.
## Identificación
Etiqueta de carga en el vano motor.
## Manipulación, almacenamiento y residuos
Recuperación obligatoria mediante estación de carga específica.
## Riesgos y normativa
Directiva MAC 2006/40/CE.
5. FUSIÓN DE FUENTES: Datos procedentes de ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 19-20).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Curvas de presión de vapor comparativas entre los refrigerantes R134a y R1234yf — Fuente: 2. Introducción a la refrigeración.pdf, pág. 20]
7. ADVERTENCIAS:
- No emplear R134a en equipos fabricados a partir de 2017.

---

```yaml
tipo: componente
titulo: Compresor de aire acondicionado
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-22"
relacionados: [condensador, evaporador, valvula-expansion]
palabras: [compresor, cilindrada fija, cilindrada variable, aspiracion de gas, alta presion]
```

1. ELEMENTO: Compresor de aire acondicionado.
2. APLICACIÓN: Vehículos Seat y turismos en general.
3. FUNDAMENTO TÉCNICO:
- Componente encargado de elevar la presión del agente frigorífico y forzar su circulación continua por todo el circuito cerrado. [Teórico OEM]
- Tipos de compresores: De cilindrada fija o de cilindrada variable, con accionamiento mecánico (polea/embrague) o eléctrico. [Teórico OEM]
- Condición de aspiración: Debe aspirar únicamente fluido en estado gaseoso a baja presión. [Teórico OEM]
- Salida del compresor: Comprime el gas elevando su presión a aproximadamente 14 bares y su temperatura a 65 ºC, dando inicio al tramo de alta presión. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Verificar que el fluido entre exclusivamente en estado gaseoso para evitar la destrucción de láminas o pistones (los líquidos no se pueden comprimir). [Teórico OEM]
- Comprobar que la presión de salida alcance unos 14 bares a temperatura de régimen. [Teórico OEM]
5. FUSIÓN DE FUENTES: Documentación técnica oficial Seat / ETAI (Fuente: «2. Introducción a la refrigeración.pdf», pág. 20-22).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Ubicación y conexionado del compresor en el circuito frigorífico — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21]
7. ADVERTENCIAS:
- Prohibida la entrada de refrigerante líquido a la toma de aspiración del compresor.

---

```yaml
tipo: componente
titulo: Condensador
entidad: condensador
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-22"
relacionados: [compresor, filtro-deshidratador, electroventilador-condensador]
palabras: [condensador, radiador frontal, licuacion, 14 bar, 55 ºC]
```

1. ELEMENTO: Condensador.
2. APLICACIÓN: Radiador intercambiador frontal en vehículos Seat y turismos.
3. FUNDAMENTO TÉCNICO:
- Radiador montado en el frente del vehículo que recibe el agente frigorífico gaseoso comprimido procedente del compresor. [Teórico OEM]
- Misión: Enfriar y licuar el fluido refrigerante cediendo calor al aire exterior (forzado por el viento de marcha o por un electroventilador). [Teórico OEM]
- Parámetros operacionales: Mantiene la presión en 14 bares mientras la temperatura del fluido disminuye unos 10 ºC, saliendo a 55 ºC en fase líquida. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Limpieza periódica de aletas para asegurar la disipación térmica. [Teórico OEM]
- Comprobar que la temperatura baje de 65 ºC a la entrada hasta 55 ºC a la salida manteniendo 14 bares. [Teórico OEM]
5. FUSIÓN DE FUENTES: Datos procedentes de ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 20-22).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Esquema del condensador en el flujo de alta presión recibiendo aire del electroventilador — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21-22]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: componente
titulo: Filtro deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-22"
relacionados: [condensador, valvula-expansion]
palabras: [filtro deshidratador, humedad, impurezas, 14 bar, 55 ºC]
```

1. ELEMENTO: Filtro deshidratador.
2. APLICACIÓN: Tramo de alta presión en vehículos Seat y turismos.
3. FUNDAMENTO TÉCNICO:
- Componente situado tras el condensador que recibe el fluido en fase líquida. [Teórico OEM]
- Misión: Retener las impurezas mecánicas del circuito y absorber el agua/humedad. [Teórico OEM]
- Parámetros operacionales: El fluido debe atravesarlo sin variaciones de presión ni temperatura (14 bares y 55 ºC). [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Si existe caída de temperatura a la salida del filtro, indica obstrucción interna. [Teórico OEM]
- Sustitución obligatoria en cada apertura del circuito. [Teórico OEM]
5. FUSIÓN DE FUENTES: ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 20-22).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Posición del filtro deshidratador entre el condensador y la válvula de expansión — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: componente
titulo: Transmisor de presión
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-21"
relacionados: [presostato, unidad-control-climatizador, compresor]
palabras: [transmisor de presion, trinaria, sensor MAP, alta presion]
```

1. ELEMENTO: Transmisor de presión (Trinaria / Sensor MAP).
2. APLICACIÓN: Tramo de alta presión en vehículos Seat y grupo VAG.
3. FUNDAMENTO TÉCNICO:
- Dispositivo encargado de medir la presión reinante en el lado de alta presión del circuito frigorífico. [Teórico OEM]
- Variantes: Manocontacto de presión múltiple (trinaria) en sistemas convencionales o sensor de presión electrónico analógico/PWM (sensor MAP) en sistemas modernos. [Teórico OEM]
- Misión: Enviar información de presión a la unidad de control para gestionar el acoplamiento del compresor y la activación de los electroventiladores. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Verificar señal de salida respecto a la presión del circuito de alta. [Teórico OEM]
5. FUSIÓN DE FUENTES: ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 20-21).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Esquema de conexión del transmisor de presión en la línea de alta — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: componente
titulo: Válvula de expansión
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-23"
relacionados: [evaporador, filtro-deshidratador, compresor]
palabras: [valvula de expansion, distension, caida de presion, 1,2 bar, -7 ºC]
```

1. ELEMENTO: Válvula de expansión.
2. APLICACIÓN: Frontera entre alta y baja presión en vehículos Seat y turismos.
3. FUNDAMENTO TÉCNICO:
- Componente regulador situado a la entrada del evaporador. [Teórico OEM]
- Misión: Distensar y gasificar el agente frigorífico líquido procedente del filtro deshidratador. [Teórico OEM]
- Efecto térmico: Durante el proceso de distensión se produce una brusca caída de presión desde 14 bares hasta aprox. 1,2 bares, haciendo descender la temperatura del fluido a -7 ºC. Marca el inicio del tramo de baja presión. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Comprobar que la presión caiga a 1,2 bares y la temperatura descienda a -7 ºC a la salida hacia el evaporador. [Teórico OEM]
5. FUSIÓN DE FUENTES: ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 20-23).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Representación de la válvula de expansión como elemento delimitador de alta y baja presión — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-23"
relacionados: [valvula-expansion, ventilador-habitaculo, compresor]
palabras: [evaporador, unidad climatica, absorcion de calor, 1,2 bar, enfriamiento de aire]
```

1. ELEMENTO: Evaporador.
2. APLICACIÓN: Intercambiador interno de la unidad climática del habitáculo.
3. FUNDAMENTO TÉCNICO:
- Radiador ubicado en el mueble climatizador del habitáculo por cuyo interior circula el fluido en fase de evaporación a 1,2 bares y -7 ºC. [Teórico OEM]
- Misión: Extraer el calor del aire soplado por la turbina hacia el habitáculo. [Teórico OEM]
- Efectos sobre el aire: El aire que atraviesa las aletas del evaporador se enfría (ej. cae de 24 ºC a 4 ºC), deshidrata (condensación de humedad ambiental) y depura. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Verificar el drenaje del agua de condensación para evitar malos olores o empañamiento. [Teórico OEM]
- Comprobar salto térmico en el aire del habitáculo (reducción de hasta 20 ºC). [Teórico OEM]
5. FUSIÓN DE FUENTES: ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 20-23).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Flujo de aire a través del evaporador y la turbina de aire fresco — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21-23]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: componente
titulo: Silenciador-depósito receptor
entidad: deposito-colector
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "20-21"
relacionados: [compresor, evaporador]
palabras: [silenciador, deposito receptor, trampa de liquido, tubo de baja]
```

1. ELEMENTO: Silenciador-depósito receptor.
2. APLICACIÓN: Tramo de baja presión antes del compresor.
3. FUNDAMENTO TÉCNICO:
- Componente acumulador ubicado en la línea de baja presión, justo antes de la toma de aspiración del compresor. [Teórico OEM]
- Misión: Retener eventuales gotas de refrigerante líquido para impedir que sean aspiradas por el compresor y dañen sus mecanismos internos. [Teórico OEM]
- Variantes comerciales: No se instala en la totalidad de los vehículos. En algunos modelos no existe como recambio despiezado, vendiéndose el tubo de baja completo. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Inspección visual de posibles fugas o deformaciones en la línea de baja. [Teórico OEM]
5. FUSIÓN DE FUENTES: ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 20-21).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Ubicación del silenciador-depósito receptor en el circuito de baja antes del compresor — Fuente: 2. Introducción a la refrigeración.pdf, pág. 21]
7. ADVERTENCIAS: [No documentado]

---

```yaml
tipo: fundamento
titulo: Circuito frigorífico y tuberías de climatización
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "21-23"
relacionados: [compresor, condensador, evaporador, valvula-expansion]
palabras: [funcionamiento hidraulico, alta presion, baja presion, tuberias aluminio, juntas HNBR]
```

1. ELEMENTO: Circuito frigorífico y tuberías de climatización.
2. APLICACIÓN: Sistema hidráulico cerrado en automóviles (Seat).
3. FUNDAMENTO TÉCNICO:
- Estructura hidráulica dividida en dos zonas operativas:
  - Zona de Alta Presión: Desde la salida del compresor (14 bar, 65 ºC), pasando por el condensador (14 bar, 55 ºC) y filtro deshidratador (14 bar, 55 ºC) hasta la entrada de la válvula de expansión. [Teórico OEM]
  - Zona de Baja Presión: Desde la salida de la válvula de expansión (1,2 bar, -7 ºC), atravesando el evaporador y retornando al compresor en estado gaseoso frío. [Teórico OEM]
- Materiales de canalización: Tuberías rígidas de aluminio y tubos flexibles de neopreno con barrera interna de nylon. [Teórico OEM]
- Estanqueidad: Garantizada mediante juntas tóricas de goma de nitrilo hidrogenado (HNBR) de color verde, capaces de soportar temperaturas de hasta 130 ºC. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Emplear exclusivamente juntas tóricas verdes HNBR en las uniones de tuberías. [Teórico OEM]
- Respetar los valores nominales de trabajo (14 bar en alta / 1,2 bar en baja) en condiciones estándar. [Teórico OEM]
5. FUSIÓN DE FUENTES: ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 21-23).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Esquema hidráulico completo del circuito de aire acondicionado con valores de presión y temperatura — Fuente: 2. Introducción a la refrigeración.pdf, pág. 22]
7. ADVERTENCIAS:
- No utilizar juntas tóricas convencionales (negras), únicamente juntas HNBR específicas para refrigerante.

---

```yaml
tipo: fundamento
titulo: Opciones de climatización del automóvil
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: Seat
fuente: "2. Introducción a la refrigeración.pdf"
paginas: "23"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [calefaccion-ventilacion, aire acondicionado, climatizador automatico, monozona, bizona]
```

1. ELEMENTO: Opciones de climatización del automóvil.
2. APLICACIÓN: Equipamiento de confortabilidad en turismos.
3. FUNDAMENTO TÉCNICO:
- Existen tres niveles tecnológicos de acondicionamiento del aire en el habitáculo:
  1. Calefacción-Ventilaciones: Control totalmente manual por el conductor. Solo permite aumentar la temperatura respecto a la ambiental, no reducirla. [Teórico OEM]
  2. Aire Acondicionado: Sistema manual o semiautomático que permite subir o bajar la temperatura seleccionando manualmente la velocidad de la turbina y la distribución de trampillas. [Teórico OEM]
  3. Climatización Automática: Gestión electrónica integrada. El conductor selecciona la temperatura deseada y la unidad de control regula automáticamente la velocidad de la turbina, mezcla de aire y posición de trampillas. Puede ser monozona, bizona o cuatrizona y dispone de autodiagnóstico de averías. [Teórico OEM]
4. DIAGNÓSTICO / REPARACIÓN:
- Los sistemas de climatización automática permiten la lectura de códigos de avería mediante equipo de diagnosis. [Teórico OEM]
5. FUSIÓN DE FUENTES: ETAI Ibérica (Fuente: «2. Introducción a la refrigeración.pdf», pág. 23).
6. IMÁGENES REQUERIDAS:
- 📷 [IMAGEN: Cuadro comparativo de mandos entre Calefacción-Ventilaciones, Aire Acondicionado y Climatizador Automático — Fuente: 2. Introducción a la refrigeración.pdf, pág. 23]
7. ADVERTENCIAS: [No documentado]

---
COBERTURA: documento «2. Introducción a la refrigeración.pdf», páginas 16 a 23 de 23. [completo]