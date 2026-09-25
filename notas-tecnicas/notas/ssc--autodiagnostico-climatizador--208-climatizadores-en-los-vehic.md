---
id: ssc.autodiagnostico-climatizador.208-climatizadores-en-los-vehic
modulo: ssc
unidad: clima
nt: 821
tipo: proceso
subtipo: diagnostico
clase: diagnostico
titulo: "Autodiagnóstico del sistema Climatronic"
menu: "Autodiagnóstico del sistema Climatroni"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "VW"
fuentes: "208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, págs. 68-71"
relacionados: ["unidad-control-climatizador"]
palabras: ["VAS 5051", "memoria de averías", "bloques de medición", "prueba de actuadores", "ajuste básico"]
---

## Síntoma

Inoperatividad total o parcial del climatizador, parpadeo de los dígitos de la pantalla al conectar el encendido o falta de regulación de temperatura y caudal de aire. (págs. 68-69)

## Causas posibles

- Interrupción o cortocircuito en las líneas de sensores térmicos (G17, G56, G89, G107, G153, G192, G238). (págs. 69-70)
- Avería eléctrica o bloqueo mecánico en los servomotores de las trampillas (V68, V70, V71, V85). (págs. 69-70)
- Anomalía de presión en el circuito frigorífico detectada por el presostato F129 o transmisor G65. (pág. 70)
- Fallo de comunicación en el bus de datos CAN o alimentación defectuosa de la centralita J255. (págs. 68, 70)

## Cómo separar las causas

1. Conectar el equipo de diagnosis (VAS 5051 o lector equivalente) al conector de diagnóstico T16 de 16 polos del vehículo. (pág. 68)
2. Seleccionar la dirección "08 - Electrónica del climatizador" y ejecutar la función "02 - Consultar memoria de averías". (págs. 68-69)
3. Si existen averías registradas, identificar si corresponden a sensores (valor fuera de tolerancia) o a actuadores (límite superior/inferior sobrepasado). (pág. 69)
4. Ejecutar la función "03 - Diagnóstico de elementos actuadores" para activar secuencialmente la turbina, el acoplamiento magnético N25 y los servomotores, comprobando su respuesta física. (págs. 69-70)
5. Seleccionar "08 - Leer bloque de valores de medición" para analizar en tiempo real las temperaturas leídas por los sensores, la tensión de alimentación y los valores de tensión de los potenciómetros de posición. (pág. 70)
6. Tras reemplazar un componente o servomotor, realizar la función "04 - Iniciar ajuste básico" para que la centralita memorice los topes mecánicos del nuevo actuador. (págs. 70-71)

## Valores de referencia

- Conector de diagnóstico: conector normalizado T16 de 16 polos. (pág. 68)
- Tipo de memoria de averías: memoria no volátil exenta de borrado por desconexión de batería. (pág. 68)

## Verificación tras la reparación

Borrar la memoria de averías con la función "05", desconectar el encendido, arrancar el motor, conectar el Climatronic y verificar que el display no parpadee y no se vuelvan a registrar códigos de fallo. (págs. 69, 71)

## Imágenes requeridas

- Conexión de la estación de autodiagnóstico VAS 5051 al conector de diagnóstico de 16 polos T16 — Fuente: 208 CLIMATIZADORES_EN_LOS_VEHIC.PDF, pág. 68
