```yaml
tipo: componente
titulo: Pretensor pirotécnico de cinturón de cinta metálica
entidad: pretensor-cinturon
variante: cinta metalica
area: confort-y-seguridad
sistema: NUEVO-seguridad-pasiva
codigo: N153 / N154
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 2.pdf"
paginas: "14-15"
forma_parte_de: cinturon-seguridad
relacionados: [unidad-control-airbag-j234, limitador-fuerza-cinturon]
palabras: [pretensor pirotécnico, cinta metálica, detonador N153, detonador N154, capa de silicona]
```

## Misión
Reducir la holgura del cinturón de seguridad entre la cinta y el ocupante en caso de colisión mediante la activación de una carga pirotécnica. (pág. 14).

## Tipos y características
Pretensor pirotécnico de cinta metálica montado en el carrete del cinturón inercial delantero para vehículos sin Audi presense basic o plus. Consta de una banda metálica enrollada en el eje del carrete, con sus extremos abiertos fijados al eje y el bucle cerrado envolviendo el detonador (N153 para el conductor y N154 para el acompañante). Las superficies del cuerpo recubiertas de silicona garantizan el sellado de presión durante el despliegue. (págs. 14-15).

## Principio de funcionamiento
Al producirse un impacto, la unidad de control del airbag J234 activa los detonadores N153 o N154. La presión del gas expande el bucle de la banda metálica, lo que tira del eje del retractor haciéndolo girar violentamente para arrollar la cinta del cinturón y eliminar la holgura. La retención finaliza cuando la fuerza ejercida por el cuerpo del ocupante sobre la cinta iguala o supera la fuerza del pretensor. La capa de silicona es desplazada por la banda metálica actuando como junta estanca de presión. (págs. 14-15).

📷 IMAGEN: Esquema del pretensor pirotécnico de cinta metálica, detonador N153/N154 y recubrimiento de silicona — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 14

## Valores de trabajo
No documentado en fuentes. (págs. 14-15).

## Anomalías frecuentes
No documentado en fuentes. (págs. 14-15).

## Comportamiento en avería
No documentado en fuentes. (págs. 14-15).

## Cómo comprobarlo
No documentado en fuentes. (págs. 14-15).

## Mantenimiento
Sustitución obligatoria del conjunto pretensor tras la detonación o activación en un accidente. (pág. 14).

---

```yaml
tipo: componente
titulo: Limitador adaptativo de la fuerza del cinturón
entidad: limitador-fuerza-cinturon
area: confort-y-seguridad
sistema: NUEVO-seguridad-pasiva
codigo: G551 / G552
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 2.pdf"
paginas: "14-15"
forma_parte_de: cinturon-seguridad
relacionados: [pretensor-cinturon, unidad-control-airbag-j234]
palabras: [limitador adaptativo, barra de torsión, detonador G551, detonador G552, elemento desplazable]
```

## Misión
Limitar de forma adaptativa y en dos etapas la fuerza de retención que ejerce la cinta del cinturón sobre el tórax del ocupante durante una colisión, reduciendo las lesiones torácicas. (págs. 14-15).

## Tipos y características
Mecanismo limitador de fuerza de dos etapas integrado en el carrete del cinturón inercial delantero (G551 lado conductor, G552 lado acompañante). Incorpora el eje del carrete diseñado como barra de torsión 1, una barra de torsión 2 secundaria acoplada mediante los piñones 1 y 2, un elemento deslizable de desacoplamiento y un detonador pirotécnico. (págs. 14-15).

## Principio de funcionamiento
- Etapa de alta fuerza (ambas barras acopladas): en la fase inicial del impacto, el retractor se bloquea y las dos barras de torsión giran conjuntamente acopladas por los piñones 1 y 2, ofreciendo una elevada resistencia al desenrollado de la cinta.
- Etapa de baja fuerza (desacoplamiento pirotécnico): según la gravedad del impacto y la posición del asiento, la unidad de control J234 activa el detonador del limitador (G551/G552). La presión del gas desplaza el elemento deslizable, el cual desacopla el piñón 2 y libera la barra de torsión 2. A partir de ese momento, únicamente el eje retractor (barra de torsión 1) opone resistencia al desenrollado, reduciendo la fuerza sobre el ocupante. El sistema no se activa en impactos laterales o traseros. (págs. 14-15).

📷 IMAGEN: Sección del limitador de fuerza adaptativo mostrando las dos barras de torsión, los piñones 1 y 2 y el elemento deslizable — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 15

## Valores de trabajo
Activación pirotécnica coordinada y desfasa por la unidad de control J234 con la función de preatención y el disparo del airbag frontal. (pág. 15).

## Anomalías frecuentes
No documentado en fuentes. (págs. 14-15).

## Comportamiento en avería
No documentado en fuentes. (págs. 14-15).

## Cómo comprobarlo
No documentado en fuentes. (págs. 14-15).

## Mantenimiento
Reemplazo completo de la unidad del cinturón tras un despliegue del detonador del limitador. (págs. 14-15).

---

