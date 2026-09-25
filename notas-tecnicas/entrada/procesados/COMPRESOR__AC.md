```yaml
tipo: componente
titulo: Compresor del climatizador de regulación externa 6 SEU 12
entidad: compresor
variante: denso-6-seu-12
area: climatizacion
sistema: circuito-frigorifico
codigo: 6 SEU 12
fabricante: DENSO
fuente: "COMPRESOR__AC.PDF"
paginas: "3"
forma_parte_de: circuito-frigorifico
relacionados: [valvula-reguladora-compresor, polea-compresor, regulacion-automatica]
palabras: [disco oscilante, 6 embolos, Lupo FSI, sin acoplamiento electromagnetico, variacion de cilindrada]
```

## Misión
Comprimir el agente frigorífico adaptando progresivamente la cilindrada y el rendimiento desde el 0% (estado OFF) hasta el 100% (plena carga) según las necesidades de refrigeración (pág. 3).

## Tipos y características
- Compresor del climatizador de regulación externa modelo 6 SEU 12 de la marca DENSO (pág. 3).
- Construcción unilateral de disco oscilante provista de 6 émbolos (pág. 3).
- Utilizado en el vehículo Lupo FSI siguiendo el principio de regulación de disco oscilante (pág. 3).
- Prescinde del acoplamiento electromagnético convencional gracias a que la cilindrada puede descender hasta casi el 0% en estado operativo OFF, reduciendo el peso del conjunto en unos 500 gramos aproximadamente (pág. 3).
- Incorpora una nueva polea de impulsión con dispositivo de seguridad integrado contra sobrecargas (pág. 3).

## Principio de funcionamiento
El eje de impulsión acciona el disco oscilante desplazando los 6 émbolos. La inclinación del disco oscilante se regula de forma continua mediante la presión del cárter controlada por la válvula reguladora externa N280, variando la carrera de los émbolos desde un rendimiento inferior al 2% (desconexión o estado OFF) hasta el 100% de capacidad impelida (pág. 3).

📷 IMAGEN: Vista del compresor de climatización de regulación externa DENSO 6 SEU 12 — Fuente: COMPRESOR__AC.PDF, pág. 3 (pág. 3).

## Valores de trabajo
- Reducción de masa por omisión de acoplamiento electromagnético: 500 gramos aproximadamente (pág. 3).
- Cilindrada en estado operativo OFF: inferior a casi el 0% (pág. 3).

## Anomalías frecuentes
No documentado en fuentes (pág. 3).

## Comportamiento en avería
No documentado en fuentes (pág. 3).

## Cómo comprobarlo
No documentado en fuentes (pág. 3).

## Mantenimiento
No documentado en fuentes (pág. 3).

---

```yaml
tipo: fundamento
titulo: Regulación externa del rendimiento del compresor
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
codigo: E87
fabricante: Audi
fuente: "COMPRESOR__AC.PDF"
paginas: "4"
relacionados: [compresor, valvula-reguladora-compresor, sensor-evaporador, unidad-control-climatizador]
palabras: [regulación externa, E87, G263, N280, Reheat, temperatura evaporador]
```

## Objeto
Ajustar de forma progresiva la potencia frigorífica del compresor en función de las necesidades térmicas reales del evaporador para reducir el consumo energético y evitar la necesidad de calefactar adicionalmente el aire (Reheat) (pág. 4).

## Fundamento
La regulación se efectúa externamente mediante la unidad de manejo e indicación E87, la cual gobierna una válvula de regulación electromagnética (N280) que modifica la cilindrada del compresor a partir de la temperatura de salida del aire en el evaporador (pág. 4).

## Desarrollo
- **Captación de datos de entrada**: La unidad de manejo e indicación E87 procesa la señal enviada por el transmisor de temperatura del aire a la salida del evaporador G263 (pág. 4).
- **Gestión del rendimiento frigorífico**: A partir del valor de temperatura medido por el transmisor G263, la unidad E87 modula la señal de excitación hacia la válvula reguladora N280 para ajustar la presión del cárter del compresor (pág. 4).
- **Optimización energética**: Adapta la temperatura de salida del aire en el evaporador ajustando exactamente el caudal de gas refrigerante necesario, minimizando el calentamiento posterior mediante la calefacción (Reheat) y reduciendo la demanda de potencia al motor (pág. 4).

## Valores de referencia
No documentado en fuentes (pág. 4).

## Errores de concepto frecuentes
Creer que el compresor trabaja siempre a máxima potencia y que la temperatura del habitáculo se regula únicamente mezclando aire frío con aire caliente procedente de la calefacción (Reheat) (pág. 4).

---

```yaml
tipo: componente
titulo: Válvula reguladora del compresor del climatizador
entidad: valvula-reguladora-compresor
area: climatizacion
sistema: control-climatizacion
codigo: N280
fabricante: Audi
fuente: "COMPRESOR__AC.PDF"
paginas: "5-10"
forma_parte_de: compresor
relacionados: [compresor, unidad-control-climatizador, sensor-evaporador]
palabras: [N280, electroválvula, PWM, 500 Hz, estado flotante, cárter, alta presión, baja presión]
```

## Misión
Gobernar la cilindrada del compresor regulando el paso de refrigerante entre la cámara de alta presión, la cámara del cárter y el lado de baja presión (pág. 5, 7).

## Tipos y características
- Válvula reguladora del compresor del climatizador N280 (pág. 4, 5).
- Combina un componente mecánico (A) sensible a la presión y una unidad electromagnética (B) que realiza la función esencial de regulación (pág. 5).
- En la válvula confluyen las tres presiones del sistema: cárter del compresor (A), lado de alta presión (B) y lado de baja presión (C) (pág. 7).

