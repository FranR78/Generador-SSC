```yaml
tipo: fundamento
titulo: Principios eléctricos y transformaciones de energía en el automóvil
entidad: principios-electricos-transformaciones-energia
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "4-6"
relacionados: [tension-electrica-voltaje, intensidad-corriente-electrica, resistencia-electrica]
palabras: [transformación energía, electrones de valencia, cobre, alternador, batería, masa chasis]
```

## Objeto
Aprovechar la energía eléctrica mediante su transformación en energía mecánica, calorífica o luminosa, así como comprender su generación a partir de energía mecánica o química en el automóvil (págs. 4-5).

## Fundamento
La energía eléctrica no se crea ni se destruye, sino que se transforma. Su circulación consiste en el movimiento de electrones libres ubicados en la última órbita (electrones de valencia) de los átomos de un material conductor (págs. 4-5).

## Desarrollo
Transformaciones de energía en el vehículo:
1. Energía eléctrica a mecánica: aplicación de corriente a motores y electroválvulas para hacer girar el motor térmico (motor de arranque), mover ventiladores, desplazar la aguja de los inyectores o accionar los elevalunas (pág. 4).
2. Energía eléctrica a calorífica: paso de corriente por resistencias para calentar bujías de precalentamiento diésel, calefactar la sonda Lambda, desempañar la luneta trasera o evitar la congelación del aditivo AdBlue (págs. 4-5).
3. Energía eléctrica a luminosa: alimentación de diodos LED, lámparas de incandescencia y de xenón (pág. 5).

Generación y almacenamiento de energía eléctrica:
1. Energía mecánica a eléctrica: el alternador genera un campo magnético rotativo en el rotor que induce corriente en el estator, rectificada mediante una placa de diodos para cargar la batería (pág. 5).
2. Energía química a eléctrica: las baterías de plomo y ácido sulfúrico (electrólito) combinan la materia activa de sus placas durante la descarga para suministrar corriente y la liberan durante la carga (pág. 5).

Estructura atómica y sentido de corriente:
- Átomo: formado por núcleo (protones positivos y neutrones neutros) y órbitas de electrones negativos (pág. 5). El cobre dispone de 29 protones y 1 solo electrón de valencia en su última órbita, lo que facilita su desprendimiento y lo convierte en un excelente conductor (pág. 5).
- Sentido real de la corriente: discurre de negativo a positivo (flujo de electrones) (pág. 5).
- Sentido convencional: discurre de positivo a negativo (pág. 5).

El circuito eléctrico básico:
Requiere fuente de alimentación (batería/alternador), fusible de protección, interruptor de mando, cables conductores y receptores (págs. 5-6). En el automóvil se utiliza la carrocería como conductor negativo (masa / GND) para ahorrar cableado (pág. 6).

📷 IMAGEN: Esquema del circuito eléctrico básico con batería, fusible, interruptor, lámpara y cierre a masa por chasis — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 6

## Valores de referencia
- Evolución del rendimiento de alternadores: de 30 A en modelos antiguos a más de 120 A en vehículos actuales (pág. 5).
- Electrones de valencia del átomo de cobre: 1 electrón en la última órbita (pág. 5).

## Errores de concepto frecuentes
- Asumir que el sentido convencional de la corriente (de positivo a negativo) representa el movimiento físico real de las cargas, cuando el flujo electrónico discurre de negativo a positivo (pág. 5).

```yaml
tipo: fundamento
titulo: Tensión eléctrica o voltaje
entidad: tension-electrica-voltaje
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "7"
relacionados: [principios-electricos-transformaciones-energia, polimetro-multimetro, ley-de-ohm]
paginas: "7"
palabras: [voltaje, diferencia de potencial, voltio, milivoltio, kilovoltio, voltímetro]
```

## Objeto
Definir la fuerza o diferencia de potencial que impulsa el desplazamiento de los electrones a través de un conductor eléctrico (pág. 7).

## Fundamento
Símil hidráulico: el voltaje equivale a la diferencia de altura o presión de líquido entre dos vasos comunicantes. Cuanto mayor es la diferencia de altura, mayor es la presión. El alternador realiza la función de la bomba hidráulica manteniendo constante la diferencia de potencial (pág. 7).

## Desarrollo
La unidad de medida de la tensión es el Voltio (V) y se mide con un voltímetro conectado en paralelo al circuito (cable positivo/rojo al punto de tensión y cable negativo/negro a masa) (pág. 7).

