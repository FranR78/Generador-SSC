---
id: ssc.autodiagnostico-climatizador.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 207
tipo: proceso
subtipo: procedimiento
clase: procedimiento
titulo: "Autodiagnóstico de los equipos de mando electrónico"
codigo: "J255"
menu: "Autodiagnóstico de los equipos J255"
grupo: "Control de climatización"
clave: autodiagnostico-climatizador
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 34-37"
relacionados: ["unidad-control-climatizador"]
palabras: ["autodiagnóstico", "dirección 08", "función 01", "función 02", "función 03", "función 04", "función 08"]
---

## Objeto y alcance

Identificar averías registradas en sensores y actuadores, verificar el funcionamiento de los componentes mediante pruebas guiadas y analizar parámetros operativos en tiempo real. (págs. 34-37)

## Condiciones previas

- Tensión de la batería correcta. (pág. 34)
- Encendido conectado (borne 15). (pág. 34)

## Equipo y material

- Equipo de diagnosis (V.A.G 1551, V.A.G 1552 o lector compatible) conectado al conector de diagnóstico de 16 polos T16. (págs. 31, 34)

## Pasos

1. Conectar el equipo de diagnosis e ingresar mediante el código de dirección "08 - Aire acondicionado". (pág. 34)
2. **Función 01 (Versión de la unidad):** Consultar el código de recambios, la versión del software y el tipo de equipo (reconoce autoclima o calefacción motorizada mediante la presencia del puente a masa en el pin 21). (pág. 34)
3. **Función 02 (Consultar memoria de averías):** Leer los fallos memorizados (distingue entre esporádicas y permanentes). (pág. 35)
4. **Función 03 (Diagnóstico de actuadores):** Ejecutar la prueba de elementos (activa cíclicamente N25, la turbina V2 en rampa de 0 a 12 V, el servomotor V68 de tope a tope y V113 entre aire fresco y recirculación). (pág. 36)
5. **Función 04 (Iniciar ajuste básico):** Acceder al grupo "002" para que la unidad reconozca y grabe electrónicamente la posición real del servomotor de la trampilla de temperatura V68. (pág. 36)
6. **Función 05 (Borrar memoria de averías):** Borrar el registro de fallos una vez subsanados. (pág. 34)
7. **Función 08 (Leer bloque de valores de medición):** Analizar los grupos de indicación 001 al 006 para evaluar presiones, temperaturas de NTC, estados de pulsadores y voltajes en tiempo real. (pág. 37)

## Valores de referencia

- Código de dirección del sistema: 08. (pág. 34)
- Criterio de borrado automático de averías esporádicas: tras 40 puestas en marcha sin reproducirse el fallo. (pág. 34)
- Grupo de ajuste básico para servomotor V68: Grupo 002 (valores en voltios entre 0,76 V y 4,21 V). (págs. 36-37)

## Verificación final

Comprobar que al reconectar el climatizador ya no parpadean los dígitos del display de la consola central y la memoria de averías permanece limpia. (págs. 12, 34)
