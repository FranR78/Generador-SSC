---
id: ssc.sin-clasificar.ajuste-basico-y-adaptacion-en-la-calefaccion-independiente
modulo: ssc
unidad: sin-clasificar
nt: 151
tipo: proceso
subtipo: procedimiento
titulo: "Ajuste Básico Y Adaptación En La Calefacción Independiente"
menu: "Ajuste Básico Y Adaptación En La Calef"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Establecer las secuencias operativas para restituir las funciones de fábrica, sincronizar los mandos a distancia por radiofrecuencia, realizar el purgado/llenado de la tubería de combustible y desbloquear la UCE [17, 23, 56, 57].

## Fundamento

El ajuste básico fuerza a la UCE a ejecutar rutinas de calibración interna o arranques controlados fuera de la lógica habitual [56, 58]. La función de adaptación permite modificar parámetros almacenados en canales no volátiles de la memoria EEPROM para ajustar el comportamiento del sistema a requerimientos específicos [59, 60].

## Condiciones previas

- Encendido conectado y motor parado [61].  
- Ausencia de códigos de avería registrados en la memoria [61, 62].  
- Batería de servicio cargada y nivel de combustible en depósito por encima de la reserva [50, 63].

## Equipo y material

- Equipo de diagnosis (VAS 5051 / VAS 5052) [61].

## Desarrollo

* **Desbloqueo de la unidad de control (Canal 42):**  
  1. Acceder a la función "12 - Adaptación" [62].  
  2. Seleccionar el canal "42" [23].  
  3. Cambiar el valor de "0" a "1" y guardar en memoria [23]. El valor retorna automáticamente a "0" y el bloqueo queda anulado [23].  
* **Autoadaptación del mando a distancia R64 (Ajuste Básico 004):**  
  1. Acceder a "06 - Ajuste básico" e introducir el grupo "004" [17, 56].  
  2. En pantalla se muestra la indicación 'Autoadaptación' [56].  
  3. Mantener pulsada la tecla "OFF" del radiotelemando durante al menos 3 segundos [56, 64].  
  4. Verificar la indicación 'Autoadaptado' en el display [56].  
* **Llenado de la tubería de combustible (Ajuste Básico 066):**  
  1. En el canal de adaptación "30", introducir el tiempo deseado en segundos (ej. 30 s) [65, 66].  
  2. En el canal de adaptación "36", escribir el valor "1" para autorizar el proceso [23, 67].  
  3. Seleccionar "Ajuste básico", grupo "066" y pulsar 'Activar' [57, 68, 69]. La bomba dosificadora -V54- trabajará de forma continua a 8 Hz durante el tiempo programado [44, 69].

## Valores de referencia

| Función / Canal | Valor de ajuste | Resultado esperado |
|---|---|---|
| Canal de adaptación 03 | 0 o 1 | 0 = Funciona tras "borne 15 OFF"; 1 = Desconecta al parar motor [70] |
| Canal de adaptación 30 | 3 a 240 segundos | Tiempo programado para la bomba dosificadora -V54- [66, 71] |
| Canal de adaptación 36 | 1 | Anulación del bloqueo de primer llenado [23, 68] |
| Canal de adaptación 42 | 1 | Anulación del bloqueo de la UCE -J364- [23] |

## Interpretación y errores frecuentes

- Aparece "Función desconocida o no se puede ejecutar": El calefactor se encuentra en fase de ciclo de post-marcha, existe un nivel de combustible en reserva o persiste un fallo en memoria [58].  
- No reejecutar el llenado excesivas veces: inyectar combustible masivo en la cámara de combustión sin encendido genera emisiones de humo denso y fallos en arranques posteriores [11, 65].

## Verificación final

Confirmar la indicación "Fin" o "Autoadaptado" en la pantalla del equipo de diagnosis y consultar la memoria de averías [56, 72, 73].