Múltiplos y submúltiplos de medida:
- Milivoltio (mV): 0,001 V. Se utiliza para medir la tensión en generadores de encendido, sensores del ABS y circuitos electrónicos (pág. 7).
- Voltio (V): 1 V. Tensión nominal de trabajo de la batería (12 V) y de la mayoría de los receptores del vehículo (pág. 7).
- Kilovoltio (kV): 1.000 V. Tensión de alta generada en el secundario de las bobinas para el salto de chispa en las bujías (pág. 7).

## Valores de referencia
- Tensión nominal de batería en reposo: 12 V (pág. 7).
- Tensión de alta en las bujías de encendido: de 20 kV a 50 kV (pág. 7).

## Errores de concepto frecuentes
- Intentar medir tensión intercalando el voltímetro en serie dentro del cable en lugar de conectarlo en paralelo entre el punto de tensión y masa (pág. 7).

```yaml
tipo: componente
titulo: Polímetro o multímetro de automoción
entidad: polimetro-multimetro
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "8"
relacionados: [tension-electrica-voltaje, intensidad-corriente-electrica, resistencia-electrica]
palabras: [multímetro, autorrango, escala manual, mediciones automoción, bornas com]
```

## Misión
Medir las magnitudes eléctricas fundamentales (tensión, intensidad y resistencia) y parámetros físicos específicos en las comprobaciones del automóvil (pág. 8).

## Tipos y características
- Polímetros de escalas manuales: exigen seleccionar la magnitud y la escala inmediata superior a la medida esperada mediante una rueda selectora (ej. escala de 20 V CC para verificar un circuito de 12 V) (pág. 8).
- Polímetros autorrango: ajustan automáticamente la escala de medida idónea al conectar las puntas sobre la magnitud seleccionada (pág. 8).
- Funciones específicas de automoción: medida de revoluciones (r.p.m.), temperatura (ºC), frecuencia (Hz), tiempo en milisegundos (ms), capacidad (µF), ángulo Dwell (%) y prueba de diodos (pág. 8).
- Conexiones de bornas: terminal negro en borna común (COM), terminal rojo en borna de tensión/resistencia/frecuencia y borna separada para lecturas de alta intensidad (10 A o 20 A) (pág. 8).

📷 IMAGEN: Polímetros autorrango y manual específicos para automoción con indicación de pantalla, rueda de funciones y bornas de conexión — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 8

## Principio de funcionamiento
Toma muestras analógicas a través de sus puntas de prueba, las procesa mediante un convertidor analógico-digital y muestra el valor traducido en la pantalla de información LCD (pág. 8).

## Valores de trabajo
- Escala de tensión continua para circuito de 12 V en selección manual: escala de 20 V (pág. 8).
- Límite de intensidad en borna especial no protegida: 10 A o 20 A según modelo (pág. 8).

## Anomalías frecuentes
- Rotura del fusible interno de la escala de intensidad pequeña (mA) por conexión accidental en paralelo a masa (pág. 8).

## Comportamiento en avería
Muestra lecturas erróneas, indicación permanente de sobrecarga "OL" o falta total de respuesta en pantalla al medir (pág. 8).

## Cómo comprobarlo
Inspeccionar el estado de la pila interna de 9 V y verificar la continuidad del fusible de protección de amperaje con un ohmímetro (pág. 8).

## Mantenimiento
Reemplazar la batería interna al encenderse el símbolo de aviso en pantalla y cambiar los fusibles fundidos por otros del exacto calibrado especificado (pág. 8).

```yaml
tipo: fundamento
titulo: Intensidad de corriente eléctrica
entidad: intensidad-corriente-electrica
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "9-10"
relacionados: [principios-electricos-transformaciones-energia, polimetro-multimetro, ley-de-ohm]
palabras: [intensidad, amperio, amperímetro, pinza amperimétrica, serie, caudal electrones]
```

## Objeto
Cuantificar el caudal de electricidad o la cantidad de electrones que circula a través de un conductor en un tiempo determinado (págs. 9-10).

## Fundamento
Símil hidráulico: la intensidad equivale al caudal de agua que circula por una tubería. La unidad de medida es el Amperio (A), que corresponde al paso de aproximadamente 6 trillones de electrones por segundo (págs. 9-10).

