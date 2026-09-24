```yaml
tipo: fundamento
titulo: Autodiagnóstico de la calefacción independiente
entidad: autodiagnostico-calefaccion-independiente
area: climatizacion
sistema: control-climatizacion
codigo: J364
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "3-10"
relacionados: [calefaccion-independiente, unidad-control-climatizador]
palabras: [autodiagnosis, memoria de averías, VAS 5051, J364]
```

## Objeto
Supervisar el funcionamiento de los componentes y sensores gestionados por la unidad de control para calefacción adicional J364, registrando averías y permitiendo el diagnóstico mediante equipos de diagnosis del taller. (págs. 3-4).

## Fundamento
La unidad de control J364 analiza ininterrumpidamente las señales de los sensores e indica las anomalías memorizándolas en su memoria permanente no dependiente de la alimentación de tensión. Distingue entre averías estáticas y esporádicas. (págs. 4-5).

## Desarrollo
El diagnóstico se realiza conectando el equipo de diagnosis (VAS 5051 o VAS 5052) con el cable VAS 5051/5A al conector de 16 polos del vehículo con el encendido desconectado, accediendo a la dirección "18 - Calefacción adicional/independiente".
La transmisión de datos se realiza por transmisión rápida de datos.
Funciones disponibles en la autodiagnosis:
- 01 / 001: Consultar la versión de la unidad de control.
- 02 / 004: Consultar la memoria de averías.
- 03 / 005: Diagnosis de actuadores.
- 04 / 006: Ajuste básico.
- 05 / 004.10: Borrar la memoria de averías.
- 06 / 022: Finalizar la emisión.
- 07 / 008 / 07: Codificación de la unidad de control.
- 08 / 011: Leer bloque de valores de medición.
- 10 / 012: Adaptación. (págs. 5-8).

## Valores de referencia
Conector de diagnóstico de 16 polos del vehículo.
Velocidad del vehículo no superior a 5 km/h para ejecutar la función de diagnosis de actuadores. (págs. 6, 8).

## Errores de concepto frecuentes
Creer que las averías esporádicas son fallos inexistentes o lecturas erróneas del equipo; corresponden a condiciones de avería reales que desaparecieron temporalmente y se identifiican con la indicación /SP, borrándose automáticamente solo si no vuelven a reproducirse durante un periodo prolongado. (págs. 4-5).

---

```yaml
tipo: componente
titulo: Bujía de precalentamiento para calefacción
entidad: bujia-precalentamiento-calefaccion
area: climatizacion
sistema: calefaccion
codigo: Q9
fabricante: Eberspächer
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "65, 71-75, 141-142"
forma_parte_de: calefaccion-independiente
relacionados: [guardallamas, suplemento-quemador]
palabras: [bujía de incandescencia, Q9, precalentamiento, vigilancia de llama]
```

## Misión
Inflamar la mezcla de combustible y aire en la cámara de combustión del calefactor independiente durante el proceso de arranque y realizar la vigilancia de la llama en determinadas fases de funcionamiento. (págs. 65, 72-73).

## Tipos y características
Bujía de incandescencia eléctrica con espiga calefactora alimentada a una tensión nominal de 8 V. Absorción de corriente de 9 a 20 A al aplicarle 9 V. (págs. 65, 137).

## Principio de funcionamiento
Recibe alimentación eléctrica regulada por la unidad de control J364 durante la fase de arranque para alcanzar la temperatura de incandescencia e inflamar el combustible suministrado por la bomba dosificadora V54. Una vez establecida la combustión, se desactiva o pasa a monitorizar la presencia de llama. (págs. 72-73, 142).

## Valores de trabajo
- Tensión nominal: 8 V. (pág. 137).
- Absorción de corriente: entre 9 A y 20 A a 9 V de tensión continua. (pág. 65).
- Resistencia nominal: 0,42 a 0,63 Ω a 20 ± 2 ºC de temperatura ambiente. (pág. 65).

## Anomalías frecuentes
Desgaste térmico de la espiga de incandescencia, acumulación de carbonilla o sedimentos del combustible, cortocircuito o interrupción eléctrica en sus cables de alimentación. (págs. 76, 142).

## Comportamiento en avería
Si la resistencia de Q9 se encuentra fuera del margen definido, se cancela el proceso de arranque (se realiza 1 repetición de arranque). Si el fallo persiste, se aborta el ciclo, se inscribe la avería en la memoria de la UCE J364 y se desactiva el calefactor tras varias repeticiones. (págs. 76, 88).

