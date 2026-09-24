```yaml
tipo: componente
titulo: Ventilador del habitáculo
entidad: ventilador-habitaculo
area: climatizacion
sistema: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "6-10"
relacionados: [unidad-control-climatizador, evaporador, radiador-calefaccion]
palabras: [ventilador, soplador, resistencias en serie, modulo electronico, impulsor]
```

## Misión
Impulsar el aire exterior o reciclado a través del grupo climatizador hacia el habitáculo. (pág. 6)

## Tipos y características
Existen dos tipos de montajes para la regulación de velocidad del motor eléctrico del ventilador:
- Montaje con resistencias en serie.
- Montaje con módulo electrónico. (pág. 6)

📷 IMAGEN: Esquema eléctrico de control de ventilador con resistencias en serie y relé de velocidad máxima — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 8

📷 IMAGEN: Esquema eléctrico de control de ventilador mediante módulo electrónico de transistores — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 9

## Principio de funcionamiento
- Montaje con resistencias en serie: varía la tensión de alimentación aplicada al motor haciéndola pasar por diferentes resistencias fijas. En la posición de máxima velocidad, un relé alimenta directamente el motor a 12 V sin pasar por la red de resistencias.
- Montaje con módulo electrónico: el mando selector dispone de resistencias para que el módulo identifique la posición midiendo la diferencia de tensión entre las vías A y B. El motor trabaja por diferencia de potencial entre bornes: alimentado con 12 V fijos en un borne, el módulo ajusta la tensión aplicada en el otro borne (por ejemplo, 12 V en un borne y 3 V en el otro generan una tensión de trabajo de 9 V). (págs. 7, 10)

## Valores de trabajo
- Tensión nominal de alimentación fija: 12 V. (pág. 10)

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "11"
forma_parte_de: circuito-frigorifico
relacionados: [valvula-expansion, compresor, filtro-deshidratador]
palabras: [evaporador, refrigeracion, condensacion, deshumectacion, bolsa de hielo]
```

## Misión
Enfriar y deshumificar el aire que lo atraviesa antes de enviarlo al habitáculo. (pág. 11)

## Tipos y características
Intercambiador de calor de tubos y aletas integrado en la caja climatizadora. Denominado internamente como la «bolsa de hielo» del sistema. (pág. 11)

📷 IMAGEN: Evaporador de climatización junto a la caja de distribución de aire — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 11

## Principio de funcionamiento
El refrigerante que se evapora en su interior absorbe el calor del aire impulsado por el ventilador. La humedad presente en el aire se condensa sobre sus aletas frías, canalizándose y expulsándose al exterior del vehículo. (pág. 11)

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Radiador de calefacción
entidad: radiador-calefaccion
area: climatizacion
sistema: calefaccion
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "12"
forma_parte_de: circuito-refrigeracion-motor
relacionados: [liquido-refrigerante-motor, servomotor-trampilla]
palabras: [radiador calefaccion, aerotermo, aire caliente, intercambio termico]
```

## Misión
Transferir el calor del líquido refrigerante del motor al flujo de aire que entra al habitáculo. (pág. 12)

## Tipos y características
Intercambiador térmico (aerotermo) montado en el cuerpo de la caja climatizadora a continuación del evaporador. (pág. 12)

📷 IMAGEN: Radiador de calefacción o aerotermo extraído de la caja de aire — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 12

## Principio de funcionamiento
El líquido refrigerante del motor circula de forma continua por su interior. El aire que lo atraviesa absorbe energía térmica. Según esté activado o no el compresor del aire acondicionado, el aire calentado resultará seco o húmedo. (pág. 12)

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Trampilla de recirculación
entidad: servomotor-trampilla
variante: recirculacion
area: climatizacion
sistema: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "13-14"
forma_parte_de: distribucion-aire
relacionados: [ventilador-habitaculo, unidad-control-climatizador]
palabras: [trampilla reciclaje, recirculacion, rele doble paleta, modulo electronico, aire exterior]
```

## Misión
Seleccionar el origen del caudal de aire aspirado por el ventilador, conmutando entre la entrada de aire exterior o el reciclado del aire del habitáculo. (pág. 13)

## Tipos y características
Trampilla orientable accionada mecánicamente (manual) o mediante motor eléctrico. En sistemas eléctricos se emplean principalmente dos tipos de gobierno:
- Gobierno mediante relé de doble paleta.
- Gobierno mediante módulo electrónico. (págs. 13-14)

📷 IMAGEN: Esquema del flujo de aire en caja climatizadora en modo recirculación (aire exterior cerrado) — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 13

📷 IMAGEN: Circuitos de mando de la trampilla de reciclaje mediante relé de doble paleta y por módulo electrónico — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 14

## Principio de funcionamiento
- Con relé de doble paleta: el motor de reciclaje actúa solo en los topes extremos (sin posiciones intermedias). Al seleccionar la posición de aire acondicionado MAX en el mando, se conmuta a masa el relé de doble paleta, cerrando la entrada de aire exterior.
- Con módulo electrónico: el módulo detecta la masa de la paleta en posición 0 o en posición MAX del A/A y acciona el motor por inversión de polaridad para cambiar el flujo. (pág. 14)

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Trampilla de mezcla
entidad: servomotor-trampilla
variante: mezcla
area: climatizacion
sistema: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "15"
forma_parte_de: distribucion-aire
relacionados: [radiador-calefaccion, evaporador]
palabras: [trampilla de mezcla, proporcion aire, caliente frio, cable, paso a paso]
```

