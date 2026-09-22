---
id: ssc.sin-clasificar.esquema-electrico-y-funcionamiento-del-aire-acondicionado-semiautomatico
modulo: ssc
unidad: sin-clasificar
nt: 1122
tipo: proceso
subtipo: fundamento
titulo: "Esquema Eléctrico Y Funcionamiento Del Aire Acondicionado Semiautomático"
menu: "Esquema Eléctrico Y Funcionamiento Del"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la topología eléctrica, las entradas/salidas y las funciones de control en un sistema de aire acondicionado semiautomático equipado con sensor MAP de alta presión y compresor de cilindrada variable regulado por electroválvula. Aplica a instalaciones eléctricas de climatización semiautomática.

## Fundamento

A diferencia del sistema manual con embrague electromagnético, el compresor regulado por electroválvula ajusta de forma continua la carrera de los pistones y la cilindrada en función de una señal eléctrica. El control se efectúa mediante un sensor electrónico de presión MAP y una arquitectura de sensores gestionados por la UCE del climatizador.

## Condiciones previas

Contacto encendido (+15) y tensión de batería adecuada.

## Desarrollo

* **Arquitectura de señales y control:**
  - *Señales de Entrada hacia la UCE Climatizador:* Sensor MAP en alta (3), sensor de temperatura exterior (4), transmisor de velocidad (5), transmisor de temperatura interior (13), potenciómetro de la trampilla de temperatura (15), potenciómetro de la trampilla de recirculación (17), sensor de temperatura de salida del evaporador (18), sensor de temperatura de la zona de pies (19) y sensor de temperatura del difusor central (20).
  - *Interconexiones CAN-Bus y Red:* Conexión con la UCE de la red de a bordo (9), Cuadro de instrumentos (10), UCE del motor (11), alternador (7) y conector de diagnóstico (6).
  - *Señales de Salida desde la UCE Climatizador:* Electroválvula de regulación del compresor (21), regulador de velocidad de la turbina (2), motor de la trampilla de temperatura (14), motor de la trampilla de recirculación (16) y UCE de los ventiladores (23).
* **Lógica de gestión:**
  - La UCE del climatizador (12) modifica la corriente aplicada a la electroválvula del compresor (21) para variar la cilindrada desde el mínimo (sin demanda) hasta el 100% de rendimiento.
  - La UCE de ventiladores (23) recibe órdenes para gestionar la activación de los electroventiladores (24 y 25).
  - El sensor MAP (3) transmite una señal electrónica continua proporcional a los bares del tramo de alta para la gestión de seguridad y control de ventilación.

## Valores de referencia

| Elemento / Señal | Tipo de Señal en Esquema | Conexión / Función |
| :--- | :--- | :--- |
| **Sensor MAP en alta (3)** | Señal de entrada analógica/PWM | Mide presión de alta hacia UCE Climatizador |
| **Electroválvula de regulación N280 (21)** | Señal de salida modulada | Ajusta cilindrada del compresor sin embrague |
| **Líneas CAN-Bus** | Señal bidireccional | Intercambio de datos entre UCE Motor, Cuadro, Red de a bordo y Climatizador |

## Interpretación y errores frecuentes

* Buscar el embrague electromagnético en un compresor con regulación por electroválvula; este tipo de compresor gira continuamente con la polea y varía su cilindrada internamente mediante la electroválvula (21).

## Verificación final

Verificar la presencia de la señal de control en la electroválvula del compresor y la variación de presiones al modificar la selección de temperatura en la consola.

## Imágenes requeridas

- Esquema eléctrico de aire acondicionado semiautomático con sensor MAP y electroválvula de regulación del compresor — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 95
