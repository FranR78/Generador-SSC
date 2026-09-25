```yaml
tipo: componente
titulo: Compresor alternativo de pistones de cilindrada variable
entidad: compresor
variante: plato-oscilante-variable
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "54-61"
forma_parte_de: circuito-frigorifico
relacionados: [embrague-compresor, valvula-reguladora-compresor]
palabras: [cilindrada variable, plato oscilante, presión de cárter, PMI variable, carrera de pistón]
```

## Misión
Comprimir e impulsar el fluido frigorífico adaptando automáticamente el caudal bombeado a las necesidades térmicas del habitáculo, eliminando los golpes de acoplamiento del motor. (págs. 54-55)

## Tipos y características
Compresor alternativo volumétrico de disco de arrastre y plato oscilante de ángulo de inclinación variable (entre un 5% y un 100%). Consta de un cuerpo cilíndrico de aluminio con un número de cilindros comprendido entre 5 y 10. (págs. 55-57, 61)

## Principio de funcionamiento
El árbol de accionamiento hace girar un casquillo solidario a un disco de arrastre articulado. La inclinación del plato oscilante depende del equilibrio de fuerzas entre la presión de baja que empuja los pistones (\\(P_b\\)) y la presión interna del cárter del compresor (\\(P_i\\)). El punto muerto superior (PMS) de los pistones permanece fijo en la placa portaválvulas, mientras que el punto muerto inferior (PMI) adopta una posición variable según el ángulo de inclinación del plato, modificando la carrera útil. (págs. 56-58)

📷 IMAGEN: Variación de la inclinación del plato oscilante y de la carrera útil del pistón según la presión interna — Fuente: LA CLIMATIZACIÓN.pdf, pág. 57

## Valores de trabajo
- Margen de variación de la cilindrada: del 5% al 100% de la carrera útil de los pistones. (pág. 61)
- Ejemplo de carrera y ángulo: cilindrada total de 80 cm³, carrera útil de 15 mm con ángulo del plato a 10º. (pág. 58)

## Anomalías frecuentes
Bloqueo de la válvula de regulación o fugas de gas por los segmentos hacia la cámara del cárter. (págs. 58, 61-65)

## Comportamiento en avería
El compresor queda bloqueado en su cilindrada mínima (falta de rendimiento frigorífico) o en su cilindrada máxima (riesgo de congelación del evaporador). (págs. 61-65)

## Cómo comprobarlo
Medir las presiones en los lados de alta y baja presión y evaluar la corriente de control enviada a la válvula de regulación. (págs. 61-65)

## Mantenimiento
Asegurar el empleo exclusivo del aceite sintético especificado para mantener la movilidad del mecanismo articulado del plato oscilante. (pág. 66)

---

```yaml
tipo: componente
titulo: Válvula de regulación interna de cilindrada
entidad: valvula-reguladora-compresor
variante: interna
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "61-65"
forma_parte_de: compresor
relacionados: [compresor]
palabras: [válvula de regulación, cápsula elástica, presión de baja, presión de cárter, vástago y bola]
```

## Misión
Gobernar la presión en el interior del cárter del compresor (\\(P_i\\)) en respuesta a las variaciones de la presión de baja (\\(P_b\\)) para ajustar mecánicamente la inclinación del plato oscilante. (págs. 61-62)

## Tipos y características
Válvula de regulación neumática/mecánica integrada en la culata posterior del compresor, alojada en posición central entre los cilindros. (pág. 62)

## Principio de funcionamiento
Consta de una cápsula elástica sensible a la baja presión, un vástago de empuje, una bola con muelle y un canal de comunicación. 
- **Aumento de demanda térmica (\\(P_b\\) elevada):** La elevada presión de baja comprime la cápsula elástica, desplazando el vástago y la bola para abrir la descarga del cárter hacia la aspiración. La presión \\(P_i\\) desciende, vence la fuerza de los pistones y el plato oscilante se inclina al máximo (mayor carrera y caudal). (pág. 63)
- **Descenso de demanda térmica (\\(P_b\\) reducida):** La baja presión desciende y la cápsula elástica se dilata, permitiendo que la bola cierre el paso de descarga. Las fugas continuas de soplado de los pistones elevan la presión interna \\(P_i\\), la cual empuja la cara posterior de los pistones reduciendo la inclinación del plato oscilante (menor carrera y caudal). (págs. 64-65)

