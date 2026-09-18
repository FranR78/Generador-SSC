---
nt: 30
tipo: proceso
subtipo: fundamento
titulo: Subenfriamiento
menu: Subenfriamiento
grupo: Fundamentos y cálculos
fuentes: AA Automoción (Hella), apartado 5.4, págs. 36-37
---

## Objeto y alcance
Diferencia entre la temperatura de condensación y la temperatura real del refrigerante a la
salida del condensador. Junto con el recalentamiento, es el parámetro que decide si la carga
del circuito es correcta. Se calcula **antes** de cargar refrigerante, nunca después.

## Fundamento
Durante el cambio de estado, la temperatura del refrigerante permanece constante mientras
haya mezcla de líquido y vapor. Una vez condensado todo el vapor, el líquido puede seguir
cediendo calor y **enfriarse por debajo de su temperatura de condensación**: ese exceso de
enfriamiento es el subenfriamiento.

Que exista subenfriamiento demuestra que en el condensador hay líquido suficiente. Si no lo
hay, significa que el refrigerante sale todavía en mezcla, es decir, que falta carga.

## Condiciones previas
Equipo en régimen estable: motor entre 1.500 y 1.800 rpm, A/A al máximo o en reciclaje,
ventilador del evaporador a máxima velocidad y de 15 a 30 minutos de funcionamiento.

## Equipo y material
Estación con manómetro de alta presión y **termómetro de contacto** para el tubo de salida
del condensador.

## Desarrollo
**Subenfriamiento = Temperatura de condensación − Temperatura de salida del condensador**

1. Leer la presión relativa en el manómetro de alta.
2. Convertirla a temperatura de condensación con la escala del propio manómetro.
3. Medir con termómetro de contacto la temperatura del tubo a la salida del condensador.
4. Restar el segundo valor al primero.

## Valores de referencia
Ejemplo con presión relativa de 18 bar (19 absolutos), que corresponde a una temperatura de
condensación de **65 °C**:

| T. salida condensador | Cálculo | Resultado | Interpretación |
|---|---|---|---|
| 60 °C | 65 − 60 | **5 °C** | Óptimo |
| 63 °C | 65 − 63 | **2 °C** | Débil |
| 53 °C | 65 − 53 | **12 °C** | Fuerte |

Criterios: **débil** si es igual o inferior a 2 °C; **fuerte** si es igual o superior a 10 °C.

## Interpretación y errores frecuentes
- **Débil:** falta de fluido en el condensador, **aunque la presión sea correcta**. Es el
  caso que más engaña: la presión de alta puede parecer normal y el equipo estar escaso.
- **Fuerte:** exceso de fluido en el condensador, que dará problemas en la fase de
  expansión. También puede delatar un **filtro deshidratador obturado**.

El error más común es cargar refrigerante guiándose solo por la presión de alta. Dos
circuitos con la misma presión pueden tener cargas muy distintas.

## Verificación final
Un subenfriamiento entre 5 y 8 °C, con recalentamiento también en rango, confirma que la
carga es correcta. Si el subenfriamiento es fuerte y la alta presión está alta, comprobar el
filtro antes de dar por hecho que sobra refrigerante.

## Advertencias
Nunca efectúes una carga de refrigerante sin haber controlado antes el subenfriamiento y el
recalentamiento.
