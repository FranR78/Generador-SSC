---
id: ssc.sin-clasificar.sondas-de-temperatura-y-sensores-del-climatizador
modulo: ssc
unidad: sin-clasificar
nt: 422
titulo: "Sondas De Temperatura Y Sensores Del Climatizador"
ubicacion: "Diversos puntos del habitáculo, canalizaciones y exterior"
aplicacion: "Sensores de entrada de la UCE de climatización"
menu: "Sondas De Temperatura Y Sensores Del C"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir las variables físicas de temperatura, radiación solar y presión e informar a la UCE para la gestión del confort.

## Principio de funcionamiento

- **Sondas NTC:** Termistores cuya resistencia disminuye al aumentar la temperatura.  
- **Fotosensor (G107):** Capta la intensidad de la radiación solar.  
- **Sonda Interior (G56 con V42):** Incluye un micro-ventilador (V42) que aspira el aire del habitáculo a través de una rejilla sobre el elemento sensor para evitar mediciones falsas por el calor del salpicadero.

## Características y códigos de componentes

- **Sonda de temperatura de agua:** Corta el climatizador si el refrigerante del motor alcanza temperaturas excesivamente altas.  
- **G17:** Termosensor de temperatura exterior. Corta el compresor si la temperatura exterior es muy baja.  
- **G89:** Termosensor en el conducto de aspiración de aire fresco.  
- **G263:** Sonda antihielo del evaporador.  
- **G150 / G151:** Transmisores de salida en aireadores izquierdo y derecho.  
- **G192:** Transmisor de temperatura en la salida del vano reposapiés.  
- **G56 / V42:** Sonda de salpicadero con microventilador de aspiración.

## Valores de trabajo

| Curva de características NTC (Sonda de agua) | Resistencia eléctrica (Ohmios) |
|---|---|
| **A 50 ºC** | **~ 1700 Ω** |
| **A 80 ºC** | **~ 600 Ω** |
| **A 110 ºC** | **~ 200 Ω** |
| **A 130 ºC** | **~ 100 Ω** |

## Anomalías frecuentes

Bloqueo del rotor del microventilador V42 por suciedad o pelusa; descalibración de la resistencia NTC.

## Comportamiento en avería

La UCE utiliza valores supletorios de emergencia o inhabilita el compresor.

## Cómo comprobarlo

Medir resistencia con multímetro a diferentes temperaturas y verificar curva de comportamiento.
