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

El sistema de climatización automática procesa datos procedentes de diversos entornos del vehículo (habitáculo, salpicadero, conjunto A/C, motor térmico, circuito de frío y circuito de calor) mediante una centralita electrónica para regular el flujo de aire, la temperatura y la distribución. (págs. 1-6)

## Desarrollo

El funcionamiento integrado del sistema se organiza a través de las interacciones entre sus entornos:
- **Habitáculo y salpicadero:** El aire soplado por los difusores se mezcla con el aire ambiente para alcanzar la temperatura de consigna. La masa térmica del salpicadero y las paredes influye directamente en el tiempo necesario para lograr el equilibrio térmico. (págs. 1-2)
- **Conjunto A/C:** Aloja el evaporador y el radiador de calefacción. Contiene el impulsor de aire y los actuadores que mueven las trampillas según las órdenes de la centralita. (págs. 3, 5)
- **Motor térmico y circuitos térmicos:** El motor arrastra el compresor y la bomba de líquido refrigerante. El circuito de calor aporta la energía térmica a través del radiador de calefacción. (pág. 4)
- **Interacción de señales con la centralita:**
  - *Sonda de habitáculo:* Mide la temperatura interior real instantánea. (pág. 6)
  - *Sondas de aire soplado y exterior:* Determinan la posición de la trampilla de mezcla, el caudal de soplado y la distribución. (págs. 6-7)
  - *Sonda del evaporador:* Detecta la formación de hielo y ordena el corte del compresor en sistemas de cilindrada fija. (págs. 3, 7)
  - *Presostato:* Supervisa las presiones del fluido frigorífico; desacopla el compresor ante presiones anómalas y activa la velocidad rápida del electroventilador (GMV) si la presión sube en el condensador. (págs. 5, 7)
  - *Termocontacto y módulo de refrigeración:* Activan la velocidad rápida del GMV cuando la temperatura del refrigerante del motor es excesiva. (págs. 4, 7)
  - *Módulo de inyección:* Desconecta temporalmente el compresor en aceleraciones intensas para no restar potencia al motor y eleva el régimen de ralentí cuando el compresor entra en servicio. (págs. 4, 7)

## Errores de concepto frecuentes

- Asumir que la temperatura interior depende exclusivamente de la temperatura del aire soplado, sin considerar la influencia térmica inicial de las paredes del habitáculo y del salpicadero. (págs. 1-2)
- Considerar que la centralita de climatización funciona aislada del sistema de gestión del motor térmico y de la refrigeración. (págs. 4, 7)

## Imágenes requeridas

- Diagrama general de interacciones entre los entornos del vehículo y la tarjeta electrónica de climatización — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 6
