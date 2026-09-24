---
id: ssc.fotosensor-solar.pro-13-climatizacion-electronica
modulo: ssc
unidad: clima
nt: 161
tipo: elemento
clase: componente
titulo: "Fotosensor para radiación solar"
menu: "Fotosensor para radiación solar"
grupo: "Control de climatización"
clave: fotosensor-solar
area: climatizacion
sistema: "control-climatizacion"
forma_parte_de: control-climatizacion
fuentes: "PRO 13. Climatización Electrónica.pdf, págs. 107-108"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["fotodiodo", "elemento óptico", "incidencia oblicua", "5 V", "3 V osciloscopio", "parabrisas atérmico"]
---

## Misión

Medir la intensidad y el ángulo de incidencia de la radiación solar sobre el salpicadero para corregir la regulación de la temperatura, trampillas y turbina (págs. 107-108).

## Tipos y características

Sensor óptico compuesto por carcasa, filtro, elemento óptico y fotodiodo, ubicado en el centro del salpicadero (págs. 107-108). Puede ser de versión simple (climatizador normal) o doble (climatizador bizona) (pág. 108).

## Principio de funcionamiento

La corriente que atraviesa el fotodiodo es directamente proporcional a la luminosidad (pág. 107). El elemento óptico apantalla la luz de incidencia vertical y encauza mayor radiación hacia el fotodiodo cuando el sol entra de forma oblicua (que genera mayor sensación térmica), ordenando a la UCE aumentar la refrigeración y modificar la velocidad de la turbina (págs. 107-108).

## Valores de trabajo

- Tensión de alimentación suministrada por la UCE: 5 V (pág. 108).
- Tensión de salida en osciloscopio ante luz intensa: subida de tensión hasta aprox. 3 V (pág. 108).

## Anomalías frecuentes

- Sustitución del parabrisas atérmico original por uno normal, lo que provoca que el climatizador no regule correctamente al recibir mayor radiación (pág. 108).

## Comportamiento en avería

En fotosensores dobles, si falla uno la UCE utiliza la señal del otro; si fallan ambos o el sensor simple, la UCE adopta un valor sustitutivo de radiación intermedia (pág. 108).

## Cómo comprobarlo

Verificar continuidad del cableado y alimentación de 5 V con encendido puesto (pág. 108). Conectar osciloscopio a las salidas de señal y acercar una luz intensa; la tensión debe subir hasta aprox. 3 V (pág. 108).

## Imágenes requeridas

- Sección del fotosensor solar con filtro, elemento óptico y fotodiodo, junto con señal de osciloscopio al aplicar luz — Fuente: PRO. Climatización Electrónica.pdf, págs. 107-108
