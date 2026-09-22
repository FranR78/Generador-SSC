---
id: ssc.sin-clasificar.arquitectura-y-buses-de-comunicacion-de-la-climatizacion
modulo: ssc
unidad: sin-clasificar
nt: 1007
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura Y Buses De Comunicación De La Climatización"
menu: "Arquitectura Y Buses De Comunicación D"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la arquitectura electrónica descentralizada y la estructura de interconexión por bus de datos del climatizador automático. Aplica a la gestión eléctrica de la climatización en el Audi A5.

## Fundamento

En el Audi A5, las señales de varios sensores no ingresan directamente a la unidad de control para Climatronic J255. Los datos de los sensores de presión y temperatura del agente frigorífico G395 y de humedad y temperatura del parabrisas G458 / G355 son procesados por la unidad de control de la red de a bordo J519 o la unidad central para sistema de confort J393. Estas centralitas vuelcan la información al CAN-Bus para ponerla a disposición de la UCE J255.

## Desarrollo

* Las señales del sensor de presión y temperatura del agente frigorífico G395 se transmiten por LIN-Bus a la unidad de control de la red de a bordo J519.
* Las señales del sensor de humedad y temperatura del parabrisas (G458 / G355) se transmiten por LIN-Bus a la unidad de control central para el sistema de confort J393.
* El sensor de la calidad del aire G238, la unidad de control para turbina de aire fresco J126 y los servomotores para gestión de chapaletas comunican por líneas LIN-Bus dedicadas directamente con la UCE para Climatronic J255.
* La interconexión general entre la UCE J255, la UCE J519, la UCE J393 y la UCE para calefacción adicional J364 se realiza mediante el CAN Confort a través de la interfaz de diagnosis para bus de datos J533.
* La interfaz J533 vincula el sistema con el CAN Cuadro / tren de rodaje y con el terminal para diagnósticos.
* La UCE de red de a bordo J519 procesa directamente la señal del sensor de temperatura exterior G17.
* La UCE para Climatronic J255 gobierna directamente la válvula reguladora para compresor del climatizador N280.

## Valores de referencia

| Componente / Bus | Tipo de Conexión / Bus de Comunicación |
| :--- | :--- |
| Sensor G395 a UCE J519 | LIN-Bus |
| Sensor G355 / G458 a UCE J393 | LIN-Bus |
| Sensor G238 a UCE J255 | LIN-Bus |
| Unidad J126 a UCE J255 | LIN-Bus |
| Servomotores de chapaletas a UCE J255 | LIN-Bus |
| Interconexión J255, J519, J393, J533 y J364 | Red CAN Confort |
| Interfaz J533 a terminal de diagnosis | CAN Cuadro / tren de rodaje |

## Interpretación y errores frecuentes

* Buscar la conexión cableada directa de los sensores G395 o G458/G355 en los conectores de la UCE Climatronic J255; sus datos ingresan en J519 o J393 y se transmiten a J255 mediante tramas CAN-Bus.

## Verificación final

Comprobar con el equipo de diagnosis conectado al terminal de diagnóstico que la UCE J255 recibe correctamente los bloques de valores transmitidos por J519 y J393.

## Imágenes requeridas

- Cuadro sinóptico de la arquitectura eléctrica, unidades interconectadas y buses CAN-Bus y LIN-Bus — Fuente: GESTIÓN ELÉCTRICA A5.pdf, pág. 80
