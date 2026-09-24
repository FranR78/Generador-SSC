```yaml
tipo: fundamento
titulo: Sistema Keyless Access
entidad: autorizacion-acceso-y-arranque
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "96-98"
relacionados: [unidad-control-acceso-y-arranque, sensor-contacto-manilla, antena-deteccion-llaves, pulsador-arranque, actuador-bloqueo-columna-direccion]
palabras: [keyless access, radiofrecuencia, arranque sin llave, cierre centralizado]
```

## Objeto
El sistema Keyless Access permite desbloquear, bloquear el vehículo y poner en marcha el motor sin necesidad de introducir la llave físicamente en ninguna cerradura. (pág. 96)

## Fundamento
El sistema se basa en la localización e identificación inequívoca de la llave por radiofrecuencia mediante zonas de búsqueda con un alcance máximo de 1,5 metros alrededor de las manillas y del portón. La gestión la realiza la Unidad de Control para la autorización de acceso y arranque. (págs. 96-97)

## Desarrollo
Para la apertura de puertas, el usuario introduce la mano en el hueco de las manillas delanteras y el sensor capacitivo activa la solicitud. Para cerrar, se pulsa sobre la hendidura exterior de la manilla. 

El arranque del motor se solicita presionando el pulsador de arranque en la consola central. Si el vehículo detecta la llave en el interior, el pulsador destella para indicar la disponibilidad de arranque. En cambio manual requiere pisar el pedal de embrague; en cambio automático exige situar la palanca en P o N y pisar el pedal de freno.

Como condiciones especiales, si la llave queda dentro del vehículo no se permite el bloqueo para evitar olvidos. Sin embargo, si se bloquea desde el exterior con una segunda llave, el bloqueo sí se autoriza. Para ahorrar energía, los sensores capacitivos de la manilla del acompañante se desconectan tras 30 horas de inactividad y los del conductor tras 90 horas; se reactivan pulsando el mando a distancia. 

Para parar el motor en marcha por emergencia (> 2 km/h), hay que pulsar el botón de arranque y confirmar el mensaje en el cuadro de instrumentos. Si la pila de la llave se agota, se realiza un arranque de emergencia acercando la llave a la columna de dirección (zona del clausor). (págs. 96-98)

## Valores de referencia
- Distancia máxima de detección por radiofrecuencia exterior: 1,5 m.
- Desconexión por bajo consumo: 30 horas (acompañante) y 90 horas (conductor).
- Umbral de velocidad para paro de emergencia en marcha: superior a 2 km/h. (págs. 96-98)

## Errores de concepto frecuentes
Creer que el vehículo se puede bloquear con la llave dentro. El sistema lo impide salvo que se utilice de forma deliberada una segunda llave desde el exterior. (pág. 97)

---

```yaml
tipo: componente
titulo: Unidad de control para la autorización de acceso y arranque
entidad: unidad-control-acceso-y-arranque
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "99, 102"
forma_parte_de: autorizacion-acceso-y-arranque
relacionados: [unidad-control-red-a-bordo, sensor-contacto-manilla, antena-deteccion-llaves, pulsador-arranque]
palabras: [unidad de control, cerebro, can-bus, wake up, reexcitacion]
```

## Misión
Analizar las señales de los sensores, gestionar las autorizaciones de acceso, arranque y bloqueo de la columna de dirección, y enviar las órdenes de actuación a las demás unidades de control. (págs. 99, 102)

## Tipos y características
Unidad electrónica de control interconectada a través de CAN-Bus de confort (con la unidad de confort, la de bloqueo de columna y el cuadro de instrumentos) y LIN-Bus (con la unidad del portón eléctrico). Se encarga de reexcitar a la unidad de control de la red de a bordo mediante una señal codificada Wake Up por cable convencional. (págs. 100, 102)

## Principio de funcionamiento
Al recibir una solicitud de los sensores capacitivos de la manilla o del pulsador de arranque, la unidad activa las antenas emisoras para iniciar la búsqueda de la llave y despierta a la red de a bordo para la verificación de los códigos de seguridad. (págs. 102-103)

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Mediante la lectura de bloques de valores de medición y diagnosis de averías del sistema de acceso y arranque a través del puerto EOBD. (págs. 100, 102)

