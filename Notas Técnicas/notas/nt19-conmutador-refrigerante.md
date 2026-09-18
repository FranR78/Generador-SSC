---
nt: 19
titulo: Conmutador de aviso de temperatura del líquido refrigerante
codigo: Sin código documentado
menu: Conmutador temp. motor
grupo: Sensores de temperatura
ubicacion: Circuito de refrigeración del motor
fuentes: AA Automoción (Hella), pág. 138, Fig. 7.5.7
---

## Misión
Proteger el motor del vehículo contra sobrecalentamientos severos bajo cargas intensas, como
la subida de un puerto de montaña, **desconectando la carga adicional que representa el
compresor** de aire acondicionado.

## Principio de funcionamiento
Termocontacto sensible a la temperatura del líquido refrigerante del motor. Al alcanzarse el
umbral térmico fijado en su elemento bimetálico, interrumpe el circuito de excitación del
compresor.

## Características
- Señal: **digital ON/OFF**, contacto de seguridad normalmente cerrado que se abre por alta
  temperatura.
- Vinculado con el testigo de aviso del cuadro de instrumentos.

## Valores de trabajo
| Acción | Temperatura |
|---|---|
| Desconexión del compresor | Aprox. **119 °C** |
| Reconexión | Aprox. **112 °C** |

## Anomalías frecuentes
- Contactos oxidados o descalibrados.
- Agarrotamiento del mecanismo en posición abierta.

## Comportamiento en avería
Si se avería en posición abierta, **el compresor se desconecta permanentemente** sin que
exista un sobrecalentamiento real del motor. Es una causa de "el aire no enfría" que no está
en el circuito frigorífico.

## Cómo comprobarlo
**Herramienta:** multímetro (continuidad) y termómetro.
**Puntos de medida:** terminales del conmutador.

- **Continuidad (0 Ω)** con el refrigerante por debajo de 119 °C.
- **Circuito abierto** (resistencia infinita) al superar los 119 °C.

## Imágenes requeridas
- Conmutador para testigo de aviso de temperatura del refrigerante — AA Automoción, pág. 138, Fig. 7.5.7
