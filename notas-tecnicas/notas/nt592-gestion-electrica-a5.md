---
id: ssc.sin-clasificar.gestion-electrica-a5
modulo: ssc
unidad: sin-clasificar
nt: 592
titulo: "GESTIÓN ELÉCTRICA A5"
menu: "GESTIÓN ELÉCTRICA A5"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
origen: extension (revisar y estructurar)
---

## Contenido

La fuente **"GESTIÓN ELÉCTRICA A5.pdf"** (correspondiente al Programa Autodidáctico / SSP 392 de Audi) describe la arquitectura eléctrica descentralizada, los sensores, los actuadores y la red de comunicación por CAN-Bus y LIN-Bus del climatizador automático en el **Audi A5**.

### 1. Arquitectura Electrónica Descentralizada
* **Procesamiento de Señales Indirecto:** A diferencia de los sistemas de climatización tradicionales, en el Audi A5 las señales de varios sensores no ingresan directamente a la **Unidad de control para Climatronic J255**.
* **Integración y Compartición por CAN-Bus:** Determinados sensores son leídos por módulos periféricos específicos y vertidos a la red **CAN Confort** para poner la información a disposición de la unidad **J255**.

### 2. Red de Sensores, Actuadores y Conexiones

| Componente / Sensor | Código | Conexión / Red de Comunicación | Función Principal |
| :--- | :--- | :--- | :--- |
| **Sensor de Presión y Temp. del Agente Frigorífico** | **G395** | **LIN-Bus**  UCE de Red de A Bordo **J519** | Mide la presión y temperatura del gas; envía sus valores a la J519, que los vuelca a la red CAN Confort para la J255. |
| **Sensor de Humedad del Aire / Parabrisas** | **G355** / **G458** | **LIN-Bus**  UCE Central de Confort **J393** | Mide la humedad y temperatura en la luna para calcular el riesgo de empañamiento. |
| **Sensor de Temperatura Exterior** | **G17** | Conexión directa a UCE de Red de A Bordo **J519** | Mide la temperatura ambiente exterior. |
| **Sensor de Calidad del Aire** | **G238** | **LIN-Bus**  UCE de Climatronic **J255** | Evalúa la presencia de contaminantes para activar la recirculación automática. |
| **Unidad de Control de Turbina de Aire Fresco** | **J126** | **LIN-Bus**  UCE de Climatronic **J255** | Regula electrónicamente la velocidad de giro del soplador del habitáculo. |
| **Servomotores de Chapaletas** | — | **LIN-Bus** (en serie)  UCE de Climatronic **J255** | Gobiernan la posición de las trampillas de mezcla, distribución y recirculación. |
| **Válvula Reguladora del Compresor** | **N280** | Interconexión con UCE **J255** / **J519** | Modula la cilindrada del compresor en función de la demanda térmica. |

### 3. Interconexión de Bus y Módulos
* **Interfaz de Diagnosis para Bus de Datos (Gateway) J533:** Actúa como pasarela de comunicación uniendo la red **CAN Confort** con la red **CAN Cuadro / Tren de rodaje** y la toma de diagnosis.
* **Módulos Adicionales Interconectados:**
  * **UCE para Calefacción Adicional J364:** Conectada a la red CAN Confort.
  * **UCE para Techo Corredizo J245:** Conectada por LIN-Bus a la unidad central de confort J393.

