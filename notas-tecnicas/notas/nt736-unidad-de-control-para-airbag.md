---
id: ssc.sin-clasificar.unidad-de-control-para-airbag
modulo: ssc
unidad: sin-clasificar
nt: 736
titulo: "Unidad De Control Para Airbag"
codigo: "J234"
ubicacion: "Entre los asientos delanteros, alojada debajo de la consola central"
aplicacion: "Sistema de protección y retención de ocupantes del Audi A4 2008"
menu: "Unidad De Control Para Airbag J234"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Detectar desaceleraciones por colisión, evaluar la información de los sensores periféricos de impacto y posición, y activar pirotécnicamente los pretensores, airbags adaptativos y el fusible de la batería.

## Principio de funcionamiento

Procesa continuamente las señales de los acelerómetros internos y de los sensores externos de colisión lateral (puertas G179/G180 y pilares C G256/G257) y frontal (Upfront G283/G284). Según la gravedad del impacto y la distancia del asiento leída por los sensores G553/G554, calcula el instante exacto de disparo de los detonadores adaptativos.

## Características

Unidad electrónica de control con sensores de aceleración integrados, conectores de alta seguridad y gestión de diagnóstico a través del CAN-Bus.

## Valores de trabajo

* Tensión de alimentación: Tensión de red de a bordo (12 V).
* Comunicación: Conectada al CAN-Bus a través del puerto de diagnóstico T16.

## Anomalías frecuentes

Registro de averías por fallos de conector en sensores periféricos o despliegue pirotécnico tras accidente que exige su sustitución.

## Comportamiento en avería

Encendido del testigo luminoso de advertencia para airbag K75 en el cuadro de instrumentos y desactivación preventiva del sistema de retención.

## Cómo comprobarlo

Consultar la memoria de averías y los bloques de valores de medición con el equipo de diagnosis a través del conector T16 de 16 polos.