## Mantenimiento
No requiere mantenimiento periódico específico. (págs. 99, 102)

---

```yaml
tipo: componente
titulo: Sensor de contacto de la manilla exterior de la puerta delantera
entidad: sensor-contacto-manilla
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "99, 101"
forma_parte_de: autorizacion-acceso-y-arranque
relacionados: [unidad-control-acceso-y-arranque, antena-deteccion-llaves]
palabras: [sensor capacitivo, manilla, desbloqueo, bloqueo]
```

## Misión
Detectar la presencia de la mano del usuario para emitir la solicitud de bloqueo o desbloqueo de las puertas y alojar la antena emisora lateral de baja frecuencia. (págs. 99, 101)

## Tipos y características
Ubicados en las manillas de las puertas delanteras. Cada conjunto incorpora una tarjeta electrónica con dos sensores capacitivos y una antena emisora integrada. (pág. 101)

📷 IMAGEN: Composición interna de la manilla exterior con sensores capacitivos de bloqueo y desbloqueo, tarjeta electrónica y bobina sobre núcleo de hierro — Fuente: 5. Confort.pdf, pág. 101

## Principio de funcionamiento
Un sensor capacitivo detecta el desbloqueo al introducir la mano en el hueco interior de la manilla. El segundo sensor capacitivo detecta el bloqueo al pulsar la superficie exterior. Al aproximar la mano, aumenta la capacidad del sensor, variaciones que son procesadas por la electrónica interna de la manilla. (pág. 101)

## Valores de trabajo
- Frecuencia de emisión de la antena integrada: baja frecuencia (125 kHz). (págs. 101, 104)

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
Verificar en bloques de valores si se registra la variación de capacidad al acercar la mano y comprobar la desconexión automática por tiempo de inactividad. (págs. 97, 101)

## Mantenimiento
No requiere mantenimiento. Limpieza externa de la superficie capacitiva para evitar lecturas erróneas. (pág. 101)

---

```yaml
tipo: componente
titulo: Antenas para la detección de llaves
entidad: antena-deteccion-llaves
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "99, 101"
forma_parte_de: autorizacion-acceso-y-arranque
relacionados: [unidad-control-acceso-y-arranque, unidad-control-red-a-bordo]
palabras: [antena emisora, baja frecuencia, 125 khz, alcance 1.5 m]
```

## Misión
Emitir señales de búsqueda por radiofrecuencia en zonas delimitadas para detectar e identificar la presencia y posición exacta de la llave autorizada. (págs. 96, 101)

## Tipos y características
El vehículo dispone habitualmente de 5 antenas emisoras compuestas por una bobina enrollada sobre un núcleo de hierro:
- Dos antenas en las manillas delanteras (búsqueda exterior lateral).
- Una antena en el paragolpes o portón trasero (búsqueda exterior posterior).
- Dos antenas interiores: una en el maletero/respaldo trasero y otra en la consola central (habitáculo). (págs. 97, 99, 101)

## Principio de funcionamiento
Funcionan por baja frecuencia (125 kHz). Al activarse por la unidad de control, emiten un campo que estimula a la llave cercana para que responda enviando su código por alta frecuencia (434 MHz) a la unidad de la red de a bordo. (págs. 102-104)

## Valores de trabajo
- Alcance máximo de emisión exterior: 1,5 m.
- Frecuencia de emisión LF: 125 kHz. (págs. 96, 104)

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
Si falla una antena interior, el vehículo puede no detectar la llave en el habitáculo e impedir el arranque ordinario. (págs. 97-98)

## Cómo comprobarlo
Diagnosis de actuadores para excitar las antenas y verificación con comprobador de campo LF de 125 kHz. (págs. 101, 104)

## Mantenimiento
No requiere. (pág. 101)

---

```yaml
tipo: componente
titulo: Pulsador del dispositivo de arranque del motor
entidad: pulsador-arranque
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "98, 99, 102"
forma_parte_de: autorizacion-acceso-y-arranque
relacionados: [unidad-control-acceso-y-arranque]
palabras: [pulsador arranque, start engine stop, destello led, plausibilidad]
```

## Misión
Recoger la orden manual del conductor para conectar el contacto (borne 15), arrancar el motor (borne 50) o apagarlo. (págs. 98, 102)

