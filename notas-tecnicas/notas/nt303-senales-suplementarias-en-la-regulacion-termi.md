---
id: ssc.sin-clasificar.senales-suplementarias-en-la-regulacion-termica
modulo: ssc
unidad: sin-clasificar
nt: 303
tipo: proceso
subtipo: fundamento
titulo: "Señales Suplementarias En La Regulación Térmica"
menu: "Señales Suplementarias En La Regulació"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la función de las señales de tiempo en parado (th), velocidad de marcha (v) y régimen del motor (n) en la regulación del climatizador.

## Fundamento

Aporta un incremento de confort adaptando la posición de las trampillas a la dinámica del vehículo y protegiendo el compresor.

## Condiciones previas

Vehículo en marcha o tras un periodo de parada con el encendido desconectado.

## Equipo y material

Red de comunicación CAN-BUS y cuadro de instrumentos.

## Desarrollo

* **Análisis de las señales:**  
  - **Tiempo en parado (th):** Mide el tiempo con el encendido desconectado. Al volver a arrancar, la UCE utiliza la temperatura exterior memorizada antes de la parada para evitar sobrenfriar el habitáculo por falso calor radiado.  
  - **Velocidad de marcha (v):** Procede del velocímetro. A altas velocidades, la UCE reduce la sección de la chapaleta de velocidad para mantener constante el caudal de aire ingresado.  
  - **Régimen del motor (n):** Informa a la UCE de que el motor está girando. Si el motor se cala (n = 0), desacopla inmediatamente el embrague N25 del compresor.

## Interpretación y errores frecuentes

- Ausencia de señal de velocidad (v): el caudal de aire soplado aumentará excesivamente al acelerar a alta velocidad.

## Verificación final

Mantenimiento del caudal de aire constante a diferentes velocidades de marcha.

## Seguridad y normativa

Desconexión automática del compresor al detenerse el motor (n = 0).
