---
id: ssc.sin-clasificar.no10-carga-y-diagonostico
modulo: ssc
unidad: sin-clasificar
nt: 599
titulo: "Nº10 Carga y Diagonostico"
menu: "Nº10 Carga y Diagonostico"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
origen: extension (revisar y estructurar)
---

## Contenido

La fuente **"Nº10. Carga y Diagonostico.pdf"** (correspondiente a las Unidades Didácticas 14 y 15 de ETAI Ibérica / Infopro Digital Automotive) es una guía técnico-práctica dedicada a la estación de servicio, los procedimientos de carga/recuperación de refrigerante, la interpretación de presiones de trabajo, el diagnóstico hidráulico y la autodiagnosis electrónica del sistema de climatización.

A continuación se presenta la síntesis estructurada del documento:

### 1. Compatibilidad y Equipamiento de Carga
* **Identificación por Gas Refrigerante:** Cada vehículo debe disponer de una etiqueta identificativa que especifica el gas empleado (**R134a**, **R1234yf** o **R744 / CO2**), la carga exacta en gramos y el tipo de aceite lubricante (**PAG**, **ISO 13043**, etc.).
* **Especificidad de Maquinaria:** No son compatibles ni las estaciones de carga ni los aceites entre diferentes gases; cada refrigerante requiere el uso exclusivo de una máquina diseñada para ese fluido específico.
* **Nivel de Refrigerante en la Bombona de la Estación:** Para evitar que entre aire en el circuito durante la carga, la bombona de la estación debe contener entre **4 y 5 kg** de gas, manteniendo siempre un mínimo residual superior a **1 kg**.

### 2. Procedimiento de Recuperación, Vacío y Carga
* **Preparación del Vehículo para la Recuperación:** Con el motor a temperatura de servicio, acelerar a **4.500–5.000 r.p.m. durante 3 minutos** con la calefacción y el aire acondicionado al máximo para arrastrar la máxima cantidad de aceite hacia el compresor y evitar su extracción excesiva.
* **Proceso de Recuperación de Refrigerante:** Abrir lentamente las válvulas de alta y baja procurando que la presión de entrada no supere los **5 bar** para prevenir la salida de aceite. Al finalizar, medir la cantidad exacta de aceite evacuado.
* **Proceso de Vacío y Prueba de Estanqueidad:** Realizar un vacío del circuito durante **30 minutos** (mínimo **45 minutos** si el circuito ha estado abierto o se ha sustituido el compresor) para evacuar el aire y la humedad. Comprobar que la depresión se mantiene durante al menos **5 minutos**.
* **Reemplazo de Aceite por Componentes:** Además de reponer la cantidad de aceite extraída en la recuperación, si se sustituye algún componente se debe añadir aceite suplementario:
  * **Evaporador:** 50 cc.
  * **Condensador:** 30 cc.
  * **Filtro deshidratador:** 10 cc.
  * **Tubos o manguitos:** 10 cc.
* **Carga de Refrigerante al Vehículo:**
  * Introducir la cantidad prescrita por el fabricante por la **toma de alta presión** con el motor parado.
  * Si no ingresa la totalidad del refrigerante, completar por la **toma de baja presión** de forma muy lenta con el motor en marcha a ralentí para evitar la aspiración de líquido por el compresor.

### 3. Diagnóstico por Presiones de Trabajo y Rendimiento
* **Condiciones de Prueba:** Realizar la verificación con el motor a **1.500 r.p.m.**, el aire acondicionado encendido, la recirculación activada y la turbina de aire fresco a máxima velocidad.
* **Valores de Presión Estándar:**
  * **Compresor de Cilindrada Variable:** La presión de **ALTA** se mantiene constante entre **8 y 10 bar** (hasta **12 bar** con temperatura exterior muy elevada), mientras que la de **BAJA** se fija de forma constante en **2 bar**.
  * **Compresor de Cilindrada Fija:** La presión de **ALTA** oscila entre **10 y 20 bar**, y la de **BAJA** varía entre **0,5 y 2,5 bar**.
* **Tabla de Rendimiento Térmico en Aireadores Centrales:**
  * A **15\,^°C** exterior: **2–4\,^°C** en difusores.
  * A **20\,^°C** exterior: **4–6\,^°C** en difusores.
  * A **37\,^°C** exterior: **7–10\,^°C** en difusores.
* **Desconexión del Equipo de Carga:** Desconectar la toma de alta y abrir la válvula de baja con el sistema en marcha para que el compresor aspire el gas de los manguitos, dejando los manómetros a cero para evitar que se descalibren.

### 4. Diagnóstico de Averías y Sustitución del Compresor
* **Avería Interna del Compresor:** Si la presión de alta y baja se encuentran igualadas y no varían al accionar el sistema, existe una avería interna mecánica o en la regulación del compresor.
* **Análisis del Estado del Aceite:**
  * **Aceite Rojo:** Indica presencia de humedad y formación de ácido.
  * **Aceite Negro:** Es síntoma de desgaste severo o gripado interno.
  * **Aceite Purpurina:** Revela partículas o virutas metálicas por impacto mecánico.
* **Protocolo de Sustitución:** Ante aceite sucio o virutas, es obligatorio efectuar un **lavado exhaustivo del circuito** (con aire seco y nitrógeno en sentido contrario al flujo) y sustituir conjuntamente el **compresor**, la **válvula de expansión** y el **filtro deshidratador**.
* **Rodaje Inicial del Compresor Nuevo:** Durante los primeros 5 minutos tras el arranque, **no se deben superar las 1.000 r.p.m.** para garantizar el correcto asentamiento del compresor.

### 5. Autodiagnóstico Electrónico
* **Memoria de Averías:** Clasifica los defectos en esporádicos (borrados automáticamente tras 30–40 arranques sin repetirse) y permanentes (requieren reparación y borrado con el equipo de diagnosis).
* **Funciones de Diagnosis:** Permite realizar la prueba secuencial de actuadores (electroventilador, turbina, embrague y servomotores), el **ajuste básico de servomotores** (obligatorio tras reemplazar un servomotor o la unidad de control) y la lectura de bloques de valores en tiempo real (presión de alta del sensor MAP, porcentaje de activación de la electroválvula del compresor, radiación solar, etc.).

