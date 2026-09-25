```yaml
tipo: fundamento
titulo: Dispositivos de soplado y canalización de aire
entidad: distribucion-aire
area: climatizacion
sistema: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "1-5"
relacionados: [ventilador-habitaculo, evaporador, radiador-calefaccion, servomotor-trampilla]
palabras: [canalización, aire exterior, soplado, distribución, habitáculo]
```

## Objeto
Canalizar el aire procedente del exterior para su posterior tratamiento térmico, aislar el habitáculo del exterior mediante la función de reciclado, realizar la mezcla de aire caliente y frío, impulsar el aire canalizado y distribuirlo hacia las diferentes salidas del habitáculo. (pág. 3)

## Fundamento
El circuito de aire constituye la estructura física y aerodinámica que conduce el caudal de aire impulsado a través de los diferentes intercambiadores térmicos (evaporador y radiador de calefacción) y elementos de regulación (trampillas) antes de ser vertido al habitáculo. (pág. 3)

📷 IMAGEN: Esquema general del circuito de aire con ventilador, evaporador, radiador de calefacción y trampillas de reciclaje, mezcla y distribución — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 3

## Desarrollo
El conjunto del circuito se compone de cinco funciones operativas principales:
1. Canalización del aire exterior hacia la entrada del sistema.
2. Aislamiento del habitáculo con respecto al exterior a través de la trampilla de reciclaje.
3. Producción de la mezcla térmica de aire mediante la posición de la trampilla de mezcla entre la vía directa del evaporador y la vía del radiador de calefacción.
4. Impulsión del aire tratado mediante el ventilador o grupo motoventilador (GMV).
5. Distribución direccional del caudal hacia los difusores superiores (desempañado), frontales y de pies a través de las trampillas de repartición.

📷 IMAGEN: Conjunto completo de la caja de climatización con mandos y canalizaciones — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 5
📷 IMAGEN: Distribución del flujo de aire en un conjunto multizona — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 6

(pág. 5)

## Valores de referencia
No documentado en fuentes. (pág. 5)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 5)

---

```yaml
tipo: componente
titulo: Ventilador de habitáculo
entidad: ventilador-habitaculo
area: climatizacion
sistema: distribucion-aire
forma_parte_de: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "6-10"
relacionados: [distribucion-aire, unidad-control-climatizador]
palabras: [impulsor, resistencias en serie, módulo electrónico, diferencia de potencial]
```

## Misión
Impulsar el caudal de aire canalizado hacia el interior del habitáculo a través del circuito de climatización. (pág. 6)

## Tipos y características
Se emplean dos tipos principales de montaje eléctrico para el control de velocidad:
- Montaje con resistencias en serie: regula la velocidad modificando la tensión de alimentación del motor mediante la inserción de resistencias en serie.
- Montaje con módulo electrónico: regula la velocidad de forma continua o escalonada mediante modulación por potenciómetro y transistor de potencia.

📷 IMAGEN: Esquema eléctrico del montaje de ventilador con grupo de resistencias en serie y relé de máxima velocidad — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 8
📷 IMAGEN: Esquema eléctrico del montaje con potenciómetro giratorio R1-R7 y módulo electrónico transistorizado — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 9

(pág. 6)

## Principio de funcionamiento
- En el montaje con resistencias en serie, la corriente atraviesa una combinación de resistencias (R1, R2, R3) para reducir la tensión aplicada al motor en las velocidades intermedias. En la velocidad máxima, un relé específico alimenta el motor de ventilación de forma directa desde la línea de alimentación, sin pasar por ninguna resistencia.
- En el montaje con módulo electrónico, el mando selector dispone de un divisor de tensión compuesto por varias resistencias (R1 a R7). El módulo electrónico detecta la diferencia de tensión entre las vías de entrada A y B para identificar la posición del mando giratorio. El motor funciona bajo diferencia de potencial modulada: el módulo mantiene una tensión fija (ejemplo: 12 V) en uno de los bornes del motor y hace variar la tensión en el otro borne.

(pág. 10)

## Valores de trabajo
- Alimentación del motor en montaje con módulo electrónico: 12 V fija en un borne y tensión variable (ejemplo: 3 V) en el otro borne, proporcionando una diferencia de potencial aplicada al motor de 9 V a la velocidad correspondiente. (pág. 10)

