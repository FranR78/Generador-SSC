```yaml
tipo: componente
titulo: Sonda de temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
codigo: 408
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "8, 16, 25"
relacionados: [unidad-control-climatizador, compresor, evaporador]
palabras: [termostato electrónico, congelación, 4 ºC, corte compresor]
```

## Misión
Informar al termostato electrónico o a la unidad de control de la temperatura real presente en el evaporador para autorizar o interrumpir el funcionamiento del compresor y evitar la congelación del evaporador. (pág. 8)

## Tipos y características
Se contemplan dos tecnologías:
- Termostato mecánico: equipado con fuelle, muelle de regulación, tubo capilar y bulbo/sensor intercalado en el evaporador (en versiones de 2 o 3 contactos). (pág. 8)
- Termostato electrónico / Sonda termostática: constituida por un sensor NTC de temperatura conectado a una centralita electrónica de mando. (pág. 8)

📷 IMAGEN: Esquema del termostato mecánico de evaporador con fuelle, muelle y contactos — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 8
📷 IMAGEN: Sonda termostática NTC y centralita electrónica de mando — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 8

(pág. 8)

## Principio de funcionamiento
La sonda mide la temperatura de las aletas del evaporador. Cuando el valor obtenido es superior a 4 ºC, el termostato confirma la demanda del usuario (A/A ciclo) enviando la señal de autorización de acoplamiento del embrague electromagnético del compresor. Si la temperatura desciende por debajo de 4 ºC, la señal de autorización se corta para impedir que la humedad condensada se congele sobre el evaporador. (pág. 8, 16)

## Valores de trabajo
- Temperatura de corte / autorización de la sonda de evaporador: 4 ºC. (pág. 8)

## Anomalías frecuentes
No documentado en fuentes. (pág. 8)

## Comportamiento en avería
No documentado en fuentes. (pág. 8)

## Cómo comprobarlo
No documentado en fuentes. (pág. 8)

## Mantenimiento
No documentado en fuentes. (pág. 8)

---

```yaml
tipo: fundamento
titulo: Corte de acoplamiento del compresor en aceleración diésel
entidad: corte-compresor-aceleracion
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "23-24"
relacionados: [embrague-compresor, unidad-control-climatizador]
palabras: [arranque en rampa, calado, pedal embrague, relé temporizado, diodo]
```

## Objeto
Evitar el riesgo de calado del motor y optimizar el par disponible en las ruedas durante los arranques en rampa y fases de aceleración con alta carga del motor en versiones diésel. (pág. 23)

## Fundamento
Desconexión temporal y automatizada del embrague electromagnético del compresor mediante la acción combinada de contactores en los pedales y relés de mando temporizados. (pág. 23)

📷 IMAGEN: Esquema del circuito de corte del embrague del compresor diésel con relés 661, 635, 584 y contactores 405 y 421 — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 24

## Desarrollo
El funcionamiento del sistema se desarrolla mediante la siguiente lógica:
1. Al pisar el pedal de embrague a fondo (contactor 421 abierto) y superar un cierto nivel de carga en el acelerador (contactor 405 en la bomba de inyección 589), se reúnen las dos condiciones de activación.
2. La apertura del circuito desexcita el relé 661, interrumpiendo la alimentación del relé temporizado 635.
3. El relé de mando 584 abre sus contactos, cortando la corriente del embrague electromagnético 171 del compresor durante un periodo fijo de cuatro segundos.
4. Un diodo de protección en la línea evita la retroalimentación del embrague desde el cajetín de pre-postcalentamiento 257 durante las fases de arranque y calentamiento del motor.
5. El contactor del pedal de embrague no requiere reglaje y permanece cerrado con el pedal en reposo (embragado).

(pág. 23, 24)

## Valores de referencia
- Duración del corte temporizado del compresor: 4 segundos. (pág. 23)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 23)

---

```yaml
tipo: componente
titulo: Sensor de temperatura interior
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "44"
relacionados: [unidad-control-climatizador, sensor-temperatura-exterior]
palabras: [coherencia, habitáculo, nivel de confort, temperatura real]
```

