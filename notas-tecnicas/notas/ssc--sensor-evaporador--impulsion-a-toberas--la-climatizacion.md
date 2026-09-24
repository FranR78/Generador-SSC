---
id: ssc.sensor-evaporador.impulsion-a-toberas.la-climatizacion
modulo: ssc
unidad: clima
nt: 293
tipo: elemento
clase: componente
titulo: "Sensor de temperatura del aire impulsado al habitáculo"
menu: "Sensor de temperatura del aire impulsa"
grupo: "Control de climatización"
clave: sensor-evaporador
variante: impulsion-a-toberas
area: climatizacion
sistema: "control-climatizacion"
fuentes: "LA CLIMATIZACIÓN.pdf, págs. 114"
relacionados: ["unidad-control-climatizador", "evaporador"]
palabras: ["sensor de impulsión", "conducto de aire", "NTC", "valor sustitutivo +80 ºC"]
---

## Misión

Medir la temperatura del aire fresco tras atravesar el evaporador, antes de ser distribuido al habitáculo. (pág. 114).

## Tipos y características

Sensor de resistencia NTC instalado en el conducto principal de salida de la caja de distribución de aire. (pág. 114).

## Principio de funcionamiento

Sumergido en la corriente de aire, su resistencia eléctrica aumenta al bajar la temperatura. La UEGAA procesa la señal para modular la mezcla de aire y el caudal soplado por la turbina. (pág. 114).

## Valores de trabajo

Valor por defecto asignado en avería: +80 ºC. (pág. 114).

## Anomalías frecuentes

Interrupción del circuito eléctrico o cortocircuito de la resistencia NTC. (pág. 114).

## Comportamiento en avería

La UEGAA asume un valor sustitutivo fijo de +80 ºC y mantiene el sistema en funcionamiento pero descompensado. (pág. 114).

## Cómo comprobarlo

Medir la resistencia con multímetro o verificar la temperatura en bloques de medición con la máquina de diagnosis. (págs. 114, 163).

## Mantenimiento

Verificación del ajuste de su conector estanco en el cuerpo de la caja climática. (pág. 114).
