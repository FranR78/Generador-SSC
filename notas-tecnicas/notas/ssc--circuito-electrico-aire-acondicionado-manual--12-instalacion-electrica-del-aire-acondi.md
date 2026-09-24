---
id: ssc.circuito-electrico-aire-acondicionado-manual.12-instalacion-electrica-del-aire-acondi
modulo: ssc
unidad: clima
nt: 70
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Circuito eléctrico de aire acondicionado manual con trinaria"
menu: "Circuito eléctrico de aire acondiciona"
grupo: "Control de climatización"
clave: circuito-electrico-aire-acondicionado-manual
area: climatizacion
sistema: "control-climatizacion"
fuentes: "12. Instalación eléctrica del aire acondicionado.pdf, págs. 94-95"
relacionados: ["presostato", "electroventilador-condensador", "compresor"]
palabras: ["A/A manual", "trinaria", "presostato", "NTC evaporador", "NTC motor", "UCE motor"]
---

## Objeto

Estructura y lógica de funcionamiento de la instalación eléctrica y de control para un sistema de aire acondicionado manual regulado por presostato trinario (págs. 94-95).

## Fundamento

Interconexión eléctrica de elementos de mando, relés, sensores térmicos y dispositivos de seguridad requerida para gobernar el embrague del compresor, el electroventilador de refrigeración y la turbina de aire fresco (págs. 94-95).

## Desarrollo

Componentes y lógica de gestión del circuito:
1. Interruptor de AC y selector de velocidad de la turbina (1): conecta o desconecta el sistema a voluntad del conductor y regula la velocidad de la turbina. Exige que la turbina gire al menos a velocidad lenta para habilitar el funcionamiento del sistema (págs. 94-95).
2. Relé de alimentación del electroventilador (2): suministra corriente a las dos velocidades del electroventilador (págs. 94-95).
3. Electroventilador del circuito de refrigeración (3): enfría el condensador. Al activar el A/C funciona en velocidad lenta; si la presión del circuito aumenta, conmuta a la velocidad rápida (págs. 94-95).
4. Presostato trinario de alta (4): mide la presión en la línea de alta. Determina el arranque o parada del compresor mediante sus bornes 1-2 (P1 = 2 bar / 32 bar) y la activación de la velocidad rápida del electroventilador mediante sus bornes 3-4 (P2 = 16 bar) (págs. 94-95).
5. NTC de temperatura del refrigerante del motor (5): desconecta el aire acondicionado si la temperatura del motor sobrepasa los límites de seguridad (págs. 94-95).
6. Electrónica de control y relés (6): conmutan la alimentación eléctrica hacia los componentes del circuito (págs. 94-95).
7. Termostato de refrigerante del radiador (7): conmuta las velocidades del electroventilador según la temperatura del líquido refrigerante (t1 = 95 ºC para velocidad lenta; t2 = 103 ºC para velocidad rápida) (págs. 94-95).
8. Sonda NTC del evaporador (8): supervisa la temperatura de evaporación y desconecta el compresor si hay riesgo de congelación. No se instala en sistemas con compresor de cilindrada variable (págs. 94-95).
9. Turbina de aire fresco (9): hace pasar el aire a través del evaporador para su enfriamiento y deshidratación (págs. 94-95).
10. UCE del motor (10): autoriza la conexión del compresor únicamente cuando el motor gira al ralentí de forma estable y lo desconecta durante aceleraciones bruscas (págs. 94-95).
11. Compresor de aire acondicionado (11): acoplado mecánicamente mediante embrague electromagnético (págs. 94-95).
12. Relé de II velocidad del electroventilador (12): conmuta la alimentación de alta velocidad del ventilador (págs. 94-95).

## Valores de referencia

- Presostato trinario (P1 - corte compresor por baja/alta): 2 bar por baja / 32 bar por alta (pág. 94).
- Presostato trinario (P2 - activación II velocidad electroventilador): 16 bar (pág. 94).
- Termostato de refrigerante (t1 - velocidad lenta electroventilador): 95 ºC (pág. 94).
- Termostato de refrigerante (t2 - velocidad rápida electroventilador): 103 ºC (pág. 94).
- Condición de funcionamiento inicial: turbina girando como mínimo a velocidad lenta (pág. 94).

## Errores de concepto frecuentes

- Creer que el compresor puede acoplarse estando la turbina de aire fresco totalmente apagada (pág. 94).
- Asumir que la sonda del evaporador se utiliza en sistemas provistos de compresor de cilindrada variable (pág. 94).

## Imágenes requeridas

- Esquema eléctrico de un sistema de aire acondicionado manual con presostato trinario y relés de control — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 94
