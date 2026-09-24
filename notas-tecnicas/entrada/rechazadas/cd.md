# Rechazadas de cd.md

## Transmisor de temperatura interior G56

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Transmisor de temperatura interior G56
entidad: sensor-temperatura-interior
codigo: G56
fabricante: SEAT
fuente: "cd.pdf"
paginas: "12"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, sensor-temperatura-interior]
palabras: [g56, ntc, turbina aspiracion, 22 ºC, funcion sustitutiva]
```

## Misión
Registrar el valor real de la temperatura ambiental del habitáculo para la regulación del Autoclima. (pág. 12)

## Tipos y características
Sensor de resistencia variable NTC montado detrás del tablero de instrumentos, junto a la columna de dirección. Integra una pequeña turbina accionada por el motor V42. (pág. 12)

📷 IMAGEN: Ubicación y vista en corte del transmisor de temperatura interior G56 con su NTC y turbina — Fuente: cd.pdf, pág. 12

## Principio de funcionamiento
La turbina aspiradora genera un flujo continuo de aire del habitáculo a través de la NTC para evitar mediciones estancadas. La unidad de control procesa la variación de resistencia para ajustar la posición de la trampilla de temperatura V68. (pág. 12)

## Valores de trabajo
- Campo de medición NTC: de –40 ºC a +85 ºC. (pág. 12)

## Anomalías frecuentes
Acumulación de polvo en la entrada de aire o fallo en la turbina de aspiración V42. (págs. 12, 24)

## Comportamiento en avería
En caso de avería, la unidad del Autoclima toma un valor fijo sustitutivo de 22 ºC. Al seleccionar temperaturas distintas a 22 ºC, el sistema no puede medir el aire real y enfría o calienta en exceso. Además, los dígitos del display parpadean al conectar el equipo. (pág. 12)

## Cómo comprobarlo
Lectura de bloques de valores de medición con el equipo de diagnosis y comprobación de la aspiración de aire en la rejilla. (pág. 12)

## Mantenimiento
No requiere mantenimiento. (pág. 12)

---

## Transmisores de temperatura del aire de entrada G191 y G192

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Transmisores de temperatura del aire de entrada G191 y G192
entidad: sensor-temperatura-interior
variante: aire-entrada
codigo: "G191, G192"
fabricante: SEAT
fuente: "cd.pdf"
paginas: "13"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [g191, g192, ntc, difusor central, difusor pies, valor medio]
```

## Misión
Medir la temperatura del aire tratado a la salida de las canalizaciones antes de introducirse en el habitáculo. (pág. 13)

## Tipos y características
Dos sondas de resistencia variable NTC:
- G191: ubicado en el difusor central.
- G192: ubicado en el difusor de la zona de los pies. (pág. 13)

📷 IMAGEN: Ubicación de los transmisores NTC G191 en difusor central y G192 en difusor de pies — Fuente: cd.pdf, pág. 13

## Principio de funcionamiento
Envían continuamente sus valores de resistencia a la unidad del Autoclima, la cual calcula un valor medio ponderado para gestionar la regulación térmica. (pág. 13)

## Valores de trabajo
- Margen de medición NTC: de –40 ºC a +85 ºC. (pág. 13)

## Anomalías frecuentes
No documentado en fuentes. (pág. 13)

## Comportamiento en avería
Al perder la señal de uno de los transmisores, el Autoclima anula la regulación automática y mantiene fijos los parámetros existentes en ese instante. Los dígitos del display parpadean al conectar. (pág. 13)

## Cómo comprobarlo
Verificar la temperatura leída en los bloques de valores de medición del diagnóstico. (pág. 13)

## Mantenimiento
No requiere. (pág. 13)

---

