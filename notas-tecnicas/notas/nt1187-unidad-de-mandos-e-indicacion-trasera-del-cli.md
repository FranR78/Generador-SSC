---
id: ssc.sin-clasificar.unidad-de-mandos-e-indicacion-trasera-del-climatizador
modulo: ssc
unidad: sin-clasificar
nt: 1187
titulo: "Unidad De Mandos E Indicación Trasera Del Climatizador"
codigo: "E265"
ubicacion: "En la parte posterior de la consola central, orientada hacia las plazas de la segunda fila"
aplicacion: "Regulación de temperatura y asientos calefactados traseros en el SEAT Tarraco"
menu: "Unidad De Mandos E Indicación  E265"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Permitir a los ocupantes de las plazas traseras seleccionar la temperatura deseada para la.ª zona y activar la calefacción de los asientos laterales traseros.

## Principio de funcionamiento

Unidad de mando electrónica esclava. Registra la posición de los pulsadores de selección térmica y de los asientos calefactados (ZX10/ZX12) y transmite esta información a la UCE J255 a través de la línea de datos LIN-Bus Clima.

## Características

Unidad compacta con display digital y botones de ajuste, abonada a la línea LIN-Bus Clima.

## Valores de trabajo

Alimentación eléctrica a 12 V protegida por el fusible SC51; comunicación digital LIN-Bus.

## Anomalías frecuentes

Daños mecánicos o sulfatación de conectores por vertido accidental de líquidos desde las plazas traseras.

## Comportamiento en avería

Imposibilidad de ajustar la temperatura trasera desde la.ª fila y pérdida del control de la calefacción de los asientos traseros. La UCE J255 asume el control de la zona trasera en modo de emergencia.

## Cómo comprobarlo

Verificar la tensión de alimentación (+12 V en fusible SC51 y masa) y comprobar con osciloscopio la trama de datos de la línea LIN-Bus Clima en el conector de E265.
