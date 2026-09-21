---
id: ssc.sin-clasificar.fotosensor-de-radiacion-solar
modulo: ssc
unidad: clima
nt: 302
titulo: "Fotosensor De Radiación Solar"
codigo: "G107"
ubicacion: "Parte superior del salpicadero"
aplicacion: "Corrección de la regulación térmica por efecto de la radiación solar directa"
menu: "Fotosensor De Radiación Solar G107"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la intensidad de la radiación solar incidente sobre los ocupantes para corregir la posición de las trampillas de mezcla y acelerar la turbina de aire.

## Principio de funcionamiento

La luz solar atraviesa un filtro protector UV y un elemento óptico e incide sobre uno o dos fotodiodos semiconductores. Al recibir luz, los fotodiodos aumentan el paso de corriente eléctrica. La UCE detecta el aumento de intensidad y refrigera más el habitáculo (o el lado expuesto en versiones dobles).

## Características

Captador óptico provisto de filtro de protección UV, elemento óptico y fotodiodos. Tipos: sensor simple (A) o sensor doble/dual para lados izquierdo y derecho (B).

## Valores de trabajo

| Estado de radiación | Comportamiento eléctrico del fotodiodo |
|---|---|
| **Sin luz / Sombra** | Paso de corriente eléctrica reducida |
| **Luz solar intensa** | Aumento proporcional del flujo de corriente |
| **Valor supletorio por avería** | Valor fijo memorizado de radiación solar |

## Anomalías frecuentes

Obstrucción óptica del sensor al colocar objetos sobre el salpicadero; fallo del fotodiodo.

## Comportamiento en avería

El climatizador no compensa el aumento de calor cuando el sol incide directamente sobre el cristal.

## Cómo comprobarlo

Verificar la variación de la corriente en el bloque de valores de medición del equipo OBD tapando y alumbrando el fotosensor con una lámpara.
