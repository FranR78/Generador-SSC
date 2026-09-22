---
id: ssc.sin-clasificar.arquitectura-y-logica-de-control-en-climatizacion-no-regulada-manual
modulo: ssc
unidad: sin-clasificar
nt: 657
tipo: proceso
subtipo: fundamento
titulo: "Arquitectura Y Lógica De Control En Climatización No Regulada (Manual)"
menu: "Arquitectura Y Lógica De Control En Cl"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el flujo de señales de entrada, la interconexión eléctrica y las condiciones de activación del compresor y ventiladores en sistemas de aire acondicionado manual sin climatizador electrónico. Aplica al diagnóstico de circuitos eléctricos de climatización no regulada.

## Fundamento

Control por conmutación electromecánica directa y termostática sin unidad de cálculo centralizada de clima. Las señales de demanda del usuario, la sonda del evaporador y la alimentación eléctrica interactúan mediante relés para activar el embrague del compresor, el electroventilador de refrigeración (GMV) y el motor de reciclaje.

## Condiciones previas

Tensión de batería disponible, contacto conectado (+15 / +30) y conmutador de ventilación del habitáculo posicionado en velocidad 1 o superior.

## Desarrollo

* **Modos y peticiones de señal:**
  - **A/A ON:** Demanda de puesta en marcha del aire acondicionado por parte del usuario mediante el pulsador. La UCE de motor incrementa el régimen de ralentí para compensar la carga mecánica antes del acoplamiento.
  - **A/A CICLO:** Demanda de puesta en marcha del compresor autorizada por el termostato del evaporador cuando su temperatura supera los 4 ºC.
  - **A/A AUT:** Autorización final de puesta en marcha emitida por la gestión electrónica del motor para asegurar la eficacia del compresor sin comprometer la estabilidad térmica del motor.
* **Flujo de señales en el circuito:**
  - El usuario acciona el conmutador de aire acondicionado y selecciona la velocidad de ventilación.
  - La corriente atraviesa el termostato del evaporador y el presostato tri-función de alta/baja presión.
  - Si las presiones y la temperatura del evaporador son correctas, el relé de climatización (Relé CA) se excita alimentando la bobina del embrague electromagnético del compresor y activando la.ª velocidad del electroventilador (GMV) de refrigeración.

## Valores de referencia

| Condición de Señal | Umbral / Estado |
| :--- | :--- |
| Autorización por temperatura del evaporador (A/A CICLO) | Temperatura superior a 4 ºC |
| Condición de soplador de habitáculo | Seleccionado en velocidad 1, 2, 3 o 4 (en posición 0 no se autoriza A/A) |

## Interpretación y errores frecuentes

* Si la temperatura del evaporador cae por debajo de 4 ºC, el termostato abre el circuito cortando A/A CICLO, lo cual interrumpe el compresor para prevenir la congelación de la condensación en el evaporador.
* Intentar encender el A/C con la turbina del habitáculo en posición; la línea eléctrica de excitación pasa a través del conmutador de ventilación.

## Verificación final

Verificar que al accionar el pulsador A/A con la ventilación encendida, el motor eleva levemente su régimen de ralentí, el relé CA conmuta y el acoplamiento magnético del compresor atrae su disco frontal.

## Imágenes requeridas

- Esquema sinóptico de entradas y salidas en climatización no regulada — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 3
- Esquema general del circuito eléctrico de climatización manual sin unidad de funciones del motor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 5
- Esquema general con unidad de control de funciones del motor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 7
- Esquema general con gestión de inyección del motor — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 9
