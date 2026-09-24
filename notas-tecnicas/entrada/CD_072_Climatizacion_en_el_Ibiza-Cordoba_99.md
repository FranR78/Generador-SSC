```yaml
tipo: componente
titulo: Potenciómetro de la distribución de aire
entidad: sensor-posicion-distribucion
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "15"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador, servomotor-trampilla]
palabras: [potenciómetro, distribución de aire, desempañamiento, parabrisas]
```

## Misión
Indicar constantemente a la unidad de control la posición del mando de distribución de aire elegida por el usuario. (pág. 15)

## Tipos y características
Potenciómetro resistivo accionado mecánicamente al girar la rueda del mando de distribución de aire en la consola central. (pág. 15)

## Principio de funcionamiento
Al girar el mando de distribución, varía la resistencia del potenciómetro enviando una señal de tensión analógica a la unidad de control (autoclima o calefacción motorizada). Cuando la señal indica la selección de salida hacia el parabrisas, la unidad incrementa la velocidad de la turbina, coloca la trampilla de recirculación en entrada de aire fresco y conecta el compresor (en autoclima). (pág. 15)

📷 IMAGEN: Mando con potenciómetro de distribución de aire y rueda de accionamiento — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 15

## Valores de trabajo
No documentado en fuentes en la página 15.

## Anomalías frecuentes
No documentado en fuentes en la página 15.

## Comportamiento en avería
- La unidad sitúa automáticamente la trampilla de recirculación en posición de entrada de aire fresco. (pág. 15)
- No se incrementa automáticamente la velocidad de la turbina ni se conecta el compresor al seleccionar la salida de aire hacia el parabrisas. (pág. 15)
- Parpadean todos los dígitos de la pantalla del display al conectar el equipo. (pág. 15)

## Cómo comprobarlo
Mediante la función "08" (bloque de valores de medición, grupo 004, campo 4) del equipo de autodiagnosis. (pág. 37)

## Mantenimiento
No documentado en fuentes en la página 15.

---

```yaml
tipo: componente
titulo: Potenciómetro del motor de la trampilla de temperatura
entidad: sensor-posicion-trampilla
area: climatizacion
sistema: control-climatizacion
codigo: G92
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "15, 22"
forma_parte_de: servomotor-trampilla
relacionados: [servomotor-trampilla, unidad-control-climatizador]
palabras: [G92, V68, 51 grados, topes finales, resistencia variable]
```

## Misión
Informa constantemente a la unidad de control sobre la posición física angular exacta de la trampilla de mezcla de temperatura. (págs. 15, 22)

## Tipos y características
Potenciómetro rotativo de resistencia variable integrado en el interior de la carcasa del servomotor V68. (págs. 15, 22)

## Principio de funcionamiento
El eje del potenciómetro gira solidario con el engranaje de salida del servomotor V68. Al modificar la posición de la trampilla, varía el valor de resistencia eléctrica informando a la unidad de control sobre el ángulo real alcanzado y permitiendo la detección de los dos topes mecánicos del recorrido. (págs. 15, 22)

📷 IMAGEN: Vista interna del servomotor V68 mostrando la ubicación del potenciómetro G92 y las ruedas de transmisión — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 22

## Valores de trabajo
- Carrera angular de trabajo: 51º. (pág. 15)
- Rango de resistencia eléctrica: de 0 a 4,7 kΩ. (pág. 15)

## Anomalías frecuentes
No documentado en fuentes en las páginas 15, 22.

## Comportamiento en avería
- La unidad de control inmoviliza la trampilla de temperatura en la posición en que se encontraba al detectar el fallo. (pág. 15)
- Se reduce automáticamente la velocidad de la turbina para evitar la entrada excesiva de aire frío o caliente no regulado. (pág. 15)
- Parpadeo de los dígitos del display al encender el sistema. (pág. 15)

