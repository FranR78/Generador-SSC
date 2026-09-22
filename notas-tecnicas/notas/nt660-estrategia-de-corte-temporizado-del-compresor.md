---
id: ssc.sin-clasificar.estrategia-de-corte-temporizado-del-compresor-en-motorizacion-diesel
modulo: ssc
unidad: sin-clasificar
nt: 660
tipo: proceso
subtipo: fundamento
titulo: "Estrategia De Corte Temporizado Del Compresor En Motorización Diésel"
menu: "Estrategia De Corte Temporizado Del Co"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el funcionamiento del circuito de desconexión temporal del compresor al iniciar la marcha en pendiente para optimizar el par del motor diésel y evitar el calado. Aplica a versiones diésel con climatizador manual.

## Fundamento

Liberación temporal de la carga mecánica impuesta por el compresor al motor térmico durante un intervalo de 4 segundos cuando se detecta simultáneamente el pedal de embrague pisado a fondo y una elevada demanda de carga sobre el pedal del acelerador.

## Condiciones previas

Vehículo en fase de arranque en rampa o aceleración fuerte desde parado, con el pedal de embrague pisado a fondo y carga de inyección elevada.

## Desarrollo

1. Al pisar el pedal de embrague a fondo y acelerar, se abre el contacto del pedal de embrague 421 y el contactor 405 en la palanca de carga de la bomba de inyección.
2. Al abrirse el circuito, se corta la alimentación a la bobina del relé.
3. El relé 661 deja de alimentar al relé temporizado.
4. El relé temporizado 635 interrumpe la excitación del relé 584 (relé del embrague del compresor) durante un periodo fijo de 4 segundos.
5. El embrague del compresor 171 se desacopla, permitiendo al motor subiendo de vueltas con mayor facilidad.
6. Transcurridos los 4 segundos, el relé 635 restablece la alimentación al relé 584 y el compresor vuelve a acoplarse.
7. La línea incluye un diodo que impide que la tensión de la unidad de pre-postcalentamiento 257 alimente por retorno el embrague del compresor durante la fase de arranque y calentamiento del motor.

## Valores de referencia

| Componente / Parámetro | Valor y Especificación |
| :--- | :--- |
| Tiempo de corte del compresor por temporizador 635 | 4 segundos tras cumplir condiciones de carga y embrague |
| Contactor en pedal de embrague 421 | En reposo (pie levantado/embragado): normalmente cerrado. No requiere reglaje. |
| Relé temporizado de prohibición de embragado | Componente 635 |
| Relé del embrague del compresor | Componente 584 |

## Interpretación y errores frecuentes

* Intentar regular mecánicamente el contactor 421 del pedal de embrague; no admite reglaje, solo debe comprobarse que está cerrado con el pie levantado.
* Si el compresor se acopla intermitentemente durante la marcha, comprobar si el contactor 405 de la bomba de inyección está mal posicionado o desgastado.

## Verificación final

Verificar con un voltímetro conectado en el relé 584 que la alimentación cae a 0 V durante exactamente 4 segundos al accionar a fondo el pedal de embrague y acelerar.

## Imágenes requeridas

- Esquema del circuito de corte temporizado de A/A en motorización diésel — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 37
- Cableado y relés interconectados en el circuito diésel — Fuente: 6. EL CIRCUITO ELÉCTRICO.pptx, pág. 45
