---
id: ssc.sin-clasificar.transmisores-de-temperatura-exterior-g17-y-g89
modulo: ssc
unidad: sin-clasificar
nt: 499
titulo: "Transmisores De Temperatura Exterior G17 Y G89"
codigo: "G17 (Exterior paragolpes) / G89 (Canal de aire aspirado)"
ubicacion: "- G17: Zona izquierda del paragolpes delantero"
aplicacion: "Climatronic de Seat Toledo"
menu: "Transmisores De Temperatura Ex G17 (Exterior paragolpes) / G89 (Canal de aire aspirado)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir la temperatura del aire atmosférico exterior y del aire fresco de entrada para calcular la posición de las trampillas de mezcla, recirculación y velocidad del ventilador.

## Principio de funcionamiento

Sensores térmicos basados en resistencias de coeficiente de temperatura negativo (NTC). Al aumentar la temperatura del aire, disminuye su resistencia eléctrica. La UCE J255 lee ambos sensores y **utiliza siempre el valor de temperatura más bajo** para evitar errores causados por el calor radiado del motor o del asfalto.

## Características

Dos termistores NTC conectados a la unidad Climatronic J255.

## Valores de trabajo

| Estado de los sensores | Valor utilizado por la UCE J255 |
|---|---|
| **Ambos sensores OK** | La UCE selecciona y procesa el **valor más bajo** de los dos |
| **Avería de un transmisor** | La UCE toma la medición del **transmisor que funciona** |
| **Avería de ambos transmisores (G17 y G89)** | La UCE adopta el **valor sustitutivo fijo de 10 ºC** |

## Anomalías frecuentes

Corte por impacto en el paragolpes (G17) o sulfatación de conectores por humedad.

## Comportamiento en avería

Si se avería uno, el sistema utiliza el otro. Si fallan ambos, adopta un valor fijo sustitutivo de 10 ºC.

## Cómo comprobarlo

Medir resistencia con un multímetro en bornes de cada sensor a diferentes temperaturas ambientales y comprobar lecturas en el bloque de valores de medición.
