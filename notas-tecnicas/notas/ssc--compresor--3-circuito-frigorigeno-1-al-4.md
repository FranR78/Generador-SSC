---
id: ssc.compresor.3-circuito-frigorigeno-1-al-4
modulo: ssc
unidad: clima
nt: 678
tipo: elemento
clase: componente
titulo: "Compresor"
menu: "Compresor"
grupo: "Circuito frigorífico"
clave: compresor
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: ciclo-frigorifico
fuentes: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, págs. 95-109, 113-189, 201"
relacionados: ["embrague-compresor", "ciclo-frigorifico", "aceite-frigorifico"]
palabras: ["plato oscilante", "cilindrada variable", "regulación externa", "paletas", "scroll", "Denso 6 SEU 12"]
---

## Misión

Bombear el refrigerante en estado gaseoso y aumentar su presión y temperatura en el circuito frigorífico (pág. 95).

## Tipos y características

- **Compresor alternativo de plato oscilante (cilindrada fija)**: Incorpora entre 5 y 7 pistones accionados por un plato inclinado. La potencia se regula por marcha-paro (sonda de evaporador) (pág. 95, 126).
- **Compresor de plato oscilante y cilindrada variable (autorregulado interno)**: Modifica automáticamente el ángulo del plato mediante la presión del cárter (PC). Ejemplos: Harrison V5, Sanden (pág. 128, 130, 135, 145).
- **Compresor de cilindrada variable pilotado (regulación externa)**: La UCE ajusta la cilindrada mediante una electroválvula con señal cuadrada PWM de 500 Hz (frecuencia que mantiene la válvula en estado flotante). Ejemplo: Denso 6 SEU 12 (pág. 132, 185, 189, 191).
- **Compresor rotativo de paletas / aletas**: Consta de rotor excéntrico con paletas deslizantes dentro de una cámara (pág. 95, 157, 161).
- **Compresor Scroll (espirales)**: Utiliza una espiral fija y una espiral móvil/giratoria. Ofrece alto rendimiento, bajo par de arranque y bajo ruido (pág. 171, 173, 176).
- **Compresor eléctrico**: Accionado por motor eléctrico de alta tensión con inversor de C/A integrado (ej. Toyota Prius ES14). Utiliza aceite especial aislante ND11 (pág. 201, 206).

## Principio de funcionamiento

- **Regulación interna de cilindrada**: La cilindrada varía ajustando la inclinación del plato según la presión del cárter (PC) en relación a la baja presión (BP):
  - Si BP > PC: La válvula abre, iguala presiones, aumenta el ángulo del plato y sube la cilindrada (plena carga) (pág. 130, 131).
  - Si BP < PC: La válvula cierra, mantiene la presión en el cárter, disminuye el ángulo y reduce la cilindrada (mínima carga) (pág. 130, 132).
- **Regulación externa (Denso 6 SEU 12 sin embrague)**: Sin corriente (2% de activación), la válvula está abierta y conecta AP con el cárter (mínima carga). Al recibir activación (+98% PWM), la válvula cierra el paso de AP al cárter, reduciendo PC y aumentando la inclinación a plena carga (pág. 187, 195, 196).

| 
|---|---|---|
|

## Valores de trabajo

- Presión de aspiración (baja presión): 1,2 bar a 3 bar (pág. 11, 14).
- Presión de descarga (alta presión): 14 bar a 20 bar (pág. 11, 14).
- Frecuencia de control de electroválvula de regulación externa: 500 Hz (pág. 191).
- Margen de activación PWM: 2% (mínima carga / apagado) a 98% (plena carga) (pág. 187, 195, 196).

## Anomalías frecuentes

- Bloqueo mecánico de pistones o paletas por falta de lubricante.
- Fugas de refrigerante por la empaquetadura del eje o juntas del cuerpo.
- Fallo de la electroválvula de regulación de cilindrada (quedándose fija en mínima carga) (pág. 195).

## Comportamiento en avería

Falta de compresión (presiones de alta y baja igualadas), imposibilidad de enfriar el habitáculo o ruidos metálicos intensos en el motor.

## Cómo comprobarlo

- Lectura de manómetros: verificar salto de presión entre aspiración (BP) y descarga (AP).
- Medición con osciloscopio / polímetro de la señal cuadrada PWM (500 Hz) en la electroválvula de regulación externa (pág. 191).

## Mantenimiento

Control del nivel y tipo de aceite específico (PAG para R134a, ND11 para híbridos/eléctricos) y reposición al sustituir componentes (pág. 201, 230, 245).

## Imágenes requeridas

- Sección del compresor de cilindrada variable Harrison V5 y detalle de su válvula de regulación — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL.pptx | pág. 138 y 140 (pág. 138 | 140) |
- Sección del compresor Denso 6 SEU 12 de regulación externa y posición de la electroválvula — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL.pptx | pág. 182 y 192 (pág. 182 | 192) |
- Funcionamiento de compresión del compresor de espirales Scroll — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL.pptx, pág. 176 (pág. 176)
