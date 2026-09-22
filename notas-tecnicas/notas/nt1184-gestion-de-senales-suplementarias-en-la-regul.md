---
id: ssc.sin-clasificar.gestion-de-senales-suplementarias-en-la-regulacion-del-climatizador
modulo: ssc
unidad: sin-clasificar
nt: 1184
tipo: proceso
subtipo: fundamento
titulo: "Gestión De Señales Suplementarias En La Regulación Del Climatizador"
menu: "Gestión De Señales Suplementarias En L"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la procedencia, función y lógica de control de las señales suplementarias (tiempo en parado th, velocidad de marcha v y régimen del motor n) retransmitidas desde otras unidades de control (cuadro de instrumentos y UCE del motor) hacia la UCE del climatizador. Aplica a la regulación electrónica del sistema de climatización automática.

## Fundamento

Las señales suplementarias intervienen en la regulación del climatizador aportando datos operativos del vehículo que no son captados por los sensores propios del circuito frigorífico. Permiten ajustar la posición de las chapaletas de temperatura y velocidad y gestionar el acoplamiento del compresor, mejorando el confort de los ocupantes y evitando alteraciones en la regulación por calor radiado o variaciones de presión dinámica.

## Condiciones previas

Encendido conectado o motor en marcha, con la red de comunicación interconectada entre la UCE del climatizador, la UCE del motor y el cuadro de instrumentos.

## Desarrollo

* **1. Señal de tiempo en parado (th):**
  - *Origen y definición:* Se contabiliza desde que se desconecta el encendido hasta que se vuelve a arrancar el motor.
  - *Lógica de control:* La UCE del climatizador la utiliza para regular la posición de la chapaleta de temperatura. Tras un nuevo arranque, la unidad procesa los valores de temperatura exterior memorizados antes de la parada del motor. De este modo, la regulación no se ve alterada por las desviaciones que causa el calor radiado del motor en parado, logrando una regulación más rápida a temperaturas agradables y evitando un enfriamiento excesivo.
* **2. Señal de velocidad de marcha (v):**
  - *Origen y definición:* Procede del transmisor para el velocímetro a través del cuadro de instrumentos.
  - *Lógica de control:* Gestiona el funcionamiento de la chapaleta de velocidad (entrada de aire fresco). A velocidades elevadas del vehículo, la UCE reduce la sección de paso del canal de aire fresco para compensar el aumento de la presión dinámica exterior, manteniendo prácticamente invariable la cantidad de aire que ingresa en el habitáculo.
* **3. Señal de régimen del motor (n):**
  - *Origen y definición:* Procede de la UCE del motor o del cuadro de instrumentos.
  - *Lógica de control:* Informa en tiempo real sobre el funcionamiento del motor térmico. Se utiliza para la regulación de seguridad del acoplamiento electromagnético del compresor. Si se ausenta la señal de régimen (por ejemplo, con el motor parado o calado), la UCE desactiva inmediatamente el compresor.

## Valores de referencia

| Señal Suplementaria | Procedencia de la Señal | Destino / Actuador Gobernado | Condición y Efecto en la Regulación |
| :--- | :--- | :--- | :--- |
| **Tiempo en parado (th)** | Cuadro de instrumentos | Chapaleta de temperatura | Procesa la temperatura exterior memorizada previa a la parada al volver a arrancar |
| **Velocidad de marcha (v)** | Transmisor para velocímetro | Chapaleta de velocidad | Reduce la sección de entrada de aire fresco a altas velocidades del vehículo |
| **Régimen del motor (n)** | UCE del motor / Cuadro | Acoplamiento electromagnético del compresor | Desconecta el compresor si falta la señal de régimen n (motor parado o calado) |

## Interpretación y errores frecuentes

* Interpretar un aumento excesivo de caudal de aire en el habitáculo al circular a alta velocidad como un fallo del ventilador; la causa real suele ser la falta de señal de velocidad de marcha v o el agarrotamiento mecánico de la chapaleta de velocidad.
* Diagnosticar la falta de activación del compresor como una avería interna del acoplamiento electromagnético; la causa puede ser la ausencia de recepción de la señal de régimen del motor n en la UCE del climatizador.

## Verificación final

Verificar mediante el equipo de diagnosis en los bloques de valores de medición de la UCE del climatizador la recepción correcta de los parámetros th, v y n, y comprobar el movimiento de las chapaletas de temperatura y velocidad durante las pruebas funcionales.

## Imágenes requeridas

- Esquema de transmisión de señales suplementarias (th, v, n) entre el cuadro de instrumentos, la UCE del motor y la UCE del climatizador — Fuente: SEÑALES SUPLEMENTARIAS.pdf, pág. 50
