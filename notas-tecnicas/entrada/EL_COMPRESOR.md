```yaml
tipo: componente
titulo: Compresor
entidad: compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "1-4"
forma_parte_de: ciclo-frigorifico
relacionados: [condensador, evaporador, embrague-compresor, ciclo-frigorifico]
palabras: [volumétrico, entalpía, rendimiento volumétrico, PMI, PMS, volumen aspirado]
```

## Misión
Aspira el fluido refrigerante en forma de vapor a baja presión y temperatura procedente del evaporador y lo impulsa hacia el condensador en forma de vapor a alta presión y temperatura (pág. 1).

## Tipos y características
- Compresor de tipo volumétrico fijado directamente sobre el bloque motor y accionado por la correa auxiliar (pág. 1, 2).
- Clasificación de compresores volumétricos: alternativos (pistones con biela-manivela, pistones tipo revólver), rotativos (de paletas) y pseudo-rotativos (de espirales o scroll) (pág. 2).
- Su característica principal es su cilindrada (pág. 2).

## Principio de funcionamiento
- Transforma la energía mecánica suministrada por el motor mediante la correa del alternador, aportando entalpía al fluido frigorífico para aumentar su presión y temperatura (pág. 1, 2).
- En compresores alternativos comprende cuatro fases:
  1. Aspiración: entra gas frigorífico a presión constante con la válvula de aspiración abierta (pág. 3).
  2. Compresión: con ambas válvulas cerradas, el gas se comprime desde la presión de aspiración P1 a la de impulsión P2 (pág. 3).
  3. Impulsión: al alcanzar P2 se abre la válvula de descarga y se expulsa el gas en el Punto Muerto Superior (PMS) (pág. 3).
  4. Expansión: el gas atrapado en el espacio muerto (volumen V0) se expande al retornar el pistón hacia el Punto Muerto Inferior (PMI) hasta alcanzar de nuevo la presión P1 (pág. 3, 4).
- Rendimiento volumétrico: relación Va / Vg entre el volumen aspirado real (Va) y el volumen generado por la carrera del pistón (Vg) (pág. 4).
- Expresión de cálculo de la cilindrada: C = D · l · n (siendo D el diámetro del cilindro, l la carrera del pistón y n el número de cilindros) o C = n · Vg (pág. 4).

📷 IMAGEN: Diagrama de Mollier (presión frente a entalpía) representando el proceso de compresión del fluido — Fuente: EL COMPRESOR.PDF, pág. 1 (pág. 1).
📷 IMAGEN: Gráfica p-V del ciclo de compresión alternativo indicando PMI, PMS, P1, P2, P3, volumen de espacio muerto V0, volumen generado Vg y volumen aspirado Va — Fuente: EL COMPRESOR.PDF, pág. 3 (pág. 3).

## Valores de trabajo
No documentado en fuentes (pág. 4).

## Anomalías frecuentes
No documentado en fuentes (pág. 4).

## Comportamiento en avería
Si se rompe el soporte del compresor debido a un montaje incorrecto sobre el bloque motor, las consecuencias para el vehículo pueden ser muy graves (pág. 1).

## Cómo comprobarlo
No documentado en fuentes (pág. 4).

## Mantenimiento
Asegurar el montaje y apriete correcto de los soportes de fijación sobre el bloque motor (pág. 1).

---

```yaml
tipo: componente
titulo: Compresor alternativo de biela-manivela
entidad: compresor
variante: biela-manivela
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "4"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor]
palabras: [cilindro, biela, manivela, rendimiento volumétrico, vibraciones]
```

## Misión
Comprimir el fluido refrigerante mediante el movimiento alternativo de un pistón accionado por un mecanismo convencional de biela y manivela (pág. 4).

## Tipos y características
- Constituido por un cilindro con pistón interior, biela, manivela y toberas de aspiración y descarga equipadas con válvulas automáticas (pág. 4).
- La tubería de descarga es de menor diámetro que la de aspiración debido a que el refrigerante a alta presión requiere una menor sección de paso (pág. 4).

