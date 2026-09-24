---
id: ssc.circuito-electrico-climatizador-automatico.12-instalacion-electrica-del-aire-acondi
modulo: ssc
unidad: clima
nt: 72
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Circuito eléctrico y gestión electrónica del climatizador automático"
menu: "Circuito eléctrico y gestión electróni"
grupo: "Control de climatización"
clave: circuito-electrico-climatizador-automatico
area: climatizacion
sistema: "control-climatizacion"
fuentes: "12. Instalación eléctrica del aire acondicionado.pdf, págs. 96-97"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-evaporador", "sensor-calidad-aire"]
palabras: ["climatizador automático", "autodiagnóstico", "sustitución de señal", "valor supletorio", "Can-Bus"]
---

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

## Valores de referencia

- Lectura en display en caso de fallo del sensor de temperatura exterior: "--.- ºC" (pág. 97).
- Modo de emergencia de la electroválvula del compresor (28): ajuste a mínimo rendimiento (pág. 97).
- Modo de emergencia del termostato del radiador (29): conexión de electroventiladores a máxima velocidad (pág. 97).

## Errores de concepto frecuentes

- Creer que ante el fallo de un sensor de temperatura en un climatizador automático el sistema se apaga siempre, en lugar de adoptar valores fijos o lecturas supletorias de otros sensores (págs. 96-97).

## Imágenes requeridas

- Esquema didáctico de un climatizador automático con indicación de conectores T2, T4, T6, líneas DIN y tabla de averías — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 96
