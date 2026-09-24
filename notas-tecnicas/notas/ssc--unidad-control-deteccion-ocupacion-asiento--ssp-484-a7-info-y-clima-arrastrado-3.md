---
id: ssc.unidad-control-deteccion-ocupacion-asiento.ssp-484-a7-info-y-clima-arrastrado-3
modulo: ssc
unidad: clima
nt: 334
tipo: elemento
clase: componente
titulo: "Unidad de control para la detección de ocupación del asiento J706"
codigo: "J706"
menu: "Unidad de control para la dete J706"
grupo: "Seguridad pasiva"
clave: unidad-control-deteccion-ocupacion-asiento
area: confort-y-seguridad
sistema: "NUEVO-seguridad-pasiva"
forma_parte_de: sistema-airbag
marca: "Audi"
fuentes: "SSP 484 A7 Info y Clima (arrastrado) 3.pdf, págs. 22-23"
relacionados: ["sensor-ocupacion-asiento-g128", "unidad-control-airbag-j234"]
palabras: ["J706", "detección de ocupación", "bus LIN", "cable coaxial", "desactivación de airbag"]
---

## Misión

Detectar la ocupación del asiento del acompañante y determinar si está ocupado por una silla infantil o por un adulto, transmitiendo esta información a la unidad de control del airbag J234 para activar o desactivar el airbag frontal del acompañante. (págs. 22-23).

## Tipos y características

Unidad de control electrónica montada debajo del asiento del acompañante delantero. Existen diferentes tipos de asientos y diferentes módulos de control de reconocimiento de ocupación, contando cada uno con un software adaptado específicamente a cada tipo de asiento. Se conecta mediante un cable coaxial con el sensor de ocupación G128 y mediante bus LIN con la unidad de control del airbag J234. (págs. 22-23).

## Principio de funcionamiento

Mide de forma cíclica la variación de la capacidad eléctrica (capacitancia) del sensor del asiento G128. En función de este cambio de capacidad, determina si el asiento está ocupado por un adulto o por un asiento infantil. Envía esta información a través del bus LIN a la unidad de control del airbag J234, la cual activa o desactiva el airbag del acompañante e ilumina el testigo de advertencia de airbag del acompañante desactivado K145. (págs. 22-23).

## Cómo comprobarlo

Consultar la Localización Guiada de Averías (Guided Fault Finding), el catálogo ETKA y la información técnica de servicio electrónica actual. (pág. 23).

## Imágenes requeridas

- Esquema de la unidad de control J706 bajo el asiento del acompañante, conectada al sensor G128, unidad J234 y testigo K145 — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 22
