---
id: ssc.regulacion-electroventiladores-pwm.10-electroventiladores
modulo: ssc
unidad: clima
nt: 61
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación continua de electroventiladores mediante señal PWM"
menu: "Regulación continua de electroventilad"
grupo: "Control de climatización"
clave: regulacion-electroventiladores-pwm
area: electricidad-electronica
sistema: "control-climatizacion"
fuentes: "10. Electroventiladores.pdf, págs. 85-86"
relacionados: ["electroventilador-condensador", "unidad-control-ventiladores"]
palabras: ["PWM", "periodo positivo", "variador continuo", "función de emergencia", "Can-Bus"]
---

## Objeto

Ajustar de manera continua y progresiva la velocidad de giro de los electroventiladores en función de la demanda instantánea del motor y del sistema de climatización (págs. 85-86).

## Fundamento

Control electrónico integrado en el propio cuerpo del electroventilador que interpreta una señal de excitación modulada en anchura de pulso (PWM) emitida por la unidad de control del motor (pág. 86).

## Desarrollo

La unidad de control de climatización solicita la activación de los ventiladores mediante un mensaje en la línea Can-Bus de confort, en función de la carga del compresor y de la presión de refrigerante (pág. 85). La unidad de control del motor genera una señal PWM de frecuencia fija y proporción de periodo positivo variable hacia la electrónica del ventilador (pág. 86). A medida que aumenta el porcentaje de periodo positivo de la señal PWM, incrementa proporcionalmente la velocidad de giro de los electroventiladores (pág. 86). Si la proporción de periodo supera el 90%, los ventiladores funcionan a la máxima velocidad (pág. 86).

## Valores de referencia

- Frecuencia de la señal PWM: fija (pág. 86).
- Proporción de periodo positivo para máxima velocidad de giro (100%): superior al 90% (pág. 86).
- Umbrales de activación de la función de emergencia: señal PWM inferior al 8% o superior al 95% (pág. 86).

## Errores de concepto frecuentes

- Creer que este sistema emplea resistencias escalonadas de potencia para variar la velocidad en lugar de un módulo electrónico de regulación por señal PWM (págs. 85-86).

## Imágenes requeridas

- Gráfica de la velocidad de los electroventiladores (%) frente a la proporción de periodo positivo (%) de la señal PWM y zona de función de emergencia — Fuente: 10. Electroventiladores.pdf, pág. 86