## Tipos y características
Pulsador situado en la consola central. Integra iluminación por led y cuatro contactos eléctricos en su circuito interno. (págs. 96, 99, 102)

## Principio de funcionamiento
Dispone de dos contactos independientes dedicados a la señal de solicitud de arranque y dos contactos para la alimentación del led de iluminación. Al accionar el botón, se envían dos señales paralelas a la unidad de control de acceso y arranque. (págs. 102, 104)

## Valores de trabajo
- Contactos eléctricos internos: 4 contactos (2 de señal y 2 de iluminación). (pág. 102)

## Anomalías frecuentes
Falta de coincidencia (plausibilidad) entre los dos contactos de señal por desgaste mecánico o fallo electrónico interno. (pág. 102)

## Comportamiento en avería
La unidad de control detecta la incoherencia de señal y bloquea la solicitud de arranque por seguridad. (pág. 102)

## Cómo comprobarlo
Comprobar el estado de las dos señales mediante el bloque de valores de medición con el equipo de diagnosis y verificar el destello de aviso del led. (págs. 98, 102)

## Mantenimiento
No admite reparación interna; en caso de avería se sustituye el conjunto. (pág. 102)

---

```yaml
tipo: componente
titulo: Actuador de bloqueo de la columna de dirección
entidad: actuador-bloqueo-columna-direccion
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "105-106"
forma_parte_de: autorizacion-acceso-y-arranque
relacionados: [unidad-control-acceso-y-arranque]
palabras: [bloqueo columna, motor electrico, tornillo sin fin, perno, sensores hall, perno fijador]
```

## Misión
Bloquear y desbloquear de forma electromecánica la columna de dirección al carecer de cerradura mecánica de contacto (clausor). (págs. 99, 105)

## Tipos y características
Unidad electromecánica integrada en una jaula metálica sobre la columna de dirección. Incorpora su propia placa electrónica de control. (págs. 105-106)

📷 IMAGEN: Despiece interno del actuador con motor eléctrico, tornillo sin fin, perno, sensores Hall y perno fijador — Fuente: 5. Confort.pdf, pág. 106

## Principio de funcionamiento
Un motor eléctrico hace girar un engranaje de tornillo sin fin que desplaza linealmente un perno de fijación hacia el eje de la dirección. Invirtiendo la polaridad de alimentación del motor se invierte el sentido de giro para retraer el perno. La placa electrónica integra sensores Hall para registrar las posiciones finales de bloqueado y desbloqueado. (pág. 106)

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
Intento de manipulación o fallo en la lectura de los sensores Hall de posición final. (pág. 106)

## Comportamiento en avería
Si el perno no alcanza la posición de desbloqueo, el sistema no autoriza la activación de los bornes de encendido e impide el arranque. (págs. 104, 106)

## Cómo comprobarlo
Lectura de las señales de los sensores Hall de posición de perno (bloqueado/desbloqueado) mediante la diagnosis de la unidad. (pág. 106)

## Mantenimiento
Para desmontar la unidad de la jaula mecánica de la columna es estrictamente obligatorio que el perno esté desbloqueado. Solo así es posible presionar el perno fijador de protección contra manipulaciones. Si la columna está bloqueada, el perno fijador no se puede empujar y la unidad no se puede extraer. (pág. 106)

---

```yaml
tipo: procedimiento
titulo: Proceso de solicitud de apertura y bloqueo de puertas
entidad: proceso-apertura-bloqueo-puertas
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "103"
relacionados: [autorizacion-acceso-y-arranque, unidad-control-acceso-y-arranque, unidad-control-red-a-bordo]
palabras: [protocolo apertura, protocolo bloqueo, 434 mhz, 125 khz, can-bus]
```

## Objeto y alcance
Describir la secuencia de comunicación entre unidades de control, antenas y la llave para autorizar el desbloqueo o bloqueo de las puertas desde las manillas. (pág. 103)

## Condiciones previas
Llave autorizada en la zona de cobertura exterior (< 1,5 m) de la puerta correspondiente. (págs. 96, 101)

## Equipo y material
Sistema Keyless Access operativo. (pág. 96)

