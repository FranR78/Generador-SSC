---
id: ssc.regulacion-automatica.los-sistemas-de-climatizacion-automatica
modulo: ssc
unidad: clima
nt: 307
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Sistemas de climatización automática e interacción de entornos"
menu: "Sistemas de climatización automática e"
grupo: "Control de climatización"
clave: regulacion-automatica
area: climatizacion
sistema: "control-climatizacion"
marca: "Valeo"
fuentes: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, págs. 1-7"
relacionados: ["unidad-control-climatizador", "distribucion-aire"]
palabras: ["climatización automática", "confort térmico", "temperatura de consigna", "entornos del vehículo", "tarjeta electrónica"]
---

## Objeto

Acondicionar el habitáculo del vehículo para alcanzar y mantener la temperatura de consigna deseada de forma automatizada. (págs. 1-2)

## Fundamento

El sistema de climatización automática procesa los datos provinientes de diferentes entornos del vehículo (habitáculo, salpicadero, conjunto A/C, motor térmico, circuito de calor y circuito de frío) a través de una tarjeta electrónica o centralita para controlar la temperatura, el caudal y la distribución de aire. (págs. 1-6)

## Desarrollo

El funcionamiento global del sistema se estructura mediante las interacciones de sus entornos funcionales:
- **Habitáculo y salpicadero:** El aire soplado por los difusores se mezcla con el aire ambiente para alcanzar la temperatura de consigna. La calidad del aislamiento térmico, la temperatura inicial de las paredes y la masa térmica del salpicadero influyen directamente en el tiempo necesario para lograr la convergencia térmica. (págs. 1-2)
- **Conjunto A/C (distribución de trampillas):** Enlaza el compartimento motor con el habitáculo. Alberga el evaporador, el radiador de calefacción, el impulsor de aire y las trampillas con sus correspondientes actuadores. (págs. 3, 5, 6)
- **Motor térmico y circuitos térmicos:** El motor arrastra mediante correa el compresor y la bomba de líquido refrigerante. El circuito de calor aporta la energía térmica mediante el radiador de calefacción. (págs. 4, 5)
- **Interacción de señales con la centralita:**
  - *Sonda de habitáculo:* Informa de la temperatura interior instantánea para verificar si se ha alcanzado la consigna. (págs. 6, 7)
  - *Sondas de aire soplado y exterior:* Determinan la posición adecuada de la trampilla de mezcla, el caudal de aire y el modo de distribución. (págs. 6, 7)
  - *Sonda del evaporador:* Detecta la formación de hielo e informa a la centralita para cortar el compresor en sistemas de cilindrada fija. (págs. 3, 7)
  - *Presostato:* Supervisa la presión del fluido frigorífico; ordena el corte del compresor ante presiones anormales (excesiva o demasiado baja) y conecta la segunda velocidad del GMV si la presión es elevada en el condensador. (págs. 5, 7)
  - *Termocontacto y módulo de refrigeración:* Ordenan la activación de la segunda velocidad del GMV si la temperatura del líquido refrigerante es demasiado alta. (págs. 4, 7)
  - *Módulo de inyección:* Informa de una aceleración brusca para desacoplar el compresor y no restar potencia al motor, e incrementa el régimen de ralentí cuando el compresor entra en servicio para evitar que el motor se cale. (págs. 4, 7)

## Errores de concepto frecuentes

- Creer que la temperatura interior depende únicamente de la temperatura del aire soplado, omitiendo la influencia térmica inicial del salpicadero y de las paredes del habitáculo. (págs. 1-2)
- Suponer que la centralita de climatización funciona de manera aislada sin comunicarse con los módulos electrónicos de inyección y refrigeración del motor. (págs. 4, 7)

## Imágenes requeridas

- Esquema general de interacciones entre los entornos del vehículo y la tarjeta electrónica del sistema de climatización — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 7
