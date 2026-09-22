---
id: ssc.sin-clasificar.esquema-de-aire-acondicionado-semiautomatico-con-sensor-map-y-electrovalvula
modulo: ssc
unidad: sin-clasificar
nt: 704
tipo: proceso
subtipo: fundamento
titulo: "Esquema De Aire Acondicionado Semiautomático Con Sensor Map Y Electroválvula"
menu: "Esquema De Aire Acondicionado Semiauto"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la arquitectura electrónica, las señales de entrada y salida y la lógica de control de los sistemas de climatización semiautomáticos con compresor de cilindrada variable regulado por electroválvula (sin embrague) y sensor de presión MAP. Aplica al diagnóstico de climatizadores semiautomáticos.

## Fundamento

La UCE del climatizador procesa las señales de los sensores térmicos, del sensor digital MAP y de las UCEs de motor y red de a bordo a través del CAN-Bus para modular de forma continua la cilindrada del compresor mediante una señal de corriente hacia su electroválvula interna.

## Condiciones previas

Tensión en línea 30 (batería) y línea 15 (contacto).

## Desarrollo

* **Intercambio de información por CAN-Bus y señales directas:**
  - **Entradas principales a la UCE del climatizador (12):** Sensor MAP de alta presión (3), sensor de temperatura exterior (4), transmisor de velocidad (5), alternador (7), transmisor de temperatura interior (13), sensores de salida del evaporador (18), pies (19) y difusor central (20), y potenciómetros de trampillas (15, 17).
  - **Comunicación con UCE de Red de A Bordo (9) y Cuadro de Instrumentos (10):** Transmisión de señales de velocidad del vehículo y temperatura exterior.
  - **Comunicación con UCE del Motor (11):** Gestión del ralentí y solicitud de corte por aceleración o carga.
* **Gobierno del compresor sin embrague:**
  - La UCE del climatizador envía una señal de control a la electroválvula de regulación del compresor (21).
  - La electroválvula modifica la cilindrada interna del compresor según la demanda de refrigeración.
* **Control del soplador del habitáculo:**
  - La velocidad de la turbina de aire fresco (1) es gestionada mediante un regulador electrónico de velocidad (2).

## Valores de referencia

| Línea de Corriente DIN / Código | Función y Especificación |
| :--- | :--- |
| Línea 30 | Positivo directo de batería |
| Línea 15 | Positivo después de contacto |
| Línea 31 | Masa |
| Código de color de cables | Rojo = Alimentación positivo; Negro = Masa; Verde/Blanco = Señales de entrada/salida; Naranja = CAN-Bus |

## Interpretación y errores frecuentes

* Buscar un embrague electromagnético en un compresor regulado por electroválvula; este sistema regula su potencia internamente sin desacoplo mecánico.

## Verificación final

Verificar la presencia de señales en las entradas y salidas de la UCE del climatizador según el código de colores del esquema.

## Imágenes requeridas

- Esquema de aire acondicionado semiautomático con sensor MAP y electroválvula sin embrague — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 95
