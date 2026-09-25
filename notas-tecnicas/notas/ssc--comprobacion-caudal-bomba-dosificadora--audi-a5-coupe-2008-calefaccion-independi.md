---
id: ssc.comprobacion-caudal-bomba-dosificadora.audi-a5-coupe-2008-calefaccion-independi
modulo: ssc
unidad: clima
nt: 849
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Comprobación de la cantidad de combustible impelida por la bomba dosificadora"
menu: "Comprobación de la cantidad de combust"
grupo: "Calefacción"
clave: comprobacion-caudal-bomba-dosificadora
area: combustible
sistema: "calefaccion"
fuentes: "Audi A5 Coupé_2008_Calefacción independiente.pdf, págs. 104-110"
relacionados: ["bomba-dosificadora-combustible", "calefactor-independiente"]
palabras: ["comprobación de caudal", "V54", "probeta graduada", "canal 30", "ajuste básico 066"]
---

## Objeto y alcance

Medir con precisión el volumen de combustible suministrado por la bomba V54 para verificar su correcto calibrado y diagnosticar fallos de humo o falta de combustión. (págs. 104-105)

## Condiciones previas

1. Nivel de combustible suficiente en el depósito del vehículo (por encima de la reserva). (pág. 104)
2. Calefacción independiente desactivada y sin códigos de avería almacenados. (pág. 104)
3. Pasarruedas delantero derecho desmontado para acceder a la tubería de combustible del calefactor. (pág. 104)

## Equipo y material

Estación de diagnosis VAS 5051 con cable T16, probeta o recipiente graduado de precisión en ml y recipiente de recogida de combustible. (págs. 104-105)

## Pasos

1. Desmontar el tubo flexible de combustible conectado a la entrada de la calefacción independiente. (pág. 104)
2. Introducir el extremo libre del tubo de combustible en la probeta graduada de precisión y fijarlo firmemente. (pág. 104)
3. Conectar el equipo de diagnosis VAS 5051 al conector de 16 polos T16 e iniciar la autodiagnosis en la dirección "18 - Calefacción adicional/independiente". (págs. 7, 105)
4. Acceder a la función "12 - Adaptación", ingresar en el "Canal 30" y modificar el valor a "3" para desbloquear la función de prueba de llenado. (pág. 105)
5. Seleccionar la función "04 - Ajuste básico" e ingresar al grupo de indicación "066". (pág. 105)
6. Activar la prueba: la UCE excitará la bomba dosificadora V54 durante exactamente 30 segundos con una frecuencia fija de 8 Hz. (pág. 105)
7. Al finalizar automáticamente los 30 segundos de impulsos, leer el nivel de volumen de combustible recogido en la probeta graduada. (págs. 105-106)

## Valores de referencia

- Frecuencia de prueba en ajuste básico: 8 Hz (8 impulsos/segundo) durante 30 segundos (240 impulsos totales). (pág. 105)
- Volumen teórico nominal aportado: entre 6,8 ml y 7,6 ml tras 240 impulsos (0,03 ml/impulso). (pág. 105)

## Verificación final

Si el volumen medido está fuera del margen especificado, revisar la tubería por si presenta estrangulamientos; si la canalización es correcta, reemplazar la bomba dosificadora V54. (págs. 106, 112)

## Seguridad y normativa

Recoger todo el combustible en recipientes herméticos homologados. No fumar ni generar chispas en la zona de trabajo. (pág. 101)