## Misión
Captar la temperatura efectiva del aire en el interior del habitáculo y suministrar esta señal a la unidad de control de climatización. (pág. 44)

## Tipos y características
Sonda térmica ubicada en la zona del salpicadero o cuadro de mandos en instalaciones de climatización regulada. (pág. 44)

## Principio de funcionamiento
Permite a la unidad de control verificar la coherencia entre la temperatura medida en el habitáculo y el nivel de confort o temperatura de consigna solicitada por los ocupantes. (pág. 44)

## Valores de trabajo
No documentado en fuentes. (pág. 44)

## Anomalías frecuentes
No documentado en fuentes. (pág. 44)

## Comportamiento en avería
No documentado en fuentes. (pág. 44)

## Cómo comprobarlo
No documentado en fuentes. (pág. 44)

## Mantenimiento
No documentado en fuentes. (pág. 44)

---

```yaml
tipo: componente
titulo: Sensor de temperatura exterior
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "44"
relacionados: [unidad-control-climatizador, sensor-temperatura-interior]
palabras: [salto térmico, 20 ºC, aire exterior, origen del aire]
```

## Misión
Medir la temperatura del aire ambiente exterior para la gestión de la mezcla térmica y la toma de aire en la unidad de control. (pág. 44)

## Tipos y características
Sonda de temperatura exterior integrada en la red de sensores de la climatización regulada. (pág. 44)

## Principio de funcionamiento
Envía la señal de temperatura ambiente al calculador de climatización. La unidad de control utiliza este dato para limitar el salto térmico a un máximo de 20 ºC entre el interior del habitáculo y el exterior, y para decidir la procedencia del aire (exterior o recirculado) necesario para satisfacer la demanda de confort. (pág. 44)

## Valores de trabajo
- Salto térmico máximo autorizado entre interior y exterior: 20 ºC. (pág. 44)

## Anomalías frecuentes
No documentado en fuentes. (pág. 44)

## Comportamiento en avería
No documentado en fuentes. (pág. 44)

## Cómo comprobarlo
No documentado en fuentes. (pág. 44)

## Mantenimiento
No documentado en fuentes. (pág. 44)

---

```yaml
tipo: fundamento
titulo: Higrometría y confort térmico del habitáculo
entidad: higrometria-y-confort
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "45"
relacionados: [regulacion-automatica, distribucion-aire]
palabras: [estudios fisiológicos, bienestar, velocidad de aire, gradiente térmico]
```

## Objeto
Garantizar las condiciones fisiológicas óptimas de temperatura, humedad y renovación de aire necesarias para el bienestar de los pasajeros. (pág. 45)

## Fundamento
Desarrollo de las funciones del climatizador regulado basándose en la respuesta fisiológica del cuerpo humano ante las variables del entorno térmico. (pág. 45)

## Desarrollo
1. La sensación de confort depende de la conjunción de múltiples parámetros: temperatura adecuada, grado de humedad, ausencia de olores, bajo nivel sonoro, velocidad del aire coordinada, iluminación y entorno cromático.
2. La alteración de cualquiera de estos factores modifica la percepción de calor o frío del usuario.
3. La temperatura indicada en la pantalla del climatizador sintetiza la gestión de estos parámetros globales.
4. Para cumplir con la fisiología humana, el reparto del aire genera una estratificación en la cual la temperatura a la altura de los pies resulta superior a la existente a la altura de la cabeza.

(pág. 45)

## Valores de referencia
No documentado en fuentes. (pág. 45)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 45)

---

```yaml
tipo: componente
titulo: Servomotor de mezcla de corriente continua con potenciómetro
entidad: servomotor-trampilla
variante: corriente-continua-potenciometro
area: climatizacion
sistema: distribucion-aire
forma_parte_de: distribucion-aire
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "46"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [motor CC, 12 V, engranaje, potenciómetro, reglaje de tope]
```

