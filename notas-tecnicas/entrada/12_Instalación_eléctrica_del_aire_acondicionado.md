```yaml
tipo: fundamento
titulo: Circuito eléctrico de aire acondicionado manual con trinaria
entidad: circuito-electrico-aire-acondicionado-manual
area: climatizacion
sistema: control-climatizacion
fuente: "12. Instalación eléctrica del aire acondicionado.pdf"
paginas: "94-95"
relacionados: [presostato, electroventilador-condensador, compresor]
palabras: [A/A manual, trinaria, presostato, NTC evaporador, NTC motor, UCE motor]
```

## Objeto
Estructura y lógica de funcionamiento de la instalación eléctrica y de control para un sistema de aire acondicionado manual regulado por presostato trinario (págs. 94-95).

## Fundamento
Interconexión eléctrica de elementos de mando, relés, sensores térmicos y dispositivos de seguridad requerida para gobernar el embrague del compresor, el electroventilador de refrigeración y la turbina de aire fresco (págs. 94-95).

## Desarrollo
Componentes y lógica de gestión del circuito:
1. Interruptor de AC y selector de velocidad de la turbina (1): conecta o desconecta el sistema a voluntad del conductor y regula la velocidad de la turbina. Exige que la turbina gire al menos a velocidad lenta para habilitar el funcionamiento del sistema (págs. 94-95).
2. Relé de alimentación del electroventilador (2): suministra corriente a las dos velocidades del electroventilador (págs. 94-95).
3. Electroventilador del circuito de refrigeración (3): enfría el condensador. Al activar el A/C funciona en velocidad lenta; si la presión del circuito aumenta, conmuta a la velocidad rápida (págs. 94-95).
4. Presostato trinario de alta (4): mide la presión en la línea de alta. Determina el arranque o parada del compresor mediante sus bornes 1-2 (P1 = 2 bar / 32 bar) y la activación de la velocidad rápida del electroventilador mediante sus bornes 3-4 (P2 = 16 bar) (págs. 94-95).
5. NTC de temperatura del refrigerante del motor (5): desconecta el aire acondicionado si la temperatura del motor sobrepasa los límites de seguridad (págs. 94-95).
6. Electrónica de control y relés (6): conmutan la alimentación eléctrica hacia los componentes del circuito (págs. 94-95).
7. Termostato de refrigerante del radiador (7): conmuta las velocidades del electroventilador según la temperatura del líquido refrigerante (t1 = 95 ºC para velocidad lenta; t2 = 103 ºC para velocidad rápida) (págs. 94-95).
8. Sonda NTC del evaporador (8): supervisa la temperatura de evaporación y desconecta el compresor si hay riesgo de congelación. No se instala en sistemas con compresor de cilindrada variable (págs. 94-95).
9. Turbina de aire fresco (9): hace pasar el aire a través del evaporador para su enfriamiento y deshidratación (págs. 94-95).
10. UCE del motor (10): autoriza la conexión del compresor únicamente cuando el motor gira al ralentí de forma estable y lo desconecta durante aceleraciones bruscas (págs. 94-95).
11. Compresor de aire acondicionado (11): acoplado mecánicamente mediante embrague electromagnético (págs. 94-95).
12. Relé de II velocidad del electroventilador (12): conmuta la alimentación de alta velocidad del ventilador (págs. 94-95).

📷 IMAGEN: Esquema eléctrico de un sistema de aire acondicionado manual con presostato trinario y relés de control — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 94

## Valores de referencia
- Presostato trinario (P1 - corte compresor por baja/alta): 2 bar por baja / 32 bar por alta (pág. 94).
- Presostato trinario (P2 - activación II velocidad electroventilador): 16 bar (pág. 94).
- Termostato de refrigerante (t1 - velocidad lenta electroventilador): 95 ºC (pág. 94).
- Termostato de refrigerante (t2 - velocidad rápida electroventilador): 103 ºC (pág. 94).
- Condición de funcionamiento inicial: turbina girando como mínimo a velocidad lenta (pág. 94).

## Errores de concepto frecuentes
- Creer que el compresor puede acoplarse estando la turbina de aire fresco totalmente apagada (pág. 94).
- Asumir que la sonda del evaporador se utiliza en sistemas provistos de compresor de cilindrada variable (pág. 94).