## Cómo comprobarlo
Mediante la función "08" (bloque de valores de medición, grupo 002) del equipo de autodiagnosis. (pág. 37)

## Mantenimiento
No documentado en fuentes en las páginas 15, 22.

---

```yaml
tipo: componente
titulo: Conmutador de presión para aire acondicionado
entidad: presostato
area: climatizacion
sistema: control-climatizacion
codigo: F129
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "16"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, electroventilador-condensador, unidad-control-climatizador]
palabras: [F129, diésel, 32 bares, 2 bares, 16 bares, presostato triple]
```

## Misión
Supervisar la presión del agente frigorífico en el lado de alta presión para autorizar el funcionamiento del compresor y gestionar las velocidades de los electroventiladores. (pág. 16)

## Tipos y características
Conmutador de presión triple montado exclusivamente en las motorizaciones diésel, ubicado en la línea de alta presión junto a la válvula de expansión. Consta de dos interruptores internos independientes. (pág. 16)

## Principio de funcionamiento
- **Interruptor de máxima/mínima presión:** Normally cerrado. Permite el paso de la señal de conexión del compresor enviada por el autoclima hacia la unidad J293. Se abre mecánicamente interrumpiendo la señal si la presión desciende por debajo de 2 bares (fuga de gas) o supera los 32 bares (sobrepresión). (pág. 16)
- **Interruptor de presión media:** Normally abierto. Conectado a positivo de contacto (borne 15). Se cierra mecánicamente al alcanzar una presión aproximada de 16 bares, enviando una señal a la unidad J293 para conectar la 2ª velocidad de los electroventiladores del radiador. (págs. 16, 29)

📷 IMAGEN: Ubicación del conmutador F129 en la tubería de alta presión junto a la válvula de expansión — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 16

## Valores de trabajo
- Umbral de desconexión por baja presión: < 2 bares. (pág. 16)
- Umbral de desconexión por alta presión: > 32 bares. (pág. 16)
- Umbral de activación de la 2ª velocidad de ventiladores: aprox. 16 bares. (pág. 16)

## Anomalías frecuentes
No documentado en fuentes en la página 16.

## Comportamiento en avería
- Si el interruptor de máxima/mínima se queda abierto, el compresor no conecta. (pág. 16)
- Si el interruptor de presión media falla, la 2ª velocidad de los electroventiladores no se activa por presión del circuito frigorífico. (págs. 16, 29)

## Cómo comprobarlo
Mediante la función "08" (bloque de valores de medición, grupo 001, campo 2) en el equipo de autodiagnosis. (pág. 37)

## Mantenimiento
No documentado en fuentes en la página 16.

---

```yaml
tipo: componente
titulo: Transmisor de presión electrónico
entidad: transmisor-presion
area: climatizacion
sistema: control-climatizacion
codigo: G65
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "16-17"
forma_parte_de: circuito-frigorifico
relacionados: [compresor, electroventilador-condensador, unidad-control-climatizador]
palabras: [G65, gasolina, PWM, señal modulada, 16 bares]
```

## Misión
Medir de forma continua el valor exacto de presión del agente frigorífico en el circuito de alta presión e informar a la unidad de control del motor y a la unidad del aire acondicionado. (págs. 16-17)

## Tipos y características
Sensor de presión electrónico montado en las motorizaciones de gasolina, ubicado junto a la válvula de expansión. Emite una señal de onda cuadrada modulada en anchura de impulso (PWM). (págs. 16-17)

## Principio de funcionamiento
Transforma la presión física del gas frigorífico en una señal de alta frecuencia cuya anchura de impulso varía proporcionalmente a la presión. La unidad del aire acondicionado J293 procesa la señal para desacoplar el compresor por presión crítica (mínima o máxima) e iniciar la 2ª velocidad de los electroventiladores al alcanzar 16 bares. La unidad de control del motor utiliza la información para compensar el régimen de ralentí según la carga absorbida por el compresor. (págs. 16-17)

