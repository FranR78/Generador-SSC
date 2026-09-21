---
id: ssc.sin-clasificar.regulacion-automatica-de-temperatura
modulo: ssc
unidad: clima
nt: 296
tipo: proceso
subtipo: fundamento
titulo: "Regulación Automática De Temperatura"
menu: "Regulación Automática De Temperatura"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Describir la arquitectura de control, sensores, UCE digital y servomotores en un climatizador automático (Climatronic).

## Fundamento

Una unidad de control digital procesa las señales de múltiples sensores térmicos e imprevistos, comparándolas con los valores teóricos programados para calcular el reglaje de los servomotores y la velocidad de la turbina sin intervención del conductor.

## Condiciones previas

Encendido conectado y temperatura teórica seleccionada en el panel de mandos.

## Equipo y material

Equipo de autodiagnóstico OBD.

## Desarrollo

* **Estructura del sistema:**  
  - **Sensores:** G17 (exterior), G89 (canal aspiración), G56 (habitáculo), G192 (reposapiés) y G107 (fotosensor solar).  
  - **Unidad de control digital:** Microprocesador que desparasita entradas, calcula salidas y gestiona la memoria de averías y la marcha en emergencia.  
  - **Actuadores:** Servomotores de las chapaletas del mueble del climatizador.  
  - **Conexión CAN-BUS:** Intercambia datos de velocidad (v), régimen del motor (n) y tiempo en parado (th) con otras UCEs.

## Valores de referencia

| Sensor con fallo de señal | Valor supletorio asignado por la UCE | Modo operativo resultante |
|---|---|---|
| **G17 y G89 (Exteriores)** | **+10 ºC** | Sistema en marcha; bloquea recirculación |
| **G56 (Habitáculo)** | **+24 ºC** | Sistema en marcha con valor medio |
| **G192 (Reposapiés)** | **+8 ºC** | Sistema en marcha |
| **G107 (Fotosensor solar)** | **Valor supletorio fijo** | Asume radiación solar fija |

## Interpretación y errores frecuentes

- Parpadeo de todos los símbolos del display durante unos segundos al dar el contacto: indica la presencia de averías registradas en la memoria de la UCE.

## Verificación final

Lectura y borrado de la memoria de averías mediante la máquina de diagnosis OBD.

## Seguridad y normativa

Función de marcha en emergencia para mantener operativo el desempañado de seguridad.

## Imágenes requeridas

- Cuadro general de sensores y actuadores de un climatizador regulado electrónicamente — Fuente: CLIMATIZADOR MD FRAN.docx, pág. 130-131