## Anomalías frecuentes
No documentado en fuentes. (pág. 10)

## Comportamiento en avería
No documentado en fuentes. (pág. 10)

## Cómo comprobarlo
No documentado en fuentes. (pág. 10)

## Mantenimiento
No documentado en fuentes. (pág. 10)

---

```yaml
tipo: componente
titulo: Evaporador
entidad: evaporador
area: climatizacion
sistema: circuito-frigorifico
forma_parte_de: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "14-16"
relacionados: [distribucion-aire, radiador-calefaccion]
palabras: [bolsa de hielo, deshumificación, agua condensada]
```

## Misión
Enfriar y deshumificar el aire impulsado hacia el habitáculo ("bolsa de hielo" del sistema). (pág. 14)

## Tipos y características
Intercambiador de calor aire-refrigerante ubicado en la caja de distribución de aire, aguas arriba del radiador de calefacción y de la trampilla de mezcla. (pág. 16)

📷 IMAGEN: Vista del evaporador de climatización junto a la caja de aireación — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 16

## Principio de funcionamiento
Al pasar el aire a través de los paneles del evaporador estando la instalación frigorífica en marcha, cede calor al líquido refrigerante en ebullición. La humedad contenida en el aire se condensa sobre las aletas frías del evaporador, y el agua condensada resultante es canalizada y expulsada al exterior del vehículo. (pág. 15)

## Valores de trabajo
No documentado en fuentes. (pág. 16)

## Anomalías frecuentes
No documentado en fuentes. (pág. 16)

## Comportamiento en avería
No documentado en fuentes. (pág. 16)

## Cómo comprobarlo
No documentado en fuentes. (pág. 16)

## Mantenimiento
Canalización y expulsión continua del agua condensada hacia el exterior del vehículo. (pág. 15)

---

```yaml
tipo: componente
titulo: Radiador de calefacción
entidad: radiador-calefaccion
area: climatizacion
sistema: calefaccion
forma_parte_de: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "17-18"
relacionados: [evaporador, liquido-refrigerante-motor]
palabras: [aerotermo, aire seco, aire húmedo, calentamiento]
```

## Misión
Permitir el calentamiento del aire que se dirige al habitáculo mediante la transferencia de calor desde el líquido refrigerante del motor (aerotermo). (pág. 17)

## Tipos y características
Intercambiador térmico agua-aire integrado en el bloque de distribución del climatizador. El aire calentado a su través puede ser seco o húmedo, según se encuentre o no en funcionamiento el compresor del circuito frigorífico. (pág. 17)

📷 IMAGEN: Radiador de calefacción y su ubicación en la caja del circuito de aire — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 18

## Principio de funcionamiento
El líquido refrigerante caliente procedente del circuito de refrigeración del motor circula por el interior del radiador. Cuando la trampilla de mezcla permite el paso total o parcial del flujo de aire impulsado a través de sus aletas, el aire absorbe calor antes de ser distribuido al habitáculo. (pág. 17)

## Valores de trabajo
No documentado en fuentes. (pág. 18)

## Anomalías frecuentes
No documentado en fuentes. (pág. 18)

## Comportamiento en avería
No documentado en fuentes. (pág. 18)

## Cómo comprobarlo
No documentado en fuentes. (pág. 18)

## Mantenimiento
No documentado en fuentes. (pág. 18)

---

```yaml
tipo: componente
titulo: Trampilla de reciclaje
entidad: servomotor-trampilla
variante: reciclaje
area: climatizacion
sistema: distribucion-aire
forma_parte_de: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "19-28"
relacionados: [recirculacion, distribucion-aire]
palabras: [aire exterior, aire habitáculo, relé doble paleta, inversión de polaridad]
```

## Misión
Seleccionar la procedencia del flujo de aire captado por el sistema, alternando entre la entrada de aire del exterior o la reaspiración (reciclaje) del aire del propio habitáculo. (pág. 19)

## Tipos y características
Su accionamiento puede ser de dos tipos:
- Manual.
- Eléctrico: mediante motor de accionamiento. En los sistemas eléctricos existen dos variantes de gobierno:
  1. Con relé de doble paleta.
  2. Con módulo electrónico.