📷 IMAGEN: Instalación del transmisor de presión electrónico G65 en la tubería de alta presión — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 16

## Valores de trabajo
- Umbral de activación de la 2ª velocidad de ventiladores: 16 bares. (pág. 17)

## Anomalías frecuentes
No documentado en fuentes en las páginas 16-17.

## Comportamiento en avería
- La unidad de control del aire acondicionado desactiva de inmediato el compresor. (pág. 17)
- La avería de este transmisor queda registrada únicamente en la memoria de averías de la unidad de control del motor. (pág. 17)

## Cómo comprobarlo
A través de la lectura de memoria de averías y bloques de valores de medición en la unidad de control del motor. (pág. 17)

## Mantenimiento
No documentado en fuentes en las páginas 16-17.

---

```yaml
tipo: fundamento
titulo: Gestión de acoplamiento del compresor por la unidad de control del motor
entidad: regulacion-automatica
variante: corte-compresor-motor
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "18"
relacionados: [compresor, embrague-compresor, unidad-control-climatizador]
palabras: [corte compresor, plena carga, arranque, kick-down, señal negativo]
```

## Objeto
Inhibir la conexión del compresor de aire acondicionado durante fases críticas de funcionamiento del motor térmico para priorizar la potencia de propulsión o facilitar el arranque. (pág. 18)

## Fundamento
El compresor de aire acondicionado representa una carga mecánica considerable para el motor. La unidad de control del motor interrumpe el acoplamiento magnético mediante una señal de inactivación en situaciones de alta demanda dinámica o inestabilidad de revoluciones. (pág. 18)

## Desarrollo
La unidad de control del motor genera y envía una señal de masa (negativo) hacia la unidad del aire acondicionado J293 para desactivar el compresor en las siguientes circunstancias:
- Ausencia de señal de revoluciones del motor.
- Durante los primeros 10 segundos transcurridos tras el arranque del motor.
- Solicitud de plena aceleración (plena carga) a altas velocidades de circulación.
- Accionamiento de la función kick-down en vehículos equipados con cambio automático.

Al recibir esta señal de negativo, la unidad J293 interrumpe la alimentación de la bobina del acoplamiento magnético N25. (pág. 18)

📷 IMAGEN: Diagrama de bloques entre la unidad de control del motor, la unidad de climatización y la unidad J293 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 18

## Valores de referencia
- Tiempo de inhibición tras el arranque del motor: 10 segundos. (pág. 18)

## Errores de concepto frecuentes
- Suponer que el desacoplamiento del compresor en aceleraciones intensas se debe a una avería del presostato o de la unidad del climatizador. (pág. 18)

---

```yaml
tipo: componente
titulo: Conmutador térmico del ventilador del radiador
entidad: conmutador-termico-ventilador
area: motor
sistema: refrigeracion-motor
codigo: F18
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "19"
forma_parte_de: circuito-refrigeracion-motor
relacionados: [electroventilador-condensador, unidad-control-climatizador]
palabras: [F18, 95 ºC, 105 ºC, termoswitch, 1ª velocidad, 2ª velocidad]
```

## Misión
Conectar directamente o gobernar las dos velocidades de los electroventiladores según la temperatura del líquido refrigerante del motor. (pág. 19)

## Tipos y características
Termostato térmico doble normalmente abierto roscado en el depósito del radiador de líquido refrigerante. (pág. 19)

## Principio de funcionamiento
- **Primer conmutador interno:** Cierra sus contactos cuando la temperatura del líquido refrigerante alcanza 95 ºC, enviando corriente de positivo directo (borne 30) a los motores de los ventiladores para activar la 1ª velocidad. (pág. 19)
- **Segundo conmutador interno:** Cierra sus contactos cuando la temperatura alcanza 105 ºC, enviando una señal de positivo (borne 30) a la unidad de control del aire acondicionado J293 para activar la 2ª velocidad. (págs. 19, 29)

