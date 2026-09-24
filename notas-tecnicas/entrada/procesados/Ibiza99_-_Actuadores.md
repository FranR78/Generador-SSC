```yaml
tipo: componente
titulo: Unidad de manejo e indicación
entidad: unidad-control-climatizador
variante: display
area: climatizacion
sistema: control-climatizacion
codigo: E87
fabricante: SEAT
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "21-22"
relacionados: [unidad-control-radiocasete]
palabras: [display, autoclima, calefacción motorizada, bus de datos]
```

## Misión
Se ubica en la consola central e informa sobre los parámetros de funcionamiento del autoclima o la calefacción motorizada, el radiocasete y el ordenador de a bordo. (pág. 21)

📷 IMAGEN: Vista frontal del display de la unidad de manejo e indicación E87 con indicación de parámetros — Fuente: Ibiza99 - Actuadores.pdf, pág. 21

## Tipos y características
Existen dos tipos de display, según se trate de un montaje con autoclima o con calefacción motorizada. Destaca por sus grandes dimensiones, lo que facilita la lectura de una gran cantidad de datos. (pág. 21)

## Principio de funcionamiento
Los dígitos del display relativos al autoclima o la calefacción motorizada son excitados según la información recibida a través de un bus de datos de 18 cables procedente de la unidad de control del radiocasete. A su vez, el radiocasete recibe previamente esta información de la unidad de control del autoclima o calefacción motorizada mediante otro bus de datos de 1 cable. La unidad de control del radiocasete suministra también la alimentación eléctrica al display. (pág. 21-22)

## Valores de trabajo
Bus de datos de 18 cables entre radiocasete y display; bus de datos de 1 cable entre unidad de autoclima/calefacción motorizada y radiocasete. (pág. 21-22)

## Anomalías frecuentes
Avería en la comunicación por el bus de datos entre la unidad del radiocasete y la unidad del autoclima o calefacción motorizada. (pág. 22)

## Comportamiento en avería
Si falla la comunicación del bus de datos entre el radiocasete y la unidad del autoclima o la calefacción motorizada, los datos referentes a estos sistemas dejan de ser visibles. En caso de fallo del propio display, es necesario sustituir la unidad de manejo e indicación E87 completa. (pág. 22)

## Cómo comprobarlo
No documentado en fuentes. (pág. 21-22)

## Mantenimiento
No documentado en fuentes. (pág. 21-22)

---

```yaml
tipo: componente
titulo: Motor de la trampilla de temperatura
entidad: servomotor-trampilla
variante: temperatura
area: climatizacion
sistema: distribucion-aire
codigo: V68
fabricante: SEAT
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "21-22"
forma_parte_de: distribucion-aire
relacionados: [potenciometro-g92, unidad-control-climatizador]
palabras: [trampilla de temperatura, corriente continua, giro limitado, potenciómetro G92]
```

## Misión
Actúa directamente sobre la trampilla de temperatura. Se encuentra alojado en la parte inferior de la unidad climática. (pág. 21)

📷 IMAGEN: Despiece interno del motor V68 con potenciómetro G92, tornillo sin fin y rueda de transmisión — Fuente: Ibiza99 - Actuadores.pdf, pág. 22

## Tipos y características
Es un motor eléctrico de corriente continua de giro limitado. Integra en su interior el potenciómetro G92 para informar de su posición. (pág. 21-22)

## Principio de funcionamiento
Es excitado con positivo y negativo desde la unidad de control de los equipos de selección eléctrica. La polaridad en bornes se conmuta en función del sentido de giro requerido. (pág. 22)

## Valores de trabajo
No documentado en fuentes. (pág. 21-22)

## Anomalías frecuentes
No documentado en fuentes. (pág. 21-22)

## Comportamiento en avería
Ante una avería, la trampilla permanece inmóvil en la posición en que se encontraba y la unidad de control reduce la velocidad de la turbina para disminuir la entrada de aire. (pág. 22)

## Cómo comprobarlo
No documentado en fuentes. (pág. 21-22)

## Mantenimiento
No documentado en fuentes. (pág. 21-22)

---

```yaml
tipo: componente
titulo: Motor de la turbina de aire y regulador de régimen
entidad: ventilador-habitaculo
area: climatizacion
sistema: distribucion-aire
codigo: "V2, J126"
fabricante: SEAT
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "22"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [turbina de aire, regulador de régimen, caudal de aire, Climatronic]
```

## Misión
Generan el caudal de aire necesario en el habitáculo para dar respuesta a cada situación de funcionamiento. (pág. 22)

📷 IMAGEN: Esquema del motor de la turbina V2 y regulador de régimen J126 — Fuente: Ibiza99 - Actuadores.pdf, pág. 22

