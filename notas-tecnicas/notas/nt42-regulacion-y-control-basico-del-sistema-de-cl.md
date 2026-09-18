---
nt: 42
tipo: proceso
subtipo: fundamento
titulo: "Regulación Y Control Básico Del Sistema De Climatización"
menu: "Regulación Y Control Básico Del Sistem"
grupo: Regulación y control
fuentes: "5. Sistemas de Aire Acondicionado.pdf, pág. 44-46"
---

## Objeto y alcance

Describir la lógica de control eléctrico y electrónico que gobierna el acoplamiento y la protección del sistema de aire acondicionado. Se aplica para comprender cómo interactúan los sensores, relés, interruptores y la UCE del motor para autorizar el funcionamiento del circuito frigorífico.

## Fundamento

Además del circuito hidráulico, el climatizador requiere una serie de elementos eléctricos y electrónicos de control. El sistema condiciona el funcionamiento del compresor al cumplimiento estricto de parámetros de seguridad (refrigeración adecuada del motor, ventilación del evaporador para evitar congelación y marcha estable del motor de combustión).

## Condiciones previas

* Accionamiento del interruptor del AC por el conductor.  
* Funcionamiento de la turbina de aire fresco como mínimo a velocidad lenta.  
* Motor térmico en marcha con ralentí regular.

## Desarrollo

Secuencia y lógica de funcionamiento de la regulación:

1. **Conexión del usuario e impulso de aire:** El interruptor activa el sistema, exigiendo que la turbina gire al menos a velocidad lenta. La turbina fuerza el paso de aire por el evaporador para enfriarlo y deshidratarlo.  
2. **Autorización por UCE de motor:** La UCE del motor conecta el compresor solo cuando el motor gira regularmente al ralentí, y lo desconecta en aceleraciones bruscas.  
3. **Gestión de la compresión:** La UCE o la electrónica activa el acoplamiento magnético del compresor (o la electroválvula en compresores variables).  
4. **Control de presiones y ventilación:** El conmutador de presión (trinaria o MAP) mide la alta presión para gestionar el arranque y parada del compresor. El electroventilador de refrigeración arranca a velocidad lenta al encender el AC y conmuta a una velocidad más rápida si la presión sube. En caso de sobrepresión puntual, la válvula de descarga libera el exceso.  
5. **Protecciones de seguridad:** La sonda del evaporador desconecta el compresor ante el riesgo de hielo en el evaporador (en sistemas de compresor fijo). La sonda NTC del motor desconecta el AC si la temperatura del motor sobrepasa los límites de seguridad.

## Valores de referencia

Elemento / Condición,Parámetro de activación / Lógica  
Turbina de aire fresco,Mínimo en velocidad lenta para permitir la conexión eléctrica del AC 9  
Electroventilador de refrigeración,Vel. lenta activa al encender el AC; vel. rápida activa al subir la presión en el circuito 10  
UCE de motor,Conecta tras estabilizar ralentí; desconecta en aceleración brusca 12

## Interpretación y errores frecuentes

* Si la turbina de aire fresco no funciona, el compresor no se acopla para evitar la congelación del evaporador.  
* Si el motor alcanza una temperatura crítica, el sistema corta el AC para priorizar la refrigeración del motor de combustión.  
* En caso de sobrepresión peligrosa puntual, actúa la válvula de descarga del compresor.

## Verificación final

Comprobar el acoplamiento inmediato del embrague magnético al presionar el botón de AC (con turbina en velocidad 1 o superior), el arranque simultáneo del electroventilador a velocidad lenta y su desacoplamiento al acelerar a fondo o simular sobretemperatura del motor.

## Imágenes requeridas

- Esquema de la configuración básica para la regulación del sistema con 11 elementos de control — Fuente: 5. Sistemas de Aire Acondicionado.pdf, pág. 46
