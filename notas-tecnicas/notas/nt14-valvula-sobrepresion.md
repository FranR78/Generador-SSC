---
id: ssc.clima.valvula-de-descarga-por-sobrepresion
modulo: ssc
unidad: clima
nt: 14
titulo: Válvula de descarga por sobrepresión
codigo: Sin código documentado
menu: Válvula de sobrepresión
grupo: Sensores de presión
ubicacion: Salida de alta del compresor, o en el depósito de líquido
fuentes: Dashboard Sensores VAG, pág. 86
---

## Misión
Dispositivo de **seguridad mecánica extrema**: abre el circuito a la atmósfera para liberar
presión y evitar la explosión del sistema. Antiguamente consistía en un precinto de ruptura.

## Principio de funcionamiento
Un muelle calibrado mantiene cerrado el paso. Al superarse la presión de tarado, la fuerza
del refrigerante vence al muelle y abre el conducto de descarga.

## Características
Suele incorporar un precinto de plástico o aluminio que **revienta al activarse**, lo que
permite saber a simple vista que la válvula ha actuado.

## Valores de trabajo
| Evento | Presión |
|---|---|
| Apertura | ≈ **38 bar** (3,8 MPa) |
| Cierre | **30 a 35 bar** (3,0 a 3,5 MPa) |

## Anomalías frecuentes
Actuación por obstrucción del circuito, condensador tapado o fallo del electroventilador,
que disparan la alta presión.

## Comportamiento en avería
Si el precinto ha saltado, el circuito habrá perdido refrigerante y el equipo no enfría.

## Cómo comprobarlo
Inspección visual del precinto. Si ha actuado, **es obligatorio vaciar el circuito antes de
sustituir la válvula** y localizar la obstrucción que causó el pico de presión: no basta con
cambiar la válvula y recargar.

## Imágenes requeridas
- Sección del compresor mostrando la válvula de seguridad — Dashboard Sensores, pág. 86

## Advertencias
La válvula solo debe sustituirse con el sistema completamente vacío.
