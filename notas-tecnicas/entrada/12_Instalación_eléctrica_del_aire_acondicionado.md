```yaml
tipo: fundamento
titulo: Instalación eléctrica de aire acondicionado manual con trinaria
entidad: instalacion-electrica-ac-manual
area: climatizacion
sistema: control-climatizacion
fuente: "12. Instalación eléctrica del aire acondicionado.pdf"
paginas: "94"
relacionados: [presostato, electroventilador-condensador, sensor-evaporador, embrague-compresor, unidad-control-climatizador]
palabras: [esquema manual, trinaria, presostato, conmutador turbina, relé electroventilador, sonda evaporador]
```

## Objeto
Explicar la estructura eléctrica, la interconexión de componentes y la lógica de control para el funcionamiento de un sistema de aire acondicionado manual equipado con presostato trinaria. (pág. 94)

## Fundamento
El sistema combina la activación manual de la turbina por el conductor con la supervisión eléctrica automatizada de presiones, temperaturas de evaporación y refrigerante del motor, junto con la autorización de la UCE del motor para acoplar el compresor y accionar las velocidades del electroventilador. (pág. 94)

## Desarrollo
El circuito eléctrico articula la activación de sus componentes mediante las siguientes funciones interconectadas:
1. Interruptor de A/C y selector de turbina: conecta o desconecta el sistema a voluntad del conductor y selecciona la velocidad de la turbina de aire fresco. Es condición imprescindible que la turbina gire como mínimo a velocidad lenta para habilitar la conexión eléctrica del A/C.
2. Control de presiones (Trinaria de alta): presostato que mide la presión en la línea de alta. Sus bornes 1-2 determinan el arranque o parada de seguridad del compresor (corte por baja presión a 2 bar o por sobrepresión a 32 bar). Sus bornes 3-4 conectan la II velocidad del electroventilador al alcanzar 16 bar.
3. Control de temperatura del evaporador (Sonda NTC del evaporador): monitoriza la temperatura de evaporación para desconectar el compresor si existe riesgo de congelación en el panal. No se utiliza en sistemas provistos de compresor variable.
4. Gestión del motor (UCE de motor y NTC de refrigerante): la UCE del motor no autoriza la conexión del compresor hasta que el motor gire de forma regular a ralentí y desconecta el embrague en aceleraciones bruscas. Además, si la sonda NTC del refrigerante del motor detecta un sobrecalentamiento excesivo, se interrumpe la alimentación del A/C por seguridad.
5. Control de ventilación del condensador (Termostato de refrigerante y relés): el electroventilador se activa siempre en velocidad lenta al conectar el aire acondicionado. El termostato del radiador conecta la velocidad lenta a 95 ºC (t1) y la velocidad rápida a 103 ºC (t2) o mediante el relé de II velocidad cuando la trinaria cierra a 16 bar. (pág. 94)

📷 IMAGEN: Esquema eléctrico de aire acondicionado manual con presostato trinaria, relés, sonda NTC y UCE de motor — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 94

## Valores de referencia
- Presión P1 de corte por baja presión en trinaria: 2 bar.
- Presión P1 de corte por sobrepresión en trinaria: 32 bar.
- Presión P2 de activación de la II velocidad del electroventilador en trinaria: 16 bar.
- Temperatura t1 de activación de I velocidad en termostato de refrigerante: 95 ºC.
- Temperatura t2 de activación de II velocidad en termostato de refrigerante: 103 ºC. (pág. 94)

## Errores de concepto frecuentes
Creer que el compresor se conecta inmediatamente al accionar el interruptor de A/C. El sistema exige que la turbina esté girando al menos en velocidad lenta, que la UCE de motor confirme el ralentí regular, que la sonda del evaporador no detecte hielo y que la presión en la trinaria esté comprendida entre 2 y 32 bar. (pág. 94)

---

```yaml
tipo: fundamento
titulo: Instalación eléctrica de aire acondicionado semiautomático con sensor MAP y compresor de cilindrada variable
entidad: instalacion-electrica-ac-semiautomatico
area: climatizacion
sistema: control-climatizacion
fuente: "12. Instalación eléctrica del aire acondicionado.pdf"
paginas: "95"
relacionados: [transmisor-presion, valvula-reguladora-compresor, unidad-control-climatizador]
palabras: [semiautomático, sensor map, electroválvula, compresor sin embrague, uce climatizador]
```

## Objeto
Describir la arquitectura eléctrica y de control de un sistema de climatización semiautomático con compresor regulado mediante electroválvula interna (sin embrague electromagnético) y sensor de presión MAP. (pág. 95)

## Fundamento
Sustituye el acoplamiento mecánico por embrague y los presostatos de contactos por una electroválvula de regulación de cilindrada modulada por la UCE del climatizador y un sensor de presión continua (MAP) situado en la línea de alta. (pág. 95)

