---
id: ssc.sin-clasificar.unidad-de-control-y-turbina-de-aire-fresco
modulo: ssc
unidad: sin-clasificar
nt: 173
titulo: "Unidad De Control Y Turbina De Aire Fresco"
codigo: "J126 (Unidad de control/Regulador) / V2 (Motor de la turbina)"
ubicacion: "Montados en la caja de aspiración de aire, detrás de la guantera del acompañante"
aplicacion: "Sistema de ventilación del habitáculo del Audi A5 Coupé 2008"
menu: "Unidad De Control Y Turbina De J126 (Unidad de control/Regulador) / V2 (Motor de la turbina)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Impulsar el caudal de aire fresco exterior o recirculado a través de la unidad climática hacia los difusores del habitáculo.

## Principio de funcionamiento

La UCE -J255- transmite la solicitud de velocidad por el bus LIN hacia el regulador electrónico -J126-. La etapa de potencia de -J126- ajusta la tensión continua aplicada al motor -V2- mediante regulación de masa, variando suavemente las revoluciones del rodete.

## Características

- Motor eléctrico -V2- de corriente continua con rodete centrífugo de álabes equilibrado dinámicamente.  
- Regulador electrónico -J126- provisto de disipador térmico de aluminio refrigerado por el propio flujo de aire de aspiración.

## Valores de trabajo

| Parámetro / Condición | Valor numérico | Condición de medida |
|---|---|---|
| **Tensión teórica de soplado** | 2,0 V (mínimo) a 12,0 V (máximo / HI) | Medido en bloque 066 campo 4 |
| **Tensión en modo recirculación / clima indep.** | Limitada a max. 7,0 V (canal adaptación 15) | Para reducir sonoridad de soplado |
| **Consumo de corriente máximo** | Hasta 20 - 25 A | A máxima velocidad de turbina |

## Anomalías frecuentes

Desgaste de escobillas del motor -V2-; sobrecalentamiento del disipador de -J126- por filtro antipolen atascado; o ruidos y vibraciones por rotura de álabes del rodete.

## Comportamiento en avería

La turbina no gira o se queda fija en la máxima velocidad. La UCE -J255- registra el código DTC de -J126- o -V2-.

## Cómo comprobarlo

1. Consultar el bloque de valores 066 en J255: Campo 1 (corriente teórica A), Campo 3 (tensión efectiva V) y Campo 4 (tensión teórica V).  
2. En diagnosis de actuadores: Activar la turbina -V2- y verificar el incremento progresivo del caudal de aire y de la tensión.
