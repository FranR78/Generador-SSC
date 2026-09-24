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

📷 IMAGEN: Diagrama general de interacciones entre los entornos del vehículo y la tarjeta electrónica de climatización — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 6

## Valores de referencia
No documentado en fuentes.

## Errores de concepto frecuentes
- Asumir que la temperatura interior depende exclusivamente de la temperatura del aire soplado, sin considerar la influencia térmica inicial de las paredes del habitáculo y del salpicadero. (págs. 1-2)
- Considerar que la centralita de climatización funciona aislada del sistema de gestión del motor térmico y de la refrigeración. (págs. 4, 7)

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
Procesar las señales de las sondas y captadores para calcular y enviar las órdenes de activación hacia los actuadores de trampillas, el impulsor de aire, el electroventilador y el compresor. (págs. 6-8)

## Tipos y características
Centralita o calculador electrónico equipado con microprocesador, ubicado físicamente en el tablero de mandos detrás de la pantalla y de los botones de control. Dispone de canales de entrada, salida y líneas de comunicación bidireccionales. (págs. 6, 8)

## Principio de funcionamiento
Recibe las solicitudes del usuario desde el tablero de mandos y analiza de forma continua las señales de entrada de las sondas térmicas (habitáculo, exterior, aire soplado, evaporador) y del presostato. Con esta información, emite señales de salida para posicionar los actuadores de las trampillas, variar la velocidad del impulsor de aire, acoplar o desacoplar el compresor y activar el electroventilador (GMV). Mantiene comunicación bidireccional con el módulo de inyección del motor y el módulo electrónico de refrigeración. (págs. 6-8)

📷 IMAGEN: Esquema del calculador electrónico indicando los canales de entrada, salida y enlaces bidireccionales — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 8

## Valores de trabajo
No documentado en fuentes.

## Anomalías frecuentes
No documentado en fuentes.

## Comportamiento en avería
No documentado en fuentes.

## Cómo comprobarlo
No documentado en fuentes.

## Mantenimiento
No documentado en fuentes.

COBERTURA: documento «LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF», páginas 1 a 8 de 8. [completo]