## Desarrollo
El sistema semiautomático integra la señalización de múltiples sensores y actuadores gestionados centralizadamente:
1. Regulación del compresor: el compresor carece de embrague electromagnético y gira continuamente movido por el motor. La UCE del climatizador regula su rendimiento mediante una electroválvula proporcional de cilindrada.
2. Medición de presión (Sensor MAP): transmite una señal de presión continua de la línea de alta a la UCE de climatización y a la UCE de motor para ajustar la cilindrada y gestionar la velocidad de los electroventiladores.
3. Red de sensores de temperatura: consta de sensor de temperatura exterior, sensor de temperatura de salida del evaporador, sensores en difusores central y zona de pies.
4. Gestión de trampillas: motores eléctricos con potenciómetros de posición de retorno para la trampilla de temperatura (mezcla) y la trampilla de recirculación.
5. Módulo de potencia del ventilador: regulador electrónico de velocidad para la turbina de aire fresco.
6. Interconexión de unidades: la UCE del climatizador intercambia datos con la UCE del motor, la UCE de la red de a bordo y el cuadro de instrumentos para la gestión de cargas y la diagnosis. (pág. 95)

📷 IMAGEN: Esquema eléctrico de sistema semiautomático con sensor MAP, UCE de climatización y compresor con electroválvula de regulación — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 95

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
Pensar que la ausencia de corriente en el compresor significa que este se detiene por completo. Al ser un compresor sin embrague, gira siempre mecánicamente y la electroválvula simplemente ajusta su rendimiento al mínimo. (págs. 95, 97)

---

```yaml
tipo: fundamento
titulo: Instalación eléctrica y gestión de averías del climatizador automático
entidad: instalacion-electrica-climatizador-automatico
area: climatizacion
sistema: control-climatizacion
fuente: "12. Instalación eléctrica del aire acondicionado.pdf"
paginas: "96-97"
relacionados: [unidad-control-climatizador, servomotor-trampilla, fotosensor-solar, sensor-temperatura-exterior, valvula-reguladora-compresor]
palabras: [climatizador automático, can-bus, líneas din, código de colores, función de emergencia]
```

## Objeto
Explicar la arquitectura eléctrica integral, las líneas de alimentación estándar DIN, la red CAN-Bus de sensores y actuadores, y las funciones de emergencia en caso de avería de un climatizador automático. (págs. 96-97)

## Fundamento
El climatizador automático gestiona electrónicamente todas las variables del sistema (temperatura, caudal y distribución) mediante una UCE central comunicada por CAN-Bus con las demás unidades del vehículo y equipada con autodiagnosis de averías. (págs. 96-97)

## Desarrollo
1. Líneas de alimentación (Normas DIN):
   - Línea 30: Positivo directo de batería.
   - Línea 15: Positivo después de contacto.
   - Línea X: Positivo después de contacto con desconexión durante el arranque del motor.
   - Línea 31: Masa. (pág. 96)

2. Gestión de entradas, sensores y comportamiento en avería:
   - Sensor de temperatura exterior: en caso de fallo, se muestra «--.- ºC» en el display y se utiliza el valor del sensor de temperatura de entrada de aire ambiente.
   - Sensor de entrada de aire ambiente: si falla, se trabaja con la información del sensor de temperatura exterior.
   - Sensor de salida del evaporador: si falta la señal, la UCE trabaja con la información del sensor MAP de alta presión.
   - Fotosensor para radiación solar: ajusta la temperatura según la insolación; si falla, se desactiva la función solar.
   - Transmisor de velocidad y Cuadro de instrumentos: la señal de velocidad vía CAN-Bus ajusta la trampilla de velocidad; en caso de avería, no funciona la trampilla de velocidad.
   - Sensores de temperatura de zona de pies y difusor central: sin su señal no es posible la regulación automática.
   - Interruptor de marcha atrás: conecta la recirculación al circular marcha atrás para evitar la entrada de gases de escape; sin señal se desactiva la función.
   - Alternador: identifica el trabajo del alternador y desconecta el compresor si es preciso; sin señal se desactiva la función. (págs. 96-97)

3. Gestión de salidas y actuadores:
   - Servotores de trampillas (temperatura, deshielo, central, recirculación y velocidad): cada motor eléctrico dispone de un potenciómetro de posición. Si falla el potenciómetro, no se puede ajustar la posición de esa trampilla.
   - Electroválvula de regulación del compresor: ajusta la cilindrada a la demanda. En caso de avería eléctrica, el compresor se ajusta a mínimo rendimiento.
   - Termostato del radiador y UCE de ventiladores: comandan la refrigeración del condensador. En función de emergencia, normalmente se conectan los ventiladores a máxima velocidad.
   - Turbina y regulador de velocidad: en caso de avería de la turbina o de su regulador, el climatizador no funciona. (págs. 96-97)

4. Diagnosis de averías: las averías producidas en el climatizador quedan memorizadas en la UCE y son consultables mediante una máquina de diagnóstico compatible. (págs. 96-97)

📷 IMAGEN: Esquema didáctico completo del climatizador automático con codificación de colores de señales y líneas DIN 30, 15, X y 31 — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 96

## Valores de referencia
- Tensión de alimentación en líneas DIN: Líneas 30, 15 y X a 12 V; Línea 31 a 0 V (Masa).
- Indicación en pantalla por fallo del sensor exterior: «--.- ºC». (págs. 96-97)

## Errores de concepto frecuentes
Pensar que la avería de un sensor de temperatura detiene por completo el climatizador. La UCE dispone de estrategias de emergencia que utilizan valores supletorios o sensores alternativos (como recurrir al sensor de entrada de aire si falla el exterior, o al MAP si falla el del evaporador) para continuar funcionando en modo degradado. (págs. 96-97)

---

COBERTURA: documento «12. Instalación eléctrica del aire acondicionado.pdf», páginas 94 a 97 de 97. [completo]