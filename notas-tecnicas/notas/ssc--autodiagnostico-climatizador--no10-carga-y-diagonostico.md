---
id: ssc.autodiagnostico-climatizador.no10-carga-y-diagonostico
modulo: ssc
unidad: clima
nt: 468
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Autodiagnóstico del sistema de climatización automática"
menu: "Autodiagnóstico del sistema de climati"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "Nº10. Carga y Diagonostico.pdf, págs. 133-134"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-temperatura-exterior"]
palabras: ["autodiagnóstico", "memoria averías", "esporádicas", "actuadores", "ajuste básico", "valores individuales"]
---

## Síntoma

Aparición de códigos de fallo en la unidad de control de la climatización, parpadeo de datos en la pantalla o mal funcionamiento de servomotores y electroventiladores. (págs. 133-134)

## Causas posibles

- Averías esporádicas o fugaces: fallos puntuales de señal o caídas de tensión (se borran automáticamente tras 30 o 40 puestas en marcha sin repetirse).
- Averías actuales o permanentes: interrupciones, cortocircuitos o fallos físicos en sensores y actuadores (solo se borran tras su reparación y borrado manual).
- Fallos en sensores compartidos: memorizados en otras unidades de control y transmitidos por CAN-Bus (en Cuadro de Instrumentos: sensor de temperatura exterior y velocidad; en Red de A Bordo: marcha atrás, alternador y regulador de iluminación). (págs. 133-134)

## Cómo separar las causas

Conectar una máquina de diagnosis compatible y acceder a las funciones del autodiagnóstico:
1. Consultar la memoria de averías: identificar si los códigos corresponden a sensores específicos de la UCE de climatización o a sensores compartidos recibidos por CAN-Bus.
2. Diagnóstico de elementos actuadores:
   - Test de segmentos: ilumina todos los dígitos del display para verificar la pantalla.
   - Velocidades del electroventilador: acciona las velocidades o variación continua del ventilador del radiador.
   - Turbina de aire: acciona la turbina de aire fresco en todo su rango de trabajo.
   - Embrague del compresor: conmuta cíclicamente el acoplamiento magnético (se aprecia auditiva y visualmente).
   - Motores de las trampillas: activa los servomotores para comprobar el reparto de flujo y el salto térmico.
3. Ajuste básico: desplaza de principio a fin todos los servomotores y memoriza sus posiciones de mínimo y máximo (obligatorio tras sustituir un servomotor o la UCE del climatizador).
4. Lectura de valores de funcionamiento individual: supervisa parámetros en tiempo real como estado del compresor, revoluciones del motor, posición teórica/real de servomotores (temperatura, central, deshielo, recirculación), lecturas de sondas (exterior, entrada de aire, habitáculo, refrigerante), porcentaje de radiación del fotosensor solar, tensión de alimentación, presión del circuito (sensor MAP) y porcentaje de activación de la electroválvula del compresor. (págs. 133-134)

## Valores de referencia

- Criterio de borrado automático de averías esporádicas: 30 a 40 arranques del sistema sin reproducciones del fallo.
- Tensión de alimentación leída en diagnosis: aproximadamente igual a la tensión de batería. (págs. 133-134)

## Verificación tras la reparación

Ejecutar la función de ajuste básico tras sustituir componentes, borrar la memoria de averías y comprobar en la lectura de valores individuales que las posiciones teóricas y reales de los servomotores coinciden. (págs. 133-134)