## Desarrollo
Métodos de medición:
1. Medición con amperímetro en serie: requiere abrir o interrumpir el circuito y conectar el instrumento en serie (cable rojo al extremo que trae la corriente y cable negro hacia el receptor). Toda la corriente del receptor debe atravesar el instrumento (págs. 9-10).
2. Medición con pinza amperimétrica: abraza el cable conductor sin cortar el circuito. La pinza detecta la intensidad del campo magnético generado alrededor del cable por el paso de los electrones y traduce la lectura a amperios. Es el método más seguro para altas corrientes (pág. 10).

Unidades y submúltiplos:
- Amperio (A): 1 A. Medida convencional en receptores de alumbrado, motores y actuadores (pág. 10).
- Miliamperio (mA): 0,001 A. Corriente en circuitos electrónicos, sensores Hall, diodos LED y sensores MAP (pág. 10).
- Microamperio (µA): 0,000001 A. Corriente de excitación en componentes electrónicos de precisión (pág. 10).

📷 IMAGEN: Esquema de conexión de un amperímetro intercalado en serie en el cable de alimentación de un receptor — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 10

## Valores de referencia
- Definición de 1 Amperio: desplazamiento de 6 trillones de electrones por segundo (pág. 10).
- Límite máximo estándar de medición directa en multímetros: 10 A (pág. 10).

## Errores de concepto frecuentes
- Conectar el amperímetro en paralelo o directo a masa, lo que genera un cortocircuito que destruye el fusible de miliamperios o daña el instrumento en escalas de 10 A no protegidas (pág. 10).

```yaml
tipo: fundamento
titulo: Resistencia eléctrica
entidad: resistencia-electrica
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "11-12"
relacionados: [principios-electricos-transformaciones-energia, polimetro-multimetro, ley-de-ohm]
palabras: [resistencia, ohmio, ohmímetro, sin corriente, conductor, aislante, semiconductor]
```

## Objeto
Definir la dificultad u oposición que presenta un conductor o receptor al paso de la corriente eléctrica (pág. 11).

## Fundamento
Símil hidráulico: la resistencia equivale a una llave de paso introducida en la tubería que restringe la circulación del agua. Se mide con un ohmímetro en Ohmios (Ω) haciendo circular una pequeña corriente suministrada por la pila interna del instrumento (págs. 11-12).

## Desarrollo
Regla fundamental de medición:
El elemento a medir debe estar TOTALMENTE DESCONECTADO de la corriente del vehículo. Medir resistencia en un componente bajo tensión destruye el ohmímetro (págs. 11-12).

Múltiplos de medida:
- Ohmio (Ω): 1 Ω. Utilizado para comprobar continuidad y medir resistencias bajas (bobinados, alternadores, motores, inyectores) (págs. 11-12).
- Kilohmio (kΩ): 1.000 Ω. Medida de resistencias altas (secundario de bobinas de encendido, cables de alta tensión) (pág. 11).
- Megaohmio (MΩ): 1.000.000 Ω. Comprobación de aislamiento a masa en componentes (pág. 11).

Clasificación de materiales según la resistencia:
1. Conductores: poseen de 1 a 3 electrones de valencia y permiten el flujo fácil de electricidad (cobre, plata, hierro, aluminio) (págs. 11, 25).
2. Aislantes: poseen de 5 a 7 electrones de valencia y ofrecen una resistencia casi infinita (madera, plásticos, gomas, cerámica) (págs. 11, 25).
3. Semiconductores: poseen 4 electrones de valencia y se comportan como conductores o aislantes según las condiciones (silicio, germanio en diodos y transistores) (págs. 11, 25).

📷 IMAGEN: Conexión de un ohmímetro para la medición de resistencia en secundario de bobina, primario e inyector con el elemento desconectado — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 12

## Valores de referencia
- Tensión en el circuito durante la medición de resistencia: 0 V (desconexión total) (págs. 11-12).

## Errores de concepto frecuentes
- Medir la resistencia de un sensor o actuador sin desconectar su conector o estando el circuito bajo tensión, ocasionando la destrucción del ohmímetro (págs. 11-12).

```yaml
tipo: fundamento
titulo: Tipos de corriente eléctrica en el automóvil
entidad: tipos-corriente-automovil
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "12"
relacionados: [tension-electrica-voltaje, intensidad-corriente-electrica, polimetro-multimetro]
palabras: [corriente continua, corriente alterna, corriente pulsante, PWM, ondas complejas]
```

