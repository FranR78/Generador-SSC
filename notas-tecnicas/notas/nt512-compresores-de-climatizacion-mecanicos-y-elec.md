---
id: ssc.sin-clasificar.compresores-de-climatizacion-mecanicos-y-electronicos
modulo: ssc
unidad: clima
nt: 512
titulo: "Compresores De Climatización (Mecánicos Y Electrónicos)"
ubicacion: "Montado en el bloque motor y accionado por la correa auxiliar"
aplicacion: "Generación de la presión de envío en el circuito frigorífico"
menu: "Compresores De Climatización (Mecánico"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Aspirar el fluido refrigerante en estado gaseoso a baja presión, comprimirlo e impulsarlo a alta presión y temperatura hacia el condensador.

## Principio de funcionamiento

- *Alternativo rígido (York / Sanden SD):* Pistones axiales o verticales accionados por cigüeñal o plato inclinado fijo.  
- *Rotativo de paletas:* Rotor excéntrico dentro de un estátor; las paletas se deslizan por fuerza centrífuga formando cámaras de compresión variables.  
- *Rotativo de espiral (Scroll):* Una espiral móvil realiza una órbita sobre una fija, reduciendo progresivamente el volumen de las bolsas de gas hacia el centro.  
- *Cilindrada variable mecánica (Harrison V5 / Sanden variable):* Una válvula de regulación interna con cápsula elástica ajusta la presión del cárter (PC) variando el ángulo del plato porta-pistones de 5 % a 100 %.  
- *Cilindrada variable electrónica (Denso 6SEU12):* Sin embrague. Regulado exteriormente por una electroválvula pilotada por la UCE mediante señal PWM a 500 Hz (frecuencia que mantiene el empujador en estado flotante) variando el rendimiento entre el 2 % y el 98 %.

## Características

- York: Compresor alternativo de pistones verticales.  
- Denso 6SEU12: Sin acoplamiento electromagnético; polea con sistema de seguridad de goma/grafito de rotura programada si se bloquea el eje.

## Valores de trabajo

| Modelo de compresor | Capacidad de lubricante | Tipo / Regulación |
|---|---|---|
| **Sanden SD 508** | **175 cc** | Cilindrada fija |
| **Sanden SD 709 / SD7H13 / SD7H15** | **135 cc** | Cilindrada fija |
| **Harrison V5** | **265 cc** | Cilindrada variable mecánica |
| **York 9 inch / 10 inch** | **285 cc** | Cilindrada fija |
| **Denso 6SEU12** | Señal PWM **500 Hz** (2 % a 98 % duty) | Regulación electrónica externa |

## Anomalías frecuentes

Gripado por falta de lubricación; corrosión e inoculación de ácido por humedad; rotura de válvulas de láminas por golpe de ariete.

## Comportamiento en avería

Igualación de las presiones de alta y baja con la polea girando; ruidos mecánicos intensos.

## Cómo comprobarlo

Medición de presiones hidráulicas con manómetros e inspección con osciloscopio de la señal PWM a 500 Hz en la electroválvula Denso.