📷 IMAGEN: Esquema del circuito de aire en posición de reciclaje activado (entrada exterior bloqueada) — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 20
📷 IMAGEN: Esquema eléctrico de mando de reciclaje con relé de doble paleta — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 23
📷 IMAGEN: Esquema eléctrico de mando de reciclaje con módulo electrónico transistorizado — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 22

(pág. 21)

## Principio de funcionamiento
- Montaje con relé de doble paleta: el motor eléctrico de reciclaje se desplaza únicamente entre sus posiciones extremas (abierto/cerrado), sin admitir posiciones intermedias. Únicamente la posición de aire acondicionado "MAX" conecta a masa el relé de doble paleta, excitando su bobina y conmutando las paletas para alimentar el motor e impulsar el cierre de la trampilla exterior.
- Montaje con módulo electrónico: el módulo recibe la señal de mando (conexión a masa o ausencia de ella según la posición 0 de la palanca de ventilación o la posición MAX del A/A). Al detectar esta señal, el módulo pilota el motor de reciclaje invirtiendo la polaridad de alimentación de sus bornes para conmutar la posición.

(pág. 28)

## Valores de trabajo
No documentado en fuentes. (pág. 28)

## Anomalías frecuentes
No documentado en fuentes. (pág. 28)

## Comportamiento en avería
No documentado en fuentes. (pág. 28)

## Cómo comprobarlo
No documentado en fuentes. (pág. 28)

## Mantenimiento
No documentado en fuentes. (pág. 28)

---

```yaml
tipo: componente
titulo: Trampilla de mezcla
entidad: servomotor-trampilla
variante: mezcla
area: climatizacion
sistema: distribucion-aire
forma_parte_de: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "28-30"
relacionados: [radiador-calefaccion, evaporador]
palabras: [grifo de calefacción, mezcla de aire, cable, motor paso a paso]
```

## Misión
Sustituir al antiguo grifo de calefacción y asegurar la mezcla proporcionada de aire caliente y frío antes de su distribución. (pág. 28)

## Tipos y características
Trampilla basculante ubicada entre la salida del evaporador y la entrada del radiador de calefacción. Según el sistema de mando, puede ser activada por:
- Cable mecánico.
- Motor eléctrico paso a paso o de excitación.

📷 IMAGEN: Posicionamiento de la trampilla de mezcla dividiendo el flujo de aire entre el canal directo y el radiador de calefacción — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 29

(pág. 30)

## Principio de funcionamiento
La trampilla regula la proporción de caudal de aire que atraviesa el radiador de calefacción frente a la que lo esquiva por el canal secundario. Al modificar su ángulo, permite obtener de forma continua cualquier grado de temperatura intermedia entre el frío máximo (paso al radiador cerrado) y el calor máximo (todo el aire pasa por el radiador). (pág. 29)

## Valores de trabajo
No documentado en fuentes. (pág. 30)

## Anomalías frecuentes
No documentado en fuentes. (pág. 30)

## Comportamiento en avería
No documentado en fuentes. (pág. 30)

## Cómo comprobarlo
No documentado en fuentes. (pág. 30)

## Mantenimiento
No documentado en fuentes. (pág. 30)

---

```yaml
tipo: componente
titulo: Trampilla de repartición de aire
entidad: servomotor-trampilla
variante: reparticion
area: climatizacion
sistema: distribucion-aire
forma_parte_de: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "30-31"
relacionados: [distribucion-aire]
palabras: [dirección del aire, accionamiento manual, neumático, eléctrico]
```

## Misión
Dirigir el caudal de aire tratado hacia las distintas salidas y difusores del habitáculo (parabrisas, aireadores frontales y zona de pies). (pág. 30)

## Tipos y características
Conjunto de trampillas obturadoras dispuestas en las embocaduras de salida del módulo de distribución. Pueden ser activadas mediante:
- Accionamiento manual.
- Accionamiento neumático.
- Accionamiento eléctrico.

📷 IMAGEN: Disposición de las trampillas de repartición dirigiendo el caudal hacia los canales de desempañado, torso y pies — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 31

(pág. 31)

## Principio de funcionamiento
Mediante la apertura y cierre selectivo de cada una de las paletas de repartición, se fracciona o deriva la totalidad del aire hacia las bocas de salida seleccionadas por los ocupantes o por la unidad de control. (pág. 31)

