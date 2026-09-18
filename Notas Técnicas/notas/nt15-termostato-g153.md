---
nt: 15
titulo: Interruptor termostático y sensor de evaporador
codigo: G153 / E33
menu: Termostato · G153
grupo: Sensores de temperatura
aplicacion: [VW, Seat, Audi, Genérico taller]
ubicacion: Tubo capilar o sonda NTC entre las aletas del evaporador; mando en el salpicadero
marca: ✦ FUSIONADO — 2 fuentes
fuentes: AA Automoción (Hella), págs. 139-141, Fig. 8.1.1 y 8.1.5 · Dashboard Sensores VAG, pág. 87
---

## Misión
Medir la temperatura del evaporador para conectar y desconectar cíclicamente el embrague del
compresor, regulando el rendimiento frigorífico y, sobre todo, **evitando la congelación del
agua condensada en la batería evaporadora** (engelamiento), que bloquearía el paso del aire.

## Principio de funcionamiento
- **Termostato mecánico:** el tubo capilar contiene un gas sensible cuya variación de
  volumen expande o contrae un fuelle. Esa fuerza (Fp) se opone a la de un muelle de
  regulación (Fm) para accionar una palanca y un interruptor eléctrico.
- **Termostato electrónico:** una sonda **NTC** envía su resistencia variable a un módulo
  que conmuta la alimentación del compresor. Se le llama también **interruptor de deshielo**.

## Características
- Señal: **digital ON/OFF** (apertura y cierre de contactos).
- Variantes de 2 o 3 contactos; fijo, graduable por mando, o electrónico con potenciómetro.
- Algunos sistemas sustituyen el sensor por un termostato (**E33**) que corta directamente
  la corriente del embrague.

## Valores de trabajo
| Tipo | Desconexión | Reconexión |
|---|---|---|
| Mecánico | Aprox. **-1,5 °C** | Unos **+3 °C** por encima de la desconexión |
| Electrónico | **+1 °C** | Superior a **+4 °C** |
| Sonda G153 (VAG) | Entre **-1 y 0 °C** | Aprox. **+3 °C** |

Gama de regulación en conexión del mecánico: temperaturas del evaporador entre **+2 y +16 °C**.

Prueba en taller (motor 1.500-1.800 rpm, 20 min en recirculación, frío máximo):

| Medida | Valor esperado |
|---|---|
| Conexión del compresor | 2,6 a 2,8 bar |
| Desconexión | 0,8 a 1,2 bar |

## Anomalías frecuentes
- Tubo capilar roto, sin gas, o suelto de las aletas del evaporador.
- Descalibración del muelle interno.
- Contactos eléctricos pegados o quemados.

## Comportamiento en avería
- **Averiado en cerrado:** el compresor no desconecta nunca y el evaporador se congela por
  completo, bloqueando el flujo de aire.
- **Averiado en abierto:** el compresor no arranca.

## Cómo comprobarlo
**Herramienta:** multímetro, manómetro de baja presión y spray enfriador.
**Puntos de medida:** terminales del interruptor termostático o de la sonda NTC.
**Método:** hacer funcionar el A/A a máximo rendimiento y verificar que el compresor conecta
y desconecta cíclicamente a las presiones equivalentes a sus temperaturas de corte.

## Imágenes requeridas
- Esquema interno del termostato mecánico de tubo capilar — AA Automoción, pág. 139, Fig. 8.1.1
- Instalación eléctrica con termostato de 2 contactos y trinaria — pág. 141, Fig. 8.1.5
- Ubicación de la sonda NTC entre las aletas del evaporador — Dashboard Sensores, pág. 87

## Advertencias
Con humedad ambiente alta el compresor conecta a temperaturas mayores. **En zona costera el
evaporador se congelará si el compresor desconecta por debajo de 1,5 bar**; en zona seca
puede desconectar entre 0,9 y 1,1 bar sin congelarse. En compresores de cilindrada variable
este sensor puede no ser necesario, porque el compresor mantiene la baja por encima del
punto de congelación.
