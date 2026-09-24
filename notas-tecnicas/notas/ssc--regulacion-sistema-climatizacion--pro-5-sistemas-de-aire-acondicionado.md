---
id: ssc.regulacion-sistema-climatizacion.pro-5-sistemas-de-aire-acondicionado
modulo: ssc
unidad: clima
nt: 150
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Configuración básica para la regulación del sistema de aire acondicionado"
menu: "Configuración básica para la regulació"
grupo: "Control de climatización"
clave: regulacion-sistema-climatizacion
area: climatizacion
sistema: "control-climatizacion"
fuentes: "PRO 5. Sistemas de Aire Acondicionado.pdf, págs. 46"
relacionados: ["unidad-control-climatizador", "compresor", "electroventilador-condensador", "presostato", "sensor-evaporador"]
palabras: ["elementos eléctricos y electrónicos", "regulación del sistema", "turbina de aire fresco", "acoplamiento magnético", "UCE motor"]
---

## Objeto

Interconectar los elementos eléctricos y electrónicos de control con el circuito hidráulico para gobernar el funcionamiento, rendimiento y seguridad del aire acondicionado (pág. 46).

## Fundamento

La regulación del sistema procesa las órdenes del usuario y las lecturas de los sensores térmicos y de presión para alimentar los relés, conectar la turbina, activar los electroventiladores, gestionar el régimen del motor y proteger los componentes (pág. 46).

## Desarrollo

Lógica de funcionamiento de los componentes de control e interconexión:
1. Interruptor del AC y mando de la turbina (1): conecta o desconecta el sistema a voluntad del conductor y gestiona la velocidad de la turbina de aire fresco; para que el sistema se conecte es imprescindible que la turbina gire como mínimo a velocidad lenta (pág. 46).
2. Válvula de descarga de sobrepresión del compresor (2): protege la instalación liberando el exceso de fluido ante sobrepresiones puntuales (pág. 46).
3. Electroventilador del líquido refrigerante (3): refrigera el condensador; al conectar el aire acondicionado funciona siempre a velocidad lenta, conmutando a una velocidad más rápida si la presión del circuito de AC se eleva (pág. 46).
4. Conmutador de presión (trinaria o MAP de alta) (4): mide la presión en el tramo de alta para determinar los momentos de arranque y parada del compresor (pág. 46).
5. NTC de temperatura de refrigerante del motor (5): desconecta el aire acondicionado por seguridad si la temperatura del motor térmico aumenta en exceso (pág. 46).
6. Caja de relés y electrónica de control (6): suministra la alimentación eléctrica a los distintos componentes (pág. 46).
7. Termostato de refrigerante (7): conmuta las diferentes velocidades del electroventilador en función de la temperatura del líquido refrigerante (pág. 46).
8. Sonda de temperatura del evaporador (8): controla la temperatura de evaporación para desconectar el compresor en caso de riesgo de formación de hielo; no se utiliza en sistemas con compresor variable (pág. 46).
9. Turbina de aire fresco (9): hace pasar el aire a través del evaporador, enfriándolo y deshidratándolo (pág. 46).
10. Unidad de control del motor (UCE motor) (10): impide la conexión del compresor hasta que el motor no gire regularmente al ralentí y desconecta el compresor en aceleraciones bruscas (pág. 46).
11. Compresor y acoplamiento magnético (11): se conecta y desconecta mecánicamente mediante embrague electromagnético o regula el caudal impelido mediante una electroválvula en compresores de cilindrada variable (pág. 46).

## Valores de referencia

- Condición de activación eléctrica del sistema: turbina de aire fresco girando como mínimo a velocidad lenta (pág. 46).
- Estado inicial del electroventilador al conectar el A/C: velocidad lenta permanente (pág. 46).

## Errores de concepto frecuentes

- Intentar activar el aire acondicionado con la turbina de aire fresco completamente apagada, ignorando que el sistema requiere que la turbina gire al menos a velocidad lenta para permitir la conexión (pág. 46).
- Creer que la sonda del evaporador se instala en todos los vehículos, sin considerar que se omite en aquellos sistemas provistos de compresor de cilindrada variable (pág. 46).

## Imágenes requeridas

- Esquema con la numeración de los 11 elementos eléctricos y electrónicos de la configuración básica para la regulación del sistema de aire acondicionado — Fuente: PRO. Sistemas de Aire Acondicionado.pdf, pág. 46