## Valores de trabajo
No documentado en fuentes. (pág. 31)

## Anomalías frecuentes
No documentado en fuentes. (pág. 31)

## Comportamiento en avería
No documentado en fuentes. (pág. 31)

## Cómo comprobarlo
No documentado en fuentes. (pág. 31)

## Mantenimiento
No documentado en fuentes. (pág. 31)

---

```yaml
tipo: fundamento
titulo: Calentamiento del aire en el circuito
entidad: calentamiento-aire
area: climatizacion
sistema: calefaccion
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "32-34"
relacionados: [radiador-calefaccion, servomotor-trampilla]
palabras: [compresor OFF, radiador de calefacción, aire exterior]
```

## Objeto
Elevar la temperatura del aire captado del exterior antes de ser introducido en el habitáculo para el confort térmico en ambientes fríos. (pág. 32)

## Fundamento
Proceso térmico en el cual se aprovecha el calor disipado por el líquido refrigerante del motor a través del radiador de calefacción, manteniendo desactivada la instalación frigorífica. (pág. 34)

📷 IMAGEN: Flujo de aire en modo calentamiento (compresor OFF, aire atravesando el radiador de calefacción) — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 33

## Desarrollo
En el modo de calentamiento básico del aire:
1. El compresor se encuentra desacoplado (condición: Sin ºC = Compresor OFF).
2. Se aspira aire procedente del exterior.
3. El aire atraviesa el evaporador inactivo sin experimentar enfriamiento ni condensación.
4. La trampilla de mezcla se posiciona de modo que obliga a pasar la totalidad o parte del caudal a través del radiador de calefacción, donde se calienta.
5. Las trampillas de repartición dirigen el aire caliente hacia las zonas seleccionadas.

(pág. 34)

## Valores de referencia
- Estado del compresor: Compresor OFF (Sin ºC). (pág. 34)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 34)

---

```yaml
tipo: fundamento
titulo: Refrigeración del aire en el circuito
entidad: refrigeracion-aire
area: climatizacion
sistema: circuito-frigorifico
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "34-36"
relacionados: [evaporador, servomotor-trampilla]
palabras: [compresor ON, deshumificación, confort, humedad]
```

## Objeto
Reducir la temperatura y el grado de humedad del aire introducido al habitáculo. (pág. 34)

## Fundamento
Intercambio térmico producido al hacer pasar el aire aspirado a través del evaporador mientras el circuito frigorífico se encuentra activo. (pág. 36)

📷 IMAGEN: Flujo de aire en modo refrigeración estándar (compresor ON, paso directo por evaporador) — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 35

## Desarrollo
Durante el funcionamiento en modo de refrigeración normal:
1. El compresor permanece acoplado y funcionando (condición: Con ºC = Compresor ON).
2. Se capta aire fresco del exterior.
3. El aire atraviesa el evaporador, cediendo calor al refrigerante y perdiendo humedad por condensación en las aletas.
4. La trampilla de mezcla cierra o limita el paso hacia el radiador de calefacción.
5. El aire frío y deshumificado se distribuye al habitáculo.

Debido a la baja humedad relativa que se alcanza en el aire del habitáculo durante el funcionamiento continuado de la refrigeración, es aconsejable que los ocupantes beban líquidos en desplazamientos o trayectos largos. (pág. 36)

## Valores de referencia
- Estado del compresor: Compresor ON (Con ºC). (pág. 36)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 36)

---

```yaml
tipo: fundamento
titulo: Refrigeración máxima del aire
entidad: refrigeracion-maxima
area: climatizacion
sistema: circuito-frigorifico
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "36-38"
relacionados: [recirculacion, evaporador]
palabras: [reciclaje activo, reaspiración habitáculo, enfriamiento rápido]
```

## Objeto
Conseguir el enfriamiento más rápido y acusado del aire del habitáculo en un periodo de tiempo mínimo. (pág. 36)

## Fundamento
Recirculación cerrada del aire del propio habitáculo a través del evaporador activo, anulando la entrada de aire exterior relativamente caliente. (pág. 38)

📷 IMAGEN: Flujo de aire en refrigeración máxima con reciclaje activo y paso continuo por evaporador — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 37

