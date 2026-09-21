---
id: ssc.sin-clasificar.transmisor-de-presion-electronico
modulo: ssc
unidad: clima
nt: 187
titulo: "Transmisor De Presión Electrónico"
codigo: "G65"
ubicacion: "Tubería de alta presión, junto a la válvula de expansión en el vano motor"
aplicacion: "Vehículos con motorización de Gasolina equipados con A/C o Autoclima"
menu: "Transmisor De Presión Electrón G65"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la presión del gas R134a para informar a la UCE del motor y a la unidad de control del aire acondicionado J293.

## Principio de funcionamiento

Sensor piezoeléctrico de estado sólido. Convierte la presión en una señal modulada que envía a la UCE del motor (para regular el ralentí según la carga) y a la UCE J293 (para desconexión y control de ventiladores).

## Características

Sensor electrónico de 3 polos (Alimentación 12 V, Masa y Salida de señal).

## Valores de trabajo

| Condición de presión en alta | Respuesta del sistema vía J293 |
|---|---|
| **Presión < 2 bares o > 32 bares** | Desconexión del compresor por presión máxima o mínima |
| **Presión >= 16 bares** | Conexión de la 2ª velocidad de ventiladores V7/V35 |

## Anomalías frecuentes

Fallo de la electrónica interna del transmisor; sulfatación del conector.

## Comportamiento en avería

Si el transmisor está averiado, la unidad de control del aire acondicionado desactiva el compresor. La avería de este transmisor únicamente se registra en la memoria de averías de la unidad de control del motor.

## Cómo comprobarlo

Verificar la presencia de la señal con un osciloscopio o leer la memoria de averías en la dirección "01 - Motor" mediante el equipo de diagnosis.
