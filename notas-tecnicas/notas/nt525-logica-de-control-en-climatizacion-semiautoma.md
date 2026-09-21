---
id: ssc.sin-clasificar.logica-de-control-en-climatizacion-semiautomatica-y-automatica
modulo: ssc
unidad: clima
nt: 525
tipo: proceso
subtipo: fundamento
titulo: "Lógica De Control En Climatización Semiautomática Y Automática"
menu: "Lógica De Control En Climatización Sem"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el procesamiento de variables de entrada y salida de la UCE de climatización para la regulación del confort del habitáculo.

## Fundamento

La centralita procesa señales analógicas y digitales de sensores térmicos, de presión y de radiación para regular automáticamente los motores de las trampillas, el caudal de la turbina y la activación del compresor.

## Condiciones previas

Encendido conectado y mando de climatización activado.

## Desarrollo

- **Variables de entrada:** Temperatura exterior, temperatura del habitáculo, temperatura del evaporador, temperatura del aire mezclado, selección de temperatura del usuario, selector de soplado (auto/manual), posición de recirculación, presión del circuito A/C (presostato/transmisor), fotosensor de radiación solar G107, régimen del motor y velocidad del vehículo.  
- **Variables de salida:** Relé del compresor A/C, motor de la trampilla de mezcla, motores de trampillas de distribución, motor de trampilla de recirculación, mando del ventilador de la cabina (vía reóstato o módulo de potencia), display e interfaz de diagnosis.

## Valores de referencia

Tensión de alimentación general: 12 V CC.

## Interpretación y errores frecuentes

- Diagnosticar falta de gas cuando el problema es un fallo en el servomotor de la trampilla de mezcla o en el reóstato de velocidades.

## Verificación final

Respuesta lógica de los actuadores al modificar los mandos de consigna en el panel de control.