📷 IMAGEN: Sección interna de la válvula de regulación con indicación de la cápsula elástica, vástago, bola y pasajes de gas — Fuente: LA CLIMATIZACIÓN.pdf, pág. 62

## Valores de trabajo
- Relación de presiones en equilibrio de regulación: \\(P_i > P_b\\) durante el funcionamiento normal. (pág. 58)

## Anomalías frecuentes
Deformación permanente de la cápsula elástica o agarrotamiento del vástago por contaminación con humedad o partículas metálicas. (págs. 62-65)

## Comportamiento en avería
Incapacidad del compresor para adaptar el caudal de gas, provocando falta de enfriamiento a alto régimen o sobrepresión en baja. (págs. 63-65)

## Cómo comprobarlo
Analizar la respuesta de la presión de baja al incrementar la velocidad del ventilador del habitáculo o cambiar la consigna de temperatura. (págs. 63-65)

## Mantenimiento
No documentado en fuentes en las páginas 61-65.

---

```yaml
tipo: fluido
titulo: Aceite lubricante para máquina frigorífica
entidad: aceite-frigorifico
area: climatizacion
sistema: fluidos-frigorificos
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "66-70"
relacionados: [refrigerante-r134a, compresor]
palabras: [aceite sintético, lubricación, PAG, POE, higroscopicidad, reparto de aceite]
```

## Designación y norma
Aceite sintético especial para circuitos de climatización con fluido R134a (aceites tipo PAG o POE). (págs. 66-67)

## Propiedades
- Total miscibilidad y solubilidad con el fluido frigorífico R134a en todo el margen de temperaturas de servicio. (pág. 67)
- Elevada higroscopicidad (alta capacidad para absorber la humedad del aire ambiente). (pág. 69)
- Alta estabilidad viscosimétrica y térmica sin descomposición química en presencia de gas presurizado. (págs. 66-67)

## Dónde se usa y cantidades
Circula por todo el circuito frigorífico disuelto en el refrigerante para engrasar las partes móviles del compresor y de la válvula de expansión. Reparto porcentual del aceite en reposo: compresor (aprox. 50%), evaporador (aprox. 20%), condensador (aprox. 15%), depósito acumulador/deshidratador (aprox. 10%) y tuberías flexibles (aprox. 5%). (págs. 66-68)

## Compatibilidades y mezclas prohibidas
Incompatible con el agente R12 y con aceites minerales tradicionales. Prohibido mezclar aceites sintéticos de R134a con aceites minerales. (pág. 67)

## Identificación
Líquido viscoso incoloro o ligeramente amarillento, suministrado en envases metálicos herméticos. (págs. 67, 69)

## Manipulación, almacenamiento y residuos
Conservar los recipientes cerrados herméticamente y abrirlos únicamente justo antes del llenado para evitar la absorción de humedad atmosférica. Recoger el aceite extraído en recipientes específicos y gestionarlo como residuo contaminante, sin mezclar con aceites usados de motor o frenos. (págs. 69-70)

## Riesgos y normativa
Sustancia química contaminante sujeta a normativas sobre recogida y tratamiento de residuos de taller. (pág. 70)

---

```yaml
tipo: componente
titulo: Acoplamiento electromagnético del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "70-73"
forma_parte_de: compresor
relacionados: [compresor]
palabras: [polea, electrobobina, disco de arrastre, entrehierro, fleje elástico]
```

## Misión
Transmitir mecánicamente el movimiento de rotación desde la correa de accesorios del motor hacia el árbol de accionamiento del compresor al activar el climatizador. (págs. 70-71)

## Tipos y características
Embrague de fricción seco de accionamiento electromagnético. Consta de una polea montada sobre rodamiento de bolas, una electrobobina anular fija a la carcasa y un disco de arrastre unido al eje mediante flejes elásticos. (págs. 71-72)

