---
id: ssc.sin-clasificar.funcionalidades-y-normalizacion-del-techo-panoramico
modulo: ssc
unidad: sin-clasificar
nt: 1204
tipo: proceso
subtipo: procedimiento
titulo: "Funcionalidades Y Normalización Del Techo Panorámico"
menu: "Funcionalidades Y Normalización Del Te"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el procedimiento de normalización, apertura de confort y la estrategia de reintento del antiaprisionamiento del techo panorámico.

## Fundamento

La UCE J245 exige memorizar los topes de cierre mediante el proceso de normalización para habilitar el antiaprisionamiento y la apertura/cierre de confort.

## Condiciones previas

Contacto encendido (+15) y guías del techo libres de obstrucciones.

## Desarrollo

1. **Apertura y cierre manual:** Se efectúa desde el conmutador E8.
2. **Procedimiento de Normalización:**
   * Cerrar por completo el techo panorámico accionando E8.
   * Soltar el conmutador E8 y volver a **mantenerlo accionado en posición de cierre**. La UCE memoriza el tope de cierre.
   * La normalización debe estar activa para habilitar el confort y el antiaprisionamiento.
3. **Apertura y cierre de confort:** Ejecutado por la UCE J245 al recibir la señal enviada por la UCE J519 vía CAN-Bus, actuando conjuntamente con los elevalunas.
4. **Antiaprisionamiento:** Si detecta un obstáculo al cerrar, invierte la marcha e inicie la apertura inmediata.
5. **Estrategia de reintento forzado:** Si tras activarse el antiaprisionamiento se vuelve a accionar el cierre en los **siguientes 5 segundos**, el techo se cierra **sin la función antiaprisionamiento** para superar resistencias duras (ejemplo: presencia de hielo en las guías).

## Valores de referencia

| Función del Techo Panorámico | Condición de Ejecución / Tiempo | Comportamiento del Sistema |
| :--- | :--- | :--- |
| **Normalización** | Techo cerrado + mantener conmutador E8 en posición de cierre | Memorización de topes; habilita confort y antiaprisionamiento |
| **Reintento sin antiaprisionamiento** | Accionar el cierre en los **siguientes 5 s** tras un salto | Cierre forzado del techo sin función antiaprisionamiento |

## Interpretación y errores frecuentes

* Intentar cerrar un techo helado y que se abra solo por antiaprisionamiento; para forzar el cierre hay que accionar el conmutador antes de transcurridos 5 segundos.

## Verificación final

Verificar el cierre y apertura automática del techo al mantener pulsado el mando a distancia del vehículo.

## Seguridad y normativa

Sistema de protección antiaprisionamiento para prevención de atrapamientos.

## Imágenes requeridas

- Esquema del circuito eléctrico del techo corredizo J245, motor V1 y conmutador E8 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 52-53