## Principio de funcionamiento
El movimiento giratorio de la manivela se transforma en desplazamiento lineal del pistón a través de la biela, abriendo y cerrando las válvulas automáticas según la diferencia de presión en las toberas (pág. 4).

## Valores de trabajo
Rendimiento volumétrico elevado: entre el 80% y el 90% (considerando pérdidas de llenado y fugas) (pág. 4).

## Anomalías frecuentes
Genera un nivel elevado de vibraciones durante su funcionamiento (pág. 4).

## Comportamiento en avería
No documentado en fuentes (pág. 4).

## Cómo comprobarlo
No documentado en fuentes (pág. 4).

## Mantenimiento
No documentado en fuentes (pág. 4).

---

```yaml
tipo: componente
titulo: Compresor de cilindrada fija
entidad: compresor
variante: cilindrada-fija
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "4-5"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor, embrague-compresor, sensor-evaporador]
palabras: [revólver, plato oscilante, cigüeñal, congelación, pérdida de potencia]
```

## Misión
Comprimir un volumen constante de fluido frigorífico en cada rotación del eje para refrigerar el habitáculo (pág. 5).

## Tipos y características
- Compresor alternativo de pistones tipo revólver (pág. 4, 5).
- Dispone de un cigüeñal en forma de plato oscilante inclinado que no puede modificar su ángulo respecto al árbol del compresor (pág. 5).
- La unión entre las varillas de los pistones y el plato oscilante se realiza mediante rótulas (pág. 5).

## Principio de funcionamiento
- Transforma el movimiento rotativo del eje en movimiento alternativo de los pistones mediante el plato oscilante inclinado de ángulo fijo (pág. 4, 5).
- La cantidad de frío se regula acoplando y desacoplando la bobina del embrague electromagnético mediante la señal de un sensor de temperatura situado a la salida del aire del evaporador (pág. 5).
- La desconexión se efectúa cuando la temperatura del aire en el evaporador baja lo suficiente como para correr riesgo de formación de hielo (pág. 5).

## Valores de trabajo
No documentado en fuentes (pág. 5).

## Anomalías frecuentes
Caída brusca de la potencia del motor del vehículo al acoplar el compresor, perjudicando el confort de marcha (pág. 5).

## Comportamiento en avería
Consumo de potencia del motor superior al realmente requerido por las necesidades térmicas del habitáculo (pág. 5).

## Cómo comprobarlo
No documentado en fuentes (pág. 5).

## Mantenimiento
No documentado en fuentes (pág. 5).

---

```yaml
tipo: componente
titulo: Compresor de cilindrada variable
entidad: compresor
variante: cilindrada-variable
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "5-6"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor, evaporador]
palabras: [plato oscilante, cárter, válvula de control, presión de evaporación, confort]
```

## Misión
Ajustar automáticamente la cilindrada y el flujo de refrigerante en circulación según la carga térmica del vehículo (pág. 5, 6).

## Tipos y características
- Compresor alternativo tipo revólver con plato oscilante articulado que puede variar su ángulo de inclinación respecto al árbol (pág. 5).
- Se regula por sí mismo, eliminando la necesidad de la sonda de temperatura a la salida del evaporador (pág. 5, 6).

## Principio de funcionamiento
- La inclinación del plato oscilante depende de la presión del cárter. Un orificio calibrado inyecta gas comprimido de forma continua hacia el cárter (pág. 6).
- Una válvula de control equilibra las presiones de aspiración, salida y cárter (pág. 6):
  - Alta carga térmica: la presión de evaporación sube por encima del punto de regulación de la válvula (2 bar efectivos). La válvula comunica la aspiración con el cuerpo del compresor, anulando la presión diferencial y posicionando el plato en inclinación y carrera máxima (pág. 6).
  - Baja carga térmica: la presión de succión desciende de 2 bar efectivos. La válvula abre paso entre la descarga y el cuerpo del compresor, aumentando la presión en el cárter y reduciendo la inclinación del plato y la cilindrada (pág. 6).

## Valores de trabajo
Punto de regulación de la válvula de control: 2 bar efectivos (pág. 6).