## Misión
Regular la proporción de aire frío y caliente canalizado hacia el habitáculo, sustituyendo el uso de grifos de calefacción. (pág. 15)

## Tipos y características
Trampilla deflectora situada entre el evaporador y el radiador de calefacción. Su accionamiento se realiza mediante:
- Cable bowden (mando manual).
- Motor eléctrico de excitación o motor paso a paso (mando electrónico). (págs. 15)

📷 IMAGEN: Esquema de derivación de aire por la trampilla de mezcla hacia el aerotermo o en baipás directo — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 15

## Principio de funcionamiento
Modifica gradualmente su ángulo de apertura para desviar una parte del aire frío (procedente del evaporador) a través del radiador de calefacción y dejar pasar directamente la otra parte, mezclándose ambas corrientes antes de salir al habitáculo. (pág. 15)

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: componente
titulo: Trampillas de repartición de aire
entidad: servomotor-trampilla
variante: distribucion-aire
area: climatizacion
sistema: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "16"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [trampillas reparticion, distribucion aire, difusores, desempañado, aireacion]
```

## Misión
Dirigir la corriente de aire tratada hacia las distintas salidas del habitáculo (parabrisas/desempañado, difusores frontales y zona de pies). (pág. 16)

## Tipos y características
Conjunto de trampillas situadas en los canales de salida de la caja climática. Pueden ser accionadas de forma:
- Manual.
- Neumática.
- Eléctrica. (pág. 16)

📷 IMAGEN: Disposición de las trampillas de distribución dirigiéndose a las salidas de parabrisas, frontal y pies — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 16

## Principio de funcionamiento
Bloquean o liberan el paso de aire en las distintas canalizaciones según la selección del usuario o de la unidad de control, permitiendo salidas individuales o combinadas. (pág. 16)

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: fundamento
titulo: Calentamiento del aire
entidad: calentamiento-aire
area: climatizacion
sistema: calefaccion
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "17"
relacionados: [radiador-calefaccion, servomotor-trampilla, evaporador]
palabras: [calentamiento, aire caliente, compresor off, caudal termico]
```

## Objeto
Aumentar la temperatura del aire destinado al habitáculo mediante la energía térmica del sistema de refrigeración del motor. (pág. 17)

## Fundamento
El aire frío exterior es impulsado a través del evaporador (con el compresor desactivado) y canalizado obligatoriamente por la trampilla de mezcla hacia el radiador de calefacción antes de su distribución. (pág. 17)

## Desarrollo
1. El compresor permanece desconectado (Compresor Off).
2. El aire procedente del exterior atraviesa el evaporador sin sufrir variación de temperatura.
3. La trampilla de mezcla se posiciona cerrando el paso directo y desviando la totalidad del caudal de aire hacia el radiador de calefacción.
4. Al atravesar el radiador de calefacción, el aire incrementa su temperatura y es derivado a los difusores seleccionados. (pág. 17)

📷 IMAGEN: Recorrido del aire durante el modo de calentamiento con compresor desconectado — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 17

## Valores de referencia
- Estado del compresor: Compresor Off. (pág. 17)

## Errores de concepto frecuentes
No documentado en fuentes.

---

```yaml
tipo: fundamento
titulo: Refrigeración del aire
entidad: refrigeracion-aire
area: climatizacion
sistema: circuito-frigorifico
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "18"
relacionados: [evaporador, servomotor-trampilla, radiador-calefaccion]
palabras: [refrigeracion, aire frio, compresor on, humedad habitaculo]
```

## Objeto
Reducir la temperatura y el nivel de humedad del aire que se introduce en el habitáculo. (pág. 18)

## Fundamento
El aire exterior atraviesa el evaporador mientras el circuito frigorífico está en marcha, enfriándose y cediendo su humedad por condensación antes de ser distribuido. (pág. 18)

## Desarrollo
1. El compresor entra en funcionamiento (Compresor On).
2. El aire exterior pasa por el evaporador, donde se enfría y deshumecta.
3. La trampilla de mezcla cierra el paso hacia el radiador de calefacción para evitar recalentar el aire.
4. El aire frío se canaliza directamente hacia las salidas del habitáculo.

Debido a la baja humedad que se alcanza en el interior del habitáculo por el efecto deshumectador del evaporador, se recomienda que los ocupantes ingieran líquidos durante viajes largos. (pág. 18)

