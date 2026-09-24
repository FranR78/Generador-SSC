---
id: ssc.techo-panoramico.ssp-168-sistema-electrico-confort
modulo: ssc
unidad: clima
nt: 515
tipo: elemento
clase: componente
titulo: "Techo panorámico deflector y corredizo"
menu: "Techo panorámico deflector y corredizo"
grupo: "Techo panoramico"
clave: techo-panoramico
area: confort-y-seguridad
sistema: "NUEVO-techo-panoramico"
forma_parte_de: confort-y-seguridad
marca: "SEAT"
fuentes: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 52-53"
relacionados: ["unidad-control-red-a-bordo"]
palabras: ["techo panoramico", "j245", "motor v1", "sensores hall", "normalizacion", "antiaprisionamiento"]
---

## Misión

Proporcionar iluminación natural y ventilación al habitáculo mediante un cristal deflector y corredizo de accionamiento eléctrico. (págs. 52-53)

## Tipos y características

Sistema electromecánico compuesto por la UCE para techo corredizo J245 (conectada al CAN-Bus Confort) y el motor eléctrico V1 como dos componentes independientes ubicados en la parte trasera del techo. (pág. 52)

## Principio de funcionamiento

El motor V1 contiene internamente 2 sensores Hall enfrentados al eje y decalados entre sí, lo que permite a la UCE J245 reconocer la posición exacta y el sentido de giro del cristal.
- Apertura y cierre: comandados desde el conmutador E8.
- Normalización: se realiza cerrando por completo el techo y manteniendo accionado el conmutador E8 en posición de cierre. Es imprescindible para habilitar las funciones confort y antiaprisionamiento.
- Apertura/cierre de confort: ejecutados por la UCE J245 tras recibir la orden de J519 conjuntamente con los elevalunas.
- Antiaprisionamiento: si detecta un obstáculo durante el cierre, invierte inmediatamente la marcha y abre el techo. Si se intenta cerrar de nuevo en los siguientes 5 segundos, la función antiaprisionamiento queda desactivada. (págs. 52-53)

## Valores de trabajo

- Intervalo de anulación del antiaprisionamiento tras reacondicionamiento: 5 segundos. (pág. 53)

## Comportamiento en avería

Si se pierde la normalización, se anulan automáticamente la apertura/cierre de confort y el antiaprisionamiento. (pág. 53)

## Mantenimiento

Realizar el proceso de normalización mediante el conmutador E8 tras intervenciones eléctricas o mecánicas. (pág. 53)

## Imágenes requeridas

- Ubicación de la UCE J245, motor V1 y conmutador E8 en el techo panorámico — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 52
