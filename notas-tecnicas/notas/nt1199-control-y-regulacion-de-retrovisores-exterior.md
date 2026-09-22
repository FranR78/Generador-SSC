---
id: ssc.sin-clasificar.control-y-regulacion-de-retrovisores-exteriores
modulo: ssc
unidad: sin-clasificar
nt: 1199
tipo: proceso
subtipo: fundamento
titulo: "Control Y Regulación De Retrovisores Exteriores"
menu: "Control Y Regulación De Retrovisores E"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describe las diferencias de control, calefacción, regulación y abatimiento de los espejos retrovisores exteriores según la versión de las UCEs de puerta.

## Fundamento

La calefacción del cristal se activa en paralelo con la luneta térmica. La regulación y el plegado dependen de si el vehículo equipa unidades de control de puerta en versión "Min" o "Max".

## Condiciones previas

Contacto encendido (+15) o luneta térmica accionada.

## Desarrollo

* **Calefacción de espejos:** Se conecta de forma conjunta con la luneta térmica Z1 y es alimentada directamente por la UCE de la red de a bordo J519 mediante positivo y masa.
* **Regulación eléctrica:**
  * **Con UCEs de puerta versión "Min":** Los motores de regulación de los espejos se alimentan directamente desde el conmutador de regulación E43.
  * **Con UCEs de puerta versión "Max":** Los motores de regulación son alimentados y gestionados electrónicamente por las unidades de control de las puertas delanteras J386 y J387.
* **Plegado eléctrico:** Disponible únicamente si el vehículo equipa la versión "Max" de las unidades de control de las puertas.

## Valores de referencia

| Función del Retrovisor | Versión UCE de Puertas | Alimentación / Gobierno del Sistema |
| :--- | :--- | :--- |
| **Calefacción de espejo** | Versiones "Min" y "Max" | Alimentación desde UCE J519 junto con luneta Z1 |
| **Regulación eléctrica** | Versión "Min" | Alimentación directa desde conmutador E43 |
| **Regulación eléctrica** | Versión "Max" | Gobernado por UCEs de puerta J386 / J387 |
| **Plegado eléctrico** | Versión "Max" | Función exclusiva de la versión "Max" |

## Interpretación y errores frecuentes

* Intentar codificar el plegado automático en un vehículo con UCEs de puerta "Min"; requiere la sustitución de las UCEs de puerta por la versión "Max".

## Verificación final

Verificar el calentamiento de los cristales de los retrovisores al conectar el mando de la luneta térmica.

## Seguridad y normativa

Reglamento de homologación de retrovisores para visibilidad posterior.

## Imágenes requeridas

- Esquema eléctrico de retrovisores exteriores VX4/VX5, conmutador E43 y UCEs J386/J387 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 45