## Principio de funcionamiento
- **Accionamiento electromagnético (B)**: La unidad E87 excita la válvula mediante una señal cuadrada de frecuencia fija a 500 Hz modulada en anchura de impulsos (PWM). Debido a la alta frecuencia, el empujador se mantiene en un estado "flotante", realizando desplazamientos de pocas décimas de milímetro entre sus topes para regular todos los márgenes intermedios (pág. 6).
- **Estado sin corriente**: La válvula permanece totalmente abierta interconectando el conducto de alta presión (B) con el cárter (A), compensando ambas presiones (pág. 7).
- **Plena carga (100% de caudal)**: La válvula cierra la comunicación entre el cárter (A) y la alta presión (B). Al disminuir la presión en el cárter, la alta presión sobre los pistones vence la fuerza del muelle del disco oscilante y lo desplaza a máxima inclinación (pág. 8, 9).
- **Regulación descendente / Estado OFF (inferior a 2%)**: Al desactivar o solicitar muy baja potencia, la válvula abre la conexión entre alta presión y cárter. Se igualan las presiones a ambos lados del pistón y el muelle del disco desplaza la inclinación a valor inferior al 2% (alimentación cero o compresor OFF) (pág. 9, 10).
- **Componente mecánico (A - Regulación por baja presión C)**:
  - Si la baja presión (C) es demasiado alta, comprime el elemento sensible interior, permitiendo al empujador separar más la alta presión del cárter para aumentar la capacidad de aspiración del compresor (pág. 11, 12).
  - Si la baja presión (C) es demasiado baja, el elemento se relaja y limita la carrera del empujador, impidiendo la separación total entre alta presión y cárter para reducir la cilindrada (pág. 12).

📷 IMAGEN: Ubicación y vías de presión A (cárter), B (alta presión) y C (baja presión) en la válvula reguladora N280 — Fuente: COMPRESOR__AC.PDF, pág. 7 (pág. 7).
📷 IMAGEN: Posición del empujador de la válvula N280 en régimen de plena carga y en regulación descendente — Fuente: COMPRESOR__AC.PDF, pág. 8 y 9 (pág. 8, 9).

## Valores de trabajo
- Frecuencia de la señal PWM de excitación (E87): 500 Hz (pág. 6).
- Recorrido del empujador en estado flotante: pocas décimas de milímetro (pág. 6).
- Nivel de alimentación en posición de desconexión / OFF: inferior a 2% (pág. 10).
- Caudal impelido a plena carga: 100% (pág. 9).

## Anomalías frecuentes
No documentado en fuentes (pág. 10).

## Comportamiento en avería
En ausencia de señal eléctrica de excitación (sin corriente), la válvula permanece abierta uniendo la alta presión con el cárter, manteniendo el compresor en un nivel de alimentación inferior al 2% (compresor OFF) (pág. 7, 10).

## Cómo comprobarlo
No documentado en fuentes (pág. 10).

## Mantenimiento
No documentado en fuentes (pág. 10).

---

```yaml
tipo: componente
titulo: Polea de impulsión con protección contra sobrecarga
entidad: polea-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Audi
fuente: "COMPRESOR__AC.PDF"
paginas: "11-12"
forma_parte_de: compresor
relacionados: [compresor]
palabras: [dispositivo de sobrecarga, elemento moldeado de goma, grafito, disco de arrastre, deformacion]
```

## Misión
Transmitir el giro de la correa única del motor al eje del compresor y desacoplar mecánicamente el arrastre en caso de bloqueo interno para proteger la correa y evitar la inhabilitación de los grupos auxiliares del motor (pág. 11).

## Tipos y características
- Polea de impulsión sin acoplamiento electromagnético (pág. 11).
- Dispone de un dispositivo de seguridad integrado contra sobrecargas (pág. 11).
- La polea (A) se une al disco de arrastre del compresor (C) mediante un elemento moldeado de goma provisto de una capa de grafito (B) (pág. 11).

## Principio de funcionamiento
- **Funcionamiento normal**: El compresor gira solidario con el motor térmico. Durante la alimentación cero (rendimiento < 2%), el compresor no genera carga sobre la polea (pág. 11, 12).
- **Funcionamiento en sobrecarga (bloqueo)**: Si el compresor se bloquea por avería mecánica, la polea (A) se desplaza a través del elemento de goma con capa de grafito (B) sobre el disco de arrastre bloqueado (C). El disco de arrastre se deforma permanentemente según la temperatura del elemento de goma (caliente o frío), liberando el giro de la polea (pág. 12).

📷 IMAGEN: Detalle de la polea de impulsión (A), el elemento de goma con grafito (B) y el disco de arrastre (C) en estado normal y deformado por sobrecarga — Fuente: COMPRESOR__AC.PDF, pág. 11 y 12 (pág. 11, 12).

## Valores de trabajo
No documentado en fuentes (pág. 12).

## Anomalías frecuentes
Deformación permanente del elemento moldeado de goma o del disco de arrastre tras un episodio de sobrecarga o bloqueo del compresor (pág. 12).

## Comportamiento en avería
Al desacoplarse por sobrecarga, la polea gira libremente sin arrastrar el eje del compresor, evitando que la correa auxiliar se rompa y garantizando que la bomba de refrigerante del motor y el alternador sigan funcionando (pág. 11).

## Cómo comprobarlo
Inspección visual del elemento de goma y del disco de arrastre para verificar si presentan deformación o desplazamiento fuera de alineación (pág. 12).

## Mantenimiento
Si el elemento moldeado de goma o el disco de arrastre están deformados por actuación de la protección de sobrecarga, es obligatorio sustituir el compresor del climatizador completo (pág. 12).

COBERTURA: documento «COMPRESOR__AC.PDF», páginas 3 a 12 de 13. [completo]