---
id: ssc.sin-clasificar.funcion-y-recirculacion-automatica-del-aire-con-sensor-g238
modulo: ssc
unidad: sin-clasificar
nt: 447
tipo: proceso
subtipo: fundamento
titulo: "Función Y Recirculación Automática Del Aire Con Sensor G238"
menu: "Función Y Recirculación Automática Del"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la lógica de funcionamiento del modo de recirculación de aire manual y automático mediante la detección de contaminantes por el sensor G238.

## Fundamento

En modo recirculación, se cierra la entrada de aire exterior y se reutiliza el aire del habitáculo, logrando un enfriamiento o caldeo mucho más rápido y reduciendo a menos de la mitad la potencia exigida al compresor. La recirculación manual no debe superar los 15 minutos para evitar el viciado del aire y el empañamiento. El sistema automático cierra la trampilla mediante el sensor G238 antes de que los contaminantes penetren en el habitáculo.

## Condiciones previas

Climatizador activado.

## Equipo y material

Sensor de calidad del aire G238 y filtro combinado de carbón activo.

## Desarrollo

- El sensor de gases G238 analiza el aire atmosférico de entrada.  
- Si detecta un pico de contaminación, la UCE cierra la trampilla de aire fresco y abre la de recirculación mediante el servomotor V71.  
- Al reducirse la contaminación, el sistema retorna automáticamente al modo de aire fresco.  
- Gases detectados en motores de gasolina: Monóxido de carbono (CO), hexano (C6H14), benceno (C6H6), n-heptano (C7H16).  
- Gases detectados en motores diésel: Óxidos de nitrógeno (NOx), dióxido de azufre (SO2), ácido sulfhídrico (H2S), carbono sulfuro (CS2).

## Valores de referencia

| Condición de temperatura / Polución | Tiempo de activación de recirculación |
|---|---|
| **Recirculación manual (Límite máximo recomendación)** | **15 minutos como máximo** |
| **Temp. > +2 ºC / Leve ascenso polución** | **Mínimo 25 segundos** |
| **Temp. +2 ºC...-5 ºC / Ascenso intenso** | **Máximo 15 segundos** |
| **Temp. < -5 ºC / Ascenso intenso** | **Máximo 15 segundos** |
| **Fase de calentamiento inicial G238** | **30 segundos** |

## Interpretación y errores frecuentes

- El sensor G238 evita tener que esperar a percibir malos olores para cerrar la recirculación. Si el habitáculo se empaña continuamente, verificar si la recirculación se ha quedado bloqueada en posición cerrada.

## Verificación final

Verificar en diagnosis la señal del sensor G238 y la respuesta del servomotor V71.

## Imágenes requeridas

- Esquema del sensor G238 y activación de la recirculación automática — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 69
