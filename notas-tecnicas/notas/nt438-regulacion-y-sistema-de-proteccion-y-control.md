---
id: ssc.sin-clasificar.regulacion-y-sistema-de-proteccion-y-control-del-circuito
modulo: ssc
unidad: clima
nt: 438
tipo: proceso
subtipo: fundamento
titulo: "Regulación Y Sistema De Protección Y Control Del Circuito"
menu: "Regulación Y Sistema De Protección Y C"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la arquitectura de control y dispositivos de seguridad que vigilan las presiones y temperaturas para proteger el circuito y el motor.

## Fundamento

Si falla un componente del circuito, las presiones se alteran, pudiendo destruir el compresor o sobrecalentar el motor. La UCE procesa las señales de los presostatos, termosensores y conmutadores para conectar/desconectar el acoplamiento electromagnético y gestionar la velocidad del electroventilador.

## Condiciones previas

Encendido conectado y motor en marcha.

## Desarrollo

- La unidad de control (ej. J301) o la UCE de motor (J257) recibe la solicitud del conmutador E35.  
- El sensor de temperatura exterior bloquea el sistema si la temperatura es < 5 ºC (o ~3 ºC).  
- Al activar el A/C, la UCE eleva el régimen de ralentí del motor para compensar la carga mecánica.  
- Si la presión o temperatura se salen de los límites, se interrumpe la masa o el positivo del relé J32, desacoplando el acoplamiento N25.

## Valores de referencia

| Dispositivo / Condición | Valor de disparo / Límite |
|---|---|
| **Bloqueo por temperatura exterior** | **< 5 ºC (aprox. 3 ºC)** |
| **Apertura de válvula de descarga** | **3,8 MPa (38 bar)** (Re-cierra a 3,0-3,5 MPa / 30-35 bar) |
| **Desconexión por hielo G153** | **-1 ºC a 0 ºC** (Reconexión a +3 ºC) |

## Interpretación y errores frecuentes

- Si la válvula de sobrepresión se dispara y rompe su disco plástico, no basta con reponer gas: se debe investigar la causa de la sobrepresión (ej. electroventilador parado o condensador sucio).

## Verificación final

Comprobar en la máquina de diagnosis que no existen códigos de avería registrados en la memoria.

## Imágenes requeridas

- Esquema eléctrico general de interconexión entre la UCE, relés, presostato F129, relé J32 y embrague N25 — Fuente: MANUAL CLIMATIZACION 2010 HELLA  EN WORD.pdf, pág. 40
