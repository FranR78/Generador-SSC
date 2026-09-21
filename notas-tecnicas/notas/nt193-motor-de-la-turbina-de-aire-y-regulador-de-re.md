---
id: ssc.sin-clasificar.motor-de-la-turbina-de-aire-y-regulador-de-regimen
modulo: ssc
unidad: clima
nt: 193
titulo: "Motor De La Turbina De Aire Y Regulador De Régimen"
codigo: "V2 (Motor de la turbina) / J126 (Regulador de régimen)"
ubicacion: "Alojados en la cavidad de entrada de la unidad climática"
aplicacion: "Calefacción motorizada y Autoclima"
menu: "Motor De La Turbina De Aire Y  V2 (Motor de la turbina) / J126 (Regulador de régimen)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Generar y ajustar de forma continua el caudal de aire impulsado al interior del habitáculo.

## Principio de funcionamiento

El regulador electrónico J126 recibe la tensión de mando de J255 y modula la tensión continua aplicada al motor V2 de la turbina.

## Características

Motor eléctrico de corriente continua alimentado a través de la etapa de potencia electrónica J126.

## Valores de trabajo

| Diagnóstico de actuadores (Función 03) | Respuesta de regulación |
|---|---|
| **Verificación de la turbina V2** | Regulación progresiva de la velocidad desde 0 hasta la máxima, en pasos de 2,5 V cada 2 segundos |

## Anomalías frecuentes

Desgaste de escobillas del motor V2; fallo de transistores en el regulador J126.

## Comportamiento en avería

La avería es detectable al disminuir notablemente o cesar por completo la entrada de aire al habitáculo.

## Cómo comprobarlo

Consultar la tensión solicitada y real de V2 en el grupo 005 (campos 1 y 2) del bloque de valores de medición. Probar el barrido de tensión en el test de actuadores.
