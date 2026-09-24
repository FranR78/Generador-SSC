```yaml
tipo: fundamento
titulo: Climatización no regulada
entidad: regulacion-manual
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "3-10, 16-18, 26-30"
relacionados: [sensor-evaporador, unidad-control-climatizador, compresor, electroventilador-condensador]
palabras: [climatizacion manual, a/a on, a/a ciclo, a/a aut, rele compresion]
```

## Objeto
Regular manualmente el encendido del aire acondicionado y la ventilación del habitáculo sin gestión automática de la temperatura ni de la posición de las trampillas. (págs. 3, 18)

## Fundamento
El conductor demanda el encendido mediante mandos mecánicos o eléctricos. La conexión del compresor requiere la autorización simultánea del usuario, de la sonda de temperatura del evaporador y de la unidad de control del motor. (págs. 4-10, 16, 26-27)

## Desarrollo
El sistema maneja tres estados de señal para autorizar la excitación del relé del compresor:
1. A/A ON: Solicitud directa del usuario al pulsar el botón del cuadro de mandos. La unidad de control del motor incrementa el régimen de ralentí para compensar el esfuerzo mecánico del compresor. (págs. 10, 26, 27)
2. A/A CICLO: Puesta en marcha o parada del compresor comandada por la sonda de temperatura del evaporador. Solo se autoriza el funcionamiento con temperaturas superiores a 4 ºC para evitar la congelación del intercambio. (págs. 10, 27)
3. A/A AUT: Autorización final emitida por la unidad de control del motor (UCE) tras verificar las condiciones de carga, aceleración y estabilidad del motor. (págs. 10, 26, 27)

El circuito eléctrico de potencia integra conmutadores de ventilación de varias velocidades por resistencias en serie, presostato tri-función de seguridad, termostato de agua del motor y relé de mando del electroventilador. (págs. 5, 7, 9, 28-30)

## Valores de referencia
- Temperatura mínima de activación en evaporador (A/A CICLO): superior a 4 ºC. (págs. 10, 27)

## Errores de concepto frecuentes
Pensar que pulsar el botón A/A acopla directamente el compresor. La conexión real depende de que el evaporador esté por encima de 4 ºC y de que la UCE de motor confirme la autorización A/A AUT. (págs. 10, 27)

---

```yaml
tipo: componente
titulo: Sonda de temperatura del evaporador
entidad: sensor-evaporador
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "7-8, 10-20"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, compresor, evaporador]
palabras: [sonda evaporador, termostato mecanico, termostato electronico, tubo capilar, fuelle, 4 ºC]
```

## Misión
Informar de la temperatura del evaporador a la unidad de control o termostato para evitar la formación de hielo en el panal desconectando el compresor. (págs. 8, 10)

## Tipos y características
- Termostato mecánico: consta de un sensor insertado en el evaporador, tubo capilar con fluido, fuelle neumático, muelle de regulación con pomo, palanca de basculación e interruptor eléctrico. Se fabrica en versiones de 2 o 3 contactos. (págs. 8, 11-14)
- Termostato electrónico: consta de una sonda termostática de resistencia variable (NTC/PTC), centralita de mando electrónica y un potenciómetro de ajuste. (págs. 8, 17-20)

📷 IMAGEN: Despiece interno de termostato mecánico con fuelle, tubo capilar, muelle y palanca de contactos — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 11

📷 IMAGEN: Termostato electrónico compuesto por centralita de mando, potenciómetro y sonda de temperatura — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 19

## Principio de funcionamiento
- En el termostato mecánico, la variación de temperatura altera la presión del fluido capilar. La fuerza de presión \\(F_p\\) se contrapone a la fuerza del muelle \\(F_m\\), desplazando la palanca para abrir o cerrar los contactos eléctricos del embrague. (págs. 11-12)
- En el termostato electrónico, la sonda envía la señal resistiva a la centralita de mando. Cuando la temperatura medida supera los 4 ºC, la centralita valida la señal A/A CICLO y cierra el circuito del relé del compresor. (págs. 10, 18-20)

## Valores de trabajo
- Umbral térmico de autorización del compresor: superior a 4 ºC. (págs. 10, 27)

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Verificar la continuidad entre los terminales en función de la temperatura del panal o medir los valores de tensión entregados por la centralita electrónica en la salida de señal. (págs. 13-14, 20)

