---
id: ssc.sin-clasificar.apertura-regulacion-y-funcion-easy-open-del-porton-electrico
modulo: ssc
unidad: sin-clasificar
nt: 620
tipo: proceso
subtipo: procedimiento
titulo: "Apertura, Regulación Y Función \"Easy Open\" Del Portón Eléctrico"
menu: "Apertura, Regulación Y Función \"Easy O"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establece los modos de accionamiento, la memorización de la altura de apertura y el funcionamiento de la función manos libres Easy Open. Aplica al uso y ajuste en taller del portón trasero.

## Fundamento

Control coordinado por la UCE del portón entre los sensores capacitivos, la consulta de llave por LIN/CAN-Bus con Keyless Access y la inversión de marcha de los motores al detectar un aumento de intensidad (antiaprisionamiento).

## Condiciones previas

Para la función Easy Open: vehículo parado, borne 15 desconectado y llave autorizada a menos de 1,5 m del portón.

## Desarrollo

* **Modos de Apertura y Cierre:**
  1. Apertura exterior: accionar el mando a distancia o el pulsador de la manilla del portón.
  2. Apertura interior: accionar el pulsador de la consola central.
  3. Cierre: accionar el pulsador interior montado en el propio portón o los mandos anteriores.
* **Memorización de la Regulación de Apertura Máxima:**
  1. Colocar el portón manualmente en la altura deseada.
  2. Mantener presionado el pulsador de cierre del portón durante 3 segundos.
  3. Confirmación: suena un aviso acústico y parpadean los intermitentes.
* **Proceso de Apertura Manos Libres ("Easy Open"):**
  1. Situarse tras el maletero con la llave en el bolsillo (distancia < 1,5 m).
  2. Realizar un movimiento pendular de entrada y salida con el pie debajo del paragolpes trasero.
  3. Los sensores capacitivos 1 y 2 registran el movimiento y envían la señal a la UCE de apertura del portón.
  4. La UCE de apertura consulta por LIN-Bus a la UCE de acceso y arranque para verificar la llave.
  5. Validada la llave, parpadean los intermitentes y la.ª luz de freno, desbloqueándose la cerradura y activándose los motores de elevación.
* **Condiciones de Desactivación de Easy Open:**
  - Se desactiva automáticamente ante lluvia torrencial o lavado a presión (se reactiva a los 90 segundos de cesar la causa).
  - Se puede desactivar manualmente en el menú del Cuadro (Menú CAR / Ajustes / Cierre centralizado / Easy Open).
* **Función Antiaprisionamiento:**
  - Si se detecta un obstáculo cerrando: se frena el portón, suena el zumbador y se abre automáticamente unos 40 cm.
  - Si se detecta un obstáculo abriendo: el portón se frena de inmediato en esa posición.

## Valores de referencia

| Parámetro / Condición | Valor y Especificación |
| :--- | :--- |
| Tiempo de pulsación para memorizar altura de apertura | 3 segundos (hasta confirmación acústica e intermitentes) |
| Retroceso por antiaprisionamiento en cierre | Apertura automática de aproximadamente 40 cm |
| Tiempo de reactivación tras lavado a presión | 90 segundos tras desaparecer la interferencia |
| Distancia de la llave al portón en Easy Open | Menor de 1,5 metros |

## Interpretación y errores frecuentes

* El portón no sube hasta arriba: Se ha memorizado una altura baja por error; se soluciona empujándolo manualmente al tope superior y guardando la posición pulsando 3 s.
* Intentar usar Easy Open con remolque: En vehículos con gancho de remolque, la función Easy Open se deshabilita y la apertura solo se realiza desde la manilla.

## Verificación final

Verificar que el portón invierte el sentido al encontrar resistencia física y que el gesto del pie responde activando los intermitentes antes de iniciar la subida.

## Imágenes requeridas

- Módulo de motores eléctricos con husillo y freno de muelle envolvente — Fuente: 5. Confort.pdf, pág. 109
- Secuencia del gesto pendular con el pie para la función Easy Open — Fuente: 5. Confort.pdf, pág. 112
- Pantalla del menú CAR para activar/desactivar la función Easy Open — Fuente: 5. Confort.pdf, pág. 111