📷 IMAGEN: Conmutador térmico F18 montado en el radiador de refrigerante — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 19

## Valores de trabajo
- Temperatura de cierre de 1ª velocidad: 95 ºC. (pág. 19)
- Temperatura de cierre de 2ª velocidad: 105 ºC. (pág. 19)

## Anomalías frecuentes
No documentado en fuentes en la página 19.

## Comportamiento en avería
- Si no cierra el primer contacto, los ventiladores no se activan por temperatura de motor a 95 ºC. (pág. 19)
- Si no cierra el segundo contacto, se pierde el escalonamiento a 2ª velocidad por sobrecalentamiento del motor a 105 ºC. (págs. 19, 29)

## Cómo comprobarlo
Comprobación de continuidad eléctrica entre bornes en baño térmico a 95 ºC y 105 ºC. (pág. 19)

## Mantenimiento
No documentado en fuentes en la página 19.

---

```yaml
tipo: componente
titulo: Unidad de manejo e indicación - Pulsadores
entidad: unidad-manejo-indicacion
variante: pulsadores
area: climatizacion
sistema: control-climatizacion
codigo: E87
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "20"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [E87, bus 18 cables, bus 1 cable, radiocasete, teclado]
```

## Misión
Permitir al usuario seleccionar la temperatura, velocidad de la turbina, modo de recirculación, encendido del aire acondicionado y modo de trabajo del sistema. (pág. 20)

## Tipos y características
Botonera de pulsadores integrada en el conjunto frontal compacto de la consola central que agrupa la climatización, el radiocasete y la pantalla. (pág. 20)

## Principio de funcionamiento
Al presionar cualquier pulsador, la orden se envía a través de un bus de datos paralelo de 18 cables hacia la unidad del radiocasete. La radio procesa la pulsación y la retransmite mediante un bus de datos de 1 solo cable hacia la unidad de control del climatizador J255. (pág. 20)

📷 IMAGEN: Frontal de la unidad de manejo e indicación E87 con el desglose de los pulsadores de climatización y radio — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 20

## Valores de trabajo
- Alimentación eléctrica de la botonera: proporcionada directamente por el módulo del radiocasete. (pág. 20)

## Anomalías frecuentes
No documentado en fuentes en la página 20.

## Comportamiento en avería
- Al fallar un pulsador, la radio emite un mensaje genérico de avería hacia la unidad J255 (sin identificar el botón concreto). (pág. 20)
- La unidad J255 ignora todas las señales de la botonera y entra en un modo de emergencia: fija el autoclima en modo automático a 22 ºC solicitados, asume 20 ºC exteriores, desconecta el compresor y abre la entrada de aire fresco exterior. (pág. 20)
- En calefacción motorizada, mantiene fijos los parámetros existentes antes del fallo. (pág. 20)

## Cómo comprobarlo
Mediante la función "08" (bloque de valores de medición, grupos 003 y 004) del equipo de autodiagnosis. (pág. 37)

## Mantenimiento
No documentado en fuentes en la página 20.

---

```yaml
tipo: componente
titulo: Display de la unidad de manejo e indicación
entidad: display-unidad-manejo
area: climatizacion
sistema: control-climatizacion
codigo: E87
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "21"
forma_parte_de: unidad-manejo-indicacion
relacionados: [unidad-control-climatizador]
palabras: [display, consola central, gran formato, bus 18 cables]
```

## Misión
Visualizar de forma clara los parámetros operativos de la climatización, datos del radiocasete y funciones del ordenador de a bordo. (pág. 21)

## Tipos y características
Pantalla de cristal líquido (LCD) de gran formato integrada en el centro de la consola central. Existen dos variantes de pantalla según se monte autoclima (indicación en ºC) o calefacción motorizada (indicación por barras COLD/HOT). (pág. 21)