## Mantenimiento
Reglaje del pomo/tornillo de calibración en termostatos mecánicos para modificar la tensión inicial del muelle de disparo. (págs. 11-12)

---

```yaml
tipo: componente
titulo: Mando de selección de climatización y ventilación
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "16, 21-29"
forma_parte_de: distribucion-aire
relacionados: [ventilador-habitaculo, sensor-evaporador, servomotor-trampilla]
palabras: [cuadro de mandos, conmutador ventilador, reostato, pulsador a/a, pulsador reciclaje]
```

## Misión
Permitir al usuario seleccionar el encendido de la climatización, la velocidad del ventilador del habitáculo y la posición de la trampilla de recirculación. (págs. 16, 21-24)

## Tipos y características
Se presentan como pulsadores independientes de A/A, botones de mando de recirculación, grupos de mandos únicos o conjuntos combinados giratorios y deslizantes. Integran un conmutador de 4 velocidades conectado a un reostato de resistencias. (págs. 21-26)

📷 IMAGEN: Cuadro de mando e interruptores de puesta en marcha, recirculación y selector de velocidad — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 21

📷 IMAGEN: Esquema eléctrico interno del conmutador de ventilación, reostato y conexiones del compresor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 25

## Principio de funcionamiento
Al girar el selector de ventilación, se conmuta la corriente de alimentación hacia las distintas tomas de la red de resistencias (reostato) para modificar la velocidad del motor centrífugo (Low, Medium, High). Al pulsar la tecla A/A, se emite la señal A/A ON hacia el termostato y la UCE del motor. (págs. 25-27)

## Valores de trabajo
- Tensión de alimentación del módulo: 12 V (procedente de batería/contacto). (págs. 25, 28-29)

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Comprobar continuidad eléctrica entre los bornes de salida en las distintas posiciones de velocidad y la conmutación de masa o positivo al accionar las teclas de A/A y recirculación. (págs. 25-27)

## Mantenimiento
No documentado en fuentes.

---

```yaml
tipo: fundamento
titulo: Corte de seguridad del compresor en rampa para motor diésel
entidad: corte-compresor-diesel
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "23, 35-38"
relacionados: [embrague-compresor, unidad-control-climatizador]
palabras: [motor diesel, arranque en rampa, pedal embrague, pedal acelerador, rele temporizado 635, rele 661]
```

## Objeto
Optimizar los arranques en rampa y evitar el riesgo de calado del motor diésel anulando temporalmente la carga mecánica del compresor. (pág. 35)

## Fundamento
Interrumpir la corriente de alimentación a la bobina del embrague electromagnético durante un intervalo de cuatro segundos al detectar demanda de aceleración con el pedal de embrague pisado a fondo. (págs. 35-38)

## Desarrollo
1. Para activar el corte, el conductor debe pisar el pedal de embrague a fondo (abriendo el contactor 421) y solicitar alta carga en el acelerador (abriendo el contactor 405 en la palanca de la bomba de inyección 589). (págs. 35, 38)
2. Al abrirse ambos contactores, el relé 661 se desactiva y corta la alimentación al relé temporizado 635. (págs. 35, 37)
3. El relé temporizado 635 desexcita al relé de mando del embrague (584), interrumpiendo el paso de corriente hacia el embrague del compresor (171) durante cuatro segundos. (págs. 35, 37-38)
4. La instalación incorpora un diodo de desacoplamiento para evitar que el embrague sea alimentado de forma fortuita desde el cajetín de pre-postcalentamiento (257) durante el arranque. (págs. 35-37)

📷 IMAGEN: Esquema eléctrico de control de corte de compresor con relé temporizado 635, relé 661 y diodo de desacoplamiento — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 37

## Valores de referencia
- Tiempo de desacople del compresor: 4 segundos.
- Estado del contactor de pedal de embrague: sin reglaje; posicionado cerrado con el pie levantado (embragado). (págs. 35-36)

## Errores de concepto frecuentes
Pensar que el compresor permanece cortado todo el tiempo que se mantiene pisado el embrague. El desacople eléctrico está limitado a un intervalo fijo de 4 segundos mediante relé temporizado. (pág. 35)

---

```yaml
tipo: fundamento
titulo: Climatización regulada
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "42, 44-45, 52-54, 108-111"
relacionados: [unidad-control-climatizador, sensor-temperatura-interior, sensor-temperatura-exterior, servomotor-trampilla]
palabras: [climatizacion regulada, semiautomatica, automatica, sonda interior, sonda exterior, nivel de confort]
```

