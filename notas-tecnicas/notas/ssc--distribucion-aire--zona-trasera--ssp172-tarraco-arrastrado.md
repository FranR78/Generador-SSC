---
id: ssc.distribucion-aire.zona-trasera.ssp172-tarraco-arrastrado
modulo: ssc
unidad: clima
nt: 523
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Distribución del aire en la zona trasera"
menu: "Distribución del aire en la zona trase"
grupo: "Distribución de aire"
clave: distribucion-aire
variante: zona-trasera
area: climatizacion
sistema: "distribucion-aire"
marca: "SEAT"
fuentes: "SSP172 TARRACO (arrastrado).pdf, págs. 63-64"
relacionados: ["servomotor-trampilla", "caja-climatizadora"]
palabras: ["distribución trasera", "v237", "palancas", "cables bowden", "reposapiés", "consola central"]
---

## Objeto

Coordinar el flujo de aire hacia los difusores de las plazas traseras de forma simultánea a la selección realizada para las plazas delanteras. (págs. 63-64)

## Fundamento

La distribución trasera no cuenta con un servomotor independiente exclusivo, sino que se realiza de forma conjunta con la delantera mediante el accionamiento del servomotor V237. (págs. 63-64)

## Desarrollo

Cuando el usuario selecciona la salida del aire desde el panel de mandos, la UCE J255 acciona el servomotor V237 de la siguiente forma:
- Selección por difusores del tablero: el V237 abre las trampillas del tablero de instrumentos y cierra las del reposapiés delantero (mediante palancas); simultáneamente, abre la trampilla de la consola central trasera y cierra las trampillas del reposapiés trasero (mediante los cables Bowden).
- Selección por reposapiés: el V237 invierte el movimiento, cerrando el tablero de instrumentos y la consola central trasera, y abriendo las trampillas de reposapiés delantero y reposapiés trasero. (págs. 63-64)

## Errores de concepto frecuentes

Creer que la zona trasera dispone de un servomotor independiente para seleccionar si el aire sale por los pies o por la consola central. La selección de salida trasera está vinculada a la delantera a través del servomotor V237 y sus cables Bowden. (págs. 63-64)
