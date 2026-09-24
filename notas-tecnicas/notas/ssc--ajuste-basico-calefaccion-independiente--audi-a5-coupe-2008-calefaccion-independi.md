---
id: ssc.ajuste-basico-calefaccion-independiente.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 576
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Ajuste básico de la calefacción independiente"
codigo: "J364"
menu: "Ajuste básico de la calefacció J364"
grupo: "Control de climatización"
clave: ajuste-basico-calefaccion-independiente
area: climatizacion
sistema: "control-climatizacion"
marca: "Audi"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 12-18"
relacionados: ["unidad-control-j364", "mando-distancia-r64", "bomba-dosificadora-v54"]
palabras: ["J364", "grupo 004", "grupo 011", "grupo 022", "grupo 033", "grupo 066", "llenado conducto"]
---

## Objeto y alcance

Ejecutar las funciones de ajuste básico para la autoadaptación del mando a distancia por radiofrecuencia, pruebas de funcionamiento del calefactor y purga inicial del conducto de combustible. (págs. 12-18)

## Condiciones previas

- Encendido conectado. (pág. 12)
- Memoria de averías consultada y subsanada previamente. (pág. 12)
- Nivel de combustible suficiente en el depósito (indicador fuera de la franja roja). (pág. 13)

## Equipo y material

- Sistema de información, medición y diagnóstico de vehículos (VAS 5051 / VAS 5052) conectado al conector de 16 polos. (pág. 12)

## Pasos

1. Conectar el equipo de diagnosis e iniciar la función "18 - Calefacción adicional/independiente". (pág. 12)
2. Seleccionar la función "006 - Ajuste básico". (pág. 12)
3. **Autoadaptación del mando a distancia (Grupo 004):** Introducir el grupo "004". Al mostrar la pantalla "Autoadaptación", oprimir la tecla OFF en el mando a distancia por radiofrecuencia hasta confirmar la indicación "Autoadaptado". (pág. 16)
4. **Activación de prueba ordinaria (Grupo 011):** Introducir el grupo "011" para iniciar el arranque del calefactor; este se desactiva tras transcurrir el tiempo programado en la pantalla del MMI. (pág. 16)
5. **Activación de prueba a plena carga (Grupo 022):** Introducir el grupo "022" para operar el calefactor a plena carga fija durante un máximo de 10 minutos (pasa a continuación si el termosensor G18 alcanza ≥ 110 ºC). (pág. 17)
6. **Desactivación manual (Grupo 033):** Introducir el grupo "033" para interrumpir el funcionamiento del calefactor y de la bomba V54, activando la fase de marcha por inercia/enfriamiento. (pág. 17)
7. **Llenado del conducto de combustible (Grupo 066):** Desbloquear previamente la función poniendo a "1" el canal de adaptación; introducir el grupo "066" para activar la bomba dosificadora V54 durante el tiempo programado en el canal de adaptación. (págs. 17-18)
8. Esperar a la indicación de "Fin" y consultar la memoria de averías. (págs. 13, 18)

## Valores de referencia

- Tiempo de marcha por inercia/enfriamiento en grupo: entre 15 y 180 segundos. (pág. 17)
- Tiempo máximo de funcionamiento en grupo: 10 minutos. (pág. 17)
- Temperatura límite de seguridad en grupo: ≥ 110 ºC. (pág. 17)

## Verificación final

Comprobar que el sistema retorna al estado de reposo sin generar averías memorizadas tras finalizar el ajuste básico. (pág. 13)

## Seguridad y normativa

Si se produce un fallo durante la activación por ajuste básico, la calefacción solo se podrá volver a encender previa desactivación explícita mediante el grupo "033", evitando acumulaciones peligrosas de combustible no quemado en la cámara. (págs. 13, 91)
