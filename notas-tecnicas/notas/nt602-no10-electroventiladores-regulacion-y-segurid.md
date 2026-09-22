---
id: ssc.sin-clasificar.no10-electroventiladores-regulacion-y-seguridad
modulo: ssc
unidad: sin-clasificar
nt: 602
titulo: "Nº10 Electroventiladores Regulación y Seguridad"
menu: "Nº10 Electroventiladores Regulación y "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
origen: extension (revisar y estructurar)
---

## Contenido

La fuente **"Nº10. Electroventiladores. Regulación y Seguridad.pdf"** (Unidades Didácticas 10 y 11 del manual de ETAI Ibérica / Infopro Digital Automotive) abarca la gestión, control electrónico y estrategias de seguridad de los electroventiladores, así como los dispositivos hidráulicos y electrónicos de protección del circuito frigorífico y del motor.

### 1. Gestión y Regulación de Electroventiladores
* **Misión:** Establecer una corriente forzada de aire fresco por el condensador y el radiador cuando el vehículo circula a baja velocidad o está parado, garantizando el rendimiento del climatizador y evitando sobrecalentamientos.
* **Control Combinado por Etapas (Sistemas Tradicionales):**
  * **1.ª Velocidad:** Se activa al conectar el aire acondicionado con presiones del circuito frigorífico superiores a **2 bar**.
  * **2.ª Velocidad:** Se activa cuando la presión de alta alcanza los **16 bar** o la temperatura del líquido refrigerante del motor supera los **99 °C** (hasta 105 °C).
  * Vuelve a la.ª velocidad cuando la presión desciende de los 16 bar y la temperatura de motor cae por debajo de 99 °C.
* **Caja de Relés / Unidad de Control de Electroventiladores:** Agrupa en el compartimento motor los relés de velocidad de los ventiladores, el relé de acoplamiento magnético del compresor y la electrónica de gestión. Recibe información del termocontacto del radiador, la trinaria/sensor MAP, el panel de climatización y el CAN-Bus.
* **Ventiladores de Funcionamiento Continuo por Señal PWM:**
  * Incorporan electrónica de control propia integrada en el motor del ventilador.
  * La UCE del motor envía una señal de frecuencia fija con ancho de pulso variable (**PWM**). Al superar el **90%** de ciclo de trabajo positivo, los electroventiladores giran a la máxima velocidad.
  * **Función de Emergencia (Modo LIMP):** Si la señal PWM no llega al **8%** o supera el **95%** (por ejemplo, corte de cable o derivación a masa/positivo), la electrónica activa automáticamente los ventiladores al **100% de potencia** para evitar el gripaje del motor. Si los ventiladores arrancan a máxima velocidad inmediatamente al poner el contacto, es síntoma de avería en el sistema.
* **Función en Atascos / Retenciones (< 5 km/h):** Si el compresor está trabajando al máximo de rendimiento (**98%**) pero el sensor del evaporador detecta insuficiente potencia frigorífica, el climatizador envía un mensaje por CAN-Bus para que la UCE del motor **eleve las revoluciones de ralentí** y mejore el rendimiento del compresor.

### 2. Dispositivos de Regulación y Seguridad

* **Interruptor de A/C:** Ordena el acoplamiento del compresor. En sistemas manuales requiere seleccionar al menos la velocidad 1 de la turbina para habilitar el circuito. Permite la desconexión a temperaturas exteriores inferiores a **5 °C** por termostato en serie.
* **Válvula de Descarga por Sobrepresión:** Montada en la salida de alta del compresor. Abre mecánicamente al alcanzar los **38 bar** y vuelve a cerrar entre **30 y 35 bar** para evitar explosiones de tuberías. Dispone de un precinto que rompe al activarse.
* **Sensor de Temperatura del Evaporador (Sonda NTC / Termostato):** Mide la temperatura entre las aletas del evaporador. La UCE desconecta el compresor cuando la temperatura cae entre **-1 °C y 0 °C** y lo reconecta al alcanzar los **3 °C** para evitar la congelación del agua condensada. No se requiere en compresores de cilindrada variable.
* **Conmutador de Presión (Trinaria):** Presostato triple instalado en el tubo de alta o en el filtro deshidratador:
  * **Corte por Baja Presión:** Desconecta el compresor si P < 2 bar (evita el funcionamiento sin gas o con fugas).
  * **Conexión de Ventiladores:** Conecta la.ª velocidad al llegar a **16 bar**.
  * **Corte por Alta Presión:** Desconecta el compresor si la presión sube entre **24 y 32 bar** (por suciedad en el condensador o fallo de ventiladores).
* **Sensor MAP de Alta Presión (Transmisor Electrónico):**
  * Sustituye a la trinaria en sistemas modernos. Consta de un cristal de silicio y un microprocesador que genera una señal digital modulada en anchura de pulso (**PWM**) o analógica (1 a 4 V).
  * Realiza una medición continua del valor exacto de presión (ej. **1,4 bar** = 2,6 ms; **5 bar** = 5 ms; **14 bar** = 8 ms; **37 bar** = 18 ms).
  * Permite adaptar el ralentí suavemente y activar las velocidades de los ventiladores con un retardo escalonado. En caso de avería o desconexión ("Señal muy baja"), la UCE desconecta el compresor por seguridad.
* **Sistemas con Tubo Estrangulador:** Utilizan presostatos independientes: el de baja desconecta a **1,7 bar** y el de alta desconecta sobre los **30 bar**.
* **Termoconmutador por Sobrecalentamiento del Motor:** Desconecta el compresor cuando el líquido refrigerante alcanza los **119 °C** y lo reconecta al bajar a **112 °C** para aliviar la carga térmica del motor.

