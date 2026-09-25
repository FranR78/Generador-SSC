---
id: ssc.presostato.la-climatizacion
modulo: ssc
unidad: clima
nt: 284
tipo: elemento
clase: componente
titulo: "Presostato"
menu: "Presostato"
grupo: "Control de climatización"
clave: presostato
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 91-97"
relacionados: ["embrague-compresor", "electroventilador-condensador", "transmisor-presion"]
palabras: ["presostato", "trinary", "transmisor de silicio", "PWM", "2 bares", "30 bares"]
---

## Misión

Monitorizar la presión del circuito frigorífico para proteger el compresor contra presiones anormales (baja o alta) y gobernar las velocidades del electroventilador. (págs. 91-97)

## Tipos y características

Interruptor de presión hidromecánico (de 2, 3 o 4 funciones) o transmisor de presión piezoeléctrico de silicio (señal PWM). Instalado en la línea de alta presión, entre el condensador y la válvula de expansión. (págs. 91, 96-97)

## Principio de funcionamiento

- En presostatos convencionales: La presión actúa sobre una arandela o diafragma interno que desplaza contactos eléctricos. Si la presión desciende de 2 bares (fuga) o supera los 30 bares (sobrepresión), abre sus contactos y desconecta el compresor. A presiones intermedias (aprox. 16 bares), cierra contactos para activar la velocidad rápida del ventilador. (págs. 93-95, 98)
- En transmisores de silicio (G65): La presión deforma un cristal de silicio cambiando su resistencia. Un microprocesador convierte la tensión en una señal cuadrada modulada en anchura de impulso (PWM) enviada a la centralita. (págs. 96-97)

## Valores de trabajo

- Presión de reposo del circuito a 20 ºC: aprox. 0,5 MPa (5 bares). (pág. 93)
- Umbral de corte por baja presión: < 2 bares (0,2 MPa). (pág. 98)
- Umbral de corte por alta presión: > 30 bares (3,0 MPa). (pág. 98)

## Anomalías frecuentes

Fugas de refrigerante por la toma de fijación, agarrotamiento de los contactos eléctricos o descalibración del cristal de silicio. (págs. 93, 97, 161)

## Comportamiento en avería

Falta de acoplamiento del compresor o imposibilidad de conectar los escalones de velocidad del electroventilador. (págs. 93, 161)

## Cómo comprobarlo

Medir la continuidad eléctrica entre terminales con el circuito presurizado o verificar la señal modulada PWM con un osciloscopio. (págs. 93, 96)

## Mantenimiento

La toma de conexión del presostato incorpora una válvula Schrader que permite su sustitución sin necesidad de vaciar la carga de refrigerante del circuito. (pág. 91)
