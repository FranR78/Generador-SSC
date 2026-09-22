---
id: ssc.sin-clasificar.gestion-de-la-alarma-antirrobo-y-busqueda-de-disparos
modulo: ssc
unidad: sin-clasificar
nt: 1198
tipo: proceso
subtipo: diagnostico
titulo: "Gestión De La Alarma Antirrobo Y Búsqueda De Disparos"
menu: "Gestión De La Alarma Antirrobo Y Búsqu"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el funcionamiento, componentes supervisados y procedimiento de consulta de los orígenes de disparo de la alarma antirrobo.

## Fundamento

La UCE J519 monitoriza el sensor G273, los conmutadores de puertas, maletero y capó (F387) y la línea LIN-Bus de la bocina H8/H12. Ante una intrusión, activa la señalización acústica y luminosa.

## Condiciones previas

Alarma antirrobo conectada mediante el mando a distancia o la cerradura.

## Equipo y material

Equipo de diagnosis conectado al puerto de diagnóstico J533.

## Desarrollo

* **Ámbitos de vigilancia del sistema:**
  1. Vigilancia volumétrica del habitáculo (por ultrasonidos con el sensor G273).
  2. Protección contra remolcado (por acelerómetro capacitivo con el sensor G273).
  3. Vigilancia de apertura de puertas, maletero y capó mediante los conmutadores de contacto.
  4. Vigilancia de la bocina H12 mediante mensajes de verificación periódicos a través de la línea LIN-Bus bocina de alarma.
* **Respuesta en caso de disparo:** La UCE J519 activa la bocina de alarma e ilumina los intermitentes delanteros (M5/M7), traseros (M6/M8) y de los retrovisores (L131/L132).

## Valores de referencia

| Elemento Supervisado | Canal / Línea de Comunicación | Acción ante Intrusión o Avería |
| :--- | :--- | :--- |
| **Sensor habitáculo/remolcado G273** | Entrada electrónica a UCE J519 | Disparo por ultrasonidos o cambio de inclinación |
| **Bocina de alarma H12 / H8** | LIN-Bus bocina de alarma | Comprobación periódica por mensajes LIN; disparo acústico |
| **Conmutador capó F387 / puertas** | Conmutador de contacto a masa | Disparo directo por apertura de circuito |

## Interpretación y errores frecuentes

* Sustituir la bocina H12 al pensar que está averiada cuando la causa real es la interrupción de la línea de datos LIN-Bus de la alarma.

## Verificación final

Interrogar la memoria de la UCE J519 con la máquina de diagnosis para leer el histórico con las últimas causas de disparo registradas.

## Seguridad y normativa

Directiva europea sobre dispositivos de protección contra el uso no autorizado de vehículos.

## Imágenes requeridas

- Esquema de conexiones de la alarma antirrobo, sensor G578/G273 y bocina H8 por LIN-Bus — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 44
