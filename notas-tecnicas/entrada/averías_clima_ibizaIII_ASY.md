La fuente **"averí­as clima ibizaIII ASY.pdf"** es un documento técnico oficial (extraído del manual de taller/WI-XML) que contiene la **tabla completa de diagnóstico de averías y códigos de fallo (DTC)** del sistema de aire acondicionado y climatización para el Seat Ibiza III con motorización ASY.

A continuación se detalla la información del documento organizada por componentes y códigos de avería del lector de autodiagnóstico **V.A.G 1551**:

---

### 1. Indicaciones Generales de Diagnóstico
* **Unidad de Mandos:** El sistema es controlado por la unidad de mandos del aire acondicionado **-J301-**.
* **Averías Esporádicas (/SP):** Indican fallos intermitentes que suelen estar causados por falsos contactos o conexiones movedizas en los conectores.
* **Verificaciones Previas:** Antes de sustituir la UCE **-J301-** o cualquier componente, es necesario comprobar las alimentaciones de tensión, masas, continuidad de cableados y limpiar conectores.
* **Ajuste Básico (Función 04):** Tras sustituir la UCE -J301- o cualquier servomotor, es obligatorio ejecutar la **configuración/ajuste básico**.

---

### 2. Códigos de Avería (DTCs) y Procedimientos de Reparación

| Código V.A.G | Componente / Avería Registrada | Posibles Causas | Solución / Procedimiento |
| :--- | :--- | :--- | :--- |
| **00538** | **Tensión de referencia** | Cortocircuito/interrupción en cables o fallos en servomotores **-V68-** (temperatura) o **-V154-** (recirculación). | Consultar bloques 004/005, realizar test de actuadores (función 03) y desconectar secuencialmente los servomotores para aislar el defectuoso. |
| **00576** | **Borne 15** | Regulador del alternador defectuoso, batería agotada o fallo de masa/alimentación en la UCE **-J301-**. | Comprobar tensión de red, alternador y cableado de alimentación de la unidad -J301-. |
| **00706** | **Relé del ventilador del radiador nivel 2 (-J513-)** | Cortocircuito o interrupción en la línea del módulo de control del ventilador de refrigerante **-J293-**. | Comprobar cableado a la unidad -J293- o sustituir la unidad de ventiladores. |
| **00796** | **Turbina para termosensor (-V42-)** | Turbina de aire del termosensor interior bloqueada o sin tensión. | Sustituir la unidad de mandos/pantalla **-E87-**. |
| **00819** | **Transmisor de alta presión (-G65-)** | Cortocircuito/interrupción, fallo interno de **-G65-**, anomalía de presión en el circuito refrigerante o fallo en la válvula **-N280-**. | Leer bloque de valores 002, comprobar presiones del circuito de gas y reemplazar el sensor -G65- si procede. |
| **00898** | **Activación del compresor** | Cortocircuito o interrupción en la electroválvula de regulación del compresor **-N280-** o fallo en la UCE **-J301-**. | Comprobar cableado a la válvula -N280-, realizar diagnóstico de actuadores o sustituir compresor/J301. |
| **01233** | **Válvula de cierre de refrigerante (-N279-)** | Cortocircuito a positivo/masa o fallo interno en **-N279-**. | Comprobar conector/cableado y sustituir la válvula -N279-. |
| **01271** | **Motor de trampilla de temperatura (-V68-)** | Servomotor bloqueado, atascado, sin alimentación o límites de ajuste no alcanzados. | Verificar libertad de movimiento de la trampilla, reemplazar servomotor -V68- y realizar ajuste básico (función 04). |
| **01273** | **Turbina de aire fresco (-V2-)** | Fallo en la unidad de control del soplador **-J126-**, caídas de tensión de red (< 9,5 V o > 15 V) o motor bloqueado. | Comprobar alternador/batería, verificar la unidad -J126- y sustituir la turbina -V2-. |
| **01296** | **Transmisor temp. difusor central (-G191-)** | Interrupción o cortocircuito a masa/positivo en el sensor central. | Leer bloque de valores 08 y sustituir el sensor -G191-. |
| **01297** | **Transmisor temp. difusor reposapiés (-G192-)** | Interrupción o cortocircuito a masa/positivo en el sensor inferior. | Leer bloque de valores 08 y sustituir el sensor -G192-. |
| **01314 / 01317** | **UCE Motor / Cuadro de instrumentos (-J285-)** | Fallos de comunicación en el bus de datos o averías registradas en dichos módulos. | Consultar memoria de averías específica del motor o del cuadro de instrumentos. |
| **01596** | **Motor de trampilla de recirculación (-V154-)** | Servomotor atascado, fallo eléctrico en el motor o falta de ajuste básico. | Comprobar movilidad de la trampilla, sustituir -V154- y ejecutar ajuste básico (función 04). |
| **65535** | **Unidad de control defectuosa** | Avería interna de la UCE de climatización **-J301-**. | Reemplazar la unidad -J301- y realizar la configuración básica (función 04). |

---

💡 ¿Te gustaría revisar los esquemas de comprobación de algún código de avería en particular o realizar un ajuste básico de servomotores con el equipo de diagnosis?