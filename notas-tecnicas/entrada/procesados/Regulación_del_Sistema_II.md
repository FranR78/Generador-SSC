```yaml
tipo: fundamento
titulo: Sistema de calefacción y ventilación independiente
entidad: calefaccion-independiente
area: climatizacion
sistema: calefaccion
codigo: J364
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "1-3, 69-89, 118-121"
relacionados: [bomba-dosificadora-combustible, bomba-recirculacion-liquido-refrigerante, valvula-cierre-calefaccion]
palabras: [calefacción independiente, ventilación independiente, J364, Eberspächer, combustión, líquido refrigerante]
```

## Objeto
Calentar o ventilar el habitáculo del vehículo cuando el motor térmico está parado o apoyar la generación de calor a bajas temperaturas exteriores en versiones diésel. (págs. 1, 69-70)

## Fundamento
El sistema utiliza una unidad calefactora autónoma por combustión (J364) conectada al sistema de combustible y al circuito de refrigerante del motor. Al quemar combustible en su interior, calienta el líquido refrigerante que la bomba V55 hace circular hacia el intercambiador de calor del climatizador, mientras la turbina del habitáculo difunde el aire caliente. (págs. 69-70, 118)

## Desarrollo
El funcionamiento de la calefacción independiente se organiza en las siguientes fases operativas:
- **Arranque y precalentamiento:** La UCE J364 activa la bomba de recirculación V55 y la válvula de cierre N279. Aplica tensión a la bujía de precalentamiento Q9 para calentar la cámara de combustión e inicia la rotación gradual de la turbina de aire de combustión V6. A continuación, activa la bomba dosificadora V54 a 4 Hz para inyectar combustible. (págs. 71-74)
- **Fase de combustión a plena carga:** Tras detectarse la presencia de llama mediante el guardallamas G64, se desconecta la bujía Q9. La turbina V6 se alimenta a 12 V y la bomba V54 trabaja a máxima frecuencia (8 Hz) suministrando 5,0 kW de potencia calorífica. (págs. 74-76)
- **Conmutación a carga parcial y pausa de regulación:** Si la temperatura del líquido refrigerante en el calefactor alcanza los 77 ºC, la UCE reduce la tensión de V6 a 6 V y la frecuencia de V54 a 4 Hz (potencia al 50%). Si la temperatura asciende a 89 ºC, el sistema pasa a la pausa de regulación (deteniendo V54 y V6 mientras V55 mantiene el flujo). Si el refrigerante cae por debajo de 65 ºC, se reinicia la combustión. (págs. 76-79)
- **Ciclo de post-marcha y desconexión:** Al desactivar la calefacción, la bomba V54 se corta inmediatamente mientras la turbina V6 funciona entre 8 V y 12 V durante 15 a 120 segundos para purgar los gases de escape y enfriar el intercambiador. (págs. 81-82)
- **Función de ventilación independiente:** Durante el verano, si la temperatura interior supera la consigna, la UCE activa únicamente la turbina de aire fresco del habitáculo sin encender el quemador de combustible. (pág. 82)

📷 IMAGEN: Esquema del circuito de líquido refrigerante integrando la calefacción independiente, la bomba V55 y la válvula N279 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 118

## Valores de referencia
- Temperatura de conmutación a carga parcial: 77 ºC en el líquido refrigerante. (pág. 76)
- Temperatura de conmutación a pausa de regulación: 89 ºC en el líquido refrigerante. (pág. 79)
- Temperatura de reinicio tras pausa de regulación: < 65 ºC en el líquido refrigerante. (pág. 79)
- Rendimiento térmico nominal a plena carga: 5,0 kW. (pág. 1)

## Errores de concepto frecuentes
- Creer que la calefacción independiente consume la energía de la batería para generar calor mediante resistencias eléctricas masivas, ignorando que la energía térmica procede del combustible del depósito. (págs. 1, 69)
- Suponer que la ventilación independiente utiliza el compresor del aire acondicionado con el motor parado, cuando únicamente hace circular aire exterior. (pág. 82)

---

```yaml
tipo: componente
titulo: Unidad de control para calefacción adicional y calefactor
entidad: calefactor-independiente
area: climatizacion
sistema: calefaccion
codigo: J364
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "1, 131-138"
forma_parte_de: calefaccion-independiente
relacionados: [bomba-dosificadora-combustible, bujia-precalentamiento-calefaccion, turbina-aire-combustion]
palabras: [J364, Hydronic II-SF, Eberspächer, UCE calefacción, conector de 14 polos, autodiagnóstico]
```

