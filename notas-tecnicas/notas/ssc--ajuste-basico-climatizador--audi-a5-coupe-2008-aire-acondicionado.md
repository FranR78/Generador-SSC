---
id: ssc.ajuste-basico-climatizador.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 170
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Ajuste básico del climatizador"
menu: "Ajuste básico del climatizador"
grupo: "Control de climatización"
clave: ajuste-basico-climatizador
area: climatizacion
sistema: "control-climatizacion"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 15-25"
relacionados: ["unidad-control-climatizador", "autodiagnostico-climatizador"]
palabras: ["ajuste básico", "calibración", "topes finales", "LIN-Bus", "rodaje compresor", "grupo 001", "grupo 003", "grupo 004"]
---

## Objeto y alcance

Calibrar y memorizar las posiciones extremas (topes finales) de los servomotores del climatizador, efectuar la asignación automática de direcciones LIN-Bus de los servomotores y realizar la primera puesta en funcionamiento (rodaje) del compresor tras sustituir la unidad de control J255 o componentes del sistema. (págs. 15-24).

## Condiciones previas

1. Batería con tensión suficiente y fusibles del sistema en buen estado.
2. Memoria de averías consultada y sin averías almacenadas (o subsanadas previamente).
3. Para el grupo de indicación 001 (calibración de topes de servomotores): encendido conectado.
4. Para el grupo de indicación 003 (puesta en marcha del compresor): motor en marcha al ralentí como mínimo y difusores del tablero de instrumentos abiertos.
5. En caso de haber sustituido un servomotor o modificado su posición, debe haberse ejecutado con éxito previamente el ajuste básico en el grupo 004 antes de realizar el grupo. (págs. 8, 15, 17, 18, 22).

## Equipo y material

Sistema de información, medición y diagnóstico de vehículos VAS 5051 con cable de diagnóstico VAS 5051/5A. (págs. 8, 15).

## Pasos

1. Conectar el cable VAS 5051/5A al conector de diagnóstico de 16 polos con el encendido desconectado.
2. Conectar el encendido o arrancar el motor según el grupo de indicación a calibrar.
3. Entrar en el código de dirección "08 - Electrónica de climatización/calefacción" (unidad J255).
4. Consultar y borrar la memoria de averías.
5. Seleccionar la función "Ajuste básico".
6. Para dirección e identificación de servomotores mediante bus serie LIN-Bus: seleccionar el grupo de indicación "004". Durante este proceso, los servomotores autoadaptan de forma permanente su dirección según su posición física en el cableado en serie.
7. Para calibración de topes de servomotores: seleccionar el grupo de indicación "001". Parpadeará el testigo de la tecla AC (versión Basis) o la pantalla (versión Komfort). Esperar a que todos los servomotores alcancen ambos topes finales y se memoricen los valores.
8. Para primera puesta en funcionamiento del compresor (rodaje) tras sustituir la UCE J255: seleccionar el grupo de indicación "003" con el motor al ralentí y esperar aprox. 5 minutos hasta que la pantalla muestre "Ajuste básico ejecutado" y el testigo de la tecla AC deje de parpadear.

## Valores de referencia

Tiempo de ejecución en grupo: aprox. 1 a 2 minutos.
Tiempo de ejecución en grupo: aprox. 5 minutos.
Tope inferior memorizado en servomotores: valor 10000.
Tope superior memorizado en servomotores: valor entre 11000 y 20000 según la posición del motor. (págs. 16, 22, 45).

## Verificación final

Confirmar que aparezca la indicación "Ajuste básico ejecutado" en el equipo de diagnosis y que el parpadeo del testigo de la tecla AC o de la pantalla haya cesado. Consultar de nuevo la memoria de averías para verificar que no queden registros de fallo. (págs. 17, 22, 25).

## Seguridad y normativa

Si el proceso en el grupo 003 se interrumpe (por apagar el motor o por valores fuera de tolerancia), se inscribe la avería "Especificación de rodaje, ajuste básico nulo o incorrecto". Esta avería solo se puede borrar repitiendo la función del grupo 003 de principio a fin hasta completarla con éxito. (pág. 22).
