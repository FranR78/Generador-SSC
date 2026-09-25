---
id: ssc.electroventilador-condensador.4-circuito-frigorigeno-5-al-11
modulo: ssc
unidad: clima
nt: 695
tipo: elemento
clase: componente
titulo: "Electroventilador del condensador"
menu: "Electroventilador del condensador"
grupo: "Circuito frigorífico"
clave: electroventilador-condensador
area: climatizacion
sistema: "circuito-frigorifico"
forma_parte_de: circuito-frigorifico
fuentes: "4. CIRCUITO FRIGORÍGENO 5  AL 11.pptx, págs. 196-204"
relacionados: ["condensador", "presostato", "transmisor-presion"]
palabras: ["doble motoventilador", "serie", "paralelo", "velocidad lenta", "resistencia R"]
---

## Misión

Forzar la circulación de un flujo de aire a través del condensador para evacuar el calor del refrigerante y garantizar su condensación (pág. 196, 200).

## Tipos y características

- **Montaje de doble motoventilador**: utiliza dos motores eléctricos comandados por relés (pág. 196-200).
- **Montaje de motoventilador simple**: utiliza un único motor con una resistencia adicional R conectada en serie para la velocidad lenta (pág. 200-204).

## Principio de funcionamiento

- **Doble motoventilador**:
  - *Baja velocidad*: Los dos motores se conectan en **SERIE**. La tensión de la batería se reparte entre ambos (~6 V cada uno), girando a revoluciones reducidas (pág. 198).
  - *Alta velocidad*: Al subir la presión (16-19 bar), los relés conectan los dos motores en **PARALELO**. Cada motor recibe +12 V directos, girando a máximas revoluciones (pág. 200).
- **Motoventilador simple**:
  - *Baja velocidad*: La corriente pasa a través de la **resistencia R en serie** con el motor GMV, reduciendo la tensión y la velocidad (pág. 202).
  - *Alta velocidad*: El relé deriva la corriente directamente al motor GMV sin pasar por la resistencia R (+12 V directos) (pág. 204).

## Valores de trabajo

Tensión de alimentación: +12 V (pág. 198, 200).

## Anomalías frecuentes

Fallo de la resistencia R en motoventiladores simples, desgaste de escobillas del motor o relés de mando con contactos fogueados.

## Comportamiento en avería

Elevación acusada de la alta presión al detener el vehículo al ralentí, provocando el disparo del presostato de máxima (> 28 bar) y el corte repetido del climatizador (pág. 193).

## Cómo comprobarlo

Alimentación directa con +12 V al conector del motor y comprobación de la continuidad de la resistencia R mediante un óhmetro.

## Mantenimiento

Sustitución de la resistencia adicionales de velocidad lenta o del grupo motoventilador completo en caso de agarrotamiento mecánico.

## Imágenes requeridas

- Esquemas eléctricos de conexión de motoventiladores dobles en serie (baja velocidad) y en paralelo (alta velocidad) — Fuente: 4. CIRCUITO FRIGORÍGENO 5  AL.pptx, pág. 198 y 200 (pág. 198, 200).
