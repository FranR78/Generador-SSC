---
id: ssc.autodiagnostico-climatizador.15-diagnostico-y-averias
modulo: ssc
unidad: clima
nt: 87
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Autodiagnóstico del sistema de climatización automática mediante equipo OBD"
menu: "Autodiagnóstico del sistema de climati"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "15. Diágnostico y averías.pdf, págs. 133-134"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "transmisor-presion", "sensor-evaporador"]
palabras: ["autodiagnóstico", "memoria de averías", "averías fugaces", "test de actuadores", "ajuste básico", "valores de medición"]
---

## Objeto y alcance

Ejecución de las funciones de diagnóstico electrónico con máquina OBD en sistemas de climatización automática para la localización de fallos en sensores, verificación de actuadores y calibración de servomotores (págs. 133-134).

## Condiciones previas

- Conector de diagnóstico OBD del vehículo localizado y equipo de diagnosis compatible conectado (págs. 133, 134).
- Tensión de batería estabilizada y contacto puesto (págs. 133-134).

## Equipo y material

- Máquina o terminal de diagnosis multimarca o específica con protocolo de comunicación OBD / Can-Bus (págs. 133-134).

## Pasos

1. Conectar la máquina de diagnosis al terminal OBD e interrogar la UCE del climatizador (págs. 133-134).
2. Función 1 — Consultar la memoria de averías:
   - Diferenciar entre averías esporádicas/fugaces (se borran automáticamente tras 30 a 40 arranques si no se repiten) y averías permanentes/actuales (requieren reparación física y borrado manual con la máquina) (pág. 133).
   - Verificar averías en unidades asociadas vía Can-Bus: Cuadro de instrumentos (sensor de temperatura exterior y velocidad), UCE Red de a Bordo (sensor de marcha atrás, alternador, reóstato) y UCE del Motor (temperatura refrigerante y revoluciones) (págs. 133-134).
3. Función 2 — Diagnóstico de elementos actuadores (test de actuadores):
   - Test de segmentos: ilumina todos los dígitos del display para verificar fallos de información en el panel (pág. 133).
   - Velocidades del electroventilador: activa las distintas etapas para comprobar la conmutación eléctrica (pág. 133).
   - Turbina de aire: acciona la turbina en todo su rango de trabajo (pág. 133).
   - Embrague del compresor: conmuta cíclicamente el acoplamiento magnético comprobando acústicamente su funcionamiento (pág. 133).
   - Motores de trampillas: activa los servomotores comprobando la variación de temperatura y las salidas de aire (pág. 133).
4. Función 3 — Ajuste básico:
   - Activar el aprendizaje de topes mecánicos. La UCE mueve todos los servomotores desde el principio hasta el fin de su recorrido memorizando las posiciones de mínimo y máximo de cada potenciómetro de posición (pág. 133).
5. Función 4 — Lectura de valores de funcionamiento individual (bloques de valores de medición):
   - Verificar parámetros en tiempo real: estado del compresor, r.p.m. del motor, velocidad de marcha, tiempo de parada, posición teórica/real de los servomotores (temperatura, central, deshielo, recirculación), lecturas de sondas (exterior, entrada de aire, interior, evaporador, pies, difusor central, fotosensor solar), porcentaje de activación de la electroválvula del compresor, señal del sensor MAP y solicitud de elevación de ralentí (págs. 133-134).

## Valores de referencia

- Borrado automático de averías fugaces: tras 30 a 40 arranques del vehículo sin reproducirse el fallo (pág. 133).
- Tensión de alimentación leída en bloques de valores: aproximadamente igual a la tensión de batería (~12 V) (pág. 134).
- Ajuste básico obligatorio: tras sustituir cualquier servomotor o la propia UCE del Climatizador (pág. 133).

## Verificación final

Efectuar el borrado de la memoria de averías tras reparar el componente defectuoso y realizar una nueva lectura para confirmar que no se registran averías permanentes (pág. 133).

## Seguridad y normativa

Es estrictamente imprescindible ejecutar la función de ajuste básico tras sustituir un servomotor o la UCE del climatizador; de lo contrario, la UCE no reconocerá las posiciones límite de las trampillas ocasionando fallos de regulación (pág. 133).

## Imágenes requeridas

- Mapeo de componentes contemplados en el autodiagnóstico del climatizador automático y unidades de control interconectadas — Fuente: 15. Diágnostico y averías.pdf, pág. 134
