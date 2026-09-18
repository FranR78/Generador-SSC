---
nt: 75
tipo: proceso
subtipo: fundamento
titulo: "Regulación Automática De La Climatización"
menu: "Regulación Automática De La Climatizac"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar el funcionamiento y control electrónico de la temperatura, caudal y distribución en climatizadores automáticos. Se aplica para la diagnosis y análisis funcional de sistemas gestionados por UCE y servomotores con potenciómetros.

## Fundamento

El conductor únicamente selecciona la temperatura deseada. La UCE procesa las señales de los sensores térmicos, fotosensores e información transmitida por CAN-Bus (velocidad del vehículo, revoluciones del motor, tiempo parado), calcula los valores teóricos programados y gobierna los servomotores de las trampillas y el regulador de la turbina.

## Condiciones previas

* Encendido en posición "borne 15".  
* Selección de la temperatura deseada en el panel.

## Equipo y material

* UCE del climatizador e interfaz del panel de mandos.  
* Servomotores eléctricos con potenciómetros de posición.  
* Equipo de diagnosis OBD / Polímetro / Osciloscopio.

## Desarrollo

1. Recepción de lecturas enviadas por los sensores de temperatura, fotosensores e información de la red CAN-Bus.  
2. Procesamiento de datos e identificación de la demanda térmica del conductor.  
3. Alimentación de los servomotores eléctricos para posicionar las trampillas de mezcla, retención, recirculación y distribución.  
4. Regulación progresiva del caudal mediante el regulador de la turbina de aire fresco.  
5. Realimentación continua de la posición de cada servomotor a la UCE mediante potenciómetros internos.  
6. Registro de fallos en la memoria no volátil de la UCE en caso de avería de un sensor o actuador.

## Valores de referencia

| Parámetro / Componente | Valor | Condiciones de validez |
| ----- | ----- | ----- |
| Alimentación de sensores | 5 V (tensión continua) | Conmutador de encendido en "borne 15" |

## Interpretación y errores frecuentes

Si algún elemento no envía información o no actúa correctamente, la UCE registra la avería en la memoria de diagnóstico DTC.

## Verificación final

Comprobación de códigos de avería (DTC) y comprobación en bloques de valores de medida de las posiciones de servomotores y lecturas de sensores mediante equipo de diagnosis.

## Seguridad y normativa

Registro de incidencias en memoria de averías para diagnóstico mediante protocolo EOBD/OBD.

## Imágenes requeridas

- Esquema funcional de un climatizador automático mostrando los sensores de la unidad climática, servomotores con potenciómetro para trampillas, evaporador y radiador — Fuente: 13. Climatización Electrónica.pdf, pág. 101
