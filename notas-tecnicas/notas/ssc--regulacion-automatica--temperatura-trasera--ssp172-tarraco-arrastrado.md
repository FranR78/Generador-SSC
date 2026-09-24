---
id: ssc.regulacion-automatica.temperatura-trasera.ssp172-tarraco-arrastrado
modulo: ssc
unidad: clima
nt: 524
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Regulación de la temperatura del aire en la zona trasera"
menu: "Regulación de la temperatura del aire "
grupo: "Control de climatización"
clave: regulacion-automatica
variante: temperatura-trasera
area: climatizacion
sistema: "control-climatizacion"
marca: "SEAT"
fuentes: "SSP172 TARRACO (arrastrado).pdf, págs. 64-65"
relacionados: ["unidad-control-climatizador", "servomotor-trampilla"]
palabras: ["temperatura trasera", "v137", "g174", "mezcla frio caliente", "palancas"]
---

## Objeto

Gestionar la mezcla de aire frío y caliente necesaria para mantener la temperatura consignada en la 3ª zona (plazas traseras). (págs. 64-65)

## Fundamento

La UCE J255 regula la posición del servomotor V137 según el valor solicitado en los mandos traseros E265 (o en la pantalla principal) y retroalimenta el bucle de control con el sensor G174. (págs. 64-65)

## Desarrollo

El proceso de regulación abarca los siguientes componentes y pasos:
- Servomotor V137: modifica la posición de las trampillas de aire frío (ubicadas a la izquierda) y de aire caliente (ubicadas a la derecha de la unidad climática) mediante palancas articuladas.
- Sensor de temperatura G174: montado en el difusor trasero de la consola central, mide continuamente la temperatura del aire soplado hacia atrás.
- Control en bucle cerrado: la UCE J255 compara la medición de G174 con la consigna solicitada en E265 y corrige la posición de V137 hasta estabilizar la temperatura del flujo. (págs. 64-65)

## Errores de concepto frecuentes

Pensar que la temperatura trasera se calcula de forma estimada sin sensor de verificación. El sistema utiliza el sensor G174 montado en la consola central trasera para medir en tiempo real el aire soplado. (pág. 65)
