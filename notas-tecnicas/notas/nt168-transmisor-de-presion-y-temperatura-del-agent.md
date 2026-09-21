---
id: ssc.sin-clasificar.transmisor-de-presion-y-temperatura-del-agente-frigorifico
modulo: ssc
unidad: clima
nt: 168
titulo: "Transmisor De Presión Y Temperatura Del Agente Frigorífico"
codigo: "G395"
ubicacion: "Enroscado en la tubería de alta presión, junto al condensador en el vano motor frontal"
aplicacion: "Medición de alta presión en el circuito frigorífico del Audi A5 Coupé 2008"
menu: "Transmisor De Presión Y Temper G395"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Medir de forma continua la presión del refrigerante R134a e informar a la UCE de red de a bordo -J519- y a -J255- para autorizar el funcionamiento del compresor y regular los electroventiladores.

## Principio de funcionamiento

Sensor piezoeléctrico con microprocesador interno. Convierte la presión hidráulica ejercida por el gas en una señal digital multiplexada transmitida por el bus de datos LIN-Bus a la UCE -J519-. La UCE -J519- retransmite la información vía CAN-Bus hacia -J255-. *(Nota: Sustituye al antiguo sensor de alta presión G65 de señal cuadrada y no es intercambiable con él)*.

## Características

- Carcasa de plástico de color **GRIS** con conector de 3 vías (Pin: Masa; Pin: Señal LIN a J519; Pin: +12V Borne 75).  
- Rosca provista de válvula de retención primaria que permite sustituir el sensor sin vaciar el refrigerante R134a.

## Valores de trabajo

| Parámetro / Condición | Valor numérico | Estado del sistema |
|---|---|---|
| **Tensión de alimentación** | 12 V (Borne 75) | Encendido conectado |
| **Umbral de presión mínima de conexión** | > 1,8 bar (presión absoluta) | Habilita la excitación del compresor N280 |
| **Umbral de activación de electroventiladores V7** | > 9,0 bar | Conecta velocidad forzada de condensación |
| **Umbral de presión máxima de desconexión** | > 32,0 bar | Desconecta el compresor por sobrepresión |
| **Lectura en avería / conector desacoplado** | > 40,0 bar (valor fijo sustitutivo) | Bloquea el compresor e inscribe DTC |

## Anomalías frecuentes

Interrupción de la línea de datos LIN (pin 2) hacia J519; sulfatación de contactos por entrada de agua; o montaje erróneo de un sensor G65 (carcasa negra).

## Comportamiento en avería

La UCE -J255- desactiva inmediatamente la excitación de la válvula -N280- (corriente cae a 0 A), deteniendo la compresión, e inscribe el código de avería en -J255- y -J519- mientras activa los electroventiladores a máxima velocidad por seguridad.

## Cómo comprobarlo

Verificar con polímetro en el conector de 3 vías: Pin 3 = 12 V; Pin 1 = Continuidad a masa. Leer la presión indicada en el grupo de medición 001 campo 4 o grupo 056 campo 1 en J255 (debe coincidir con la lectura de los manómetros de taller). Par de apriete al sustituir: 8 Nm (reemplazar junta tórica violeta/roja).
