---
id: ssc.recirculacion.marcha-atras.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 159
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Señal de marcha atrás para el cierre automático de aire exterior"
menu: "Señal de marcha atrás para el cierre a"
grupo: "Distribución de aire"
clave: recirculacion
variante: marcha-atras
area: climatizacion
sistema: "distribucion-aire"
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 106"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["marcha atrás", "gases de escape", "Can-Bus", "trampilla recirculación", "aire exterior"]
---

## Objeto

Activar de forma automática la recirculación de aire al engranar la marcha atrás para evitar la penetración de los gases de escape al habitáculo (pág. 106).

## Fundamento

El conmutador de la caja de cambios informa de la selección de la marcha atrás a la UCE de la red de a bordo, la cual vuelca el dato a la línea Can-Bus de confort hacia la UCE del climatizador (pág. 106).

## Desarrollo

Lógica de actuación:
- Al reconocer el mensaje de marcha atrás conectada, la UCE del climatizador manda accionar la trampilla de recirculación (pág. 106).
- La trampilla cierra la entrada de aire exterior impidiendo que los humos del tubo de escape sean aspirados hacia el interior mientras el vehículo recula (pág. 106).
- Si la señal se ausenta por avería, la función no se realiza, manteniéndose abierta la entrada de aire exterior al circular marcha atrás (pág. 106).

## Errores de concepto frecuentes

- Pensar que el cierre de la entrada de aire exterior solo se produce mediante la pulsación manual del botón de recirculación (pág. 106).