## Transmisor de temperatura exterior G17

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Transmisor de temperatura exterior G17
entidad: sensor-temperatura-exterior
codigo: G17
fabricante: SEAT
fuente: "cd.pdf"
paginas: "14"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [g17, ntc, retrovisor derecho, 20 ºC, cortes ac]
```

## Misión
Medir la temperatura del aire ambiente exterior para la indicación en pantalla y el control de funciones del Autoclima. (pág. 14)

## Tipos y características
Resistencia variable NTC alojada en el interior de la carcasa del retrovisor exterior derecho. (pág. 14)

📷 IMAGEN: Transmisor de temperatura exterior G17 dentro del retrovisor derecho — Fuente: cd.pdf, pág. 14

## Principio de funcionamiento
Mide la temperatura exterior y envía la señal a la unidad del radiocasete, la cual la transmite al display y a la unidad del Autoclima para regular la temperatura, la velocidad de la turbina, la recirculación y la conexión/desconexión del compresor. (pág. 14)

## Valores de trabajo
No documentado en fuentes. (pág. 14)

## Anomalías frecuentes
Interrupción o cortocircuito por daños en el cableado del retrovisor. (pág. 14)

## Comportamiento en avería
El display muestra tres rayas («---») en la zona de temperatura exterior. El Autoclima adopta un valor fijo sustitutivo de 20 ºC y anula la señal de conexión del acoplamiento magnético (impide funcionar al aire acondicionado). Todos los dígitos parpadean al encender. (pág. 14)

## Cómo comprobarlo
Lectura de valor en diagnóstico y comprobación de resistencia en la NTC del retrovisor. (pág. 14)

## Mantenimiento
No requiere. (pág. 14)

---

## Interruptor térmico F38

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Interruptor térmico F38
entidad: sensor-temperatura-exterior
variante: interruptor-termico
codigo: F38
fabricante: SEAT
fuente: "cd.pdf"
paginas: "14"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, compresor, electroventilador-condensador]
palabras: [f38, caja de aguas, 5 ºC, proteccion congelacion]
```

## Misión
Impedir el funcionamiento del compresor a temperaturas ambientales muy bajas para evitar la congelación de la condensación en el evaporador. (pág. 14)

## Tipos y características
Interruptor bimetálico térmico normalmente cerrado instalado en el interior de la caja de aguas. (pág. 14)

📷 IMAGEN: Ubicación del interruptor térmico F38 en la caja de aguas — Fuente: cd.pdf, pág. 14

## Principio de funcionamiento
Intercala sus contactos en la línea de señal de positivo de 12 V que va hacia la unidad del aire acondicionado J293. Con temperaturas superiores a 5 ºC mantiene sus contactos cerrados; si la temperatura desciende de 5 ºC, abre el circuito. (pág. 14)

## Valores de trabajo
- Umbral de apertura por baja temperatura: inferior a 5 ºC. (pág. 14)

## Anomalías frecuentes
Contactos soldados mecánicamente que permanecen siempre cerrados. (pág. 14)

## Comportamiento en avería
No tiene función sustitutiva. Si queda trabado cerrado, el compresor funciona a temperaturas bajo cero provocando la congelación del evaporador y el bloqueo del flujo de aire. (pág. 14)

## Cómo comprobarlo
Comprobar continuidad eléctrica de sus bornes sumergiéndolo en agua helada por debajo de 5 ºC. (pág. 14)

## Mantenimiento
No requiere. (pág. 14)

---

## Potenciómetro de la distribución de aire

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Potenciómetro de la distribución de aire
entidad: unidad-control-climatizador
variante: potenciometro-distribucion
fabricante: SEAT
fuente: "cd.pdf"
paginas: "15"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [potenciometro distribucion, parabrisas, desempañado, mando giratorio]
```

## Misión
Informar a la unidad de control de la posición seleccionada en el mando giratorio manual de distribución de aire. (pág. 15)

## Tipos y características
Pista resistiva interna situada en el conjunto de control accionado por la rueda del mando giratorio. (pág. 15)

📷 IMAGEN: Potenciómetro de la rueda de distribución de aire y mecanismo de accionamiento — Fuente: cd.pdf, pág. 15

## Principio de funcionamiento
Informa de la posición del mando. Al seleccionar la posición de desempañado hacia el parabrisas, la unidad de control reacciona aumentando la velocidad de la turbina V2, colocando la recirculación en entrada de aire fresco y conectando el compresor (Autoclima). (pág. 15)

## Valores de trabajo
No documentado en fuentes. (pág. 15)

## Anomalías frecuentes
No documentado en fuentes. (pág. 15)

## Comportamiento en avería
Si se pierde la señal, la unidad coloca la recirculación en aire fresco y no aumenta la velocidad de la turbina ni conecta el compresor al seleccionar la posición parabrisas. Los dígitos parpadean al conectar. (pág. 15)

## Cómo comprobarlo
Verificar la señal porcentual o en voltios en el grupo de valores de medición de diagnosis. (págs. 15, 37)

## Mantenimiento
No requiere. (pág. 15)

---

## Potenciómetro del motor de la trampilla de temperatura G92

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Potenciómetro del motor de la trampilla de temperatura G92
entidad: servomotor-trampilla
variante: potenciometro-g92
codigo: G92
fabricante: SEAT
fuente: "cd.pdf"
paginas: "15"
forma_parte_de: servomotor-trampilla
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [g92, potenciometro v68, carrera 51º, 0 a 4.7 kohm, topes]
```

