---
id: ssc.sin-clasificar.estructura-descentralizada-de-control-de-clima
modulo: ssc
unidad: sin-clasificar
nt: 820
tipo: proceso
subtipo: fundamento
titulo: "Estructura Descentralizada De Control De Clima"
menu: "Estructura Descentralizada De Control "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica la arquitectura electrónica distribuida y las funciones que asumen las distintas unidades de control que participan en los sistemas de Calefacción Motorizada y Autoclima.

## Fundamento

Estructura descentralizada donde las tareas de regulación térmica, gestión de potencia y comunicación con el usuario se reparten entre varias centralitas conectadas por líneas dedicadas y buses de datos.

## Desarrollo

* **Unidad del equipo de mando electrónico J255:** Asume la regulación de temperatura (modos automático, semiautomático y manual), la iluminación del mando de distribución de aire y el autodiagnóstico del sistema.
* **Unidad del aire acondicionado J293:** Controla la conexión del acoplamiento magnético N25 y gestiona las velocidades de los electroventiladores V7/V35.
* **Radiocasete R:** Actúa como pasarela de comunicación entre la botonera/display E87 y la UCE J255, y controla la luminosidad de la pantalla.
* **Codificación de la UCE J255:** La unidad física J255 es común para Calefacción Motorizada y Autoclima. Si el conector del mazo de cables tiene un puente de masa en el contacto 21, la UCE se codifica automáticamente como Calefacción Motorizada; si no tiene puente, trabaja como Autoclima.

## Valores de referencia

| Elemento / Configuración | Conexión en Contacto 21 de J255 | Programa Ejecutado |
| :--- | :--- | :--- |
| Mazo de Calefacción Motorizada | Con puente a masa en contacto 21 | Programa de Calefacción Motorizada |
| Mazo de Autoclima | Sin puente (contacto 21 libre) | Programa de Autoclima |

## Interpretación y errores frecuentes

* Sustituir la UCE J255 y no verificar la presencia del puente de masa en el contacto 21 del conector al diagnosticar un vehículo con Calefacción Motorizada.

## Verificación final

Comprobar con la función 01 de autodiagnóstico el tipo de equipo identificado por la centralita (Autoclima o Calefacción Motorizada).

## Imágenes requeridas

- Cuadro sinóptico de sensores, unidades de control y actuadores — Fuente: cd.pdf, págs. 10-11
