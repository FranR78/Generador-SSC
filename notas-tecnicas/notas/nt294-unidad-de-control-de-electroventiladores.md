---
id: ssc.sin-clasificar.unidad-de-control-de-electroventiladores
modulo: ssc
unidad: clima
nt: 294
titulo: "Unidad De Control De Electroventiladores"
codigo: "J293"
ubicacion: "Vano motor, fijada sobre el larguero o soporte del radiador"
aplicacion: "Gestión de potencia de ventiladores y acoplamiento en vehículos del grupo VAG"
menu: "Unidad De Control De Electrove J293"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Procesar las señales de entrada de presión y temperatura para excitar los relés de potencia de los ventiladores del radiador y del acoplamiento N25 del compresor.

## Principio de funcionamiento

Módulo electrónico que recibe las informaciones del termoconmutador F18, presostato F129/G819 y unidad E87. Procesa la lógica interna y conmuta los escalones de velocidad 1 y 2 para los ventiladores y la alimentación del acoplamiento N25.

## Características

Módulo estanco multi-pin con relés de potencia integrados.

## Valores de trabajo

| Parámetro | Valor numérico |
|---|---|
| **Alimentación de potencia** | **12 V CC** protegidos por fusibles de potencia S |

## Anomalías frecuentes

Sulfatación de bornes de conexión; fogueo de las pistas de relé internas por sobreconsumo de los motores de ventilador.

## Comportamiento en avería

Inoperatividad total de los electroventiladores o falta de alimentación al acoplamiento N25 del compresor.

## Cómo comprobarlo

Verificar masas y alimentaciones con multímetro y realizar puenteado de comprobación de salidas hacia ventiladores y N25.