## Cómo comprobarlo
1. Desconectar el encendido y desacoplar el conector de 14 polos de la unidad de control J364.
2. Medir la resistencia en el conector entre el contacto 3 (cable marrón) y el contacto 6 (cable blanco).
3. El valor teórico debe ser de 0,42 a 0,63 Ω a 20 ± 2 ºC (resistencia en conector inferior a 1 Ω).
4. Medir el aislamiento midiendo la resistencia entre el contacto 3 y la carcasa del calefactor (valor teórico: sin derivación a masa).
5. Aplicar una tensión de 9 V CC y verificar con pinza amperimétrica que la absorción de corriente se sitúa entre 9 y 20 A.
6. Limpiar cuidadosamente la espiga de incandescencia con un cepillo de latón. (págs. 65, 137).

📷 IMAGEN: Esquema del conector de 14 polos indicando los contactos 3 y 6 para la comprobación de la bujía Q9 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 65

## Mantenimiento
Limpiar la espiga de incandescencia con cepillo de latón. Si la bujía Q9 resulta dañada, comprobar y limpiar o sustituir el suplemento del quemador si presenta sedimentos no eliminables. (págs. 137, 142).

---

```yaml
tipo: componente
titulo: Turbina de aire de combustión
entidad: turbina-aire-combustion
area: climatizacion
sistema: calefaccion
codigo: V6
fabricante: Eberspächer
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "66, 71-82, 143"
forma_parte_de: calefaccion-independiente
relacionados: [bomba-dosificadora-v54, bujia-precalentamiento-calefaccion]
palabras: [turbina de aire, V6, aire de combustión, barrido, ventilador]
```

## Misión
Aspirar aire del exterior e impulsarlo de forma regulada hacia la cámara de combustión del calefactor independiente para formar la mezcla carburada y realizar el barrido de gases de escape. (págs. 66, 69, 143).

## Tipos y características
Soplante eléctrico impulsado por motor de corriente continua a 12 V, regulado en tensión por la unidad de control J364. (págs. 66, 69, 136).

## Principio de funcionamiento
Su régimen de giro se regula variando la tensión aplicada por la unidad de control J364 (entre 0 V y 12 V) en coordinación con la frecuencia de la bomba dosificadora V54. Funciona en fases de pre-barrido, arranque, plena carga (12 V), carga parcial (aprox. 5 a 6 V) y ciclo de continuación/post-barrido para enfriamiento (8 a 12 V). (págs. 72-82).

## Valores de trabajo
- Tensión de alimentación: 0 a 12 V CC.
- Absorción de corriente: 2 a 3 A a una tensión aplicada de 12 V CC. (pág. 66).
- Resistencia interna: entre 3 y 6 Ω (hasta 40 Ω si lleva mucho tiempo sin funcionar). (pág. 66).

## Anomalías frecuentes
Bloqueo mecánico por suciedad en la toma de aspiración o silenciador, desgaste del motor eléctrico, interrupción o cortocircuito en el bobinado. (págs. 66, 117).

## Comportamiento en avería
Imposibilidad de formar la mezcla aire-combustible correcta, generando mala combustión, exceso de CO2 o falta de llama. El sistema aborta el arranque y registra la avería en la unidad de control J364. (págs. 84, 117).

## Cómo comprobarlo
1. Desconectar el encendido y desacoplar el conector de 14 polos de la UCE J364.
2. Medir la resistencia en el conector entre la celda 13 (cable negro) y la celda 14 (cable marrón) (valor teórico entre 3 y 6 Ω).
3. Medir la resistencia entre la celda 13 y la carcasa del calefactor (debe ser infinita / sin derivación a masa).
4. Aplicar una tensión de 12 V CC y verificar con pinza amperimétrica que la corriente absorbida se sitúa entre 2 y 3 A. (págs. 66, 136).

📷 IMAGEN: Medición de la resistencia de la turbina de aire de combustión V6 en el conector de 14 polos — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 66

## Mantenimiento
Sustituir la junta entre la turbina de aire de combustión V6 y la carcasa del calefactor en cada desmontaje. Comprobar que el tubo de aspiración y el silenciador no presenten suciedad ni obstrucciones. (págs. 117, 143).

---

