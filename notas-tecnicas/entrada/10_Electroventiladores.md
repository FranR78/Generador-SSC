```yaml
tipo: componente
titulo: Electroventilador
entidad: electroventilador-condensador
area: climatizacion
sistema: circuito-frigorifico
fuente: "10. Electroventiladores.pdf"
paginas: "83-85"
forma_parte_de: circuito-frigorifico
relacionados: [condensador, refrigeracion-motor, unidad-control-ventiladores]
palabras: [corriente de aire, I velocidad, II velocidad, 16 bares, sobrepresión]
```

## Misión
Establecer una corriente de aire fresco a través del condensador y del radiador para forzar la circulación de aire cuando el aire de marcha es insuficiente, especialmente a baja velocidad o con el vehículo parado (pág. 83).

## Tipos y características
Se instalan uno, dos o hasta tres electroventiladores para garantizar la adecuada refrigeración de la climatización y del motor (pág. 83). Funcionan de manera combinada ofreciendo distintas etapas de rendimiento (I velocidad y II velocidad) (págs. 83-84).

## Principio de funcionamiento
Al activar el climatizador y funcionar el compresor con una presión superior a 2 bares, la unidad de control activa la I velocidad de los electroventiladores (págs. 83-84). Si la presión en el circuito frigorífico alcanza los 16 bares o la temperatura del líquido refrigerante supera los 99 ºC, los ventiladores conmutan a la II velocidad (pág. 84). Cuando el climatizador está desconectado, el funcionamiento depende exclusivamente de la temperatura del refrigerante del motor (pág. 85).

## Valores de trabajo
- Presión de activación de I velocidad (con A/A activado): superior a 2 bares en el circuito frigorífico (págs. 83-84).
- Temperatura de activación de I velocidad (sin A/A): entre 84 ºC y 98 ºC según el termocontacto del radiador (pág. 84).
- Presión de activación de II velocidad: superior a 16 bares en el circuito de alta del fluido refrigerante (pág. 84).
- Temperatura de activación de II velocidad: superior a 99 ºC (entre 99 ºC y 105 ºC) (pág. 84).
- Desactivación de II velocidad a I velocidad: cuando la presión cae por debajo de 16 bares y la temperatura de refrigerante desciende de 99 ºC (pág. 85).

## Anomalías frecuentes
- Falta de funcionamiento de los electroventiladores por avería en relés, fusible de protección, cableado o electrónica de control (págs. 84-86).

