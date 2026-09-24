---
id: ssc.unidad-control-tensor-cinturon.ssp-484-a7-info-y-clima-arrastrado-2
modulo: ssc
unidad: clima
nt: 332
tipo: elemento
clase: componente
titulo: "Unidad de control del tensor del cinturón de seguridad"
codigo: "J854 / J855"
menu: "Unidad de control del tensor d J854 / J855"
grupo: "Seguridad pasiva"
clave: unidad-control-tensor-cinturon
area: confort-y-seguridad
sistema: "NUEVO-seguridad-pasiva"
forma_parte_de: cinturon-seguridad
marca: "Audi"
fuentes: "SSP 484 A7 Info y Clima (arrastrado) 2.pdf, págs. 16"
relacionados: ["unidad-control-airbag-j234", "can-bus-extended"]
palabras: ["J854", "J855", "tensor reversible", "electromotor", "3 niveles de fuerza", "CAN Extended"]
---

## Misión

Gobernar de forma electromecánica y reversible la tensión preventiva o de emergencia aplicada sobre los cinturones de seguridad delanteros en vehículos equipados con Audi presense basic o plus. (pág. 16).

## Tipos y características

Unidades de control electrónicas independientes (J854 para el cinturón delantero izquierdo y J855 para el derecho) integradas en el conjunto del cinturón. Se comunican a través del bus CAN Extended e interconectan con la interfaz de diagnosis J533. Gobiernan un motor eléctrico con accionamiento por engranaje, disco de arrastre y dos ganchos de acoplamiento al eje del carrete. (pág. 16).

## Principio de funcionamiento

Las unidades J854 y J855 accionan electromotores que varían la tensión del cinturón en tres niveles de fuerza según la situación de conducción:
1. Fuerza baja: eliminación de la holgura de la cinta.
2. Fuerza media: pretensado parcial preventivo.
3. Fuerza alta: pretensado completo de emergencia.
Al recibir señal de la unidad de control del airbag J234 ante un impacto leve que no requiera detonación pirotécnica, J854 y J855 activan los motores al nivel máximo. Al girar el electromotor, el disco de arrastre extiende dos ganchos que bloquean mecánicamente el eje del carrete para arrollar la cinta; al detenerse o invertir levemente el giro el motor, los ganchos se recogen liberando el eje. (pág. 16).

## Valores de trabajo

Tres niveles programados de fuerza de tensionado: baja (reducción de holgura), media (tensionado parcial) y alta (tensionado completo). (pág. 16).

## Cómo comprobarlo

Diagnosis electrónica a través del bus CAN Extended mediante el lector de averías conectado a la interfaz J533. (pág. 16).

## Imágenes requeridas

- Mecanismo del tensor reversible impulsado por motor eléctrico, disco de arrastre y ganchos de acoplamiento — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 16