```yaml
tipo: fundamento
titulo: Circuito eléctrico de aire acondicionado semiautomático con sensor MAP y compresor variable
entidad: circuito-electrico-aire-acondicionado-semiautomatico
area: climatizacion
sistema: control-climatizacion
fuente: "12. Instalación eléctrica del aire acondicionado.pdf"
paginas: "95"
relacionados: [transmisor-presion, valvula-reguladora-compresor, unidad-control-climatizador]
palabras: [A/A semiautomático, sensor MAP, electroválvula regulación, sin embrague, Can-Bus]
```

## Objeto
Estructura de la instalación eléctrica e interconexión de señales en un sistema de aire acondicionado semiautomático provisto de transmisor de presión de alta (sensor MAP) y compresor de cilindrada variable sin embrague (pág. 95).

## Fundamento
Gestión electrónica distribuida mediante intercambio de señales analógicas, digitales y de red Can-Bus entre la UCE del Climatizador, la UCE del Motor y la UCE de la Red de a Bordo para regular la cilindrada del compresor y la distribución de aire (pág. 95).

## Desarrollo
Estructura de conexionado y código de colores de líneas:
- Tipo de líneas de corriente: línea 30 (positivo directo de batería), línea 15 (positivo tras contacto), línea X (positivo tras contacto con desconexión en arranque) y línea 31 (masa) (págs. 95-96).
- Tipo de señales representadas: señal de entrada, señal de salida, alimentación de positivo, masa, señal bidireccional y bus de datos Can-Bus (págs. 95-96).

Componentes e integración en el circuito:
- Módulos de control: UCE de la red de a bordo (9), Cuadro de instrumentos (10), UCE del motor (11), UCE del climatizador (12) y UCE de los ventiladores (23) (pág. 95).
- Captadores de información: Sensor MAP en alta (3), Sensor de temperatura exterior (4), Transmisor de velocidad del vehículo (5), Alternador (7), Transmisor de temperatura interior (13), Sensor de temperatura de salida del evaporador (18), Sensor de temperatura de zona pies (19) y Sensor de temperatura de difusor central (20) (pág. 95).
- Actuadores de ajuste: Regulador de velocidad de la turbina (2), Motor y potenciómetro de la trampilla de temperatura (14, 15), Motor y potenciómetro de la trampilla de recirculación (16, 17), Electroválvula de regulación del compresor sin embrague (21) y Electroventiladores de refrigeración (24, 25) (pág. 95).
- Diagnóstico y confort: Conector de diagnosis OBD (6) y Regulador de iluminación del display (8) (pág. 95).

📷 IMAGEN: Esquema eléctrico de un aire acondicionado semiautomático con sensor MAP, compresor regulado por electroválvula sin embrague y código de colores de señales — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 95

## Valores de referencia
- Líneas de corriente norma DIN: Línea 30 (positivo directo de batería), Línea 15 (positivo después de contacto), Línea X (desconexión en arranque), Línea 31 (masa) (págs. 95-96).

## Errores de concepto frecuentes
- Confundir la señal de un compresor de cilindrada variable regulado por electroválvula con la alimentación de un embrague electromagnético convencional (pág. 95).

```yaml
tipo: fundamento
titulo: Circuito eléctrico y gestión electrónica del climatizador automático
entidad: circuito-electrico-climatizador-automatico
area: climatizacion
sistema: control-climatizacion
fuente: "12. Instalación eléctrica del aire acondicionado.pdf"
paginas: "96-97"
relacionados: [unidad-control-climatizador, servomotor-trampilla, sensor-evaporador, sensor-calidad-aire]
palabras: [climatizador automático, autodiagnóstico, sustitución de señal, valor supletorio, Can-Bus]
```

## Objeto
Esquema eléctrico didáctico, asignación de pines, funciones de componentes y estrategia de funcionamiento en caso de avería en un climatizador automático (págs. 96-97).

## Fundamento
Control integral de la temperatura, caudal y distribución del aire mediante una UCE centralizada que procesa captadores, gobierna servomotores con potenciómetro de posición y realiza el autodiagnóstico del sistema memorizando averías (págs. 96-97).