📷 IMAGEN: Esquema de flujo de refrigeración de aire con compresor conectado — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 18

## Valores de referencia
- Estado del compresor: Compresor On. (pág. 18)

## Errores de concepto frecuentes
No documentado en fuentes.

---

```yaml
tipo: fundamento
titulo: Refrigeración máxima del aire
entidad: refrigeracion-maxima
area: climatizacion
sistema: circuito-frigorifico
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "19"
relacionados: [servomotor-trampilla, evaporador]
palabras: [refrigeracion maxima, reciclaje, aire acondicionado max, enfriamiento rapido]
```

## Objeto
Conseguir el máximo rendimiento de enfriamiento en el habitáculo en el menor tiempo posible. (pág. 19)

## Fundamento
Se aísla la entrada de aire exterior y se hace recircular de forma continua el aire que ya se encuentra en el habitáculo a través del evaporador activo. (pág. 19)

## Desarrollo
1. La trampilla de recirculación se cierra completamente, bloqueando la entrada de aire exterior.
2. El ventilador aspira el aire directamente del interior del habitáculo.
3. El caudal pasa por el evaporador en funcionamiento (Compresor On) enfriándose de forma progresiva a una temperatura inferior a la del exterior.
4. La trampilla de mezcla mantiene cerrado el paso al radiador de calefacción. (pág. 19)

📷 IMAGEN: Flujo de aire interno en modo de refrigeración máxima con recirculación cerrada — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 19

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
No documentado en fuentes.

---

```yaml
tipo: fundamento
titulo: Desecación del aire y desempañado
entidad: desecacion-y-desempando
area: climatizacion
sistema: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "20"
relacionados: [evaporador, radiador-calefaccion, servomotor-trampilla]
palabras: [desecacion, desempañado, humedad, parabrisas, condensacion]
```

## Objeto
Eliminar el vaho condensado en los cristales del vehículo de forma rápida secando el flujo de aire impulsado. (pág. 20)

## Fundamento
Aprovecha la capacidad del evaporador para condensar la humedad del aire y la capacidad del radiador de calefacción para atemperarlo antes de dirigirlo hacia el parabrisas. (pág. 20)

## Desarrollo
1. Se activa el compresor para enfriar el aire exterior en el evaporador y provocar la condensación de su agua de humedad.
2. El aire ya seco se hace pasar parcialmente por el radiador de calefacción regulando la trampilla de mezcla para aumentar su temperatura.
3. Las trampillas de repartición dirigen todo el caudal seco y caliente hacia la salida del parabrisas.
El uso habitual de la instalación frigorífica en esta función resulta beneficioso para la vida útil de los componentes del circuito frigorífico. (pág. 20)

📷 IMAGEN: Canalización del aire desempañado pasando por el evaporador y el radiador hacia la luna frontal — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 20

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
Creer que el aire acondicionado solo sirve para enfriar en verano. Su función de desecación es esencial para el desempañado en tiempo frío. (pág. 20)

---

```yaml
tipo: fundamento
titulo: Sistemas de regulación de climatización
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "21-23"
relacionados: [unidad-control-climatizador, servomotor-trampilla, ventilador-habitaculo]
palabras: [climatizacion manual, semiautomatica, automatica, confort, oscilaciones temperatura]
```

## Objeto
Gestionar la temperatura y el caudal de aire impulsado para mantener las condiciones de confort en el habitáculo. (pág. 21)

## Fundamento
Evolución de los sistemas de mando según la capacidad de autorregulación del equipo frente a las variaciones térmicas exteriores e interiores. (págs. 21-23)

## Desarrollo
Existen tres niveles de equipamiento:
- Climatizaciones manuales: el usuario reajusta constantemente los mandos mecánicos. Esto genera marcadas oscilaciones en la temperatura real del habitáculo respecto al valor deseado.
- Climatizaciones semi-automáticas: la temperatura se regula de forma automática pero la velocidad o distribución del aire se gestiona manualmente.
- Climatizaciones automáticas: la unidad de control gestiona las trampillas de mezcla, distribución y la velocidad del ventilador. Logra oscilaciones de temperatura muy pequeñas alrededor del consignado de confort (por ejemplo, 21 ºC) y estabiliza el clima en función de la temperatura exterior. (págs. 21-23)

📷 IMAGEN: Gráfica de oscilaciones de temperatura interior en climatización manual frente a la línea de confort — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 22

📷 IMAGEN: Gráfica de estabilización de temperatura en climatización automática entorno a los 21 ºC — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 23

## Valores de referencia
- Temperatura de confort de referencia: 21 ºC. (págs. 22-23)

## Errores de concepto frecuentes
No documentado en fuentes.

---

COBERTURA: documento «5. EL CIRCUITO DE AIRE.pptx», páginas 1 a 23 de 23. [completo]