## Principio de funcionamiento
Con el climatizador desactivado, la polea gira libremente arrastrada por la correa sin transmitir movimiento al eje. Al aplicar tensión a la electrobobina, la corriente crea un campo magnético que atrae el disco de arrastre venciendo la fuerza de los flejes elásticos, adosándolo contra la cara frontal de la polea para girar solidariamente con ella. Al cortar la corriente, el campo desaparece y los flejes retiran el disco de la polea. (págs. 71-73)

📷 IMAGEN: Despiece del acoplamiento electromagnético con la polea, bobina magnética y disco de arrastre de flejes — Fuente: LA CLIMATIZACIÓN.pdf, pág. 71

## Valores de trabajo
- Distancia de entrehierro en reposo: separación calibrada de precisión entre la cara de la polea y el disco de arrastre. (pág. 72)

## Anomalías frecuentes
Desgaste del disco de fricción, deformación de los flejes elásticos o interrupción en el devanado de la electrobobina por sobrecalentamiento. (págs. 71-73)

## Comportamiento en avería
Patinado de la polea con emisión de ruidos y olores de quemado, o falta de acoplamiento del compresor. (págs. 72-73)

## Cómo comprobarlo
Medir la resistencia eléctrica de la bobina electromagnética con multímetro y verificar la separación del entrehierro mediante galgas de espesor. (págs. 71-73)

## Mantenimiento
Ajustar la separación del entrehierro modificando el espesor del paquete de arandelas de reglaje intercaladas en el eje. (págs. 71-72)

---

```yaml
tipo: componente
titulo: Depósito acumulador, filtro y deshidratador
entidad: filtro-deshidratador
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "74-77"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, valvula-expansion]
palabras: [filtro deshidratador, silicagel, lana de vidrio, amortiguación, decantador, mirilla de cristal]
```

## Misión
Almacenar la reserva de refrigerante líquido, filtrar impurezas sólidas, absorber químicamente la humedad del circuito y amortiguar los golpes de presión del compresor. (págs. 74-77)

## Tipos y características
Depósito cilíndrico metálico instalado en la tubería de alta presión entre el condensador y la válvula de expansión. Su interior dispone de un lecho deshidratador de silicagel y una malla de lana de vidrio. (págs. 75-76)

## Principio de funcionamiento
El líquido saliente del condensador entra a la cámara superior. La lana de vidrio retiene las partículas de abrasión, mientras que las bolitas de silicagel absorben el agua en suspensión. La fase líquida limpia se deposita en la parte inferior y es enviada hacia la válvula de expansión. La cámara gaseosa superior amortigua las variaciones bruscas de presión originadas al acoplar el compresor. (págs. 75-77)

📷 IMAGEN: Estructura interna del depósito acumulador con la lana de vidrio, silicagel y zona de amortiguación gaseosa — Fuente: LA CLIMATIZACIÓN.pdf, pág. 75

## Valores de trabajo
- Capacidad de absorción del silicagel: de 6 a 12 kg (o gramos) de agua según la temperatura de trabajo. (pág. 76)

## Anomalías frecuentes
Saturación de humedad del silicagel o colmatación de la lana de vidrio por restos de abrasión del compresor. (págs. 76-77)

## Comportamiento en avería
Fenómeno de pre-expansión en la tubería de salida del depósito (caída de temperatura previa) o congelación del agua en el orificio de la válvula de expansión. (págs. 76, 159)

## Cómo comprobarlo
Medir la temperatura del tubo a la entrada y a la salida del depósito con un termómetro de contacto (una caída de temperatura indica colmatación). (págs. 76, 159)

## Mantenimiento
Reemplazar obligatoriamente el depósito deshidratador cada vez que se abra el circuito o tras detectarse humedad en el sistema. (pág. 76)

---

```yaml
tipo: componente
titulo: Válvula de expansión termostática
entidad: valvula-expansion
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "77-81"
forma_parte_de: circuito-frigorifico
relacionados: [evaporador, filtro-deshidratador, compresor]
palabras: [válvula de expansión, bloque en H, diafragma, bola de regulación, muelle, paso calibrado]
```

## Misión
Regular el caudal de fluido frigorífico inyectado en el evaporador y provocar una brusca caída de presión que inicie la evaporación del líquido. (págs. 77-78)

## Tipos y características
Válvula monobloc (tipo bloque o en H) instalada en la entrada/salida del evaporador. Consta de cuerpo de aluminio, cabeza termostática con diafragma, varilla de empuje, platillo con bola y muelle de regulación tarado de fábrica. (págs. 79-80)