## Pasos
1. El usuario introduce la mano en la manilla (desbloqueo) o pulsa sobre la superficie externa (bloqueo); el sensor capacitivo varía su capacidad y transmite la señal a la unidad de control de acceso y arranque.
2. La unidad de control de acceso y arranque activa la búsqueda mediante emisión de baja frecuencia (125 kHz) en las antenas del vehículo y reexcita por cable a la unidad de control de la red de a bordo.
3. La llave capta la señal LF de la antena de la manilla y emite su código identificativo y su posición mediante alta frecuencia (434 MHz) hacia la unidad de control de la red de a bordo.
4. La unidad de control de la red de a bordo valida la autenticidad del código y despierta el CAN-Bus de confort.
5. Las unidades de control de las puertas reciben la orden por la red CAN y alimentan los motores eléctricos para bloquear o desbloquear los cierres. (pág. 103)

## Valores de referencia
- Frecuencia de búsqueda (antenas): 125 kHz (baja frecuencia).
- Frecuencia de respuesta (llave): 434 MHz (alta frecuencia). (págs. 103-104)

## Verificación final
Comprobar el destello de los intermitentes y el accionamiento de los servomotores de las cerraduras. (pág. 103)

## Seguridad y normativa
No aplica.

---

```yaml
tipo: procedimiento
titulo: Proceso de autorización de contacto y arranque del motor
entidad: proceso-autorizacion-contacto-arranque
area: confort-y-seguridad
sistema: NUEVO-acceso-y-arranque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "104"
relacionados: [autorizacion-acceso-y-arranque, pulsador-arranque, actuador-bloqueo-columna-direccion]
palabras: [borne 15, borne 50, borne S, inmovilizador, transponder]
```

## Objeto y alcance
Establecer la secuencia de verificación de seguridad para el acoplamiento del contacto (borne 15) y la activación del motor de arranque (borne 50). (pág. 104)

## Condiciones previas
Proceso de acceso al vehículo superado. Llave en el interior del habitáculo. Pisar el pedal de embrague en cambio manual, o pisar el freno con la palanca en P o N en cambio automático. (págs. 97-98)

## Equipo y material
Sistema Keyless Access e Inmovilizador. (págs. 100, 104)

## Pasos
1. El conductor presiona el pulsador de arranque en la consola central.
2. La unidad de acceso y arranque envía una solicitud a las antenas interiores (125 kHz) para rastrear la llave, despierta el CAN-Bus de confort y prepara la comunicación con el inmovilizador.
3. La llave en el interior capta la señal LF de alta intensidad y responde enviando su transponder y posición por alta frecuencia (434 MHz) a la unidad de control de la red de a bordo.
4. La unidad de la red de a bordo realiza la consulta de autorización con el inmovilizador (cuadro de instrumentos), ignorando cualquier otra llave detectada en el exterior.
5. Tras verificar el transponder, el inmovilizador transmite la confirmación al CAN-Bus de confort.
6. La unidad de bloqueo desbloquea la columna de dirección.
7. La unidad de la red de a bordo activa la gestión de bornes conectando la corriente para el Borne S, Borne 15 (contacto) y Borne 50 (arranque) junto con la unidad de control del motor. (pág. 104)

## Valores de referencia
- Bornes de alimentación gestionados: Borne S, Borne 15 y Borne 50. (pág. 104)

## Verificación final
Comprobar el arranque del motor y el apagado de los testigos de inmovilizador y bloqueo en el Cuadro de Instrumentos. (pág. 104)

## Seguridad y normativa
No aplica.

---

```yaml
tipo: fundamento
titulo: Portón del maletero eléctrico
entidad: porton-maletero-electrico
area: confort-y-seguridad
sistema: NUEVO-cierre-y-aperturas
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "107-108"
relacionados: [motor-porton-trasero, cerradura-porton-electrico, funcion-easy-open]
palabras: [porton electrico, apertura automatica, memorización altura, antiaprasionamiento]
```

## Objeto
Permitir la apertura y el cierre automatizado del portón del maletero mediante motores eléctricos gestionados por una unidad de control específica. (pág. 107)

## Fundamento
El sistema utiliza dos motores eléctricos laterales sincronizados que ejecutan las maniobras a partir de las órdenes recibidas de pulsadores de la consola, del mando a distancia, de la manilla externa, del botón del portón o de los sensores gestuales Easy Open. (págs. 107-108)

