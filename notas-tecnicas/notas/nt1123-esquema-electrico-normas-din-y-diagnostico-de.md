---
id: ssc.sin-clasificar.esquema-electrico-normas-din-y-diagnostico-de-componentes-en-climatizador-automatico
modulo: ssc
unidad: sin-clasificar
nt: 1123
tipo: proceso
subtipo: diagnostico
titulo: "Esquema Eléctrico, Normas Din Y Diagnóstico De Componentes En Climatizador Automático"
menu: "Esquema Eléctrico, Normas Din Y Diagnó"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer la identificación normalizada de líneas de corriente DIN y la diagnosis de síntomas, causas y comportamiento del climatizador automático ante la avería de sus sensores, servomotores y actuadores. Aplica al diagnóstico eléctrico de climatizadores automáticos en taller.

## Fundamento

El climatizador automático monitoriza continuamente sus componentes eléctricos. Las normas DIN estandarizan la codificación de bornes de corriente, mientras que la UCE memoriza códigos de avería y adopta estrategias de emergencia cuando un sensor o actuador falla.

## Condiciones previas

Contacto encendido (+15) y equipo de diagnosis conectado al puerto de diagnosis (6).

## Equipo y material

Polímetro, máquina de diagnosis compatible y esquemas eléctricos.

## Desarrollo

* **Nomenclatura normalizada de líneas de corriente (Normas DIN):**
  - **30:** Positivo directo de batería.
  - **15:** Positivo después de contacto.
  - **X:** Positivo después de contacto con desconexión en fase de arranque del motor.
  - **31:** Masa (retorno a negativo/chasis).
* **Diagnóstico de síntomas, causas y comportamiento en avería por componentes:**
  - *Turbina de aire fresco (1) y Regulador (2):* Si fallan o la turbina no gira, el climatizador deja de funcionar completamente.
  - *Sensor MAP en alta (3):* Mide la presión de alta. En caso de avería, el climatizador no funciona por seguridad.
  - *Sensor de temperatura exterior (4):* En caso de avería la pantalla muestra `-.- ºC` y la UCE trabaja con el valor del sensor de temperatura de entrada de aire (27).
  - *Transmisor de velocidad (5) / Cuadro (11):* Sin señal no se muestra la velocidad en el cuadro ni actúa la trampilla de velocidad compensada.
  - *Interruptor de marcha atrás (7):* Si no se recibe la señal, se desactiva la función de recirculación automática al dar marcha atrás.
  - *Alternador (8):* Si no envía la señal de carga, se desactiva la función de gestión de sobrecarga.
  - *UCE de la red de a bordo (10):* Intercambio CAN-Bus. Si falla, el climatizador puede quedar completamente inoperativo.
  - *Fotosensor para radiación solar (13):* En caso de avería, se desactiva la corrección solar de temperatura.
  - *Transmisor de temperatura interior (15):* En caso de fallo, la UCE adopta un valor sustitutivo fijo de temperatura.
  - *Potenciómetros de trampillas (17 - Temperatura, 19 - Deshielo, 21 - Central, 23 - Recirculación):* Si falla un potenciómetro, no es posible regular o controlar la trampilla correspondiente (temperatura, desempañado del parabrisas, distribución a pies/centro o recirculación).
  - *Sensor de salida del evaporador (24):* Si se pierde la señal, la UCE pasa a trabajar con la información calculada del sensor MAP (3).
  - *Sensores de temperatura de zona pies (25) y difusor central (26):* Sin su señal, se inhabilita la regulación automática de temperatura.
  - *Sensor de entrada de aire ambiente (27):* Si falla, la UCE utiliza el valor del sensor de temperatura exterior (4).
  - *Electroválvula del compresor (28):* En caso de avería eléctrica, el compresor se ajusta automáticamente a su mínimo rendimiento.
  - *Termostato del radiador (29):* En caso de avería o modo de emergencia, conecta los electroventiladores a máxima velocidad.
  - *UCE de los ventiladores (30):* Si falla, el climatizador no funciona.

## Valores de referencia

| Denominación de Borne DIN | Significado de la Línea de Corriente |
| :--- | :--- |
| **Borne 30** | Positivo directo de batería (12 V constantes) |
| **Borne 15** | Positivo después de contacto (12 V con llave en ON) |
| **Borne X** | Positivo tras contacto desconectado durante el arranque del motor |
| **Borne 31** | Masa / Conexión a negativo de chasis |

## Interpretación y errores frecuentes

* Interpretar la indicación `-.- ºC` en el display como un fallo de la pantalla; la causa real es la avería o desconexión del sensor de temperatura exterior (4).
* Cambiar el compresor cuando este no rinde porque la electroválvula (28) ha entrado en modo de mínimo rendimiento por fallo en la señal de control.

## Verificación final

Interrogar la memoria de averías con el equipo de diagnosis, confirmar la ausencia de códigos de fallo y verificar la lectura coherente de todos los bloques de valores de medición.

## Imágenes requeridas

- Esquema didáctico de climatizador automático y distribución de líneas de corriente DIN — Fuente: Nº10. Esquemas eléctricos.pdf, pág. 96
