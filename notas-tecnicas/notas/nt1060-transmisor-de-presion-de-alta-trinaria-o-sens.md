---
id: ssc.sin-clasificar.transmisor-de-presion-de-alta-trinaria-o-sensor-map
modulo: ssc
unidad: sin-clasificar
nt: 1060
titulo: "Transmisor De Presión De Alta (Trinaria O Sensor Map)"
codigo: "F129 (Trinaria) / Sensor MAP de alta"
ubicacion: "Enroscado en la tubería rígida del tramo de alta presión o sobre el cuerpo del filtro deshidratador"
aplicacion: "Gestión de seguridad y control de electroventiladores en sistemas de A/C"
menu: "Transmisor De Presión De Alta  F129 (Trinaria) / Sensor MAP de alta"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la presión del refrigerante en la línea de alta informando a la UCE de climatización o de motor para controlar el electroventilador y proteger el compresor contra presiones anómalas.

## Principio de funcionamiento

* **Trinaria (presostato):** Contactos mecánicos que abren o cierran según umbrales (corte por baja < 2 bar, marcha electroventilador > 16 bar, corte por alta > 32 bar).
* **Sensor MAP:** Cristal piezoeléctrico de silicio que emite una señal electrónica continua (analógica de 1–4 V o digital PWM) proporcional a los bares del circuito.

## Características

Sensor de rosca hidráulica con obús de cierre automático (permite sustitución sin perder la carga de gas) y conector eléctrico de 3 o 4 vías.

## Valores de trabajo

* Umbral de corte por baja presión: < 2 bar.
* Umbral de activación de.ª velocidad de ventilador: > 16 bar.
* Umbral de corte por alta presión: > 32 bar.
* Tensión de alimentación (Sensor MAP): 5 V o 12 V según versión.

## Anomalías frecuentes

Fugas por la junta de rosca o fallo del elemento piezoeléctrico/contactos internos.

## Comportamiento en avería

No acoplamiento del compresor o fallo de disparo de la velocidad rápida de los electroventiladores con sobrecalentamiento en parado.

## Cómo comprobarlo

*En presostatos:* Medir continuidad entre bornes según la presión del manómetro. *En sensores MAP:* Medir la señal de salida con osciloscopio o multímetro y consultar el valor en bares en el bloque de valores de medición de la máquina de diagnosis.

## Imágenes requeridas

- Transmisor de presión en la tubería de alta del circuito — Fuente: Nº10. Autodidactico Diagonostico y climatización OCR.pdf, pág. 21