## Principio de funcionamiento
Separa el lado de alta y baja presión. El diafragma de la cabeza térmica recibe en su cara superior la presión del gas de carga (proporcional a la temperatura a la salida del evaporador) y en su cara inferior la presión de baja del evaporador. 
- **Aumento de temperatura en la salida:** El gas del cabezal se dilata, empuja el diafragma y la varilla vence al muelle abriendo la bola de paso para aumentar la inyección de refrigerante.
- **Descenso de temperatura en la salida:** El gas del cabezal se contrae y el muelle de regulación desplaza la bola cerrando parcialmente el paso de refrigerante. (págs. 79-81)

📷 IMAGEN: Sección de la válvula de expansión monobloc en H mostrando la cabeza térmica, diafragma, varilla de empuje y bola — Fuente: LA CLIMATIZACIÓN.pdf, pág. 79

## Valores de trabajo
- Fuerza del muelle regulador: ajustada y tarada de fábrica (prohibido alterar su reglaje). (pág. 80)

## Anomalías frecuentes
Bloqueo mecánico de la bola por restos de suciedad o hielo, o pérdida de la carga de gas de la cabeza termostática. (págs. 79-80)

## Comportamiento en avería
Inyección deficiente de fluido con baja presión de baja (válvula bloqueada en cierre) o inundación de líquido al compresor (válvula bloqueada en apertura). (págs. 78-80)

## Cómo comprobarlo
Comprobar la presión de baja con manómetros y verificar el grado de recalentamiento del gas a la salida del evaporador. (págs. 78-80, 158)

## Mantenimiento
Prohibido manipular el tornillo de regulación interno o deformar la cápsula superior durante los trabajos de sustitución. (pág. 80)

---

```yaml
tipo: fundamento
titulo: Circuito frigorífico con inyector y depósito acumulador de expansión
entidad: ciclo-frigorifico
variante: inyector
area: climatizacion
sistema: circuito-frigorifico
fuente: "LA CLIMATIZACIÓN.pdf"
paginas: "83-86"
relacionados: [estrangulador, deposito-colector, compresor, evaporador]
palabras: [inyector, orificio calibrado, acumulador de expansión, zona caliente, baja presión]
```

## Objeto
Explicar el ciclo termodinámico y el funcionamiento de las instalaciones de climatización que utilizan un inyector de orificio calibrado fijo en lugar de una válvula de expansión termostática. (págs. 83-84)

## Fundamento
La expansión e pulverización del refrigerante líquido se realiza mediante un inyector (estrangulador) de diámetro fijo. Al carecer de regulación de caudal a la entrada del evaporador, el circuito requiere un depósito acumulador de expansión en el lado de baja presión tras el evaporador para proteger al compresor. (págs. 83-85)

## Desarrollo
1. **Compresión e Inyección:** El compresor de cilindrada variable impulsa el gas a alta presión hacia el condensador. El líquido condensado atraviesa la pequeña sección del inyector fijo situado a la entrada del evaporador, cayendo drásticamente su presión. (págs. 83-84)
2. **Evaporación y Acumulación:** El líquido atomizado absorbe calor en el evaporador. La mezcla difásica saliente penetra en el depósito acumulador de expansión (alojado en un punto caliente del compartimento motor), donde se completa la reevaporación del líquido y se retiene el agua antes de retornar en estado gaseoso al compresor. (págs. 85-86)

📷 IMAGEN: Esquema del circuito frigorífico con inyector y depósito acumulador instalado en la línea de baja presión — Fuente: LA CLIMATIZACIÓN.pdf, pág. 84

## Valores de referencia
- Ubicación del acumulador de expansión: intercalado en la tubería de baja presión, entre el evaporador y la aspiración del compresor. (pág. 85)

## Errores de concepto frecuentes
- Buscar el depósito deshidratador en la línea de alta presión en instalaciones provistas de inyector (en este sistema el depósito se encuentra ubicado en el lado de baja presión). (págs. 74, 85)

---

COBERTURA: documento «LA CLIMATIZACIÓN.pdf», páginas 55 a 86 de 165. queda pendiente desde la página 87