---
id: ssc.ventilador-habitaculo.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 200
tipo: elemento
clase: componente
titulo: "Motor de la turbina de aire y regulador de régimen"
codigo: "V2 / J126"
menu: "Motor de la turbina de aire y  V2 / J126"
grupo: "Distribución de aire"
clave: ventilador-habitaculo
area: climatizacion
sistema: "distribucion-aire"
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 22"
relacionados: ["unidad-control-climatizador", "distribucion-aire"]
palabras: ["V2", "J126", "turbina de aire", "regulador de régimen", "caudal de aire"]
---

## Misión

Impulsar el caudal de aire necesario a través de la unidad climática para renovar y climatizar la atmósfera del habitáculo. (pág. 22).

## Tipos y características

Motor eléctrico impulsado por un módulo electrónico de potencia (regulador de régimen J126) en lugar de resistencias fijas en los sistemas con autoclima y calefacción motorizada. (págs. 6, 22).

## Principio de funcionamiento

La unidad de control J255 envía una señal de tensión de mando al regulador J126, el cual varía progresivamente la corriente aplicada al motor V2 para ajustar su velocidad de giro de manera continua. (págs. 22, 36).

## Valores de trabajo

Variación de tensión de regulación en pasos de 2,5 V de 0 V a máxima tensión durante diagnosis de actuadores. (pág. 36).

## Anomalías frecuentes

Desgaste de escobillas del motor V2, fallo de los transistores de potencia del regulador J126, agarrotamiento del rodamiento de la turbina. (pág. 22).

## Comportamiento en avería

No existe función sustitutiva. La avería se detecta de inmediato al interrumpirse o reducirse drásticamente el flujo de aire por los difusores. (pág. 22).

## Cómo comprobarlo

Se comprueba mediante la función "03 - Diagnóstico de elementos actuadores": el sistema realiza una regulación progresiva de la velocidad desde 0 V hasta la máxima en pasos de 2,5 V cada 2 segundos. (pág. 36).
