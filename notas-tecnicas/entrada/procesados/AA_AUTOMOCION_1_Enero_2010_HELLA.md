```yaml
tipo: fundamento
titulo: Sistemas de climatización en el SEAT Ibiza y Córdoba '99
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "4-5"
relacionados: [unidad-control-climatizador]
palabras: [ventilación, calefacción motorizada, autoclima, confort, mandos giratorios]
```

## Objeto
Obtener la temperatura deseada en el interior del habitáculo para garantizar el confort de los ocupantes mediante distintos niveles de equipamiento. (págs. 4-5)

## Fundamento
Dependiendo del equipamiento del vehículo, la regulación térmica puede realizarse mediante accionamiento puramente mecánico (ventilación-calefacción) o mediante sistemas de mando electrónico (calefacción motorizada y autoclima). El equipo autoclima combina el aire acondicionado con la gestión electrónica para mantener de forma automática la temperatura preseleccionada. (págs. 4-5)

## Desarrollo
El Ibiza/Córdoba '99 dispone de tres alternativas de climatización:
- **Ventilación-calefacción:** La distribución de aire y la temperatura se seleccionan mecánicamente con dos mandos giratorios. La recirculación de aire y la turbina de ventilación se impulsan mediante dos motores eléctricos. Solo permite elevar la temperatura del aire exterior al hacerlo pasar por el radiador de la calefacción. (pág. 4)
- **Calefacción motorizada:** Equipo de mando electrónico que regula mecánicamente la distribución de aire y electrónicamente la temperatura deseada, siempre que la temperatura exterior lo permita. (pág. 4)
- **Autoclima:** Equipo de aire acondicionado con gestión electrónica integral. Una unidad de control regula la temperatura del aire, activa la recirculación, conecta el aire acondicionado y ajusta la velocidad de la turbina de forma automática o manual. Los datos de funcionamiento se visualizan en un display central y la distribución de aire se mantiene por mando giratorio mecánico. (pág. 5)

📷 IMAGEN: Ilustración de los mandos e indicación en pantalla de los sistemas de ventilación, calefacción motorizada y autoclima — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 4-5

## Valores de referencia
No documentado en fuentes en las páginas 4-5.

## Errores de concepto frecuentes
- Creer que el equipo de ventilación-calefacción manual permite enfriar el aire por debajo de la temperatura ambiente exterior. (pág. 4)
- Suponer que la distribución de aire en el autoclima se gestiona mediante servomotores eléctricos, cuando se realiza mediante un mando giratorio mecánico. (pág. 5)

---

```yaml
tipo: componente
titulo: Unidad climática
entidad: unidad-climatizadora
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "6"
forma_parte_de: distribucion-aire
relacionados: [evaporador, intercambiador-calor, ventilador-habitaculo]
palabras: [cuerpo climatizador, trampilla de temperatura, regulador electrónico, carcasa]
```

## Misión
Albergar y estructurar los elementos de calefacción, refrigeración, filtrado y distribución de aire que tratan el flujo enviado al habitáculo del vehículo. (pág. 6)

## Tipos y características
La estructura constructiva del cuerpo de la unidad climática es idéntica para todos los equipamientos del vehículo. Las únicas diferencias según el sistema instalado son:
- Método de accionamiento de la trampilla de temperatura (mecánico por cable o eléctrico por motor). (pág. 6)
- Presencia de dos transmisores de temperatura en los difusores (exclusivo del autoclima). (pág. 6)
- Incorporación de un regulador electrónico de régimen para la turbina (en autoclima y calefacción motorizada). (pág. 6)

## Principio de funcionamiento
Canaliza el aire impulsado por la turbina haciéndolo pasar forzosamente a través del evaporador y, según la posición de la trampilla de temperatura, desviando todo o parte del caudal a través del radiador de calefacción. La mezcla de aire caliente y frío resultante se dirige hacia los difusores seleccionados mediante los cables de accionamiento mecánico. (pág. 6)

📷 IMAGEN: Vista en despiece de la unidad climática con la ubicación del evaporador, radiador de calefacción, turbina, regulador y motores de trampillas — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 6

## Valores de trabajo
No documentado en fuentes en la página 6.

## Anomalías frecuentes
No documentado en fuentes en la página 6.

## Comportamiento en avería
No documentado en fuentes en la página 6.

## Cómo comprobarlo
No documentado en fuentes en la página 6.

