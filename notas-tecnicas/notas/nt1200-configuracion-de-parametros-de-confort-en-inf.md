---
id: ssc.sin-clasificar.configuracion-de-parametros-de-confort-en-infotenimiento
modulo: ssc
unidad: sin-clasificar
nt: 1200
tipo: proceso
subtipo: procedimiento
titulo: "Configuración De Parámetros De Confort En Infotenimiento"
menu: "Configuración De Parámetros De Confort"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el procedimiento de personalización de las funciones de la UCE J519 desde el menú del equipo de infotenimiento (EASY CONNECT / modo Vehículo).

## Fundamento

La pantalla táctil permite al usuario ajustar parámetros de confort que la unidad de infotenimiento transmite vía CAN-Bus hacia la UCE de la red de a bordo J519.

## Condiciones previas

Encendido conectado y vehículo detenido.

## Equipo y material

Sistema de infotenimiento Easy Connect.

## Desarrollo

1. Entrar en la pantalla de infotenimiento, seleccionar el modo *Vehículo* y acceder a *Ajustes del vehículo (Vehicle settings)*.
2. **Menú Luces:** Configurar la luz de autopista, luz de lluvia automática, intermitentes de confort y ajustar los tiempos de las funciones Coming Home y Leaving Home (**10 segundos** de selección estándar).
3. **Menú Iluminación interior:** Ajustar la intensidad de la luz ambiental por zonas y seleccionar el color de la iluminación de las puertas.
4. **Menú Retrovisores y limpiaparabrisas:** Activar/desactivar el plegado al aparcar, limpiado automático con lluvia y barrido del limpialuneta al insertar la marcha atrás.
5. **Menú Apertura y cierre:**
   * Apertura de confort de elevalunas: Configurable en tres modos (*Todas las puertas*, *Puerta del conductor* o *Desactivado*).
   * Desbloqueo de puertas: Configurable en tres modos (*Todas las puertas*, *Sólo la puerta del conductor* o *Lado del vehículo*).
   * Activar o desactivar el bloqueo automático por velocidad.

## Valores de referencia

| Menú de Configuración | Opciones Seleccionables en Pantalla |
| :--- | :--- |
| **Tiempos Coming/Leaving Home** | Selección de tiempo (ejemplo en pantalla: 10 s) |
| **Apertura de confort elevalunas** | Modos: Todas las puertas / Puerta del conductor / Desactivado |
| **Desbloqueo de puertas** | Modos: Todas las puertas / Sólo puerta del conductor / Lado del vehículo |

## Interpretación y errores frecuentes

* Reclamar que no se abren las puertas traseras con el mando a distancia; se debe a una configuración seleccionada en el menú "Apertura y cierre" (opción "Sólo puerta del conductor").

## Verificación final

Comprobar que el comportamiento de las cerraduras o elevalunas se modifica al cambiar la opción en la pantalla del Easy Connect.

## Imágenes requeridas

- Pantallas del menú de ajustes del modo Vehículo para luces, retrovisores y cierre — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 46-47
