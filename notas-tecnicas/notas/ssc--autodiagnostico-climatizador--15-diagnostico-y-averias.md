---
id: ssc.autodiagnostico-climatizador.15-diagnostico-y-averias
modulo: ssc
unidad: clima
nt: 87
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Autodiagnóstico del sistema de climatización automática"
menu: "Autodiagnóstico del sistema de climati"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "15. Diágnostico y averías.pdf, págs. 133-134"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-temperatura-exterior", "transmisor-presion"]
palabras: ["autodiagnostico", "memoria averias", "test actuadores", "ajuste basico", "valores individuales"]
---

## Síntoma

Registros de avería memorizados en la centralita de climatización, mal funcionamiento de servomotores o indicación anómala de parámetros en el panel de mandos. (págs. 133-134)

## Causas posibles

- Averías fugaces o esporádicas: fallos temporales de comunicación o lecturas puntuales fuera de rango.
- Averías actuales o permanentes: interrupciones de circuito, cortocircuitos o fallos en sensores y actuadores.
- Fallos en sensores específicos (memorizados en la UCE del climatizador) o en sensores compartidos (memorizados en Cuadro de Instrumentos para temperatura exterior y velocidad; o en Red de A bordo para marcha atrás, alternador e iluminación). (págs. 133-134)

## Cómo separar las causas

Conectar una máquina de diagnosis al terminal del vehículo y ejecutar las siguientes funciones:
1. Consultar la memoria de averías: diferenciar averías esporádicas (se borran tras 30 o 40 arranques si no se repiten) de averías permanentes (solo se borran tras reparar la pieza y ejecutar "borrar memoria").
2. Diagnóstico de elementos actuadores:
   - Test de segmentos: ilumina los dígitos del display.
   - Velocidades del electroventilador: verifica las distintas velocidades o la regulación continua.
   - Turbina de aire: acciona el motor en todo su margen de trabajo.
   - Embrague del compresor: conecta y desconecta cíclicamente el embrague.
   - Motores de trampillas: activa los servomotores para comprobar la variación de temperatura y el reparto del flujo.
3. Ajuste básico: activa todos los servomotores de principio a fin memorizando sus posiciones límite de mínimo y máximo (obligatorio al cambiar un servomotor o la UCE del climatizador).
4. Lectura de valores de funcionamiento individual: comprobar los valores teóricos y reales de los servomotores (temperatura, central, deshielo, recirculación), las lecturas de los sensores de temperatura (exterior, entrada de aire, habitáculo, refrigerante), el porcentaje de radiación del fotosensor solar, la tensión de alimentación, la señal de alta presión del sensor MAP y la activación de la electroválvula del compresor. (págs. 133-134)

## Valores de referencia

- Borrado automático de averías esporádicas: 30 a 40 arranques del sistema sin reproducirse el fallo.
- Tensión de alimentación en diagnosis: aproximadamente igual a la tensión real de batería. (págs. 133-135)

## Verificación tras la reparación

Borrar la memoria de averías, realizar el ajuste básico de los servomotores y comprobar en el bloque de valores de medición que las lecturas reales se corresponden con las teóricas al accionar los mandos del climatizador. (págs. 133-134)