## Misión
Accionar el desplazamiento de la trampilla de mezcla para modular la proporción de aire caliente y frío. (pág. 46)

## Tipos y características
Motor de corriente continua alimentado a 12 voltios que acciona un tren de engranajes y dispone de un potenciómetro interno solidario al eje. (pág. 46)

📷 IMAGEN: Estructura interna del motor de CC con reductora de engranajes y potenciómetro de posición — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 46

## Principio de funcionamiento
Cuando el motor recibe alimentación de 12 V y gira, arrastra el mecanismo de la trampilla y la pista del potenciómetro de copia. La unidad de control analiza la tensión de salida del potenciómetro para conocer la posición angular exacta del motor y detenerlo en la posición correspondiente a la temperatura solicitada. (pág. 46)

## Valores de trabajo
- Tensión de alimentación del motor: 12 V. (pág. 46)

## Anomalías frecuentes
No documentado en fuentes. (pág. 46)

## Comportamiento en avería
No documentado en fuentes. (pág. 46)

## Cómo comprobarlo
No documentado en fuentes. (pág. 46)

## Mantenimiento
Este tipo de servomotor requiere un procedimiento de reglaje de topes mecánicos o alineación con marcas de posición. (pág. 46)

---

```yaml
tipo: componente
titulo: Servomotor de mezcla paso a paso
entidad: servomotor-trampilla
variante: paso-a-paso
area: climatizacion
sistema: distribucion-aire
forma_parte_de: distribucion-aire
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "47-51"
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [rotor magnético, bobinado A, bobinado B, inversión de polaridad, reinicialización]
```

## Misión
Ejecutar desplazamientos angulares precisos en las trampillas de mezcla, reciclaje o distribución del sistema de aire sin necesidad de potenciómetro de retorno. (pág. 47)

## Tipos y características
Actuador electromecánico formado por un rotor permanente multipolar (4, 6 o 12 pares de polos) y un estator con bobinados independientes (A y B) desfasados angularmente. (pág. 47, 51)

📷 IMAGEN: Disposición de rotor multipolar N-S y electroimán de excitación — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 47
📷 IMAGEN: Montaje de segundo bobinado B a 45º respecto al bobinado A — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 48
📷 IMAGEN: Tabla de impulsos eléctricos y polaridad en bornes 1-2 y 3-4 para giro en ambos sentidos — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 50

## Principio de funcionamiento
- La alimentación del bobinado A (bornes 1 y 2) genera un campo magnético que hace pivotar el rotor un "paso" (1/8 de vuelta en rotor de 4 polos).
- Para continuar el giro sin bloqueo, la unidad de control alimenta secuencialmente un segundo bobinado B (bornes 3 y 4) situado a 45º.
- Alternando la polaridad (+ / -) entre los bobinados A y B se consigue el desplazamiento en sentido horario o antihorario, completando un ciclo de 4 pasos.
- La unidad de control contabiliza internamente el número de pasos aplicados para determinar la posición teórica de la trampilla.

(pág. 47-51)

## Valores de trabajo
- Secuencia de ciclo básico: 4 pasos para un ciclo magnético completo. (pág. 51)

## Anomalías frecuentes
No documentado en fuentes. (pág. 51)

## Comportamiento en avería
Desfase entre la posición contada por el calculador y la posición real de la trampilla por frenado o bloqueo mecánico. (pág. 51)

## Cómo comprobarlo
No documentado en fuentes. (pág. 51)

## Mantenimiento
Realizar periódicamente un reglaje automático de re-inicialización (búsqueda de topes mecánicos) para que la unidad de control reconozca la posición real de partida y ponga a cero el contador de pasos. (pág. 51)

---

```yaml
tipo: fundamento
titulo: Regulación de climatización semiautomática y automática
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "53-54"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [semiautomática, automática, velocidad motoventilador, distribución de aire, calculador]
```

## Objeto
Gestionar las funciones térmicas y aerodinámicas del sistema de climatización mediante la intervención de un calculador electrónico. (pág. 53)

