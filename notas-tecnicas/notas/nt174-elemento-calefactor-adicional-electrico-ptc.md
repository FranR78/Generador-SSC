---
id: ssc.sin-clasificar.elemento-calefactor-adicional-electrico-ptc
modulo: ssc
unidad: clima
nt: 174
titulo: "Elemento Calefactor Adicional Eléctrico (Ptc)"
codigo: "Z35"
ubicacion: "Montado en el módulo del climatizador, directamente detrás del radiador de calefacción de agua"
aplicacion: "Exclusivo para vehículos con motor Diésel (TDI) sin calefacción independiente. *(En motores de gasolina se instala un \"cuerpo lobular\" de plástico para mantener idéntica aerodinámica)*"
menu: "Elemento Calefactor Adicional  Z35"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Suministrar calefacción eléctrica inmediata al habitáculo tras el arranque en frío en motores diésel de alta eficiencia y bajo desprendimiento térmico.

## Principio de funcionamiento

Radiador eléctrico compuesto por elementos de resistencia de coeficiente de temperatura positivo (PTC). A baja temperatura, su resistencia eléctrica es reducida y absorbe la máxima corriente; a medida que se calienta, su resistencia sube autorregulando el calor. Es gestionado por la UCE del motor en 3 etapas mediante dos relés (J359 para baja potencia y J360 para alta potencia) tras recibir la demanda de J255.

## Características

- Potencia calorífica máxima: **1.000 W** (al activar las 3 etapas).  
- Tres bornes de alimentación eléctrica (contactos A, B y C) y masa común.

## Valores de trabajo

| Etapa de potencia | Relés activados / Bornes | Potencia entregada |
|---|---|---|
| **Etapa 1 (Baja)** | Relé J359 en Borne A | ~330 W |
| **Etapa 2 (Media)** | Relé J360 en Bornes B y C | ~660 W |
| **Etapa 3 (Alta)** | Relés J359 y J360 en A, B y C | 1.000 W |
| **Condiciones de activación J255** | Motor > 8 s y > 500 rpm; Temp. motor < 75 ºC; Temp. ext. < 8 ºC; Batería > 12,2 V | Carga alternador C < 30-77% |

## Anomalías frecuentes

Fogueo de contactos en los relés J359/J360; o inhibición de la activación por batería baja o sobrecarga del alternador (> 95%).

## Comportamiento en avería

Falta de calefacción en el habitáculo durante los primeros minutos de marcha en invierno con el motor diésel frío.

## Cómo comprobarlo

Consultar la solicitud en el bloque de valores 047 campo 1 en J255 (debe marcar solicitud activa). Consultar en la UCE del motor (dirección 01) la activación de los relés J359 y J360 y medir la corriente absorbida con pinza amperimétrica en los cables A, B y C (hasta ~80 A a plena potencia).

## Imágenes requeridas

- Esquema interno de las resistencias PTC del elemento calefactor adicional Z35 y bornes de conexión A, B, C — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 160