## Principio de funcionamiento
La unidad de control J255 transmite los datos de estado a través del bus de 1 cable al radiocasete. El radiocasete procesa los gráficos y excita los segmentos de la pantalla a través del bus de datos de 18 cables. (pág. 21)

📷 IMAGEN: Muestra de indicaciones en el display para los sistemas Autoclima y Calefacción Motorizada — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 21

## Valores de trabajo
- Alimentación eléctrica de la pantalla: suministrada directamente por la unidad del radiocasete. (pág. 21)

## Anomalías frecuentes
No documentado en fuentes en la página 21.

## Comportamiento en avería
- Si falla la comunicación por bus entre la radio y la unidad J255, desaparece toda la información gráfica referente a la climatización en la pantalla. (pág. 21)
- Si se avería el propio display, debe sustituirse la unidad de manejo e indicación E87 completa. (pág. 21)

## Cómo comprobarlo
Inspección visual del encendido de segmentos durante la prueba de autodiagnosis. (pág. 21)

## Mantenimiento
No documentado en fuentes en la página 21.

---

```yaml
tipo: componente
titulo: Servomotor de la trampilla de temperatura
entidad: servomotor-trampilla
variante: temperatura
area: climatizacion
sistema: distribucion-aire
codigo: V68
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "22"
forma_parte_de: unidad-climatizadora
relacionados: [sensor-posicion-trampilla, unidad-control-climatizador]
palabras: [V68, G92, corriente continua, giro limitado, tornillo sin fin]
```

## Misión
Accionar mecánicamente el posicionamiento de la trampilla de mezcla de temperatura dentro de la unidad climática. (pág. 22)

## Tipos y características
Motor eléctrico de corriente continua de giro limitado mediante engranaje de tornillo sin fin. Va ubicado en la parte inferior de la unidad climática e integra en su interior el potenciómetro de posición G92. (pág. 22)

## Principio de funcionamiento
Recibe alimentación de corriente continua desde la unidad de control J255. La unidad invierte la polaridad de los bornes de alimentación para modificar el sentido de giro del motor, desplazando la trampilla hacia la posición de aire más caliente o más frío. (pág. 22)

📷 IMAGEN: Despiece del motor V68 con su mecanismo de tornillo sin fin, rueda de transmisión y potenciómetro G92 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 22

## Valores de trabajo
- Tensión de excitación: 12 V con polaridad reversible. (pág. 22)

## Anomalías frecuentes
No documentado en fuentes en la página 22.

## Comportamiento en avería
- La trampilla permanece inmovilizada en la posición en que se produjo el fallo. (pág. 22)
- La unidad de control reduce el régimen del soplador de aire para limitar la entrada incontrolada de flujo térmico. (pág. 22)

## Cómo comprobarlo
Mediante la función "03" (diagnosis de actuadores) y función "04" (ajuste básico en grupo 002) con el equipo de autodiagnosis. (págs. 36-37)

## Mantenimiento
Tras la sustitución del servomotor V68 o de la unidad de control J255, es obligatorio realizar el ajuste básico (grupo 002) para memorizar los topes mecánicos. (pág. 36)

---

```yaml
tipo: componente
titulo: Turbina de aire e interior y regulador de régimen
entidad: ventilador-habitaculo
area: climatizacion
sistema: distribucion-aire
codigo: V2 / J126
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "22"
forma_parte_de: unidad-climatizadora
relacionados: [unidad-control-climatizador]
palabras: [V2, J126, soplador, regulador electrónico, variación lineal de tensión]
```

## Misión
Impulsar el caudal de aire necesario a través de la unidad climática hacia los difusores del habitáculo. (pág. 22)

## Tipos y características
Conjunto formado por un electromotor soplador (V2) y una etapa de potencia o regulador electrónico de régimen (J126) montado directamente en el flujo de aire de la unidad climática. (pág. 22)

