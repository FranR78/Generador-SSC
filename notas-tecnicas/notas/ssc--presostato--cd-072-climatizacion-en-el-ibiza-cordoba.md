---
id: ssc.presostato.cd-072-climatizacion-en-el-ibiza-cordoba
modulo: ssc
unidad: clima
nt: 194
tipo: elemento
clase: componente
titulo: "Conmutador de presión para aire acondicionado"
codigo: "F129"
menu: "Conmutador de presión para air F129"
grupo: "Control de climatización"
clave: presostato
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: circuito-frigorifico
marca: "SEAT"
fuentes: "CD 072 Climatizacion en el Ibiza-Cordoba 99.pdf, págs. 16"
relacionados: ["compresor", "electroventilador-condensador", "unidad-control-climatizador"]
palabras: ["F129", "diésel", "32 bares", "2 bares", "16 bares", "presostato triple"]
---

## Misión

Supervisar la presión del agente frigorífico en el lado de alta presión para autorizar el funcionamiento del compresor y gestionar las velocidades de los electroventiladores. (pág. 16)

## Tipos y características

Conmutador de presión triple montado exclusivamente en las motorizaciones diésel, ubicado en la línea de alta presión junto a la válvula de expansión. Consta de dos interruptores internos independientes. (pág. 16)

## Principio de funcionamiento

- **Interruptor de máxima/mínima presión:** Normally cerrado. Permite el paso de la señal de conexión del compresor enviada por el autoclima hacia la unidad J293. Se abre mecánicamente interrumpiendo la señal si la presión desciende por debajo de 2 bares (fuga de gas) o supera los 32 bares (sobrepresión). (pág. 16)
- **Interruptor de presión media:** Normally abierto. Conectado a positivo de contacto (borne 15). Se cierra mecánicamente al alcanzar una presión aproximada de 16 bares, enviando una señal a la unidad J293 para conectar la 2ª velocidad de los electroventiladores del radiador. (págs. 16, 29)

## Valores de trabajo

- Umbral de desconexión por baja presión: < 2 bares. (pág. 16)
- Umbral de desconexión por alta presión: > 32 bares. (pág. 16)
- Umbral de activación de la 2ª velocidad de ventiladores: aprox. 16 bares. (pág. 16)

## Comportamiento en avería

- Si el interruptor de máxima/mínima se queda abierto, el compresor no conecta. (pág. 16)
- Si el interruptor de presión media falla, la 2ª velocidad de los electroventiladores no se activa por presión del circuito frigorífico. (págs. 16, 29)

## Cómo comprobarlo

Mediante la función "08" (bloque de valores de medición, grupo 001, campo 2) en el equipo de autodiagnosis. (pág. 37)

## Imágenes requeridas

- Ubicación del conmutador F129 en la tubería de alta presión junto a la válvula de expansión — Fuente: CD 072 Climatizacion en el Ibiza-Cordoba.pdf, pág. 16
