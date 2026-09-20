---
id: ssc.clima.gestion-de-senales-suplementarias-via-can-bus
modulo: ssc
unidad: clima
nt: 47
tipo: proceso
subtipo: fundamento
titulo: "Gestión De Señales Suplementarias Vía Can-Bus"
menu: "Gestión De Señales Suplementarias Vía "
grupo: Regulación y control
fuentes: "13. Climatización Electrónica.pdf, pág. 98-113"
---

## Objeto y alcance

Describir la integración y el efecto de las magnitudes físicas del vehículo (revoluciones del motor, velocidad de marcha, tiempo de parada y carga del alternador) en la regulación de la climatización electrónica. Se aplica para comprender las funciones de protección y confort coordinadas entre la UCE del climatizador y otras UCEs.

## Fundamento

Para lograr una regulación de temperatura precisa e interactuar con la dinámica del vehículo, la UCE del climatizador procesa informaciones transmitidas por la red CAN-Bus de confort. Estas señales permiten optimizar el caudal según la velocidad (compensando la presión dinámica), proteger la batería y el alternador frente a sobrecargas eléctricas, evitar enfriamientos térmicos desagradables tras paradas cortas y asegurar la máxima potencia del motor térmico en situaciones de fuerte aceleración.

## Condiciones previas

* Red multiplexada CAN-Bus de confort totalmente operativa.  
* Motor térmico en marcha con comunicación de UCEs activa.

## Equipo y material

* UCE del climatizador, UCE del motor, UCE de red de a bordo y Cuadro de instrumentos.  
* Analizador de red CAN-Bus / Osciloscopio / Equipo de diagnosis OBD.

## Desarrollo

La gestión de las señales suplementarias se articula según la siguiente lógica:

1. **Señal de tiempo parado (T_p):** Mide el tiempo desde la desconexión del encendido hasta el nuevo arranque. En paradas cortas, la UCE memoriza la temperatura exterior previa para evitar que el calor radiado en el vano motor sobreenfríe el habitáculo en el rearranque.  
2. **Señal de velocidad de marcha (v):** Transmitida desde el ABS/cuadro de instrumentos a la UCE del climatizador. Al aumentar la velocidad del vehículo, la UCE reduce progresivamente la sección de paso de la chapaleta de velocidad para mantener un caudal de entrada constante.  
3. **Señal de régimen de revoluciones (n):** Emitida por la UCE del motor. Condiciona el acoplamiento del compresor: no permite su conexión si el motor está parado o si el ralentí no está estabilizado. Asimismo, al detectar una aceleración a fondo (kick-down), desacopla el compresor durante unos segundos para entregar la máxima potencia del motor.  
4. **Señal de carga del alternador (Borne L / +/DF):** Elaborada por el alternador hacia la UCE de red de a bordo. Si la carga eléctrica supera el límite máximo prefijado, la UCE de red de a bordo vuelca un mensaje al CAN-Bus; la UCE del climatizador desconecta el compresor y los electroventiladores para evitar la descarga de la batería.

## Valores de referencia

| Señal / Parámetro | Emisor / Origen | Efecto en la UCE del climatizador |
|---|---|---|
| Tiempo parado (T_p) | Cuadro de instrumentos / UCE Clima | Mantiene valores térmicos previos para evitar sobreenfriamiento |
| Velocidad de marcha (v) | ABS / Cuadro de instrumentos | Ajusta chapaleta de velocidad para constante caudal |
| Revoluciones motor (n) | UCE del motor | Acopla en ralentí estable; desacopla en aceleración a fondo |
| Carga alternador (L / DF) | Alternador -> UCE Red de a bordo | Desconecta compresor y ventiladores ante límite de carga |

## Interpretación y errores frecuentes

* **Ausencia de señal de carga del alternador:** La función de protección no se ejecuta, quedando desactivada sin función de emergencia.  
* **Ausencia de señal de régimen del motor:** Impide la conexión del acoplamiento magnético o electroválvula del compresor.  
* **Fallo de señal de velocidad:** Ocasiona fluctuaciones molestas en el caudal de aire que entra al habitáculo a altas velocidades.

## Verificación final

Comprobar mediante el equipo de diagnosis en la UCE del climatizador la recepción en tiempo real de los parámetros de revoluciones del motor, velocidad del vehículo, estado de carga del alternador y tiempo de parada.

## Seguridad y normativa

Priorización de la disponibilidad de potencia del motor térmico en maniobras de adelantamiento y protección del sistema eléctrico del vehículo contra descargas severas.

## Imágenes requeridas

- Diagrama de bloques de intercambio de datos entre la UCE del climatizador, UCE del motor, Cuadro de instrumentos y UCE de red de a bordo a través del CAN-Bus — Fuente: 13. Climatización Electrónica.pdf, pág. 109
