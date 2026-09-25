---
id: ssc.ventilacion-solar.3-circuito-frigorigeno-1-al-4
modulo: ssc
unidad: clima
nt: 681
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Sistema de ventilación por energía solar"
menu: "Sistema de ventilación por energía sol"
grupo: "Distribución de aire"
clave: ventilacion-solar
area: climatizacion
sistema: "distribucion-aire"
fuentes: "3. CIRCUITO FRIGORÍGENO 1 AL 4.pptx, págs. 210-220"
relacionados: ["ventilador-habitaculo", "fuentes-de-calor-vehiculo"]
palabras: ["módulo solar", "celdas solares", "ECU ventilación solar", "53 W", "recirculación"]
---

## Objeto

Renovación del aire e introducción de aire fresco del exterior en el habitáculo mientras el vehículo se encuentra estacionado al sol, reduciendo el calentamiento interior sin consumir energía de la batería principal (pág. 210, 218, 224).

## Fundamento

Un módulo fotovoltaico instalado en el techo del vehículo genera energía eléctrica con la luz solar para alimentar el motor del ventilador del habitáculo mientras el contacto está apagado (pág. 210, 211, 214).

## Desarrollo

- **Componentes de la instalación**:
  - **Módulo solar**: Integrado en el techo, compuesto por 36 celdas fotovoltaicas (pág. 214).
  - **ECU de ventilación solar**: Unidad de control que gestiona el funcionamiento según parámetros de radiación y tiempo (pág. 211).
  - **Motor del ventilador**: Motor sin escobillas accionado a través de un relé específico (pág. 206, 209, 211).
  - **Servomotores de entrada y salida de aire**: Posicionan las trampillas en entrada de aire exterior y modo frontal (pág. 211, 218).
- **Condiciones de funcionamiento**:
  - **Condiciones de inicio**: Botón de arranque en OFF, botón de ventilación solar en ON, transcurridos aproximadamente 10 minutos desde el apagado del vehículo e irradiación solar mayor o igual a 500 W/m² (pág. 216, 218).
  - **Condiciones de parada**: Botón de arranque en IG-ON, botón de ventilación en OFF, irradiación menor a 500 W/m² durante más de 5 minutos, o voltaje solar fuera de rango (< 10 V o > 18 V) (pág. 216, 217).

## Valores de referencia

- Potencia máxima de salida del módulo solar: 53 W (a 1.000 W/m² de irradianza y 25 ºC de temperatura de celda) (pág. 214).
- Umbral de irradianza solar de trabajo: 500 W/m² (pág. 216).
- Tensión de trabajo del módulo solar: 10 V a 18 V (pág. 217).
- Retardo de inicio tras estacionar: 10 minutos (pág. 216, 218).

## Errores de concepto frecuentes

Pensar que la ventilación solar enciende el compresor de aire acondicionado, cuando únicamente acciona el ventilador del habitáculo para renovar el aire (pág. 210, 218).

## Imágenes requeridas

- Esquema eléctrico y posición de componentes del sistema de ventilación solar en el vehículo — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL.pptx, pág. 211 y 212 (pág. 211, 212)
- Diagrama de tiempos de funcionamiento de la ventilación solar con el vehículo aparcado — Fuente: 3. CIRCUITO FRIGORÍGENO 1 AL.pptx, pág. 218 (pág. 218)