```yaml
tipo: componente
titulo: Guardallamas
entidad: guardallamas
area: climatizacion
sistema: calefaccion
codigo: G64
fabricante: Eberspächer
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "66-67, 72-88, 141"
forma_parte_de: calefaccion-independiente
relacionados: [bujia-precalentamiento-calefaccion, unidad-control-calefaccion-adicional]
palabras: [G64, termosensor, detector de llama, resistencia NTC, llama]
```

## Misión
Detectar la presencia y estabilidad de la llama en la cámara de combustión del calefactor independiente mediante la variación de su resistencia eléctrica según la temperatura existente. (págs. 66, 88).

## Tipos y características
Sensor de temperatura resistente a altas temperaturas montado en la zona del quemador, dotado de una junta de grafito. (págs. 66, 137, 141).

## Principio de funcionamiento
Modifica su resistencia eléctrica en función de la temperatura en la cámara de combustión. La unidad de control J364 evalúa constantemente la curva característica de resistencia de G64 para determinar si se ha formado llama ("detectada") o si la temperatura es insuficiente ("no detectada"). (págs. 34, 88).

## Valores de trabajo
- Estado "detectada": temperatura de cámara propia de combustión activa.
- Estado "no detectada": temperatura inferior a la requerida para el modo de combustión.
- Límite de interrupción (avería): Resistencia superior a 3040 Ω.
- Límite de cortocircuito (avería): Resistencia inferior a 780 Ω. (págs. 34, 67).

## Anomalías frecuentes
Deformación por sobrecalentamiento, acumulación de carbonilla, interrupción del cableado o cortocircuito. (págs. 67, 141).

## Comportamiento en avería
Si la resistencia de G64 se encuentra fuera de margen durante el ciclo de arranque, se cancela el proceso y se realiza un intento de repetición. Si tras la repetición persiste el fallo, la UCE J364 aborta la puesta en marcha, registra la avería y desactiva el sistema. (págs. 76, 86-87).

## Cómo comprobarlo
1. Desconectar el encendido y desacoplar la carcasa del conector de 14 polos de la unidad de control J364.
2. Medir la resistencia con un multímetro entre la celda 1 (cable marrón) y la celda 2 (cable marrón).
3. Evaluar el valor según la temperatura momentánea: si la resistencia es superior a 3040 Ω indica interrupción; si es inferior a 780 Ω indica cortocircuito. (págs. 66-67, 136).

📷 IMAGEN: Gráfica de curva característica resistencia-temperatura para la comprobación del guardallamas G64 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 67

## Mantenimiento
Reemplazar obligatoriamente la junta de grafito por una nueva en cada desmontaje, orientando el lado sin rebarbas hacia el collar del guardallamas G64 e introduciéndola sin aristas vivas. (pág. 141).

---

```yaml
tipo: componente
titulo: Termosensor de temperatura del calefactor
entidad: sensor-temperatura-calefactor
area: climatizacion
sistema: calefaccion
codigo: G18
fabricante: Eberspächer
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "67, 72-90, 139"
forma_parte_de: calefaccion-independiente
relacionados: [sensor-temperatura-calefactor-2, unidad-control-calefaccion-adicional]
palabras: [G18, termosensor, NTC, temperatura del refrigerante, sobrecalentamiento]
```

## Misión
Medir la temperatura del líquido refrigerante en el interior del calefactor independiente para regular el rendimiento de la calefacción y proteger la instalación contra sobrecalentamientos. (págs. 67, 77-89, 139).

## Tipos y características
Sensor de temperatura de tipo NTC (coeficiente de temperatura negativo) montado mediante estribo de sujeción sobre la carcasa del intercambiador de calor y sellado con junta tórica. (págs. 67, 136, 139).

## Principio de funcionamiento
Disminuye su resistencia eléctrica a medida que aumenta la temperatura del líquido refrigerante en el calefactor. La UCE J364 utiliza esta señal para conmutar los modos de funcionamiento:
- Menor de 77 ºC: Plena carga (100% potencia calorífica).
- Alcanza 77 ºC: Conmuta a carga parcial (50% potencia calorífica).
- Cae por debajo de 60 ºC: Retorna a plena carga.
- Alcanza 89 ºC: Conmuta a pausa de regulación (desconexión de combustión).
- Si alcanza 110 ºC o más: Desconexión de seguridad inmediata (OFF). (págs. 18, 77-80).