## Misión
Gobernar de forma autónoma el proceso de combustión, controlar los sensores térmicos y de llama, e integrar la calefacción independiente en la red de datos del vehículo. (págs. 3, 136)

## Tipos y características
Módulo electrónico integrado físicamente en la carcasa superior del propio calefactor de agua (Eberspächer Hydronic II-SF), situado en el pasarruedas delantero derecho. Existen versiones específicas para motores de gasolina y diésel. (págs. 1, 123, 136)

## Principio de funcionamiento
Procesa las órdenes recibidas por el bus CAN desde la pantalla del MMI o la antena de radiofrecuencia R64. Evalúa las señales de los sensores internos de temperatura (G18, G587) y del guardallamas (G64) para alimentar secuencialmente la bujía Q9, la turbina V6, la bomba dosificadora V54, la bomba de recirculación V55 y la válvula N279. (págs. 71-76, 136)

📷 IMAGEN: Cuadro de montaje del calefactor mostrando la unidad de control J364 y la turbina de aire de combustión V6 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 136

## Valores de trabajo
- Tensión de alimentación: 12 V de corriente continua (Borne 30) mediante conector de 2 polos. (pág. 136)
- Conexión de señales: conector de 14 polos para sensores/actuadores internos y conector de 6 polos para la red del vehículo. (pág. 136)
- Límite de desconexión por sobrecalentamiento de la placa electrónica interna: 130 ºC. (pág. 55)

## Anomalías frecuentes
Bloqueo de seguridad tras 3 intentos fallidos de arranque consecutivos por falta de combustible o por registrar temperaturas internas superiores a 130 ºC en su placa electrónica. (págs. 8, 55)

## Comportamiento en avería
Inoperatividad total de la calefacción independiente, memorizándose el fallo y requiriendo la anulación del bloqueo a través del canal de adaptación 42 con el equipo VAS 5051. (págs. 8, 58)

## Cómo comprobarlo
Consultar la memoria de averías en la dirección "18 - Calefacción adicional/independiente", evaluar los bloques de valores de medición del 001 al 023 e iniciar la diagnosis de actuadores. (págs. 8, 10, 27-55)

## Mantenimiento
Inscribir el año de la primera puesta en servicio en la etiqueta adhesiva duplicada del vano motor al sustituir la unidad. (págs. 1, 127)

---

```yaml
tipo: componente
titulo: Bomba dosificadora de combustible
entidad: bomba-dosificadora-combustible
area: combustible
sistema: calefaccion
codigo: V54
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "101, 104-106, 111-112"
forma_parte_de: calefaccion-independiente
relacionados: [calefactor-independiente]
palabras: [V54, bomba dosificadora, impulsos, 8 Hz, 0.03 ml, manguera de combustible]
```

## Misión
Aspirar combustible desde la cuba antioleaje del depósito del vehículo e impulsarlo volumétricamente a impulsos hacia el evaporador de la cámara de combustión del calefactor. (págs. 101, 104-105)

## Tipos y características
Bomba electromagnética de émbolo alternativo de funcionamiento por pulsos, montada cerca del depósito de combustible en los bajos del vehículo. (págs. 101, 111)

## Principio de funcionamiento
Cada impulso de corriente enviado por la UCE J364 atrae un émbolo interno que desplaza una cantidad fija calibrada de combustible hacia la tubería. La frecuencia de la señal determina el caudal aportado al quemador. (págs. 71-75, 105)

📷 IMAGEN: Vista de montaje de la bomba dosificadora V54 en los bajos del vehículo con su tubería de combustible — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 111

## Valores de trabajo
- Caudal por carrera/impulso: aprox. 0,03 ml (0,03 cm³). (pág. 105)
- Frecuencia de excitación a plena carga: 7 a 8 Hz (impulsos/segundo). (págs. 75, 105)
- Frecuencia de excitación a carga parcial: 3 a 4 Hz. (págs. 77-78)

## Anomalías frecuentes
Obstrucción o estrangulamiento de la línea de combustible, o falta de impulsos por agarrotamiento mecánico del émbolo tras periodos prolongados de inactividad. (págs. 105, 113)

## Comportamiento en avería
Extinción o imposibilidad de encendido de la llama en el calefactor por falta de combustible, registrándose avería en la UCE J364. (págs. 8, 76)

## Cómo comprobarlo
Realizar la prueba de comprobación del caudal impelido recogiendo el combustible en una probeta graduada durante 30 segundos en el grupo de ajuste básico 066 (debe aportar el volumen especificado). (págs. 104-106)

## Mantenimiento
Utilizar mangueras de goma con empalmes a tope para evitar bolsas de aire en la canalización de combustible. (pág. 101)

---