## Fundamento
Control automático de actuadores e impulsión a partir de la lectura de sensores de temperatura y las consignas de usuario. (pág. 53)

📷 IMAGEN: Esquema general del calculador electrónico de climatización en un sistema automático con servomotores y captadores — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 53

## Desarrollo
Niveles de automatización en la regulación:
- Climatización Semiautomática: La unidad de control regula automáticamente la temperatura de confort (mezcla), la velocidad de soplado del motoventilador de habitáculo y la posición de la trampilla de reciclaje. La repartición de salidas de aire debe ser seleccionada manualmente por el usuario.
- Climatización Automática: Además de regular temperatura, caudal de aire y reciclaje, la unidad de control gobierna de forma automatizada las trampillas de repartición para dirigir el aire hacia parabrisas, difusores frontales o pies según las necesidades del habitáculo.

(pág. 53, 54)

## Valores de referencia
No documentado en fuentes. (pág. 54)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 54)

---

```yaml
tipo: procedimiento
titulo: Normas de uso y mantenimiento preventivo del climatizador
entidad: mantenimiento-preventivo-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "58-59"
relacionados: [compresor, distribucion-aire]
palabras: [difusores, agua de condensación, retén de compresor, lubricación, reciclaje temporal]
```

## Objeto y alcance
Definir las pautas de utilización y precauciones operativas para conservar los elementos mecánicos del climatizador, garantizar la visibilidad y optimizar el confort. (pág. 58)

## Condiciones previas
Vehículo sometido a uso diario o tras estacionamiento prolongado bajo el sol en época calurosa. (pág. 58)

## Equipo y material
Mandos del sistema de climatización y elevalunas del vehículo. (pág. 58)

## Pasos
Protocolo de uso tras parada prolongada al sol:
1. Orientar los difusores de aire hacia el techo o paredes laterales para impedir corrientes de aire molestas.
2. Antes de arrancar, situar los mandos en la posición de máxima ventilación y máximo frío, dirigiendo el caudal hacia el tablero y la parte inferior.
3. Iniciar la marcha circulando unos minutos con las ventanillas bajadas para renovar el aire sobrecalentado del habitáculo.
4. Subir las ventanillas cuando la temperatura interior descienda a niveles aceptables.
5. Seleccionar la refrigeración máxima (reciclaje cerrado) para acelerar el enfriamiento, evitando mantener esta posición durante mucho tiempo para no viciar el aire interior.
6. Ajustar los mandos al nivel de temperatura de consigna deseado.

(pág. 58, 59)

## Valores de referencia
- Pérdida de agua bajo el vehículo: Fenómeno normal producido por la evacuación de condensados del evaporador a través de los tubos de desagüe. (pág. 58)

## Verificación final
Comprobar el correcto desempañado de los cristales para asegurar la visibilidad en conducción y verificar la ausencia de ruidos en el compresor. (pág. 58)

## Seguridad y normativa
El funcionamiento periódico del compresor permite la circulación continua de refrigerante y aceite, manteniendo lubricado el retén frontal del compresor para evitar fugas de gas y protegiendo las pistas de los rodamientos contra deterioros por vibración del motor. (pág. 58)

---

```yaml
tipo: procedimiento
titulo: Prevención de riesgos y seguridad con fluidos refrigerantes
entidad: seguridad-fluidos-refrigerantes
area: general
sistema: prl-y-seguridad
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "60-63"
relacionados: [refrigerante-r134a, equipos-taller]
palabras: [gafas de protección, guantes de látex, fosos de taller, congelación, lavado ocular, horno de secado]
```

## Objeto y alcance
Establecer las normas de seguridad e higiene laboral para la manipulación de fluidos refrigerantes en el taller y las pautas de primeros auxilios. (pág. 60)

## Condiciones previas
Intervenciones en el circuito frigorífico realizadas exclusivamente por personal especializado en zonas adecuadamente ventiladas. (pág. 60)

