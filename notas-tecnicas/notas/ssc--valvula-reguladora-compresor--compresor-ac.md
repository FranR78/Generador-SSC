---
id: ssc.valvula-reguladora-compresor.compresor-ac
modulo: ssc
unidad: clima
nt: 716
tipo: elemento
clase: componente
titulo: "Válvula reguladora del compresor del climatizador"
codigo: "N280"
menu: "Válvula reguladora del compres N280"
grupo: "Control de climatización"
clave: valvula-reguladora-compresor
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: compresor
marca: "Audi"
fuentes: "COMPRESOR__AC.PDF, págs. 5-10"
relacionados: ["compresor", "unidad-control-climatizador", "sensor-evaporador"]
palabras: ["N280", "electroválvula", "PWM", "500 Hz", "estado flotante", "cárter", "alta presión", "baja presión"]
---

## Misión

Gobernar la cilindrada del compresor regulando el paso de refrigerante entre la cámara de alta presión, la cámara del cárter y el lado de baja presión (pág. 5, 7).

## Tipos y características

- Válvula reguladora del compresor del climatizador N280 (pág. 4, 5).
- Combina un componente mecánico (A) sensible a la presión y una unidad electromagnética (B) que realiza la función esencial de regulación (pág. 5).
- En la válvula confluyen las tres presiones del sistema: cárter del compresor (A), lado de alta presión (B) y lado de baja presión (C) (pág. 7).

## Principio de funcionamiento

- **Accionamiento electromagnético (B)**: La unidad E87 excita la válvula mediante una señal cuadrada de frecuencia fija a 500 Hz modulada en anchura de impulsos (PWM). Debido a la alta frecuencia, el empujador se mantiene en un estado "flotante", realizando desplazamientos de pocas décimas de milímetro entre sus topes para regular todos los márgenes intermedios (pág. 6).
- **Estado sin corriente**: La válvula permanece totalmente abierta interconectando el conducto de alta presión (B) con el cárter (A), compensando ambas presiones (pág. 7).
- **Plena carga (100% de caudal)**: La válvula cierra la comunicación entre el cárter (A) y la alta presión (B). Al disminuir la presión en el cárter, la alta presión sobre los pistones vence la fuerza del muelle del disco oscilante y lo desplaza a máxima inclinación (pág. 8, 9).
- **Regulación descendente / Estado OFF (inferior a 2%)**: Al desactivar o solicitar muy baja potencia, la válvula abre la conexión entre alta presión y cárter. Se igualan las presiones a ambos lados del pistón y el muelle del disco desplaza la inclinación a valor inferior al 2% (alimentación cero o compresor OFF) (pág. 9, 10).
- **Componente mecánico (A - Regulación por baja presión C)**:
  - Si la baja presión (C) es demasiado alta, comprime el elemento sensible interior, permitiendo al empujador separar más la alta presión del cárter para aumentar la capacidad de aspiración del compresor (pág. 11, 12).
  - Si la baja presión (C) es demasiado baja, el elemento se relaja y limita la carrera del empujador, impidiendo la separación total entre alta presión y cárter para reducir la cilindrada (pág. 12).

## Valores de trabajo

- Frecuencia de la señal PWM de excitación (E87): 500 Hz (pág. 6).
- Recorrido del empujador en estado flotante: pocas décimas de milímetro (pág. 6).
- Nivel de alimentación en posición de desconexión / OFF: inferior a 2% (pág. 10).
- Caudal impelido a plena carga: 100% (pág. 9).

## Comportamiento en avería

En ausencia de señal eléctrica de excitación (sin corriente), la válvula permanece abierta uniendo la alta presión con el cárter, manteniendo el compresor en un nivel de alimentación inferior al 2% (compresor OFF) (pág. 7, 10).

## Imágenes requeridas

- Ubicación y vías de presión A (cárter), B (alta presión) y C (baja presión) en la válvula reguladora N280 — Fuente: COMPRESOR__AC.PDF, pág. 7 (pág. 7).
- Posición del empujador de la válvula N280 en régimen de plena carga y en regulación descendente — Fuente: COMPRESOR__AC.PDF, pág. 8 y 9 (pág. 8, 9).
