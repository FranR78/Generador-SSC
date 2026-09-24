---
id: ssc.diagnostico-electroventiladores-maxima-velocidad.10-electroventiladores
modulo: ssc
unidad: clima
nt: 62
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Electroventiladores funcionando de forma continua a la máxima velocidad al conectar el contacto"
menu: "Electroventiladores funcionando de for"
grupo: "Control de climatización"
clave: diagnostico-electroventiladores-maxima-velocidad
area: electricidad-electronica
sistema: "control-climatizacion"
fuentes: "10. Electroventiladores.pdf, págs. 86"
relacionados: ["electroventilador-condensador", "unidad-control-ventiladores"]
palabras: ["función de emergencia", "derivación a masa", "derivación a positivo", "máxima velocidad", "máquina de diagnosis"]
---

## Síntoma

Los electroventiladores de refrigeración se activan y giran de forma ininterrumpida a su velocidad máxima desde el mismo instante en que se conecta el contacto de encendido del vehículo (pág. 86).

## Causas posibles

- Activación de la función de emergencia de la electrónica del electroventilador por recepción de una señal PWM fuera del margen válido (proporción de periodo positivo inferior al 8% o superior al 95%) (pág. 86).
- Cortocircuito o derivación del cable de la señal de excitación a masa (GND) o a positivo (+12 V) (pág. 86).
- Avería detectada y memorizada en los componentes del circuito de refrigeración del motor o del sistema de climatización (pág. 86).

## Cómo separar las causas

- Conectar la máquina de diagnosis al conector OBD del vehículo y consultar la memoria de averías de la unidad de control del motor y de la unidad de climatización para identificar el código registrado (pág. 86).
- Medir con osciloscopio o polímetro en el cable de señal PWM hacia la electrónica del ventilador para comprobar si la proporción de periodo positivo está fuera del margen del 8% al 95% o si la línea se encuentra derivada a masa o a positivo (+12 V) (pág. 86).

## Valores de referencia

- Margen de periodo positivo de la señal PWM para funcionamiento normal: del 8% al 95% (pág. 86).
- Rango de señal PWM que desencadena la función de emergencia: menor del 8% o mayor del 95% (pág. 86).

## Verificación tras la reparación

- Borrar la memoria de averías mediante la máquina de diagnosis y conectar el contacto verificando que los electroventiladores permanecen apagados en frío y que la señal PWM se mantiene dentro de los valores de trabajo especificados (pág. 86).