## Misión
Transmitir la posición exacta de la trampilla de mezcla de temperatura V68 a la unidad de control. (pág. 15)

## Tipos y características
Potenciómetro de pista circular integrado internamente en la carcasa del servomotor V68. (pág. 15)

## Principio de funcionamiento
Registra el desplazamiento angular del engranaje del motor V68, permitiendo a la unidad regular la temperatura y reconocer los topes mecánicos del recorrido. (pág. 15)

## Valores de trabajo
- Carrera angular: 51º.
- Rango de resistencia: de 0 a 4,7 kΩ. (pág. 15)

## Anomalías frecuentes
Desgaste o suciedad en la pista resistiva. (pág. 15)

## Comportamiento en avería
La unidad deja la trampilla en la posición fija en que se encontraba y reduce la velocidad de la turbina para evitar entradas extremas de aire frío o caliente. Los dígitos del display parpadean al conectar. (pág. 15)

## Cómo comprobarlo
Comprobar tensión de salida en voltios en el grupo 002 del bloque de valores de medición y realizar el ajuste básico (función 04). (págs. 15, 36-37)

## Mantenimiento
No requiere ajuste individual, se calibra mediante ajuste básico en diagnosis. (págs. 15, 36)

---

## Conmutador de presión para aire acondicionado F129

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Conmutador de presión para aire acondicionado F129
entidad: presostato
codigo: F129
fabricante: SEAT
fuente: "cd.pdf"
paginas: "16-17"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, electroventilador-condensador, compresor]
palabras: [f129, diésel, 2 bar, 32 bar, 16 bar, presostato tri-funcion]
```

## Misión
Proteger el circuito frigorífico frente a presiones extremas y gobernar la velocidad de los electroventiladores en motores diésel. (págs. 16-17)

## Tipos y características
Presostato de 4 contactos (dos interruptores internos) montado junto a la válvula de expansión en motorizaciones diésel. (págs. 16-17)

📷 IMAGEN: Ubicación del conmutador de presión F129 junto a la válvula de expansión — Fuente: cd.pdf, pág. 16

## Principio de funcionamiento
- Interruptor de alta/baja presión (normalmente cerrado): abre sus contactos si la presión baja de 2 bares o supera los 32 bares, interrumpiendo la señal de positivo hacia la unidad del aire acondicionado J293 para desconectar el compresor.
- Interruptor de presión media (normalmente abierto): cierra sus contactos al alcanzar 16 bares de presión en la línea de alta, enviando un positivo de 15 a la J293 para activar la 2ª velocidad de los electroventiladores V7/V35. (págs. 16-17)

## Valores de trabajo
- Corte por baja presión: inferior a 2 bar.
- Corte por sobrepresión: superior a 32 bar.
- Conexión de 2ª velocidad de ventiladores: 16 bar. (págs. 16-17)

## Anomalías frecuentes
No documentado en fuentes. (pág. 17)

## Comportamiento en avería
Sin función sustitutiva. Si abre el contacto de alta/baja, el compresor se desconecta. (pág. 17)

## Cómo comprobarlo
Medir continuidad entre sus terminales con el circuito presurizado o verificar el estado en la función 08 de diagnosis. (págs. 16, 37)

## Mantenimiento
No requiere. (pág. 16)

---

## Transmisor de presión electrónico G65

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Transmisor de presión electrónico G65
entidad: transmisor-presion
codigo: G65
fabricante: SEAT
fuente: "cd.pdf"
paginas: "16-17"
forma_parte_de: circuito-frigorifico
relacionados: [unidad-control-climatizador, compresor, electroventilador-condensador]
palabras: [g65, gasolina, señal pwm, uce motor, 16 bar]
```