## Mantenimiento
No documentado en fuentes en la página 6.

---

```yaml
tipo: fundamento
titulo: Circuito frigorífico del SEAT Ibiza y Córdoba '99
entidad: ciclo-frigorifico
area: climatizacion
sistema: circuito-frigorifico
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "7"
relacionados: [compresor, condensador, filtro-deshidratador, valvula-expansion, evaporador, refrigerante-r134a]
palabras: [R134a, compresor 7 cilindros, silenciador, válvula de seguridad, 44 bares]
```

## Objeto
Explicar la disposición, estructura y parámetros operativos del circuito frigorífico de aire acondicionado empleado en el SEAT Ibiza y Córdoba '99. (pág. 7)

## Fundamento
El circuito es cerrado y utiliza agente frigorífico R134a para extraer el calor del aire del habitáculo a través de cambios de estado del fluido entre las zonas de alta y baja presión. (pág. 7)

## Desarrollo
El circuito frigorífico es idéntico tanto para el sistema manual como para el autoclima y consta de los siguientes elementos:
- **Compresor:** De 7 cilindros, tipo autorregulado. Arrastrado por correa Poly V mediante acoplamiento magnético. Incorpora una válvula de seguridad. (pág. 7)
- **Condensador:** Situado delante del radiador de refrigerante del motor para disipar el calor del gas comprimido. (pág. 7)
- **Filtro deshidratador:** Retiene la humedad, filtra residuos de abrasión y evita la formación de burbujas en el flujo de líquido. (pág. 7)
- **Válvula de expansión:** Controla el caudal y la presión del refrigerante que entra al evaporador. (pág. 7)
- **Evaporador:** Integrado en la unidad climática; en él se expande el refrigerante absorbiendo el calor del aire de entrada al habitáculo. (pág. 7)
- **Elemento de control de presión:** Conmutador F129 o transmisor electrónico G65 (según motorización), montado en alta presión junto a la válvula de expansión. (pág. 7)
- **Silenciador:** Situado en la línea de baja presión, próximo al compresor, para amortiguar los ruidos de las ondas de presión entre la válvula de expansión y el compresor. (pág. 7)

📷 IMAGEN: Esquema del circuito frigorífico mostrando la posición del compresor, condensador, filtro deshidratador, válvula de expansión, evaporador, silenciador y transmisor de presión — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 7

## Valores de referencia
- Cantidad de agente frigorífico R134a: 750 ± 50 gramos. (pág. 7)
- Presión de tarado de la válvula de seguridad del compresor: 44 bares. (pág. 7)
- Número de cilindros del compresor: 7 cilindros. (pág. 7)

## Errores de concepto frecuentes
- Pensar que el circuito frigorífico del sistema con climatizador automático (autoclima) requiere componentes mecánicos principales distintos a los del sistema de aire acondicionado manual. (pág. 7)
- Confundir la función del silenciador de baja presión con un filtro de impurezas del circuito. (pág. 7)

---

```yaml
tipo: fundamento
titulo: Estructura descentralizada de los equipos de mando electrónico
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "8-10"
relacionados: [unidad-control-climatizador]
palabras: [descentralizada, J255, J293, radiocasete, gestión electrónica]
```

## Objeto
Explicar el funcionamiento interconectado y descentralizado de los equipos de mando electrónico (calefacción motorizada y autoclima) en el SEAT Ibiza/Córdoba '99. (págs. 8-10)

## Fundamento
Para gestionar la climatización se utiliza una arquitectura descentralizada en la que las tareas de selección, procesamiento de datos, acoplamiento de potencia y gestión de ventilación se reparten entre varias unidades de control interconectadas. (págs. 8-10)

## Desarrollo
El sistema distribuye sus funciones entre los siguientes módulos:
- **Unidad del equipo de mando electrónico (J255):** Procesa las señales de los sensores térmicos y establece la estrategia de regulación de temperatura, aire de entrada y soplado. (págs. 8, 10)
- **Radiocasete (R):** Actúa como pasarela de comunicación entre la unidad de manejo e indicación (E87) accesible al usuario y la unidad de control J255. (págs. 8, 10)
- **Unidad del aire acondicionado (J293):** Gobierna directamente la alimentación del acoplamiento magnético del compresor y activa las distintas velocidades de los electroventiladores del radiador según la presión del gas y la temperatura del motor. (págs. 8, 10)
- **Unidad de control del motor:** Interviene en la gestión del compresor para inhibir su acoplamiento en fases de arranque, solicitud de plena carga, kick-down o falta de señal de revoluciones. (págs. 8, 10)

