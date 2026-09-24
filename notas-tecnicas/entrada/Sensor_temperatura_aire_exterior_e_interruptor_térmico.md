```yaml
tipo: componente
titulo: Transmisor de temperatura exterior
entidad: sensor-temperatura-exterior
area: climatizacion
sistema: control-climatizacion
codigo: G17
fuente: "Sensor temperatura aire exterior e interruptor térmico.pdf"
paginas: "1-2"
forma_parte_de: control-climatizacion
relacionados: [unidad-control-climatizador, compresor, recirculacion]
palabras: [G17, NTC, retrovisor derecho, valor fijo 20 ºC, parpadeo display]
```

## Misión
Determinar constantemente la temperatura del aire exterior para transmitir esta información a la unidad del radiocasete y a la unidad de control del autoclima (pág. 1).

## Tipos y características
Sensor térmico del tipo resistencia NTC ubicado en el interior de la carcasa del retrovisor del lado del acompañante (derecho) (pág. 1).

📷 IMAGEN: Ubicación del transmisor G17 en el retrovisor derecho y del interruptor F38 en la caja de aguas — Fuente: Sensor temperatura aire exterior e interruptor térmico.pdf, pág. 2

## Principio de funcionamiento
Mide la temperatura ambiente exterior mediante la variación de su resistencia NTC (pág. 1). La unidad del radiocasete procesa esta señal para mostrar la cifra en su display y la retransmite al autoclima (pág. 1). A su vez, la unidad del autoclima emplea la medición para regular la temperatura, ajustar la velocidad de la turbina, conectar o desconectar el compresor y activar la trampilla de recirculación de aire (pág. 1).

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
- Interrupción o pérdida de la señal del sensor (pág. 1).

## Comportamiento en avería
Al desaparecer la señal, la unidad del radiocasete muestra tres rayas en la zona del display dedicada a la temperatura (pág. 1). La unidad del autoclima adopta un valor fijo sustitutivo de 20 ºC y anula la señal de activación del acoplamiento magnético del compresor (págs. 1-2). El sistema mantiene la ventilación pero sin capacidad de refrigeración (pág. 2). Asimismo, cada vez que se enciende el autoclima, parpadean todos los dígitos del display (pág. 2).

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

```yaml
tipo: componente
titulo: Interruptor térmico
entidad: presostato
variante: interruptor-termico
area: climatizacion
sistema: control-climatizacion
codigo: F38
fuente: "Sensor temperatura aire exterior e interruptor térmico.pdf"
paginas: "1-2"
forma_parte_de: control-climatizacion
relacionados: [compresor, electroventilador-condensador, evaporador]
palabras: [F38, caja de aguas, 5 ºC, normalmente cerrado, congelación evaporador]
```

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

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «Sensor temperatura aire exterior e interruptor térmico.pdf», páginas 1 a 2 de 2. completo