## Comportamiento en avería
Si los electroventiladores no funcionan al estar el vehículo parado, la presión de alta del circuito frigorífico sube de forma excesiva y el compresor se desconecta automáticamente por motivos de seguridad (pág. 85). El climatizador solo enfriará con el vehículo en circulación por efecto del aire de marcha y dejará de enfriar en cuanto el vehículo se detenga (pág. 85).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Unidad de control para los ventiladores de refrigeración
entidad: unidad-control-ventiladores
area: electricidad-electronica
sistema: control-climatizacion
fuente: "10. Electroventiladores.pdf"
paginas: "84-85"
relacionados: [electroventilador-condensador, compresor, unidad-control-climatizador]
palabras: [caja de relés, embrague compresor, fusible, Can-Bus, trinaria, sensor MAP]
```

## Misión
Gestionar la activación de las distintas velocidades de los electroventiladores, controlar el acoplamiento magnético del compresor y supervisar la temperatura del sistema (págs. 83-85).

## Tipos y características
Módulo o caja electrónica instalada en el compartimento motor (pág. 84). Integra en su interior los relés de conmutación de los electroventiladores, el relé de excitación del embrague del compresor, un fusible de protección y la electrónica de gestión (pág. 84).

## Principio de funcionamiento
Recibe señales de entrada desde el termocontacto del radiador, el conmutador de presión (trinaria), el transmisor de alta presión (sensor MAP), el panel de mandos de la climatización y la red Can-Bus de datos (pág. 85). Procesa esta información para activar los relés de velocidad de los electroventiladores y la excitación del compresor, vigilar la temperatura del refrigerante, gestionar bombas de agua auxiliares e intercambiar información con la unidad de motor y de cambio automático (pág. 85).

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

```yaml
tipo: fundamento
titulo: Función de elevación de ralentí en atascos por baja potencia frigorífica
entidad: elevacion-ralenti-climatizador
area: climatizacion
sistema: control-climatizacion
fuente: "10. Electroventiladores.pdf"
paginas: "85"
relacionados: [unidad-control-climatizador, compresor, sensor-evaporador]
palabras: [sensor evaporador, potencia insuficiente, Can-Bus confort, < 5 km/h, subida r.p.m.]
```

## Objeto
Incrementar el rendimiento del compresor y la capacidad de refrigeración del habitáculo durante la circulación a velocidad muy reducida o en retenciones de tráfico (pág. 85).

## Fundamento
A velocidades inferiores a 5 km/h el régimen del motor se mantiene al ralentí, lo que reduce las revoluciones del compresor y disminuye la potencia frigorífica suministrada por el evaporador al habitáculo (pág. 85).

## Desarrollo
La unidad de control de climatización monitoriza la potencia frigorífica mediante el sensor de temperatura de salida del evaporador (pág. 85). Si detecta que la potencia es insuficiente estando la activación del compresor al máximo (98%), envía un mensaje de solicitud a la red Can-Bus de confort (pág. 85). Al recibir este mensaje, la unidad de control del motor incrementa automáticamente las revoluciones de ralentí para aumentar la velocidad del compresor y mejorar su rendimiento frigorífico (pág. 85).

## Valores de referencia
- Grado de activación máxima del compresor para solicitar la función: 98% (pág. 85).
- Velocidad máxima del vehículo para habilitar la función: inferior a 5 km/h (pág. 85).

## Errores de concepto frecuentes
- Asumir que el aumento del ralentí en retenciones se debe únicamente a una elevación de la temperatura del motor, omitiendo que la propia unidad de climatización puede solicitarlo por falta de rendimiento en el evaporador (pág. 85).

```yaml
tipo: fundamento
titulo: Regulación continua de electroventiladores mediante señal PWM
entidad: regulacion-electroventiladores-pwm
area: electricidad-electronica
sistema: control-climatizacion
fuente: "10. Electroventiladores.pdf"
paginas: "85-86"
relacionados: [electroventilador-condensador, unidad-control-ventiladores]
palabras: [PWM, periodo positivo, variador continuo, función de emergencia, Can-Bus]
```

## Objeto
Ajustar de manera continua y progresiva la velocidad de giro de los electroventiladores en función de la demanda instantánea del motor y del sistema de climatización (págs. 85-86).

## Fundamento
Control electrónico integrado en el propio cuerpo del electroventilador que interpreta una señal de excitación modulada en anchura de pulso (PWM) emitida por la unidad de control del motor (pág. 86).

## Desarrollo
La unidad de control de climatización solicita la activación de los ventiladores mediante un mensaje en la línea Can-Bus de confort, en función de la carga del compresor y de la presión de refrigerante (pág. 85). La unidad de control del motor genera una señal PWM de frecuencia fija y proporción de periodo positivo variable hacia la electrónica del ventilador (pág. 86). A medida que aumenta el porcentaje de periodo positivo de la señal PWM, incrementa proporcionalmente la velocidad de giro de los electroventiladores (pág. 86). Si la proporción de periodo supera el 90%, los ventiladores funcionan a la máxima velocidad (pág. 86).

📷 IMAGEN: Gráfica de la velocidad de los electroventiladores (%) frente a la proporción de periodo positivo (%) de la señal PWM y zona de función de emergencia — Fuente: 10. Electroventiladores.pdf, pág. 86

## Valores de referencia
- Frecuencia de la señal PWM: fija (pág. 86).
- Proporción de periodo positivo para máxima velocidad de giro (100%): superior al 90% (pág. 86).
- Umbrales de activación de la función de emergencia: señal PWM inferior al 8% o superior al 95% (pág. 86).

## Errores de concepto frecuentes
- Creer que este sistema emplea resistencias escalonadas de potencia para variar la velocidad en lugar de un módulo electrónico de regulación por señal PWM (págs. 85-86).

```yaml
tipo: diagnostico
titulo: Electroventiladores funcionando de forma continua a la máxima velocidad al conectar el contacto
entidad: diagnostico-electroventiladores-maxima-velocidad
area: electricidad-electronica
sistema: control-climatizacion
fuente: "10. Electroventiladores.pdf"
paginas: "86"
relacionados: [electroventilador-condensador, unidad-control-ventiladores]
palabras: [función de emergencia, derivación a masa, derivación a positivo, máxima velocidad, máquina de diagnosis]
```

## Síntoma
Los electroventiladores de refrigeración se activan y giran de forma ininterrumpida a su velocidad máxima desde el mismo instante en que se conecta el contacto de encendido del vehículo (pág. 86).

## Causas posibles
- Activación de la función de emergencia de la electrónica del electroventilador por recepción de una señal PWM fuera del margen válido (proporción de periodo positivo inferior al 8% o superior al 95%) (pág. 86).
- Cortocircuito o derivación del cable de la señal de excitación a masa (GND) o a positivo (+12 V) (pág. 86).
- Avería detectada y memorizada en los componentes del circuito de refrigeración del motor o del sistema de climatización (pág. 86).

## Cómo separar las causas
- Conectar la máquina de diagnosis al conector OBD del vehículo y consultar la memoria de averías de la unidad de control del motor y de la unidad de climatización para identificar el código registrado (pág. 86).
- Medir con osciloscopio o polímetro en el cable de señal PWM hacia la electrónica del ventilador para comprobar si la proporción de periodo positivo está fuera del margen del 8% al 95% o si la línea se encuentra derivada a masa o a positivo (+12 V) (pág. 86).

## Valores de referencia
- Margen de periodo positivo de la señal PWM para funcionamiento normal: del 8% al 95% (pág. 86).
- Rango de señal PWM que desencadena la función de emergencia: menor del 8% o mayor del 95% (pág. 86).

## Verificación tras la reparación
- Borrar la memoria de averías mediante la máquina de diagnosis y conectar el contacto verificando que los electroventiladores permanecen apagados en frío y que la señal PWM se mantiene dentro de los valores de trabajo especificados (pág. 86).

COBERTURA: documento «10. Electroventiladores.pdf», páginas 83 a 86 de 86. completo