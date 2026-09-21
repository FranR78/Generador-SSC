---
id: ssc.sin-clasificar.conmutador-de-presion-f129-y-transmisores-de-alta-presion-g65
modulo: ssc
unidad: sin-clasificar
nt: 538
titulo: "Conmutador De Presión F129 Y Transmisores De Alta Presión G65"
codigo: "F129 / G65 / G395"
ubicacion: "Tubería de alta presión del circuito frigorífico"
aplicacion: "Protección de seguridad y gestión de electroventiladores"
menu: "Conmutador De Presión F129 Y T F129 / G65 / G395"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Supervisar los niveles de presión del circuito para proteger el compresor contra sobrepresión o falta de gas, y ordenar el salto de velocidad de los electroventiladores.

## Principio de funcionamiento

- **Conmutador F129:** Interruptor electromecánico de 3 funciones:  
  1. Salto a velocidad superior del ventilador a approx. 16 bar.  
  2. Desconexión por sobrepresión a approx. 32 bar.  
  3. Desconexión por falta de presión (fugas) a approx. 2 bar.  
- **Transmisor G65:** Sensor electrónico que emite una señal digital cuadrada de ancho de pulso modulado (PWM) proporcional a la presión.  
- **Transmisor G395:** Sensor electrónico con comunicación por bus LIN directamente integrado con la UCE Climatronic J255 (carcasa gris).

## Características

- F129 / G65: Carcasa negra roscada sobre válvula de servicio.  
- G395: Carcasa gris con electrónica para bus LIN.

## Valores de trabajo

| Dispositivo / Función | Umbral de presión de trabajo |
|---|---|
| **F129 Corte por baja presión** | **Approx. 2 bar de sobrepresión** |
| **F129 Activa ventilador 2ª Vel.** | **Approx. 16 bar de sobrepresión** |
| **F129 Corte por alta presión** | **Approx. 32 bar de sobrepresión** |

## Anomalías frecuentes

Confusión entre el transmisor G65 (señal PWM) y G395 (señal LIN) por similitud física.

## Comportamiento en avería

Desconexión de seguridad del embrague electromagnético N25 o falta de modulación de la electroválvula N280.

## Cómo comprobarlo

Consultar los valores de presión en el bloque de valores de medición del equipo de diagnosis o analizar la señal con osciloscopio/diagnosis LIN.
