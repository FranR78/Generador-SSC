---
id: ssc.sin-clasificar.transmisor-de-temperatura-del-evaporador
modulo: ssc
unidad: sin-clasificar
nt: 288
titulo: "Transmisor De Temperatura Del Evaporador"
codigo: "G153"
ubicacion: "Pinchado entre las aletas de refrigeración del evaporador"
aplicacion: "Protección contra la congelación del agua condensada en el evaporador"
menu: "Transmisor De Temperatura Del  G153"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Captar la temperatura del núcleo del evaporador para desconectar el compresor antes de que se forme un bloque de hielo sobre las aletas.

## Principio de funcionamiento

Sensor NTC o conmutador termostático. Informa a la UCE del climatizador. Si la temperatura del evaporador cae hasta el umbral de congelación, la UCE interrumpe la corriente al acoplamiento N25. Al subir la temperatura, vuelve a autorizar la conexión.

## Características

Sonda NTC de varilla o capilar termostático de inserción directa.

## Valores de trabajo

| Parámetro / Función | Valor numérico | Acción resultante |
|---|---|---|
| **Desconexión del compresor** | **-1 ºC a 0 ºC** | Desactiva el embrague N25 por hielo |
| **Reconexión del compresor** | **+3 ºC** | Restablece el acoplamiento N25 |

## Anomalías frecuentes

Descalibración de la resistencia NTC; desacoplamiento físico de las aletas del evaporador.

## Comportamiento en avería

Congelación total del evaporador que obstruye el flujo de aire al habitáculo, o desconexión ininterrumpida del compresor.

## Cómo comprobarlo

Medir la resistencia del sensor NTC a diferentes temperaturas con un multímetro y verificar los umbrales de corte (-1 ºC) y reconexión (+3 ºC).
