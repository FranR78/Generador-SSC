---
id: ssc.sin-clasificar.actuador-con-motor-de-bloqueo-de-la-columna-de-direccion
modulo: ssc
unidad: sin-clasificar
nt: 611
titulo: "Actuador Con Motor De Bloqueo De La Columna De Dirección"
codigo: "No documentado en fuentes"
ubicacion: "Columna de dirección, alojado en el interior de una jaula metálica de protección"
aplicacion: "Bloqueo y desbloqueo eléctrico de la dirección en vehículos con Keyless Access"
menu: "Actuador Con Motor De Bloqueo  No documentado en fuentes"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Bloquear mecánicamente el giro del volante mediante un perno retenedor al parar el motor y abrir la puerta del conductor, y retirarlo para desbloquear la dirección antes de iniciar la marcha.

## Principio de funcionamiento

Un motor eléctrico transmite su giro a un engranaje de tornillo sin fin que desplaza un perno. Invertir la polaridad del motor invierte el sentido de giro del tornillo, haciendo subir el perno para liberar la columna. Dos sensores Hall integrados leen las posiciones finales.

## Características

Motor eléctrico de CC, reductor de tornillo sin fin, perno fijador antimanipulación y tarjeta electrónica interna con sensores Hall integrados.

## Valores de trabajo

* Tensión de alimentación: Tensión de red (12 V).
* Señales de posición: Estados discreto "bloqueado" o "desbloqueado" leídos por los sensores Hall.

## Anomalías frecuentes

Atascos mecánicos por rozamiento del perno contra la columna, fallo en el motor eléctrico o avería en los sensores Hall integrados.

## Comportamiento en avería

La columna queda trabada o no se bloquea. Si no se confirma el desbloqueo, el sistema no gestiona los bornes de corriente e impide el arranque.

## Cómo comprobarlo

Consultar las señales de los sensores Hall mediante bloques de valores de medición con la máquina de diagnosis.
Para desmontar la unidad de la jaula es obligatorio que la columna esté DESBLOQUEADA; de lo contrario, el perno fijador antimanipulación impide su extracción.