📷 IMAGEN: Cuadro sinóptico de la estructura descentralizada con las unidades J255, J293, radiocasete R, unidad de motor y sus sensores/actuadores asociados — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 8-11

## Valores de referencia
No documentado en fuentes en las páginas 8-10.

## Errores de concepto frecuentes
- Considerar que la unidad de control del climatizador J255 alimenta directamente el embrague del compresor y los electroventiladores del radiador sin pasar por el módulo J293. (págs. 8-10)

---

```yaml
tipo: componente
titulo: Transmisor de temperatura interior con turbina de aspiración
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: G56
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "12, 24"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G56, V42, NTC, aspiración de aire, parpadeo display]
```

## Misión
Medir con precisión la temperatura real del aire del habitáculo para que la unidad de control del autoclima ajuste la potencia de refrigeración y calefacción. (págs. 12, 24)

## Tipos y características
Sensor térmico tipo NTC integrado en un conjunto junto a un pequeño electromotor con turbina de aspiración (V42). Va montado detrás del tablero de instrumentos, junto a la columna de dirección. (pág. 12)

## Principio de funcionamiento
El motor eléctrico V42 impulsa de forma continua una turbina que aspira aire del habitáculo haciéndolo pasar a través del elemento sensor NTC. La resistencia NTC varía su valor en función de la temperatura del aire aspirado, enviando la señal eléctrica correspondiente a la unidad de control. El motor V42 incorpora una placa electrónica interna que gobierna su giro y detecta fallos funcionales. (págs. 12, 24)

📷 IMAGEN: Sección del transmisor de temperatura interior G56 mostrando la resistencia NTC, la turbina y el motor eléctrico de aspiración V42 — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 12, 24

## Valores de trabajo
- Campo de medición de la NTC: de -40 ºC a +85 ºC. (pág. 12)
- Alimentación eléctrica del motor V42: 12 V con señal de borne 15 (contacto). (pág. 24)

## Anomalías frecuentes
No documentado en fuentes en las páginas 12, 24.

## Comportamiento en avería
- Si falla el transmisor o el motor de la turbina V42, parpadean todos los dígitos del display central al conectar el autoclima. (págs. 12, 24)
- En caso de avería en el motor V42, la unidad de control del autoclima aplica un factor de corrección sobre el valor del transmisor G56 para simular la temperatura del habitáculo. (pág. 24)

## Cómo comprobarlo
Mediante la función "08" (bloque de valores de medición, grupo 005) del equipo de autodiagnosis. (pág. 37)

## Mantenimiento
No documentado en fuentes en las páginas 12, 24.

---

```yaml
tipo: componente
titulo: Transmisores de temperatura del aire de entrada
entidad: sensor-temperatura-interior
variante: difusores
area: climatizacion
sistema: control-climatizacion
codigo: G191 / G192
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "12-13"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [G191, G192, difusor central, difusor pies, NTC, valor medio]
```

## Misión
Medir la temperatura del aire impulsado a través de las salidas de ventilación hacia el habitáculo para ajustar la mezcla de aire de la unidad climática. (págs. 12-13)

## Tipos y características
Pareja de termistores tipo NTC ubicados en puntos clave de los canales de distribución:
- **Transmisor G191:** Montado en el difusor central. (pág. 13)
- **Transmisor G192:** Montado en el difusor de la zona de los pies. (pág. 13)

## Principio de funcionamiento
Cada elemento varía su resistencia eléctrica según la temperatura del aire impulsado que pasa a su alrededor. La unidad de control del autoclima procesa ambas señales y calcula un valor medio de temperatura para regular con precisión el posicionamiento de la trampilla de mezcla. (págs. 12-13)

📷 IMAGEN: Ubicación de los transmisores de temperatura del aire impulsado G191 en el difusor central y G192 en el difusor de los pies — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 13

## Valores de trabajo
- Margen de temperatura referenciado de las NTC: de -40 ºC a +85 ºC. (pág. 13)

## Anomalías frecuentes
No documentado en fuentes en las páginas 12-13.

