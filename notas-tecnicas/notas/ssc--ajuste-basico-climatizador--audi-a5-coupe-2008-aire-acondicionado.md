---
id: ssc.ajuste-basico-climatizador.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 170
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Ajuste básico de los componentes del climatizador"
codigo: "J255"
menu: "Ajuste básico de los component J255"
grupo: "Control de climatización"
clave: ajuste-basico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 15-25"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla", "compresor"]
palabras: ["ajuste básico", "grupo 001", "grupo 003", "grupo 004", "LIN-Bus", "topes finales"]
---

## Objeto y alcance

Aprender y memorizar las posiciones límite de las trampillas motorizadas, inicializar la asignación de direcciones por bus LIN y ejecutar el rodaje inicial del compresor. (págs. 15-25)

## Condiciones previas

- Para ajuste básico de servomotores (grupo 001 y 004): encendido conectado y motor parado. (pág. 15)
- Para rodaje inicial del compresor (grupo 003): haber completado con éxito el grupo 001, motor en marcha al ralentí y difusores del tablero abiertos. (págs. 20, 22)

## Equipo y material

- Equipo de diagnosis VAS 5051 / VAS 5052 con cable adaptador de 16 polos. (pág. 15)

## Pasos

1. Conectar el equipo de diagnosis e iniciar el sistema con la dirección "08 - Electrónica de climatización". (pág. 15)
2. Consultar la memoria de averías y subsanar los fallos existentes. (pág. 15)
3. Seleccionar la función "04 - Ajuste básico". (pág. 15)
4. En caso de haber sustituido un servomotor, introducir el grupo de indicación "004" para autoadaptar la dirección electrónica del servomotor en la serie LIN-Bus. (págs. 23-24)
5. Introducir el grupo de indicación "001" para recorrer y memorizar los topes mecánicos de todas las trampillas (parpadea el testigo AC o la pantalla durante el proceso). Esperar a la confirmación de finalizado. (págs. 17-18)
6. Para un nuevo panel J255 o tras reparar el circuito, arrancar el motor e introducir el grupo "003" para el rodaje del compresor; dejar funcionar durante 5 minutos continuos sin apagar el motor. (págs. 21-22)
7. Consultar y borrar la memoria de averías al término del ajuste. (pág. 25)

## Valores de referencia

- Tiempo de ejecución grupo: 1 a 2 minutos. (pág. 16)
- Tiempo de ejecución grupo 003 (rodaje compresor): aprox. 5 minutos continuos. (pág. 22)
- Margen de valores autoadaptados para topes finales: 10000 para tope inferior, entre 11000 y 20000 para tope superior. (pág. 45)

## Verificación final

Asegurar que el testigo de la tecla AC deja de parpadear y que la avería "Especificación de rodaje" queda eliminada automáticamente de la memoria. (págs. 17, 22)

## Seguridad y normativa

Mantener las manos alejadas de los mecanismos articulados de las trampillas bajo el tablero durante la ejecución del grupo 001, ya que los motores realizan recorridos de tope a tope de forma automática. (pág. 17)
