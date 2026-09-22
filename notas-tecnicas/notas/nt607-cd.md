---
id: ssc.sin-clasificar.cd
modulo: ssc
unidad: sin-clasificar
nt: 607
titulo: "Cd"
menu: "Cd"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
origen: extension (revisar y estructurar)
---

## Contenido

La fuente **"cd.pdf"** corresponde al **Cuaderno Didáctico n.º 72 de SEAT** (*"Climatización en el Ibiza/Córdoba '99"*, publicado en marzo de 1999). Este documento describe la arquitectura, la electrónica, los sensores, los actuadores y los procedimientos de autodiagnosis de los sistemas de climatización montados en la gama SEAT Ibiza y Córdoba '99.

### 1. Equipos de Climatización Disponibles
El vehículo dispone de cuatro niveles de equipamiento:
* **Ventilación / Calefacción Manual:** La temperatura y la distribución de aire se ajustan mecánicamente mediante mandos giratorios, mientras que la turbina y la recirculación se accionan eléctricamente. Solo permite elevar la temperatura respecto a la exterior.
* **Aire Acondicionado Manual:** Comparte los mandos mecánicos del sistema de ventilación, pero añade un pulsador eléctrico para conectar el circuito frigorífico y enfriar/deshumidificar el aire.
* **Calefacción Motorizada:** Selección electrónica mediante pulsadores de los parámetros de temperatura, turbina y recirculación (accionados por motores eléctricos). La distribución del aire sigue siendo mecánica y la información se muestra en un **display compacto** en la consola central.
* **Autoclima (Climatizador Automático):** Regula y mantiene automáticamente la temperatura seleccionada en el habitáculo independientemente de las condiciones exteriores, gobernando los caudales, las trampillas, la recirculación y la activación del compresor.

### 2. Unidad Climática y Circuito Frigorífico
* **Unidad Climática:** Constructivamente es idéntica para todos los equipamientos. Aloja el evaporador, el radiador de calefacción, la turbina, la trampilla de mezcla de temperatura, la trampilla de recirculación y las trampillas de distribución. Las trampillas de distribución se mueven mediante cables *bowden* desde el mando giratorio.
* **Circuito Frigorífico:** Idéntico en el A/C manual y en el Autoclima.
  * **Agente frigorífico:** Carga de **750 ± 50 gramos de R134a**.
  * **Compresor:** Tipo autorregulado de **7 cilindros**, arrastrado por correa Poly-V y accionado por acoplamiento magnético **N25**. Dispone de una válvula de seguridad tarada a **44 bar**.
  * **Elementos de línea:** Condensador, filtro deshidratador, válvula de expansión, evaporador y un **silenciador en el tramo de baja presión** para amortiguar ondas de presión y ruidos.
  * **Medición de presión:** Conmutador de presión **F129** en versiones diésel o transmisor de presión electrónico **G65** en versiones gasolina.

### 3. Red Electrónica y Estructura Descentralizada
Los equipos electrónicos presentan una **arquitectura descentralizada** interconectada:
* **Unidad de Manejo e Indicación (E87) / Radiocasete (R):** El display de la consola central integra los datos del climatizador, de la radio y del ordenador de a bordo. Las órdenes de los pulsadores se envían a través del radiocasete mediante un bus de datos a la unidad de control del climatizador (**J255**).
* **Unidad de Control del Aire Acondicionado (J293):** Gobierna directamente la activación del acoplamiento magnético **N25** del compresor y las velocidades de los electroventiladores **V7 y V35**.
* **Sincronización con la UCE del Motor:** La unidad del motor puede desactivar el compresor enviando una señal de negativo a la unidad J293 durante el arranque (primeros 10 segundos), en aceleraciones a plena carga o en demanda de *kick-down*.

### 4. Sensores y Actuadores Clave

| Componente | Código | Función y Comportamiento en Avería |
| :--- | :--- | :--- |
| **Sonda Temp. Interior** | **G56** | Mide la temperatura del habitáculo con un minimotor/turbina (**V42**) que fuerza el paso de aire. En avería, adopta el valor fijo de **22 °C** y hace parpadear el display. |
| **Sondas Temp. Difusores** | **G191 / G192** | Miden la temperatura de salida en el difusor central (**G191**) y reposapiés (**G192**). Ante un fallo, se desactiva la regulación automática y el display parpadea. |
| **Sonda Temp. Exterior** | **G17** | Ubicada en la carcasa del retrovisor derecho. Si se avería, se toma un valor sustitutivo de **20 °C**, se deshabilita el compresor y se muestran tres rayas (`---`) en la radio. |
| **Interruptor Térmico** | **F38** | Ubicado en la caja de aguas; abre sus contactos a temperaturas inferiores a **5 °C** para desconectar el compresor y evitar congelaciones. |
| **Potenciómetro Trampilla**| **G92** | Informa a la unidad **J255** sobre la posición del motor de temperatura **V68**. Si falla, fija la trampilla y reduce la velocidad de la turbina. |
| **Motor Recirculación** | **V113** | Motor de corriente continua con pistas internas de posicionamiento para la entrada de aire fresco o recirculación. |
| **Regulador de Régimen** | **J126** | Controla electrónicamente la velocidad de la turbina de aire fresco **V2**. |

### 5. Autodiagnosis (Dirección 08)
Se realiza mediante el lector de diagnóstico conectando a la dirección **08 - Aire acondicionado**:
* **Función 01 (Versión de la UCE):** Identifica el programa activado. La unidad **J255** es idéntica para Autoclima y Calefacción Motorizada; detecta el equipamiento mediante un puente de codificación a masa en el contacto.
* **Función 02 (Consultar memoria de averías):** Muestra los fallos esporádicos (se borran tras 40 arranques sin reproducirse) y permanentes de sensores y actuadores.
* **Función 03 (Test de actuadores):** Comprueba de forma secuencial el acoplamiento magnético **N25**, la turbina **V2**, el motor de temperatura **V68** y la recirculación **V113**.
* **Función 04 (Ajuste Básico):** Realiza la adaptación de topes del motor de la trampilla de temperatura **V68** en el **Grupo 002** (obligatorio tras sustituir la UCE o el servomotor).
* **Función 08 (Bloques de Valores de Medición):** Permite verificar en tiempo real los valores de los pulsadores, la tensión del ventilador, el estado de **F129/G65** y las lecturas térmicas.

