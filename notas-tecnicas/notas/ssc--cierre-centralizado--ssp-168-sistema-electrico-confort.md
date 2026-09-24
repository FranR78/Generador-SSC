---
id: ssc.cierre-centralizado.ssp-168-sistema-electrico-confort
modulo: ssc
unidad: clima
nt: 510
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Cierre centralizado en la red de a bordo"
menu: "Cierre centralizado en la red de a bor"
grupo: "Cierre y bloqueo"
clave: cierre-centralizado
area: confort-y-seguridad
sistema: "NUEVO-cierre-y-bloqueo"
marca: "SEAT"
fuentes: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 39-41"
relacionados: ["unidad-control-red-a-bordo"]
palabras: ["cierre centralizado", "bloqueo safe", "bloqueo por velocidad", "bloqueo automatico", "borne s"]
---

## Objeto

Gestionar el bloqueo y desbloqueo de las puertas y portón del vehículo bajo diversas condiciones de seguridad e interacción del usuario. (pág. 39)

## Fundamento

La unidad de control de la red de a bordo J519 actúa como unidad maestra y coordina las funciones del cierre centralizado procesando señales de la llave, sensores de choque, ABS e interruptores. (págs. 39-41)

## Desarrollo

El cierre centralizado asume las siguientes funciones:
- Bloqueo simple o SAFE: se realiza al recibir señales del mando a distancia, cerradura de puerta o unidad J518 (acceso y arranque).
- Bloqueo por velocidad: se activa al superar los 15 km/h con la señal de velocidad enviada por la UCE del ABS J104 a través del CAN-Bus.
- Bloqueo automático: si tras desbloquear con el mando no se abre ninguna puerta en 45 segundos, las puertas se vuelven a bloquear de forma automática.
- Desbloqueo por borne S: desbloquea las cerraduras al extraer la llave del conmutador de encendido tras haber conectado el contacto.
- Desbloqueo por activación del airbag: recibe por CAN-Bus la señal de colisión de la UCE del airbag J234 y desbloquea inmediatamente todas las puertas.
- Desbloqueo del portón: accionado por el conmutador E165.
- Avisos de confirmación: la UCE J519 realiza 1 destello de intermitentes al bloquear y 2 destellos al desbloquear. (págs. 39-41)

## Valores de referencia

- Umbral de velocidad para bloqueo automático: mayor a 15 km/h.
- Tiempo para rebloqueo automático sin apertura de puerta: 45 segundos.
- Destellos de confirmación de intermitentes: 1 destello al bloquear / 2 destellos al desbloquear. (págs. 39-40)

## Errores de concepto frecuentes

Creer que el desbloqueo por impacto requiere una conexión cableada directa entre la UCE de airbag y las cerraduras. La señal de colisión se transmite digitalmente a través de la red CAN-Bus a la unidad J519. (págs. 39-41)

## Imágenes requeridas

- Esquema del circuito del cierre centralizado con UCE J519, unidades de cierre VX21 a VX25 e interconexión CAN-Bus — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 40