## Objeto
Clasificar las distintas formas de onda de corriente eléctrica utilizadas para alimentar receptores y transmitir señales en los sistemas del vehículo (pág. 12).

## Fundamento
La corriente se clasifica según la variación que experimenta su valor de tensión en función del tiempo (pág. 12).

## Desarrollo
Formas de corriente utilizadas en el automóvil:
1. Corriente continua (CC / DC): la tensión no varía con el tiempo, manteniendo un valor constante (12 V). Se obtiene exclusivamente por reacción química en baterías y pilas, alimentando la mayoría de componentes (pág. 12).
2. Corriente alterna (CA / AC): la tensión varía continuamente en el tiempo entre un valor máximo positivo y un valor mínimo negativo. Es generada por el alternador (antes de rectificar) y por sensores inductivos de revoluciones (motor, ABS) (pág. 12).
3. Corriente pulsante o binaria (PWM): alterna entre un valor máximo y cero voltios con un intervalo de tiempo regulado. Presente en generadores Hall y como señal de excitación de electroválvulas (turbo, EGR, cánister) (pág. 12).
4. Ondas complejas: combinación entre la alimentación de un actuador y la inducción magnética de su bobina. Se localizan en la activación de inyectores y en el primario/secundario de las bobinas de encendido (pág. 12).

📷 IMAGEN: Gráficas de osciloscopio de corriente continua, corriente alterna, corriente pulsante (binaria) y ondas complejas — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 12

## Valores de referencia
- Tensión nominal de corriente continua en batería: 12 V (pág. 12).

## Errores de concepto frecuentes
- Tratar de medir señales pulsantes o complejas con un multímetro en escala de tensión continua esperando una lectura real instantánea, cuando el instrumento solo muestra una media ponderada (pág. 12).

```yaml
tipo: fundamento
titulo: Ley de Ohm
entidad: ley-de-ohm
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "13-14"
relacionados: [tension-electrica-voltaje, intensidad-corriente-electrica, resistencia-electrica]
palabras: [ley de ohm, intensidad, tensión, resistencia, triángulo de ohm]
```

## Objeto
Establecer la relación matemática exacta entre las tres magnitudes eléctricas fundamentales en cualquier circuito cerrado (págs. 13-14).

## Fundamento
La intensidad de corriente que circula por un circuito eléctrico es directamente proporcional a la tensión aplicada e inversamente proporcional a la resistencia del circuito (pág. 13).

## Desarrollo
Expresiones matemáticas de la Ley de Ohm:
- Cálculo de Intensidad: I = V / R (pág. 13).
- Cálculo de Tensión: V = R · I (pág. 13).
- Cálculo de Resistencia: R = V / I (pág. 13).

Definición de unidades combinadas:
1 Amperio es la corriente que circula por un conductor que opone 1 Ohmio de resistencia cuando se le aplica una diferencia de potencial de 1 Voltio (pág. 13).

📷 IMAGEN: Triángulo de la Ley de Ohm indicando la posición de V, I y R para despejar incógnitas — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 13

## Valores de referencia
- Fórmula general: I (A) = V (V) / R (Ω) (pág. 13).

## Errores de concepto frecuentes
- Asumir que al duplicar la resistencia de un circuito alimentado con tensión constante la intensidad aumenta, cuando en realidad la intensidad disminuye a la mitad (pág. 13).

```yaml
tipo: fundamento
titulo: Conductores eléctricos y dimensionamiento de cableado
entidad: conductores-electricos-cableado
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "15-16"
relacionados: [resistencia-electrica, intensidad-corriente-electrica, ley-de-ohm]
palabras: [conductores, cables, cobre, sección, resistividad, caída de tensión, densidad de corriente]
```

## Objeto
Dimensionar la sección y el material de los cables eléctricos para transportar la corriente minimizando las caídas de tensión y previniendo el sobrecalentamiento de la instalación (págs. 15-16).

## Fundamento
Los cables opone una resistencia interna directamente proporcional a su longitud y a la resistividad del material, e inversamente proporcional a su sección (pág. 15).

## Desarrollo
Magnitudes que determinan la resistencia de un cable:
1. Longitud (L): expresada en metros. A mayor longitud, mayor resistencia (pág. 15).
2. Sección (S): expresada en mm². A mayor sección (grosor), menor resistencia al paso de los electrones (pág. 15).
3. Resistividad (ρ): resistencia de un cable de 1 m de largo y 1 mm² de sección a 20 ºC. El cobre se utiliza de forma generalizada por tener baja resistividad (ρ = 0,017 Ω·mm²/m), gran flexibilidad y buena resistencia a las vibraciones (págs. 15-16).

