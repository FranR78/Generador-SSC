---
id: ssc.sin-clasificar.unidades-de-control-del-tensor-reversible-de-cinturon-j854-y-j855
modulo: ssc
unidad: sin-clasificar
nt: 459
titulo: "Unidades De Control Del Tensor Reversible De Cinturón J854 Y J855"
codigo: "J854 (Lado izquierdo) / J855 (Lado derecho)"
ubicacion: "Montadas junto a los retractores de los cinturones de seguridad delanteros"
aplicacion: "Audi A7 con equipamiento Audi presense basic o Audi presense plus"
menu: "Unidades De Control Del Tensor J854 (Lado izquierdo) / J855 (Lado derecho)"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Accionar por motor eléctrico el tensado preventivo o de seguridad del cinturón de seguridad en tres niveles de fuerza previa señal del bus de datos.

## Principio de funcionamiento

Las unidades J854 y J855 reciben información a través del bus Extended CAN y de la interfaz de diagnosis J533. Al detectarse una situación crítica o colisión leve, alimentan un motor eléctrico interno. El motor mueve un plato de arrastre mediante un engranaje. Dos ganchos basculantes (hooks) se despliegan y conectan el plato de arrastre con el eje del retractor, enrollando el cinturón. Cuando el motor se detiene o invierte ligeramente el sentido de giro, los ganchos se recogen y liberan el eje del retractor.

## Características

Módulo electrónico de control con motor eléctrico integrado, mecanismo de reducción por engranajes, plato de arrastre y dos ganchos mecánicos de acoplamiento.

## Valores de trabajo

| Nivel de fuerza asignado | Función del motor eléctrico |
|---|---|
| **Nivel: Fuerza baja** | Reducción de la holgura del cinturón (belt slack) |
| **Nivel: Fuerza media** | Tensado parcial |
| **Nivel: Fuerza alta** | Tensado total ante colisiones leves detectadas por J234 |

## Imágenes requeridas

- Motor eléctrico, plato de arrastre y ganchos de acoplamiento al eje del retractor — Fuente: SSP 484 A7 Info y Clima (arrastrado).pdf, pág. 16
