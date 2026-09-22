---
id: ssc.sin-clasificar.unidad-de-control-para-deteccion-del-remolque
modulo: ssc
unidad: sin-clasificar
nt: 1205
titulo: "Unidad De Control Para Detección Del Remolque"
codigo: "J345"
ubicacion: "Montada en la zona posterior/maletero del vehículo"
aplicacion: "Vehículos equipados con enganche de remolque"
menu: "Unidad De Control Para Detecci J345"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Detectar la conexión eléctrica de un remolque en la toma U10 e informar vía CAN-Bus al resto de UCEs del vehículo para adaptar sus funciones.

## Principio de funcionamiento

Unidad electrónica de red. Registra el consumo eléctrico de la piña de luces en la toma U10 y transmite el estado por CAN-Bus Confort hacia la pasarela J533 para adaptar el comportamiento de los sistemas de seguridad y confort.

## Características

Centralita de control conectada al CAN-Bus Confort y a la toma de corriente de remolque U10.

## Valores de trabajo

* **Adaptaciones coordinadas vía CAN-Bus al acoplar un remolque:**
  * *UCE Red de a bordo J519:* Desactiva las luces antiniebla traseras del coche, activa las del remolque y detecta el fundido de sus lámparas.
  * *UCE del ABS J104:* Activa la función de Estabilización del Remolque (TSA).
  * *UCE del Motor J623:* Modifica los parámetros de inyección/par para compensar el aumento de masa arrastrada.
  * *UCE de Ayuda al aparcamiento J446:* Desactiva los sensores de aparcamiento traseros.
  * *UCEs de Ángulo muerto J1086 / J1087:* Se desactivan automáticamente.

## Anomalías frecuentes

Falso contacto o sulfatación por sulfito en los pines de la toma U10.

## Comportamiento en avería

Falta de detección del remolque (no se activa la función TSA en el ABS ni se desconectan los sensores traseros) o aviso falso de bombilla fundida.

## Cómo comprobarlo

Conectar la piña de prueba en la toma U10 y verificar en los bloques de datos de J345 y J519 el parámetro "Remolque detectado: SÍ", comprobando la desactivación del radar de marcha atrás J446.

💡 ¿Deseas que adaptemos este conjunto de notas técnicas en una guía de localización de averías en redes LIN-Bus o en un cuestionario de comprobación de inmovilizadores 5C para el taller?