## Objeto
Ajustar de forma automática la temperatura, el caudal y la distribución del aire en el habitáculo para garantizar las condiciones de confort fisiológico. (págs. 44-45, 53)

## Fundamento
El calculador de climatización procesa las señales de las sondas de temperatura interior, exterior y del evaporador junto con la consigna fijada para controlar el motor de mezcla, la trampilla de reciclaje y la velocidad de la turbina. (págs. 44, 53, 55)

## Desarrollo
- Sonda de temperatura interior: verifica la coherencia entre la temperatura real del habitáculo y el nivel de confort demandado. (pág. 44)
- Sonda de temperatura exterior: impide que la unidad autorice un salto térmico superior a 20 ºC entre el interior y el exterior. Determina además la procedencia del aire (exterior o recirculado). (pág. 44)
- Niveles de equipamiento:
  - Climatización semiautomática: regula automáticamente la temperatura de confort, la velocidad del electroventilador y la posición de la trampilla de reciclaje. (pág. 53)
  - Climatización automática: además de las funciones anteriores, gobierna automáticamente la posición de las trampillas de repartición de aire. (págs. 53, 78)
- Nivel de confort: la temperatura mostrada en pantalla considera factores fisiológicos (humedad, ruido, velocidad del aire). En el reparto de aire, la temperatura entregada es mayor en la zona de los pies que en la zona de la cabeza. (pág. 45)

📷 IMAGEN: Esquema sinóptico de la climatización regulada con entradas de sondas y salidas a servomotores y relés — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 55

## Valores de referencia
- Diferencia térmica máxima autorizada interior/exterior: 20 ºC. (pág. 44)

## Errores de concepto frecuentes
Creer que el sistema busca una temperatura idéntica en todas las alturas del vehículo. La unidad envía aire a mayor temperatura a los pies que a la cabeza para cumplir los requisitos de confort fisiológico. (pág. 45)

---

```yaml
tipo: componente
titulo: Motor de mezcla de corriente continua con potenciómetro
entidad: servomotor-trampilla
variante: corriente-continua-potenciometro
area: climatizacion
sistema: distribucion-aire
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "46, 61-62"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, regulacion-automatica]
palabras: [motor cc, potenciometro, tension de salida, engranaje, tope, posicionamiento]
```

## Misión
Desplazar mecánicamente la trampilla de mezcla para modificar la temperatura del aire en respuesta a la orden enviada por la unidad de control. (págs. 46, 62)

## Tipos y características
Motor eléctrico de corriente continua alimentado a 12 V que acciona un mecanismo de engranaje con tornillo sin fin y un potenciómetro interno de memorización de posición. (págs. 61-62)

📷 IMAGEN: Esquema interno de motor de CC con mecanismo de engranaje y potenciómetro deslizante de posición — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 61

## Principio de funcionamiento
Al recibir alimentación eléctrica, el motor gira y mueve el potenciómetro a través del tren de engranajes. La unidad de control mide la tensión de salida devuelta por la pista del potenciómetro para conocer la posición exacta del motor y detenerlo en el punto requerido. (pág. 62)

## Valores de trabajo
- Tensión nominal de alimentación del motor: 12 V. (pág. 62)

## Anomalías frecuentes
Desgaste en la pista del potenciómetro o desajuste de las marcas de posición de los topes mecánicos. (pág. 62)

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Medir con el equipo de diagnosis la variación de la tensión de retorno del potenciómetro a lo largo de todo el recorrido de la trampilla. (pág. 62)

## Mantenimiento
Requiere un reglaje inicial del tope mecánico o una alineación de montaje según marca de referencia. (pág. 62)

---

```yaml
tipo: componente
titulo: Motor de mezcla paso a paso
entidad: servomotor-trampilla
variante: paso-a-paso
area: climatizacion
sistema: distribucion-aire
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "47-51, 63-75"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, regulacion-automatica]
palabras: [motor paso a paso, electroiman, bobinado a, bobinado b, pares de polos, re-inicializacion]
```

## Misión
Posicionar la trampilla de mezcla por impulsos discretos sin necesidad de utilizar un potenciómetro de retorno de posición. (págs. 47, 50-51)

