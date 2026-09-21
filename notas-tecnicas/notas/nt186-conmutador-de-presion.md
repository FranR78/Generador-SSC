---
id: ssc.sin-clasificar.conmutador-de-presion
modulo: ssc
unidad: clima
nt: 186
titulo: "Conmutador De Presión"
codigo: "F129"
ubicacion: "En el circuito de alta presión, junto a la válvula de expansión en el vano motor"
aplicacion: "Vehículos con motorización Diésel equipados con A/C o Autoclima"
menu: "Conmutador De Presión F129"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Proteger el circuito frigorífico contra sobrepresión o falta de gas y gobernar la 2ª velocidad de los ventiladores del líquido refrigerante.

## Principio de funcionamiento

Integra dos interruptores en un mismo cuerpo:  
1. *Interruptor de máxima o mínima:* Normalmente cerrado. Abre al detectar una presión superior a 32 bares o inferior a 2 bares, interrumpiendo la señal del compresor.  
2. *Interruptor de presión media:* Normalmente abierto. Cierra al detectar una presión aproximada de 16 bares para enviar positivo (15) a la unidad del aire acondicionado.

## Características

Conmutador cuádruple presostático montado sobre toma de alta presión y conector eléctrico de 4 polos.

## Valores de trabajo

| Contacto interno | Umbral de presión de conmutación | Función / Resultado eléctrico |
|---|---|---|
| **Max / Min (Pines 1 y 2)** | Abre a **< 2 bares** o **> 32 bares** | Corta señal de acoplamiento del compresor |
| **Media presión (Pines 3 y 4)** | Cierra a **~16 bares** | Conecta 2ª velocidad de ventiladores V7/V35 |

## Anomalías frecuentes

Fugas de refrigerante por la toma de roscado; membrana bloqueada por sedimentos de aceite.

## Comportamiento en avería

Si el contacto de máxima/mínima abre, la unidad desactiva el compresor y la 1ª velocidad. Si el de media no cierra, no se activa la 2ª velocidad de ventiladores al subir la presión a 16 bares.

## Cómo comprobarlo

Consultar el estado del conmutador F129 en el grupo de valores de medición 001 campo 2 (0 = fuera de rango, 1 = rango de trabajo). Comprobar la continuidad de bornes con polímetro.
