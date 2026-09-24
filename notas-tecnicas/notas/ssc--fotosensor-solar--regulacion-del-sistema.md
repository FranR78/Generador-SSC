---
id: ssc.fotosensor-solar.regulacion-del-sistema
modulo: ssc
unidad: clima
nt: 505
tipo: elemento
clase: componente
titulo: "Fotosensor de radiación solar"
codigo: "G107"
menu: "Fotosensor de radiación solar G107"
grupo: "Control de climatización"
clave: fotosensor-solar
area: climatizacion
sistema: "control-climatizacion"
fuentes: "Regulación del Sistema.pdf, págs. 50"
relacionados: ["unidad-control-climatizador", "chapaleta-temperatura"]
palabras: ["radiación solar", "fotodiodo", "elemento óptico", "incidencia oblicua"]
---

## Misión

Detectar la radiación solar directa a la que están expuestos los ocupantes para corregir la temperatura del habitáculo, gestionando la posición de la chapaleta de temperatura y la velocidad de la turbina de aire. (pág. 50)

## Tipos y características

| Ubicado en el tablero de instrumentos. Existen versiones de sensor simple o de dos sensores por separado para los lados izquierdo y derecho del vehículo. Consta de tapa de carcasa | filtro protector UV | elemento óptico y fotodiodo. (pág. 50) |
|---|---|---|
|

## Principio de funcionamiento

La luz solar pasa por un filtro que protege contra radiaciones UV e incide a través del elemento óptico en un fotodiodo semiconductor. Si no recibe luz, el fotodiodo solo deja pasar una corriente baja; al aumentar la intensidad de la luz aplicada, aumenta el flujo de corriente eléctrica. La unidad de control detecta este aumento de corriente y corrige la temperatura. El elemento óptico capta mayor radiación cuando los rayos inciden de forma oblicua. En sistemas bizona con dos sensores, refrigera más intensamente el lado expuesto a mayor radiación. (pág. 50)

## Comportamiento en avería

Si se ausenta la señal, la unidad de control trabaja con un valor supletorio fijo para la radiación solar. (pág. 50)

## Imágenes requeridas

- Componentes internos del fotosensor G107 (filtro | elemento óptico y fotodiodo) — Fuente: Regulación del Sistema.pdf | pág. 50 |