## Tipos y características
Consta de un rotor central de imán permanente y dos electroimanes o bobinados (A y B) orientados a 45º. Existen versiones con 4, 6 y 12 pares de polos en el elemento giratorio. (págs. 48-51, 64-71)

📷 IMAGEN: Disposición de rotor magnético N-S y bobinados desfasados a 45º para movimiento paso a paso — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 67

## Principio de funcionamiento
Al alimentar secuencialmente los bobinados A (terminales 1-2) y B (terminales 3-4) alternando impulsos positivos y negativos, el conjunto pivota 1/8 de vuelta en cada cambio, realizando un «paso». Se requieren 4 pasos para completar un ciclo en sentido horario o antihorario. La unidad de control calcula la posición memorizando el recuento total de pasos aplicados. (págs. 47-51, 66-75)

## Valores de trabajo
- Giro por paso: 1/8 de vuelta.
- Pasos por ciclo completo: 4 pasos.
- Opciones de construcción: 4, 6 o 12 pares de polos. (págs. 47, 51)

## Anomalías frecuentes
Pérdida de sincronismo o salto de pasos provocado por durezas mecánicas en los ejes de las trampillas. (pág. 51)

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Verificar la tabla de polaridad enviada por la unidad de control en los bornes 1-2 y 3-4 durante la activación del motor. (págs. 50-51, 73-74)

## Mantenimiento
Ejecutar el procedimiento automático de «re-inicialización» (búsqueda de topes) para que la unidad de control memorice la posición real de inicio. (pág. 51)

---

```yaml
tipo: fundamento
titulo: Normas de utilización y confort del climatizador
entidad: higrometria-y-confort
area: climatizacion
sistema: control-climatizacion
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "56, 58-59, 82-85"
relacionados: [compresor, evaporador, recirculacion]
palabras: [orientacion difusores, drenaje agua, deshumectacion, retén compresor, refrigeracion maxima]
```

## Objeto
Asegurar el confort térmico, prevenir el empañado de los cristales y proteger los componentes mecánicos del sistema de climatización. (págs. 58, 82-83)

## Fundamento
Uso correcto de la distribución del caudal de aire, control de los niveles de humedad y lubricación periódica de los elementos móviles del compresor. (págs. 58-59, 82-85)

## Desarrollo
1. Orientación de difusores: dirigir los caudales hacia el techo o laterales para evitar corrientes de aire directas sobre los pasajeros. (págs. 58, 82)
2. Agua de condensación: la presencia de goteo bajo el vehículo es un fenómeno normal procedente del tubo de desagüe del evaporador al deshumectar el aire. (págs. 58, 82)
3. Mantenimiento del compresor: hacer funcionar el climatizador con regularidad permite la circulación de gas y aceite, lubricando el retén frontal (evita fugas) y protegiendo las pistas de los rodamientos frente a las vibraciones. (págs. 58-59, 83-84)
4. Arranque tras estacionar al sol: ajustar máxima ventilación y máximo frío hacia el tablero/pies; circular con ventanillas bajadas unos minutos; subir cristales al bajar la temperatura; usar refrigeración máxima (recirculación cerrada) si el calor exterior es elevado. (págs. 59, 84-85)

## Valores de referencia
- Tiempo en refrigeración máxima (recirculación): no prolongar en exceso para evitar viciar el aire del habitáculo y disminuir la seguridad preventiva. (págs. 59, 85)

## Errores de concepto frecuentes
Confundir el charco de agua de condensación bajo el vehículo con una fuga del circuito de refrigeración del motor. (págs. 58, 82)

---

```yaml
tipo: fundamento
titulo: Seguridad y riesgos en la manipulación de fluidos refrigerantes
entidad: prl-refrigerantes
area: general
sistema: prl-y-seguridad
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "56, 60-63, 86-91"
relacionados: [refrigerante-r134a, carga-refrigerante]
palabras: [guantes, gafas, foso de reparacion, quemadura -30ºC, inhalacion, horno de secado]
```

## Objeto
Prevenir riesgos laborales, intoxicaciones por inhalación y quemaduras por congelación durante la manipulación de fluidos refrigerantes en el taller. (págs. 60, 86)

## Fundamento
Adopción de equipos de protección individual (EPIs), ventilación de las zonas de trabajo y cumplimiento de restricciones térmicas sobre los componentes del circuito. (págs. 60-63, 86-91)

