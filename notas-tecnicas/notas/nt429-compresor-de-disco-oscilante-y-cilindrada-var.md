---
id: ssc.sin-clasificar.compresor-de-disco-oscilante-y-cilindrada-variable
modulo: ssc
unidad: sin-clasificar
nt: 429
titulo: "Compresor De Disco Oscilante Y Cilindrada Variable"
ubicacion: "Compartimento motor, accionado por la correa Poly-V del cigüeñal"
aplicacion: "Generación de alta presión en el circuito frigorífico"
menu: "Compresor De Disco Oscilante Y Cilindr"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Aspirar el refrigerante gaseoso a baja presión procedente del evaporador, comprimirlo e impulsarlo como vapor caliente hacia el condensador.

## Principio de funcionamiento

Transforma el movimiento rotativo del eje en carrera axial de pistones (de 3 a 10 émbolos) mediante un disco oscilante. En compresores autorregulados, la variación de la inclinación del disco modifica la carrera de los émbolos (cilindrada variable de ~5 % a 100 %) según el equilibrio de presiones entre la alta, la baja y la cámara interna del cárter gestionada por la válvula reguladora.  
En el compresor Denso 6SEU12 de regulación externa (sin embrague), la UCE controla una electroválvula a 400 Hz (señal PWM) para modificar la presión del cárter y ajustar la cilindrada libremente hasta el 0 %.

## Características

Cuerpo de aluminio con válvula de alivio de sobrepresión integrada. Incorpora carril/patín de deslizamiento, cubos, muelles recuperadores y disco oscilante. En el 6SEU12: polea con protección de sobrecarga de goma/grafito de rotura programada en caso de gripado.

## Valores de trabajo

| Parámetro / Componente | Valor de trabajo | Condiciones de validez |
|---|---|---|
| **Frecuencia de válvula Denso 6SEU12** | **400 Hz** | Señal PWM de la UCE |
| **Margen de cilindrada variable** | **5 % (o < 2 % en Denso) a 100 %** | Según demanda frigorífica |
| **Régimen de giro del compresor** | **0 a 6.000 rpm** | Según régimen de motor |

## Anomalías frecuentes

Gripado mecánico por falta de lubricante; daños en válvulas por "golpe de ariete" al aspirar refrigerante líquido; atascamiento de la válvula reguladora por suciedad.

## Comportamiento en avería

Falta de compresión (presiones de alta y baja igualadas) o desconexión física de la polea por rotura de la goma de protección en caso de bloqueo.

## Cómo comprobarlo

Medir presiones con puente de manómetros, verificar la señal PWM de 400 Hz en la electroválvula de control y comprobar el giro libre de la polea.
