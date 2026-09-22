---
id: ssc.sin-clasificar.diagnostico-y-averias
modulo: ssc
unidad: sin-clasificar
nt: 546
titulo: "Diágnostico y averías"
menu: "Diágnostico y averías"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
origen: extension (revisar y estructurar)
---

## Contenido

La fuente **"15. Diagnóstico y averías.pdf"** (Unidad Didáctica 15 de ETAI Ibérica / Infopro Digital Automotive) profundiza en los procedimientos prácticos de taller para el diagnóstico de averías hidráulicas y electrónicas, la interpretación de presiones, los fallos mecánicos del compresor y el autodiagnóstico del climatizador.

### 1. Comprobación de Presiones de Trabajo y Rendimiento
* **Condiciones de Prueba:** Se realizan con el motor girando a **1.500 r.p.m.**, el aire acondicionado conectado y la turbina de aire fresco a máxima velocidad.
* **Valores de Presión por Tipo de Compresor:**
  * **Compresor de cilindrada variable:** La línea de **ALTA** se mantiene constante entre **8 y 10 bar** (pudiendo alcanzar 12 bar con temperaturas exteriores muy elevadas), mientras que la de **BAJA** se fija de forma constante en **2 bar**.
  * **Compresor de cilindrada fija:** Muestra valores variables; la línea de **ALTA** oscila entre **10 y 20 bar** y la de **BAJA** entre **0,5 y 2,5 bar**.
* **Prueba de Rendimiento Térmico:** Mide la temperatura en los aireadores centrales con la recirculación activada. La temperatura de salida debe escalar según la temperatura ambiente (p. ej., a **15 °C** exterior debe arrojar **2–4 °C** en difusores; a **37 °C** exterior debe situarse entre **7–10 °C**).
* **Procedimiento de Desconexión de la Estación de Carga:** Se desconecta primero la manguera de alta y se abre la válvula de baja para que el compresor aspire el refrigerante residual de los tubos hasta igualar presiones, evitando que los manómetros queden con presión y se descalibren.

### 2. Diagnóstico de Averías Hidráulicas y Comportamiento de la Carga
* **Averías por Nivel de Refrigerante:**
  * **Carga insuficiente / Falta de gas:** Provoca presiones de baja y alta anormalmente reducidas. Si al acelerar la presión de baja cae por debajo de **0,5 bar**, existe un elevado riesgo de congelación del evaporador.
  * **Carga excesiva:** Eleva desmedidamente las presiones de alta y baja, reduciendo la eficiencia térmica y sometiendo al compresor a una mayor absorción de potencia y desgaste.
* **Variaciones por Temperatura Ambiente:** Las presiones del circuito no son fijas. En reposo, la presión estática sube progresivamente desde los **3,9 bar** (a 15 °C) hasta los **9,8 bar** (a 45 °C).
* **Fallos de Componentes en la Tabla de Diagnóstico:**
  * **Falta de enfriamiento con presiones normales:** Puede deberse a exceso de aceite, presencia de aire/humedad o una válvula de expansión bloqueada.
  * **Presiones de Alta y Baja igualadas:** Indica fallo en el electroventilador, condensador obstruido o avería mecánica interna del compresor.
  * **Línea de líquido o filtro deshidratador helado:** Denota una obstrucción o bloqueo en la línea de líquido o en el filtro deshidratador.

### 3. Diagnóstico y Procedimiento de Sustitución del Compresor
* **Análisis del Estado del Aceite:**
  * **Aceite Rojo:** Indica presencia de humedad residual en el circuito.
  * **Aceite Negro:** Es síntoma de desgastes severos o gripados internos.
  * **Aceite "Purpurina":** Revela daños internos por golpes o desprendimiento de partículas metálicas.
* **Sustitución Obligatoria Conjunta:** Si se detectan partículas, ferricha o aceite deteriorado, es obligatorio realizar un **lavado completo del circuito** y sustituir conjuntamente tres elementos: el **compresor**, la **válvula de expansión** y el **filtro deshidratador**.
* **Reposición de Aceite según Componentes Reemplazados:**
  * Sustitución del evaporador: añadir **50 cc** de aceite.
  * Sustitución del condensador: añadir **30 cc**.
  * Sustitución del filtro o tuberías: añadir **10 cc** por cada elemento.
* **Puesta en Marcha y Vacío:** Exige realizar un vacío profundo de al menos **45 minutos**. Durante los primeros 5 minutos tras el arranque, **no se deben superar las 1.000 r.p.m.** para asentar el compresor.

### 4. Autodiagnóstico Electrónico
* **Gestión de Memoria de Averías:** Distingue entre averías esporádicas (que se borran automáticamente tras 30–40 arranques sin reproducirse) y averías permanentes (requieren reparación previa y borrado mediante máquina de diagnosis). Las averías de sensores compartidos se memorizan en la UCE de Cuadro de Instrumentos (temperatura exterior, velocidad) o UCE de Red de A Bordo (marcha atrás, alternador) y se transmiten por Can-Bus.
* **Prueba de Actuadores y Ajuste Básico:**
  * **Diagnóstico de actuadores:** Permite realizar el test de segmentos del display, activar las velocidades del electroventilador, probar la turbina, acoplar el embrague electromagnético y mover los servomotores de las trampillas.
  * **Ajuste Básico:** Hace recorrer a los servomotores sus posiciones tope para memorizar los mínimos y máximos. Es obligatorio tras sustituir un servomotor o la propia unidad de control.
* **Lectura de Bloques de Valores:** Permite comprobar en tiempo real la señal del sensor MAP de alta presión, la activación de la electroválvula del compresor, el fotosensor solar, las sondas de temperatura y la solicitud de elevación de r.p.m. al motor.