## Anomalías frecuentes
No documentado en fuentes (pág. 6).

## Comportamiento en avería
No documentado en fuentes (pág. 6).

## Cómo comprobarlo
No documentado en fuentes (pág. 6).

## Mantenimiento
Ofrece ventajas de conservación para el equipo: reducción del consumo de combustible, temperatura lineal en difusores, deshumidificación constante y menor desgaste del compresor, embrague electromagnético, correa auxiliar y rodamientos (pág. 6, 7).

---

```yaml
tipo: componente
titulo: Compresor de paletas
entidad: compresor
variante: paletas
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "7"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor]
palabras: [rotativo, estátor, fuerza centrífuga, rotor centrado, rotor excéntrico]
```

## Misión
Comprimir el fluido frigorífico reduciendo progresivamente el espacio de las cámaras delimitadas entre las paletas y la pared del estátor (pág. 7).

## Tipos y características
- Compresor de tipo rotativo clasificado en dos configuraciones:
  - Rotor centrado y estátor de sección ovalada (pág. 7).
  - Rotor excéntrico y estátor de sección circular (pág. 7).
- Dispone de ranuras en oposición en el núcleo para el alojamiento de las paletas (pág. 7).

## Principio de funcionamiento
Al girar el rotor a gran velocidad, la fuerza centrífuga desplaza las paletas hacia el exterior contra el estátor, garantizando la estanqueidad por contacto. La excentricidad del núcleo hace que las paletas entren y salgan tangencialmente, reduciendo el volumen del gas atrapado para comprimirlo (pág. 7).

## Valores de trabajo
Rendimiento volumétrico: del 75% al 90% (pág. 7).

## Anomalías frecuentes
Pérdidas de rendimiento volumétrico provocadas por las holguras existentes entre las paletas y el cuerpo cilíndrico (pág. 7).

## Comportamiento en avería
No documentado en fuentes (pág. 7).

## Cómo comprobarlo
No documentado en fuentes (pág. 7).

## Mantenimiento
No documentado en fuentes (pág. 7).

---

```yaml
tipo: componente
titulo: Compresor de espirales
entidad: compresor
variante: espirales
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "7"
forma_parte_de: ciclo-frigorifico
relacionados: [compresor]
palabras: [scroll, pseudo rotativo, espiral móvil, espiral fija, vehículos eléctricos]
```

## Misión
Comprimir el fluido frigorífico mediante la rotación orbital de una espiral sobre otra (pág. 7).

## Tipos y características
- Compresor de tipo pseudo-rotativo (skroll) (pág. 7).
- Utilizado fundamentalmente en vehículos de propulsión eléctrica e instalaciones industriales (pág. 7).

## Principio de funcionamiento
Se basa en la rotación de una espiral móvil respecto de una espiral fija, reduciendo las bolsas de gas formadas entre ambas (pág. 7).

## Valores de trabajo
No documentado en fuentes (pág. 7).

## Anomalías frecuentes
No documentado en fuentes (pág. 7).

## Comportamiento en avería
No documentado en fuentes (pág. 7).

## Cómo comprobarlo
No documentado en fuentes (pág. 7).

## Mantenimiento
No documentado en fuentes (pág. 7).

---

```yaml
tipo: componente
titulo: Embrague electromagnético del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "8-10"
forma_parte_de: compresor
relacionados: [compresor]
palabras: [electroimán, polea, disco, ballestas, bobina, campo magnético]
```

## Misión
Permitir la conexión y desconexión mecánica entre el motor del vehículo y el compresor a voluntad del conductor o de forma automática (pág. 8).

## Tipos y características
Despiece del conjunto (pág. 8, 9):
1. Disco del embrague electromagnético.
2. Remaches de fijación de ballesta.
3. Ballestas o láminas de fijación del disco al cubo (mantienen la distancia en reposo y reducen la carga dinámica en la conexión).
4. Cubo cónico sujeto al eje del compresor mediante chaveta.
5. Placas soporte del electroimán fijadas al compresor.
6. Cojinete de doble rodamiento de bolas de la polea.
7. Bobina del electroimán.
8. Polea de 2 canales.

