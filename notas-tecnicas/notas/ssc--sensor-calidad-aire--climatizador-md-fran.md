---
id: ssc.sensor-calidad-aire.climatizador-md-fran
modulo: ssc
unidad: clima
nt: 628
tipo: elemento
clase: componente
titulo: "Sensor de la calidad del aire G238"
codigo: "G238"
menu: "Sensor de la calidad del aire  G238"
grupo: "Control de climatización"
clave: sensor-calidad-aire
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "CLIMATIZADOR MD FRAN.docx, págs. 20-21"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["G238", "SnO2", "dióxido de estaño", "350 ºC", "CO", "NOx", "recirculación automática"]
---

## Misión

Detectar contaminantes en el aire atmosférico exterior para activar automáticamente la trampilla de recirculación antes de que penetren los malos olores al habitáculo. (págs. 20-21)

## Tipos y características

Sensor electrónico semiconductor de dióxido de estaño (SnO2) con aditivos catalíticos de platino y paladio. Va instalado en el canal de aspiración de aire fresco antes del filtro combinado. (págs. 20-21)

## Principio de funcionamiento

Funciona a una temperatura interna de servicio de 350 ºC (consumo de 0,5 W). Al aumentar la concentración de contaminantes (CO, hexano, benceno en gasolina; NOx, SO2, H2S en diésel), la conductividad del dióxido de estaño varía. Un microprocesador integrado evalúa el promedio y transmite una señal digital rectangular a la unidad de control, que cierra la entrada de aire exterior. (págs. 20-21)

## Valores de trabajo

- Temperatura interna de trabajo del semiconductor: aprox. 350 ºC. (pág. 21)
- Consumo eléctrico: 0,5 W. (pág. 21)
- Gases detectables en gasolina: CO, C6H14 (hexano), C6H6 (benceno), C7H16 (heptano). (pág. 21)
- Gases detectables en diésel: NOx (óxidos nítricos), SO2 (dióxido de azufre), H2S (ácido sulfhídrico). (pág. 21)

## Anomalías frecuentes

Deterioro por lavado del vano motor con productos desengrasantes agresivos. (pág. 21)

## Comportamiento en avería

Incapacidad para activar automáticamente la recirculación en zonas de alta contaminación urbana. (pág. 21)

## Cómo comprobarlo

Acercar cuidadosamente un empapado leve de vapor de gasolina o gas de mechero en el canal de entrada observando el cierre de la trampilla. (pág. 21)

## Mantenimiento

El sensor no sufre desgaste. Reemplazar el filtro combinado de carbón activo en los intervalos de inspección. (pág. 21)

## Imágenes requeridas

- Estructura interna del sensor de calidad del aire G238 con su electrónica de evaluación y sonda SnO2 — Fuente: CLIMATIZADOR MD FRAN.docx, pág. 21
