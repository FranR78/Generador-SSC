```yaml
tipo: fundamento
titulo: Sistemas de climatización automática e interacción de entornos
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "1-7"
relacionados: [unidad-control-climatizador, distribucion-aire]
palabras: [climatización automática, confort térmico, temperatura de consigna, entornos del vehículo, tarjeta electrónica]
```

## Objeto
Acondicionar el habitáculo del vehículo para alcanzar y mantener en su interior el confort térmico correspondiente a la temperatura de consigna seleccionada. (págs. 1-2)

## Fundamento
El sistema de climatización automática recopila datos y parámetros procedentes de diversos entornos funcionales del vehículo (habitáculo, salpicadero, conjunto A/C, motor térmico, circuito de calor y circuito de frío) para regular el funcionamiento de la instalación mediante una tarjeta electrónica o centralita. (págs. 1-6)

## Desarrollo
El funcionamiento global del sistema se estructura mediante las interacciones de sus entornos funcionales:
- **Habitáculo y salpicadero:** El aire soplado por los difusores se mezcla con el aire ambiente para alcanzar la temperatura de consigna. La calidad del aislamiento térmico, la temperatura inicial de las paredes y la conductividad térmica del salpicadero influyen directamente en el tiempo necesario para lograr la convergencia térmica. (págs. 1-2)
- **Conjunto A/C (distribución de trampillas):** Enlaza el compartimento motor con el habitáculo. Alberga el radiador de calefacción, el evaporador, el impulsor de aire y las trampillas con sus correspondientes actuadores. (págs. 3, 5, 6)
- **Motor térmico y circuitos térmicos:** El motor arrastra mediante correa el compresor y la bomba de líquido refrigerante. El circuito de calor aporta la energía térmica mediante el radiador de calefacción. (págs. 4, 5)
- **Interacción de señales con la centralita:**
  - *Sonda de habitáculo:* Informa de la temperatura interior instantánea para verificar si se ha alcanzado la consigna. (pág. 6)
  - *Sondas de aire soplado y exterior:* Informan si la posición de la trampilla de mezcla es la adecuada para alcanzar la temperatura elegida, así como el caudal de aire y la distribución necesarios. (pág. 7)
  - *Sonda del evaporador:* Informa si se está formando hielo en el evaporador para cortar el compresor en sistemas de cilindrada fija. (págs. 3, 7)
  - *Presostato:* Informa de la presión en el circuito de fluido frigorífico. Si la presión es excesiva o demasiado baja, manda cortar el compresor; si excede de un cierto valor, conecta la segunda velocidad del GMV (electroventilador). (págs. 5, 7)
  - *Termocontacto y módulo de refrigeración:* Conectan la segunda velocidad del GMV si la temperatura del líquido refrigerante es demasiado elevada en el radiador. (págs. 4, 7)
  - *Módulo de inyección:* Informa si se produce una aceleración brusca para cortar el compresor y no restar potencia al motor, e incrementa el régimen de ralentí cuando el compresor está conectado para evitar que el motor se cale. (págs. 4, 7)

📷 IMAGEN: Esquema general de interacciones entre los entornos del vehículo y la tarjeta electrónica del sistema de climatización — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 7

## Valores de referencia
No documentado en fuentes en las páginas 1-7.

## Errores de concepto frecuentes
- Creer que la temperatura interior depende únicamente de la temperatura del aire soplado, omitiendo la influencia térmica inicial del salpicadero y de las paredes del habitáculo. (págs. 1-2)
- Suponer que la centralita de climatización funciona de manera aislada sin comunicarse con los módulos electrónicos de inyección y refrigeración del motor. (págs. 4, 7)

---

```yaml
tipo: componente
titulo: Tarjeta electrónica de climatización
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "6-8"
forma_parte_de: control-climatizacion
relacionados: [regulacion-automatica, servomotor-trampilla]
palabras: [tarjeta electrónica, centralita, calculador, señales de entrada, señales de salida, conexiones bidireccionales]
```

## Misión
Gobernar y coordinar automáticamente el funcionamiento del sistema de climatización procesando la información de las sondas y captadores para enviar órdenes de control a los actuadores, impulsor, compresor y electroventiladores. (págs. 6-8)

## Tipos y características
Calculador o centralita electrónica ubicada habitualmente detrás de los mandos y de la pantalla del climatizador en el salpicadero. Dispone de canales de entrada, salidas de potencia e interfaces de comunicación bidireccionales. (págs. 6, 8)

## Principio de funcionamiento
Recibe las órdenes del usuario desde los mandos del cuadro y analiza de forma continua las señales de entrada procedentes de las sondas térmicas (habitáculo, exterior, aire soplado, evaporador) y del presostato. Con estos datos, emite señales de salida para posicionar los actuadores de las trampillas del conjunto de distribución, ajustar el caudal del impulsor de aire, acoplar o desacoplar el compresor y activar el electroventilador (GMV). Mantiene enlaces bidireccionales de intercambio de datos con los módulos electrónicos de inyección y refrigeración. (págs. 6-8)

📷 IMAGEN: Esquema de la tarjeta electrónica identificando las entradas de sondas/presostato, salidas hacia actuadores/GMV/compresor y enlaces bidireccionales con inyección y refrigeración — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 8

## Valores de trabajo
No documentado en fuentes en las páginas 6-8.

## Anomalías frecuentes
No documentado en fuentes en las páginas 6-8.

## Comportamiento en avería
No documentado en fuentes en las páginas 6-8.

## Cómo comprobarlo
No documentado en fuentes en las páginas 6-8.

## Mantenimiento
No documentado en fuentes en las páginas 6-8.

---

COBERTURA: documento «LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 8 de 8. [completo]