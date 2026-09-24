---
id: ssc.direccionamiento-servomotores.servomotores-sin-potenciometros
modulo: ssc
unidad: clima
nt: 556
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Direccionamiento de servomotores"
menu: "Direccionamiento de servomotores"
grupo: "Control de climatización"
clave: direccionamiento-servomotores
area: climatizacion
sistema: "control-climatizacion"
fuentes: "SERVOMOTORES SIN POTENCIOMETROS.pdf, págs. 81"
relacionados: ["servomotor-trampilla", "unidad-control-j255"]
palabras: ["tester VAS", "autodireccionamiento", "ajuste básico", "canal 001", "LIN-Bus"]
---

## Objeto y alcance

Asignar automáticamente las direcciones a los diferentes servomotores de las chapaletas conectados en serie por LIN-Bus para que la unidad de control Climatronic J255 reconozca la función de cada uno. Es obligatorio ejecutarlo antes del ajuste básico y cada vez que se desacople un conector o un servomotor. (pág. 81)

## Condiciones previas

Debe ejecutarse antes de realizar el ajuste básico en el canal 001 y canal. Es imprescindible realizarlo si se ha desacoplado uno o varios conectores o un servomotor. (pág. 81)

## Equipo y material

Tester de diagnosis VAS (programas de Localización guiada de averías o Funciones guiadas). (pág. 81)

## Pasos

1. Conectar el tester de diagnosis VAS y acceder a los programas de Localización guiada de averías o Funciones guiadas. (pág. 81)
2. Seleccionar la función de direccionamiento antes de efectuar el ajuste básico en el canal. (pág. 81)
3. Iniciar el procedimiento para provocar el reinicio de todos los servomotores. (pág. 81)
4. Transmitir desde la unidad de control Climatronic J255 la orden de autodireccionamiento para asignar automáticamente las direcciones a los servomotores. (pág. 81)
5. Realizar los ajustes básicos en los canales 001 y 003 una vez finalizado el direccionamiento. (pág. 81)

## Valores de referencia

- Paso previo al ajuste básico: Direccionamiento en canal.
- Canales de ajuste básico posterior: Canal 001 y Canal. (pág. 81)

## Verificación final

Comprobar la correcta asignación automática de direcciones antes de dar paso a los ajustes básicos en los canales 001 y. (pág. 81)

## Seguridad y normativa

Una vez ejecutado el direccionamiento, queda prohibido intercambiar la posición de los conectores o de los servomotores. (pág. 81)
