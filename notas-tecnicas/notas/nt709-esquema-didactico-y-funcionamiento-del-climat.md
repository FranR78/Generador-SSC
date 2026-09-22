---
id: ssc.sin-clasificar.esquema-didactico-y-funcionamiento-del-climatizador-automatico
modulo: ssc
unidad: sin-clasificar
nt: 709
tipo: proceso
subtipo: fundamento
titulo: "Esquema Didáctico Y Funcionamiento Del Climatizador Automático"
menu: "Esquema Didáctico Y Funcionamiento Del"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la red completa de componentes, la distribución de líneas de corriente DIN, la interacción de los servomotores de trampillas y el intercambio de información distribuida en un climatizador automático. Aplica al análisis de instalaciones de climatización automática.

## Fundamento

El climatizador automático gestiona la distribución, la mezcla de temperatura, el caudal de aire y la recirculación mediante servomotores individuales con potenciómetros de posición de retorno, adaptando su funcionamiento a la radiación solar, la velocidad del vehículo y el estado del motor.

## Condiciones previas

Tensión correcta en línea 30 (batería), línea 15 (contacto), línea 15x (contacto con desconexión en arranque) y masa (línea 31).

## Desarrollo

* **Líneas de corriente según normas DIN:**
  - 30: Positivo directo de batería.
  - 15: Positivo después de contacto.
  - X: Positivo después de contacto con desconexión en arranque.
  - 31: Masa del vehículo.
* **Red de entradas y señales suplementarias:**
  - Fotosensor para radiación solar (13): Ajusta la temperatura en función de la radiación solar. Si no funciona, se desactiva la función.
  - Transmisor de velocidad (5) y Cuadro de Instrumentos (11): La señal de velocidad recibida por CAN-Bus activa la trampilla de velocidad.
  - Interruptor de marcha atrás (7): Conecta automáticamente la recirculación al circular marcha atrás. Si no se recibe señal, se desactiva la función.
  - Alternador (8): Identifica el trabajo del alternador y desconecta el compresor ante sobrecargas. Si no se recibe señal, se desactiva la función.
  - Regulador de iluminación (9): Regula la intensidad de luz del display del climatizador.
* **Control de actuadores de flujo de aire:**
  - Motor y potenciómetro de la trampilla de temperatura (16, 17): Mezclan el aire frío y caliente. Sin potenciómetro no se puede ajustar la temperatura.
  - Motor y potenciómetro de la trampilla de deshielo (18, 19): Mueven la trampilla de deshielo. Sin potenciómetro no se puede dirigir aire hacia el parabrisas.
  - Motor y potenciómetro de la trampilla central (20, 21): Mueven la trampilla central. Sin potenciómetro no se puede controlar la salida central o zona pies.
  - Motor y potenciómetro de recirculación y velocidad (22, 23): Mueven la trampilla de recirculación. Sin potenciómetro no se puede conectar la recirculación.
* **Gestión de temperatura en difusores:**
  - Sonda de salida del evaporador (24): Si no hay señal se trabaja con el sensor MAP.
  - Sonda de zona pies (25) y sonda del difusor central (26): Si falta alguna señal, no es posible la regulación automática.

## Valores de referencia

| Componente / Función | Estado y Comportamiento en Avería |
| :--- | :--- |
| Turbina de aire fresco (1) | Si no gira, el climatizador no funciona |
| Regulador de velocidad de turbina (2) | En caso de avería, el climatizador no funciona |
| UCE de la red de a bordo (10) | Intercambio por CAN-Bus; en avería puede dejar de funcionar el clima |
| UCE de ventiladores (30) | Alimenta ventiladores y electroválvula; en avería el clima no funciona |

## Interpretación y errores frecuentes

* Desmontar un servomotor sin comprobar antes la lectura de su potenciómetro en la máquina de diagnóstico.

## Verificación final

Verificar mediante prueba de actuadores que cada servomotor responde a las órdenes de la UCE y que los potenciómetros devuelven señal.

## Imágenes requeridas

- Esquema didáctico de un climatizador automático y sus componentes — Fuente: 12. Instalación eléctrica del aire acondicionado.pdf, pág. 96
