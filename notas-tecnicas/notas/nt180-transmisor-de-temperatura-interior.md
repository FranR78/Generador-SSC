---
id: ssc.sin-clasificar.transmisor-de-temperatura-interior
modulo: ssc
unidad: sin-clasificar
nt: 180
titulo: "Transmisor De Temperatura Interior"
codigo: "G56"
ubicacion: "Detrás del tablero de instrumentos, junto a la columna de dirección"
aplicacion: "Sistema Autoclima del SEAT Ibiza y Córdoba 1999"
menu: "Transmisor De Temperatura Inte G56"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura real del aire del habitáculo para permitir el cálculo de la regulación térmica en modo automático.

## Principio de funcionamiento

Resistencia de Coeficiente de Temperatura Negativo (NTC). Para garantizar que mida el aire representativo de la estancia y no la temperatura de la consola, el motor eléctrico V42 acciona una pequeña turbina que aspira aire continuo del habitáculo sobre la resistencia.

## Características

Sensor NTC térmico calibrado con un campo de medición entre -40 ºC y +85 ºC, integrado en un módulo compacto junto con la turbina V42.

## Valores de trabajo

| Parámetro | Valor de referencia | Condiciones de validez |
|---|---|---|
| **Rango de medición del sensor NTC** | **-40 ºC a +85 ºC** | Rango térmico operativo |
| **Valor sustitutivo por avería** | **22 ºC constante** | Adoptado por la UCE J255 tras detectarse fallo |

## Anomalías frecuentes

Acumulación de pelusa y polvo en el conducto de la turbina V42; interrupción o cortocircuito en la resistencia NTC.

## Comportamiento en avería

La UCE adopta el valor de 22 ºC fijo. Al seleccionar temperaturas superiores o inferiores a 22 ºC en el panel, el sistema enfría o calienta en exceso sin detenerse al no registrar la temperatura real. Todos los dígitos del display parpadean al conectar el encendido.

## Cómo comprobarlo

Consultar el bloque de valores de medición grupo 006 campo 4 mediante el equipo de diagnosis. Comprobar la resistencia NTC desconectada mediante un polímetro en escala de ohmios a temperatura ambiente.