## Desarrollo
La unidad de control del portón asume el reconocimiento de solicitudes, la activación de los motores principales de elevación, el control de la cerradura con cierre asistido y la gestión de la función de seguridad antiaplastamiento.

El portón permite memorizar una altura de apertura máxima reducida. Para ello, se detiene manualmente el portón en la posición deseada y se pulsa el botón del portón durante 3 segundos. El sistema confirma la memorización con un aviso acústico y el destello de los intermitentes. En vehículos equipados con gancho de remolque, la apertura automatizada se restringe y solo se permite el accionamiento manual desde el pulsador de la manilla del portón. (págs. 107-108)

## Valores de referencia
- Tiempo de pulsación para memorizar la altura máxima: 3 segundos. (pág. 107)

## Errores de concepto frecuentes
Pensar que en vehículos con gancho de remolque se mantiene la apertura por Easy Open o mando. La fuente especifica que la apertura se realiza únicamente desde el pulsador de la manilla del portón. (pág. 107)

---

```yaml
tipo: componente
titulo: Motor eléctrico de accionamiento del portón trasero
entidad: motor-porton-trasero
area: confort-y-seguridad
sistema: NUEVO-cierre-y-aperturas
fabricante: VW
fuente: "5. Confort.pdf"
paginas: "108-109"
forma_parte_de: porton-maletero-electrico
relacionados: [porton-maletero-electrico]
palabras: [husillo, engranaje planetario, freno muelle envolvente, sensores hall]
```

## Misión
Generar el par y movimiento mecánico necesario para elevar y descender la puerta del maletero reteniendo el peso en cualquier posición intermedia. (págs. 108-109)

## Tipos y características
Se montan dos conjuntos integrados en los laterales del portón reemplazando a los muelles de gas convencionales. Cada unidad incorpora:
- Un motor eléctrico con transmisión por engranaje planetario doble de dos etapas.
- Un husillo roscado con tuerca.
- Un muelle helicoidal interno de refuerzo.
- Un freno mecánico de muelle envolvente.
- Dos sensores Hall de control. (pág. 109)

📷 IMAGEN: Despiece del motor del portón con husillo, engranajes planetarios, freno de muelle envolvente y sensores Hall — Fuente: 5. Confort.pdf, pág. 109

## Principio de funcionamiento
El motor eléctrico hace girar el husillo a través de la reducción planetaria para extender o recoger la tuerca. Un sensor Hall mide las revoluciones (velocidad) y el segundo determina el sentido de giro. 

El freno de muelle envolvente está compuesto por un muelle interior (solidario al husillo) y uno exterior (solidario al motor) apoyados sobre una carcasa. Cuando el portón se detiene en un punto, el propio peso tiende a cerrarlo, lo que expande el muelle interior e incrementa el par de fricción contra la carcasa deteniendo la caída. Al activar el motor, el muelle exterior se expande liberando la carcasa para reanudar el giro. (págs. 108-109)

## Valores de trabajo
- Sensores Hall: 2 sensores por motor (1 de revoluciones y 1 de sentido de giro). (pág. 108)

## Anomalías frecuentes
Desfase de velocidad entre ambos motores por desgaste mecánico o resistencia excesiva en las articulaciones. (pág. 109)

## Comportamiento en avería
Si la unidad de control detecta discrepancias entre la velocidad teórica y la real leída por los sensores Hall, corta la excitación de los motores inmediatamente. El portón se puede mover entonces de forma manual aplicando fuerza continua. (pág. 109)

## Cómo comprobarlo
Comprobar el recuento de revoluciones e inversión de señal de los sensores Hall con el equipo de diagnosis. (págs. 108-109)

## Mantenimiento
No requiere lubricación interna por el usuario. (pág. 109)

---

```yaml
tipo: componente
titulo: Cerradura del portón eléctrico y motor de cierre asistido
entidad: cerradura-porton-electrico
area: confort-y-seguridad
sistema: NUEVO-cierre-y-aperturas
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "109-110"
forma_parte_de: porton-maletero-electrico
relacionados: [porton-maletero-electrico]
palabras: [cierre asistido, cable bowden, interruptor precierre, antiaprisionamiento]
```

## Misión
Garantizar el desbloqueo electromecánico de la cerradura, el trincado final asistido del portón contra la carrocería y la detección de obstáculos por presión o sobrecorriente. (págs. 109-110)

