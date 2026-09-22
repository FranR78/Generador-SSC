---
id: ssc.sin-clasificar.transmisor-de-alta-presion-y-valvula-reguladora-del-compresor
modulo: ssc
unidad: sin-clasificar
nt: 1124
titulo: "Transmisor De Alta Presión Y Válvula Reguladora Del Compresor"
codigo: "G65 (Transmisor de alta presión) / N280 (Válvula reguladora del compresor)"
ubicacion: "G65 montado en el tramo de alta presión del vano motor; N280 montada en la parte posterior del compresor de A/C"
aplicacion: "Climatronic en SEAT León (a partir de 04/2005) y gama VAG"
menu: "Transmisor De Alta Presión Y V G65 (Transmisor de alta presión) / N280 (Válvula reguladora del compresor)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

El transmisor G65 mide electrónicamente la presión del agente frigorífico para la gestión de seguridad y electroventiladores. La válvula N280 ajusta proporcionalmente la cilindrada y la potencia de bombeo del compresor sin embrague mecánico según las órdenes de la UCE Climatronic J255.

## Principio de funcionamiento

G65 es un sensor piezoeléctrico alimentado desde el fusible SC4 (5A) / línea 15a que emite una señal de onda cuadrada PWM hacia la UCE de red de a bordo J519 / J255. N280 es una electroválvula reguladora modulada por corriente desde el conector T20c (pines 19 y 20) de la UCE Climatronic J255.

## Características

* G65: Sensor de 3 vías (Pin: masa en punto 672/85; Pin: señal hacia J255/J519; Pin: +12 V desde fusible SC4 5A).
* N280: Electroválvula de 2 vías alimentada desde conector T20c/20 de J255 y masa en T20c/19 conectada a punto de masa.

## Valores de trabajo

* Fusibles de protección del sistema:
  - SC4 (5A): Alimentación de transmisor G65 e instrumentos.
  - SC16 (10A): Alimentación de unidad Climatronic J255.
  - SC22 (40A): Alimentación de potencia.
  - SC46 (5A): Alimentación de señales de control.

## Anomalías frecuentes

* G65: Sulfatación de los pines del conector de 3 vías por humedad en el vano motor o derivas en la señal PWM.
* N280: Cortocircuito o interrupción de la bobina electromagnética por sobrecalentamiento.

## Comportamiento en avería

Si el transmisor G65 falla, la UCE desactiva el compresor y no autoriza su marcha por falta de señal de presión. Si la válvula N280 falla o se corta su cableado, el compresor se queda a mínimo rendimiento (cilindrada mínima) y el sistema no enfría.

## Cómo comprobarlo

* En G65: Medir tensión de alimentación (+12 V en pin 3), continuidad de masa en pin 1 y comprobar la señal PWM con osciloscopio en el pin.
* En N280: Medir la resistencia ohmica de la bobina con un polímetro (desconectado) y verificar la presencia de la señal de modulación desde el conector T20c de J255.

## Imágenes requeridas

- Esquema de conexiones eléctricas del transmisor G65, válvula N280 y fusibles SC en Climatronic — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 2 (León)
