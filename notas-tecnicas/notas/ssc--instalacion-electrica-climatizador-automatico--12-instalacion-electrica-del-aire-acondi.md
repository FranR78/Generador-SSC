---
id: ssc.instalacion-electrica-climatizador-automatico.12-instalacion-electrica-del-aire-acondi
modulo: ssc
unidad: clima
nt: 411
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Instalación eléctrica y gestión de averías del climatizador automático"
menu: "Instalación eléctrica y gestión de ave"
grupo: "Control de climatización"
clave: instalacion-electrica-climatizador-automatico
area: climatizacion
sistema: "control-climatizacion"
fuentes: "12. Instalación eléctrica del aire acondicionado.pdf, págs. 96-97"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "fotosensor-solar", "sensor-temperatura-exterior", "valvula-reguladora-compresor"]
palabras: ["climatizador automático", "can-bus", "líneas din", "código de colores", "función de emergencia"]
---

## Objeto

Explicar la arquitectura eléctrica integral, las líneas de alimentación estándar DIN, la red CAN-Bus de sensores y actuadores, y las funciones de emergencia en caso de avería de un climatizador automático. (págs. 96-97)

## Fundamento

El climatizador automático gestiona electrónicamente todas las variables del sistema (temperatura, caudal y distribución) mediante una UCE central comunicada por CAN-Bus con las demás unidades del vehículo y equipada con autodiagnosis de averías. (págs. 96-97)

## Desarrollo

1. Líneas de alimentación (Normas DIN):
   - Línea: Positivo directo de batería.
   - Línea: Positivo después de contacto.
   - Línea X: Positivo después de contacto con desconexión durante el arranque del motor.
   - Línea: Masa. (pág. 96)

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

## Valores de referencia

- Tensión de alimentación en líneas DIN: Líneas 30, 15 y X a 12 V; Línea 31 a 0 V (Masa).
- Indicación en pantalla por fallo del sensor exterior: «--.- ºC». (págs. 96-97)

## Errores de concepto frecuentes

Pensar que la avería de un sensor de temperatura detiene por completo el climatizador. La UCE dispone de estrategias de emergencia que utilizan valores supletorios o sensores alternativos (como recurrir al sensor de entrada de aire si falla el exterior, o al MAP si falla el del evaporador) para continuar funcionando en modo degradado. (págs. 96-97)

## Imágenes requeridas

- Esquema didáctico completo del climatizador automático con codificación de colores de señales y líneas DIN 30, 15, X y 31 — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 96