Criterios de cálculo en automoción:
- Fórmula de resistencia del cable: R = (ρ · L) / S (pág. 15).
- Caída de tensión máxima admisible (ΔV): no debe superar el 2,5% de la tensión nominal (en sistemas de 12 V, la caída máxima es de 0,3 V) (pág. 15).
- Densidad de corriente recomendada: no rebasar los 5 A/mm² para prevenir recalentamientos por vibración y temperatura (pág. 16).
- Sección mínima por resistencia mecánica: 0,5 mm² (pág. 16).
- Fórmula para cálculo de sección mínima: S = ρ · (L / ΔV) · I (pág. 16).

## Valores de referencia
- Resistividad del Cobre (Cu): ρ = 0,017 Ω·mm²/m (pág. 15).
- Caída de tensión máxima admisible a 12 V: ΔV ≤ 0,3 V (2,5%) (pág. 15).
- Densidad máxima de corriente en automoción: 5 A/mm² (pág. 16).
- Sección mínima mecánica de cable: 0,5 mm² (pág. 16).

## Errores de concepto frecuentes
- Seleccionar un cable con sección inferior a la calculada, lo que ocasiona un fuerte incremento de temperatura por rozamiento de los electrones que puede quemar el aislante o provocar un incendio (págs. 15-16).

```yaml
tipo: fundamento
titulo: Potencia eléctrica
entidad: potencia-electrica
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "16-17"
relacionados: [tension-electrica-voltaje, intensidad-corriente-electrica, ley-de-ohm]
palabras: [potencia eléctrica, vatio, vatios, caballos de vapor, CV, kW, consumo eléctrico]
```

## Objeto
Calcular el trabajo eléctrico desarrollado por un receptor en la unidad de tiempo, expresado en Vatios (W), y determinar su equivalencia con la potencia mecánica en Caballos de Vapor (CV) (págs. 16-17).

## Fundamento
La potencia eléctrica es el resultado de multiplicar el valor de la tensión aplicada por la intensidad de corriente consumida (P = V · I) (pág. 16).

## Desarrollo
Fórmulas y equivalencias de potencia:
- Expresión general: P (W) = V (V) · I (A) (pág. 16).
- Un vatio (W) es el trabajo liberado por una corriente de un amperio alimentada a una tensión de un voltio (pág. 16).
- Conversión a potencia mecánica:
  - 1 CV equivale a 736 W (pág. 17).
  - 1 kW equivale a 1,358 CV (pág. 17).
- Fórmulas combinadas con la Ley de Ohm:
  - R = V² / P ; I = P / V ; P = I² · R (pág. 17).

📷 IMAGEN: Triángulo de la potencia eléctrica con las magnitudes W, V e I — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 16

## Valores de referencia
- Equivalencia de 1 CV: 736 W (pág. 17).
- Equivalencia de 1 kW: 1,358 CV (pág. 17).

## Errores de concepto frecuentes
- Seleccionar el amperaje de un fusible de protección considerando sólo la potencia en Vatios de los receptores sin convertir dicho valor a Amperios dividiendo entre 12 V (pág. 17).

```yaml
tipo: fundamento
titulo: Agrupación de resistencias en serie, paralelo y mixta
entidad: agrupacion-resistencias
area: electricidad-electronica
sistema: herramientas-y-medida
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "18-21"
relacionados: [resistencia-electrica, ley-de-ohm, potencia-electrica]
palabras: [agrupación serie, agrupación paralelo, circuito mixto, resistencia equivalente, caídas de tensión]
```

## Objeto
Determinar el valor óhmico equivalente, las caídas de tensión y el consumo de corriente en circuitos con múltiples receptores interconectados en serie, paralelo o combinaciones mixtas (págs. 18-21).

## Fundamento
La distribución de corriente y tensión se rige por las reglas de asociación de receptores según exista un único camino o múltiples caminos independientes de circulación (págs. 18-21).