```yaml
tipo: componente
titulo: Bomba de recirculación de líquido refrigerante
entidad: bomba-recirculacion-liquido-refrigerante
area: motor
sistema: refrigeracion-motor
codigo: V55
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "119-120"
forma_parte_de: calefaccion-independiente
relacionados: [calefactor-independiente, valvula-cierre-calefaccion]
palabras: [V55, bomba de recirculación, circulación forzada, líquido refrigerante, conector de 2 polos]
```

## Misión
Impulsar el líquido refrigerante por el circuito cerrado del calefactor y el intercambiador de calor de la calefacción cuando el motor térmico está detenido o funciona al ralentí. (págs. 118-120)

## Tipos y características
Electrobomba centrífuga accionada por motor eléctrico de corriente continua, alojada en el soporte de la calefacción independiente en el pasarruedas. (págs. 119-120)

## Principio de funcionamiento
Al activarse la calefacción independiente o la función de apoyo en diésel, la UCE J364 suministra corriente a la bomba V55 para establecer el caudal de refrigerante necesario que absorba la energía térmica generada en la cámara de combustión. (págs. 71, 119-120)

📷 IMAGEN: Desmontaje y ubicación de la bomba para recirculación V55 en el conjunto del calefactor — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 119

## Valores de trabajo
- Tensión de alimentación: 12 V de corriente continua. (pág. 120)
- Control de potencia: excitación modulada en % desde la UCE J364. (pág. 33)

## Anomalías frecuentes
Desgaste de escobillas del motor eléctrico, bloqueo del rodete por posos del líquido refrigerante o funcionamiento en seco tras vaciados del circuito. (págs. 119-120)

## Comportamiento en avería
Sobrecalentamiento rápido del calefactor (alcanzando > 89 ºC en pocos segundos), lo que provoca el paso prematuro a la pausa de regulación o el bloqueo de seguridad. (págs. 44, 79)

## Cómo comprobarlo
Activar la bomba V55 mediante el diagnóstico de actuadores comprobando su funcionamiento audible y verificar la señal en % en el bloque de valores de medición 004 (campo 3). (págs. 10, 33)

## Mantenimiento
No conectar eléctricamente la bomba tras reparaciones hasta haber rellenado y purgado completamente el circuito de líquido refrigerante. (pág. 120)

---

```yaml
tipo: componente
titulo: Válvula de cierre para líquido refrigerante de la calefacción
entidad: valvula-cierre-calefaccion
area: climatizacion
sistema: calefaccion
codigo: N279
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "89, 121"
forma_parte_de: calefaccion-independiente
relacionados: [calefactor-independiente, bomba-recirculacion-liquido-refrigerante]
palabras: [N279, válvula de cierre, paso de refrigerante, conmutación de circuito, 0.5 Hz]
```

## Misión
Dirigir el flujo de líquido refrigerante procedente del calefactor exclusivamente hacia el intercambiador de calor del habitáculo o permitir el paso hacia el bloque del motor térmico. (págs. 89, 121)

## Tipos y características
Electroválvula de solenoide de vías instalada en las tuberías de refrigerante del vano motor. (pág. 121)

## Principio de funcionamiento
Gobernada por la UCE J364. Cuando no recibe corriente o la temperatura es reducida, la válvula prioriza el circuito corto (intercambiador de calor del climatizador) para calentar rápidamente el habitáculo. Al activarse, conmuta las vías permitiendo calentar simultáneamente el bloque motor. (págs. 89, 121)

📷 IMAGEN: Ubicación y conexiones de los tubos flexibles en la válvula de cierre N279 — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 121

## Valores de trabajo
- Frecuencia de excitación en prueba de actuadores: 0,5 Hz (intermitencia audible cada 2 segundos). (pág. 11)

## Anomalías frecuentes
Fallo de la bobina electromagnética o agarrotamiento interno por incrustaciones en el líquido refrigerante. (págs. 11, 121)

## Comportamiento en avería
Falta de rendimiento calorífico en el habitáculo o imposibilidad de precalentar el motor térmico. (págs. 89, 121)

## Cómo comprobarlo
Realizar la prueba de actuadores con el equipo VAS 5051 escuchando la intermitencia de conmutación a 0,5 Hz. (pág. 11)

## Mantenimiento
Montar los tubos flexibles mutuamente a tope contra los racores al sustituir la válvula. (pág. 121)

---

```yaml
tipo: componente
titulo: Bujía de precalentamiento para calefacción
entidad: bujia-precalentamiento-calefaccion
area: climatizacion
sistema: calefaccion
codigo: Q9
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "65, 141-142"
forma_parte_de: calefactor-independiente
relacionados: [calefactor-independiente, guardallamas]
palabras: [Q9, bujía de precalentamiento, incandescencia, quemador, resistencia < 1 ohmio]
```

