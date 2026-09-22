---
id: ssc.sin-clasificar.diagnostico-de-compresor-de-aire-acondicionado-que-no-se-activa
modulo: ssc
unidad: sin-clasificar
nt: 867
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico De Compresor De Aire Acondicionado Que No Se Activa"
menu: "Diagnóstico De Compresor De Aire Acond"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la metodología de localización de averías y comprobación visual cuando el compresor de aire acondicionado no se activa en el vehículo. Aplica al diagnóstico del sistema frigorífico y eléctrico en SEAT Ibiza/Córdoba '99.

## Fundamento

La activación del compresor requiere la integridad eléctrica de la bobina del acoplamiento magnético (N25), la presencia de presión adecuada de refrigerante en el circuito (validada por F129/G65), la autorización térmica (F38) y la gestión de potencia por la unidad J293 y la UCE del motor.

## Condiciones previas

Encendido del vehículo conectado (borne 15) y selección de aire acondicionado en la consola central.

## Equipo y material

Lector de averías / equipo de diagnosis, polímetro y esquemas eléctricos.

## Desarrollo

* **Componentes principales que pueden provocar que el compresor no se active:**
  1. Acoplamiento magnético del compresor N25 (bobina cortada o entrehierro excesivo).
  2. Conmutador de presión F129 / Transmisor de presión electrónico G65 (falta de carga de gas o presostato defectuoso).
  3. Interruptor térmico F38 (abierto por temperatura exterior < 5 ºC o averiado).
  4. Unidad de control del aire acondicionado J293 o fusibles de alimentación del sistema.
* **Pasos para la localización de averías:**
  1. Comprobación visual inicial: verificar la correa de accesorios Poly-V, el conector eléctrico del compresor N25, el estado de los fusibles y posibles fugas de refrigerante.
  2. Interrogar la memoria de averías con el equipo de diagnosis (dirección 08 - Climatización y UCE del motor).
  3. Verificar la presencia de alimentación de +12 V en la bobina del acoplamiento N25 al pulsar la tecla AC.
  4. Si no llega tensión, comprobar la continuidad de los contactos en el conmutador F129/G65 y en el interruptor térmico F38.
  5. Comprobar las masas y tensiones de alimentación en la unidad de control J293.
  6. Sustituir el componente defectuoso y verificar el acoplamiento mecánico del compresor.

## Valores de referencia

| Componente / Parámetro | Valor y Condición |
| :--- | :--- |
| Tensión en bobina N25 al activar AC | 12 V (con motor en marcha tras 10 s y temp. > 5 ºC) |
| Estado del interruptor F38 | Cerrado a temp. > 5 ºC; Abierto a temp. < 5 ºC |

## Interpretación y errores frecuentes

* Reemplazar el compresor sin verificar si la causa es la falta de gas (F129/G65 abierto) o la temperatura ambiente inferior a 5 ºC (F38 abierto).
* Intentar medir la activación del compresor durante los primeros 10 segundos tras arrancar el motor; la UCE de motor inhibe el compresor temporalmente.

## Verificación final

Verificar el acoplamiento del plato frontal sobre la polea del compresor y el descenso de temperatura en los difusores al conectar la tecla AC.

## Imágenes requeridas

- Mando central de climatización con pulsador AC — Fuente: ce2.pdf, pág. 1
