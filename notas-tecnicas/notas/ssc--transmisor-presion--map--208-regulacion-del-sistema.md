---
id: ssc.transmisor-presion.map.208-regulacion-del-sistema
modulo: ssc
unidad: clima
nt: 114
tipo: elemento
clase: componente
titulo: "Transmisor de alta presión"
codigo: "G65"
menu: "Transmisor de alta presión G65"
grupo: "Control de climatización"
clave: transmisor-presion
variante: map
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
marca: "VW"
fuentes: "208. Regulación del Sistema.pdf, págs. 36-37"
relacionados: ["presostato", "unidad-control-climatizador", "unidad-control-ventiladores", "electroventilador-condensador"]
palabras: ["G65", "cristal de silicio", "PWM", "50 Hz", "20 ms", "1.4 bar", "2.6 ms", "13%", "avería 00819"]
---

## Misión

Medir de forma continua y electrónica la presión del agente frigorífico en todo el ciclo de trabajo, transformando la magnitud física de presión en una señal eléctrica para las unidades de control del climatizador, del motor y de los ventiladores (págs. 36-37).

## Tipos y características

Sensor de presión electrónico que sustituye al conmutador F129, instalado en el tubo de alta presión (págs. 36-37). Integra un cristal de silicio (resistencia variable) y un microprocesador en el propio cuerpo del sensor (pág. 37). Susceptible de autodiagnóstico (pág. 37).

## Principio de funcionamiento

La presión del refrigerante actúa contra el cristal de silicio deformándolo en proporción a la fuerza ejercida (pág. 37). Al deformarse, el cristal modifica su resistencia eléctrica y varía la tensión de medición captada en su estructura (pág. 37). El microprocesador interno procesa esta tensión y emite una señal digital modulada en anchura de impulsos (PWM) a una frecuencia fija de 50 Hz (duración de período de 20 ms = 100%) (pág. 37).
- A presión baja (0,14 MPa / 1,4 bares): la deformación es leve, la resistencia es baja y el microprocesador genera impulsos estrechos de 2,6 ms (13% del período) (pág. 37).
Las unidades de control utilizan esta señal para adaptar con precisión el ralentí del motor a la potencia absorbida por el compresor y para conmutar las velocidades del ventilador de forma decalada (con un breve retardo), evitando variaciones bruscas de régimen al ralentí (pág. 37).

## Valores de trabajo

- Frecuencia de la señal PWM: 50 Hz (período de 20 ms = 100%) (pág. 37).
- Ancho de impulso a 0,14 MPa (1,4 bares): 2,6 ms (13% de la duración del período) (pág. 37).

## Anomalías frecuentes

- Registro del código de avería 00819 "Transmisor de alta presión G65 - Señal muy baja" en la memoria del autodiagnóstico (pág. 37).

## Comportamiento en avería

Si la unidad de control para el ventilador del líquido refrigerante no detecta señal proveniente del sensor G65, desconecta el compresor automáticamente por motivos de seguridad (pág. 37).

## Cómo comprobarlo

Consultar la memoria de averías del sistema mediante el equipo de diagnosis (código 00819) y verificar con osciloscopio la señal PWM entre sus terminales (pág. 37).

## Imágenes requeridas

- Transmisor de alta presión G65, sección del sensor con cristal de silicio y gráfica de la señal PWM (frecuencia 50 Hz, periodo 20 ms, pulso 2,6 ms a 1,4 bar) — Fuente: 208. Regulación del Sistema.pdf, págs. 36-37
