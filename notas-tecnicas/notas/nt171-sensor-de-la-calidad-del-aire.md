---
id: ssc.sin-clasificar.sensor-de-la-calidad-del-aire
modulo: ssc
unidad: clima
nt: 171
titulo: "Sensor De La Calidad Del Aire"
codigo: "G238"
ubicacion: "Montado en la caja de aguas, junto al conducto de entrada de aire fresco al climatizador"
aplicacion: "Climatizadores de la versión Komfort del Audi A5 Coupé 2008"
menu: "Sensor De La Calidad Del Aire G238"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Detectar la presencia de sustancias nocivas y gases contaminantes (CO y NOx) en el aire exterior para ordenar el cierre automático de la chapaleta de recirculación.

## Principio de funcionamiento

Sensor semiconductor de óxidos metálicos con microprocesador interno. Mide simultáneamente las concentraciones de monóxido de carbono CO (gases de gasolina) y óxidos de nitrógeno NOx (gases diésel). Modifica su resistencia interna y transmite la información vía LIN-Bus a la UCE -J519-, que la reenvía por CAN-Bus a -J255-.

## Características

- Sensor electrónico con conector de 3 polos (Pin: +12V Borne; Pin: Masa Borne; Pin: Señal LIN a J519).  
- Requiere un tiempo de calentamiento interno de **2 minutos** tras conectar el encendido para estabilizar la resistencia.

## Valores de trabajo

| Parámetro | Valor numérico | Condición de funcionamiento |
|---|---|---|
| **Tiempo de caldeo interno** | 2 minutos | Tras conectar el encendido "borne 15" |
| **Tiempo mínimo en recirculación** | 25 segundos | Mantenimiento tras detectar pico de contaminación |
| **Duración máxima en ambiente contaminado** | ~12 minutos | Programa de autoadaptación de sensibilidad |

## Anomalías frecuentes

Saturación o destrucción del elemento semiconductor por contacto directo con disolventes, petroleado del motor o lavados de motor; indicación de avería falsa durante los 2 minutos de calentamiento inicial.

## Comportamiento en avería

La UCE anula la recirculación automática y registra el código DTC. *(Nota: Solo debe sustituirse si la avería permanece estática pasados los 2 minutos de caldeo inicial)*.

## Cómo comprobarlo

1. Consultar el bloque de medición 058 (campos 1, 3 y 4) en J255.  
2. **Prueba práctica con gas de mechero:** Desmontar el sensor de su alojamiento, mantenerlo conectado, acceder al bloque de valores 058 y aplicar una pequeña ráfaga de gas de mechero sobre la cabeza del sensor; los valores de CO y NOx en los campos 3 y 4 deben subir de inmediato y el campo 3 del grupo 039 debe conmutar a modo recirculación.

## Imágenes requeridas

- Prueba funcional del sensor de calidad de aire G238 aplicando gas de mechero sobre el sensor — Fuente: Audi A5 Coupé_2008_aire acondicionado.pdf, pág. 197
