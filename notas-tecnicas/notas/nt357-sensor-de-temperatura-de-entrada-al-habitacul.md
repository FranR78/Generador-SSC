---
id: ssc.sin-clasificar.sensor-de-temperatura-de-entrada-al-habitaculo
modulo: ssc
unidad: clima
nt: 357
titulo: "Sensor De Temperatura De Entrada Al Habitáculo"
ubicacion: "Alojado en la caja de distribución de aire, en el conducto de salida tras el evaporador"
aplicacion: "Climatización automática"
menu: "Sensor De Temperatura De Entrada Al Ha"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del aire tratado que ha atravesado el evaporador antes de que penetre al habitáculo.

## Principio de funcionamiento

Sensor termistor de Coeficiente de Temperatura Negativo (NTC). Su resistencia aumenta a medida que baja la temperatura del flujo de aire. La UEGAA utiliza su señal para distribuir el aire y regular la velocidad de la turbina.

## Características

Sonda NTC de varilla alojada en la canalización principal.

## Valores de trabajo

| Estado del sensor | Valor supletorio asignado | Condiciones de validez |
|---|---|---|
| **Avería / Ausencia de señal** | **+80 ºC (Valor por defecto)** | La UEGAA se mantiene en funcionamiento |

## Anomalías frecuentes

Rotura del conector o corte del hilo NTC.

## Comportamiento en avería

Distribución errática de aire y registro del fallo en la memoria de la UEGAA.

## Cómo comprobarlo

Medir la resistencia del sensor NTC con multímetro y consultar la lectura en la máquina de diagnosis.
