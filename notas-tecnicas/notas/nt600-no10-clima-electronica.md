---
id: ssc.sin-clasificar.no10-clima-electronica
modulo: ssc
unidad: sin-clasificar
nt: 600
titulo: "Nº10 Clima electrónica"
menu: "Nº10 Clima electrónica"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
origen: extension (revisar y estructurar)
---

## Contenido

La fuente **"Nº10. Clima electrónica.pdf"** (Unidad Didáctica 13 de ETAI Ibérica / Infopro Digital Automotive) analiza en detalle la ingeniería, los componentes electrónicos, las señales de control, los sensores y las estrategias de regulación de los sistemas de **climatización automática y electrónica** en el automóvil.

### 1. Influencia del Clima en la Conducción y Seguridad Activa
* **Estrés Climatológico y Seguridad:** El climatizador actúa como un elemento de **seguridad activa** que evita fatiga y accidentes. Un ambiente confortable se sitúa entre los **20 °C y 22 °C**.
* **Efectos del Calor en el Conductor:** Aumentar la temperatura de 25 °C a 35 °C reduce en un **20% la capacidad perceptiva y la facultad combinatoria**, equivaliendo en falta de concentración a una tasa de alcoholemia de **0,5 g/l de sangre**.
* **Tratamiento del Aire:** Además de enfriar o calentar, el evaporador deshidrata el aire reteniendo humedad e impurezas, completándose con **filtros antipolen y de carbón activo**.

### 2. Climatización Manual frente a Climatización Automática
* **Aire Acondicionado Manual:** Las trampillas se mueven por cables y la turbina ofrece 4 velocidades. El conductor actúa como "unidad de control y actuador", corrigiendo manualmente las fluctuaciones térmicas continuas.
* **Climatizador Automático:** El usuario únicamente selecciona la temperatura de confort deseada. La **Unidad de Control Electrónico (UCE)** procesa las señales de los sensores y de la red CAN-Bus/LIN-Bus para gestionar automáticamente servomotores con potenciómetros de posición y regular la velocidad de la turbina.

### 3. Sensores del Sistema de Climatización
* **Temperatura Exterior y Aire Aspirado (NTC):** Ubicados en el paragolpes/retrovisor derecho y en el canal de entrada. La UCE suele utilizar el valor más bajo para regular la trampilla de mezcla, la recirculación y la turbina. Ante un fallo de ambos sensores, toma un valor sustitutivo fijo de **10 °C**.
* **Termosensor de Temperatura Interior (NTC + Turbina V42):** Integra un pequeño motor con turbina que aspira aire del habitáculo continuamente hacia la NTC. Si se avería, la UCE asume una temperatura teórica de **22 °C a 26 °C**.
* **Termosensores de Difusores (Central y Pies):** Miden el aire de salida (de -40 °C a +85 °C) para calcular un valor medio de entrada al habitáculo.
* **Termosensor del Evaporador:** Mide la temperatura tras el enfriamiento para regular el compresor y evitar la congelación del evaporador (puede omitirse en compresores de cilindrada variable).
* **Interruptor Térmico (Caja de Aguas):** Desconecta el embrague del compresor a temperaturas inferiores a **5 °C** para prevenir la congelación.
* **Fotosensor / Fotosensor Doble para Radiación Solar:** Medición por fotodiodo de la intensidad y ángulo de los rayos solares. Ajusta la temperatura, el caudal de la turbina y la mezcla. Se verifica aplicando una luz intensa en el taller para comprobar el incremento de tensión hasta unos **3 V**.

### 4. Sensor de Calidad del Aire y Recirculación Automática
* **Principio de Funcionamiento:** Utiliza un semiconductor de **dióxido de estaño (SnO2)** alimentado a 350\,^°C que modifica su resistencia eléctrica según la presencia de contaminantes.
* **Gases Detectados:**
  * **Oxidables (liberan oxígeno y reducen la resistencia):** Monóxido de carbono (CO), vapores de gasolina e hidrocarburos.
  * **Reducibles (absorben oxígeno y aumentan la resistencia):** Óxidos de nitrógeno (NO_x).
* **Función:** Envía una señal digital a la UCE para activar automáticamente la **trampilla de recirculación** e impedir el paso de gases nocivos al habitáculo.

### 5. Señales Suplementarias y Red de Comunicación
* **Carga Eléctrica del Alternador (Borne L / DF):** Si el alternador está al límite de su capacidad, la UCE desactiva el compresor y los electroventiladores para evitar la descarga de la batería.
* **Interruptor de Marcha Atrás:** Activa la recirculación al engranar la marcha atrás para evitar la aspiración de los propios gases de escape del vehículo.
* **Tiempo de Vehículo Parado (T_p) y Régimen de Motor (n):** Evalúa el tiempo transcurrido desde el último apagado para evitar choques térmicos al volver a arrancar. Además, desacopla temporalmente el compresor al pisar el acelerador a fondo para entregar la máxima potencia en aceleraciones o adelantamientos.

### 6. Distribución Bizona
* **Arquitectura Bizona:** Separa el canal de aire en las zonas izquierda y derecha mediante servomotores y chapaletas de mezcla independientes para conductor y acompañante. En vehículos de alta gama, se pueden incorporar unidades climáticas traseras adicionales para conseguir un control de **4 zonas**.