## Desarrollo
- Protección individual: uso obligatorio de guantes de látex y gafas de protección. Trabajar siempre en locales bien ventilados. (págs. 60, 86)
- Prohibición de fosos: prohibido intervenir en el circuito dentro de fosos de reparación. El gas es más pesado que el aire, se acumula en el fondo y provoca sofoco o vértigo. (págs. 60, 87)
- Primeros auxilios por contacto en piel: aplicar agua tibia en la zona afectada; retirar la ropa no adherida (evitar arrancar prendas pegadas por congelación a –30 ºC); lavar con abundante agua y acudir al médico. (págs. 60, 87-88)
- Primeros auxilios por contacto ocular: lavar inmediatamente con solución ocular o agua limpia manteniendo los párpados cerrados durante al menos 10 minutos. (págs. 61, 88)
- Primeros auxilios por ingestión: no provocar el vómito; si el paciente está consciente, hacer enjuagar la boca y beber de 200 a 300 ml de agua. (págs. 61, 89)
- Normas en taller: prohibido fumar (el gas se descompone en vapores venenosos al contacto con brasas); no superar 20 minutos a 80 ºC en hornos de secado de pintura sin vaciar previamente el circuito; no aplicar chorros directos de agua/aire a presión sobre los componentes durante el lavado del motor. (págs. 62-63, 90-92)

## Valores de referencia
- Temperatura de quemadura por congelación: aprox. –30 ºC. (págs. 60, 88)
- Tiempo mínimo de lavado ocular: 10 minutos. (págs. 61, 88)
- Cantidad de agua en ingestión consciente: 200-300 ml. (págs. 61, 89)
- Límite de permanencia en horno a 80 ºC: máximo 20 minutos con circuito vacío. (págs. 63, 91)

## Errores de concepto frecuentes
Fumar durante la manipulación del gas refrigerante asumiendo que no es inflamable. La incandescencia del cigarrillo descompone el fluido creando productos venenosos de alta toxicidad. (págs. 62, 90)

---

```yaml
tipo: procedimiento
titulo: Vacío del circuito de aire acondicionado
entidad: vacio-circuito
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "56, 64-65, 92-95"
relacionados: [carga-refrigerante, filtro-deshidratador]
palabras: [vacio, humedad, ebullicion, depresion, bar, 100 ºC]
```

## Objeto y alcance
Extraer la totalidad del aire no condensable y la humedad retenida en las tuberías y componentes del circuito antes de realizar la carga. (págs. 64, 92)

## Condiciones previas
Circuito frigorífico cerrado, sin fugas de gran tamaño y sin presión de refrigerante en su interior. (págs. 64, 92)

## Equipo y material
Estación de carga equipada con bomba de vacío y puente de manómetros. (págs. 64, 98-99)

## Pasos
1. Conectar los latiguillos de alta y baja presión de la estación a las tomas de servicio del vehículo.
2. Abrir las válvulas del puente de manómetros dirigiendo las vías hacia la bomba de vacío.
3. Poner en marcha la bomba de vacío para generar una fuerte depresión en el interior del circuito.
4. Mantener la bomba funcionando durante el tiempo programado para reducir el punto de ebullición del agua y lograr la evaporación completa de la humedad. (págs. 64-65, 93-95, 98-99)

## Valores de referencia
- Temperatura de ebullición del agua a 1 bar: 100 ºC. Al reducir la presión por debajo de 1 bar con la bomba de vacío, el agua evapora a temperatura ambiente. (págs. 65, 94-95)

📷 IMAGEN: Gráfica de curva de presión (bar) frente a temperatura de ebullición del agua (ºC) — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 94

## Verificación final
Detener la bomba y comprobar en el vacuómetro que la depresión se mantiene estable, lo que confirma la hermeticidad del circuito. (págs. 64, 92)

## Seguridad y normativa
Utilizar gafas de protección y guantes durante la manipulación de los acoples. (págs. 60, 86)

---

```yaml
tipo: procedimiento
titulo: Carga de fluido refrigerante
entidad: carga-refrigerante
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "56, 66-67, 95-99"
relacionados: [vacio-circuito, refrigerante-r134a, aceite-frigorifico]
palabras: [carga refrigerante, r12, r134a, pesaje, cilindro dosificador, bomba de vacio, aceite nuevo]
```

