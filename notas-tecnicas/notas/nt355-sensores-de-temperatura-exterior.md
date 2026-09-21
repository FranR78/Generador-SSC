---
id: ssc.sin-clasificar.sensores-de-temperatura-exterior
modulo: ssc
unidad: clima
nt: 355
titulo: "Sensores De Temperatura Exterior"
ubicacion: "Uno sobre la carrocería exterior y otro en el conducto de entrada de aire al evaporador"
aplicacion: "Climatizadores automáticos para la medición de la temperatura atmosférica"
menu: "Sensores De Temperatura Exterior"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del aire exterior e informar a la UEGAA para posicionar las trampillas de mezcla y regular la velocidad de la turbina.

## Principio de funcionamiento

Sensores termistores NTC de 2 vías. La UEGAA recibe la señal de ambos sensores y procesa siempre el valor de temperatura más bajo para evitar errores por calor radiado. Si el sensor exterior se avería, la UEGAA utiliza el del conducto; si ambos fallan, adopta un valor por defecto de +10 ºC e inhabilita el modo de recirculación.

## Características

Dos resistencias NTC independientes encapsuladas en plástico.

## Valores de trabajo

| Estado del sistema de medición | Criterio / Valor asignado | Consecuencia técnica |
|---|---|---|
| **Procesamiento normal de lectura** | **Selecciona el valor más bajo de ambos** | Evita falsas lecturas por radiación |
| **Fallo total de ambos sensores** | **+10 ºC (Valor por defecto)** | Inhabilita la función de recirculación |

## Anomalías frecuentes

Corte de hilos por golpes en el paragolpes; sulfatación de conectores.

## Comportamiento en avería

Desactivación del modo de recirculación de aire y registro del fallo en el autodiagnóstico.

## Cómo comprobarlo

Medir la resistencia de la NTC con un multímetro y consultar el valor mostrado en el equipo de diagnosis.
