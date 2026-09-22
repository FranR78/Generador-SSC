---
id: ssc.sin-clasificar.unidad-de-control-del-climatronic
modulo: ssc
unidad: sin-clasificar
nt: 1186
titulo: "Unidad De Control Del Climatronic"
codigo: "J255"
ubicacion: "En el centro del salpicadero, en la consola central"
aplicacion: "Climatización automática trizona en el SEAT Tarraco"
menu: "Unidad De Control Del Climatro J255"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Procesar las señales de los sensores térmicos, gestionar las peticiones del usuario y gobernar los servomotores, la turbina y la electroválvula del compresor para mantener automáticamente la temperatura en las 3 zonas del habitáculo.

## Principio de funcionamiento

Unidad electrónica de control maestra. Lee la información de los sensores de temperatura (G308, G385, G386, G192, G107, G174), consulta el estado del LIN-Bus Clima (G805, G238, E265, J126) y transmite órdenes a la electroválvula N280, a la turbina V2 y a los servomotores de las trampillas.

## Características

Unidad central con pantalla e indicadores integrados, conectada a la red CAN-Bus Confort y maestra de la línea de datos LIN-Bus Clima.

## Valores de trabajo

Tensión de alimentación nominal de 12 V a través del fusible SC26.

## Anomalías frecuentes

Fallo en el transistor interno de salida hacia la electroválvula N280 o pérdida de comunicación por caída del bus LIN-Bus Clima.

## Comportamiento en avería

Inoperatividad del sistema Climatronic, parpadeo de la pantalla de mandos al conectar el contacto e imposibilidad de regular la temperatura o el caudal de aire.

## Cómo comprobarlo

Efectuar la lectura de memoria de averías, realizar el test de actuadores de las trampillas y verificar la presencia de 12 V en el fusible SC26.