## Misión
Medir de forma continua el valor numérico de la presión en la línea de alta del circuito frigorífico en motorizaciones de gasolina. (págs. 16-17)

## Tipos y características
Sensor de presión electrónico que emite una señal modulada hacia la unidad de control del motor y la unidad del aire acondicionado J293. (págs. 16-17)

## Principio de funcionamiento
Transforma la presión en una señal eléctrica digital. La J293 evalúa la señal para autorizar el acoplamiento magnético N25 y conectar la 2ª velocidad del ventilador al superar los 16 bares. La UCE de motor procesa la señal para adaptar la marcha de ralentí frente a la carga del compresor. (págs. 16-17)

## Valores de trabajo
- Umbral de activación de 2ª velocidad de ventiladores: 16 bar. (pág. 17)

## Anomalías frecuentes
Fallo en la electrónica interna del sensor. (pág. 17)

## Comportamiento en avería
La unidad J293 desactiva inmediatamente el compresor. La avería del sensor G65 únicamente queda registrada en la memoria de averías de la unidad de control del motor. (pág. 17)

## Cómo comprobarlo
Consultar averías en la UCE de motor y medir la señal del sensor con un osciloscopio o máquina de diagnosis. (pág. 17)

## Mantenimiento
No requiere. (pág. 17)

---

## Conmutador térmico del ventilador F18

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Conmutador térmico del ventilador F18
entidad: electroventilador-condensador
variante: conmutador-termico
codigo: F18
fabricante: SEAT
fuente: "cd.pdf"
paginas: "19"
forma_parte_de: refrigeracion-motor
relacionados: [electroventilador-condensador, unidad-control-climatizador]
palabras: [f18, termocontacto, 95 ºC, 105 ºC, velocidad 1, velocidad 2]
```

## Misión
Activar los electroventiladores por exceso de temperatura en el líquido refrigerante del motor. (pág. 19)

## Tipos y características
Termocontacto bimetálico doble de dos escalones de temperatura, roscado en el radiador del líquido refrigerante. (pág. 19)

📷 IMAGEN: Ubicación del conmutador térmico F18 en el radiador — Fuente: cd.pdf, pág. 19

## Principio de funcionamiento
- Primer interruptor: cierra a los 95 ºC de temperatura de agua, alimentando con positivo (30) a los electroventiladores V7/V35 para activar la 1ª velocidad.
- Segundo interruptor: cierra a los 105 ºC, enviando una señal de positivo (30) hacia la unidad J293 para que esta accione la 2ª velocidad. (pág. 19)

## Valores de trabajo
- Temperatura de cierre 1ª velocidad: 95 ºC.
- Temperatura de cierre 2ª velocidad: 105 ºC. (pág. 19)

## Anomalías frecuentes
No documentado en fuentes. (pág. 19)

## Comportamiento en avería
Sin función sustitutiva. (pág. 19)

## Cómo comprobarlo
Comprobar continuidad de los contactos sumergiéndolo en líquido a temperatura controlada. (pág. 19)

## Mantenimiento
No requiere. (pág. 19)

---

## Unidad de manejo e indicación E87 - Pulsadores y comunicación

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Unidad de manejo e indicación E87 - Pulsadores y comunicación
entidad: unidad-control-climatizador
variante: cuadro-mandos-e87
codigo: E87
fabricante: SEAT
fuente: "cd.pdf"
paginas: "20, 30"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [e87, bus de datos, 18 cables, 1 cable, radiocasete, 22 ºC, 20 ºC]
```

## Misión
Recoger las órdenes manuales del usuario y enviarlas a la unidad de control a través del radiocasete. (págs. 20, 30)

## Tipos y características
Panel frontal integrado en la consola central que agrupa la regleta de pulsadores del climatizador/calefacción y del radiocasete junto con la pantalla display. (pág. 20)

📷 IMAGEN: Regleta de pulsadores de la unidad de manejo e indicación E87 — Fuente: cd.pdf, pág. 20

