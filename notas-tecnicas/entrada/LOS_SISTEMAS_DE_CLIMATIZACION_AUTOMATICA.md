```yaml
tipo: fundamento
titulo: Regulación de la climatización automática y sus entornos
entidad: regulacion-automatica
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "1-7"
relacionados: [unidad-control-climatizador, distribucion-aire, circuito-frigorifico]
palabras: [climatización automática, confort térmico, sondas, actuadores, entorno motor, conjunto A/C]
```

## Objeto
Acondicionar el aire del habitáculo de forma automática para alcanzar y mantener la temperatura de consigna deseada por los ocupantes, garantizando el confort térmico. (pág. 1).

## Fundamento
El sistema impulsa el aire exterior a través del evaporador y del radiador de calefacción mediante el conjunto de distribución de trampillas y los conductos. El aire soplado sale por los difusores y se mezcla con el aire ambiente del habitáculo hasta alcanzar la temperatura de consigna seleccionada. La convergencia térmica depende del aislamiento y de la temperatura inicial de las paredes del habitáculo, del salpicadero y del conjunto de instrumentos. (págs. 1-2).

## Desarrollo
El funcionamiento de la climatización automática se articula mediante la interacción de diversos entornos del vehículo con la centralita electrónica:

1. Entorno del habitáculo y salpicadero:
- Tablero de mandos: alberga la pantalla de presentación (temperatura de consigna, velocidad de ventilación y distribución) y los mandos de control.
- Sonda de temperatura del habitáculo: situada en el salpicadero o en el propio tablero de mandos, informa a la centralita de la temperatura interior instantánea.
- Sonda de temperatura exterior: colocada habitualmente en el retrovisor derecho, transmite la temperatura atmosférica.
- Sonda de aire soplado: alojada en el conjunto de trampillas (en difusores frontales, pies o parabrisas), informa junto con la sonda exterior para determinar la posición de la trampilla de mezcla, el caudal y la distribución necesarios.

2. Entorno del conjunto A/C (distribución de trampillas):
- Alberga el evaporador (productor de frío) y el radiador de calefacción (intercambiador de calor).
- Impulsor: garantiza la circulación del caudal de aire hacia el interior por orden de la centralita.
- Sonda del evaporador: ubicada en la zona más fría del evaporador, manda una señal para cortar el compresor de cilindrada fija si hay riesgo de congelación.
- Actuadores: mueven las trampillas de distribución y mezcla según las señales de la centralita.

3. Entorno del motor térmico y circuito de calor:
- El motor arrastra mediante correa el compresor y la bomba de líquido refrigerante.
- La bomba hace circular el refrigerante por el motor y el radiador de calefacción.
- Sonda de temperatura del líquido refrigerante y termocontacto: informan a la centralita si la temperatura del motor es elevada para cortar el compresor o activar la segunda velocidad del electroventilador (GMV).

4. Entorno del circuito de frío y protecciones:
- Presostato: mide la presión del fluido frigorífico; si es excesiva o demasiado baja manda cortar el compresor. Si la presión excede un determinado valor, conecta la segunda velocidad del electroventilador (GMV) para bajar la presión en el condensador.
- Módulo de inyección motor: informa a la centralita si se produce una aceleración brusca para cortar el compresor y no restar potencia al motor. A su vez, recibe información del estado del compresor para aumentar el régimen de ralentí y evitar que el motor se cale.

📷 IMAGEN: Esquema de interacción de los entornos del vehículo con el sistema de climatización automática — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 7

## Valores de referencia
No documentado en fuentes. (págs. 1-8).

## Errores de concepto frecuentes
No documentado en fuentes. (págs. 1-8).

---

```yaml
tipo: componente
titulo: Centralita de climatización
entidad: unidad-control-climatizador
area: climatizacion
sistema: control-climatizacion
fabricante: Valeo
fuente: "LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF"
paginas: "7-8"
relacionados: [regulacion-automatica, servomotor-trampilla, presostato]
palabras: [tarjeta electrónica, centralita, calculador, señales de entrada, señales de salida, bidireccional]
```

## Misión
Regular el funcionamiento integral del sistema de climatización automática procesando las señales de los sensores del vehículo y gobernando los actuadores y equipos periféricos. (pág. 8).

## Tipos y características
Tarjeta electrónica, centralita o calculador ubicada normalmente en el salpicadero, detrás de los mandos y de la pantalla del climatizador. Dispone de terminales para señales de entrada, señales de salida y conexiones bidireccionales. (pág. 8).

## Principio de funcionamiento
Procesa la información de entrada procedente de las sondas de temperatura (habitáculo, exterior, aire soplado, evaporador) y del presostato. Con estos datos y las órdenes introducidas desde el tablero de mandos, envía señales de salida a los actuadores de las trampillas, al módulo del impulsor, al electroventilador (GMV) y al acoplamiento del compresor. Mantiene comunicación bidireccional con el módulo de inyección motor (para desacoplar el compresor en aceleraciones y elevar el ralentí) y con el módulo electrónico de refrigeración. (págs. 7-8).

📷 IMAGEN: Esquema de entradas, salidas y conexiones bidireccionales de la tarjeta electrónica de climatización — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 8

## Valores de trabajo
No documentado en fuentes. (págs. 1-8).

## Anomalías frecuentes
No documentado en fuentes. (págs. 1-8).

## Comportamiento en avería
No documentado en fuentes. (págs. 1-8).

## Cómo comprobarlo
No documentado en fuentes. (págs. 1-8).

## Mantenimiento
No documentado en fuentes. (págs. 1-8).

COBERTURA: documento «LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 8 de 8. [completo]