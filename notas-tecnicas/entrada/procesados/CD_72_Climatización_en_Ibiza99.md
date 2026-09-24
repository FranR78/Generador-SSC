```yaml
tipo: fundamento
titulo: Sistemas de climatización en el SEAT Ibiza y Córdoba '99
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "4-5"
relacionados: [unidad-control-climatizador]
palabras: [ventilación, calefacción motorizada, autoclima, confort, mandos giratorios]
```

## Objeto
Obtener la temperatura deseada en el interior del habitáculo para garantizar el confort de los ocupantes mediante distintos sistemas de accionamiento y regulación. (págs. 4-5)

## Fundamento
Dependiendo del equipamiento del vehículo, el ajuste térmico se realiza por accionamiento manual (ventilación/calefacción y aire acondicionado) o por equipos de mando electrónico (calefacción motorizada y autoclima). El autoclima integra la gestión electrónica del aire acondicionado para regular y mantener constante la temperatura solicitada por el usuario. (págs. 4-5)

## Desarrollo
El Ibiza/Córdoba '99 ofrece cuatro opciones de equipamiento:
- **Ventilación-calefacción:** Selección mecánica de distribución y temperatura por mandos giratorios. Recirculación de aire y turbina impulsados por motores eléctricos. Solo permite elevar la temperatura del aire exterior haciéndolo pasar por el radiador de la calefacción. (pág. 4)
- **Aire acondicionado manual:** Mismo accionamiento manual que el sistema anterior, con la adición de un pulsador eléctrico para el aire acondicionado. Permite aumentar o disminuir la temperatura canalizando el aire por el evaporador y el radiador de calefacción. (pág. 4)
- **Calefacción motorizada:** La turbina, la trampilla de temperatura y la trampilla de recirculación se accionan mediante motores eléctricos comandados por una unidad de control electrónica. La distribución de aire se selecciona mecánicamente por mando giratorio y un display central informa de los parámetros de funcionamiento. (pág. 5)
- **Autoclima:** Equipo de aire acondicionado con gestión electrónica integral. Una unidad de control regula la temperatura del aire y activa de forma automática la recirculación, el aire acondicionado y la velocidad de la turbina. La distribución de aire se mantiene por mando giratorio mecánico. (pág. 5)

📷 IMAGEN: Ilustración de las unidades de mando y pantallas del display de los sistemas de ventilación, calefacción motorizada y autoclima — Fuente: CD 72. Climatización en Ibiza99.pdf, págs. 4-5

## Valores de referencia
No documentado en fuentes en las páginas 4-5.

## Errores de concepto frecuentes
- Asumir que la ventilación-calefacción manual puede reducir la temperatura del habitáculo por debajo de la temperatura ambiente exterior. (pág. 4)
- Creer que el autoclima acciona la distribución de aire hacia los difusores mediante servomotores eléctricos, cuando se realiza mecánicamente con mando giratorio. (pág. 5)

---

```yaml
tipo: componente
titulo: Unidad climática
entidad: unidad-climatizadora
area: climatizacion
sistema: distribucion-aire
fabricante: SEAT
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "6"
forma_parte_de: distribucion-aire
relacionados: [evaporador, intercambiador-calor, ventilador-habitaculo]
palabras: [cuerpo climatizador, trampilla de temperatura, regulador electrónico, carcasa]
```

## Misión
Albergar y estructurar los elementos de calefacción, refrigeración, filtrado y distribución que tratan el caudal de aire enviado al habitáculo. (pág. 6)

## Tipos y características
La estructura de la carcasa de la unidad climática es idéntica en todos los equipamientos. Presenta únicamente las siguientes variaciones según el sistema instalado:
- Activación de la trampilla de temperatura (eléctrica en equipos de mando electrónico o mecánica por cable). (pág. 6)
- Presencia de dos transmisores de temperatura de entrada (exclusivo de autoclima). (pág. 6)
- Incorporación de un regulador electrónico de velocidad para la turbina (en autoclima y calefacción motorizada). (pág. 6)

## Principio de funcionamiento
Canaliza el aire aspirado por la turbina obligándolo a pasar por el evaporador y, según el posicionamiento de la trampilla de temperatura, desviando total o parcialmente el flujo a través del radiador de calefacción. Las trampillas de distribución, movidas por cables bowden desde el mando giratorio central, dirigen el aire tratado hacia los difusores seleccionados. La trampilla de recirculación es movida en todos los casos por un motor eléctrico. (pág. 6)

