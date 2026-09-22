---
id: ssc.sin-clasificar.gestion-y-activacion-de-electroventiladores
modulo: ssc
unidad: sin-clasificar
nt: 1110
tipo: proceso
subtipo: fundamento
titulo: "Gestión Y Activación De Electroventiladores"
menu: "Gestión Y Activación De Electroventila"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la lógica de activación y conmutación de las distintas velocidades de los electroventiladores para la refrigeración combinada del motor térmico y del condensador del aire acondicionado. Aplica a los sistemas de climatización y refrigeración del vehículo.

## Fundamento

La circulación de aire por la marcha del vehículo resulta insuficiente a baja velocidad o con el vehículo detenido. Para garantizar el rendimiento del condensador y prevenir sobrecalentamientos en el motor, los electroventiladores fuerzan el paso de aire fresco a través del radiador y del condensador evaluando la temperatura del líquido refrigerante (termostato del radiador) y la presión del fluido frigorífico (conmutador trinario o sensor MAP).

## Condiciones previas

Sistema de climatización conectado o motor en marcha en fase de calentamiento.

## Desarrollo

* **Funcionamiento con el aire acondicionado conectado:**
  - Si el climatizador está activado, el compresor funciona y la presión del circuito frigorífico es superior a 2 bares, ambos electroventiladores se conectan en la **1.ª velocidad**.
  - Si la presión en el circuito de alta alcanza los **16 bares** y/o la temperatura del líquido refrigerante supera los **99 ºC**, los dos ventiladores conmutan a la **2.ª velocidad**.
  - Cuando la presión desciende por debajo de 16 bares y la temperatura del refrigerante cae de 99 ºC, los ventiladores retornan a la.ª velocidad.
* **Funcionamiento con el aire acondicionado desconectado:**
  - La activación depende exclusivamente de la temperatura del líquido refrigerante captada por el termostato del radiador:
    - **1.ª velocidad:** Se conecta (ON) entre **92 ºC y 97 ºC**; se desconecta (OFF) entre **84 ºC y 91 ºC**.
    - **2.ª velocidad:** Se conecta (ON) entre **99 ºC y 105 ºC**; se desconecta (OFF) entre **91 ºC y 98 ºC**.
* **Efecto de la falta de ventilación:** Si los electroventiladores no funcionan, la presión de alta sube excesivamente y la UCE desconecta el compresor por seguridad. El compresor solo volverá a funcionar cuando el vehículo circule y reciba aire de marcha, volviendo a pararse al detener el vehículo.

## Valores de referencia

| Condición de Activación | Parámetro Térmico / Presión | Estado de los Electroventiladores |
| :--- | :--- | :--- |
| **A/C Conectado (Presión > 2 bar)** | Estado inicial de marcha | 1.ª velocidad en ambos ventiladores |
| **Presión de Alta Frigorífica** | Presión ≥ 16 bar | Conmutación a.ª velocidad |
| **Temp. Refrigerante (Modo A/C o solo Motor)** | ON a...105 ºC / OFF a...98 ºC | 2.ª velocidad en ambos ventiladores |
| **Temp. Refrigerante (Solo Motor - 1.ª Vel.)** | ON a...97 ºC / OFF a...91 ºC | 1.ª velocidad en ambos ventiladores |

## Interpretación y errores frecuentes

* Diagnosticar como avería interna del compresor un parón intermitente que ocurre solo al detener el vehículo; la causa real es el fallo de los electroventiladores, que provoca el disparo de la protección por alta presión al parar el vehículo.

## Verificación final

Verificar el arranque de los ventiladores en.ª velocidad al conectar la tecla A/C y la conmutación a.ª velocidad al alcanzar los 16 bares en el manómetro de alta.

## Imágenes requeridas

- Esquema de conmutación combinada y umbrales de activación para dos ventiladores — Fuente: Nº10. Electroventiladores. Regulación y Seguridad.pdf, pág. 85
