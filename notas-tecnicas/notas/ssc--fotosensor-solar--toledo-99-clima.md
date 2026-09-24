---
id: ssc.fotosensor-solar.toledo-99-clima
modulo: ssc
unidad: clima
nt: 345
tipo: elemento
clase: componente
titulo: "Fotosensor para la radiación solar"
codigo: "G107"
menu: "Fotosensor para la radiación s G107"
grupo: "Control de climatización"
clave: fotosensor-solar
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "Toledo 99 CLIMA.pdf, págs. 48"
relacionados: ["unidad-control-climatizador", "regulacion-automatica"]
palabras: ["G107", "fotodiodo", "elemento óptico", "radiación solar", "incidencia oblicua"]
---

## Misión

Registrar la intensidad de la radiación solar incidente sobre los ocupantes para corregir la temperatura del aire y la velocidad de la turbina. (pág. 48).

## Tipos y características

Sensor óptico ubicado en la parte central del tablero de instrumentos. Consta de carcasa con tapa, filtro, elemento óptico apantallador de luz vertical y fotodiodo semiconductor. (pág. 48).

## Principio de funcionamiento

Los rayos solares pasan a través del filtro y del elemento óptico hasta el fotodiodo, el cual modifica el paso de la corriente eléctrica según la luminosidad recibida. La unidad J255 mide la caída de tensión en bornes del fotosensor para determinar la radiación solar.
El elemento óptico redirige un alto porcentaje de rayos cuando inciden de forma oblicua sobre el fotodiodo (requiriendo mayor refrigeración), mientras que apantalla y reduce los rayos que inciden de forma vertical (requiriendo menor refrigeración al disminuir la sensación de calor). (pág. 48).

## Valores de trabajo

Variación del paso de corriente eléctrica por caída de tensión en bornes del fotodiodo. (pág. 48).

## Comportamiento en avería

En caso de avería, la unidad de control asume un valor sustitutivo de radiación intermedio dentro de su escala de medición. (pág. 48).