## Principio de funcionamiento
Al presionar una tecla, la orden se envía mediante un bus de datos paralelo de 18 cables al radiocasete R. La unidad del radiocasete procesa el código y lo transmite mediante un bus de datos serie de 1 solo cable a la unidad de control J255. (págs. 20, 30)

## Valores de trabajo
- Bus E87 a Radiocasete: 18 cables.
- Bus Radiocasete a J255: 1 cable. (págs. 20, 30)

## Anomalías frecuentes
Fallo de contacto en alguno de los pulsadores o interrupción de la línea de bus. (pág. 20)

## Comportamiento en avería
Si falla un pulsador, el radiocasete emite una señal de avería genérica. La unidad J255 ignora los pulsadores, se fija en modo AUTO a 22 ºC solicitados y 20 ºC exteriores, desconecta el compresor y abre la entrada de aire fresco. En calefacción motorizada, mantiene las condiciones previas. (pág. 20)

## Cómo comprobarlo
Comprobar el estado de los pulsadores (0/1) en los grupos 003 y 004 del bloque de valores de medición. (págs. 20, 37)

## Mantenimiento
En caso de sustitución, se reemplaza la unidad E87 completa. (pág. 21)

---

## Unidad de manejo e indicación E87 - Display

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Unidad de manejo e indicación E87 - Display
entidad: unidad-control-climatizador
variante: display-e87
codigo: E87
fabricante: SEAT
fuente: "cd.pdf"
paginas: "21"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [display, pantalla grande, consola central, radiocasete, cold, hot]
```

## Misión
Mostrar de forma visual la temperatura seleccionada, la velocidad de la turbina, el estado del compresor, el modo de funcionamiento y los datos del radiocasete y ordenador de a bordo. (pág. 21)

## Tipos y características
Pantalla de cristal líquido de gran formato ubicada en el centro de la consola central. Existen dos versiones:
- Versión Autoclima: indica temperatura numérica en ºC, velocidad de turbina, AUTO, AC OFF, etc.
- Versión Calefacción motorizada: indica escalas COLD / HOT y nivel de turbina. (pág. 21)

📷 IMAGEN: Pantalla display de la unidad E87 en versiones Autoclima y Calefacción motorizada — Fuente: cd.pdf, pág. 21

## Principio de funcionamiento
Recibe la excitación y alimentación eléctrica directamente del radiocasete R, el cual traduce los datos recibidos desde la J255 por la línea de bus de 1 cable. (págs. 21, 30)

## Valores de trabajo
No documentado en fuentes. (pág. 21)

## Anomalías frecuentes
Falta de segmentos en pantalla o apagado total de la iluminación. (pág. 21)

## Comportamiento en avería
Si se interrumpe el bus de datos entre la radio y la J255, los datos del climatizador desaparecen de la pantalla. (pág. 21)

## Cómo comprobarlo
Efectuar la prueba de contraste/elementos en el diagnóstico del radiocasete o Autoclima. (págs. 21, 36)

## Mantenimiento
Se sustituye el conjunto E87 completo en caso de fallo de la pantalla. (pág. 21)

---

## Motor de la trampilla de temperatura V68

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Motor de la trampilla de temperatura V68
entidad: servomotor-trampilla
variante: mezcla-v68
codigo: V68
fabricante: SEAT
fuente: "cd.pdf"
paginas: "22"
forma_parte_de: servomotor-trampilla
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [v68, motor cc, tornillo sin fin, polarizacion, g92]
```

## Misión
Accionar mecánicamente la trampilla de mezcla para regular el paso de aire a través del radiador de calefacción. (pág. 22)

## Tipos y características
Motor eléctrico de corriente continua de giro limitado con reducción por tornillo sin fin y potenciómetro interno G92, ubicado en la parte inferior de la caja climática. (pág. 22)

📷 IMAGEN: Despiece interno del servomotor V68 con su motor CC, tornillo sin fin y potenciómetro G92 — Fuente: cd.pdf, pág. 22

## Principio de funcionamiento
La unidad de control alimenta el motor con positivo y negativo, invirtiendo la polaridad en sus bornes para cambiar el sentido de giro y posicionar la trampilla según la demanda térmica. (pág. 22)

