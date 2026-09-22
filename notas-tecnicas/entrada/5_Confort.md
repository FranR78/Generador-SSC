La fuente **"5. Confort.pdf"** (de ETAI Ibérica) aborda la arquitectura, el funcionamiento y la diagnosis de los principales **sistemas eléctricos y electrónicos de confort** equipados en vehículos modernos.

---

### 1. Sistema de Acceso y Arranque sin Llave (*Keyless Access*)
* **Funcionamiento y Sensores:** Permite bloquear, desbloquear y arrancar el vehículo sin manipular físicamente la llave. Las manillas exteriores disponen de **sensores capacitivos** para detectar la aproximación de la mano (desbloqueo) o la presión en la superficie exterior (bloqueo).
* **Detección por Radiofrecuencia:** El vehículo utiliza **antenas de baja frecuencia (125 kHz)** repartidas por el exterior (manillas, paragolpes trasero) y el interior (consolas y maletero) para buscar llaves a menos de 1,5 metros. La llave responde enviando su código identificativo por **alta frecuencia (434 MHz)** a la Unidad de Control de la Red de A Bordo.
* **Gestión de Encendido y Arranque:** El botón de arranque (*START ENGINE STOP*) gestiona la solicitud de encendido (Borne 15) y de arranque del motor (Borne 50). Al pulsar y pisar el pedal de embrague/freno, el sistema autentica el transponder con el inmovilizador y conecta la alimentación. Incluye función de arranque de emergencia acercando la llave a la columna de dirección si la pila está agotada.
* **Bloqueo de la Columna de Dirección:** Al carecer de clausor mecánico, una unidad de control específica acciona un **perno electromecánico** mediante un motor y tornillo sin fin para bloquear o desbloquear la dirección al abrir la puerta del conductor o accionar el encendido.

---

### 2. Portón del Maletero Eléctrico
* **Accionamiento Mecánico:** Se utilizan **motores eléctricos helicoidales** a ambos lados con engranajes planetarios y un **freno de muelle envolvente** que sostiene el portón en cualquier posición intermedia. Dos sensores Hall por motor indican la posición exacta y la velocidad de giro a la unidad de control.
* **Función "Easy Open":** Permite abrir el maletero mediante un **movimiento pendular del pie** bajo el paragolpes trasero gracias a dos sensores capacitivos. Requiere que la llave autorizada esté a menos de 1,5 m y el vehículo parado.
* **Sistemas de Seguridad y Cierre Asistido:** Dispone de función **antiatrapamiento** por medición de consumo de corriente en los motores o tiras de sensores resistivos (invirtiendo el sentido si detecta un obstáculo). El ajuste final del cierre se completa mediante un motor de cierre asistido con cable Bowden e interruptores de posición.
* **Diagnosis EOBD:** Permite realizar **ajustes básicos** (para memorizar las posiciones límite de apertura y cierre) y **diagnosis de actuadores** (apertura/cierre gradual o prueba de zumbador).

---

### 3. Gancho de Remolque Escamoteable Eléctrico
* **Mecanismo de Despliegue:** Se desbloquea eléctricamente al accionar un pulsador situado en el maletero (con el vehículo parado y el portón abierto) y se lleva manualmente a su posición de enclavamiento final.
* **Control y Conexión:** La unidad de control de detección de remolque gestiona un motor con sensor Hall y un microinterruptor para verificar la posición de trabajo. Al confirmar el bloqueo mecánico, activa la toma de corriente eléctrica de 13 contactos (U10).

---

💡 ¿Te gustaría revisar los esquemas de comunicación Can-Bus/Lin-Bus entre estas unidades de control o realizar una comparación con los sistemas de diagnosis de otros componentes del vehículo?