## Misión
Alcanzar la temperatura de incandescencia necesaria en el quemador para inflamar la mezcla de aire y combustible durante la fase de arranque del calefactor. (págs. 71, 141)

## Tipos y características
Elemento de caldeo cerámico de alta resistencia térmica montado en el suplemento del quemador dentro de la cámara de combustión. (págs. 136, 141)

## Principio de funcionamiento
Durante el ciclo de puesta en marcha, la UCE J364 le aplica tensión regulada a la bujía Q9, elevando drásticamente su temperatura. El combustible atomizado que entra en contacto con la bujía incandescente se inflama. Una vez estabilizada la llama (confirmada por G64), se desconecta la alimentación de la bujía. (págs. 71-75)

## Valores de trabajo
- Tensión de alimentación regulada: aprox. 8 V de corriente continua. (págs. 73-74)
- Resistencia eléctrica entre contactos 3 y 6: inferior a 1 ohmio. (pág. 65)

## Anomalías frecuentes
Corte por fusión del filamento cerámico o derivación a masa por acumulación de carbonilla en el quemador. (págs. 65, 141)

## Comportamiento en avería
El calefactor realiza el ciclo de soplado pero no consigue inflamar el combustible, abortando el arranque y registrando avería en J364. (págs. 8, 76)

## Cómo comprobarlo
Desconectar la clavija de 2 polos y medir la resistencia eléctrica con multímetro entre las celdas 3 y 6 (debe ser inferior a 1 ohmio) y verificar aislamiento con la carcasa. (pág. 65)

## Mantenimiento
Observar la posición exacta de la junta de goma al pasar los cables de la bujía durante el ensamblaje. (pág. 143)

---

```yaml
tipo: componente
titulo: Turbina de aire de combustión
entidad: turbina-aire-combustion
area: climatizacion
sistema: calefaccion
codigo: V6
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "66, 143"
forma_parte_de: calefactor-independiente
relacionados: [calefactor-independiente, bujia-precalentamiento-calefaccion]
palabras: [V6, turbina de combustión, caudal de aire, 2 a 3 A, excitación regulada]
```

## Misión
Suministrar el caudal de aire fresco del exterior requerido en la cámara de combustión para la oxidación del combustible y para el barrido de gases tras el apagado. (págs. 71, 143)

## Tipos y características
Soplador centrífugo accionado por un motor eléctrico de corriente continua integrado en la cubierta delantera del calefactor. (págs. 136, 143)

## Principio de funcionamiento
La UCE J364 varía la tensión aplicada al motor de la turbina V6 para ajustar el volumen de aire ingresado en función de la fase operativa (de 0 V a 2 V en precalentamiento, 8 V en rampa de aceleración y 12 V a plena carga). (págs. 73-75)

## Valores de trabajo
- Tensión de alimentación regulada: de 0 V a 12 V. (págs. 73-75)
- Consumo de corriente nominal a 12 V: entre 2 A y 3 A. (pág. 66)

## Anomalías frecuentes
Bloqueo mecánico del rodete por entrada de suciedad u hojas en el silenciador de aspiración, o desgaste del colector eléctrico del motor. (págs. 66, 133)

## Comportamiento en avería
Combustión ruidosa con exceso de humo por mala mezcla de aire o interrupción inmediata del arranque por seguridad. (págs. 66, 113)

## Cómo comprobarlo
Medir la resistencia de la turbina entre la celda 13 y la carcasa (aislamiento) y aplicar 12 V directos verificando que el consumo se sitúa entre 2 A y 3 A. (pág. 66)

## Mantenimiento
Inspeccionar el silenciador y la tubería de aspiración de aire exterior comprobando que no presenten estrechamientos ni suciedad. (pág. 133)

---

```yaml
tipo: componente
titulo: Guardallamas
entidad: guardallamas
area: climatizacion
sistema: calefaccion
codigo: G64
fabricante: Audi
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "66, 141"
forma_parte_de: calefactor-independiente
relacionados: [calefactor-independiente, bujia-precalentamiento-calefaccion]
palabras: [G64, guardallamas, detección de llama, junta de grafito, resistencia de llama]
```

## Misión
Supervisar de forma continua la presencia y la estabilidad de la llama en la cámara de combustión del calefactor. (págs. 34, 141)

## Tipos y características
Sensor de temperatura fototransistor o resistencia térmica especial alojada en una ranura de la cámara de combustión equipada con junta de grafito. (págs. 136, 141)

