---
id: ssc.sin-clasificar.instalacion-electrica-del-aire-acondicionado
modulo: ssc
unidad: sin-clasificar
nt: 544
titulo: "Instalación eléctrica del aire acondicionado"
menu: "Instalación eléctrica del aire acondic"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
origen: extension (revisar y estructurar)
---

## Contenido

La fuente **"12. Instalación eléctrica del aire acondicionado.pdf"** (Unidad Didáctica 12 de ETAI Ibérica / Infopro Digital Automotive) analiza la arquitectura eléctrica, electrónica, sensores, actuadores y lógica de diagnóstico de los sistemas de aire acondicionado y climatización automotriz.

### 1. Aire Acondicionado Manual con Presostato Trinaria
Este esquema describe la gestión eléctrica en sistemas tradicionales equipados con compresor de cilindrada fija y embrague electromagnético:

* **Condición de Activación:** El interruptor de A/C requiere que la turbina de aire fresco gire **al menos a velocidad lenta** para permitir el encendido del sistema.
* **Presostato Trinaria de Alta:** Mide la presión de la línea de alta para gestionar dos funciones de seguridad y regulación:
  * **Conexión / Desconexión del Compresor (Bornes 1-2):** Interrumpe la alimentación del embrague por baja presión (P1 < 2 bar) o sobrepresión extrema (P1 > 32 bar).
  * **Control del Electroventilador (Bornes 3-4):** Activa la.ª velocidad del electroventilador al alcanzar los **16 bar**.
* **Control Térmico y de Seguridad:**
  * **Sonda NTC del Evaporador:** Desconecta el embrague electromagnético si la temperatura roza los 0\,^°C para evitar la formación de hielo (no se utiliza en compresores de cilindrada variable).
  * **NTC de Temperatura del Motor:** Desconecta el compresor si el motor térmico sufre un sobrecalentamiento.
  * **Termostato del Radiador:** Conecta la.ª velocidad del electroventilador a **95\,^°C** y la.ª velocidad a **103\,^°C**.
* **Lógica de la UCE del Motor:** Impide el acoplamiento del compresor hasta que el motor gire de forma estable al ralentí y lo desacopla temporalmente en **aceleraciones bruscas** para entregar la máxima potencia.

### 2. Aire Acondicionado Semiautomático y Compresores Regulados por Electroválvula
Describe la evolución hacia sistemas sin embrague electromagnético:

* **Electroválvula de Regulación del Compresor:** Ajusta electrónicamente la cilindrada y el rendimiento del compresor según las demandas de refrigeración.
* **Sensor MAP en Alta Presión:** Sustituye a la trinaria mecánica midiendo la presión de alta mediante una señal continua enviada a la unidad de control.
* **Red de Comunicación y Sensores:** Integra la comunicación mediante **Can-Bus** entre la UCE del Climatizador, la UCE del Motor, la UCE de la Red de A Bordo y el Cuadro de Instrumentos. Incorpora potenciómetros de posición en los motores de las trampillas de mezcla y recirculación.

### 3. Climatizador Automático: Sensores, Actuadores y Estrategias de Avería
Detalla el funcionamiento y la respuesta del sistema (*modo degradado*) cuando falla algún componente:

| Componente / Sensor | Función Principal | Comportamiento en Caso de Avería |
| :--- | :--- | :--- |
| **Turbina / Regulador** | Impulsar y regular el caudal de aire. | El climatizador **deja de funcionar totalmente**. |
| **Sensor MAP en alta** | Medición continua de la presión de alta. | El climatizador **no funciona**. |
| **Sensor Temp. Exterior** | Medir la temperatura ambiente. | Muestra `--.- °C` en el display y adopta la lectura del sensor de entrada de aire. |
| **Fotosensor Solar** | Ajustar la temperatura en función de la radiación solar. | Se desactiva la función de compensación por radiación. |
| **Sensor Salida Evaporador**| Prevenir congelación del evaporador. | Trabaja estimando la temperatura con la información del **sensor MAP**. |
| **Electroválvula Compresor**| Variar la cilindrada del compresor. | El compresor se ajusta a su **mínimo rendimiento**. |
| **Termostato Radiador** | Controlar velocidades de electroventiladores. | Activa los ventiladores en **modo emergencia a máxima velocidad**. |
| **Interruptor Marcha Atrás**| Activar recirculación al engranar marcha atrás. | Desactiva la función automática de recirculación. |

### 4. Estándares Eléctricos y Diagnosis
* **Líneas de Corriente (Norma DIN):** 
  * **30:** Positivo directo de batería.
  * **15:** Positivo bajo contacto.
  * **X:** Positivo bajo contacto con desconexión durante el arranque del motor.
  * **31:** Masa.
* **Diagnosis EOBD:** Todas las averías eléctricas o electrónicas detectadas por la UCE del climatizador quedan registradas en memoria y pueden consultarse mediante una **máquina de diagnosis compatible**.

