---
nt: 23
titulo: Mandos de control manual y conmutador del ventilador
codigo: Sin código documentado
menu: Mandos y reostato
grupo: Actuadores y mandos
ubicacion: Salpicadero o tablero de a bordo
fuentes: AA Automoción (Hella), págs. 143-146, Fig. 8.2.1 y 8.5.1
---

## Misión
Permitir al usuario activar el circuito de A/A, seleccionar el origen del aire (exterior
dinámico o recirculación interior) y ajustar la velocidad del electroventilador del
evaporador.

## Principio de funcionamiento
- **Mando de A/A y recirculación:** pulsadores que cierran el circuito del embrague —en
  serie con termostato y presostato— y accionan el actuador de la trampilla de aire.
- **Conmutador con reostato:** selector rotativo de contactos acoplado a un reostato
  (resistencia con varias tomas en serie) que introduce **caídas de tensión graduales** en
  el circuito del motor del ventilador.

## Características
Señal analógica por variación de tensión en el reostato, y digital en los pulsadores. El
conmutador del ventilador dispone de **5 contactos**:

| Contacto | Función |
|---|---|
| B | Alimentación desde la batería |
| C | Alimentación del termostato |
| L | Baja velocidad (LOW) |
| M | Velocidad media (MEDIUM) |
| H | Alta velocidad (HIGH) |

## Anomalías frecuentes
- Espirales del reostato quemadas o cortadas por sobreintensidad.
- Contactos fogueados o desgastados en el conmutador giratorio.

## Comportamiento en avería
- **Reostato quemado:** el ventilador deja de funcionar en las velocidades baja y media
  (L, M) y **solo funciona en la alta (H)**. Es el síntoma clásico.
- **Sin alimentación en el contacto C:** el compresor no arranca, porque no llega señal al
  termostato.

## Cómo comprobarlo
**Herramienta:** multímetro (tensión y resistencia).
**Puntos de medida:** contactos B, C, L, M y H del conmutador, y bornes del reostato.

- Verificar continuidad entre B y C al activar el selector.
- Medir el valor óhmico progresivo entre los bornes del reostato para cada velocidad.

## Imágenes requeridas
- Tipos de mandos del salpicadero — AA Automoción, pág. 143, Fig. 8.2.1
- Esquema del conmutador del ventilador con reostato — pág. 146, Fig. 8.5.1

## Advertencias
La activación del A/A exige accionar alguna velocidad del electroventilador. Si el
ventilador no gira, el compresor puede no activarse aunque el mando esté pulsado.
