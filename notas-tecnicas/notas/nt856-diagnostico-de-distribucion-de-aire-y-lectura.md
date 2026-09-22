---
id: ssc.sin-clasificar.diagnostico-de-distribucion-de-aire-y-lectura-de-bloques-de-medicion
modulo: ssc
unidad: sin-clasificar
nt: 856
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Distribución De Aire Y Lectura De Bloques De Medición"
menu: "Diagnóstico De Distribución De Aire Y "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Detalla el procedimiento para diagnosticar fallos en la distribución del caudal de aire (ej. cuando no sale aire por la zona de los pies) evaluando las funciones "02" y "08" del lector de averías. Aplica a SEAT Córdoba Vario '99 e Ibiza '99 con autoclima.

## Fundamento

La orientación del aire se realiza mediante la distribución mecánica por cable o servomotores y la monitorización de sensores. Las funciones de autodiagnóstico 02 (memoria de averías) y 08 (bloques de valores de medición) permiten aislar el fallo eléctrico o mecánico.

## Condiciones previas

Contacto conectado (+15) y turbina de aire en funcionamiento.

## Equipo y material

Lector de averías VAG 1551 o equivalente.

## Desarrollo

* **Síntoma:** El aire acondicionado/calefacción funciona pero el caudal nunca sale por los difusores de los pies.
* **Componentes que pueden provocar la avería:**
  - Mando giratorio o cable Bowden de distribución de aire suelto/roto.
  - Potenciómetro de la distribución de aire.
  - Chapaletas de distribución de aire atascadas dentro de la caja climática.
  - Transmisor de temperatura del difusor del reposapiés G192.
  - Unidad de control del autoclima.
* **Procedimiento con el lector de averías:**
  1. Acceder a la dirección 08 (Climatizador) e interrogar la memoria de averías con la **función "02"**.
  2. Leer las averías registradas para verificar si existe un fallo en G192, potenciómetro de distribución o la propia UCE.
  3. Acceder a la **función "08" (Leer bloque de valores de medición)** y revisar secuencialmente los grupos del 001 al:
     - Grupo: Estado de salidas y señales principales.
     - Grupo: Posiciones del motor de temperatura V68.
     - Grupo 003 y: Estado de los pulsadores y porcentaje de posición de distribución (0 a 100%).
     - Grupo: Tensiones solicitadas y reales de la turbina V2.
     - Grupo: Lecturas de temperatura de G17, G191, G192 y G56.
  4. Analizar los valores fuera de tolerancia en el Grupo 004 (posición de distribución) y Grupo 006 (temperatura en pies G192).

## Valores de referencia

| Grupo en Función "08" | Campo Analizado | Parámetro Esperado |
| :--- | :--- | :--- |
| Grupo 004 | Campo 4 (Posición distribución) | Variación entre 0% y 100% al girar el mando |
| Grupo 006 | Campo 3 (Temp. reposapiés G192) | Valor en ºC acorde a la temperatura del caudal inferior |

## Interpretación y errores frecuentes

* Si en el Grupo 004 campo 4 el porcentaje varía de 0 a 100% pero el aire no sale por los pies, el fallo es puramente mecánico (cable Bowden soltado o trampilla atascada).
* Si el porcentaje no varía al girar la rueda, el fallo es eléctrico en el potenciómetro de distribución o en el cableado hacia la UCE.

## Verificación final

Verificar físicamente la salida de caudal de aire caliente/frío por los difusores de los pies al seleccionar la posición correspondiente en el mando.
