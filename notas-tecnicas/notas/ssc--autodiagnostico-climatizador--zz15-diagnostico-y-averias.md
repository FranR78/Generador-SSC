---
id: ssc.autodiagnostico-climatizador.zz15-diagnostico-y-averias
modulo: ssc
unidad: clima
nt: 354
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Autodiagnóstico del sistema de climatización automática"
menu: "Autodiagnóstico del sistema de climati"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "ZZ15. Diágnostico y averías.pdf, págs. 133-134"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "sensor-temperatura-exterior", "fotosensor-solar"]
palabras: ["memoria de averías", "diagnóstico de actuadores", "ajuste básico", "lectura de bloques", "CAN-Bus", "borrado de averías"]
---

## Síntoma

Anomalías en la regulación electrónica de la temperatura, fallos en la distribución de aire, parpadeos/fallos en el display del climatizador o inactividad de componentes eléctricos. (págs. 133-134).

## Causas posibles

Averías eléctricas o electrónicas en sensores específicos de climatización, sensores compartidos en red CAN-Bus (cuadro de instrumentos, red de a bordo), servomotores de trampillas, turbina de aire o unidad de control del climatizador. (págs. 133-134).

## Cómo separar las causas

Conectar un equipo de diagnosis compatible al terminal de diagnóstico del vehículo y ejecutar las 4 funciones principales de autodiagnóstico:
1. Consultar la memoria de averías:
   - Averías fugaces o esporádicas: se borran automáticamente tras 30 o 40 arranques del sistema sin reproducirse el fallo. (pág. 133).
   - Averías actuales o permanentes: quedan memorizadas en la UCE de climatización y solo se pueden borrar tras reparar el componente desde la función "borrar memoria de averías". (pág. 133).
   - Ubicación de averías de sensores compartidos en red: las averías del sensor de temperatura exterior y velocidad del vehículo se memorizan en la UCE del Cuadro de Instrumentos; las de marcha atrás, alternador y regulador de iluminación se memorizan en la UCE de la Red de a bordo. (págs. 133-134).
2. Diagnóstico de elementos actuadores (Test de actuadores):
   - Test de segmentos: ilumina todos los dígitos del display para comprobar elementos informativos del panel. (pág. 133).
   - Pruebas activas de componentes: excita secuencialmente las velocidades del electroventilador, la turbina de aire fresco en todo su margen, el embrague electromagnético del compresor y los servomotores de las trampillas para verificar variaciones de temperatura y zonas de salida. (pág. 133).
3. Ajuste básico:
   - Activa de principio a fin todos los servomotores de trampillas y memoriza las posiciones de tope mínimo y máximo de cada uno. Es ineludible ejecutarlo tras sustituir algún servomotor o la unidad de control del climatizador. (pág. 133).
4. Lectura de valores de funcionamiento individual (Bloques de medición):
   - Permite verificar en tiempo real: estado del compresor (parado/marcha), rpm del motor, velocidad de marcha, tiempo de parada, valores teórico y real de posicionamiento de servomotores (temperatura, central, deshielo, recirculación), lecturas de temperatura (exterior, entrada de aire, habitáculo, refrigerante motor), porcentaje del fotosensor de radiación solar (al acercar luz intensa), tensión de alimentación de batería, porcentaje de activación de la electroválvula del compresor, señal del sensor MAP de alta presión y señales de desactivación por alternador. (págs. 133-134).

## Valores de referencia

- Borrado automático de averías esporádicas: tras 30 a 40 ciclos de arranque sin reproducciones del fallo. (pág. 133).
- Tensión de alimentación leída en bloques de medición: valor aproximadamente igual a la tensión de batería (12 V - 14 V). (pág. 134).

## Verificación tras la reparación

Efectuar el borrado de la memoria de averías, realizar el ajuste básico de las trampillas y comprobar en la lectura de valores de funcionamiento individual que los parámetros teóricos y reales de los actuadores coinciden. (págs. 133-134).

## Imágenes requeridas

- Esquema general de componentes contemplados en el autodiagnóstico de la UCE de climatización y su comunicación por bus con otras UCEs (Cuadro, Confort, Motor, Ventiladores) — Fuente: ZZ15. Diágnostico y averías.pdf, pág. 134