📷 IMAGEN: Despiece de la unidad climática con la ubicación del evaporador, radiador de calefacción, turbina, regulador electrónico y motores de trampillas — Fuente: CD 72. Climatización en Ibiza99.pdf, pág. 6

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
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "7"
relacionados: [compresor, condensador, filtro-deshidratador, valvula-expansion, evaporador, refrigerante-r134a]
palabras: [R134a, compresor 7 cilindros, silenciador, válvula de seguridad, 44 bares]
```

## Objeto
Describir la composición, disposición de componentes y especificaciones del circuito frigorífico de aire acondicionado en el SEAT Ibiza y Córdoba '99. (pág. 7)

## Fundamento
El circuito cerrado absorbe calor del aire del habitáculo a través del evaporador y lo cede al exterior mediante el condensador, utilizando la circulación impulsada de agente frigorífico R134a. (pág. 7)

## Desarrollo
El circuito frigorífico es exactamente el mismo en el sistema manual y en el autoclima:
- **Condensador:** Situado por delante del radiador del líquido refrigerante del motor. (pág. 7)
- **Filtro deshidratador:** Retiene la humedad, filtra impurezas por abrasión y evita la formación de burbujas de gas en el flujo líquido. (pág. 7)
- **Válvula de expansión:** Regula la presión y el caudal de agente frigorífico hacia el evaporador. (pág. 7)
- **Evaporador:** Ubicado en la unidad climática, permite la expansión del refrigerante produciendo el intercambio térmico con el aire. (pág. 7)
- **Compresor:** De 7 cilindros, tipo autorregulado. Arrastrado por correa Poly V y acoplamiento magnético. Dispone de una válvula de seguridad de sobrepresión. (pág. 7)
- **Elemento de presión:** Conmutador F129 o transmisor electrónico G65 (según motorización), montado en la línea de alta presión junto a la válvula de expansión. (pág. 7)
- **Silenciador:** Montado en el circuito de baja presión cerca del compresor para amortiguar los ruidos causados por las ondas de presión entre la válvula de expansión y el compresor. (pág. 7)

📷 IMAGEN: Esquema del circuito frigorífico indicando la posición de la válvula de expansión, evaporador, condensador, filtro deshidratador, silenciador y compresor — Fuente: CD 72. Climatización en Ibiza99.pdf, pág. 7

## Valores de referencia
- Carga de agente frigorífico R134a: 750 ± 50 gramos. (pág. 7)
- Presión de tarado de la válvula de seguridad del compresor: 44 bares. (pág. 7)
- Número de cilindros del compresor: 7 cilindros. (pág. 7)

## Errores de concepto frecuentes
- Suponer que el autoclima equipa un circuito frigorífico con componentes mecánicos principales diferentes a los del aire acondicionado manual. (pág. 7)
- Confundir la función amortiguadora de ondas de presión del silenciador de baja presión con la filtración de impurezas. (pág. 7)

---

```yaml
tipo: fundamento
titulo: Estructura descentralizada de los equipos de mando electrónico
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: SEAT
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "8-10"
relacionados: [unidad-control-climatizador]
palabras: [descentralizada, J255, J293, radiocasete, autodiagnóstico]
```

## Objeto
Explicar el reparto funcional descentralizado entre las diferentes unidades de control que participan en la gestión de los equipos de mando electrónico (calefacción motorizada y autoclima). (págs. 8-10)

## Fundamento
Para simplificar el cableado y optimizar las funciones, la gestión del sistema se distribuye entre varias unidades de control interconectadas que asumen tareas específicas de regulación, conmutación de potencia y comunicación. (págs. 8-10)

## Desarrollo
El cuadro de funciones distribuidas se compone de:
- **Unidad del equipo de mando electrónico (J255):** Gestiona la regulación de temperatura (modos automático, semiautomático y manual), controla la intensidad de iluminación del mando de distribución y realiza las funciones de autodiagnóstico con memoria de averías. (págs. 8, 10)
- **Unidad del aire acondicionado (J293):** Gobierna el acoplamiento magnético del compresor y activa las velocidades de los ventiladores del líquido refrigerante según la presión del gas y la temperatura del motor. (págs. 8, 10)
- **Radiocasete (R):** Actúa como módulo de comunicación entre la unidad de manejo e indicación y la unidad de control J255, controlando además la iluminación del display y de los pulsadores. (págs. 8, 10)
- **Unidad de control del motor:** Interviene enviando señales de inhibición del compresor en fases de alta exigencia o inestabilidad. (págs. 8, 10)

📷 IMAGEN: Cuadro sinóptico de la estructura descentralizada identificando la unidad J255, J293, radiocasete R, unidad del motor y sensores/actuadores asociados — Fuente: CD 72. Climatización en Ibiza99.pdf, págs. 8-11

## Valores de referencia
No documentado en fuentes en las páginas 8-10.

## Errores de concepto frecuentes
- Pensar que la unidad J255 alimenta de forma directa el embrague magnético del compresor sin interposición del módulo de relés J293. (págs. 8-10)

---

```yaml
tipo: componente
titulo: Transmisor de temperatura interior
entidad: sensor-temperatura-interior
area: climatizacion
sistema: control-climatizacion
codigo: G56
fabricante: SEAT
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "12, 24"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G56, V42, NTC, aspiración, parpadeo display]
```

## Misión
Captar la temperatura real del aire del habitáculo para que la unidad de control del autoclima determine el posicionamiento de la trampilla de mezcla de temperatura. (págs. 12, 24)

## Tipos y características
Resistencia con coeficiente de temperatura negativo (NTC) montada junto a un motor eléctrico con turbina (V42). Va instalado detrás del tablero de instrumentos, junto a la columna de dirección. (pág. 12)

## Principio de funcionamiento
El motor eléctrico V42 hace girar una turbina que genera una corriente continua de aire del habitáculo a través del termistor NTC. La resistencia eléctrica de la NTC varía en función de la temperatura del aire aspirado, enviando el valor de tensión a la unidad del autoclima. (págs. 12, 24)

📷 IMAGEN: Sección del transmisor G56 montado con el motor de turbina V42 y la resistencia NTC — Fuente: CD 72. Climatización en Ibiza99.pdf, págs. 12, 24

## Valores de trabajo
- Campo de medición del termistor NTC: de -40 ºC a +85 ºC. (pág. 12)

## Anomalías frecuentes
No documentado en fuentes en las páginas 12, 24.

## Comportamiento en avería
- La unidad del autoclima adopta un valor térmico sustitutivo fijo de 22 ºC. (pág. 12)
- Al seleccionar temperaturas distintas a 22 ºC, el habitáculo se calienta o enfría en exceso al carecer de lectura real. (pág. 12)
- Al conectar el autoclima, parpadean los dígitos del display de la consola central. (pág. 12)

## Cómo comprobarlo
A través de la función "08" (bloque de valores de medición, grupo 005, campo 4) del equipo de autodiagnóstico. (pág. 37)

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
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "12-13"
forma_parte_de: distribucion-aire
relacionados: [unidad-control-climatizador]
palabras: [G191, G192, difusor central, difusor pies, NTC, valor medio]
```

