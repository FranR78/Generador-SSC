---
id: ssc.sin-clasificar.electroventiladores-de-funcionamiento-continuo-regulados-por-pwm
modulo: ssc
unidad: sin-clasificar
nt: 1113
titulo: "Electroventiladores De Funcionamiento Continuo Regulados Por Pwm"
ubicacion: "Montados en el frontal del radiador de refrigeración y condensador"
aplicacion: "Sistemas de refrigeración y climatización de última generación"
menu: "Electroventiladores De Funcionamiento "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Ajustar de forma continua e ilimitada la velocidad de giro de los ventiladores para adaptar el caudal de aire a las necesidades térmicas del motor y del sistema de climatización.

## Principio de funcionamiento

El propio conjunto del electroventilador incorpora una electrónica de control. Recibe desde la UCE del motor una señal de frecuencia fija con modulación por anchura de pulso (**PWM**). Al incrementar la proporción de periodo positivo de la señal, la electrónica aumenta de forma proporcional la velocidad de giro de los ventiladores.

## Características

Motor eléctrico con unidad electrónica integrada de control comandada por línea de señal PWM de alta frecuencia.

## Valores de trabajo

* Velocidad máxima de trabajo: Proporción de periodo positivo PWM **superior al 90%**.
* Rango del modo de emergencia: Señal PWM **inferior al 8%** o **superior al 95%**.

## Anomalías frecuentes

Corte o derivación a masa/positivo del cable de señal PWM entre la UCE del motor y la electrónica de los ventiladores.

## Comportamiento en avería

Si la señal PWM recibida cae por debajo del 8% o supera el 95% (ausencia de señal o cortocircuito), se activa la función de emergencia: los dos electroventiladores se ponen a funcionar a la **velocidad máxima inmediatamente al conectar el contacto** para proteger el motor.

## Cómo comprobarlo

Conectar un osciloscopio en el cable de señal de excitación para medir el porcentaje de periodo positivo de la señal PWM y consultar los códigos de avería registrados con la máquina de diagnosis.

## Imágenes requeridas

- Diagrama de la señal PWM y regulación continua de los electroventiladores — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 86
