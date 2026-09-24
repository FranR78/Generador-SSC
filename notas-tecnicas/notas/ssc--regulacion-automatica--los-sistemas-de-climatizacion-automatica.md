---
id: ssc.regulacion-automatica.los-sistemas-de-climatizacion-automatica
modulo: ssc
unidad: clima
nt: 307
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación automática de la climatización e interacción de entornos"
menu: "Regulación automática de la climatizac"
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

Acondicionar el habitáculo del vehículo para alcanzar y mantener en su interior el confort térmico correspondiente a la temperatura de consigna seleccionada. (págs. 1-2)

## Fundamento

El sistema de climatización automática recopila datos y parámetros procedentes de diversos entornos del vehículo (habitáculo, salpicadero, conjunto A/C, motor térmico, circuito de calor y circuito de frío) para regular el funcionamiento global de la instalación mediante una tarjeta electrónica o centralita. (págs. 1-6)

## Desarrollo

El funcionamiento global del sistema se estructura mediante las interacciones de sus entornos funcionales:
- **Habitáculo y salpicadero:** El aire impulsado por los difusores se mezcla con el aire ambiente para alcanzar la temperatura de consigna. La calidad del aislamiento térmico, la temperatura inicial de las paredes y la conductividad térmica del salpicadero influyen directamente en el tiempo necesario para lograr la convergencia térmica. (págs. 1-2, 5)
- **Conjunto A/C (distribución de trampillas):** Enlaza la parte del compartimento motor con el habitáculo. Alberga el radiador de calefacción, el evaporador, el impulsor de aire y las trampillas con sus correspondientes actuadores. (págs. 3, 7)
- **Motor térmico y circuitos térmicos:** El motor arrastra mediante correa el compresor y la bomba de líquido refrigerante. El circuito de calor aporta la energía térmica mediante el radiador de calefacción. (págs. 4-5)
- **Interacción de señales con la centralita:**
  - **Sonda de habitáculo:** Informa de la temperatura interior instantánea para verificar si se ha alcanzado la consigna. (pág. 6)
  - **Sondas de aire soplado y exterior:** Informan si la posición de la trampilla de mezcla es la adecuada para alcanzar la temperatura elegida, así como el caudal de aire y la distribución necesarios. (pág. 7)
  - **Sonda del evaporador:** Informa si se está formando hielo en el evaporador para cortar el compresor en sistemas de cilindrada fija. (págs. 3, 7)
  - **Presostato:** Informa de la presión en el circuito de fluido frigorífico. Si la presión es excesiva o demasiado baja, manda cortar el compresor; si excede de un cierto valor, conecta la segunda velocidad del GMV (electroventilador). (págs. 5, 7)
  - **Termocontacto y módulo de refrigeración:** Conectan la segunda velocidad del GMV si la temperatura del líquido refrigerante es demasiado elevada en el radiador. (págs. 4, 7)
  - **Módulo de inyección:** Informa si se produce una aceleración brusca para cortar el compresor y no restar potencia al motor, e incrementa el régimen de ralentí cuando el compresor está conectado para evitar que el motor se cale. (págs. 4, 7)

## Errores de concepto frecuentes

- Creer que la temperatura interior depende únicamente de la temperatura del aire soplado, omitiendo la influencia térmica inicial del salpicadero y de las paredes del habitáculo. (págs. 1-2, 5)
- Suponer que la centralita de climatización funciona de manera aislada sin comunicarse con los módulos electrónicos de inyección y refrigeración del motor. (págs. 4, 7)

## Imágenes requeridas

- Esquema general de interacciones entre los entornos del vehículo y la tarjeta electrónica del sistema de climatización — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 7