```yaml
tipo: componente
titulo: Unidad de control del tensor del cinturón de seguridad
entidad: unidad-control-tensor-cinturon
area: confort-y-seguridad
sistema: NUEVO-seguridad-pasiva
codigo: J854 / J855
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 2.pdf"
paginas: "16"
forma_parte_de: cinturon-seguridad
relacionados: [unidad-control-airbag-j234, can-bus-extended]
palabras: [J854, J855, tensor reversible, electromotor, 3 niveles de fuerza, CAN Extended]
```

## Misión
Gobernar de forma electromecánica y reversible la tensión preventiva o de emergencia aplicada sobre los cinturones de seguridad delanteros en vehículos equipados con Audi presense basic o plus. (pág. 16).

## Tipos y características
Unidades de control electrónicas independientes (J854 para el cinturón delantero izquierdo y J855 para el derecho) integradas en el conjunto del cinturón. Se comunican a través del bus CAN Extended e interconectan con la interfaz de diagnosis J533. Gobiernan un motor eléctrico con accionamiento por engranaje, disco de arrastre y dos ganchos de acoplamiento al eje del carrete. (pág. 16).

## Principio de funcionamiento
Las unidades J854 y J855 accionan electromotores que varían la tensión del cinturón en tres niveles de fuerza según la situación de conducción:
1. Fuerza baja: eliminación de la holgura de la cinta.
2. Fuerza media: pretensado parcial preventivo.
3. Fuerza alta: pretensado completo de emergencia.
Al recibir señal de la unidad de control del airbag J234 ante un impacto leve que no requiera detonación pirotécnica, J854 y J855 activan los motores al nivel máximo. Al girar el electromotor, el disco de arrastre extiende dos ganchos que bloquean mecánicamente el eje del carrete para arrollar la cinta; al detenerse o invertir levemente el giro el motor, los ganchos se recogen liberando el eje. (pág. 16).

📷 IMAGEN: Mecanismo del tensor reversible impulsado por motor eléctrico, disco de arrastre y ganchos de acoplamiento — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 16

## Valores de trabajo
Tres niveles programados de fuerza de tensionado: baja (reducción de holgura), media (tensionado parcial) y alta (tensionado completo). (pág. 16).

## Anomalías frecuentes
No documentado en fuentes. (pág. 16).

## Comportamiento en avería
No documentado en fuentes. (pág. 16).

## Cómo comprobarlo
Diagnosis electrónica a través del bus CAN Extended mediante el lector de averías conectado a la interfaz J533. (pág. 16).

## Mantenimiento
No documentado en fuentes. (pág. 16).

---

```yaml
tipo: componente
titulo: Pretensor pirotécnico de cinturón de cremallera y piñón
entidad: pretensor-cinturon
variante: cremallera y pinon
area: confort-y-seguridad
sistema: NUEVO-seguridad-pasiva
codigo: N153 / N154
fabricante: Audi
fuente: "SSP 484 A7 Info y Clima (arrastrado) 2.pdf"
paginas: "16-17"
forma_parte_de: cinturon-seguridad
relacionados: [unidad-control-airbag-j234, unidad-control-tensor-cinturon]
palabras: [pretensor pirotécnico, cremallera y piñón, detonador N153, detonador N154, rueda libre, rodillos]
```

## Misión
Realizar el retensado pirotécnico e irreversible de máxima fuerza en la cinta del cinturón durante colisiones de alta gravedad. (págs. 16-17).

## Tipos y características
Pretensor pirotécnico de diseño mecánico de piñón y cremallera montado en el cinturón delantero en vehículos con Audi presense. Consta de un cilindro con émbolo acoplado a una cremallera, piñones 1 y 2, un anillo exterior de rueda libre con rodillos de enclavamiento y el detonador de encendido (N153 conductor, N154 acompañante). (págs. 16-17).

## Principio de funcionamiento
Al recibir el impulso eléctrico de la unidad de control J234, el detonador (N153 o N154) se infla acumulando presión de gas que desplaza el émbolo con la cremallera hacia arriba. La cremallera hace girar los piñones 1 y 2. El piñón 2 transmite el giro al anillo exterior de la rueda libre; al girar el anillo, los rodillos son empujados hacia el interior hasta quedar acuñados mecánicamente contra el eje del retractor, bloqueando ambos componentes. A partir de ese instante, la fuerza de la cremallera hace girar el eje del carrete arrollando el cinturón hasta que la fuerza opuesta del torso del ocupante supera la presión pirotécnica. (págs. 16-17).

📷 IMAGEN: Despiece y secuencia de activación del pretensor de cremallera y piñón, mostrando el émbolo, los rodillos y el anillo exterior de rueda libre — Fuente: SSP 484 A7 Info y Clima (arrastrado) 2.pdf, pág. 17

## Valores de trabajo
No documentado en fuentes. (págs. 16-17).

## Anomalías frecuentes
No documentado en fuentes. (págs. 16-17).

## Comportamiento en avería
No documentado en fuentes. (págs. 16-17).

## Cómo comprobarlo
No documentado en fuentes. (págs. 16-17).

## Mantenimiento
Sustitución completa del carrete y pretensor tras un disparo pirotécnico en colisión. (págs. 16-17).

COBERTURA: documento «SSP 484 A7 Info y Clima (arrastrado) 2.pdf», páginas 14 a 17 de 17. [completo]