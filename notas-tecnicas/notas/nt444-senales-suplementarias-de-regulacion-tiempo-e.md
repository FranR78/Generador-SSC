---
id: ssc.sin-clasificar.senales-suplementarias-de-regulacion-tiempo-en-parado-velocidad-y-regimen
modulo: ssc
unidad: sin-clasificar
nt: 444
tipo: proceso
subtipo: fundamento
titulo: "Señales Suplementarias De Regulación (Tiempo En Parado, Velocidad Y Régimen)"
menu: "Señales Suplementarias De Regulación ("
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la influencia de las señales suplementarias externas en el algoritmo de confort térmico del climatizador.

## Fundamento

Otras unidades de control del vehículo transmiten parámetros de conducción hacia la UCE del climatizador a través de cableado directo o bus CAN para prevenir incorrecciones por calor radiado o cambios de caudal dinámico.

## Condiciones previas

Vehículo en marcha o fase de re-arranque.

## Desarrollo

- **Señal de tiempo en parado (th):** Mide el tiempo desde que se apaga el encendido hasta el nuevo arranque. Evita que la UCE tome lecturas falsas de temperatura exterior causadas por el calor radiado del motor parado.  
- **Señal de velocidad de marcha (v):** A altas velocidades, la UCE reduce la sección de paso de la trampilla de velocidad V71 para mantener constante el caudal de aire entrante al habitáculo.  
- **Señal de régimen del motor (n):** Informa del funcionamiento del motor térmico. Si la señal de régimen desaparece, la UCE desconecta inmediatamente el acoplamiento N25 por seguridad.

## Interpretación y errores frecuentes

- Si falla la señal de régimen del motor (n), el compresor no se acopla aunque la tecla A/C esté pulsada.

## Verificación final

Verificar en la diagnosis la correcta recepción de las señales de velocidad y revoluciones.

## Imágenes requeridas

- Esquema de interconexión de señales suplementarias entre cuadro, motor y climatizador — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 58
