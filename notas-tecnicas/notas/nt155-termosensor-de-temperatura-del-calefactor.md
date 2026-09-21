---
id: ssc.sin-clasificar.termosensor-de-temperatura-del-calefactor
modulo: ssc
unidad: clima
nt: 155
titulo: "Termosensor De Temperatura Del Calefactor"
codigo: "G18"
ubicacion: "Alojado en la camisa de agua del calefactor de la calefacción independiente [84, 87, 91]"
aplicacion: "Control de la temperatura del líquido refrigerante dentro del calefactor [87]"
menu: "Termosensor De Temperatura Del G18"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del líquido refrigerante a la salida del calefactor para gestionar las conmutaciones entre plena carga, carga parcial y pausa de regulación [48, 87, 92].

## Principio de funcionamiento

Resistencia de coeficiente térmico (NTC/PTC) instalada en contacto térmico directo con la camisa de agua, enviando su variación de resistencia a la UCE -J364- [93].

## Características

Sensor de inmersión provisto de junta tórica de estanqueidad y cableado negro hacia las celdas 10 y 11 del conector de 14 polos [37, 91, 93].

## Valores de trabajo

- Umbral de cambio a Carga Parcial: 77 ºC [94].  
- Umbral de entrada a Pausa de Regulación: 89 ºC [48, 95, 96].  
- Temperatura crítica de desconexión por sobretemperatura: 110 ºC / 130 ºC [14, 92].  
- Umbrales de avería eléctrica: Interrupción si resistencia > 2 MΩ; Cortocircuito si resistencia < 50 Ω [93, 97].

## Anomalías frecuentes

Fugas de refrigerante por la junta tórica, derivación a masa o degradación del termistor por ciclos térmicos [91, 93].

## Comportamiento en avería

Si el sensor indica 'fallo', el calefactor se desactiva por seguridad para evitar la ebullición del agua [86, 87].

## Cómo comprobarlo

Medir la resistencia óhmica entre las celdas 10 y 11 del conector de 14 polos con un polímetro a la temperatura ambiental y comparar con la curva característica [91, 93].