## Valores de trabajo
- Rango de medición normal NTC según curva característica:
  - A 20 ºC: aprox. 12 a 15 kΩ.
  - A 80 ºC: aprox. 1,5 a 2,5 kΩ.
  - A 100 ºC: aprox. 1 kΩ.
- Límite de interrupción (avería): Resistencia superior a 2 MΩ.
- Límite de cortocircuito (avería): Resistencia inferior a 50 Ω. (pág. 67).

## Anomalías frecuentes
Fallo de estanqueidad de la junta tórica (fuga de refrigerante), degradación del elemento NTC, cortocircuito o interrupción de los cables. (págs. 67, 139).

## Comportamiento en avería
El equipo de diagnosis muestra la indicación "fallo" en el grupo de medición 002 campo 1. Se interrumpe el funcionamiento del calefactor por seguridad y se registra la avería en la unidad J364. (págs. 31, 67).

## Cómo comprobarlo
1. Desconectar el encendido y desacoplar la carcasa del conector de 14 polos de la UCE J364.
2. Medir la resistencia eléctrica entre la celda 10 (cable negro) y la celda 11 (cable negro).
3. Comparar el valor medido con la curva característica según la temperatura del líquido en ese momento.
4. Si la resistencia es mayor a 2 MΩ existe interrupción; si es menor a 50 Ω existe cortocircuito. (págs. 67, 136).

📷 IMAGEN: Curva característica de resistencia NTC en función de la temperatura para el termosensor G18 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 67

## Mantenimiento
Sustituir el anillo toroidal de goma en cada desmontaje, humedeciéndolo ligeramente con líquido refrigerante antes de la instalación. (pág. 139).

---

```yaml
tipo: componente
titulo: Termosensor 2 para calefactor y calefacción independiente
entidad: sensor-temperatura-calefactor-2
area: climatizacion
sistema: calefaccion
codigo: G587
fabricante: Eberspächer
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "67-68, 140"
forma_parte_de: calefaccion-independiente
relacionados: [sensor-temperatura-calefactor, unidad-control-calefaccion-adicional]
palabras: [G587, termosensor 2, vigilancia redundante, sobretemperatura]
```

## Misión
Proporcionar una segunda medición redundante de la temperatura del líquido refrigerante en el intercambiador de calor para verificar la plausibilidad del sensor G18 y garantizar la protección térmica redundante del calefactor. (págs. 67, 140).

## Tipos y características
Termosensor NTC montado mediante estribo de sujeción e integrado en el conector de 14 polos de la unidad J364. (págs. 68, 136).

## Principio de funcionamiento
Varía su resistencia eléctrica de forma inversamente proporcional a la temperatura del refrigerante. La UCE J364 compara la señal de G587 con la de G18; si detecta una incoherencia de valores o un gradiente de temperatura excesivo, desactiva el calefactor. (págs. 31, 68).

## Valores de trabajo
- Curva característica NTC de resistencia frente a temperatura (idéntica a G18).
- Límite de interrupción (avería): Resistencia superior a 2 MΩ.
- Límite de cortocircuito (avería): Resistencia inferior a 50 Ω. (pág. 68).

## Anomalías frecuentes
Interrupción del cableado, cortocircuito interno, desviación de la curva de tolerancia. (pág. 68).

## Comportamiento en avería
Muestra "fallo" en el bloque de valores de medición 002 campo 3. Provoca la desactivación de seguridad del sistema de calefacción independiente para evitar daños por sobrecalentamiento no detectado. (págs. 31, 68).

## Cómo comprobarlo
1. Desconectar el encendido y desacoplar la carcasa del conector de 14 polos de la UCE J364.
2. Medir la resistencia entre la celda 7 (cable blanco) y la celda 8 (cable blanco).
3. Verificar que la resistencia medida se corresponde con la temperatura actual mediante la gráfica de curva NTC.
4. Valorar interrupción si R > 2 MΩ o cortocircuito si R < 50 Ω. (págs. 67-68, 136).

📷 IMAGEN: Curva de resistencia en kΩ según la temperatura en ºC para el termosensor G587 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 68

## Mantenimiento
Revisar el estado de los cables blancos y asegurar la correcta fijación del estribo de sujeción al montar. (págs. 136, 140).

COBERTURA: documento «Audi A5 Coupé_2008_Calefacción independiente.pdf», páginas 1 a 68 de 149. [queda pendiente desde la página 68]