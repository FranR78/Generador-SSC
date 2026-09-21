---
id: ssc.sin-clasificar.logica-de-control-y-gestion-de-la-tarjeta-electronica
modulo: ssc
unidad: clima
nt: 394
tipo: proceso
subtipo: fundamento
titulo: "Lógica De Control Y Gestión De La Tarjeta Electrónica"
menu: "Lógica De Control Y Gestión De La Tarj"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la arquitectura de entradas, salidas y comunicaciones bidireccionales de la tarjeta electrónica (centralita) para la regulación automática de la climatización.

## Fundamento

La tarjeta electrónica actúa como el calculador central del sistema. Recibe informaciones de sensores (entradas) sobre temperaturas y presiones, procesa las órdenes del usuario y la lógica de confort, y emite señales de mando (salidas) hacia actuadores de trampillas, impulsor, GMV y compresor. Asimismo, mantiene comunicación bidireccional con los módulos de inyección y refrigeración del motor.

## Condiciones previas

Encendido conectado y alimentación eléctrica de la centralita.

## Desarrollo

- **Procesamiento de Entradas (Sondas y Sensores):**  
  - *Sonda de habitáculo:* Informa de la temperatura real interior.  
  - *Sondas exterior y de aire soplado:* Informan para calcular la posición de la trampilla de mezcla, el caudal y la distribución.  
  - *Sonda de evaporador:* Informa del riesgo de hielo para cortar el compresor.  
  - *Presostato y termocontacto:* Informan de presiones y temperaturas críticas para proteger el circuito y activar el GMV.  
- **Gestión de Salidas (Actuadores y Potencia):**  
  - *Actuadores:* Reciben señales para mover las trampillas del conjunto A/C.  
  - *Impulsor:* Recibe la señal para regular el caudal de aire soplado.  
  - *Compresor y GMV:* Reciben órdenes de acoplamiento/desacoplamiento y cambio de velocidad.  
- **Relación Bidireccional con Módulos del Vehículo:**  
  - *Módulo de inyección:* Coordina el corte en aceleración brusca y la elevación de ralentí.  
  - *Módulo electrónico de refrigeración:* Intercambia parámetros de temperatura de motor y demanda de calefacción/refrigeración.

## Interpretación y errores frecuentes

- Intentar diagnosticar el climatizador automático sin considerar las señales de los módulos de inyección o refrigeración: una falta de señal de aceleración o de temperatura del motor puede bloquear el compresor aunque el circuito frigorífico esté perfecto.

## Imágenes requeridas

- Esquema de entradas, salidas y conexiones bidireccionales de la tarjeta electrónica — Fuente: LOS SISTEMAS DE CLIMATIZACION AUTOMATICA.PDF, pág. 6-8