## Principio de funcionamiento
La unidad de control J255 envía una señal de pilotaje en tensión al regulador J126. El regulador modula progresivamente la corriente principal suministrada al motor V2, permitiendo un ajuste continuo del caudal de aire sin escalas fijas por resistencias. (pág. 22)

📷 IMAGEN: Esquema e instalación de la turbina de aire V2 y el módulo regulador de régimen J126 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 22

## Valores de trabajo
- Tensión de salida regulada hacia la turbina: de 0 V a 12 V (en pasos progresivos de 2,5 V durante diagnosis). (págs. 22, 36)

## Anomalías frecuentes
No documentado en fuentes en la página 22.

## Comportamiento en avería
- Interrupción total o falta de variación en el flujo de soplado de aire hacia el habitáculo. (pág. 22)

## Cómo comprobarlo
Mediante la función "03" (diagnosis de actuadores) y función "08" (bloque de valores de medición, grupo 005) con el equipo de autodiagnosis. (págs. 36-37)

## Mantenimiento
No documentado en fuentes en la página 22.

---

```yaml
tipo: componente
titulo: Servomotor de la trampilla de recirculación
entidad: servomotor-trampilla
variante: recirculacion
area: climatizacion
sistema: distribucion-aire
codigo: V113
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "23"
forma_parte_de: unidad-climatizadora
relacionados: [unidad-control-climatizador]
palabras: [V113, giro libre, tres pistas, recirculación, aire fresco]
```

## Misión
Alternar la entrada de aire a la unidad climática entre aire fresco del exterior y aire recirculado del habitáculo. (pág. 23)

## Tipos y características
Motor eléctrico de corriente continua de giro libre en un solo sentido. Ubicado en la parte superior del cuerpo de la unidad climática y dotado de tres pistas de contacto internas. (pág. 23)

## Principio de funcionamiento
Alimentado a 12 V con un borne de masa permanente y dos bornes de positivo seleccionables de forma alternativa. Al recibir positivo por una de las pistas, el motor gira moviendo la palanca de la trampilla hasta que el cursor sale de la pista conductora e interrumpe la corriente, deteniéndose en la posición exacta (aire fresco o recirculación). (pág. 23)

📷 IMAGEN: Módulo del motor V113 y esquema de excitación por pistas deslizantes internas — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 23

## Valores de trabajo
- Tensión de excitación: 12 V. (pág. 23)

## Anomalías frecuentes
No documentado en fuentes en la página 23.

## Comportamiento en avería
- La trampilla de recirculación no cambia de posición. (pág. 23)
- Parpadean todos los dígitos de la pantalla al conectar el autoclima. (pág. 23)

## Cómo comprobarlo
Mediante la función "03" (diagnosis de actuadores) y función "08" (bloque de valores de medición, grupo 001, campo 3) con el equipo de autodiagnosis. (págs. 36-37)

## Mantenimiento
No documentado en fuentes en la página 23.

---

```yaml
tipo: componente
titulo: Acoplamiento magnético del compresor
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
codigo: N25
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "25"
forma_parte_de: compresor
relacionados: [compresor, unidad-control-climatizador]
palabras: [N25, acoplamiento magnético, electroimán, 12 V, polea]
```

## Misión
Conectar o desconectar mecánicamente el arrastre del compresor de aire acondicionado a la polea impulsada por el motor térmico. (pág. 25)

## Tipos y características
Embrague electromagnético montado en el extremo frontal del cuerpo del compresor. Consta de bobina electromagnética, polea de arrastre libre y disco de acoplamiento estriado al eje. (pág. 25)

## Principio de funcionamiento
Al recibir una señal de positivo de 12 V desde la unidad del aire acondicionado J293, la bobina genera un campo magnético que atrae axialmente el disco de acoplamiento contra la polea en giro, haciendo rotar el eje del compresor. Al interrumpirse la corriente, unos muelles separan el disco deshabilitando el compresor. (pág. 25)

📷 IMAGEN: Sección del acoplamiento magnético N25 sobre el cuerpo del compresor — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 25

