---
id: ssc.alarma-antirrobo.ssp-168-sistema-electrico-confort
modulo: ssc
unidad: clima
nt: 512
tipo: proceso
subtipo: fundamento
clase: fundamento
titulo: "Sistema de alarma antirrobo"
menu: "Sistema de alarma antirrobo"
grupo: "Alarma antirrobo"
clave: alarma-antirrobo
area: confort-y-seguridad
sistema: "NUEVO-alarma-antirrobo"
marca: "SEAT"
fuentes: "SSP 168 SISTEMA ELÉCTRICO Confort.pdf, págs. 44"
relacionados: ["unidad-control-red-a-bordo"]
palabras: ["alarma antirrobo", "ultrasonidos", "g273", "acelerometro", "lin-bus", "bocina h12"]
---

## Objeto

Detectar e indicar intentos de intrusión, remolcado no autorizado o apertura de accesos en el vehículo. (pág. 44)

## Fundamento

La UCE de la red de a bordo J519 monitoriza los sensores de habitáculo, inclinación, conmutadores de accesos y la continuidad de la bocina H12 por LIN-Bus. (pág. 44)

## Desarrollo

El sistema integra las siguientes funciones de vigilancia:
- Vigilancia del habitáculo y protección contra remolcado: realizadas mediante el sensor G273. La vigilancia del habitáculo utiliza tecnología de ultrasonidos, mientras que la protección contra remolcado emplea un sensor capacitivo que actúa como acelerómetro de inclinación.
- Vigilancia de aperturas: supervisa el estado de puertas, maletero y capó delantero mediante sus respectivos conmutadores de contacto.
- Vigilancia de la bocina H12: realiza verificaciones continuas por la línea serie LIN-Bus de la bocina de alarma.
- Disparo de alarma: ante cualquier anomalía detectada, la UCE J519 activa cíclicamente la bocina H12 y las lámparas de los intermitentes. (pág. 44)

## Errores de concepto frecuentes

Creer que el sensor de remolcado utiliza un interruptor de mercurio o péndulo físico. Emplea un sensor capacitivo integrado que funciona como acelerómetro para medir variaciones de inclinación. (pág. 44)

## Imágenes requeridas

- Esquema eléctrico de la alarma antirrobo con sensor G273, bocina H8/H12 en LIN-Bus y conexiones a J519 — Fuente: SSP 168 SISTEMA ELÉCTRICO Confort.pdf, pág. 44
