---
id: ssc.sin-clasificar.estrategias-de-intervencion-de-la-unidad-de-control-del-motor-en-el-climatizador
modulo: ssc
unidad: sin-clasificar
nt: 829
tipo: proceso
subtipo: fundamento
titulo: "Estrategias De Intervención De La Unidad De Control Del Motor En El Climatizador"
menu: "Estrategias De Intervención De La Unid"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica los criterios de inhibición temporal o corte del compresor gestionados por la UCE del motor para garantizar las prestaciones y la seguridad del motor térmico.

## Fundamento

La UCE del motor envía una señal de masa (negativo) a la unidad del aire acondicionado J293 para desactivar el acoplamiento N25 cuando el motor requiere entregar su máxima potencia o restablecer la estabilidad del ralentí.

## Desarrollo

* **Condiciones de inhibición del compresor por la UCE de motor (envío de señal de masa a J293):**
  1. Ausencia de señal de revoluciones (motor parado o calado).
  2. Durante los primeros 10 segundos transcurridos tras el arranque del motor térmico.
  3. Solicitud de plena carga (acelerador pisado a fondo) a altas velocidades.
  4. Activación del interruptor Kick-down en vehículos equipados con cambio automático.
* **Ajuste de régimen:** La UCE del motor eleva automáticamente el régimen de ralentí al recibir la señal de activación de A/A para compensar el par consumido por el compresor.

## Valores de referencia

| Estrategia de la UCE de Motor | Condición de Ejecución |
| :--- | :--- |
| Temporización de corte tras arranque | Compresor inhibido durante los primeros 10 segundos |
| Tipo de señal de desacoplo enviada a J293 | Señal de masa (negativo) |

## Interpretación y errores frecuentes

* Interpretar como fallo del A/A que el compresor tarde 10 segundos en acoplar tras arrancar el motor; se trata de una estrategia programada de la UCE de motor.

## Verificación final

Verificar el acoplamiento del compresor transcurridos los 10 segundos iniciales tras la puesta en marcha.