## Tipos y características
El conjunto se divide en dos unidades:
- Unidad de cierre del portón: accionada por la unidad de la red de a bordo; integra los interruptores 1 y 2 de estado.
- Motor del cierre asistido: accionado por la unidad del portón mediante un cable Bowden para tirar del trinquete de cierre. (págs. 109-110)

## Principio de funcionamiento
Cuando el portón baja y alcanza la posición semicerrada (precierre), los interruptores de la unidad de cierre informan a las unidades de control. En ese momento, se activa el motor de cierre asistido que desplaza el mecanismo mediante el cable Bowden para llevar la cerradura a la posición de cierre total.

La función antiaprisionamiento actúa de dos formas:
1. Medición de intensidad de corriente: si hay un obstáculo, la corriente de los motores se eleva. Al cerrar, detiene el movimiento, emite un aviso acústico y abre el portón unos 40 cm. Al abrir, detiene el portón en la posición actual.
2. Sensores resistivos integrados: montados en los bordes; al presionarse disminuyen su resistencia y la unidad detiene los motores. (págs. 110)

## Valores de trabajo
- Recorrido de inversión en caso de obstáculo durante el cierre: aprox. 40 cm.
- Interruptores de confirmación: 2 en la unidad de cierre y 1 en el motor asistido. (págs. 109-110)

## Anomalías frecuentes
Fallo en la señal del cable Bowden o desajuste de los microinterruptores de precierre. (pág. 110)

## Comportamiento en avería
El portón no realiza el ajuste final contra la junta de estanqueidad o rebota al intentar cerrar. (pág. 110)

## Cómo comprobarlo
Monitorear los estados de los Interruptores 1 y 2 en el bloque de valores de medición del módulo EOBD. (págs. 110, 112)

## Mantenimiento
Verificar la tensión y correcto guiado del cable Bowden. (págs. 109-110)

---

```yaml
tipo: fundamento
titulo: Función Easy Open del portón eléctrico
entidad: funcion-easy-open
area: confort-y-seguridad
sistema: NUEVO-cierre-y-aperturas
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "111-112"
relacionados: [porton-maletero-electrico, autorizacion-acceso-y-arranque]
palabras: [easy open, pedal virtual, sensores capacitivos, parachoques trasero, lin-bus]
```

## Objeto
Permitir la apertura o cierre automatizado del portón del maletero sin contacto manual, mediante un movimiento pendular del pie bajo el paragolpes trasero. (págs. 97, 111)

## Fundamento
Se basa en dos sensores capacitivos situados bajo la cubierta del paragolpes trasero que detectan la variación del campo magnético generada por el pie. La orden se valida cruzando la señal con la detección de la llave Keyless en la zona posterior. (págs. 111-112)

## Desarrollo
Cuando la unidad de control para la apertura del portón capta la fluctuación en los dos electrodos capacitivos, transmite una señal vía LIN-Bus a la unidad de control de acceso y arranque. Esta unidad activa el rastreo por la antena trasera del paragolpes. Si se confirma una llave autorizada a menos de 1,5 metros, se ordena el desbloqueo y la elevación del portón, confirmando con el destello de los intermitentes y la tercera luz de freno.

Para su activación se requiere: vehículo totalmente parado, Borne 15 desconectado y la llave a menos de 1,5 m. En situaciones de lluvia torrencial o lavado a presión, el sistema se desactiva automáticamente para evitar aperturas involuntarias. Tras ceder la perturbación, el sistema se rearma solo a los 90 segundos. Es posible desactivar la función desde el menú MIB/CAR en "Ajustes / Cierre centralizado". (págs. 111-112)

## Valores de referencia
- Distancia requerida de la llave al portón: inferior a 1,5 metros.
- Tiempo de rearme automático tras desactivación por agua: 90 segundos. (pág. 111)

## Errores de concepto frecuentes
Pensar que la función Easy Open abre el portón a cualquier usuario. Si no hay una llave identificada a menos de 1,5 m de la parte trasera, el sistema ignora el movimiento del pie. (págs. 111-112)

---

```yaml
tipo: diagnostico
titulo: Diagnosis EOBD del portón eléctrico
entidad: diagnostico-porton-electrico
area: confort-y-seguridad
sistema: NUEVO-cierre-y-aperturas
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "112-113"
relacionados: [porton-maletero-electrico]
palabras: [6d electronica porton, ajuste basico, diagnosis actuadores, bloque valores]
```

