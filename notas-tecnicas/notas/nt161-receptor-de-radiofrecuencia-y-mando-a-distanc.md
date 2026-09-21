---
id: ssc.sin-clasificar.receptor-de-radiofrecuencia-y-mando-a-distancia
modulo: ssc
unidad: sin-clasificar
nt: 161
titulo: "Receptor De Radiofrecuencia Y Mando A Distancia"
codigo: "R64"
ubicacion: "Receptor -R64- montado en el maletero, parte derecha bajo el guarnecido lateral; Mando a distancia portátil [123-125]"
aplicacion: "Activación y desactivación remota por radiofrecuencia de la calefacción/ventilación independiente [123, 124]"
menu: "Receptor De Radiofrecuencia Y  R64"
grupo: POR CLASIFICAR
fuentes: POR COMPLETAR
---

## Misión

Permitir al usuario encender o apagar la calefacción/ventilación independiente a distancia y recibir confirmación óptica del estado operativo [124, 126, 127].

## Principio de funcionamiento

El mando portátil emite una señal codificada por radiofrecuencia de alta frecuencia. El receptor -R64- procesa la orden, la transmite a la UCE -J364- mediante el bus de datos y devuelve un impulso de confirmación al mando que hace parpadear su LED de control [126-128].

## Características

- **Mando a distancia:** Provisto de tecla ON, tecla OFF y testigo LED multicolor [64].  
- **Batería del mando:** 1 pila de botón de litio tipo CR2430 (3V, 280 mAh) [129].  
- **Receptor R64:** Módulo electrónico conectado a la antena del techo del vehículo y al bus de datos [39, 130].

## Valores de trabajo

- Alcance máximo de emisión en campo libre: aprox. 600 metros [64].  
- Consumo del receptor R64 en reposo: < 1 mA (modo normal) / 0,04 mA (modo ahorro de energía) [131, 132].  
- Tiempo de pulsación requerido en mando: mínimo 3 segundos [64, 124].

## Anomalías frecuentes

Agotamiento de la pila de litio CR2430, pérdida de sincronización de la clave o apantallamiento de la señal por obstáculos [64, 129, 133].

## Comportamiento en avería

- Si no hay comunicación con el vehículo: El testigo LED del mando parpadea en color rojo a 4 Hz (4 veces por segundo) durante 10 segundos [134].  
- Si la pila está agotada: El LED de control no se enciende al pulsar las teclas [126].

## Cómo comprobarlo

Pulsar la tecla ON durante 3 segundos: el LED debe encenderse en verde 2 segundos y luego parpadear 30 veces a 1 Hz en verde (confirmación de encendido) [64, 126]. Si falla, ejecutar la autoadaptación del mando mediante el grupo de ajuste básico "004" [56, 135].