## Valores de trabajo
- Alimentación eléctrica: 12 V por inversión de polaridad. (pág. 22)

## Anomalías frecuentes
Atascamiento de la trampilla o descalibración de los topes mecánicos. (págs. 22, 36)

## Comportamiento en avería
La trampilla se queda bloqueada en la posición actual y la unidad de control reduce el caudal de la turbina para limitar la entrada no deseada de aire frío o caliente. (pág. 22)

## Cómo comprobarlo
Ejecutar la función 03 (diagnóstico de actuadores) para moverlo de mínimo a máximo y realizar la función 04 (ajuste básico). (págs. 36)

## Mantenimiento
Ajuste básico obligatorio tras su sustitución o la de la unidad de control. (pág. 36)

---

## Motor de la turbina de aire V2 y regulador de régimen J126

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Motor de la turbina de aire V2 y regulador de régimen J126
entidad: ventilador-habitaculo
codigo: "V2, J126"
fabricante: SEAT
fuente: "cd.pdf"
paginas: "22"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, ventilador-habitaculo]
palabras: [v2, j126, turbina, regulador lineal, velocidad continua]
```

## Misión
Impulsar el caudal de aire necesario a través del grupo climatizador hacia el habitáculo. (pág. 22)

## Tipos y características
Conjunto formado por un motor eléctrico centrífugo V2 y un módulo regulador electrónico de estado sólido J126 montado en la propia canalización de aire. (pág. 22)

## Principio de funcionamiento
El módulo J126 recibe una señal de tensión de mando desde la unidad J255 y regula de forma lineal la alimentación de potencia aplicada al motor V2, permitiendo variaciones continuas de velocidad sin escalonamiento rígido. (págs. 22, 36)

## Valores de trabajo
- Tensión de mando/salida: de 0 V a 12 V en pasos progresivos. (págs. 22, 36)

## Anomalías frecuentes
Fallo de los transistores de potencia del módulo J126 o desgaste de las escobillas del motor V2. (pág. 22)

## Comportamiento en avería
Caída drástica o anulación total del caudal de aire en el interior del vehículo. No hay función sustitutiva. (pág. 22)

## Cómo comprobarlo
Ejecutar la función 03 (diagnóstico de actuadores), comprobando la aceleración progresiva de 0 a 12 V en pasos de 2,5 V cada dos segundos, o consultar la tensión teórica/real en el grupo 005. (págs. 36-37)

## Mantenimiento
No requiere. (pág. 22)

---

## Motor de la trampilla de recirculación V113

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Motor de la trampilla de recirculación V113
entidad: servomotor-trampilla
variante: recirculacion-v113
codigo: V113
fabricante: SEAT
fuente: "cd.pdf"
paginas: "23"
forma_parte_de: servomotor-trampilla
relacionados: [unidad-control-climatizador]
palabras: [v113, motor cc giro libre, tres pistas, tres contactos]
```

## Misión
Mover la trampilla de recirculación entre la posición de entrada de aire exterior y la de aire recirculado. (pág. 23)

## Tipos y características
Motor eléctrico de corriente continua de giro libre en un único sentido, equipado con tres pistas internas de guiado y situado en la parte superior de la unidad climática. (pág. 23)

📷 IMAGEN: Despiece del motor V113 y esquema de sus pistas internas y tres contactos de alimentación — Fuente: cd.pdf, pág. 23

## Principio de funcionamiento
Dispone de tres bornes: un negativo permanente y dos contactos de positivo alimentados de forma alternativa por la unidad de control. Al recibir positivo en uno de los contactos, el motor gira guiado por la pista interna hasta llegar al final de la misma, donde el cursor detiene el paso de corriente y queda a la espera de la siguiente orden. (pág. 23)

## Valores de trabajo
- Tensión de alimentación: 12 V. (pág. 23)

## Anomalías frecuentes
Desgaste de las pistas de contacto internas. (pág. 23)

## Comportamiento en avería
Sin función sustitutiva. Los dígitos del display parpadean al conectar. (pág. 23)

## Cómo comprobarlo
Ejecutar la función 03 (diagnóstico de actuadores) para conmutar la trampilla entre aire exterior y recirculación. (págs. 23, 36)

## Mantenimiento
No requiere. (pág. 23)

---