## Síntoma
El portón eléctrico no abre o no cierra completamente, se detiene a mitad de recorrido, realiza rebotamientos injustificados o no memoriza la altura de apertura. (págs. 109, 113)

## Causas posibles
- Pérdida de la memorización de las posiciones límite de fin de carrera.
- Sustitución de la unidad de control del portón o de alguno de los motores laterales.
- Presencia de averías grabadas en la dirección "6D - Electrónica del portón trasero". (págs. 109, 112-113)

## Cómo separar las causas
Conectar la máquina de diagnosis y acceder a la dirección de diagnóstico 6D:
1. Consultar la memoria de averías y comprobar en el Bloque de valores de medición la señal de los sensores Hall y de los interruptores de la cerradura.
2. Ejecutar la función "Ajuste básico": la unidad de control efectúa un ciclo completo de apertura y cierre sin la función antiaprisionamiento activa para memorizar los topes mecánicos.
3. Ejecutar la "Diagnosis de actuadores" para forzar de forma individual: abrir portón, cerrar portón, abrir/cerrar gradualmente o activar el zumbador de aviso. (págs. 112-113)

## Valores de referencia
- Ajuste básico completado correctamente ("Test finalizado").
- Ausencia de códigos de fallo en la dirección 6D. (págs. 112-113)

## Verificación tras la reparación
Realizar tres maniobras completas de apertura y cierre manual/automático y comprobar la reactivación del sistema antiaprisionamiento simulando un obstáculo en el cierre. (págs. 110, 113)

---

```yaml
tipo: componente
titulo: Gancho de remolque escamoteable eléctrico
entidad: gancho-remolque-escamoteable
area: confort-y-seguridad
sistema: NUEVO-remolque
fabricante: Seat
fuente: "5. Confort.pdf"
paginas: "114-115"
relacionados: [porton-maletero-electrico]
palabras: [gancho remolque, escamoteable, toma corriente u10, microinterruptor, sensor hall]
```

## Misión
Permitir ocultar el gancho de remolque tras el paragolpes cuando no se utiliza, liberando su articulación de forma electromecánica. (págs. 97, 114)

## Tipos y características
Conjunto articulado fijado al bastidor trasero. Incluye un motor eléctrico de desbloqueo, un sensor Hall interno de posición de eje, un microinterruptor de estado y la toma de corriente U10 de 13 contactos. Es gestionado por la Unidad de Control para la detección del remolque. (págs. 114-115)

## Principio de funcionamiento
Para operar, el vehículo debe estar totalmente parado y el portón del maletero abierto. Al accionar el pulsador situado en el maletero, la unidad de control alimenta el motor de desbloqueo. El sensor Hall interno informa de la posición del eje del motor para garantizar el desembrague mecánico. 

Una vez liberado, el usuario debe desplazar manualmente el gancho con la mano hasta la posición final de trabajo o de reposo hasta oír el encastre mecánico. El microinterruptor envía la señal de gancho "bloqueado" a la unidad de control, momento en el cual se energiza la toma de corriente U10 de 13 polos. (págs. 114-115)

## Valores de trabajo
- Conexión eléctrica del remolque: toma U10 de 13 contactos. (págs. 114-115)

## Anomalías frecuentes
- Intento de desbloqueo con el portón cerrado o el vehículo en movimiento.
- Fallo en el microinterruptor de confirmación de bloqueo mecánico. (págs. 114-115)

## Comportamiento en avería
Si el microinterruptor no confirma el bloqueo en la posición de trabajo, la unidad de control no activa la toma de corriente U10 para el remolque por motivos de seguridad. (pág. 115)

## Cómo comprobarlo
Comprobar con el equipo de diagnosis el estado del microinterruptor de posición (bloqueado/desbloqueado) y la señal del sensor Hall del motor. (pág. 115)

## Mantenimiento
Este accesorio debe solicitarse habitualmente al encargar el vehículo a fábrica. En la mayoría de los casos no es posible su montaje posterior como reforma debido a diferencias estructurales en la carrocería trasera. (pág. 114)

---

COBERTURA: documento «5. Confort.pdf», páginas 96 a 115 de 115. [completo]