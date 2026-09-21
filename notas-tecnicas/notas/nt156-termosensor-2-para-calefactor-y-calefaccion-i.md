---
id: ssc.sin-clasificar.termosensor-2-para-calefactor-y-calefaccion-independiente
modulo: ssc
unidad: sin-clasificar
nt: 156
titulo: "Termosensor 2 Para Calefactor Y Calefacción Independiente"
codigo: "G587"
ubicacion: "Montado en el cuerpo metálico del intercambiador de calor del calefactor [87, 98]"
aplicacion: "Protección de seguridad redundante contra sobrecalentamiento excesivo [87]"
menu: "Termosensor 2 Para Calefactor  G587"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Supervisar la temperatura física del cuerpo de aluminio del calefactor para prevenir daños estructurales por falta de flujo de agua [42, 87].

## Principio de funcionamiento

Termistor cuyo valor de resistencia cambia con la temperatura del aluminio de la camisa, permitiendo a la UCE comparar su lectura con la del sensor -G18- [87, 97].

## Características

Sonda de contacto térmico con cables de color blanco conectados a las celdas 7 y 8 del conector de 14 polos [37, 98, 99].

## Valores de trabajo

- Límite máximo de sobrecalentamiento admisible: 130 ºC (registra contador en bloque de medidas 012) [14, 42].  
- Umbrales de avería: Interrupción si resistencia > 2 MΩ; Cortocircuito si resistencia < 50 Ω [99].

## Anomalías frecuentes

Deformación del soporte de fijación o fallo interno del termistor [98, 99].

## Comportamiento en avería

Inscripción de avería en la UCE y desconexión inmediata del sistema [86, 87].

## Cómo comprobarlo

Medir la resistencia entre las celdas 7 y 8 del conector de 14 polos [98, 99].
