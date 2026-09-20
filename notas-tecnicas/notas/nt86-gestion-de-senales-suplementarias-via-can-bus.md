---
id: ssc.clima.gestion-de-senales-suplementarias-via-can-bus.2
modulo: ssc
unidad: clima
nt: 86
tipo: proceso
subtipo: fundamento
titulo: "Gestión De Señales Suplementarias Vía Can-Bus"
menu: "Gestión De Señales Suplementarias Vía "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la función de las señales de tiempo parado (Tp), velocidad de marcha (v) y revoluciones del motor (n) en la climatización electrónica.

## Fundamento

La UCE del climatizador utiliza informaciones transmitidas por la red CAN-Bus de confort para optimizar la regulación de temperatura, mantener un caudal constante y entregar la máxima potencia del motor al acelerar.

## Condiciones previas

* Red CAN-Bus de confort operativa.  
* Comunicación entre UCEs activa.

## Equipo y material

* UCE del motor, UCE del climatizador, UCE de instrumentos, UCE de ABS y red CAN-Bus.  
* Equipo de diagnosis OBD / Analizador CAN-Bus.

## Desarrollo

1. **Señal de tiempo parado (Tp):** Tiempo con el encendido desconectado. En un nuevo arranque, la UCE mantiene los valores de temperatura exterior previos para evitar enfriamientos excesivos provocados por el calor radiado del motor.  
2. **Señal de velocidad de marcha (v):** Emitida por el ABS/velocímetro al cuadro y por CAN al clima. Al aumentar la velocidad, se reduce el paso de la chapaleta de velocidad para mantener un caudal constante de entrada de aire.  
3. **Señal de régimen de revoluciones (n):** Transmitida desde la UCE de motor. Impide la conexión del compresor con el motor parado o sin ralentí estabilizado, y desacopla el compresor durante unos segundos al pisar el acelerador a fondo para disponer de toda la potencia en adelantamientos.

## Valores de referencia

| Señal | Origen | Función en UCE del climatizador |
| ----- | ----- | ----- |
| Tiempo parado (Tp) | Cuadro de instrumentos | Evita sobreenfriamiento en rearranques tras paradas breves |
| Velocidad de marcha (v) | ABS / Cuadro de instrumentos | Modifica la chapaleta de velocidad para mantener caudal constante |
| Revoluciones motor (n) | UCE del motor | Autoriza el compresor en ralentí estable y desconecta en kick-down |

## Interpretación y errores frecuentes

La falta de señal de revoluciones impide la conexión del compresor; la falta de señal de velocidad provoca variaciones bruscas de caudal a altas velocidades.

## Verificación final

Verificación con equipo de diagnosis de los bloques de valores de velocidad, régimen de motor y tiempo de parada recibidos por el CAN-Bus.

## Seguridad y normativa

Priorización de la potencia total del motor en maniobras de adelantamiento.

## Imágenes requeridas

- Diagrama de intercambio de datos entre UCE del cuadro de instrumentos, UCE del climatizador y UCE del motor mostrando las señales Tp, n y v — Fuente: 13. Climatización Electrónica.pdf, pág. 109