## Principio de funcionamiento
Mide el calor radiado por la combustión. Cuando la temperatura en la cámara alcanza el umbral de combustión con llama, la UCE J364 detecta la señal "detectada", confirmando la estabilización del fuego para cortar la bujía Q9. Si la llama se apaga de forma imprevista, la señal pasa a "no detectada" y la UCE inicia el ciclo de seguridad. (págs. 34, 74-76)

📷 IMAGEN: Montaje del guardallamas G64 en la ranura con su junta de grafito — Fuente: Audi A5 Coupé_2008_Calefacción independiente.pdf, pág. 141

## Valores de trabajo
- Estado en diagnosis: "detectada" durante el funcionamiento de combustión y "no detectada" en frío. (pág. 34)

## Anomalías frecuentes
Incrustación de hollín o carbonilla sobre la ventana de captación del sensor, o deterioro de la junta de grafito. (págs. 66, 141)

## Comportamiento en avería
Cancelación del ciclo de arranque al cabo de 90 segundos por falta de detección de llama, registrando avería en J364. (págs. 75, 84)

## Cómo comprobarlo
Medir la resistencia del sensor entre sus terminales a temperatura ambiente (evaluando desviaciones) y revisar el estado visual en el bloque de valores de medición 005. (págs. 34, 66)

## Mantenimiento
Sustituir obligatoriamente la junta de grafito al desmontar el guardallamas e insertarla con cuidado utilizando un destornillador sin aristas vivas. (pág. 141)

---

```yaml
tipo: procedimiento
titulo: Comprobación de la cantidad de combustible impelida por la bomba dosificadora
entidad: comprobacion-caudal-bomba-dosificadora
area: combustible
sistema: calefaccion
fuente: "Audi A5 Coupé_2008_Calefacción independiente.pdf"
paginas: "104-110"
relacionados: [bomba-dosificadora-combustible, calefactor-independiente]
palabras: [comprobación de caudal, V54, probeta graduada, canal 30, ajuste básico 066]
```

## Objeto y alcance
Medir con precisión el volumen de combustible suministrado por la bomba V54 para verificar su correcto calibrado y diagnosticar fallos de humo o falta de combustión. (págs. 104-105)

## Condiciones previas
1. Nivel de combustible suficiente en el depósito del vehículo (por encima de la reserva). (pág. 104)
2. Calefacción independiente desactivada y sin códigos de avería almacenados. (pág. 104)
3. Pasarruedas delantero derecho desmontado para acceder a la tubería de combustible del calefactor. (pág. 104)

## Equipo y material
Estación de diagnosis VAS 5051 con cable T16, probeta o recipiente graduado de precisión en ml y recipiente de recogida de combustible. (págs. 104-105)

## Pasos
1. Desmontar el tubo flexible de combustible conectado a la entrada de la calefacción independiente. (pág. 104)
2. Introducir el extremo libre del tubo de combustible en la probeta graduada de precisión y fijarlo firmemente. (pág. 104)
3. Conectar el equipo de diagnosis VAS 5051 al conector de 16 polos T16 e iniciar la autodiagnosis en la dirección "18 - Calefacción adicional/independiente". (págs. 7, 105)
4. Acceder a la función "12 - Adaptación", ingresar en el "Canal 30" y modificar el valor a "3" para desbloquear la función de prueba de llenado. (pág. 105)
5. Seleccionar la función "04 - Ajuste básico" e ingresar al grupo de indicación "066". (pág. 105)
6. Activar la prueba: la UCE excitará la bomba dosificadora V54 durante exactamente 30 segundos con una frecuencia fija de 8 Hz. (pág. 105)
7. Al finalizar automáticamente los 30 segundos de impulsos, leer el nivel de volumen de combustible recogido en la probeta graduada. (págs. 105-106)

## Valores de referencia
- Frecuencia de prueba en ajuste básico 066: 8 Hz (8 impulsos/segundo) durante 30 segundos (240 impulsos totales). (pág. 105)
- Volumen teórico nominal aportado: entre 6,8 ml y 7,6 ml tras 240 impulsos (0,03 ml/impulso). (pág. 105)

## Verificación final
Si el volumen medido está fuera del margen especificado, revisar la tubería por si presenta estrangulamientos; si la canalización es correcta, reemplazar la bomba dosificadora V54. (págs. 106, 112)

## Seguridad y normativa
Recoger todo el combustible en recipientes herméticos homologados. No fumar ni generar chispas en la zona de trabajo. (pág. 101)

---

COBERTURA: documento «Audi A5 Coupé_2008_Calefacción independiente.pdf», páginas 1 a 149 de 149. [completo]