## Valores de trabajo
- Tensión de alimentación: 12 V de corriente continua. (pág. 25)

## Anomalías frecuentes
No documentado en fuentes en la página 25.

## Comportamiento en avería
- El compresor no gira y la instalación es incapaz de generar frío en el habitáculo. (pág. 25)

## Cómo comprobarlo
Mediante la función "03" (diagnosis de actuadores) y función "08" (bloque de valores de medición, grupo 001, campo 1) con el equipo de autodiagnosis. (págs. 36-37)

## Mantenimiento
No documentado en fuentes en la página 25.

---

```yaml
tipo: componente
titulo: Electroventiladores del radiador y condensador
entidad: electroventilador-condensador
area: motor
sistema: refrigeracion-motor
codigo: V7 / V35
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "25"
forma_parte_de: circuito-refrigeracion-motor
relacionados: [conmutador-termico-ventilador, unidad-control-climatizador]
palabras: [V7, V35, dos velocidades, resistencia serie, canalizador]
```

## Misión
Forzar el paso de aire a través del condensador y del radiador para condensar el gas frigorífico y enfriar el líquido refrigerante del motor. (pág. 25)

## Tipos y características
Pareja de motores eléctricos independientes de dos velocidades montados sobre el canalizador de aire posterior del radiador. (pág. 25)

## Principio de funcionamiento
- **Primera velocidad:** Al recibir positivo desde el conmutador térmico F18 (a 95 ºC) o desde la unidad J293 (al conectar el compresor), la corriente pasa a través de una resistencia eléctrica integrada reduciendo la velocidad de giro. (págs. 25, 29)
- **Segunda velocidad:** Al recibir positivo desde la unidad J293 (por presión > 16 bares en F129/G65 o por temperatura > 105 ºC en F18), la corriente alimenta directamente los devanados del motor a máxima potencia. (págs. 25, 29)

📷 IMAGEN: Módulo con los dos ventiladores independientes V7 y V35 instalados sobre el canalizador — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 25

## Valores de trabajo
- Tensión de alimentación: 12 V. (pág. 25)

## Anomalías frecuentes
No documentado en fuentes en la página 25.

## Comportamiento en avería
- Elevación anómala de la presión de alta en el circuito frigorífico con falta de rendimiento frigorífico al ralentí. (pág. 25)
- Sobrecalentamiento del líquido refrigerante del motor térmico. (pág. 25)

## Cómo comprobarlo
Mediante excitación directa con corriente de batería o verificando la respuesta en la función "03" de diagnosis de actuadores de la unidad del motor. (págs. 25, 36)

## Mantenimiento
No documentado en fuentes en la página 25.

---

```yaml
tipo: componente
titulo: Unidad de control del aire acondicionado
entidad: unidad-control-climatizador
variante: reles
area: climatizacion
sistema: control-climatizacion
codigo: J293
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "29"
forma_parte_de: control-climatizacion
relacionados: [embrague-compresor, electroventilador-condensador, presostato]
palabras: [J293, módulo de relés, acoplamiento magnético, velocidades electroventiladores]
```

## Misión
Gobernar la alimentación eléctrica de alta potencia del acoplamiento magnético N25 y gestionar la activación de las dos velocidades de los electroventiladores V7/V35. (pág. 29)

## Tipos y características
Módulo electromecánico con etapas de potencia y relés integrado en la caja de aguas / vano motor. (pág. 29)

## Principio de funcionamiento
- **Gobierno del compresor:** Al recibir la señal de activación enviada por la unidad J255 (pasando previamente por el presostato F129/G65 y el termostato F38) y constatar la ausencia de señal de corte por parte de la UCE del motor, conecta el relé interno para alimentar el acoplamiento N25. (pág. 29)
- **Gobierno de ventiladores:** Activa la 1ª velocidad al conectar el compresor o al recibir señal del termocontacto F18 (95 ºC). Activa la 2ª velocidad si la presión del gas supera los 16 bares (señal de F129/G65) o si la temperatura del agua alcanza los 105 ºC (señal de F18). (pág. 29)

