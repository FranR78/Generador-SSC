---
id: ssc.lectura-manometros.audi-a5-coupe-2008-aire-acondicionado
modulo: ssc
unidad: clima
nt: 842
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Comprobación del rendimiento frigorífico del climatizador"
menu: "Comprobación del rendimiento frigorífi"
grupo: "Circuito frigorífico"
clave: lectura-manometros
area: climatizacion
sistema: "circuito-frigorifico"
fuentes: "Audi A5 Coupé_2008_aire acondicionado.pdf, págs. 311-316, 319-321"
relacionados: ["compresor", "valvula-reguladora-compresor", "transmisor-presion"]
palabras: ["rendimiento frigorífico", "corriente teórica", "corriente efectiva", "G395", "N280", "9 bares"]
---

## Objeto y alcance

Evaluar la capacidad de enfriamiento del sistema de climatización y verificar la respuesta electrónica del compresor de cilindrada variable sin embrague electromagnético. (págs. 311, 314)

## Condiciones previas

1. Temperatura ambiente exterior superior a 15 ºC. (pág. 311)
2. Radiador del motor y condensador limpios y sin suciedad. (pág. 311)
3. Correa poli-V en correcto estado de conservación y tensión. (pág. 311)
4. Capó delantero, puertas y ventanillas completamente cerrados. (págs. 311, 314)
5. Motor en marcha a temperatura de servicio. (págs. 311, 314)

## Equipo y material

Estación de diagnosis VAS 5051 (o VAS 5052) con cable de conexión T16 y termómetro digital de aireación. (págs. 311, 314)

## Pasos

1. Abrir todos los difusores del salpicadero y arrancar el motor del vehículo. (pág. 314)
2. Conectar el equipo de diagnosis VAS 5051 al conector de 16 polos e iniciar la autodiagnosis en la dirección "08 - Electrónica de climatización". (págs. 8, 314)
3. Seleccionar la función "Leer bloque de valores de medición" e ingresar al grupo "001". (págs. 40, 314)
4. Seleccionar el modo "Econ" o "AC OFF" en el panel de mandos y verificar que los campos 1 y 2 del grupo 001 muestren 0 A de corriente (compresor desactivado) y que el campo 4 indique la presión de reposo adecuada a la temperatura ambiente. (pág. 314)
5. Pulsar la tecla "Auto / AC ON" y situar la preselección de temperatura en "LO" (frío máximo) en ambos lados. (págs. 314, 316)
6. Comprobar que en los campos 1 y 2 del grupo 001 la corriente teórica y la corriente efectiva de la válvula N280 aumenten por encima de 0,3 A (hasta alcanzar entre 0,75 A y 0,8 A). (págs. 177, 316)
7. Comprobar que la presión visualizada en el campo 4 del grupo 001 aumente de forma progresiva por encima del valor de reposo. (pág. 316)
8. Verificar que los electroventiladores del radiador (V7 / V177) se conectan automáticamente en cuanto la presión en el lado de alta supera los 9 bares. (pág. 321)
9. Medir la temperatura del aire soplado por los difusores centrales confirmando que desciende a los valores de confort especificados. (págs. 314, 316)

## Valores de referencia

- Temperatura ambiental mínima para la prueba: > 15 ºC. (pág. 311)
- Corriente de activación de N280 a máximo rendimiento: entre 0,75 A y 0,8 A. (págs. 120, 177)
- Presión de activación de electroventiladores V7/V177: 9 bares en la línea de alta. (pág. 321)

## Verificación final

Confirmar que el tubo de baja presión (diámetro grueso) entre el acoplamiento rápido y el compresor se enfría intensamente y verificar que en el grupo de valores de medición 002 el campo 1 permanezca en "0" (sin condiciones de desconexión). (págs. 43, 316, 323)

## Seguridad y normativa

Prohibido arrancar el motor si las tuberías de refrigerante del compresor están desconectadas. Al carecer de acoplamiento electromagnético, el compresor gira de forma ininterrumpida con el motor y se destruye por sobrecalentamiento interno si trabaja en seco. (págs. 339, 378)