## Desarrollo
Para obtener la máxima capacidad frigorífica:
1. La trampilla de reciclaje se cierra totalmente a la entrada de aire exterior y abre el paso de reaspiración del habitáculo.
2. El compresor funciona a pleno rendimiento (Compresor ON).
3. El aire, que ya ha sido previamente enfriado dentro del habitáculo, vuelve a pasar por el evaporador, bajando aún más su temperatura de forma progresiva.
4. La trampilla de mezcla bloquea por completo el paso de aire hacia el radiador de calefacción.

(pág. 38)

## Valores de referencia
No documentado en fuentes. (pág. 38)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 38)

---

```yaml
tipo: fundamento
titulo: Desecación del aire y desempañado de cristales
entidad: desempanado-aire
area: climatizacion
sistema: distribucion-aire
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "38-40"
relacionados: [evaporador, radiador-calefaccion]
palabras: [deshumectación, condensación, recalentamiento, desempañado]
```

## Objeto
Eliminar el empañamiento de las lunas y parabrisas mediante la aportación de un caudal de aire caliente y extremadamente seco. (pág. 38)

## Fundamento
Tratamiento termohigrométrico en dos etapas consecutivas: deshumectación por frío en el evaporador seguida de recalentamiento en el radiador de calefacción. (pág. 40)

📷 IMAGEN: Recorrido del aire en función desempañado atravesando primero el evaporador para deshumificarse y después el radiador de calefacción — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 39

## Desarrollo
El procedimiento físico de desecación y desempañado consta de los siguientes pasos:
1. Se capta aire exterior con humedad ambiental.
2. El aire pasa primeramente por el evaporador con la instalación frigorífica en marcha (compresor ON); la brusca bajada de temperatura provoca la condensación y extracción de la humedad contenida en el aire.
3. El aire, ya seco pero frío, es conducido a continuación por la trampilla de mezcla hacia el radiador de calefacción.
4. En el radiador de calefacción, el aire seco se recalienta, aumentando su capacidad para absorber humedad.
5. Las trampillas de repartición orientan este flujo de aire seco y caliente directamente hacia el parabrisas y cristales laterales para disolver la condensación.

Este uso periódico del circuito frigorífico repercute positivamente en la vida útil y mantenimiento de la propia instalación frigorífica. (pág. 40)

## Valores de referencia
No documentado en fuentes. (pág. 40)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 40)

---

```yaml
tipo: fundamento
titulo: Regulación de temperatura: climatización manual y automática
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "5. EL CIRCUITO DE AIRE.pptx"
paginas: "40-47"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [manual, semi-automática, automática, oscilaciones de temperatura, nivel de confort]
```

## Objeto
Mantener las condiciones térmicas del habitáculo ajustadas al nivel de confort deseado por los usuarios. (pág. 40)

## Fundamento
Control y ajuste del reparto y mezcla de aire en función del tipo de sistema de regulación equipado en el vehículo. (pág. 43)

📷 IMAGEN: Gráfica de oscilaciones de temperatura en el habitáculo respecto a la consigna de confort en un sistema manual — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 41
📷 IMAGEN: Gráfica de estabilización precisa de la temperatura del habitáculo en un sistema de climatización automática — Fuente: 5. EL CIRCUITO DE AIRE.pptx, pág. 42

## Desarrollo
En función del nivel de equipamiento, se distinguen tres realizaciones de climatización:
1. Climatizaciones manuales.
2. Climatizaciones semi-automáticas.
3. Climatizaciones automáticas.

Diferencias de comportamiento en la regulación de la temperatura:
- Climatización Manual: El usuario busca el confort actuando manualmente sobre los mandos. Esta intervención continua provoca acusadas oscilaciones de la temperatura del habitáculo por encima y por debajo del valor de confort deseado (ejemplo: 21 ºC).
- Climatización Automática: La unidad de control ajusta continuamente los actuadores, logrando oscilaciones de temperatura muy pequeñas, cercanas a la consigna de los pasajeros (21 ºC), y una rápida estabilización en función de las variaciones de la temperatura exterior.

(pág. 47)

## Valores de referencia
- Temperatura de consigna de confort típica: 21 ºC. (pág. 41)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 47)

---

COBERTURA: documento «5. EL CIRCUITO DE AIRE.pptx», páginas 1 a 22 de 22. completo