## Motor para la turbina del transmisor de temperatura interior V42

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Motor para la turbina del transmisor de temperatura interior V42
entidad: sensor-temperatura-interior
variante: turbina-v42
codigo: V42
fabricante: SEAT
fuente: "cd.pdf"
paginas: "24"
forma_parte_de: sensor-temperatura-interior
relacionados: [sensor-temperatura-interior, unidad-control-climatizador]
palabras: [v42, turbina aspiracion, g56, placa electronica, rotor imantado]
```

## Misión
Aspirar aire del habitáculo de forma continua para hacerlo pasar sobre la NTC del sensor de temperatura interior G56. (pág. 24)

## Tipos y características
Conjunto compacto compuesto por un pequeño motor sin escobillas con rotor imantado y una placa electrónica de gobierno, integrado en la misma carcasa del sensor G56. (pág. 24)

📷 IMAGEN: Despiece de la turbina V42 con placa electrónica, estator y rotor imantado — Fuente: cd.pdf, pág. 24

## Principio de funcionamiento
Se alimenta con 12 V (positivo de contacto 15) gestionados por la J255. La placa electrónica interna controla el giro del rotor imantado y supervisa posibles bloqueos mecánicos del eje. (pág. 24)

## Valores de trabajo
- Alimentación: 12 V (línea 15). (pág. 24)

## Anomalías frecuentes
Bloqueo del rotor por pelusas o suciedad introducidas desde el habitáculo. (pág. 24)

## Comportamiento en avería
Al detectar un fallo en el motor V42, la unidad J255 aplica factores de corrección matemáticos a la temperatura medida por el sensor G56 para simular un valor estimado aproximado al real. (pág. 24)

## Cómo comprobarlo
Verificar la rotación de la turbina al conectar el encendido y consultar averías memorizadas. (pág. 24)

## Mantenimiento
Limpieza externa de las ranuras de aspiración. (pág. 24)

---

## Acoplamiento magnético N25

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Acoplamiento magnético N25
entidad: embrague-compresor
codigo: N25
fabricante: SEAT
fuente: "cd.pdf"
paginas: "25, 29"
forma_parte_de: compresor
relacionados: [compresor, unidad-control-climatizador]
palabras: [n25, electroiman, polea de arrastre, j293, embrague]
```

## Misión
Acoplar mecánicamente el eje del compresor a la polea de arrastre para iniciar la compresión del fluido refrigerante. (págs. 25, 29)

## Tipos y características
Embrague electromagnético montado en el frontal del compresor. (págs. 25, 29)

📷 IMAGEN: Sección del acoplamiento magnético N25 con bobina, polea de arrastre y plato de embrague — Fuente: cd.pdf, pág. 25

## Principio de funcionamiento
La bobina es alimentada con positivo de 12 V directamente desde la unidad del aire acondicionado J293. El campo magnético generado atrae el disco de embrague contra la polea que gira movida por la correa Poly V, haciendo rotar los cilindros del compresor. (págs. 25, 29)

## Valores de trabajo
- Alimentación eléctrica: 12 V procedentes de J293. (págs. 25, 29)

## Anomalías frecuentes
Bobina interrumpida o desgastada por sobrecalentamiento. (pág. 25)

## Comportamiento en avería
Sin función sustitutiva. El compresor permanece parado y el aire no se enfría. (pág. 25)

## Cómo comprobarlo
Activar la prueba de actuadores (función 03) para conectar y desconectar la bobina cada dos segundos y verificar el clic de acoplamiento. (págs. 25, 36)

## Mantenimiento
No requiere. (pág. 25)

---

## Ventiladores del líquido refrigerante V7 y V35

**Motivo:** faltan campos: area, sistema

```yaml
tipo: componente
titulo: Ventiladores del líquido refrigerante V7 y V35
entidad: electroventilador-condensador
codigo: "V7, V35"
fabricante: SEAT
fuente: "cd.pdf"
paginas: "25, 29"
forma_parte_de: refrigeracion-motor
relacionados: [electroventilador-condensador, unidad-control-climatizador, condensador]
palabras: [v7, v35, velocidad 1, velocidad 2, j293, f18, resistencia canalizador]
```

