---
id: ssc.recirculacion.toledo-99-clima
modulo: ssc
unidad: clima
nt: 348
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Control conjunto de las trampillas de recirculación y velocidad"
menu: "Control conjunto de las trampillas de "
grupo: "Distribución de aire"
clave: recirculacion
area: climatizacion
sistema: "distribucion-aire"
marca: "SEAT"
fuentes: "Toledo 99 CLIMA.pdf, págs. 51"
relacionados: ["servomotor-trampilla", "unidad-control-climatizador"]
palabras: ["trampilla de recirculación", "trampilla de velocidad", "motor V71", "80 km/h", "160 km/h", "aire fresco"]
---

## Objeto

Regular el paso de aire exterior y la recirculación interior mediante el accionamiento coordinado de dos trampillas con un único motor eléctrico. (pág. 51).

## Fundamento

El motor V71 desplaza los ejes de la trampilla de recirculación y de la trampilla de velocidad a través de dos guías mecánicas, modificando la posición de ambas a la vez para mantener el confort y evitar aumentos excesivos de caudal a alta velocidad. (pág. 51).

## Desarrollo

1. Modalidades de posicionamiento de las trampillas:
- Entrada de aire fresco: ambas trampillas abren completamente el paso de aire exterior al habitáculo. (pág. 51).
- Entrada de aire en función de la velocidad: la trampilla de velocidad se ajusta para evitar un aumento excesivo de caudal por la presión dinámica a altas velocidades. Se gestiona en función de la velocidad del vehículo y de la diferencia entre la temperatura solicitada y la real del habitáculo (si la diferencia térmica es grande, la trampilla se mantiene abierta para climatizar rápido). El control de esta chapaleta se activa a partir de 80 km/h; por encima de 160 km/h se cierra por completo, dejando solo una pequeña entrada residual de aire. (pág. 51).
- Recirculación activada: ambas trampillas se sitúan en la posición superior impidiendo totalmente la entrada de aire del exterior. (pág. 51).

## Valores de referencia

- Velocidad de inicio de regulación de la trampilla de velocidad: 80 km/h. (pág. 51).
- Velocidad de cierre completo de la trampilla de velocidad: 160 km/h. (pág. 51).

## Errores de concepto frecuentes

Creer que las trampillas de recirculación y de velocidad disponen de servomotores independientes; en el sistema del SEAT Toledo 99 ambas se mueven simultáneamente mediante guías accionadas por el motor V71. (pág. 51).

## Imágenes requeridas

- Esquema de las posiciones de las trampillas de velocidad y recirculación en la entrada de aire fresco, regulación por velocidad y recirculación total — Fuente: Toledo 99 CLIMA.pdf, pág. 51
