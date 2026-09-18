---
nt: 21
titulo: Fotosensor de radiación solar
codigo: G107
menu: Fotosensor G107
grupo: Sensores ambientales
aplicacion: [Climatronic monozona, Climatronic bizona]
ubicacion: Parte central del tablero, normalmente integrado en la salida de aire hacia el parabrisas
marca: ✦ FUSIONADO — 2 fuentes
fuentes: Guía Técnica VAG, págs. 50, 107-108 · Manual de Sensores G107-G192, págs. 50, 107
---

## Misión
Medir la intensidad de la **radiación solar directa** que incide sobre los ocupantes, e
informar a la UCE para corregir la regulación de la temperatura interior y el caudal de aire
según la carga térmica solar.

## Principio de funcionamiento
Fotodiodo semiconductor sensible a la luz. Sin luz, la corriente es mínima; al recibir
radiación, **el flujo de corriente aumenta proporcionalmente a la luminosidad**, lo que
permite a la UCE deducir la intensidad de la radiación.

**Diseño óptico:** incorpora un filtro protector UV y un elemento óptico que **apantalla la
luz vertical** para captar con más intensidad la luz oblicua, que es la que genera mayor
sensación de calor en los ocupantes.

## Características
- Señal: **analógica**, valor de tensión proporcional.
- Alimentación: **5 V** suministrados directamente por la UCE.
- Variantes de sensor simple o doble: en sistemas **bizona** se montan dos fotodiodos
  independientes, uno por zona.

## Valores de trabajo
| Prueba | Valor esperado |
|---|---|
| Alimentación | **5 V** desde la UCE |
| Señal con luz intensa | La tensión de salida sube hasta aprox. **3 V** |

## Anomalías frecuentes
- Interrupciones en el cableado o aislamiento deficiente.
- Estado de los conectores.
- Suciedad o elementos sobre el sensor que falseen la lectura.

## Comportamiento en avería
| Situación | Respuesta del sistema |
|---|---|
| Fallo de un fotodiodo en bizona | La UCE usa la señal del operativo como referencia |
| Fallo total | Valor sustitutivo de **radiación intermedia** en su escala |

## Cómo comprobarlo
**Herramienta:** multímetro y osciloscopio.
**Puntos de medida:** alimentación y salidas de señal del sensor.

1. Con el encendido conectado, comprobar la **alimentación de 5 V**.
2. Con el osciloscopio en las salidas de señal, acercar una **luz intensa**: la tensión debe
   subir hasta un valor próximo a **3 V**.

## Imágenes requeridas
- Despiece del fotosensor: carcasa, filtro UV, elemento óptico de apantallamiento y fotodiodo — Guía Técnica, págs. 50 y 107
- Captura de osciloscopio con la subida de tensión ante luz intensa — Guía Técnica, pág. 108

## Advertencias
En vehículos con **parabrisas atérmico**, si se sustituye por uno normal el sensor percibirá
más radiación de la real y no regulará correctamente la temperatura. Es un fallo típico tras
una sustitución de luna que no se detecta en diagnosis.
