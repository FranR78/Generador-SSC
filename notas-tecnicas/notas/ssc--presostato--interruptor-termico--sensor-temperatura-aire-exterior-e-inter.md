---
id: ssc.presostato.interruptor-termico.sensor-temperatura-aire-exterior-e-inter
modulo: ssc
unidad: clima
nt: 173
tipo: elemento
clase: componente
titulo: "Interruptor térmico"
codigo: "F38"
menu: "Interruptor térmico F38"
grupo: "Control de climatización"
clave: presostato
variante: interruptor-termico
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "Sensor temperatura aire exterior e interruptor térmico.pdf, págs. 1-2"
relacionados: ["compresor", "electroventilador-condensador", "evaporador"]
palabras: ["F38", "caja de aguas", "5 ºC", "normalmente cerrado", "congelación evaporador"]
---

## Misión

Interrumpir la señal eléctrica de activación de 12 V hacia el compresor y desactivar los electroventiladores cuando la temperatura ambiente desciende por debajo de 5 ºC (págs. 1-2).

## Tipos y características

Conmutador térmico con contactos normalmente cerrados, instalado en el interior de la caja de aguas (págs. 1-2).

## Principio de funcionamiento

Da paso a la señal eléctrica de conexión de 12 V que proviene de la unidad del autoclima hacia el acoplamiento magnético del compresor (págs. 1-2). Al registrar una temperatura inferior a 5 ºC, abre automáticamente sus contactos cortando la línea de alimentación del compresor y desconectando los ventiladores del líquido refrigerante (siempre que no estén activados por alta temperatura del motor) (pág. 2).

## Valores de trabajo

- Tensión de la señal de mando que conmuta: 12 V (págs. 1-2).
- Umbral térmico de apertura de contactos: inferior a 5 ºC (págs. 1-2).

## Anomalías frecuentes

- Contactos bloqueados en posición permanentemente cerrada por avería mecánica (pág. 2).

## Comportamiento en avería

Carece de función sustitutiva (pág. 2). Si los contactos permanecen cerrados a temperaturas inferiores a 5 ºC, el compresor continúa funcionando sin desacoplarse, lo que puede causar la congelación del evaporador (pág. 2).
