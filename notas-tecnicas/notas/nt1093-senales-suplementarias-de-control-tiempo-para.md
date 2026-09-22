---
id: ssc.sin-clasificar.senales-suplementarias-de-control-tiempo-parado-velocidad-y-revoluciones
modulo: ssc
unidad: sin-clasificar
nt: 1093
tipo: proceso
subtipo: fundamento
titulo: "Señales Suplementarias De Control (Tiempo Parado, Velocidad Y Revoluciones)"
menu: "Señales Suplementarias De Control (Tie"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la función de las señales de tiempo parado (Tp), velocidad de marcha (v) y régimen del motor (n) en la optimización del confort y la protección del compresor.

## Fundamento

Intercambio de datos a través de la red CAN-Bus entre la UCE del climatizador, el Cuadro de instrumentos, el ABS y la UCE del motor para adaptar la masa de aire de entrada y evitar pérdidas de potencia o sobreenfriamientos tras el arranque.

## Desarrollo

* **Tiempo del vehículo parado (Tp):** Medido desde el corte de encendido. Al arrancar de nuevo, la UCE mantiene los valores de temperatura previos a la parada para evitar el sobreenfriamiento inicial que provocaría el calor radiado en el vano motor.
* **Velocidad de marcha (v):** Procedente del ABS/velocímetro. Al aumentar la velocidad del vehículo, la UCE reduce progresivamente la sección de la chapaleta de velocidad para compensar la presión dinámica y mantener constante el caudal de aire introducido.
* **Régimen de revoluciones (n):** Procedente de la UCE de motor. El compresor no se acopla hasta que el ralentí se estabiliza, se desactiva con el motor parado y se desconecta durante unos segundos al acelerar a fondo (kick-down/adelantamiento) para ofrecer la máxima potencia.

## Interpretación y errores frecuentes

* No aplica.