## Misión
Medir la temperatura del aire tratado impulsado hacia las salidas del habitáculo para permitir la regulación de la mezcla en la unidad climática. (págs. 12-13)

## Tipos y características
Pareja de termistores tipo NTC ubicados en los conductos de impulsión:
- **Transmisor G191:** Instalado en el difusor central. (pág. 13)
- **Transmisor G192:** Instalado en el difusor de la zona de los pies. (pág. 13)

## Principio de funcionamiento
Varían su resistencia interna según la temperatura del aire que fluye por los difusores. La unidad del autoclima calcula el valor medio de ambas mediciones para ajustar la posición de la trampilla de temperatura de aire. (págs. 12-13)

📷 IMAGEN: Ubicación e instalación de los transmisores de temperatura G191 en el difusor central y G192 en la zona de pies — Fuente: CD 72. Climatización en Ibiza99.pdf, pág. 13

## Valores de trabajo
- Campo de medición de las NTC: de -40 ºC a +85 ºC. (pág. 13)

## Anomalías frecuentes
No documentado en fuentes en las páginas 12-13.

## Comportamiento en avería
- La unidad de control desactiva la regulación automática, inmovilizando los parámetros funcionales en el estado previo a la avería. (pág. 13)
- Parpadean todos los dígitos del display de la consola central al conectar el autoclima. (pág. 13)

