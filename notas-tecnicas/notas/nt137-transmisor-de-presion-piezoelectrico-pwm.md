---
id: ssc.clima.transmisor-de-presion-piezoelectrico-pwm
modulo: ssc
unidad: clima
nt: 137
titulo: "Transmisor De Presión Piezoeléctrico (Pwm)"
ubicacion: "Enroscado en la tubería de alta presión del circuito frigorífico [168, 169]"
aplicacion: "Sistemas de climatización electrónica y gestión por UCE de motor / clima [170, 171]"
menu: "Transmisor De Presión Piezoeléctrico ("
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir de forma continua e ininterrumpida la presión del refrigerante en la línea de alta presión y transmitir una señal digital a la UCE del motor y del climatizador para la regulación de cilindrada y ventilación [168, 170, 171].

## Principio de funcionamiento

Sensor electrónico provisto de un cristal de silicio (resistencia piezoeléctrica). La presión del refrigerante deforma el cristal de silicio modificando su resistencia eléctrica. Un microprocesador interno evalúa la tensión de medición y la convierte en una señal de onda cuadrada modulada en anchura de impulsos (PWM) con un período constante de 20 ms. La anchura del impulso positivo varía proporcionalmente a la presión [169, 172, 173].

## Características

Sensor electrónico de 3 vías (Alimentación +5 V, Masa -, y Salida de señal PWM) [169, 173].

## Valores de trabajo

| Parámetro / Condición | Valor numérico | Estado de señal / Notas |
|---|---|---|
| **Tensión de alimentación** | 5.0 V corriente continua | Proporcionada por la UCE [169] |
| **Duración del período de señal** | 20 ms (Frecuencia de 50 Hz) | Constante [172, 173] |
| **Anchura de impulso a baja presión** | 2.6 ms | Presión reducida [169] |
| **Anchura de impulso a alta presión** | 18.0 ms | Presión elevada / creciente [173] |

## Anomalías frecuentes

Fallo del microprocesador interno; cortocircuito o corte en el cableado de 3 vías; deformación permanente del elemento de silicio [169, 173].

## Comportamiento en avería

La UCE desconecta el compresor por seguridad y registra un código de avería (DTC) en la memoria de diagnóstico, activando el electroventilador a máxima velocidad en modo de emergencia [170, 171].

## Cómo comprobarlo

Conectar un osciloscopio a la vía de señal (verde): verificar la presencia del período constante de 20 ms y comprobar cómo varía la anchura del pulso positivo (de aprox. 2.6 ms a aprox. 18 ms) al subir la presión en la línea de alta [169, 172, 173].
