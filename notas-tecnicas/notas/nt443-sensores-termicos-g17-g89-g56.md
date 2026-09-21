---
id: ssc.sin-clasificar.sensores-termicos-g17-g89-g56
modulo: ssc
unidad: sin-clasificar
nt: 443
titulo: "Sensores Térmicos (G17, G89, G56"
codigo: "G17, G89, G56, G192, G107"
ubicacion: "- G17: Armazón delantero del vehículo (paragolpes)"
aplicacion: "Sensores de entrada para la regulación automática Climatronic"
menu: "Sensores Térmicos (G17, G89, G G17, G89, G56, G192, G107"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Captar la temperatura exterior, la temperatura interior del habitáculo, la temperatura de las toberas y la radiación solar para el cálculo de la mezcla de aire.

## Principio de funcionamiento

- **G17 y G89:** Termistores NTC de temperatura exterior. La UCE procesa siempre el valor más bajo de ambos para evitar errores de calor radiado.  
- **G56 con turbina V42:** Resistencia NTC situada en el flujo de aire de una microturbina (V42) que aspira aire fresco del habitáculo para evitar falsas mediciones por el calor de la consola.  
- **G192:** Resistencia NTC a la salida del calefactor hacia los pies.  
- **Fotosensor G107:** Un fotodiodo semiconductor protegido por un filtro UV deja pasar más corriente eléctrica cuanto mayor es la intensidad de la luz solar incidente.

## Características

Sensores semiconductores NTC y fotodiodos integrados en la red electrónica del climatizador.

## Valores de trabajo

| Sensor con avería / Sin señal | Valor supletorio asignado | Consecuencia en el sistema |
|---|---|---|
| **Fallo de G17 y G89** | **+10 ºC** | Desactiva el modo de recirculación |
| **Fallo de G56** | **+24 ºC** | Mantiene funcionamiento automático |
| **Fallo de G192** | **+80 ºC** | Modifica cálculo de distribución |
| **Fallo de G107** | **Valor supletorio fijo** | Aplica radiación solar constante |

## Anomalías frecuentes

Bloqueo de la microturbina V42 por suciedad o pelusa; tapado accidental de la lente del fotosensor G107 con objetos sobre el salpicadero.

## Comportamiento en avería

Inprecisión en el control automático de la temperatura o pérdida de compensación de frío con sol directo.

## Cómo comprobarlo

Consultar el bloque de valores de medición en el equipo de diagnosis y verificar la variación de resistencia NTC o corriente del fotodiodo.