## Tipos y características
Su diseño y principio operativo son idénticos a los montados en el sistema Climatronic. (pág. 22)

## Principio de funcionamiento
No documentado en fuentes. (pág. 22)

## Valores de trabajo
No documentado en fuentes. (pág. 22)

## Anomalías frecuentes
Pérdida acusada o interrupción del caudal de aire introducido al habitáculo. (pág. 22)

## Comportamiento en avería
No existe función sustitutiva. La avería se detecta de forma inmediata al reducirse notablemente el caudal de aire. (pág. 22)

## Cómo comprobarlo
No documentado en fuentes. (pág. 22)

## Mantenimiento
No documentado en fuentes. (pág. 22)

---

```yaml
tipo: componente
titulo: Motor de la trampilla de recirculación
entidad: servomotor-trampilla
variante: recirculacion
area: climatizacion
sistema: distribucion-aire
codigo: V113
fabricante: SEAT
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "22-23"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [trampilla de recirculación, giro libre, pistas internas, parpadeo display]
```

## Misión
Acciona la trampilla de recirculación de aire. Está posicionado en la parte superior de la unidad climática. (pág. 22)

📷 IMAGEN: Disposición del motor V113, palanca de giro, guía, cursor y trampilla de recirculación — Fuente: Ibiza99 - Actuadores.pdf, pág. 22-23

## Tipos y características
Es un motor de corriente continua de giro libre con un único sentido de giro. Equipa en su interior tres pistas conductoras que regulan el tiempo de activación y la parada exacta de la trampilla. (pág. 22)

## Principio de funcionamiento
Se excita a 12 V desde la unidad de control del autoclima o de la calefacción motorizada. Dispone de tres terminales: uno alimentado con negativo continuo y los otros dos de forma alternativa según la maniobra. Al alimentar dos terminales, el motor gira recibiendo positivo desde una pista interna hasta alcanzar el final de la misma, momento en que el cursor queda sobre la pista no excitada hasta recibir un nuevo comando. (pág. 23)

## Valores de trabajo
Tensión de alimentación: 12 V. (pág. 23)

## Anomalías frecuentes
No documentado en fuentes. (pág. 22-23)

## Comportamiento en avería
No dispone de función sustitutiva. Al producirse un fallo, parpadean todos los dígitos del display cada vez que se conecta el autoclima. (pág. 23)

## Cómo comprobarlo
No documentado en fuentes. (pág. 22-23)

## Mantenimiento
No documentado en fuentes. (pág. 22-23)

---

```yaml
tipo: componente
titulo: Motor para la turbina del transmisor de temperatura interior
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: V42
fabricante: SEAT
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "23-24"
relacionados: [transmisor-temperatura-interior-g56, unidad-control-climatizador]
palabras: [turbina, transmisor G56, placa electrónica, señal de 15]
```

## Misión
Genera una corriente constante de aire que aspira y fuerza el paso del aire sobre el transmisor de temperatura interior G56, permitiendo medir con precisión la temperatura del habitáculo. Forma un único conjunto con el transmisor G56. (pág. 23)

📷 IMAGEN: Vista explosionada del motor V42 con placa electrónica, estator y rotor con turbina imantada — Fuente: Ibiza99 - Actuadores.pdf, pág. 24

## Tipos y características
Aloja en su interior una placa electrónica encargada del control de funcionamiento y del autodiagnóstico de averías. Su rotor consta de una turbina con eje imantado. (pág. 23-24)

## Principio de funcionamiento
Es excitado con positivo y negativo desde la unidad de control del autoclima mientras dicha unidad reciba la señal de contacto (borne "15"). (pág. 24)

## Valores de trabajo
Señal de excitación: Positivo y negativo condicionados a la presencia de señal de borne "15". (pág. 24)

## Anomalías frecuentes
No documentado en fuentes. (pág. 23-24)

## Comportamiento en avería
Si la unidad del autoclima detecta un fallo en este motor, aplica factores de corrección sobre la señal registrada por el transmisor G56 para estimar un valor aproximado a la temperatura real. (pág. 24)

## Cómo comprobarlo
No documentado en fuentes. (pág. 23-24)

## Mantenimiento
No documentado en fuentes. (pág. 23-24)

---

```yaml
tipo: fundamento
titulo: Señal de salida para conexión del aire acondicionado
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "24"
relacionados: [unidad-control-climatizador, compresor, embrague-compresor, unidad-control-motor]
palabras: [señal de positivo, excitación compresor, régimen de ralentí]
```

## Objeto
Habilitar la activación del compresor de aire acondicionado y coordinar la gestión de carga con la unidad de control del motor térmico. (pág. 24)