## Desarrollo
Lógica de funcionamiento y sustitución de señales en caso de avería:
1. Turbina de aire fresco (1) y Regulador (2): hacen pasar aire por el evaporador. Si fallan la turbina o el regulador, el climatizador deja de funcionar (págs. 96-97).
2. Sensor MAP de alta (3): mide la presión de alta. En caso de avería, el climatizador no funciona (págs. 96-97).
3. Sensor de temperatura exterior (4): mide la temperatura ambiente. Si falla, el display muestra "--.- ºC" y se adopta el valor del sensor de temperatura de entrada de aire (págs. 96-97).
4. Transmisor de velocidad (5) y Cuadro de instrumentos (11): transmiten la velocidad por Can-Bus. Si falla la señal, no se indica la velocidad ni actúa la trampilla de velocidad (págs. 96-97).
5. Conector de diagnóstico (6): permite la comunicación entre la máquina de diagnosis OBD y la UCE del climatizador para consultar la memoria de averías (págs. 96-97).
6. Interruptor de marcha atrás (7): activa automáticamente la recirculación al engranar la marcha atrás. Si falla, se desactiva la función (págs. 96-97).
7. Alternador (8): informa de la carga o trabajo del alternador para desconectar el compresor en momentos críticos. Si falla la señal, se anula la función (págs. 96-97).
8. UCE de la red de a bordo (10): gestiona el intercambio de datos Can-Bus. Si falla, el climatizador puede dejar de funcionar (págs. 96-97).
9. UCE del motor (12): ajusta el ralentí y desconecta el compresor en aceleraciones. Si falla la comunicación, se desactivan estas funciones (págs. 96-97).
10. Fotosensor de radiación solar (13): corrige la regulación según el soleamiento. Si falla, se desactiva la función (págs. 96-97).
11. UCE del climatizador (14): unidad central de control. En caso de fallo interno, el climatizador no funciona (págs. 96-97).
12. Transmisor de temperatura interior (15): mide la temperatura del habitáculo. En caso de fallo, la UCE asume un valor fijo (págs. 96-97).
13. Servomotores y potenciómetros de trampillas (16 a 23): mueven las trampillas de temperatura, deshielo, central y recirculación/velocidad. Los potenciómetros informan de la posición real a la UCE. Si falla un potenciómetro, no se puede ajustar o controlar la función correspondiente (págs. 96-97).
14. Sensor de temperatura de salida del evaporador (24): si falta la señal, la UCE calcula el estado con la información del sensor MAP (págs. 96-97).
15. Sensores de temperatura de zona pies (25) y difusor central (26): si se interrumpe la señal, se anula la regulación automática (págs. 96-97).
16. Sensor de temperatura de entrada de aire (27): si falla, se adopta la lectura del sensor de temperatura exterior (págs. 96-97).
17. Electroválvula de regulación del compresor (28): ajusta la cilindrada. Si se avería, el compresor se ajusta automáticamente a su mínimo rendimiento (carrera nula) (págs. 96-97).
18. Termostato del radiador (29) y UCE de ventiladores (30): si la UCE de ventiladores falla, el climatizador no funciona. En función de emergencia del termostato, los ventiladores se conectan a máxima velocidad (págs. 96-97).

📷 IMAGEN: Esquema didáctico de un climatizador automático con indicación de conectores T2, T4, T6, líneas DIN y tabla de averías — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 96

## Valores de referencia
- Lectura en display en caso de fallo del sensor de temperatura exterior: "--.- ºC" (pág. 97).
- Modo de emergencia de la electroválvula del compresor (28): ajuste a mínimo rendimiento (pág. 97).
- Modo de emergencia del termostato del radiador (29): conexión de electroventiladores a máxima velocidad (pág. 97).

## Errores de concepto frecuentes
- Creer que ante el fallo de un sensor de temperatura en un climatizador automático el sistema se apaga siempre, en lugar de adoptar valores fijos o lecturas supletorias de otros sensores (págs. 96-97).

COBERTURA: documento «12. Instalación eléctrica del aire acondicionado.pdf», páginas 94 a 97 de 97. completo