## Equipo y material
Gafas de protección ocular, guantes de látex y equipo de lavado ocular o abundante agua tibia. (pág. 60)

## Pasos
Primeros auxilios ante accidentes con refrigerante:
1. Contacto con la piel: descongelar con agua la zona afectada; retirar prendas contaminadas evitando desgarros si existen adherencias a la piel por bajas temperaturas (-30 ºC); lavar inmediatamente con abundante agua tibia y solicitar asistencia médica ante irritación o ampollas.
2. Contacto con los ojos: lavar inmediatamente con solución ocular o agua limpia, manteniendo los párpados cerrados al menos 10 minutos; acudir urgentemente al médico.
3. Ingestión accidental: no provocar el vómito; si el afectado está consciente, hacer enjuagar la boca y beber 200-300 ml de agua; solicitar asistencia médica inmediata.

(pág. 60, 61)

## Valores de referencia
- Temperatura de quemadura por congelación del fluido: aprox. -30 ºC.
- Tiempo de lavado en contacto ocular: mínimo 10 minutos.
- Volumen de agua a ingerir tras ingestión en paciente consciente: 200-300 ml.
- Límite térmico en horno de secado de pintura: máximo 20 minutos a 80 ºC (vaciando previamente la instalación de A/C si se supera este tiempo). (pág. 60, 61, 63)

## Verificación final
Asegurarse de que las llaves de la estación de carga y recipientes estén totalmente cerradas antes de conectar o desconectar los acoplamientos. (pág. 62)

## Seguridad y normativa
- Prohibida la realización de trabajos en circuitos frigoríficos dentro de fosos de reparación, dado que el gas refrigerante es más pesado que el aire y se acumula en el fondo con riesgo de sofocación.
- Prohibición absoluta de fumar: el gas refrigerante se descompone en productos venenosos al entrar en contacto con las ascuas.
- No sobrepasar la capacidad nominal de carga de los cilindros o bombonas de almacenamiento.

(pág. 60, 62)

---

```yaml
tipo: procedimiento
titulo: Vacío del circuito de aire acondicionado
entidad: vacio-circuito
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "64-65"
relacionados: [carga-refrigerante, filtro-deshidratador]
palabras: [depresión, ebullición del agua, evacuación de humedad, 1 bar]
```

## Objeto y alcance
Extraer el aire incondensable y evaporar la humedad residual presente en las tuberías y componentes del circuito de climatización. (pág. 64)

## Condiciones previas
Circuito frigorífico descargado de refrigerante y con estanqueidad verificada. (pág. 64)

## Equipo y material
Estación de carga con manómetros y bomba de vacío. (pág. 64)

## Pasos
1. Conectar los acoplamientos de la estación de carga a los racores de servicio de alta y baja presión.
2. Abrir las válvulas manuales de los manómetros de la estación de carga.
3. Poner en marcha la bomba de vacío para generar una acusada depresión en el interior del circuito.
4. Mantener la bomba funcionando el tiempo necesario para hacer descender el punto de ebullición de la humedad y provocar su evaporación a temperatura ambiente.
5. Cerrar las llaves de paso y detener la bomba de vacío, observando que la aguja se mantenga estable para confirmar la ausencia de fugas antes de efectuar la carga de gas.

(pág. 64, 65)

## Valores de referencia
- Fundamento físico: A la presión de 1 bar el agua hierve a 100 ºC; al disminuir la presión (depresión) en el circuito, el punto de ebullición baja, permitiendo la ebullición y extracción del agua en estado de vapor. (pág. 65)

## Verificación final
Comprobar el mantenimiento constante del valor de vacío en los manómetros tras la parada de la bomba. (pág. 65)

## Seguridad y normativa
La permanencia de aire y humedad degrada el rendimiento frigorífico, provoca la saturación prematura del filtro deshidratante y genera fallos por congelación o corrosión interna. (pág. 64)

---

COBERTURA: documento «6. EL CIRCUITO ELÉCTRICO.pptx», páginas 1 a 65 de 65. completo