## Principio de funcionamiento
- Desconexión: la correa hace girar la polea de forma continua sobre su rodamiento sin transmitir movimiento al eje del compresor (pág. 9).
- Conexión: la corriente eléctrica circula por la bobina generando un campo magnético que atrae el disco metálico contra la cara de la polea, venciendo las láminas elásticas y transmitiendo el giro al compresor (pág. 9).
- Un relé de control interrumpe la alimentación de la bobina ante riesgo de avería (congelación en evaporador o sobrepresión en el circuito) (pág. 10).

📷 IMAGEN: Sección numerada del embrague electromagnético mostrando el plato, remaches, ballestas, cubo, rodamiento, bobina y polea — Fuente: EL COMPRESOR.PDF, pág. 9 (pág. 9).
📷 IMAGEN: Esquema del funcionamiento del embrague electromagnético en posición desembragada (sin corriente) y embragada (con corriente) — Fuente: EL COMPRESOR.PDF, pág. 10 (pág. 10).

## Valores de trabajo
No documentado en fuentes (pág. 10).

## Anomalías frecuentes
No documentado en fuentes (pág. 10).

## Comportamiento en avería
Desconexión automática por los relés de protección ante temperaturas de congelación en el evaporador o picos de alta presión en el circuito (pág. 10).

## Cómo comprobarlo
No documentado en fuentes (pág. 10).

## Mantenimiento
No documentado en fuentes (pág. 10).

---

```yaml
tipo: fundamento
titulo: Lubricación del compresor
entidad: lubricacion-compresor
area: climatizacion
sistema: circuito-frigorifico
fabricante: Valeo
fuente: "EL COMPRESOR.PDF"
paginas: "11-12"
relacionados: [compresor, refrigerante-r134a, aceite-frigorifico]
palabras: [barboteo, presión de aspiración, biela, muñequilla, nebulización, cámara lateral]
```

## Objeto
Garantizar el engrase de las piezas móviles del compresor y la lubricación de las válvulas del circuito cerrado mediante aceite mezclado con el refrigerante (pág. 11, 12).

## Fundamento
La lubricación se realiza mediante una combinación de presión de aspiración interna y barboteo de aceite provocado por el movimiento del cigüeñal (pág. 11).

## Desarrollo
- **Engrase interno en compresores alternativos**:
  1. El giro del cigüeñal causa el barboteo que lubrica los cojinetes anterior y posterior (pág. 11).
  2. En el PMI, la presión de aspiración introduce el aceite del cárter en el orificio del resalte de la biela (pág. 11).
  3. El aceite asciende por la canalización interna de la biela, lubrica la muñequilla y alcanza el bulón del pistón (pág. 11, 12).
  4. Al subir el pistón al PMS, el aceite se escurre lateralmente lubricando las paredes del cilindro (pág. 12).
- **Circulación y separación en el circuito**:
  - Parte del aceite pasa los aros del pistón, se nebuliza con el refrigerante a alta presión y recorre las tuberías lubricando las válvulas del sistema (pág. 12).
  - Al retornar a baja presión, la mezcla penetra en una cámara lateral del compresor, donde el aceite se separa del gas por gravedad y vuelve al cárter por un orificio inferior (pág. 12).
- **Precauciones de mantenimiento**: Utilizar lubricante incongelable. En reposo (20-25 ºC), el circuito se encuentra a una presión de 5 a 6 bar; no deben retirarse los tapones de nivel sin vaciar previamente el refrigerante para evitar la salida violenta a presión (pág. 12).

## Valores de referencia
- Presión interna en reposo (a 20-25 ºC): 5 a 6 bar (pág. 12).
- Niveles de referencia del compresor: nivel para compresor nuevo, nivel máximo de funcionamiento y nivel mínimo de funcionamiento (pág. 12).

## Errores de concepto frecuentes
Aflojar o retirar los tapones de nivel de aceite del compresor sin evacuar previamente la carga de gas del circuito frigorífico (pág. 12).

COBERTURA: documento «EL COMPRESOR.PDF», páginas 1 a 12 de 12. [completo]