📷 IMAGEN: Diagrama de bloques funcional de las entradas y salidas de la unidad J293 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 29

## Valores de trabajo
- Tensión de alimentación: 12 V (protegido por fusibles de potencia S164 y S180). (pág. 32)

## Anomalías frecuentes
No documentado en fuentes en la página 29.

## Comportamiento en avería
- Incapacidad para accionar el acoplamiento electromagnético del compresor. (pág. 29)
- Fallo en la activación de las velocidades de los electroventiladores de refrigeración. (pág. 29)

## Cómo comprobarlo
Comprobación de tensiones de entrada de señales en el conector y salidas hacia N25 y V7/V35. (págs. 29, 32)

## Mantenimiento
No documentado en fuentes en la página 29.

---

```yaml
tipo: procedimiento
titulo: Autodiagnóstico de los equipos de mando electrónico
entidad: autodiagnostico-climatizador
area: climatizacion
sistema: control-climatizacion
codigo: J255
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "34-37"
relacionados: [unidad-control-climatizador]
palabras: [autodiagnóstico, dirección 08, función 01, función 02, función 03, función 04, función 08]
```

## Objeto y alcance
Identificar averías registradas en sensores y actuadores, verificar el funcionamiento de los componentes mediante pruebas guiadas y analizar parámetros operativos en tiempo real. (págs. 34-37)

## Condiciones previas
- Tensión de la batería correcta. (pág. 34)
- Encendido conectado (borne 15). (pág. 34)

## Equipo y material
- Equipo de diagnosis (V.A.G 1551, V.A.G 1552 o lector compatible) conectado al conector de diagnóstico de 16 polos T16. (págs. 31, 34)

## Pasos
1. Conectar el equipo de diagnosis e ingresar mediante el código de dirección "08 - Aire acondicionado". (pág. 34)
2. **Función 01 (Versión de la unidad):** Consultar el código de recambios, la versión del software y el tipo de equipo (reconoce autoclima o calefacción motorizada mediante la presencia del puente a masa en el pin 21). (pág. 34)
3. **Función 02 (Consultar memoria de averías):** Leer los fallos memorizados (distingue entre esporádicas y permanentes). (pág. 35)
4. **Función 03 (Diagnóstico de actuadores):** Ejecutar la prueba de elementos (activa cíclicamente N25, la turbina V2 en rampa de 0 a 12 V, el servomotor V68 de tope a tope y V113 entre aire fresco y recirculación). (pág. 36)
5. **Función 04 (Iniciar ajuste básico):** Acceder al grupo "002" para que la unidad reconozca y grabe electrónicamente la posición real del servomotor de la trampilla de temperatura V68. (pág. 36)
6. **Función 05 (Borrar memoria de averías):** Borrar el registro de fallos una vez subsanados. (pág. 34)
7. **Función 08 (Leer bloque de valores de medición):** Analizar los grupos de indicación 001 al 006 para evaluar presiones, temperaturas de NTC, estados de pulsadores y voltajes en tiempo real. (pág. 37)

## Valores de referencia
- Código de dirección del sistema: 08. (pág. 34)
- Criterio de borrado automático de averías esporádicas: tras 40 puestas en marcha sin reproducirse el fallo. (pág. 34)
- Grupo de ajuste básico para servomotor V68: Grupo 002 (valores en voltios entre 0,76 V y 4,21 V). (págs. 36-37)

## Verificación final
Comprobar que al reconectar el climatizador ya no parpadean los dígitos del display de la consola central y la memoria de averías permanece limpia. (págs. 12, 34)

## Seguridad y normativa
No documentado en fuentes en las páginas 34-37.

---

COBERTURA: documento «CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf», páginas 15 a 38 de 38. [completo]