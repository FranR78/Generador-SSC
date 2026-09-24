---
id: ssc.sensor-temperatura-exterior.canal-aspiracion.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 624
tipo: elemento
clase: componente
titulo: "Termosensor en el conducto de aspiración G89"
codigo: "G89"
menu: "Termosensor en el conducto de  G89"
grupo: "Control de climatización"
clave: sensor-temperatura-exterior
variante: canal-aspiracion
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: distribucion-aire
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 17"
relacionados: ["sensor-temperatura-exterior", "unidad-control-climatizador"]
palabras: ["G89", "canalización", "aspiración aire fresco", "valor más bajo", "backup G17"]
---

## Misión

Servir como segundo punto de medición de la temperatura del aire exterior captando el flujo en el propio conducto de entrada de aire fresco. (pág. 17)

## Tipos y características

Sonda térmica de tipo NTC alojada en la embocadura del canal de aspiración de aire fresco delante de la turbina. (pág. 17)

## Principio de funcionamiento

Mide la temperatura del aire que entra directamente a la caja climática. La unidad de control compara continuamente los valores recibidos de G17 y G89, procesando siempre el valor de temperatura más bajo de los dos para evitar influencias por calor radiado en parado. (pág. 17)

## Valores de trabajo

- Criterio de selección de señal: procesa el menor valor entre G17 y G89. (pág. 17)

## Anomalías frecuentes

Suciedad o hojas acumuladas sobre la cabeza de la sonda. (pág. 17)

## Comportamiento en avería

El sistema pasa a utilizar exclusivamente la señal del sensor frontal G17. (pág. 17)

## Cómo comprobarlo

Verificar con equipo de diagnosis comparando los valores leídos entre G17 y G89. (pág. 17)

## Mantenimiento

Inspeccionar al sustituir el filtro de polvo/polen del habitáculo. (pág. 17)