## Desarrollo
1. Agrupación en serie:
   - Los receptores se conectan uno a continuación de otro existiendo un solo camino para la corriente (pág. 18).
   - La intensidad es la misma en todos los componentes del circuito (pág. 18).
   - Resistencia total: RT = R1 + R2 + R3... (pág. 18).
   - La tensión total se reparte entre los componentes generando caídas de tensión parciales (pág. 18).
   - Aplicación práctica: regulación de la velocidad de la turbina de calefacción mediante resistencias escalonadas (págs. 18-19).
   - Inconveniente: la interrupción de un elemento corta la corriente a todo el conjunto (pág. 19).

2. Agrupación en paralelo:
   - Cada receptor está alimentado directamente de la fuente existiendo caminos independientes (pág. 20).
   - Todos los componentes reciben la misma tensión (12 V) (pág. 20).
   - Resistencia total: 1 / RT = (1 / R1) + (1 / R2) + (1 / R3)... (pág. 20).
   - La resistencia total del conjunto siempre es menor que la resistencia más pequeña de la agrupación (pág. 20).
   - Para dos resistencias en paralelo: RT = (R1 · R2) / (R1 + R2) (pág. 20).
   - Para N resistencias iguales: RT = R / N (pág. 20).
   - Aplicación práctica: circuito de alumbrado de posición e iluminación general (págs. 20-21).
   - Ventaja: la avería o fundido de un componente no interrumpe el funcionamiento de los demás (pág. 20).

3. Agrupaciones mixtas (serie-paralelo y paralelo-serie):
   - Se resuelven simplificando por etapas el bloque serie o paralelo hasta obtener un circuito equivalente simple (págs. 21-22).
   - Aplicación práctica: potenciómetro en serie con las lámparas del cuadro de instrumentos para regular la intensidad luminosa (pág. 22).

📷 IMAGEN: Esquema del selector de velocidades de la turbina de calefacción con resistencias en serie — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 18

📷 IMAGEN: Esquema del circuito de alumbrado de posición con lámparas asociadas en paralelo — Fuente: Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf, pág. 21

## Valores de referencia
- Resistencia equivalente de N resistencias iguales en paralelo: RT = R / N (pág. 20).

## Errores de concepto frecuentes
- Creer que al conectar más receptores en paralelo la resistencia total del circuito aumenta, cuando en realidad disminuye y la intensidad total consumida se incrementa (pág. 20).

```yaml
tipo: fundamento
titulo: Electricidad estática y precauciones en unidades electrónicas
entidad: electricidad-estatica
area: electricidad-electronica
sistema: prl-y-seguridad
fuente: "Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf"
paginas: "22"
relacionados: [circuitos-integrados-uce, polimetro-multimetro]
palabras: [electricidad estática, frotamiento, carga electrostática, descarga a masa, protección centralitas]
```

## Objeto
Explicar el fenómeno de acumulación de cargas electrostáticas en el cuerpo humano y aplicar el protocolo de seguridad obligatorio antes de manipular centralitas electrónicas (pág. 22).

## Fundamento
La electricidad estática se genera por rozamiento (vibración y frotamiento del cuerpo con las tapicerías o moquetas del vehículo) acumulando cargas de muy alta tensión y baja intensidad en la ropa o en la piel (pág. 22).

## Desarrollo
Mecanismo de riesgo sobre la electrónica:
- El técnico acumula cargas electrostáticas al caminar sobre moqueta o friccionar con los asientos (pág. 22).
- Al tocar directamente los pines o conectores de una Unidad de Control Electrónico (UCE), se produce una descarga instantánea de miles de voltios sobre los componentes semiconductores (pág. 22).
- Las mofetas y microchips de las centralitas son extremadamente sensibles y pueden quedar perforados o destruidos de forma irreversible por la descarga (pág. 22).

Protocolo de prevención:
- Antes de manipular o tocar cualquier centralita electrónica o sus conectores de cableado, es obligatorio tocar con las manos un punto de masa metálico del chasis del vehículo para descargar a tierra la electricidad estática acumulada en el cuerpo (pág. 22).

## Valores de referencia
- Tensión de descarga electrostática: miles de voltios con intensidad muy reducida (pág. 22).

## Errores de concepto frecuentes
- Tocar o desenchufar conectores de centralitas electrónicas sin haberse derivado previamente a masa, creyendo que las cargas estáticas del cuerpo no dañan los circuitos integrados (pág. 22).

COBERTURA: documento «Nº2. V2. Diagnóstico con polimetro y osciloscopio OCR.pdf», páginas 4 a 22 de 122. queda pendiente desde la página 23