## Misión
Forzar un flujo de aire a través del condensador y del radiador para enfriar el gas refrigerante y el líquido del motor. (págs. 25, 29)

## Tipos y características
Dos motores eléctricos de dos velocidades accionados independientemente. La 1ª velocidad se obtiene mediante una resistencia eléctrica montada en la propia carcasa del canalizador de aire. (págs. 25, 29)

📷 IMAGEN: Conjunto de electroventiladores V7 y V35 instalados sobre el canalizador — Fuente: cd.pdf, pág. 25

## Principio de funcionamiento
- 1ª velocidad: se activa por la unidad J293 al recibir la orden de conexión del compresor desde el Autoclima, o directamente por el termocontacto F18 al alcanzar el agua 95 ºC.
- 2ª velocidad: se activa exclusivamente por la unidad J293 si la presión del gas supera 16 bares (F129/G65) o si el agua del motor alcanza 105 ºC (F18). (págs. 25, 29)

## Valores de trabajo
- Tensión de alimentación: 12 V.
- Umbral de 2ª velocidad por presión: 16 bar.
- Umbrales térmicos F18: 95 ºC (1ª vel.) y 105 ºC (2ª vel.). (págs. 25, 29)

## Anomalías frecuentes
Resistencia de 1ª velocidad cortada o fallo de relés en la unidad J293. (págs. 25, 29)

## Comportamiento en avería
Sin función sustitutiva. Si fallan, la presión de alta sube bruscamente desconectando el compresor por sobrepresión. (págs. 16, 25)

## Cómo comprobarlo
Alimentar directamente con 12 V las tomas de 1ª y 2ª velocidad de cada motor. (pág. 25)

## Mantenimiento
No requiere. (pág. 25)

---

## Modos de funcionamiento del Autoclima (Automático, Semiautomático y Manual)

**Motivo:** faltan campos: area, sistema

```yaml
tipo: fundamento
titulo: Modos de funcionamiento del Autoclima (Automático, Semiautomático y Manual)
entidad: regulacion-automatica
variante: modos-autoclima
fabricante: SEAT
fuente: "cd.pdf"
paginas: "26-28"
relacionados: [unidad-control-climatizador, servomotor-trampilla, ventilador-habitaculo]
palabras: [modo automatico, modo semiautomatico, modo manual, auto, display]
```

## Objeto
Definir las estrategias de control que aplica la unidad J255 según el nivel de intervención solicitado por el usuario. (págs. 26-28)

## Fundamento
Procesamiento centralizado de sensores para regular automáticamente la temperatura, el caudal y la recirculación, o permitir el ajuste fijo de parámetros. (págs. 26-28)

## Desarrollo
1. Modo Automático (display indica AUTO):
   La unidad analiza la temperatura solicitada, exterior, interior y de los difusores G191/G192. Regula la trampilla de mezcla V68, ajusta la turbina V2 (con aceleración retardada si la diferencia térmica es muy grande), acciona temporalmente la recirculación V113 y conmuta el compresor N25 sin intervención manual. Al seleccionar deshielo del parabrisas, fuerza la recirculación a aire fresco, sube la turbina al máximo y conecta el compresor. (págs. 26-27)
2. Modo Semiautomático:
   Mantiene la regulación automática de la temperatura, pero permite al usuario fijar manualmente uno o varios parámetros (velocidad de turbina, posición de recirculación o desconexión del compresor). Al fijar un parámetro, la indicación AUTO desaparece de la pantalla. (pág. 27)
3. Modo Manual (único posible en calefacción motorizada):
   La unidad acciona los componentes únicamente tras pulsar las teclas. La trampilla V68 se desplaza a pasos fijos por cada pulsación (en Autoclima manual la temperatura se muestra mediante letras en lugar de ºC). La velocidad de turbina y la recirculación dependen exclusivamente de las teclas seleccionadas. (pág. 28)

## Valores de referencia
No documentado en fuentes. (págs. 26-28)

## Errores de concepto frecuentes
Pensar que al ajustar manualmente la velocidad del ventilador el Autoclima deja de regular la temperatura. En ese caso entra en modo semiautomático: la indicación AUTO se apaga pero la unidad sigue moviendo la trampilla de mezcla para mantener los ºC seleccionados. (pág. 27)

---
