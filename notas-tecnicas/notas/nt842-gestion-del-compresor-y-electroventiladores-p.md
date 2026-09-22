---
id: ssc.sin-clasificar.gestion-del-compresor-y-electroventiladores-por-la-unidad-j293
modulo: ssc
unidad: sin-clasificar
nt: 842
tipo: proceso
subtipo: fundamento
titulo: "Gestión Del Compresor Y Electroventiladores Por La Unidad J293"
menu: "Gestión Del Compresor Y Electroventila"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica las condiciones eléctricas de seguridad y potencia que procesa la unidad J293 para excitar el acoplamiento magnético del compresor N25 y los electroventiladores V7/V35.

## Fundamento

La unidad de control J293 actúa como etapa final de potencia. Condiciona la conexión del compresor a la existencia de presión de trabajo, temperatura ambiente mínima y ausencia de inhibición por parte de la UCE de motor.

## Desarrollo

* **Requisitos para conectar el acoplamiento magnético N25:**
  1. Recepción de la señal de petición de A/A desde la UCE de clima J255.
  2. La señal debe atravesar el conmutador de presión F129 en posición cerrada (o ser validada por G65 entre 2 y 32 bares).
  3. La señal debe atravesar el interruptor térmico F38 en posición cerrada (temperatura de caja de aguas > 5 ºC).
  4. Ausencia de señal de corte (negativo) procedente de la Unidad de Control del Motor.
* **Activación de electroventiladores V7 y V35:**
  - 1.ª Velocidad: Conectada por J293 al recibir la señal de excitación del compresor desde J255, o directamente por F18 al alcanzar 95 ºC.
  - 2.ª Velocidad: Conectada por J293 cuando la presión en F129/G65 supera los 16 bares o cuando F18 alcanza 105 ºC.

## Valores de referencia

| Función / Componente | Condición de Excitación por J293 |
| :--- | :--- |
| Activación de.ª velocidad de ventiladores | Señal de marcha de compresor A/A o F18 a 95 ºC |
| Activación de.ª velocidad de ventiladores | Presión de circuito en F129/G65 > 16 bares o F18 a 105 ºC |
| Condición térmica de F38 para A/A | Temperatura ambiental > 5 ºC |

## Interpretación y errores frecuentes

* Buscar fallos en el compresor N25 cuando la causa es la apertura del interruptor térmico F38 por trabajar con temperaturas ambiente inferiores a 5 ºC.

## Verificación final

Verificar el arranque de la.ª velocidad de ventiladores de forma simultánea a la excitación de la bobina N25 al pulsar A/A.

## Imágenes requeridas

- Esquema funcional de la unidad de control del aire acondicionado J293 — Fuente: cd.pdf, pág. 29