## Comportamiento en avería
- Pérdida de regulación automática del autoclima: el sistema fija los parámetros operativos en el estado en que se encontraban al producirse el fallo. (pág. 13)
- Parpadeo de todos los dígitos de la pantalla del display al conectar el equipo. (pág. 13)

## Cómo comprobarlo
Mediante la función "08" (bloque de valores de medición, grupo 006) del equipo de autodiagnosis. (pág. 37)

## Mantenimiento
No documentado en fuentes en las páginas 12-13.

---

```yaml
tipo: componente
titulo: Transmisor de temperatura exterior
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
codigo: G17
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "14"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G17, NTC, retrovisor derecho, valor sustitutivo 20 ºC, tres rayas]
```

## Misión
Captar la temperatura del aire exterior para permitir el cálculo de la carga térmica y gestionar las funciones automáticas de climatización y acoplamiento del compresor. (pág. 14)

## Tipos y características
Resistencia con coeficiente de temperatura negativo (NTC) montada en el interior de la carcasa del retrovisor exterior derecho (lado del acompañante). (pág. 14)

## Principio de funcionamiento
Modifica su resistencia eléctrica en proporción inversa a la temperatura del aire exterior. La señal es recibida por la unidad del radiocasete, que la presenta en el display y la retransmite mediante el bus de datos a la unidad del autoclima. (pág. 14)

📷 IMAGEN: Ubicación del transmisor de temperatura exterior G17 en el retrovisor del lado del acompañante — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 14

## Valores de trabajo
- Valor de temperatura sustitutivo por avería: 20 ºC. (pág. 14)

## Anomalías frecuentes
No documentado en fuentes en la página 14.

## Comportamiento en avería
- La pantalla del display del radiocasete muestra tres rayas ("---") en el campo de temperatura exterior. (pág. 14)
- La unidad del autoclima asume un valor fijo sustitutivo de 20 ºC y deshabilita la conexión del compresor de aire acondicionado. (pág. 14)
- Todos los dígitos del display parpadean al conectar el autoclima. (pág. 14)

## Cómo comprobarlo
Mediante la función "08" (bloque de valores de medición, grupo 006) en el equipo de autodiagnosis. (pág. 37)

## Mantenimiento
No documentado en fuentes en la página 14.

---

```yaml
tipo: componente
titulo: Interruptor térmico de temperatura exterior
entidad: presostato
variante: termostato-caja-aguas
area: climatizacion
sistema: control-climatizacion
codigo: F38
fabricante: SEAT
fuente: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf"
paginas: "14"
forma_parte_de: control-climatizacion
relacionados: [compresor, evaporador, unidad-control-climatizador]
palabras: [F38, caja de aguas, 5 ºC, protección congelación, normalmente cerrado]
```

## Misión
Impedir el funcionamiento del compresor de aire acondicionado a temperaturas ambiente excesivamente bajas para evitar la congelación de la humedad en el evaporador. (pág. 14)

## Tipos y características
Interruptor térmico bimetálico normalmente cerrado instalado en la caja de aguas del vehículo. (pág. 14)

## Principio de funcionamiento
Mantiene sus contactos cerrados por encima de 5 ºC permitiendo el paso de la señal de conexión de 12 V enviada desde la unidad de control del autoclima hacia la unidad del aire acondicionado J293. Al descender la temperatura por debajo de 5 ºC, sus contactos se abren mecánicamente e interrumpen la línea eléctrica. (pág. 14)

📷 IMAGEN: Ubicación e instalación del interruptor térmico F38 en la caja de aguas — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, pág. 14

## Valores de trabajo
- Temperatura de apertura de contactos: < 5 ºC. (pág. 14)
- Tensión de la señal conducida: 12 V. (pág. 14)

## Anomalías frecuentes
Contactos pegados o agarrotados en posición de cierre permanente. (pág. 14)

## Comportamiento en avería
- Si sus contactos quedan permanentemente cerrados, el compresor continua conectando a temperaturas inferiores a 5 ºC, provocando la congelación de la humedad retenida en el evaporador y bloqueando el paso de aire. (pág. 14)
- Si sus contactos quedan abiertos, el compresor no conectará en ningún momento. (pág. 14)

## Cómo comprobarlo
No documentado en fuentes en la página 14.

## Mantenimiento
No documentado en fuentes en la página 14.

COBERTURA: documento «CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf», páginas 4 a 14 de 38. queda pendiente desde la página 15