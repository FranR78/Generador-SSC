---
id: ssc.sin-clasificar.autodiagnostico-electronico-y-lectura-de-parametros
modulo: ssc
unidad: sin-clasificar
nt: 1080
tipo: proceso
subtipo: diagnostico
titulo: "Autodiagnostico Electrónico Y Lectura De Parámetros"
menu: "Autodiagnostico Electrónico Y Lectura "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la interrogación electrónica de averías, la prueba de actuadores, el ajuste básico de servomotores y la lectura de bloques de parámetros con el equipo de diagnosis.

## Fundamento

La UCE del climatizador monitoriza sus sensores y los compartidos vía CAN-Bus (cuadro, red de a bordo, motor), memoriza fallos esporádicos o permanentes y permite verificar componentes eléctricos mediante pruebas guiadas.

## Condiciones previas

Contacto encendido (+15) y equipo de diagnosis conectado al terminal de diagnóstico T16.

## Equipo y material

Equipo de diagnosis compatible (VAG 1551, ODIS, TEXA, KTS, etc.).

## Desarrollo

* **1. Consultar memoria de averías:**
  - *Averías esporádicas/fugaces:* Se borran automáticamente tras 30 o 40 arranques del vehículo sin reproducirse el fallo.
  - *Averías permanentes/actuales:* Quedan grabadas en la UCE y solo se borran manualmente desde la función "borrar memoria" tras reparar el defecto.
  - *Origen de señales compartidas por CAN-Bus:*
    - En Cuadro de instrumentos: Sonda de temperatura exterior y sensor de velocidad del vehículo.
    - En Red de a bordo (J519): Sensor de marcha atrás, carga del alternador y regulador de iluminación.
    - En UCE del Motor: Temperatura del líquido refrigerante y régimen de rpm.
* **2. Diagnóstico de elementos actuadores (Prueba de componentes):**
  - *Test de segmentos:* Ilumina todos los dígitos de la pantalla LCD para detectar segmentos fundidos.
  - *Electroventilador y Turbina:* Hace funcionar los ventiladores y la turbina de aire fresco en todas sus velocidades o regulación continua.
  - *Embrague del compresor:* Conecta y desconecta cíclicamente la bobina N25 para verificar su acoplamiento visual y acústico.
  - *Servomotores de trampillas:* Activa de tope a tope las trampillas comprobando la variación térmica y las salidas de aire.
* **3. Ajuste Básico (Función 04):**
  - Activa mecánicamente de principio a fin todos los servomotores de las trampillas y memoriza sus posiciones de tope mínimo y tope máximo.
  - **Obligatorio ejecutarlo siempre que se sustituya un servomotor o la propia Unidad de Control de Climatización.**
* **4. Lectura de valores de funcionamiento individual (Bloques de medición):**
  - Permite la lectura en tiempo real de: estado del compresor (ON/OFF), rpm del motor, velocidad km/h, tiempo de parada, posición teórica/real del servomotor de temperatura, trampilla central, deshielo y recirculación, lectura de sonda de temperatura exterior, temperatura de aire de entrada, fotosensor solar, temperatura ambiente del habitáculo, tensión de alimentación (V), porcentaje de activación de la electroválvula del compresor (N280) y presión del circuito hidráulico (emitida por el sensor MAP de alta).

## Valores de referencia

| Función de Autodiagnóstico | Criterio y Aplicación Técnica |
| :--- | :--- |
| Borrado automático de averías esporádicas | Tras 30 a 40 ciclos de arranque sin fallo |
| Ajuste básico de servomotores | Obligatorio al cambiar un servomotor o la UCE |
| Tensión de alimentación | Próxima a la tensión de batería (~12 a 14 V) |

## Interpretación y errores frecuentes

* Sustituir un servomotor de trampilla y no realizar el Ajuste Básico; la UCE no reconoce el nuevo recorrido mecánico provocando fallos de regulación.
* Buscar el código de avería de la sonda de temperatura exterior en la UCE de Clima; la avería de esta sonda se graba en la UCE del Cuadro de instrumentos.

## Verificación final

Confirmar la ausencia de códigos de avería grabados y comprobar la ejecución completa del ajuste básico de servomotores.