📷 IMAGEN: Esquema de envío de la señal de positivo desde la unidad del autoclima hacia la unidad del aire acondicionado y la unidad del motor — Fuente: Ibiza99 - Actuadores.pdf, pág. 24

## Fundamento
La demanda de frío requiere el acoplamiento del compresor y el incremento simultáneo del par del motor para evitar oscilaciones o calados al ralentí. (pág. 24)

## Desarrollo
La unidad del autoclima envía una señal de positivo tanto a la unidad del aire acondicionado como a la unidad de control del motor. Mediante esta señal, la unidad del aire acondicionado conecta el compresor activando el acoplamiento magnético N25, mientras que la unidad del motor incrementa el régimen de ralentí. No existe función sustitutiva. (pág. 24)

## Valores de referencia
Tensión de señal: Positivo (12 V). (pág. 24)

## Errores de concepto frecuentes
No documentado en fuentes. (pág. 24)

---

```yaml
tipo: componente
titulo: Acoplamiento magnético
entidad: embrague-compresor
area: climatizacion
sistema: circuito-frigorifico
codigo: N25
fabricante: SEAT
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "24-25"
forma_parte_de: compresor
relacionados: [unidad-control-climatizador, compresor]
palabras: [embrague electromagnético, bobina, polea de arrastre, presión frigorífica]
```

## Misión
Está montado en el compresor y se encarga de acoplarlo para que gire solidario con el motor térmico, generando la presión indispensable en el circuito frigorífico. (pág. 24)

📷 IMAGEN: Despiece del acoplamiento magnético N25 con bobina electromagnética, embrague, polea de arrastre y compresor — Fuente: Ibiza99 - Actuadores.pdf, pág. 25

## Tipos y características
El conjunto está fijado al compresor y lo integran la bobina electromagnética, el embrague y la polea de arrastre. (pág. 24-25)

## Principio de funcionamiento
Es excitado con positivo por la unidad de control del aire acondicionado, manteniéndose acoplado durante todo el tiempo que reciba dicha excitación. (pág. 25)

## Valores de trabajo
Señal de excitación: Positivo continuo enviado por la unidad de control. (pág. 25)

## Anomalías frecuentes
Falta de enfriamiento del aire que entra al habitáculo. (pág. 25)

## Comportamiento en avería
No existe función sustitutiva. La avería es claramente perceptible dado que el aire impulsado al habitáculo no se enfría. (pág. 25)

## Cómo comprobarlo
No documentado en fuentes. (pág. 24-25)

## Mantenimiento
No documentado en fuentes. (pág. 24-25)

---

```yaml
tipo: componente
titulo: Ventiladores de líquido refrigerante
entidad: electroventilador-condensador
area: climatizacion
sistema: circuito-frigorifico
codigo: "V7, V35"
fabricante: SEAT
fuente: "Ibiza99 - Actuadores.pdf"
paginas: "24-25"
relacionados: [conmutador-termico-f18, unidad-control-climatizador, condensador, liquido-refrigerante-motor]
palabras: [electroventiladores, dos velocidades, resistencia eléctrica, conmutador térmico F18]
```

## Misión
Generan el flujo de aire necesario para atravesar el condensador y rebajar la temperatura del agente frigorífico. Por su ubicación, ese mismo flujo de aire atraviesa el radiador del motor, reduciendo la temperatura del líquido refrigerante. (pág. 24-25)

📷 IMAGEN: Montaje de los ventiladores V7 y V35 con motores independientes y resistencia de material resistivo en el canalizador — Fuente: Ibiza99 - Actuadores.pdf, pág. 25

## Tipos y características
Dispone de dos ventiladores accionados por motores independientes. Cada ventilador cuenta con dos velocidades de trabajo. La primera velocidad se obtiene mediante una resistencia eléctrica (material resistivo) alojada en el canalizador de aire de los propios ventiladores. (pág. 25)

## Principio de funcionamiento
Son excitados a 12 V por la unidad de control del aire acondicionado y a través del conmutador térmico del ventilador F18. El circuito de la primera velocidad puede ser alimentado indistintamente por el conmutador térmico F18 o por la unidad de control del aire acondicionado. En cambio, el circuito de la segunda velocidad es alimentado siempre de forma exclusiva por la unidad de control del aire acondicionado. (pág. 25)

## Valores de trabajo
Tensión de excitación: 12 V. (pág. 25)

## Anomalías frecuentes
No documentado en fuentes. (pág. 24-25)

## Comportamiento en avería
No existe función sustitutiva. (pág. 25)

## Cómo comprobarlo
No documentado en fuentes. (pág. 24-25)

## Mantenimiento
No documentado en fuentes. (pág. 24-25)

COBERTURA: documento «Ibiza99 - Actuadores.pdf», páginas 21 a 25 de 25. completo