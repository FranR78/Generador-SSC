---
id: ssc.transmisor-presion.map.11-dispositivos-de-regulacion-y-segurida
modulo: ssc
unidad: clima
nt: 67
tipo: elemento
clase: componente
titulo: "Transmisor de presión de alta"
menu: "Transmisor de presión de alta"
grupo: "Control de climatización"
clave: transmisor-presion
variante: map
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "11. Dispositivos de regulación y seguridad.pdf, págs. 89-91"
relacionados: ["presostato", "unidad-control-climatizador", "electroventilador-condensador"]
palabras: ["sensor MAP", "cristal de silicio", "PWM", "anchura de impulsos", "14 bar", "8 ms", "37 bar"]
---

## Misión

Medir de forma continua el valor exacto de la presión del agente frigorífico en el tramo de alta y convertirlo en una señal eléctrica para la unidad de control (pág. 89).

## Tipos y características

Sensor electrónico de presión piezoeléctrico/piezorresistivo colocado en el tubo de alta presión que sustituye a la trinaria tradicional (pág. 89). Compuesto por un cristal de silicio sensible a las variaciones de presión y un microprocesador integrado (pág. 90). Emite una señal digital modulada en anchura de impulsos (PWM a 12 V) o una señal analógica (1 V a 4 V alimentado a 5 V o 12 V) (págs. 89, 91).

## Principio de funcionamiento

El cristal de silicio se deforma proporcionalmente a la presión aplicada, aumentando su resistencia eléctrica cuanto mayor es la deformación (pág. 90). El microprocesador procesa la variación de tensión y genera una señal digital PWM cuyo ancho de impulso es directamente proporcional a la presión existente (pág. 90). La señal se envía a la Unidad de Control del motor (sistemas manuales) o a la de Climatización (sistemas automáticos) para adaptar el ralentí, activar los electroventiladores con un retardo suave (decalado) y proteger el compresor (págs. 89-90).

## Valores de trabajo

- Tensión de alimentación: 12 V o 5 V según la variante del sensor (págs. 89, 91).
- Ancho de impulso PWM a 1,4 bar (mínima presión): 2,6 ms (pág. 90).
- Ancho de impulso PWM a 5 bar (circuito en reposo): 5 ms aproximadamente (pág. 90).
- Ancho de impulso PWM a 14 bar (funcionamiento nominal A/C): 8 ms aproximadamente (pág. 91).
- Ancho de impulso PWM a 37 bar (presión máxima): 18 ms (pág. 91).
- Tensión de salida en versión analógica: comprendida entre 1 V y 4 V (págs. 89, 91).

## Anomalías frecuentes

- Código de avería en memoria de la unidad de control: "Transmisor de alta presión, señal muy baja" (pág. 91).

## Comportamiento en avería

Si la Unidad de Control de los ventiladores no recibe señal o registra una señal excesivamente baja, desconecta el compresor por motivos de seguridad (pág. 91).

## Cómo comprobarlo

Conectar un osciloscopio en el cable de señal del sensor y medir la amplitud de la señal (12 V) y el ancho de impulso en milisegundos (ms), verificando que varía en proporción directa a la presión del circuito de alta (págs. 90-91). En versiones analógicas, medir la tensión con un polímetro (entre 1 V y 4 V) (pág. 91).
