---
id: ssc.sin-clasificar.diagnostico-y-consulta-de-la-memoria-de-averias-del-climatizador
modulo: ssc
unidad: sin-clasificar
nt: 767
tipo: proceso
subtipo: diagnostico
titulo: "Diagnóstico Y Consulta De La Memoria De Averías Del Climatizador"
menu: "Diagnóstico Y Consulta De La Memoria D"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explica el procedimiento de autodiagnóstico, lectura y borrado de la memoria de averías registradas en la unidad de mandos del aire acondicionado J301 mediante el lector VAG 1551. Se aplica a la localización de averías eléctricas y electrónicas en el SEAT Ibiza III (motor ASY) equipado con climatizador Climatic.

## Fundamento

La unidad de control J301 monitoriza continuamente las señales de sensores, actuadores, líneas de alimentación y buses de comunicación. Las anomalías se graban en la memoria interna mediante códigos de 5 dígitos (permanentes o esporádicas marcadas con /SP) y se conservan hasta su borrado manual.

## Condiciones previas

Contacto del vehículo encendido (linea de corriente del borne 15 activa) y tensión de batería estable.

## Equipo y material

Lector de averías / equipo de diagnosis VAG 1551 (o equivalente) y esquema eléctrico de localización de averías del vehículo.

## Desarrollo

1. Conectar el lector VAG 1551 al conector de diagnosis del vehículo y acceder a la función de autodiagnóstico de la unidad de aire acondicionado J301.
2. Consultar el contenido de la memoria de averías (función 02) e identificar los códigos numéricos mostrados en el display.
3. Discernir si la avería es esporádica (indicada con /SP en la pantalla). En averías esporádicas, comprobar prioritariamente la existencia de contactos movedizos o falsos contactos en los conectores de los componentes afectados.
4. Si la memoria indica componentes defectuosos, medir la continuidad e interrupción de los cables hacia los componentes y verificar la ausencia de cortocircuitos a positivo o masa según el esquema eléctrico.
5. Antes de sustituir cualquier componente o la propia unidad J301, verificar el estado de los terminales de los conectores, la alimentación de tensión (borne 15) y las conexiones a masa.
6. Si al desconectar el encendido la unidad J301 se mantiene en funcionamiento, comprobar la conexión cableada de la unidad de mandos.
7. Tras reparar el defecto físico o eléctrico, borrar la memoria de averías y ejecutar la configuración básica (función 04) si se ha sustituido la unidad J301, el motor V68 o el motor V154.

## Valores de referencia

| Código de Avería | Componente / Circuito Afectado | Condición de Anomaly / Texto en VAG 1551 |
| :--- | :--- | :--- |
| **00538** | Tensión de referencia | Señal demasiado alta (cortocircuito/interrupción) o demasiado baja (V68, V154 o J301 defectuosos) |
| **00576** | Borne 15 | Señal excesiva (> 15 V / alternador), insuficiente (< 9,5 V / batería) o cortocircuito a masa |
| **00705** | Relé del ventilador nivel 1 J279 (en J293) | Cortocircuito a positivo o interrupción / cortocircuito a masa |
| **00706** | Relé del ventilador nivel 2 J513 (en J293) | Cortocircuito a positivo o interrupción / cortocircuito a masa |
| **00796** | Turbina de aire para termosensor V42 | Bloqueada o sin tensión /SP |
| **00819** | Transmisor de alta presión G65 | Cortocircuito a positivo/masa, señal alta/baja o fallo en circuito frigorífico |
| **00898** | Activación del compresor de A/C (N280) | Cortocircuito a masa, interrupción o cortocircuito a positivo |
| **01233** | Válvula de cierre para refrigerante N279 | Cortocircuito a positivo o interrupción / cortocircuito a masa |
| **01271** | Motor regulador de trampilla de temp. V68 | Corto a positivo/masa, bloqueo, fuera de límites o no ajustado |
| **01273** | Turbina de aire fresco V2 | Diferencia de regulación, bloqueo, tensión < 9,5 V o > 15 V (cargador inadecuado) |
| **01296** | Transmisor temp. difusor central G191 | Interrupción / cortocircuito a positivo o cortocircuito a masa |
| **01297** | Transmisor temp. difusor reposapiés G192 | Interrupción / cortocircuito a positivo o cortocircuito a masa |
| **01299** | Interfaz de diagnóstico bus datos J533 | Sin comunicación / consultar memoria de fallos del Gateway (J519) |
| **01314** | Unidad de control del motor | Consultar la memoria de fallos de la unidad del motor |
| **01317** | Cuadro de instrumentos J285 | Señal no plausible / consultar memoria del cuadro de instrumentos |
| **01596** | Motor trampilla aire fresco/recirculación V154 | Corto a positivo/masa, bloqueo, fuera de límites o no ajustado |
| **65535** | Unidad de control defectuosa | Ficha electrónica de J301 defectuosa |

## Interpretación y errores frecuentes

* Sustituir componentes sin comprobar previamente la continuidad del cableado y el estado de los conectores; un conector movedizo genera códigos /SP repetidos.
* La avería 01273 por tensión superior a 15 V puede ser causada por el uso de un equipo inadecuado para cargar la batería del vehículo.
* No realizar la configuración básica (función 04) tras sustituir J301, V68 o V154; impedirá el aprendizaje de los límites de ajuste.

## Verificación final

Consultar nuevamente la memoria de averías tras borrar los códigos y verificar que no queda ninguna avería grabada en el sistema.