## Cómo comprobarlo
A través de la función "08" (bloque de valores de medición, grupo 006, campos 2 y 3) del equipo de autodiagnóstico. (pág. 37)

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
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "14"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador]
palabras: [G17, NTC, retrovisor derecho, valor sustitutivo 20 ºC, tres rayas]
```

## Misión
Medir la temperatura del aire ambiente exterior para permitir el cálculo de la carga térmica del vehículo y gestionar la activación del compresor y ventiladores. (pág. 14)

## Tipos y características
Resistencia con coeficiente de temperatura negativo (NTC) ubicada en el interior de la carcasa del retrovisor exterior derecho (lado del acompañante). (pág. 14)

## Principio de funcionamiento
Modifica su resistencia eléctrica de forma inversamente proporcional a la temperatura exterior. La señal llega a la unidad del radiocasete, que la muestra en la pantalla y la retransmite a la unidad del autoclima. El autoclima la utiliza para ajustar la temperatura, la velocidad de la turbina, la trampilla de recirculación y la conexión del compresor. (pág. 14)

📷 IMAGEN: Montaje de la resistencia NTC del transmisor G17 en la carcasa del retrovisor del acompañante — Fuente: CD 72. Climatización en Ibiza99.pdf, pág. 14

## Valores de trabajo
- Valor sustitutivo asignado en avería: 20 ºC. (pág. 14)

## Anomalías frecuentes
No documentado en fuentes en la página 14.

## Comportamiento en avería
- El radiocasete muestra tres rayas ("---") en el campo de temperatura exterior del display. (pág. 14)
- La unidad del autoclima adopta un valor fijo sustitutivo de 20 ºC y anula la señal de acoplamiento del compresor de aire acondicionado. (pág. 14)
- Todos los dígitos del display parpadean al conectar el autoclima. (pág. 14)

## Cómo comprobarlo
A través de la función "08" (bloque de valores de medición, grupo 006, campo 1) del equipo de autodiagnóstico. (pág. 37)

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
fuente: "CD 72. Climatización en Ibiza99.pdf"
paginas: "14"
forma_parte_de: control-climatizacion
relacionados: [compresor, evaporador, unidad-control-climatizador]
palabras: [F38, caja de aguas, 5 ºC, normalmente cerrado, desconexión compresor]
```

## Misión
Interrumpir la alimentación del acoplamiento magnético del compresor cuando la temperatura exterior es inferior a 5 ºC para impedir la congelación del evaporador. (pág. 14)

## Tipos y características
Interruptor térmico bimetálico normalmente cerrado instalado en el interior de la caja de aguas del vehículo. (pág. 14)

## Principio de funcionamiento
Conduce la señal eléctrica de conexión de 12 V enviada desde la unidad del autoclima hacia la unidad del aire acondicionado J293. Permanece cerrado con temperaturas superiores a 5 ºC y abre mecánicamente sus contactos cuando la temperatura desciende de 5 ºC. (pág. 14)

📷 IMAGEN: Ubicación del interruptor térmico F38 en la caja de aguas — Fuente: CD 72. Climatización en Ibiza99.pdf, pág. 14

## Valores de trabajo
- Temperatura de apertura de contactos: < 5 ºC. (pág. 14)
- Tensión de paso conducida: 12 V. (pág. 14)

## Anomalías frecuentes
Contactos pegados en posición de cierre continuo. (pág. 14)

## Comportamiento en avería
- Si sus contactos quedan cerrados de forma permanente, el compresor continúa funcionando a temperaturas inferiores a 5 ºC, pudiendo provocar la congelación del agua acumulada en el evaporador. (pág. 14)
- Si sus contactos quedan abiertos, se elimina la señal de 12 V y el compresor no se acopla en ningún momento. (pág. 14)

## Cómo comprobarlo
No documentado en fuentes en la página 14.

## Mantenimiento
No documentado en fuentes en la página 14.

---

COBERTURA: documento «CD 72. Climatización en Ibiza99.pdf», páginas 4 a 14 de 38. queda pendiente desde la página 15