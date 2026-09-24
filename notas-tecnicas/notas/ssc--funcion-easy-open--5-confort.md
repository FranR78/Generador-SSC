---
id: ssc.funcion-easy-open.5-confort
modulo: ssc
unidad: clima
nt: 379
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Función Easy Open del portón eléctrico"
menu: "Función Easy Open del portón eléctrico"
grupo: "Cierre y aperturas"
clave: funcion-easy-open
area: confort-y-seguridad
sistema: "NUEVO-cierre-y-aperturas"
marca: "Seat"
fuentes: "5. Confort.pdf, págs. 111-112"
relacionados: ["porton-maletero-electrico", "autorizacion-acceso-y-arranque"]
palabras: ["easy open", "pedal virtual", "sensores capacitivos", "parachoques trasero", "lin-bus"]
---

## Objeto

Permitir la apertura o cierre automatizado del portón del maletero sin contacto manual, mediante un movimiento pendular del pie bajo el paragolpes trasero. (págs. 97, 111)

## Fundamento

Se basa en dos sensores capacitivos situados bajo la cubierta del paragolpes trasero que detectan la variación del campo magnético generada por el pie. La orden se valida cruzando la señal con la detección de la llave Keyless en la zona posterior. (págs. 111-112)

## Desarrollo

Cuando la unidad de control para la apertura del portón capta la fluctuación en los dos electrodos capacitivos, transmite una señal vía LIN-Bus a la unidad de control de acceso y arranque. Esta unidad activa el rastreo por la antena trasera del paragolpes. Si se confirma una llave autorizada a menos de 1,5 metros, se ordena el desbloqueo y la elevación del portón, confirmando con el destello de los intermitentes y la tercera luz de freno.

Para su activación se requiere: vehículo totalmente parado, Borne 15 desconectado y la llave a menos de 1,5 m. En situaciones de lluvia torrencial o lavado a presión, el sistema se desactiva automáticamente para evitar aperturas involuntarias. Tras ceder la perturbación, el sistema se rearma solo a los 90 segundos. Es posible desactivar la función desde el menú MIB/CAR en "Ajustes / Cierre centralizado". (págs. 111-112)

## Valores de referencia

- Distancia requerida de la llave al portón: inferior a 1,5 metros.
- Tiempo de rearme automático tras desactivación por agua: 90 segundos. (pág. 111)

## Errores de concepto frecuentes

Pensar que la función Easy Open abre el portón a cualquier usuario. Si no hay una llave identificada a menos de 1,5 m de la parte trasera, el sistema ignora el movimiento del pie. (págs. 111-112)
