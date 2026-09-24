---
id: ssc.unidad-control-aire-acondicionado.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 206
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Unidad de control del aire acondicionado J293"
codigo: "J293"
menu: "Unidad de control del aire aco J293"
grupo: "Control de climatización"
clave: unidad-control-aire-acondicionado
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 29"
relacionados: ["embrague-compresor", "electroventilador-condensador", "presostato"]
palabras: ["J293", "rele de aire acondicionado", "acoplamiento magnético", "ventiladores", "corte por motor"]
---

## Objeto

Gestionar la alimentación eléctrica de potencia hacia el acoplamiento magnético N25 del compresor y la excitación de los electroventiladores V7 y V35. (pág. 29).

## Fundamento

Recibe las solicitudes de conexión desde la unidad de climatización J255 y contrasta dichas órdenes con los interruptores de seguridad de presión (F129/G65), temperatura de agua (F38/F18) y las señales de inhibición enviadas por la unidad de control del motor. (pág. 29).

## Desarrollo

1. Control del acoplamiento magnético N25:
   - Para conectar N25 requiere recibir la señal de positivo desde la UCE J255. Dicha señal debe atravesar previamente el conmutador de presión F129 (cerrado en rango 2-32 bares) y el interruptor térmico F38 (cerrado con t > 5 ºC) o bien estar en margen correcto en el sensor G65. (pág. 29).
   - Simultáneamente exige la ausencia de señal de masa enviada por la UCE del motor (quien inhibe el compresor en aceleración brusca, kick-down, primeros 10 s tras arranque o falta de r.p.m.). (págs. 18, 29).
2. Control de ventiladores V7 y V35:
   - Conecta la 1ª velocidad al activarse el compresor o por señal de 95 ºC del termocontacto F18. (pág. 29).
   - Conecta la 2ª velocidad si la presión del circuito alcanza 16 bares (vía F129/G65) o el refrigerante alcanza 105 ºC (vía F18). (pág. 29).

## Valores de referencia

Inhibición por UCE de motor: envío de masa a la unidad J293.
Corte de compresor por baja presión: < 2 bares.
Corte de compresor por alta presión: > 32 bares. (págs. 16, 18, 29).

## Errores de concepto frecuentes

Sustituir la unidad J293 ante la falta de acoplamiento del compresor sin comprobar la línea de inhibición procedente de la UCE de motor; si la UCE de motor envía masa fija a la J293, el compresor no se conectará aunque el circuito frigorífico esté en perfectas condiciones. (págs. 18, 29).
