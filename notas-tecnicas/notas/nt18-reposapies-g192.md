---
id: ssc.clima.transmisor-de-temperatura-a-la-salida-del-vano-reposapies
modulo: ssc
unidad: clima
nt: 18
titulo: Transmisor de temperatura a la salida del vano reposapiés
codigo: G192
menu: Reposapiés G192
grupo: Sensores de temperatura
ubicacion: Salida de aire del calefactor/climatizador, antes de ingresar al habitáculo
marca: ✦ FUSIONADO — 2 fuentes
fuentes: Guía Técnica VAG, pág. 49 · Manual de Sensores G107-G192, pág. 49
---

## Misión
Medir la temperatura del aire **tratado**, inmediatamente después de salir del conjunto
calefactor/climatizador. La UCE usa la señal para gestionar la distribución de aire
(descongelación / pies) y el caudal impelido por la turbina de aire fresco.

## Principio de funcionamiento
Efecto termorresistivo: la resistencia eléctrica **aumenta a medida que disminuye la
temperatura** del aire de salida.

## Características
- Señal: **analógica**. Componente: resistencia eléctrica variable.
- Aplicación concreta no documentada en las fuentes disponibles.

## Comportamiento en avería
En caso de ausencia de señal, se adopta un valor supletorio de **+80 °C**.

Ese valor es llamativamente alto comparado con los demás sensores del sistema (+10 °C en los
exteriores, +24 °C en el habitáculo), lo que indica su **importancia crítica** en el control
del intercambio de calor: ante la duda, el sistema asume que el aire sale muy caliente.

## Cómo comprobarlo
**Herramienta:** equipo de diagnosis y multímetro.
**Método:** leer el valor en diagnosis y contrastarlo con la temperatura real medida en la
salida del vano reposapiés con termómetro de contacto o sonda de aire.

## Imágenes requeridas
- Ubicación del transmisor G192 en el bloque climatizador — Guía Técnica, pág. 49

## Advertencias
Las fuentes no documentan anomalías frecuentes ni valores de resistencia de referencia para
este sensor. Pendiente de completar con documentación del fabricante.
