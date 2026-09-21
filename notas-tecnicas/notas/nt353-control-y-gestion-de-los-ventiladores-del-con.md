---
id: ssc.sin-clasificar.control-y-gestion-de-los-ventiladores-del-condensador
modulo: ssc
unidad: sin-clasificar
nt: 353
tipo: proceso
subtipo: fundamento
titulo: "Control Y Gestión De Los Ventiladores Del Condensador"
menu: "Control Y Gestión De Los Ventiladores "
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Objeto y alcance

Explicar la lógica de gobierno de la Unidad Electrónica de Gestión del Ventilador (UEGV) para evacuar calor del condensador y del radiador del motor.

## Fundamento

El condensador requiere una corriente forzada de aire para licuar el refrigerante. La UEGV gestiona los electroventiladores combinando la información de la temperatura del líquido refrigerante y la presión del circuito frigorífico.

## Condiciones previas

Motor en marcha y sistema de aire acondicionado activado o desconectado.

## Equipo y material

Unidad Electrónica de Gestión del Ventilador (UEGV).

## Desarrollo

- **Disposiciones:** Un ventilador con 2 escalones de velocidad o dos ventiladores con 2 escalones.  
- **Secuencia de funcionamiento:**  
  1. *A/C Desconectado:* Los ventiladores funcionan en escalón 1 o 2 solo por temperatura del motor.  
  2. *A/C Conectado y Presión > 2 bar:* Los ventiladores se ponen en marcha inmediatamente en **Escalón 1 (baja velocidad)**.  
  3. *Presión > 16 bar o Temp. Agua > 100 ºC:* La UEGV conmuta al **Escalón 2 (alta velocidad)**.  
  4. *Presión < 16 bar y Temp. Agua < 100 ºC:* La UEGV retorna al **Escalón 1**.

## Valores de referencia

| Condición de mando | Umbral de disparo | Escalón de velocidad activo |
|---|---|---|
| **A/C Activado y Presión HP** | **> 2 bar (0,2 MPa)** | **Escalón 1 (Baja velocidad)** |
| **Presión HP excesiva** | **> 16 bar (1,6 MPa)** | **Escalón 2 (Alta velocidad)** |
| **Temperatura del refrigerante motor** | **> 100 ºC** | **Escalón 2 (Alta velocidad)** |
| **Retorno a baja velocidad** | **< 16 bar y < 100 ºC** | Retorna al **Escalón 1** |

## Interpretación y errores frecuentes

- Si no arranca el Escalón 1 al conectar el A/C con presión > 2 bar: la presión de alta subirá rápidamente hasta provocar el corte por sobrepresión.

## Verificación final

Verificar el giro en baja velocidad al pulsar la tecla de A/C.

## Imágenes requeridas

- Conexión de la UEGV y secuencias de activación de los ventiladores — Fuente: LA CLIMATIZACIÓN.pdf, pág. 102 y 103