## Objeto y alcance
Introducir la masa exacta de fluido refrigerante (R12 o R134a) y reponer la dosis de aceite lubricante en el circuito frigorífico. (págs. 66-67, 95-97)

## Condiciones previas
Fase de vacío completada satisfactoriamente. Operación realizada en zona aireada y sin fuentes de calor próximas. (págs. 66, 95-96)

## Equipo y material
Estación de carga con cilindro dosificador o báscula de pesaje, recipiente de fluido, bomba de vacío, puente de manómetros (BP, AP, GP) y recipientes de aceite. Guantes y gafas. (págs. 66, 98-99)

📷 IMAGEN: Esquema completo de la estación de carga con cilindro dosificador, manómetros y bomba de vacío — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 98

## Pasos
1. Descargar el fluido residual de la instalación y reciclarlo.
2. Separar y medir el volumen de aceite extraído del compresor para evaluar su estado.
3. Realizar el vacío completo del circuito.
4. Inyectar la cantidad de aceite nuevo equivalente a la recuperada.
5. Pesar e introducir en el circuito la masa exacta de refrigerante recomendada por el fabricante utilizando la báscula o el cilindro dosificador. (págs. 66-67, 96-97)

## Valores de referencia
- Masa de refrigerante: valor exacto especificado en la placa de características pesada en báscula. (págs. 67, 97)

## Verificación final
Poner en marcha el motor con la climatización activada para controlar las presiones de trabajo en los manómetros de alta y baja presión. (págs. 56, 98)

## Seguridad y normativa
Uso obligatorio de gafas protectoras y guantes de látex. Trabajo en ambiente ventilado. (págs. 60, 66, 86, 95)

---

```yaml
tipo: procedimiento
titulo: Detección de fugas en el circuito frigorífico
entidad: deteccion-fugas
area: climatizacion
sistema: circuito-frigorifico
fuente: "6. EL CIRCUITO ELÉCTRICO.pptx"
paginas: "57, 100-108"
relacionados: [trazador-uv, carga-refrigerante]
palabras: [detector de fugas, efecto corona, fluorescencia, diodo calefactado, conductividad termica, g / año]
```

## Objeto y alcance
Localizar inestabilidades y puntos de escape de refrigerante en racores, tuberías, condensador, evaporador y retén del compresor. (págs. 57, 100-108)

## Condiciones previas
Circuito presurizado con refrigerante o aditivado con trazador fluorescente y aceite. (págs. 102, 108)

## Equipo y material
- Detectores electrónicos: de efecto Corona, de conductividad térmica, de diodo calefactado o de célula de permeabilidad cerámica/ionización.
- Medios ópticos y químicos: lámpara de rayos ultravioleta (UV), aditivo fluorescente (30 ml de aceite) y agua jabonosa. (págs. 102-108)

📷 IMAGEN: Lámpara de radiación ultravioleta para localización de fugas con trazador fluorescente — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 107

## Pasos
1. Para detección electrónica: desplazar la sonda del detector lentamente a lo largo de las uniones y conexiones sin llegar a tocar las superficies.
2. Para detección por fluorescencia: introducir 30 ml de aceite con trazador en la carga, poner en funcionamiento el sistema y examinar los racores utilizando la lámpara ultravioleta.
3. Para detección con agua jabonosa: aplicar la solución sobre la zona sospechosa únicamente ante la sospecha de fugas de gran tamaño. (págs. 102-108)

## Valores de referencia
- Sensibilidad mínima en posición estática: 5 g/año.
- Sensibilidad en movimiento: 1 a 5 g/año.
- Tiempo de recuperación tras saturación (fuga de 40 g/año): 2 a 4 segundos.
- Sensibilidad de detector por conductividad térmica: < 5 g/año.
- Límite de detección por fluorescencia: fugas de hasta 7 g/año.
- Dosis de aceite con trazador recomendada: 30 ml. (págs. 100, 102-103, 108)

## Verificación final
Confirmar la ausencia de alarmas acústicas en el detector electrónico o la inexistencia de puntos fluorescentes bajo la luz UV tras reparar la fuga. (págs. 100, 107)

## Seguridad y normativa
Utilizar gafas de protección con filtro UV al trabajar con la lámpara y guantes de protección. (págs. 60, 86)

---

COBERTURA: documento «6. EL CIRCUITO ELÉCTRICO.pptx», páginas 1 a 111 de 111. [completo]